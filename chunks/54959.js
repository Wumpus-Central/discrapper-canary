i.d(t, { A: () => j });
var l = i(627968),
    n = i(64700),
    a = i(311907),
    s = i(397927),
    r = i(966327),
    d = i(972387),
    o = i(539895),
    c = i(233761),
    u = i(960736),
    m = i(398884),
    x = i(287809),
    g = i(954571),
    h = i(162284),
    _ = i(652215),
    p = i(985018),
    A = i(139616);
function j(e) {
    let { invite: t, guild: i, className: j } = e,
        E = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
        { submitting: v, error: I, invite_instance_id: f } = (0, a.cf)([o.A], () => o.A.getProps()),
        T = n.useCallback(() => {
            d.A.acceptInvite(t, f);
        }, [t, f]),
        C = (0, u.uE)(),
        N =
            "" !== C
                ? p.intl.format(p.t["9sWQNT"], { usernameHook: (e, t) => (0, l.jsx)("span", { children: C }, t) })
                : p.intl.string(p.t["e/6Ogt"]),
        y = n.useRef(null),
        [D, S] = n.useState(!1),
        L = n.useCallback(() => {
            D ||
                g.default.track(_.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: i.id,
                    invite_code: t.code,
                    location: "accept_invite_modal_redesign",
                }),
                S(!D);
        }, [i.id, t.code, D]),
        b = (0, m.Sn)();
    return (0, l.jsxs)("div", {
        className: j,
        children: [
            null != I
                ? (0, l.jsx)("div", { className: A.Un, children: (0, l.jsx)(s.wx6, { type: "critical", children: I }) })
                : null,
            b ? (0, l.jsx)(c.A, { className: A.sX }) : null,
            (0, l.jsxs)(s.ButtonGroup, {
                fullWidthContainer: !0,
                fullWidth: !0,
                direction: "horizontal",
                children: [
                    (0, l.jsx)(s.Button, {
                        onClick: T,
                        loading: v,
                        variant: "primary",
                        disabled: b,
                        text: b ? p.intl.string(p.t.ZNCziL) : N,
                        icon:
                            b || null == E
                                ? void 0
                                : () => (0, l.jsx)(r.A, { "aria-hidden": !0, size: s._3J.SIZE_16, user: E }),
                    }),
                    b
                        ? null
                        : (0, l.jsx)(s.YNO, {
                              targetElementRef: y,
                              animation: s.YNO.Animation.NONE,
                              position: "top",
                              align: "right",
                              shouldShow: D,
                              autoInvert: !1,
                              onRequestClose: () => S(!1),
                              renderPopout: (e) => (0, l.jsx)(h.A, { invite: t, ...e }),
                              children: (e) =>
                                  (0, l.jsx)("div", {
                                      ref: y,
                                      children: (0, l.jsx)(s.K0, {
                                          ...e,
                                          icon: s.Zes,
                                          "aria-label": p.intl.string(p.t["3D5yo/"]),
                                          variant: "secondary",
                                          onClick: L,
                                      }),
                                  }),
                          }),
                ],
            }),
        ],
    });
}
