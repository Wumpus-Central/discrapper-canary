l.d(n, { A: () => I });
var t = l(627968);
l(64700);
var a = l(17928),
    r = l(778712),
    i = l(97808),
    s = l(688810),
    o = l(919395),
    d = l(252732),
    u = l(101058),
    c = l(392107),
    v = l(696451),
    g = l(84540),
    h = l(836602),
    f = l(854627),
    m = l(930349),
    p = l(339984),
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
        A = (0, a.bG)([v.Ay], () => (null != i ? v.Ay.getMember(i, r.id) : null)),
        k = (0, a.bG)([h.A], () => h.A.getPendingChanges(i ?? void 0).pendingAvatar),
        y = (0, u.V7)({ userId: r.id, image: k }),
        j = r.avatar,
        N = I ? A?.avatar : j,
        w = I && null != j,
        E = (0, o.z5)(k, N)
            ? {
                  onClick: () => {
                      (0, d.rM)(null, N, (e) => (0, g.p)({ guildId: i ?? void 0, avatar: e })),
                          (0, o.WU)(w ? "reset" : "remove");
                  },
                  type: w ? "reset" : "remove",
                  accessibleLabel: b.intl.string(w ? b.t.Y0mxy1 : b.t.twB3fz),
              }
            : void 0;
    return (0, t.jsx)(m.V, {
        affordance: E,
        variant: "square",
        onClick: () =>
            (0, d.XD)({ uploadType: p.HL.AVATAR, analyticsSource: x, guildId: i ?? void 0, stackingBehavior: "stack" }),
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
