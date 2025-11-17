t.d(a, { default: () => u }), t(388685);
var n = t(54381),
    i = t(473749),
    o = t(481060),
    r = t(313201),
    c = t(764920),
    l = t(429506),
    s = t(981631),
    d = t(531578),
    m = t(388032),
    _ = t(345469);
function u(e) {
    let [a, u] = i.useState(null),
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
                        children: m.intl.string(m.t.BIbnR2),
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: _.ratingBody,
                        children: m.intl.string(m.t.j2kf2m),
                    }),
                ],
            }),
            (0, n.jsx)(o.hzk, {
                className: _.modalBody,
                children: (0, n.jsx)(c.Z, {
                    ratingOptions: [d.aZ.GOOD, d.aZ.BAD],
                    emojiKind: "thumb",
                    selectedRating: a,
                    onChangeRating: function (a) {
                        u(a),
                            null != a &&
                                ((0, l.Z)({ rating: a }),
                                e.onClose(),
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await t.e("14466").then(t.bind(t, 729328));
                                    return (a) =>
                                        (0, n.jsx)(
                                            e,
                                            (function (e) {
                                                for (var a = 1; a < arguments.length; a++) {
                                                    var t = null != arguments[a] ? arguments[a] : {},
                                                        n = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (n = n.concat(
                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                            }),
                                                        )),
                                                        n.forEach(function (a) {
                                                            var n;
                                                            (n = t[a]),
                                                                a in e
                                                                    ? Object.defineProperty(e, a, {
                                                                          value: n,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[a] = n);
                                                        });
                                                }
                                                return e;
                                            })({ body: m.intl.string(m.t.IuPjpE) }, a),
                                        );
                                }));
                    },
                }),
            }),
            (0, n.jsx)(o.mzw, {
                className: _.ratingsFooter,
                children: (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: m.intl.format(m.t.zru1K0, { safetyCenterUrl: s.EYA.SAFETY_CENTER }),
                }),
            }),
        ],
    });
}
