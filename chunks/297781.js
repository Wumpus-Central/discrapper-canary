n.d(t, {
    Af: () => k,
    An: () => W,
    E6: () => Y,
    EE: () => G,
    Gk: () => X,
    Gt: () => D,
    OV: () => U,
    PZ: () => $,
    Rg: () => Q,
    U9: () => z,
    XF: () => Z,
    Yl: () => q,
    ej: () => M,
    f: () => H,
    m7: () => j,
    n8: () => K,
    pQ: () => F,
    v1: () => V,
    wO: () => B,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(876215),
    u = n(884439),
    d = n(705512),
    f = n(28664),
    p = n(481060),
    _ = n(70956),
    m = n(823379),
    h = n(709054),
    g = n(26033),
    E = n(22211),
    b = n(561308),
    y = n(797342),
    O = n(371991),
    v = n(206583),
    S = n(388032),
    I = n(136011);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
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
function N(e, t) {
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
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = {
    [c.s.TOP_ARTIST]: [W],
    [c.s.PLAYED_GAME]: [U, G, k, z, B, H, K, V, F],
    [c.s.TOP_GAME]: [Y],
    [c.s.WATCHED_MEDIA]: [q, Q],
    [c.s.LAUNCHED_ACTIVITY]: [U, G, k, z, K, F],
};
var D = (function (e) {
    return (
        (e[(e.CARD = 0)] = "CARD"),
        (e[(e.POPOUT = 1)] = "POPOUT"),
        (e[(e.STREAMING_POPOUT = 2)] = "STREAMING_POPOUT"),
        (e[(e.GAME_PROFILE = 3)] = "GAME_PROFILE"),
        (e[(e.USER_PROFILE = 4)] = "USER_PROFILE"),
        (e[(e.EMBED = 5)] = "EMBED"),
        (e[(e.LEADERBOARD_POPOUT = 6)] = "LEADERBOARD_POPOUT"),
        (e[(e.OVERLAY = 7)] = "OVERLAY"),
        (e[(e.FRIENDS_POPOUT = 8)] = "FRIENDS_POPOUT"),
        (e[(e.APP_LAUNCHER = 9)] = "APP_LAUNCHER"),
        e
    );
})({});
let x = i.createContext({});
function L() {
    return i.useContext(x);
}
function j(e) {
    var { children: t } = e,
        n = P(e, ["children"]);
    return (0, r.jsx)("div", N(A({ className: I.badgeContainer }, n), { children: t }));
}
function M(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: a, showTooltip: o } = e,
        { defaultTextColor: s, defaultIconColor: l, location: c } = L();
    return (0, r.jsx)(f.u, {
        text: a,
        shouldShow: o,
        children: (0, r.jsxs)(j, {
            children: [
                (0, r.jsx)(t, {
                    size: "xxs",
                    color: null != i ? i : l,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-xs/normal",
                    color: s,
                    className: I.badgeLabel,
                    scaleFontToUserSetting: 5 === c,
                    children: n,
                }),
            ],
        }),
    });
}
function k(e) {
    let { entry: t } = e,
        { channel: n } = (0, E.Z)(t),
        { location: i } = L();
    return null == n || (0, m.Hi)(i, [1, 2, 3, 4])
        ? null
        : (0, r.jsx)(M, {
              Icon: p.gj8,
              text: n.name,
          });
}
function U(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: o } = L(),
        s = (0, b.Jg)(t) && (0, m.Hi)(o, [0, 4, 7, 9]),
        l = s ? p.TVs.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = s ? "text-feedback-positive" : i,
        { streamPreviewUrl: u } = (0, E.Z)(t),
        d = null != u ? p.hGI : (0, g.Mq)(t) ? p.jje : p.iWm;
    return (0, r.jsxs)(j, {
        children: [
            (0, r.jsx)(d, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(O.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === o,
            }),
        ],
    });
}
function G(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = L(),
        { state: a, party: o } = (0, y.n)(t),
        s = (0, b.bT)(a, o);
    return null == s
        ? null
        : (0, r.jsxs)(j, {
              children: [
                  (0, r.jsx)(p.BFJ, {
                      size: "xxs",
                      color: i,
                  }),
                  (0, r.jsx)(p.Text, {
                      variant: "text-xs/normal",
                      color: n,
                      lineClamp: 1,
                      children: s,
                  }),
              ],
          });
}
function Z(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: o } = L(),
        s = (0, b.Jg)(t) && (0, m.Hi)(o, [0, 4]),
        l = s ? p.TVs.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = s ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: I.badgeContainer,
        children: [
            (0, r.jsx)(p.RZG, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(O.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
            }),
        ],
    });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = (0, m.Hi)(n, [0, 3]) ? p.TVs.colors.STATUS_POSITIVE : void 0;
    return (0, b.Ol)(t)
        ? (0, r.jsx)(M, {
              Icon: p._IE,
              text: S.intl.string(S.t.keY6mW),
              iconColor: i,
          })
        : null;
}
function F(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (!(0, b.V5)(t)) return null;
    let i = (0, b.kr)(t),
        a = 0 === n && !i,
        { text: o, tooltipText: s } = (0, b.zo)(t);
    return null == o
        ? null
        : (0, r.jsx)(M, {
              Icon: p.ANZ,
              text: o,
              tooltipText: s,
              showTooltip: a,
          });
}
function V(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = 0 !== n,
        a = (0, b.dw)(t);
    if (null == a) return null;
    let o = (0, b.GE)(a);
    return (0, r.jsx)(M, {
        Icon: p.Oe7,
        showTooltip: !i,
        tooltipText: o,
        text: i ? o : S.intl.string(S.t.adnLsB),
    });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = (0, b.vU)(t);
    return (0, b.q_)(t)
        ? (0, r.jsx)(M, {
              Icon: p.qOE,
              showTooltip: 0 === n,
              text: S.intl.formatToPlainString(S.t["Klie/P"], { days: i }),
              tooltipText: S.intl.formatToPlainString(S.t.PwMe0s, { days: i }),
          })
        : null;
}
function Y(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = 0 !== n,
        a = (0, b.yA)(t);
    if (null == a) return null;
    let o = i ? " \u2014 " : ": ",
        s = i ? S.t.C0AxoR : S.t.SDRHgr;
    return (0, r.jsx)(M, {
        Icon: p.rm8,
        text: (0, r.jsxs)(r.Fragment, {
            children: [S.intl.string(S.t["/50eHi"]), o, S.intl.format(s, { hours: Math.round(a / _.Z.Seconds.HOUR) })],
        }),
    });
}
function W(e) {
    var t;
    let { entry: n } = e,
        { location: i } = L(),
        a = null == (t = (0, b.PJ)(n, u.N.AGGREGATE_COUNT)) ? void 0 : t.count;
    if (null == a) return null;
    let o = (0, m.Hi)(i, [1, 2, 5])
        ? S.intl.formatToPlainString(S.t.HtifnG, { count: a })
        : S.intl.formatToPlainString(S.t["jq/Bmu"], { count: a });
    return (0, r.jsx)(M, {
        Icon: p.rm8,
        text: o,
    });
}
function K(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let i = (0, b.ig)(t);
    return null == i || i === d.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(M, {
              Icon: p.YqE,
              text: S.intl.string(S.t.kAlUsy),
          });
}
function z(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let i = h.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), "days") > v.G
        ? null
        : (0, r.jsx)(M, {
              Icon: p.rIT,
              text: S.intl.string(S.t.vYuyWf),
          });
}
function q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: o } = L(),
        s = (0, b.Jg)(t) && 4 === o,
        l = s ? p.TVs.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = s ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: I.badgeContainer,
        children: [
            (0, r.jsx)(p.ARS, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(O.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
            }),
        ],
    });
}
function Q(e) {
    let { entry: t } = e,
        n = (0, b.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, r.jsx)(M, {
              Icon: p.sVe,
              text: n,
          });
}
function X(e) {
    let t,
        { location: n, children: i, className: a } = e;
    return (
        (t = (0, m.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: p.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-normal" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? {
                        defaultTextColor: "text-subtle",
                        defaultIconColor: p.TVs.colors.TEXT_SUBTLE,
                    }
                  : { defaultTextColor: "text-subtle" }),
        (0, r.jsx)(x.Provider, {
            value: A({ location: n }, t),
            children: (0, r.jsx)("div", {
                className: o()(
                    I.badgesContainer,
                    {
                        [I.badgesContainerCard]: 0 === n,
                        [I.badgesContainerPopout]: (0, m.Hi)(n, [1, 2]),
                        [I.badgesContainerGameProfile]: 3 === n,
                    },
                    a,
                ),
                children: i,
            }),
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
        a = J(t);
    return null == a
        ? null
        : (0, r.jsx)(X, {
              location: n,
              className: i,
              children: a,
          });
}
