a.d(t, { Z: () => p }), a(47120);
var n,
    s = a(200651),
    l = a(192379),
    i = a(39383),
    r = a.n(i),
    o = a(948789),
    c = a(66037),
    d = a(950132),
    u = a(231338),
    _ = a(431138),
    N = a(625907);
function h(e, t, a) {
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
let m = u.j_.MAIN_NAVIGATION_MENU;
class p extends (n = l.PureComponent) {
    render() {
        let { title: e, links: t, isOpen: a, isMobile: n, TrackClick: l, avoidRouter: i } = this.props,
            r =
                n && a
                    ? (0, s.jsx)('ul', {
                          className: N.mobileSubMenuOpen,
                          id: this._dropdownId,
                          children: this.renderMobileSubMenu()
                      })
                    : null;
        return n
            ? (0, s.jsxs)(
                  'li',
                  {
                      className: N.__invalid_subListHeading,
                      tabIndex: -1,
                      onClick: this.toggleMenu,
                      onKeyDown: this.handleKeyDown,
                      children: [
                          (0, s.jsxs)(
                              'span',
                              {
                                  className: N.mobileMenuItem,
                                  'aria-label': 'Open '.concat(e, ' Nav'),
                                  'aria-expanded': a,
                                  'aria-controls': this._dropdownId,
                                  'aria-haspopup': 'true',
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  children: [
                                      e,
                                      (0, s.jsx)('img', {
                                          src: _.r.ICON_ARROW_DOWN,
                                          className: N.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          r
                      ]
                  },
                  'dropdown_'.concat(e)
              )
            : (0, s.jsxs)(
                  'li',
                  {
                      role: 'none',
                      tabIndex: -1,
                      onFocus: this.openMenu,
                      onBlur: this.closeMenu,
                      onMouseEnter: this.openMenu,
                      onMouseLeave: this.closeMenu,
                      className: N.desktopSubMenuItem,
                      children: [
                          (0, s.jsxs)(
                              'span',
                              {
                                  className: N.desktopMenuMore,
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  'aria-haspopup': 'true',
                                  'aria-expanded': a,
                                  'aria-controls': this._dropdownId,
                                  children: [
                                      e,
                                      (0, s.jsx)('img', {
                                          src: _.r.ICON_ARROW_DOWN,
                                          className: N.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          (0, s.jsx)(d.h, {
                              id: this._dropdownId,
                              avoidRouter: i,
                              TrackClick: l,
                              isOpen: a,
                              dropdownLinks: t,
                              'aria-label': e
                          })
                      ]
                  },
                  'dropdown_'.concat(e)
              );
    }
    constructor(...e) {
        super(...e),
            h(this, '_dropdownId', r()('subMenuDropdown')),
            h(this, 'closeMenu', () => {
                this.props.onClose();
            }),
            h(this, 'openMenu', () => {
                let { title: e, onOpen: t } = this.props;
                t(e);
            }),
            h(this, 'toggleMenu', () => {
                let { isOpen: e, title: t, onOpen: a, onClose: n } = this.props;
                e ? n() : a(t);
            }),
            h(this, 'handleKeyDown', (e) => {
                ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), this.toggleMenu());
            }),
            h(this, 'renderMobileSubMenu', () => {
                let { links: e, TrackClick: t, avoidRouter: a } = this.props,
                    n = (0, o.fQ)(this.context.router);
                return e.map((e) =>
                    e.external
                        ? (0, s.jsx)(
                              'li',
                              {
                                  className: N.subListItemInactive,
                                  children: (0, s.jsx)(t, {
                                      eventName: m,
                                      className: N.subListItemLink,
                                      data: { linkClicked: 'mobile-'.concat(e.linkClicked) },
                                      rel: 'me',
                                      href: e.route,
                                      children: e.title
                                  })
                              },
                              e.route
                          )
                        : (0, s.jsx)(
                              'li',
                              {
                                  className: n(e.route) ? N.subListItemActive : N.subListItemInactive,
                                  children: (0, s.jsx)(c.Z, {
                                      avoidRouter: a,
                                      to: e.route,
                                      from: u.j_.MAIN_NAVIGATION_MENU,
                                      children: (0, s.jsx)(t, {
                                          className: N.subListItemLink,
                                          tag: 'span',
                                          eventName: m,
                                          data: { linkClicked: 'mobile-'.concat(e.linkClicked) },
                                          children: e.title
                                      })
                                  })
                              },
                              e.route
                          )
                );
            });
    }
}
h(p, 'defaultProps', {
    isOpen: !1,
    isMobileMenuOpen: !1
});
