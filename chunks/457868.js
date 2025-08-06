n.d(t, { Z: () => X }), n(388685), n(583741);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    h = n(442837),
    p = n(481060),
    f = n(239091),
    g = n(144144),
    m = n(607070),
    b = n(100527),
    y = n(906732),
    x = n(82295),
    j = n(91218),
    _ = n(623624),
    O = n(518738),
    v = n(850020),
    C = n(965376),
    E = n(159299),
    S = n(670188),
    Z = n(199902),
    I = n(271383),
    P = n(485386),
    T = n(158776),
    N = n(885110),
    R = n(111583),
    w = n(594174),
    A = n(499033),
    D = n(626135),
    k = n(585483),
    L = n(700785),
    M = n(51144),
    U = n(998502),
    H = n(276264),
    G = n(981631),
    F = n(388032),
    B = n(688826),
    z = n(11847);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let W = U.ZP.getEnableHardwareAcceleration(),
    Y = 44 + H.x,
    q = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: a, guildOwnerId: s } = e,
            o = i.useRef(null),
            u = (0, h.e7)([R.Z], () => R.Z.isTyping(t.id, a)),
            p = (0, h.e7)([I.ZP], () => I.ZP.getMember(t.guild_id, a)),
            m = (0, h.e7)([P.Z], () => {
                var e;
                return (null == p ? void 0 : p.colorRoleId) != null
                    ? null == (e = P.Z.getRole(t.guild_id, p.colorRoleId))
                        ? void 0
                        : e.name
                    : void 0;
            }, [t.guild_id, p]),
            b = (0, h.e7)([w.default], () => w.default.getUser(a)),
            y = (0, h.e7)([w.default], () => w.default.getCurrentUser()),
            x = (null == b ? void 0 : b.id) === (null == y ? void 0 : y.id),
            j = (0, h.e7)([T.Z, N.Z], () => (x ? N.Z.getStatus() : T.Z.getStatus(a, t.guild_id))),
            O = (0, h.e7)([T.Z], () => T.Z.isMobileOnline(a)),
            C = (0, h.e7)([T.Z, N.Z], () => (x ? N.Z.getActivities() : T.Z.getActivities(a, t.guild_id))),
            A = (0, h.e7)([Z.Z], () => Z.Z.getAnyStreamForUser(a)),
            D = (0, c.JA)(a),
            L = (0, h.e7)([E.Z], () => E.Z.canUserViewChannel(t.id, l, a)),
            U = (null == b ? void 0 : b.id) != null && b.id === s,
            B = i.useCallback(
                (e) => {
                    null != b &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("70675"), n.e("70920")]).then(
                                n.bind(n, 654663),
                            );
                            return (n) => {
                                var i, l;
                                return (0, r.jsx)(
                                    e,
                                    ((i = V({}, n)),
                                    (l = l =
                                        {
                                            user: b,
                                            guildId: t.guild_id,
                                            channel: t,
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
                                    i),
                                );
                            };
                        });
                },
                [b, t],
            ),
            z = i.useCallback(() => {
                if (null == b) return;
                let e = "@".concat(M.ZP.getUserTag(b, { decoration: "never" })),
                    n = "<@".concat(b.id, ">");
                k.S.dispatch(G.CkL.TEXTAREA_FOCUS, { channelId: t.id }),
                    k.S.dispatchToLastSubscribed(G.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: n,
                    }),
                    g.Z.startTyping(t.id);
            }, [b, t]),
            Y = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, _.f)({
                            guildId: t.guild_id,
                            location: {
                                section: G.jXE.THREAD_MEMBER_LIST,
                                object: G.qAy.BOOST_GEM_ICON,
                            },
                        });
                },
                [t.guild_id],
            ),
            q = (0, v.K)({
                user: b,
                guildId: t.guild_id,
                location: "ThreadMembers",
            }),
            [K, Q] = i.useState(!1);
        if (null == b) return null;
        let X = null == p ? void 0 : p.premiumSince;
        return (0, r.jsx)(S.Z, {
            targetElementRef: o,
            user: b,
            guildId: t.guild_id,
            channelId: t.id,
            position: d.tq ? "window_center" : "left",
            spacing: 16,
            onShiftClick: z,
            shouldShow: K,
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
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        }
                        return i;
                    })(e, ["onClick", "onMouseDown"]);
                return (0, r.jsx)(
                    H.Z,
                    V(
                        {
                            ref: o,
                            onContextMenu: B,
                            shouldAnimateStatus: W,
                            user: b,
                            currentUser: y,
                            nick: null == p ? void 0 : p.nick,
                            status: j,
                            activities: C,
                            colorString: null == p ? void 0 : p.colorString,
                            colorStrings: null == p ? void 0 : p.colorStrings,
                            colorRoleName: m,
                            isTyping: u,
                            channel: t,
                            guildId: t.guild_id,
                            isMobile: O,
                            selected: K,
                            applicationStream: A,
                            premiumSince: null == X ? null : new Date(X),
                            onClickPremiumGuildIcon: Y,
                            itemProps: D,
                            lostPermissionTooltipText: L ? void 0 : F.intl.string(F.t["/QcoT0"]),
                            isOwner: U,
                            nameplate: q,
                            onClick: (e) => {
                                e.shiftKey ? null == z || z() : Q((e) => !e);
                            },
                            onMouseDown: (e) => {
                                K ? e.stopPropagation() : null == i || i(e);
                            },
                        },
                        l,
                    ),
                );
            },
        });
    }),
    K = i.memo(function (e) {
        let { id: t, label: n, count: i, guildId: l } = e,
            a = (0, O.p9)({
                roleId: t,
                guildId: l,
                size: 16,
            });
        return t === G.Skl.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: z.membersGroup,
                  children: (0, r.jsx)("div", { className: z.memberGroupsPlaceholder }),
              })
            : (0, r.jsxs)(x.Z, {
                  className: z.membersGroup,
                  "aria-label": F.intl.formatToPlainString(F.t.UaqbkZ, {
                      title: n,
                      count: i,
                  }),
                  children: [
                      null != a ? (0, r.jsx)(j.Z, V({ className: z.roleIcon }, a)) : null,
                      (0, r.jsxs)("span", {
                          "aria-hidden": !0,
                          children: [n, " \u2014 ", i],
                      }),
                  ],
              });
    }),
    Q = i.memo(function (e) {
        let { channel: t } = e;
        return t.type === G.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { className: B.divider }),
                      (0, r.jsxs)(p.Text, {
                          variant: "text-xs/bold",
                          color: "header-secondary",
                          className: B.private,
                          children: [
                              (0, r.jsx)(p.mBM, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              "\xA0",
                              F.intl.string(F.t.BTLTAg),
                          ],
                      }),
                      (0, r.jsx)(p.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: B.instructions,
                          children: F.intl.string(F.t.Hsd8hI),
                      }),
                  ],
              })
            : null;
    });
