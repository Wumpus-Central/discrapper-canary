n.d(t, { d: () => j });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(828700),
    s = n(442837),
    c = n(681715),
    u = n(481060),
    d = n(812206),
    p = n(719961),
    f = n(916069),
    g = n(591472),
    m = n(565138),
    h = n(370774),
    b = n(51596),
    _ = n(592125),
    E = n(430824),
    O = n(944486),
    v = n(914010),
    y = n(768581),
    I = n(981631),
    C = n(408491),
    S = n(388032),
    T = n(517319),
    N = n(417040);
function j(e) {
    var t, n;
    let l,
        { withFastTravel: j, focusSectionProps: P } = e,
        x = (0, o.TH)(),
        A = (0, s.e7)([v.Z], () => v.Z.getGuildId()),
        Z = (0, s.e7)([O.Z], () => O.Z.getChannelId()),
        w = (0, s.e7)([_.Z], () => _.Z.getChannel(Z), [Z]),
        L = null != A ? A : null == w ? void 0 : w.guild_id,
        R = (0, s.e7)([E.Z], () => E.Z.getGuild(L), [L]),
        D = (0, f.Z)(),
        M = (0, h.D)(),
        { guildTitleIconSize: k, guildIconSize: U } = (0, p.T)({ location: "GuildTitle" }),
        { application: G, isFrameInFocusedMode: B } = (0, s.cj)([d.Z, g.Z], () => {
            let e = g.Z.getConnectedFrame();
            return {
                application: d.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: g.Z.getFrameLayoutMode() === C.U.FOCUSED,
            };
        }),
        H =
            null != G
                ? y.ZP.getApplicationIconURL({
                      id: G.id,
                      icon: G.icon,
                      bot: G.bot,
                  })
                : void 0,
        V = null;
    null != G && B
        ? ((l = G.name),
          (V = (0, r.jsx)("img", {
              className: N.appIcon,
              alt: S.intl.string(S.t.X4IxWL),
              src: H,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : M
          ? ((l = S.intl.string(S.t.HcoRu0)), (V = (0, r.jsx)(u.Dkj, { size: k })))
          : null != R
            ? ((V = D
                  ? (0, r.jsx)(u.r7p, { size: k })
                  : (0, r.jsx)(m.Z, {
                        guild: R,
                        size: U,
                        active: !0,
                        className: N.guildIcon,
                    })),
              (l = R.name))
            : null != w && (w.isDM() || w.isGroupDM())
              ? ((l = S.intl.string(S.t.YUU0RF)), (V = (0, r.jsx)(u.gw7, { size: k })))
              : x.pathname.startsWith(I.Z5c.ICYMI)
                ? ((l = S.intl.string(S.t["jnXV/V"])), (V = (0, r.jsx)(u.qOE, { size: k })))
                : x.pathname.startsWith(I.Z5c.GLOBAL_DISCOVERY)
                  ? ((l = S.intl.string(S.t["4nEZLk"])), (V = (0, r.jsx)(u.Jmo, { size: k })))
                  : x.pathname.startsWith(I.Z5c.NITRO_HOME)
                    ? ((l = S.intl.string(S.t.Ipxkog)), (V = (0, r.jsx)(u.SrA, { size: k })))
                    : x.pathname.startsWith(I.Z5c.COLLECTIBLES_SHOP)
                      ? ((l = S.intl.string(S.t.pWG4ze)), (V = (0, r.jsx)(u.EOn, { size: k })))
                      : x.pathname.startsWith(I.Z5c.FRIENDS)
                        ? ((l = S.intl.string(S.t.TdEu5X)), (V = (0, r.jsx)(u.iFz, { size: k })))
                        : x.pathname.startsWith(I.Z5c.FAMILY_CENTER)
                          ? ((l = S.intl.string(T.default.RZqaJn)), (V = (0, r.jsx)(u.BFJ, { size: k })))
                          : x.pathname.startsWith(I.Z5c.QUEST_HOME_V2) &&
                            ((l = S.intl.string(S.t.JALI2K)), (V = (0, r.jsx)(u.qDn, { size: k })));
    let F = i.useCallback((e) => {
            (0, b.ZN)("fast-travel");
        }, []),
        z = (null == l || "" === l) && j ? S.intl.string(S.t.ZvKwYa) : l;
    return null == z || "" === z
        ? null
        : (0, r.jsx)(c.u, {
              shouldShow: j,
              ariaHidden: !0,
              text: S.intl.string(S.t["7P/+qz"]),
              keyboardShortcut: ["mod", "k"],
              children: (0, r.jsxs)(
                  u.P3F,
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
                  })(
                      {
                          className: a()(N.title, { [N.fastTravel]: j }),
                          "aria-label": S.intl.string(S.t["7P/+qz"]),
                      },
                      P,
                  )),
                  (n = n =
                      {
                          onClick: j ? F : void 0,
                          children: [
                              V,
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  lineClamp: 1,
                                  children: z,
                              }),
                              j &&
                                  (0, r.jsx)(u.Fbu, {
                                      className: N.fastTravelChevron,
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
              ),
          });
}
