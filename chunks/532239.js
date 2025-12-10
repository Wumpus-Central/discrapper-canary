n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(728285),
    a = n(493754),
    o = n(496675),
    s = n(981631),
    c = n(388032);
function u(e, t, n, u) {
    let d = {
            streamUserId: n,
            channel: e,
            applicationId: u,
            appContext: (0, l.bp)(),
        },
        p = () => {
            null != t &&
                e.type === s.d4z.GUILD_VOICE &&
                (0, a.W)(
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
                    })({ guild: t }, d),
                );
        };
    return null != u
        ? (0, i.jsx)(r.sNh, {
              id: "invite-to-stream",
              label: c.intl.string(c.t["OzOM/q"]),
              action: p,
              icon: r.ejJ,
          })
        : null != t && null != e && o.Z.can(s.Plq.CREATE_INSTANT_INVITE, e)
          ? (0, i.jsx)(r.sNh, {
                id: "invite-friends",
                label: c.intl.string(c.t["EE+P0H"]),
                action: p,
                icon: r.oLu,
            })
          : null;
}
