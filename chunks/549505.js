a.d(t, { default: () => b });
var s = a(255367);
a(73800);
var n = a(755721),
    i = a(481060),
    r = a(688465),
    o = a(547972),
    l = a(63063),
    c = a(981631),
    d = a(332325),
    m = a(388032),
    x = a(347383),
    _ = a(83173);
function b(e) {
    let { transitionState: t, onClose: a } = e;
    return (0, s.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: x.modalRoot,
        parentComponent: 'MemberListContentLearnMoreModal',
        children: [
            (0, s.jsxs)(i.xBx, {
                separator: !1,
                className: x.modalHeader,
                children: [
                    (0, s.jsx)('div', {
                        className: x.imageFrame,
                        children: (0, s.jsx)('img', {
                            alt: m.intl.string(m.t.AWkQTk),
                            src: _,
                            className: x.heroImage
                        })
                    }),
                    (0, s.jsxs)('div', {
                        className: x.headerWrapper,
                        children: [
                            (0, s.jsx)(i.X6q, {
                                variant: 'heading-xl/bold',
                                children: m.intl.string(m.t.gb37Ky)
                            }),
                            (0, s.jsx)(r.Z, { className: x.betaTag })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(i.hzk, {
                className: x.modalContent,
                children: [
                    (0, s.jsxs)('div', {
                        className: x.modalContentFrame,
                        children: [
                            (0, s.jsx)(i.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: m.intl.string(m.t.WKxo8v)
                            }),
                            (0, s.jsx)(h, {})
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: x.modalFooter,
                        children: [
                            (0, s.jsx)(n.zx, {
                                onClick: a,
                                className: x.button,
                                children: m.intl.string(m.t['x/26d3'])
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                className: x.disclosureText,
                                children: m.intl.format(m.t['5Ey5Dw'], {
                                    recentActivityURL: l.Z.getArticleURL(c.BhN.MEMBER_LIST_ACTIVITY_FEED),
                                    handleActivityPrivacyClick: () => {
                                        (a(), (0, o.Z)(d.Z.ACTIVITY_PRIVACY));
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
let h = () => {
    let e = [
        {
            icon: (0, s.jsx)(i.iFz, { className: x.icon }),
            text: m.intl.string(m.t.vXBrdn)
        },
        {
            icon: (0, s.jsx)(i.iWm, { className: x.icon }),
            text: m.intl.string(m.t.aExjOz)
        },
        {
            icon: (0, s.jsx)(i.kBi, { className: x.icon }),
            text: m.intl.string(m.t['i7/QHB'])
        },
        {
            icon: (0, s.jsx)(i.lMe, { className: x.icon }),
            text: m.intl.string(m.t.ZmBfKC)
        }
    ];
    return (0, s.jsx)('div', {
        className: x.notes,
        children: e.map((e, t) => {
            let { icon: a, text: n } = e;
            return (0, s.jsxs)(
                'div',
                {
                    className: x.badgeNote,
                    children: [
                        (0, s.jsx)('div', {
                            className: x.badge,
                            children: a
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            children: n
                        })
                    ]
                },
                'memberlist-learn-more-note-'.concat(t)
            );
        })
    });
};
