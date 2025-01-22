var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(568611),
    c = r(442837),
    d = r(692547),
    f = r(481060),
    p = r(891819),
    h = r(372769),
    _ = r(451478),
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
let y = {
        SMOL: 'Smol',
        MINI: 'Mini',
        SMALLER: 'Smaller',
        SMALL: 'Small',
        MEDIUM: 'Medium',
        LARGE: 'Large',
        LARGER: 'Larger',
        XLARGE: 'XLarge'
    },
    b = {
        [y.SMOL]: 16,
        [y.MINI]: 20,
        [y.SMALLER]: 24,
        [y.SMALL]: 30,
        [y.MEDIUM]: 40,
        [y.LARGE]: 50,
        [y.LARGER]: 64,
        [y.XLARGE]: 100
    },
    I = {
        [y.SMOL]: [10, 10, 8, 6, 6, 4],
        [y.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [y.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [y.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [y.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [y.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [y.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [y.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
    };
class T extends o.PureComponent {
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
        let { showBadge: e, guild: n, badgeStrokeColor: r, badgeTooltipColor: i, badgeTooltipDelay: o } = this.props;
        return e && null != n.hasFeature
            ? (0, a.jsx)(h.Z, {
                  className: E.guildIconBadge,
                  guild: n,
                  badgeStrokeColor: r,
                  tooltipColor: i,
                  tooltipDelay: o
              })
            : null;
    }
    renderIcon() {
        var e, n;
        let { guild: r, className: i, showBadge: o, active: s, size: u, style: c = {}, textScale: d, showTooltip: p, tooltipPosition: h, onClick: _, to: m, badgeStrokeColor: v, animate: y, tabIndex: b, iconSrc: T, 'aria-hidden': S, ...A } = this.props,
            C = I[u],
            N = null != _ ? f.Clickable : 'div';
        return (0, a.jsxs)(N, {
            className: l()(E.icon, i, (0, g.l)(E, 'iconSize', u), {
                [null !== (e = (0, g.l)(E, 'iconActive', u)) && void 0 !== e ? e : '']: s,
                [E.iconInactive]: !s,
                [E.noIcon]: null == r.icon
            }),
            'aria-hidden': S,
            style:
                null == r.icon
                    ? {
                          fontSize: (null !== (n = C[r.acronym.length]) && void 0 !== n ? n : C[C.length - 1]) * d,
                          ...c
                      }
                    : c,
            onClick: null != m || null == _ ? void 0 : _,
            tabIndex: b,
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
                  children: (e) => o.cloneElement(o.Children.only(this.renderIcon()), { ...e })
              })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: n, source: r, tabIndex: i, 'aria-hidden': o } = this.props;
        return null != e
            ? (0, a.jsx)(u.rU, {
                  'aria-hidden': o,
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
let S = c.ZP.connectStores([_.Z], (e) => {
    let { guild: n, animate: r, iconSrc: i, style: a, size: o, iconSize: s, lossless: l } = e;
    return {
        style: {
            ...a,
            backgroundImage: (0, m.rv)(null != i ? i : n.getIconURL(null != s ? s : b[o], r && _.Z.isFocused(), l))
        }
    };
})((0, p.N)((e) => (0, a.jsx)(T, { ...e })));
class A extends (i = o.PureComponent) {
    render() {
        return (0, a.jsx)(S, { ...this.props });
    }
}
v(A, 'Sizes', y),
    v(A, 'defaultProps', {
        size: y.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: 'top',
        badgeStrokeColor: d.Z.unsafe_rawColors.WHITE_500.css,
        animate: !1
    }),
    (n.Z = A);
