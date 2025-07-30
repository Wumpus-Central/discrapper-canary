(n.d(t, {
    ZP: () => y,
    xm: () => E
}),
    n(953529));
var r = n(255367);
n(73800);
var i = n(399606),
    a = n(481060),
    o = n(607070),
    s = n(388032),
    l = n(93841),
    c = n(501867),
    u = n(567949),
    d = n(552781),
    f = n(952567),
    _ = n(807159);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function E(e) {
    let { heading: t, description: n, label: i, isEnabled: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                className: c.topPerksCardHeading,
                variant: 'heading-lg/extrabold',
                children: t
            }),
            (0, r.jsx)(a.Text, {
                className: c.topPerksCardDescription,
                variant: 'text-sm/normal',
                children: n
            }),
            (0, r.jsxs)('div', {
                className: c.labelsContainer,
                children: [
                    null != i &&
                        (0, r.jsxs)('div', {
                            className: c.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(a.$Eu, {
                                    size: 'sm',
                                    color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    children: i
                                })
                            ]
                        }),
                    o &&
                        (0, r.jsxs)('div', {
                            className: c.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(a.owK, {
                                    size: 'custom',
                                    height: 14,
                                    width: 14,
                                    color: 'currentColor'
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: s.intl.string(s.t.pCMkDQ)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
function b(e) {
    var { imgSrc: t } = e,
        n = m(e, ['imgSrc']);
    return (0, r.jsxs)('div', {
        className: c.topPerksCard,
        children: [
            (0, r.jsx)('img', {
                className: c.topPerksCardImage,
                src: t,
                alt: ''
            }),
            (0, r.jsx)('div', {
                className: c.contentContainer,
                children: (0, r.jsx)(E, h({}, n))
            })
        ]
    });
}
let y = function () {
    let e = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: c.wrapper,
        children: [
            (0, r.jsx)(a.X6q, {
                className: c.heading,
                variant: 'heading-xxl/extrabold',
                children: s.intl.string(s.t.aGdB3N)
            }),
            (0, r.jsxs)('div', {
                className: c.topPerksCards,
                children: [
                    (0, r.jsx)(b, {
                        description: s.intl.string(s.t.wOYbTk),
                        heading: s.intl.string(s.t.G6jZo6),
                        imgSrc: e ? d : u,
                        label: s.intl.string(l.default.na6fmJ)
                    }),
                    (0, r.jsx)(b, {
                        description: s.intl.string(s.t.HTvLGh),
                        heading: s.intl.string(s.t.IpRQw8),
                        imgSrc: f,
                        label: s.intl.string(l.default.dyNT9v)
                    }),
                    (0, r.jsx)(b, {
                        description: s.intl.string(s.t.yCjoUF),
                        heading: s.intl.string(s.t['/bX4Ji']),
                        imgSrc: _,
                        label: s.intl.string(l.default['8AEGEx'])
                    })
                ]
            })
        ]
    });
};
