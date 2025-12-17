n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(212605),
    c = n(681715),
    u = n(481060),
    d = n(686546),
    p = n(719961),
    f = n(388035),
    g = n(306680),
    h = n(594174),
    m = n(178088),
    b = n(490897),
    _ = n(388032),
    E = n(651072);
function O(e) {
    let { onOpen: t, onClose: n, "data-jump-section": l } = e,
        O = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        v = i.useRef(null),
        y = (0, o.e7)(
            [g.ZP],
            () => (null == O ? void 0 : O.id) != null && g.ZP.getMentionCount(O.id, b.W.NOTIFICATION_CENTER) > 0,
        ),
        { titlebarIconSize: I, titlebarHoverHighlight: C } = (0, p.T)({ location: "RecentsButton" }),
        S = "sm" === I ? "refresh_sm" : "md",
        T = i.useMemo(
            () =>
                (0, r.jsx)(u.xx7, {
                    size: S,
                    color: "currentColor",
                }),
            [S],
        );
    return (0, r.jsx)(m.k, {
        targetElementRef: v,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: y },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, i) => {
            var o, p;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.u, {
                        targetElementRef: v,
                        shouldShow: !t,
                        text: _.intl.string(_.t.GSmTKJ),
                        children: (0, r.jsx)(
                            u.P3F,
                            ((o = (function (e) {
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
                                    innerRef: v,
                                    onClick: e,
                                    "data-jump-section": l,
                                    "aria-label": _.intl.string(_.t.GSmTKJ),
                                    className: a()(E.clickable, { [E.withHighlight]: C }),
                                    children:
                                        y || i
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(d.ZP, {
                                                          mask: d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                          height: s.Z[S],
                                                          width: s.Z[S],
                                                          children: T,
                                                      }),
                                                      (0, r.jsx)("span", {
                                                          className: a()(E.badge, { [E.smol]: "refresh_sm" === S }),
                                                      }),
                                                  ],
                                              })
                                            : T,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(p))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(p)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(p, e));
                                  }),
                            o),
                        ),
                    }),
                    (0, r.jsx)(f.U, {
                        location: "inbox-button",
                        targetElementRef: v,
                    }),
                ],
            });
        },
    });
}
