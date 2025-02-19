n.d(t, {
    Af: () => U,
    An: () => K,
    E6: () => Y,
    EE: () => B,
    Gk: () => J,
    Gt: () => x,
    OV: () => G,
    PZ: () => ee,
    Rg: () => X,
    U9: () => q,
    XF: () => Z,
    Yl: () => Q,
    ej: () => j,
    f: () => W,
    m7: () => k,
    n8: () => z,
    pQ: () => V,
    v1: () => H,
    wO: () => F
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
    f = n(442837),
    p = n(481060),
    _ = n(70956),
    h = n(823379),
    m = n(709054),
    g = n(719247),
    E = n(26033),
    v = n(22211),
    b = n(561308),
    y = n(797342),
    O = n(371991),
    S = n(206583),
    I = n(388032),
    T = n(790963);
function N(e, t, n) {
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = {
    [c.s.TOP_ARTIST]: [K],
    [c.s.PLAYED_GAME]: [G, B, U, q, F, W, z, H, V],
    [c.s.TOP_GAME]: [Y],
    [c.s.WATCHED_MEDIA]: [Q, X],
    [c.s.LAUNCHED_ACTIVITY]: [G, B, U, q, z, V]
};
var x = (function (e) {
    return (e[(e.CARD = 0)] = 'CARD'), (e[(e.POPOUT = 1)] = 'POPOUT'), (e[(e.STREAMING_POPOUT = 2)] = 'STREAMING_POPOUT'), (e[(e.GAME_PROFILE = 3)] = 'GAME_PROFILE'), (e[(e.USER_PROFILE = 4)] = 'USER_PROFILE'), (e[(e.EMBED = 5)] = 'EMBED'), (e[(e.LEADERBOARD_POPOUT = 6)] = 'LEADERBOARD_POPOUT'), (e[(e.OVERLAY = 7)] = 'OVERLAY'), e;
})({});
let L = i.createContext({});
function M() {
    return i.useContext(L);
}
function k(e) {
    var { children: t } = e,
        n = P(e, ['children']);
    return (0, r.jsx)('div', R(A({ className: T.badgeContainer }, n), { children: t }));
}
function j(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: o, showTooltip: a } = e,
        { defaultTextColor: s, defaultIconColor: l, location: c } = M();
    return (0, r.jsx)(p.ua7, {
        text: o,
        shouldShow: a,
        children: (e) =>
            (0, r.jsxs)(
                k,
                R(A({}, e), {
                    children: [
                        (0, r.jsx)(t, {
                            size: 'xxs',
                            color: null != i ? i : l
                        }),
                        (0, r.jsx)(p.Text, {
                            variant: 'text-xs/normal',
                            color: s,
                            className: T.badgeLabel,
                            scaleFontToUserSetting: 5 === c,
                            children: n
                        })
                    ]
                })
            )
    });
}
function U(e) {
    let { entry: t } = e,
        { channel: n } = (0, v.Z)(t),
        { location: i } = M();
    return null == n || (0, h.Hi)(i, [1, 2, 3, 4])
        ? null
        : (0, r.jsx)(j, {
              Icon: p.gj8,
              text: n.name
          });
}
function G(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = M(),
        s = (0, b.Jg)(t) && (0, h.Hi)(a, [0, 4, 7]),
        l = s ? p.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i,
        { streamPreviewUrl: u } = (0, v.Z)(t),
        d = null != u ? p.hGI : (0, E.Mq)(t) ? p.jje : p.iWm;
    return (0, r.jsxs)(k, {
        children: [
            (0, r.jsx)(d, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(O.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === a
            })
        ]
    });
}
function B(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = M(),
        { state: o, party: a } = (0, y.n)(t),
        s = (0, b.bT)(o, a);
    return null == s
        ? null
        : (0, r.jsxs)(k, {
              children: [
                  (0, r.jsx)(p.BFJ, {
                      size: 'xxs',
                      color: i
                  }),
                  (0, r.jsx)(p.Text, {
                      variant: 'text-xs/normal',
                      color: n,
                      lineClamp: 1,
                      children: s
                  })
              ]
          });
}
function Z(e) {
    var t;
    let { entry: n, hovered: i } = e,
        { defaultTextColor: o, defaultIconColor: a, location: s } = M(),
        l = (0, b.Jg)(n) && (0, h.Hi)(s, [0, 4]),
        c = l ? p.TVs.colors.TEXT_POSITIVE : a,
        u = l ? 'text-positive' : o,
        d = (0, f.e7)([g.Z], () => g.Z.getMatchingActivity(n)),
        _ = null == d ? void 0 : null === (t = d.timestamps) || void 0 === t ? void 0 : t.start;
    return null != _
        ? (0, r.jsxs)('div', {
              className: T.badgeContainer,
              children: [
                  (0, r.jsx)(p.aXf, {
                      size: 'xxs',
                      color: c
                  }),
                  (0, r.jsx)(O.x3, {
                      entry: { start: _ },
                      textColor: u,
                      hovered: i,
                      bold: !0
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: T.badgeContainer,
              children: [
                  (0, r.jsx)(p.aXf, {
                      size: 'xxs',
                      color: c
                  }),
                  (0, r.jsx)(O.ZP, {
                      entry: n,
                      textColor: u,
                      hovered: i,
                      bold: !0
                  })
              ]
          });
}
function F(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = (0, h.Hi)(n, [0, 3]) ? p.TVs.colors.STATUS_POSITIVE : void 0;
    return (0, b.Ol)(t)
        ? (0, r.jsx)(j, {
              Icon: p._IE,
              text: I.NW.string(I.t.keY6mZ),
              iconColor: i
          })
        : null;
}
function V(e) {
    let { entry: t } = e,
        { location: n } = M();
    if (!(0, b.V5)(t)) return null;
    let i = (0, b.kr)(t),
        o = 0 === n && !i,
        { text: a, tooltipText: s } = (0, b.zo)(t);
    return null == a
        ? null
        : (0, r.jsx)(j, {
              Icon: p.ANZ,
              text: a,
              tooltipText: s,
              showTooltip: o
          });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = 0 !== n,
        o = (0, b.dw)(t);
    if (null == o) return null;
    let a = (0, b.GE)(o);
    return (0, r.jsx)(j, {
        Icon: p.Oe7,
        showTooltip: !i,
        tooltipText: a,
        text: i ? a : I.NW.string(I.t.adnLsL)
    });
}
function W(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = (0, b.vU)(t);
    return (0, b.q_)(t)
        ? (0, r.jsx)(j, {
              Icon: p.qOE,
              showTooltip: 0 === n,
              text: I.NW.formatToPlainString(I.t['Klie/P'], { days: i }),
              tooltipText: I.NW.formatToPlainString(I.t.PwMe0t, { days: i })
          })
        : null;
}
function Y(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = 0 !== n,
        o = (0, b.yA)(t);
    if (null == o) return null;
    let a = i ? ' \u2014 ' : ': ',
        s = i ? I.t.C0Axoa : I.t.SDRHgo;
    return (0, r.jsx)(j, {
        Icon: p.rm8,
        text: (0, r.jsxs)(r.Fragment, {
            children: [I.NW.string(I.t['/50eHh']), a, I.NW.format(s, { hours: Math.round(o / _.Z.Seconds.HOUR) })]
        })
    });
}
function K(e) {
    var t;
    let { entry: n } = e,
        { location: i } = M(),
        o = null === (t = (0, b.PJ)(n, u.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
    if (null == o) return null;
    let a = (0, h.Hi)(i, [1, 2, 5]) ? I.NW.formatToPlainString(I.t.HtifnJ, { count: o }) : I.NW.formatToPlainString(I.t['jq/Bmp'], { count: o });
    return (0, r.jsx)(j, {
        Icon: p.rm8,
        text: a
    });
}
function z(e) {
    let { entry: t } = e,
        { location: n } = M();
    if (3 === n) return null;
    let i = (0, b.ig)(t);
    return null == i || i === d.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(j, {
              Icon: p.YqE,
              text: I.NW.string(I.t.kAlUs7)
          });
}
function q(e) {
    let { entry: t } = e,
        { location: n } = M();
    if (3 === n) return null;
    let i = m.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), 'days') > S.G
        ? null
        : (0, r.jsx)(j, {
              Icon: p.rIT,
              text: I.NW.string(I.t.vYuyWV)
          });
}
function Q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = M(),
        s = (0, b.Jg)(t) && 4 === a,
        l = s ? p.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i;
    return (0, r.jsxs)('div', {
        className: T.badgeContainer,
        children: [
            (0, r.jsx)(p.ARS, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(O.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function X(e) {
    let { entry: t } = e,
        n = (0, b.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, r.jsx)(j, {
              Icon: p.sVe,
              text: n
          });
}
function J(e) {
    let t,
        { location: n, children: i, className: o } = e;
    return (
        (t = (0, h.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: p.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === n
              ? { defaultTextColor: 'interactive-normal' }
              : 3 === n
                ? { defaultTextColor: 'text-muted' }
                : { defaultTextColor: 'text-secondary' }),
        (0, r.jsx)(L.Provider, {
            value: A({ location: n }, t),
            children: (0, r.jsx)('div', {
                className: a()(
                    T.badgesContainer,
                    {
                        [T.badgesContainerCard]: 0 === n,
                        [T.badgesContainerPopout]: (0, h.Hi)(n, [1, 2]),
                        [T.badgesContainerGameProfile]: 3 === n
                    },
                    o
                ),
                children: i
            })
        })
    );
}
function $(e) {
    switch (e.content_type) {
        case c.s.TOP_ARTIST:
            return D[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.PLAYED_GAME:
            return D[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.TOP_GAME:
            return D[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.WATCHED_MEDIA:
            return D[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.LAUNCHED_ACTIVITY:
            return D[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        default:
            return null;
    }
}
function ee(e) {
    let { entry: t, location: n, className: i } = e,
        o = $(t);
    return null == o
        ? null
        : (0, r.jsx)(J, {
              location: n,
              className: i,
              children: o
          });
}
