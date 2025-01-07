var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(666912),
    l = r(91192),
    u = r(442837),
    c = r(780384),
    d = r(481060),
    f = r(287734),
    _ = r(872810),
    h = r(393238),
    p = r(40851),
    m = r(607070),
    g = r(258609),
    E = r(102172),
    v = r(210887),
    I = r(592125),
    T = r(430824),
    b = r(496675),
    y = r(979651),
    S = r(617136),
    A = r(113434),
    N = r(497505),
    C = r(475595),
    R = r(602667),
    O = r(644646),
    D = r(667105),
    L = r(341907),
    x = r(46140),
    w = r(981631),
    P = r(231338),
    M = r(388032),
    k = r(763054);
let U = '4px',
    B = '11px',
    G = 222;
function Z(e, n) {
    return null != e && null != n && (0, E.p9)(n, y.Z, T.Z, b.Z, g.Z)[0];
}
function F(e) {
    var n, r, i;
    let { quest: g, memberListItemRef: E, applicationStream: T, position: b, closePopout: y, updatePosition: F } = e,
        V = (0, u.e7)([I.Z], () => {
            var e;
            return null !== (e = I.Z.getChannel(null == T ? void 0 : T.channelId)) && void 0 !== e ? e : null;
        }),
        j = (0, D.hf)({
            quest: g,
            location: N.jn.MEMBERS_LIST
        }),
        H = (0, A.tP)(g),
        Y = (null == g ? void 0 : null === (n = g.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        W = (null == g ? void 0 : null === (r = g.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
        K = (null == g ? void 0 : null === (i = g.userStatus) || void 0 === i ? void 0 : i.completedAt) != null,
        z = (0, u.e7)([v.Z], () => v.Z.getState().theme),
        q = (0, c.wj)(z) ? P.BR.DARK : P.BR.LIGHT,
        Q = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        { ref: X, height: J } = (0, h.Z)(),
        [$, ee] = s.useState(Q),
        et = (0, p.Aq)(),
        en = (0, l.eg)();
    s.useEffect(() => {
        let e = en.current;
        return (
            null == e || e.addEventListener('scroll', y),
            () => {
                null == e || e.removeEventListener('scroll', y);
            }
        );
    }, [y, en]),
        s.useEffect(() => {
            let e = en.current,
                n = E.current;
            if (null == e || null == n) return;
            let r = new MutationObserver(() => F());
            return (
                r.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    r.disconnect();
                }
            );
        }, [E, en, F]);
    let er = (0, d.useSpring)({
            from: { height: 0 },
            height: null != J ? J : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => ee(!0)
        }),
        ei = (0, d.useTransition)($, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        ea = () => {
            et.dispatch(w.CkL.POPOUT_CLOSE);
        },
        es = 'top' === b ? ''.concat(U, ' ').concat(U, ' 0 0') : '0 0 '.concat(U, ' ').concat(U);
    if (null == g || H || (Y && !Z(T, V))) return null;
    let eo = () => {
            (0, S._3)({
                questId: g.id,
                questContent: N.jn.MEMBERS_LIST,
                questContentCTA: S.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, L.openDisclosureModal)(g, {
                    content: N.jn.MEMBERS_LIST,
                    ctaContent: S.jZ.OPEN_DISCLOSURE
                });
        },
        el = () => {
            (0, S._3)({
                questId: g.id,
                questContent: N.jn.MEMBERS_LIST,
                questContentCTA: S.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, L.navigateToQuestHome)(x.dr.MEMBERS_LIST, N.jn.MEMBERS_LIST, g.id);
        },
        eu = (e) => {
            e.stopPropagation(), eo();
        },
        ec = () => {
            if (Z(T, V) && null != V)
                return (
                    (0, S._3)({
                        questId: g.id,
                        questContent: N.jn.MEMBERS_LIST,
                        questContentCTA: S.jZ.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }),
                    f.default.selectVoiceChannel(V.id),
                    (0, _.iV)(T)
                );
            el();
        },
        ed = (() =>
            K && !Y
                ? {
                      headerText: M.intl.string(M.t.gHerLS),
                      ctaText: M.intl.string(M.t.cfY4PD),
                      handleClickCta: j,
                      tileAssetType: 'reward'
                  }
                : W && !Y
                  ? {
                        headerText: M.intl.string(M.t.uH2sf3),
                        ctaText: M.intl.string(M.t.VN1Ajo),
                        handleClickCta: el,
                        tileAssetType: 'reward'
                    }
                  : Z(T, V)
                    ? {
                          headerText: M.intl.string(M.t.Bz6SkJ),
                          ctaText: M.intl.string(M.t.BXFP39),
                          handleClickCta: ec,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: M.intl.string(M.t.Bz6SkJ),
                          ctaText: M.intl.string(M.t.BSXPZ2),
                          handleClickCta: el,
                          tileAssetType: 'game'
                      })();
    return (0, a.jsx)(R.A, {
        questOrQuests: g,
        questContent: N.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        children: (e) => {
            var n, r;
            return (0, a.jsx)(o.animated.div, {
                ref: (n) => {
                    e.current = n;
                },
                'aria-expanded': $,
                className: k.wrapper,
                style: {
                    width: null !== (r = null === (n = E.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== r ? r : G,
                    height: er.height,
                    overflow: $ ? 'visible' : 'hidden',
                    borderRadius: es
                },
                children: (0, a.jsxs)('div', {
                    ref: (e) => {
                        X.current = e;
                    },
                    className: k.container,
                    style: { borderRadius: es },
                    children: [
                        (0, a.jsxs)('div', {
                            className: k.top,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: k.left,
                                    children: [
                                        (0, a.jsx)(d.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: ed.headerText
                                        }),
                                        (0, a.jsxs)(d.Clickable, {
                                            className: k.help,
                                            onClick: (e) => {
                                                ea(), eu(e);
                                            },
                                            children: [
                                                (0, a.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    className: k.helpText,
                                                    children: M.intl.format(M.t['Lm8/mJ'], { gamePublisher: g.config.messages.gamePublisher })
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
                                            ei(
                                                (e, n) =>
                                                    n &&
                                                    (0, a.jsx)(o.animated.div, {
                                                        style: e,
                                                        className: k.imgUnderlay
                                                    })
                                            ),
                                            'game' === ed.tileAssetType &&
                                                (0, a.jsx)('img', {
                                                    alt: M.intl.formatToPlainString(M.t.IskzPj, {
                                                        gameTitle: g.config.messages.gameTitle,
                                                        gamePublisher: g.config.messages.gamePublisher
                                                    }),
                                                    className: k.assetTile,
                                                    src: (0, C.fh)(g, C.eC.GAME_TILE, q).url
                                                }),
                                            'reward' === ed.tileAssetType &&
                                                (0, a.jsx)(O.Z, {
                                                    className: k.assetTile,
                                                    quest: g,
                                                    questContent: N.jn.MEMBERS_LIST,
                                                    learnMoreStyle: 'icon',
                                                    location: x.dr.MEMBERS_LIST,
                                                    onClick: ea
                                                })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)(d.Button, {
                            onClick: () => {
                                ea(), ed.handleClickCta();
                            },
                            color: d.Button.Colors.CUSTOM,
                            className: k.ctaButton,
                            children: ed.ctaText
                        })
                    ]
                })
            });
        }
    });
}
n.Z = F;
