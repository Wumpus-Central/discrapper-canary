n.d(t, { Z: () => P });
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(568611),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(891819),
    _ = n(372769),
    p = n(451478),
    h = n(956664),
    m = n(153066),
    g = n(812737);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = {
        SMOL: 'Smol',
        MINI: 'Mini',
        SMALLER: 'Smaller',
        SMALL: 'Small',
        MEDIUM: 'Medium',
        LARGE: 'Large',
        LARGER: 'Larger',
        XLARGE: 'XLarge'
    },
    T = {
        [S.SMOL]: 16,
        [S.MINI]: 20,
        [S.SMALLER]: 24,
        [S.SMALL]: 30,
        [S.MEDIUM]: 40,
        [S.LARGE]: 50,
        [S.LARGER]: 64,
        [S.XLARGE]: 100
    },
    N = {
        [S.SMOL]: [10, 10, 8, 6, 6, 4],
        [S.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [S.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [S.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [S.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [S.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [S.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [S.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
    };
class A extends o.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t
            ? null
            : (0, i.jsx)('div', {
                  className: g.acronym,
                  children: e.acronym
              });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: o } = this.props;
        return e && null != t.hasFeature
            ? (0, i.jsx)(_.Z, {
                  className: g.guildIconBadge,
                  guild: t,
                  badgeStrokeColor: n,
                  tooltipColor: r,
                  tooltipDelay: o
              })
            : null;
    }
    renderIcon() {
        var e, t;
        let n = this.props,
            { guild: r, className: o, showBadge: a, active: l, size: c, style: u = {}, textScale: f, showTooltip: _, tooltipPosition: p, onClick: h, to: E, badgeStrokeColor: y, animate: I, tabIndex: S, iconSrc: T, 'aria-hidden': A, lossless: C, iconSize: R } = n,
            P = O(n, ['guild', 'className', 'showBadge', 'active', 'size', 'style', 'textScale', 'showTooltip', 'tooltipPosition', 'onClick', 'to', 'badgeStrokeColor', 'animate', 'tabIndex', 'iconSrc', 'aria-hidden', 'lossless', 'iconSize']),
            w = N[c],
            D = null != h ? d.P3F : 'div';
        return (0, i.jsxs)(
            D,
            v(
                b(
                    {
                        className: s()(g.icon, o, (0, m.l)(g, 'iconSize', c), {
                            [null != (e = (0, m.l)(g, 'iconActive', c)) ? e : '']: l,
                            [g.iconInactive]: !l,
                            [g.noIcon]: null == r.icon
                        }),
                        'aria-hidden': A,
                        style: null == r.icon ? b({ fontSize: (null != (t = w[r.acronym.length]) ? t : w[w.length - 1]) * f }, u) : u,
                        onClick: null != E || null == h ? void 0 : h,
                        tabIndex: S
                    },
                    P
                ),
                {
                    children: [this.renderAcronym(), this.renderBadge()]
                }
            )
        );
    }
    renderTooltip() {
        let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
        return t
            ? (0, i.jsx)(d.ua7, {
                  text: e.name,
                  position: n,
                  'aria-label': !1,
                  children: (e) => o.cloneElement(o.Children.only(this.renderIcon()), b({}, e))
              })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: t, source: n, tabIndex: r, 'aria-hidden': o } = this.props;
        return null != e
            ? (0, i.jsx)(l.rU, {
                  'aria-hidden': o,
                  to: {
                      pathname: e,
                      state: null != n ? { analyticsSource: n } : null
                  },
                  'aria-label': t.toString(),
                  tabIndex: r,
                  children: this.renderTooltip()
              })
            : this.renderTooltip();
    }
}
let C = c.ZP.connectStores([p.Z], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: o, iconSize: a, lossless: s } = e;
    return { style: v(b({}, i), { backgroundImage: (0, h.rv)(null != r ? r : t.getIconURL(null != a ? a : T[o], n && p.Z.isFocused(), s)) }) };
})((0, f.N)((e) => (0, i.jsx)(A, b({}, e))));
class R extends (r = o.PureComponent) {
    render() {
        return (0, i.jsx)(C, b({}, this.props));
    }
}
E(R, 'Sizes', S),
    E(R, 'defaultProps', {
        size: S.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: 'top',
        badgeStrokeColor: u.Z.unsafe_rawColors.WHITE_500.css,
        animate: !1
    });
let P = R;
