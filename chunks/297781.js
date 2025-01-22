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
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(913527),
    c = r.n(u),
    d = r(876215),
    f = r(884439),
    p = r(705512),
    h = r(442837),
    _ = r(481060),
    m = r(70956),
    g = r(823379),
    E = r(709054),
    v = r(719247),
    y = r(26033),
    b = r(22211),
    I = r(561308),
    T = r(797342),
    S = r(371991),
    A = r(206583),
    C = r(388032),
    N = r(455887);
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
let O = o.createContext({});
function D() {
    return o.useContext(O);
}
function L(e) {
    let { children: n, ...r } = e;
    return (0, a.jsx)('div', {
        className: N.badgeContainer,
        ...r,
        children: n
    });
}
function x(e) {
    let { Icon: n, text: r, iconColor: i, tooltipText: o, showTooltip: s } = e,
        { defaultTextColor: l, defaultIconColor: u, location: c } = D();
    return (0, a.jsx)(_.Tooltip, {
        text: o,
        shouldShow: s,
        children: (e) =>
            (0, a.jsxs)(L, {
                ...e,
                children: [
                    (0, a.jsx)(n, {
                        size: 'xxs',
                        color: null != i ? i : u
                    }),
                    (0, a.jsx)(_.Text, {
                        variant: 'text-xs/normal',
                        color: l,
                        className: N.badgeLabel,
                        scaleFontToUserSetting: 5 === c,
                        children: r
                    })
                ]
            })
    });
}
function w(e) {
    let { entry: n } = e,
        { channel: r } = (0, b.Z)(n),
        { location: i } = D();
    return null == r || (0, g.Hi)(i, [1, 2, 3, 4])
        ? null
        : (0, a.jsx)(x, {
              Icon: _.VoiceNormalIcon,
              text: r.name
          });
}
function P(e) {
    let { entry: n, hovered: r } = e,
        { defaultTextColor: i, defaultIconColor: o, location: s } = D(),
        l = (0, I.Jg)(n) && (0, g.Hi)(s, [0, 4, 7]),
        u = l ? _.tokens.colors.TEXT_POSITIVE : o,
        c = l ? 'text-positive' : i,
        { streamPreviewUrl: d } = (0, b.Z)(n),
        f = null != d ? _.ScreenArrowIcon : (0, y.Mq)(n) ? _.AppsIcon : _.GameControllerIcon;
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
                scaleFontToUserSetting: 5 === s
            })
        ]
    });
}
function M(e) {
    let { entry: n } = e,
        { defaultTextColor: r, defaultIconColor: i } = D(),
        { state: o, party: s } = (0, T.n)(n),
        l = (0, I.bT)(o, s);
    return null == l
        ? null
        : (0, a.jsxs)(L, {
              children: [
                  (0, a.jsx)(_.GroupIcon, {
                      size: 'xxs',
                      color: i
                  }),
                  (0, a.jsx)(_.Text, {
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
        { defaultTextColor: o, defaultIconColor: s, location: l } = D(),
        u = (0, I.Jg)(r) && (0, g.Hi)(l, [0, 4]),
        c = u ? _.tokens.colors.TEXT_POSITIVE : s,
        d = u ? 'text-positive' : o,
        f = (0, h.e7)([v.Z], () => v.Z.getMatchingActivity(r)),
        p = null == f ? void 0 : null === (n = f.timestamps) || void 0 === n ? void 0 : n.start;
    return null != p
        ? (0, a.jsxs)('div', {
              className: N.badgeContainer,
              children: [
                  (0, a.jsx)(_.RecordPlayerIcon, {
                      size: 'xxs',
                      color: c
                  }),
                  (0, a.jsx)(S.x3, {
                      entry: { start: p },
                      textColor: d,
                      hovered: i,
                      bold: !0
                  })
              ]
          })
        : (0, a.jsxs)('div', {
              className: N.badgeContainer,
              children: [
                  (0, a.jsx)(_.RecordPlayerIcon, {
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
        i = (0, g.Hi)(r, [0, 3]) ? _.tokens.colors.STATUS_POSITIVE : void 0;
    return (0, I.Ol)(n)
        ? (0, a.jsx)(x, {
              Icon: _.NewUserSimpleIcon,
              text: C.intl.string(C.t.keY6mZ),
              iconColor: i
          })
        : null;
}
function B(e) {
    let { entry: n } = e,
        { location: r } = D();
    if (!(0, I.V5)(n)) return null;
    let i = (0, I.kr)(n),
        o = 0 === r && !i,
        { text: s, tooltipText: l } = (0, I.zo)(n);
    return null == s
        ? null
        : (0, a.jsx)(x, {
              Icon: _.TimerIcon,
              text: s,
              tooltipText: l,
              showTooltip: o
          });
}
function G(e) {
    let { entry: n } = e,
        { location: r } = D(),
        i = 0 !== r,
        o = (0, I.dw)(n);
    if (null == o) return null;
    let s = (0, I.GE)(o);
    return (0, a.jsx)(x, {
        Icon: _.RetryIcon,
        showTooltip: !i,
        tooltipText: s,
        text: i ? s : C.intl.string(C.t.adnLsL)
    });
}
function Z(e) {
    let { entry: n } = e,
        { location: r } = D(),
        i = (0, I.vU)(n);
    return (0, I.q_)(n)
        ? (0, a.jsx)(x, {
              Icon: _.FlashIcon,
              showTooltip: 0 === r,
              text: C.intl.formatToPlainString(C.t['Klie/P'], { days: i }),
              tooltipText: C.intl.formatToPlainString(C.t.PwMe0t, { days: i })
          })
        : null;
}
function F(e) {
    let { entry: n } = e,
        { location: r } = D(),
        i = 0 !== r,
        o = (0, I.yA)(n);
    if (null == o) return null;
    let s = i ? ' \u2014 ' : ': ',
        l = i ? C.t.C0Axoa : C.t.SDRHgo;
    return (0, a.jsx)(x, {
        Icon: _.TrophyIcon,
        text: (0, a.jsxs)(a.Fragment, {
            children: [C.intl.string(C.t['/50eHh']), s, C.intl.format(l, { hours: Math.round(o / m.Z.Seconds.HOUR) })]
        })
    });
}
function V(e) {
    var n;
    let { entry: r } = e,
        { location: i } = D(),
        o = null === (n = (0, I.PJ)(r, f.N.AGGREGATE_COUNT)) || void 0 === n ? void 0 : n.count;
    if (null == o) return null;
    let s = (0, g.Hi)(i, [1, 2, 5]) ? C.intl.formatToPlainString(C.t.HtifnJ, { count: o }) : C.intl.formatToPlainString(C.t['jq/Bmp'], { count: o });
    return (0, a.jsx)(x, {
        Icon: _.TrophyIcon,
        text: s
    });
}
function j(e) {
    let { entry: n } = e,
        { location: r } = D();
    if (3 === r) return null;
    let i = (0, I.ig)(n);
    return null == i || i === p.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, a.jsx)(x, {
              Icon: _.FireIcon,
              text: C.intl.string(C.t.kAlUs7)
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
              Icon: _.StarShootingIcon,
              text: C.intl.string(C.t.vYuyWV)
          });
}
function Y(e) {
    let { entry: n, hovered: r } = e,
        { defaultTextColor: i, defaultIconColor: o, location: s } = D(),
        l = (0, I.Jg)(n) && 4 === s,
        u = l ? _.tokens.colors.TEXT_POSITIVE : o,
        c = l ? 'text-positive' : i;
    return (0, a.jsxs)('div', {
        className: N.badgeContainer,
        children: [
            (0, a.jsx)(_.TvIcon, {
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
        r = (0, I.ap)(n.extra.media_assets_large_text);
    return null == r
        ? null
        : (0, a.jsx)(x, {
              Icon: _.TopicsIcon,
              text: r
          });
}
function K(e) {
    let n,
        { location: r, children: i, className: o } = e;
    return (
        (n = (0, g.Hi)(r, [1, 5, 6])
            ? {
                  defaultTextColor: 'content-inventory-overlay-text-secondary',
                  defaultIconColor: _.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
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
                    N.badgesContainer,
                    {
                        [N.badgesContainerCard]: 0 === r,
                        [N.badgesContainerPopout]: (0, g.Hi)(r, [1, 2]),
                        [N.badgesContainerGameProfile]: 3 === r
                    },
                    o
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
        o = z(n);
    return null == o
        ? null
        : (0, a.jsx)(K, {
              location: r,
              className: i,
              children: o
          });
}
