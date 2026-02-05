"use strict";
n.d(t, { $: () => m, E: () => p }), n(321073);
var r = n(562465),
    i = n(73153),
    a = n(954571),
    s = n(927813),
    o = n(403362),
    l = n(652215);
let u = 5e3,
    c = 3,
    d = 1e3,
    _ = 1001,
    f = 1002;
async function p(e, t) {
    let n,
        o = performance.now(),
        p = 0,
        m = [];
    switch (e.type) {
        case "channel":
            n = l.Rsh.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case "guild":
            n = l.Rsh.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case "user":
            n = l.Rsh.APPLICATION_COMMAND_INDEX_USER;
            break;
        case "application":
            n = l.Rsh.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let g = async (t) =>
            p >= c
                ? (m.push(f),
                  A({ error: !0 }),
                  i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }))
                : (await new Promise((e) => setTimeout(e, t)), E()),
        E = () =>
            r.Bo.get({
                url: n,
                retries: c - p - 1,
                signal: t.signal,
                onRequestCreated: () => p++,
                rejectWithError: !1,
            }).then(
                (t) =>
                    202 === t.status
                        ? (m.push(202), g(u))
                        : (A({ error: !1 }),
                          i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: e, index: t.body })),
                (n) => {
                    if (t.signal.aborted) {
                        m.push(_), A({ error: !0 });
                        return;
                    }
                    return 429 === n.status
                        ? (m.push(429), g(n.body.retry_after * s.A.Millis.SECOND))
                        : (m.push(n.status ?? d),
                          A({ error: !0 }),
                          i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }));
                },
            ),
        A = (r) => {
            let { error: i } = r,
                s = performance.now() - o;
            a.default.track(l.HAw.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: s,
                error: i,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(p - 1, 0),
                kind: null,
                command_type: null,
                url: n,
                target_type: e.type,
                target_id: h(e),
                failure_statuses: m,
            });
        };
    await E();
}
function h(e) {
    switch (e.type) {
        case "channel":
            return e.channelId;
        case "guild":
            return e.guildId;
        case "user":
            return null;
        case "application":
            return e.applicationId;
        default:
            (0, o.xb)(e);
    }
}
function m(e) {
    i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target: e });
}
