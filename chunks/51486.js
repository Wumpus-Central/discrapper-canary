(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(399606),
    a = n(704215),
    s = n(952265),
    o = n(481060),
    c = n(243778),
    d = n(38618),
    u = n(914010),
    h = n(921944);
function p(e) {
    return 'dismissible_content_'.concat(h.R.GUILD_TAKEOVER_MODAL, '-').concat(e);
}
let f = i.memo(function () {
    let e = ((0, l.e7)([d.Z], () => d.Z.isConnected()), []),
        [t, f] = (0, c.US)(e, h.R.GUILD_TAKEOVER_MODAL),
        g = (0, s.f9)(),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null == t) {
                m.current = null;
                return;
            }
            g ||
                m.current === t ||
                (!(function (e) {
                    let { dismissibleContent: t, markAsDismissed: i } = e,
                        l = {
                            onCloseCallback: (e) => i(null != e ? e : h.L.UNKNOWN),
                            modalKey: p(t)
                        },
                        s = u.Z.getGuildId();
                    t === a.z.SERVER_SHOP_UPSELL &&
                        null != s &&
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('7302').then(n.bind(n, 756779));
                            return (t) => {
                                var n, l;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    ((r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r));
                                                }));
                                        }
                                        return e;
                                    })({}, t)),
                                    (l = l =
                                        {
                                            guildId: s,
                                            markAsDismissed: i
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    n)
                                );
                            };
                        }, l);
                })({
                    dismissibleContent: t,
                    markAsDismissed: f
                }),
                (m.current = t));
        }, [t, g, f]),
        i.useEffect(
            () => () => {
                null != t && (0, s.Mr)(p(t));
            },
            [t]
        ),
        null
    );
});
