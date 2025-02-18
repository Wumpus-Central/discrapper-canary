a.d(t, { default: () => u }), a(47120);
var n = a(200651),
    s = a(192379),
    o = a(481060),
    i = a(313201),
    c = a(764920),
    r = a(429506),
    l = a(981631),
    d = a(531578),
    _ = a(388032),
    m = a(119392);
function u(e) {
    let [t, u] = s.useState(null),
        x = (0, i.Dt)();
    return (0, n.jsxs)(o.Y0X, {
        transitionState: e.transitionState,
        'aria-labelledby': x,
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: m.headerContainer,
                children: [
                    (0, n.jsx)(o.X6q, {
                        id: x,
                        variant: 'heading-xl/extrabold',
                        color: 'none',
                        children: _.NW.string(_.t.BIbnR0)
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: m.ratingBody,
                        children: _.NW.string(_.t.j2kf2t)
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
                        var s;
                        u(t),
                            null != (s = t) &&
                                ((0, r.Z)({ rating: s }),
                                e.onClose(),
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await a.e('14466').then(a.bind(a, 729328));
                                    return (t) =>
                                        (0, n.jsx)(e, {
                                            body: _.NW.string(_.t.IuPjpK),
                                            ...t
                                        });
                                }));
                    }
                })
            }),
            (0, n.jsx)(o.mzw, {
                className: m.ratingsFooter,
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: _.NW.format(_.t.zru1Ky, { safetyCenterUrl: l.EYA.SAFETY_CENTER })
                })
            })
        ]
    });
}
