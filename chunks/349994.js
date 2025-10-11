a.d(t, { default: () => u }), a(388685);
var n = a(951288),
    i = a(647438),
    o = a(481060),
    r = a(313201),
    c = a(764920),
    l = a(429506),
    s = a(981631),
    d = a(531578),
    m = a(388032),
    _ = a(345469);
function u(e) {
    let [t, u] = i.useState(null),
        b = (0, r.Dt)();
    return (0, n.jsxs)(o.Y0X, {
        transitionState: e.transitionState,
        "aria-labelledby": b,
        parentComponent: "SafetyUserSentimentFeedbackModal",
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: _.headerContainer,
                children: [
                    (0, n.jsx)(o.Heading, {
                        id: b,
                        variant: "heading-xl/extrabold",
                        color: "none",
                        children: m.intl.string(m.t.BIbnR0),
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: _.ratingBody,
                        children: m.intl.string(m.t.j2kf2t),
                    }),
                ],
            }),
            (0, n.jsx)(o.hzk, {
                className: _.modalBody,
                children: (0, n.jsx)(c.Z, {
                    ratingOptions: [d.aZ.GOOD, d.aZ.BAD],
                    emojiKind: "thumb",
                    selectedRating: t,
                    onChangeRating: function (t) {
                        u(t),
                            null != t &&
                                ((0, l.Z)({ rating: t }),
                                e.onClose(),
                                (0, o.ZDy)(async () => {
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
                                            })({ body: m.intl.string(m.t.IuPjpK) }, t),
                                        );
                                }));
                    },
                }),
            }),
            (0, n.jsx)(o.mzw, {
                className: _.ratingsFooter,
                children: (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: m.intl.format(m.t.zru1Ky, { safetyCenterUrl: s.EYA.SAFETY_CENTER }),
                }),
            }),
        ],
    });
}
