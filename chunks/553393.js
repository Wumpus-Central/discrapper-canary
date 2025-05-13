n.d(t, { Z: () => V }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(683305),
    o = n(91192),
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
    T = n(475595),
    A = n(602667),
    N = n(644646),
    C = n(667105),
    P = n(341907),
    R = n(46140),
    w = n(981631),
    D = n(231338),
    L = n(388032),
    x = n(777444);
function k(e, t, n) {
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
function M(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
let j = '8px',
    U = '11px',
    G = 222;
function B(e, t) {
    return null != e && null != t && (0, m.p9)(t, O.Z, b.Z, y.Z, h.Z)[0];
}
function F(e) {
    var t, h, m, b, y;
    let { quest: O, memberListItemRef: A, applicationStream: k, position: F, closePopout: V, updatePosition: Z, impressionRef: H, name: Y } = e,
        W = (0, s.e7)([E.Z], () => {
            var e;
            return null != (e = E.Z.getChannel(null == k ? void 0 : k.channelId)) ? e : null;
        }),
        K = (0, C.hf)({
            quest: O,
            location: S.jn.MEMBERS_LIST
        }),
        z = (0, I.tP)(O),
        q = (null == O || null == (t = O.userStatus) ? void 0 : t.claimedAt) != null,
        Q = (null == O || null == (h = O.userStatus) ? void 0 : h.enrolledAt) != null,
        X = (null == O || null == (m = O.userStatus) ? void 0 : m.completedAt) != null,
        J = (0, s.e7)([g.Z], () => g.Z.getState().theme),
        $ = (0, l.wj)(J) ? D.BR.DARK : D.BR.LIGHT,
        ee = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        { ref: et, height: en } = (0, f.ZP)(),
        [er, ei] = i.useState(ee),
        ea = (0, _.Aq)(),
        eo = (0, o.eg)();
    i.useEffect(() => {
        let e = eo.current;
        return (
            null == e || e.addEventListener('scroll', V),
            () => {
                null == e || e.removeEventListener('scroll', V);
            }
        );
    }, [V, eo]),
        i.useEffect(() => {
            let e = eo.current,
                t = A.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => Z());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [A, eo, Z]);
    let es = (0, c.q_F)({
            from: { height: 0 },
            height: null != en ? en : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => ei(!0)
        }),
        el = (0, c.Yzy)(er, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        ec = () => {
            ea.dispatch(w.CkL.POPOUT_CLOSE);
        },
        eu = 'top' === F ? ''.concat(j, ' ').concat(j, ' 0 0') : '0 0 '.concat(j, ' ').concat(j);
    if (null == O || z || (q && !B(k, W))) return null;
    let ed = () => {
            (0, v._3)({
                questId: O.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: v.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, P.openDisclosureModal)(O, {
                    content: S.jn.MEMBERS_LIST,
                    ctaContent: v.jZ.OPEN_DISCLOSURE
                });
        },
        ef = () => {
            (0, v._3)({
                questId: O.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: v.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, P.navigateToQuestHome)({
                    fromContent: S.jn.MEMBERS_LIST,
                    questId: O.id
                });
        },
        e_ = (e) => {
            e.stopPropagation(), ed();
        },
        ep = () => {
            B(k, W) && null != W
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
                              M(
                                  {
                                      username: null != Y ? Y : '',
                                      onConfirm: () => (
                                          (0, v._3)({
                                              questId: O.id,
                                              questContent: S.jn.MEMBERS_LIST,
                                              questContentCTA: v.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0
                                          }),
                                          u.default.selectVoiceChannel(W.id),
                                          (0, d.iV)(k)
                                      )
                                  },
                                  t
                              )
                          );
                  }))
                : ef();
        },
        eh =
            X && !q
                ? {
                      headerText: L.intl.string(L.t.gHerLS),
                      ctaText: L.intl.string(L.t.cfY4PD),
                      handleClickCta: K,
                      tileAssetType: 'reward'
                  }
                : Q && !q
                  ? {
                        headerText: L.intl.string(L.t.uH2sf3),
                        ctaText: L.intl.string(L.t.VN1Ajo),
                        handleClickCta: ef,
                        tileAssetType: 'reward'
                    }
                  : B(k, W)
                    ? {
                          headerText: L.intl.string(L.t.Bz6SkJ),
                          ctaText: L.intl.string(L.t.BXFP39),
                          handleClickCta: ep,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: L.intl.string(L.t.Bz6SkJ),
                          ctaText: L.intl.string(L.t.BSXPZ2),
                          handleClickCta: ef,
                          tileAssetType: 'game'
                      };
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            H.current = e;
        },
        'aria-expanded': er,
        className: x.wrapper,
        style: {
            width: null != (y = null == (b = A.current) ? void 0 : b.clientWidth) ? y : G,
            height: es.height,
            overflow: er ? 'visible' : 'hidden',
            borderRadius: eu
        },
        children: (0, r.jsxs)('div', {
            ref: (e) => {
                et.current = e;
            },
            className: x.container,
            style: { borderRadius: eu },
            children: [
                (0, r.jsxs)('div', {
                    className: x.top,
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.left,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: eh.headerText
                                }),
                                (0, r.jsxs)(c.P3F, {
                                    className: x.help,
                                    onClick: (e) => {
                                        ec(), e_(e);
                                    },
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            className: x.helpText,
                                            children: L.intl.format(L.t['Lm8/mJ'], { gamePublisher: O.config.messages.gamePublisher })
                                        }),
                                        (0, r.jsx)(c.idN, {
                                            size: 'custom',
                                            className: x.helpIcon,
                                            width: U,
                                            height: U,
                                            color: c.TVs.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: x.right,
                            children: (0, r.jsxs)('div', {
                                className: x.imgWrapper,
                                children: [
                                    el(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: x.imgUnderlay
                                            })
                                    ),
                                    'game' === eh.tileAssetType &&
                                        (0, r.jsx)('img', {
                                            alt: L.intl.formatToPlainString(L.t.IskzPj, {
                                                gameTitle: O.config.messages.gameTitle,
                                                gamePublisher: O.config.messages.gamePublisher
                                            }),
                                            className: x.assetTile,
                                            src: (0, T.fh)(O, T.eC.GAME_TILE, $).url
                                        }),
                                    'reward' === eh.tileAssetType &&
                                        (0, r.jsx)(N.Z, {
                                            className: x.assetTile,
                                            quest: O,
                                            questContent: S.jn.MEMBERS_LIST,
                                            learnMoreStyle: 'icon',
                                            location: R.dr.MEMBERS_LIST,
                                            onClick: ec
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.zxk, {
                    onClick: () => {
                        ec(), eh.handleClickCta();
                    },
                    color: c.zxk.Colors.CUSTOM,
                    className: x.ctaButton,
                    children: eh.ctaText
                })
            ]
        })
    });
}
function V(e) {
    return null == e.quest || e.isQuestEnrollmentBlocked
        ? null
        : (0, r.jsx)(A.A, {
              questOrQuests: e.quest,
              questContent: S.jn.MEMBERS_LIST,
              trackGuildAndChannelMetadata: !0,
              children: (t) => (0, r.jsx)(F, M({ impressionRef: t }, e))
          });
}
