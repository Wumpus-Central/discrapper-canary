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
    p = n(372769),
    _ = n(451478),
    h = n(956664),
    m = n(153066),
    g = n(521686);
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
function v(e) {
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
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = {
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
        [I.SMOL]: 16,
        [I.MINI]: 20,
        [I.SMALLER]: 24,
        [I.SMALL]: 30,
        [I.MEDIUM]: 40,
        [I.LARGE]: 50,
        [I.LARGER]: 64,
        [I.XLARGE]: 100
    },
    N = {
        [I.SMOL]: [10, 10, 8, 6, 6, 4],
        [I.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [I.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [I.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [I.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [I.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [I.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [I.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
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
            ? (0, i.jsx)(p.Z, {
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
            { guild: r, className: o, showBadge: a, active: l, size: c, style: u = {}, textScale: f, showTooltip: p, tooltipPosition: _, onClick: h, to: E, badgeStrokeColor: b, animate: S, tabIndex: I, iconSrc: T, 'aria-hidden': A } = n,
            C = O(n, ['guild', 'className', 'showBadge', 'active', 'size', 'style', 'textScale', 'showTooltip', 'tooltipPosition', 'onClick', 'to', 'badgeStrokeColor', 'animate', 'tabIndex', 'iconSrc', 'aria-hidden']),
            R = N[c],
            P = null != h ? d.P3F : 'div';
        return (0, i.jsxs)(
            P,
            y(
                v(
                    {
                        className: s()(g.icon, o, (0, m.l)(g, 'iconSize', c), {
                            [null !== (e = (0, m.l)(g, 'iconActive', c)) && void 0 !== e ? e : '']: l,
                            [g.iconInactive]: !l,
                            [g.noIcon]: null == r.icon
                        }),
                        'aria-hidden': A,
                        style: null == r.icon ? v({ fontSize: (null !== (t = R[r.acronym.length]) && void 0 !== t ? t : R[R.length - 1]) * f }, u) : u,
                        onClick: null != E || null == h ? void 0 : h,
                        tabIndex: I
                    },
                    C
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
                  children: (e) => o.cloneElement(o.Children.only(this.renderIcon()), v({}, e))
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
let C = c.ZP.connectStores([_.Z], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: o, iconSize: a, lossless: s } = e;
    return { style: y(v({}, i), { backgroundImage: (0, h.rv)(null != r ? r : t.getIconURL(null != a ? a : T[o], n && _.Z.isFocused(), s)) }) };
})((0, f.N)((e) => (0, i.jsx)(A, v({}, e))));
class R extends (r = o.PureComponent) {
    render() {
        return (0, i.jsx)(C, v({}, this.props));
    }
}
E(R, 'Sizes', I),
    E(R, 'defaultProps', {
        size: I.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: 'top',
        badgeStrokeColor: u.Z.unsafe_rawColors.WHITE_500.css,
        animate: !1
    });
let P = R;
