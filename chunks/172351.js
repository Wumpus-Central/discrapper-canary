r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(367907),
    s = r(10718),
    l = r(69626),
    u = r(626135),
    c = r(785717),
    d = r(678738),
    f = r(981631),
    p = r(388032),
    h = r(181396);
function _(e) {
    let { applicationId: n, commandIds: r, guildId: _, channel: m, onClick: g } = e,
        { trackUserProfileAction: E } = (0, c.KZ)(),
        { commands: v } = s.Qm(m, n, r),
        y = a.useMemo(
            () =>
                null == v
                    ? void 0
                    : v.filter((e) => {
                          let { nsfw: n } = e;
                          return !0 !== n;
                      }),
            [v]
        );
    if (null == y || 0 === y.length) return null;
    let b = (e) => {
        null == g || g(),
            E({ action: 'PRESS_APP_COMMAND' }),
            u.default.track(f.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: n,
                command_id: e,
                guild_id: _,
                ...(0, o.JS)(m.id)
            });
    };
    return (0, i.jsx)(d.Z, {
        heading: p.intl.string(p.t['0hKkS0']),
        children: (0, i.jsx)('ul', {
            className: h.list,
            children: y.map((e) =>
                (0, i.jsx)(
                    'li',
                    {
                        children: (0, i.jsx)(l.wz, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: b,
                            guildId: _,
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
