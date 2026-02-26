i.d(t, { A: () => E });
var l = i(627968),
    n = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(966327),
    d = i(972387),
    c = i(539895),
    o = i(233761),
    u = i(960736),
    m = i(398884),
    x = i(287809),
    h = i(954571),
    _ = i(162284),
    g = i(652215),
    A = i(985018),
    p = i(306989);
function E(e) {
    let { invite: t, guild: i, className: E } = e,
        j = (0, s.bG)([x.default], () => x.default.getCurrentUser()),
        { submitting: v } = (0, s.bG)([c.A], () => c.A.getProps()),
        I = n.useCallback(() => {
            d.A.acceptInvite(t);
        }, [t]),
        T = (0, u.uE)(),
        f =
            "" !== T
                ? A.intl.format(A.t["9sWQNT"], { usernameHook: (e, t) => (0, l.jsx)("span", { children: T }, t) })
                : A.intl.string(A.t["e/6Ogt"]),
        N = n.useRef(null),
        [C, y] = n.useState(!1),
        D = n.useCallback(() => {
            C ||
                h.default.track(g.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: i.id,
                    invite_code: t.code,
                    location: "accept_invite_modal_redesign",
                }),
                y(!C);
        }, [i.id, t.code, C]),
        S = (0, m.Sn)(),
        L = (0, s.bG)([c.A], () => c.A.getProps().error);
    return (0, l.jsxs)("div", {
        className: E,
        children: [
            null != L
                ? (0, l.jsx)("div", { className: p.Un, children: (0, l.jsx)(a.wx6, { type: "critical", children: L }) })
                : null,
            S ? (0, l.jsx)(o.A, { className: p.sX }) : null,
            (0, l.jsxs)(a.ButtonGroup, {
                fullWidthContainer: !0,
                fullWidth: !0,
                direction: "horizontal",
                children: [
                    (0, l.jsx)(a.Button, {
                        onClick: I,
                        loading: v,
                        variant: "primary",
                        disabled: S,
                        text: S ? A.intl.string(A.t.ZNCziL) : f,
                        icon:
                            S || null == j
                                ? void 0
                                : () => (0, l.jsx)(r.A, { "aria-hidden": !0, size: a._3J.SIZE_16, user: j }),
                    }),
                    S
                        ? null
                        : (0, l.jsx)(a.YNO, {
                              targetElementRef: N,
                              animation: a.YNO.Animation.NONE,
                              position: "top",
                              align: "right",
                              shouldShow: C,
                              autoInvert: !1,
                              onRequestClose: () => y(!1),
                              renderPopout: (e) => (0, l.jsx)(_.A, { invite: t, ...e }),
                              children: (e) =>
                                  (0, l.jsx)("div", {
                                      ref: N,
                                      children: (0, l.jsx)(a.K0, {
                                          ...e,
                                          icon: a.Zes,
                                          "aria-label": A.intl.string(A.t["3D5yo/"]),
                                          variant: "secondary",
                                          onClick: D,
                                      }),
                                  }),
                          }),
                ],
            }),
        ],
    });
}
