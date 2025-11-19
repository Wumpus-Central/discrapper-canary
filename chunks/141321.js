n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(212605),
    c = n(681715),
    u = n(481060),
    d = n(686546),
    p = n(719961),
    f = n(388035),
    h = n(306680),
    g = n(594174),
    m = n(178088),
    _ = n(490897),
    b = n(388032),
    E = n(230718);
function O(e) {
    let { onOpen: t, onClose: n, "data-jump-section": l } = e,
        O = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        y = i.useRef(null),
        v = (0, s.e7)(
            [h.ZP],
            () => (null == O ? void 0 : O.id) != null && h.ZP.getMentionCount(O.id, _.W.NOTIFICATION_CENTER) > 0,
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
        targetElementRef: y,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: v },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, i) => {
            var s, p;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.u, {
                        targetElementRef: y,
                        shouldShow: !t,
                        text: b.intl.string(b.t.GSmTKJ),
                        children: (0, r.jsx)(
                            u.P3F,
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
                                    innerRef: y,
                                    onClick: e,
                                    "data-jump-section": l,
                                    "aria-label": b.intl.string(b.t.GSmTKJ),
                                    className: a()(E.clickable, { [E.withHighlight]: C }),
                                    children:
                                        v || i
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(d.ZP, {
                                                          mask: d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                          height: o.Z[S],
                                                          width: o.Z[S],
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
                    (0, r.jsx)(f.U, {
                        location: "inbox-button",
                        targetElementRef: y,
                    }),
                ],
            });
        },
    });
}
