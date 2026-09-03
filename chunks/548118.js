n.d(t, { s: () => R, iu: () => O, DN: () => C, Ay: () => v });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(561028),
    o = n(17928),
    d = n(661531),
    c = n(939249),
    u = n(866665);
n(321073);
var _ = n(113144),
    E = n.n(_),
    A = n(776231);
let h = /url\(['"](.*)['"]\)/;
function I(e) {
    if (null == e || "" === e || "none" === e) return null;
    let t = e.match(h);
    return null != t ? t[1] : e;
}
var f = n(624793),
    p = n(714991),
    T = n(260509),
    m = n(531685),
    g = n(515718),
    S = n(821589),
    N = n(779469);
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
    O = {
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
class L extends r.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t ? null : (0, i.jsx)("div", { className: N.acronym, children: (0, T.Rb)(e) });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: a } = this.props;
        return e
            ? (0, i.jsx)(p.A, {
                  className: N.guildIconBadge,
                  guild: t,
                  badgeStrokeColor: n,
                  tooltipColor: r,
                  tooltipDelay: a,
              })
            : null;
    }
    renderIcon() {
        let {
                guild: e,
                className: t,
                showBadge: n,
                active: r,
                size: a,
                style: l = {},
                textScale: o,
                showTooltip: d,
                tooltipPosition: u,
                onClick: _,
                to: E,
                badgeStrokeColor: A,
                animate: h,
                tabIndex: I,
                iconSrc: f,
                "aria-hidden": p,
                lossless: m,
                iconSize: g,
                ...C
            } = this.props,
            O = R[a],
            L = null != _ ? c.D : "div",
            y = (0, T.Rb)(e);
        return (0, i.jsxs)(L, {
            className: s()(N.icon, t, (0, S.t)(N, "iconSize", a), {
                [(0, S.t)(N, "iconActive", a) ?? ""]: r,
                [N.iconInactive]: !r,
                [N.noIcon]: null == e.icon,
            }),
            "aria-hidden": p,
            style: null == e.icon ? { fontSize: (O[y.length] ?? O[O.length - 1]) * o, ...l } : l,
            onClick: null != E || null == _ ? void 0 : _,
            tabIndex: I,
            ...C,
            children: [this.renderAcronym(), this.renderBadge()],
        });
    }
    renderTooltip() {
        let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
        return t
            ? (0, i.jsx)(u.m, { text: e.name, position: n, "aria-label": !1, children: this.renderIcon() })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: t, source: n, tabIndex: r, "aria-hidden": a } = this.props;
        return null != e
            ? (0, i.jsx)(l.N_, {
                  "aria-hidden": a,
                  to: { pathname: e, state: null != n ? { analyticsSource: n } : null },
                  "aria-label": t.name,
                  tabIndex: r,
                  children: this.renderTooltip(),
              })
            : this.renderTooltip();
    }
}
let y = o.Ay.connectStores([m.A], (e) => {
    let { guild: t, animate: n, iconSrc: i, style: r, size: a, iconSize: s, lossless: l } = e;
    return (
        null == i &&
            (i =
                t instanceof f.GO
                    ? t.getIconURL(s ?? O[a], n && m.A.isFocused())
                    : (0, T.Iv)(t, s ?? O[a], n && m.A.isFocused(), l)),
        { style: { ...r, backgroundImage: (0, g.wU)(i) } }
    );
})(
    (function (e) {
        class t extends r.Component {
            cachedURLs = [];
            canceller = null;
            constructor(e) {
                super(e);
                const { style: t } = e,
                    n = null != t ? I(t.backgroundImage) : null;
                (this.cachedURLs = [n]), (this.state = { cached: n, loaded: !0 });
            }
            componentDidUpdate(e, t) {
                if (t === this.state) return;
                let { cached: n, loaded: i } = this.state,
                    { style: r } = this.props,
                    a = null != r ? I(r.backgroundImage) : null;
                (null == a && a !== n) || this.cachedURLs.indexOf(a) >= 0
                    ? this.setState({ loaded: !0, cached: a })
                    : null != a && a !== n && !0 === i && this.setState({ loaded: !1 }, () => this.preloadURL(a));
            }
            preloadURL(e) {
                this.canceller?.(),
                    (this.canceller = (0, A.yt)(e, (t) => {
                        (this.canceller = null),
                            t || (this.cachedURLs.push(e), this.setState({ cached: e, loaded: !0 }));
                    }));
            }
            componentWillUnmount() {
                this.canceller?.(), (this.cachedURLs.length = 0);
            }
            render() {
                let { style: t, ...n } = this.props,
                    { loaded: r, cached: a } = this.state;
                return (
                    r ||
                        null == t ||
                        (t = { ...t, backgroundImage: null == a || "" === a || "none" === a ? "none" : `url(${a})` }),
                    (0, i.jsx)(e, { style: t, ...n })
                );
            }
        }
        return E()(t, e), t;
    })((e) => (0, i.jsx)(L, { ...e })),
);
class D extends r.PureComponent {
    static Sizes = C;
    static defaultProps = {
        size: C.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: d.A.unsafe_rawColors.WHITE.css,
        animate: !1,
    };
    render() {
        return (0, i.jsx)(y, { ...this.props });
    }
}
let v = D;
