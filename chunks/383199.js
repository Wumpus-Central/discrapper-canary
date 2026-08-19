i.d(t, { A: () => f });
var e = i(477900),
    l = i(95561),
    o = i(990474),
    r = i(174459),
    a = i(183555),
    c = i(582128),
    d = i(155718),
    s = i(842209),
    u = i(900179),
    p = i(652215),
    A = i(375708),
    I = i(426051);
function f(n) {
    let { applicationId: t, commandIds: i, guildId: f, channel: g, onClick: m } = n,
        { trackUserProfileAction: P } = (0, a.NJ)(),
        { commands: _ } = (function (n, t, i) {
            let { commands: e, application: l } = s.ZV(n, t, i);
            return {
                application: l,
                commands: c.useMemo(
                    () =>
                        e?.filter(
                            (n) =>
                                !0 !== n.nsfw &&
                                n.options?.find((n) => {
                                    let { type: t } = n;
                                    return t === d.n4.SUB_COMMAND || t === d.n4.SUB_COMMAND_GROUP;
                                }) == null,
                        ),
                    [e],
                ),
            };
        })(g, t, i);
    if (null == _ || 0 === _.length) return null;
    function O(n) {
        m?.(),
            P({ action: "PRESS_APP_COMMAND" }),
            r.default.track(p.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: n,
                guild_id: f,
                ...(0, l.Ou)(g.id),
            });
    }
    return (0, e.jsx)(u.A, {
        heading: A.intl.string(A.t["0hKkS+"]),
        children: (0, e.jsx)("ul", {
            className: I.p,
            children: _.map((n) =>
                (0, e.jsx)(
                    "li",
                    {
                        children: (0, e.jsx)(o.Oh, {
                            commandId: n.id,
                            commandName: n.displayName,
                            commandDescription: n.displayDescription,
                            onClick: O,
                            guildId: f,
                            channelId: g.id,
                            applicationId: n.applicationId,
                        }),
                    },
                    n.id,
                ),
            ),
        }),
    });
}
