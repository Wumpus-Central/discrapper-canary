n.d(t, { Z: () => X }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    d = n(924826),
    u = n(873546),
    h = n(442837),
    p = n(481060),
    m = n(239091),
    f = n(144144),
    g = n(607070),
    _ = n(100527),
    C = n(906732),
    x = n(82295),
    v = n(91218),
    E = n(623624),
    I = n(518738),
    b = n(965376),
    Z = n(159299),
    N = n(184301),
    T = n(347475),
    S = n(199902),
    j = n(271383),
    A = n(430824),
    y = n(158776),
    P = n(885110),
    R = n(111583),
    M = n(594174),
    L = n(499033),
    k = n(626135),
    O = n(585483),
    D = n(700785),
    w = n(51144),
    U = n(998502),
    B = n(276264),
    F = n(981631),
    H = n(388032),
    G = n(930418),
    V = n(973249);
let z = U.ZP.getEnableHardwareAcceleration(),
    W = 44 + B.x,
    Y = l.memo(function (e) {
        let { channel: t, sectionId: a, userId: r, guildOwnerId: s } = e,
            o = (0, h.e7)([R.Z], () => R.Z.isTyping(t.id, r)),
            d = (0, h.e7)([j.ZP], () => j.ZP.getMember(t.guild_id, r)),
            g = (0, h.e7)(
                [A.Z],
                () => {
                    var e;
                    return (null == d ? void 0 : d.colorRoleId) != null ? (null === (e = A.Z.getRole(t.guild_id, d.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
                },
                [t.guild_id, d]
            ),
            _ = (0, h.e7)([M.default], () => M.default.getUser(r)),
            C = (0, h.e7)([M.default], () => M.default.getCurrentUser()),
            x = (null == _ ? void 0 : _.id) === (null == C ? void 0 : C.id),
            v = (0, h.e7)([y.Z, P.Z], () => (x ? P.Z.getStatus() : y.Z.getStatus(r, t.guild_id))),
            I = (0, h.e7)([y.Z], () => y.Z.isMobileOnline(r)),
            b = (0, h.e7)([y.Z, P.Z], () => (x ? P.Z.getActivities() : y.Z.getActivities(r, t.guild_id))),
            L = (0, h.e7)([S.Z], () => S.Z.getAnyStreamForUser(r)),
            k = (0, c.JA)(r),
            D = (0, h.e7)([Z.Z], () => Z.Z.canUserViewChannel(t.id, a, r)),
            U = (null == _ ? void 0 : _.id) != null && _.id === s,
            G = l.useCallback(
                (e) => {
                    null != _ &&
                        (0, m.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: _,
                                    guildId: t.guild_id,
                                    channel: t
                                });
                        });
                },
                [_, t]
            ),
            V = l.useCallback(() => {
                if (null == _) return;
                let e = '@'.concat(w.ZP.getUserTag(_, { decoration: 'never' })),
                    n = '<@'.concat(_.id, '>');
                O.S.dispatchToLastSubscribed(F.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n
                }),
                    f.Z.startTyping(t.id);
            }, [_, t]),
            W = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, E.f)({
                            guildId: t.guild_id,
                            location: {
                                section: F.jXE.THREAD_MEMBER_LIST,
                                object: F.qAy.BOOST_GEM_ICON
                            }
                        });
                },
                [t.guild_id]
            );
        if (null == _) return null;
        let Y = null == d ? void 0 : d.premiumSince;
        return (0, i.jsx)(p.yRy, {
            preload: () =>
                (0, N.Z)(_, {
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            renderPopout: (e) =>
                (0, i.jsx)(T.Z, {
                    ...e,
                    userId: _.id,
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            position: u.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: V,
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(B.Z, {
                    onContextMenu: G,
                    shouldAnimateStatus: z,
                    user: _,
                    currentUser: C,
                    nick: null == d ? void 0 : d.nick,
                    status: v,
                    activities: b,
                    colorString: null == d ? void 0 : d.colorString,
                    colorRoleName: g,
                    isTyping: o,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: I,
                    selected: l,
                    applicationStream: L,
                    premiumSince: null == Y ? null : new Date(Y),
                    onClickPremiumGuildIcon: W,
                    itemProps: k,
                    lostPermissionTooltipText: D ? void 0 : H.intl.string(H.t['/QcoT0']),
                    isOwner: U,
                    ...e
                });
            }
        });
    }),
    q = l.memo(function (e) {
        let { id: t, label: n, count: l, guildId: a } = e,
            r = (0, I.p9)({
                roleId: t,
                guildId: a,
                size: 16
            });
        return t === F.Skl.UNKNOWN
            ? (0, i.jsx)('div', {
                  className: V.membersGroup,
                  children: (0, i.jsx)('div', { className: V.memberGroupsPlaceholder })
              })
            : (0, i.jsxs)(x.Z, {
                  className: V.membersGroup,
                  'aria-label': H.intl.formatToPlainString(H.t.UaqbkZ, {
                      title: n,
                      count: l
                  }),
                  children: [
                      null != r
                          ? (0, i.jsx)(v.Z, {
                                className: V.roleIcon,
                                ...r
                            })
                          : null,
                      (0, i.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [n, ' \u2014 ', l]
                      })
                  ]
              });
    }),
    K = l.memo(function (e) {
        let { channel: t } = e;
        return t.type === F.d4z.PRIVATE_THREAD
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', { className: G.divider }),
                      (0, i.jsxs)(p.Text, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: G.private,
                          children: [
                              (0, i.jsx)(p.mBM, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              '\xA0',
                              H.intl.string(H.t.BTLTAg)
                          ]
                      }),
                      (0, i.jsx)(p.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          className: G.instructions,
                          children: H.intl.string(H.t.Hsd8hI)
                      })
                  ]
              })
            : null;
    });
