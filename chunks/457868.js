n.d(t, { Z: () => Q }), n(388685), n(583741);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    p = n(442837),
    f = n(481060),
    h = n(239091),
    g = n(144144),
    m = n(607070),
    b = n(100527),
    y = n(906732),
    v = n(82295),
    O = n(623624),
    j = n(518738),
    x = n(850020),
    C = n(48950),
    E = n(965376),
    S = n(159299),
    _ = n(670188),
    I = n(199902),
    P = n(271383),
    Z = n(485386),
    N = n(158776),
    T = n(885110),
    A = n(111583),
    w = n(594174),
    R = n(499033),
    D = n(626135),
    M = n(585483),
    k = n(700785),
    L = n(51144),
    U = n(998502),
    G = n(276264),
    B = n(981631),
    F = n(388032),
    H = n(129744),
    V = n(791486);
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
    K = 44 + G.x,
    Y = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: a, guildOwnerId: o } = e,
            s = i.useRef(null),
            u = (0, p.e7)([A.Z], () => A.Z.isTyping(t.id, a)),
            f = (0, p.e7)([P.ZP], () => P.ZP.getMember(t.guild_id, a)),
            m = (0, p.e7)([Z.Z], () => {
                var e;
                return (null == f ? void 0 : f.colorRoleId) != null
                    ? null == (e = Z.Z.getRole(t.guild_id, f.colorRoleId))
                        ? void 0
                        : e.name
                    : void 0;
            }, [t.guild_id, f]),
            b = (0, p.e7)([w.default], () => w.default.getUser(a)),
            y = (0, p.e7)([w.default], () => w.default.getCurrentUser()),
            v = (null == b ? void 0 : b.id) === (null == y ? void 0 : y.id),
            j = (0, p.e7)([N.Z, T.Z], () => (v ? T.Z.getStatus() : N.Z.getStatus(a, t.guild_id))),
            C = (0, p.e7)([N.Z], () => N.Z.isMobileOnline(a)),
            E = (0, p.e7)([N.Z, T.Z], () => (v ? T.Z.getActivities() : N.Z.getActivities(a, t.guild_id))),
            R = (0, p.e7)([I.Z], () => I.Z.getAnyStreamForUser(a)),
            D = (0, c.JA)(a),
            k = (0, p.e7)([S.Z], () => S.Z.canUserViewChannel(t.id, l, a)),
            U = (null == b ? void 0 : b.id) != null && b.id === o,
            H = i.useCallback(
                (e) => {
                    null != b &&
                        (0, h.jW)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("4040"),
                                n.e("70675"),
                                n.e("41971"),
                            ]).then(n.bind(n, 654663));
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
                let e = "@".concat(L.ZP.getUserTag(b, { decoration: "never" })),
                    n = "<@".concat(b.id, ">");
                M.S.dispatch(B.CkL.TEXTAREA_FOCUS, { channelId: t.id }),
                    M.S.dispatchToLastSubscribed(B.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: n,
                    }),
                    g.Z.startTyping(t.id);
            }, [b, t]),
            K = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, O.f)({
                            guildId: t.guild_id,
                            location: {
                                section: B.jXE.THREAD_MEMBER_LIST,
                                object: B.qAy.BOOST_GEM_ICON,
                            },
                        });
                },
                [t.guild_id],
            ),
            Y = (0, x.K)({
                user: b,
                guildId: t.guild_id,
            }),
            [q, X] = i.useState(!1);
        if (null == b) return null;
        let Q = null == f ? void 0 : f.premiumSince;
        return (0, r.jsx)(_.Z, {
            targetElementRef: s,
            user: b,
            guildId: t.guild_id,
            channelId: t.id,
            position: d.tq ? "window_center" : "left",
            spacing: 16,
            onShiftClick: V,
            shouldShow: q,
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
                    G.Z,
                    z(
                        {
                            ref: s,
                            onContextMenu: H,
                            shouldAnimateStatus: W,
                            user: b,
                            currentUser: y,
                            nick: null == f ? void 0 : f.nick,
                            status: j,
                            activities: E,
                            colorString: null == f ? void 0 : f.colorString,
                            colorStrings: null == f ? void 0 : f.colorStrings,
                            colorRoleName: m,
                            isTyping: u,
                            channel: t,
                            guildId: t.guild_id,
                            isMobile: C,
                            selected: q,
                            applicationStream: R,
                            premiumSince: null == Q ? null : new Date(Q),
                            onClickPremiumGuildIcon: K,
                            itemProps: D,
                            lostPermissionTooltipText: k ? void 0 : F.intl.string(F.t["/QcoTz"]),
                            isOwner: U,
                            nameplate: Y,
                            onClick: (e) => {
                                e.shiftKey ? null == V || V() : X((e) => !e);
                            },
                            onMouseDown: (e) => {
                                q ? e.stopPropagation() : null == i || i(e);
                            },
                        },
                        l,
                    ),
                );
            },
        });
    }),
    q = i.memo(function (e) {
        let { id: t, label: n, count: i, guildId: l } = e,
            a = (0, j.p9)({
                roleId: t,
                guildId: l,
                size: 16,
            });
        return t === B.Skl.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: V.membersGroup,
                  children: (0, r.jsx)("div", { className: V.memberGroupsPlaceholder }),
              })
            : (0, r.jsxs)(v.Z, {
                  className: V.membersGroup,
                  "aria-label": F.intl.formatToPlainString(F.t.Uaqbke, {
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
        return t.type === B.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { className: H.divider }),
                      (0, r.jsxs)(f.Text, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: H.private,
                          children: [
                              (0, r.jsx)(f.mBM, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              "\xA0",
                              F.intl.string(F.t.BTLTAs),
                          ],
                      }),
                      (0, r.jsx)(f.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: H.instructions,
                          children: F.intl.string(F.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function Q(e) {
    let { channel: t, guild: n } = e,
        l = "members-".concat(t.id),
        { analyticsLocations: o } = (0, y.ZP)(b.Z.MEMBER_LIST),
        d = (0, E.D)(t.id, n),
        h = d.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: g, listRef: v } = (function (e, t) {
            let n = (0, p.e7)([m.Z], () => m.Z.keyboardModeEnabled),
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
        })(l, K),
        O = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            D.default.track(B.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id, t.type]),
        O)
    )
        return (0, r.jsx)(J, { channel: t });
    let j = s().omit(g.containerProps, ["ref"]),
        x = k.iJ(n);
    return (0, r.jsx)(y.Gt, {
        value: o,
        children: (0, r.jsx)(c.bG, {
            navigator: g,
            children: (0, r.jsx)(f.Wdt, {
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: a()(V.membersWrap, V.hiddenMembers, H.container),
                        children: (0, r.jsx)(
                            f.aVo,
                            z(
                                {
                                    ref: v,
                                    className: V.members,
                                    paddingTop: 0,
                                    sectionHeight: 40,
                                    renderSection: (e) => {
                                        let { section: t } = e,
                                            i = d[t];
                                        return (0, r.jsx)(
                                            q,
                                            {
                                                id: i.id,
                                                label: i.label,
                                                count: i.userIds.length,
                                                guildId: n.id,
                                            },
                                            i.id,
                                        );
                                    },
                                    rowHeight: K,
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
                                    footerHeight: (e) => 80 * (d[e] === h && t.type === B.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) =>
                                        d[e.section] === h ? (0, r.jsx)(X, { channel: t }, "footer") : null,
                                    innerAriaLabel: F.intl.string(F.t["9Oq93m"]),
                                    innerTag: "ul",
                                    sections: d.map((e) => e.userIds.length),
                                    fade: !0,
                                },
                                j,
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
        className: a()(H.emptyState, H.container, V.membersWrap, V.hiddenMembers, V.members),
        children: [
            (0, r.jsx)(f.Text, {
                className: H.emptyStateHeader,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: F.intl.string(F.t["9Oq93m"]),
            }),
            (0, r.jsxs)("div", {
                className: H.emptyStateIconContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: H.emptyStateIcon,
                        children: (0, r.jsx)(f.BFJ, {
                            size: "lg",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(R.Z, { className: H.emptyStateStars }),
                ],
            }),
            (0, r.jsx)(f.Heading, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? F.intl.string(F.t.p0UgNQ) : F.intl.string(F.t["9/n5vz"]),
            }),
            (0, r.jsx)(f.Text, {
                className: H.emptyStateSubtext,
                variant: "text-sm/normal",
                color: "text-default",
                children: F.intl.string(F.t.emw8UP),
            }),
        ],
    });
}
