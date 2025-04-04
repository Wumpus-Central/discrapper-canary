n.d(t, {
    ZP: () => O,
    xm: () => y
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(399606),
    o = n(481060),
    a = n(607070),
    s = n(413335),
    l = n(50101),
    c = n(388032),
    u = n(680278),
    d = n(501867),
    f = n(567949),
    _ = n(552781),
    p = n(952567),
    h = n(807159);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    let { heading: t, description: n, label: i, isEnabled: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.X6q, {
                className: d.topPerksCardHeading,
                variant: 'heading-lg/extrabold',
                children: t
            }),
            (0, r.jsx)(o.Text, {
                className: d.topPerksCardDescription,
                variant: 'text-sm/normal',
                children: n
            }),
            (0, r.jsxs)('div', {
                className: d.labelsContainer,
                children: [
                    null != i &&
                        (0, r.jsxs)('div', {
                            className: d.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(s.Z, {}),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    children: i
                                })
                            ]
                        }),
                    a &&
                        (0, r.jsxs)('div', {
                            className: d.topPerksCardLabelContainer,
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
                                    children: c.NW.string(c.t.pCMkDQ)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
function v(e) {
    var { imgSrc: t } = e,
        n = E(e, ['imgSrc']);
    return (0, r.jsxs)('div', {
        className: d.topPerksCard,
        children: [
            (0, r.jsx)('img', {
                className: d.topPerksCardImage,
                src: t,
                alt: ''
            }),
            (0, r.jsx)('div', {
                className: d.contentContainer,
                children: (0, r.jsx)(y, g({}, n))
            })
        ]
    });
}
let O = function (e) {
    let { guild: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        s = (0, l.Ek)(t.id, 'GuildBoostingMarketingTopPerksCards');
    return (0, r.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, r.jsx)(o.X6q, {
                className: d.heading,
                variant: 'heading-xxl/extrabold',
                children: c.NW.string(c.t.aGdB3N)
            }),
            (0, r.jsxs)('div', {
                className: d.topPerksCards,
                children: [
                    (0, r.jsx)(v, {
                        description: c.NW.string(c.t.wOYbTk),
                        heading: c.NW.string(c.t.G6jZo6),
                        imgSrc: n ? _ : f,
                        label: s ? c.NW.string(u.Z.na6fmJ) : void 0
                    }),
                    (0, r.jsx)(v, {
                        description: c.NW.string(c.t.HTvLGh),
                        heading: c.NW.string(c.t.IpRQw8),
                        imgSrc: p,
                        label: s ? c.NW.string(u.Z.dyNT9v) : void 0
                    }),
                    (0, r.jsx)(v, {
                        description: c.NW.string(c.t.yCjoUF),
                        heading: c.NW.string(c.t['/bX4Ji']),
                        imgSrc: h,
                        label: s ? c.NW.string(u.Z['8AEGEx']) : void 0
                    })
                ]
            })
        ]
    });
};
