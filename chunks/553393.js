n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(91192),
    o = n(442837),
    l = n(780384),
    u = n(481060),
    c = n(287734),
    d = n(872810),
    f = n(393238),
    _ = n(40851),
    p = n(607070),
    h = n(258609),
    m = n(102172),
    g = n(210887),
    E = n(592125),
    v = n(430824),
    y = n(496675),
    I = n(979651),
    T = n(617136),
    b = n(113434),
    S = n(497505),
    A = n(475595),
    N = n(602667),
    C = n(644646),
    R = n(667105),
    O = n(341907),
    D = n(46140),
    x = n(981631),
    L = n(231338),
    P = n(388032),
    w = n(763054);
let M = '4px',
    k = '11px',
    U = 222;
function G(e, t) {
    return null != e && null != t && (0, m.p9)(t, I.Z, v.Z, y.Z, h.Z)[0];
}
function B(e) {
    var t, n, h, m, v;
    let { quest: y, memberListItemRef: I, applicationStream: N, position: B, closePopout: Z, updatePosition: F, impressionRef: V } = e,
        j = (0, o.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getChannel(null == N ? void 0 : N.channelId)) && void 0 !== e ? e : null;
        }),
        H = (0, R.hf)({
            quest: y,
            location: S.jn.MEMBERS_LIST
        }),
        Y = (0, b.tP)(y),
        W = (null == y ? void 0 : null === (t = y.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        K = (null == y ? void 0 : null === (n = y.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        z = (null == y ? void 0 : null === (h = y.userStatus) || void 0 === h ? void 0 : h.completedAt) != null,
        q = (0, o.e7)([g.Z], () => g.Z.getState().theme),
        Q = (0, l.wj)(q) ? L.BR.DARK : L.BR.LIGHT,
        X = (0, o.e7)([p.Z], () => p.Z.useReducedMotion),
        { ref: J, height: $ } = (0, f.Z)(),
        [ee, et] = r.useState(X),
        en = (0, _.Aq)(),
        ei = (0, s.eg)();
    r.useEffect(() => {
        let e = ei.current;
        return (
            null == e || e.addEventListener('scroll', Z),
            () => {
                null == e || e.removeEventListener('scroll', Z);
            }
        );
    }, [Z, ei]),
        r.useEffect(() => {
            let e = ei.current,
                t = I.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => F());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [I, ei, F]);
    let er = (0, u.q_F)({
            from: { height: 0 },
            height: null != $ ? $ : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => et(!0)
        }),
        ea = (0, u.Yzy)(ee, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        es = () => {
            en.dispatch(x.CkL.POPOUT_CLOSE);
        },
        eo = 'top' === B ? ''.concat(M, ' ').concat(M, ' 0 0') : '0 0 '.concat(M, ' ').concat(M);
    if (null == y || Y || (W && !G(N, j))) return null;
    let el = () => {
            (0, T._3)({
                questId: y.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: T.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, O.openDisclosureModal)(y, {
                    content: S.jn.MEMBERS_LIST,
                    ctaContent: T.jZ.OPEN_DISCLOSURE
                });
        },
        eu = () => {
            (0, T._3)({
                questId: y.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: T.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, O.navigateToQuestHome)(D.dr.MEMBERS_LIST, S.jn.MEMBERS_LIST, y.id);
        },
        ec = (e) => {
            e.stopPropagation(), el();
        },
        ed = () => {
            if (G(N, j) && null != j)
                return (
                    (0, T._3)({
                        questId: y.id,
                        questContent: S.jn.MEMBERS_LIST,
                        questContentCTA: T.jZ.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }),
                    c.default.selectVoiceChannel(j.id),
                    (0, d.iV)(N)
                );
            eu();
        },
        ef =
            z && !W
                ? {
                      headerText: P.intl.string(P.t.gHerLS),
                      ctaText: P.intl.string(P.t.cfY4PD),
                      handleClickCta: H,
                      tileAssetType: 'reward'
                  }
                : K && !W
                  ? {
                        headerText: P.intl.string(P.t.uH2sf3),
                        ctaText: P.intl.string(P.t.VN1Ajo),
                        handleClickCta: eu,
                        tileAssetType: 'reward'
                    }
                  : G(N, j)
                    ? {
                          headerText: P.intl.string(P.t.Bz6SkJ),
                          ctaText: P.intl.string(P.t.BXFP39),
                          handleClickCta: ed,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: P.intl.string(P.t.Bz6SkJ),
                          ctaText: P.intl.string(P.t.BSXPZ2),
                          handleClickCta: eu,
                          tileAssetType: 'game'
                      };
    return (0, i.jsx)(a.animated.div, {
        ref: (e) => {
            V.current = e;
        },
        'aria-expanded': ee,
        className: w.wrapper,
        style: {
            width: null !== (v = null === (m = I.current) || void 0 === m ? void 0 : m.clientWidth) && void 0 !== v ? v : U,
            height: er.height,
            overflow: ee ? 'visible' : 'hidden',
            borderRadius: eo
        },
        children: (0, i.jsxs)('div', {
            ref: (e) => {
                J.current = e;
            },
            className: w.container,
            style: { borderRadius: eo },
            children: [
                (0, i.jsxs)('div', {
                    className: w.top,
                    children: [
                        (0, i.jsxs)('div', {
                            className: w.left,
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: ef.headerText
                                }),
                                (0, i.jsxs)(u.P3F, {
                                    className: w.help,
                                    onClick: (e) => {
                                        es(), ec(e);
                                    },
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            className: w.helpText,
                                            children: P.intl.format(P.t['Lm8/mJ'], { gamePublisher: y.config.messages.gamePublisher })
                                        }),
                                        (0, i.jsx)(u.idN, {
                                            size: 'custom',
                                            className: w.helpIcon,
                                            width: k,
                                            height: k,
                                            color: u.TVs.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: w.right,
                            children: (0, i.jsxs)('div', {
                                className: w.imgWrapper,
                                children: [
                                    ea(
                                        (e, t) =>
                                            t &&
                                            (0, i.jsx)(a.animated.div, {
                                                style: e,
                                                className: w.imgUnderlay
                                            })
                                    ),
                                    'game' === ef.tileAssetType &&
                                        (0, i.jsx)('img', {
                                            alt: P.intl.formatToPlainString(P.t.IskzPj, {
                                                gameTitle: y.config.messages.gameTitle,
                                                gamePublisher: y.config.messages.gamePublisher
                                            }),
                                            className: w.assetTile,
                                            src: (0, A.fh)(y, A.eC.GAME_TILE, Q).url
                                        }),
                                    'reward' === ef.tileAssetType &&
                                        (0, i.jsx)(C.Z, {
                                            className: w.assetTile,
                                            quest: y,
                                            questContent: S.jn.MEMBERS_LIST,
                                            learnMoreStyle: 'icon',
                                            location: D.dr.MEMBERS_LIST,
                                            onClick: es
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(u.zxk, {
                    onClick: () => {
                        es(), ef.handleClickCta();
                    },
                    color: u.zxk.Colors.CUSTOM,
                    className: w.ctaButton,
                    children: ef.ctaText
                })
            ]
        })
    });
}
function Z(e) {
    return null == e.quest
        ? null
        : (0, i.jsx)(N.A, {
              questOrQuests: e.quest,
              questContent: S.jn.MEMBERS_LIST,
              trackGuildAndChannelMetadata: !0,
              children: (t) =>
                  (0, i.jsx)(B, {
                      impressionRef: t,
                      ...e
                  })
          });
}
