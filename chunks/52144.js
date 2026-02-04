n.d(t, {
    A: () => E,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(319354),
    c = n(435371),
    u = n(397927),
    d = n(573435),
    p = n(545167),
    h = n(851580),
    g = n(222823),
    m = n(287809),
    f = n(371911),
    A = n(790782),
    _ = n(985018),
    b = n(656678);

function E(e) {
    let { onOpen: t, onClose: n, "data-jump-section": l } = e,
        E = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        O = i.useRef(null),
        y = (0, s.bG)(
            [g.Ay],
            () => (null == E ? void 0 : E.id) != null && g.Ay.getMentionCount(E.id, A.P.NOTIFICATION_CENTER) > 0,
        ),
        { titlebarIconSize: I, titlebarHoverHighlight: v } = (0, p.pz)({
            location: "RecentsButton",
        }),
        S = "sm" === I ? "refresh_sm" : "md",
        C = i.useMemo(
            () =>
                (0, r.jsx)(u.K$s, {
                    size: S,
                    color: "currentColor",
                }),
            [S],
        );
    return (0, r.jsx)(f.C, {
        targetElementRef: O,
        onOpen: t,
        onClose: n,
        badgeState: {
            badgeForYou: y,
        },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, i) => {
            var s, p;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.m_, {
                        targetElementRef: O,
                        shouldShow: !t,
                        text: _.intl.string(_.t.GSmTKJ),
                        children: (0, r.jsx)(
                            u.DUT,
                            ((s = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (p = p =
                                {
                                    tag: "div",
                                    innerRef: O,
                                    onClick: e,
                                    "data-jump-section": l,
                                    "aria-label": _.intl.string(_.t.GSmTKJ),
                                    className: a()(b.vk, {
                                        [b.l9]: v,
                                    }),
                                    children:
                                        y || i
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(d.Ay, {
                                                          mask: d.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                          height: o.E[S],
                                                          width: o.E[S],
                                                          children: C,
                                                      }),
                                                      (0, r.jsx)("span", {
                                                          className: a()(b.qS, {
                                                              [b.mf]: "refresh_sm" === S,
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : C,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(p)).forEach(function (e) {
                                      Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(p, e));
                                  }),
                            s),
                        ),
                    }),
                    (0, r.jsx)(h.v, {
                        location: "inbox-button",
                        targetElementRef: O,
                    }),
                ],
            });
        },
    });
}
