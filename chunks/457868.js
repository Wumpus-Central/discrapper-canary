n.d(t, { Z: () => J }), n(388685), n(583741);
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
    y = n(91218),
    x = n(623624),
    v = n(518738),
    j = n(850020),
    O = n(965376),
    E = n(159299),
    N = n(823415),
    I = n(670188),
    P = n(199902),
    S = n(271383),
    Z = n(430824),
    T = n(158776),
    A = n(885110),
    w = n(111583),
    R = n(594174),
    k = n(499033),
    M = n(626135),
    L = n(585483),
    D = n(700785),
    W = n(51144),
    U = n(998502),
    B = n(276264),
    H = n(981631),
    F = n(388032),
    G = n(688826),
    V = n(11847);
function z(e) {
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
let Y = U.ZP.getEnableHardwareAcceleration(),
    q = 44 + B.x,
    K = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: o, guildOwnerId: a } = e,
            s = (0, p.e7)([w.Z], () => w.Z.isTyping(t.id, o)),
            u = (0, p.e7)([S.ZP], () => S.ZP.getMember(t.guild_id, o)),
            h = (0, p.e7)(
                [Z.Z],
                () => {
                    var e;
                    return (null == u ? void 0 : u.colorRoleId) != null ? (null == (e = Z.Z.getRole(t.guild_id, u.colorRoleId)) ? void 0 : e.name) : void 0;
                },
                [t.guild_id, u]
            ),
            g = (0, p.e7)([R.default], () => R.default.getUser(o)),
            b = (0, p.e7)([R.default], () => R.default.getCurrentUser()),
            _ = (null == g ? void 0 : g.id) === (null == b ? void 0 : b.id),
            C = (0, p.e7)([T.Z, A.Z], () => (_ ? A.Z.getStatus() : T.Z.getStatus(o, t.guild_id))),
            y = (0, p.e7)([T.Z], () => T.Z.isMobileOnline(o)),
            v = (0, p.e7)([T.Z, A.Z], () => (_ ? A.Z.getActivities() : T.Z.getActivities(o, t.guild_id))),
            O = (0, p.e7)([P.Z], () => P.Z.getAnyStreamForUser(o)),
            k = (0, c.JA)(o),
            M = (0, p.e7)([E.Z], () => E.Z.canUserViewChannel(t.id, l, o)),
            D = (null == g ? void 0 : g.id) != null && g.id === a,
            U = i.useCallback(
                (e) => {
                    null != g &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
                            return (n) => {
                                var i, l;
                                return (0, r.jsx)(
                                    e,
                                    ((i = z({}, n)),
                                    (l = l =
                                        {
                                            user: g,
                                            guildId: t.guild_id,
                                            channel: t
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    i)
                                );
                            };
                        });
                },
                [g, t]
            ),
            G = i.useCallback(() => {
                if (null == g) return;
                let e = '@'.concat(W.ZP.getUserTag(g, { decoration: 'never' })),
                    n = '<@'.concat(g.id, '>');
                L.S.dispatchToLastSubscribed(H.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n
                }),
                    m.Z.startTyping(t.id);
            }, [g, t]),
            V = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, x.f)({
                            guildId: t.guild_id,
                            location: {
                                section: H.jXE.THREAD_MEMBER_LIST,
                                object: H.qAy.BOOST_GEM_ICON
                            }
                        });
                },
                [t.guild_id]
            ),
            q = (0, j.K)({
                location: 'ThreadMembers',
                user: g
            }),
            [K, X] = i.useState(!1),
            Q = (0, N.ic)({ location: 'PrivateChannelRecipients' });
        if (null == g) return null;
        let J = null == u ? void 0 : u.premiumSince;
        return (0, r.jsx)(I.Z, {
            user: g,
            guildId: t.guild_id,
            channelId: t.id,
            shouldShowOnHover: Q,
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: G,
            clickTrap: K,
            shouldShow: K,
            onRequestClose: () => X(!1),
            children: (e) => {
                var { onClick: n } = e,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(e, ['onClick']);
                return (0, r.jsx)(
                    B.Z,
                    z(
                        {
                            onContextMenu: U,
                            shouldAnimateStatus: Y,
                            user: g,
                            currentUser: b,
                            nick: null == u ? void 0 : u.nick,
                            status: C,
                            activities: v,
                            colorString: null == u ? void 0 : u.colorString,
                            colorStrings: null == u ? void 0 : u.colorStrings,
                            colorRoleName: h,
                            isTyping: s,
                            channel: t,
                            guildId: t.guild_id,
                            isMobile: y,
                            selected: K,
                            applicationStream: O,
                            premiumSince: null == J ? null : new Date(J),
                            onClickPremiumGuildIcon: V,
                            itemProps: k,
                            lostPermissionTooltipText: M ? void 0 : F.NW.string(F.t['/QcoT0']),
                            isOwner: D,
                            nameplate: q,
                            onClick: () => X((e) => !e)
                        },
                        i
                    )
                );
            }
        });
    }),
    X = i.memo(function (e) {
        let { id: t, label: n, count: i, guildId: l } = e,
            o = (0, v.p9)({
                roleId: t,
                guildId: l,
                size: 16
            });
        return t === H.Skl.UNKNOWN
            ? (0, r.jsx)('div', {
                  className: V.membersGroup,
                  children: (0, r.jsx)('div', { className: V.memberGroupsPlaceholder })
              })
            : (0, r.jsxs)(C.Z, {
                  className: V.membersGroup,
                  'aria-label': F.NW.formatToPlainString(F.t.UaqbkZ, {
                      title: n,
                      count: i
                  }),
                  children: [
                      null != o ? (0, r.jsx)(y.Z, z({ className: V.roleIcon }, o)) : null,
                      (0, r.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [n, ' \u2014 ', i]
                      })
                  ]
              });
    }),
    Q = i.memo(function (e) {
        let { channel: t } = e;
        return t.type === H.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: G.divider }),
                      (0, r.jsxs)(h.Text, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: G.private,
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
                          className: G.instructions,
                          children: F.NW.string(F.t.Hsd8hI)
                      })
                  ]
              })
            : null;
    });
