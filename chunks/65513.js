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
    o = n(835245),
    c = n(311907),
    u = n(397927),
    d = n(770178),
    p = n(736653),
    f = n(975807),
    h = n(151252),
    A = n(954571),
    g = n(216456),
    m = n(859703),
    b = n(341915),
    _ = n(545986),
    E = n(654487),
    O = n(652215),
    y = n(818348),
    I = n(985018),
    v = n(794053);

function S(e) {
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

function C(e, t) {
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

function N(e) {
    let { asset: t } = e;
    if ("image" === t.assetType)
        return (0, r.jsxs)("div", {
            className: v.km,
            children: [
                (0, r.jsx)("div", {
                    className: v.Np,
                }),
                (0, r.jsx)("div", {
                    className: v.c8,
                    children: (0, r.jsx)("img", {
                        className: v.Sl,
                        src: t.url,
                        alt: t.altText,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: a()(v.c8, v.UE, v.gv),
                    children: (0, r.jsx)("img", {
                        className: v.Sl,
                        src: t.url,
                        alt: "",
                    }),
                }),
                (0, r.jsx)("div", {
                    className: a()(v.c8, v.UE, v.nd),
                    children: (0, r.jsx)("img", {
                        className: v.Sl,
                        src: t.url,
                        alt: "",
                    }),
                }),
            ],
        });
}

function T(e) {
    let { config: t, onQuestCtaClick: n } = e,
        l = (0, s.zy)(),
        T = (0, s.W6)(),
        { enabled: j } = (0, h.Z)({
            location: E.rE.QUEST_HOME_DESKTOP,
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
            A.default.track(
                O.HAw.QUEST_CONTENT_VIEWED,
                C(S({}, (0, g.fF)(b.uF.QUEST_HOME_TAKEOVER)), {
                    quest_id: t.campaignId,
                    is_targeted: !1,
                }),
            );
        }, [t.campaignId]),
        (0, r.jsx)("div", {
            className: a()(v.iE, {
                "theme-dark": x === y.NJ.LIGHT,
                [v.Qx]: !j,
            }),
            ref: R,
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
                                                variant: P,
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
                                                    (0, f.A)(t.ctaSponsorUrl.url),
                                                        A.default.track(
                                                            O.HAw.QUEST_CONTENT_CLICKED,
                                                            S(
                                                                {
                                                                    quest_id: t.campaignId,
                                                                    cta_name: g.Cy.OPEN_GAME_LINK,
                                                                    click_id: (0, o.A)(),
                                                                    is_targeted: !1,
                                                                },
                                                                (0, g.fF)(b.uF.QUEST_HOME_TAKEOVER),
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
                                                                  T.replace(
                                                                      C(S({}, l), {
                                                                          hash: void 0,
                                                                      }),
                                                                  ),
                                                                      null == n || n(),
                                                                      window.requestIdleCallback(() => {
                                                                          (0, _.navigateToQuestHome)({
                                                                              questId: e.questId,
                                                                          });
                                                                      }),
                                                                      A.default.track(
                                                                          O.HAw.QUEST_CONTENT_CLICKED,
                                                                          S(
                                                                              {
                                                                                  quest_id: t.campaignId,
                                                                                  cta_name: g.Cy.LEARN_MORE,
                                                                                  click_id: (0, o.A)(),
                                                                                  is_targeted: !1,
                                                                              },
                                                                              (0, g.fF)(b.uF.QUEST_HOME_TAKEOVER),
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
                    (0, r.jsx)(N, {
                        asset: t.assetHeroImage,
                    }),
                ],
            }),
        })
    );
}

function j() {
    return (0, r.jsx)("div", {
        className: a()(v.iE, v.FG, v.B3),
        children: (0, r.jsx)(u.y$y, {}),
    });
}
