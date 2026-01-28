n.d(t, {
    A: () => T,
    s: () => j,
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
    p = n(736653),
    h = n(975807),
    g = n(151252),
    f = n(859703),
    m = n(341915),
    A = n(579473),
    _ = n(561844),
    b = n(590202),
    E = n(415441),
    O = n(73473),
    y = n(545986),
    I = n(654487),
    v = n(818348),
    S = n(985018),
    C = n(794053);

function N(e) {
    let { assetImage: t, assetVideo: n } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: C.Tv,
              children: [
                  (0, r.jsx)("div", {
                      className: C.Np,
                  }),
                  (0, r.jsx)("div", {
                      className: C.LO,
                      children: (0, r.jsx)("img", {
                          className: C.LY,
                          src: t.url,
                          alt: t.altText,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: a()(C.LO, C.jx, C.hw),
                      children: (0, r.jsx)("img", {
                          className: C.LY,
                          src: t.url,
                          alt: "",
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: a()(C.LO, C.jx, C.Co),
                      children: (0, r.jsx)("img", {
                          className: C.LY,
                          src: t.url,
                          alt: "",
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: C.Tv,
              children: [
                  (0, r.jsx)("div", {
                      className: C.Np,
                  }),
                  (0, r.jsx)("div", {
                      className: C.LO,
                      children: (0, r.jsx)(E.N, {
                          showImage: !1,
                          showVideo: !0,
                          imageAsset: {
                              alt: n.altText,
                              className: C.LY,
                              asset: {
                                  url: t.url,
                                  mimetype: (0, A.vm)(t.url),
                                  isAnimated: !1,
                              },
                              assetId: t.url,
                          },
                          videoAsset: {
                              alt: n.altText,
                              className: C.LY,
                              asset: {
                                  url: n.url,
                                  mimetype: (0, A.vm)(n.url),
                                  isAnimated: !0,
                              },
                              assetId: n.url,
                          },
                      }),
                  }),
              ],
          });
}

function T(e) {
    let { config: t, onQuestCtaClick: n } = e,
        l = (0, s.zy)(),
        A = (0, s.W6)(),
        { enabled: E } = (0, g.Z)({
            location: I.rE.QUEST_HOME_DESKTOP,
        }),
        T = (0, p.Ay)(),
        [j, x] = i.useState("display-lg"),
        P = i.useCallback((e) => {
            e.contentRect.width < 500 ? x("display-md") : x("display-lg");
        }, []),
        w = (0, d.w)(P, [], {
            fireOnMount: !0,
        }),
        L = (0, c.bG)([f.A], () => f.A.quests);
    return (0, r.jsx)(O.R, {
        adContentId: t.campaignId,
        adCreativeType: o.p.TAKEOVER,
        questContent: m.uF.QUEST_HOME_TAKEOVER,
        sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(C.iE, {
                    "theme-dark": T === v.NJ.LIGHT,
                    [C.Qx]: !E,
                }),
                ref: (t) => {
                    (w.current = t), (e.current = t);
                },
                children: (0, r.jsxs)("div", {
                    className: C.FG,
                    children: [
                        (0, r.jsxs)(u.BJc, {
                            className: C.Qs,
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
                                            className: C.wm,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: C.yu,
                                            children: S.intl.string(S.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(u.BJc, {
                                    className: C.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(u.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(u.Heading, {
                                                    color: "text-strong",
                                                    variant: j,
                                                    className: C.DD,
                                                    children: t.labelTitle,
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: C.VA,
                                                    children: t.labelSubtitle,
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)(u.ButtonGroup, {
                                            children: [
                                                (0, r.jsx)(u.Button, {
                                                    onClick: () => {
                                                        (0, h.A)(t.ctaSponsorUrl.url),
                                                            (0, _.vK)({
                                                                adContentId: t.campaignId,
                                                                adCreativeType: o.p.TAKEOVER,
                                                                questContent: m.uF.QUEST_HOME_TAKEOVER,
                                                                questContentCTA: b.Cy.OPEN_GAME_LINK,
                                                                sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER,
                                                            });
                                                    },
                                                    size: "md",
                                                    text: t.ctaSponsorUrl.title,
                                                    variant: "overlay-primary",
                                                }),
                                                t.ctaQuests.map((e, i) =>
                                                    L.has(e.questId)
                                                        ? (0, r.jsx)(
                                                              u.Button,
                                                              {
                                                                  onClick: () => {
                                                                      var r, i;
                                                                      A.replace(
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
                                                                              (0, y.navigateToQuestHome)({
                                                                                  questId: e.questId,
                                                                              });
                                                                          }),
                                                                          (0, _.vK)({
                                                                              adContentId: t.campaignId,
                                                                              adCreativeType: o.p.TAKEOVER,
                                                                              questContent: m.uF.QUEST_HOME_TAKEOVER,
                                                                              questContentCTA: b.Cy.VIEW_QUESTS,
                                                                              sourceQuestContent:
                                                                                  m.uF.QUEST_HOME_TAKEOVER,
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
                        (0, r.jsx)(N, {
                            assetImage: t.assetHeroImage,
                            assetVideo: t.assetHeroVideo,
                        }),
                    ],
                }),
            }),
    });
}

function j() {
    return (0, r.jsx)("div", {
        className: a()(C.iE, C.FG, C.B3),
        children: (0, r.jsx)(u.y$y, {}),
    });
}
