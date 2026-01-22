n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(576705),
    c = n(652215),
    o = n(985018);
function u(e, t) {
    let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
        s = (0, i.bG)([a.A], () => a.A.can(c.xBc.MANAGE_CHANNELS, e), [e]);
    if (__OVERLAY__ || !s) return null;
    let d = () => {
        (0, l.mMO)(async () => {
            let { default: t } = await Promise.all([n.e("72271"), n.e("64233"), n.e("7211")]).then(n.bind(n, 409200));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    t,
                    ((i = (function (e) {
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
                    })({}, n)),
                    (l = l =
                        {
                            channelType: u,
                            guildId: e.guild_id,
                            categoryId: e.parent_id,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            };
        });
    };
    switch (u) {
        case c.rbe.GUILD_TEXT:
            return (0, r.jsx)(l.Drp, {
                id: "create-text-channel",
                label: o.intl.string(o.t.HHkTJP),
                action: d,
            });
        case c.rbe.GUILD_VOICE:
            return (0, r.jsx)(l.Drp, {
                id: "create-voice-channel",
                label: o.intl.string(o.t.AlbZaI),
                action: d,
            });
        default:
            return null;
    }
}
