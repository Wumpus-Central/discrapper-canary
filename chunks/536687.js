(n.r(t), n.d(t, { default: () => B }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(512722),
    s = n.n(a),
    c = n(754700),
    u = n(442837),
    d = n(780384),
    m = n(755721),
    f = n(481060),
    p = n(607070),
    v = n(210887),
    E = n(617136),
    g = n(915750),
    O = n(509212),
    b = n(113434),
    C = n(569984),
    S = n(497505),
    h = n(475595),
    _ = n(566078),
    j = n(164495),
    y = n(472144),
    x = n(602667),
    D = n(644646),
    T = n(604162),
    P = n(747717),
    R = n(963123),
    N = n(281055),
    I = n(46140),
    k = n(981631),
    A = n(388032),
    w = n(844136);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
function V(e) {
    var t, n, o, a, C, x, N;
    let { transitionState: V, onClose: B, quest: F, autoplay: Z, videoSessionId: U, impressionRef: q, parentModalOpenStartClockTime: Y, sourceQuestContent: H } = e,
        Q = (0, O.il)(F),
        z = (0, b.tP)(F),
        G = (0, u.e7)([v.Z], () => v.Z.getState().theme),
        K = (0, d.wj)(G) ? k.BRd.DARK : k.BRd.LIGHT,
        X = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
        W = (0, g.aM)(),
        [$, J] = l.useState(Q.progressSeconds),
        [ee, et] = l.useState(!1),
        { completedRatio: en, completedRatioDisplay: er } = (0, b.I)(F),
        [el, eo] = (0, T.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t['+5kSoa']), 1700),
        ei = null != (0, O.LM)(F.config),
        [ea, es] = l.useState(!1),
        ec = l.useRef(null),
        eu = (null == (t = F.userStatus) ? void 0 : t.claimedAt) != null ? (ei ? A.intl.string(A.t.WYchdX) : A.intl.string(A.t.vTgCW1)) : A.intl.string(A.t.cfY4PD),
        ed = l.useCallback(() => {
            ((0, O.f2)(F.id, {
                content: S.jn.VIDEO_MODAL,
                ctaContent: E.jZ.COPY_QUEST_URL,
                impressionId: W,
                sourceQuestContent: H
            }),
                eo());
        }, [W, F.id, eo, H]),
        em = l.useCallback(() => {
            ((0, O.f2)(F.id, {
                content: S.jn.VIDEO_MODAL,
                ctaContent: E.jZ.COPY_QUEST_URL,
                impressionId: W,
                sourceQuestContent: H
            }),
                es(!0),
                null != ec.current && clearTimeout(ec.current),
                (ec.current = setTimeout(() => {
                    es(!1);
                }, 1700)));
        }, [W, F.id, H]);
    l.useEffect(
        () => () => {
            null != ec.current && clearTimeout(ec.current);
        },
        []
    );
    let ef = async () => {
            if (null != B) {
                let e = _.r.build(F.config).application.link;
                (await (0, T.qP)(e)) && B();
            }
            (0, O.nc)(F, {
                content: S.jn.VIDEO_MODAL,
                ctaContent: E.jZ.OPEN_GAME_LINK,
                impressionId: W,
                sourceQuestContent: H
            });
        },
        ep = () => {
            ((0, O.xN)(F.config) || (0, O.Bg)(F.config)) && B();
        },
        ev = l.useMemo(() => _.r.build(F.config).defaultRewardName, [F]),
        eE = A.intl.formatToPlainString(A.t['12IWPz'], { rewardName: ev }),
        eg = null == (o = F.config.taskConfigV2) || null == (n = o.tasks) ? void 0 : n[c.X.WATCH_VIDEO];
    s()(null != eg, 'VideoQuestModal: videoTask must not be null');
    let eO = (0, O.ZS)(eg),
        eb = 'portrait' === eO;
    return (0, r.jsx)(f.Y0X, {
        transitionState: V,
        size: f.CgR.DYNAMIC,
        className: i()(w.modalRoot, {
            [w.modalRootLandscape]: 'landscape' === eO,
            [w.modalRootPortrait]: 'portrait' === eO
        }),
        parentComponent: 'Modal',
        children: (0, r.jsx)('div', {
            ref: (e) => {
                q.current = e;
            },
            className: w.modalBg,
            children: (0, r.jsx)('div', {
                className: w.modalBody,
                children: (0, r.jsxs)('div', {
                    className: w.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: w.contentHeader,
                            children: [
                                (0, r.jsxs)(f.P3F, {
                                    className: w.contentHeaderGameInfo,
                                    onClick: ef,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: F.config.messages.gameTitle,
                                            className: i()(w.contentHeaderLogotype, w.accentOnHover),
                                            src: (0, h.fh)(F, h.eC.LOGO_TYPE, K).url
                                        }),
                                        (0, r.jsx)(P.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: w.questHeading,
                                            children: [
                                                (0, r.jsx)(f.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: A.intl.format(A.t.EQa7oq, { questName: F.config.messages.questName })
                                                }),
                                                (0, r.jsx)(f.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: F.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !z &&
                                    (0, r.jsx)(f.ua7, {
                                        position: 'left',
                                        text: eE,
                                        onTooltipShow: () => {
                                            et(!0);
                                        },
                                        onTooltipHide: () => {
                                            et(!1);
                                        },
                                        children: (e) =>
                                            (0, r.jsx)(
                                                f.P3F,
                                                M(L({ className: w.progressCont }, e), {
                                                    children: (0, r.jsx)(y.Z, {
                                                        quest: F,
                                                        size: 48,
                                                        percentComplete: en,
                                                        percentCompleteText: ee ? er : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(D.Z, {
                                                            className: w.questProgressRewardTile,
                                                            quest: F,
                                                            questContent: S.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: I.dr.VIDEO_MODAL,
                                                            sourceQuestContent: H
                                                        })
                                                    })
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsx)(R.Z, {
                            quest: F,
                            videoSessionId: U,
                            parentTransitionState: V,
                            onOptimisticProgressUpdate: J,
                            autoplay: Z,
                            performanceClockStartTime: Y,
                            onClose: B,
                            sourceQuestContent: H,
                            orientation: eO
                        }),
                        eb
                            ? (0, r.jsxs)('div', {
                                  className: i()(w.contentFooterPortrait, w.contentFooterButtonCont),
                                  children: [
                                      (0, r.jsx)(m.zx, {
                                          color: m.zx.Colors.PRIMARY,
                                          size: m.zx.Sizes.MEDIUM,
                                          className: w.portraitCtaBtn,
                                          onClick: ef,
                                          children: A.intl.string(A.t.nL0WvL)
                                      }),
                                      (0, r.jsx)(j.i, {
                                          className: w.portraitCtaBtn,
                                          size: m.zx.Sizes.MEDIUM,
                                          quest: F,
                                          useReducedMotion: X,
                                          isExpanded: (null == (a = F.userStatus) ? void 0 : a.completedAt) != null,
                                          disabled: (null == (C = F.userStatus) ? void 0 : C.completedAt) == null,
                                          ctaLabel: eu,
                                          onClick: ep,
                                          questContent: S.jn.VIDEO_MODAL,
                                          sourceQuestContent: H
                                      }),
                                      (0, r.jsx)(m.zx, {
                                          color: m.zx.Colors.PRIMARY,
                                          onClick: em,
                                          size: m.zx.Sizes.MEDIUM,
                                          className: i()(w.copyLinkBtn, w.footerBtn),
                                          'aria-label': A.intl.string(A.t.RDE0SU),
                                          children: ea
                                              ? (0, r.jsx)(f.owK, {
                                                    size: 'md',
                                                    color: f.TVs.colors.TEXT_FEEDBACK_POSITIVE
                                                })
                                              : (0, r.jsx)(f.aAc, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                })
                                      })
                                  ]
                              })
                            : (0, r.jsxs)('div', {
                                  className: w.contentFooter,
                                  children: [
                                      (0, r.jsx)(m.zx, {
                                          onClick: B,
                                          color: m.zx.Colors.PRIMARY,
                                          size: m.zx.Sizes.MEDIUM,
                                          className: w.footerBtn,
                                          children: A.intl.string(A.t.cpT0Cg)
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: w.contentFooterButtonCont,
                                          children: [
                                              (0, r.jsx)(m.zx, {
                                                  color: m.zx.Colors.PRIMARY,
                                                  onClick: ed,
                                                  size: m.zx.Sizes.MEDIUM,
                                                  className: i()(w.copyLinkBtn, w.footerBtn),
                                                  children: el
                                              }),
                                              (0, r.jsx)(j.i, {
                                                  className: w.claimBtn,
                                                  size: m.zx.Sizes.MEDIUM,
                                                  quest: F,
                                                  useReducedMotion: X,
                                                  isExpanded: (null == (x = F.userStatus) ? void 0 : x.completedAt) != null,
                                                  disabled: (null == (N = F.userStatus) ? void 0 : N.completedAt) == null,
                                                  ctaLabel: eu,
                                                  onClick: ep,
                                                  questContent: S.jn.VIDEO_MODAL,
                                                  sourceQuestContent: H
                                              })
                                          ]
                                      })
                                  ]
                              })
                    ]
                })
            })
        })
    });
}
function B(e) {
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
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['questId', 'overrideQuest', 'autoplay', 'openStartClockTime']);
    let a = (0, u.e7)([C.Z], () => C.Z.getQuest(t)),
        s = null != n ? n : a;
    return null != s
        ? (0, r.jsx)(x.A, {
              questOrQuests: s,
              questContent: S.jn.VIDEO_MODAL,
              minViewTimeSeconds: N.zw,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: i.sourceQuestContent,
              children: (e) =>
                  (0, r.jsx)(
                      V,
                      M(L({}, i), {
                          parentModalOpenStartClockTime: o,
                          impressionRef: e,
                          quest: s,
                          autoplay: l
                      })
                  )
          })
        : null;
}
