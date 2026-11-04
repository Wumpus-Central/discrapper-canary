var i = t(477900),
    l = t(582128),
    s = t(855986),
    a = t(834730),
    r = t(778712),
    u = t(732159),
    c = t(966327),
    d = t(47167),
    o = t(598104),
    h = t(255266),
    A = t(734057),
    m = t(71393),
    x = t(290863),
    f = t(994500),
    j = t(287809),
    b = t(427262),
    p = t(294454),
    g = t(792996),
    y = t(285738);
function _(e) {
    let { icon: n, label: t } = e;
    return (0, i.jsxs)("div", {
        className: y.us,
        children: [n, (0, i.jsx)(a.E, { className: y.Pf, variant: "body-md/medium", lineClamp: 1, children: t })],
    });
}
function k(e) {
    let { channel: n } = e,
        t = (0, d.Ay)(n);
    return (0, i.jsx)(_, { icon: (0, i.jsx)(o.A, { "aria-hidden": !0, size: r._3.SIZE_32, channel: n }), label: t });
}
function v(e) {
    let { user: n } = e,
        t = b.Ay.useName(n),
        l = (0, s.bG)([f.A], () => f.A.getNickname(n.id)),
        a = (0, s.bG)([x.A], () => x.A.getStatus(n.id));
    return (0, i.jsx)(_, {
        icon: (0, i.jsx)(c.A, { "aria-hidden": !0, size: r._3.SIZE_32, user: n, status: a }),
        label: l ?? t,
    });
}
function C(e) {
    let { channel: n } = e,
        t = (0, s.bG)([m.A], () => m.A.getGuild(n?.guild_id)),
        l = (0, d.Ay)(n);
    return (0, i.jsx)(_, { icon: (0, i.jsx)(h.A, { size: h.q.SMALL_32, guild: t, channel: n }), label: l });
}
function G(e) {
    let { destination: n } = e,
        { channel: t, user: l } = (0, s.cf)([A.A, j.default], () => ({
            channel: "channel" === n.type ? A.A.getChannel(n.id) : null,
            user: "user" === n.type ? j.default.getUser(n.id) : null,
        }));
    return t?.isGroupDM()
        ? (0, i.jsx)(k, { channel: t })
        : null != l
          ? (0, i.jsx)(v, { user: l })
          : null != t
            ? (0, i.jsx)(C, { channel: t })
            : null;
}
t.d(
    n,
    {},
    {
        ForwardFailedAlertModal: function (e) {
            let { message: n, failedDestinations: t, forwardOptions: s, ...a } = e,
                r = l.useCallback(() => {
                    (0, p.fO)({ message: n, source: "retry-modal", initialSelectedDestinations: t, forwardOptions: s });
                }, [t, n, s]);
            return (0, i.jsx)(u.u, {
                title: g.intl.string(g.t["/OPIaM"]),
                subtitle: g.intl.format(g.t.cn9vFb, { count: t.length }),
                confirmText: g.intl.string(g.t["5911Lb"]),
                onConfirm: r,
                ...a,
                variant: "primary",
                children: (0, i.jsx)("div", {
                    className: y.Zc,
                    children: t.map((e, n) => (0, i.jsx)(G, { destination: e }, n)),
                }),
            });
        },
    },
);