function J(e) {
    let { channel: t, guild: n } = e,
        l = 'members-'.concat(t.id),
        { analyticsLocations: a } = (0, _.ZP)(b.Z.MEMBER_LIST),
        d = (0, O.D)(t.id, n),
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
                                    return null == (t = document.querySelector(e)) ? void 0 : t.focus({ preventScroll: !0 });
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
        })(l, q),
        y = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            M.default.track(H.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id, t.type]),
        y)
    )
        return (0, r.jsx)($, { channel: t });
    let x = s().omit(m.containerProps, ['ref']),
        v = D.iJ(n);
    return (0, r.jsx)(_.Gt, {
        value: a,
        children: (0, r.jsx)(c.bG, {
            navigator: m,
            children: (0, r.jsx)(h.Wdt, {
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: o()(V.membersWrap, V.hiddenMembers, G.container),
                        children: (0, r.jsx)(
                            h.aVo,
                            z(
                                {
                                    ref: C,
                                    className: V.members,
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
                                    rowHeight: q,
                                    renderRow: (e) => {
                                        let { section: n, row: i } = e,
                                            { userIds: l, id: o } = d[n];
                                        return (0, r.jsx)(
                                            K,
                                            {
                                                channel: t,
                                                sectionId: o,
                                                userId: l[i],
                                                guildOwnerId: v
                                            },
                                            l[i]
                                        );
                                    },
                                    footerHeight: (e) => 80 * (d[e] === f && t.type === H.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) => (d[e.section] === f ? (0, r.jsx)(Q, { channel: t }, 'footer') : null),
                                    innerAriaLabel: F.NW.string(F.t['9Oq93t']),
                                    innerTag: 'ul',
                                    sections: d.map((e) => e.userIds.length),
                                    fade: !0
                                },
                                x,
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
        className: o()(V.membersWrap, V.hiddenMembers, V.members, G.emptyState),
        children: [
            (0, r.jsx)(h.Text, {
                className: G.emptyStateHeader,
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                children: F.NW.string(F.t['9Oq93t'])
            }),
            (0, r.jsxs)('div', {
                className: G.emptyStateIconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: G.emptyStateIcon,
                        children: (0, r.jsx)(h.BFJ, {
                            size: 'lg',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(k.Z, { className: G.emptyStateStars })
                ]
            }),
            (0, r.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                children: t.isForumPost() ? F.NW.string(F.t.p0UgNT) : F.NW.string(F.t['9/n5v7'])
            }),
            (0, r.jsx)(h.Text, {
                className: G.emptyStateSubtext,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: F.NW.string(F.t.emw8UF)
            })
        ]
    });
}
