n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    c = n(576705),
    a = n(652215),
    o = n(985018);

function s(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
        u = (0, i.bG)([c.A], () => c.A.can(a.xBc.MANAGE_CHANNELS, e), [e]);
    if (__OVERLAY__ || !u) return null;
    let b = () => {
        (0, l.mMO)(async () => {
            let { default: t } = await Promise.all([n.e("72271"), n.e("64233"), n.e("29592")]).then(n.bind(n, 409200));
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
                            channelType: s,
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
    switch (s) {
        case a.rbe.GUILD_TEXT:
            return (0, r.jsx)(l.Drp, {
                id: "create-text-channel",
                label: o.intl.string(o.t.HHkTJP),
                action: b,
            });
        case a.rbe.GUILD_VOICE:
            return (0, r.jsx)(l.Drp, {
                id: "create-voice-channel",
                label: o.intl.string(o.t.AlbZaI),
                action: b,
            });
        default:
            return null;
    }
}
