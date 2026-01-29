n.d(t, {
    A: () => C,
    s: () => N,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(960488),
    o = n(323889),
    c = n(311907),
    u = n(397927),
    d = n(770178),
    p = n(975807),
    h = n(151252),
    g = n(859703),
    f = n(341915),
    m = n(579473),
    A = n(561844),
    _ = n(590202),
    b = n(415441),
    E = n(73473),
    O = n(545986),
    y = n(654487),
    I = n(985018),
    v = n(794053);

function S(e) {
    let { assetImage: t, assetVideo: n } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: v.Tv,
              children: [
                  (0, r.jsx)("div", {
                      className: v.Np,
                  }),
                  (0, r.jsx)("div", {
                      className: v.LO,
                      children: (0, r.jsx)("img", {
                          className: v.LY,
                          src: t.url,
                          alt: t.altText,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: a()(v.LO, v.jx, v.hw),
                      children: (0, r.jsx)("img", {
                          className: v.LY,
                          src: t.url,
                          alt: "",
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: a()(v.LO, v.jx, v.Co),
                      children: (0, r.jsx)("img", {
                          className: v.LY,
                          src: t.url,
                          alt: "",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: v.Tv,
              children: [
                  (0, r.jsx)("div", {
                      className: v.Np,
                  }),
                  (0, r.jsx)("div", {
                      className: v.LO,
                      children: (0, r.jsx)(b.N, {
                          showImage: !1,
                          showVideo: !0,
                          imageAsset: {
                              alt: n.altText,
                              className: v.LY,
                              asset: {
                                  url: t.url,
                                  mimetype: (0, m.vm)(t.url),
                                  isAnimated: !1,
                              },
                              assetId: t.url,
                          },
                          videoAsset: {
                              alt: n.altText,
                              className: v.LY,
                              asset: {
                                  url: n.url,
                                  mimetype: (0, m.vm)(n.url),
                                  isAnimated: !0,
                              },
                              assetId: n.url,
                          },
                      }),
                  }),
              ],
          });
}

function C(e) {
    let { config: t, onQuestCtaClick: n } = e,
        l = (0, s.zy)(),
        m = (0, s.W6)(),
        { enabled: b } = (0, h.Z)({
            location: y.rE.QUEST_HOME_DESKTOP,
        }),
        [C, N] = i.useState("display-lg"),
        T = i.useCallback((e) => {
            e.contentRect.width < 500 ? N("display-md") : N("display-lg");
        }, []),
        j = (0, d.w)(T, [], {
            fireOnMount: !0,
        }),
        x = (0, c.bG)([g.A], () => g.A.quests);
    return (0, r.jsx)(E.R, {
        adContentId: t.campaignId,
        adCreativeType: o.p.QUEST_HOME_HEROES,
        questContent: f.uF.QUEST_HOME_TAKEOVER,
        sourceQuestContent: f.uF.QUEST_HOME_TAKEOVER,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(v.iE, "theme-midnight", {
                    [v.Qx]: !b,
                }),
                ref: (t) => {
                    (j.current = t), (e.current = t);
                },
                children: (0, r.jsxs)("div", {
                    className: v.FG,
                    children: [
                        (0, r.jsxs)(u.BJc, {
                            className: v.Qs,
                            direction: "vertical",
                            justify: "space-between",
                            children: [
                                (0, r.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        (0, r.jsx)("img", {
                                            src: t.assetSponsorImage.url,
                                            alt: t.assetSponsorImage.altText,
                                            className: v.wm,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: v.yu,
                                            children: I.intl.string(I.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(u.BJc, {
                                    className: v.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(u.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(u.Heading, {
                                                    color: "text-strong",
                                                    variant: C,
                                                    className: v.DD,
                                                    children: t.labelTitle,
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: v.VA,
                                                    children: t.labelSubtitle,
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)(u.ButtonGroup, {
                                            children: [
                                                (0, r.jsx)(u.Button, {
                                                    onClick: () => {
                                                        (0, p.A)(t.ctaSponsorUrl.url),
                                                            (0, A.vK)({
                                                                adContentId: t.campaignId,
                                                                adCreativeType: o.p.QUEST_HOME_HEROES,
                                                                questContent: f.uF.QUEST_HOME_TAKEOVER,
                                                                questContentCTA: _.Cy.OPEN_GAME_LINK,
                                                                sourceQuestContent: f.uF.QUEST_HOME_TAKEOVER,
                                                            });
                                                    },
                                                    size: "md",
                                                    text: t.ctaSponsorUrl.title,
                                                    variant: "overlay-primary",
                                                }),
                                                t.ctaQuests.map((e, i) =>
                                                    x.has(e.questId)
                                                        ? (0, r.jsx)(
                                                              u.Button,
                                                              {
                                                                  onClick: () => {
                                                                      var r, i;
                                                                      m.replace(
                                                                          ((r = (function (e) {
                                                                              for (
                                                                                  var t = 1;
                                                                                  t < arguments.length;
                                                                                  t++
                                                                              ) {
                                                                                  var n =
                                                                                          null != arguments[t]
                                                                                              ? arguments[t]
                                                                                              : {},
                                                                                      r = Object.keys(n);
                                                                                  "function" ==
                                                                                      typeof Object.getOwnPropertySymbols &&
                                                                                      (r = r.concat(
                                                                                          Object.getOwnPropertySymbols(
                                                                                              n,
                                                                                          ).filter(function (e) {
                                                                                              return Object.getOwnPropertyDescriptor(
                                                                                                  n,
                                                                                                  e,
                                                                                              ).enumerable;
                                                                                          }),
                                                                                      )),
                                                                                      r.forEach(function (t) {
                                                                                          var r;
                                                                                          (r = n[t]),
                                                                                              t in e
                                                                                                  ? Object.defineProperty(
                                                                                                        e,
                                                                                                        t,
                                                                                                        {
                                                                                                            value: r,
                                                                                                            enumerable:
                                                                                                                !0,
                                                                                                            configurable:
                                                                                                                !0,
                                                                                                            writable:
                                                                                                                !0,
                                                                                                        },
                                                                                                    )
                                                                                                  : (e[t] = r);
                                                                                      });
                                                                              }
                                                                              return e;
                                                                          })({}, l)),
                                                                          (i = i =
                                                                              {
                                                                                  hash: void 0,
                                                                              }),
                                                                          Object.getOwnPropertyDescriptors
                                                                              ? Object.defineProperties(
                                                                                    r,
                                                                                    Object.getOwnPropertyDescriptors(i),
                                                                                )
                                                                              : (function (e, t) {
                                                                                    var n = Object.keys(e);
                                                                                    if (Object.getOwnPropertySymbols) {
                                                                                        var r =
                                                                                            Object.getOwnPropertySymbols(
                                                                                                e,
                                                                                            );
                                                                                        n.push.apply(n, r);
                                                                                    }
                                                                                    return n;
                                                                                })(Object(i)).forEach(function (e) {
                                                                                    Object.defineProperty(
                                                                                        r,
                                                                                        e,
                                                                                        Object.getOwnPropertyDescriptor(
                                                                                            i,
                                                                                            e,
                                                                                        ),
                                                                                    );
                                                                                }),
                                                                          r),
                                                                      ),
                                                                          null == n || n(),
                                                                          window.requestIdleCallback(() => {
                                                                              (0, O.navigateToQuestHome)({
                                                                                  questId: e.questId,
                                                                              });
                                                                          }),
                                                                          (0, A.vK)({
                                                                              adContentId: t.campaignId,
                                                                              adCreativeType: o.p.QUEST_HOME_HEROES,
                                                                              questContent: f.uF.QUEST_HOME_TAKEOVER,
                                                                              questContentCTA: _.Cy.VIEW_QUESTS,
                                                                              sourceQuestContent:
                                                                                  f.uF.QUEST_HOME_TAKEOVER,
                                                                          });
                                                                  },
                                                                  size: "md",
                                                                  text: e.title,
                                                                  variant: "color-mix",
                                                              },
                                                              i,
                                                          )
                                                        : null,
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(S, {
                            assetImage: t.assetHeroImage,
                            assetVideo: t.assetHeroVideo,
                        }),
                    ],
                }),
            }),
    });
}

function N() {
    return (0, r.jsx)("div", {
        className: a()(v.iE, v.FG, v.B3),
        children: (0, r.jsx)(u.y$y, {}),
    });
}
