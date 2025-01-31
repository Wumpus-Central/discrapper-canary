n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(367907),
    s = n(10718),
    o = n(69626),
    l = n(626135),
    u = n(785717),
    c = n(678738),
    d = n(981631),
    f = n(388032),
    _ = n(181396);
function p(e) {
    let { applicationId: t, commandIds: n, guildId: p, channel: h, onClick: m } = e,
        { trackUserProfileAction: g } = (0, u.KZ)(),
        E = r.useMemo(
            () => ({
                channel: h,
                type: 'channel'
            }),
            [h]
        ),
        { commands: v } = s.Qm(E, t, n),
        y = r.useMemo(
            () =>
                null == v
                    ? void 0
                    : v.filter((e) => {
                          let { nsfw: t } = e;
                          return !0 !== t;
                      }),
            [v]
        );
    if (null == y || 0 === y.length) return null;
    let I = (e) => {
        null == m || m(),
            g({ action: 'PRESS_APP_COMMAND' }),
            l.default.track(d.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: p,
                ...(0, a.JS)(h.id)
            });
    };
    return (0, i.jsx)(c.Z, {
        heading: f.intl.string(f.t['0hKkS0']),
        children: (0, i.jsx)('ul', {
            className: _.list,
            children: y.map((e) =>
                (0, i.jsx)(
                    'li',
                    {
                        children: (0, i.jsx)(o.wz, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: I,
                            guildId: p,
                            channelId: h.id,
                            applicationId: e.applicationId
                        })
                    },
                    e.id
                )
            )
        })
    });
}
