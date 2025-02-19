n.r(t), n.d(t, { default: () => R }), n(47120);
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
    E = n(497505),
    g = n(918701),
    b = n(475595),
    O = n(566078),
    S = n(164495),
    j = n(472144),
    C = n(602667),
    h = n(644646),
    y = n(880199),
    x = n(604162),
    _ = n(747717),
    N = n(963123),
    D = n(281055),
    P = n(46140),
    T = n(981631),
    I = n(388032),
    A = n(677488);
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
function k(e) {
    var t, n, i, v;
    let C,
        { transitionState: D, onClose: k, quest: R, autoplay: M, videoSessionId: q, impressionRef: F, startTime: B } = e,
        U = (0, g.il)(R),
        Z = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        V = (0, a.wj)(Z) ? T.BRd.DARK : T.BRd.LIGHT,
        Y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        W = (0, p.aM)(),
        [z, G] = o.useState(U.progressSeconds),
        [H, K] = o.useState(!1),
        { completedRatio: Q, completedRatioDisplay: X } = (0, f.I)(R),
        [$, J] = (0, x.G6)(I.NW.string(I.t.RDE0SU), I.NW.string(I.t['+5kSoa']), 1700);
    if ((0, g.xN)(R.config) && (null === (t = R.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null) {
        let e = (0, g.LM)(R.config);
        C = (0, r.jsx)(y.Z, { orbQuantity: e });
    } else C = (null === (v = R.userStatus) || void 0 === v ? void 0 : v.claimedAt) != null ? I.NW.string(I.t.vTgCW1) : I.NW.string(I.t.cfY4PD);
    let ee = o.useCallback(() => {
            (0, g.f2)(R.id, {
                content: E.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: W
            }),
                J();
        }, [W, R.id, J]),
        et = o.useMemo(() => O.r.build(R.config).defaultReward.messages.name, [R]),
        en = I.NW.formatToPlainString(I.t['12IWPz'], { rewardName: et });
    return (0, r.jsx)(c.Y0X, {
        transitionState: D,
        size: c.CgR.DYNAMIC,
        className: A.modalRoot,
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
                                (0, r.jsxs)(c.P3F, {
                                    className: A.contentHeaderGameInfo,
                                    onClick: () => {
                                        (0, g.FE)(R, {
                                            content: E.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: W
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: R.config.messages.gameTitle,
                                            className: l()(A.contentHeaderLogotype, A.accentOnHover),
                                            src: (0, b.fh)(R, b.eC.LOGO_TYPE, V).url
                                        }),
                                        (0, r.jsx)(_.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: A.questHeading,
                                            children: [
                                                (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: I.NW.format(I.t.EQa7oq, { questName: R.config.messages.questName })
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: R.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.ua7, {
                                    position: 'left',
                                    text: en,
                                    onTooltipShow: () => {
                                        K(!0);
                                    },
                                    onTooltipHide: () => {
                                        K(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.P3F,
                                            L(w({ className: A.progressCont }, e), {
                                                children: (0, r.jsx)(j.Z, {
                                                    quest: R,
                                                    size: 48,
                                                    percentComplete: Q,
                                                    percentCompleteText: H ? X : void 0,
                                                    percentCompleteTextVariant: 'text-sm/medium',
                                                    children: (0, r.jsx)(h.Z, {
                                                        className: A.questProgressRewardTile,
                                                        quest: R,
                                                        questContent: E.jn.VIDEO_MODAL,
                                                        autoplay: !1,
                                                        location: P.dr.VIDEO_MODAL
                                                    })
                                                })
                                            })
                                        )
                                })
                            ]
                        }),
                        (0, r.jsx)(N.Z, {
                            quest: R,
                            videoSessionId: q,
                            parentTransitionState: D,
                            onOptimisticProgressUpdate: G,
                            autoplay: M,
                            startTime: B
                        }),
                        (0, r.jsxs)('div', {
                            className: A.contentFooter,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    onClick: k,
                                    color: c.zxk.Colors.PRIMARY,
                                    size: c.zxk.Sizes.MEDIUM,
                                    className: A.footerBtn,
                                    children: I.NW.string(I.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: A.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: ee,
                                            size: c.zxk.Sizes.NONE,
                                            className: l()(A.copyLinkBtn, A.footerBtn),
                                            children: $
                                        }),
                                        (0, r.jsx)(S.i0, {
                                            className: A.claimBtn,
                                            size: c.zxk.Sizes.MEDIUM,
                                            quest: R,
                                            useReducedMotion: Y,
                                            isExpanded: (null === (n = R.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (i = R.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                            ctaLabel: C,
                                            onClick: () => {
                                                (0, g.xN)(R.config) && k();
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
    var { questId: t, overrideQuest: n, autoplay: o, startTime: i } = e,
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
        })(e, ['questId', 'overrideQuest', 'autoplay', 'startTime']);
    let a = (0, s.e7)([v.Z], () => v.Z.getQuest(t)),
        c = null != n ? n : a;
    return null != c
        ? (0, r.jsx)(C.A, {
              questOrQuests: c,
              questContent: E.jn.VIDEO_MODAL,
              minViewTimeSeconds: D.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                  (0, r.jsx)(
                      k,
                      L(w({}, l), {
                          startTime: i,
                          impressionRef: e,
                          quest: c,
                          autoplay: o
                      })
                  )
          })
        : null;
}
