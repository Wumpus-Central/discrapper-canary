a.d(t, { A: () => A });
var s = a(627968),
    l = a(64700),
    i = a(134402),
    r = a(877227),
    n = a(137540),
    o = a(980302),
    c = a(818348),
    d = a(563853),
    _ = a(552524);
let N = c.sE.MAIN_NAVIGATION_MENU;
function A(e) {
    let { TrackClick: t, title: a, links: A, onClose: u, onOpen: I, isOpen: k = !1, isMobile: h, avoidRouter: p } = e,
        m = (0, r.dI)({ history: (0, i.W6)() }),
        g = l.useId(),
        T = () => u(),
        O = () => I(a),
        C = () => (k ? u() : I(a)),
        v =
            h && k
                ? (0, s.jsx)("ul", {
                      className: _.Er,
                      id: g,
                      children: A.map((e) =>
                          e.external
                              ? (0, s.jsx)(
                                    "li",
                                    {
                                        className: _.ni,
                                        children: (0, s.jsx)(t, {
                                            eventName: N,
                                            className: _.qz,
                                            data: { linkClicked: `mobile-${e.linkClicked}` },
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
                                        className: m(e.route) ? _.wL : _.ni,
                                        children: (0, s.jsx)(n.A, {
                                            avoidRouter: p,
                                            to: e.route,
                                            from: c.sE.MAIN_NAVIGATION_MENU,
                                            children: (0, s.jsx)(t, {
                                                className: _.qz,
                                                tag: "span",
                                                eventName: N,
                                                data: { linkClicked: `mobile-${e.linkClicked}` },
                                                children: e.title,
                                            }),
                                        }),
                                    },
                                    e.route,
                                ),
                      ),
                  })
                : null;
    return h
        ? (0, s.jsxs)(
              "li",
              {
                  className: _.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: C,
                  onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), C());
                  },
                  children: [
                      (0, s.jsxs)(
                          "span",
                          {
                              className: _.DC,
                              "aria-label": `Open ${a} Nav`,
                              "aria-expanded": k,
                              "aria-controls": g,
                              "aria-haspopup": "true",
                              role: "menuitem",
                              tabIndex: 0,
                              children: [
                                  a,
                                  (0, s.jsx)("img", { src: d.T.ICON_ARROW_DOWN, className: _.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      v,
                  ],
              },
              `dropdown_${a}`,
          )
        : (0, s.jsxs)(
              "li",
              {
                  role: "none",
                  tabIndex: -1,
                  onFocus: O,
                  onBlur: T,
                  onMouseEnter: O,
                  onMouseLeave: T,
                  className: _.pX,
                  children: [
                      (0, s.jsxs)(
                          "span",
                          {
                              className: _.Bc,
                              role: "menuitem",
                              tabIndex: 0,
                              "aria-haspopup": "true",
                              "aria-expanded": k,
                              "aria-controls": g,
                              children: [
                                  a,
                                  (0, s.jsx)("img", { src: d.T.ICON_ARROW_DOWN, className: _.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      (0, s.jsx)(o.r, {
                          id: g,
                          avoidRouter: p,
                          TrackClick: t,
                          isOpen: k,
                          dropdownLinks: A,
                          "aria-label": a,
                      }),
                  ],
              },
              `dropdown_${a}`,
          );
}
