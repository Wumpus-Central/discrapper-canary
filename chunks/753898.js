n.d(t, { Z: () => O }), n(388685);
var i = n(54381),
    r = n(473749),
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
    C = n(518950),
    y = n(967128),
    v = n(388032),
    _ = n(963392);
function O(e) {
    var t;
    let { channel: n, children: O, user: x } = e,
        E = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        j = null != (t = (0, d.ZP)(n)) ? t : "",
        {
            avatarDecorationSrc: S,
            eventHandlers: P,
            isAnimating: I,
        } = (0, C.Z)({
            userId: null == x ? void 0 : x.id,
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
        w = !n.isMultiUserDM() && (null == x ? void 0 : x.displayNameStyles) != null;
    return (0, i.jsxs)(y.ZP, {
        channelId: n.id,
        onMouseEnter: N,
        onMouseLeave: A,
        children: [
            (() => {
                let e = !E && I;
                return n.isMultiUserDM()
                    ? (0, i.jsx)(m.v, {
                          channel: n,
                          editable: !0,
                          location: c.Z.EMPTY_GROUP_DM,
                          children: (0, i.jsx)(f.Z, {
                              channel: n,
                              size: o.EFr.SIZE_80,
                              animated: e,
                              "aria-label": j,
                          }),
                      })
                    : (0, i.jsx)(o.qEK, {
                          "aria-label": j,
                          size: o.EFr.SIZE_80,
                          src: (0, u.x)(n, 80, e),
                          avatarDecoration: S,
                      });
            })(),
            (0, i.jsx)(y.Ot, {
                children: w
                    ? (0, i.jsx)(h.Z, {
                          userName: j,
                          displayNameStyles: null == x ? void 0 : x.displayNameStyles,
                          effectDisplayType: Z ? p.F.ANIMATED : p.F.STATIC,
                          loop: !0,
                      })
                    : j,
            }),
            (0, i.jsx)(y.jz, { children: O }),
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
