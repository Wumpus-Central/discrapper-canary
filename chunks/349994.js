n.d(t, { default: () => _ }), n(47120);
var a = n(200651),
    s = n(192379),
    l = n(481060),
    i = n(313201),
    o = n(332664),
    r = n(429506),
    c = n(981631),
    d = n(531578),
    m = n(388032),
    u = n(940290);
let x = [
    {
        className: u.emojiThumbsUp,
        rating: d.aZ.GOOD,
        classNameSelected: u.selected
    },
    {
        className: u.emojiThumbsDown,
        rating: d.aZ.BAD,
        classNameSelected: u.selected
    }
];
function _(e) {
    let [t, d] = s.useState(null),
        _ = (0, i.Dt)();
    return (0, a.jsxs)(l.Y0X, {
        transitionState: e.transitionState,
        'aria-labelledby': _,
        children: [
            (0, a.jsxs)(l.xBx, {
                separator: !1,
                className: u.headerContainer,
                children: [
                    (0, a.jsx)(l.X6q, {
                        id: _,
                        variant: 'heading-xl/extrabold',
                        color: 'none',
                        children: m.intl.string(m.t.BIbnR0)
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        className: u.ratingBody,
                        children: m.intl.string(m.t.j2kf2t)
                    })
                ]
            }),
            (0, a.jsx)(l.hzk, {
                className: u.modalBody,
                children: (0, a.jsx)(o.L, {
                    ratingConfigs: x,
                    className: u.ratingsSelector,
                    selectedRating: t,
                    onChangeRating: function (t) {
                        var s;
                        d(t),
                            null != (s = t) &&
                                ((0, r.Z)({ rating: s }),
                                e.onClose(),
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                    return (t) =>
                                        (0, a.jsx)(e, {
                                            body: m.intl.string(m.t.IuPjpK),
                                            ...t
                                        });
                                }));
                    }
                })
            }),
            (0, a.jsx)(l.mzw, {
                className: u.ratingsFooter,
                children: (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: m.intl.format(m.t.zru1Ky, { safetyCenterUrl: c.EYA.SAFETY_CENTER })
                })
            })
        ]
    });
}
