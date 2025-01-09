s.d(t, {
    Z: function () {
        return f;
    }
}),
    s(47120);
var a,
    n = s(200651),
    r = s(192379),
    i = s(39383),
    o = s.n(i),
    l = s(948789),
    c = s(66037),
    d = s(950132),
    u = s(231338),
    p = s(431138),
    N = s(625907);
function h(e, t, s) {
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
let m = u.j_.MAIN_NAVIGATION_MENU;
class f extends (a = r.PureComponent) {
    render() {
        let { title: e, links: t, isOpen: s, isMobile: a, TrackClick: r, avoidRouter: i } = this.props,
            o =
                a && s
                    ? (0, n.jsx)('ul', {
                          className: N.mobileSubMenuOpen,
                          id: this._dropdownId,
                          children: this.renderMobileSubMenu()
                      })
                    : null;
        return a
            ? (0, n.jsxs)(
                  'li',
                  {
                      className: N.__invalid_subListHeading,
                      tabIndex: -1,
                      onClick: this.toggleMenu,
                      onKeyDown: this.handleKeyDown,
                      children: [
                          (0, n.jsxs)(
                              'span',
                              {
                                  className: N.mobileMenuItem,
                                  'aria-label': 'Open '.concat(e, ' Nav'),
                                  'aria-expanded': s,
                                  'aria-controls': this._dropdownId,
                                  'aria-haspopup': 'true',
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  children: [
                                      e,
                                      (0, n.jsx)('img', {
                                          src: p.r.ICON_ARROW_DOWN,
                                          className: N.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          o
                      ]
                  },
                  'dropdown_'.concat(e)
              )
            : (0, n.jsxs)(
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
                          (0, n.jsxs)(
                              'span',
                              {
                                  className: N.desktopMenuMore,
                                  role: 'menuitem',
                                  tabIndex: 0,
                                  'aria-haspopup': 'true',
                                  'aria-expanded': s,
                                  'aria-controls': this._dropdownId,
                                  children: [
                                      e,
                                      (0, n.jsx)('img', {
                                          src: p.r.ICON_ARROW_DOWN,
                                          className: N.iconArrow,
                                          alt: 'Open Nav'
                                      })
                                  ]
                              },
                              'more'
                          ),
                          (0, n.jsx)(d.h, {
                              id: this._dropdownId,
                              avoidRouter: i,
                              TrackClick: r,
                              isOpen: s,
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
            h(this, '_dropdownId', o()('subMenuDropdown')),
            h(this, 'closeMenu', () => {
                this.props.onClose();
            }),
            h(this, 'openMenu', () => {
                let { title: e, onOpen: t } = this.props;
                t(e);
            }),
            h(this, 'toggleMenu', () => {
                let { isOpen: e, title: t, onOpen: s, onClose: a } = this.props;
                e ? a() : s(t);
            }),
            h(this, 'handleKeyDown', (e) => {
                ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), this.toggleMenu());
            }),
            h(this, 'renderMobileSubMenu', () => {
                let { links: e, TrackClick: t, avoidRouter: s } = this.props,
                    a = (0, l.fQ)(this.context.router);
                return e.map((e) =>
                    e.external
                        ? (0, n.jsx)(
                              'li',
                              {
                                  className: N.subListItemInactive,
                                  children: (0, n.jsx)(t, {
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
                        : (0, n.jsx)(
                              'li',
                              {
                                  className: a(e.route) ? N.subListItemActive : N.subListItemInactive,
                                  children: (0, n.jsx)(c.Z, {
                                      avoidRouter: s,
                                      to: e.route,
                                      from: u.j_.MAIN_NAVIGATION_MENU,
                                      children: (0, n.jsx)(t, {
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
h(f, 'defaultProps', {
    isOpen: !1,
    isMobileMenuOpen: !1
});
