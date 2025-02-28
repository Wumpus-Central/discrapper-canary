n.d(t, { Z: () => H }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
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
    g = n(102172),
    m = n(210887),
    E = n(592125),
    v = n(430824),
    b = n(496675),
    y = n(979651),
    O = n(617136),
    S = n(113434),
    I = n(497505),
    T = n(918701),
    N = n(475595),
    A = n(602667),
    C = n(644646),
    R = n(880199),
    P = n(667105),
    D = n(341907),
    w = n(46140),
    L = n(981631),
    x = n(231338),
    M = n(388032),
    k = n(379206);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
let G = '4px',
    B = '11px',
    V = 222;
function F(e, t) {
    return null != e && null != t && (0, g.p9)(t, y.Z, v.Z, b.Z, h.Z)[0];
}
function Z(e) {
    var t, n, h, g, v;
    let { quest: b, memberListItemRef: y, applicationStream: A, position: j, closePopout: U, updatePosition: Z, impressionRef: H } = e,
        W = (0, s.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getChannel(null == A ? void 0 : A.channelId)) && void 0 !== e ? e : null;
        }),
        Y = (0, P.hf)({
            quest: b,
            location: I.jn.MEMBERS_LIST
        }),
        K = (0, S.tP)(b),
        z = (null == b ? void 0 : null === (t = b.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        q = (null == b ? void 0 : null === (n = b.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        Q = (null == b ? void 0 : null === (h = b.userStatus) || void 0 === h ? void 0 : h.completedAt) != null,
        X = (0, s.e7)([m.Z], () => m.Z.getState().theme),
        J = (0, l.wj)(X) ? x.BR.DARK : x.BR.LIGHT,
        $ = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        { ref: ee, height: et } = (0, f.Z)(),
        [en, er] = i.useState($),
        ei = (0, _.Aq)(),
        eo = (0, a.eg)();
    i.useEffect(() => {
        let e = eo.current;
        return (
            null == e || e.addEventListener('scroll', U),
            () => {
                null == e || e.removeEventListener('scroll', U);
            }
        );
    }, [U, eo]),
        i.useEffect(() => {
            let e = eo.current,
                t = y.current;
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
        }, [y, eo, Z]);
    let ea = (0, c.q_F)({
            from: { height: 0 },
            height: null != et ? et : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => er(!0)
        }),
        es = (0, c.Yzy)(en, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        el = () => {
            ei.dispatch(L.CkL.POPOUT_CLOSE);
        },
        ec = 'top' === j ? ''.concat(G, ' ').concat(G, ' 0 0') : '0 0 '.concat(G, ' ').concat(G);
    if (null == b || K || (z && !F(A, W))) return null;
    let eu = () => {
            (0, O._3)({
                questId: b.id,
                questContent: I.jn.MEMBERS_LIST,
                questContentCTA: O.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, D.openDisclosureModal)(b, {
                    content: I.jn.MEMBERS_LIST,
                    ctaContent: O.jZ.OPEN_DISCLOSURE
                });
        },
        ed = () => {
            (0, O._3)({
                questId: b.id,
                questContent: I.jn.MEMBERS_LIST,
                questContentCTA: O.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, D.navigateToQuestHome)({
                    fromContent: I.jn.MEMBERS_LIST,
                    questId: b.id
                });
        },
        ef = (e) => {
            e.stopPropagation(), eu();
        },
        e_ = () => {
            if (F(A, W) && null != W)
                return (
                    (0, O._3)({
                        questId: b.id,
                        questContent: I.jn.MEMBERS_LIST,
                        questContentCTA: O.jZ.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }),
                    u.default.selectVoiceChannel(W.id),
                    (0, d.iV)(A)
                );
            ed();
        },
        ep =
            Q && !z
                ? {
                      headerText: M.NW.string(M.t.gHerLS),
                      ctaText: (0, T.xN)(b.config) ? (0, r.jsx)(R.Z, { orbQuantity: (0, T.LM)(b.config) }) : M.NW.string(M.t.cfY4PD),
                      handleClickCta: Y,
                      tileAssetType: 'reward'
                  }
                : q && !z
                  ? {
                        headerText: M.NW.string(M.t.uH2sf3),
                        ctaText: M.NW.string(M.t.VN1Ajo),
                        handleClickCta: ed,
                        tileAssetType: 'reward'
                    }
                  : F(A, W)
                    ? {
                          headerText: M.NW.string(M.t.Bz6SkJ),
                          ctaText: M.NW.string(M.t.BXFP39),
                          handleClickCta: e_,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: M.NW.string(M.t.Bz6SkJ),
                          ctaText: M.NW.string(M.t.BSXPZ2),
                          handleClickCta: ed,
                          tileAssetType: 'game'
                      };
    return (0, r.jsx)(o.animated.div, {
        ref: (e) => {
            H.current = e;
        },
        'aria-expanded': en,
        className: k.wrapper,
        style: {
            width: null !== (v = null === (g = y.current) || void 0 === g ? void 0 : g.clientWidth) && void 0 !== v ? v : V,
            height: ea.height,
            overflow: en ? 'visible' : 'hidden',
            borderRadius: ec
        },
        children: (0, r.jsxs)('div', {
            ref: (e) => {
                ee.current = e;
            },
            className: k.container,
            style: { borderRadius: ec },
            children: [
                (0, r.jsxs)('div', {
                    className: k.top,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.left,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: ep.headerText
                                }),
                                (0, r.jsxs)(c.P3F, {
                                    className: k.help,
                                    onClick: (e) => {
                                        el(), ef(e);
                                    },
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            className: k.helpText,
                                            children: M.NW.format(M.t['Lm8/mJ'], { gamePublisher: b.config.messages.gamePublisher })
                                        }),
                                        (0, r.jsx)(c.idN, {
                                            size: 'custom',
                                            className: k.helpIcon,
                                            width: B,
                                            height: B,
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
                                    es(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(o.animated.div, {
                                                style: e,
                                                className: k.imgUnderlay
                                            })
                                    ),
                                    'game' === ep.tileAssetType &&
                                        (0, r.jsx)('img', {
                                            alt: M.NW.formatToPlainString(M.t.IskzPj, {
                                                gameTitle: b.config.messages.gameTitle,
                                                gamePublisher: b.config.messages.gamePublisher
                                            }),
                                            className: k.assetTile,
                                            src: (0, N.fh)(b, N.eC.GAME_TILE, J).url
                                        }),
                                    'reward' === ep.tileAssetType &&
                                        (0, r.jsx)(C.Z, {
                                            className: k.assetTile,
                                            quest: b,
                                            questContent: I.jn.MEMBERS_LIST,
                                            learnMoreStyle: 'icon',
                                            location: w.dr.MEMBERS_LIST,
                                            onClick: el
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.zxk, {
                    onClick: () => {
                        el(), ep.handleClickCta();
                    },
                    color: c.zxk.Colors.CUSTOM,
                    className: k.ctaButton,
                    children: ep.ctaText
                })
            ]
        })
    });
}
function H(e) {
    return null == e.quest
        ? null
        : (0, r.jsx)(A.A, {
              questOrQuests: e.quest,
              questContent: I.jn.MEMBERS_LIST,
              trackGuildAndChannelMetadata: !0,
              children: (t) => (0, r.jsx)(Z, U({ impressionRef: t }, e))
          });
}
