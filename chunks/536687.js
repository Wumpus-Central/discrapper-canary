n.r(t), n.d(t, { default: () => L }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(210887),
    m = n(617136),
    p = n(915750),
    f = n(113434),
    v = n(569984),
    g = n(497505),
    E = n(918701),
    b = n(475595),
    O = n(566078),
    S = n(164495),
    h = n(472144),
    C = n(602667),
    j = n(644646),
    y = n(604162),
    _ = n(747717),
    x = n(963123),
    D = n(281055),
    N = n(46140),
    P = n(981631),
    T = n(388032),
    I = n(881382);
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
function k(e, t) {
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
function A(e) {
    var t, n, i;
    let { transitionState: v, onClose: C, quest: D, autoplay: A, videoSessionId: L, impressionRef: R, parentModalOpenStartClockTime: M } = e,
        V = (0, E.il)(D),
        q = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        B = (0, a.wj)(q) ? P.BRd.DARK : P.BRd.LIGHT,
        F = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        U = (0, p.aM)(),
        [Z, Y] = o.useState(V.progressSeconds),
        [W, Q] = o.useState(!1),
        { completedRatio: z, completedRatioDisplay: G } = (0, f.I)(D),
        [H, K] = (0, y.G6)(T.NW.string(T.t.RDE0SU), T.NW.string(T.t['+5kSoa']), 1700),
        X = (null === (t = D.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? T.NW.string(T.t.vTgCW1) : T.NW.string(T.t.cfY4PD),
        $ = o.useCallback(() => {
            (0, E.f2)(D.id, {
                content: g.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: U
            }),
                K();
        }, [U, D.id, K]),
        J = o.useMemo(() => O.r.build(D.config).defaultReward.messages.name, [D]),
        ee = T.NW.formatToPlainString(T.t['12IWPz'], { rewardName: J });
    return (0, r.jsx)(c.Y0X, {
        transitionState: v,
        size: c.CgR.DYNAMIC,
        className: I.modalRoot,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                R.current = e;
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
                                        (0, E.FE)(D, {
                                            content: g.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: U
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: D.config.messages.gameTitle,
                                            className: l()(I.contentHeaderLogotype, I.accentOnHover),
                                            src: (0, b.fh)(D, b.eC.LOGO_TYPE, B).url
                                        }),
                                        (0, r.jsx)(_.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: I.questHeading,
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: T.NW.format(T.t.EQa7oq, { questName: D.config.messages.questName })
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: D.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.ua7, {
                                    position: 'left',
                                    text: ee,
                                    onTooltipShow: () => {
                                        Q(!0);
                                    },
                                    onTooltipHide: () => {
                                        Q(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.P3F,
                                            k(w({ className: I.progressCont }, e), {
                                                children: (0, r.jsx)(h.Z, {
                                                    quest: D,
                                                    size: 48,
                                                    percentComplete: z,
                                                    percentCompleteText: W ? G : void 0,
                                                    percentCompleteTextVariant: 'text-sm/medium',
                                                    children: (0, r.jsx)(j.Z, {
                                                        className: I.questProgressRewardTile,
                                                        quest: D,
                                                        questContent: g.jn.VIDEO_MODAL,
                                                        autoplay: !1,
                                                        location: N.dr.VIDEO_MODAL
                                                    })
                                                })
                                            })
                                        )
                                })
                            ]
                        }),
                        (0, r.jsx)(x.Z, {
                            quest: D,
                            videoSessionId: L,
                            parentTransitionState: v,
                            onOptimisticProgressUpdate: Y,
                            autoplay: A,
                            performanceClockStartTime: M
                        }),
                        (0, r.jsxs)('div', {
                            className: I.contentFooter,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    onClick: C,
                                    color: c.zxk.Colors.PRIMARY,
                                    size: c.zxk.Sizes.MEDIUM,
                                    className: I.footerBtn,
                                    children: T.NW.string(T.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: $,
                                            size: c.zxk.Sizes.NONE,
                                            className: l()(I.copyLinkBtn, I.footerBtn),
                                            children: H
                                        }),
                                        (0, r.jsx)(S.i0, {
                                            className: I.claimBtn,
                                            size: c.zxk.Sizes.MEDIUM,
                                            quest: D,
                                            useReducedMotion: F,
                                            isExpanded: (null === (n = D.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (i = D.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                            ctaLabel: X,
                                            onClick: () => {
                                                ((0, E.xN)(D.config) || (0, E.Bg)(D.config)) && C();
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
    var { questId: t, overrideQuest: n, autoplay: o, openStartClockTime: i } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['questId', 'overrideQuest', 'autoplay', 'openStartClockTime']);
    let a = (0, s.e7)([v.Z], () => v.Z.getQuest(t)),
        c = null != n ? n : a;
    return null != c
        ? (0, r.jsx)(C.A, {
              questOrQuests: c,
              questContent: g.jn.VIDEO_MODAL,
              minViewTimeSeconds: D.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                  (0, r.jsx)(
                      A,
                      k(w({}, l), {
                          parentModalOpenStartClockTime: i,
                          impressionRef: e,
                          quest: c,
                          autoplay: o
                      })
                  )
          })
        : null;
}
