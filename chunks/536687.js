n.r(t),
    n.d(t, {
        default: function () {
            return O;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(780384),
    u = n(481060),
    c = n(607070),
    d = n(210887),
    m = n(617136),
    v = n(113434),
    E = n(569984),
    p = n(497505),
    f = n(918701),
    C = n(475595),
    S = n(566078),
    g = n(164495),
    x = n(472144),
    h = n(602667),
    _ = n(644646),
    T = n(604162),
    D = n(747717),
    N = n(963123),
    I = n(281055),
    A = n(46140),
    j = n(981631),
    b = n(388032),
    L = n(451680);
function R(e) {
    var t;
    let { transitionState: n, onClose: l, quest: E, autoplay: R, videoSessionId: O } = e,
        k = (0, f.il)(E),
        M = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        P = (0, a.wj)(M) ? j.BRd.DARK : j.BRd.LIGHT,
        y = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        [q, w] = i.useState(k.progressSeconds),
        [B, U] = i.useState(!1),
        { completedRatio: F, completedRatioDisplay: Z } = (0, v.I)(E),
        [V, Y] = (0, T.G6)(b.intl.string(b.t.RDE0SU), b.intl.string(b.t['+5kSoa']), 1700),
        G = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? b.intl.string(b.t.vTgCW1) : b.intl.string(b.t.cfY4PD),
        z = i.useCallback(() => {
            (0, f.f2)(E.id, {
                content: p.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                Y();
        }, [E.id, Y]),
        H = () => {
            (0, f.FE)(E, {
                content: p.jn.VIDEO_MODAL,
                ctaContent: m.jZ.OPEN_GAME_LINK
            });
        },
        K = () => {
            U(!0);
        },
        Q = () => {
            U(!1);
        },
        W = i.useMemo(() => S.r.build(E.config).defaultReward.messages.name, [E]),
        X = b.intl.formatToPlainString(b.t['12IWPz'], { rewardName: W });
    return (0, r.jsx)(u.ModalRoot, {
        transitionState: n,
        size: u.ModalSize.DYNAMIC,
        className: L.modalRoot,
        children: (0, r.jsx)(h.A, {
            questOrQuests: E,
            questContent: p.jn.VIDEO_MODAL,
            minViewTimeSeconds: I.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
                var t, i;
                return (0, r.jsx)('div', {
                    ref: (t) => {
                        e.current = t;
                    },
                    className: L.modalBg,
                    children: (0, r.jsx)('div', {
                        className: L.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: L.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: L.contentHeader,
                                    children: [
                                        (0, r.jsxs)(u.Clickable, {
                                            className: L.contentHeaderGameInfo,
                                            onClick: H,
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: E.config.messages.gameTitle,
                                                    className: o()(L.contentHeaderLogotype, L.accentOnHover),
                                                    src: (0, C.fh)(E, C.eC.LOGO_TYPE, P).url
                                                }),
                                                (0, r.jsx)(D.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: L.questHeading,
                                                    children: [
                                                        (0, r.jsx)(u.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: b.intl.format(b.t.EQa7oq, { questName: E.config.messages.questName })
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'header-secondary',
                                                            children: E.config.messages.gameTitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(u.Tooltip, {
                                            position: 'left',
                                            text: X,
                                            onTooltipShow: K,
                                            onTooltipHide: Q,
                                            children: (e) =>
                                                (0, r.jsx)(u.Clickable, {
                                                    className: L.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(x.Z, {
                                                        quest: E,
                                                        size: 48,
                                                        percentComplete: F,
                                                        percentCompleteText: B ? Z : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(_.Z, {
                                                            className: L.questProgressRewardTile,
                                                            quest: E,
                                                            questContent: p.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: A.dr.VIDEO_MODAL
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(N.Z, {
                                    quest: E,
                                    videoSessionId: O,
                                    parentTransitionState: n,
                                    onOptimisticProgressUpdate: w,
                                    autoplay: R
                                }),
                                (0, r.jsxs)('div', {
                                    className: L.contentFooter,
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            onClick: l,
                                            color: u.Button.Colors.PRIMARY,
                                            size: u.Button.Sizes.MEDIUM,
                                            children: b.intl.string(b.t.cpT0Cg)
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: L.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(u.Button, {
                                                    color: u.Button.Colors.PRIMARY,
                                                    onClick: z,
                                                    size: u.Button.Sizes.NONE,
                                                    className: L.copyLinkBtn,
                                                    children: V
                                                }),
                                                (0, r.jsx)(g.i0, {
                                                    className: L.claimBtn,
                                                    size: u.Button.Sizes.MEDIUM,
                                                    quest: E,
                                                    useReducedMotion: y,
                                                    isExpanded: (null === (t = E.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                                    disabled: (null === (i = E.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                                    ctaLabel: G
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                });
            }
        })
    });
}
function O(e) {
    let { questId: t, overrideQuest: n, autoplay: i, ...l } = e,
        o = (0, s.e7)([E.Z], () => E.Z.getQuest(t)),
        a = null != n ? n : o;
    return null != a
        ? (0, r.jsx)(R, {
              ...l,
              quest: a,
              autoplay: i
          })
        : null;
}
