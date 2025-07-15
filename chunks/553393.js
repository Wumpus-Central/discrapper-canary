(n.d(t, { Z: () => H }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(108542),
    o = n(91192),
    s = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(287734),
    f = n(872810),
    _ = n(393238),
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
    A = n(373370),
    N = n(475595),
    C = n(602667),
    R = n(644646),
    P = n(667105),
    w = n(341907),
    D = n(46140),
    L = n(981631),
    x = n(231338),
    M = n(388032),
    k = n(777444);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            }));
    }
    return e;
}
let G = '8px',
    B = '11px',
    V = 222;
function F(e, t) {
    return null != e && null != t && (0, g.p9)(t, v.Z, y.Z, O.Z, m.Z)[0];
}
function Z(e) {
    var t, m, g, y, O;
    let { quest: v, memberListItemRef: C, applicationStream: j, position: Z, closePopout: H, updatePosition: Y, impressionRef: W, name: K } = e,
        z = (0, s.e7)([b.Z], () => {
            var e;
            return null != (e = b.Z.getChannel(null == j ? void 0 : j.channelId)) ? e : null;
        }),
        q = (0, P.hf)({
            quest: v,
            questContent: S.jn.MEMBERS_LIST,
            sourceQuestContent: S.jn.MEMBERS_LIST
        }),
        X = (0, T.tP)(v),
        Q = (null == v || null == (t = v.userStatus) ? void 0 : t.claimedAt) != null,
        J = (null == v || null == (m = v.userStatus) ? void 0 : m.enrolledAt) != null,
        $ = (null == v || null == (g = v.userStatus) ? void 0 : g.completedAt) != null,
        ee = (0, s.e7)([E.Z], () => E.Z.getState().theme),
        et = (0, l.wj)(ee) ? x.BR.DARK : x.BR.LIGHT,
        en = (0, s.e7)([h.Z], () => h.Z.useReducedMotion),
        { ref: er, height: ei } = (0, _.ZP)(),
        [ea, eo] = i.useState(en),
        es = (0, p.Aq)(),
        el = (0, o.eg)(),
        ec = (0, A.up)(D.dr.MEMBERS_LIST);
    (i.useEffect(() => {
        let e = el.current;
        return (
            null == e || e.addEventListener('scroll', H),
            () => {
                null == e || e.removeEventListener('scroll', H);
            }
        );
    }, [H, el]),
        i.useEffect(() => {
            let e = el.current,
                t = C.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => Y());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [C, el, Y]));
    let eu = (0, u.q_F)({
            from: { height: 0 },
            height: null != ei ? ei : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => eo(!0)
        }),
        ed = (0, u.Yzy)(ea, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        ef = () => {
            es.dispatch(L.CkL.POPOUT_CLOSE);
        },
        e_ = 'top' === Z ? ''.concat(G, ' ').concat(G, ' 0 0') : '0 0 '.concat(G, ' ').concat(G);
    if (null == v || X || (Q && !F(j, z))) return null;
    let ep = () => {
            ((0, I._3)({
                questId: v.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: I.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: S.jn.MEMBERS_LIST
            }),
                (0, w.openDisclosureModal)(v, {
                    content: S.jn.MEMBERS_LIST,
                    ctaContent: I.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: S.jn.MEMBERS_LIST
                }));
        },
        eh = () => {
            ((0, I._3)({
                questId: v.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: I.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: S.jn.MEMBERS_LIST
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: S.jn.MEMBERS_LIST,
                    questId: v.id
                }));
        },
        em = (e) => {
            (e.stopPropagation(), ep());
        },
        eg = () => {
            F(j, z) && null != z
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
                              U(
                                  {
                                      username: null != K ? K : '',
                                      onConfirm: () => (
                                          (0, I._3)({
                                              questId: v.id,
                                              questContent: S.jn.MEMBERS_LIST,
                                              questContentCTA: I.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: S.jn.MEMBERS_LIST
                                          }),
                                          d.default.selectVoiceChannel(z.id),
                                          (0, f.iV)(j)
                                      )
                                  },
                                  t
                              )
                          );
                  }))
                : eh();
        },
        eE =
            $ && !Q
                ? {
                      headerText: M.intl.string(M.t.gHerLS),
                      ctaText: ec,
                      handleClickCta: q,
                      tileAssetType: 'reward'
                  }
                : J && !Q
                  ? {
                        headerText: M.intl.string(M.t.uH2sf3),
                        ctaText: M.intl.string(M.t.VN1Ajo),
                        handleClickCta: eh,
                        tileAssetType: 'reward'
                    }
                  : F(j, z)
                    ? {
                          headerText: M.intl.string(M.t.Bz6SkJ),
                          ctaText: M.intl.string(M.t.BXFP39),
                          handleClickCta: eg,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: M.intl.string(M.t.Bz6SkJ),
                          ctaText: M.intl.string(M.t.BSXPZ2),
                          handleClickCta: eh,
                          tileAssetType: 'game'
                      };
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            W.current = e;
        },
        'aria-expanded': ea,
        className: k.wrapper,
        style: {
            width: null != (O = null == (y = C.current) ? void 0 : y.clientWidth) ? O : V,
            height: eu.height,
            overflow: ea ? 'visible' : 'hidden',
            borderRadius: e_
        },
        children: (0, r.jsxs)('div', {
            ref: (e) => {
                er.current = e;
            },
            className: k.container,
            style: { borderRadius: e_ },
            children: [
                (0, r.jsxs)('div', {
                    className: k.top,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.left,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: eE.headerText
                                }),
                                (0, r.jsxs)(u.P3F, {
                                    className: k.help,
                                    onClick: (e) => {
                                        (ef(), em(e));
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            className: k.helpText,
                                            children: M.intl.format(M.t['Lm8/mJ'], { gamePublisher: v.config.messages.gamePublisher })
                                        }),
                                        (0, r.jsx)(u.idN, {
                                            size: 'custom',
                                            className: k.helpIcon,
                                            width: B,
                                            height: B,
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
                                    ed(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: k.imgUnderlay
                                            })
                                    ),
                                    'game' === eE.tileAssetType &&
                                        (0, r.jsx)('img', {
                                            alt: M.intl.formatToPlainString(M.t.IskzPj, {
                                                gameTitle: v.config.messages.gameTitle,
                                                gamePublisher: v.config.messages.gamePublisher
                                            }),
                                            className: k.assetTile,
                                            src: (0, N.fh)(v, N.eC.GAME_TILE, et).url
                                        }),
                                    'reward' === eE.tileAssetType &&
                                        (0, r.jsx)(R.Z, {
                                            className: k.assetTile,
                                            quest: v,
                                            questContent: S.jn.MEMBERS_LIST,
                                            learnMoreStyle: 'icon',
                                            location: D.dr.MEMBERS_LIST,
                                            onClick: ef,
                                            sourceQuestContent: S.jn.MEMBERS_LIST
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.zx, {
                    onClick: () => {
                        (ef(), eE.handleClickCta());
                    },
                    color: c.zx.Colors.CUSTOM,
                    className: k.ctaButton,
                    children: eE.ctaText
                })
            ]
        })
    });
}
function H(e) {
    return null == e.quest || e.isQuestEnrollmentBlocked
        ? null
        : (0, r.jsx)(C.A, {
              questOrQuests: e.quest,
              questContent: S.jn.MEMBERS_LIST,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: S.jn.MEMBERS_LIST,
              children: (t) => (0, r.jsx)(Z, U({ impressionRef: t }, e))
          });
}
