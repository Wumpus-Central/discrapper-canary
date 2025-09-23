n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(159691),
    o = n(481060),
    s = n(607070),
    c = n(100527),
    u = n(43267),
    d = n(933557),
    p = n(821795),
    h = n(892567),
    f = n(266076),
    m = n(187237),
    g = n(769409),
    b = n(518311),
    y = n(518950),
    C = n(967128),
    _ = n(388032),
    v = n(40036);
function x(e) {
    var t;
    let { channel: n, children: x, user: O } = e,
        j = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        E = null != (t = (0, d.ZP)(n)) ? t : "",
        {
            avatarDecorationSrc: S,
            eventHandlers: P,
            isAnimating: I,
        } = (0, y.Z)({
            userId: null == O ? void 0 : O.id,
            size: o.EFr.SIZE_80,
            animateOnHover: !0,
        }),
        [Z, T] = i.useState(!1),
        N = i.useCallback(() => {
            P.onMouseEnter(), T(!0);
        }, [P]),
        A = i.useCallback(() => {
            P.onMouseLeave(), T(!1);
        }, [P]),
        w = !n.isMultiUserDM() && (null == O ? void 0 : O.displayNameStyles) != null;
    return (0, r.jsxs)(C.ZP, {
        channelId: n.id,
        onMouseEnter: N,
        onMouseLeave: A,
        children: [
            (() => {
                let e = !j && I;
                return n.isMultiUserDM()
                    ? (0, r.jsx)(m.v, {
                          channel: n,
                          editable: !0,
                          location: c.Z.EMPTY_GROUP_DM,
                          children: (0, r.jsx)(f.Z, {
                              channel: n,
                              size: o.EFr.SIZE_80,
                              experimentLocation: "empty_messages",
                              animated: e,
                              "aria-label": E,
                          }),
                      })
                    : (0, r.jsx)(o.qEK, {
                          "aria-label": E,
                          size: o.EFr.SIZE_80,
                          src: (0, u.x)(n, 80, e),
                          avatarDecoration: S,
                      });
            })(),
            (0, r.jsx)(C.Ot, {
                children: w
                    ? (0, r.jsx)(h.Z, {
                          userName: E,
                          displayNameStyles: null == O ? void 0 : O.displayNameStyles,
                          effectDisplayType: Z ? p.F.ANIMATED : p.F.STATIC,
                          loop: !0,
                      })
                    : E,
            }),
            (0, r.jsx)(C.jz, { children: x }),
            n.isMultiUserDM() &&
                (0, r.jsxs)(a.hE2, {
                    className: v.buttonContainer,
                    children: [
                        (0, r.jsx)(b.l, {
                            channel: n,
                            text: _.intl.string(_.t["6Qgren"]),
                            icon: o.ejJ,
                        }),
                        (0, r.jsx)(a.zxk, {
                            icon: o.vdY,
                            variant: "secondary",
                            text: _.intl.string(_.t["5Q9+/P"]),
                            "aria-label": _.intl.string(_.t["5Q9+/P"]),
                            onClick: () => (0, g.B)(n.id, c.Z.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
