l.d(t, { m: () => f });
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927),
    i = l(688810),
    o = l(919395),
    s = l(385612),
    u = l(101058),
    d = l(696451),
    c = l(287809),
    p = l(84540),
    m = l(836602),
    h = l(854627),
    x = l(930349),
    b = l(339984),
    y = l(985018);
function g(e) {
    let { user: t, guildId: l } = e,
        { newestAnalyticsLocation: c } = (0, i.Ay)(),
        g = null != l,
        f = (0, n.bG)([d.Ay], () => (null != l ? d.Ay.getMember(l, t.id) : null)),
        v = (0, n.bG)([m.A], () => m.A.getPendingChanges(l ?? void 0).pendingAvatar),
        _ = (0, u.V7)({ userId: t.id, image: v }),
        { avatarSrc: E } = (0, h.A)({ userId: t.id, guildId: l, avatarOverride: _, size: r._3J.SIZE_56 }),
        C = g ? f?.avatar : t.avatar,
        j = null != t.avatar,
        S = g && f?.avatar != null,
        T = null != v,
        A = null === v,
        P = (0, o.z5)(v, C),
        k = () =>
            (0, s.XD)({ uploadType: b.HL.AVATAR, analyticsSource: c, guildId: l ?? void 0, stackingBehavior: "stack" });
    if (!(A ? g && j : T || S || j))
        return (0, a.jsx)(x.k, {
            variant: "square",
            onClick: k,
            accessibleLabel: y.intl.string(y.t["4OynCD"]),
            children: (0, a.jsx)(r.euF, { src: E, size: r._3J.SIZE_56, "aria-hidden": !0 }),
        });
    let I = g && j,
        R = P
            ? {
                  onClick: () => {
                      (0, p.p)({ guildId: l ?? void 0, avatar: null }), (0, o.WU)(null);
                  },
                  type: I ? "reset" : "remove",
                  accessibleLabel: y.intl.string(I ? y.t.GaEG4t : y.t["2A+piL"]),
              }
            : void 0;
    return (0, a.jsx)(x.N, {
        variant: "square",
        onClick: k,
        accessibleLabel: y.intl.string(y.t["4OynCD"]),
        deleteButtonConfig: R,
        children: (0, a.jsx)(r.euF, { src: E, size: r._3J.SIZE_56, "aria-hidden": !0 }),
    });
}
function f(e) {
    let { guildId: t } = e,
        l = (0, n.bG)([c.default], () => c.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(g, { user: l, guildId: t });
}
