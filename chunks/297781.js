n.d(t, {
    Af: () => L,
    An: () => F,
    E6: () => Z,
    EE: () => w,
    Gk: () => W,
    Gt: () => C,
    OV: () => P,
    PZ: () => z,
    Rg: () => Y,
    U9: () => j,
    XF: () => M,
    Yl: () => H,
    ej: () => x,
    f: () => B,
    m7: () => D,
    n8: () => V,
    pQ: () => U,
    v1: () => G,
    wO: () => k
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(876215),
    c = n(884439),
    d = n(705512),
    f = n(442837),
    _ = n(481060),
    p = n(70956),
    h = n(823379),
    m = n(709054),
    g = n(719247),
    E = n(26033),
    v = n(22211),
    y = n(561308),
    I = n(797342),
    b = n(371991),
    T = n(206583),
    S = n(388032),
    A = n(455887);
let N = {
    [u.s.TOP_ARTIST]: [F],
    [u.s.PLAYED_GAME]: [P, w, L, j, k, B, V, G, U],
    [u.s.TOP_GAME]: [Z],
    [u.s.WATCHED_MEDIA]: [H, Y],
    [u.s.LAUNCHED_ACTIVITY]: [P, w, L, j, V, U]
};
var C = (function (e) {
    return (e[(e.CARD = 0)] = 'CARD'), (e[(e.POPOUT = 1)] = 'POPOUT'), (e[(e.STREAMING_POPOUT = 2)] = 'STREAMING_POPOUT'), (e[(e.GAME_PROFILE = 3)] = 'GAME_PROFILE'), (e[(e.USER_PROFILE = 4)] = 'USER_PROFILE'), (e[(e.EMBED = 5)] = 'EMBED'), (e[(e.LEADERBOARD_POPOUT = 6)] = 'LEADERBOARD_POPOUT'), (e[(e.OVERLAY = 7)] = 'OVERLAY'), e;
})({});
let R = r.createContext({});
function O() {
    return r.useContext(R);
}
function D(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)('div', {
        className: A.badgeContainer,
        ...n,
        children: t
    });
}
function x(e) {
    let { Icon: t, text: n, iconColor: r, tooltipText: a, showTooltip: s } = e,
        { defaultTextColor: o, defaultIconColor: l, location: u } = O();
    return (0, i.jsx)(_.ua7, {
        text: a,
        shouldShow: s,
        children: (e) =>
            (0, i.jsxs)(D, {
                ...e,
                children: [
                    (0, i.jsx)(t, {
                        size: 'xxs',
                        color: null != r ? r : l
                    }),
                    (0, i.jsx)(_.Text, {
                        variant: 'text-xs/normal',
                        color: o,
                        className: A.badgeLabel,
                        scaleFontToUserSetting: 5 === u,
                        children: n
                    })
                ]
            })
    });
}
function L(e) {
    let { entry: t } = e,
        { channel: n } = (0, v.Z)(t),
        { location: r } = O();
    return null == n || (0, h.Hi)(r, [1, 2, 3, 4])
        ? null
        : (0, i.jsx)(x, {
              Icon: _.gj8,
              text: n.name
          });
}
function P(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: a, location: s } = O(),
        o = (0, y.Jg)(t) && (0, h.Hi)(s, [0, 4, 7]),
        l = o ? _.TVs.colors.TEXT_POSITIVE : a,
        u = o ? 'text-positive' : r,
        { streamPreviewUrl: c } = (0, v.Z)(t),
        d = null != c ? _.hGI : (0, E.Mq)(t) ? _.jje : _.iWm;
    return (0, i.jsxs)(D, {
        children: [
            (0, i.jsx)(d, {
                size: 'xxs',
                color: l
            }),
            (0, i.jsx)(b.ZP, {
                entry: t,
                textColor: u,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === s
            })
        ]
    });
}
function w(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: r } = O(),
        { state: a, party: s } = (0, I.n)(t),
        o = (0, y.bT)(a, s);
    return null == o
        ? null
        : (0, i.jsxs)(D, {
              children: [
                  (0, i.jsx)(_.BFJ, {
                      size: 'xxs',
                      color: r
                  }),
                  (0, i.jsx)(_.Text, {
                      variant: 'text-xs/normal',
                      color: n,
                      lineClamp: 1,
                      children: o
                  })
              ]
          });
}
function M(e) {
    var t;
    let { entry: n, hovered: r } = e,
        { defaultTextColor: a, defaultIconColor: s, location: o } = O(),
        l = (0, y.Jg)(n) && (0, h.Hi)(o, [0, 4]),
        u = l ? _.TVs.colors.TEXT_POSITIVE : s,
        c = l ? 'text-positive' : a,
        d = (0, f.e7)([g.Z], () => g.Z.getMatchingActivity(n)),
        p = null == d ? void 0 : null === (t = d.timestamps) || void 0 === t ? void 0 : t.start;
    return null != p
        ? (0, i.jsxs)('div', {
              className: A.badgeContainer,
              children: [
                  (0, i.jsx)(_.aXf, {
                      size: 'xxs',
                      color: u
                  }),
                  (0, i.jsx)(b.x3, {
                      entry: { start: p },
                      textColor: c,
                      hovered: r,
                      bold: !0
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: A.badgeContainer,
              children: [
                  (0, i.jsx)(_.aXf, {
                      size: 'xxs',
                      color: u
                  }),
                  (0, i.jsx)(b.ZP, {
                      entry: n,
                      textColor: c,
                      hovered: r,
                      bold: !0
                  })
              ]
          });
}
function k(e) {
    let { entry: t } = e,
        { location: n } = O(),
        r = (0, h.Hi)(n, [0, 3]) ? _.TVs.colors.STATUS_POSITIVE : void 0;
    return (0, y.Ol)(t)
        ? (0, i.jsx)(x, {
              Icon: _._IE,
              text: S.intl.string(S.t.keY6mZ),
              iconColor: r
          })
        : null;
}
function U(e) {
    let { entry: t } = e,
        { location: n } = O();
    if (!(0, y.V5)(t)) return null;
    let r = (0, y.kr)(t),
        a = 0 === n && !r,
        { text: s, tooltipText: o } = (0, y.zo)(t);
    return null == s
        ? null
        : (0, i.jsx)(x, {
              Icon: _.ANZ,
              text: s,
              tooltipText: o,
              showTooltip: a
          });
}
function G(e) {
    let { entry: t } = e,
        { location: n } = O(),
        r = 0 !== n,
        a = (0, y.dw)(t);
    if (null == a) return null;
    let s = (0, y.GE)(a);
    return (0, i.jsx)(x, {
        Icon: _.Oe7,
        showTooltip: !r,
        tooltipText: s,
        text: r ? s : S.intl.string(S.t.adnLsL)
    });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = O(),
        r = (0, y.vU)(t);
    return (0, y.q_)(t)
        ? (0, i.jsx)(x, {
              Icon: _.qOE,
              showTooltip: 0 === n,
              text: S.intl.formatToPlainString(S.t['Klie/P'], { days: r }),
              tooltipText: S.intl.formatToPlainString(S.t.PwMe0t, { days: r })
          })
        : null;
}
function Z(e) {
    let { entry: t } = e,
        { location: n } = O(),
        r = 0 !== n,
        a = (0, y.yA)(t);
    if (null == a) return null;
    let s = r ? ' \u2014 ' : ': ',
        o = r ? S.t.C0Axoa : S.t.SDRHgo;
    return (0, i.jsx)(x, {
        Icon: _.rm8,
        text: (0, i.jsxs)(i.Fragment, {
            children: [S.intl.string(S.t['/50eHh']), s, S.intl.format(o, { hours: Math.round(a / p.Z.Seconds.HOUR) })]
        })
    });
}
function F(e) {
    var t;
    let { entry: n } = e,
        { location: r } = O(),
        a = null === (t = (0, y.PJ)(n, c.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
    if (null == a) return null;
    let s = (0, h.Hi)(r, [1, 2, 5]) ? S.intl.formatToPlainString(S.t.HtifnJ, { count: a }) : S.intl.formatToPlainString(S.t['jq/Bmp'], { count: a });
    return (0, i.jsx)(x, {
        Icon: _.rm8,
        text: s
    });
}
function V(e) {
    let { entry: t } = e,
        { location: n } = O();
    if (3 === n) return null;
    let r = (0, y.ig)(t);
    return null == r || r === d.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, i.jsx)(x, {
              Icon: _.YqE,
              text: S.intl.string(S.t.kAlUs7)
          });
}
function j(e) {
    let { entry: t } = e,
        { location: n } = O();
    if (3 === n) return null;
    let r = m.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(r), 'days') > T.G
        ? null
        : (0, i.jsx)(x, {
              Icon: _.rIT,
              text: S.intl.string(S.t.vYuyWV)
          });
}
function H(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: r, defaultIconColor: a, location: s } = O(),
        o = (0, y.Jg)(t) && 4 === s,
        l = o ? _.TVs.colors.TEXT_POSITIVE : a,
        u = o ? 'text-positive' : r;
    return (0, i.jsxs)('div', {
        className: A.badgeContainer,
        children: [
            (0, i.jsx)(_.ARS, {
                size: 'xxs',
                color: l
            }),
            (0, i.jsx)(b.ZP, {
                entry: t,
                textColor: u,
                hovered: n,
                bold: !0
            })
        ]
    });
}
function Y(e) {
    let { entry: t } = e,
        n = (0, y.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, i.jsx)(x, {
              Icon: _.sVe,
              text: n
          });
}
function W(e) {
    let t,
        { location: n, children: r, className: a } = e;
    return (
        (t = (0, h.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: _.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === n
              ? { defaultTextColor: 'interactive-normal' }
              : 3 === n
                ? { defaultTextColor: 'text-muted' }
                : { defaultTextColor: 'text-secondary' }),
        (0, i.jsx)(R.Provider, {
            value: {
                location: n,
                ...t
            },
            children: (0, i.jsx)('div', {
                className: s()(
                    A.badgesContainer,
                    {
                        [A.badgesContainerCard]: 0 === n,
                        [A.badgesContainerPopout]: (0, h.Hi)(n, [1, 2]),
                        [A.badgesContainerGameProfile]: 3 === n
                    },
                    a
                ),
                children: r
            })
        })
    );
}
function K(e) {
    switch (e.content_type) {
        case u.s.TOP_ARTIST:
            return N[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case u.s.PLAYED_GAME:
            return N[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case u.s.TOP_GAME:
            return N[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case u.s.WATCHED_MEDIA:
            return N[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        case u.s.LAUNCHED_ACTIVITY:
            return N[e.content_type].map((t, n) => (0, i.jsx)(t, { entry: e }, n));
        default:
            return null;
    }
}
function z(e) {
    let { entry: t, location: n, className: r } = e,
        a = K(t);
    return null == a
        ? null
        : (0, i.jsx)(W, {
              location: n,
              className: r,
              children: a
          });
}
