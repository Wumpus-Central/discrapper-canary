"use strict";
n.d(t, { s: () => v, iu: () => N, DN: () => C, Ay: () => D });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(936504),
    l = n(17928),
    u = n(661531),
    c = n(990078),
    d = n(939249);
n(321073);
var _ = n(113144),
    h = n.n(_),
    f = n(776231);
let p = /url\(['"](.*)['"]\)/;
function E(e) {
    if (null == e || "" === e || "none" === e) return null;
    let t = e.match(p);
    return null != t ? t[1] : e;
}
var m = n(624793),
    g = n(714991),
    A = n(260509),
    I = n(531685),
    T = n(515718),
    S = n(821589),
    y = n(304406);
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
    v = {
        [C.SMOL]: [10, 10, 8, 6, 6, 4],
        [C.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [C.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [C.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [C.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [C.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [C.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [C.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
    };
class R extends r.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t ? null : (0, i.jsx)("div", { className: y.acronym, children: (0, A.Rb)(e) });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: s } = this.props;
        return e
            ? (0, i.jsx)(g.A, {
                  className: y.guildIconBadge,
                  guild: t,
                  badgeStrokeColor: n,
                  tooltipColor: r,
                  tooltipDelay: s,
              })
            : null;
    }
    renderIcon() {
        let {
                guild: e,
                className: t,
                showBadge: n,
                active: r,
                size: s,
                style: o = {},
                textScale: l,
                showTooltip: u,
                tooltipPosition: c,
                onClick: _,
                to: h,
                badgeStrokeColor: f,
                animate: p,
                tabIndex: E,
                iconSrc: m,
                "aria-hidden": g,
                lossless: I,
                iconSize: T,
                ...C
            } = this.props,
            N = v[s],
            R = null != _ ? d.D : "div",
            O = (0, A.Rb)(e);
        return (0, i.jsxs)(R, {
            className: a()(y.icon, t, (0, S.t)(y, "iconSize", s), {
                [(0, S.t)(y, "iconActive", s) ?? ""]: r,
                [y.iconInactive]: !r,
                [y.noIcon]: null == e.icon,
            }),
            "aria-hidden": g,
            style: null == e.icon ? { fontSize: (N[O.length] ?? N[N.length - 1]) * l, ...o } : o,
            onClick: null != h || null == _ ? void 0 : _,
            tabIndex: E,
            ...C,
            children: [this.renderAcronym(), this.renderBadge()],
        });
    }
    renderTooltip() {
        let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
        return t
            ? (0, i.jsx)(c.m, { text: e.name, position: n, "aria-label": !1, children: this.renderIcon() })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: t, source: n, tabIndex: r, "aria-hidden": s } = this.props;
        return null != e
            ? (0, i.jsx)(o.N_, {
                  "aria-hidden": s,
                  to: { pathname: e, state: null != n ? { analyticsSource: n } : null },
                  "aria-label": t.name,
                  tabIndex: r,
                  children: this.renderTooltip(),
              })
            : this.renderTooltip();
    }
}
let O = l.Ay.connectStores([I.A], (e) => {
    let { guild: t, animate: n, iconSrc: i, style: r, size: s, iconSize: a, lossless: o } = e;
    return (
        null == i &&
            (i =
                t instanceof m.GO
                    ? t.getIconURL(a ?? N[s], n && I.A.isFocused())
                    : (0, A.Iv)(t, a ?? N[s], n && I.A.isFocused(), o)),
        { style: { ...r, backgroundImage: (0, T.wU)(i) } }
    );
})(
    (function (e) {
        class t extends r.Component {
            cachedURLs = [];
            canceller = null;
            constructor(e) {
                super(e);
                const { style: t } = e,
                    n = null != t ? E(t.backgroundImage) : null;
                (this.cachedURLs = [n]), (this.state = { cached: n, loaded: !0 });
            }
            componentDidUpdate(e, t) {
                if (t === this.state) return;
                let { cached: n, loaded: i } = this.state,
                    { style: r } = this.props,
                    s = null != r ? E(r.backgroundImage) : null;
                (null == s && s !== n) || this.cachedURLs.indexOf(s) >= 0
                    ? this.setState({ loaded: !0, cached: s })
                    : null != s && s !== n && !0 === i && this.setState({ loaded: !1 }, () => this.preloadURL(s));
            }
            preloadURL(e) {
                this.canceller?.(),
                    (this.canceller = (0, f.yt)(e, (t) => {
                        (this.canceller = null),
                            t || (this.cachedURLs.push(e), this.setState({ cached: e, loaded: !0 }));
                    }));
            }
            componentWillUnmount() {
                this.canceller?.(), (this.cachedURLs.length = 0);
            }
            render() {
                let { style: t, ...n } = this.props,
                    { loaded: r, cached: s } = this.state;
                return (
                    r ||
                        null == t ||
                        (t = { ...t, backgroundImage: null == s || "" === s || "none" === s ? "none" : `url(${s})` }),
                    (0, i.jsx)(e, { style: t, ...n })
                );
            }
        }
        return h()(t, e), t;
    })((e) => (0, i.jsx)(R, { ...e })),
);
class b extends r.PureComponent {
    static Sizes = C;
    static defaultProps = {
        size: C.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: u.A.unsafe_rawColors.WHITE.css,
        animate: !1,
    };
    render() {
        return (0, i.jsx)(O, { ...this.props });
    }
}
let D = b;