function X(e) {
    let { channel: t, guild: n } = e,
        l = "members-".concat(t.id),
        { analyticsLocations: s } = (0, y.ZP)(b.Z.MEMBER_LIST),
        d = (0, C.D)(t.id, n),
        f = d.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: g, listRef: x } = (function (e, t) {
            let n = (0, h.e7)([m.Z], () => m.Z.keyboardModeEnabled),
                r = i.useRef(null),
                l = i.useCallback(
                    (e, n) => {
                        let i = r.current;
                        if (null == i) return;
                        let l = parseInt(n, 10),
                            [a, s] = i.getSectionRowFromIndex(l),
                            o = 0 === a && 0 === s ? t : 0;
                        i.scrollToIndex({
                            section: a,
                            row: s,
                            padding: o,
                            callback: () => {
                                requestAnimationFrame(() => {
                                    var t;
                                    return null == (t = document.querySelector(e))
                                        ? void 0
                                        : t.focus({ preventScroll: !0 });
                                });
                            },
                        });
                    },
                    [t],
                ),
                a = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = r.current;
                            if (null == t) return e();
                            t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                        }),
                    [],
                ),
                s = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = r.current;
                            if (null == t) return e();
                            t.scrollToBottom({
                                callback() {
                                    requestAnimationFrame(() => setTimeout(e, 100));
                                },
                            });
                        }),
                    [],
                );
            return {
                navigator: (0, u.ZP)({
                    id: e,
                    setFocus: l,
                    isEnabled: n,
                    scrollToStart: a,
                    scrollToEnd: s,
                }),
                listRef: r,
            };
        })(l, Y),
        j = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            D.default.track(G.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id, t.type]),
        j)
    )
        return (0, r.jsx)(J, { channel: t });
    let _ = o().omit(g.containerProps, ["ref"]),
        O = L.iJ(n);
    return (0, r.jsx)(y.Gt, {
        value: s,
        children: (0, r.jsx)(c.bG, {
            navigator: g,
            children: (0, r.jsx)(p.Wdt, {
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: a()(z.membersWrap, z.hiddenMembers, B.container),
                        children: (0, r.jsx)(
                            p.aVo,
                            V(
                                {
                                    ref: x,
                                    className: z.members,
                                    paddingTop: 0,
                                    sectionHeight: 40,
                                    renderSection: (e) => {
                                        let { section: t } = e,
                                            i = d[t];
                                        return (0, r.jsx)(
                                            K,
                                            {
                                                id: i.id,
                                                label: i.label,
                                                count: i.userIds.length,
                                                guildId: n.id,
                                            },
                                            i.id,
                                        );
                                    },
                                    rowHeight: Y,
                                    renderRow: (e) => {
                                        let { section: n, row: i } = e,
                                            { userIds: l, id: a } = d[n];
                                        return (0, r.jsx)(
                                            q,
                                            {
                                                channel: t,
                                                sectionId: a,
                                                userId: l[i],
                                                guildOwnerId: O,
                                            },
                                            l[i],
                                        );
                                    },
                                    footerHeight: (e) => 80 * (d[e] === f && t.type === G.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) =>
                                        d[e.section] === f ? (0, r.jsx)(Q, { channel: t }, "footer") : null,
                                    innerAriaLabel: F.intl.string(F.t["9Oq93t"]),
                                    innerTag: "ul",
                                    sections: d.map((e) => e.userIds.length),
                                    fade: !0,
                                },
                                _,
                                e,
                            ),
                            l,
                        ),
                    }),
            }),
        }),
    });
}
function J(e) {
    let { channel: t } = e;
    return (0, r.jsxs)("div", {
        className: a()(z.membersWrap, z.hiddenMembers, z.members, B.emptyState),
        children: [
            (0, r.jsx)(p.Text, {
                className: B.emptyStateHeader,
                variant: "text-xs/bold",
                color: "interactive-normal",
                children: F.intl.string(F.t["9Oq93t"]),
            }),
            (0, r.jsxs)("div", {
                className: B.emptyStateIconContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: B.emptyStateIcon,
                        children: (0, r.jsx)(p.BFJ, {
                            size: "lg",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(A.Z, { className: B.emptyStateStars }),
                ],
            }),
            (0, r.jsx)(p.X6q, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? F.intl.string(F.t.p0UgNT) : F.intl.string(F.t["9/n5v7"]),
            }),
            (0, r.jsx)(p.Text, {
                className: B.emptyStateSubtext,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: F.intl.string(F.t.emw8UF),
            }),
        ],
    });
}
