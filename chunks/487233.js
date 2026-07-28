l.d(n, { A: () => C });
var t = l(627968),
    a = l(64700),
    r = l(17928),
    i = l(778712),
    s = l(97808),
    u = l(688810),
    o = l(919395),
    d = l(252732),
    c = l(101058),
    g = l(392107),
    v = l(696451),
    h = l(84540),
    f = l(836602),
    p = l(854627),
    m = l(930349),
    b = l(339984),
    I = l(375708);
let A = i._3.SIZE_72;
function x(e) {
    let { userId: n, guildId: l, avatarOverride: a, shouldAnimate: r } = e,
        { avatarSrc: i } = (0, p.A)({ userId: n, guildId: l, avatarOverride: a, size: A, animateOnHover: !r });
    return (0, t.jsx)(s.eu, { src: i, size: A, "aria-hidden": !0 });
}
function C(e) {
    let n,
        l,
        { user: i, guildId: s, disabled: p, errorMessageId: A } = e,
        { newestAnalyticsLocation: C } = (0, u.Ay)(),
        k = a.useRef(null),
        y = null != s,
        N = (0, r.bG)([v.Ay], () => (null != s ? v.Ay.getMember(s, i.id) : null)),
        j = (0, r.bG)([f.A], () => f.A.getPendingChanges(s ?? void 0).pendingAvatar),
        E = (0, c.V7)({ userId: i.id, image: j }),
        w = i.avatar,
        P = y ? N?.avatar : w,
        S = y && null != w,
        R = (0, o.z5)(j, P)
            ? {
                  onClick: () => {
                      (0, d.rM)(null, P, (e) => (0, h.p)({ guildId: s ?? void 0, avatar: e })),
                          (0, o.WU)(S ? "reset" : "remove");
                  },
                  type: S ? "reset" : "remove",
                  accessibleLabel: I.intl.string(S ? I.t.Y0mxy1 : I.t.twB3fz),
              }
            : void 0;
    return (0, t.jsx)(m.V, {
        affordance: R,
        buttonRef: k,
        variant: "square",
        onClick: function () {
            return (0, d.XD)({
                uploadType: b.HL.AVATAR,
                analyticsSource: C,
                guildId: s ?? void 0,
                stackingBehavior: "stack",
                returnRef: k,
            });
        },
        accessibleLabel: I.intl.string(I.t.lqaIxI),
        accessibleValue:
            ((n = null === j),
            (l = void 0 === j),
            n || (l && null == P)
                ? I.intl.string(I.t["3Xph0/"])
                : l
                  ? I.intl.string(I.t["16GpW/"])
                  : ((j.assetOrigin === g.E.ARCHIVED_ASSET ? j.originalAsset.description : j.description) ??
                    I.intl.string(I.t.cqdtrR))),
        "aria-haspopup": "dialog",
        disabled: p,
        errorMessageId: A,
        renderPreview: (e) => (0, t.jsx)(x, { userId: i.id, guildId: s, avatarOverride: E, shouldAnimate: e }),
    });
}