function X(e) {
    let { channel: t, guild: n } = e,
        a = 'members-'.concat(t.id),
        { analyticsLocations: s } = (0, C.ZP)(_.Z.MEMBER_LIST),
        u = (0, b.D)(t.id, n),
        m = u.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: x } = (function (e, t) {
            let n = (0, h.e7)([g.Z], () => g.Z.keyboardModeEnabled),
                i = l.useRef(null),
                a = l.useCallback(
                    (e, n) => {
                        let l = i.current;
                        if (null == l) return;
                        let a = parseInt(n, 10),
                            [r, s] = l.getSectionRowFromIndex(a),
                            o = 0 === r && 0 === s ? t : 0;
                        l.scrollToIndex({
                            section: r,
                            row: s,
                            padding: o,
                            callback: () => {
                                requestAnimationFrame(() => {
                                    var t;
                                    return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                                });
                            }
                        });
                    },
                    [t]
                ),
                r = l.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = i.current;
                            if (null == t) return e();
                            t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                        }),
                    []
                ),
                s = l.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = i.current;
                            if (null == t) return e();
                            t.scrollToBottom({
                                callback() {
                                    requestAnimationFrame(() => setTimeout(e, 100));
                                }
                            });
                        }),
                    []
                );
            return {
                navigator: (0, d.ZP)({
                    id: e,
                    setFocus: a,
                    isEnabled: n,
                    scrollToStart: r,
                    scrollToEnd: s
                }),
                listRef: i
            };
        })(a, W),
        v = 0 === u.length || u.every((e) => 0 === e.userIds.length);
    if (
        (l.useEffect(() => {
            k.default.track(F.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id, t.type]),
        v)
    )
        return (0, i.jsx)(J, { channel: t });
    let E = o().omit(f.containerProps, ['ref']),
        I = D.iJ(n);
    return (0, i.jsx)(C.Gt, {
        value: s,
        children: (0, i.jsx)(c.bG, {
            navigator: f,
            children: (0, i.jsx)(p.Wdt, {
                children: (e) =>
                    (0, i.jsx)('div', {
                        className: r()(V.membersWrap, V.hiddenMembers, G.container),
                        children: (0, i.jsx)(
                            p.aVo,
                            {
                                ref: x,
                                className: V.members,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        l = u[t];
                                    return (0, i.jsx)(
                                        q,
                                        {
                                            id: l.id,
                                            label: l.label,
                                            count: l.userIds.length,
                                            guildId: n.id
                                        },
                                        l.id
                                    );
                                },
                                rowHeight: W,
                                renderRow: (e) => {
                                    let { section: n, row: l } = e,
                                        { userIds: a, id: r } = u[n];
                                    return (0, i.jsx)(
                                        Y,
                                        {
                                            channel: t,
                                            sectionId: r,
                                            userId: a[l],
                                            guildOwnerId: I
                                        },
                                        a[l]
                                    );
                                },
                                footerHeight: (e) => (u[e] === m && t.type === F.d4z.PRIVATE_THREAD ? 80 : 0),
                                renderFooter: (e) => (u[e.section] === m ? (0, i.jsx)(K, { channel: t }, 'footer') : null),
                                innerAriaLabel: H.intl.string(H.t['9Oq93t']),
                                innerTag: 'ul',
                                sections: u.map((e) => e.userIds.length),
                                fade: !0,
                                ...E,
                                ...e
                            },
                            a
                        )
                    })
            })
        })
    });
}
function J(e) {
    let { channel: t } = e;
    return (0, i.jsxs)('div', {
        className: r()(V.membersWrap, V.hiddenMembers, V.members, G.emptyState),
        children: [
            (0, i.jsx)(p.Text, {
                className: G.emptyStateHeader,
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                children: H.intl.string(H.t['9Oq93t'])
            }),
            (0, i.jsxs)('div', {
                className: G.emptyStateIconContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: G.emptyStateIcon,
                        children: (0, i.jsx)(p.BFJ, {
                            size: 'lg',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsx)(L.Z, { className: G.emptyStateStars })
                ]
            }),
            (0, i.jsx)(p.X6q, {
                variant: 'heading-md/semibold',
                children: t.isForumPost() ? H.intl.string(H.t.p0UgNT) : H.intl.string(H.t['9/n5v7'])
            }),
            (0, i.jsx)(p.Text, {
                className: G.emptyStateSubtext,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: H.intl.string(H.t.emw8UF)
            })
        ]
    });
}
