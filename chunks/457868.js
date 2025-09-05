n.d(t, { Z: () => Q }), n(388685), n(583741);
var r = n(951288),
    i = n(647438),
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
    y = n(906732),
    _ = n(82295),
    C = n(91218),
    v = n(623624),
    x = n(518738),
    O = n(850020),
    j = n(965376),
    E = n(159299),
    S = n(670188),
    I = n(199902),
    P = n(271383),
    Z = n(485386),
    T = n(158776),
    N = n(885110),
    A = n(111583),
    w = n(594174),
    R = n(499033),
    M = n(626135),
    D = n(585483),
    L = n(700785),
    k = n(51144),
    U = n(998502),
    B = n(276264),
    G = n(981631),
    H = n(388032),
    F = n(61722),
    V = n(32482);
function z(e) {
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
    q = 44 + B.x,
    Y = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: a, guildOwnerId: o } = e,
            s = i.useRef(null),
            u = (0, p.e7)([A.Z], () => A.Z.isTyping(t.id, a)),
            h = (0, p.e7)([P.ZP], () => P.ZP.getMember(t.guild_id, a)),
            g = (0, p.e7)([Z.Z], () => {
                var e;
                return (null == h ? void 0 : h.colorRoleId) != null
                    ? null == (e = Z.Z.getRole(t.guild_id, h.colorRoleId))
                        ? void 0
                        : e.name
                    : void 0;
            }, [t.guild_id, h]),
            b = (0, p.e7)([w.default], () => w.default.getUser(a)),
            y = (0, p.e7)([w.default], () => w.default.getCurrentUser()),
            _ = (null == b ? void 0 : b.id) === (null == y ? void 0 : y.id),
            C = (0, p.e7)([T.Z, N.Z], () => (_ ? N.Z.getStatus() : T.Z.getStatus(a, t.guild_id))),
            x = (0, p.e7)([T.Z], () => T.Z.isMobileOnline(a)),
            j = (0, p.e7)([T.Z, N.Z], () => (_ ? N.Z.getActivities() : T.Z.getActivities(a, t.guild_id))),
            R = (0, p.e7)([I.Z], () => I.Z.getAnyStreamForUser(a)),
            M = (0, c.JA)(a),
            L = (0, p.e7)([E.Z], () => E.Z.canUserViewChannel(t.id, l, a)),
            U = (null == b ? void 0 : b.id) != null && b.id === o,
            F = i.useCallback(
                (e) => {
                    null != b &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("70675")]).then(
                                n.bind(n, 654663),
                            );
                            return (n) => {
                                var i, l;
                                return (0, r.jsx)(
                                    e,
                                    ((i = z({}, n)),
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
            V = i.useCallback(() => {
                if (null == b) return;
                let e = "@".concat(k.ZP.getUserTag(b, { decoration: "never" })),
                    n = "<@".concat(b.id, ">");
                D.S.dispatch(G.CkL.TEXTAREA_FOCUS, { channelId: t.id }),
                    D.S.dispatchToLastSubscribed(G.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: n,
                    }),
                    m.Z.startTyping(t.id);
            }, [b, t]),
            q = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, v.f)({
                            guildId: t.guild_id,
                            location: {
                                section: G.jXE.THREAD_MEMBER_LIST,
                                object: G.qAy.BOOST_GEM_ICON,
                            },
                        });
                },
                [t.guild_id],
            ),
            Y = (0, O.K)({
                user: b,
                guildId: t.guild_id,
                location: "ThreadMembers",
            }),
            [K, X] = i.useState(!1);
        if (null == b) return null;
        let Q = null == h ? void 0 : h.premiumSince;
        return (0, r.jsx)(S.Z, {
            targetElementRef: s,
            user: b,
            guildId: t.guild_id,
            channelId: t.id,
            position: d.tq ? "window_center" : "left",
            spacing: 16,
            onShiftClick: V,
            shouldShow: K,
            onRequestClose: () => X(!1),
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
                    B.Z,
                    z(
                        {
                            ref: s,
                            onContextMenu: F,
                            shouldAnimateStatus: W,
                            user: b,
                            currentUser: y,
                            nick: null == h ? void 0 : h.nick,
                            status: C,
                            activities: j,
                            colorString: null == h ? void 0 : h.colorString,
                            colorStrings: null == h ? void 0 : h.colorStrings,
                            colorRoleName: g,
                            isTyping: u,
                            channel: t,
                            guildId: t.guild_id,
                            isMobile: x,
                            selected: K,
                            applicationStream: R,
                            premiumSince: null == Q ? null : new Date(Q),
                            onClickPremiumGuildIcon: q,
                            itemProps: M,
                            lostPermissionTooltipText: L ? void 0 : H.intl.string(H.t["/QcoT0"]),
                            isOwner: U,
                            nameplate: Y,
                            onClick: (e) => {
                                e.shiftKey ? null == V || V() : X((e) => !e);
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
            a = (0, x.p9)({
                roleId: t,
                guildId: l,
                size: 16,
            });
        return t === G.Skl.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: V.membersGroup,
                  children: (0, r.jsx)("div", { className: V.memberGroupsPlaceholder }),
              })
            : (0, r.jsxs)(_.Z, {
                  className: V.membersGroup,
                  "aria-label": H.intl.formatToPlainString(H.t.UaqbkZ, {
                      title: n,
                      count: i,
                  }),
                  children: [
                      null != a ? (0, r.jsx)(C.Z, z({ className: V.roleIcon }, a)) : null,
                      (0, r.jsxs)("span", {
                          "aria-hidden": !0,
                          children: [n, " \u2014 ", i],
                      }),
                  ],
              });
    }),
    X = i.memo(function (e) {
        let { channel: t } = e;
        return t.type === G.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { className: F.divider }),
                      (0, r.jsxs)(h.Text, {
                          variant: "text-xs/bold",
                          color: "header-secondary",
                          className: F.private,
                          children: [
                              (0, r.jsx)(h.mBM, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              "\xA0",
                              H.intl.string(H.t.BTLTAg),
                          ],
                      }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: F.instructions,
                          children: H.intl.string(H.t.Hsd8hI),
                      }),
                  ],
              })
            : null;
    });
