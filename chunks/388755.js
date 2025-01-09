s.d(t, {
    D: function () {
        return I;
    }
}),
    s(47120);
var a = s(200651),
    n = s(192379),
    r = s(557533),
    i = s.n(r),
    o = s(39383),
    l = s.n(o),
    c = s(608863),
    d = s(66037),
    u = s(643103),
    p = s(34211),
    N = s(231338),
    h = s(431138),
    m = s(521667);
function f(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let g = N.j_.MAIN_NAVIGATION_MENU;
class I extends n.PureComponent {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        let { className: e, TrackClick: t, onChangeLocale: s, avoidRouter: n, openNavAriaLabel: r, hideNavAriaLabel: o } = this.props,
            { menuOpen: l } = this.state;
        return (0, a.jsx)('header', {
            className: i()(m.header, e),
            children: (0, a.jsxs)('nav', {
                className: m.headerInner,
                children: [
                    (0, a.jsx)(t, {
                        tag: 'div',
                        eventName: g,
                        className: m.headerLogo,
                        data: { linkClicked: 'logo' },
                        children: (0, a.jsx)(d.Z, {
                            avoidRouter: n,
                            className: m.logoWrapper,
                            to: N.am.INDEX,
                            from: N.j_.MAIN_NAVIGATION_MENU,
                            children: (0, a.jsx)('img', {
                                className: m.logo,
                                src: h.r.ASSET_LOGO_DISCORD_SVG,
                                alt: 'Discord',
                                itemProp: 'logo'
                            })
                        })
                    }),
                    (0, a.jsx)(t, {
                        tag: 'div',
                        className: m.hamburgerButton,
                        eventName: g,
                        data: { linkClicked: 'mobile-menu' },
                        children: (0, a.jsx)(c.r, {
                            open: l,
                            'aria-haspopup': 'true',
                            'aria-label': l ? o : r,
                            'aria-expanded': l,
                            'aria-controls': this._mainNavId,
                            onClick: this.toggleMenu
                        })
                    }),
                    (0, a.jsxs)('ul', {
                        className: l ? m.headerNavOpen : m.headerNav,
                        children: [
                            (0, a.jsx)(p.o, {
                                avoidRouter: n,
                                TrackClick: t,
                                styles: m,
                                isMobile: !0,
                                isVisible: l
                            }),
                            (0, a.jsx)(u.p, { onChange: s })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_mainNavId', l()('mainNav')),
            f(this, 'state', { menuOpen: !1 }),
            f(this, 'toggleMenu', () => {
                this.setState({ menuOpen: !this.state.menuOpen });
            }),
            f(this, 'handleKeyDown', (e) => {
                let { menuOpen: t } = this.state;
                ('Escape' === e.key || 'Esc' === e.key) && (e.preventDefault(), t && this.toggleMenu());
            });
    }
}
