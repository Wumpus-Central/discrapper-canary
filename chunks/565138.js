n.d(t, { Z: () => x });
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(319498),
    c = n(442837),
    u = n(692547),
    d = n(681715),
    f = n(481060),
    p = n(891819),
    _ = n(231053),
    m = n(372769),
    h = n(601964),
    g = n(451478),
    E = n(956664),
    b = n(153066),
    y = n(58776);
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
function v(e) {
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
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = {
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
        [A.SMOL]: 16,
        [A.MINI]: 20,
        [A.SMALLER]: 24,
        [A.SMALL]: 30,
        [A.MEDIUM]: 40,
        [A.LARGE]: 50,
        [A.LARGER]: 64,
        [A.XLARGE]: 100,
    },
    P = {
        [A.SMOL]: [10, 10, 8, 6, 6, 4],
        [A.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [A.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [A.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [A.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [A.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [A.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [A.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
    };
class R extends a.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t
            ? null
            : (0, i.jsx)("div", {
                  className: y.acronym,
                  children: (0, h.gM)(e),
              });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: a } = this.props;
        return e
            ? (0, i.jsx)(m.Z, {
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
                showBadge: o,
                active: l,
                size: c,
                style: u = {},
                textScale: d,
                showTooltip: p,
                tooltipPosition: _,
                onClick: m,
                to: g,
                badgeStrokeColor: E,
                animate: O,
                tabIndex: S,
                iconSrc: C,
                "aria-hidden": A,
                lossless: N,
                iconSize: R,
            } = n,
            w = T(n, [
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
            D = P[c],
            x = null != m ? f.P3F : "div",
            L = (0, h.gM)(r);
        return (0, i.jsxs)(
            x,
            I(
                v(
                    {
                        className: s()(y.icon, a, (0, b.l)(y, "iconSize", c), {
                            [null != (e = (0, b.l)(y, "iconActive", c)) ? e : ""]: l,
                            [y.iconInactive]: !l,
                            [y.noIcon]: null == r.icon,
                        }),
                        "aria-hidden": A,
                        style:
                            null == r.icon
                                ? v({ fontSize: (null != (t = D[L.length]) ? t : D[D.length - 1]) * d }, u)
                                : u,
                        onClick: null != g || null == m ? void 0 : m,
                        tabIndex: S,
                    },
                    w,
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
            ? (0, i.jsx)(d.u, {
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
            ? (0, i.jsx)(l.rU, {
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
let w = c.ZP.connectStores([g.Z], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: a, iconSize: o, lossless: s } = e;
    return (
        null == r &&
            (r =
                t instanceof _.JO
                    ? t.getIconURL(null != o ? o : N[a], n && g.Z.isFocused())
                    : (0, h.EB)(t, null != o ? o : N[a], n && g.Z.isFocused(), s)),
        { style: I(v({}, i), { backgroundImage: (0, E.rv)(r) }) }
    );
})((0, p.N)((e) => (0, i.jsx)(R, v({}, e))));
class D extends (r = a.PureComponent) {
    render() {
        return (0, i.jsx)(w, v({}, this.props));
    }
}
O(D, "Sizes", A),
    O(D, "defaultProps", {
        size: A.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: u.Z.unsafe_rawColors.WHITE.css,
        animate: !1,
    });
let x = D;
