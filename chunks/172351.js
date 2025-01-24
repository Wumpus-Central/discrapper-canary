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
        v = a.useMemo(
            () => ({
                channel: m,
                type: 'channel'
            }),
            [m]
        ),
        { commands: y } = s.Qm(v, n, r),
        b = a.useMemo(
            () =>
                null == y
                    ? void 0
                    : y.filter((e) => {
                          let { nsfw: n } = e;
                          return !0 !== n;
                      }),
            [y]
        );
    if (null == b || 0 === b.length) return null;
    let I = (e) => {
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
            children: b.map((e) =>
                (0, i.jsx)(
                    'li',
                    {
                        children: (0, i.jsx)(l.wz, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: I,
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
