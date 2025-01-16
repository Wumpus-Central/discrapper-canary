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
    C = n(569984),
    p = n(497505),
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
    j = n(281055),
    A = n(46140),
    b = n(981631),
    L = n(388032),
    R = n(451680);
function O(e) {
    var t, n, l;
    let { transitionState: C, onClose: _, quest: j, autoplay: O, videoSessionId: k, impressionRef: M } = e,
        P = (0, f.il)(j),
        y = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        q = (0, a.wj)(y) ? b.BRd.DARK : b.BRd.LIGHT,
        B = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        w = (0, v.aM)(),
        [U, Z] = i.useState(P.progressSeconds),
        [F, V] = i.useState(!1),
        { completedRatio: Y, completedRatioDisplay: G } = (0, E.I)(j),
        [z, H] = (0, N.G6)(L.intl.string(L.t.RDE0SU), L.intl.string(L.t['+5kSoa']), 1700),
        K = (null === (t = j.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? L.intl.string(L.t.vTgCW1) : L.intl.string(L.t.cfY4PD),
        Q = i.useCallback(() => {
            (0, f.f2)(j.id, {
                content: p.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: w
            }),
                H();
        }, [w, j.id, H]),
        W = i.useMemo(() => g.r.build(j.config).defaultReward.messages.name, [j]),
        X = L.intl.formatToPlainString(L.t['12IWPz'], { rewardName: W });
    return (0, r.jsx)(u.ModalRoot, {
        transitionState: C,
        size: u.ModalSize.DYNAMIC,
        className: R.modalRoot,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                M.current = e;
            },
            className: R.modalBg,
            children: (0, r.jsx)('div', {
                className: R.modalBody,
                children: (0, r.jsxs)('div', {
                    className: R.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.contentHeader,
                            children: [
                                (0, r.jsxs)(u.Clickable, {
                                    className: R.contentHeaderGameInfo,
                                    onClick: () => {
                                        (0, f.FE)(j, {
                                            content: p.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: w
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: j.config.messages.gameTitle,
                                            className: o()(R.contentHeaderLogotype, R.accentOnHover),
                                            src: (0, S.fh)(j, S.eC.LOGO_TYPE, q).url
                                        }),
                                        (0, r.jsx)(D.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: R.questHeading,
                                            children: [
                                                (0, r.jsx)(u.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: L.intl.format(L.t.EQa7oq, { questName: j.config.messages.questName })
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: j.config.messages.gameTitle
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
                                            className: R.progressCont,
                                            ...e,
                                            children: (0, r.jsx)(h.Z, {
                                                quest: j,
                                                size: 48,
                                                percentComplete: Y,
                                                percentCompleteText: F ? G : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(T.Z, {
                                                    className: R.questProgressRewardTile,
                                                    quest: j,
                                                    questContent: p.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: A.dr.VIDEO_MODAL
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, r.jsx)(I.Z, {
                            quest: j,
                            videoSessionId: k,
                            parentTransitionState: C,
                            onOptimisticProgressUpdate: Z,
                            autoplay: O
                        }),
                        (0, r.jsxs)('div', {
                            className: R.contentFooter,
                            children: [
                                (0, r.jsx)(u.Button, {
                                    onClick: _,
                                    color: u.Button.Colors.PRIMARY,
                                    size: u.Button.Sizes.MEDIUM,
                                    children: L.intl.string(L.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            color: u.Button.Colors.PRIMARY,
                                            onClick: Q,
                                            size: u.Button.Sizes.NONE,
                                            className: R.copyLinkBtn,
                                            children: z
                                        }),
                                        (0, r.jsx)(x.i0, {
                                            className: R.claimBtn,
                                            size: u.Button.Sizes.MEDIUM,
                                            quest: j,
                                            useReducedMotion: B,
                                            isExpanded: (null === (n = j.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (l = j.userStatus) || void 0 === l ? void 0 : l.completedAt) == null,
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
        o = (0, s.e7)([C.Z], () => C.Z.getQuest(t)),
        a = null != n ? n : o;
    return null != a
        ? (0, r.jsx)(_.A, {
              questOrQuests: a,
              questContent: p.jn.VIDEO_MODAL,
              minViewTimeSeconds: j.zw,
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
