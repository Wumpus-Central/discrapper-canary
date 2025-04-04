n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(40851),
    o = n(340541),
    a = n(493754),
    s = n(496675),
    c = n(981631),
    u = n(388032);
function d(e, t, n, d) {
    let p = {
            streamUserId: n,
            channel: e,
            applicationId: d,
            appContext: (0, l.bp)()
        },
        h = () => {
            null != t &&
                e.type === c.d4z.GUILD_VOICE &&
                (0, a.W)(
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ guild: t }, p)
                );
        },
        { enabled: f } = (0, o._k)({ location: 'more_settings_invite_item' }),
        m = f ? i.oLu : i.ejJ;
    if (null != d)
        return (0, r.jsx)(i.sNh, {
            id: 'invite-to-stream',
            label: u.NW.string(u.t['OzOM/v']),
            action: h,
            icon: i.ejJ
        });
    if (null == t || null == e || !s.Z.can(c.Plq.CREATE_INSTANT_INVITE, e)) return null;
    let g = f ? u.NW.string(u.t['EE+P0N']) : u.NW.string(u.t['6Qgren']);
    return (0, r.jsx)(i.sNh, {
        id: 'invite-friends',
        label: g,
        action: h,
        icon: m
    });
}
