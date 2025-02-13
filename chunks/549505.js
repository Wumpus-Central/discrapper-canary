a.d(t, { default: () => _ });
var s = a(200651);
a(192379);
var n = a(481060),
    i = a(688465),
    r = a(547972),
    o = a(63063),
    l = a(981631),
    c = a(332325),
    d = a(388032),
    m = a(688056),
    x = a(83173);
function _(e) {
    let { transitionState: t, onClose: a } = e;
    return (0, s.jsxs)(n.Y0X, {
        transitionState: t,
        size: n.CgR.DYNAMIC,
        className: m.modalRoot,
        children: [
            (0, s.jsxs)(n.xBx, {
                separator: !1,
                className: m.modalHeader,
                children: [
                    (0, s.jsx)('div', {
                        className: m.imageFrame,
                        children: (0, s.jsx)('img', {
                            alt: d.intl.string(d.t.AWkQTk),
                            src: x,
                            className: m.heroImage
                        })
                    }),
                    (0, s.jsxs)('div', {
                        className: m.headerWrapper,
                        children: [
                            (0, s.jsx)(n.X6q, {
                                variant: 'heading-xl/bold',
                                children: d.intl.string(d.t.gb37Ky)
                            }),
                            (0, s.jsx)(i.Z, { className: m.betaTag })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(n.hzk, {
                className: m.modalContent,
                children: [
                    (0, s.jsxs)('div', {
                        className: m.modalContentFrame,
                        children: [
                            (0, s.jsx)(n.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: d.intl.string(d.t.WKxo8v)
                            }),
                            (0, s.jsx)(b, {})
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: m.modalFooter,
                        children: [
                            (0, s.jsx)(n.zxk, {
                                onClick: a,
                                className: m.button,
                                children: d.intl.string(d.t['x/26d3'])
                            }),
                            (0, s.jsx)(n.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                className: m.disclosureText,
                                children: d.intl.format(d.t['5Ey5Dw'], {
                                    recentActivityURL: o.Z.getArticleURL(l.BhN.MEMBER_LIST_ACTIVITY_FEED),
                                    handleActivityPrivacyClick: () => {
                                        a(), (0, r.Z)(c.Z.ACTIVITY_PRIVACY);
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
let b = () => {
    let e = [
        {
            icon: (0, s.jsx)(n.iFz, { className: m.icon }),
            text: d.intl.string(d.t.vXBrdn)
        },
        {
            icon: (0, s.jsx)(n.iWm, { className: m.icon }),
            text: d.intl.string(d.t.aExjOz)
        },
        {
            icon: (0, s.jsx)(n.kBi, { className: m.icon }),
            text: d.intl.string(d.t['i7/QHB'])
        },
        {
            icon: (0, s.jsx)(n.lMe, { className: m.icon }),
            text: d.intl.string(d.t.ZmBfKC)
        }
    ];
    return (0, s.jsx)('div', {
        className: m.notes,
        children: e.map((e, t) => {
            let { icon: a, text: i } = e;
            return (0, s.jsxs)(
                'div',
                {
                    className: m.badgeNote,
                    children: [
                        (0, s.jsx)('div', {
                            className: m.badge,
                            children: a
                        }),
                        (0, s.jsx)(n.Text, {
                            variant: 'text-sm/medium',
                            children: i
                        })
                    ]
                },
                'memberlist-learn-more-note-'.concat(t)
            );
        })
    });
};
