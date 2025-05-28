n.d(t, { Z: () => J }), n(388685), n(583741);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
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
    x = n(82295),
    y = n(91218),
    C = n(623624),
    v = n(518738),
    j = n(850020),
    O = n(965376),
    E = n(159299),
    I = n(823415),
    P = n(670188),
    S = n(199902),
    Z = n(271383),
    N = n(430824),
    T = n(158776),
    A = n(885110),
    w = n(111583),
    R = n(594174),
    k = n(499033),
    M = n(626135),
    L = n(585483),
    D = n(700785),
    U = n(51144),
    B = n(998502),
    G = n(276264),
    F = n(981631),
    H = n(388032),
    V = n(688826),
    z = n(11847);
function W(e) {
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
let Y = B.ZP.getEnableHardwareAcceleration(),
    q = 44 + G.x,
    K = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: a, guildOwnerId: o } = e,
            s = i.useRef(null),
            u = (0, p.e7)([w.Z], () => w.Z.isTyping(t.id, a)),
            h = (0, p.e7)([Z.ZP], () => Z.ZP.getMember(t.guild_id, a)),
            g = (0, p.e7)(
                [N.Z],
                () => {
                    var e;
                    return (null == h ? void 0 : h.colorRoleId) != null ? (null == (e = N.Z.getRole(t.guild_id, h.colorRoleId)) ? void 0 : e.name) : void 0;
                },
                [t.guild_id, h]
            ),
            b = (0, p.e7)([R.default], () => R.default.getUser(a)),
            _ = (0, p.e7)([R.default], () => R.default.getCurrentUser()),
            x = (null == b ? void 0 : b.id) === (null == _ ? void 0 : _.id),
            y = (0, p.e7)([T.Z, A.Z], () => (x ? A.Z.getStatus() : T.Z.getStatus(a, t.guild_id))),
            v = (0, p.e7)([T.Z], () => T.Z.isMobileOnline(a)),
            O = (0, p.e7)([T.Z, A.Z], () => (x ? A.Z.getActivities() : T.Z.getActivities(a, t.guild_id))),
            k = (0, p.e7)([S.Z], () => S.Z.getAnyStreamForUser(a)),
            M = (0, c.JA)(a),
            D = (0, p.e7)([E.Z], () => E.Z.canUserViewChannel(t.id, l, a)),
            B = (null == b ? void 0 : b.id) != null && b.id === o,
            V = i.useCallback(
                (e) => {
                    null != b &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
                            return (n) => {
                                var i, l;
                                return (0, r.jsx)(
                                    e,
                                    ((i = W({}, n)),
                                    (l = l =
                                        {
                                            user: b,
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
                [b, t]
            ),
            z = i.useCallback(() => {
                if (null == b) return;
                let e = '@'.concat(U.ZP.getUserTag(b, { decoration: 'never' })),
                    n = '<@'.concat(b.id, '>');
                L.S.dispatch(F.CkL.TEXTAREA_FOCUS, { channelId: t.id }),
                    L.S.dispatchToLastSubscribed(F.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: n
                    }),
                    m.Z.startTyping(t.id);
            }, [b, t]),
            q = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, C.f)({
                            guildId: t.guild_id,
                            location: {
                                section: F.jXE.THREAD_MEMBER_LIST,
                                object: F.qAy.BOOST_GEM_ICON
                            }
                        });
                },
                [t.guild_id]
            ),
            K = (0, j.K)({
                location: 'ThreadMembers',
                user: b
            }),
            [X, Q] = i.useState(!1),
            J = (0, I.ic)({ location: 'PrivateChannelRecipients' });
        if (null == b) return null;
        let $ = null == h ? void 0 : h.premiumSince;
        return (0, r.jsx)(P.Z, {
            targetElementRef: s,
            user: b,
            guildId: t.guild_id,
            channelId: t.id,
            shouldShowOnHover: J,
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: z,
            shouldShow: X,
            onRequestClose: () => Q(!1),
            children: (e) => {
                var { onClick: n, onMouseDown: i } = e,
                    l = (function (e, t) {
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
                    })(e, ['onClick', 'onMouseDown']);
                return (0, r.jsx)(
                    G.Z,
                    W(
                        {
                            ref: s,
                            onContextMenu: V,
                            shouldAnimateStatus: Y,
                            user: b,
                            currentUser: _,
                            nick: null == h ? void 0 : h.nick,
                            status: y,
                            activities: O,
                            colorString: null == h ? void 0 : h.colorString,
                            colorStrings: null == h ? void 0 : h.colorStrings,
                            colorRoleName: g,
                            isTyping: u,
                            channel: t,
                            guildId: t.guild_id,
                            isMobile: v,
                            selected: X,
                            applicationStream: k,
                            premiumSince: null == $ ? null : new Date($),
                            onClickPremiumGuildIcon: q,
                            itemProps: M,
                            lostPermissionTooltipText: D ? void 0 : H.intl.string(H.t['/QcoT0']),
                            isOwner: B,
                            nameplate: K,
                            hideTooltip: J,
                            onClick: (e) => {
                                e.shiftKey ? null == z || z() : Q((e) => !e);
                            },
                            onMouseDown: (e) => {
                                X ? e.stopPropagation() : null == i || i(e);
                            }
                        },
                        l
                    )
                );
            }
        });
    }),
    X = i.memo(function (e) {
        let { id: t, label: n, count: i, guildId: l } = e,
            a = (0, v.p9)({
                roleId: t,
                guildId: l,
                size: 16
            });
        return t === F.Skl.UNKNOWN
            ? (0, r.jsx)('div', {
                  className: z.membersGroup,
                  children: (0, r.jsx)('div', { className: z.memberGroupsPlaceholder })
              })
            : (0, r.jsxs)(x.Z, {
                  className: z.membersGroup,
                  'aria-label': H.intl.formatToPlainString(H.t.UaqbkZ, {
                      title: n,
                      count: i
                  }),
                  children: [
                      null != a ? (0, r.jsx)(y.Z, W({ className: z.roleIcon }, a)) : null,
                      (0, r.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [n, ' \u2014 ', i]
                      })
                  ]
              });
    }),
    Q = i.memo(function (e) {
        let { channel: t } = e;
        return t.type === F.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: V.divider }),
                      (0, r.jsxs)(h.Text, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: V.private,
                          children: [
                              (0, r.jsx)(h.mBM, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              '\xA0',
                              H.intl.string(H.t.BTLTAg)
                          ]
                      }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          className: V.instructions,
                          children: H.intl.string(H.t.Hsd8hI)
                      })
                  ]
              })
            : null;
    });
