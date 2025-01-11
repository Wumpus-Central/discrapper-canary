n.d(t, {
    Z: function () {
        return X;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(100527),
    x = n(906732),
    v = n(82295),
    _ = n(91218),
    I = n(623624),
    E = n(518738),
    b = n(965376),
    Z = n(159299),
    N = n(184301),
    S = n(347475),
    T = n(199902),
    j = n(271383),
    A = n(430824),
    y = n(158776),
    P = n(885110),
    M = n(111583),
    R = n(594174),
    L = n(499033),
    k = n(626135),
    O = n(585483),
    D = n(700785),
    w = n(51144),
    B = n(998502),
    U = n(276264),
    H = n(981631),
    G = n(388032),
    F = n(930418),
    V = n(973249);
let z = B.ZP.getEnableHardwareAcceleration(),
    W = 44 + U.x,
    K = l.memo(function (e) {
        let { channel: t, sectionId: r, userId: a, guildOwnerId: s } = e,
            o = (0, h.e7)([M.Z], () => M.Z.isTyping(t.id, a)),
            d = (0, h.e7)([j.ZP], () => j.ZP.getMember(t.guild_id, a)),
            g = (0, h.e7)(
                [A.Z],
                () => {
                    var e;
                    return (null == d ? void 0 : d.colorRoleId) != null ? (null === (e = A.Z.getRole(t.guild_id, d.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
                },
                [t.guild_id, d]
            ),
            C = (0, h.e7)([R.default], () => R.default.getUser(a)),
            x = (0, h.e7)([R.default], () => R.default.getCurrentUser()),
            v = (null == C ? void 0 : C.id) === (null == x ? void 0 : x.id),
            _ = (0, h.e7)([y.Z, P.Z], () => (v ? P.Z.getStatus() : y.Z.getStatus(a, t.guild_id))),
            E = (0, h.e7)([y.Z], () => y.Z.isMobileOnline(a)),
            b = (0, h.e7)([y.Z, P.Z], () => (v ? P.Z.getActivities() : y.Z.getActivities(a, t.guild_id))),
            L = (0, h.e7)([T.Z], () => T.Z.getAnyStreamForUser(a)),
            k = (0, c.JA)(a),
            D = (0, h.e7)([Z.Z], () => Z.Z.canUserViewChannel(t.id, r, a)),
            B = (null == C ? void 0 : C.id) != null && C.id === s,
            F = l.useCallback(
                (e) => {
                    null != C &&
                        (0, m.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: C,
                                    guildId: t.guild_id,
                                    channel: t
                                });
                        });
                },
                [C, t]
            ),
            V = l.useCallback(() => {
                if (null == C) return;
                let e = '@'.concat(w.ZP.getUserTag(C, { decoration: 'never' })),
                    n = '<@'.concat(C.id, '>');
                O.S.dispatchToLastSubscribed(H.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n
                }),
                    f.Z.startTyping(t.id);
            }, [C, t]),
            W = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, I.f)({
                            guildId: t.guild_id,
                            location: {
                                section: H.jXE.THREAD_MEMBER_LIST,
                                object: H.qAy.BOOST_GEM_ICON
                            }
                        });
                },
                [t.guild_id]
            );
        if (null == C) return null;
        let K = null == d ? void 0 : d.premiumSince;
        return (0, i.jsx)(p.Popout, {
            preload: () =>
                (0, N.Z)(C, {
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            renderPopout: (e) =>
                (0, i.jsx)(S.Z, {
                    ...e,
                    userId: C.id,
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            position: u.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: V,
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(U.Z, {
                    onContextMenu: F,
                    shouldAnimateStatus: z,
                    user: C,
                    currentUser: x,
                    nick: null == d ? void 0 : d.nick,
                    status: _,
                    activities: b,
                    colorString: null == d ? void 0 : d.colorString,
                    colorRoleName: g,
                    isTyping: o,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: E,
                    selected: l,
                    applicationStream: L,
                    premiumSince: null == K ? null : new Date(K),
                    onClickPremiumGuildIcon: W,
                    itemProps: k,
                    lostPermissionTooltipText: D ? void 0 : G.intl.string(G.t['/QcoT0']),
                    isOwner: B,
                    ...e
                });
            }
        });
    }),
    Y = l.memo(function (e) {
        let { id: t, label: n, count: l, guildId: r } = e,
            a = (0, E.p9)({
                roleId: t,
                guildId: r,
                size: 16
            });
        return t === H.Skl.UNKNOWN
            ? (0, i.jsx)('div', {
                  className: V.membersGroup,
                  children: (0, i.jsx)('div', { className: V.memberGroupsPlaceholder })
              })
            : (0, i.jsxs)(v.Z, {
                  className: V.membersGroup,
                  'aria-label': G.intl.formatToPlainString(G.t.UaqbkZ, {
                      title: n,
                      count: l
                  }),
                  children: [
                      null != a
                          ? (0, i.jsx)(_.Z, {
                                className: V.roleIcon,
                                ...a
                            })
                          : null,
                      (0, i.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [n, ' \u2014 ', l]
                      })
                  ]
              });
    }),
    q = l.memo(function (e) {
        let { channel: t } = e;
        return t.type === H.d4z.PRIVATE_THREAD
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', { className: F.divider }),
                      (0, i.jsxs)(p.Text, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: F.private,
                          children: [
                              (0, i.jsx)(p.LockIcon, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              '\xA0',
                              G.intl.string(G.t.BTLTAg)
                          ]
                      }),
                      (0, i.jsx)(p.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          className: F.instructions,
                          children: G.intl.string(G.t.Hsd8hI)
                      })
                  ]
              })
            : null;
    });
