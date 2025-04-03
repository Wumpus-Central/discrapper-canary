a.d(t, { D: () => g }), a(47120);
var n = a(200651),
    s = a(192379),
    r = a(557533),
    l = a.n(r),
    i = a(39383),
    o = a.n(i),
    c = a(608863),
    d = a(66037),
    u = a(643103),
    p = a(34211),
    _ = a(231338),
    h = a(431138),
    m = a(35289);
function N(e, t, a) {
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
let I = _.j_.MAIN_NAVIGATION_MENU;
class g extends s.PureComponent {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        let { className: e, TrackClick: t, onChangeLocale: a, avoidRouter: s, openNavAriaLabel: r, hideNavAriaLabel: i } = this.props,
            { menuOpen: o } = this.state;
        return (0, n.jsx)('header', {
            className: l()(m.header, e),
            children: (0, n.jsxs)('nav', {
                className: m.headerInner,
                children: [
                    (0, n.jsx)(t, {
                        tag: 'div',
                        eventName: I,
                        className: m.headerLogo,
                        data: { linkClicked: 'logo' },
                        children: (0, n.jsx)(d.Z, {
                            avoidRouter: s,
                            className: m.logoWrapper,
                            to: _.am.INDEX,
                            from: _.j_.MAIN_NAVIGATION_MENU,
                            children: (0, n.jsx)('img', {
                                className: m.logo,
                                src: h.r.ASSET_LOGO_DISCORD_SVG,
                                alt: 'Discord',
                                itemProp: 'logo'
                            })
                        })
                    }),
                    (0, n.jsx)(t, {
                        tag: 'div',
                        className: m.hamburgerButton,
                        eventName: I,
                        data: { linkClicked: 'mobile-menu' },
                        children: (0, n.jsx)(c.r, {
                            open: o,
                            'aria-haspopup': 'true',
                            'aria-label': o ? i : r,
                            'aria-expanded': o,
                            'aria-controls': this._mainNavId,
                            onClick: this.toggleMenu
                        })
                    }),
                    (0, n.jsxs)('ul', {
                        className: o ? m.headerNavOpen : m.headerNav,
                        children: [
                            (0, n.jsx)(p.o, {
                                avoidRouter: s,
                                TrackClick: t,
                                styles: m,
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
            N(this, '_mainNavId', o()('mainNav')),
            N(this, 'state', { menuOpen: !1 }),
            N(this, 'toggleMenu', () => {
                this.setState({ menuOpen: !this.state.menuOpen });
            }),
            N(this, 'handleKeyDown', (e) => {
                let { menuOpen: t } = this.state;
                ('Escape' === e.key || 'Esc' === e.key) && (e.preventDefault(), t && this.toggleMenu());
            });
    }
}
