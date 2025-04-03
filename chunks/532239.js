n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(40851),
    o = n(493754),
    a = n(496675),
    s = n(981631),
    c = n(388032);
function u(e, t, n, u) {
    let d = {
            streamUserId: n,
            channel: e,
            applicationId: u,
            appContext: (0, l.bp)()
        },
        p = () => {
            null != t &&
                e.type === s.d4z.GUILD_VOICE &&
                (0, o.W)(
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
                    })({ guild: t }, d)
                );
        };
    return null != u
        ? (0, r.jsx)(i.sNh, {
              id: 'invite-to-stream',
              label: c.NW.string(c.t['OzOM/v']),
              action: p,
              icon: i.ejJ
          })
        : null != t && null != e && a.Z.can(s.Plq.CREATE_INSTANT_INVITE, e)
          ? (0, r.jsx)(i.sNh, {
                id: 'invite-friends',
                label: c.NW.string(c.t['6Qgren']),
                action: p,
                icon: i.ejJ
            })
          : null;
}
