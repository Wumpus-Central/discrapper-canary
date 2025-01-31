n.d(t, { default: () => k }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    a = n(780384),
    u = n(481060),
    c = n(607070),
    d = n(210887),
    m = n(617136),
    v = n(915750),
    E = n(113434),
    C = n(569984),
    p = n(497505),
    S = n(918701),
    f = n(475595),
    g = n(566078),
    x = n(164495),
    h = n(472144),
    _ = n(602667),
    T = n(644646),
    N = n(604162),
    D = n(747717),
    j = n(963123),
    I = n(281055),
    A = n(46140),
    b = n(981631),
    L = n(388032),
    O = n(451680);
function R(e) {
    var t, n, i;
    let { transitionState: C, onClose: _, quest: I, autoplay: R, videoSessionId: k, impressionRef: M } = e,
        P = (0, S.il)(I),
        q = (0, o.e7)([d.Z], () => d.Z.getState().theme),
        y = (0, a.wj)(q) ? b.BRd.DARK : b.BRd.LIGHT,
        w = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        F = (0, v.aM)(),
        [B, U] = l.useState(P.progressSeconds),
        [Z, V] = l.useState(!1),
        { completedRatio: Y, completedRatioDisplay: z } = (0, E.I)(I),
        [G, H] = (0, N.G6)(L.intl.string(L.t.RDE0SU), L.intl.string(L.t['+5kSoa']), 1700),
        K = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? L.intl.string(L.t.vTgCW1) : L.intl.string(L.t.cfY4PD),
        X = l.useCallback(() => {
            (0, S.f2)(I.id, {
                content: p.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: F
            }),
                H();
        }, [F, I.id, H]),
        Q = l.useMemo(() => g.r.build(I.config).defaultReward.messages.name, [I]),
        W = L.intl.formatToPlainString(L.t['12IWPz'], { rewardName: Q });
    return (0, r.jsx)(u.Y0X, {
        transitionState: C,
        size: u.CgR.DYNAMIC,
        className: O.modalRoot,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                M.current = e;
            },
            className: O.modalBg,
            children: (0, r.jsx)('div', {
                className: O.modalBody,
                children: (0, r.jsxs)('div', {
                    className: O.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: O.contentHeader,
                            children: [
                                (0, r.jsxs)(u.P3F, {
                                    className: O.contentHeaderGameInfo,
                                    onClick: () => {
                                        (0, S.FE)(I, {
                                            content: p.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: F
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: I.config.messages.gameTitle,
                                            className: s()(O.contentHeaderLogotype, O.accentOnHover),
                                            src: (0, f.fh)(I, f.eC.LOGO_TYPE, y).url
                                        }),
                                        (0, r.jsx)(D.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: O.questHeading,
                                            children: [
                                                (0, r.jsx)(u.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: L.intl.format(L.t.EQa7oq, { questName: I.config.messages.questName })
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: I.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(u.ua7, {
                                    position: 'left',
                                    text: W,
                                    onTooltipShow: () => {
                                        V(!0);
                                    },
                                    onTooltipHide: () => {
                                        V(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(u.P3F, {
                                            className: O.progressCont,
                                            ...e,
                                            children: (0, r.jsx)(h.Z, {
                                                quest: I,
                                                size: 48,
                                                percentComplete: Y,
                                                percentCompleteText: Z ? z : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(T.Z, {
                                                    className: O.questProgressRewardTile,
                                                    quest: I,
                                                    questContent: p.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: A.dr.VIDEO_MODAL
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, r.jsx)(j.Z, {
                            quest: I,
                            videoSessionId: k,
                            parentTransitionState: C,
                            onOptimisticProgressUpdate: U,
                            autoplay: R
                        }),
                        (0, r.jsxs)('div', {
                            className: O.contentFooter,
                            children: [
                                (0, r.jsx)(u.zxk, {
                                    onClick: _,
                                    color: u.zxk.Colors.PRIMARY,
                                    size: u.zxk.Sizes.MEDIUM,
                                    children: L.intl.string(L.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: O.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(u.zxk, {
                                            color: u.zxk.Colors.PRIMARY,
                                            onClick: X,
                                            size: u.zxk.Sizes.NONE,
                                            className: O.copyLinkBtn,
                                            children: G
                                        }),
                                        (0, r.jsx)(x.i0, {
                                            className: O.claimBtn,
                                            size: u.zxk.Sizes.MEDIUM,
                                            quest: I,
                                            useReducedMotion: w,
                                            isExpanded: (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (i = I.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
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
    let { questId: t, overrideQuest: n, autoplay: l, ...i } = e,
        s = (0, o.e7)([C.Z], () => C.Z.getQuest(t)),
        a = null != n ? n : s;
    return null != a
        ? (0, r.jsx)(_.A, {
              questOrQuests: a,
              questContent: p.jn.VIDEO_MODAL,
              minViewTimeSeconds: I.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                  (0, r.jsx)(R, {
                      ...i,
                      impressionRef: e,
                      quest: a,
                      autoplay: l
                  })
          })
        : null;
}
