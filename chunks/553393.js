(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(855659),
    o = n(91192),
    s = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(287734),
    _ = n(872810),
    f = n(393238),
    p = n(40851),
    h = n(607070),
    m = n(258609),
    g = n(102172),
    E = n(210887),
    b = n(592125),
    y = n(430824),
    O = n(496675),
    v = n(979651),
    I = n(617136),
    T = n(113434),
    S = n(497505),
    A = n(475595),
    N = n(602667),
    C = n(644646),
    R = n(110560),
    P = n(667105),
    w = n(46140),
    D = n(981631),
    L = n(231338),
    x = n(388032),
    k = n(777444);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
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
                M(e, t, n[t]);
            }));
    }
    return e;
}
let U = '8px',
    G = '11px',
    B = 222;
function V(e, t) {
    return null != e && null != t && (0, g.p9)(t, v.Z, y.Z, O.Z, m.Z)[0];
}
function F(e) {
    var t, m, g, y, O;
    let { quest: v, memberListItemRef: N, applicationStream: M, position: F, closePopout: Z, updatePosition: H, impressionRef: Y, name: W } = e,
        K = (0, s.e7)([b.Z], () => {
            var e;
            return null != (e = b.Z.getChannel(null == M ? void 0 : M.channelId)) ? e : null;
        }),
        z = (0, P.hf)({
            quest: v,
            questContent: S.jn.MEMBERS_LIST,
            sourceQuestContent: S.jn.MEMBERS_LIST
        }),
        q = (0, T.tP)(v),
        X = (null == v || null == (t = v.userStatus) ? void 0 : t.claimedAt) != null,
        Q = (null == v || null == (m = v.userStatus) ? void 0 : m.enrolledAt) != null,
        J = (null == v || null == (g = v.userStatus) ? void 0 : g.completedAt) != null,
        $ = (0, s.e7)([E.Z], () => E.Z.getState().theme),
        ee = (0, l.wj)($) ? L.BR.DARK : L.BR.LIGHT,
        et = (0, s.e7)([h.Z], () => h.Z.useReducedMotion),
        { ref: en, height: er } = (0, f.ZP)(),
        [ei, ea] = i.useState(et),
        eo = (0, p.Aq)(),
        es = (0, o.eg)();
    (i.useEffect(() => {
        let e = es.current;
        return (
            null == e || e.addEventListener('scroll', Z),
            () => {
                null == e || e.removeEventListener('scroll', Z);
            }
        );
    }, [Z, es]),
        i.useEffect(() => {
            let e = es.current,
                t = N.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => H());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [N, es, H]));
    let el = (0, u.q_F)({
            from: { height: 0 },
            height: null != er ? er : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => ea(!0)
        }),
        ec = (0, u.Yzy)(ei, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        eu = () => {
            eo.dispatch(D.CkL.POPOUT_CLOSE);
        },
        ed = 'top' === F ? ''.concat(U, ' ').concat(U, ' 0 0') : '0 0 '.concat(U, ' ').concat(U);
    if (null == v || q || (X && !V(M, K))) return null;
    let e_ = () => {
            ((0, I._3)({
                questId: v.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: I.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: S.jn.MEMBERS_LIST
            }),
                (0, R.openDisclosureModal)(v, {
                    content: S.jn.MEMBERS_LIST,
                    ctaContent: I.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: S.jn.MEMBERS_LIST
                }));
        },
        ef = () => {
            ((0, I._3)({
                questId: v.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: I.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: S.jn.MEMBERS_LIST
            }),
                (0, R.navigateToQuestHome)({
                    fromContent: S.jn.MEMBERS_LIST,
                    questId: v.id
                }));
        },
        ep = (e) => {
            (e.stopPropagation(), e_());
        },
        eh = () => {
            V(M, K) && null != K
                ? ((0, I._3)({
                      questId: v.id,
                      questContent: S.jn.MEMBERS_LIST,
                      questContentCTA: I.jZ.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: S.jn.MEMBERS_LIST
                  }),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('85045').then(n.bind(n, 748862));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              j(
                                  {
                                      username: null != W ? W : '',
                                      onConfirm: () => (
                                          (0, I._3)({
                                              questId: v.id,
                                              questContent: S.jn.MEMBERS_LIST,
                                              questContentCTA: I.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: S.jn.MEMBERS_LIST
                                          }),
                                          d.default.selectVoiceChannel(K.id),
                                          (0, _.iV)(M)
                                      )
                                  },
                                  t
                              )
                          );
                  }))
                : ef();
        },
        em =
            J && !X
                ? {
                      headerText: x.intl.string(x.t.gHerLS),
                      ctaText: x.intl.string(x.t.cfY4PD),
                      handleClickCta: z,
                      tileAssetType: 'reward'
                  }
                : Q && !X
                  ? {
                        headerText: x.intl.string(x.t.uH2sf3),
                        ctaText: x.intl.string(x.t.VN1Ajo),
                        handleClickCta: ef,
                        tileAssetType: 'reward'
                    }
                  : V(M, K)
                    ? {
                          headerText: x.intl.string(x.t.Bz6SkJ),
                          ctaText: x.intl.string(x.t.BXFP39),
                          handleClickCta: eh,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: x.intl.string(x.t.Bz6SkJ),
                          ctaText: x.intl.string(x.t.BSXPZ2),
                          handleClickCta: ef,
                          tileAssetType: 'game'
                      };
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            Y.current = e;
        },
        'aria-expanded': ei,
        className: k.wrapper,
        style: {
            width: null != (O = null == (y = N.current) ? void 0 : y.clientWidth) ? O : B,
            height: el.height,
            overflow: ei ? 'visible' : 'hidden',
            borderRadius: ed
        },
        children: (0, r.jsxs)('div', {
            ref: (e) => {
                en.current = e;
            },
            className: k.container,
            style: { borderRadius: ed },
            children: [
                (0, r.jsxs)('div', {
                    className: k.top,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.left,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: em.headerText
                                }),
                                (0, r.jsxs)(u.P3F, {
                                    className: k.help,
                                    onClick: (e) => {
                                        (eu(), ep(e));
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            className: k.helpText,
                                            children: x.intl.format(x.t['Lm8/mJ'], { gamePublisher: v.config.messages.gamePublisher })
                                        }),
                                        (0, r.jsx)(u.idN, {
                                            size: 'custom',
                                            className: k.helpIcon,
                                            width: G,
                                            height: G,
                                            color: u.TVs.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: k.right,
                            children: (0, r.jsxs)('div', {
                                className: k.imgWrapper,
                                children: [
                                    ec(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: k.imgUnderlay
                                            })
                                    ),
                                    'game' === em.tileAssetType &&
                                        (0, r.jsx)('img', {
                                            alt: x.intl.formatToPlainString(x.t.IskzPj, {
                                                gameTitle: v.config.messages.gameTitle,
                                                gamePublisher: v.config.messages.gamePublisher
                                            }),
                                            className: k.assetTile,
                                            src: (0, A.fh)(v, A.eC.GAME_TILE, ee).url
                                        }),
                                    'reward' === em.tileAssetType &&
                                        (0, r.jsx)(C.Z, {
                                            className: k.assetTile,
                                            quest: v,
                                            questContent: S.jn.MEMBERS_LIST,
                                            learnMoreStyle: 'icon',
                                            location: w.dr.MEMBERS_LIST,
                                            onClick: eu,
                                            sourceQuestContent: S.jn.MEMBERS_LIST
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.zx, {
                    onClick: () => {
                        (eu(), em.handleClickCta());
                    },
                    color: c.zx.Colors.CUSTOM,
                    className: k.ctaButton,
                    children: em.ctaText
                })
            ]
        })
    });
}
function Z(e) {
    return null == e.quest || e.isQuestEnrollmentBlocked
        ? null
        : (0, r.jsx)(N.A, {
              questOrQuests: e.quest,
              questContent: S.jn.MEMBERS_LIST,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: S.jn.MEMBERS_LIST,
              children: (t) => (0, r.jsx)(F, j({ impressionRef: t }, e))
          });
}
