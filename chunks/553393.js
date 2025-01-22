r.d(n, {
    Z: function () {
        return V;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(642128),
    l = r(91192),
    u = r(442837),
    c = r(780384),
    d = r(481060),
    f = r(287734),
    p = r(872810),
    h = r(393238),
    _ = r(40851),
    m = r(607070),
    g = r(258609),
    E = r(102172),
    v = r(210887),
    y = r(592125),
    b = r(430824),
    I = r(496675),
    T = r(979651),
    S = r(617136),
    A = r(113434),
    C = r(497505),
    N = r(475595),
    R = r(602667),
    O = r(644646),
    D = r(667105),
    x = r(341907),
    L = r(46140),
    w = r(981631),
    P = r(231338),
    M = r(388032),
    k = r(763054);
let U = '4px',
    B = '11px',
    G = 222;
function Z(e, n) {
    return null != e && null != n && (0, E.p9)(n, T.Z, b.Z, I.Z, g.Z)[0];
}
function F(e) {
    var n, r, i, g, E;
    let { quest: b, memberListItemRef: I, applicationStream: T, position: R, closePopout: F, updatePosition: V, impressionRef: j } = e,
        H = (0, u.e7)([y.Z], () => {
            var e;
            return null !== (e = y.Z.getChannel(null == T ? void 0 : T.channelId)) && void 0 !== e ? e : null;
        }),
        Y = (0, D.hf)({
            quest: b,
            location: C.jn.MEMBERS_LIST
        }),
        W = (0, A.tP)(b),
        K = (null == b ? void 0 : null === (n = b.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        z = (null == b ? void 0 : null === (r = b.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
        q = (null == b ? void 0 : null === (i = b.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        Q = (0, u.e7)([v.Z], () => v.Z.getState().theme),
        X = (0, c.wj)(Q) ? P.BR.DARK : P.BR.LIGHT,
        J = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        { ref: $, height: ee } = (0, h.Z)(),
        [et, en] = o.useState(J),
        er = (0, _.Aq)(),
        ei = (0, l.eg)();
    o.useEffect(() => {
        let e = ei.current;
        return (
            null == e || e.addEventListener('scroll', F),
            () => {
                null == e || e.removeEventListener('scroll', F);
            }
        );
    }, [F, ei]),
        o.useEffect(() => {
            let e = ei.current,
                n = I.current;
            if (null == e || null == n) return;
            let r = new MutationObserver(() => V());
            return (
                r.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    r.disconnect();
                }
            );
        }, [I, ei, V]);
    let ea = (0, d.useSpring)({
            from: { height: 0 },
            height: null != ee ? ee : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => en(!0)
        }),
        eo = (0, d.useTransition)(et, {
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
            er.dispatch(w.CkL.POPOUT_CLOSE);
        },
        el = 'top' === R ? ''.concat(U, ' ').concat(U, ' 0 0') : '0 0 '.concat(U, ' ').concat(U);
    if (null == b || W || (K && !Z(T, H))) return null;
    let eu = () => {
            (0, S._3)({
                questId: b.id,
                questContent: C.jn.MEMBERS_LIST,
                questContentCTA: S.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, x.openDisclosureModal)(b, {
                    content: C.jn.MEMBERS_LIST,
                    ctaContent: S.jZ.OPEN_DISCLOSURE
                });
        },
        ec = () => {
            (0, S._3)({
                questId: b.id,
                questContent: C.jn.MEMBERS_LIST,
                questContentCTA: S.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, x.navigateToQuestHome)(L.dr.MEMBERS_LIST, C.jn.MEMBERS_LIST, b.id);
        },
        ed = (e) => {
            e.stopPropagation(), eu();
        },
        ef = () => {
            if (Z(T, H) && null != H)
                return (
                    (0, S._3)({
                        questId: b.id,
                        questContent: C.jn.MEMBERS_LIST,
                        questContentCTA: S.jZ.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }),
                    f.default.selectVoiceChannel(H.id),
                    (0, p.iV)(T)
                );
            ec();
        },
        ep = (() =>
            q && !K
                ? {
                      headerText: M.intl.string(M.t.gHerLS),
                      ctaText: M.intl.string(M.t.cfY4PD),
                      handleClickCta: Y,
                      tileAssetType: 'reward'
                  }
                : z && !K
                  ? {
                        headerText: M.intl.string(M.t.uH2sf3),
                        ctaText: M.intl.string(M.t.VN1Ajo),
                        handleClickCta: ec,
                        tileAssetType: 'reward'
                    }
                  : Z(T, H)
                    ? {
                          headerText: M.intl.string(M.t.Bz6SkJ),
                          ctaText: M.intl.string(M.t.BXFP39),
                          handleClickCta: ef,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: M.intl.string(M.t.Bz6SkJ),
                          ctaText: M.intl.string(M.t.BSXPZ2),
                          handleClickCta: ec,
                          tileAssetType: 'game'
                      })();
    return (0, a.jsx)(s.animated.div, {
        ref: (e) => {
            j.current = e;
        },
        'aria-expanded': et,
        className: k.wrapper,
        style: {
            width: null !== (E = null === (g = I.current) || void 0 === g ? void 0 : g.clientWidth) && void 0 !== E ? E : G,
            height: ea.height,
            overflow: et ? 'visible' : 'hidden',
            borderRadius: el
        },
        children: (0, a.jsxs)('div', {
            ref: (e) => {
                $.current = e;
            },
            className: k.container,
            style: { borderRadius: el },
            children: [
                (0, a.jsxs)('div', {
                    className: k.top,
                    children: [
                        (0, a.jsxs)('div', {
                            className: k.left,
                            children: [
                                (0, a.jsx)(d.Heading, {
                                    variant: 'heading-sm/semibold',
                                    children: ep.headerText
                                }),
                                (0, a.jsxs)(d.Clickable, {
                                    className: k.help,
                                    onClick: (e) => {
                                        es(), ed(e);
                                    },
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            className: k.helpText,
                                            children: M.intl.format(M.t['Lm8/mJ'], { gamePublisher: b.config.messages.gamePublisher })
                                        }),
                                        (0, a.jsx)(d.CircleQuestionIcon, {
                                            size: 'custom',
                                            className: k.helpIcon,
                                            width: B,
                                            height: B,
                                            color: d.tokens.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: k.right,
                            children: (0, a.jsxs)('div', {
                                className: k.imgWrapper,
                                children: [
                                    eo(
                                        (e, n) =>
                                            n &&
                                            (0, a.jsx)(s.animated.div, {
                                                style: e,
                                                className: k.imgUnderlay
                                            })
                                    ),
                                    'game' === ep.tileAssetType &&
                                        (0, a.jsx)('img', {
                                            alt: M.intl.formatToPlainString(M.t.IskzPj, {
                                                gameTitle: b.config.messages.gameTitle,
                                                gamePublisher: b.config.messages.gamePublisher
                                            }),
                                            className: k.assetTile,
                                            src: (0, N.fh)(b, N.eC.GAME_TILE, X).url
                                        }),
                                    'reward' === ep.tileAssetType &&
                                        (0, a.jsx)(O.Z, {
                                            className: k.assetTile,
                                            quest: b,
                                            questContent: C.jn.MEMBERS_LIST,
                                            learnMoreStyle: 'icon',
                                            location: L.dr.MEMBERS_LIST,
                                            onClick: es
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, a.jsx)(d.Button, {
                    onClick: () => {
                        es(), ep.handleClickCta();
                    },
                    color: d.Button.Colors.CUSTOM,
                    className: k.ctaButton,
                    children: ep.ctaText
                })
            ]
        })
    });
}
function V(e) {
    return null == e.quest
        ? null
        : (0, a.jsx)(R.A, {
              questOrQuests: e.quest,
              questContent: C.jn.MEMBERS_LIST,
              trackGuildAndChannelMetadata: !0,
              children: (n) =>
                  (0, a.jsx)(F, {
                      impressionRef: n,
                      ...e
                  })
          });
}
