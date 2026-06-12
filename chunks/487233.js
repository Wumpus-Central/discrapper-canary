l.d(n, { A: () => I });
var t = l(627968);
l(64700);
var a = l(17928),
    r = l(778712),
    i = l(97808),
    s = l(688810),
    o = l(919395),
    u = l(252732),
    d = l(101058),
    c = l(392107),
    g = l(696451),
    v = l(84540),
    h = l(836602),
    f = l(854627),
    p = l(930349),
    m = l(339984),
    b = l(375708);
let x = r._3.SIZE_72;
function C(e) {
    let { userId: n, guildId: l, avatarOverride: a, shouldAnimate: r } = e,
        { avatarSrc: s } = (0, f.A)({ userId: n, guildId: l, avatarOverride: a, size: x, animateOnHover: !r });
    return (0, t.jsx)(i.eu, { src: s, size: x, "aria-hidden": !0 });
}
function I(e) {
    let n,
        l,
        { user: r, guildId: i, disabled: f } = e,
        { newestAnalyticsLocation: x } = (0, s.Ay)(),
        I = null != i,
        A = (0, a.bG)([g.Ay], () => (null != i ? g.Ay.getMember(i, r.id) : null)),
        k = (0, a.bG)([h.A], () => h.A.getPendingChanges(i ?? void 0).pendingAvatar),
        y = (0, d.V7)({ userId: r.id, image: k }),
        j = r.avatar,
        N = I ? A?.avatar : j,
        E = I && null != j,
        w = (0, o.z5)(k, N)
            ? {
                  onClick: () => {
                      (0, u.rM)(null, N, (e) => (0, v.p)({ guildId: i ?? void 0, avatar: e })),
                          (0, o.WU)(E ? "reset" : "remove");
                  },
                  type: E ? "reset" : "remove",
                  accessibleLabel: b.intl.string(E ? b.t.Y0mxy1 : b.t.twB3fz),
              }
            : void 0;
    return (0, t.jsx)(p.V, {
        affordance: w,
        variant: "square",
        onClick: () =>
            (0, u.XD)({ uploadType: m.HL.AVATAR, analyticsSource: x, guildId: i ?? void 0, stackingBehavior: "stack" }),
        accessibleLabel: b.intl.string(b.t.lqaIxI),
        accessibleValue:
            ((n = null === k),
            (l = void 0 === k),
            n || (l && null == N)
                ? b.intl.string(b.t["3Xph0/"])
                : l
                  ? b.intl.string(b.t["16GpW/"])
                  : ((k.assetOrigin === c.E.ARCHIVED_ASSET ? k.originalAsset.description : k.description) ??
                    b.intl.string(b.t.cqdtrR))),
        "aria-haspopup": "dialog",
        disabled: f,
        renderPreview: (e) => (0, t.jsx)(C, { userId: r.id, guildId: i, avatarOverride: y, shouldAnimate: e }),
    });
}
