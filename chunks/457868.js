n.d(t, { Z: () => Q }), n(978209), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    p = n(442837),
    h = n(481060),
    f = n(239091),
    m = n(144144),
    g = n(607070),
    b = n(100527),
    _ = n(906732),
    C = n(82295),
    v = n(91218),
    y = n(623624),
    x = n(518738),
    j = n(965376),
    O = n(159299),
    N = n(184301),
    E = n(347475),
    P = n(199902),
    I = n(271383),
    S = n(430824),
    Z = n(158776),
    T = n(885110),
    A = n(111583),
    w = n(594174),
    R = n(499033),
    k = n(626135),
    M = n(585483),
    L = n(700785),
    D = n(51144),
    W = n(998502),
    U = n(276264),
    B = n(981631),
    F = n(388032),
    H = n(624143),
    G = n(920915);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = W.ZP.getEnableHardwareAcceleration(),
    Y = 44 + U.x,
    K = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: o, guildOwnerId: a } = e,
            s = (0, p.e7)([A.Z], () => A.Z.isTyping(t.id, o)),
            u = (0, p.e7)([I.ZP], () => I.ZP.getMember(t.guild_id, o)),
            g = (0, p.e7)(
                [S.Z],
                () => {
                    var e;
                    return (null == u ? void 0 : u.colorRoleId) != null ? (null === (e = S.Z.getRole(t.guild_id, u.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
                },
                [t.guild_id, u]
            ),
            b = (0, p.e7)([w.default], () => w.default.getUser(o)),
            _ = (0, p.e7)([w.default], () => w.default.getCurrentUser()),
            C = (null == b ? void 0 : b.id) === (null == _ ? void 0 : _.id),
            v = (0, p.e7)([Z.Z, T.Z], () => (C ? T.Z.getStatus() : Z.Z.getStatus(o, t.guild_id))),
            x = (0, p.e7)([Z.Z], () => Z.Z.isMobileOnline(o)),
            j = (0, p.e7)([Z.Z, T.Z], () => (C ? T.Z.getActivities() : Z.Z.getActivities(o, t.guild_id))),
            R = (0, p.e7)([P.Z], () => P.Z.getAnyStreamForUser(o)),
            k = (0, c.JA)(o),
            L = (0, p.e7)([O.Z], () => O.Z.canUserViewChannel(t.id, l, o)),
            W = (null == b ? void 0 : b.id) != null && b.id === a,
            H = i.useCallback(
                (e) => {
                    null != b &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    z(V({}, n), {
                                        user: b,
                                        guildId: t.guild_id,
                                        channel: t
                                    })
                                );
                        });
                },
                [b, t]
            ),
            G = i.useCallback(() => {
                if (null == b) return;
                let e = '@'.concat(D.ZP.getUserTag(b, { decoration: 'never' })),
                    n = '<@'.concat(b.id, '>');
                M.S.dispatchToLastSubscribed(B.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n
                }),
                    m.Z.startTyping(t.id);
            }, [b, t]),
            Y = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, y.f)({
                            guildId: t.guild_id,
                            location: {
                                section: B.jXE.THREAD_MEMBER_LIST,
                                object: B.qAy.BOOST_GEM_ICON
                            }
                        });
                },
                [t.guild_id]
            );
        if (null == b) return null;
        let K = null == u ? void 0 : u.premiumSince;
        return (0, r.jsx)(h.yRy, {
            preload: () =>
                (0, N.Z)(b, {
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            renderPopout: (e) =>
                (0, r.jsx)(
                    E.Z,
                    z(V({}, e), {
                        userId: b.id,
                        guildId: t.guild_id,
                        channelId: t.id
                    })
                ),
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: G,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(
                    U.Z,
                    V(
                        {
                            onContextMenu: H,
                            shouldAnimateStatus: q,
                            user: b,
                            currentUser: _,
                            nick: null == u ? void 0 : u.nick,
                            status: v,
                            activities: j,
                            colorString: null == u ? void 0 : u.colorString,
                            colorRoleName: g,
                            isTyping: s,
                            channel: t,
                            guildId: t.guild_id,
                            isMobile: x,
                            selected: i,
                            applicationStream: R,
                            premiumSince: null == K ? null : new Date(K),
                            onClickPremiumGuildIcon: Y,
                            itemProps: k,
                            lostPermissionTooltipText: L ? void 0 : F.NW.string(F.t['/QcoT0']),
                            isOwner: W
                        },
                        e
                    )
                );
            }
        });
    }),
    X = i.memo(function (e) {
        let { id: t, label: n, count: i, guildId: l } = e,
            o = (0, x.p9)({
                roleId: t,
                guildId: l,
                size: 16
            });
        return t === B.Skl.UNKNOWN
            ? (0, r.jsx)('div', {
                  className: G.membersGroup,
                  children: (0, r.jsx)('div', { className: G.memberGroupsPlaceholder })
              })
            : (0, r.jsxs)(C.Z, {
                  className: G.membersGroup,
                  'aria-label': F.NW.formatToPlainString(F.t.UaqbkZ, {
                      title: n,
                      count: i
                  }),
                  children: [
                      null != o ? (0, r.jsx)(v.Z, V({ className: G.roleIcon }, o)) : null,
                      (0, r.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [n, ' \u2014 ', i]
                      })
                  ]
              });
    }),
    J = i.memo(function (e) {
        let { channel: t } = e;
        return t.type === B.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: H.divider }),
                      (0, r.jsxs)(h.Text, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: H.private,
                          children: [
                              (0, r.jsx)(h.mBM, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              '\xA0',
                              F.NW.string(F.t.BTLTAg)
                          ]
                      }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          className: H.instructions,
                          children: F.NW.string(F.t.Hsd8hI)
                      })
                  ]
              })
            : null;
    });
