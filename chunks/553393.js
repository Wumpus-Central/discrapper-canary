n.d(t, { Z: () => Z }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(714673),
    a = n(91192),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(287734),
    d = n(872810),
    f = n(393238),
    _ = n(40851),
    p = n(607070),
    h = n(258609),
    m = n(102172),
    g = n(210887),
    E = n(592125),
    b = n(430824),
    y = n(496675),
    O = n(979651),
    v = n(617136),
    I = n(113434),
    S = n(497505),
    T = n(373370),
    A = n(475595),
    N = n(602667),
    C = n(644646),
    P = n(667105),
    R = n(341907),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}
let U = '8px',
    G = '11px',
    B = 222;
function F(e, t) {
    return null != e && null != t && (0, m.p9)(t, O.Z, b.Z, y.Z, h.Z)[0];
}
function V(e) {
    var t, h, m, b, y;
    let { quest: O, memberListItemRef: N, applicationStream: M, position: V, closePopout: Z, updatePosition: H, impressionRef: Y, name: W } = e,
        K = (0, s.e7)([E.Z], () => {
            var e;
            return null != (e = E.Z.getChannel(null == M ? void 0 : M.channelId)) ? e : null;
        }),
        z = (0, P.hf)({
            quest: O,
            location: S.jn.MEMBERS_LIST
        }),
        q = (0, I.tP)(O),
        Q = (null == O || null == (t = O.userStatus) ? void 0 : t.claimedAt) != null,
        X = (null == O || null == (h = O.userStatus) ? void 0 : h.enrolledAt) != null,
        J = (null == O || null == (m = O.userStatus) ? void 0 : m.completedAt) != null,
        $ = (0, s.e7)([g.Z], () => g.Z.getState().theme),
        ee = (0, l.wj)($) ? L.BR.DARK : L.BR.LIGHT,
        et = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        { ref: en, height: er } = (0, f.ZP)(),
        [ei, eo] = i.useState(et),
        ea = (0, _.Aq)(),
        es = (0, a.eg)(),
        el = (0, T.up)(w.dr.MEMBERS_LIST);
    i.useEffect(() => {
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
        }, [N, es, H]);
    let ec = (0, c.q_F)({
            from: { height: 0 },
            height: null != er ? er : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => eo(!0)
        }),
        eu = (0, c.Yzy)(ei, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        ed = () => {
            ea.dispatch(D.CkL.POPOUT_CLOSE);
        },
        ef = 'top' === V ? ''.concat(U, ' ').concat(U, ' 0 0') : '0 0 '.concat(U, ' ').concat(U);
    if (null == O || q || (Q && !F(M, K))) return null;
    let e_ = () => {
            (0, v._3)({
                questId: O.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: v.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, R.openDisclosureModal)(O, {
                    content: S.jn.MEMBERS_LIST,
                    ctaContent: v.jZ.OPEN_DISCLOSURE
                });
        },
        ep = () => {
            (0, v._3)({
                questId: O.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: v.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, R.navigateToQuestHome)({
                    fromContent: S.jn.MEMBERS_LIST,
                    questId: O.id
                });
        },
        eh = (e) => {
            e.stopPropagation(), e_();
        },
        em = () => {
            F(M, K) && null != K
                ? ((0, v._3)({
                      questId: O.id,
                      questContent: S.jn.MEMBERS_LIST,
                      questContentCTA: v.jZ.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0
                  }),
                  (0, c.ZDy)(async () => {
                      let { default: e } = await n.e('85045').then(n.bind(n, 748862));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              j(
                                  {
                                      username: null != W ? W : '',
                                      onConfirm: () => (
                                          (0, v._3)({
                                              questId: O.id,
                                              questContent: S.jn.MEMBERS_LIST,
                                              questContentCTA: v.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0
                                          }),
                                          u.default.selectVoiceChannel(K.id),
                                          (0, d.iV)(M)
                                      )
                                  },
                                  t
                              )
                          );
                  }))
                : ep();
        },
        eg =
            J && !Q
                ? {
                      headerText: x.intl.string(x.t.gHerLS),
                      ctaText: el,
                      handleClickCta: z,
                      tileAssetType: 'reward'
                  }
                : X && !Q
                  ? {
                        headerText: x.intl.string(x.t.uH2sf3),
                        ctaText: x.intl.string(x.t.VN1Ajo),
                        handleClickCta: ep,
                        tileAssetType: 'reward'
                    }
                  : F(M, K)
                    ? {
                          headerText: x.intl.string(x.t.Bz6SkJ),
                          ctaText: x.intl.string(x.t.BXFP39),
                          handleClickCta: em,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: x.intl.string(x.t.Bz6SkJ),
                          ctaText: x.intl.string(x.t.BSXPZ2),
                          handleClickCta: ep,
                          tileAssetType: 'game'
                      };
    return (0, r.jsx)(o.animated.div, {
        ref: (e) => {
            Y.current = e;
        },
        'aria-expanded': ei,
        className: k.wrapper,
        style: {
            width: null != (y = null == (b = N.current) ? void 0 : b.clientWidth) ? y : B,
            height: ec.height,
            overflow: ei ? 'visible' : 'hidden',
            borderRadius: ef
        },
        children: (0, r.jsxs)('div', {
            ref: (e) => {
                en.current = e;
            },
            className: k.container,
            style: { borderRadius: ef },
            children: [
                (0, r.jsxs)('div', {
                    className: k.top,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.left,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: eg.headerText
                                }),
                                (0, r.jsxs)(c.P3F, {
                                    className: k.help,
                                    onClick: (e) => {
                                        ed(), eh(e);
                                    },
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            className: k.helpText,
                                            children: x.intl.format(x.t['Lm8/mJ'], { gamePublisher: O.config.messages.gamePublisher })
                                        }),
                                        (0, r.jsx)(c.idN, {
                                            size: 'custom',
                                            className: k.helpIcon,
                                            width: G,
                                            height: G,
                                            color: c.TVs.colors.INTERACTIVE_NORMAL
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
                                    eu(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(o.animated.div, {
                                                style: e,
                                                className: k.imgUnderlay
                                            })
                                    ),
                                    'game' === eg.tileAssetType &&
                                        (0, r.jsx)('img', {
                                            alt: x.intl.formatToPlainString(x.t.IskzPj, {
                                                gameTitle: O.config.messages.gameTitle,
                                                gamePublisher: O.config.messages.gamePublisher
                                            }),
                                            className: k.assetTile,
                                            src: (0, A.fh)(O, A.eC.GAME_TILE, ee).url
                                        }),
                                    'reward' === eg.tileAssetType &&
                                        (0, r.jsx)(C.Z, {
                                            className: k.assetTile,
                                            quest: O,
                                            questContent: S.jn.MEMBERS_LIST,
                                            learnMoreStyle: 'icon',
                                            location: w.dr.MEMBERS_LIST,
                                            onClick: ed
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.zxk, {
                    onClick: () => {
                        ed(), eg.handleClickCta();
                    },
                    color: c.zxk.Colors.CUSTOM,
                    className: k.ctaButton,
                    children: eg.ctaText
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
              children: (t) => (0, r.jsx)(V, j({ impressionRef: t }, e))
          });
}
