n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    }),
    n(47120);
var a = n(200651),
    o = n(192379),
    s = n(481060),
    l = n(313201),
    i = n(332664),
    r = n(429506),
    c = n(981631),
    d = n(531578),
    u = n(388032),
    m = n(940290);
let b = [
    {
        className: m.emojiThumbsUp,
        rating: d.aZ.GOOD,
        classNameSelected: m.selected
    },
    {
        className: m.emojiThumbsDown,
        rating: d.aZ.BAD,
        classNameSelected: m.selected
    }
];
function x(e) {
    let [t, d] = o.useState(null),
        x = (0, l.Dt)();
    return (0, a.jsxs)(s.ModalRoot, {
        transitionState: e.transitionState,
        'aria-labelledby': x,
        children: [
            (0, a.jsxs)(s.ModalHeader, {
                separator: !1,
                className: m.headerContainer,
                children: [
                    (0, a.jsx)(s.Heading, {
                        id: x,
                        variant: 'heading-xl/extrabold',
                        color: 'none',
                        children: u.intl.string(u.t.BIbnR0)
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: m.ratingBody,
                        children: u.intl.string(u.t.j2kf2t)
                    })
                ]
            }),
            (0, a.jsx)(s.ModalContent, {
                className: m.modalBody,
                children: (0, a.jsx)(i.L, {
                    ratingConfigs: b,
                    className: m.ratingsSelector,
                    selectedRating: t,
                    onChangeRating: function (t) {
                        d(t),
                            !(function (t) {
                                if (null != t)
                                    (0, r.Z)({ rating: t }),
                                        e.onClose(),
                                        (0, s.openModalLazy)(async () => {
                                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                            return (t) =>
                                                (0, a.jsx)(e, {
                                                    body: u.intl.string(u.t.IuPjpK),
                                                    ...t
                                                });
                                        });
                            })(t);
                    }
                })
            }),
            (0, a.jsx)(s.ModalFooter, {
                className: m.ratingsFooter,
                children: (0, a.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: u.intl.format(u.t.zru1Ky, { safetyCenterUrl: c.EYA.SAFETY_CENTER })
                })
            })
        ]
    });
}
