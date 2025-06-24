n.r(t), n.d(t, { default: () => R }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    s = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(210887),
    m = n(617136),
    f = n(915750),
    p = n(113434),
    v = n(569984),
    g = n(497505),
    b = n(918701),
    E = n(373370),
    O = n(475595),
    C = n(566078),
    h = n(164495),
    S = n(472144),
    j = n(602667),
    y = n(644646),
    _ = n(604162),
    x = n(747717),
    D = n(963123),
    T = n(281055),
    P = n(46140),
    N = n(981631),
    k = n(388032),
    I = n(844136);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
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
function L(e) {
    var t, n, o;
    let { transitionState: v, onClose: j, quest: T, autoplay: L, videoSessionId: R, impressionRef: M, parentModalOpenStartClockTime: V, sourceQuestContent: B } = e,
        F = (0, b.il)(T),
        Z = (0, p.tP)(T),
        q = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        U = (0, s.wj)(q) ? N.BRd.DARK : N.BRd.LIGHT,
        Q = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        G = (0, f.aM)(),
        Y = (0, E.up)(P.dr.VIDEO_MODAL),
        [z, H] = l.useState(F.progressSeconds),
        [K, X] = l.useState(!1),
        { completedRatio: W, completedRatioDisplay: $ } = (0, p.I)(T),
        [J, ee] = (0, _.G6)(k.intl.string(k.t.RDE0SU), k.intl.string(k.t['+5kSoa']), 1700),
        et = null != (0, b.LM)(T.config),
        en = (null == (t = T.userStatus) ? void 0 : t.claimedAt) != null ? (et ? k.intl.string(k.t.WYchdX) : k.intl.string(k.t.vTgCW1)) : Y,
        er = l.useCallback(() => {
            (0, b.f2)(T.id, {
                content: g.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: G,
                sourceQuestContent: B
            }),
                ee();
        }, [G, T.id, ee, B]),
        el = async () => {
            if (null != j) {
                let e = C.r.build(T.config).application.link;
                (await (0, _.qP)(e)) && j();
            }
            (0, b.nc)(T, {
                content: g.jn.VIDEO_MODAL,
                ctaContent: m.jZ.OPEN_GAME_LINK,
                impressionId: G,
                sourceQuestContent: B
            });
        },
        eo = l.useMemo(() => C.r.build(T.config).defaultRewardName, [T]),
        ei = k.intl.formatToPlainString(k.t['12IWPz'], { rewardName: eo });
    return (0, r.jsx)(c.Y0X, {
        transitionState: v,
        size: c.CgR.DYNAMIC,
        className: I.modalRoot,
        parentComponent: 'Modal',
        children: (0, r.jsx)('div', {
            ref: (e) => {
                M.current = e;
            },
            className: I.modalBg,
            children: (0, r.jsx)('div', {
                className: I.modalBody,
                children: (0, r.jsxs)('div', {
                    className: I.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: I.contentHeader,
                            children: [
                                (0, r.jsxs)(c.P3F, {
                                    className: I.contentHeaderGameInfo,
                                    onClick: el,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: T.config.messages.gameTitle,
                                            className: i()(I.contentHeaderLogotype, I.accentOnHover),
                                            src: (0, O.fh)(T, O.eC.LOGO_TYPE, U).url
                                        }),
                                        (0, r.jsx)(x.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: I.questHeading,
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: k.intl.format(k.t.EQa7oq, { questName: T.config.messages.questName })
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: T.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !Z &&
                                    (0, r.jsx)(c.ua7, {
                                        position: 'left',
                                        text: ei,
                                        onTooltipShow: () => {
                                            X(!0);
                                        },
                                        onTooltipHide: () => {
                                            X(!1);
                                        },
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                A(w({ className: I.progressCont }, e), {
                                                    children: (0, r.jsx)(S.Z, {
                                                        quest: T,
                                                        size: 48,
                                                        percentComplete: W,
                                                        percentCompleteText: K ? $ : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(y.Z, {
                                                            className: I.questProgressRewardTile,
                                                            quest: T,
                                                            questContent: g.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: P.dr.VIDEO_MODAL,
                                                            sourceQuestContent: B
                                                        })
                                                    })
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsx)(D.Z, {
                            quest: T,
                            videoSessionId: R,
                            parentTransitionState: v,
                            onOptimisticProgressUpdate: H,
                            autoplay: L,
                            performanceClockStartTime: V,
                            onClose: j,
                            sourceQuestContent: B
                        }),
                        (0, r.jsxs)('div', {
                            className: I.contentFooter,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    onClick: j,
                                    color: c.zxk.Colors.PRIMARY,
                                    size: c.zxk.Sizes.MEDIUM,
                                    className: I.footerBtn,
                                    children: k.intl.string(k.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: er,
                                            size: c.zxk.Sizes.NONE,
                                            className: i()(I.copyLinkBtn, I.footerBtn),
                                            children: J
                                        }),
                                        (0, r.jsx)(h.i, {
                                            className: I.claimBtn,
                                            size: c.zxk.Sizes.MEDIUM,
                                            quest: T,
                                            useReducedMotion: Q,
                                            isExpanded: (null == (n = T.userStatus) ? void 0 : n.completedAt) != null,
                                            disabled: (null == (o = T.userStatus) ? void 0 : o.completedAt) == null,
                                            ctaLabel: en,
                                            onClick: () => {
                                                ((0, b.xN)(T.config) || (0, b.Bg)(T.config)) && j();
                                            },
                                            questContent: g.jn.VIDEO_MODAL,
                                            sourceQuestContent: B
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
function R(e) {
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
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['questId', 'overrideQuest', 'autoplay', 'openStartClockTime']);
    let s = (0, a.e7)([v.Z], () => v.Z.getQuest(t)),
        c = null != n ? n : s;
    return null != c
        ? (0, r.jsx)(j.A, {
              questOrQuests: c,
              questContent: g.jn.VIDEO_MODAL,
              minViewTimeSeconds: T.zw,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: i.sourceQuestContent,
              children: (e) =>
                  (0, r.jsx)(
                      L,
                      A(w({}, i), {
                          parentModalOpenStartClockTime: o,
                          impressionRef: e,
                          quest: c,
                          autoplay: l
                      })
                  )
          })
        : null;
}
