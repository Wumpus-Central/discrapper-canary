n.d(t, { A: () => x });
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(758879),
    c = n(311907),
    u = n(827734),
    d = n(435371),
    f = n(397927),
    p = n(162532),
    _ = n(624793),
    h = n(714991),
    m = n(260509),
    g = n(531685),
    E = n(515718),
    b = n(821589),
    y = n(263499);
function O(e, t, n) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
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
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let C = {
        SMOL: "Smol",
        MINI: "Mini",
        SMALLER: "Smaller",
        SMALL: "Small",
        MEDIUM: "Medium",
        LARGE: "Large",
        LARGER: "Larger",
        XLARGE: "XLarge",
    },
    N = {
        [C.SMOL]: 16,
        [C.MINI]: 20,
        [C.SMALLER]: 24,
        [C.SMALL]: 30,
        [C.MEDIUM]: 40,
        [C.LARGE]: 50,
        [C.LARGER]: 64,
        [C.XLARGE]: 100,
    },
    R = {
        [C.SMOL]: [10, 10, 8, 6, 6, 4],
        [C.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [C.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [C.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [C.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [C.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [C.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [C.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
    };
class w extends a.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t
            ? null
            : (0, i.jsx)("div", {
                  className: y.acronym,
                  children: (0, m.Rb)(e),
              });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: a } = this.props;
        return e
            ? (0, i.jsx)(h.A, {
                  className: y.guildIconBadge,
                  guild: t,
                  badgeStrokeColor: n,
                  tooltipColor: r,
                  tooltipDelay: a,
              })
            : null;
    }
    renderIcon() {
        var e, t;
        let n = this.props,
            {
                guild: r,
                className: a,
                showBadge: s,
                active: l,
                size: c,
                style: u = {},
                textScale: d,
                showTooltip: p,
                tooltipPosition: _,
                onClick: h,
                to: g,
                badgeStrokeColor: E,
                animate: O,
                tabIndex: v,
                iconSrc: T,
                "aria-hidden": C,
                lossless: N,
                iconSize: w,
            } = n,
            P = I(n, [
                "guild",
                "className",
                "showBadge",
                "active",
                "size",
                "style",
                "textScale",
                "showTooltip",
                "tooltipPosition",
                "onClick",
                "to",
                "badgeStrokeColor",
                "animate",
                "tabIndex",
                "iconSrc",
                "aria-hidden",
                "lossless",
                "iconSize",
            ]),
            D = R[c],
            x = null != h ? f.DUT : "div",
            L = (0, m.Rb)(r);
        return (0, i.jsxs)(
            x,
            S(
                A(
                    {
                        className: o()(y.icon, a, (0, b.t)(y, "iconSize", c), {
                            [null != (e = (0, b.t)(y, "iconActive", c)) ? e : ""]: l,
                            [y.iconInactive]: !l,
                            [y.noIcon]: null == r.icon,
                        }),
                        "aria-hidden": C,
                        style:
                            null == r.icon
                                ? A({ fontSize: (null != (t = D[L.length]) ? t : D[D.length - 1]) * d }, u)
                                : u,
                        onClick: null != g || null == h ? void 0 : h,
                        tabIndex: v,
                    },
                    P,
                ),
                {
                    children: [this.renderAcronym(), this.renderBadge()],
                },
            ),
        );
    }
    renderTooltip() {
        let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
        return t
            ? (0, i.jsx)(d.m_, {
                  text: e.name,
                  position: n,
                  "aria-label": !1,
                  children: this.renderIcon(),
              })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: t, source: n, tabIndex: r, "aria-hidden": a } = this.props;
        return null != e
            ? (0, i.jsx)(l.N_, {
                  "aria-hidden": a,
                  to: {
                      pathname: e,
                      state: null != n ? { analyticsSource: n } : null,
                  },
                  "aria-label": t.name,
                  tabIndex: r,
                  children: this.renderTooltip(),
              })
            : this.renderTooltip();
    }
}
let P = c.Ay.connectStores([g.A], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: a, iconSize: s, lossless: o } = e;
    return (
        null == r &&
            (r =
                t instanceof _.GO
                    ? t.getIconURL(null != s ? s : N[a], n && g.A.isFocused())
                    : (0, m.Iv)(t, null != s ? s : N[a], n && g.A.isFocused(), o)),
        { style: S(A({}, i), { backgroundImage: (0, E.wU)(r) }) }
    );
})((0, p.Y)((e) => (0, i.jsx)(w, A({}, e))));
class D extends (r = a.PureComponent) {
    render() {
        return (0, i.jsx)(P, A({}, this.props));
    }
}
O(D, "Sizes", C),
    O(D, "defaultProps", {
        size: C.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: u.A.unsafe_rawColors.WHITE.css,
        animate: !1,
    });
let x = D;
