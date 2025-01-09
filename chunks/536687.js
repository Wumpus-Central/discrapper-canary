n.r(t),
    n.d(t, {
        default: function () {
            return k;
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
    v = n(915750),
    E = n(113434),
    p = n(569984),
    C = n(497505),
    f = n(918701),
    S = n(475595),
    g = n(566078),
    x = n(164495),
    h = n(472144),
    _ = n(602667),
    T = n(644646),
    N = n(604162),
    D = n(747717),
    I = n(963123),
    A = n(281055),
    j = n(46140),
    b = n(981631),
    R = n(388032),
    L = n(451680);
function O(e) {
    var t, n, l;
    let { transitionState: p, onClose: _, quest: A, autoplay: O, videoSessionId: k, impressionRef: M } = e,
        P = (0, f.il)(A),
        y = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        q = (0, a.wj)(y) ? b.BRd.DARK : b.BRd.LIGHT,
        w = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        B = (0, v.aM)(),
        [U, F] = i.useState(P.progressSeconds),
        [Z, V] = i.useState(!1),
        { completedRatio: Y, completedRatioDisplay: G } = (0, E.I)(A),
        [z, H] = (0, N.G6)(R.intl.string(R.t.RDE0SU), R.intl.string(R.t['+5kSoa']), 1700),
        K = (null === (t = A.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? R.intl.string(R.t.vTgCW1) : R.intl.string(R.t.cfY4PD),
        Q = i.useCallback(() => {
            (0, f.f2)(A.id, {
                content: C.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: B
            }),
                H();
        }, [B, A.id, H]),
        W = i.useMemo(() => g.r.build(A.config).defaultReward.messages.name, [A]),
        X = R.intl.formatToPlainString(R.t['12IWPz'], { rewardName: W });
    return (0, r.jsx)(u.ModalRoot, {
        transitionState: p,
        size: u.ModalSize.DYNAMIC,
        className: L.modalRoot,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                M.current = e;
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
                                    onClick: () => {
                                        (0, f.FE)(A, {
                                            content: C.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: B
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: A.config.messages.gameTitle,
                                            className: o()(L.contentHeaderLogotype, L.accentOnHover),
                                            src: (0, S.fh)(A, S.eC.LOGO_TYPE, q).url
                                        }),
                                        (0, r.jsx)(D.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: L.questHeading,
                                            children: [
                                                (0, r.jsx)(u.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: R.intl.format(R.t.EQa7oq, { questName: A.config.messages.questName })
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: A.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(u.Tooltip, {
                                    position: 'left',
                                    text: X,
                                    onTooltipShow: () => {
                                        V(!0);
                                    },
                                    onTooltipHide: () => {
                                        V(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(u.Clickable, {
                                            className: L.progressCont,
                                            ...e,
                                            children: (0, r.jsx)(h.Z, {
                                                quest: A,
                                                size: 48,
                                                percentComplete: Y,
                                                percentCompleteText: Z ? G : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(T.Z, {
                                                    className: L.questProgressRewardTile,
                                                    quest: A,
                                                    questContent: C.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: j.dr.VIDEO_MODAL
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, r.jsx)(I.Z, {
                            quest: A,
                            videoSessionId: k,
                            parentTransitionState: p,
                            onOptimisticProgressUpdate: F,
                            autoplay: O
                        }),
                        (0, r.jsxs)('div', {
                            className: L.contentFooter,
                            children: [
                                (0, r.jsx)(u.Button, {
                                    onClick: _,
                                    color: u.Button.Colors.PRIMARY,
                                    size: u.Button.Sizes.MEDIUM,
                                    children: R.intl.string(R.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: L.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            color: u.Button.Colors.PRIMARY,
                                            onClick: Q,
                                            size: u.Button.Sizes.NONE,
                                            className: L.copyLinkBtn,
                                            children: z
                                        }),
                                        (0, r.jsx)(x.i0, {
                                            className: L.claimBtn,
                                            size: u.Button.Sizes.MEDIUM,
                                            quest: A,
                                            useReducedMotion: w,
                                            isExpanded: (null === (n = A.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (l = A.userStatus) || void 0 === l ? void 0 : l.completedAt) == null,
                                            ctaLabel: K
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
function k(e) {
    let { questId: t, overrideQuest: n, autoplay: i, ...l } = e,
        o = (0, s.e7)([p.Z], () => p.Z.getQuest(t)),
        a = null != n ? n : o;
    return null != a
        ? (0, r.jsx)(_.A, {
              questOrQuests: a,
              questContent: C.jn.VIDEO_MODAL,
              minViewTimeSeconds: A.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                  (0, r.jsx)(O, {
                      ...l,
                      impressionRef: e,
                      quest: a,
                      autoplay: i
                  })
          })
        : null;
}
