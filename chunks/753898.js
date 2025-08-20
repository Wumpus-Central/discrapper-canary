n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(680018),
    a = n(374415),
    o = n(481060),
    s = n(607070),
    c = n(100527),
    u = n(43267),
    d = n(933557),
    p = n(266076),
    h = n(187237),
    f = n(769409),
    m = n(518311),
    g = n(518950),
    b = n(967128),
    y = n(388032),
    _ = n(963392);
function C(e) {
    var t, n, C;
    let { channel: x, children: v, user: O } = e,
        j = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        E = null != (t = (0, d.ZP)(x)) ? t : "",
        {
            avatarDecorationSrc: S,
            eventHandlers: P,
            isAnimating: I,
        } = (0, g.Z)({
            userId: null == O ? void 0 : O.id,
            size: o.EFr.SIZE_80,
            animateOnHover: !0,
        });
    return (0, r.jsxs)(
        b.ZP,
        ((n = (function (e) {
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
        })({ channelId: x.id }, P)),
        (C = C =
            {
                children: [
                    (() => {
                        let e = !j && I;
                        return x.isMultiUserDM()
                            ? (0, r.jsx)(h.v, {
                                  channel: x,
                                  editable: !0,
                                  location: c.Z.EMPTY_GROUP_DM,
                                  children: (0, r.jsx)(p.Z, {
                                      channel: x,
                                      size: o.EFr.SIZE_80,
                                      experimentLocation: "empty_messages",
                                      animated: e,
                                      "aria-label": E,
                                  }),
                              })
                            : (0, r.jsx)(o.qEK, {
                                  "aria-label": E,
                                  size: o.EFr.SIZE_80,
                                  src: (0, u.x)(x, 80, e),
                                  avatarDecoration: S,
                              });
                    })(),
                    (0, r.jsx)(b.Ot, { children: E }),
                    (0, r.jsx)(b.jz, { children: v }),
                    x.isMultiUserDM() &&
                        (0, r.jsxs)(a.h, {
                            className: _.buttonContainer,
                            children: [
                                (0, r.jsx)(m.l, {
                                    channel: x,
                                    text: y.intl.string(y.t["6Qgren"]),
                                    icon: o.ejJ,
                                }),
                                (0, r.jsx)(l.z, {
                                    icon: o.vdY,
                                    variant: "secondary",
                                    text: y.intl.string(y.t["5Q9+/P"]),
                                    "aria-label": y.intl.string(y.t["5Q9+/P"]),
                                    onClick: () => (0, f.B)(x.id, c.Z.EMPTY_GROUP_DM),
                                }),
                            ],
                        }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(C))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(C)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(C, e));
              }),
        n),
    );
}
