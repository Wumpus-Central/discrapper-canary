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
    _ = i(954571),
    h = i(162284),
    g = i(652215),
    A = i(985018),
    p = i(492171);
function E(e) {
    let { invite: t, guild: i, className: E } = e,
        j = (0, s.bG)([x.default], () => x.default.getCurrentUser()),
        { submitting: I, error: v } = (0, s.cf)([c.A], () => c.A.getProps()),
        f = n.useCallback(() => {
            d.A.acceptInvite(t);
        }, [t]),
        T = (0, u.uE)(),
        N =
            "" !== T
                ? A.intl.format(A.t["9sWQNT"], { usernameHook: (e, t) => (0, l.jsx)("span", { children: T }, t) })
                : A.intl.string(A.t["e/6Ogt"]),
        C = n.useRef(null),
        [y, D] = n.useState(!1),
        S = n.useCallback(() => {
            y ||
                _.default.track(g.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: i.id,
                    invite_code: t.code,
                    location: "accept_invite_modal_redesign",
                }),
                D(!y);
        }, [i.id, t.code, y]),
        L = (0, m.Sn)();
    return (0, l.jsxs)("div", {
        className: E,
        children: [
            null != v
                ? (0, l.jsx)("div", { className: p.Un, children: (0, l.jsx)(a.wx6, { type: "critical", children: v }) })
                : null,
            L ? (0, l.jsx)(o.A, { className: p.sX }) : null,
            (0, l.jsxs)(a.ButtonGroup, {
                fullWidthContainer: !0,
                fullWidth: !0,
                direction: "horizontal",
                children: [
                    (0, l.jsx)(a.Button, {
                        onClick: f,
                        loading: I,
                        variant: "primary",
                        disabled: L,
                        text: L ? A.intl.string(A.t.ZNCziL) : N,
                        icon:
                            L || null == j
                                ? void 0
                                : () => (0, l.jsx)(r.A, { "aria-hidden": !0, size: a._3J.SIZE_16, user: j }),
                    }),
                    L
                        ? null
                        : (0, l.jsx)(a.YNO, {
                              targetElementRef: C,
                              animation: a.YNO.Animation.NONE,
                              position: "top",
                              align: "right",
                              shouldShow: y,
                              autoInvert: !1,
                              onRequestClose: () => D(!1),
                              renderPopout: (e) => (0, l.jsx)(h.A, { invite: t, ...e }),
                              children: (e) =>
                                  (0, l.jsx)("div", {
                                      ref: C,
                                      children: (0, l.jsx)(a.K0, {
                                          ...e,
                                          icon: a.Zes,
                                          "aria-label": A.intl.string(A.t["3D5yo/"]),
                                          variant: "secondary",
                                          onClick: S,
                                      }),
                                  }),
                          }),
                ],
            }),
        ],
    });
}
