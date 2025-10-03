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
    R = n(604162),
    P = n(747717),
    I = n(963123),
    N = n(281055),
    k = n(46140),
    w = n(981631),
    A = n(388032),
    L = n(430799);
function M(e) {
    var t, n, o, a, S, T, N;
    let {
            transitionState: M,
            onClose: V,
            quest: Z,
            autoplay: B,
            videoSessionId: F,
            impressionRef: q,
            parentModalOpenStartClockTime: U,
            sourceQuestContent: H,
        } = e,
        Q = (0, b.il)(Z),
        Y = (0, h.tP)(Z),
        G = (0, u.e7)([E.Z], () => E.Z.getState().theme),
        z = (0, m.wj)(G) ? w.BRd.DARK : w.BRd.LIGHT,
        W = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        K = (0, O.aM)(),
        [X, $] = l.useState(Q.progressSeconds),
        [J, ee] = l.useState(!1),
        { completedRatio: et, completedRatioDisplay: en } = (0, h.I)(Z),
        [er, el] = (0, R.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t["+5kSoa"]), 1700),
        eo = null != (0, b.LM)(Z.config),
        [ei, ea] = l.useState(!1),
        es = l.useRef(null),
        ec = (0, b.vB)(Z.config),
        eu =
            (null == (t = Z.userStatus) ? void 0 : t.claimedAt) != null
                ? eo
                    ? A.intl.string(A.t.WYchdX)
                    : A.intl.string(A.t.vTgCW1)
                : A.intl.string(A.t.cfY4PD),
        ed = l.useCallback(() => {
            ec &&
                ((0, b.f2)(Z.id, {
                    content: C.jn.VIDEO_MODAL,
                    ctaContent: g.jZ.COPY_QUEST_URL,
                    impressionId: K,
                    sourceQuestContent: H,
                }),
                el());
        }, [K, ec, Z.id, el, H]),
        em = l.useCallback(() => {
            ec &&
                ((0, b.f2)(Z.id, {
                    content: C.jn.VIDEO_MODAL,
                    ctaContent: g.jZ.COPY_QUEST_URL,
                    impressionId: K,
                    sourceQuestContent: H,
                }),
                (0, f.showToast)((0, f.createToast)(A.intl.string(A.t["+5kSoa"]), f.ToastType.SUCCESS)),
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
    let ep = async () => {
            if (null != V) {
                let e = y.r.build(Z.config).application.link;
                (await (0, R.qP)(e)) && V();
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
        ev = l.useMemo(() => y.r.build(Z.config).defaultRewardName, [Z]),
        eE = A.intl.formatToPlainString(A.t["12IWPz"], { rewardName: ev }),
        eg = null == (o = Z.config.taskConfigV2) || null == (n = o.tasks) ? void 0 : n[c.X.WATCH_VIDEO];
    s()(null != eg, "VideoQuestModal: videoTask must not be null");
    let eO = (0, b.ZS)(eg),
        eb = "portrait" === eO;
    return (0, r.jsx)(f.Y0X, {
        "data-migration-pending": !0,
        transitionState: M,
        size: f.CgR.DYNAMIC,
        className: i()(L.modalRoot, {
            [L.modalRootLandscape]: "landscape" === eO,
            [L.modalRootPortrait]: "portrait" === eO,
        }),
        parentComponent: "Modal",
        children: (0, r.jsx)("div", {
            ref: (e) => {
                q.current = e;
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
                                (0, r.jsxs)(f.P3F, {
                                    className: L.contentHeaderGameInfo,
                                    onClick: ep,
                                    children: [
                                        (0, r.jsx)("img", {
                                            alt: Z.config.messages.gameTitle,
                                            className: i()(L.contentHeaderLogotype, L.accentOnHover),
                                            src: (0, _.fh)(Z, _.eC.LOGO_TYPE, z).url,
                                        }),
                                        (0, r.jsx)(P.Z, {}),
                                        (0, r.jsxs)("div", {
                                            className: L.questHeading,
                                            children: [
                                                (0, r.jsx)(f.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: A.intl.format(A.t.EQa7oq, {
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
                                !Y &&
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
                                            className: L.progressCont,
                                            children: (0, r.jsx)(x.Z, {
                                                quest: Z,
                                                size: 48,
                                                percentComplete: et,
                                                percentCompleteText: J ? en : void 0,
                                                percentCompleteTextVariant: "text-sm/medium",
                                                children: (0, r.jsx)(D.Z, {
                                                    className: L.questProgressRewardTile,
                                                    quest: Z,
                                                    questContent: C.jn.VIDEO_MODAL,
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
                            videoTask: eg,
                            videoSessionId: F,
                            parentTransitionState: M,
                            onOptimisticProgressUpdate: $,
                            autoplay: B,
                            performanceClockStartTime: U,
                            onClose: V,
                            sourceQuestContent: H,
                            orientation: eO,
                        }),
                        eb
                            ? (0, r.jsxs)("div", {
                                  className: i()(L.contentFooterPortrait, L.contentFooterButtonCont),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: L.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(f.zxk, {
                                              variant: "secondary",
                                              text: A.intl.string(A.t.nL0WvL),
                                              onClick: ep,
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: L.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(j.i, {
                                              className: L.portraitCtaBtn,
                                              size: p.zx.Sizes.MEDIUM,
                                              quest: Z,
                                              useReducedMotion: W,
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
                                                    "aria-label": A.intl.string(A.t.RDE0SU),
                                                })
                                              : (0, r.jsx)(d.u, {
                                                    text: A.intl.string(A.t.WqhZsr),
                                                    children: (0, r.jsx)(f.hU, {
                                                        variant: "secondary",
                                                        icon: f.TIy,
                                                        "aria-label": A.intl.string(A.t.RDE0SU),
                                                        onClick: em,
                                                    }),
                                                })),
                                  ],
                              })
                            : (0, r.jsxs)("div", {
                                  className: L.contentFooter,
                                  children: [
                                      (0, r.jsx)(f.zxk, {
                                          variant: "secondary",
                                          text: A.intl.string(A.t.cpT0Cg),
                                          onClick: V,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: L.contentFooterButtonCont,
                                          children: [
                                              ec &&
                                                  (0, r.jsx)(f.zxk, {
                                                      variant: "secondary",
                                                      text: er,
                                                      onClick: ed,
                                                  }),
                                              (0, r.jsx)(j.i, {
                                                  className: L.claimBtn,
                                                  size: p.zx.Sizes.MEDIUM,
                                                  quest: Z,
                                                  useReducedMotion: W,
                                                  isExpanded:
                                                      (null == (T = Z.userStatus) ? void 0 : T.completedAt) != null,
                                                  disabled:
                                                      (null == (N = Z.userStatus) ? void 0 : N.completedAt) == null,
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
    let a = (0, u.e7)([S.Z], () => S.Z.getQuest(t)),
        s = null != n ? n : a;
    return null != s
        ? (0, r.jsx)(T.A, {
              questOrQuests: s,
              questContent: C.jn.VIDEO_MODAL,
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
