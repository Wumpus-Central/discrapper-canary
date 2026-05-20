a.d(l, { A: () => A });
var i = a(627968);
a(64700);
var n = a(17928),
    r = a(778712),
    t = a(97808),
    s = a(688810),
    d = a(919395),
    u = a(252732),
    c = a(101058),
    o = a(696451),
    v = a(84540),
    g = a(836602),
    f = a(854627),
    h = a(930349),
    b = a(339984),
    p = a(375708);
let m = r._3.SIZE_72;
function k(e) {
    let { userId: l, guildId: a, avatarOverride: n, shouldAnimate: r } = e,
        { avatarSrc: s } = (0, f.A)({ userId: l, guildId: a, avatarOverride: n, size: m, animateOnHover: !r });
    return (0, i.jsx)(t.eu, { src: s, size: m, "aria-hidden": !0 });
}
function A(e) {
    let { user: l, guildId: a, disabled: r } = e,
        { newestAnalyticsLocation: t } = (0, s.Ay)(),
        f = null != a,
        m = (0, n.bG)([o.Ay], () => (null != a ? o.Ay.getMember(a, l.id) : null)),
        A = (0, n.bG)([g.A], () => g.A.getPendingChanges(a ?? void 0).pendingAvatar),
        I = (0, c.V7)({ userId: l.id, image: A }),
        C = l.avatar,
        x = f ? m?.avatar : C,
        y = f && null != C,
        j = (0, d.z5)(A, x)
            ? {
                  onClick: () => {
                      (0, u.rM)(null, x, (e) => (0, v.p)({ guildId: a ?? void 0, avatar: e })),
                          (0, d.WU)(y ? "reset" : "remove");
                  },
                  type: y ? "reset" : "remove",
                  accessibleLabel: p.intl.string(y ? p.t.Y0mxy1 : p.t.twB3fz),
              }
            : void 0;
    return (0, i.jsx)(h.V, {
        affordance: j,
        variant: "square",
        onClick: () =>
            (0, u.XD)({ uploadType: b.HL.AVATAR, analyticsSource: t, guildId: a ?? void 0, stackingBehavior: "stack" }),
        accessibleLabel: p.intl.string(p.t["4OynCD"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, i.jsx)(k, { userId: l.id, guildId: a, avatarOverride: I, shouldAnimate: e }),
    });
}
