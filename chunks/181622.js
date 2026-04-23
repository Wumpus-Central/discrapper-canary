i.d(e, { ForwardFailedAlertModal: () => W });
var a = i(627968),
    s = i(64700),
    A = i(732159),
    l = i(17928),
    n = i(834730),
    _ = i(778712),
    r = i(966327),
    I = i(47167),
    h = i(598104),
    u = i(255266),
    c = i(734057),
    d = i(71393),
    E = i(290863),
    L = i(994500),
    o = i(287809),
    N = i(427262),
    C = i(294454),
    G = i(985018),
    P = i(151399);
function f(t) {
    let { icon: e, label: i } = t;
    return (0, a.jsxs)("div", {
        className: P.us,
        children: [e, (0, a.jsx)(n.E, { className: P.Pf, variant: "text-md/medium", lineClamp: 1, children: i })],
    });
}
function g(t) {
    let { channel: e } = t,
        i = (0, I.Ay)(e);
    return (0, a.jsx)(f, { icon: (0, a.jsx)(h.A, { "aria-hidden": !0, size: _._3.SIZE_32, channel: e }), label: i });
}
function D(t) {
    let { user: e } = t,
        i = N.Ay.useName(e),
        s = (0, l.bG)([L.A], () => L.A.getNickname(e.id)),
        A = (0, l.bG)([E.A], () => E.A.getStatus(e.id));
    return (0, a.jsx)(f, {
        icon: (0, a.jsx)(r.A, { "aria-hidden": !0, size: _._3.SIZE_32, user: e, status: A }),
        label: s ?? i,
    });
}
function O(t) {
    let { channel: e } = t,
        i = (0, l.bG)([d.A], () => d.A.getGuild(e?.guild_id)),
        s = (0, I.Ay)(e);
    return (0, a.jsx)(f, { icon: (0, a.jsx)(u.A, { size: u.q.SMALL_32, guild: i, channel: e }), label: s });
}
function S(t) {
    let { destination: e } = t,
        { channel: i, user: s } = (0, l.cf)([c.A, o.default], () => ({
            channel: "channel" === e.type ? c.A.getChannel(e.id) : null,
            user: "user" === e.type ? o.default.getUser(e.id) : null,
        }));
    return i?.isGroupDM()
        ? (0, a.jsx)(g, { channel: i })
        : null != s
          ? (0, a.jsx)(D, { user: s })
          : null != i
            ? (0, a.jsx)(O, { channel: i })
            : null;
}
function W(t) {
    let { message: e, failedDestinations: i, forwardOptions: l, ...n } = t,
        _ = s.useCallback(() => {
            (0, C.fO)({ message: e, source: "retry-modal", initialSelectedDestinations: i, forwardOptions: l });
        }, [i, e, l]);
    return (0, a.jsx)(A.ConfirmModal, {
        title: G.intl.string(G.t["/OPIaM"]),
        subtitle: G.intl.format(G.t.cn9vFb, { count: i.length }),
        confirmText: G.intl.string(G.t["5911Lb"]),
        onConfirm: _,
        ...n,
        variant: "primary",
        children: (0, a.jsx)("div", {
            className: P.Zc,
            children: i.map((t, e) => (0, a.jsx)(S, { destination: t }, e)),
        }),
    });
}
