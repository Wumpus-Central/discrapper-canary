n.r(t), n.d(t, { default: () => L }), n(47120);
var r = n(200651),
    l = n(192379),
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
    E = n(475595),
    O = n(566078),
    h = n(164495),
    S = n(472144),
    C = n(602667),
    j = n(644646),
    y = n(604162),
    _ = n(747717),
    x = n(963123),
    N = n(281055),
    D = n(46140),
    P = n(981631),
    T = n(388032),
    k = n(844136);
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
function I(e) {
    var t, n, o;
    let { transitionState: v, onClose: C, quest: N, autoplay: I, videoSessionId: L, impressionRef: R, parentModalOpenStartClockTime: M } = e,
        V = (0, b.il)(N),
        B = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        F = (0, s.wj)(B) ? P.BRd.DARK : P.BRd.LIGHT,
        Z = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        U = (0, p.aM)(),
        [q, Y] = l.useState(V.progressSeconds),
        [W, Q] = l.useState(!1),
        { completedRatio: G, completedRatioDisplay: z } = (0, f.I)(N),
        [H, K] = (0, y.G6)(T.NW.string(T.t.RDE0SU), T.NW.string(T.t['+5kSoa']), 1700),
        X = null != (0, b.LM)(N.config),
        $ = (null == (t = N.userStatus) ? void 0 : t.claimedAt) != null ? (X ? T.NW.string(T.t.WYchdX) : T.NW.string(T.t.vTgCW1)) : T.NW.string(T.t.cfY4PD),
        J = l.useCallback(() => {
            (0, b.f2)(N.id, {
                content: g.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: U
            }),
                K();
        }, [U, N.id, K]),
        ee = l.useMemo(() => O.r.build(N.config).defaultReward.messages.name, [N]),
        et = T.NW.formatToPlainString(T.t['12IWPz'], { rewardName: ee });
    return (0, r.jsx)(c.Y0X, {
        transitionState: v,
        size: c.CgR.DYNAMIC,
        className: k.modalRoot,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                R.current = e;
            },
            className: k.modalBg,
            children: (0, r.jsx)('div', {
                className: k.modalBody,
                children: (0, r.jsxs)('div', {
                    className: k.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.contentHeader,
                            children: [
                                (0, r.jsxs)(c.P3F, {
                                    className: k.contentHeaderGameInfo,
                                    onClick: () => {
                                        (0, b.FE)(N, {
                                            content: g.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: U
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: N.config.messages.gameTitle,
                                            className: i()(k.contentHeaderLogotype, k.accentOnHover),
                                            src: (0, E.fh)(N, E.eC.LOGO_TYPE, F).url
                                        }),
                                        (0, r.jsx)(_.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: k.questHeading,
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: T.NW.format(T.t.EQa7oq, { questName: N.config.messages.questName })
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: N.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.ua7, {
                                    position: 'left',
                                    text: et,
                                    onTooltipShow: () => {
                                        Q(!0);
                                    },
                                    onTooltipHide: () => {
                                        Q(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.P3F,
                                            A(w({ className: k.progressCont }, e), {
                                                children: (0, r.jsx)(S.Z, {
                                                    quest: N,
                                                    size: 48,
                                                    percentComplete: G,
                                                    percentCompleteText: W ? z : void 0,
                                                    percentCompleteTextVariant: 'text-sm/medium',
                                                    children: (0, r.jsx)(j.Z, {
                                                        className: k.questProgressRewardTile,
                                                        quest: N,
                                                        questContent: g.jn.VIDEO_MODAL,
                                                        autoplay: !1,
                                                        location: D.dr.VIDEO_MODAL
                                                    })
                                                })
                                            })
                                        )
                                })
                            ]
                        }),
                        (0, r.jsx)(x.Z, {
                            quest: N,
                            videoSessionId: L,
                            parentTransitionState: v,
                            onOptimisticProgressUpdate: Y,
                            autoplay: I,
                            performanceClockStartTime: M
                        }),
                        (0, r.jsxs)('div', {
                            className: k.contentFooter,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    onClick: C,
                                    color: c.zxk.Colors.PRIMARY,
                                    size: c.zxk.Sizes.MEDIUM,
                                    className: k.footerBtn,
                                    children: T.NW.string(T.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: k.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: J,
                                            size: c.zxk.Sizes.NONE,
                                            className: i()(k.copyLinkBtn, k.footerBtn),
                                            children: H
                                        }),
                                        (0, r.jsx)(h.i0, {
                                            className: k.claimBtn,
                                            size: c.zxk.Sizes.MEDIUM,
                                            quest: N,
                                            useReducedMotion: Z,
                                            isExpanded: (null == (n = N.userStatus) ? void 0 : n.completedAt) != null,
                                            disabled: (null == (o = N.userStatus) ? void 0 : o.completedAt) == null,
                                            ctaLabel: $,
                                            onClick: () => {
                                                ((0, b.xN)(N.config) || (0, b.Bg)(N.config)) && C();
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
function L(e) {
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
        ? (0, r.jsx)(C.A, {
              questOrQuests: c,
              questContent: g.jn.VIDEO_MODAL,
              minViewTimeSeconds: N.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                  (0, r.jsx)(
                      I,
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
