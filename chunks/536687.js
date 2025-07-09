(n.r(t), n.d(t, { default: () => M }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    s = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    m = n(210887),
    f = n(617136),
    p = n(915750),
    v = n(113434),
    g = n(569984),
    b = n(497505),
    E = n(918701),
    O = n(373370),
    C = n(475595),
    h = n(566078),
    S = n(164495),
    j = n(472144),
    y = n(602667),
    _ = n(644646),
    x = n(604162),
    D = n(747717),
    T = n(963123),
    P = n(281055),
    N = n(46140),
    k = n(981631),
    I = n(388032),
    w = n(844136);
function A(e) {
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
function L(e, t) {
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
function R(e) {
    var t, n, o;
    let { transitionState: g, onClose: y, quest: P, autoplay: R, videoSessionId: M, impressionRef: V, parentModalOpenStartClockTime: B, sourceQuestContent: F } = e,
        Z = (0, E.il)(P),
        q = (0, v.tP)(P),
        U = (0, a.e7)([m.Z], () => m.Z.getState().theme),
        Q = (0, s.wj)(U) ? k.BRd.DARK : k.BRd.LIGHT,
        G = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        Y = (0, p.aM)(),
        z = (0, O.up)(N.dr.VIDEO_MODAL),
        [H, K] = l.useState(Z.progressSeconds),
        [X, W] = l.useState(!1),
        { completedRatio: $, completedRatioDisplay: J } = (0, v.I)(P),
        [ee, et] = (0, x.G6)(I.intl.string(I.t.RDE0SU), I.intl.string(I.t['+5kSoa']), 1700),
        en = null != (0, E.LM)(P.config),
        er = (null == (t = P.userStatus) ? void 0 : t.claimedAt) != null ? (en ? I.intl.string(I.t.WYchdX) : I.intl.string(I.t.vTgCW1)) : z,
        el = l.useCallback(() => {
            ((0, E.f2)(P.id, {
                content: b.jn.VIDEO_MODAL,
                ctaContent: f.jZ.COPY_QUEST_URL,
                impressionId: Y,
                sourceQuestContent: F
            }),
                et());
        }, [Y, P.id, et, F]),
        eo = async () => {
            if (null != y) {
                let e = h.r.build(P.config).application.link;
                (await (0, x.qP)(e)) && y();
            }
            (0, E.nc)(P, {
                content: b.jn.VIDEO_MODAL,
                ctaContent: f.jZ.OPEN_GAME_LINK,
                impressionId: Y,
                sourceQuestContent: F
            });
        },
        ei = l.useMemo(() => h.r.build(P.config).defaultRewardName, [P]),
        ea = I.intl.formatToPlainString(I.t['12IWPz'], { rewardName: ei });
    return (0, r.jsx)(u.Y0X, {
        transitionState: g,
        size: u.CgR.DYNAMIC,
        className: w.modalRoot,
        parentComponent: 'Modal',
        children: (0, r.jsx)('div', {
            ref: (e) => {
                V.current = e;
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
                                (0, r.jsxs)(u.P3F, {
                                    className: w.contentHeaderGameInfo,
                                    onClick: eo,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: P.config.messages.gameTitle,
                                            className: i()(w.contentHeaderLogotype, w.accentOnHover),
                                            src: (0, C.fh)(P, C.eC.LOGO_TYPE, Q).url
                                        }),
                                        (0, r.jsx)(D.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: w.questHeading,
                                            children: [
                                                (0, r.jsx)(u.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: I.intl.format(I.t.EQa7oq, { questName: P.config.messages.questName })
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: P.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !q &&
                                    (0, r.jsx)(u.ua7, {
                                        position: 'left',
                                        text: ea,
                                        onTooltipShow: () => {
                                            W(!0);
                                        },
                                        onTooltipHide: () => {
                                            W(!1);
                                        },
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.P3F,
                                                L(A({ className: w.progressCont }, e), {
                                                    children: (0, r.jsx)(j.Z, {
                                                        quest: P,
                                                        size: 48,
                                                        percentComplete: $,
                                                        percentCompleteText: X ? J : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(_.Z, {
                                                            className: w.questProgressRewardTile,
                                                            quest: P,
                                                            questContent: b.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: N.dr.VIDEO_MODAL,
                                                            sourceQuestContent: F
                                                        })
                                                    })
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsx)(T.Z, {
                            quest: P,
                            videoSessionId: M,
                            parentTransitionState: g,
                            onOptimisticProgressUpdate: K,
                            autoplay: R,
                            performanceClockStartTime: B,
                            onClose: y,
                            sourceQuestContent: F
                        }),
                        (0, r.jsxs)('div', {
                            className: w.contentFooter,
                            children: [
                                (0, r.jsx)(c.zx, {
                                    onClick: y,
                                    color: c.zx.Colors.PRIMARY,
                                    size: c.zx.Sizes.MEDIUM,
                                    className: w.footerBtn,
                                    children: I.intl.string(I.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: w.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(c.zx, {
                                            color: c.zx.Colors.PRIMARY,
                                            onClick: el,
                                            size: c.zx.Sizes.NONE,
                                            className: i()(w.copyLinkBtn, w.footerBtn),
                                            children: ee
                                        }),
                                        (0, r.jsx)(S.i, {
                                            className: w.claimBtn,
                                            size: c.zx.Sizes.MEDIUM,
                                            quest: P,
                                            useReducedMotion: G,
                                            isExpanded: (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
                                            disabled: (null == (o = P.userStatus) ? void 0 : o.completedAt) == null,
                                            ctaLabel: er,
                                            onClick: () => {
                                                ((0, E.xN)(P.config) || (0, E.Bg)(P.config)) && y();
                                            },
                                            questContent: b.jn.VIDEO_MODAL,
                                            sourceQuestContent: F
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
function M(e) {
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
    let s = (0, a.e7)([g.Z], () => g.Z.getQuest(t)),
        c = null != n ? n : s;
    return null != c
        ? (0, r.jsx)(y.A, {
              questOrQuests: c,
              questContent: b.jn.VIDEO_MODAL,
              minViewTimeSeconds: P.zw,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: i.sourceQuestContent,
              children: (e) =>
                  (0, r.jsx)(
                      R,
                      L(A({}, i), {
                          parentModalOpenStartClockTime: o,
                          impressionRef: e,
                          quest: c,
                          autoplay: l
                      })
                  )
          })
        : null;
}
