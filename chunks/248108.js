a.d(t, { Z: () => N }), a(47120);
var n,
    s = a(200651),
    r = a(192379),
    l = a(39383),
    i = a.n(l),
    o = a(948789),
    c = a(66037),
    d = a(950132),
    u = a(231338),
    p = a(431138),
    _ = a(898275);
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
class N extends (n = r.PureComponent) {
    render() {
        let { title: e, links: t, isOpen: a, isMobile: n, TrackClick: r, avoidRouter: l } = this.props,
            i =
                n && a
                    ? (0, s.jsx)('ul', {
                          className: _.mobileSubMenuOpen,
                          id: this._dropdownId,
                          children: this.renderMobileSubMenu()
                      })
                    : null;
        return n
            ? (0, s.jsxs)(
                  'li',
                  {
                      className: _.__invalid_subListHeading,
                      tabIndex: -1,
                      onClick: this.toggleMenu,
                      onKeyDown: this.handleKeyDown,
                      children: [
                          (0, s.jsxs)(
                              'span',
                              {
                                  className: _.mobileMenuItem,
                                  'aria-label': 'Open '.concat(e, ' Nav'),
                                  'aria-expanded': a,
                                  'aria-controls': this._dropdownId,
                                  'aria-haspopup': 'true',
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  children: [
                                      e,
                                      (0, s.jsx)('img', {
                                          src: p.r.ICON_ARROW_DOWN,
                                          className: _.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          i
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
                      className: _.desktopSubMenuItem,
                      children: [
                          (0, s.jsxs)(
                              'span',
                              {
                                  className: _.desktopMenuMore,
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  'aria-haspopup': 'true',
                                  'aria-expanded': a,
                                  'aria-controls': this._dropdownId,
                                  children: [
                                      e,
                                      (0, s.jsx)('img', {
                                          src: p.r.ICON_ARROW_DOWN,
                                          className: _.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          (0, s.jsx)(d.h, {
                              id: this._dropdownId,
                              avoidRouter: l,
                              TrackClick: r,
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
            h(this, '_dropdownId', i()('subMenuDropdown')),
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
                    n = (0, o.f)(this.context.router);
                return e.map((e) =>
                    e.external
                        ? (0, s.jsx)(
                              'li',
                              {
                                  className: _.subListItemInactive,
                                  children: (0, s.jsx)(t, {
                                      eventName: m,
                                      className: _.subListItemLink,
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
                                  className: n(e.route) ? _.subListItemActive : _.subListItemInactive,
                                  children: (0, s.jsx)(c.Z, {
                                      avoidRouter: a,
                                      to: e.route,
                                      from: u.j_.MAIN_NAVIGATION_MENU,
                                      children: (0, s.jsx)(t, {
                                          className: _.subListItemLink,
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
h(N, 'defaultProps', {
    isOpen: !1,
    isMobileMenuOpen: !1
});
