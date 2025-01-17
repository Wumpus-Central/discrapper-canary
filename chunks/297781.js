r.d(n, {
    Af: function () {
        return w;
    },
    An: function () {
        return V;
    },
    E6: function () {
        return F;
    },
    EE: function () {
        return M;
    },
    Gk: function () {
        return K;
    },
    Gt: function () {
        return i;
    },
    OV: function () {
        return P;
    },
    PZ: function () {
        return q;
    },
    Rg: function () {
        return W;
    },
    U9: function () {
        return H;
    },
    XF: function () {
        return k;
    },
    Yl: function () {
        return Y;
    },
    ej: function () {
        return x;
    },
    f: function () {
        return Z;
    },
    m7: function () {
        return L;
    },
    n8: function () {
        return j;
    },
    pQ: function () {
        return B;
    },
    v1: function () {
        return G;
    },
    wO: function () {
        return U;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(913527),
    c = r.n(u),
    d = r(876215),
    f = r(884439),
    _ = r(705512),
    h = r(442837),
    p = r(481060),
    m = r(70956),
    g = r(823379),
    E = r(709054),
    v = r(719247),
    I = r(26033),
    T = r(22211),
    b = r(561308),
    y = r(797342),
    S = r(371991),
    A = r(206583),
    N = r(388032),
    C = r(455887);
let R = {
    [d.s.TOP_ARTIST]: [V],
    [d.s.PLAYED_GAME]: [P, M, w, H, U, Z, j, G, B],
    [d.s.TOP_GAME]: [F],
    [d.s.WATCHED_MEDIA]: [Y, W],
    [d.s.LAUNCHED_ACTIVITY]: [P, M, w, H, j, B]
};
!(function (e) {
    (e[(e.CARD = 0)] = 'CARD'), (e[(e.POPOUT = 1)] = 'POPOUT'), (e[(e.STREAMING_POPOUT = 2)] = 'STREAMING_POPOUT'), (e[(e.GAME_PROFILE = 3)] = 'GAME_PROFILE'), (e[(e.USER_PROFILE = 4)] = 'USER_PROFILE'), (e[(e.EMBED = 5)] = 'EMBED'), (e[(e.LEADERBOARD_POPOUT = 6)] = 'LEADERBOARD_POPOUT'), (e[(e.OVERLAY = 7)] = 'OVERLAY');
})(i || (i = {}));
let O = s.createContext({});
function D() {
    return s.useContext(O);
}
function L(e) {
    let { children: n, ...r } = e;
    return (0, a.jsx)('div', {
        className: C.badgeContainer,
        ...r,
        children: n
    });
}
function x(e) {
    let { Icon: n, text: r, iconColor: i, tooltipText: s, showTooltip: o } = e,
        { defaultTextColor: l, defaultIconColor: u, location: c } = D();
    return (0, a.jsx)(p.Tooltip, {
        text: s,
        shouldShow: o,
        children: (e) =>
            (0, a.jsxs)(L, {
                ...e,
                children: [
                    (0, a.jsx)(n, {
                        size: 'xxs',
                        color: null != i ? i : u
                    }),
                    (0, a.jsx)(p.Text, {
                        variant: 'text-xs/normal',
                        color: l,
                        className: C.badgeLabel,
                        scaleFontToUserSetting: 5 === c,
                        children: r
                    })
                ]
            })
    });
}
function w(e) {
    let { entry: n } = e,
        { channel: r } = (0, T.Z)(n),
        { location: i } = D();
    return null == r || (0, g.Hi)(i, [1, 2, 3, 4])
        ? null
        : (0, a.jsx)(x, {
              Icon: p.VoiceNormalIcon,
              text: r.name
          });
}
function P(e) {
    let { entry: n, hovered: r } = e,
        { defaultTextColor: i, defaultIconColor: s, location: o } = D(),
        l = (0, b.Jg)(n) && (0, g.Hi)(o, [0, 4, 7]),
        u = l ? p.tokens.colors.TEXT_POSITIVE : s,
        c = l ? 'text-positive' : i,
        { streamPreviewUrl: d } = (0, T.Z)(n),
        f = null != d ? p.ScreenArrowIcon : (0, I.Mq)(n) ? p.AppsIcon : p.GameControllerIcon;
    return (0, a.jsxs)(L, {
        children: [
            (0, a.jsx)(f, {
                size: 'xxs',
                color: u
            }),
            (0, a.jsx)(S.ZP, {
                entry: n,
                textColor: c,
                hovered: r,
                bold: !0,
                scaleFontToUserSetting: 5 === o
            })
        ]
    });
}
function M(e) {
    let { entry: n } = e,
        { defaultTextColor: r, defaultIconColor: i } = D(),
        { state: s, party: o } = (0, y.n)(n),
        l = (0, b.bT)(s, o);
    return null == l
        ? null
        : (0, a.jsxs)(L, {
              children: [
                  (0, a.jsx)(p.GroupIcon, {
                      size: 'xxs',
                      color: i
                  }),
                  (0, a.jsx)(p.Text, {
                      variant: 'text-xs/normal',
                      color: r,
                      lineClamp: 1,
                      children: l
                  })
              ]
          });
}
function k(e) {
    var n;
    let { entry: r, hovered: i } = e,
        { defaultTextColor: s, defaultIconColor: o, location: l } = D(),
        u = (0, b.Jg)(r) && (0, g.Hi)(l, [0, 4]),
        c = u ? p.tokens.colors.TEXT_POSITIVE : o,
        d = u ? 'text-positive' : s,
        f = (0, h.e7)([v.Z], () => v.Z.getMatchingActivity(r)),
        _ = null == f ? void 0 : null === (n = f.timestamps) || void 0 === n ? void 0 : n.start;
    return null != _
        ? (0, a.jsxs)('div', {
              className: C.badgeContainer,
              children: [
                  (0, a.jsx)(p.RecordPlayerIcon, {
                      size: 'xxs',
                      color: c
                  }),
                  (0, a.jsx)(S.x3, {
                      entry: { start: _ },
                      textColor: d,
                      hovered: i,
                      bold: !0
                  })
              ]
          })
        : (0, a.jsxs)('div', {
              className: C.badgeContainer,
              children: [
                  (0, a.jsx)(p.RecordPlayerIcon, {
                      size: 'xxs',
                      color: c
                  }),
                  (0, a.jsx)(S.ZP, {
                      entry: r,
                      textColor: d,
                      hovered: i,
                      bold: !0
                  })
              ]
          });
}
function U(e) {
    let { entry: n } = e,
        { location: r } = D(),
        i = (0, g.Hi)(r, [0, 3]) ? p.tokens.colors.STATUS_POSITIVE : void 0;
    return (0, b.Ol)(n)
        ? (0, a.jsx)(x, {
              Icon: p.NewUserSimpleIcon,
              text: N.intl.string(N.t.keY6mZ),
              iconColor: i
          })
        : null;
}
function B(e) {
    let { entry: n } = e,
        { location: r } = D();
    if (!(0, b.V5)(n)) return null;
    let i = (0, b.kr)(n),
        s = 0 === r && !i,
        { text: o, tooltipText: l } = (0, b.zo)(n);
    return null == o
        ? null
        : (0, a.jsx)(x, {
              Icon: p.TimerIcon,
              text: o,
              tooltipText: l,
              showTooltip: s
          });
}
function G(e) {
    let { entry: n } = e,
        { location: r } = D(),
        i = 0 !== r,
        s = (0, b.dw)(n);
    if (null == s) return null;
    let o = (0, b.GE)(s);
    return (0, a.jsx)(x, {
        Icon: p.RetryIcon,
        showTooltip: !i,
        tooltipText: o,
        text: i ? o : N.intl.string(N.t.adnLsL)
    });
}
function Z(e) {
    let { entry: n } = e,
        { location: r } = D(),
        i = (0, b.vU)(n);
    return (0, b.q_)(n)
        ? (0, a.jsx)(x, {
              Icon: p.FlashIcon,
              showTooltip: 0 === r,
              text: N.intl.formatToPlainString(N.t['Klie/P'], { days: i }),
              tooltipText: N.intl.formatToPlainString(N.t.PwMe0t, { days: i })
          })
        : null;
}
function F(e) {
    let { entry: n } = e,
        { location: r } = D(),
        i = 0 !== r,
        s = (0, b.yA)(n);
    if (null == s) return null;
    let o = i ? ' \u2014 ' : ': ',
        l = i ? N.t.C0Axoa : N.t.SDRHgo;
    return (0, a.jsx)(x, {
        Icon: p.TrophyIcon,
        text: (0, a.jsxs)(a.Fragment, {
            children: [N.intl.string(N.t['/50eHh']), o, N.intl.format(l, { hours: Math.round(s / m.Z.Seconds.HOUR) })]
        })
    });
}
function V(e) {
    var n;
    let { entry: r } = e,
        { location: i } = D(),
        s = null === (n = (0, b.PJ)(r, f.N.AGGREGATE_COUNT)) || void 0 === n ? void 0 : n.count;
    if (null == s) return null;
    let o = (0, g.Hi)(i, [1, 2, 5]) ? N.intl.formatToPlainString(N.t.HtifnJ, { count: s }) : N.intl.formatToPlainString(N.t['jq/Bmp'], { count: s });
    return (0, a.jsx)(x, {
        Icon: p.TrophyIcon,
        text: o
    });
}
function j(e) {
    let { entry: n } = e,
        { location: r } = D();
    if (3 === r) return null;
    let i = (0, b.ig)(n);
    return null == i || i === _.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, a.jsx)(x, {
              Icon: p.FireIcon,
              text: N.intl.string(N.t.kAlUs7)
          });
}
function H(e) {
    let { entry: n } = e,
        { location: r } = D();
    if (3 === r) return null;
    let i = E.default.extractTimestamp(n.extra.application_id);
    return c()().diff(c()(i), 'days') > A.G
        ? null
        : (0, a.jsx)(x, {
              Icon: p.StarShootingIcon,
              text: N.intl.string(N.t.vYuyWV)
          });
}
function Y(e) {
    let { entry: n, hovered: r } = e,
        { defaultTextColor: i, defaultIconColor: s, location: o } = D(),
        l = (0, b.Jg)(n) && 4 === o,
        u = l ? p.tokens.colors.TEXT_POSITIVE : s,
        c = l ? 'text-positive' : i;
    return (0, a.jsxs)('div', {
        className: C.badgeContainer,
        children: [
            (0, a.jsx)(p.TvIcon, {
                size: 'xxs',
                color: u
            }),
            (0, a.jsx)(S.ZP, {
                entry: n,
                textColor: c,
                hovered: r,
                bold: !0
            })
        ]
    });
}
function W(e) {
    let { entry: n } = e,
        r = (0, b.ap)(n.extra.media_assets_large_text);
    return null == r
        ? null
        : (0, a.jsx)(x, {
              Icon: p.TopicsIcon,
              text: r
          });
}
function K(e) {
    let n,
        { location: r, children: i, className: s } = e;
    return (
        (n = (0, g.Hi)(r, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: p.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
              }
            : 2 === r
              ? { defaultTextColor: 'interactive-normal' }
              : 3 === r
                ? { defaultTextColor: 'text-muted' }
                : { defaultTextColor: 'text-secondary' }),
        (0, a.jsx)(O.Provider, {
            value: {
                location: r,
                ...n
            },
            children: (0, a.jsx)('div', {
                className: l()(
                    C.badgesContainer,
                    {
                        [C.badgesContainerCard]: 0 === r,
                        [C.badgesContainerPopout]: (0, g.Hi)(r, [1, 2]),
                        [C.badgesContainerGameProfile]: 3 === r
                    },
                    s
                ),
                children: i
            })
        })
    );
}
function z(e) {
    switch (e.content_type) {
        case d.s.TOP_ARTIST:
            return R[e.content_type].map((n, r) => (0, a.jsx)(n, { entry: e }, r));
        case d.s.PLAYED_GAME:
            return R[e.content_type].map((n, r) => (0, a.jsx)(n, { entry: e }, r));
        case d.s.TOP_GAME:
            return R[e.content_type].map((n, r) => (0, a.jsx)(n, { entry: e }, r));
        case d.s.WATCHED_MEDIA:
            return R[e.content_type].map((n, r) => (0, a.jsx)(n, { entry: e }, r));
        case d.s.LAUNCHED_ACTIVITY:
            return R[e.content_type].map((n, r) => (0, a.jsx)(n, { entry: e }, r));
        default:
            return null;
    }
}
function q(e) {
    let { entry: n, location: r, className: i } = e,
        s = z(n);
    return null == s
        ? null
        : (0, a.jsx)(K, {
              location: r,
              className: i,
              children: s
          });
}
