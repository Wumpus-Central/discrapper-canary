a.d(t, {
    A: () => A,
});
var s = a(627968),
    l = a(64700),
    r = a(134402),
    n = a(877227),
    i = a(137540),
    o = a(980302),
    c = a(818348),
    d = a(563853),
    u = a(138649);
let N = c.sE.MAIN_NAVIGATION_MENU;

function A(e) {
    let { TrackClick: t, title: a, links: A, onClose: p, onOpen: h, isOpen: b = !1, isMobile: f, avoidRouter: k } = e,
        I = (0, n.dI)({
            history: (0, r.W6)(),
        }),
        O = l.useId(),
        m = () => p(),
        g = () => h(a),
        _ = () => (b ? p() : h(a)),
        T =
            f && b
                ? (0, s.jsx)("ul", {
                      className: u.Er,
                      id: O,
                      children: A.map((e) =>
                          e.external
                              ? (0, s.jsx)(
                                    "li",
                                    {
                                        className: u.ni,
                                        children: (0, s.jsx)(t, {
                                            eventName: N,
                                            className: u.qz,
                                            data: {
                                                linkClicked: "mobile-".concat(e.linkClicked),
                                            },
                                            rel: "me",
                                            href: e.route,
                                            children: e.title,
                                        }),
                                    },
                                    e.route,
                                )
                              : (0, s.jsx)(
                                    "li",
                                    {
                                        className: I(e.route) ? u.wL : u.ni,
                                        children: (0, s.jsx)(i.A, {
                                            avoidRouter: k,
                                            to: e.route,
                                            from: c.sE.MAIN_NAVIGATION_MENU,
                                            children: (0, s.jsx)(t, {
                                                className: u.qz,
                                                tag: "span",
                                                eventName: N,
                                                data: {
                                                    linkClicked: "mobile-".concat(e.linkClicked),
                                                },
                                                children: e.title,
                                            }),
                                        }),
                                    },
                                    e.route,
                                ),
                      ),
                  })
                : null;
    return f
        ? (0, s.jsxs)(
              "li",
              {
                  className: u.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: _,
                  onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _());
                  },
                  children: [
                      (0, s.jsxs)(
                          "span",
                          {
                              className: u.DC,
                              "aria-label": "Open ".concat(a, " Nav"),
                              "aria-expanded": b,
                              "aria-controls": O,
                              "aria-haspopup": "true",
                              role: "menuitem",
                              tabIndex: 0,
                              children: [
                                  a,
                                  (0, s.jsx)("img", {
                                      src: d.T.ICON_ARROW_DOWN,
                                      className: u.fr,
                                      alt: "Open Nav",
                                  }),
                              ],
                          },
                          "more",
                      ),
                      T,
                  ],
              },
              "dropdown_".concat(a),
          )
        : (0, s.jsxs)(
              "li",
              {
                  role: "none",
                  tabIndex: -1,
                  onFocus: g,
                  onBlur: m,
                  onMouseEnter: g,
                  onMouseLeave: m,
                  className: u.pX,
                  children: [
                      (0, s.jsxs)(
                          "span",
                          {
                              className: u.Bc,
                              role: "menuitem",
                              tabIndex: 0,
                              "aria-haspopup": "true",
                              "aria-expanded": b,
                              "aria-controls": O,
                              children: [
                                  a,
                                  (0, s.jsx)("img", {
                                      src: d.T.ICON_ARROW_DOWN,
                                      className: u.fr,
                                      alt: "Open Nav",
                                  }),
                              ],
                          },
                          "more",
                      ),
                      (0, s.jsx)(o.r, {
                          id: O,
                          avoidRouter: k,
                          TrackClick: t,
                          isOpen: b,
                          dropdownLinks: A,
                          "aria-label": a,
                      }),
                  ],
              },
              "dropdown_".concat(a),
          );
}
