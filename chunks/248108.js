a.d(t, {
    Z: function () {
        return I;
    }
}),
    a(47120);
var n,
    s = a(200651),
    i = a(192379),
    r = a(39383),
    l = a.n(r),
    o = a(948789),
    c = a(66037),
    d = a(950132),
    u = a(231338),
    N = a(431138),
    h = a(625907);
function m(e, t, a) {
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
let p = u.j_.MAIN_NAVIGATION_MENU;
class I extends (n = i.PureComponent) {
    render() {
        let { title: e, links: t, isOpen: a, isMobile: n, TrackClick: i, avoidRouter: r } = this.props,
            l =
                n && a
                    ? (0, s.jsx)('ul', {
                          className: h.mobileSubMenuOpen,
                          id: this._dropdownId,
                          children: this.renderMobileSubMenu()
                      })
                    : null;
        return n
            ? (0, s.jsxs)(
                  'li',
                  {
                      className: h.__invalid_subListHeading,
                      tabIndex: -1,
                      onClick: this.toggleMenu,
                      onKeyDown: this.handleKeyDown,
                      children: [
                          (0, s.jsxs)(
                              'span',
                              {
                                  className: h.mobileMenuItem,
                                  'aria-label': 'Open '.concat(e, ' Nav'),
                                  'aria-expanded': a,
                                  'aria-controls': this._dropdownId,
                                  'aria-haspopup': 'true',
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  children: [
                                      e,
                                      (0, s.jsx)('img', {
                                          src: N.r.ICON_ARROW_DOWN,
                                          className: h.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          l
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
                      className: h.desktopSubMenuItem,
                      children: [
                          (0, s.jsxs)(
                              'span',
                              {
                                  className: h.desktopMenuMore,
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  'aria-haspopup': 'true',
                                  'aria-expanded': a,
                                  'aria-controls': this._dropdownId,
                                  children: [
                                      e,
                                      (0, s.jsx)('img', {
                                          src: N.r.ICON_ARROW_DOWN,
                                          className: h.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          (0, s.jsx)(d.h, {
                              id: this._dropdownId,
                              avoidRouter: r,
                              TrackClick: i,
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
            m(this, '_dropdownId', l()('subMenuDropdown')),
            m(this, 'closeMenu', () => {
                this.props.onClose();
            }),
            m(this, 'openMenu', () => {
                let { title: e, onOpen: t } = this.props;
                t(e);
            }),
            m(this, 'toggleMenu', () => {
                let { isOpen: e, title: t, onOpen: a, onClose: n } = this.props;
                e ? n() : a(t);
            }),
            m(this, 'handleKeyDown', (e) => {
                ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), this.toggleMenu());
            }),
            m(this, 'renderMobileSubMenu', () => {
                let { links: e, TrackClick: t, avoidRouter: a } = this.props,
                    n = (0, o.fQ)(this.context.router);
                return e.map((e) =>
                    e.external
                        ? (0, s.jsx)(
                              'li',
                              {
                                  className: h.subListItemInactive,
                                  children: (0, s.jsx)(t, {
                                      eventName: p,
                                      className: h.subListItemLink,
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
                                  className: n(e.route) ? h.subListItemActive : h.subListItemInactive,
                                  children: (0, s.jsx)(c.Z, {
                                      avoidRouter: a,
                                      to: e.route,
                                      from: u.j_.MAIN_NAVIGATION_MENU,
                                      children: (0, s.jsx)(t, {
                                          className: h.subListItemLink,
                                          tag: 'span',
                                          eventName: p,
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
m(I, 'defaultProps', {
    isOpen: !1,
    isMobileMenuOpen: !1
});
