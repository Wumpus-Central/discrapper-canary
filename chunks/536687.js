n.r(t), n.d(t, { default: () => M }), n(47120);
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
    p = n(569984),
    C = n(497505),
    f = n(918701),
    S = n(475595),
    g = n(566078),
    x = n(164495),
    _ = n(472144),
    h = n(602667),
    T = n(644646),
    D = n(604162),
    N = n(747717),
    j = n(963123),
    I = n(281055),
    A = n(46140),
    b = n(981631),
    L = n(388032),
    O = n(43465),
    R = n(653294);
function k(e) {
    var t, n, i, p;
    let h,
        { transitionState: I, onClose: k, quest: M, autoplay: P, videoSessionId: y, impressionRef: q, startTime: w } = e,
        B = (0, f.il)(M),
        F = (0, o.e7)([d.Z], () => d.Z.getState().theme),
        U = (0, a.wj)(F) ? b.BRd.DARK : b.BRd.LIGHT,
        Z = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        V = (0, v.aM)(),
        [Y, z] = l.useState(B.progressSeconds),
        [G, H] = l.useState(!1),
        { completedRatio: K, completedRatioDisplay: Q } = (0, E.I)(M),
        [X, W] = (0, D.G6)(L.intl.string(L.t.RDE0SU), L.intl.string(L.t['+5kSoa']), 1700);
    if ((0, f.xN)(M.config) && (null === (t = M.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null) {
        let e = (0, f.LM)(M.config);
        h = (0, r.jsxs)('span', {
            className: O.orbClaimCopy,
            children: [
                L.intl.string(L.t.sB3lwM),
                (0, r.jsx)('img', {
                    src: R,
                    alt: ''
                }),
                (0, r.jsx)('span', { children: e }),
                L.intl.string(L.t.jyYgZ2)
            ]
        });
    } else h = (null === (p = M.userStatus) || void 0 === p ? void 0 : p.claimedAt) != null ? L.intl.string(L.t.vTgCW1) : L.intl.string(L.t.cfY4PD);
    let $ = l.useCallback(() => {
            (0, f.f2)(M.id, {
                content: C.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: V
            }),
                W();
        }, [V, M.id, W]),
        J = l.useMemo(() => g.r.build(M.config).defaultReward.messages.name, [M]),
        ee = L.intl.formatToPlainString(L.t['12IWPz'], { rewardName: J });
    return (0, r.jsx)(u.Y0X, {
        transitionState: I,
        size: u.CgR.DYNAMIC,
        className: O.modalRoot,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                q.current = e;
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
                                        (0, f.FE)(M, {
                                            content: C.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: V
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: M.config.messages.gameTitle,
                                            className: s()(O.contentHeaderLogotype, O.accentOnHover),
                                            src: (0, S.fh)(M, S.eC.LOGO_TYPE, U).url
                                        }),
                                        (0, r.jsx)(N.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: O.questHeading,
                                            children: [
                                                (0, r.jsx)(u.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: L.intl.format(L.t.EQa7oq, { questName: M.config.messages.questName })
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: M.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(u.ua7, {
                                    position: 'left',
                                    text: ee,
                                    onTooltipShow: () => {
                                        H(!0);
                                    },
                                    onTooltipHide: () => {
                                        H(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(u.P3F, {
                                            className: O.progressCont,
                                            ...e,
                                            children: (0, r.jsx)(_.Z, {
                                                quest: M,
                                                size: 48,
                                                percentComplete: K,
                                                percentCompleteText: G ? Q : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(T.Z, {
                                                    className: O.questProgressRewardTile,
                                                    quest: M,
                                                    questContent: C.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: A.dr.VIDEO_MODAL
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, r.jsx)(j.Z, {
                            quest: M,
                            videoSessionId: y,
                            parentTransitionState: I,
                            onOptimisticProgressUpdate: z,
                            autoplay: P,
                            startTime: w
                        }),
                        (0, r.jsxs)('div', {
                            className: O.contentFooter,
                            children: [
                                (0, r.jsx)(u.zxk, {
                                    onClick: k,
                                    color: u.zxk.Colors.PRIMARY,
                                    size: u.zxk.Sizes.MEDIUM,
                                    className: O.footerBtn,
                                    children: L.intl.string(L.t.cpT0Cg)
                                }),
                                (0, r.jsxs)('div', {
                                    className: O.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(u.zxk, {
                                            color: u.zxk.Colors.PRIMARY,
                                            onClick: $,
                                            size: u.zxk.Sizes.NONE,
                                            className: s()(O.copyLinkBtn, O.footerBtn),
                                            children: X
                                        }),
                                        (0, r.jsx)(x.i0, {
                                            className: O.claimBtn,
                                            size: u.zxk.Sizes.MEDIUM,
                                            quest: M,
                                            useReducedMotion: Z,
                                            isExpanded: (null === (n = M.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (i = M.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                            ctaLabel: h
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
function M(e) {
    let { questId: t, overrideQuest: n, autoplay: l, startTime: i, ...s } = e,
        a = (0, o.e7)([p.Z], () => p.Z.getQuest(t)),
        u = null != n ? n : a;
    return null != u
        ? (0, r.jsx)(h.A, {
              questOrQuests: u,
              questContent: C.jn.VIDEO_MODAL,
              minViewTimeSeconds: I.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                  (0, r.jsx)(k, {
                      ...s,
                      startTime: i,
                      impressionRef: e,
                      quest: u,
                      autoplay: l
                  })
          })
        : null;
}
