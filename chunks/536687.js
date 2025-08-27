n.r(t), n.d(t, { default: () => V }), n(388685);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    l = n.n(a),
    i = n(512722),
    s = n.n(i),
    c = n(754700),
    u = n(442837),
    d = n(780384),
    f = n(755721),
    p = n(481060),
    m = n(607070),
    v = n(210887),
    C = n(617136),
    g = n(915750),
    _ = n(509212),
    E = n(113434),
    S = n(569984),
    O = n(497505),
    b = n(475595),
    h = n(566078),
    y = n(164495),
    j = n(472144),
    x = n(602667),
    T = n(644646),
    P = n(604162),
    D = n(747717),
    R = n(963123),
    I = n(281055),
    k = n(46140),
    N = n(981631),
    w = n(388032),
    A = n(430799);
function L(e) {
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
function M(e, t) {
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
function B(e) {
    var t, n, a, i, S, x, I;
    let {
            transitionState: B,
            onClose: V,
            quest: F,
            autoplay: Z,
            videoSessionId: U,
            impressionRef: q,
            parentModalOpenStartClockTime: H,
            sourceQuestContent: G,
        } = e,
        Q = (0, _.il)(F),
        Y = (0, E.tP)(F),
        W = (0, u.e7)([v.Z], () => v.Z.getState().theme),
        z = (0, d.wj)(W) ? N.BRd.DARK : N.BRd.LIGHT,
        K = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        X = (0, g.aM)(),
        [$, J] = o.useState(Q.progressSeconds),
        [ee, et] = o.useState(!1),
        { completedRatio: en, completedRatioDisplay: er } = (0, E.I)(F),
        [eo, ea] = (0, P.G6)(w.intl.string(w.t.RDE0SU), w.intl.string(w.t["+5kSoa"]), 1700),
        el = null != (0, _.LM)(F.config),
        [ei, es] = o.useState(!1),
        ec = o.useRef(null),
        eu = (0, _.vB)(F.config),
        ed =
            (null == (t = F.userStatus) ? void 0 : t.claimedAt) != null
                ? el
                    ? w.intl.string(w.t.WYchdX)
                    : w.intl.string(w.t.vTgCW1)
                : w.intl.string(w.t.cfY4PD),
        ef = o.useCallback(() => {
            eu &&
                ((0, _.f2)(F.id, {
                    content: O.jn.VIDEO_MODAL,
                    ctaContent: C.jZ.COPY_QUEST_URL,
                    impressionId: X,
                    sourceQuestContent: G,
                }),
                ea());
        }, [X, eu, F.id, ea, G]),
        ep = o.useCallback(() => {
            eu &&
                ((0, _.f2)(F.id, {
                    content: O.jn.VIDEO_MODAL,
                    ctaContent: C.jZ.COPY_QUEST_URL,
                    impressionId: X,
                    sourceQuestContent: G,
                }),
                (0, p.showToast)((0, p.createToast)(w.intl.string(w.t["+5kSoa"]), p.ToastType.SUCCESS)),
                es(!0),
                null != ec.current && clearTimeout(ec.current),
                (ec.current = setTimeout(() => {
                    es(!1);
                }, 1700)));
        }, [X, eu, F.id, G]);
    o.useEffect(
        () => () => {
            null != ec.current && clearTimeout(ec.current);
        },
        [],
    );
    let em = async () => {
            if (null != V) {
                let e = h.r.build(F.config).application.link;
                (await (0, P.qP)(e)) && V();
            }
            (0, _.nc)(F, {
                content: O.jn.VIDEO_MODAL,
                ctaContent: C.jZ.OPEN_GAME_LINK,
                impressionId: X,
                sourceQuestContent: G,
            });
        },
        ev = () => {
            ((0, _.xN)(F.config) || (0, _.Bg)(F.config)) && V();
        },
        eC = o.useMemo(() => h.r.build(F.config).defaultRewardName, [F]),
        eg = w.intl.formatToPlainString(w.t["12IWPz"], { rewardName: eC }),
        e_ = null == (a = F.config.taskConfigV2) || null == (n = a.tasks) ? void 0 : n[c.X.WATCH_VIDEO];
    s()(null != e_, "VideoQuestModal: videoTask must not be null");
    let eE = (0, _.ZS)(e_),
        eS = "portrait" === eE;
    return (0, r.jsx)(p.Y0X, {
        "data-migration-pending": !0,
        transitionState: B,
        size: p.CgR.DYNAMIC,
        className: l()(A.modalRoot, {
            [A.modalRootLandscape]: "landscape" === eE,
            [A.modalRootPortrait]: "portrait" === eE,
        }),
        parentComponent: "Modal",
        children: (0, r.jsx)("div", {
            ref: (e) => {
                q.current = e;
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
                                (0, r.jsxs)(p.P3F, {
                                    className: A.contentHeaderGameInfo,
                                    onClick: em,
                                    children: [
                                        (0, r.jsx)("img", {
                                            alt: F.config.messages.gameTitle,
                                            className: l()(A.contentHeaderLogotype, A.accentOnHover),
                                            src: (0, b.fh)(F, b.eC.LOGO_TYPE, z).url,
                                        }),
                                        (0, r.jsx)(D.Z, {}),
                                        (0, r.jsxs)("div", {
                                            className: A.questHeading,
                                            children: [
                                                (0, r.jsx)(p.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: w.intl.format(w.t.EQa7oq, {
                                                        questName: F.config.messages.questName,
                                                    }),
                                                }),
                                                (0, r.jsx)(p.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "header-secondary",
                                                    children: F.config.messages.gameTitle,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                !Y &&
                                    (0, r.jsx)(p.ua7, {
                                        position: "left",
                                        text: eg,
                                        onTooltipShow: () => {
                                            et(!0);
                                        },
                                        onTooltipHide: () => {
                                            et(!1);
                                        },
                                        children: (e) =>
                                            (0, r.jsx)(
                                                p.P3F,
                                                M(L({ className: A.progressCont }, e), {
                                                    children: (0, r.jsx)(j.Z, {
                                                        quest: F,
                                                        size: 48,
                                                        percentComplete: en,
                                                        percentCompleteText: ee ? er : void 0,
                                                        percentCompleteTextVariant: "text-sm/medium",
                                                        children: (0, r.jsx)(T.Z, {
                                                            className: A.questProgressRewardTile,
                                                            quest: F,
                                                            questContent: O.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: k.dr.VIDEO_MODAL,
                                                            sourceQuestContent: G,
                                                        }),
                                                    }),
                                                }),
                                            ),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(R.Z, {
                            quest: F,
                            videoTask: e_,
                            videoSessionId: U,
                            parentTransitionState: B,
                            onOptimisticProgressUpdate: J,
                            autoplay: Z,
                            performanceClockStartTime: H,
                            onClose: V,
                            sourceQuestContent: G,
                            orientation: eE,
                        }),
                        eS
                            ? (0, r.jsxs)("div", {
                                  className: l()(A.contentFooterPortrait, A.contentFooterButtonCont),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: A.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(p.zxk, {
                                              variant: "secondary",
                                              text: w.intl.string(w.t.nL0WvL),
                                              onClick: em,
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: A.portraitCtaBtnWrapper,
                                          children: (0, r.jsx)(y.i, {
                                              className: A.portraitCtaBtn,
                                              size: f.zx.Sizes.MEDIUM,
                                              quest: F,
                                              useReducedMotion: K,
                                              isExpanded: (null == (i = F.userStatus) ? void 0 : i.completedAt) != null,
                                              disabled: (null == (S = F.userStatus) ? void 0 : S.completedAt) == null,
                                              ctaLabel: ed,
                                              onClick: ev,
                                              questContent: O.jn.VIDEO_MODAL,
                                              sourceQuestContent: G,
                                          }),
                                      }),
                                      eu &&
                                          (ei
                                              ? (0, r.jsx)(p.hU, {
                                                    variant: "active",
                                                    icon: p.owK,
                                                    onClick: ep,
                                                    "aria-label": w.intl.string(w.t.RDE0SU),
                                                })
                                              : (0, r.jsx)(p.ua7, {
                                                    text: w.intl.string(w.t.WqhZsr),
                                                    children: (e) =>
                                                        (0, r.jsx)(
                                                            p.hU,
                                                            M(
                                                                L(
                                                                    {
                                                                        variant: "secondary",
                                                                        icon: p.TIy,
                                                                        "aria-label": w.intl.string(w.t.RDE0SU),
                                                                    },
                                                                    e,
                                                                ),
                                                                { onClick: ep },
                                                            ),
                                                        ),
                                                })),
                                  ],
                              })
                            : (0, r.jsxs)("div", {
                                  className: A.contentFooter,
                                  children: [
                                      (0, r.jsx)(p.zxk, {
                                          variant: "secondary",
                                          text: w.intl.string(w.t.cpT0Cg),
                                          onClick: V,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: A.contentFooterButtonCont,
                                          children: [
                                              eu &&
                                                  (0, r.jsx)(p.zxk, {
                                                      variant: "secondary",
                                                      text: eo,
                                                      onClick: ef,
                                                  }),
                                              (0, r.jsx)(y.i, {
                                                  className: A.claimBtn,
                                                  size: f.zx.Sizes.MEDIUM,
                                                  quest: F,
                                                  useReducedMotion: K,
                                                  isExpanded:
                                                      (null == (x = F.userStatus) ? void 0 : x.completedAt) != null,
                                                  disabled:
                                                      (null == (I = F.userStatus) ? void 0 : I.completedAt) == null,
                                                  ctaLabel: ed,
                                                  onClick: ev,
                                                  questContent: O.jn.VIDEO_MODAL,
                                                  sourceQuestContent: G,
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
    var { questId: t, overrideQuest: n, autoplay: o, openStartClockTime: a } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
    let i = (0, u.e7)([S.Z], () => S.Z.getQuest(t)),
        s = null != n ? n : i;
    return null != s
        ? (0, r.jsx)(x.A, {
              questOrQuests: s,
              questContent: O.jn.VIDEO_MODAL,
              minViewTimeSeconds: I.zw,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: l.sourceQuestContent,
              children: (e) =>
                  (0, r.jsx)(
                      B,
                      M(L({}, l), {
                          parentModalOpenStartClockTime: a,
                          impressionRef: e,
                          quest: s,
                          autoplay: o,
                      }),
                  ),
          })
        : null;
}
