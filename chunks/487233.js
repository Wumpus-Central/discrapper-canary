n.d(l, { A: () => C });
var i = n(627968);
n(64700);
var a = n(17928),
    t = n(778712),
    s = n(97808),
    r = n(688810),
    d = n(919395),
    u = n(252732),
    c = n(101058),
    o = n(696451),
    v = n(84540),
    g = n(836602),
    b = n(854627),
    h = n(930349),
    f = n(339984),
    m = n(985018);
let k = t._3.SIZE_72;
function C(e) {
    let { user: l, guildId: n, disabled: t } = e,
        { newestAnalyticsLocation: C } = (0, r.Ay)(),
        x = null != n,
        A = (0, a.bG)([o.Ay], () => (null != n ? o.Ay.getMember(n, l.id) : null)),
        p = (0, a.bG)([g.A], () => g.A.getPendingChanges(n ?? void 0).pendingAvatar),
        y = (0, c.V7)({ userId: l.id, image: p }),
        { avatarSrc: j } = (0, b.A)({ userId: l.id, guildId: n, avatarOverride: y, size: k }),
        I = l.avatar,
        N = x ? A?.avatar : I,
        L = void 0 !== p,
        w = null === p || (!L && null == N),
        B = x && null != I,
        z = (0, d.z5)(p, N)
            ? {
                  onClick: () => {
                      (0, u.rM)(null, N, (e) => (0, v.p)({ guildId: n ?? void 0, avatar: e })),
                          (0, d.WU)(B ? "reset" : "remove");
                  },
                  type: B ? "reset" : "remove",
                  accessibleLabel: m.intl.string(B ? m.t.Y0mxy1 : m.t.twB3fz),
              }
            : void 0,
        O = () =>
            (0, u.XD)({ uploadType: f.HL.AVATAR, analyticsSource: C, guildId: n ?? void 0, stackingBehavior: "stack" }),
        R = (0, i.jsx)(s.eu, { src: j, size: k, "aria-hidden": !0 });
    return w
        ? (0, i.jsx)(h.kL, {
              variant: "square",
              onClick: O,
              accessibleLabel: m.intl.string(m.t["4OynCD"]),
              disabled: t,
              dimContent: w && B,
              children: R,
          })
        : (0, i.jsx)(h.NW, {
              variant: "square",
              onClick: O,
              accessibleLabel: m.intl.string(m.t["4OynCD"]),
              deleteButtonConfig: z,
              disabled: t,
              children: R,
          });
}
