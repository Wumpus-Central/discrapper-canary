l.d(n, { A: () => A });
var t = l(627968);
l(64700);
var a = l(17928),
    r = l(778712),
    i = l(97808),
    s = l(688810),
    u = l(919395),
    o = l(252732),
    d = l(101058),
    c = l(392107),
    g = l(696451),
    v = l(84540),
    h = l(836602),
    f = l(854627),
    m = l(930349),
    p = l(339984),
    b = l(375708);
let I = r._3.SIZE_72;
function x(e) {
    let { userId: n, guildId: l, avatarOverride: a, shouldAnimate: r } = e,
        { avatarSrc: s } = (0, f.A)({ userId: n, guildId: l, avatarOverride: a, size: I, animateOnHover: !r });
    return (0, t.jsx)(i.eu, { src: s, size: I, "aria-hidden": !0 });
}
function A(e) {
    let n,
        l,
        { user: r, guildId: i, disabled: f, errorMessageId: I } = e,
        { newestAnalyticsLocation: A } = (0, s.Ay)(),
        C = null != i,
        k = (0, a.bG)([g.Ay], () => (null != i ? g.Ay.getMember(i, r.id) : null)),
        y = (0, a.bG)([h.A], () => h.A.getPendingChanges(i ?? void 0).pendingAvatar),
        j = (0, d.V7)({ userId: r.id, image: y }),
        N = r.avatar,
        E = C ? k?.avatar : N,
        w = C && null != N,
        S = (0, u.z5)(y, E)
            ? {
                  onClick: () => {
                      (0, o.rM)(null, E, (e) => (0, v.p)({ guildId: i ?? void 0, avatar: e })),
                          (0, u.WU)(w ? "reset" : "remove");
                  },
                  type: w ? "reset" : "remove",
                  accessibleLabel: b.intl.string(w ? b.t.Y0mxy1 : b.t.twB3fz),
              }
            : void 0;
    return (0, t.jsx)(m.V, {
        affordance: S,
        variant: "square",
        onClick: function () {
            return (0, o.XD)({
                uploadType: p.HL.AVATAR,
                analyticsSource: A,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            });
        },
        accessibleLabel: b.intl.string(b.t.lqaIxI),
        accessibleValue:
            ((n = null === y),
            (l = void 0 === y),
            n || (l && null == E)
                ? b.intl.string(b.t["3Xph0/"])
                : l
                  ? b.intl.string(b.t["16GpW/"])
                  : ((y.assetOrigin === c.E.ARCHIVED_ASSET ? y.originalAsset.description : y.description) ??
                    b.intl.string(b.t.cqdtrR))),
        "aria-haspopup": "dialog",
        disabled: f,
        errorMessageId: I,
        renderPreview: (e) => (0, t.jsx)(x, { userId: r.id, guildId: i, avatarOverride: j, shouldAnimate: e }),
    });
}
