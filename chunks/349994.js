a.d(t, { default: () => b }), a(388685);
var n = a(54381),
    c = a(473749),
    i = a(159691),
    l = a(481060),
    o = a(764920),
    r = a(429506),
    s = a(981631),
    m = a(531578),
    u = a(388032);
function b(e) {
    let { onClose: t, transitionState: b } = e,
        [_, d] = c.useState(null);
    return (0, n.jsx)(i.u_l, {
        title: u.intl.string(u.t.BIbnR2),
        subtitle: u.intl.string(u.t.j2kf2m),
        onClose: t,
        actions: [],
        transitionState: b,
        children: (0, n.jsxs)(l.Kqy, {
            gap: 16,
            children: [
                (0, n.jsx)(o.Z, {
                    ratingOptions: [m.aZ.GOOD, m.aZ.BAD],
                    emojiKind: "thumb",
                    selectedRating: _,
                    onChangeRating: function (e) {
                        d(e),
                            null != e &&
                                ((0, r.Z)({ rating: e }),
                                t(),
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await a.e("14466").then(a.bind(a, 729328));
                                    return (t) =>
                                        (0, n.jsx)(
                                            e,
                                            (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var a = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(a);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (n = n.concat(
                                                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                            }),
                                                        )),
                                                        n.forEach(function (t) {
                                                            var n;
                                                            (n = a[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: n,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[t] = n);
                                                        });
                                                }
                                                return e;
                                            })({ body: u.intl.string(u.t.IuPjpE) }, t),
                                        );
                                }));
                    },
                }),
                (0, n.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: u.intl.format(u.t.zru1K0, { safetyCenterUrl: s.EYA.SAFETY_CENTER }),
                }),
            ],
        }),
    });
}
