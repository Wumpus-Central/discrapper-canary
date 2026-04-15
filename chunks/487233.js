l.d(t, { A: () => f });
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
let y = r._3J.SIZE_72;
function f(e) {
    let { user: t, guildId: l, disabled: f } = e,
        { newestAnalyticsLocation: g } = (0, i.Ay)(),
        v = null != l,
        _ = (0, n.bG)([c.Ay], () => (null != l ? c.Ay.getMember(l, t.id) : null)),
        E = (0, n.bG)([p.A], () => p.A.getPendingChanges(l ?? void 0).pendingAvatar),
        C = (0, d.V7)({ userId: t.id, image: E }),
        { avatarSrc: j } = (0, m.A)({ userId: t.id, guildId: l, avatarOverride: C, size: y }),
        S = v ? _?.avatar : t.avatar,
        T = null != t.avatar,
        A = v && _?.avatar != null,
        P = null != E,
        k = null === E,
        I = (0, o.z5)(E, S),
        R = v && T,
        N = () =>
            (0, s.XD)({ uploadType: x.HL.AVATAR, analyticsSource: g, guildId: l ?? void 0, stackingBehavior: "stack" });
    if (!(k ? v && T : P || A || T))
        return (0, a.jsx)(h.kL, {
            variant: "square",
            onClick: N,
            accessibleLabel: b.intl.string(b.t["4OynCD"]),
            disabled: f,
            children: (0, a.jsx)(r.euF, { src: j, size: y, "aria-hidden": !0 }),
        });
    let M = I
        ? {
              onClick: () => {
                  (0, u.p)({ guildId: l ?? void 0, avatar: null }), (0, o.WU)(R ? "reset" : "remove");
              },
              type: R ? "reset" : "remove",
              accessibleLabel: b.intl.string(R ? b.t.Y0mxy1 : b.t.twB3fz),
          }
        : void 0;
    return (0, a.jsx)(h.NW, {
        variant: "square",
        onClick: N,
        accessibleLabel: b.intl.string(b.t["4OynCD"]),
        deleteButtonConfig: M,
        disabled: f,
        children: (0, a.jsx)(r.euF, { src: j, size: y, "aria-hidden": !0 }),
    });
}