function J(e) {
    let { channel: t, guild: n } = e,
        l = 'members-'.concat(t.id),
        { analyticsLocations: o } = (0, _.ZP)(b.Z.MEMBER_LIST),
        d = (0, O.D)(t.id, n),
        f = d.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: m, listRef: x } = (function (e, t) {
            let n = (0, p.e7)([g.Z], () => g.Z.keyboardModeEnabled),
                r = i.useRef(null),
                l = i.useCallback(
                    (e, n) => {
                        let i = r.current;
                        if (null == i) return;
                        let l = parseInt(n, 10),
                            [a, o] = i.getSectionRowFromIndex(l),
                            s = 0 === a && 0 === o ? t : 0;
                        i.scrollToIndex({
                            section: a,
                            row: o,
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
                a = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = r.current;
                            if (null == t) return e();
                            t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                        }),
                    []
                ),
                o = i.useCallback(
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
                    scrollToStart: a,
                    scrollToEnd: o
                }),
                listRef: r
            };
        })(l, q),
        y = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            M.default.track(F.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id, t.type]),
        y)
    )
        return (0, r.jsx)($, { channel: t });
    let C = s().omit(m.containerProps, ['ref']),
        v = D.iJ(n);
    return (0, r.jsx)(_.Gt, {
        value: o,
        children: (0, r.jsx)(c.bG, {
            navigator: m,
            children: (0, r.jsx)(h.Wdt, {
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: a()(z.membersWrap, z.hiddenMembers, V.container),
                        children: (0, r.jsx)(
                            h.aVo,
                            W(
                                {
                                    ref: x,
                                    className: z.members,
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
                                            { userIds: l, id: a } = d[n];
                                        return (0, r.jsx)(
                                            K,
                                            {
                                                channel: t,
                                                sectionId: a,
                                                userId: l[i],
                                                guildOwnerId: v
                                            },
                                            l[i]
                                        );
                                    },
                                    footerHeight: (e) => 80 * (d[e] === f && t.type === F.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) => (d[e.section] === f ? (0, r.jsx)(Q, { channel: t }, 'footer') : null),
                                    innerAriaLabel: H.intl.string(H.t['9Oq93t']),
                                    innerTag: 'ul',
                                    sections: d.map((e) => e.userIds.length),
                                    fade: !0
                                },
                                C,
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
        className: a()(z.membersWrap, z.hiddenMembers, z.members, V.emptyState),
        children: [
            (0, r.jsx)(h.Text, {
                className: V.emptyStateHeader,
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                children: H.intl.string(H.t['9Oq93t'])
            }),
            (0, r.jsxs)('div', {
                className: V.emptyStateIconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: V.emptyStateIcon,
                        children: (0, r.jsx)(h.BFJ, {
                            size: 'lg',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(k.Z, { className: V.emptyStateStars })
                ]
            }),
            (0, r.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                children: t.isForumPost() ? H.intl.string(H.t.p0UgNT) : H.intl.string(H.t['9/n5v7'])
            }),
            (0, r.jsx)(h.Text, {
                className: V.emptyStateSubtext,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: H.intl.string(H.t.emw8UF)
            })
        ]
    });
}
