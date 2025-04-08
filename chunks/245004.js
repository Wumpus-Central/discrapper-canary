n.d(t, {
    ZP: () => v,
    xm: () => b
}),
    n(953529);
var r = n(200651);
n(192379);
var i = n(399606),
    o = n(481060),
    a = n(607070),
    s = n(50101),
    l = n(388032),
    c = n(680278),
    u = n(501867),
    d = n(567949),
    f = n(552781),
    _ = n(952567),
    p = n(807159);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    let { heading: t, description: n, label: i, isEnabled: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.X6q, {
                className: u.topPerksCardHeading,
                variant: 'heading-lg/extrabold',
                children: t
            }),
            (0, r.jsx)(o.Text, {
                className: u.topPerksCardDescription,
                variant: 'text-sm/normal',
                children: n
            }),
            (0, r.jsxs)('div', {
                className: u.labelsContainer,
                children: [
                    null != i &&
                        (0, r.jsxs)('div', {
                            className: u.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(o.$Eu, {
                                    size: 'sm',
                                    color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    children: i
                                })
                            ]
                        }),
                    a &&
                        (0, r.jsxs)('div', {
                            className: u.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(o.owK, {
                                    size: 'custom',
                                    height: 14,
                                    width: 14,
                                    color: 'currentColor'
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: l.NW.string(l.t.pCMkDQ)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
function y(e) {
    var { imgSrc: t } = e,
        n = g(e, ['imgSrc']);
    return (0, r.jsxs)('div', {
        className: u.topPerksCard,
        children: [
            (0, r.jsx)('img', {
                className: u.topPerksCardImage,
                src: t,
                alt: ''
            }),
            (0, r.jsx)('div', {
                className: u.contentContainer,
                children: (0, r.jsx)(b, m({}, n))
            })
        ]
    });
}
let v = function (e) {
    let { guild: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        h = (0, s.Ek)(t.id, 'GuildBoostingMarketingTopPerksCards');
    return (0, r.jsxs)('div', {
        className: u.wrapper,
        children: [
            (0, r.jsx)(o.X6q, {
                className: u.heading,
                variant: 'heading-xxl/extrabold',
                children: l.NW.string(l.t.aGdB3N)
            }),
            (0, r.jsxs)('div', {
                className: u.topPerksCards,
                children: [
                    (0, r.jsx)(y, {
                        description: l.NW.string(l.t.wOYbTk),
                        heading: l.NW.string(l.t.G6jZo6),
                        imgSrc: n ? f : d,
                        label: h ? l.NW.string(c.Z.na6fmJ) : void 0
                    }),
                    (0, r.jsx)(y, {
                        description: l.NW.string(l.t.HTvLGh),
                        heading: l.NW.string(l.t.IpRQw8),
                        imgSrc: _,
                        label: h ? l.NW.string(c.Z.dyNT9v) : void 0
                    }),
                    (0, r.jsx)(y, {
                        description: l.NW.string(l.t.yCjoUF),
                        heading: l.NW.string(l.t['/bX4Ji']),
                        imgSrc: p,
                        label: h ? l.NW.string(c.Z['8AEGEx']) : void 0
                    })
                ]
            })
        ]
    });
};