function Q(e) {
    let { channel: t, guild: n } = e,
        l = "members-".concat(t.id),
        { analyticsLocations: o } = (0, y.ZP)(b.Z.MEMBER_LIST),
        d = (0, j.D)(t.id, n),
        f = d.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: m, listRef: _ } = (function (e, t) {
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
                o = i.useCallback(
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
                    scrollToEnd: o,
                }),
                listRef: r,
            };
        })(l, q),
        C = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            M.default.track(G.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id, t.type]),
        C)
    )
        return (0, r.jsx)(J, { channel: t });
    let v = s().omit(m.containerProps, ["ref"]),
        x = L.iJ(n);
    return (0, r.jsx)(y.Gt, {
        value: o,
        children: (0, r.jsx)(c.bG, {
            navigator: m,
            children: (0, r.jsx)(h.Wdt, {
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: a()(V.membersWrap, V.hiddenMembers, F.container),
                        children: (0, r.jsx)(
                            h.aVo,
                            z(
                                {
                                    ref: _,
                                    className: V.members,
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
                                    rowHeight: q,
                                    renderRow: (e) => {
                                        let { section: n, row: i } = e,
                                            { userIds: l, id: a } = d[n];
                                        return (0, r.jsx)(
                                            Y,
                                            {
                                                channel: t,
                                                sectionId: a,
                                                userId: l[i],
                                                guildOwnerId: x,
                                            },
                                            l[i],
                                        );
                                    },
                                    footerHeight: (e) => 80 * (d[e] === f && t.type === G.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) =>
                                        d[e.section] === f ? (0, r.jsx)(X, { channel: t }, "footer") : null,
                                    innerAriaLabel: H.intl.string(H.t["9Oq93t"]),
                                    innerTag: "ul",
                                    sections: d.map((e) => e.userIds.length),
                                    fade: !0,
                                },
                                v,
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
        className: a()(V.membersWrap, V.hiddenMembers, V.members, F.emptyState),
        children: [
            (0, r.jsx)(h.Text, {
                className: F.emptyStateHeader,
                variant: "text-xs/bold",
                color: "interactive-normal",
                children: H.intl.string(H.t["9Oq93t"]),
            }),
            (0, r.jsxs)("div", {
                className: F.emptyStateIconContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: F.emptyStateIcon,
                        children: (0, r.jsx)(h.BFJ, {
                            size: "lg",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(R.Z, { className: F.emptyStateStars }),
                ],
            }),
            (0, r.jsx)(h.X6q, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? H.intl.string(H.t.p0UgNT) : H.intl.string(H.t["9/n5v7"]),
            }),
            (0, r.jsx)(h.Text, {
                className: F.emptyStateSubtext,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: H.intl.string(H.t.emw8UF),
            }),
        ],
    });
}
