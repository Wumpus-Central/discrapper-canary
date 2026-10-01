t.d(i, { A: () => D, n: () => P });
var n = t(477900),
    l = t(582128),
    r = t(696292),
    s = t(554146);
if (221552 == t.j) var a = t(939249);
if (221552 == t.j) var c = t(414499);
if (221552 == t.j) var d = t(661531);
if (221552 == t.j) var o = t(834730);
if (221552 == t.j) var x = t(812993);
var m = t(146779),
    u = t(627363),
    j = t(131607),
    _ = t(409626),
    h = t(692969),
    p = t(932413),
    A = t(402860),
    g = t(964195),
    E = t(915833),
    I = t(291594),
    v = t(263577),
    N = t(506326),
    C = t(868065),
    G = t(424994),
    R = t(518477),
    f = t(375708),
    w = t(273783),
    y = t(804779);
let P = [N.iq, N.Zc, N.Xy, N.$X, N.tR, N.K7, N.fg, N.sp, N.MK],
    D =
        221552 == t.j
            ? l.memo(function (e) {
                  let {
                          entry: i,
                          channel: t,
                          selected: l,
                          hovered: D,
                          isFirstApplicationOccurrence: W,
                          trackRankingItemInteraction: k,
                      } = e,
                      { largeImage: M } = (0, E.nO)({
                          entry: i,
                          showCoverImage: !1,
                          trackingSource: "memberlist_gaming_content_row",
                      }),
                      { data: b } = (0, u.YY)(i.extra.application_id),
                      O = (0, m.JC)(b) && W,
                      S = O ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
                      [U] = (0, j.kn)(S),
                      Z = (0, h.A)(
                          {
                              location: "Member List Activity Card",
                              applicationId: i.extra.application_id,
                              source: _.GameProfileSources.ActivityCard,
                              trackEntryPointImpression: !0,
                              sourceUserId: i.author_id,
                          },
                          { onOpened: () => k(G.PA.OPENED_GAME_PROFILE) },
                      ),
                      B = f.intl.formatToPlainString(f.t["9sZWVp"], { gameName: i.extra.game_name }),
                      L = (0, n.jsx)(v.V, {
                          alt: M?.text ?? M?.alt,
                          src: M?.src,
                          size: 48,
                          className: y.xn,
                          showTooltip: M?.text != null,
                      }),
                      T = (0, n.jsx)(C.ZB, { children: i.extra.game_name });
                  return (0, n.jsxs)(C.Zp, {
                      selected: l,
                      usesCardRows: !0,
                      children: [
                          (0, n.jsx)(p.A, {
                              applicationId: i.extra.application_id,
                              questContent: r.u.MEMBERS_LIST_CARD,
                              children: (e) =>
                                  (0, n.jsxs)(C.dM, {
                                      ref: e,
                                      children: [
                                          (0, n.jsxs)(C.UA, {
                                              children: [
                                                  (0, n.jsx)(C.Hp, { entry: i, channelId: t.id, guildId: t.guild_id }),
                                                  null != Z
                                                      ? (0, n.jsx)(I.A, { className: w.N4, onClick: Z, children: T })
                                                      : T,
                                                  (0, n.jsx)(N.mG, {
                                                      location: N.N5.CARD,
                                                      children: P.map((e, t) =>
                                                          (0, n.jsx)(e, { entry: i, hovered: D }, t),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                          null != Z
                                              ? (0, n.jsx)(a.D, {
                                                    className: w.vi,
                                                    onClick: Z,
                                                    "aria-label": B,
                                                    children: L,
                                                })
                                              : L,
                                      ],
                                  }),
                          }),
                          O &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(C.ik, {}),
                                      (0, n.jsxs)(C.dM, {
                                          className: w.DK,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: w.tJ,
                                                  children: [
                                                      (0, n.jsx)(c.h, { color: d.A.colors.ICON_SUBTLE, size: "xxs" }),
                                                      (0, n.jsx)(o.E, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: f.intl.string(f.t["5HiF2i"]),
                                                      }),
                                                  ],
                                              }),
                                              U === s.M.CLOUD_PLAY_NEW_BADGE &&
                                                  (0, n.jsx)(x.Lp, {
                                                      text: f.intl.string(f.t.y2b7CA),
                                                      color: d.A.colors.BACKGROUND_BRAND.css,
                                                  }),
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
                                  className: w.AB,
                                  compactViewMore: !0,
                                  onClickViewMore: () => {
                                      (k(G.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                          (0, A.openUserProfileModal)({
                                              userId: i.author_id,
                                              tabSection: R.RP.WIDGETS,
                                          }));
                                  },
                              }),
                      ],
                  });
              })
            : null;
