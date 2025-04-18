t.d(a, { default: () => _ });
var s = t(200651);
t(192379);
var r = t(481060),
    n = t(688465),
    o = t(547972),
    i = t(63063),
    c = t(981631),
    d = t(332325),
    l = t(388032),
    m = t(347383),
    x = t(83173);
function _(e) {
    let { transitionState: a, onClose: t } = e;
    return (0, s.jsxs)(r.Y0X, {
        transitionState: a,
        size: r.CgR.DYNAMIC,
        className: m.modalRoot,
        children: [
            (0, s.jsxs)(r.xBx, {
                separator: !1,
                className: m.modalHeader,
                children: [
                    (0, s.jsx)('div', {
                        className: m.imageFrame,
                        children: (0, s.jsx)('img', {
                            alt: l.NW.string(l.t.AWkQTk),
                            src: x,
                            className: m.heroImage
                        })
                    }),
                    (0, s.jsxs)('div', {
                        className: m.headerWrapper,
                        children: [
                            (0, s.jsx)(r.X6q, {
                                variant: 'heading-xl/bold',
                                children: l.NW.string(l.t.gb37Ky)
                            }),
                            (0, s.jsx)(n.Z, { className: m.betaTag })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(r.hzk, {
                className: m.modalContent,
                children: [
                    (0, s.jsxs)('div', {
                        className: m.modalContentFrame,
                        children: [
                            (0, s.jsx)(r.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: l.NW.string(l.t.WKxo8v)
                            }),
                            (0, s.jsx)(b, {})
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: m.modalFooter,
                        children: [
                            (0, s.jsx)(r.zxk, {
                                onClick: t,
                                className: m.button,
                                children: l.NW.string(l.t['x/26d3'])
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                className: m.disclosureText,
                                children: l.NW.format(l.t['5Ey5Dw'], {
                                    recentActivityURL: i.Z.getArticleURL(c.BhN.MEMBER_LIST_ACTIVITY_FEED),
                                    handleActivityPrivacyClick: () => {
                                        t(), (0, o.Z)(d.Z.ACTIVITY_PRIVACY);
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
            icon: (0, s.jsx)(r.iFz, { className: m.icon }),
            text: l.NW.string(l.t.vXBrdn)
        },
        {
            icon: (0, s.jsx)(r.iWm, { className: m.icon }),
            text: l.NW.string(l.t.aExjOz)
        },
        {
            icon: (0, s.jsx)(r.kBi, { className: m.icon }),
            text: l.NW.string(l.t['i7/QHB'])
        },
        {
            icon: (0, s.jsx)(r.lMe, { className: m.icon }),
            text: l.NW.string(l.t.ZmBfKC)
        }
    ];
    return (0, s.jsx)('div', {
        className: m.notes,
        children: e.map((e, a) => {
            let { icon: t, text: n } = e;
            return (0, s.jsxs)(
                'div',
                {
                    className: m.badgeNote,
                    children: [
                        (0, s.jsx)('div', {
                            className: m.badge,
                            children: t
                        }),
                        (0, s.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            children: n
                        })
                    ]
                },
                'memberlist-learn-more-note-'.concat(a)
            );
        })
    });
};
