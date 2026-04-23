n.d(t, { A: () => g });
var i = n(627968),
    l = n(58149),
    s = n(990474),
    r = n(954571),
    a = n(183555),
    o = n(64700),
    d = n(155718),
    c = n(842209),
    u = n(900179),
    h = n(652215),
    A = n(985018),
    _ = n(192795);
function g(e) {
    let { applicationId: t, commandIds: n, guildId: g, channel: m, onClick: p } = e,
        { trackUserProfileAction: f } = (0, a.NJ)(),
        { commands: E } = (function (e, t, n) {
            let { commands: i, application: l } = c.ZV(e, t, n);
            return {
                application: l,
                commands: o.useMemo(
                    () =>
                        i?.filter(
                            (e) =>
                                !0 !== e.nsfw &&
                                e.options?.find((e) => {
                                    let { type: t } = e;
                                    return t === d.n4.SUB_COMMAND || t === d.n4.SUB_COMMAND_GROUP;
                                }) == null,
                        ),
                    [i],
                ),
            };
        })(m, t, n);
    if (null == E || 0 === E.length) return null;
    let C = (e) => {
        p?.(),
            f({ action: "PRESS_APP_COMMAND" }),
            r.default.track(h.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: g,
                ...(0, l.Ou)(m.id),
            });
    };
    return (0, i.jsx)(u.A, {
        heading: A.intl.string(A.t["0hKkS+"]),
        children: (0, i.jsx)("ul", {
            className: _.p,
            children: E.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(s.Oh, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: C,
                            guildId: g,
                            channelId: m.id,
                            applicationId: e.applicationId,
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
}
