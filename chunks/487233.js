a.d(l, { A: () => k });
var i = a(627968);
a(64700);
var n = a(17928),
    r = a(778712),
    t = a(97808),
    s = a(688810),
    d = a(919395),
    u = a(252732),
    o = a(101058),
    c = a(696451),
    v = a(84540),
    g = a(836602),
    h = a(854627),
    f = a(930349),
    m = a(339984),
    b = a(375708);
let p = r._3.SIZE_72;
function A(e) {
    let { userId: l, guildId: a, avatarOverride: n, shouldAnimate: r } = e,
        { avatarSrc: s } = (0, h.A)({ userId: l, guildId: a, avatarOverride: n, size: p, animateOnHover: !r });
    return (0, i.jsx)(t.eu, { src: s, size: p, "aria-hidden": !0 });
}
function k(e) {
    let { user: l, guildId: a, disabled: r } = e,
        { newestAnalyticsLocation: t } = (0, s.Ay)(),
        h = null != a,
        p = (0, n.bG)([c.Ay], () => (null != a ? c.Ay.getMember(a, l.id) : null)),
        k = (0, n.bG)([g.A], () => g.A.getPendingChanges(a ?? void 0).pendingAvatar),
        C = (0, o.V7)({ userId: l.id, image: k }),
        I = l.avatar,
        x = h ? p?.avatar : I,
        y = void 0 !== k,
        j = null === k || (!y && null == x),
        w = h && null != I,
        N = (0, d.z5)(k, x)
            ? {
                  onClick: () => {
                      (0, u.rM)(null, x, (e) => (0, v.p)({ guildId: a ?? void 0, avatar: e })),
                          (0, d.WU)(w ? "reset" : "remove");
                  },
                  type: w ? "reset" : "remove",
                  accessibleLabel: b.intl.string(w ? b.t.Y0mxy1 : b.t.twB3fz),
              }
            : void 0;
    return (0, i.jsx)(f.V, {
        affordance: j ? "add" : N,
        variant: "square",
        onClick: () =>
            (0, u.XD)({ uploadType: m.HL.AVATAR, analyticsSource: t, guildId: a ?? void 0, stackingBehavior: "stack" }),
        accessibleLabel: b.intl.string(b.t["4OynCD"]),
        "aria-haspopup": "dialog",
        disabled: r,
        dimContent: j && w,
        renderPreview: (e) => (0, i.jsx)(A, { userId: l.id, guildId: a, avatarOverride: C, shouldAnimate: e }),
    });
}
