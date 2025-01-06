n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    a = n(410030),
    s = n(293810),
    o = n(388032),
    c = n(552091),
    d = n(934961),
    u = n(568294),
    m = n(867861),
    h = n(860790),
    g = n(268953),
    x = n(487703),
    p = n(458050),
    f = n(334364),
    C = n(431712);
function v(e) {
    return (0, r.wj)(e) ? c.revenueSharePercentageDark : c.revenueSharePercentageLight;
}
function _() {
    let e = (0, a.ZP)(),
        t = { backgroundColor: (0, r.wj)(e) ? '#2e3638' : 'var(--background-primary)' };
    return (0, i.jsxs)('div', {
        className: c.earningsPreviewContainer,
        style: t,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o.intl.string(o.t.TXPK7O)
                    }),
                    (0, i.jsx)(l.Spacer, { size: 8 }),
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/bold',
                        className: v(e),
                        children: o.intl.string(o.t.LdjJGx)
                    })
                ]
            }),
            (0, i.jsx)('img', {
                className: c.roundAvatar,
                src: x,
                alt: o.intl.string(o.t.NgjpTE)
            })
        ]
    });
}
function I() {
    let e = (0, a.ZP)();
    function t(e) {
        let { length: t, horizontal: n } = e;
        return (0, i.jsx)('div', {
            className: n ? c.horizontalConnector : c.verticalConnector,
            style: {
                ...(n ? { width: t } : { height: t }),
                border: '1px solid #49494933'
            }
        });
    }
    return (0, i.jsxs)('div', {
        className: c.avatarGridContainer,
        'aria-label': o.intl.string(o.t['P2B/0d']),
        children: [
            (0, i.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, i.jsx)(t, { length: 24 }),
                    (0, i.jsx)('img', {
                        className: c.roundAvatar,
                        src: (0, r.wj)(e) ? d : u,
                        alt: ''
                    }),
                    (0, i.jsx)(t, {
                        horizontal: !0,
                        length: 12
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, i.jsx)(t, { length: 24 }),
                    (0, i.jsx)('img', {
                        className: c.roundAvatar,
                        src: m,
                        alt: ''
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, i.jsx)(t, { length: 12 }),
                    (0, i.jsx)('img', {
                        className: c.roundAvatar,
                        src: h,
                        alt: ''
                    }),
                    (0, i.jsx)(t, {
                        horizontal: !0,
                        length: 12
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, i.jsx)(t, { length: 12 }),
                    (0, i.jsx)('img', {
                        className: c.roundAvatar,
                        src: g,
                        alt: ''
                    })
                ]
            })
        ]
    });
}
function N() {
    return (0, i.jsxs)('div', {
        className: c.earningBenefitCard,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: o.intl.string(o.t['9CdmS0'])
            }),
            (0, i.jsx)(l.Spacer, { size: 32 }),
            (0, i.jsx)(_, {}),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsx)(I, {})
        ]
    });
}
function T() {
    return (0, i.jsxs)('div', {
        className: c.followerBenefitCard,
        children: [
            (0, i.jsx)(l.Text, {
                className: c.followerBenefitText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: o.intl.string(o.t.qsKRUV)
            }),
            (0, i.jsx)('img', {
                className: c.roleSubscriptionSocial,
                src: C,
                alt: o.intl.string(o.t.yTPpra)
            }),
            (0, i.jsx)('img', {
                className: c.roleSubscriptionLanyardIllo,
                src: f,
                alt: o.intl.string(o.t['+gd9QU'])
            })
        ]
    });
}
function j() {
    let e = (0, a.ZP)();
    return (0, i.jsxs)('div', {
        className: c.revenueShareBenefitCard,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(l.Heading, {
                        className: v(e),
                        style: {
                            fontSize: '50px',
                            lineHeight: '52px'
                        },
                        variant: 'heading-xxl/extrabold',
                        children: [s.NT, '%']
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: o.intl.string(o.t.AewsXF)
                    })
                ]
            }),
            (0, i.jsx)('img', {
                className: c.roleSubscriptionEarningIllo,
                src: p,
                alt: o.intl.string(o.t.fD9Wv7)
            })
        ]
    });
}
function b() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: o.intl.string(o.t['1QHJaW'])
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsxs)('div', {
                className: c.creatorBenefitsContainer,
                children: [(0, i.jsx)(N, {}), (0, i.jsx)(T, {}), (0, i.jsx)(j, {})]
            })
        ]
    });
}
