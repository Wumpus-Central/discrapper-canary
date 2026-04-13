l.d(t, { A: () => y });
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927),
    i = l(688810),
    o = l(919395),
    s = l(385612),
    d = l(101058),
    c = l(696451),
    u = l(84540),
    p = l(836602),
    m = l(854627),
    h = l(930349),
    x = l(339984),
    b = l(985018);
function y(e) {
    let { user: t, guildId: l, disabled: y } = e,
        { newestAnalyticsLocation: f } = (0, i.Ay)(),
        g = null != l,
        v = (0, n.bG)([c.Ay], () => (null != l ? c.Ay.getMember(l, t.id) : null)),
        _ = (0, n.bG)([p.A], () => p.A.getPendingChanges(l ?? void 0).pendingAvatar),
        E = (0, d.V7)({ userId: t.id, image: _ }),
        { avatarSrc: C } = (0, m.A)({ userId: t.id, guildId: l, avatarOverride: E, size: r._3J.SIZE_56 }),
        j = g ? v?.avatar : t.avatar,
        S = null != t.avatar,
        T = g && v?.avatar != null,
        A = null != _,
        P = null === _,
        k = (0, o.z5)(_, j),
        I = g && S,
        R = () =>
            (0, s.XD)({ uploadType: x.HL.AVATAR, analyticsSource: f, guildId: l ?? void 0, stackingBehavior: "stack" });
    if (!(P ? g && S : A || T || S))
        return (0, a.jsx)(h.kL, {
            variant: "square",
            onClick: R,
            accessibleLabel: b.intl.string(b.t["4OynCD"]),
            disabled: y,
            children: (0, a.jsx)(r.euF, { src: C, size: r._3J.SIZE_56, "aria-hidden": !0 }),
        });
    let N = k
        ? {
              onClick: () => {
                  (0, u.p)({ guildId: l ?? void 0, avatar: null }), (0, o.WU)(I ? "reset" : "remove");
              },
              type: I ? "reset" : "remove",
              accessibleLabel: b.intl.string(I ? b.t.Y0mxy1 : b.t.twB3fz),
          }
        : void 0;
    return (0, a.jsx)(h.NW, {
        variant: "square",
        onClick: R,
        accessibleLabel: b.intl.string(b.t["4OynCD"]),
        deleteButtonConfig: N,
        disabled: y,
        children: (0, a.jsx)(r.euF, { src: C, size: r._3J.SIZE_56, "aria-hidden": !0 }),
    });
}
