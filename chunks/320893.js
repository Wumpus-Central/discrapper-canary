n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var i = n(780384),
    l = n(481060),
    a = n(410030),
    s = n(293810),
    o = n(388032),
    c = n(752651),
    d = n(934961),
    u = n(568294),
    m = n(867861),
    g = n(860790),
    p = n(268953),
    h = n(487703),
    f = n(458050),
    x = n(334364),
    b = n(431712);
function j(e) {
    return (0, i.wj)(e) ? c.revenueSharePercentageDark : c.revenueSharePercentageLight;
}
function v() {
    let e = (0, a.ZP)(),
        t = { backgroundColor: (0, i.wj)(e) ? '#2e3638' : 'var(--background-base-low)' };
    return (0, r.jsxs)('div', {
        className: c.earningsPreviewContainer,
        style: t,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o.intl.string(o.t.TXPK7O)
                    }),
                    (0, r.jsx)(l.LZC, { size: 8 }),
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/bold',
                        className: j(e),
                        children: o.intl.string(o.t.LdjJGx)
                    })
                ]
            }),
            (0, r.jsx)('img', {
                className: c.roundAvatar,
                src: h,
                alt: o.intl.string(o.t.NgjpTE)
            })
        ]
    });
}
function _() {
    let e = (0, a.ZP)();
    function t(e) {
        var t, n;
        let { length: i, horizontal: l } = e;
        return (0, r.jsx)('div', {
            className: l ? c.horizontalConnector : c.verticalConnector,
            style:
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, l ? { width: i } : { height: i })),
                (n = n = { border: '1px solid #49494933' }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
        });
    }
    return (0, r.jsxs)('div', {
        className: c.avatarGridContainer,
        'aria-label': o.intl.string(o.t['P2B/0d']),
        children: [
            (0, r.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, r.jsx)(t, { length: 24 }),
                    (0, r.jsx)('img', {
                        className: c.roundAvatar,
                        src: (0, i.wj)(e) ? d : u,
                        alt: ''
                    }),
                    (0, r.jsx)(t, {
                        horizontal: !0,
                        length: 12
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, r.jsx)(t, { length: 24 }),
                    (0, r.jsx)('img', {
                        className: c.roundAvatar,
                        src: m,
                        alt: ''
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, r.jsx)(t, { length: 12 }),
                    (0, r.jsx)('img', {
                        className: c.roundAvatar,
                        src: g,
                        alt: ''
                    }),
                    (0, r.jsx)(t, {
                        horizontal: !0,
                        length: 12
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, r.jsx)(t, { length: 12 }),
                    (0, r.jsx)('img', {
                        className: c.roundAvatar,
                        src: p,
                        alt: ''
                    })
                ]
            })
        ]
    });
}
function O() {
    return (0, r.jsxs)('div', {
        className: c.earningBenefitCard,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: o.intl.string(o.t['9CdmS0'])
            }),
            (0, r.jsx)(l.LZC, { size: 32 }),
            (0, r.jsx)(v, {}),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(_, {})
        ]
    });
}
function y() {
    return (0, r.jsxs)('div', {
        className: c.followerBenefitCard,
        children: [
            (0, r.jsx)(l.Text, {
                className: c.followerBenefitText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: o.intl.string(o.t.qsKRUV)
            }),
            (0, r.jsx)('img', {
                className: c.roleSubscriptionSocial,
                src: b,
                alt: o.intl.string(o.t.yTPpra)
            }),
            (0, r.jsx)('img', {
                className: c.roleSubscriptionLanyardIllo,
                src: x,
                alt: o.intl.string(o.t['+gd9QU'])
            })
        ]
    });
}
function C() {
    let e = (0, a.ZP)();
    return (0, r.jsxs)('div', {
        className: c.revenueShareBenefitCard,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)(l.X6q, {
                        className: j(e),
                        style: {
                            fontSize: '50px',
                            lineHeight: '52px'
                        },
                        variant: 'heading-xxl/extrabold',
                        children: [s.NT, '%']
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: o.intl.string(o.t.AewsXF)
                    })
                ]
            }),
            (0, r.jsx)('img', {
                className: c.roleSubscriptionEarningIllo,
                src: f,
                alt: o.intl.string(o.t.fD9Wv7)
            })
        ]
    });
}
function N() {
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: o.intl.string(o.t['1QHJaW'])
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsxs)('div', {
                className: c.creatorBenefitsContainer,
                children: [(0, r.jsx)(O, {}), (0, r.jsx)(y, {}), (0, r.jsx)(C, {})]
            })
        ]
    });
}
