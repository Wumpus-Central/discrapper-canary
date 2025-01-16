var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(568611),
    c = r(442837),
    d = r(692547),
    f = r(481060),
    _ = r(891819),
    h = r(372769),
    p = r(451478),
    m = r(956664),
    g = r(153066),
    E = r(84966);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
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
    b = {
        [I.SMOL]: [10, 10, 8, 6, 6, 4],
        [I.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [I.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [I.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [I.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [I.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [I.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [I.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
    };
class y extends s.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: n } = this.props;
        return null != e.icon || null != n
            ? null
            : (0, a.jsx)('div', {
                  className: E.acronym,
                  children: e.acronym
              });
    }
    renderBadge() {
        let { showBadge: e, guild: n, badgeStrokeColor: r, badgeTooltipColor: i, badgeTooltipDelay: s } = this.props;
        return e && null != n.hasFeature
            ? (0, a.jsx)(h.Z, {
                  className: E.guildIconBadge,
                  guild: n,
                  badgeStrokeColor: r,
                  tooltipColor: i,
                  tooltipDelay: s
              })
            : null;
    }
    renderIcon() {
        var e, n;
        let { guild: r, className: i, showBadge: s, active: o, size: u, style: c = {}, textScale: d, showTooltip: _, tooltipPosition: h, onClick: p, to: m, badgeStrokeColor: v, animate: I, tabIndex: T, iconSrc: y, 'aria-hidden': S, ...A } = this.props,
            N = b[u],
            C = null != p ? f.Clickable : 'div';
        return (0, a.jsxs)(C, {
            className: l()(E.icon, i, (0, g.l)(E, 'iconSize', u), {
                [null !== (e = (0, g.l)(E, 'iconActive', u)) && void 0 !== e ? e : '']: o,
                [E.iconInactive]: !o,
                [E.noIcon]: null == r.icon
            }),
            'aria-hidden': S,
            style:
                null == r.icon
                    ? {
                          fontSize: (null !== (n = N[r.acronym.length]) && void 0 !== n ? n : N[N.length - 1]) * d,
                          ...c
                      }
                    : c,
            onClick: null != m || null == p ? void 0 : p,
            tabIndex: T,
            ...A,
            children: [this.renderAcronym(), this.renderBadge()]
        });
    }
    renderTooltip() {
        let { guild: e, showTooltip: n, tooltipPosition: r } = this.props;
        return n
            ? (0, a.jsx)(f.Tooltip, {
                  text: e.name,
                  position: r,
                  'aria-label': !1,
                  children: (e) => s.cloneElement(s.Children.only(this.renderIcon()), { ...e })
              })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: n, source: r, tabIndex: i, 'aria-hidden': s } = this.props;
        return null != e
            ? (0, a.jsx)(u.rU, {
                  'aria-hidden': s,
                  to: {
                      pathname: e,
                      state: null != r ? { analyticsSource: r } : null
                  },
                  'aria-label': n.toString(),
                  tabIndex: i,
                  children: this.renderTooltip()
              })
            : this.renderTooltip();
    }
}
let S = c.ZP.connectStores([p.Z], (e) => {
    let { guild: n, animate: r, iconSrc: i, style: a, size: s } = e;
    return {
        style: {
            ...a,
            backgroundImage: (0, m.rv)(null != i ? i : n.getIconURL(T[s], r && p.Z.isFocused()))
        }
    };
})((0, _.N)((e) => (0, a.jsx)(y, { ...e })));
class A extends (i = s.PureComponent) {
    render() {
        return (0, a.jsx)(S, { ...this.props });
    }
}
v(A, 'Sizes', I),
    v(A, 'defaultProps', {
        size: I.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: 'top',
        badgeStrokeColor: d.Z.unsafe_rawColors.WHITE_500.css,
        animate: !1
    }),
    (n.Z = A);
