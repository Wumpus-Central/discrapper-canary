n.d(t, { d: () => N });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(828700),
    o = n(442837),
    c = n(481060),
    u = n(812206),
    d = n(719961),
    p = n(916069),
    f = n(591472),
    g = n(565138),
    h = n(370774),
    m = n(51596),
    _ = n(592125),
    b = n(430824),
    E = n(944486),
    O = n(914010),
    v = n(768581),
    y = n(981631),
    I = n(408491),
    C = n(388032),
    S = n(225753),
    T = n(713724);
function N(e) {
    let t,
        { withFastTravel: n, focusSectionProps: l } = e,
        N = (0, s.TH)(),
        j = (0, o.e7)([O.Z], () => O.Z.getGuildId()),
        P = (0, o.e7)([E.Z], () => E.Z.getChannelId()),
        x = (0, o.e7)([_.Z], () => _.Z.getChannel(P), [P]),
        A = null != j ? j : null == x ? void 0 : x.guild_id,
        Z = (0, o.e7)([b.Z], () => b.Z.getGuild(A), [A]),
        w = (0, p.Z)(),
        L = (0, h.D)(),
        { guildTitleIconSize: R, guildIconSize: D } = (0, d.T)({ location: "GuildTitle" }),
        { application: M, isFrameInFocusedMode: k } = (0, o.cj)([u.Z, f.Z], () => {
            let e = f.Z.getConnectedFrame();
            return {
                application: u.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: f.Z.getFrameLayoutMode() === I.U.FOCUSED,
            };
        }),
        U =
            null != M
                ? v.ZP.getApplicationIconURL({
                      id: M.id,
                      icon: M.icon,
                      bot: M.bot,
                  })
                : void 0,
        G = null;
    null != M && k
        ? ((t = M.name),
          (G = (0, r.jsx)("img", {
              className: T.appIcon,
              alt: C.intl.string(C.t.X4IxWL),
              src: U,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : L
          ? ((t = C.intl.string(C.t.HcoRu0)), (G = (0, r.jsx)(c.Dkj, { size: R })))
          : null != Z
            ? ((G = w
                  ? (0, r.jsx)(c.r7p, { size: R })
                  : (0, r.jsx)(g.Z, {
                        guild: Z,
                        size: D,
                        active: !0,
                        className: T.guildIcon,
                    })),
              (t = Z.name))
            : null != x && (x.isDM() || x.isGroupDM())
              ? ((t = C.intl.string(C.t.YUU0RF)), (G = (0, r.jsx)(c.gw7, { size: R })))
              : N.pathname.startsWith(y.Z5c.ICYMI)
                ? ((t = C.intl.string(C.t["jnXV/V"])), (G = (0, r.jsx)(c.qOE, { size: R })))
                : N.pathname.startsWith(y.Z5c.GLOBAL_DISCOVERY)
                  ? ((t = C.intl.string(C.t["4nEZLk"])), (G = (0, r.jsx)(c.Jmo, { size: R })))
                  : N.pathname.startsWith(y.Z5c.NITRO_HOME)
                    ? ((t = C.intl.string(C.t.Ipxkog)), (G = (0, r.jsx)(c.SrA, { size: R })))
                    : N.pathname.startsWith(y.Z5c.COLLECTIBLES_SHOP)
                      ? ((t = C.intl.string(C.t.pWG4ze)), (G = (0, r.jsx)(c.EOn, { size: R })))
                      : N.pathname.startsWith(y.Z5c.ME_ACTIVITY)
                        ? ((t = C.intl.string(C.t.IC5Ann)), (G = (0, r.jsx)(c.g8d, { size: R })))
                        : N.pathname.startsWith(y.Z5c.ME_DMS)
                          ? ((t = C.intl.string(C.t.YUU0RF)), (G = (0, r.jsx)(c.gw7, { size: R })))
                          : N.pathname.startsWith(y.Z5c.FRIENDS)
                            ? ((t = C.intl.string(C.t.TdEu5X)), (G = (0, r.jsx)(c.iFz, { size: R })))
                            : N.pathname.startsWith(y.Z5c.FAMILY_CENTER)
                              ? ((t = C.intl.string(S.default.RZqaJn)), (G = (0, r.jsx)(c.BFJ, { size: R })))
                              : N.pathname.startsWith(y.Z5c.QUEST_HOME_V2) &&
                                ((t = C.intl.string(C.t.JALI2K)), (G = (0, r.jsx)(c.qDn, { size: R })));
    let B = i.useCallback((e) => {
            (0, m.ZN)("fast-travel");
        }, []),
        H = (null == t || "" === t) && n ? C.intl.string(C.t.ZvKwYa) : t;
    return null == H || "" === H
        ? null
        : (0, r.jsx)(c.aML, {
              "data-migration-pending": !0,
              shouldShow: n,
              "aria-label": C.intl.string(C.t["7P/+qz"]),
              tooltipContentClassName: T.navigationTooltip,
              text: (0, r.jsxs)(r.Fragment, {
                  children: [
                      C.intl.string(C.t["7P/+qz"]),
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
