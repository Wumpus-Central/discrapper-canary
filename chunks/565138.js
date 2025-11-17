n.d(t, { Z: () => w });
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(319498),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(891819),
    _ = n(231053),
    p = n(372769),
    h = n(601964),
    m = n(451478),
    g = n(956664),
    E = n(153066),
    b = n(965005);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
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
function I(e, t) {
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
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
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
    C = {
        [A.SMOL]: 16,
        [A.MINI]: 20,
        [A.SMALLER]: 24,
        [A.SMALL]: 30,
        [A.MEDIUM]: 40,
        [A.LARGE]: 50,
        [A.LARGER]: 64,
        [A.XLARGE]: 100,
    },
    N = {
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
                  className: b.acronym,
                  children: (0, h.gM)(e),
              });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: a } = this.props;
        return e
            ? (0, i.jsx)(p.Z, {
                  className: b.guildIconBadge,
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
                textScale: f,
                showTooltip: _,
                tooltipPosition: p,
                onClick: m,
                to: g,
                badgeStrokeColor: y,
                animate: v,
                tabIndex: S,
                iconSrc: A,
                "aria-hidden": C,
                lossless: R,
                iconSize: P,
            } = n,
            D = T(n, [
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
            w = N[c],
            x = null != m ? d.P3F : "div",
            L = (0, h.gM)(r);
        return (0, i.jsxs)(
            x,
            I(
                O(
                    {
                        className: s()(b.icon, a, (0, E.l)(b, "iconSize", c), {
                            [null != (e = (0, E.l)(b, "iconActive", c)) ? e : ""]: l,
                            [b.iconInactive]: !l,
                            [b.noIcon]: null == r.icon,
                        }),
                        "aria-hidden": C,
                        style:
                            null == r.icon
                                ? O({ fontSize: (null != (t = w[L.length]) ? t : w[w.length - 1]) * f }, u)
                                : u,
                        onClick: null != g || null == m ? void 0 : m,
                        tabIndex: S,
                    },
                    D,
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
            ? (0, i.jsx)(d.aML, {
                  text: e.name,
                  position: n,
                  "aria-label": !1,
                  children: (e) => a.cloneElement(a.Children.only(this.renderIcon()), O({}, e)),
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
let P = c.ZP.connectStores([m.Z], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: a, iconSize: o, lossless: s } = e;
    return (
        null == r &&
            (r =
                t instanceof _.JO
                    ? t.getIconURL(null != o ? o : C[a], n && m.Z.isFocused())
                    : (0, h.EB)(t, null != o ? o : C[a], n && m.Z.isFocused(), s)),
        { style: I(O({}, i), { backgroundImage: (0, g.rv)(r) }) }
    );
})((0, f.N)((e) => (0, i.jsx)(R, O({}, e))));
class D extends (r = a.PureComponent) {
    render() {
        return (0, i.jsx)(P, O({}, this.props));
    }
}
y(D, "Sizes", A),
    y(D, "defaultProps", {
        size: A.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: u.Z.unsafe_rawColors.WHITE_500.css,
        animate: !1,
    });
let w = D;
