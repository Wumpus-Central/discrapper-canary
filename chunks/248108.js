a.d(t, { Z: () => N });
var n = a(200651),
    r = a(192379),
    s = a(332009),
    l = a(948789),
    i = a(66037),
    o = a(950132),
    c = a(231338),
    d = a(431138),
    u = a(898275);
let _ = c.j_.MAIN_NAVIGATION_MENU;
function N(e) {
    let { TrackClick: t, title: a, links: N, onClose: m, onOpen: p, isOpen: h = !1, isMobile: I, avoidRouter: k } = e,
        g = (0, l.fQ)({ history: (0, s.k6)() }),
        A = r.useId(),
        O = () => m(),
        f = () => p(a),
        b = () => (h ? m() : p(a)),
        v =
            I && h
                ? (0, n.jsx)('ul', {
                      className: u.mobileSubMenuOpen,
                      id: A,
                      children: N.map((e) =>
                          e.external
                              ? (0, n.jsx)(
                                    'li',
                                    {
                                        className: u.subListItemInactive,
                                        children: (0, n.jsx)(t, {
                                            eventName: _,
                                            className: u.subListItemLink,
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
                                        className: g(e.route) ? u.subListItemActive : u.subListItemInactive,
                                        children: (0, n.jsx)(i.Z, {
                                            avoidRouter: k,
                                            to: e.route,
                                            from: c.j_.MAIN_NAVIGATION_MENU,
                                            children: (0, n.jsx)(t, {
                                                className: u.subListItemLink,
                                                tag: 'span',
                                                eventName: _,
                                                data: { linkClicked: 'mobile-'.concat(e.linkClicked) },
                                                children: e.title
                                            })
                                        })
                                    },
                                    e.route
                                )
                      )
                  })
                : null;
    return I
        ? (0, n.jsxs)(
              'li',
              {
                  className: u.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: b,
                  onKeyDown: (e) => {
                      ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), b());
                  },
                  children: [
                      (0, n.jsxs)(
                          'span',
                          {
                              className: u.mobileMenuItem,
                              'aria-label': 'Open '.concat(a, ' Nav'),
                              'aria-expanded': h,
                              'aria-controls': A,
                              'aria-haspopup': 'true',
                              role: 'menuitem',
                              tabIndex: 0,
                              children: [
                                  a,
                                  (0, n.jsx)('img', {
                                      src: d.r.ICON_ARROW_DOWN,
                                      className: u.iconArrow,
                                      alt: 'Open Nav'
                                  })
                              ]
                          },
                          'more'
                      ),
                      v
                  ]
              },
              'dropdown_'.concat(a)
          )
        : (0, n.jsxs)(
              'li',
              {
                  role: 'none',
                  tabIndex: -1,
                  onFocus: f,
                  onBlur: O,
                  onMouseEnter: f,
                  onMouseLeave: O,
                  className: u.desktopSubMenuItem,
                  children: [
                      (0, n.jsxs)(
                          'span',
                          {
                              className: u.desktopMenuMore,
                              role: 'menuitem',
                              tabIndex: 0,
                              'aria-haspopup': 'true',
                              'aria-expanded': h,
                              'aria-controls': A,
                              children: [
                                  a,
                                  (0, n.jsx)('img', {
                                      src: d.r.ICON_ARROW_DOWN,
                                      className: u.iconArrow,
                                      alt: 'Open Nav'
                                  })
                              ]
                          },
                          'more'
                      ),
                      (0, n.jsx)(o.h, {
                          id: A,
                          avoidRouter: k,
                          TrackClick: t,
                          isOpen: h,
                          dropdownLinks: N,
                          'aria-label': a
                      })
                  ]
              },
              'dropdown_'.concat(a)
          );
}
