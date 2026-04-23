l.d(t, { A: () => g });
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(778712),
    i = l(97808),
    o = l(688810),
    s = l(919395),
    d = l(385612),
    c = l(101058),
    u = l(696451),
    p = l(84540),
    m = l(836602),
    b = l(854627),
    h = l(930349),
    x = l(339984),
    y = l(985018);
let v = r._3.SIZE_72;
function g(e) {
    let { user: t, guildId: l, disabled: r } = e,
        { newestAnalyticsLocation: g } = (0, o.Ay)(),
        f = null != l,
        _ = (0, n.bG)([u.Ay], () => (null != l ? u.Ay.getMember(l, t.id) : null)),
        E = (0, n.bG)([m.A], () => m.A.getPendingChanges(l ?? void 0).pendingAvatar),
        C = (0, c.V7)({ userId: t.id, image: E }),
        { avatarSrc: S } = (0, b.A)({ userId: t.id, guildId: l, avatarOverride: C, size: v }),
        j = f ? _?.avatar : t.avatar,
        T = null != t.avatar,
        P = f && _?.avatar != null,
        I = null != E,
        A = null === E,
        k = (0, s.z5)(E, j),
        R = f && T,
        N = () =>
            (0, d.XD)({ uploadType: x.HL.AVATAR, analyticsSource: g, guildId: l ?? void 0, stackingBehavior: "stack" });
    if (!(A ? f && T : I || P || T))
        return (0, a.jsx)(h.kL, {
            variant: "square",
            onClick: N,
            accessibleLabel: y.intl.string(y.t["4OynCD"]),
            disabled: r,
            children: (0, a.jsx)(i.eu, { src: S, size: v, "aria-hidden": !0 }),
        });
    let M = k
        ? {
              onClick: () => {
                  (0, d.rM)(null, j, (e) => (0, p.p)({ guildId: l ?? void 0, avatar: e })),
                      (0, s.WU)(R ? "reset" : "remove");
              },
              type: R ? "reset" : "remove",
              accessibleLabel: y.intl.string(R ? y.t.Y0mxy1 : y.t.twB3fz),
          }
        : void 0;
    return (0, a.jsx)(h.NW, {
        variant: "square",
        onClick: N,
        accessibleLabel: y.intl.string(y.t["4OynCD"]),
        deleteButtonConfig: M,
        disabled: r,
        children: (0, a.jsx)(i.eu, { src: S, size: v, "aria-hidden": !0 }),
    });
}
