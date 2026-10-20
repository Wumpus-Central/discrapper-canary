t.d(i, { A: () => D, n: () => R });
var n = t(477900),
    r = t(582128),
    l = t(696292),
    s = t(554146);
if (221552 == t.j) var a = t(939249);
if (221552 == t.j) var c = t(414499);
if (221552 == t.j) var d = t(661531);
if (221552 == t.j) var o = t(834730);
if (221552 == t.j) var x = t(62010);
var m = t(359549),
    u = t(627363),
    j = t(131607),
    _ = t(409626),
    h = t(692969),
    p = t(932413),
    A = t(402860),
    g = t(964195),
    E = t(774926),
    I = t(291594),
    v = t(263577),
    N = t(506326),
    C = t(868065),
    w = t(424994),
    y = t(518477),
    G = t(105292),
    f = t(273783),
    P = t(804779);
let R = [N.iq, N.Zc, N.Xy, N.$X, N.tR, N.K7, N.fg, N.sp, N.MK],
    D =
        221552 == t.j
            ? r.memo(function (e) {
                  let {
                          entry: i,
                          channel: t,
                          selected: r,
                          hovered: D,
                          isFirstApplicationOccurrence: W,
                          trackRankingItemInteraction: k,
                      } = e,
                      { largeImage: M } = (0, E.nO)({
                          entry: i,
                          showCoverImage: !1,
                          trackingSource: "memberlist_gaming_content_row",
                      }),
                      { data: S } = (0, u.YY)(i.extra.application_id),
                      b = (0, m.JC)(S) && W,
                      O = b ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
                      [U] = (0, j.kn)(O),
                      Z = (0, h.A)(
                          {
                              location: "Member List Activity Card",
                              applicationId: i.extra.application_id,
                              source: _.GameProfileSources.ActivityCard,
                              trackEntryPointImpression: !0,
                              sourceUserId: i.author_id,
                          },
                          { onOpened: () => k(w.PA.OPENED_GAME_PROFILE) },
                      ),
                      B = G.intl.formatToPlainString(G.t["9sZWVp"], { gameName: i.extra.game_name }),
                      T = (0, n.jsx)(v.V, {
                          alt: M?.text ?? M?.alt,
                          src: M?.src,
                          size: 48,
                          className: P.xn,
                          showTooltip: M?.text != null,
                      }),
                      V = (0, n.jsx)(C.ZB, { children: i.extra.game_name });
                  return (0, n.jsxs)(C.Zp, {
                      selected: r,
                      usesCardRows: !0,
                      children: [
                          (0, n.jsx)(p.A, {
                              applicationId: i.extra.application_id,
                              questContent: l.u.MEMBERS_LIST_CARD,
                              children: (e) =>
                                  (0, n.jsxs)(C.dM, {
                                      ref: e,
                                      children: [
                                          (0, n.jsxs)(C.UA, {
                                              children: [
                                                  (0, n.jsx)(C.Hp, { entry: i, channelId: t.id, guildId: t.guild_id }),
                                                  null != Z
                                                      ? (0, n.jsx)(I.A, { className: f.N4, onClick: Z, children: V })
                                                      : V,
                                                  (0, n.jsx)(N.mG, {
                                                      location: N.N5.CARD,
                                                      children: R.map((e, t) =>
                                                          (0, n.jsx)(e, { entry: i, hovered: D }, t),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                          null != Z
                                              ? (0, n.jsx)(a.D, {
                                                    className: f.vi,
                                                    onClick: Z,
                                                    "aria-label": B,
                                                    children: T,
                                                })
                                              : T,
                                      ],
                                  }),
                          }),
                          b &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(C.ik, {}),
                                      (0, n.jsxs)(C.dM, {
                                          className: f.DK,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: f.tJ,
                                                  children: [
                                                      (0, n.jsx)(c.h, { color: d.A.colors.ICON_SUBTLE, size: "xxs" }),
                                                      (0, n.jsx)(o.E, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: G.intl.string(G.t["5HiF2i"]),
                                                      }),
                                                  ],
                                              }),
                                              U === s.M.CLOUD_PLAY_NEW_BADGE &&
                                                  (0, n.jsx)(x.E, { type: "new", variant: "primary" }),
                                          ],
                                      }),
                                  ],
                              }),
                          "applicationWidgetPreview" in i &&
                              null != i.applicationWidgetPreview &&
                              (0, n.jsx)(g.F, {
                                  userId: i.author_id,
                                  widgetApplicationId: i.applicationWidgetPreview.widgetApplicationId,
                                  hasWidget: i.applicationWidgetPreview.hasWidget,
                                  className: f.AB,
                                  compactViewMore: !0,
                                  onClickViewMore: () => {
                                      (k(w.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                          (0, A.openUserProfileModal)({
                                              userId: i.author_id,
                                              tabSection: y.RP.WIDGETS,
                                          }));
                                  },
                              }),
                      ],
                  });
              })
            : null;
