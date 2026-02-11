i.d(e, { ForwardFailedAlertModal: () => F });
var a = i(627968),
    s = i(64700),
    A = i(158954),
    l = i(311907),
    n = i(397927),
    _ = i(966327),
    r = i(47167),
    I = i(598104),
    h = i(255266),
    u = i(734057),
    c = i(71393),
    d = i(290863),
    L = i(994500),
    E = i(287809),
    o = i(427262),
    N = i(294454),
    C = i(985018),
    G = i(36614);
function P(t) {
    let { icon: e, label: i } = t;
    return (0, a.jsxs)("div", {
        className: G.us,
        children: [e, (0, a.jsx)(n.Text, { className: G.Pf, variant: "text-md/medium", lineClamp: 1, children: i })],
    });
}
function f(t) {
    let { channel: e } = t,
        i = (0, r.Ay)(e);
    return (0, a.jsx)(P, { icon: (0, a.jsx)(I.A, { "aria-hidden": !0, size: n._3J.SIZE_32, channel: e }), label: i });
}
function g(t) {
    let { user: e } = t,
        i = o.Ay.useName(e),
        s = (0, l.bG)([L.A], () => L.A.getNickname(e.id)),
        A = (0, l.bG)([d.A], () => d.A.getStatus(e.id));
    return (0, a.jsx)(P, {
        icon: (0, a.jsx)(_.A, { "aria-hidden": !0, size: n._3J.SIZE_32, user: e, status: A }),
        label: s ?? i,
    });
}
function D(t) {
    let { channel: e } = t,
        i = (0, l.bG)([c.A], () => c.A.getGuild(e?.guild_id)),
        s = (0, r.Ay)(e);
    return (0, a.jsx)(P, { icon: (0, a.jsx)(h.A, { size: h.q.SMALL_32, guild: i, channel: e }), label: s });
}
function O(t) {
    let { destination: e } = t,
        { channel: i, user: s } = (0, l.cf)([u.A, E.default], () => ({
            channel: "channel" === e.type ? u.A.getChannel(e.id) : null,
            user: "user" === e.type ? E.default.getUser(e.id) : null,
        }));
    return i?.isGroupDM()
        ? (0, a.jsx)(f, { channel: i })
        : null != s
          ? (0, a.jsx)(g, { user: s })
          : null != i
            ? (0, a.jsx)(D, { channel: i })
            : null;
}
function F(t) {
    let { message: e, failedDestinations: i, forwardOptions: l, ...n } = t,
        _ = s.useCallback(() => {
            (0, N.fO)({ message: e, source: "retry-modal", initialSelectedDestinations: i, forwardOptions: l });
        }, [i, e, l]);
    return (0, a.jsx)(A.ConfirmModal, {
        title: C.intl.string(C.t["/OPIaM"]),
        subtitle: C.intl.format(C.t.cn9vFb, { count: i.length }),
        confirmText: C.intl.string(C.t["5911Lb"]),
        onConfirm: _,
        ...n,
        variant: "primary",
        children: (0, a.jsx)("div", {
            className: G.Zc,
            children: i.map((t, e) => (0, a.jsx)(O, { destination: t }, e)),
        }),
    });
}
