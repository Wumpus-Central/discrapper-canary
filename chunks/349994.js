a.d(t, { default: () => _ }), a(47120);
var n = a(200651),
    s = a(192379),
    o = a(481060),
    r = a(313201),
    c = a(764920),
    i = a(429506),
    l = a(981631),
    d = a(531578),
    u = a(388032),
    m = a(398035);
function _(e) {
    let [t, _] = s.useState(null),
        b = (0, r.Dt)();
    return (0, n.jsxs)(o.Y0X, {
        transitionState: e.transitionState,
        'aria-labelledby': b,
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: m.headerContainer,
                children: [
                    (0, n.jsx)(o.X6q, {
                        id: b,
                        variant: 'heading-xl/extrabold',
                        color: 'none',
                        children: u.NW.string(u.t.BIbnR0)
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: m.ratingBody,
                        children: u.NW.string(u.t.j2kf2t)
                    })
                ]
            }),
            (0, n.jsx)(o.hzk, {
                className: m.modalBody,
                children: (0, n.jsx)(c.Z, {
                    ratingOptions: [d.aZ.GOOD, d.aZ.BAD],
                    emojiKind: 'thumb',
                    selectedRating: t,
                    onChangeRating: function (t) {
                        _(t),
                            null != t &&
                                ((0, i.Z)({ rating: t }),
                                e.onClose(),
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await a.e('14466').then(a.bind(a, 729328));
                                    return (t) =>
                                        (0, n.jsx)(
                                            e,
                                            (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var a = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(a);
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (n = n.concat(
                                                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                            })
                                                        )),
                                                        n.forEach(function (t) {
                                                            var n;
                                                            (n = a[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: n,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[t] = n);
                                                        });
                                                }
                                                return e;
                                            })({ body: u.NW.string(u.t.IuPjpK) }, t)
                                        );
                                }));
                    }
                })
            }),
            (0, n.jsx)(o.mzw, {
                className: m.ratingsFooter,
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: u.NW.format(u.t.zru1Ky, { safetyCenterUrl: l.EYA.SAFETY_CENTER })
                })
            })
        ]
    });
}
