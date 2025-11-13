n.d(t, { Z: () => d });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(340541),
    a = n(728285),
    o = n(493754),
    s = n(496675),
    c = n(981631),
    u = n(388032);
function d(e, t, n, d) {
    let p = {
            streamUserId: n,
            channel: e,
            applicationId: d,
            appContext: (0, a.bp)(),
        },
        h = () => {
            null != t &&
                e.type === c.d4z.GUILD_VOICE &&
                (0, o.W)(
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({ guild: t }, p),
                );
        },
        f = (0, l._k)({ location: "more_settings_invite_item" }),
        m = f.isInCallEntrypointEnabled ? r.oLu : r.ejJ;
    if (null != d)
        return (0, i.jsx)(r.sNh, {
            id: "invite-to-stream",
            label: u.intl.string(u.t["OzOM/q"]),
            action: h,
            icon: r.ejJ,
        });
    if (null == t || null == e || !s.Z.can(c.Plq.CREATE_INSTANT_INVITE, e)) return null;
    let g = f.isInCallEntrypointEnabled ? u.intl.string(u.t["EE+P0H"]) : u.intl.string(u.t["6Qgrev"]);
    return (0, i.jsx)(r.sNh, {
        id: "invite-friends",
        label: g,
        action: h,
        icon: m,
    });
}
