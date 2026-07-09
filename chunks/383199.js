i.d(t, { A: () => m });
var e = i(627968),
    l = i(95561),
    o = i(990474),
    r = i(174459),
    a = i(183555),
    c = i(64700),
    d = i(155718),
    s = i(842209),
    p = i(900179),
    u = i(652215),
    A = i(375708),
    g = i(76379);
function m(n) {
    let { applicationId: t, commandIds: i, guildId: m, channel: I, onClick: f } = n,
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
        })(I, t, i);
    if (null == _ || 0 === _.length) return null;
    function O(n) {
        f?.(),
            P({ action: "PRESS_APP_COMMAND" }),
            r.default.track(u.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: n,
                guild_id: m,
                ...(0, l.Ou)(I.id),
            });
    }
    return (0, e.jsx)(p.A, {
        heading: A.intl.string(A.t["0hKkS+"]),
        children: (0, e.jsx)("ul", {
            className: g.p,
            children: _.map((n) =>
                (0, e.jsx)(
                    "li",
                    {
                        children: (0, e.jsx)(o.Oh, {
                            commandId: n.id,
                            commandName: n.displayName,
                            commandDescription: n.displayDescription,
                            onClick: O,
                            guildId: m,
                            channelId: I.id,
                            applicationId: n.applicationId,
                        }),
                    },
                    n.id,
                ),
            ),
        }),
    });
}
