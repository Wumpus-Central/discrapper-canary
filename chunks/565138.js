n.d(t, { Z: () => L });
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
    _ = n(891819),
    p = n(231053),
    h = n(372769),
    m = n(601964),
    g = n(451478),
    E = n(956664),
    b = n(153066),
    y = n(532168);
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
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
class P extends a.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t
            ? null
            : (0, i.jsx)("div", {
                  className: y.acronym,
                  children: (0, m.gM)(e),
              });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: a } = this.props;
        return e
            ? (0, i.jsx)(h.Z, {
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
                showTooltip: _,
                tooltipPosition: p,
                onClick: h,
                to: g,
                badgeStrokeColor: E,
                animate: O,
                tabIndex: I,
                iconSrc: A,
                "aria-hidden": C,
                lossless: N,
                iconSize: P,
            } = n,
            D = S(n, [
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
            w = R[c],
            L = null != h ? f.P3F : "div",
            x = (0, m.gM)(r);
        return (0, i.jsxs)(
            L,
            T(
                v(
                    {
                        className: s()(y.icon, a, (0, b.l)(y, "iconSize", c), {
                            [null != (e = (0, b.l)(y, "iconActive", c)) ? e : ""]: l,
                            [y.iconInactive]: !l,
                            [y.noIcon]: null == r.icon,
                        }),
                        "aria-hidden": C,
                        style:
                            null == r.icon
                                ? v({ fontSize: (null != (t = w[x.length]) ? t : w[w.length - 1]) * d }, u)
                                : u,
                        onClick: null != g || null == h ? void 0 : h,
                        tabIndex: I,
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
let D = c.ZP.connectStores([g.Z], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: a, iconSize: o, lossless: s } = e;
    return (
        null == r &&
            (r =
                t instanceof p.JO
                    ? t.getIconURL(null != o ? o : N[a], n && g.Z.isFocused())
                    : (0, m.EB)(t, null != o ? o : N[a], n && g.Z.isFocused(), s)),
        { style: T(v({}, i), { backgroundImage: (0, E.rv)(r) }) }
    );
})((0, _.N)((e) => (0, i.jsx)(P, v({}, e))));
class w extends (r = a.PureComponent) {
    render() {
        return (0, i.jsx)(D, v({}, this.props));
    }
}
O(w, "Sizes", C),
    O(w, "defaultProps", {
        size: C.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: u.Z.unsafe_rawColors.WHITE_500.css,
        animate: !1,
    });
let L = w;
