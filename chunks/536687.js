n.r(t), n.d(t, { default: () => V }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(754700),
    u = n(442837),
    d = n(28664),
    m = n(780384),
    p = n(755721),
    f = n(481060),
    v = n(607070),
    E = n(210887),
    g = n(617136),
    O = n(915750),
    b = n(509212),
    h = n(113434),
    S = n(569984),
    C = n(497505),
    _ = n(475595),
    y = n(566078),
    j = n(164495),
    x = n(472144),
    T = n(602667),
    D = n(644646),
    P = n(604162),
    R = n(747717),
    I = n(963123),
    w = n(281055),
    N = n(46140),
    k = n(981631),
    L = n(388032),
    A = n(430799);
function M(e) {
    var t, n, l, a, S, T, w;
    let {
            transitionState: M,
            onClose: V,
            quest: Z,
            autoplay: B,
            videoSessionId: F,
            impressionRef: U,
            parentModalOpenStartClockTime: q,
            sourceQuestContent: H,
        } = e,
        Y = (0, b.il)(Z),
        Q = (0, h.tP)(Z),
        G = (0, u.e7)([E.Z], () => E.Z.getState().theme),
        W = (0, m.wj)(G) ? k.BRd.DARK : k.BRd.LIGHT,
        z = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        K = (0, O.aM)(),
        [X, J] = o.useState(Y.progressSeconds),
        [$, ee] = o.useState(!1),
        { completedRatio: et, completedRatioDisplay: en } = (0, h.I)(Z),
        [er, eo] = (0, P.G6)(L.intl.string(L.t.RDE0Sc), L.intl.string(L.t["+5kSoW"]), 1700),
        el = null != (0, b.LM)(Z.config),
        [ei, ea] = o.useState(!1),
        es = o.useRef(null),
        ec = (0, b.vB)(Z.config),
        eu =
            (null == (t = Z.userStatus) ? void 0 : t.claimedAt) != null
                ? el
                    ? L.intl.string(L.t.WYchde)
                    : L.intl.string(L.t.vTgCWx)
                : L.intl.string(L.t.cfY4PE),
        ed = o.useCallback(() => {
            ec &&
                ((0, b.f2)(Z.id, {
                    content: C.jn.VIDEO_MODAL,
                    ctaContent: g.jZ.COPY_QUEST_URL,
                    impressionId: K,
                    sourceQuestContent: H,
                }),
                eo());
        }, [K, ec, Z.id, eo, H]),
        em = o.useCallback(() => {
            ec &&
                ((0, b.f2)(Z.id, {
                    content: C.jn.VIDEO_MODAL,
                    ctaContent: g.jZ.COPY_QUEST_URL,
                    impressionId: K,
                    sourceQuestContent: H,
                }),
                (0, f.showToast)((0, f.createToast)(L.intl.string(L.t["+5kSoW"]), f.ToastType.SUCCESS)),
                ea(!0),
                null != es.current && clearTimeout(es.current),
                (es.current = setTimeout(() => {
                    ea(!1);
                }, 1700)));
        }, [K, ec, Z.id, H]);
    o.useEffect(
        () => () => {
            null != es.current && clearTimeout(es.current);
        },
        [],
    );
    let ep = async () => {
            if (null != V) {
                let e = y.r.build(Z.config).ctaLink;
                (await (0, P.PW)(e)) && V();
            }
            (0, b.nc)(Z, {
                content: C.jn.VIDEO_MODAL,
                ctaContent: g.jZ.OPEN_GAME_LINK,
                impressionId: K,
                sourceQuestContent: H,
            });
        },
        ef = () => {
            ((0, b.xN)(Z.config) || (0, b.Bg)(Z.config)) && V();
        },
        ev = o.useMemo(() => y.r.build(Z.config).defaultRewardName, [Z]),
        eE = L.intl.formatToPlainString(L.t["12IWP2"], { rewardName: ev }),
        eg = null == (l = Z.config.taskConfigV2) || null == (n = l.tasks) ? void 0 : n[c.X.WATCH_VIDEO];
    s()(null != eg, "VideoQuestModal: videoTask must not be null");
    let eO = (0, b.ZS)(eg),
        eb = "portrait" === eO;
    return (0, r.jsx)(f.Y0X, {
        "data-migration-pending": !0,
        transitionState: M,
        size: f.CgR.DYNAMIC,
        className: i()(A.modalRoot, {
            [A.modalRootLandscape]: "landscape" === eO,
            [A.modalRootPortrait]: "portrait" === eO,
        }),
        parentComponent: "Modal",
        children: (0, r.jsx)("div", {
            ref: (e) => {
                U.current = e;
            },
            className: A.modalBg,
            children: (0, r.jsx)("div", {
                className: A.modalBody,
                children: (0, r.jsxs)("div", {
                    className: A.modalContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.contentHeader,
                            children: [
                                (0, r.jsxs)(f.P3F, {
                                    className: A.contentHeaderGameInfo,
                                    onClick: ep,
                                    children: [
                                        (0, r.jsx)("img", {
                                            alt: Z.config.messages.gameTitle,
                                            className: i()(A.contentHeaderLogotype, A.accentOnHover),
                                            src: (0, _.fh)(Z, _.eC.LOGO_TYPE, W).url,
                                        }),
                                        (0, r.jsx)(R.Z, {}),
                                        (0, r.jsxs)("div", {
                                            className: A.questHeading,
                                            children: [
                                                (0, r.jsx)(f.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: L.intl.format(L.t.EQa7os, {
                                                        questName: Z.config.messages.questName,
                                                    }),
                                                }),
                                                (0, r.jsx)(f.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "header-secondary",
                                                    children: Z.config.messages.gameTitle,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                !Q &&
                                    (0, r.jsx)(d.u, {
                                        position: "left",
                                        text: eE,
                                        onTooltipShow: () => {
                                            ee(!0);
                                        },
                                        onTooltipHide: () => {
                                            ee(!1);
                                        },
                                        children: (0, r.jsx)(f.P3F, {
                                            className: A.progressCont,
                                            children: (0, r.jsx)(x.Z, {
                                                quest: Z,
                                                size: 48,
                                                percentComplete: et,
                                                percentCompleteText: $ ? en : void 0,
                                                percentCompleteTextVariant: "text-sm/medium",
                                                children: (0, r.jsx)(D.Z, {
                                                    className: A.questProgressRewardTile,
                                                    quest: Z,
                                                    questContent: C.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: N.dr.VIDEO_MODAL,
                                                    sourceQuestContent: H,
                                                }),
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(I.Z, {
                            quest: Z,
                            videoTask: eg,
                            videoSessionId: F,
                            parentTransitionState: M,
                            onOptimisticProgressUpdate: J,
                            autoplay: B,
                            performanceClockStartTime: q,
                            onClose: V,
                            sourceQuestContent: H,
                            orientation: eO,
                        }),
                        eb
                            ? (0, r.jsxs)("div", {
                                  className: i()(A.contentFooterPortrait, A.contentFooterButtonCont),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: A.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(f.Button, {
                                              variant: "secondary",
                                              text: L.intl.string(L.t.nL0WvC),
                                              onClick: ep,
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: A.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(j.i, {
                                              className: A.portraitCtaBtn,
                                              size: p.zx.Sizes.MEDIUM,
                                              quest: Z,
                                              useReducedMotion: z,
                                              isExpanded: (null == (a = Z.userStatus) ? void 0 : a.completedAt) != null,
                                              disabled: (null == (S = Z.userStatus) ? void 0 : S.completedAt) == null,
                                              ctaLabel: eu,
                                              onClick: ef,
                                              questContent: C.jn.VIDEO_MODAL,
                                              sourceQuestContent: H,
                                          }),
                                      }),
                                      ec &&
                                          (ei
                                              ? (0, r.jsx)(f.hU, {
                                                    variant: "active",
                                                    icon: f.owK,
                                                    onClick: em,
                                                    "aria-label": L.intl.string(L.t.RDE0Sc),
                                                })
                                              : (0, r.jsx)(d.u, {
                                                    text: L.intl.string(L.t.WqhZss),
                                                    children: (0, r.jsx)(f.hU, {
                                                        variant: "secondary",
                                                        icon: f.TIy,
                                                        "aria-label": L.intl.string(L.t.RDE0Sc),
                                                        onClick: em,
                                                    }),
                                                })),
                                  ],
                              })
                            : (0, r.jsxs)("div", {
                                  className: A.contentFooter,
                                  children: [
                                      (0, r.jsx)(f.Button, {
                                          variant: "secondary",
                                          text: L.intl.string(L.t.cpT0Cq),
                                          onClick: V,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: A.contentFooterButtonCont,
                                          children: [
                                              ec &&
                                                  (0, r.jsx)(f.Button, {
                                                      variant: "secondary",
                                                      text: er,
                                                      onClick: ed,
                                                  }),
                                              (0, r.jsx)(j.i, {
                                                  className: A.claimBtn,
                                                  size: p.zx.Sizes.MEDIUM,
                                                  quest: Z,
                                                  useReducedMotion: z,
                                                  isExpanded:
                                                      (null == (T = Z.userStatus) ? void 0 : T.completedAt) != null,
                                                  disabled:
                                                      (null == (w = Z.userStatus) ? void 0 : w.completedAt) == null,
                                                  ctaLabel: eu,
                                                  onClick: ef,
                                                  questContent: C.jn.VIDEO_MODAL,
                                                  sourceQuestContent: H,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                    ],
                }),
            }),
        }),
    });
}
function V(e) {
    var { questId: t, overrideQuest: n, autoplay: o, openStartClockTime: l } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
    let a = (0, u.e7)([S.Z], () => S.Z.getQuest(t)),
        s = null != n ? n : a;
    return null != s
        ? (0, r.jsx)(T.A, {
              questOrQuests: s,
              questContent: C.jn.VIDEO_MODAL,
              minViewTimeSeconds: w.zw,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: i.sourceQuestContent,
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      M,
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
                      })({}, i)),
                      (n = n =
                          {
                              parentModalOpenStartClockTime: l,
                              impressionRef: e,
                              quest: s,
                              autoplay: o,
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
          })
        : null;
}
