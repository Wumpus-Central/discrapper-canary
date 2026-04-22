n.d(t, { A: () => k });
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(834730),
    a = n(311907),
    o = n(862482),
    d = n(97808),
    u = n(778712),
    c = n(463930),
    _ = n(104510),
    m = n(827734),
    p = n(730134),
    A = n(775602),
    x = n(509536),
    g = n(721923),
    f = n(29086),
    h = n(854627),
    v = n(696451),
    E = n(317525),
    S = n(71393),
    I = n(287809),
    b = n(562153),
    j = n(837921),
    C = n(652215),
    w = n(853513),
    L = n(985018),
    N = n(32746);
let y = j.Ay.getEnableHardwareAcceleration() ? d.Js : p.A;
function k(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([S.A], () => S.A.getGuild(t)),
        i = (0, a.bG)([E.A], () => E.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        d = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        p = d?.id,
        j = (0, a.bG)([v.Ay], () => (null != p ? v.Ay.getMember(t, p) : void 0), [p, t]),
        k = j?.premiumSince != null,
        R = (0, a.bG)([A.A], () => A.A.useReducedMotion),
        {
            avatarDecorationSrc: T,
            avatarSrc: P,
            eventHandlers: O,
        } = (0, h.A)({ userId: d?.id, guildId: t, size: u._3.SIZE_40, animateOnHover: !R });
    return null == n || null == j || null == d
        ? null
        : (0, r.jsxs)("div", {
              className: N.ft,
              children: [
                  (0, r.jsxs)("div", {
                      className: N.FS,
                      children: [
                          (0, r.jsx)(s.E, {
                              variant: "text-md/semibold",
                              children: L.intl.string(k ? w.default.KSWK1U : w.default.XXXX5l),
                          }),
                          (0, r.jsx)(s.E, {
                              variant: "text-sm/medium",
                              children: L.intl.format(k ? w.default["7fWTg4"] : w.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, x.K4)({
                                          guildId: t,
                                          location: {
                                              section: C.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: C.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !k &&
                      (0, r.jsx)(f.V, {
                          avatar: (0, r.jsx)(y, {
                              ...O,
                              user: d,
                              src: P,
                              avatarDecoration: T,
                              size: u._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, r.jsx)(c.g, {
                              variant: "text-md/semibold",
                              name: b.Ay.getName(t, null, d),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: l()(N.Qs, N.cX),
                          message: L.intl.string(L.t["6OSasb"]),
                          decorations: (0, r.jsx)(_._, {
                              color: m.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: N.$J,
                          }),
                      }),
                  (0, r.jsx)(g.A, {
                      guild: n,
                      className: N.Qs,
                      analyticsLocation: {
                          page: C.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: C.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: o.XD.BRAND,
                      size: o.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, r.jsx)(_._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
