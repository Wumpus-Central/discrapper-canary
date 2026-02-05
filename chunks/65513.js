n.d(t, { A: () => v, s: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(960488),
    o = n(323889),
    d = n(311907),
    c = n(397927),
    u = n(770178),
    A = n(975807),
    h = n(151252),
    _ = n(859703),
    m = n(341915),
    p = n(579473),
    g = n(561844),
    E = n(590202),
    f = n(415441),
    I = n(73473),
    C = n(545986),
    N = n(654487),
    T = n(985018),
    S = n(794053);
function x(e) {
    let { assetImage: t, assetVideo: n } = e;
    return null == n
        ? (0, i.jsxs)("div", {
              className: S.Tv,
              children: [
                  (0, i.jsx)("div", { className: S.Np }),
                  (0, i.jsx)("div", {
                      className: S.LO,
                      children: (0, i.jsx)("img", { className: S.LY, src: t.url, alt: t.altText }),
                  }),
                  (0, i.jsx)("div", {
                      className: l()(S.LO, S.jx, S.hw),
                      children: (0, i.jsx)("img", { className: S.LY, src: t.url, alt: "" }),
                  }),
                  (0, i.jsx)("div", {
                      className: l()(S.LO, S.jx, S.Co),
                      children: (0, i.jsx)("img", { className: S.LY, src: t.url, alt: "" }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: S.Tv,
              children: [
                  (0, i.jsx)("div", { className: S.Np }),
                  (0, i.jsx)("div", {
                      className: S.LO,
                      children: (0, i.jsx)(f.N, {
                          showImage: !1,
                          showVideo: !0,
                          imageAsset: {
                              alt: n.altText,
                              className: S.LY,
                              asset: { url: t.url, mimetype: (0, p.vm)(t.url), isAnimated: !1 },
                              assetId: t.url,
                          },
                          videoAsset: {
                              alt: n.altText,
                              className: S.LY,
                              asset: { url: n.url, mimetype: (0, p.vm)(n.url), isAnimated: !0 },
                              assetId: n.url,
                          },
                      }),
                  }),
              ],
          });
}
function v(e) {
    let { config: t, onQuestCtaClick: n } = e,
        a = (0, s.zy)(),
        p = (0, s.W6)(),
        { enabled: f } = (0, h.Z)({ location: N.rE.QUEST_HOME_DESKTOP }),
        [v, b] = r.useState("display-lg"),
        y = r.useCallback((e) => {
            e.contentRect.width < 500 ? b("display-md") : b("display-lg");
        }, []),
        L = (0, u.w)(y, [], { fireOnMount: !0 }),
        O = (0, d.bG)([_.A], () => _.A.quests);
    return (0, i.jsx)(I.R, {
        adContentId: t.campaignId,
        adCreativeType: o.p.QUEST_HOME_HEROES,
        questContent: m.uF.QUEST_HOME_TAKEOVER,
        sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(S.iE, "theme-midnight", { [S.Qx]: !f }),
                ref: (t) => {
                    (L.current = t), (e.current = t);
                },
                children: (0, i.jsxs)("div", {
                    className: S.FG,
                    children: [
                        (0, i.jsxs)(c.BJc, {
                            className: S.Qs,
                            direction: "vertical",
                            justify: "space-between",
                            children: [
                                (0, i.jsxs)(c.BJc, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        (0, i.jsx)("img", {
                                            src: t.assetSponsorImage.url,
                                            alt: t.assetSponsorImage.altText,
                                            className: S.wm,
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: S.yu,
                                            children: T.intl.string(T.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(c.BJc, {
                                    className: S.yp,
                                    gap: 16,
                                    children: [
                                        (0, i.jsxs)(c.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, i.jsx)(c.Heading, {
                                                    color: "text-strong",
                                                    variant: v,
                                                    className: S.DD,
                                                    children: t.labelTitle,
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: S.VA,
                                                    children: t.labelSubtitle,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)(c.ButtonGroup, {
                                            children: [
                                                (0, i.jsx)(c.Button, {
                                                    onClick: () => {
                                                        (0, A.A)(t.ctaSponsorUrl.url),
                                                            (0, g.vK)({
                                                                adContentId: t.campaignId,
                                                                adCreativeType: o.p.QUEST_HOME_HEROES,
                                                                questContent: m.uF.QUEST_HOME_TAKEOVER,
                                                                questContentCTA: E.Cy.OPEN_GAME_LINK,
                                                                sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER,
                                                            });
                                                    },
                                                    size: "md",
                                                    text: t.ctaSponsorUrl.title,
                                                    variant: "overlay-primary",
                                                }),
                                                t.ctaQuests.map((e, r) =>
                                                    O.has(e.questId)
                                                        ? (0, i.jsx)(
                                                              c.Button,
                                                              {
                                                                  onClick: () => {
                                                                      p.replace({ ...a, hash: void 0 }),
                                                                          n?.(),
                                                                          window.requestIdleCallback(() => {
                                                                              (0, C.navigateToQuestHome)({
                                                                                  questId: e.questId,
                                                                              });
                                                                          }),
                                                                          (0, g.vK)({
                                                                              adContentId: t.campaignId,
                                                                              adCreativeType: o.p.QUEST_HOME_HEROES,
                                                                              questContent: m.uF.QUEST_HOME_TAKEOVER,
                                                                              questContentCTA: E.Cy.VIEW_QUESTS,
                                                                              sourceQuestContent:
                                                                                  m.uF.QUEST_HOME_TAKEOVER,
                                                                          });
                                                                  },
                                                                  size: "md",
                                                                  text: e.title,
                                                                  variant: "color-mix",
                                                              },
                                                              r,
                                                          )
                                                        : null,
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(x, { assetImage: t.assetHeroImage, assetVideo: t.assetHeroVideo }),
                    ],
                }),
            }),
    });
}
function b() {
    return (0, i.jsx)("div", { className: l()(S.iE, S.FG, S.B3), children: (0, i.jsx)(c.y$y, {}) });
}
