n.d(t, {
    $X: () => q,
    K7: () => Y,
    MK: () => B,
    N5: () => D,
    R_: () => V,
    Rq: () => X,
    Xr: () => W,
    Xy: () => k,
    Y8: () => K,
    Yq: () => Q,
    Zc: () => G,
    er: () => j,
    fM: () => M,
    fg: () => z,
    iT: () => ee,
    iq: () => U,
    mG: () => J,
    sp: () => H,
    tR: () => F,
    zi: () => Z,
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
    _ = n(619517),
    h = n(927813),
    m = n(403362),
    g = n(661191),
    E = n(20805),
    y = n(202195),
    b = n(583846),
    O = n(299846),
    v = n(693879);
n(424994);
var A = n(985018),
    I = n(584576);

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

function T(e) {
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

function w(e, t) {
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
let P = {
    [c.I.TOP_ARTIST]: [K],
    [c.I.PLAYED_GAME]: [U, G, k, q, F, Y, z, H, B],
    [c.I.TOP_GAME]: [W],
    [c.I.WATCHED_MEDIA]: [Z, X],
    [c.I.LAUNCHED_ACTIVITY]: [U, G, k, q, z, B],
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
    let { children: t } = e,
        n = w(e, ["children"]);
    return (0, r.jsx)(
        "div",
        N(
            T(
                {
                    className: I.fC,
                },
                n,
            ),
            {
                children: t,
            },
        ),
    );
}

function M(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: a, showTooltip: s } = e,
        { defaultTextColor: o, defaultIconColor: l, location: c } = L();
    return (0, r.jsx)(f.m, {
        text: a,
        shouldShow: s,
        children: (0, r.jsxs)(j, {
            children: [
                (0, r.jsx)(t, {
                    size: "xxs",
                    color: null != i ? i : l,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-xs/normal",
                    color: o,
                    className: I.KT,
                    scaleFontToUserSetting: 5 === c,
                    children: n,
                }),
            ],
        }),
    });
}

function k(e) {
    let { entry: t } = e,
        { channel: n } = (0, y.A)(t),
        { location: i } = L();
    return null == n || (0, m.S1)(i, [1, 2, 3, 4])
        ? null
        : (0, r.jsx)(M, {
              Icon: p.HKD,
              text: n.name,
          });
}

function U(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = L(),
        o = (0, b.Hd)(t) && (0, m.S1)(s, [0, 4, 7, 9]),
        l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = o ? "text-feedback-positive" : i,
        { streamPreviewUrl: u } = (0, y.A)(t),
        d = null != u ? p.Fzq : (0, E.yl)(t) ? p.k9F : p._xR;
    return (0, r.jsxs)(j, {
        children: [
            (0, r.jsx)(d, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(v.A, {
                entry: t,
                textColor: c,
                hovered: n,
                bold: !0,
                scaleFontToUserSetting: 5 === s,
            }),
        ],
    });
}

function G(e) {
    let { entry: t } = e,
        { defaultTextColor: n, defaultIconColor: i } = L(),
        { state: a, party: s } = (0, O.u)(t),
        o = (0, b.gF)(a, s);
    return null == o
        ? null
        : (0, r.jsxs)(j, {
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

function V(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = L(),
        o = (0, b.Hd)(t) && (0, m.S1)(s, [0, 4]),
        l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: I.fC,
        children: [
            (0, r.jsx)(p.T7G, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(v.A, {
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
        { location: n } = L(),
        i = (0, m.S1)(n, [0, 3]) ? p.LU0.colors.STATUS_POSITIVE : void 0;
    return (0, b.Rf)(t)
        ? (0, r.jsx)(M, {
              Icon: p.PPD,
              text: A.intl.string(A.t.keY6mW),
              iconColor: i,
          })
        : null;
}

function B(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (!(0, b.L7)(t)) return null;
    let i = (0, b.JM)(t),
        a = 0 === n && !i,
        { text: s, tooltipText: o } = (0, b.Pj)(t);
    return null == s
        ? null
        : (0, r.jsx)(M, {
              Icon: p.xbX,
              text: s,
              tooltipText: o,
              showTooltip: a,
          });
}

function H(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = 0 !== n,
        a = (0, b.KH)(t);
    if (null == a) return null;
    let s = (0, b.us)(a);
    return (0, r.jsx)(M, {
        Icon: p.mqY,
        showTooltip: !i,
        tooltipText: s,
        text: i ? s : A.intl.string(A.t.adnLsB),
    });
}

function Y(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = (0, b.iy)(t);
    return (0, b.BZ)(t)
        ? (0, r.jsx)(M, {
              Icon: p.gXB,
              showTooltip: 0 === n,
              text: A.intl.formatToPlainString(A.t["Klie/P"], {
                  days: i,
              }),
              tooltipText: A.intl.formatToPlainString(A.t.PwMe0s, {
                  days: i,
              }),
          })
        : null;
}

function W(e) {
    let { entry: t } = e,
        { location: n } = L(),
        i = 0 !== n,
        a = (0, b.ty)(t);
    if (null == a) return null;
    let s = i ? " — " : ": ",
        o = i ? A.t.C0AxoR : A.t.SDRHgr;
    return (0, r.jsx)(M, {
        Icon: p.OR,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                A.intl.string(A.t["/50eHi"]),
                s,
                A.intl.format(o, {
                    hours: Math.round(a / h.A.Seconds.HOUR),
                }),
            ],
        }),
    });
}

function K(e) {
    var t;
    let { entry: n } = e,
        { location: i } = L(),
        a = null == (t = (0, b.Pv)(n, u.K.AGGREGATE_COUNT)) ? void 0 : t.count;
    if (null == a) return null;
    let s = (0, m.S1)(i, [1, 2, 5])
        ? A.intl.formatToPlainString(A.t.HtifnG, {
              count: a,
          })
        : A.intl.formatToPlainString(A.t["jq/Bmu"], {
              count: a,
          });
    return (0, r.jsx)(M, {
        Icon: p.OR,
        text: s,
    });
}

function z(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let i = (0, b.CZ)(t);
    return null == i || i === d.m.TRENDING_TYPE_UNSPECIFIED
        ? null
        : (0, r.jsx)(M, {
              Icon: p.Y3C,
              text: A.intl.string(A.t.kAlUsy),
          });
}

function q(e) {
    let { entry: t } = e,
        { location: n } = L();
    if (3 === n) return null;
    let i = g.default.extractTimestamp(t.extra.application_id);
    return l()().diff(l()(i), "days") > 7
        ? null
        : (0, r.jsx)(M, {
              Icon: p.fR$,
              text: A.intl.string(A.t.vYuyWf),
          });
}

function Z(e) {
    let { entry: t, hovered: n } = e,
        { defaultTextColor: i, defaultIconColor: a, location: s } = L(),
        o = (0, b.Hd)(t) && 4 === s,
        l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a,
        c = o ? "text-feedback-positive" : i;
    return (0, r.jsxs)("div", {
        className: I.fC,
        children: [
            (0, r.jsx)(p.Uk3, {
                size: "xxs",
                color: l,
            }),
            (0, r.jsx)(v.A, {
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
        : (0, r.jsx)(M, {
              Icon: p.Kck,
              text: n,
          });
}

function Q(e) {
    let { entry: t } = e,
        { defaultTextColor: n, location: i } = L();
    if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
    let { previewIcon: a, previewTextShort: s } = t.applicationWidgetPreview.previewData;
    return (0, r.jsxs)(j, {
        children: [
            null != a &&
                (0, r.jsx)("div", {
                    className: I.dQ,
                    children: (0, r.jsx)(_.Ay, {
                        src: a.proxyUrl,
                        width: a.width,
                        height: a.height,
                        responsive: !0,
                    }),
                }),
            (0, r.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: n,
                className: I.KT,
                scaleFontToUserSetting: 5 === i,
                children: s,
            }),
        ],
    });
}

function J(e) {
    let t,
        { location: n, children: i, className: a } = e;
    return (
        (t = (0, m.S1)(n, [1, 5, 6])
            ? {
                  defaultTextColor: "content-inventory-overlay-text-secondary",
                  defaultIconColor: p.LU0.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
              }
            : 2 === n
              ? {
                    defaultTextColor: "interactive-text-default",
                }
              : 3 === n
                ? {
                      defaultTextColor: "text-muted",
                  }
                : 4 === n
                  ? {
                        defaultTextColor: "text-subtle",
                        defaultIconColor: p.LU0.colors.TEXT_SUBTLE,
                    }
                  : {
                        defaultTextColor: "text-subtle",
                    }),
        (0, r.jsx)(x.Provider, {
            value: T(
                {
                    location: n,
                },
                t,
            ),
            children: (0, r.jsx)("div", {
                className: s()(
                    I.cV,
                    {
                        [I.u3]: 0 === n,
                        [I.BQ]: (0, m.S1)(n, [1, 2]),
                        [I.DY]: 3 === n,
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
        case c.I.TOP_ARTIST:
            return P[e.content_type].map((t, n) =>
                (0, r.jsx)(
                    t,
                    {
                        entry: e,
                    },
                    n,
                ),
            );
        case c.I.PLAYED_GAME:
            return P[e.content_type].map((t, n) =>
                (0, r.jsx)(
                    t,
                    {
                        entry: e,
                    },
                    n,
                ),
            );
        case c.I.TOP_GAME:
            return P[e.content_type].map((t, n) =>
                (0, r.jsx)(
                    t,
                    {
                        entry: e,
                    },
                    n,
                ),
            );
        case c.I.WATCHED_MEDIA:
            return P[e.content_type].map((t, n) =>
                (0, r.jsx)(
                    t,
                    {
                        entry: e,
                    },
                    n,
                ),
            );
        case c.I.LAUNCHED_ACTIVITY:
            return P[e.content_type].map((t, n) =>
                (0, r.jsx)(
                    t,
                    {
                        entry: e,
                    },
                    n,
                ),
            );
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
