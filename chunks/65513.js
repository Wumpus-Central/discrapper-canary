n.d(t, { A: () => y, s: () => L });
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
    I = n(415441),
    f = n(73473),
    C = n(545986),
    N = n(796577),
    T = n(654487),
    S = n(49999),
    x = n(985018),
    v = n(794053);
function b(e) {
    let { assetImage: t, assetVideo: n } = e;
    return null == n
        ? (0, i.jsxs)("div", {
              className: v.Tv,
              children: [
                  (0, i.jsx)("div", { className: v.Np }),
                  (0, i.jsx)("div", {
                      className: v.LO,
                      children: (0, i.jsx)("img", { className: v.LY, src: t.url, alt: t.altText }),
                  }),
                  (0, i.jsx)("div", {
                      className: l()(v.LO, v.jx, v.hw),
                      children: (0, i.jsx)("img", { className: v.LY, src: t.url, alt: "" }),
                  }),
                  (0, i.jsx)("div", {
                      className: l()(v.LO, v.jx, v.Co),
                      children: (0, i.jsx)("img", { className: v.LY, src: t.url, alt: "" }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: v.Tv,
              children: [
                  (0, i.jsx)("div", { className: v.Np }),
                  (0, i.jsx)("div", {
                      className: v.LO,
                      children: (0, i.jsx)(I.N, {
                          showImage: !1,
                          showVideo: !0,
                          imageAsset: {
                              alt: n.altText,
                              className: v.LY,
                              asset: { url: t.url, mimetype: (0, p.vm)(t.url), isAnimated: !1 },
                              assetId: t.url,
                          },
                          videoAsset: {
                              alt: n.altText,
                              className: v.LY,
                              asset: { url: n.url, mimetype: (0, p.vm)(n.url), isAnimated: !0 },
                              assetId: n.url,
                          },
                      }),
                  }),
              ],
          });
}
function y(e) {
    let { config: t, onQuestCtaClick: n } = e,
        a = (0, s.zy)(),
        p = (0, s.W6)(),
        { enabled: I } = (0, h.Z)({ location: T.rE.QUEST_HOME_DESKTOP }),
        [y, L] = r.useState("display-lg"),
        O = r.useCallback((e) => {
            e.contentRect.width < 500 ? L("display-md") : L("display-lg");
        }, []),
        R = (0, u.w)(O, [], { fireOnMount: !0 }),
        P = (0, d.bG)([_.A], () => _.A.quests),
        { dismissTakeoverContent: j } = (0, N.j)();
    return (
        r.useEffect(() => {
            j(S.i.INDIRECT_ACTION);
        }, [j]),
        (0, i.jsx)(f.R, {
            adContentId: t.campaignId,
            adCreativeType: o.p.QUEST_HOME_HEROES,
            questContent: m.uF.QUEST_HOME_TAKEOVER,
            sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: l()(v.iE, "theme-midnight", { [v.Qx]: !I }),
                    ref: (t) => {
                        (R.current = t), (e.current = t);
                    },
                    children: (0, i.jsxs)("div", {
                        className: v.FG,
                        children: [
                            (0, i.jsxs)(c.BJc, {
                                className: v.Qs,
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
                                                className: v.wm,
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                className: v.yu,
                                                children: x.intl.string(x.t.OJjFi5),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.BJc, {
                                        className: v.yp,
                                        gap: 16,
                                        children: [
                                            (0, i.jsxs)(c.BJc, {
                                                gap: 8,
                                                children: [
                                                    (0, i.jsx)(c.Heading, {
                                                        color: "text-strong",
                                                        variant: y,
                                                        className: v.DD,
                                                        children: t.labelTitle,
                                                    }),
                                                    (0, i.jsx)(c.Text, {
                                                        color: "text-strong",
                                                        variant: "text-md/normal",
                                                        className: v.VA,
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
                                                        P.has(e.questId)
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
                                                                                  questContent:
                                                                                      m.uF.QUEST_HOME_TAKEOVER,
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
                            (0, i.jsx)(b, { assetImage: t.assetHeroImage, assetVideo: t.assetHeroVideo }),
                        ],
                    }),
                }),
        })
    );
}
function L() {
    return (0, i.jsx)("div", { className: l()(v.iE, v.FG, v.B3), children: (0, i.jsx)(c.y$y, {}) });
}
