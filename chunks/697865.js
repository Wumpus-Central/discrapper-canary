n.d(t, { A: () => w });
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(158954),
    o = n(311907),
    a = n(421380),
    u = n(397927),
    d = n(730134),
    c = n(775602),
    p = n(509536),
    _ = n(721923),
    m = n(29086),
    A = n(854627),
    f = n(696451),
    g = n(317525),
    x = n(71393),
    v = n(287809),
    h = n(562153),
    E = n(837921),
    I = n(652215),
    j = n(853513),
    b = n(985018),
    S = n(32746);
let C = E.Ay.getEnableHardwareAcceleration() ? u.JsQ : d.A;
function w(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        i = (0, o.bG)([g.A], () => g.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        d = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        E = d?.id,
        w = (0, o.bG)([f.Ay], () => (null != E ? f.Ay.getMember(t, E) : void 0), [E, t]),
        y = w?.premiumSince != null,
        L = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: N,
            eventHandlers: R,
        } = (0, A.A)({ userId: d?.id, guildId: t, size: u._3J.SIZE_40, animateOnHover: !L });
    return null == n || null == w || null == d
        ? null
        : (0, r.jsxs)("div", {
              className: S.ft,
              children: [
                  (0, r.jsxs)("div", {
                      className: S.FS,
                      children: [
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/semibold",
                              children: b.intl.string(y ? j.default.KSWK1U : j.default.XXXX5l),
                          }),
                          (0, r.jsx)(s.EYj, {
                              variant: "text-sm/medium",
                              children: b.intl.format(y ? j.default["7fWTg4"] : j.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, p.K4)({
                                          guildId: t,
                                          location: {
                                              section: I.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: I.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !y &&
                      (0, r.jsx)(m.V, {
                          avatar: (0, r.jsx)(C, {
                              ...R,
                              user: d,
                              src: N,
                              avatarDecoration: k,
                              size: u._3J.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, r.jsx)(u.gyj, {
                              variant: "text-md/semibold",
                              name: h.Ay.getName(t, null, d),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: l()(S.Qs, S.cX),
                          message: b.intl.string(b.t["6OSasb"]),
                          decorations: (0, r.jsx)(u._Jp, {
                              color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: S.$J,
                          }),
                      }),
                  (0, r.jsx)(_.A, {
                      guild: n,
                      className: S.Qs,
                      analyticsLocation: {
                          page: I.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: I.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: a.XD.BRAND,
                      size: a.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u._Jp, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
