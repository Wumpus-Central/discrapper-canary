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
    p = n(915750),
    f = n(113434),
    v = n(569984),
    g = n(497505),
    b = n(918701),
    E = n(373370),
    O = n(475595),
    h = n(566078),
    C = n(164495),
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
    let { transitionState: v, onClose: j, quest: T, autoplay: L, videoSessionId: R, impressionRef: M, parentModalOpenStartClockTime: V } = e,
        B = (0, b.il)(T),
        F = (0, f.tP)(T),
        Z = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        q = (0, s.wj)(Z) ? N.BRd.DARK : N.BRd.LIGHT,
        U = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        Q = (0, p.aM)(),
        G = (0, E.up)(P.dr.VIDEO_MODAL),
        [H, Y] = l.useState(B.progressSeconds),
        [z, K] = l.useState(!1),
        { completedRatio: W, completedRatioDisplay: X } = (0, f.I)(T),
        [$, J] = (0, _.G6)(k.intl.string(k.t.RDE0SU), k.intl.string(k.t['+5kSoa']), 1700),
        ee = null != (0, b.LM)(T.config),
        et = (null == (t = T.userStatus) ? void 0 : t.claimedAt) != null ? (ee ? k.intl.string(k.t.WYchdX) : k.intl.string(k.t.vTgCW1)) : G,
        en = l.useCallback(() => {
            (0, b.f2)(T.id, {
                content: g.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: Q
            }),
                J();
        }, [Q, T.id, J]),
        er = async () => {
            if (null != j) {
                let e = h.r.build(T.config).application.link;
                (await (0, _.qP)(e)) && j();
            }
            (0, b.FE)(T, {
                content: g.jn.VIDEO_MODAL,
                ctaContent: m.jZ.OPEN_GAME_LINK,
                impressionId: Q
            });
        },
        el = l.useMemo(() => h.r.build(T.config).defaultReward.messages.name, [T]),
        eo = k.intl.formatToPlainString(k.t['12IWPz'], { rewardName: el });
    return (0, r.jsx)(c.Y0X, {
        transitionState: v,
        size: c.CgR.DYNAMIC,
        className: I.modalRoot,
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
                                    onClick: er,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: T.config.messages.gameTitle,
                                            className: i()(I.contentHeaderLogotype, I.accentOnHover),
                                            src: (0, O.fh)(T, O.eC.LOGO_TYPE, q).url
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
                                !F &&
                                    (0, r.jsx)(c.ua7, {
                                        position: 'left',
                                        text: eo,
                                        onTooltipShow: () => {
                                            K(!0);
                                        },
                                        onTooltipHide: () => {
                                            K(!1);
                                        },
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                A(w({ className: I.progressCont }, e), {
                                                    children: (0, r.jsx)(S.Z, {
                                                        quest: T,
                                                        size: 48,
                                                        percentComplete: W,
                                                        percentCompleteText: z ? X : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(y.Z, {
                                                            className: I.questProgressRewardTile,
                                                            quest: T,
                                                            questContent: g.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: P.dr.VIDEO_MODAL
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
                            onOptimisticProgressUpdate: Y,
                            autoplay: L,
                            performanceClockStartTime: V,
                            onClose: j
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
                                            onClick: en,
                                            size: c.zxk.Sizes.NONE,
                                            className: i()(I.copyLinkBtn, I.footerBtn),
                                            children: $
                                        }),
                                        (0, r.jsx)(C.i0, {
                                            className: I.claimBtn,
                                            size: c.zxk.Sizes.MEDIUM,
                                            quest: T,
                                            useReducedMotion: U,
                                            isExpanded: (null == (n = T.userStatus) ? void 0 : n.completedAt) != null,
                                            disabled: (null == (o = T.userStatus) ? void 0 : o.completedAt) == null,
                                            ctaLabel: et,
                                            onClick: () => {
                                                ((0, b.xN)(T.config) || (0, b.Bg)(T.config)) && j();
                                            }
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
