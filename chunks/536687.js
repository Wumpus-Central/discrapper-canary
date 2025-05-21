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
    E = n(918701),
    b = n(373370),
    O = n(475595),
    h = n(566078),
    S = n(164495),
    C = n(472144),
    j = n(602667),
    _ = n(644646),
    y = n(604162),
    x = n(747717),
    D = n(963123),
    P = n(281055),
    T = n(46140),
    N = n(981631),
    k = n(388032),
    I = n(844136);
function A(e) {
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
function w(e, t) {
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
    let { transitionState: v, onClose: j, quest: P, autoplay: L, videoSessionId: R, impressionRef: M, parentModalOpenStartClockTime: V } = e,
        B = (0, E.il)(P),
        F = (0, f.tP)(P),
        Z = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        U = (0, s.wj)(Z) ? N.BRd.DARK : N.BRd.LIGHT,
        q = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        Y = (0, p.aM)(),
        Q = (0, b.up)(T.dr.VIDEO_MODAL),
        [G, z] = l.useState(B.progressSeconds),
        [H, K] = l.useState(!1),
        { completedRatio: W, completedRatioDisplay: X } = (0, f.I)(P),
        [$, J] = (0, y.G6)(k.intl.string(k.t.RDE0SU), k.intl.string(k.t['+5kSoa']), 1700),
        ee = null != (0, E.LM)(P.config),
        et = (null == (t = P.userStatus) ? void 0 : t.claimedAt) != null ? (ee ? k.intl.string(k.t.WYchdX) : k.intl.string(k.t.vTgCW1)) : Q,
        en = l.useCallback(() => {
            (0, E.f2)(P.id, {
                content: g.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: Y
            }),
                J();
        }, [Y, P.id, J]),
        er = l.useMemo(() => h.r.build(P.config).defaultReward.messages.name, [P]),
        el = k.intl.formatToPlainString(k.t['12IWPz'], { rewardName: er });
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
                                    onClick: () => {
                                        (0, E.FE)(P, {
                                            content: g.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: Y
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: P.config.messages.gameTitle,
                                            className: i()(I.contentHeaderLogotype, I.accentOnHover),
                                            src: (0, O.fh)(P, O.eC.LOGO_TYPE, U).url
                                        }),
                                        (0, r.jsx)(x.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: I.questHeading,
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: k.intl.format(k.t.EQa7oq, { questName: P.config.messages.questName })
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: P.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !F &&
                                    (0, r.jsx)(c.ua7, {
                                        position: 'left',
                                        text: el,
                                        onTooltipShow: () => {
                                            K(!0);
                                        },
                                        onTooltipHide: () => {
                                            K(!1);
                                        },
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                w(A({ className: I.progressCont }, e), {
                                                    children: (0, r.jsx)(C.Z, {
                                                        quest: P,
                                                        size: 48,
                                                        percentComplete: W,
                                                        percentCompleteText: H ? X : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(_.Z, {
                                                            className: I.questProgressRewardTile,
                                                            quest: P,
                                                            questContent: g.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: T.dr.VIDEO_MODAL
                                                        })
                                                    })
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsx)(D.Z, {
                            quest: P,
                            videoSessionId: R,
                            parentTransitionState: v,
                            onOptimisticProgressUpdate: z,
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
                                        (0, r.jsx)(S.i0, {
                                            className: I.claimBtn,
                                            size: c.zxk.Sizes.MEDIUM,
                                            quest: P,
                                            useReducedMotion: q,
                                            isExpanded: (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
                                            disabled: (null == (o = P.userStatus) ? void 0 : o.completedAt) == null,
                                            ctaLabel: et,
                                            onClick: () => {
                                                ((0, E.xN)(P.config) || (0, E.Bg)(P.config)) && j();
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
              minViewTimeSeconds: P.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                  (0, r.jsx)(
                      L,
                      w(A({}, i), {
                          parentModalOpenStartClockTime: o,
                          impressionRef: e,
                          quest: c,
                          autoplay: l
                      })
                  )
          })
        : null;
}
