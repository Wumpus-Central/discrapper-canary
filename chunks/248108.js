a.d(t, { Z: () => m });
var n = a(54381),
    r = a(473749),
    s = a(54111),
    l = a(948789),
    i = a(66037),
    o = a(950132),
    c = a(231338),
    d = a(431138),
    u = a(361010);
let N = c.j_.MAIN_NAVIGATION_MENU;
function m(e) {
    let { TrackClick: t, title: a, links: m, onClose: f, onOpen: p, isOpen: h = !1, isMobile: I, avoidRouter: b } = e,
        k = (0, l.fQ)({ history: (0, s.k6)() }),
        g = r.useId(),
        A = () => f(),
        O = () => p(a),
        _ = () => (h ? f() : p(a)),
        v =
            I && h
                ? (0, n.jsx)("ul", {
                      className: u.mobileSubMenuOpen,
                      id: g,
                      children: m.map((e) =>
                          e.external
                              ? (0, n.jsx)(
                                    "li",
                                    {
                                        className: u.subListItemInactive,
                                        children: (0, n.jsx)(t, {
                                            eventName: N,
                                            className: u.subListItemLink,
                                            data: { linkClicked: "mobile-".concat(e.linkClicked) },
                                            rel: "me",
                                            href: e.route,
                                            children: e.title,
                                        }),
                                    },
                                    e.route,
                                )
                              : (0, n.jsx)(
                                    "li",
                                    {
                                        className: k(e.route) ? u.subListItemActive : u.subListItemInactive,
                                        children: (0, n.jsx)(i.Z, {
                                            avoidRouter: b,
                                            to: e.route,
                                            from: c.j_.MAIN_NAVIGATION_MENU,
                                            children: (0, n.jsx)(t, {
                                                className: u.subListItemLink,
                                                tag: "span",
                                                eventName: N,
                                                data: { linkClicked: "mobile-".concat(e.linkClicked) },
                                                children: e.title,
                                            }),
                                        }),
                                    },
                                    e.route,
                                ),
                      ),
                  })
                : null;
    return I
        ? (0, n.jsxs)(
              "li",
              {
                  className: u.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: _,
                  onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _());
                  },
                  children: [
                      (0, n.jsxs)(
                          "span",
                          {
                              className: u.mobileMenuItem,
                              "aria-label": "Open ".concat(a, " Nav"),
                              "aria-expanded": h,
                              "aria-controls": g,
                              "aria-haspopup": "true",
                              role: "menuitem",
                              tabIndex: 0,
                              children: [
                                  a,
                                  (0, n.jsx)("img", {
                                      src: d.r.ICON_ARROW_DOWN,
                                      className: u.iconArrow,
                                      alt: "Open Nav",
                                  }),
                              ],
                          },
                          "more",
                      ),
                      v,
                  ],
              },
              "dropdown_".concat(a),
          )
        : (0, n.jsxs)(
              "li",
              {
                  role: "none",
                  tabIndex: -1,
                  onFocus: O,
                  onBlur: A,
                  onMouseEnter: O,
                  onMouseLeave: A,
                  className: u.desktopSubMenuItem,
                  children: [
                      (0, n.jsxs)(
                          "span",
                          {
                              className: u.desktopMenuMore,
                              role: "menuitem",
                              tabIndex: 0,
                              "aria-haspopup": "true",
                              "aria-expanded": h,
                              "aria-controls": g,
                              children: [
                                  a,
                                  (0, n.jsx)("img", {
                                      src: d.r.ICON_ARROW_DOWN,
                                      className: u.iconArrow,
                                      alt: "Open Nav",
                                  }),
                              ],
                          },
                          "more",
                      ),
                      (0, n.jsx)(o.h, {
                          id: g,
                          avoidRouter: b,
                          TrackClick: t,
                          isOpen: h,
                          dropdownLinks: m,
                          "aria-label": a,
                      }),
                  ],
              },
              "dropdown_".concat(a),
          );
}
