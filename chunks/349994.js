(a.d(t, { default: () => _ }), a(388685));
var n = a(255367),
    i = a(73800),
    s = a(481060),
    o = a(313201),
    c = a(764920),
    r = a(429506),
    l = a(981631),
    d = a(531578),
    m = a(388032),
    u = a(398035);
function _(e) {
    let [t, _] = i.useState(null),
        b = (0, o.Dt)();
    return (0, n.jsxs)(s.Y0X, {
        transitionState: e.transitionState,
        'aria-labelledby': b,
        parentComponent: 'SafetyUserSentimentFeedbackModal',
        children: [
            (0, n.jsxs)(s.xBx, {
                separator: !1,
                className: u.headerContainer,
                children: [
                    (0, n.jsx)(s.X6q, {
                        id: b,
                        variant: 'heading-xl/extrabold',
                        color: 'none',
                        children: m.intl.string(m.t.BIbnR0)
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: u.ratingBody,
                        children: m.intl.string(m.t.j2kf2t)
                    })
                ]
            }),
            (0, n.jsx)(s.hzk, {
                className: u.modalBody,
                children: (0, n.jsx)(c.Z, {
                    ratingOptions: [d.aZ.GOOD, d.aZ.BAD],
                    emojiKind: 'thumb',
                    selectedRating: t,
                    onChangeRating: function (t) {
                        (_(t),
                            null != t &&
                                ((0, r.Z)({ rating: t }),
                                e.onClose(),
                                (0, s.ZDy)(async () => {
                                    let { default: e } = await a.e('14466').then(a.bind(a, 729328));
                                    return (t) =>
                                        (0, n.jsx)(
                                            e,
                                            (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var a = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(a);
                                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                                        (n = n.concat(
                                                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                            })
                                                        )),
                                                        n.forEach(function (t) {
                                                            var n;
                                                            ((n = a[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: n,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[t] = n));
                                                        }));
                                                }
                                                return e;
                                            })({ body: m.intl.string(m.t.IuPjpK) }, t)
                                        );
                                })));
                    }
                })
            }),
            (0, n.jsx)(s.mzw, {
                className: u.ratingsFooter,
                children: (0, n.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: m.intl.format(m.t.zru1Ky, { safetyCenterUrl: l.EYA.SAFETY_CENTER })
                })
            })
        ]
    });
}
