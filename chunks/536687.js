n.r(t), n.d(t, { default: () => k }), n(47120);
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
    O = n(451680);
function R(e) {
    var t, n, i;
    let { transitionState: p, onClose: h, quest: I, autoplay: R, videoSessionId: k, impressionRef: M } = e,
        P = (0, f.il)(I),
        q = (0, o.e7)([d.Z], () => d.Z.getState().theme),
        y = (0, a.wj)(q) ? b.BRd.DARK : b.BRd.LIGHT,
        w = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        B = (0, v.aM)(),
        [F, U] = l.useState(P.progressSeconds),
        [Z, V] = l.useState(!1),
        { completedRatio: Y, completedRatioDisplay: z } = (0, E.I)(I),
        [G, H] = (0, D.G6)(L.intl.string(L.t.RDE0SU), L.intl.string(L.t['+5kSoa']), 1700),
        K = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? L.intl.string(L.t.vTgCW1) : L.intl.string(L.t.cfY4PD),
        Q = l.useCallback(() => {
            (0, f.f2)(I.id, {
                content: C.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL,
                impressionId: B
            }),
                H();
        }, [B, I.id, H]),
        X = l.useMemo(() => g.r.build(I.config).defaultReward.messages.name, [I]),
        W = L.intl.formatToPlainString(L.t['12IWPz'], { rewardName: X });
    return (0, r.jsx)(u.Y0X, {
        transitionState: p,
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
                                        (0, f.FE)(I, {
                                            content: C.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK,
                                            impressionId: B
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: I.config.messages.gameTitle,
                                            className: s()(O.contentHeaderLogotype, O.accentOnHover),
                                            src: (0, S.fh)(I, S.eC.LOGO_TYPE, y).url
                                        }),
                                        (0, r.jsx)(N.Z, {}),
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
                                            children: (0, r.jsx)(_.Z, {
                                                quest: I,
                                                size: 48,
                                                percentComplete: Y,
                                                percentCompleteText: Z ? z : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(T.Z, {
                                                    className: O.questProgressRewardTile,
                                                    quest: I,
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
                            quest: I,
                            videoSessionId: k,
                            parentTransitionState: p,
                            onOptimisticProgressUpdate: U,
                            autoplay: R
                        }),
                        (0, r.jsxs)('div', {
                            className: O.contentFooter,
                            children: [
                                (0, r.jsx)(u.zxk, {
                                    onClick: h,
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
                                            onClick: Q,
                                            size: u.zxk.Sizes.NONE,
                                            className: s()(O.copyLinkBtn, O.footerBtn),
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
        s = (0, o.e7)([p.Z], () => p.Z.getQuest(t)),
        a = null != n ? n : s;
    return null != a
        ? (0, r.jsx)(h.A, {
              questOrQuests: a,
              questContent: C.jn.VIDEO_MODAL,
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
