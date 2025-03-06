n.d(t, {
    Af: () => k,
    An: () => W,
    E6: () => H,
    EE: () => U,
    Gk: () => Q,
    Gt: () => D,
    OV: () => j,
    PZ: () => J,
    Rg: () => q,
    U9: () => K,
    XF: () => G,
    Yl: () => z,
    ej: () => M,
    f: () => Z,
    m7: () => x,
    n8: () => Y,
    pQ: () => V,
    v1: () => F,
    wO: () => B
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(913527),
    l = n.n(s),
    c = n(876215),
    u = n(884439),
    d = n(705512),
    f = n(481060),
    _ = n(70956),
    p = n(823379),
    h = n(709054),
    g = n(26033),
    m = n(22211),
    E = n(561308),
    v = n(797342),
    b = n(371991),
    y = n(206583),
    O = n(388032),
    S = n(425507);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = {
    [c.s.TOP_ARTIST]: [W],
    [c.s.PLAYED_GAME]: [j, U, k, K, B, Z, Y, F, V],
    [c.s.TOP_GAME]: [H],
    [c.s.WATCHED_MEDIA]: [z, q],
    [c.s.LAUNCHED_ACTIVITY]: [j, U, k, K, Y, V]
};
var D = (function (e) {
    return (e[(e.CARD = 0)] = 'CARD'), (e[(e.POPOUT = 1)] = 'POPOUT'), (e[(e.STREAMING_POPOUT = 2)] = 'STREAMING_POPOUT'), (e[(e.GAME_PROFILE = 3)] = 'GAME_PROFILE'), (e[(e.USER_PROFILE = 4)] = 'USER_PROFILE'), (e[(e.EMBED = 5)] = 'EMBED'), (e[(e.LEADERBOARD_POPOUT = 6)] = 'LEADERBOARD_POPOUT'), (e[(e.OVERLAY = 7)] = 'OVERLAY'), e;
})({});
let w = i.createContext({});
function L() {
    return i.useContext(w);
}
function x(e) {
    var { children: t } = e,
        n = C(e, ['children']);
    return (0, r.jsx)('div', A(T({ className: S.badgeContainer }, n), { children: t }));
}
function M(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: o, showTooltip: a } = e,
        { defaultTextColor: s, defaultIconColor: l, location: c } = L();
    return (0, r.jsx)(f.ua7, {
        text: o,
        shouldShow: a,
        children: (e) =>
            (0, r.jsxs)(
                x,
                A(T({}, e), {
                    children: [
                        (0, r.jsx)(t, {
                            size: 'xxs',
                            color: null != i ? i : l
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: 'text-xs/normal',
                            color: s,
                            className: S.badgeLabel,
                            scaleFontToUserSetting: 5 === c,
                            children: n
                        })
                    ]
                })
            )
    });
}
function k(e) {
    let { entry: t } = e,
        { channel: n } = (0, m.Z)(t),
        { location: i } = L();
    return null == n || (0, p.Hi)(i, [1, 2, 3, 4])
        ? null
        : (0, r.jsx)(M, {
              Icon: f.gj8,
              text: n.name
          });
}
function j(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = L(),
        s = (0, E.Jg)(t) && (0, p.Hi)(a, [0, 4, 7]),
        l = s ? f.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i,
        { streamPreviewUrl: u } = (0, m.Z)(t),
        d = null != u ? f.hGI : (0, g.Mq)(t) ? f.jje : f.iWm;
    return (0, r.jsxs)(x, {
        children: [
            (0, r.jsx)(d, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(b.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === a
            })
        ]
    });
}
function U(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = L(),
        { state: o, party: a } = (0, v.n)(t),
        s = (0, E.bT)(o, a);
    return null == s
        ? null
        : (0, r.jsxs)(x, {
              children: [
                  (0, r.jsx)(f.BFJ, {
                      size: 'xxs',
                      color: i
                  }),
                  (0, r.jsx)(f.Text, {
                      variant: 'text-xs/normal',
                      color: n,
                      lineClamp: 1,
                      children: s
                  })
              ]
          });
}
function G(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = L(),
        s = (0, E.Jg)(t) && (0, p.Hi)(a, [0, 4]),
        l = s ? f.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i;
    return (0, r.jsxs)('div', {
        className: S.badgeContainer,
        children: [
            (0, r.jsx)(f.aXf, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(b.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = (0, p.Hi)(n, [0, 3]) ? f.TVs.colors.STATUS_POSITIVE : void 0;
    return (0, E.Ol)(t)
        ? (0, r.jsx)(M, {
              Icon: f._IE,
              text: O.NW.string(O.t.keY6mZ),
              iconColor: i
          })
        : null;
}
function V(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (!(0, E.V5)(t)) return null;
    let i = (0, E.kr)(t),
        o = 0 === n && !i,
        { text: a, tooltipText: s } = (0, E.zo)(t);
    return null == a
        ? null
        : (0, r.jsx)(M, {
              Icon: f.ANZ,
              text: a,
              tooltipText: s,
              showTooltip: o
          });
}
function F(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = 0 !== n,
        o = (0, E.dw)(t);
    if (null == o) return null;
    let a = (0, E.GE)(o);
    return (0, r.jsx)(M, {
        Icon: f.Oe7,
        showTooltip: !i,
        tooltipText: a,
        text: i ? a : O.NW.string(O.t.adnLsL)
    });
}
function Z(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = (0, E.vU)(t);
    return (0, E.q_)(t)
        ? (0, r.jsx)(M, {
              Icon: f.qOE,
              showTooltip: 0 === n,
              text: O.NW.formatToPlainString(O.t['Klie/P'], { days: i }),
              tooltipText: O.NW.formatToPlainString(O.t.PwMe0t, { days: i })
          })
        : null;
}
function H(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = 0 !== n,
        o = (0, E.yA)(t);
    if (null == o) return null;
    let a = i ? ' \u2014 ' : ': ',
        s = i ? O.t.C0Axoa : O.t.SDRHgo;
    return (0, r.jsx)(M, {
        Icon: f.rm8,
        text: (0, r.jsxs)(r.Fragment, {
            children: [O.NW.string(O.t['/50eHh']), a, O.NW.format(s, { hours: Math.round(o / _.Z.Seconds.HOUR) })]
        })
    });
}
function W(e) {
    var t;
    let { entry: n } = e,
        { location: i } = L(),
        o = null === (t = (0, E.PJ)(n, u.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
    if (null == o) return null;
    let a = (0, p.Hi)(i, [1, 2, 5]) ? O.NW.formatToPlainString(O.t.HtifnJ, { count: o }) : O.NW.formatToPlainString(O.t['jq/Bmp'], { count: o });
    return (0, r.jsx)(M, {
        Icon: f.rm8,
        text: a
    });
}
function Y(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let i = (0, E.ig)(t);
    return null == i || i === d.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(M, {
              Icon: f.YqE,
              text: O.NW.string(O.t.kAlUs7)
          });
}
function K(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let i = h.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), 'days') > y.G
        ? null
        : (0, r.jsx)(M, {
              Icon: f.rIT,
              text: O.NW.string(O.t.vYuyWV)
          });
}
function z(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = L(),
        s = (0, E.Jg)(t) && 4 === a,
        l = s ? f.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i;
    return (0, r.jsxs)('div', {
        className: S.badgeContainer,
        children: [
            (0, r.jsx)(f.ARS, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(b.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function q(e) {
    let { entry: t } = e,
        n = (0, E.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, r.jsx)(M, {
              Icon: f.sVe,
              text: n
          });
}
function Q(e) {
    let t,
        { location: n, children: i, className: o } = e;
    return (
        (t = (0, p.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: f.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === n
              ? { defaultTextColor: 'interactive-normal' }
              : 3 === n
                ? { defaultTextColor: 'text-muted' }
                : { defaultTextColor: 'text-secondary' }),
        (0, r.jsx)(w.Provider, {
            value: T({ location: n }, t),
            children: (0, r.jsx)('div', {
                className: a()(
                    S.badgesContainer,
                    {
                        [S.badgesContainerCard]: 0 === n,
                        [S.badgesContainerPopout]: (0, p.Hi)(n, [1, 2]),
                        [S.badgesContainerGameProfile]: 3 === n
                    },
                    o
                ),
                children: i
            })
        })
    );
}
function X(e) {
    switch (e.content_type) {
        case c.s.TOP_ARTIST:
            return P[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.PLAYED_GAME:
            return P[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.TOP_GAME:
            return P[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.WATCHED_MEDIA:
            return P[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.LAUNCHED_ACTIVITY:
            return P[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        default:
            return null;
    }
}
function J(e) {
    let { entry: t, location: n, className: i } = e,
        o = X(t);
    return null == o
        ? null
        : (0, r.jsx)(Q, {
              location: n,
              className: i,
              children: o
          });
}
