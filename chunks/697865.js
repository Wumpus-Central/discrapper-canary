n.d(t, { A: () => N });
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    s = n(158954),
    o = n(311907),
    a = n(421380),
    u = n(397927),
    d = n(730134),
    c = n(775602),
    p = n(509536),
    m = n(721923),
    A = n(29086),
    _ = n(854627),
    g = n(696451),
    f = n(317525),
    x = n(71393),
    h = n(287809),
    v = n(562153),
    j = n(837921),
    b = n(652215),
    E = n(333354),
    I = n(985018),
    S = n(520277),
    w = n(445826);
let C = j.Ay.getEnableHardwareAcceleration() ? u.JsQ : d.A;
function N(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        l = (0, o.bG)([f.A], () => f.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        d = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        j = d?.id,
        N = (0, o.bG)([g.Ay], () => (null != j ? g.Ay.getMember(t, j) : void 0), [j, t]),
        L = N?.premiumSince != null,
        y = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        {
            avatarDecorationSrc: T,
            avatarSrc: k,
            eventHandlers: G,
        } = (0, _.A)({ userId: d?.id, guildId: t, size: u._3J.SIZE_40, animateOnHover: !y });
    return null == n || null == N || null == d
        ? null
        : (0, r.jsxs)(u.hLv, {
              className: S.kL,
              children: [
                  (0, r.jsx)("img", { alt: "", className: S.Sl, src: w }),
                  (0, r.jsxs)("div", {
                      className: S.FS,
                      children: [
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/semibold",
                              children: I.intl.string(L ? E.default.KSWK1U : E.default.XXXX5l),
                          }),
                          (0, r.jsx)(s.EYj, {
                              variant: "text-sm/medium",
                              children: I.intl.format(L ? E.default["7fWTg4"] : E.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, p.K)({
                                          guildId: t,
                                          location: {
                                              section: b.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: b.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != l &&
                      !L &&
                      (0, r.jsx)(A.V, {
                          avatar: (0, r.jsx)(C, {
                              ...G,
                              user: d,
                              src: k,
                              avatarDecoration: T,
                              size: u._3J.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, r.jsx)(u.gyj, {
                              variant: "text-md/semibold",
                              name: v.Ay.getName(t, null, d),
                              colorString: l.colorString,
                              colorStrings: l.colorStrings,
                          }),
                          className: i()(S.Qs, S.cX),
                          message: I.intl.string(I.t["6OSasb"]),
                          decorations: (0, r.jsx)(u._Jp, {
                              color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: S.$J,
                          }),
                      }),
                  (0, r.jsx)(m.A, {
                      guild: n,
                      className: S.Qs,
                      analyticsLocation: {
                          page: b.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: b.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: a.XD.BRAND,
                      size: a.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u._Jp, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
