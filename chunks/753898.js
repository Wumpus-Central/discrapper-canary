n.d(t, { Z: () => x }), n(388685);
var i = n(951288),
    r = n(647438),
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
    v = n(388032),
    _ = n(963392);
function x(e) {
    var t;
    let { channel: n, children: x, user: j } = e,
        O = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        E = null != (t = (0, d.ZP)(n)) ? t : "",
        {
            avatarDecorationSrc: S,
            eventHandlers: P,
            isAnimating: I,
        } = (0, y.Z)({
            userId: null == j ? void 0 : j.id,
            size: o.EFr.SIZE_80,
            animateOnHover: !0,
        }),
        [Z, T] = r.useState(!1),
        N = r.useCallback(() => {
            P.onMouseEnter(), T(!0);
        }, [P]),
        A = r.useCallback(() => {
            P.onMouseLeave(), T(!1);
        }, [P]),
        w = !n.isMultiUserDM() && (null == j ? void 0 : j.displayNameStyles) != null;
    return (0, i.jsxs)(C.ZP, {
        channelId: n.id,
        onMouseEnter: N,
        onMouseLeave: A,
        children: [
            (() => {
                let e = !O && I;
                return n.isMultiUserDM()
                    ? (0, i.jsx)(m.v, {
                          channel: n,
                          editable: !0,
                          location: c.Z.EMPTY_GROUP_DM,
                          children: (0, i.jsx)(f.Z, {
                              channel: n,
                              size: o.EFr.SIZE_80,
                              experimentLocation: "empty_messages",
                              animated: e,
                              "aria-label": E,
                          }),
                      })
                    : (0, i.jsx)(o.qEK, {
                          "aria-label": E,
                          size: o.EFr.SIZE_80,
                          src: (0, u.x)(n, 80, e),
                          avatarDecoration: S,
                      });
            })(),
            (0, i.jsx)(C.Ot, {
                children: w
                    ? (0, i.jsx)(h.Z, {
                          userName: E,
                          displayNameStyles: null == j ? void 0 : j.displayNameStyles,
                          effectDisplayType: Z ? p.F.ANIMATED : p.F.STATIC,
                          loop: !0,
                      })
                    : E,
            }),
            (0, i.jsx)(C.jz, { children: x }),
            n.isMultiUserDM() &&
                (0, i.jsxs)(a.hE2, {
                    className: _.buttonContainer,
                    children: [
                        (0, i.jsx)(b.l, {
                            channel: n,
                            text: v.intl.string(v.t["6Qgrev"]),
                            icon: o.ejJ,
                        }),
                        (0, i.jsx)(a.zxk, {
                            icon: o.vdY,
                            variant: "secondary",
                            text: v.intl.string(v.t["5Q9+/L"]),
                            "aria-label": v.intl.string(v.t["5Q9+/L"]),
                            onClick: () => (0, g.B)(n.id, c.Z.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
