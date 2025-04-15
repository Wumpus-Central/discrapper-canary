n.d(t, {
    Af: () => j,
    An: () => Y,
    E6: () => W,
    EE: () => G,
    Gk: () => X,
    Gt: () => D,
    OV: () => U,
    PZ: () => $,
    Rg: () => Q,
    U9: () => z,
    XF: () => B,
    Yl: () => q,
    ej: () => k,
    f: () => H,
    m7: () => M,
    n8: () => K,
    pQ: () => V,
    v1: () => Z,
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
    f = n(481060),
    _ = n(456100),
    p = n(70956),
    h = n(823379),
    m = n(709054),
    g = n(26033),
    E = n(22211),
    b = n(561308),
    y = n(797342),
    v = n(371991),
    O = n(206583),
    I = n(388032),
    S = n(859589);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = {
    [c.s.TOP_ARTIST]: [Y],
    [c.s.PLAYED_GAME]: [U, G, j, z, F, H, K, Z, V],
    [c.s.TOP_GAME]: [W],
    [c.s.WATCHED_MEDIA]: [q, Q],
    [c.s.LAUNCHED_ACTIVITY]: [U, G, j, z, K, V]
};
var D = (function (e) {
    return (e[(e.CARD = 0)] = 'CARD'), (e[(e.POPOUT = 1)] = 'POPOUT'), (e[(e.STREAMING_POPOUT = 2)] = 'STREAMING_POPOUT'), (e[(e.GAME_PROFILE = 3)] = 'GAME_PROFILE'), (e[(e.USER_PROFILE = 4)] = 'USER_PROFILE'), (e[(e.EMBED = 5)] = 'EMBED'), (e[(e.LEADERBOARD_POPOUT = 6)] = 'LEADERBOARD_POPOUT'), (e[(e.OVERLAY = 7)] = 'OVERLAY'), (e[(e.FRIENDS_POPOUT = 8)] = 'FRIENDS_POPOUT'), e;
})({});
let L = i.createContext({});
function x() {
    return i.useContext(L);
}
function M(e) {
    var { children: t } = e,
        n = R(e, ['children']);
    return (0, r.jsx)('div', C(N({ className: S.badgeContainer }, n), { children: t }));
}
function k(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: o, showTooltip: a } = e,
        { defaultTextColor: s, defaultIconColor: l, location: c } = x();
    return (0, r.jsx)(f.ua7, {
        text: o,
        shouldShow: a,
        children: (e) =>
            (0, r.jsxs)(
                M,
                C(N({}, e), {
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
function j(e) {
    let { entry: t } = e,
        { channel: n } = (0, E.Z)(t),
        { location: i } = x();
    return null == n || (0, h.Hi)(i, [1, 2, 3, 4])
        ? null
        : (0, r.jsx)(k, {
              Icon: f.gj8,
              text: n.name
          });
}
function U(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = x(),
        s = (0, b.Jg)(t) && (0, h.Hi)(a, [0, 4, 7]),
        l = s ? f.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i,
        { streamPreviewUrl: u } = (0, E.Z)(t),
        { enabled: d } = _.c.useExperiment({ location: 'GameTimestampBadge' }, { autoTrackExposure: !0 }),
        p = null != u ? f.hGI : (0, g.Mq)(t) && !d ? f.jje : f.iWm;
    return (0, r.jsxs)(M, {
        children: [
            (0, r.jsx)(p, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(v.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === a
            })
        ]
    });
}
function G(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = x(),
        { state: o, party: a } = (0, y.n)(t),
        s = (0, b.bT)(o, a);
    return null == s
        ? null
        : (0, r.jsxs)(M, {
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
function B(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = x(),
        s = (0, b.Jg)(t) && (0, h.Hi)(a, [0, 4]),
        l = s ? f.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i;
    return (0, r.jsxs)('div', {
        className: S.badgeContainer,
        children: [
            (0, r.jsx)(f.RZG, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(v.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function F(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = (0, h.Hi)(n, [0, 3]) ? f.TVs.colors.STATUS_POSITIVE : void 0;
    return (0, b.Ol)(t)
        ? (0, r.jsx)(k, {
              Icon: f._IE,
              text: I.NW.string(I.t.keY6mZ),
              iconColor: i
          })
        : null;
}
function V(e) {
    let { entry: t } = e,
        { location: n } = x();
    if (!(0, b.V5)(t)) return null;
    let i = (0, b.kr)(t),
        o = 0 === n && !i,
        { text: a, tooltipText: s } = (0, b.zo)(t);
    return null == a
        ? null
        : (0, r.jsx)(k, {
              Icon: f.ANZ,
              text: a,
              tooltipText: s,
              showTooltip: o
          });
}
function Z(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = 0 !== n,
        o = (0, b.dw)(t);
    if (null == o) return null;
    let a = (0, b.GE)(o);
    return (0, r.jsx)(k, {
        Icon: f.Oe7,
        showTooltip: !i,
        tooltipText: a,
        text: i ? a : I.NW.string(I.t.adnLsL)
    });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = (0, b.vU)(t);
    return (0, b.q_)(t)
        ? (0, r.jsx)(k, {
              Icon: f.qOE,
              showTooltip: 0 === n,
              text: I.NW.formatToPlainString(I.t['Klie/P'], { days: i }),
              tooltipText: I.NW.formatToPlainString(I.t.PwMe0t, { days: i })
          })
        : null;
}
function W(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = 0 !== n,
        o = (0, b.yA)(t);
    if (null == o) return null;
    let a = i ? ' \u2014 ' : ': ',
        s = i ? I.t.C0Axoa : I.t.SDRHgo;
    return (0, r.jsx)(k, {
        Icon: f.rm8,
        text: (0, r.jsxs)(r.Fragment, {
            children: [I.NW.string(I.t['/50eHh']), a, I.NW.format(s, { hours: Math.round(o / p.Z.Seconds.HOUR) })]
        })
    });
}
function Y(e) {
    var t;
    let { entry: n } = e,
        { location: i } = x(),
        o = null == (t = (0, b.PJ)(n, u.N.AGGREGATE_COUNT)) ? void 0 : t.count;
    if (null == o) return null;
    let a = (0, h.Hi)(i, [1, 2, 5]) ? I.NW.formatToPlainString(I.t.HtifnJ, { count: o }) : I.NW.formatToPlainString(I.t['jq/Bmp'], { count: o });
    return (0, r.jsx)(k, {
        Icon: f.rm8,
        text: a
    });
}
function K(e) {
    let { entry: t } = e,
        { location: n } = x();
    if (3 === n) return null;
    let i = (0, b.ig)(t);
    return null == i || i === d.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(k, {
              Icon: f.YqE,
              text: I.NW.string(I.t.kAlUs7)
          });
}
function z(e) {
    let { entry: t } = e,
        { location: n } = x();
    if (3 === n) return null;
    let i = m.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), 'days') > O.G
        ? null
        : (0, r.jsx)(k, {
              Icon: f.rIT,
              text: I.NW.string(I.t.vYuyWV)
          });
}
function q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: o, location: a } = x(),
        s = (0, b.Jg)(t) && 4 === a,
        l = s ? f.TVs.colors.TEXT_POSITIVE : o,
        c = s ? 'text-positive' : i;
    return (0, r.jsxs)('div', {
        className: S.badgeContainer,
        children: [
            (0, r.jsx)(f.ARS, {
                size: 'xxs',
                color: l
            }),
            (0, r.jsx)(v.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function Q(e) {
    let { entry: t } = e,
        n = (0, b.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, r.jsx)(k, {
              Icon: f.sVe,
              text: n
          });
}
function X(e) {
    let t,
        { location: n, children: i, className: o } = e;
    return (
        (t = (0, h.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: f.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === n
              ? { defaultTextColor: 'interactive-normal' }
              : 3 === n
                ? { defaultTextColor: 'text-muted' }
                : { defaultTextColor: 'text-secondary' }),
        (0, r.jsx)(L.Provider, {
            value: N({ location: n }, t),
            children: (0, r.jsx)('div', {
                className: a()(
                    S.badgesContainer,
                    {
                        [S.badgesContainerCard]: 0 === n,
                        [S.badgesContainerPopout]: (0, h.Hi)(n, [1, 2]),
                        [S.badgesContainerGameProfile]: 3 === n
                    },
                    o
                ),
                children: i
            })
        })
    );
}
function J(e) {
    switch (e.content_type) {
        case c.s.TOP_ARTIST:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.PLAYED_GAME:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.TOP_GAME:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.WATCHED_MEDIA:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.s.LAUNCHED_ACTIVITY:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        default:
            return null;
    }
}
function $(e) {
    let { entry: t, location: n, className: i } = e,
        o = J(t);
    return null == o
        ? null
        : (0, r.jsx)(X, {
              location: n,
              className: i,
              children: o
          });
}
