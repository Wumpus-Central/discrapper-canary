t.d(i, { A: () => N });
var l = t(627968),
    s = t(64700),
    a = t(311907),
    n = t(683071),
    r = t(825484),
    d = t(821609),
    o = t(778712),
    c = t(265872),
    u = t(408278),
    h = t(625903),
    m = t(966327),
    _ = t(972387),
    x = t(539895),
    g = t(233761),
    A = t(960736),
    p = t(398884),
    v = t(287809),
    E = t(954571),
    j = t(162284),
    I = t(652215),
    f = t(985018),
    C = t(963120);
function N(e) {
    let { invite: i, guild: t, className: N } = e,
        y = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        { submitting: T, error: D, invite_instance_id: b } = (0, a.cf)([x.A], () => x.A.getProps()),
        L = s.useCallback(() => {
            _.A.acceptInvite(i, b);
        }, [i, b]),
        R = (0, A.uE)(),
        S =
            "" !== R
                ? f.intl.format(f.t["9sWQNT"], { usernameHook: (e, i) => (0, l.jsx)("span", { children: R }, i) })
                : f.intl.string(f.t["e/6Ogt"]),
        w = s.useRef(null),
        [U, O] = s.useState(!1),
        G = s.useCallback(() => {
            U ||
                E.default.track(I.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: t.id,
                    invite_code: i.code,
                    location: "accept_invite_modal_redesign",
                }),
                O(!U);
        }, [t.id, i.code, U]),
        M = (0, p.Sn)();
    return (0, l.jsxs)("div", {
        className: N,
        children: [
            null != D
                ? (0, l.jsx)("div", { className: C.Un, children: (0, l.jsx)(n.w, { type: "critical", children: D }) })
                : null,
            M ? (0, l.jsx)(g.A, { className: C.sX }) : null,
            (0, l.jsxs)(r.e, {
                fullWidthContainer: !0,
                fullWidth: !0,
                direction: "horizontal",
                children: [
                    (0, l.jsx)(d.$, {
                        onClick: L,
                        loading: T,
                        variant: "primary",
                        disabled: M,
                        text: M ? f.intl.string(f.t.ZNCziL) : S,
                        icon:
                            M || null == y
                                ? void 0
                                : () => (0, l.jsx)(m.A, { "aria-hidden": !0, size: o._3.SIZE_16, user: y }),
                    }),
                    M
                        ? null
                        : (0, l.jsx)(c.Y, {
                              targetElementRef: w,
                              animation: c.Y.Animation.NONE,
                              position: "top",
                              align: "right",
                              shouldShow: U,
                              autoInvert: !1,
                              onRequestClose: () => O(!1),
                              renderPopout: (e) => (0, l.jsx)(j.A, { invite: i, ...e }),
                              children: (e) =>
                                  (0, l.jsx)("div", {
                                      ref: w,
                                      children: (0, l.jsx)(u.K, {
                                          ...e,
                                          icon: h.Z,
                                          "aria-label": f.intl.string(f.t["3D5yo/"]),
                                          variant: "secondary",
                                          onClick: G,
                                      }),
                                  }),
                          }),
                ],
            }),
        ],
    });
}
