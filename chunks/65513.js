n.d(t, {
    A: () => x,
    s: () => P,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(960488),
    o = n(835245),
    c = n(311907),
    u = n(397927),
    d = n(770178),
    p = n(736653),
    h = n(975807),
    g = n(151252),
    f = n(954571),
    m = n(859703),
    A = n(341915),
    _ = n(579473),
    b = n(590202),
    E = n(415441),
    O = n(545986),
    y = n(654487),
    I = n(652215),
    v = n(818348),
    S = n(985018),
    C = n(794053);

function N(e) {
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
}

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function j(e) {
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
                                  mimetype: (0, _.vm)(t.url),
                                  isAnimated: !1,
                              },
                              assetId: t.url,
                          },
                          videoAsset: {
                              alt: n.altText,
                              className: C.LY,
                              asset: {
                                  url: n.url,
                                  mimetype: (0, _.vm)(n.url),
                                  isAnimated: !0,
                              },
                              assetId: n.url,
                          },
                      }),
                  }),
              ],
          });
}

function x(e) {
    let { config: t, onQuestCtaClick: n } = e,
        l = (0, s.zy)(),
        _ = (0, s.W6)(),
        { enabled: E } = (0, g.Z)({
            location: y.rE.QUEST_HOME_DESKTOP,
        }),
        x = (0, p.Ay)(),
        [P, w] = i.useState("display-lg"),
        L = i.useCallback((e) => {
            e.contentRect.width < 500 ? w("display-md") : w("display-lg");
        }, []),
        R = (0, d.w)(L, [], {
            fireOnMount: !0,
        }),
        D = (0, c.bG)([m.A], () => m.A.quests);
    return (
        i.useEffect(() => {
            f.default.track(
                I.HAw.QUEST_CONTENT_VIEWED,
                T(N({}, (0, b.fF)(A.uF.QUEST_HOME_TAKEOVER)), {
                    quest_id: t.campaignId,
                    is_targeted: !1,
                }),
            );
        }, [t.campaignId]),
        (0, r.jsx)("div", {
            className: a()(C.iE, {
                "theme-dark": x === v.NJ.LIGHT,
                [C.Qx]: !E,
            }),
            ref: R,
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
                                                variant: P,
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
                                                        f.default.track(
                                                            I.HAw.QUEST_CONTENT_CLICKED,
                                                            N(
                                                                {
                                                                    quest_id: t.campaignId,
                                                                    cta_name: b.Cy.OPEN_GAME_LINK,
                                                                    click_id: (0, o.A)(),
                                                                    is_targeted: !1,
                                                                },
                                                                (0, b.fF)(A.uF.QUEST_HOME_TAKEOVER),
                                                            ),
                                                        );
                                                },
                                                size: "md",
                                                text: t.ctaSponsorUrl.title,
                                                variant: "overlay-primary",
                                            }),
                                            t.ctaQuests.map((e, i) =>
                                                D.has(e.questId)
                                                    ? (0, r.jsx)(
                                                          u.Button,
                                                          {
                                                              onClick: () => {
                                                                  _.replace(
                                                                      T(N({}, l), {
                                                                          hash: void 0,
                                                                      }),
                                                                  ),
                                                                      null == n || n(),
                                                                      window.requestIdleCallback(() => {
                                                                          (0, O.navigateToQuestHome)({
                                                                              questId: e.questId,
                                                                          });
                                                                      }),
                                                                      f.default.track(
                                                                          I.HAw.QUEST_CONTENT_CLICKED,
                                                                          N(
                                                                              {
                                                                                  quest_id: t.campaignId,
                                                                                  cta_name: b.Cy.VIEW_QUESTS,
                                                                                  click_id: (0, o.A)(),
                                                                                  is_targeted: !1,
                                                                              },
                                                                              (0, b.fF)(A.uF.QUEST_HOME_TAKEOVER),
                                                                          ),
                                                                      );
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
                    (0, r.jsx)(j, {
                        assetImage: t.assetHeroImage,
                        assetVideo: t.assetHeroVideo,
                    }),
                ],
            }),
        })
    );
}

function P() {
    return (0, r.jsx)("div", {
        className: a()(C.iE, C.FG, C.B3),
        children: (0, r.jsx)(u.y$y, {}),
    });
}
