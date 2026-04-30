"use strict";
n.d(t, { $: () => c, E: () => u }), n(321073);
var i = n(636537),
    r = n(228366),
    s = n(174459),
    a = n(927813),
    o = n(403362),
    l = n(652215);
async function u(e, t) {
    let n,
        u = performance.now(),
        c = 0,
        d = [];
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
            c >= 3
                ? (d.push(1002),
                  h({ error: !0 }),
                  r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }))
                : (await new Promise((e) => setTimeout(e, t)), f()),
        f = () =>
            i.Bo.get({
                url: n,
                retries: 3 - c - 1,
                signal: t.signal,
                onRequestCreated: () => c++,
                rejectWithError: !1,
            }).then(
                (t) =>
                    202 === t.status
                        ? (d.push(202), _(5e3))
                        : (h({ error: !1 }),
                          r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: e, index: t.body })),
                (n) => {
                    if (t.signal.aborted) {
                        d.push(1001), h({ error: !0 });
                        return;
                    }
                    return 429 === n.status
                        ? (d.push(429), _(n.body.retry_after * a.A.Millis.SECOND))
                        : (d.push(n.status ?? 1e3),
                          h({ error: !0 }),
                          r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }));
                },
            ),
        h = (i) => {
            let { error: r } = i,
                a = performance.now() - u;
            s.default.track(l.HAw.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: a,
                error: r,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(c - 1, 0),
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
                failure_statuses: d,
            });
        };
    await f();
}
function c(e) {
    r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target: e });
}
