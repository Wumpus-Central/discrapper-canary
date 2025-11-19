n.d(t, {
    Af: () => U,
    An: () => K,
    E6: () => W,
    EE: () => B,
    Gk: () => J,
    Gt: () => L,
    OV: () => G,
    PZ: () => ee,
    Rg: () => Q,
    U9: () => q,
    XF: () => Z,
    Yl: () => X,
    ej: () => k,
    f: () => Y,
    m7: () => j,
    n8: () => z,
    pQ: () => V,
    v1: () => H,
    wO: () => F,
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
    _ = n(481060),
    p = n(456100),
    h = n(70956),
    m = n(823379),
    g = n(709054),
    E = n(26033),
    b = n(22211),
    y = n(561308),
    O = n(797342),
    v = n(371991),
    I = n(206583),
    T = n(388032),
    S = n(802643);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
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
function R(e, t) {
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
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = {
    [c.s.TOP_ARTIST]: [K],
    [c.s.PLAYED_GAME]: [G, B, U, q, F, Y, z, H, V],
    [c.s.TOP_GAME]: [W],
    [c.s.WATCHED_MEDIA]: [X, Q],
    [c.s.LAUNCHED_ACTIVITY]: [G, B, U, q, z, V],
};
var L = (function (e) {
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
function M() {
    return i.useContext(x);
}
function j(e) {
    var { children: t } = e,
        n = P(e, ["children"]);
    return (0, r.jsx)("div", R(C({ className: S.badgeContainer }, n), { children: t }));
}
function k(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: a, showTooltip: o } = e,
        { defaultTextColor: s, defaultIconColor: l, location: c } = M();
    return (0, r.jsx)(f.u, {
        text: a,
        shouldShow: o,
        children: (0, r.jsxs)(j, {
            children: [
                (0, r.jsx)(t, {
                    size: "xxs",
                    color: null != i ? i : l,
                }),
                (0, r.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    color: s,
                    className: S.badgeLabel,
                    scaleFontToUserSetting: 5 === c,
                    children: n,
                }),
            ],
        }),
    });
}
function U(e) {
    let { entry: t } = e,
        { channel: n } = (0, b.Z)(t),
        { location: i } = M();
    return null == n || (0, m.Hi)(i, [1, 2, 3, 4])
        ? null
        : (0, r.jsx)(k, {
              Icon: _.gj8,
              text: n.name,
          });
}
function G(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: o } = M(),
        s = (0, y.Jg)(t) && (0, m.Hi)(o, [0, 4, 7, 9]),
        l = s ? _.TVs.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = s ? "text-feedback-positive" : i,
        { streamPreviewUrl: u } = (0, b.Z)(t),
        { enabled: d } = p.c.useExperiment({ location: "GameTimestampBadge" }, { autoTrackExposure: !0 }),
        f = null != u ? _.hGI : (0, E.Mq)(t) && !d ? _.jje : _.iWm;
    return (0, r.jsxs)(j, {
        children: [
            (0, r.jsx)(f, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(v.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === o,
            }),
        ],
    });
}
function B(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = M(),
        { state: a, party: o } = (0, O.n)(t),
        s = (0, y.bT)(a, o);
    return null == s
        ? null
        : (0, r.jsxs)(j, {
              children: [
                  (0, r.jsx)(_.BFJ, {
                      size: "xxs",
                      color: i,
                  }),
                  (0, r.jsx)(_.Text, {
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
        { defaultTextColor: i, defaultIconColor: a, location: o } = M(),
        s = (0, y.Jg)(t) && (0, m.Hi)(o, [0, 4]),
        l = s ? _.TVs.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = s ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: S.badgeContainer,
        children: [
            (0, r.jsx)(_.RZG, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(v.ZP, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
            }),
        ],
    });
}
function F(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = (0, m.Hi)(n, [0, 3]) ? _.TVs.colors.STATUS_POSITIVE : void 0;
    return (0, y.Ol)(t)
        ? (0, r.jsx)(k, {
              Icon: _._IE,
              text: T.intl.string(T.t.keY6mW),
              iconColor: i,
          })
        : null;
}
function V(e) {
    let { entry: t } = e,
        { location: n } = M();
    if (!(0, y.V5)(t)) return null;
    let i = (0, y.kr)(t),
        a = 0 === n && !i,
        { text: o, tooltipText: s } = (0, y.zo)(t);
    return null == o
        ? null
        : (0, r.jsx)(k, {
              Icon: _.ANZ,
              text: o,
              tooltipText: s,
              showTooltip: a,
          });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = 0 !== n,
        a = (0, y.dw)(t);
    if (null == a) return null;
    let o = (0, y.GE)(a);
    return (0, r.jsx)(k, {
        Icon: _.Oe7,
        showTooltip: !i,
        tooltipText: o,
        text: i ? o : T.intl.string(T.t.adnLsB),
    });
}
function Y(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = (0, y.vU)(t);
    return (0, y.q_)(t)
        ? (0, r.jsx)(k, {
              Icon: _.qOE,
              showTooltip: 0 === n,
              text: T.intl.formatToPlainString(T.t["Klie/P"], { days: i }),
              tooltipText: T.intl.formatToPlainString(T.t.PwMe0s, { days: i }),
          })
        : null;
}
function W(e) {
    let { entry: t } = e,
        { location: n } = M(),
        i = 0 !== n,
        a = (0, y.yA)(t);
    if (null == a) return null;
    let o = i ? " \u2014 " : ": ",
        s = i ? T.t.C0AxoR : T.t.SDRHgr;
    return (0, r.jsx)(k, {
        Icon: _.rm8,
        text: (0, r.jsxs)(r.Fragment, {
            children: [T.intl.string(T.t["/50eHi"]), o, T.intl.format(s, { hours: Math.round(a / h.Z.Seconds.HOUR) })],
        }),
    });
}
function K(e) {
    var t;
    let { entry: n } = e,
        { location: i } = M(),
        a = null == (t = (0, y.PJ)(n, u.N.AGGREGATE_COUNT)) ? void 0 : t.count;
    if (null == a) return null;
    let o = (0, m.Hi)(i, [1, 2, 5])
        ? T.intl.formatToPlainString(T.t.HtifnG, { count: a })
        : T.intl.formatToPlainString(T.t["jq/Bmu"], { count: a });
    return (0, r.jsx)(k, {
        Icon: _.rm8,
        text: o,
    });
}
function z(e) {
    let { entry: t } = e,
        { location: n } = M();
    if (3 === n) return null;
    let i = (0, y.ig)(t);
    return null == i || i === d.o.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(k, {
              Icon: _.YqE,
              text: T.intl.string(T.t.kAlUsy),
          });
}
function q(e) {
    let { entry: t } = e,
        { location: n } = M();
    if (3 === n) return null;
    let i = g.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), "days") > I.G
        ? null
        : (0, r.jsx)(k, {
              Icon: _.rIT,
              text: T.intl.string(T.t.vYuyWf),
          });
}
function X(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: o } = M(),
        s = (0, y.Jg)(t) && 4 === o,
        l = s ? _.TVs.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = s ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: S.badgeContainer,
        children: [
            (0, r.jsx)(_.ARS, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(v.ZP, {
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
        n = (0, y.ap)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, r.jsx)(k, {
              Icon: _.sVe,
              text: n,
          });
}
function J(e) {
    let t,
        { location: n, children: i, className: a } = e;
    return (
        (t = (0, m.Hi)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: _.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-normal" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? {
                        defaultTextColor: "text-secondary",
                        defaultIconColor: _.TVs.colors.TEXT_SECONDARY,
                    }
                  : { defaultTextColor: "text-secondary" }),
        (0, r.jsx)(x.Provider, {
            value: C({ location: n }, t),
            children: (0, r.jsx)("div", {
                className: o()(
                    S.badgesContainer,
                    {
                        [S.badgesContainerCard]: 0 === n,
                        [S.badgesContainerPopout]: (0, m.Hi)(n, [1, 2]),
                        [S.badgesContainerGameProfile]: 3 === n,
                    },
                    a,
                ),
                children: i,
            }),
        })
    );
}
function $(e) {
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
function ee(e) {
    let { entry: t, location: n, className: i } = e,
        a = $(t);
    return null == a
        ? null
        : (0, r.jsx)(J, {
              location: n,
              className: i,
              children: a,
          });
}
