s.d(t, { D: () => I }), s(47120);
var a = s(200651),
    n = s(192379),
    i = s(557533),
    r = s.n(i),
    o = s(39383),
    l = s.n(o),
    c = s(608863),
    d = s(66037),
    u = s(643103),
    p = s(34211),
    _ = s(231338),
    h = s(431138),
    N = s(768587);
function m(e, t, s) {
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
let g = _.j_.MAIN_NAVIGATION_MENU;
class I extends n.PureComponent {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        let { className: e, TrackClick: t, onChangeLocale: s, avoidRouter: n, openNavAriaLabel: i, hideNavAriaLabel: o } = this.props,
            { menuOpen: l } = this.state;
        return (0, a.jsx)('header', {
            className: r()(N.header, e),
            children: (0, a.jsxs)('nav', {
                className: N.headerInner,
                children: [
                    (0, a.jsx)(t, {
                        tag: 'div',
                        eventName: g,
                        className: N.headerLogo,
                        data: { linkClicked: 'logo' },
                        children: (0, a.jsx)(d.Z, {
                            avoidRouter: n,
                            className: N.logoWrapper,
                            to: _.am.INDEX,
                            from: _.j_.MAIN_NAVIGATION_MENU,
                            children: (0, a.jsx)('img', {
                                className: N.logo,
                                src: h.r.ASSET_LOGO_DISCORD_SVG,
                                alt: 'Discord',
                                itemProp: 'logo'
                            })
                        })
                    }),
                    (0, a.jsx)(t, {
                        tag: 'div',
                        className: N.hamburgerButton,
                        eventName: g,
                        data: { linkClicked: 'mobile-menu' },
                        children: (0, a.jsx)(c.r, {
                            open: l,
                            'aria-haspopup': 'true',
                            'aria-label': l ? o : i,
                            'aria-expanded': l,
                            'aria-controls': this._mainNavId,
                            onClick: this.toggleMenu
                        })
                    }),
                    (0, a.jsxs)('ul', {
                        className: l ? N.headerNavOpen : N.headerNav,
                        children: [
                            (0, a.jsx)(p.o, {
                                avoidRouter: n,
                                TrackClick: t,
                                styles: N,
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
            m(this, '_mainNavId', l()('mainNav')),
            m(this, 'state', { menuOpen: !1 }),
            m(this, 'toggleMenu', () => {
                this.setState({ menuOpen: !this.state.menuOpen });
            }),
            m(this, 'handleKeyDown', (e) => {
                let { menuOpen: t } = this.state;
                ('Escape' === e.key || 'Esc' === e.key) && (e.preventDefault(), t && this.toggleMenu());
            });
    }
}
