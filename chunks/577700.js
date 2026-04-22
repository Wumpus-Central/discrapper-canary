"use strict";
n.d(t, { $: () => d, E: () => u }), n(321073);
var r = n(562465),
    i = n(73153),
    s = n(954571),
    a = n(927813),
    o = n(403362),
    l = n(652215);
async function u(e, t) {
    let n,
        u = performance.now(),
        d = 0,
        c = [];
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
    let _ = async (t) =>
            d >= 3
                ? (c.push(1002),
                  E({ error: !0 }),
                  i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }))
                : (await new Promise((e) => setTimeout(e, t)), f()),
        f = () =>
            r.Bo.get({
                url: n,
                retries: 3 - d - 1,
                signal: t.signal,
                onRequestCreated: () => d++,
                rejectWithError: !1,
            }).then(
                (t) =>
                    202 === t.status
                        ? (c.push(202), _(5e3))
                        : (E({ error: !1 }),
                          i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: e, index: t.body })),
                (n) => {
                    if (t.signal.aborted) {
                        c.push(1001), E({ error: !0 });
                        return;
                    }
                    return 429 === n.status
                        ? (c.push(429), _(n.body.retry_after * a.A.Millis.SECOND))
                        : (c.push(n.status ?? 1e3),
                          E({ error: !0 }),
                          i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }));
                },
            ),
        E = (r) => {
            let { error: i } = r,
                a = performance.now() - u;
            s.default.track(l.HAw.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: a,
                error: i,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(d - 1, 0),
                kind: null,
                command_type: null,
                url: n,
                target_type: e.type,
                target_id: (function (e) {
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
                })(e),
                failure_statuses: c,
            });
        };
    await f();
}
function d(e) {
    i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target: e });
}
