n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
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
        f = () => {
            null != t &&
                e.type === c.d4z.GUILD_VOICE &&
                (0, o.W)(
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ guild: t }, p),
                );
        },
        h = (0, l._k)({ location: "more_settings_invite_item" }),
        m = h.isInCallEntrypointEnabled ? i.oLu : i.ejJ;
    if (null != d)
        return (0, r.jsx)(i.sNh, {
            id: "invite-to-stream",
            label: u.intl.string(u.t["OzOM/q"]),
            action: f,
            icon: i.ejJ,
        });
    if (null == t || null == e || !s.Z.can(c.Plq.CREATE_INSTANT_INVITE, e)) return null;
    let g = h.isInCallEntrypointEnabled ? u.intl.string(u.t["EE+P0H"]) : u.intl.string(u.t["6Qgrev"]);
    return (0, r.jsx)(i.sNh, {
        id: "invite-friends",
        label: g,
        action: f,
        icon: m,
    });
}
