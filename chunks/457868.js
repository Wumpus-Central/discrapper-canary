n.d(t, { Z: () => X }), n(388685), n(583741);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    d = n(924826),
    u = n(873546),
    p = n(442837),
    h = n(481060),
    f = n(239091),
    g = n(144144),
    m = n(607070),
    b = n(100527),
    y = n(906732),
    O = n(82295),
    x = n(623624),
    j = n(518738),
    v = n(850020),
    C = n(48950),
    I = n(965376),
    _ = n(159299),
    S = n(670188),
    E = n(199902),
    Z = n(271383),
    P = n(485386),
    T = n(158776),
    N = n(885110),
    R = n(111583),
    w = n(594174),
    A = n(499033),
    D = n(626135),
    L = n(585483),
    M = n(700785),
    k = n(51144),
    U = n(998502),
    G = n(276264),
    H = n(981631),
    F = n(388032),
    B = n(129744),
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
    Y = 44 + G.x,
    q = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: a, guildOwnerId: s } = e,
            o = i.useRef(null),
            d = (0, p.e7)([R.Z], () => R.Z.isTyping(t.id, a)),
            h = (0, p.e7)([Z.ZP], () => Z.ZP.getMember(t.guild_id, a)),
            m = (0, p.e7)([P.Z], () => {
                var e;
                return (null == h ? void 0 : h.colorRoleId) != null
                    ? null == (e = P.Z.getRole(t.guild_id, h.colorRoleId))
                        ? void 0
                        : e.name
                    : void 0;
            }, [t.guild_id, h]),
            b = (0, p.e7)([w.default], () => w.default.getUser(a)),
            y = (0, p.e7)([w.default], () => w.default.getCurrentUser()),
            O = (null == b ? void 0 : b.id) === (null == y ? void 0 : y.id),
            j = (0, p.e7)([T.Z, N.Z], () => (O ? N.Z.getStatus() : T.Z.getStatus(a, t.guild_id))),
            C = (0, p.e7)([T.Z], () => T.Z.isMobileOnline(a)),
            I = (0, p.e7)([T.Z, N.Z], () => (O ? N.Z.getActivities() : T.Z.getActivities(a, t.guild_id))),
            A = (0, p.e7)([E.Z], () => E.Z.getAnyStreamForUser(a)),
            D = (0, c.JA)(a),
            M = (0, p.e7)([_.Z], () => _.Z.canUserViewChannel(t.id, l, a)),
            U = (null == b ? void 0 : b.id) != null && b.id === s,
            B = i.useCallback(
                (e) => {
                    null != b &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("70675"), n.e("41971")]).then(
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
                L.S.dispatch(H.CkL.TEXTAREA_FOCUS, { channelId: t.id }),
                    L.S.dispatchToLastSubscribed(H.CkL.INSERT_TEXT, {
                        plainText: e,
                        rawText: n,
                    }),
                    g.Z.startTyping(t.id);
            }, [b, t]),
            Y = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, x.f)({
                            guildId: t.guild_id,
                            location: {
                                section: H.jXE.THREAD_MEMBER_LIST,
                                object: H.qAy.BOOST_GEM_ICON,
                            },
                        });
                },
                [t.guild_id],
            ),
            q = (0, v.K)({
                user: b,
                guildId: t.guild_id,
            }),
            [K, Q] = i.useState(!1);
        if (null == b) return null;
        let X = null == h ? void 0 : h.premiumSince;
        return (0, r.jsx)(S.Z, {
            targetElementRef: o,
            user: b,
            guildId: t.guild_id,
            channelId: t.id,
            position: u.tq ? "window_center" : "left",
            spacing: 16,
            onShiftClick: V,
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
                    G.Z,
                    z(
                        {
                            ref: o,
                            onContextMenu: B,
                            shouldAnimateStatus: W,
                            user: b,
                            currentUser: y,
                            nick: null == h ? void 0 : h.nick,
                            status: j,
                            activities: I,
                            colorString: null == h ? void 0 : h.colorString,
                            colorStrings: null == h ? void 0 : h.colorStrings,
                            colorRoleName: m,
                            isTyping: d,
                            channel: t,
                            guildId: t.guild_id,
                            isMobile: C,
                            selected: K,
                            applicationStream: A,
                            premiumSince: null == X ? null : new Date(X),
                            onClickPremiumGuildIcon: Y,
                            itemProps: D,
                            lostPermissionTooltipText: M ? void 0 : F.intl.string(F.t["/QcoTz"]),
                            isOwner: U,
                            nameplate: q,
                            onClick: (e) => {
                                e.shiftKey ? null == V || V() : Q((e) => !e);
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
            a = (0, j.p9)({
                roleId: t,
                guildId: l,
                size: 16,
            });
        return t === H.Skl.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: V.membersGroup,
                  children: (0, r.jsx)("div", { className: V.memberGroupsPlaceholder }),
              })
            : (0, r.jsxs)(O.Z, {
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
    Q = i.memo(function (e) {
        let { channel: t } = e;
        return t.type === H.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { className: B.divider }),
                      (0, r.jsxs)(h.Text, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: B.private,
                          children: [
                              (0, r.jsx)(h.mBM, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              "\xA0",
                              F.intl.string(F.t.BTLTAs),
                          ],
                      }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: B.instructions,
                          children: F.intl.string(F.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function X(e) {
    let { channel: t, guild: n } = e,
        l = "members-".concat(t.id),
        { analyticsLocations: s } = (0, y.ZP)(b.Z.MEMBER_LIST),
        u = (0, I.D)(t.id, n),
        f = u.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: g, listRef: O } = (function (e, t) {
            let n = (0, p.e7)([m.Z], () => m.Z.keyboardModeEnabled),
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
                navigator: (0, d.ZP)({
                    id: e,
                    setFocus: l,
                    isEnabled: n,
                    scrollToStart: a,
                    scrollToEnd: s,
                }),
                listRef: r,
            };
        })(l, Y),
        x = 0 === u.length || u.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            D.default.track(H.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
            });
        }, [t.guild_id, t.id, t.type]),
        x)
    )
        return (0, r.jsx)(J, { channel: t });
    let j = o().omit(g.containerProps, ["ref"]),
        v = M.iJ(n);
    return (0, r.jsx)(y.Gt, {
        value: s,
        children: (0, r.jsx)(c.bG, {
            navigator: g,
            children: (0, r.jsx)(h.Wdt, {
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: a()(V.membersWrap, V.hiddenMembers, B.container),
                        children: (0, r.jsx)(
                            h.aVo,
                            z(
                                {
                                    ref: O,
                                    className: V.members,
                                    paddingTop: 0,
                                    sectionHeight: 40,
                                    renderSection: (e) => {
                                        let { section: t } = e,
                                            i = u[t];
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
                                            { userIds: l, id: a } = u[n];
                                        return (0, r.jsx)(
                                            q,
                                            {
                                                channel: t,
                                                sectionId: a,
                                                userId: l[i],
                                                guildOwnerId: v,
                                            },
                                            l[i],
                                        );
                                    },
                                    footerHeight: (e) => 80 * (u[e] === f && t.type === H.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) =>
                                        u[e.section] === f ? (0, r.jsx)(Q, { channel: t }, "footer") : null,
                                    innerAriaLabel: F.intl.string(F.t["9Oq93m"]),
                                    innerTag: "ul",
                                    sections: u.map((e) => e.userIds.length),
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
        className: a()(V.membersWrap, V.hiddenMembers, V.members, B.emptyState),
        children: [
            (0, r.jsx)(h.Text, {
                className: B.emptyStateHeader,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: F.intl.string(F.t["9Oq93m"]),
            }),
            (0, r.jsxs)("div", {
                className: B.emptyStateIconContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: B.emptyStateIcon,
                        children: (0, r.jsx)(h.BFJ, {
                            size: "lg",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(A.Z, { className: B.emptyStateStars }),
                ],
            }),
            (0, r.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? F.intl.string(F.t.p0UgNQ) : F.intl.string(F.t["9/n5vz"]),
            }),
            (0, r.jsx)(h.Text, {
                className: B.emptyStateSubtext,
                variant: "text-sm/normal",
                color: "text-default",
                children: F.intl.string(F.t.emw8UP),
            }),
        ],
    });
}
