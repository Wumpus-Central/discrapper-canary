n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(704215),
    a = n(952265),
    s = n(481060),
    c = n(243778),
    u = n(38618),
    d = n(914010),
    p = n(921944);
function h(e) {
    return 'dismissible_content_'.concat(p.R.GUILD_TAKEOVER_MODAL, '-').concat(e);
}
let f = i.memo(function () {
    let e = ((0, l.e7)([u.Z], () => u.Z.isConnected()), []),
        [t, f] = (0, c.US)(e, p.R.GUILD_TAKEOVER_MODAL),
        m = (0, a.f9)(),
        g = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null == t) {
                g.current = null;
                return;
            }
            m ||
                g.current === t ||
                (!(function (e) {
                    let { dismissibleContent: t, markAsDismissed: i } = e,
                        l = {
                            onCloseCallback: (e) => i(null != e ? e : p.L.UNKNOWN),
                            modalKey: h(t)
                        },
                        a = d.Z.getGuildId();
                    t === o.z.SERVER_SHOP_UPSELL &&
                        null != a &&
                        (0, s.ZDy)(async () => {
                            let { default: e } = await n.e('7302').then(n.bind(n, 756779));
                            return (t) => {
                                var n, l;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                    })({}, t)),
                                    (l = l =
                                        {
                                            guildId: a,
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
                (g.current = t));
        }, [t, m, f]),
        i.useEffect(
            () => () => {
                null != t && (0, a.Mr)(h(t));
            },
            [t]
        ),
        null
    );
});
