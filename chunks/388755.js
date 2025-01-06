a.d(t, {
    D: function () {
        return k;
    }
}),
    a(47120);
var n = a(200651),
    s = a(192379),
    i = a(557533),
    r = a.n(i),
    l = a(39383),
    o = a.n(l),
    c = a(608863),
    d = a(66037),
    u = a(643103),
    N = a(34211),
    h = a(231338),
    m = a(431138),
    p = a(521667);
function I(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = a),
        e
    );
}
let _ = h.j_.MAIN_NAVIGATION_MENU;
class k extends s.PureComponent {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        let { className: e, TrackClick: t, onChangeLocale: a, avoidRouter: s, openNavAriaLabel: i, hideNavAriaLabel: l } = this.props,
            { menuOpen: o } = this.state;
        return (0, n.jsx)('header', {
            className: r()(p.header, e),
            children: (0, n.jsxs)('nav', {
                className: p.headerInner,
                children: [
                    (0, n.jsx)(t, {
                        tag: 'div',
                        eventName: _,
                        className: p.headerLogo,
                        data: { linkClicked: 'logo' },
                        children: (0, n.jsx)(d.Z, {
                            avoidRouter: s,
                            className: p.logoWrapper,
                            to: h.am.INDEX,
                            from: h.j_.MAIN_NAVIGATION_MENU,
                            children: (0, n.jsx)('img', {
                                className: p.logo,
                                src: m.r.ASSET_LOGO_DISCORD_SVG,
                                alt: 'Discord',
                                itemProp: 'logo'
                            })
                        })
                    }),
                    (0, n.jsx)(t, {
                        tag: 'div',
                        className: p.hamburgerButton,
                        eventName: _,
                        data: { linkClicked: 'mobile-menu' },
                        children: (0, n.jsx)(c.r, {
                            open: o,
                            'aria-haspopup': 'true',
                            'aria-label': o ? l : i,
                            'aria-expanded': o,
                            'aria-controls': this._mainNavId,
                            onClick: this.toggleMenu
                        })
                    }),
                    (0, n.jsxs)('ul', {
                        className: o ? p.headerNavOpen : p.headerNav,
                        children: [
                            (0, n.jsx)(N.o, {
                                avoidRouter: s,
                                TrackClick: t,
                                styles: p,
                                isMobile: !0,
                                isVisible: o
                            }),
                            (0, n.jsx)(u.p, { onChange: a })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            I(this, '_mainNavId', o()('mainNav')),
            I(this, 'state', { menuOpen: !1 }),
            I(this, 'toggleMenu', () => {
                this.setState({ menuOpen: !this.state.menuOpen });
            }),
            I(this, 'handleKeyDown', (e) => {
                let { menuOpen: t } = this.state;
                ('Escape' === e.key || 'Esc' === e.key) && (e.preventDefault(), t && this.toggleMenu());
            });
    }
}
