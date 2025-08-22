n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(680018),
    o = n(374415),
    s = n(481060),
    c = n(607070),
    u = n(100527),
    d = n(43267),
    p = n(933557),
    h = n(821795),
    f = n(892567),
    m = n(266076),
    g = n(187237),
    b = n(769409),
    _ = n(518311),
    y = n(518950),
    C = n(967128),
    x = n(388032),
    v = n(963392);
function O(e) {
    var t;
    let { channel: n, children: O, user: j } = e,
        E = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        S = null != (t = (0, p.ZP)(n)) ? t : "",
        {
            avatarDecorationSrc: I,
            eventHandlers: P,
            isAnimating: Z,
        } = (0, y.Z)({
            userId: null == j ? void 0 : j.id,
            size: s.EFr.SIZE_80,
            animateOnHover: !0,
        }),
        [T, N] = i.useState(!1),
        A = i.useCallback(() => {
            P.onMouseEnter(), N(!0);
        }, [P]),
        w = i.useCallback(() => {
            P.onMouseLeave(), N(!1);
        }, [P]),
        R = !n.isMultiUserDM() && (null == j ? void 0 : j.displayNameStyles) != null;
    return (0, r.jsxs)(C.ZP, {
        channelId: n.id,
        onMouseEnter: A,
        onMouseLeave: w,
        children: [
            (() => {
                let e = !E && Z;
                return n.isMultiUserDM()
                    ? (0, r.jsx)(g.v, {
                          channel: n,
                          editable: !0,
                          location: u.Z.EMPTY_GROUP_DM,
                          children: (0, r.jsx)(m.Z, {
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
                          src: (0, d.x)(n, 80, e),
                          avatarDecoration: I,
                      });
            })(),
            (0, r.jsx)(C.Ot, {
                children: R
                    ? (0, r.jsx)(f.Z, {
                          userName: S,
                          displayNameStyles: null == j ? void 0 : j.displayNameStyles,
                          effectDisplayType: T ? h.F.ANIMATED : h.F.STATIC,
                          loop: !0,
                      })
                    : S,
            }),
            (0, r.jsx)(C.jz, { children: O }),
            n.isMultiUserDM() &&
                (0, r.jsxs)(o.h, {
                    className: v.buttonContainer,
                    children: [
                        (0, r.jsx)(_.l, {
                            channel: n,
                            text: x.intl.string(x.t["6Qgren"]),
                            icon: s.ejJ,
                        }),
                        (0, r.jsx)(a.z, {
                            icon: s.vdY,
                            variant: "secondary",
                            text: x.intl.string(x.t["5Q9+/P"]),
                            "aria-label": x.intl.string(x.t["5Q9+/P"]),
                            onClick: () => (0, b.B)(n.id, u.Z.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
