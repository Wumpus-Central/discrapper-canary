n.d(t, {
    $X: () => z,
    K7: () => H,
    MK: () => F,
    N5: () => P,
    R_: () => G,
    Rq: () => X,
    Xr: () => Y,
    Xy: () => M,
    Y8: () => W,
    Zc: () => U,
    er: () => L,
    fM: () => j,
    fg: () => K,
    iT: () => $,
    iq: () => k,
    mG: () => Z,
    sp: () => B,
    tR: () => V,
    zi: () => q,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(681154),
    u = n(974690),
    d = n(379834),
    f = n(990078),
    p = n(397927),
    _ = n(927813),
    h = n(403362),
    m = n(661191),
    g = n(20805),
    E = n(202195),
    b = n(583846),
    y = n(299846),
    O = n(693879);
n(424994);
var A = n(985018),
    v = n(584576);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = {
    [c.I.TOP_ARTIST]: [W],
    [c.I.PLAYED_GAME]: [k, U, M, z, V, H, K, B, F],
    [c.I.TOP_GAME]: [Y],
    [c.I.WATCHED_MEDIA]: [q, X],
    [c.I.LAUNCHED_ACTIVITY]: [k, U, M, z, K, F],
};
var P = (function (e) {
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
let D = i.createContext({});
function x() {
    return i.useContext(D);
}
function L(e) {
    let { children: t } = e,
        n = N(e, ["children"]);
    return (0, r.jsx)("div", C(I({ className: v.fC }, n), { children: t }));
}
function j(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: a, showTooltip: s } = e,
        { defaultTextColor: o, defaultIconColor: l, location: c } = x();
    return (0, r.jsx)(f.m, {
        text: a,
        shouldShow: s,
        children: (0, r.jsxs)(L, {
            children: [
                (0, r.jsx)(t, {
                    size: "xxs",
                    color: null != i ? i : l,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-xs/normal",
                    color: o,
                    className: v.KT,
                    scaleFontToUserSetting: 5 === c,
                    children: n,
                }),
            ],
        }),
    });
}
function M(e) {
    let { entry: t } = e,
        { channel: n } = (0, E.A)(t),
        { location: i } = x();
    return null == n || (0, h.S1)(i, [1, 2, 3, 4])
        ? null
        : (0, r.jsx)(j, {
              Icon: p.HKD,
              text: n.name,
          });
}
function k(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = x(),
        o = (0, b.Hd)(t) && (0, h.S1)(s, [0, 4, 7, 9]),
        l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = o ? "text-feedback-positive" : i,
        { streamPreviewUrl: u } = (0, E.A)(t),
        d = null != u ? p.Fzq : (0, g.yl)(t) ? p.k9F : p._xR;
    return (0, r.jsxs)(L, {
        children: [
            (0, r.jsx)(d, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(O.A, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === s,
            }),
        ],
    });
}
function U(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = x(),
        { state: a, party: s } = (0, y.u)(t),
        o = (0, b.gF)(a, s);
    return null == o
        ? null
        : (0, r.jsxs)(L, {
              children: [
                  (0, r.jsx)(p.nFg, {
                      size: "xxs",
                      color: i,
                  }),
                  (0, r.jsx)(p.Text, {
                      variant: "text-xs/normal",
                      color: n,
                      lineClamp: 1,
                      children: o,
                  }),
              ],
          });
}
function G(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = x(),
        o = (0, b.Hd)(t) && (0, h.S1)(s, [0, 4]),
        l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: v.fC,
        children: [
            (0, r.jsx)(p.T7G, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(O.A, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
            }),
        ],
    });
}
function V(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = (0, h.S1)(n, [0, 3]) ? p.LU0.colors.STATUS_POSITIVE : void 0;
    return (0, b.Rf)(t)
        ? (0, r.jsx)(j, {
              Icon: p.PPD,
              text: A.intl.string(A.t.keY6mW),
              iconColor: i,
          })
        : null;
}
function F(e) {
    let { entry: t } = e,
        { location: n } = x();
    if (!(0, b.L7)(t)) return null;
    let i = (0, b.JM)(t),
        a = 0 === n && !i,
        { text: s, tooltipText: o } = (0, b.Pj)(t);
    return null == s
        ? null
        : (0, r.jsx)(j, {
              Icon: p.xbX,
              text: s,
              tooltipText: o,
              showTooltip: a,
          });
}
function B(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = 0 !== n,
        a = (0, b.KH)(t);
    if (null == a) return null;
    let s = (0, b.us)(a);
    return (0, r.jsx)(j, {
        Icon: p.mqY,
        showTooltip: !i,
        tooltipText: s,
        text: i ? s : A.intl.string(A.t.adnLsB),
    });
}
function H(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = (0, b.iy)(t);
    return (0, b.BZ)(t)
        ? (0, r.jsx)(j, {
              Icon: p.gXB,
              showTooltip: 0 === n,
              text: A.intl.formatToPlainString(A.t["Klie/P"], { days: i }),
              tooltipText: A.intl.formatToPlainString(A.t.PwMe0s, { days: i }),
          })
        : null;
}
function Y(e) {
    let { entry: t } = e,
        { location: n } = x(),
        i = 0 !== n,
        a = (0, b.ty)(t);
    if (null == a) return null;
    let s = i ? " \u2014 " : ": ",
        o = i ? A.t.C0AxoR : A.t.SDRHgr;
    return (0, r.jsx)(j, {
        Icon: p.OR,
        text: (0, r.jsxs)(r.Fragment, {
            children: [A.intl.string(A.t["/50eHi"]), s, A.intl.format(o, { hours: Math.round(a / _.A.Seconds.HOUR) })],
        }),
    });
}
function W(e) {
    var t;
    let { entry: n } = e,
        { location: i } = x(),
        a = null == (t = (0, b.Pv)(n, u.K.AGGREGATE_COUNT)) ? void 0 : t.count;
    if (null == a) return null;
    let s = (0, h.S1)(i, [1, 2, 5])
        ? A.intl.formatToPlainString(A.t.HtifnG, { count: a })
        : A.intl.formatToPlainString(A.t["jq/Bmu"], { count: a });
    return (0, r.jsx)(j, {
        Icon: p.OR,
        text: s,
    });
}
function K(e) {
    let { entry: t } = e,
        { location: n } = x();
    if (3 === n) return null;
    let i = (0, b.CZ)(t);
    return null == i || i === d.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(j, {
              Icon: p.Y3C,
              text: A.intl.string(A.t.kAlUsy),
          });
}
function z(e) {
    let { entry: t } = e,
        { location: n } = x();
    if (3 === n) return null;
    let i = m.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), "days") > 7
        ? null
        : (0, r.jsx)(j, {
              Icon: p.fR$,
              text: A.intl.string(A.t.vYuyWf),
          });
}
function q(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = x(),
        o = (0, b.Hd)(t) && 4 === s,
        l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: v.fC,
        children: [
            (0, r.jsx)(p.Uk3, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(O.A, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
            }),
        ],
    });
}
function X(e) {
    let { entry: t } = e,
        n = (0, b.kR)(t.extra.media_assets_large_text);
    return null == n
        ? null
        : (0, r.jsx)(j, {
              Icon: p.Kck,
              text: n,
          });
}
function Z(e) {
    let t,
        { location: n, children: i, className: a } = e;
    return (
        (t = (0, h.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: p.LU0.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? { defaultTextColor: "interactive-text-default" }
              : 3 === n
                ? { defaultTextColor: "text-muted" }
                : 4 === n
                  ? {
                        defaultTextColor: "text-subtle",
                        defaultIconColor: p.LU0.colors.TEXT_SUBTLE,
                    }
                  : { defaultTextColor: "text-subtle" }),
        (0, r.jsx)(D.Provider, {
            value: I({ location: n }, t),
            children: (0, r.jsx)("div", {
                className: s()(
                    v.cV,
                    {
                        [v.u3]: 0 === n,
                        [v.BQ]: (0, h.S1)(n, [1, 2]),
                        [v.DY]: 3 === n,
                    },
                    a,
                ),
                children: i,
            }),
        })
    );
}
function Q(e) {
    switch (e.content_type) {
        case c.I.TOP_ARTIST:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.I.PLAYED_GAME:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.I.TOP_GAME:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.I.WATCHED_MEDIA:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        case c.I.LAUNCHED_ACTIVITY:
            return w[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
        default:
            return null;
    }
}
function $(e) {
    let { entry: t, location: n, className: i } = e,
        a = Q(t);
    return null == a
        ? null
        : (0, r.jsx)(Z, {
              location: n,
              className: i,
              children: a,
          });
}