function Q(e) {
    let { channel: t, guild: n } = e,
        l = 'members-'.concat(t.id),
        { analyticsLocations: a } = (0, _.ZP)(b.Z.MEMBER_LIST),
        d = (0, j.D)(t.id, n),
        f = d.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: m, listRef: C } = (function (e, t) {
            let n = (0, p.e7)([g.Z], () => g.Z.keyboardModeEnabled),
                r = i.useRef(null),
                l = i.useCallback(
                    (e, n) => {
                        let i = r.current;
                        if (null == i) return;
                        let l = parseInt(n, 10),
                            [o, a] = i.getSectionRowFromIndex(l),
                            s = 0 === o && 0 === a ? t : 0;
                        i.scrollToIndex({
                            section: o,
                            row: a,
                            padding: s,
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
                o = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = r.current;
                            if (null == t) return e();
                            t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                        }),
                    []
                ),
                a = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = r.current;
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
                navigator: (0, u.ZP)({
                    id: e,
                    setFocus: l,
                    isEnabled: n,
                    scrollToStart: o,
                    scrollToEnd: a
                }),
                listRef: r
            };
        })(l, Y),
        v = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            k.default.track(B.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id, t.type]),
        v)
    )
        return (0, r.jsx)($, { channel: t });
    let y = s().omit(m.containerProps, ['ref']),
        x = L.iJ(n);
    return (0, r.jsx)(_.Gt, {
        value: a,
        children: (0, r.jsx)(c.bG, {
            navigator: m,
            children: (0, r.jsx)(h.Wdt, {
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: o()(G.membersWrap, G.hiddenMembers, H.container),
                        children: (0, r.jsx)(
                            h.aVo,
                            V(
                                {
                                    ref: C,
                                    className: G.members,
                                    paddingTop: 0,
                                    sectionHeight: 40,
                                    renderSection: (e) => {
                                        let { section: t } = e,
                                            i = d[t];
                                        return (0, r.jsx)(
                                            X,
                                            {
                                                id: i.id,
                                                label: i.label,
                                                count: i.userIds.length,
                                                guildId: n.id
                                            },
                                            i.id
                                        );
                                    },
                                    rowHeight: Y,
                                    renderRow: (e) => {
                                        let { section: n, row: i } = e,
                                            { userIds: l, id: o } = d[n];
                                        return (0, r.jsx)(
                                            K,
                                            {
                                                channel: t,
                                                sectionId: o,
                                                userId: l[i],
                                                guildOwnerId: x
                                            },
                                            l[i]
                                        );
                                    },
                                    footerHeight: (e) => 80 * (d[e] === f && t.type === B.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) => (d[e.section] === f ? (0, r.jsx)(J, { channel: t }, 'footer') : null),
                                    innerAriaLabel: F.NW.string(F.t['9Oq93t']),
                                    innerTag: 'ul',
                                    sections: d.map((e) => e.userIds.length),
                                    fade: !0
                                },
                                y,
                                e
                            ),
                            l
                        )
                    })
            })
        })
    });
}
function $(e) {
    let { channel: t } = e;
    return (0, r.jsxs)('div', {
        className: o()(G.membersWrap, G.hiddenMembers, G.members, H.emptyState),
        children: [
            (0, r.jsx)(h.Text, {
                className: H.emptyStateHeader,
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                children: F.NW.string(F.t['9Oq93t'])
            }),
            (0, r.jsxs)('div', {
                className: H.emptyStateIconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: H.emptyStateIcon,
                        children: (0, r.jsx)(h.BFJ, {
                            size: 'lg',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(R.Z, { className: H.emptyStateStars })
                ]
            }),
            (0, r.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                children: t.isForumPost() ? F.NW.string(F.t.p0UgNT) : F.NW.string(F.t['9/n5v7'])
            }),
            (0, r.jsx)(h.Text, {
                className: H.emptyStateSubtext,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: F.NW.string(F.t.emw8UF)
            })
        ]
    });
}
