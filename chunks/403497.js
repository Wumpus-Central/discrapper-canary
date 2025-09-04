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
    O = n(914010),
    E = n(768581),
    y = n(981631),
    v = n(408491),
    I = n(388032),
    C = n(345909),
    S = n(832818);
function N(e) {
    let t,
        { selectedChannelId: n, withFastTravel: l, focusSectionProps: N } = e,
        T = (0, o.TH)(),
        j = (0, s.e7)([O.Z], () => O.Z.getGuildId()),
        P = (0, s.e7)([b.Z], () => b.Z.getChannel(n), [n]),
        x = null != j ? j : null == P ? void 0 : P.guild_id,
        A = (0, s.e7)([_.Z], () => _.Z.getGuild(x), [x]),
        Z = (0, p.Z)(),
        w = (0, g.D)(),
        { guildTitleIconSize: L, guildIconSize: R } = (0, d.T)({ location: "GuildTitle" }),
        { application: D, isFrameInFocusedMode: k } = (0, s.cj)([u.Z, f.Z], () => {
            let e = f.Z.getConnectedFrame();
            return {
                application: u.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: f.Z.getFrameLayoutMode() === v.U.FOCUSED,
            };
        }),
        M =
            null != D
                ? E.ZP.getApplicationIconURL({
                      id: D.id,
                      icon: D.icon,
                      bot: D.bot,
                  })
                : void 0,
        U = null;
    null != D && k
        ? ((t = D.name),
          (U = (0, r.jsx)("img", {
              className: S.appIcon,
              alt: I.intl.string(I.t.X4IxWF),
              src: M,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : w
          ? ((t = I.intl.string(I.t.HcoRu7)), (U = (0, r.jsx)(c.Dkj, { size: L })))
          : null != A
            ? ((U = Z
                  ? (0, r.jsx)(c.r7p, { size: L })
                  : (0, r.jsx)(h.Z, {
                        guild: A,
                        size: R,
                        active: !0,
                        className: S.guildIcon,
                    })),
              (t = A.name))
            : null != P && (P.isDM() || P.isGroupDM())
              ? ((t = I.intl.string(I.t.YUU0RE)), (U = (0, r.jsx)(c.gw7, { size: L })))
              : T.pathname.startsWith(y.Z5c.GLOBAL_DISCOVERY)
                ? ((t = I.intl.string(I.t["4nEZLi"])), (U = (0, r.jsx)(c.Jmo, { size: L })))
                : T.pathname.startsWith(y.Z5c.NITRO_HOME)
                  ? ((t = I.intl.string(I.t.Ipxkoq)), (U = (0, r.jsx)(c.SrA, { size: L })))
                  : T.pathname.startsWith(y.Z5c.COLLECTIBLES_SHOP)
                    ? ((t = I.intl.string(I.t.pWG4zc)), (U = (0, r.jsx)(c.EOn, { size: L })))
                    : T.pathname.startsWith(y.Z5c.FRIENDS)
                      ? ((t = I.intl.string(I.t.TdEu5e)), (U = (0, r.jsx)(c.iFz, { size: L })))
                      : T.pathname.startsWith(y.Z5c.FAMILY_CENTER) &&
                        ((t = I.intl.string(C.default.RZqaJi)), (U = (0, r.jsx)(c.BFJ, { size: L })));
    let G = i.useCallback((e) => {
            (0, m.ZN)("fast-travel");
        }, []),
        B = (null == t || "" === t) && l ? I.intl.string(I.t.ZvKwYW) : t;
    return null == B || "" === B
        ? null
        : (0, r.jsx)(c.ua7, {
              shouldShow: l,
              "aria-label": I.intl.string(I.t["7P/+q6"]),
              tooltipContentClassName: S.navigationTooltip,
              text: (0, r.jsxs)(r.Fragment, {
                  children: [
                      I.intl.string(I.t["7P/+q6"]),
                      (0, r.jsx)(c.M2$, {
                          shortcut: ["mod", "k"],
                      }),
                  ],
              }),
              children: (e) => {
                  var t, n;
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
                      })({ className: a()(S.title, { [S.fastTravel]: l }) }, e, N)),
                      (n = n =
                          {
                              onClick: l ? G : void 0,
                              children: [
                                  U,
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      children: B,
                                  }),
                                  l &&
                                      (0, r.jsx)(c.Fbu, {
                                          className: S.fastTravelChevron,
                                          size: "xs",
                                      }),
                              ],
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      t),
                  );
              },
          });
}
