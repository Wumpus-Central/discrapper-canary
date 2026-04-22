"use strict";
n.d(t, { Ay: () => R, DN: () => I, iu: () => T, s: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(936504),
    l = n(311907),
    u = n(827734),
    d = n(990078),
    c = n(939249),
    _ = n(162532),
    f = n(624793),
    E = n(714991),
    h = n(260509),
    p = n(531685),
    m = n(515718),
    g = n(821589),
    A = n(645206);
let I = {
        SMOL: "Smol",
        MINI: "Mini",
        SMALLER: "Smaller",
        SMALL: "Small",
        MEDIUM: "Medium",
        LARGE: "Large",
        LARGER: "Larger",
        XLARGE: "XLarge",
    },
    T = {
        [I.SMOL]: 16,
        [I.MINI]: 20,
        [I.SMALLER]: 24,
        [I.SMALL]: 30,
        [I.MEDIUM]: 40,
        [I.LARGE]: 50,
        [I.LARGER]: 64,
        [I.XLARGE]: 100,
    },
    S = {
        [I.SMOL]: [10, 10, 8, 6, 6, 4],
        [I.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [I.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [I.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [I.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [I.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [I.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [I.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
    };
class y extends i.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t ? null : (0, r.jsx)("div", { className: A.acronym, children: (0, h.Rb)(e) });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: i, badgeTooltipDelay: s } = this.props;
        return e
            ? (0, r.jsx)(E.A, {
                  className: A.guildIconBadge,
                  guild: t,
                  badgeStrokeColor: n,
                  tooltipColor: i,
                  tooltipDelay: s,
              })
            : null;
    }
    renderIcon() {
        let {
                guild: e,
                className: t,
                showBadge: n,
                active: i,
                size: s,
                style: o = {},
                textScale: l,
                showTooltip: u,
                tooltipPosition: d,
                onClick: _,
                to: f,
                badgeStrokeColor: E,
                animate: p,
                tabIndex: m,
                iconSrc: I,
                "aria-hidden": T,
                lossless: y,
                iconSize: N,
                ...O
            } = this.props,
            R = S[s],
            v = null != _ ? c.D : "div",
            C = (0, h.Rb)(e);
        return (0, r.jsxs)(v, {
            className: a()(A.icon, t, (0, g.t)(A, "iconSize", s), {
                [(0, g.t)(A, "iconActive", s) ?? ""]: i,
                [A.iconInactive]: !i,
                [A.noIcon]: null == e.icon,
            }),
            "aria-hidden": T,
            style: null == e.icon ? { fontSize: (R[C.length] ?? R[R.length - 1]) * l, ...o } : o,
            onClick: null != f || null == _ ? void 0 : _,
            tabIndex: m,
            ...O,
            children: [this.renderAcronym(), this.renderBadge()],
        });
    }
    renderTooltip() {
        let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
        return t
            ? (0, r.jsx)(d.m, { text: e.name, position: n, "aria-label": !1, children: this.renderIcon() })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: t, source: n, tabIndex: i, "aria-hidden": s } = this.props;
        return null != e
            ? (0, r.jsx)(o.N_, {
                  "aria-hidden": s,
                  to: { pathname: e, state: null != n ? { analyticsSource: n } : null },
                  "aria-label": t.name,
                  tabIndex: i,
                  children: this.renderTooltip(),
              })
            : this.renderTooltip();
    }
}
let N = l.Ay.connectStores([p.A], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: s, iconSize: a, lossless: o } = e;
    return (
        null == r &&
            (r =
                t instanceof f.GO
                    ? t.getIconURL(a ?? T[s], n && p.A.isFocused())
                    : (0, h.Iv)(t, a ?? T[s], n && p.A.isFocused(), o)),
        { style: { ...i, backgroundImage: (0, m.wU)(r) } }
    );
})((0, _.Y)((e) => (0, r.jsx)(y, { ...e })));
class O extends i.PureComponent {
    static Sizes = I;
    static defaultProps = {
        size: I.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: u.A.unsafe_rawColors.WHITE.css,
        animate: !1,
    };
    render() {
        return (0, r.jsx)(N, { ...this.props });
    }
}
let R = O;
