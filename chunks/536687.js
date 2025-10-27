n.r(t), n.d(t, { default: () => V }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(512722),
    s = n.n(a),
    c = n(754700),
    u = n(442837),
    d = n(28664),
    m = n(780384),
    f = n(755721),
    p = n(481060),
    v = n(607070),
    g = n(210887),
    E = n(617136),
    b = n(915750),
    O = n(509212),
    h = n(113434),
    C = n(569984),
    S = n(497505),
    _ = n(475595),
    y = n(566078),
    j = n(164495),
    x = n(472144),
    T = n(602667),
    D = n(644646),
    P = n(604162),
    R = n(747717),
    I = n(963123),
    N = n(281055),
    k = n(46140),
    w = n(981631),
    A = n(388032),
    L = n(430799);
function M(e) {
    var t, n, o, a, C, T, N;
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
        Y = (0, O.il)(Z),
        Q = (0, h.tP)(Z),
        G = (0, u.e7)([g.Z], () => g.Z.getState().theme),
        W = (0, m.wj)(G) ? w.BRd.DARK : w.BRd.LIGHT,
        z = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        K = (0, b.aM)(),
        [X, J] = l.useState(Y.progressSeconds),
        [$, ee] = l.useState(!1),
        { completedRatio: et, completedRatioDisplay: en } = (0, h.I)(Z),
        [er, el] = (0, P.G6)(A.intl.string(A.t.RDE0Sc), A.intl.string(A.t["+5kSoW"]), 1700),
        eo = null != (0, O.LM)(Z.config),
        [ei, ea] = l.useState(!1),
        es = l.useRef(null),
        ec = (0, O.vB)(Z.config),
        eu =
            (null == (t = Z.userStatus) ? void 0 : t.claimedAt) != null
                ? eo
                    ? A.intl.string(A.t.WYchde)
                    : A.intl.string(A.t.vTgCWx)
                : A.intl.string(A.t.cfY4PE),
        ed = l.useCallback(() => {
            ec &&
                ((0, O.f2)(Z.id, {
                    content: S.jn.VIDEO_MODAL,
                    ctaContent: E.jZ.COPY_QUEST_URL,
                    impressionId: K,
                    sourceQuestContent: H,
                }),
                el());
        }, [K, ec, Z.id, el, H]),
        em = l.useCallback(() => {
            ec &&
                ((0, O.f2)(Z.id, {
                    content: S.jn.VIDEO_MODAL,
                    ctaContent: E.jZ.COPY_QUEST_URL,
                    impressionId: K,
                    sourceQuestContent: H,
                }),
                (0, p.showToast)((0, p.createToast)(A.intl.string(A.t["+5kSoW"]), p.ToastType.SUCCESS)),
                ea(!0),
                null != es.current && clearTimeout(es.current),
                (es.current = setTimeout(() => {
                    ea(!1);
                }, 1700)));
        }, [K, ec, Z.id, H]);
    l.useEffect(
        () => () => {
            null != es.current && clearTimeout(es.current);
        },
        [],
    );
    let ef = async () => {
            if (null != V) {
                let e = y.r.build(Z.config).ctaLink;
                (await (0, P.PW)(e)) && V();
            }
            (0, O.nc)(Z, {
                content: S.jn.VIDEO_MODAL,
                ctaContent: E.jZ.OPEN_GAME_LINK,
                impressionId: K,
                sourceQuestContent: H,
            });
        },
        ep = () => {
            ((0, O.xN)(Z.config) || (0, O.Bg)(Z.config)) && V();
        },
        ev = l.useMemo(() => y.r.build(Z.config).defaultRewardName, [Z]),
        eg = A.intl.formatToPlainString(A.t["12IWP2"], { rewardName: ev }),
        eE = null == (o = Z.config.taskConfigV2) || null == (n = o.tasks) ? void 0 : n[c.X.WATCH_VIDEO];
    s()(null != eE, "VideoQuestModal: videoTask must not be null");
    let eb = (0, O.ZS)(eE),
        eO = "portrait" === eb;
    return (0, r.jsx)(p.Y0X, {
        "data-migration-pending": !0,
        transitionState: M,
        size: p.CgR.DYNAMIC,
        className: i()(L.modalRoot, {
            [L.modalRootLandscape]: "landscape" === eb,
            [L.modalRootPortrait]: "portrait" === eb,
        }),
        parentComponent: "Modal",
        children: (0, r.jsx)("div", {
            ref: (e) => {
                U.current = e;
            },
            className: L.modalBg,
            children: (0, r.jsx)("div", {
                className: L.modalBody,
                children: (0, r.jsxs)("div", {
                    className: L.modalContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.contentHeader,
                            children: [
                                (0, r.jsxs)(p.P3F, {
                                    className: L.contentHeaderGameInfo,
                                    onClick: ef,
                                    children: [
                                        (0, r.jsx)("img", {
                                            alt: Z.config.messages.gameTitle,
                                            className: i()(L.contentHeaderLogotype, L.accentOnHover),
                                            src: (0, _.fh)(Z, _.eC.LOGO_TYPE, W).url,
                                        }),
                                        (0, r.jsx)(R.Z, {}),
                                        (0, r.jsxs)("div", {
                                            className: L.questHeading,
                                            children: [
                                                (0, r.jsx)(p.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: A.intl.format(A.t.EQa7os, {
                                                        questName: Z.config.messages.questName,
                                                    }),
                                                }),
                                                (0, r.jsx)(p.Text, {
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
                                        text: eg,
                                        onTooltipShow: () => {
                                            ee(!0);
                                        },
                                        onTooltipHide: () => {
                                            ee(!1);
                                        },
                                        children: (0, r.jsx)(p.P3F, {
                                            className: L.progressCont,
                                            children: (0, r.jsx)(x.Z, {
                                                quest: Z,
                                                size: 48,
                                                percentComplete: et,
                                                percentCompleteText: $ ? en : void 0,
                                                percentCompleteTextVariant: "text-sm/medium",
                                                children: (0, r.jsx)(D.Z, {
                                                    className: L.questProgressRewardTile,
                                                    quest: Z,
                                                    questContent: S.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: k.dr.VIDEO_MODAL,
                                                    sourceQuestContent: H,
                                                }),
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(I.Z, {
                            quest: Z,
                            videoTask: eE,
                            videoSessionId: F,
                            parentTransitionState: M,
                            onOptimisticProgressUpdate: J,
                            autoplay: B,
                            performanceClockStartTime: q,
                            onClose: V,
                            sourceQuestContent: H,
                            orientation: eb,
                        }),
                        eO
                            ? (0, r.jsxs)("div", {
                                  className: i()(L.contentFooterPortrait, L.contentFooterButtonCont),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: L.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(p.Button, {
                                              variant: "secondary",
                                              text: A.intl.string(A.t.nL0WvC),
                                              onClick: ef,
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: L.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(j.i, {
                                              className: L.portraitCtaBtn,
                                              size: f.zx.Sizes.MEDIUM,
                                              quest: Z,
                                              useReducedMotion: z,
                                              isExpanded: (null == (a = Z.userStatus) ? void 0 : a.completedAt) != null,
                                              disabled: (null == (C = Z.userStatus) ? void 0 : C.completedAt) == null,
                                              ctaLabel: eu,
                                              onClick: ep,
                                              questContent: S.jn.VIDEO_MODAL,
                                              sourceQuestContent: H,
                                          }),
                                      }),
                                      ec &&
                                          (ei
                                              ? (0, r.jsx)(p.hU, {
                                                    variant: "active",
                                                    icon: p.owK,
                                                    onClick: em,
                                                    "aria-label": A.intl.string(A.t.RDE0Sc),
                                                })
                                              : (0, r.jsx)(d.u, {
                                                    text: A.intl.string(A.t.WqhZss),
                                                    children: (0, r.jsx)(p.hU, {
                                                        variant: "secondary",
                                                        icon: p.TIy,
                                                        "aria-label": A.intl.string(A.t.RDE0Sc),
                                                        onClick: em,
                                                    }),
                                                })),
                                  ],
                              })
                            : (0, r.jsxs)("div", {
                                  className: L.contentFooter,
                                  children: [
                                      (0, r.jsx)(p.Button, {
                                          variant: "secondary",
                                          text: A.intl.string(A.t.cpT0Cq),
                                          onClick: V,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: L.contentFooterButtonCont,
                                          children: [
                                              ec &&
                                                  (0, r.jsx)(p.Button, {
                                                      variant: "secondary",
                                                      text: er,
                                                      onClick: ed,
                                                  }),
                                              (0, r.jsx)(j.i, {
                                                  className: L.claimBtn,
                                                  size: f.zx.Sizes.MEDIUM,
                                                  quest: Z,
                                                  useReducedMotion: z,
                                                  isExpanded:
                                                      (null == (T = Z.userStatus) ? void 0 : T.completedAt) != null,
                                                  disabled:
                                                      (null == (N = Z.userStatus) ? void 0 : N.completedAt) == null,
                                                  ctaLabel: eu,
                                                  onClick: ep,
                                                  questContent: S.jn.VIDEO_MODAL,
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
    var { questId: t, overrideQuest: n, autoplay: l, openStartClockTime: o } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
    let a = (0, u.e7)([C.Z], () => C.Z.getQuest(t)),
        s = null != n ? n : a;
    return null != s
        ? (0, r.jsx)(T.A, {
              questOrQuests: s,
              questContent: S.jn.VIDEO_MODAL,
              minViewTimeSeconds: N.zw,
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
                              parentModalOpenStartClockTime: o,
                              impressionRef: e,
                              quest: s,
                              autoplay: l,
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
