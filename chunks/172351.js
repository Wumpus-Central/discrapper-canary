r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(367907),
    o = r(10718),
    l = r(69626),
    u = r(626135),
    c = r(785717),
    d = r(678738),
    f = r(981631),
    _ = r(388032),
    h = r(181396);
function p(e) {
    let { applicationId: n, commandIds: r, guildId: p, channel: m, onClick: g } = e,
        { trackUserProfileAction: E } = (0, c.KZ)(),
        { commands: v } = o.Qm(m, n, r),
        I = a.useMemo(
            () =>
                null == v
                    ? void 0
                    : v.filter((e) => {
                          let { nsfw: n } = e;
                          return !0 !== n;
                      }),
            [v]
        );
    if (null == I || 0 === I.length) return null;
    let T = (e) => {
        null == g || g(),
            E({ action: 'PRESS_APP_COMMAND' }),
            u.default.track(f.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: n,
                command_id: e,
                guild_id: p,
                ...(0, s.JS)(m.id)
            });
    };
    return (0, i.jsx)(d.Z, {
        heading: _.intl.string(_.t['0hKkS0']),
        children: (0, i.jsx)('ul', {
            className: h.list,
            children: I.map((e) =>
                (0, i.jsx)(
                    'li',
                    {
                        children: (0, i.jsx)(l.wz, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: T,
                            guildId: p,
                            channelId: m.id,
                            applicationId: e.applicationId
                        })
                    },
                    e.id
                )
            )
        })
    });
}
