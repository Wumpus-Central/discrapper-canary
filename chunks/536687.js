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
    g = n(617136),
    b = n(915750),
    E = n(509212),
    O = n(113434),
    C = n(569984),
    h = n(497505),
    S = n(475595),
    j = n(566078),
    y = n(164495),
    _ = n(472144),
    x = n(602667),
    D = n(644646),
    T = n(604162),
    P = n(747717),
    N = n(963123),
    I = n(281055),
    k = n(46140),
    w = n(981631),
    A = n(388032),
    L = n(844136);
function R(e) {
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
    let { transitionState: x, onClose: I, quest: V, autoplay: B, videoSessionId: F, impressionRef: Z, parentModalOpenStartClockTime: q, sourceQuestContent: U } = e,
        Q = (0, E.il)(V),
        G = (0, O.tP)(V),
        Y = (0, u.e7)([v.Z], () => v.Z.getState().theme),
        z = (0, d.wj)(Y) ? w.BRd.DARK : w.BRd.LIGHT,
        H = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
        X = (0, b.aM)(),
        [W, K] = l.useState(Q.progressSeconds),
        [$, J] = l.useState(!1),
        { completedRatio: ee, completedRatioDisplay: et } = (0, O.I)(V),
        [en, er] = (0, T.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t['+5kSoa']), 1700),
        el = null != (0, E.LM)(V.config),
        eo = (null == (t = V.userStatus) ? void 0 : t.claimedAt) != null ? (el ? A.intl.string(A.t.WYchdX) : A.intl.string(A.t.vTgCW1)) : A.intl.string(A.t.cfY4PD),
        ei = l.useCallback(() => {
            ((0, E.f2)(V.id, {
                content: h.jn.VIDEO_MODAL,
                ctaContent: g.jZ.COPY_QUEST_URL,
                impressionId: X,
                sourceQuestContent: U
            }),
                er());
        }, [X, V.id, er, U]),
        ea = async () => {
            if (null != I) {
                let e = j.r.build(V.config).application.link;
                (await (0, T.qP)(e)) && I();
            }
            (0, E.nc)(V, {
                content: h.jn.VIDEO_MODAL,
                ctaContent: g.jZ.OPEN_GAME_LINK,
                impressionId: X,
                sourceQuestContent: U
            });
        },
        es = l.useMemo(() => j.r.build(V.config).defaultRewardName, [V]),
        ec = A.intl.formatToPlainString(A.t['12IWPz'], { rewardName: es }),
        eu = null == (o = V.config.taskConfigV2) || null == (n = o.tasks) ? void 0 : n[c.X.WATCH_VIDEO];
    s()(null != eu, 'VideoQuestModal: videoTask must not be null');
    let ed = (0, E.ZS)(eu);
    return (0, r.jsx)(f.Y0X, {
        transitionState: x,
        size: f.CgR.DYNAMIC,
        className: i()(L.modalRoot, {
            [L.modalRootLandscape]: 'landscape' === ed,
            [L.modalRootPortrait]: 'portrait' === ed
        }),
        parentComponent: 'Modal',
        children: (0, r.jsx)('div', {
            ref: (e) => {
                Z.current = e;
            },
            className: L.modalBg,
            children: (0, r.jsx)('div', {
                className: L.modalBody,
                children: (0, r.jsxs)('div', {
                    className: L.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: L.contentHeader,
                            children: [
                                (0, r.jsxs)(f.P3F, {
                                    className: L.contentHeaderGameInfo,
                                    onClick: ea,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: V.config.messages.gameTitle,
                                            className: i()(L.contentHeaderLogotype, L.accentOnHover),
                                            src: (0, S.fh)(V, S.eC.LOGO_TYPE, z).url
                                        }),
                                        (0, r.jsx)(P.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: L.questHeading,
                                            children: [
                                                (0, r.jsx)(f.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: A.intl.format(A.t.EQa7oq, { questName: V.config.messages.questName })
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
                                !G &&
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
                                                M(R({ className: L.progressCont }, e), {
                                                    children: (0, r.jsx)(_.Z, {
                                                        quest: V,
                                                        size: 48,
                                                        percentComplete: ee,
                                                        percentCompleteText: $ ? et : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(D.Z, {
                                                            className: L.questProgressRewardTile,
                                                            quest: V,
                                                            questContent: h.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: k.dr.VIDEO_MODAL,
                                                            sourceQuestContent: U
                                                        })
                                                    })
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsx)(N.Z, {
                            quest: V,
                            videoSessionId: F,
                            parentTransitionState: x,
                            onOptimisticProgressUpdate: K,
                            autoplay: B,
                            performanceClockStartTime: q,
                            onClose: I,
                            sourceQuestContent: U,
                            orientation: ed
                        }),
                        (0, r.jsxs)('div', {
                            className: L.contentFooter,
                            children: [
                                (0, r.jsx)(m.zx, {
                                    onClick: I,
                                    color: m.zx.Colors.PRIMARY,
                                    size: m.zx.Sizes.MEDIUM,
                                    className: L.footerBtn,
                                    children: A.intl.string(A.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: L.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(m.zx, {
                                            color: m.zx.Colors.PRIMARY,
                                            onClick: ei,
                                            size: m.zx.Sizes.NONE,
                                            className: i()(L.copyLinkBtn, L.footerBtn),
                                            children: en
                                        }),
                                        (0, r.jsx)(y.i, {
                                            className: L.claimBtn,
                                            size: m.zx.Sizes.MEDIUM,
                                            quest: V,
                                            useReducedMotion: H,
                                            isExpanded: (null == (a = V.userStatus) ? void 0 : a.completedAt) != null,
                                            disabled: (null == (C = V.userStatus) ? void 0 : C.completedAt) == null,
                                            ctaLabel: eo,
                                            onClick: () => {
                                                ((0, E.xN)(V.config) || (0, E.Bg)(V.config)) && I();
                                            },
                                            questContent: h.jn.VIDEO_MODAL,
                                            sourceQuestContent: U
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
              questContent: h.jn.VIDEO_MODAL,
              minViewTimeSeconds: I.zw,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: i.sourceQuestContent,
              children: (e) =>
                  (0, r.jsx)(
                      V,
                      M(R({}, i), {
                          parentModalOpenStartClockTime: o,
                          impressionRef: e,
                          quest: s,
                          autoplay: l
                      })
                  )
          })
        : null;
}
