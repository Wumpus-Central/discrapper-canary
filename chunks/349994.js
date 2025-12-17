t.d(a, { default: () => m }), t(388685);
var c = t(54381),
    n = t(473749),
    i = t(159691),
    l = t(481060),
    d = t(764920),
    o = t(429506),
    r = t(981631),
    s = t(531578),
    b = t(388032);
function m(e) {
    let { onClose: a, transitionState: m } = e,
        [u, j] = n.useState(null);
    return (0, c.jsx)(i.u_l, {
        title: b.intl.string(b.t.BIbnR2),
        subtitle: b.intl.string(b.t.j2kf2m),
        onClose: a,
        actions: [],
        transitionState: m,
        children: (0, c.jsxs)(l.Kqy, {
            gap: 16,
            children: [
                (0, c.jsx)(d.Z, {
                    ratingOptions: [s.aZ.GOOD, s.aZ.BAD],
                    emojiKind: "thumb",
                    selectedRating: u,
                    onChangeRating: function (e) {
                        j(e),
                            null != e &&
                                ((0, o.Z)({ rating: e }),
                                a(),
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await t.e("14466").then(t.bind(t, 729328));
                                    return (a) =>
                                        (0, c.jsx)(
                                            e,
                                            (function (e) {
                                                for (var a = 1; a < arguments.length; a++) {
                                                    var t = null != arguments[a] ? arguments[a] : {},
                                                        c = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (c = c.concat(
                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                            }),
                                                        )),
                                                        c.forEach(function (a) {
                                                            var c;
                                                            (c = t[a]),
                                                                a in e
                                                                    ? Object.defineProperty(e, a, {
                                                                          value: c,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[a] = c);
                                                        });
                                                }
                                                return e;
                                            })({ body: b.intl.string(b.t.IuPjpE) }, a),
                                        );
                                }));
                    },
                }),
                (0, c.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: b.intl.format(b.t.zru1K0, { safetyCenterUrl: r.EYA.SAFETY_CENTER }),
                }),
            ],
        }),
    });
}
