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
    y = n(164495),
    j = n(472144),
    x = n(602667),
    T = n(644646),
    D = n(604162),
    P = n(747717),
    R = n(963123),
    N = n(281055),
    I = n(46140),
    k = n(981631),
    w = n(388032),
    A = n(844136);
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
    var t, n, o, a, C;
    let { transitionState: x, onClose: N, quest: V, autoplay: B, videoSessionId: Z, impressionRef: F, parentModalOpenStartClockTime: U, sourceQuestContent: q } = e,
        H = (0, O.il)(V),
        Y = (0, b.tP)(V),
        Q = (0, u.e7)([v.Z], () => v.Z.getState().theme),
        G = (0, d.wj)(Q) ? k.BRd.DARK : k.BRd.LIGHT,
        z = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
        K = (0, g.aM)(),
        [X, W] = l.useState(H.progressSeconds),
        [$, J] = l.useState(!1),
        { completedRatio: ee, completedRatioDisplay: et } = (0, b.I)(V),
        [en, er] = (0, D.G6)(w.intl.string(w.t.RDE0SU), w.intl.string(w.t['+5kSoa']), 1700),
        el = null != (0, O.LM)(V.config),
        eo = (null == (t = V.userStatus) ? void 0 : t.claimedAt) != null ? (el ? w.intl.string(w.t.WYchdX) : w.intl.string(w.t.vTgCW1)) : w.intl.string(w.t.cfY4PD),
        ei = l.useCallback(() => {
            ((0, O.f2)(V.id, {
                content: S.jn.VIDEO_MODAL,
                ctaContent: E.jZ.COPY_QUEST_URL,
                impressionId: K,
                sourceQuestContent: q
            }),
                er());
        }, [K, V.id, er, q]),
        ea = async () => {
            if (null != N) {
                let e = _.r.build(V.config).application.link;
                (await (0, D.qP)(e)) && N();
            }
            (0, O.nc)(V, {
                content: S.jn.VIDEO_MODAL,
                ctaContent: E.jZ.OPEN_GAME_LINK,
                impressionId: K,
                sourceQuestContent: q
            });
        },
        es = l.useMemo(() => _.r.build(V.config).defaultRewardName, [V]),
        ec = w.intl.formatToPlainString(w.t['12IWPz'], { rewardName: es }),
        eu = null == (o = V.config.taskConfigV2) || null == (n = o.tasks) ? void 0 : n[c.X.WATCH_VIDEO];
    s()(null != eu, 'VideoQuestModal: videoTask must not be null');
    let ed = (0, O.ZS)(eu);
    return (0, r.jsx)(f.Y0X, {
        transitionState: x,
        size: f.CgR.DYNAMIC,
        className: i()(A.modalRoot, {
            [A.modalRootLandscape]: 'landscape' === ed,
            [A.modalRootPortrait]: 'portrait' === ed
        }),
        parentComponent: 'Modal',
        children: (0, r.jsx)('div', {
            ref: (e) => {
                F.current = e;
            },
            className: A.modalBg,
            children: (0, r.jsx)('div', {
                className: A.modalBody,
                children: (0, r.jsxs)('div', {
                    className: A.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: A.contentHeader,
                            children: [
                                (0, r.jsxs)(f.P3F, {
                                    className: A.contentHeaderGameInfo,
                                    onClick: ea,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: V.config.messages.gameTitle,
                                            className: i()(A.contentHeaderLogotype, A.accentOnHover),
                                            src: (0, h.fh)(V, h.eC.LOGO_TYPE, G).url
                                        }),
                                        (0, r.jsx)(P.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: A.questHeading,
                                            children: [
                                                (0, r.jsx)(f.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: w.intl.format(w.t.EQa7oq, { questName: V.config.messages.questName })
                                                }),
                                                (0, r.jsx)(f.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: V.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !Y &&
                                    (0, r.jsx)(f.ua7, {
                                        position: 'left',
                                        text: ec,
                                        onTooltipShow: () => {
                                            J(!0);
                                        },
                                        onTooltipHide: () => {
                                            J(!1);
                                        },
                                        children: (e) =>
                                            (0, r.jsx)(
                                                f.P3F,
                                                M(L({ className: A.progressCont }, e), {
                                                    children: (0, r.jsx)(j.Z, {
                                                        quest: V,
                                                        size: 48,
                                                        percentComplete: ee,
                                                        percentCompleteText: $ ? et : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(T.Z, {
                                                            className: A.questProgressRewardTile,
                                                            quest: V,
                                                            questContent: S.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: I.dr.VIDEO_MODAL,
                                                            sourceQuestContent: q
                                                        })
                                                    })
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsx)(R.Z, {
                            quest: V,
                            videoSessionId: Z,
                            parentTransitionState: x,
                            onOptimisticProgressUpdate: W,
                            autoplay: B,
                            performanceClockStartTime: U,
                            onClose: N,
                            sourceQuestContent: q,
                            orientation: ed
                        }),
                        (0, r.jsxs)('div', {
                            className: A.contentFooter,
                            children: [
                                (0, r.jsx)(m.zx, {
                                    onClick: N,
                                    color: m.zx.Colors.PRIMARY,
                                    size: m.zx.Sizes.MEDIUM,
                                    className: A.footerBtn,
                                    children: w.intl.string(w.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: A.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(m.zx, {
                                            color: m.zx.Colors.PRIMARY,
                                            onClick: ei,
                                            size: m.zx.Sizes.MEDIUM,
                                            className: i()(A.copyLinkBtn, A.footerBtn),
                                            children: en
                                        }),
                                        (0, r.jsx)(y.i, {
                                            className: A.claimBtn,
                                            size: m.zx.Sizes.MEDIUM,
                                            quest: V,
                                            useReducedMotion: z,
                                            isExpanded: (null == (a = V.userStatus) ? void 0 : a.completedAt) != null,
                                            disabled: (null == (C = V.userStatus) ? void 0 : C.completedAt) == null,
                                            ctaLabel: eo,
                                            onClick: () => {
                                                ((0, O.xN)(V.config) || (0, O.Bg)(V.config)) && N();
                                            },
                                            questContent: S.jn.VIDEO_MODAL,
                                            sourceQuestContent: q
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