function X(e) {
    let { channel: t, guild: n } = e,
        r = 'members-'.concat(t.id),
        { analyticsLocations: s } = (0, x.ZP)(C.Z.MEMBER_LIST),
        u = (0, b.D)(t.id, n),
        m = u.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: v } = (function (e, t) {
            let n = (0, h.e7)([g.Z], () => g.Z.keyboardModeEnabled),
                i = l.useRef(null),
                r = l.useCallback(
                    (e, n) => {
                        let l = i.current;
                        if (null == l) return;
                        let r = parseInt(n, 10),
                            [a, s] = l.getSectionRowFromIndex(r),
                            o = 0 === a && 0 === s ? t : 0;
                        l.scrollToIndex({
                            section: a,
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
                a = l.useCallback(
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
                    setFocus: r,
                    isEnabled: n,
                    scrollToStart: a,
                    scrollToEnd: s
                }),
                listRef: i
            };
        })(r, W),
        _ = 0 === u.length || u.every((e) => 0 === e.userIds.length);
    if (
        (l.useEffect(() => {
            k.default.track(H.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id, t.type]),
        _)
    )
        return (0, i.jsx)(J, { channel: t });
    let I = o().omit(f.containerProps, ['ref']),
        E = D.iJ(n);
    return (0, i.jsx)(x.Gt, {
        value: s,
        children: (0, i.jsx)(c.bG, {
            navigator: f,
            children: (0, i.jsx)(p.FocusJumpSection, {
                children: (e) =>
                    (0, i.jsx)('div', {
                        className: a()(V.membersWrap, V.hiddenMembers, F.container),
                        children: (0, i.jsx)(
                            p.List,
                            {
                                ref: v,
                                className: V.members,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        l = u[t];
                                    return (0, i.jsx)(
                                        Y,
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
                                        { userIds: r, id: a } = u[n];
                                    return (0, i.jsx)(
                                        K,
                                        {
                                            channel: t,
                                            sectionId: a,
                                            userId: r[l],
                                            guildOwnerId: E
                                        },
                                        r[l]
                                    );
                                },
                                footerHeight: (e) => (u[e] === m && t.type === H.d4z.PRIVATE_THREAD ? 80 : 0),
                                renderFooter: (e) => (u[e.section] === m ? (0, i.jsx)(q, { channel: t }, 'footer') : null),
                                innerAriaLabel: G.intl.string(G.t['9Oq93t']),
                                innerTag: 'ul',
                                sections: u.map((e) => e.userIds.length),
                                fade: !0,
                                ...I,
                                ...e
                            },
                            r
                        )
                    })
            })
        })
    });
}
function J(e) {
    let { channel: t } = e;
    return (0, i.jsxs)('div', {
        className: a()(V.membersWrap, V.hiddenMembers, V.members, F.emptyState),
        children: [
            (0, i.jsx)(p.Text, {
                className: F.emptyStateHeader,
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                children: G.intl.string(G.t['9Oq93t'])
            }),
            (0, i.jsxs)('div', {
                className: F.emptyStateIconContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: F.emptyStateIcon,
                        children: (0, i.jsx)(p.GroupIcon, {
                            size: 'lg',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsx)(L.Z, { className: F.emptyStateStars })
                ]
            }),
            (0, i.jsx)(p.Heading, {
                variant: 'heading-md/semibold',
                children: t.isForumPost() ? G.intl.string(G.t.p0UgNT) : G.intl.string(G.t['9/n5v7'])
            }),
            (0, i.jsx)(p.Text, {
                className: F.emptyStateSubtext,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: G.intl.string(G.t.emw8UF)
            })
        ]
    });
}
