n.d(t, { Z: () => T });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(680018),
    a = n(374415),
    s = n(481060),
    l = n(607070),
    c = n(100527),
    u = n(43267),
    d = n(933557),
    f = n(266076),
    _ = n(187237),
    p = n(769409),
    h = n(518311),
    m = n(518950),
    g = n(967128),
    E = n(388032),
    b = n(906667);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    var t;
    let { channel: n, children: y, user: v } = e,
        T = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        S = null != (t = (0, d.ZP)(n)) ? t : "",
        {
            avatarDecorationSrc: A,
            eventHandlers: N,
            isAnimating: C,
        } = (0, m.Z)({
            userId: null == v ? void 0 : v.id,
            size: s.EFr.SIZE_80,
            animateOnHover: !0,
        }),
        R = () => {
            let e = !T && C;
            return n.isMultiUserDM()
                ? (0, r.jsx)(_.v, {
                      channel: n,
                      editable: !0,
                      location: c.Z.EMPTY_GROUP_DM,
                      children: (0, r.jsx)(f.Z, {
                          channel: n,
                          size: s.EFr.SIZE_80,
                          experimentLocation: "empty_messages",
                          animated: e,
                          "aria-label": S,
                      }),
                  })
                : (0, r.jsx)(s.qEK, {
                      "aria-label": S,
                      size: s.EFr.SIZE_80,
                      src: (0, u.x)(n, 80, e),
                      avatarDecoration: A,
                  });
        };
    return (0, r.jsxs)(
        g.ZP,
        I(O({ channelId: n.id }, N), {
            children: [
                R(),
                (0, r.jsx)(g.Ot, { children: S }),
                (0, r.jsx)(g.jz, { children: y }),
                n.isMultiUserDM() &&
                    (0, r.jsxs)(a.h, {
                        className: b.buttonContainer,
                        children: [
                            (0, r.jsx)(h.l, { channel: n }),
                            (0, r.jsx)(o.z, {
                                icon: s.vdY,
                                variant: "secondary",
                                text: E.intl.string(E.t["5Q9+/P"]),
                                "aria-label": E.intl.string(E.t["5Q9+/P"]),
                                onClick: () => (0, p.B)(n.id, c.Z.EMPTY_GROUP_DM),
                            }),
                        ],
                    }),
            ],
        }),
    );
}
