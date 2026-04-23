n.d(t, { $: () => E, E: () => o }), n(321073);
var i = n(636537),
    r = n(228366),
    a = n(954571),
    s = n(927813),
    _ = n(403362),
    l = n(652215);
async function o(e, t) {
    let n,
        o = performance.now(),
        E = 0,
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
    let c = async (t) =>
            E >= 3
                ? (d.push(1002),
                  I({ error: !0 }),
                  r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }))
                : (await new Promise((e) => setTimeout(e, t)), u()),
        u = () =>
            i.Bo.get({
                url: n,
                retries: 3 - E - 1,
                signal: t.signal,
                onRequestCreated: () => E++,
                rejectWithError: !1,
            }).then(
                (t) =>
                    202 === t.status
                        ? (d.push(202), c(5e3))
                        : (I({ error: !1 }),
                          r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: e, index: t.body })),
                (n) => {
                    if (t.signal.aborted) {
                        d.push(1001), I({ error: !0 });
                        return;
                    }
                    return 429 === n.status
                        ? (d.push(429), c(n.body.retry_after * s.A.Millis.SECOND))
                        : (d.push(n.status ?? 1e3),
                          I({ error: !0 }),
                          r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: e }));
                },
            ),
        I = (i) => {
            let { error: r } = i,
                s = performance.now() - o;
            a.default.track(l.HAw.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: s,
                error: r,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(E - 1, 0),
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
                            (0, _.xb)(e);
                    }
                })(e),
                failure_statuses: d,
            });
        };
    await u();
}
function E(e) {
    r.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target: e });
}
