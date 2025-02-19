n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    o = n(367907),
    a = n(10718),
    s = n(69626),
    l = n(626135),
    c = n(785717),
    u = n(678738),
    d = n(981631),
    f = n(388032),
    p = n(539469);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { applicationId: t, commandIds: n, guildId: _, channel: m, onClick: g } = e,
        { trackUserProfileAction: E } = (0, c.KZ)(),
        v = i.useMemo(
            () => ({
                channel: m,
                type: 'channel'
            }),
            [m]
        ),
        { commands: b } = a.Qm(v, t, n),
        y = i.useMemo(
            () =>
                null == b
                    ? void 0
                    : b.filter((e) => {
                          let { nsfw: t } = e;
                          return !0 !== t;
                      }),
            [b]
        );
    if (null == y || 0 === y.length) return null;
    let O = (e) => {
        null == g || g(),
            E({ action: 'PRESS_APP_COMMAND' }),
            l.default.track(
                d.rMx.POPULAR_APPLICATION_COMMAND_CLICKED,
                h(
                    {
                        application_id: t,
                        command_id: e,
                        guild_id: _
                    },
                    (0, o.JS)(m.id)
                )
            );
    };
    return (0, r.jsx)(u.Z, {
        heading: f.NW.string(f.t['0hKkS0']),
        children: (0, r.jsx)('ul', {
            className: p.list,
            children: y.map((e) =>
                (0, r.jsx)(
                    'li',
                    {
                        children: (0, r.jsx)(s.wz, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: O,
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
