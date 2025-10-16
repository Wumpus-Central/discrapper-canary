n.d(t, { d: () => N });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(442837),
    c = n(481060),
    u = n(812206),
    d = n(719961),
    p = n(916069),
    f = n(591472),
    h = n(565138),
    g = n(370774),
    m = n(51596),
    b = n(592125),
    _ = n(430824),
    E = n(944486),
    O = n(914010),
    y = n(768581),
    v = n(981631),
    I = n(408491),
    C = n(388032),
    S = n(345909),
    T = n(832818);
function N(e) {
    let t,
        { withFastTravel: n, focusSectionProps: l } = e,
        N = (0, o.TH)(),
        P = (0, s.e7)([O.Z], () => O.Z.getGuildId()),
        j = (0, s.e7)([E.Z], () => E.Z.getChannelId()),
        A = (0, s.e7)([b.Z], () => b.Z.getChannel(j), [j]),
        x = null != P ? P : null == A ? void 0 : A.guild_id,
        Z = (0, s.e7)([_.Z], () => _.Z.getGuild(x), [x]),
        w = (0, p.Z)(),
        L = (0, g.D)(),
        { guildTitleIconSize: R, guildIconSize: D } = (0, d.T)({ location: "GuildTitle" }),
        { application: k, isFrameInFocusedMode: M } = (0, s.cj)([u.Z, f.Z], () => {
            let e = f.Z.getConnectedFrame();
            return {
                application: u.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: f.Z.getFrameLayoutMode() === I.U.FOCUSED,
            };
        }),
        U =
            null != k
                ? y.ZP.getApplicationIconURL({
                      id: k.id,
                      icon: k.icon,
                      bot: k.bot,
                  })
                : void 0,
        G = null;
    null != k && M
        ? ((t = k.name),
          (G = (0, r.jsx)("img", {
              className: T.appIcon,
              alt: C.intl.string(C.t.X4IxWF),
              src: U,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : L
          ? ((t = C.intl.string(C.t.HcoRu7)), (G = (0, r.jsx)(c.Dkj, { size: R })))
          : null != Z
            ? ((G = w
                  ? (0, r.jsx)(c.r7p, { size: R })
                  : (0, r.jsx)(h.Z, {
                        guild: Z,
                        size: D,
                        active: !0,
                        className: T.guildIcon,
                    })),
              (t = Z.name))
            : null != A && (A.isDM() || A.isGroupDM())
              ? ((t = C.intl.string(C.t.YUU0RE)), (G = (0, r.jsx)(c.gw7, { size: R })))
              : N.pathname.startsWith(v.Z5c.GLOBAL_DISCOVERY)
                ? ((t = C.intl.string(C.t["4nEZLi"])), (G = (0, r.jsx)(c.Jmo, { size: R })))
                : N.pathname.startsWith(v.Z5c.NITRO_HOME)
                  ? ((t = C.intl.string(C.t.Ipxkoq)), (G = (0, r.jsx)(c.SrA, { size: R })))
                  : N.pathname.startsWith(v.Z5c.COLLECTIBLES_SHOP)
                    ? ((t = C.intl.string(C.t.pWG4zc)), (G = (0, r.jsx)(c.EOn, { size: R })))
                    : N.pathname.startsWith(v.Z5c.ME_ACTIVITY)
                      ? ((t = C.intl.string(C.t.IC5Anp)), (G = (0, r.jsx)(c.g8d, { size: R })))
                      : N.pathname.startsWith(v.Z5c.ME_DMS)
                        ? ((t = C.intl.string(C.t.YUU0RE)), (G = (0, r.jsx)(c.gw7, { size: R })))
                        : N.pathname.startsWith(v.Z5c.FRIENDS)
                          ? ((t = C.intl.string(C.t.TdEu5e)), (G = (0, r.jsx)(c.iFz, { size: R })))
                          : N.pathname.startsWith(v.Z5c.FAMILY_CENTER)
                            ? ((t = C.intl.string(S.default.RZqaJi)), (G = (0, r.jsx)(c.BFJ, { size: R })))
                            : N.pathname.startsWith(v.Z5c.QUEST_HOME_V2) &&
                              ((t = C.intl.string(C.t.JALI2N)), (G = (0, r.jsx)(c.qDn, { size: R })));
    let B = i.useCallback((e) => {
            (0, m.ZN)("fast-travel");
        }, []),
        H = (null == t || "" === t) && n ? C.intl.string(C.t.ZvKwYW) : t;
    return null == H || "" === H
        ? null
        : (0, r.jsx)(c.aML, {
              "data-migration-pending": !0,
              shouldShow: n,
              "aria-label": C.intl.string(C.t["7P/+q6"]),
              tooltipContentClassName: T.navigationTooltip,
              text: (0, r.jsxs)(r.Fragment, {
                  children: [
                      C.intl.string(C.t["7P/+q6"]),
                      (0, r.jsx)(c.M2$, {
                          shortcut: ["mod", "k"],
                      }),
                  ],
              }),
              children: (e) => {
                  var t, i;
                  return (0, r.jsxs)(
                      c.P3F,
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({ className: a()(T.title, { [T.fastTravel]: n }) }, e, l)),
                      (i = i =
                          {
                              onClick: n ? B : void 0,
                              children: [
                                  G,
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      children: H,
                                  }),
                                  n &&
                                      (0, r.jsx)(c.Fbu, {
                                          className: T.fastTravelChevron,
                                          size: "xs",
                                      }),
                              ],
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      t),
                  );
              },
          });
}
