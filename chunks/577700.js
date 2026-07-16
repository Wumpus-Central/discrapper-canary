"use strict";
n.d(t, { $: () => c, E: () => d }), n(321073);
var i = n(636537),
    r = n(228366),
    a = n(174459),
    s = n(927813),
    l = n(403362),
    o = n(652215);
async function d(e, t) {
    let n,
        d = performance.now(),
        c = 0,
        u = [];
    switch (e.type) {
        case "channel":
            n = o.Rsh.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case "guild":
            n = o.Rsh.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case "user":
            n = o.Rsh.APPLICATION_COMMAND_INDEX_USER;
            break;
        case "application":
            n = o.Rsh.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    async function _(t) {
        return c >= 3
            ? (u.push(1002),
              A({ error: !0 }),
              r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }))
            : (await new Promise((e) => setTimeout(e, t)), E());
    }
    let E = () =>
        i.Bo.get({
            url: n,
            retries: 3 - c - 1,
            signal: t.signal,
            onRequestCreated: () => c++,
            rejectWithError: !1,
        }).then(
            (t) =>
                202 === t.status
                    ? (u.push(202), _(5e3))
                    : (A({ error: !1 }),
                      r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: e, index: t.body })),
            (n) => {
                if (t.signal.aborted) {
                    u.push(1001), A({ error: !0 });
                    return;
                }
                return 429 === n.status
                    ? (u.push(429), _(n.body.retry_after * s.A.Millis.SECOND))
                    : (u.push(n.status ?? 1e3),
                      A({ error: !0 }),
                      r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }));
            },
        );
    function A(i) {
        let { error: r } = i,
            s = performance.now() - d;
        a.default.track(o.HAw.APPLICATION_COMMAND_PERFORMANCE, {
            duration_ms: s,
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
                        (0, l.xb)(e);
                }
            })(e),
            failure_statuses: u,
        });
    }
    await E();
}
function c(e) {
    r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target: e });
}
