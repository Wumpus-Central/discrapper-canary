(t.r(n), t.d(n, { default: () => uG }), t(321073));
var i,
    l = t(477900),
    s = t(582128),
    r = t(503698),
    a = t.n(r),
    o = t(284009),
    d = t.n(o),
    c = t(435558),
    u = t.n(c),
    h = t(806163),
    m = t(17928),
    A = t(554146),
    p = t(192308),
    g = t(289873),
    x = t(821609),
    f = t(43990),
    I = t(367513),
    j = t(604681),
    C = t(442433);
t(183994);
var E = t(837381),
    y = t(887129),
    b = t(607399),
    _ = t(834730),
    v = t(194261),
    N = t(312138),
    T = t(475825),
    S = t(177953),
    R = t(297264),
    O = t(414798),
    P = t(775602),
    M = t(793574),
    L = t(688810),
    D = t(449582),
    k = t(485947),
    w = t(878678),
    G = t(69282),
    U = t(657048),
    F = t(361610),
    H = t(964486),
    V = t(36124),
    B = t(317525),
    Y = t(219065),
    W = t(818348),
    z = t(375708);
let q = [];
var K = t(342296),
    X = t(616356),
    $ = t(696451),
    Q = t(290863),
    J = t(461213),
    Z = t(741961),
    ee = t(287809),
    en = t(303727),
    et = t(174459),
    ei = t(625494),
    el = t(488926),
    es = t(427262),
    er = t(19575),
    ea = t(589158),
    eo = t(652215),
    ed = t(162866),
    ec = t(4577);
let eu = er.Ay.getEnableHardwareAcceleration(),
    eh = s.memo(function (e) {
        let { channel: n, sectionId: i, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, m.bG)([Z.A], () => Z.A.isTyping(n.id, r)),
            c = (0, m.bG)([$.Ay], () => $.Ay.getMember(n.guild_id, r)),
            u = (0, m.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, m.bG)([ee.default], () => ee.default.getUser(r)),
            A = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === A?.id,
            g = (0, m.bG)([Q.A, J.A], () => (p ? J.A.getStatus() : Q.A.getStatus(r, n.guild_id))),
            x = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, m.yK)([Q.A, J.A], () => (p ? J.A.getActivities() : Q.A.getActivities(r, n.guild_id))),
            I = (0, m.bG)([X.A], () => X.A.getAnyStreamForUser(r)),
            j = (0, E.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(n.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("146652"),
                                t.e("893190"),
                                t.e("882073"),
                                t.e("691994"),
                                t.e("576665"),
                                t.e("624198"),
                                t.e("823427"),
                                t.e("343116"),
                                t.e("70515"),
                                t.e("666939"),
                                t.e("424966"),
                            ]).then(t.bind(t, 175269));
                            return (t) => (0, l.jsx)(e, { ...t, user: h, guildId: n.guild_id, channel: n });
                        });
                },
                [h, n],
            ),
            N = s.useCallback(() => {
                if (null == h) return;
                let e = `@${es.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    O.A.startTyping(n.id));
            }, [h, n]),
            T = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        (0, w.K4)({
                            guildId: n.guild_id,
                            location: { section: eo.JJy.THREAD_MEMBER_LIST, object: eo.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [n.guild_id],
            ),
            S = (0, D.r)({ user: h, guildId: n.guild_id }),
            [R, P] = s.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, l.jsx)(K.A, {
            targetElementRef: o,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => P(!1),
            children: (e) => {
                let { onClick: t, onMouseDown: i, ...s } = e;
                return (0, l.jsx)(ea.A, {
                    ref: o,
                    onContextMenu: v,
                    shouldAnimateStatus: eu,
                    user: h,
                    currentUser: A,
                    nick: c?.nick,
                    status: g,
                    activities: f,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: d,
                    channel: n,
                    guildId: n.guild_id,
                    isMobile: x,
                    selected: R,
                    applicationStream: I,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: T,
                    itemProps: j,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? N?.() : P((e) => !e);
                    },
                    onMouseDown: (e) => {
                        R ? e.stopPropagation() : i?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    em = s.memo(function (e) {
        let { id: n, label: t, count: i, guildId: s } = e,
            r = (0, G.Xx)({ roleId: n, guildId: s, size: 16 });
        return n === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(U.A, { className: ec.UT, ...r }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    eA = s.memo(function (e) {
        let { channel: n } = e;
        return n.type === eo.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: ed.yF }),
                      (0, l.jsxs)(_.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: ed.Uz,
                          children: [
                              (0, l.jsx)(v.LockIcon, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              z.intl.string(z.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: ed.GA,
                          children: z.intl.string(z.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function ep(e) {
    var n;
    let t,
        i,
        r,
        o,
        d,
        { channel: c, guild: h } = e,
        A = `members-${c.id}`,
        { analyticsLocations: p } = (0, L.Ay)(M.A.MEMBER_LIST),
        g = (function (e, n) {
            (0, H.Ay)(() => {
                n?.id != null && (0, F.Ey)(n.id, e, V.LD);
            });
            let t = (0, m.bG)([B.A], () => (null != n ? B.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, m.cf)([Y.A], () => ({
                    version: Y.A.getMemberListVersion(e),
                    members: Y.A.getMemberListSections(e),
                })),
                r = null == n,
                a = s.useMemo(() => {
                    if (r) return q;
                    let e = t.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: z.intl.string(z.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: z.intl.string(z.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: n, label: t } = e;
                            return { label: t, userIds: l?.[n]?.userIds ?? [], id: n, roleId: n };
                        })
                    );
                }, [t, l, i, r]);
            return null != l ? a : q;
        })(c.id, h),
        x = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: I } =
            ((n = A),
            (t = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled)),
            (i = s.useRef(null)),
            (r = s.useCallback(
                (e, n) => {
                    let t = i.current;
                    if (null == t) return;
                    let l = parseInt(n, 10),
                        [s, r] = t.getSectionRowFromIndex(l),
                        a = 42 * (0 === s && 0 === r);
                    t.scrollToIndex({
                        section: s,
                        row: r,
                        padding: a,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [42],
            )),
            (o = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = i.current;
                        if (null == n) return e();
                        n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (d = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = i.current;
                        if (null == n) return e();
                        n.scrollToBottom({
                            callback() {
                                requestAnimationFrame(() => setTimeout(e, 100));
                            },
                        });
                    }),
                [],
            )),
            {
                navigator: (0, y.Ay)({ id: n, setFocus: r, isEnabled: t, scrollToStart: o, scrollToEnd: d }),
                listRef: i,
            }),
        j = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        j)
    )
        return (0, l.jsx)(eg, { channel: c });
    let C = u().omit(f.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(L.f5, {
        value: p,
        children: (0, l.jsx)(E.hD, {
            navigator: f,
            children: (0, l.jsx)(N.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(ec.yg, ec.ML, ed.kL),
                        children: (0, l.jsx)(
                            T.OZ,
                            {
                                ref: I,
                                className: ec.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = g[n];
                                    return (0, l.jsx)(
                                        em,
                                        { id: t.id, label: t.label, count: t.userIds.length, guildId: h.id },
                                        t.id,
                                    );
                                },
                                rowHeight: 42,
                                renderRow: (e) => {
                                    let { section: n, row: t } = e,
                                        { userIds: i, id: s } = g[n];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: c, sectionId: s, userId: i[t], guildOwnerId: b },
                                        i[t],
                                    );
                                },
                                footerHeight: (e) => 80 * (g[e] === x && c.type === eo.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    g[e.section] === x ? (0, l.jsx)(eA, { channel: c }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: g.map((e) => e.userIds.length),
                                fade: !0,
                                ...C,
                                ...e,
                            },
                            A,
                        ),
                    }),
            }),
        }),
    });
}
function eg(e) {
    let { channel: n } = e;
    return (0, l.jsxs)("div", {
        className: a()(ed.p$, ed.kL, ec.yg, ec.ML, ec.ol),
        children: [
            (0, l.jsx)(_.E, {
                className: ed.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: z.intl.string(z.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: ed.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: ed.AI,
                        children: (0, l.jsx)(S.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(en.A, { className: ed.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                children: n.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
            }),
            (0, l.jsx)(_.E, {
                className: ed.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: z.intl.string(z.t.emw8UP),
            }),
        ],
    });
}
var ex = t(738876),
    ef = t(456412),
    eI = t(432371),
    ej = t(475743),
    eC = t(933958),
    eE = t(702841),
    ey = t(567249),
    eb = t(811024),
    e_ = t(969151),
    ev = t(108959),
    eN = t(866665),
    eT = t(446576),
    eS = t(817281),
    eR = t(95561),
    eO = t(587837),
    eP = t(850891),
    eM = t(742023),
    eL = t(204651),
    eD = t(383831),
    ek = t(128286),
    ew = t(734057),
    eG = t(309010),
    eU = t(795816),
    eF = t(685399),
    eH = t(216418),
    eV = t(620148),
    eB = t(732637),
    eY = t(104171),
    eW = t(47294),
    ez = t(594007),
    eq = t(16961),
    eK = t(138017),
    eX = t(715482),
    e$ = t(315502),
    eQ = t(573163),
    eJ = t(234320),
    eZ = t(5867),
    e0 = t(248310);
function e1(e) {
    let { channelId: n, className: t, ...i } = e,
        r = s.useRef(null),
        a = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eU.i5)(e);
        }, [a]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let n = (0, m.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, m.cf)(
                    [eQ.Ay],
                    () => ({ unreadCount: eQ.Ay.getUnreadCount(e), mentionCount: eQ.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: i, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            r.current?.focus();
        }, []);
    (0, eJ.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: h });
    let A = a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        p = [A];
    (u > 0 && p.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        d > 0 && p.push(z.intl.string(z.t.x5zAGZ)));
    let g = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        x = u > 0 ? u : d,
        f = x > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eL.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: A,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eZ.E8.NO_CHAT ? eK.j : eX.g,
                themeable: !0,
                className: t,
                ...i,
            }),
            f ? (0, l.jsx)(e$.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e0.qS }) : null,
        ],
    });
}
var e2 = t(538303);
let e3 = eY.DN.SIZE_32,
    e5 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e9(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        r = (0, eV.A)(),
        o = (0, m.yK)([eC.Ay], () => eC.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [I, j] = s.useState(eM.Ay.activityPanelHeight ?? n ?? null),
        C = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        E = s.useRef(null),
        [y, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == E.current) return;
        let e = new ResizeObserver(() => {
            b({ width: E.current?.clientWidth ?? 0, height: E.current?.clientHeight ?? 0 });
        });
        return (e.observe(E.current), () => e.disconnect());
    }, []);
    let v = y.width / Math.max(y.height, 1) < eZ.B5,
        N = 0,
        T = 0,
        S = (0, eH.A)(r?.id);
    if (!S) {
        let e = y.width,
            n = y.height;
        v
            ? ((n = y.width / eZ.B5) > y.height && (e = (n = y.height) * eZ.B5), (T = (y.height - n) / 2))
            : ((e = Math.min(y.height * eZ.B5)) > y.width && (n = (e = y.width) / eZ.B5), (N = (y.width - e) / 2));
    }
    let R = h.get(r?.id ?? ""),
        O = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
        M = (0, m.yK)(
            [$.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => $.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        L = s.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [M]),
        D = (function (e, n, t) {
            let i = (0, ej.Ay)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !P.Ay.useReducedMotion && (l || r);
            return s.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "50ms",
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != n && null != t ? { ...i, minHeight: 200, maxHeight: t, height: n } : i;
            }, [o, e, t, n]);
        })(x, I, n),
        k = (0, eq.G)();
    if (null == r) return null;
    let w = [];
    function G(e) {
        if (null == e || void 0 === e || e === eY.mt) return null;
        let n = L.get(e.id),
            t = n?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e3), alt: t, className: e2.my }, e.id),
            },
            e.id,
        );
    }
    return (
        null != R &&
            (w = Array.from(R.embeddedActivity.userIds)
                .map((e) => ee.default.getUser(e))
                .filter((e) => null != e && void 0 !== e)),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: a()(e2.iE, e5[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eP.A, { type: "embedded-activity", applicationId: r.id }),
                        (0, l.jsxs)("div", {
                            className: e2.lq,
                            children: [
                                x
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e2.wx,
                                          children: (0, l.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: e2.qd,
                                              children: r?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: a()(e2.ht, { [e2.kK]: S }),
                                    style: { paddingLeft: N, paddingRight: N, paddingTop: T, paddingBottom: T },
                                    ref: E,
                                    children: (0, l.jsx)(eB.A, { className: e2.pU, embedId: (0, ez.A)(t.id, r.id) }),
                                }),
                                null != O
                                    ? (0, l.jsxs)("div", {
                                          className: e2.qr,
                                          children: [
                                              (0, l.jsx)(eY.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e3,
                                                  max: 6,
                                                  renderUser: G,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e2.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e2.qi,
                                                          children: [
                                                              (0, l.jsx)(e1, { channelId: O }),
                                                              (0, l.jsx)(eL.l, {
                                                                  isTrayButton: !0,
                                                                  label: z.intl.string(z.t.brPQ5U),
                                                                  onClick: A,
                                                                  iconComponent: eT.g,
                                                                  themeable: !0,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: e2.pt,
                                                          children: (0, l.jsx)(eD.A, {
                                                              applicationId: r.id,
                                                              location: t,
                                                              centerButton: !0,
                                                              color: "disconnect",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              k
                                                  ? (0, l.jsx)(ek.A, {
                                                        popoutOpen: !1,
                                                        onOpenPopout: () => {
                                                            ((0, eR.zV)(eo.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                                (0, eW.A)({
                                                                    onConfirm: async () => {
                                                                        (r?.id != null &&
                                                                            null != d &&
                                                                            (await (0, eU.od)(r.id, d)),
                                                                            (0, eU.jp)());
                                                                    },
                                                                }));
                                                        },
                                                        onClosePopout: () => {},
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        x && null != n
                            ? (0, l.jsx)(eO.A, {
                                  minHeight: 480,
                                  maxHeight: n,
                                  resizableNode: p,
                                  onResize: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), j(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), C(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e7(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eE.cf)([eC.Ay], () => {
            let e = eC.Ay.getConnectedActivityLocation(),
                n = eC.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: n,
                activityPanelMode: eC.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eE.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e9, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e6 = t(90804),
    e8 = t(748975),
    e4 = t(323073),
    ne = t(991690),
    nn = t(621466),
    nt = t(453903),
    ni = t(922016),
    nl = t(980707),
    ns = t(477782),
    nr = t(663417),
    na = t(365199),
    no = t(342321),
    nd = t(22231),
    nc = t(625903),
    nu = t(624479),
    nh = t(70688),
    nm = t(91242),
    nA = t(580954),
    np = t(574172),
    ng = t(869146),
    nx = t(976860),
    nf = t(808728),
    nI = t(576705),
    nj = t(712808),
    nC = t(260498),
    nE = t(95264),
    ny = t(616334),
    nb = t(246338),
    n_ = t(71393),
    nv = t(935208),
    nN = t(164892),
    nT = t(371169),
    nS = t(746080),
    nR = t(165610),
    nO = t(248675),
    nP = t(625180),
    nM = t(672929),
    nL = t(58736);
function nD(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, no.A)(n, "app_channel_header"),
        o = s.useMemo(
            () => ({ type: ne.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        d = (0, nM.A)(n.application_id ?? null, o),
        c = (0, nR.x1)(d) && d.data.proxyTicketRefreshing,
        u = (function (e, n) {
            var t;
            let i,
                r,
                a,
                o,
                d,
                c = (0, nb.w$)(e, "AppChannelHeaderOverflowMenu"),
                u =
                    ((t = c ? e : null),
                    (r = null != (i = (0, nb.us)(t))),
                    (a = t?.guild_id ?? null),
                    (o = (0, m.bG)(
                        [n_.A, nI.A],
                        () => {
                            let e = null != a ? n_.A.getGuild(a) : null;
                            return null != e && nI.A.can(eo.xBc.MANAGE_GUILD, e);
                        },
                        [a],
                    )),
                    (d = (0, m.yK)([$.Ay], () => (null != a ? ($.Ay.getSelfMember(a)?.roles ?? []) : []), [a])),
                    s.useEffect(() => {
                        r && null != i && (0, nT.hF)(a ?? void 0);
                    }, [r, i, a, o, d]),
                    (0, m.bG)(
                        [nC.Ay],
                        () => {
                            if (null == i) return null;
                            let e = nC.Ay.findProjectByApplicationId(i);
                            if (null == e || (0, nC.PV)(e)) return e;
                            let n = null != a ? nv.default.castGuildIdAsEveryoneGuildRoleId(a) : null,
                                t = (e.collaborator_role_ids ?? []).some((e) => e === n || d.includes(e));
                            return e.guild_id === a && (0, nN.Hn)(e) && (o || t) ? e : null;
                        },
                        [i, o, d, a],
                    )),
                h = u?.id ?? null,
                A = e.guild_id ?? null;
            s.useEffect(() => {
                null != h && (0, nj.Hc)(h);
            }, [h]);
            let p = (0, m.bG)([nj.Ay], () => null != h && null != nj.Ay.getSettings(h), [h]),
                g = n?.id,
                x = s.useCallback(() => {
                    (null != g &&
                        ng.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) &&
                        nm.A.getMainFrame()?.id === g &&
                        (0, np.close)(eo.MLl.ACTIVITY_POPOUT),
                        (0, nA.A)().leaveFrame(g),
                        (0, nx.pX)(
                            (function (e, n) {
                                if (null == e) return eo.BVt.FRIENDS;
                                let t = nf.Ay.getDefaultChannel(e);
                                if (null != t && t.id !== n) return eo.BVt.CHANNEL(e, t.id);
                                let i = nf.Ay.getFirstChannel(e, (e) => {
                                    let { channel: t } = e;
                                    return t.id !== n && nI.A.can(eo.xBc.VIEW_CHANNEL, t);
                                });
                                return null != i ? eo.BVt.CHANNEL(e, i.id) : eo.BVt.FRIENDS;
                            })(A, e.id),
                        ));
                }, [g, A, e.id]);
            if (!c || null == u || null == A) return [];
            let f = [
                (0, l.jsx)(
                    ns.Dr,
                    {
                        id: "conjure-edit",
                        icon: nd.PencilIcon,
                        leadingAccessory: { type: "icon", icon: nd.PencilIcon },
                        label: z.intl.string(nO.default.jMMrDM),
                        action: () => (0, nx.pX)(eo.BVt.CHANNEL(A, nS.VV.CONJURE, u.id)),
                    },
                    "edit",
                ),
            ];
            return (
                (p || (0, nC.PV)(u)) &&
                    f.push(
                        (0, l.jsx)(
                            ns.Dr,
                            {
                                id: "conjure-settings",
                                icon: nc.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: nc.SettingsIcon },
                                label: z.intl.string(nO.default.I2XSKe),
                                action: () => (0, ny.A)(u.id, { guildId: A, initialTab: "app" }),
                            },
                            "settings",
                        ),
                    ),
                (0, nC.H_)(u) &&
                    f.push(
                        (0, l.jsx)(
                            ns.Dr,
                            {
                                id: "conjure-remix",
                                icon: nu.CopyIcon,
                                leadingAccessory: { type: "icon", icon: nu.CopyIcon },
                                label: z.intl.string(nO.default["9wQTdG"]),
                                action: () => (0, nE.A)(u, A),
                            },
                            "remix",
                        ),
                    ),
                (0, nR.x1)(n) &&
                    f.push(
                        (0, l.jsx)(
                            ns.Dr,
                            {
                                id: "conjure-close",
                                icon: nh.DoorExitIcon,
                                leadingAccessory: { type: "icon", icon: nh.DoorExitIcon },
                                label: z.intl.string(nO.default["/TlGcK"]),
                                action: x,
                            },
                            "close",
                        ),
                    ),
                f
            );
        })(n, d),
        h = s.useCallback(() => {
            null == d || c || nP.A.refreshProxyTicket(d.id);
        }, [d, c]),
        A = z.intl.string(z.t["UKOtz+"]),
        p = (0, nR.x1)(d);
    return p || null != a || 0 !== u.length
        ? (0, l.jsx)(ni.Y, {
              targetElementRef: r,
              shouldShow: t,
              animation: ni.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: (e, n) => {
                  if ("user:escape" === n && (0, nn.vq)(document.activeElement, HTMLIFrameElement)) return nt.o;
                  i(!1);
              },
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(nl.W, {
                      "data-menu-migrated": !0,
                      navId: "app-channel-header-overflow",
                      onClose: n,
                      onSelect: n,
                      "aria-label": z.intl.string(z.t.Xm41aV),
                      children: (0, l.jsxs)(ns.rX, {
                          children: [
                              u,
                              p &&
                                  (0, l.jsx)(ns.Dr, {
                                      id: "reload-app",
                                      label: z.intl.string(z.t.kHie4V),
                                      action: h,
                                      icon: nr.RefreshIcon,
                                      leadingAccessory: { type: "icon", icon: nr.RefreshIcon },
                                      disabled: c,
                                  }),
                              a,
                          ],
                      }),
                  });
              },
              children: (e, n) => {
                  let { isShown: t } = n;
                  return (0, l.jsx)(nL.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: t ? null : A,
                      icon: na.MoreHorizontalIcon,
                      "aria-label": A,
                      selected: t,
                  });
              },
          })
        : null;
}
var nk = t(12470),
    nw = t(811893),
    nG = t(809871),
    nU = t(73153),
    nF = t(494126);
async function nH(e) {
    null == nm.A.getFrame(e) ||
        ((await (0, nF.refreshProxyTicket)(e)) &&
            ((0, nF.promoteFrame)(e),
            (0, nF.updateFramePanelMode)(e, eZ.Gd.ACTIVITY_POPOUT_WINDOW),
            nU.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
function nV(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: ne.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nM.A)(n.application_id ?? null, t),
        r = (0, eq.G)(),
        a = (0, m.bG)(
            [ng.A, nm.A],
            () => ng.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) && null != i && nm.A.getMainFrame()?.id === i.id,
            [i],
        ),
        o = s.useCallback(() => {
            null != i && (0, eW.A)({ onConfirm: () => nH(i.id) });
        }, [i]),
        d = s.useCallback(() => {
            (0, eW.A)({ onConfirm: () => nG.A.popInFrame() });
        }, []);
    return (0, nR.x1)(i)
        ? a
            ? (0, l.jsx)(nL.In, {
                  icon: nk._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: d,
              })
            : r
              ? (0, l.jsx)(nL.In, {
                    icon: nw.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: o,
                })
              : null
        : null;
}
var nB = t(568598),
    nY = t(198052),
    nW = t(164617),
    nz = t(355622),
    nq = t(689874),
    nK = t(828488),
    nX = t(939249),
    n$ = t(408278),
    nQ = t(739187),
    nJ = t(857250),
    nZ = t(97483),
    n0 = t(534890),
    n1 = t(661531),
    n2 = t(39623),
    n3 = t(952270),
    n5 = t(381849),
    n9 = t(549973),
    n7 = t(957565),
    n6 = t(181041),
    n8 = t(256331),
    n4 = t(623562),
    te = t(403862);
let tn = ["high", "medium", "low"],
    tt = s.memo(function (e) {
        let { moderation: n } = e,
            t = null != n && 1 === n.status,
            i = null != n && !n.flaggedTitle && !n.flaggedSummary && !n.flaggedKeyPoints,
            r = s.useMemo(() => {
                if (null == n) return { passed: 0, failed: 0, unknown: 0 };
                let e = n.flaggedMessageCount ?? n.flaggedMessageIds.length,
                    t = n.totalMessageCount ?? 0,
                    i = 0,
                    l = 0;
                return (
                    null == n.flaggedMessageCount && 0 === n.flaggedMessageIds.length
                        ? (l = t)
                        : null != n.flaggedMessageCount
                          ? (i = Math.max(0, t - e))
                          : (l = Math.max(0, t - e)),
                    { passed: i, failed: e, unknown: l }
                );
            }, [n]),
            a =
                null == n
                    ? "unknown"
                    : r.failed > 0
                      ? "failed"
                      : r.unknown > 0
                        ? "unknown"
                        : r.passed > 0
                          ? "passed"
                          : "unknown",
            o =
                null != n
                    ? (n.flaggedSummaryDetails.find((e) => {
                          var t;
                          return (
                              e.severity ===
                              ((t = n.flaggedSummaryDetails.map((e) => e.severity)),
                              tn.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: te.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: te.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: te.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: te.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : t ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : t ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != n &&
                                    !t &&
                                    null != n.statusReason &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: n.statusReason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: te.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : i ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : i ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != n &&
                                    !i &&
                                    (0, l.jsxs)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            [
                                                n.flaggedTitle && "title",
                                                n.flaggedSummary && "summary",
                                                n.flaggedKeyPoints && "key points",
                                            ]
                                                .filter(Boolean)
                                                .join(", "),
                                            " ",
                                            "flagged",
                                        ],
                                    }),
                                null != n &&
                                    !i &&
                                    (null != d || null != c) &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [d, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: te.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == n || "unknown" === a
                                            ? "text-muted"
                                            : "passed" === a
                                              ? "status-positive"
                                              : "text-feedback-critical",
                                    children:
                                        null == n || "unknown" === a ? "\u2014" : "passed" === a ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != n &&
                                    (r.passed > 0 || r.failed > 0 || r.unknown > 0) &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            r.passed > 0 && `${r.passed} passed`,
                                            r.failed > 0 && `${r.failed} failed`,
                                            r.unknown > 0 && `${r.unknown} unknown`,
                                        ]
                                            .filter(Boolean)
                                            .join(", "),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ti = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = nv.default.extractTimestamp(n.startMessageId),
            s = nv.default.extractTimestamp(n.endMessageId),
            r = (0, n9.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, n5.WR)({ seconds: a, getFormatter: n5.i }),
            d = (0, m.bG)([n6.A], () => n6.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(nX.D, {
            className: te.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: te.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: te.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(n$.K, {
                            icon: nu.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, n7.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nQ.P)((0, nJ.o)("Copied conversation JSON", nZ.Ck.SUCCESS)),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: te.FR,
                    children: [
                        r,
                        " ago \xb7 ",
                        o,
                        " duration \xb7 ",
                        n.messageCount,
                        " messages \xb7 ",
                        n.userCount,
                        " users",
                    ],
                }),
                null != n.briefSummary &&
                    (0, l.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: te.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: te.JP,
                        children: n.keyPoints.map((e, n) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                n,
                            ),
                        ),
                    }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: te.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: te.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: te.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: te.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: te.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: te.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.substance?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: te.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.engagement?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: te.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.dynamics?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Dynamics",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(tt, { moderation: n.moderation ?? null }),
            ],
        });
    });
function tl(e) {
    let { channel: n } = e,
        t = (0, m.bG)([n6.A], () => n6.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([n6.A], () => n6.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([n8.A], () => n8.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, n4.xI)(n.id, e.id);
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: te.zr,
        children: [
            (0, l.jsxs)("div", {
                className: te.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: te.gn,
                        children: [
                            (0, l.jsx)(n0.ChatIcon, { color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: te.y6,
                        children: (0, l.jsx)(n$.K, {
                            icon: r ? n2.EyeIcon : n3.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: n4.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: te.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(ti, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: te.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var ts = t(268218),
    tr = t(726249),
    ta = t(334738),
    to = t(208882),
    td = t(938764),
    tc = t(519480),
    tu = t(352123),
    th = t(825244),
    tm = t(130696);
let tA = function (e) {
    let { guild: n, onAddGuild: i } = e,
        r = s.useCallback(() => {
            (0, p.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("683621"),
                    t.e("711162"),
                    t.e("159957"),
                    t.e("728136"),
                    t.e("216084"),
                    t.e("284819"),
                ]).then(t.bind(t, 405342));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        guild: n,
                        source: eo.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: eo.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [n]);
    return (0, l.jsxs)("div", {
        className: tm.h2,
        children: [
            (0, l.jsx)("img", { className: tm.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: tm._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: tm.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(th.E, {
                      className: tm.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(th.E, {
                className: tm.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var tp = t(683438),
    tg = t(689175),
    tx = t(761508),
    tf = t(765671),
    tI = t(66834),
    tj = t(573435),
    tC = t(101555),
    tE = t(548118),
    ty = t(714991),
    tb = t(776231),
    t_ = t(345942),
    tv = t(486020),
    tN = t(149790),
    tT = t(682557),
    tS = t(524058);
let tR = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(nX.D, {
        onClick: n,
        className: tS.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tS.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tO(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tu.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tS.fc, { [tS.QX]: i }),
        children: (0, l.jsxs)(tC.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tC.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(nd.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tS.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tT.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tC.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(na.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tS.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tP = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([n_.A], () => n_.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, t_.u)(n.guildId) : await tI.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tv.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tb.mZ)() }),
        c = tv.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tS.Nr,
            onContextMenu: function (e) {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tS.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tS.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tS.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tS.$f,
                            children: (0, l.jsx)(tj.Ay, {
                                mask: tj.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tS.SA,
                                    children: (0, l.jsx)(tE.Ay, {
                                        className: tS.rZ,
                                        iconSrc: c,
                                        guild: (0, tN.xi)(n),
                                        size: tE.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tS.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tS.DD,
                            children: [
                                (0, l.jsx)(ty.A, { className: tS.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tS.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tS.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tS.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tS.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tS.JX }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t["LC+S+m"], {
                                                    membersOnline: n.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != n.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: tS.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tS.Li }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t.zRl6XR, {
                                                    count: n.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: tS.PD,
                            children: (0, l.jsx)(x.$, {
                                loading: i,
                                variant: a ? "secondary" : "active",
                                onClick: o,
                                text: u,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(tO, { entry: n }),
            ],
        })
    );
});
var tM = t(946116),
    tL = t(844086),
    tD = t(770679);
function tk(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tf.Ay)(),
        d = null != o && o <= 800;
    return (0, l.jsxs)("div", {
        ref: r,
        className: tD.wx,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: tD.F0,
                src: d ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
            }),
            (0, l.jsx)("div", {
                className: tD.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tD.VW, { [tD.eO]: d }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            className: tD.dc,
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            className: tD.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)(f.N, {
                            theme: W.NJ.LIGHT,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: a()(tD.MT, e),
                                    children: (0, l.jsx)(tp.I, {
                                        query: n,
                                        "aria-label": z.intl.string(z.t.nL2wKD),
                                        placeholder: z.intl.string(z.t.nL2wKD),
                                        onChange: t,
                                        onClear: i,
                                        onKeyDown: s,
                                    }),
                                }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
let tw = function (e) {
    let {
        channel: n,
        directoryEntries: t,
        handleCreateOrAddGuild: i,
        searchQuery: r,
        setSearchQuery: a,
        handleClearSearch: o,
        handleSearchKeyPress: d,
        currentCategoryId: c,
        handleSelectCategory: u,
        categoryCounts: h,
        allEntriesCount: m,
        isLoading: A,
    } = e;
    return (0, l.jsx)("div", {
        className: tL.$$,
        children: (0, l.jsxs)(tg.Gt, {
            className: tL.XG,
            children: [
                (0, l.jsx)(tk, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tg.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(tx.V, {
                        className: tD.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                tx.V.Item,
                                { className: tD.YU, id: tM.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                tM.mU.ALL,
                            ),
                            (0, tM.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    tx.V.Item,
                                    { className: tD.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: tL.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: tD.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tL.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tP, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tR, { onClick: i }) : null,
                                          ],
                                      }),
                                  ],
                              },
                              n,
                          ),
                      ),
            ],
        }),
    });
};
var tG = t(370876),
    tU = t(28863),
    tF = t(364522),
    tH = t(792831),
    tV = t(211862);
let tB = function (e) {
    let n,
        {
            searchQuery: t,
            setSearchQuery: i,
            mostRecentQuery: s,
            handleClearSearch: r,
            handleSearchKeyPress: a,
            handleCreateOrAddGuild: o,
            searchResults: d,
            searchFetching: c,
        } = e;
    if (c) n = (0, l.jsx)("div", { className: tL.$$, children: (0, l.jsx)(g.y, { className: tL.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tU.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tV.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: tV.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tL.vY, children: d.map((e) => (0, l.jsx)(tP, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tL.$$,
        children: (0, l.jsxs)(tF.Ar, {
            className: tL.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tV.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tV.Dr,
                            children: [
                                (0, l.jsx)(nX.D, {
                                    onClick: r,
                                    className: tV.UE,
                                    children: (0, l.jsx)(tH.A, { direction: tH.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tV.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tp.I, {
                            query: t,
                            "aria-label": z.intl.string(z.t.nL2wKD),
                            placeholder: z.intl.string(z.t.nL2wKD),
                            onChange: i,
                            onClear: r,
                            onKeyDown: a,
                        }),
                    ],
                }),
                n,
            ],
        }),
    });
};
var tY = t(650583);
let tW = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([tc.A], () => {
            let e = tc.A.getCurrentCategoryId(n.id),
                t = tc.A.getDirectoryEntries(n.id, e === tM.mU.ALL ? null : e),
                i = tc.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: tc.A.getDirectoryAllEntriesCount(n.id),
                isLoading: tc.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                nU.h.wait(() => {
                    (0, ta.ack)(
                        n.id,
                        {
                            object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: eo.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [n.id],
    );
    let u = s.useMemo(
            () =>
                null != a
                    ? (function (e, n) {
                          if (n !== tM.mU.ALL) return [{ entries: (0, tG._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tG.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tG.DN)(s)).length > 0 &&
                                  t.push({ header: z.intl.string(z.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(a), r)
                    : null,
            [a, r],
        ),
        {
            mostRecentQuery: h,
            searchFetching: A,
            searchResults: x,
        } = (0, m.cf)([td.A], () => {
            let { mostRecentQuery: e, fetching: t } = td.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: td.A.getSearchResults(n.id, e) };
        }),
        [f, I] = s.useState(h),
        j = "" !== h,
        C = { mostRecentQuery: h },
        E = s.useRef(C);
    (s.useEffect(() => {
        E.current = C;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = E.current;
            (to.Yc(n.id), to.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, tu.b)(n),
        b = s.useMemo(
            () =>
                y
                    ? () => {
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("122326"),
                                  t.e("533651"),
                                  t.e("554970"),
                                  t.e("140606"),
                                  t.e("419580"),
                                  t.e("197804"),
                                  t.e("756856"),
                                  t.e("796349"),
                              ]).then(t.bind(t, 579735));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: n.id,
                                      currentCategoryId: r === tM.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === tY.dh.ENTER &&
            (to.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (I(""), to.BA(n.id));
    }
    return j
        ? (0, l.jsx)(tB, {
              searchQuery: f,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: v,
              handleCreateOrAddGuild: b,
              searchResults: x,
              searchFetching: A,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: tL.$$, children: (0, l.jsx)(g.y, { className: tL.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tL.$$, children: (0, l.jsx)(tA, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tw, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      to.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var tz = t(826673),
    tq = t(93055),
    tK = t(47167),
    tX = t(688438),
    t$ = t(353428),
    tQ = t(288254),
    tJ = t(873614),
    tZ = t(649852),
    t0 = t.n(tZ),
    t1 = t(789645),
    t2 = t(163126),
    t3 = t(182061),
    t5 = t(886393),
    t9 = t(307623),
    t7 = t(660273),
    t6 = t(707792),
    t8 = t(41402),
    t4 = t(271456),
    ie = t(200273),
    it = t(565846),
    ii = t(57907),
    il = t(375500),
    is = t(707653),
    ir = t(50268),
    ia = t(378570),
    io = t(162199),
    id = t(713608),
    ic = t(473503),
    iu = t(901472),
    ih = t(267102),
    im = t(474397),
    iA = t(486974),
    ip = t(39470);
function ig(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, ih.aL)(),
        r = z.intl.string(ip.default["Beo/7v"]),
        { firstMessage: a } = (0, ic.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nL.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, ia.iN)(n.id),
                      (0, im.A)(),
                      (0, iu.z)(n.guild_id, d, n.id, {
                          modViewPanel: iA.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: id.q,
              "aria-label": r,
          })
        : null;
}
var ix = t(780338),
    iI = t(782603),
    ij = t(857071),
    iC = t(607508),
    iE = t(914703),
    iy = t(37411);
function ib(e) {
    let { channel: n } = e,
        t = (0, iC.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([ij.A], () => null != n.guild_id && ij.A.isLurking(n.guild_id));
    if (
        (s.useEffect(() => {
            function e() {
                return r(!0);
            }
            return (
                ei._.subscribe(eo.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    ei._.unsubscribe(eo.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        o)
    )
        return null;
    let d = z.intl.string(z.t.h850Ss);
    return (0, l.jsx)(ni.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: ni.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(iE.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nL.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === iy.CP.NO_MESSAGES ? ix.BellSlashIcon : iI.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var i_ = t(747926);
function iv(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(ni.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: ni.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iN, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nL.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: na.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function iN(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t7.A)(n, "Sidebar Overflow"),
        r = (0, t8.A)(n),
        a = (0, ii.A)(n),
        o = (0, il.A)(n),
        d = (0, t3.A)(n),
        c = (0, t6.A)(n),
        u = (0, it.A)(n.id),
        h = (0, ie.A)(n),
        m = (0, t9.A)(n),
        A = (0, t5.A)(n),
        p = (0, ir.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, is.A)(n),
        x = (0, t4.A)(n),
        f = (0, t2.$)(1e3);
    function I() {
        (0, ia.iN)(n.id);
    }
    function j(e) {
        let t = t0()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(nl.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ns.rX, {
                children: [s, (0, l.jsx)(ns.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: I })],
            }),
            (0, l.jsxs)(ns.rX, { children: [a, o] }),
            (0, l.jsxs)(ns.rX, { children: [h, r, u, x] }),
            (0, l.jsxs)(ns.rX, {
                children: [
                    (0, l.jsx)(ns.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nw.t,
                        trailingIndicator: { type: "icon", icon: nw.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I());
                        },
                    }),
                    (0, l.jsx)(ns.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nw.t,
                        trailingIndicator: { type: "icon", icon: nw.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(ns.rX, { children: [g, d, c, m] }),
            (0, l.jsxs)(ns.rX, { children: [A, p] }),
        ],
    });
}
function iT(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nL.Ay.Icon, {
            icon: t1.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, i_.xu)((0, io.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(ib, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(ig, { channel: n }) : null,
                  (0, l.jsx)(iv, { channel: n }),
                  i,
              ],
          });
}
var iS = t(31717),
    iR = t(853742),
    iO = t(85190);
function iP(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([n_.A], () => n_.A.getGuild(i?.getGuildId())),
        o = (0, tK.Ay)(i),
        d = (0, tQ.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iR.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(tJ.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iT, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iS.C.ChannelMessage }),
            (0, l.jsx)(nL.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t$.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("955557"),
                                t.e("947502"),
                                t.e("965789"),
                                t.e("584615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, nx.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iO.T,
                children: (0, l.jsx)(tX.A, { channel: i, guild: a, chatInputType: nz.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iM = t(925166),
    iL = t(605117),
    iD = t(857253),
    ik = t(872363);
let iw = function (e, n) {
    nU.h.wait(() => {
        nU.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var iG = t(561446),
    iU = t(300233),
    iF = t(499211),
    iH = t(468689),
    iV = t(529942),
    iB = t(739455),
    iY = t(709017);
function iW(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iY.t7,
        children: (0, l.jsxs)("div", {
            className: iY.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iY.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iY.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iY.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iV.rf)(n),
                                        iH.default.open(
                                            n,
                                            eo.BEX.ROLE_SUBSCRIPTIONS,
                                            void 0,
                                            eo.nd0.ROLE_SUBSCRIPTION_TIERS,
                                        ),
                                        (0, iB.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iz = t(599941),
    iq = t(29385),
    iK = t(950344),
    iX = t(217530),
    i$ = t(162093),
    iQ = t(325348);
function iJ(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iq.e)({ guildId: n, channelId: t }),
        r = (0, iz.uk)(n),
        a = (0, iz.Tq)(n),
        o = (0, m.bG)([n_.A], () => n_.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tK.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, iK.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iQ.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iQ.__invalid_spinner }),
          })
        : (0, l.jsxs)(tF.Ar, {
              className: iQ.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iQ.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iQ.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iX.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  i$.A,
                                  {
                                      guildId: n,
                                      listingId: e.id,
                                      groupListingId: h[e.id],
                                      analyticsLocation: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
var iZ = t(138298),
    i0 = t(940382),
    i1 = t(761640);
function i2(e) {
    let { channelId: n } = e,
        t = (function (e) {
            let { hasUnread: n, mentionCount: t } = (0, m.cf)(
                [eQ.Ay],
                () => ({ hasUnread: eQ.Ay.hasUnread(e), mentionCount: eQ.Ay.getMentionCount(e) }),
                [e],
            );
            return s.useMemo(() => {
                if (0 === t) {
                    if (!n) return;
                    return { type: "unread", position: "bottom" };
                }
                return { type: "important", position: "bottom", text: String(t) };
            }, [t, n]);
        })(n),
        i = (0, m.bG)([i1.Ay], () => i1.Ay.getCurrentSidebarChannelId(n) === n, [n]),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(n)?.getGuildId(), [n]);
    return (0, l.jsx)(nL.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: n0.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? iZ.A.closeChannelSidebar(n)
                : iZ.A.openChannelAsSidebar({
                      guildId: r,
                      channelId: n,
                      baseChannelId: n,
                      details: { type: i0.kk.CHAT },
                  });
        },
        selected: i,
        badge: t,
    });
}
var i3 = t(284252);
function i5(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([i1.Ay], () => i1.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([n6.A], () => (n6.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(nL.In, {
        onClick: j.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: n0.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? i3.q : void 0,
        selected: t,
        badge: r,
    });
}
var i9 = t(967198);
function i7(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([i1.Ay], () => i1.Ay.getSection(n)),
        i = (0, m.bG)([i9.A], () => i9.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nL.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                j.A.toggleMembersSection());
        },
        selected: s,
    });
}
var i6 = t(187360),
    i8 = t(366605),
    i4 = t(945830);
let le = function (e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        [i, r] = s.useState(!1),
        a = (0, ih.aL)(),
        o = s.useRef(null),
        d = s.useCallback(() => {
            t || r((e) => !e);
        }, [t]),
        c = (0, m.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(n.id), [n]),
        u = s.useMemo(() => (c ? { type: "unread", position: "bottom" } : void 0), [c]);
    function h(e) {
        e?.shiftKey || a.dispatch(eo.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                ei._.subscribe(eo.jej.TOGGLE_CHANNEL_PINS, d),
                () => {
                    ei._.unsubscribe(eo.jej.TOGGLE_CHANNEL_PINS, d);
                }
            ),
            [d],
        ),
        (0, l.jsx)(ni.Y, {
            targetElementRef: o,
            shouldShow: i,
            animation: ni.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => r(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(i4.A, { ...e, onJump: h, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(nL.In, {
                    ...e,
                    ref: o,
                    onClick: d,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: i8.t,
                    iconSize: 20,
                    "aria-label": z.intl.string(z.t["mp1N/2"]),
                    disabled: t,
                    badge: u,
                    selected: i,
                });
            },
        })
    );
};
var ln = t(306788),
    lt = t(863922),
    li = t(822074),
    ll = t(521732);
function ls(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, m.bG)([li.A], () => li.A.shouldShowTopicsBar());
    return (0, l.jsx)(nL.Ay.Icon, {
        icon: ln.K,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: ll.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, lt.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var lr = t(885574),
    la = t(947094),
    lo = t(919577),
    ld = t(207777),
    lc = t(422844),
    lu = t(435470),
    lh = t(892110),
    lm = t(45494);
function lA(e) {
    let { channel: n } = e,
        t = (0, lu.S4)(n),
        i = (0, m.bG)([la.A], () => la.A.hasHidden(n.id)),
        s = (0, lh.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, lc.R)(n.id),
        d = (0, m.bG)(
            [ld.A, lm.A],
            () => !!(ld.A.getThreadIds(n.id, r, a, o).length > 0) || !!(lm.A.getThreads(n.id, r, a, o).length > 0),
            [n.id, r, a, o],
        ),
        c = n.isMediaChannel();
    if (!t || s || (c && d)) return null;
    let u = i
        ? c
            ? z.intl.string(z.t["WP/IE1"])
            : z.intl.string(z.t.zfq9V4)
        : c
          ? z.intl.string(z.t.p60yF1)
          : z.intl.string(z.t.SNOqYC);
    return (0, l.jsx)(nL.In, {
        tooltip: u,
        icon: lr.CircleInformationIcon,
        onClick: function () {
            return lo.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lp = t(290136),
    lg = t(975571),
    lx = t(490094);
function lf() {
    let e = z.intl.string(lx.default.pdipXI);
    return (0, l.jsx)(nL.In, {
        tooltip: e,
        icon: lp.CircleQuestionIcon,
        onClick: function () {
            window.open(lg.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lI = t(742589),
    lj = t(43105),
    lC = t(428689),
    lE = t(978940),
    ly = t(387755),
    lb = t(730852),
    l_ = t(641703),
    lv = t(379848),
    lN = t(753727),
    lT = t(625075),
    lS = t(222692),
    lR = t(442353),
    lO = t(470710),
    lP = t(186111),
    lM = t(25578),
    lL = t(994500),
    lD = t(977997),
    lk = t(818023),
    lw = t(49999),
    lG = t(731854);
class lU extends s.PureComponent {
    iconRef = s.createRef();
    componentDidMount() {
        ei._.subscribe(eo.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        ei._.unsubscribe(eo.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: i,
                isBlocked: s,
                channel: r,
                mode: a,
                isProvisional: o,
            } = this.props;
        if (n || (t && a === eo._Of.VOICE)) return null;
        let d = r.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = z.intl.string(z.t.izMR7o)))
                : lM.Ay.supports(lG.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lT.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nL.Ay.Icon, { icon: lC.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: i,
                isBlocked: s,
                channel: r,
                dismissibleContentTypes: a,
                isProvisional: o,
            } = this.props;
        if (n) return null;
        let d = r.isManaged(),
            c = !1;
        o
            ? ((c = !0), (e = z.intl.string(z.t.izMR7o)))
            : i
              ? ((e = d ? z.intl.string(z.t.LW2Ghr) : z.intl.string(z.t.rF7lN5)), (c = !0))
              : s
                ? ((e = z.intl.string(z.t.PHzjvX)), (c = !0))
                : (e = t
                      ? d
                          ? z.intl.string(z.t.S0W8Z5)
                          : z.intl.string(z.t.fdEeb5)
                      : d
                        ? z.intl.string(z.t.S0W8Z5)
                        : z.intl.string(z.t.focH1t));
        let u = (0, l.jsx)(nL.Ay.Icon, {
            ref: this.iconRef,
            icon: lE._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lv.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lj.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lk.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lw.i.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, l.jsxs)(s.Fragment, { children: [this.renderVoiceCallButton(), this.renderVideoCallButton()] });
    }
    handleStartCall = (e, n) => {
        let { channel: t, notFriend: i, appContext: l } = this.props,
            s = i ? t.getRecipientId() : null;
        function r() {
            return ly.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lR.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lb.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tz.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lw.i.AUTO }),
            n)
        );
        else if (t) return this.handleJoinCall(!1);
        else return this.handleStartCall(e, !1);
    };
    handleStartVideoCall = (e) => {
        this.handleStartCall(e, !0);
    };
    handleJoinVideoCall = () => {
        let { appContext: e } = this.props,
            n = () => this.handleJoinCall(!0);
        (0, lR.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lS.A)();
    };
}
function lF(e) {
    let { channel: n } = e,
        t = (0, lN.A)(),
        i = (0, m.bG)([nY.A], () => nY.A.getMode(n.id)),
        s = (0, m.bG)([lD.A], () => lD.A.isInChannel(n.id)),
        r = (0, m.bG)([P.Ay], () => P.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lO.A], () => ({
            callActive: lO.A.isCallActive(n.id),
            callUnavailable: lO.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lL.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lL.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lL.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, ih.Us)(),
        g = [],
        x = (0, l_.A)(n.id),
        f = (0, m.bG)([lP.A], () => lP.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lU, {
              channel: n,
              mode: i,
              inCall: s,
              callActive: a,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: o,
              notFriend: c,
              isBlocked: u,
              appContext: p,
              dismissibleContentTypes: g,
              useReducedMotion: r,
          });
}
var lH = t(452015),
    lV = t(765178),
    lB = t(231483),
    lY = t(544231),
    lW = t(338510),
    lz = t(151119),
    lq = t(278941),
    lK = t(665909),
    lX = t(327337);
let l$ = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lW.u)(n.id),
        r = (0, lz.S)(n.id),
        a = (0, lq.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lP.A], () => lP.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lV.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lY.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lK.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lK.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lV.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lY.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lK.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lK.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lY.xi)(n.id, [a.id]),
            null != i &&
                ((0, p.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("456510"),
                            t.e("506627"),
                            t.e("770940"),
                            t.e("302033"),
                            t.e("623068"),
                        ]).then(t.bind(t, 516567));
                        return (t) => {
                            let { onClose: s, transitionState: r } = t;
                            return (0, l.jsx)(e, {
                                otherUserId: n.getRecipientId(),
                                channelId: n.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: s,
                                transitionState: r,
                            });
                        };
                    },
                    { modalKey: lX.V },
                ),
                (0, lK._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lK.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nL.Ay.Icon, {
                  icon: lB.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lQ = t(262763),
    lJ = t(406704);
let lZ = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lN.A)(),
        i = (0, m.bG)([lD.A], () => lD.A.isInChannel(n.id)),
        r = (0, m.bG)([lD.A], () => !u().isEmpty(lD.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([nI.A], () => nI.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iF.A)(n.id),
        d = (0, lJ.Id)(n),
        { enabled: c } = lJ.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lQ.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [n, i, o]);
    return (s.useEffect(() => {
        if (c)
            return (
                ei._.subscribe(eo.jej.CALL_START, h),
                () => {
                    ei._.unsubscribe(eo.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !t && !i && a && d && n.isVocalThread())
        ? (0, l.jsx)(nL.Ay.Icon, {
              icon: lE._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var l0 = t(812991),
    l1 = t(47675),
    l2 = t(999291);
function l3() {
    let [e, n] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            function e() {
                n(window.innerWidth >= 1132);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        e
    );
}
function l5(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([i1.Ay], () => i1.Ay.getSection(n.id, n?.isDM())),
        s = (0, l2.Ay)(n.getRecipientId()),
        r = l3(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nL.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: l0.n,
        onClick: function () {
            ((0, l1.am)({ displayProfile: s, isProfileOpen: !a }), j.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let l9 = {};
class l7 extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            l9[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = l9[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return l9;
    }
}
let l6 = new l7(nU.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = l9[t];
        return null == i ? ((l9[t] = new Set()), l9[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != l9[n.id] && !n.unavailable && (delete l9[n.id], !0);
    },
});
var l8 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l4 = t(376943),
    se = t(394953),
    sn = t(683063),
    st = t(403581),
    si = t(241541),
    sl = t(709066),
    ss = t(87664),
    sr = t(247676),
    sa = t(695526);
t(667532);
var so = t(403362);
t(696101);
let sd = [],
    sc = er.Ay.getEnableHardwareAcceleration();
function su(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([lL.A], () => lL.A.getNickname(n.id)),
        h = (0, ss.A)(n.id),
        A = s.useRef(null);
    function p(e) {
        (0, C.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("463317"),
                t.e("926132"),
                t.e("146652"),
                t.e("893190"),
                t.e("189673"),
                t.e("882073"),
                t.e("797558"),
                t.e("691994"),
                t.e("576665"),
                t.e("624198"),
                t.e("245996"),
                t.e("700792"),
                t.e("592822"),
                t.e("529422"),
                t.e("823427"),
                t.e("309291"),
                t.e("307059"),
                t.e("528864"),
            ]).then(t.bind(t, 778595));
            return (t) => (0, l.jsx)(e, { ...t, user: n, channel: i });
        });
    }
    function g() {
        let e = `@${es.Ay.getUserTag(n, { decoration: "never" })}`,
            t = `<@${n.id}>`;
        (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
            O.A.startTyping(i.id));
    }
    let x = (0, D.r)({ user: n }),
        [f, I] = s.useState(!1);
    return (0, l.jsx)(K.A, {
        targetElementRef: A,
        user: n,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => I(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...m } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: A,
                    user: n,
                    currentUser: d,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: sc,
                    isTyping: o,
                    status: r,
                    activities: a,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: p,
                    selected: f,
                    isMobile: c,
                    nick: u,
                    nameplate: x,
                    onClick: (e) => {
                        e.shiftKey ? g?.() : I((e) => !e);
                    },
                    onMouseDown: (e) => {
                        f ? e.stopPropagation() : s?.(e);
                    },
                    ...m,
                },
                n.id,
            );
        },
    });
}
function sh(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sm(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, L.Ay)(M.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lL.A, ee.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(so.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lL.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sd,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sd });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sh,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, sr.A)({ useNitroCapExperiment: !0 }),
        h = (0, sa.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(L.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tF.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(sn.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(st.t, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                      className: ec.K4,
                                                      "aria-hidden": !0,
                                                  }),
                                                  `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length} `,
                                              ],
                                          }),
                                      })
                                    : `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length} `,
                                o && (0, l.jsx)(sl.A, { type: sl.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                su,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lH.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: si.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lH.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sA = t(322338),
    sp = t(898029),
    sg = t(36537);
function sx() {
    return (0, l.jsx)("div", {
        className: sg.zt,
        children: (0, l.jsx)("header", {
            className: sp.wL,
            children: (0, l.jsxs)("div", {
                className: sp.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sp.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sp.u1,
                            itemClassName: sp.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sf = t(747376),
    sI = t(163328),
    sj = t(425557),
    sC = t(270003),
    sE = t(150934),
    sy = t(452027),
    sb = t(95477),
    s_ = t(281595),
    sv = t(465532),
    sN = t(579872),
    sT = t(119031),
    sS = t(408018),
    sR = t(479909),
    sO = t(822610),
    sP = t(915089),
    sM = t(314307),
    sL = t(636922),
    sD = t(931664),
    sk = t(631576),
    sw = t(885386),
    sG = t(232835),
    sU = t(522602),
    sF = t(806150),
    sH = t(518960),
    sV = t(753738);
function sB(e, n) {
    return { type: e, message: n ?? null };
}
function sY(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sW = t(659617),
    sz = t(474078),
    sq = t(636537),
    sK = t(152367),
    sX = t(147087);
async function s$(e) {
    try {
        let n = await sq.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, sq.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var sQ = t(55294),
    sJ = t(143161),
    sZ = t(909833);
let s0 = nz.oU.THREAD_CREATION;
function s1(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: r } = (0, L.Ay)(M.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(L.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: sJ.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iS.C.FirstThreadMessage }),
                          (0, l.jsx)(s2, { parentChannelId: n }),
                          (0, l.jsx)(s3, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function s2(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iS.A.getThreadSettings(n),
                t = iS.A.getDraft(n, iS.C.FirstThreadMessage).trim(),
                i = sU.A.getUploads(n, iS.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sN.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, i_.bA)(n);
                      },
                  })
                : (0, i_.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nL.Ay, {
        toolbar: (0, l.jsx)(nL.Ay.Icon, { icon: t1.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nL.Ay.Icon, { icon: sI.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nL.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function s3(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([P.Ay], () => P.Ay.messageGroupSpacing),
        d =
            ((n = s.useContext(eJ.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, m.bG)([iS.A], () => iS.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sv.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, sS.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iS.A.getDraft(e.id, iS.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sS.ur)(l)), n(iS.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iS.A.addChangeListener(t),
                        () => {
                            iS.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, sW.EN)(t),
        {
            isGeneratingAI: x,
            enableAIFeatures: f,
            getThreadNameInputAccessory: I,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    updateThreadSettings: i,
                    threadSettings: r,
                    textAreaState: a,
                } = e,
                [o, d] = s.useState(!1),
                [c, u] = s.useState(!1),
                h = (0, sX.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = sG.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await s$(e);
                                null != n && "" !== n.trim() && i({ name: n });
                            }
                        } finally {
                            d(!1);
                        }
                    }
                }, [n.id, t, i, h, a.textValue]);
            (s.useEffect(() => {
                (u(!1), d(!1), n.id === r.parentChannelId && t !== r.parentMessageId && i({ name: "" }));
            }, [t, i, n.id, r.parentChannelId, r.parentMessageId]),
                s.useEffect(() => {
                    (null != r.name && "" !== r.name.trim()) || c || (h && null != t && (u(!0), m()));
                }, [n.id, t, i, r.name, c, h, m]));
            let A = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: sK.D,
                                onClick: m,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, m, o, t, a.textValue],
                ),
                p = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(n$.K, {
                                      icon: sK.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: m,
                                      disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, t, a.textValue, m],
                );
            return {
                isGeneratingAI: o,
                generateAIName: m,
                enableAIFeatures: h,
                renderAiGenerateButton: p,
                getThreadNameInputAccessory: A,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: A }),
        {
            nameError: j,
            messageError: C,
            submit: E,
            submitting: y,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    textAreaState: r,
                    location: a,
                    enableAIFeatures: o,
                } = e,
                [d, c] = s.useState(null),
                [u, h] = s.useState(null),
                [m, A] = s.useState(!1),
                p = (0, sQ.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: i_.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (m) return { shouldClear: !1, shouldRefocus: !1 };
                        (A(!0),
                            null == e && (e = r.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = sD.A.getStickerPreview(n.id, s0.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sU.A.getUploads(n.id, iS.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sB(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sB(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, sF.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: s0,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), sB(1, (0, sV.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sB(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sk.x5)(n.id, s0.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
                    },
                    [p, r.textValue, i.name, t, n, m, o],
                ),
                submitting: m,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: g,
            textAreaState: A,
            location: r,
            enableAIFeatures: f,
        }),
        b = (0, sW.Iy)(c, g) ? sj.t : sI.y;
    return (0, l.jsx)("div", {
        className: sJ.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(sJ.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), E());
                },
                className: sJ.Zd,
                children: [
                    (0, l.jsx)(tF.Ip, {
                        className: sJ.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sJ.bv,
                            children: [
                                (0, l.jsxs)(sM.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(sZ.P0, sJ.P0),
                                            children: (0, l.jsx)(b, { className: sZ.Kk }),
                                        }),
                                        (0, l.jsxs)(sC.n, {
                                            children: [
                                                (0, l.jsx)(s9, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: j,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: I,
                                                }),
                                                (0, l.jsx)(s5, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(s6, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sJ.Eh,
                        children: [
                            (0, l.jsx)(s7, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: E,
                                error: C,
                            }),
                            (0, l.jsx)(sT.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sJ.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function s5(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, sW.Iy)(t, s),
        a = (0, l.jsx)(sE.S, {
            disabled: s === sW.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === sW.jk.Disabled
        ? null
        : (0, l.jsx)(sy.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function s9(e) {
    let {
            parentChannel: n,
            parentMessageId: t,
            threadSettings: i,
            updateThreadSettings: s,
            error: r,
            disabled: a,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = sY(r, { content: u }),
        m = (0, sW.l1)(n, t),
        A = null != t && !d,
        p = (0, sP.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sb.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, sz.A)(e, !1) }), "" !== e ? O.A.startTyping(n.id) : O.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, sz.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function s7(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sv.A.saveDraft(n.id, t, iS.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? O.A.startTyping(n.id) : "" === t && O.A.stopTyping(n.id),
                            { textValue: t, richValue: l }
                        ),
                    ));
            },
            [n.id, i],
        ),
        g = s.useCallback(
            (e) => {
                let { value: n, uploads: t, stickers: i } = e;
                return r(n, i, t);
            },
            [r],
        );
    ((0, eJ.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, eJ.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: A }));
    let x = (0, m.bG)([nI.A], () => nI.A.can(eo.xBc.ATTACH_FILES, n)),
        f = sY(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sO.A, { channelId: n.id, type: s0, canAttachFiles: x }),
            (0, l.jsx)("div", { className: sJ.xN, children: (0, l.jsx)(s_.U, { error: f }) }),
            (0, l.jsx)(sR.Ay, {
                type: s0,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(sJ.gM, sJ.Yy),
                innerClassName: a()(sJ.SL, { [sJ.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: sH.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function s6(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([sG.A], () => (null == t ? null : sG.A.getMessage(n.id, t))),
        s = sw.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sL.A, {
              className: sJ.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var s8 = t(305866),
    s4 = t(707539),
    re = t(702513),
    rn = t(272736);
function rt(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, e4.ni)(n),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            (t || (0, s4.D3)("Popout"), i(!t));
        }, [t]);
    return (0, l.jsx)(ni.Y, {
        targetElementRef: r,
        animation: ni.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: t,
        onRequestClose: o,
        renderPopout: function () {
            return (0, l.jsx)(s8.l, {
                children: (0, l.jsx)(re.A, { className: rn.T, channel: n, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nL.In, {
                ...e,
                ref: r,
                className: rn.Kk,
                onClick: d,
                icon: sI.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: a,
                selected: t,
            });
        },
    });
}
var ri = t(40389),
    rl = t(148494),
    rs = t(56562);
function rr(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(ni.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: ni.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(ra, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nL.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: na.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function ra(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t3.A)(n),
        r = (0, t6.A)(n),
        a = (0, it.A)(n.id),
        o = (0, ie.A)(n),
        d = (0, ir.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, t5.A)(n),
        h = (0, t9.A)(n),
        A = (0, t7.A)(n, "Toolbar Overflow"),
        p = (0, t8.A)(n),
        g = (0, ri.A)(n),
        x = (0, is.A)(n),
        f = (0, t4.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(ns.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rl.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rs.vx.INSTANT });
                  },
              })
            : null,
        j = sw.SY.useSetting(),
        C = (0, m.bG)([lD.A], () => !u().isEmpty(lD.A.getVoiceStatesForChannel(n.id))),
        E = (0, m.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nl.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ns.rX, { children: [A, g] }),
            (0, l.jsxs)(ns.rX, {
                children: [
                    I,
                    o,
                    p,
                    a,
                    !j || C || E
                        ? null
                        : (0, l.jsx)(ns.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, i_.JA)(n);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(ns.rX, { children: [x, s, r, h] }),
            (0, l.jsxs)(ns.rX, { children: [c, d] }),
        ],
    });
}
var ro = t(332456),
    rd = t(973854),
    rc = t(62502);
function ru(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([n_.A], () => n_.A.getGuild(d?.getGuildId())),
        h = (0, tK.Ay)(d),
        A = (0, tQ.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lD.A], () => null != n && !u().isEmpty(lD.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nU.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, ia.N9)(n, { source: iy.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, ro.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, eR.qL)(d.id), channel_view: o }),
                (0, rd.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(tJ.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(iT, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iS.C.ChannelMessage }),
            (0, l.jsx)(nL.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t$.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("955557"),
                                t.e("947502"),
                                t.e("965789"),
                                t.e("584615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, ia.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rc.T,
                children: (0, l.jsx)(tX.A, { channel: d, guild: c, chatInputType: nz.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rh = t(210714),
    rm = t(402860),
    rA = t(707554),
    rp = t(140735),
    rg = t(590180),
    rx = t(372320),
    rf = t(562153),
    rI = t(945810);
let rj = (0, rI.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rC(e) {
    return rj.useConfig({ location: e }).enabled;
}
var rE = t(215530),
    ry = t(454719),
    rb = t(736653),
    r_ = t(311016),
    rv = t(480335),
    rN = t(713517),
    rT = t(397562),
    rS = t(183555),
    rR = t(718019),
    rO = t(365607),
    rP = t(915614),
    rM = t(308244),
    rL = t(743987),
    rD = t(900179),
    rk = t(946356),
    rw = t(465829),
    rG = t(35241),
    rU = t(587168),
    rF = t(442228),
    rH = t(744808);
let rV = (0, rI.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rB = t(827428);
function rY(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function rW(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = rV.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, l1.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rB.lS,
            children: (0, l.jsx)(x.$, {
                variant: "secondary",
                size: "md",
                fullWidth: !0,
                text: z.intl.string(z.t["+Xp3hq"]),
                onClick: o,
            }),
        });
    let d = a
        ? (0, l.jsx)("div", {
              className: rB.qr,
              children: (0, l.jsx)(nX.D, {
                  onClick: o,
                  className: rB.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rB.xQ, children: [(0, l.jsx)(rH.A, { frame: i, filterLayer: rY }), d] })
        : d;
}
var rz = t(518477),
    rq = t(996988),
    rK = t(207634),
    rX = t(561419),
    r$ = t(396095);
function rQ(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, r_.A)(n.id),
        o = (0, l2.Ay)(n.id),
        d = (0, rb.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, L.Ay)(M.A.USER_PROFILE_SIDEBAR),
        h = (0, rS.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rT.A)(u, o, rz.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rN.A)(m);
    function g() {
        (0, rm.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(L.f5, {
        value: u,
        children: (0, l.jsx)(rS.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rk.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: rq.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(rX.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tF.d_, {
                        className: i ? rX.BE : void 0,
                        children: [
                            (0, l.jsx)(rU.A, { children: (0, l.jsx)(rG.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: rX.wx,
                                children: [
                                    (0, l.jsx)(rP.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: rq.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rR.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: rK.T[rq.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r$.rf,
                                children: [
                                    (0, l.jsx)(rw.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rf.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rO.A, {
                                            displayProfile: o,
                                            themeType: rq.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(rF.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rD.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rL.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rk.A.Overlay, {
                                              className: r$.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rD.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rM.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rD.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rL.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(rW, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rv.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var rJ = t(331322),
    rZ = t(249790),
    r0 = t(254828),
    r1 = t(783123),
    r2 = t(966430);
function r3(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, l2.Ay)(n.id),
        o = (0, rb.Ay)(),
        d = (0, m.bG)([lL.A], () => lL.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, L.Ay)(d ? M.A.BLOCKED_PROFILE_PANEL : M.A.IGNORED_PROFILE_PANEL),
        u = (0, rS.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rT.A)(c, a, rz.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(L.f5, {
        value: c,
        children: (0, l.jsx)(rS.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rk.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: rq.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tF.d_, {
                    children: (0, l.jsxs)("div", {
                        className: r2.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: r2.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: r2.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: r2.N1,
                                        children: [
                                            (0, l.jsx)(rZ.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rf.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(rJ.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(r1.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, l1.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(r0.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, l1.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
var r5 = t(202091),
    r9 = t(717421),
    r7 = t(31956),
    r6 = t(673843),
    r8 = t(594832),
    r4 = t(321191),
    ae = t(679492),
    an = t(439053),
    at = t(312381),
    ai = t(657538),
    al = t(984545),
    as = t(193738),
    ar = t(211031),
    aa = t(394816),
    ao = t(695366),
    ad = t(922590),
    ac = t(821269),
    au = t(93246),
    ah = t(351906),
    am = t(383199),
    aA = t(559506),
    ap = t(361311),
    ag = t(931481),
    ax = t(791556),
    af = t(501193),
    aI = t(383448),
    aj = t(646986),
    aC = t(243166),
    aE = t(812993),
    ay = t(123292),
    ab = t(840411);
let a_ = (0, rI.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var av = t(666810),
    aN = t(394300),
    aT = t(575593),
    aS = t(44120),
    aR = t(75678),
    aO = t(317560),
    aP = t(99161),
    aM = t(827258),
    aL = t(661492),
    aD = t(146423),
    ak = t(662349),
    aw = t(479026),
    aG = t(636374),
    aU = t(699976),
    aF = t(202541),
    aH = t(733484),
    aV = t(880465);
function aB(e) {
    let n,
        {
            sku: t,
            wishlistOwner: i,
            wishlistId: r,
            style: o,
            skuPreviewStyle: d,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: m,
            renderChildren: A,
            isNew: p,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, rS.NJ)(),
        x = rC("DMSidePanelWishlistItemCard") ? aU.y.SIZE_78 : aU.y.SIZE_90,
        f = aU.Z[x],
        I = s.useCallback(() => {
            (g({
                action: rz.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        j = s.useCallback(() => {
            (g({
                action: rz.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                m());
        }, [m, t.id, r, t.productLine, g]),
        {
            onBodyClick: C,
            onOverlayClick: E,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, aG.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: j }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: aH.kL,
        children: (0, l.jsxs)(aD.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(aH.Nr, o),
            skuPreviewStyle: a()(aH.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: C,
            "aria-label":
                ((n = b ? (0, aL.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, aL.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(aM.A, { className: aH.Pf }),
                y &&
                    (0, l.jsx)(ak.A, {
                        spec: f,
                        onClick: E,
                        isHoveringOrFocusing: N,
                        label: _,
                        icon: _.length < 6 ? v : void 0,
                    }),
                A?.(y && N),
            ],
        }),
    });
}
function aY(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, L.Ay)(
            ...(i ?? []),
            M.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, aP.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: aF.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, aO.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: aF.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(aB, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function aW(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, aS.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: aF.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, aw.e)({ sku: n, giftRecipient: t, giftingOrigin: aF.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(aH.ML, {
                    [aH.M]: n?.tenantMetadata?.collectibles?.type === aT.R.AVATAR_DECORATION,
                    [aH.Hm]: n?.tenantMetadata?.collectibles?.type === aT.R.PROFILE_EFFECT,
                    [aH.hH]: n?.tenantMetadata?.collectibles?.type === aT.R.PROFILE_FRAME,
                    [aH.qF]: n?.tenantMetadata?.collectibles?.type === aT.R.NAMEPLATE,
                    [aH.l2]: n?.tenantMetadata?.collectibles?.type === aT.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(aB, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function az(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, aR.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: aF.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === r8.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(aB, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(aV.MO, { [aH.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(aH.fi, { [aH.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(aH.p7, { [aH.SW]: h.length >= 10, [aH.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function aq(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(aY, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(aW, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(az, { sku: n, ...t });
        default:
            return null;
    }
}
var aK = t(158045),
    aX = t(249203),
    a$ = t(419731),
    aQ = t(695904),
    aJ = t(116331),
    aZ = t(713348),
    a0 = t(535089),
    a1 = t(815637);
function a2(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, L.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rS.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, aJ.A)(t),
        g = (0, m.bG)([aX.A], () => aX.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: rz.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => n ?? [], [n]),
        I = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        j = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: r8.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => aK.Ay.isPremiumSku(e.skuId));
                if (!aK.Ay.isPremiumAtLeast(t.premiumType, aF.PremiumTypes.TIER_2) && !n) {
                    let n = aN.A.fromSKU((0, ab.rI)());
                    null != n && e.push({ item: n, source: r8.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, t.premiumType]),
        C = (0, s.useMemo)(
            () =>
                new Set(
                    j.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [j],
        ),
        E = (0, a0.A)({ wishlistId: r ?? null, onAction: I, productLines: C }),
        y = (0, s.useMemo)(
            () =>
                j
                    .map((e, n) => {
                        let { item: i, source: s } = e;
                        return null == i.sku
                            ? null
                            : (0, l.jsx)(
                                  aq,
                                  {
                                      sku: i.sku,
                                      index: n,
                                      wishlistOwner: t,
                                      wishlistId: r,
                                      analyticsLocations: o,
                                      onViewWishlist: x,
                                      source: s,
                                      isNew: h && (0, a$.f3)(i.addedAt, g),
                                  },
                                  i.skuId,
                              );
                    })
                    .filter(so.Vq),
            [o, x, t, j, r, h, g],
        ),
        b = h && y.length > 0,
        _ = (0, s.useRef)(!1);
    return ((0, s.useEffect)(() => {
        b && !_.current && ((_.current = !0), d({ action: "VIEW_NEW_CONTENT_SIDEBAR" }));
    }, [b, d]),
    0 === y.length)
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(rk.A.Overlay, {
                  ref: E,
                  className: a1.kL,
                  children: [
                      p && (0, l.jsx)(aQ.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: a1.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: a1.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(aE.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: n1.A.colors.BADGE_BACKGROUND_BRAND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(ay.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rA.F, { children: (0, l.jsx)("div", { className: a1.vY, children: y }) }),
                  ],
              }),
          });
}
function a3(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = a_.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, aZ.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(av.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(a2, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
    });
}
function a5(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lL.A], () => ({
            relationshipType: lL.A.getRelationshipType(n.id),
            originApplicationId: lL.A.getOriginApplicationId(n.id),
        })),
        h = (0, ad.fi)(n.id),
        A = (0, ac.q)({ userId: n.id }),
        p = (0, m.bG)([ah.A], () => ah.A.hidePersonalInformation),
        g = (0, m.bG)([r4.A], () => r4.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([r4.A], () => ({ defaultWishlistId: r4.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: j } = (0, r8.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, r6.A)(I);
    let C = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: r$.rf,
        children: [
            (0, l.jsx)(aA.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: r$.pq,
                children: [
                    (0, l.jsx)(rw.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rf.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(aC.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rO.A, {
                            displayProfile: i,
                            themeType: rq.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(ax.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rk.A.Overlay, {
                    children: (0, l.jsx)(ag.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rk.A.Overlay,
                    {
                        children: (0, l.jsx)(ag.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aI.A, { user: n }),
            i?.private &&
                (0, l.jsx)(rk.A.Overlay, { children: (0, l.jsx)(af.A, { username: rf.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(rk.A.Overlay, {
                    className: r$.Lw,
                    children: (0, l.jsx)(rD.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: ao.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(au.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(rF.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rD.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rL.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: r$.kR,
                children: [
                    o && x && (0, l.jsx)(ai.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aj.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(am.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rD.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(ap.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rk.A.Overlay, {
                              className: r$.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rD.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rM.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(am.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rD.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(ap.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rD.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rL.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(a3, {
                            profileOwner: n,
                            unownedWishlistItems: C,
                            wishlistId: f,
                            isLoading: j,
                            onClick: () => {
                                d?.({ tabSection: rz.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var a9 = t(114212),
    a7 = t(913453),
    a6 = t(229187),
    a8 = t(21241),
    a4 = t(503062),
    oe = t(51943),
    on = t(847374),
    ot = t(320448),
    oi = t(723200);
function ol(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rS.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? on.a : ot._;
    return (0, l.jsxs)("section", {
        className: oi.uW,
        children: [
            (0, l.jsxs)(nX.D, {
                className: a()(oi.wx, oi.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    (h(!u), u || (d({ action: "PRESS_SECTION", section: n }), o?.()));
                },
                children: [
                    (0, l.jsxs)(R.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [t, " \u2014 ", i.length],
                    }),
                    (0, l.jsx)(m, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(oi.p_, r), children: i }),
        ],
    });
}
var os = t(341278);
function or(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(),
        { context: s } = (0, rS.NJ)(),
        r = (0, t2.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, a7.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rk.A.Overlay, {
              className: os.Lw,
              children: [
                  u &&
                      (0, l.jsx)(ol, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: os.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  oe.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, t_.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(a8.A, { className: os.yF }),
                  c &&
                      (0, l.jsx)(ol, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: os.p_,
                          onExpand: () => (0, a6.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: os.nC,
                                                children: [
                                                    (0, l.jsx)(a9.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(a9.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            a4.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, rm.openUserProfileModal)({
                                                        ...s,
                                                        userId: r.id,
                                                        sourceAnalyticsLocations: i,
                                                    });
                                                },
                                            },
                                            n,
                                        );
                                    }),
                      }),
              ],
          })
        : null;
}
function oa(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, l2.Ay)(n.id),
        c = (0, rb.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, L.Ay)(M.A.USER_PROFILE_SIDEBAR),
        p = (0, rS.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rT.A)(A, d, rz.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rN.A)(g),
        I = (0, ae.fC)(),
        j = (0, rx.A)(d?.profileFrame?.skuId);
    (0, r7.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let C = (0, r9.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function E(e) {
        (0, rm.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([r4.A], () => ({ defaultWishlistId: r4.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, r8.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, r6.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(L.f5, {
        value: A,
        children: (0, l.jsx)(rS.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(ae.Hl, {
                value: I,
                children: (0, l.jsxs)(rk.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: rq.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(rX.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(at.A, {}),
                        null != I.interactionType && (0, l.jsx)(r5.animated.div, { style: C, className: rX.tB }),
                        (0, l.jsxs)(tF.d_, {
                            className: a()(r && rX.BE, !r && null != j && rX.It),
                            children: [
                                (0, l.jsxs)(rU.A, {
                                    children: [
                                        (0, l.jsx)(as.A, { user: n, themeType: rq.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(al.A, { user: n }) : (0, l.jsx)(ar.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: rX.wx,
                                    children: [
                                        (0, l.jsx)(rP.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: rq.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: rX.vK,
                                        }),
                                        (0, l.jsx)(an.A, { userId: n.id, className: rX.oR }),
                                        (0, l.jsx)(rR.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: rK.T[rq.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : E,
                                        }),
                                        (0, l.jsx)(aa.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: rq.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(a5, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == I.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : E,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: rX.sJ,
                                        children: (0, l.jsx)(ai.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: E,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: rX.vS,
                                        children: (0, l.jsx)(a3, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                E?.({ tabSection: rz.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(or, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(rW, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: j,
                                handleOpenProfile: E,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rv.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != j && (0, l.jsx)(rH.A, { frame: j, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oo = t(901600);
function od(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = l3(),
        [o, d] = (0, rE.A)(t),
        [c, u] = s.useState(!1),
        h = rC("UserProfileSidebarRenderer"),
        A = (0, l2.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rx.A)(p),
        x = (0, m.bG)([rg.A], () => rg.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, ry.A)(i, e) : (0, ry.A)(t, void 0, e);
        }, [i, t, n.id, h]),
        null == i ||
            null == r ||
            !a ||
            (h && !c && A?.isLoaded !== !0) ||
            (h && !c && null != p && p !== g?.skuId && x?.state !== "success" && x?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        I = rf.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oo.H : void 0,
        children: (0, l.jsx)(rA.F, {
            component: (0, l.jsx)(rp.A, {
                children: (0, l.jsx)(rA.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(r3, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(rQ, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oa, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oc = t(522556),
    ou = t(225315),
    oh = t(684407),
    om = t(95701),
    oA = t(919638),
    op = t(763827),
    og = t(812771),
    ox = t(506309),
    of = t(598748),
    oI = t(681154),
    oj = t(975460),
    oC = t(587895),
    oE = t(429913),
    oy = t(201718),
    ob = t(339580),
    o_ = t(633075),
    ov = t(903209),
    oN = t(382483),
    oT = t(385113);
let oS = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function oR(e) {
    let [n, t] = s.useState(new Set()),
        i = s.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []);
    return (0, l.jsx)(oS.Provider, {
        value: {
            markAsVisible: i,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, n) {
                    let t,
                        i,
                        l,
                        r,
                        a,
                        o,
                        d,
                        c,
                        u,
                        h,
                        A,
                        p,
                        g,
                        x,
                        f,
                        I,
                        { appsWithConfigs: j, isLoadingConfigs: C } =
                            ((t = sw.Q_.useSetting()),
                            s.useEffect(() => {
                                (0, oN.Wq)().catch(() => {});
                            }, []),
                            s.useEffect(() => {
                                t && (0, oN.i$)().catch(() => {});
                            }, [t]),
                            (i = (0, m.bG)([oT.A], () => oT.A.getFeaturedFetchState())),
                            (l = (0, m.bG)([oT.A], () => oT.A.getDeveloperFetchState())),
                            (r = (0, m.yK)([oT.A], () => oT.A.getFeaturedApplicationIds())),
                            (a = (0, m.yK)([oT.A], () => oT.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                isLoadingConfigs:
                                    i === oT.e.NOT_FETCHED ||
                                    i === oT.e.FETCHING ||
                                    (t && (l === oT.e.NOT_FETCHED || l === oT.e.FETCHING)),
                            }),
                        {
                            widgetApps: E,
                            userIdsWhoMightHaveWidgetData: y,
                            isFetchingApplications: b,
                        } = ((o = s.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === oI.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => n.has(e.id)) ?? [],
                            [e, n],
                        )),
                        (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                        (c = (0, m.bG)(
                            [oC.A],
                            () =>
                                d.length > 0 &&
                                d.some(
                                    (e) =>
                                        oC.A.isFetchingApplication(e) ||
                                        (null == oC.A.getApplication(e) && !oC.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (u = (0, oE.A)(d)),
                        (h = s.useMemo(
                            () =>
                                Object.fromEntries(
                                    u
                                        .filter(so.Vq)
                                        .map((e) => [e.id, (0, oj.t)(e)])
                                        .filter(so.QE)
                                        .filter((e) => {
                                            let [n, t] = e;
                                            return j.has(t.id);
                                        }),
                                ),
                            [j, u],
                        )),
                        (A = s.useMemo(
                            () => [...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id))],
                            [o, h],
                        )),
                        { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                        { identitiesByUserId: _, isLoadingIdentities: v } =
                            ((p = (0, m.cf)([ob.A], () =>
                                Object.fromEntries(y.map((e) => [e, ob.A.getUserIdentities(e)]).filter(so.QE)),
                            )),
                            (g = (0, m.bG)([ob.A], () =>
                                y.some((e) => ob.A.getFetchState(e) === ob.e.NOT_FETCHED || ob.A.isFetchingUser(e)),
                            )),
                            s.useEffect(() => {
                                y.length > 0 && oy.P.fetchMany(...y.map((e) => [e]));
                            }, [y]),
                            { identitiesByUserId: p, isLoadingIdentities: g }),
                        { profilesByUserId: N, isLoadingProfiles: T } =
                            ((x = (0, m.cf)([r4.A], () =>
                                Object.fromEntries(y.map((e) => [e, r4.A.getUserProfile(e) ?? null]).filter(so.QE)),
                            )),
                            (f = (0, m.yK)([r4.A], () =>
                                y.filter((e) => null == r4.A.getUserProfile(e) && !r4.A.isFetchingProfile(e)),
                            )),
                            (I = (0, m.bG)([r4.A], () => y.some((e) => r4.A.isFetchingProfile(e)))),
                            s.useEffect(() => {
                                for (let e of f) (0, ov.A)(e);
                            }, [f]),
                            { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                        S = (0, m.cf)(
                            [oT.A],
                            () => Object.fromEntries([...j].map((e) => [e, oT.A.getConfig(e)]).filter(so.QE)),
                            [j],
                        ),
                        R = C || b || v || T,
                        O = s.useMemo(() => {
                            if (!R && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== oI.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let n = E[e.extra.application_id] ?? null;
                                    if (null == n) return e;
                                    let t = S[n.id] ?? null;
                                    if (null == t || null == t.surfaces[of.m.ACTIVITY_ACCESSORY]) return e;
                                    let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                    if (i?.profile == null) return e;
                                    let l = N[e.author_id]?.widgets?.some((e) => (0, o_.E)(e, n.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                    };
                                });
                        }, [R, e, E, S, _, N]),
                        [P, M] = s.useState(O);
                    return (
                        s.useEffect(() => {
                            R || M(O);
                        }, [R, O]),
                        P
                    );
                })(e, n),
        },
        children: e.children,
    });
}
var oO = t(900797),
    oP = t(180170),
    oM = t(435738),
    oL = t(38055);
let oD = "content-inventory-feed",
    ok = `${oD}-settings`,
    ow = `${oD}-toggle`;
var oG = t(569709);
let oU = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: a, expandedCount: o } = e,
            d = (0, m.bG)([oM.A], () => oM.A.hidden),
            u = (0, c.omit)((0, E.rm)(ok), ["role", "tabIndex"]),
            h = (0, c.omit)((0, E.rm)(ow), ["role", "tabIndex"]),
            A = s.useCallback((e) => {
                (0, C.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                    return () => (0, l.jsx)(e, { closePopout: C.Z_ });
                });
            }, []),
            p = s.useCallback(() => (d ? (0, oP.Il)() : o > 3 ? r() : (0, eo.tEg)()), [d, o, r]);
        return (0, l.jsxs)(k.A, {
            className: ec.lL,
            children: [
                (0, l.jsx)(rp.A, { children: z.intl.format(z.t.Uaqbke, { title: i, count: o }) }),
                (0, l.jsxs)("div", {
                    className: oG.N1,
                    children: [
                        (0, l.jsx)(nX.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, l.jsxs)("span", { children: [i, " \u2014 ", o] }),
                        }),
                        (0, l.jsx)(oL.A, { ...u }),
                        (0, l.jsx)(nX.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: oG.AN,
                            children: (0, l.jsx)("span", {}),
                        }),
                        o <= 3 && !d
                            ? null
                            : ((n = d
                                  ? (0, l.jsx)(oO.t, { className: oG.wT })
                                  : a
                                    ? (0, l.jsx)(on.a, { className: oG.wT })
                                    : (0, l.jsx)(ot._, { className: oG.wT })),
                              (0, l.jsx)(nX.D, {
                                  ...h,
                                  onClick: p,
                                  tag: "span",
                                  "aria-label": z.intl.string(a && !d ? z.t.iTcuma : z.t.dcl9MQ),
                                  "aria-expanded": !d && a,
                                  className: oG.wT,
                                  children: n,
                              })),
                    ],
                }),
            ],
        });
    }),
    oF = function () {
        return null;
    };
var oH = t(963307),
    oV = t(424994);
let oB = et.default.track;
function oY(e, n) {
    oB(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: oV.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var oW = t(468581),
    oz = t(808666),
    oq = t(414499),
    oK = t(323384),
    oX = t(55730),
    o$ = t(765379),
    oQ = t(146779),
    oJ = t(284525),
    oZ = t(482030),
    o0 = t(627363),
    o1 = t(583846),
    o2 = t(506326);
t(333007);
var o3 = t(342952),
    o5 = t(315710),
    o9 = t(276293),
    o7 = t(935063),
    o6 = t(778712),
    o8 = t(696986),
    o4 = t(97808),
    de = t(738188),
    dn = t(983851),
    dt = t(31300),
    di = t(308528),
    dl = t(401843),
    ds = t(375499),
    dr = t(429433),
    da = t(324688);
let dd = (0, om.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dc(e) {
    let {
            placeholder: n,
            onEnter: t,
            setEditorRef: i,
            showEmojiButton: r = !1,
            renderAttachButton: o,
            autoFocus: d = !0,
            onFocus: c,
            channel: u,
            className: h,
        } = e,
        [m, A] = s.useState(""),
        [p, g] = s.useState((0, sS.x7)("")),
        x = nz.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sR.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(da.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dd,
        onChange: (e, n, t) => {
            (A(n), g(t));
        },
        type: r ? { ...x, emojis: { button: !0 } } : x,
        textValue: m,
        richValue: p,
        onSubmit: (e) => {
            let { value: n } = e;
            return n.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (t(n), A(""), g((0, sS.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: i,
        focused: d,
        onFocus: c,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == f.current) return "top";
            let e = f.current.getBoundingClientRect(),
                n = window.innerHeight;
            return e.top < n / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
function du(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rb.Ay)(),
        [a, o] = s.useState(!1),
        d = s.useRef(null),
        c = s.useRef(null);
    return (
        (n = () => o(!1)),
        s.useEffect(() => {
            function e(e) {
                "Escape" === e.key && n();
            }
            function t(e) {
                null != e.target && (d?.current?.contains(e?.target) || n());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (document.removeEventListener("keydown", e), document.removeEventListener("mousedown", t));
                }
            );
        }, [n, d]),
        (0, l.jsx)(ni.Y, {
            targetElementRef: c,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(f.N, {
                    theme: r,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: d,
                            children: (0, l.jsx)(dr.C, {
                                messageId: eo.dJq,
                                channel: dd,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: n, willClose: i, isBurst: l } = e;
                                    null != n && (t({ emoji: n, willClose: i, isBurst: l }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(eN.m, {
                    text: z.intl.string(z.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: c,
                        className: da.mJ,
                        children: (0, l.jsx)(ds.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                (i?.(), o(!0));
                            },
                        }),
                    }),
                }),
        })
    );
}
var dh = t(402216),
    dm = t(822123),
    dA = t(409626),
    dp = t(692969),
    dg = t(711589),
    dx = t(607407),
    df = t(832163),
    dI = t(533562),
    dj = t(805901),
    dC = t(565645);
t(267889);
var dE = t(7584);
(t(850992), t(690521));
var dy = t(806931),
    db = t(307731),
    d_ = t(866780);
function dv(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rN.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(nX.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dj.c, {
                config: ds.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(r5.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dC.A, {
                            className: a()(d_.Zg, r, { [d_.c4]: t }),
                            emojiId: n.id,
                            emojiName: n?.surrogates,
                            animated: n.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
(db.EmojiIntention.CHAT,
    [
        dE.Ay.getByName("thumbsup"),
        dE.Ay.getByName("eyes"),
        dE.Ay.getByName("laughing"),
        dE.Ay.getByName("watermelon"),
        dE.Ay.getByName("fork_and_knife"),
        dE.Ay.getByName("yum"),
    ].filter(so.Vq));
var dN = t(636585),
    dT = t(543465),
    dS = t(607567),
    dR = t(774926),
    dO = t(20805),
    dP = t(22869),
    dM = t(623671),
    dL = t(428249),
    dD = t(327098),
    dk = t(576757),
    dw = t(202195),
    dG = t(140651),
    dU = t(131607),
    dF = t(345394);
let dH = function (e) {
    let { children: n } = e,
        [t, i] = (0, dU.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lw.i.USER_DISMISS);
    }, [i]);
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lj.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: dF.A },
                  }),
              ],
          });
};
var dV = t(315246),
    dB = t(866323),
    dY = t(339190),
    dW = t(655214);
function dz() {
    return (0, l.jsxs)("div", {
        className: dW.oR,
        children: [
            (0, l.jsx)(g.y, { type: g.t.SPINNING_CIRCLE_SIMPLE, className: dY.S }),
            (0, l.jsx)(_.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: z.intl.string(z.t["5z/hlE"]),
            }),
        ],
    });
}
let dq = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([P.Ay], () => P.Ay.useReducedMotion),
        r = (0, dB.p)(
            n,
            {
                from: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, l.jsx)(l.Fragment, {
        children: r(
            (e, n) =>
                n &&
                (0, l.jsx)(r5.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(nJ.y, {
                              message: z.intl.string(z.t.fjcCk5),
                              type: nZ.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, l.jsx)(nJ.y, {
                              message: "",
                              type: nZ.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, l.jsx)(dz, {}) },
                          }),
                }),
        ),
    });
};
var dK = t(381941),
    dX = t(231188);
let d$ = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("419121"),
                t.e("162775"),
                t.e("60882"),
                t.e("489020"),
                t.e("919789"),
                t.e("669130"),
                t.e("70866"),
                t.e("802890"),
                t.e("377109"),
                t.e("74886"),
                t.e("713273"),
                t.e("656997"),
                t.e("412117"),
                t.e("1955"),
                t.e("341161"),
                t.e("410526"),
                t.e("202985"),
                t.e("603619"),
                t.e("661630"),
                t.e("470126"),
                t.e("128804"),
                t.e("71151"),
                t.e("227853"),
                t.e("286615"),
                t.e("311541"),
                t.e("472847"),
                t.e("870088"),
                t.e("674736"),
                t.e("925420"),
                t.e("586662"),
                t.e("758053"),
                t.e("247471"),
                t.e("889002"),
                t.e("709976"),
                t.e("750955"),
                t.e("953343"),
                t.e("763945"),
                t.e("261204"),
                t.e("686731"),
                t.e("807432"),
                t.e("873532"),
                t.e("279774"),
                t.e("590088"),
                t.e("125298"),
                t.e("295570"),
                t.e("728824"),
                t.e("71169"),
                t.e("906470"),
                t.e("736663"),
                t.e("82937"),
                t.e("987221"),
                t.e("157064"),
                t.e("156957"),
                t.e("918786"),
                t.e("701335"),
                t.e("257935"),
                t.e("724086"),
                t.e("358937"),
                t.e("448738"),
                t.e("680431"),
                t.e("338332"),
                t.e("894292"),
                t.e("153302"),
                t.e("88683"),
                t.e("363874"),
                t.e("923981"),
                t.e("750370"),
                t.e("612162"),
                t.e("466592"),
                t.e("73946"),
                t.e("282050"),
                t.e("436101"),
                t.e("976888"),
                t.e("387970"),
                t.e("847445"),
                t.e("547510"),
                t.e("966366"),
                t.e("983513"),
                t.e("76928"),
                t.e("355502"),
                t.e("528311"),
                t.e("156422"),
                t.e("348567"),
                t.e("452075"),
                t.e("900277"),
                t.e("905581"),
                t.e("76428"),
                t.e("77473"),
                t.e("863232"),
                t.e("25279"),
                t.e("364827"),
                t.e("517888"),
                t.e("811133"),
                t.e("959880"),
                t.e("174016"),
                t.e("907167"),
                t.e("910471"),
                t.e("11301"),
                t.e("952372"),
                t.e("784569"),
                t.e("861060"),
                t.e("77333"),
                t.e("56366"),
                t.e("639161"),
                t.e("477175"),
                t.e("960235"),
                t.e("402368"),
                t.e("190779"),
                t.e("910486"),
                t.e("221856"),
                t.e("678157"),
                t.e("103053"),
                t.e("325675"),
                t.e("996481"),
                t.e("331988"),
                t.e("40291"),
                t.e("733115"),
                t.e("397270"),
                t.e("373122"),
                t.e("217951"),
                t.e("793716"),
                t.e("293159"),
                t.e("186212"),
                t.e("755936"),
                t.e("209338"),
                t.e("749894"),
                t.e("927875"),
                t.e("833703"),
                t.e("55252"),
                t.e("692990"),
                t.e("362931"),
                t.e("745959"),
                t.e("858529"),
                t.e("481987"),
                t.e("595653"),
                t.e("958038"),
                t.e("532039"),
                t.e("719466"),
                t.e("99799"),
                t.e("576909"),
                t.e("27355"),
                t.e("407170"),
                t.e("756055"),
                t.e("255580"),
                t.e("608557"),
                t.e("631908"),
                t.e("114308"),
                t.e("895785"),
                t.e("73536"),
                t.e("147864"),
                t.e("241176"),
                t.e("93461"),
                t.e("437961"),
                t.e("604172"),
                t.e("949013"),
                t.e("820667"),
            ]).then(t.bind(t, 316725)),
        webpackId: 316725,
    }),
    dQ = s.createContext(void 0);
function dJ(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, o5.tj)(t),
        (0, l.jsx)(dQ.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: dX.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function dZ(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, dG.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(dX.ZK, e, i), style: s, children: n }),
        })
    );
}
function d0(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: dX.$m, children: n });
}
function d1(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [j, C] = s.useState(!1),
        [E, y] = s.useState(null),
        b = (0, m.bG)(
            [nI.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && nI.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: O } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, dw.A)(t),
                o = (0, tK.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iF.A)(n?.id),
                c = (0, m.bG)([n_.A], () => (null != a ? n_.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dS.Ay], () => (null != a ? dS.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lD.A], () => lD.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && dT.Ay.isChannelMuted(null, n),
                            i = lL.A.isBlockedOrIgnored(e.user.id);
                        if (t || i) return !0;
                    }
                    return !1;
                }, [u]);
            if (null == a || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != r;
            function g(e) {
                let { children: n, text: t, hasRestrictedOrMutedVCParticipant: i } = e,
                    s = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(de.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: dX.vb,
                                  }),
                                  z.intl.string(z.t.d6DpXI),
                              ],
                          })
                        : t;
                return (0, l.jsx)(
                    eN.m,
                    {
                        "aria-label": i ? z.intl.string(z.t.d6DpXI) : (t ?? !1),
                        __unsupportedReactNodeAsText: s,
                        shouldShow: !0,
                        children: n,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: dX.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(nX.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, ia.iN)(a.id), i?.(a));
                                        },
                                        className: dX.I3,
                                        children: [
                                            (0, l.jsx)(tE.Ay, {
                                                guild: c,
                                                size: tE.Ay.Sizes.SMOL,
                                                className: dX.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(ot._, {
                                                size: "xxs",
                                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dn.H, { size: "xs", color: n1.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: dX.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dN.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(o4.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: o6._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: dX.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(o8.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lQ.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dt.k : dn.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: P } = (0, dD.A)(h),
        M =
            ((n = P),
            (t = (0, m.bG)([n_.A], () => n_.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tK.Ay)(i)),
            null != n && null != t && null != i && om.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: dX.kP,
                              children: [
                                  (0, l.jsxs)(nX.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, ia.iN)(i.id),
                                      className: dX.I3,
                                      children: [
                                          (0, l.jsx)(tE.Ay, {
                                              guild: t,
                                              size: tE.Ay.Sizes.SMOL,
                                              className: dX.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(ot._, {
                                              size: "xxs",
                                              color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(o9.N, { size: "xs", color: n1.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: dX.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dN.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(o4.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: o6._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: dX.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(o8.h, { size: 16 }),
                      ],
                  })
                : null),
        L = null != O && 0 === p.length ? [O] : p,
        D = L.length > 0,
        k = L.length >= 2,
        [w, G] = s.useState(!D),
        U = rf.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tK.Ay)(o, !0),
        H =
            null != o && j
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${U}` }),
        V = j ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function B(e) {
        let n,
            { emoji: t } = e;
        if (null != t) {
            if (
                (et.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: oV.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, tz.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                j)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await di.A.getOrEnsurePrivateChannel(c.id);
                n = ew.A.getChannel(e) ?? null;
            }
            return (
                d()(null != n, "Send channel must be defined"),
                W({
                    reply: `:${t.name}:`,
                    sendToChannel: n,
                    onComplete: (e, n) => {
                        (S(!0),
                            setTimeout(() => {
                                (N(!1), u(e, n));
                            }, 600));
                    },
                    interactionType: oV.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, tz.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), j))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await di.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? oV.PA.DM_REACTION_MESSAGE_SENT : oV.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (E?.focus(),
            await (0, dL.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: dK.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, t));
    }
    let q = g ?? R ?? M;
    function K() {
        (C((e) => !e), w && E?.focus());
    }
    function X(e) {
        (G(e), e && E?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(dq, { sent: T, shown: v, className: dX.Jt }),
            q ??
                (0, l.jsx)(dH, {
                    children: (0, l.jsxs)("div", {
                        className: dX.T7,
                        children: [
                            (0, l.jsx)(d2, { channel: o, onClickSuggestion: B }),
                            (0, l.jsx)(du, { onSelectEmoji: B }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? dX.P2 : dX.VE,
                children: [
                    (0, l.jsx)(dc, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: j ? o : void 0,
                        showEmojiButton: null != q,
                        className: dX.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: V,
                                      children: (0, l.jsx)(nX.D, {
                                          className: dX.wD,
                                          onClick: K,
                                          children: j
                                              ? (0, l.jsx)(o9.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(o7.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(nX.D, {
                            onClick: () => X(!1),
                            className: dX.i3,
                            children: (0, l.jsx)(t1.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: n1.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: dX.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                x.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => X(!0),
                                    size: "md",
                                    text: z.intl.string(z.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        L,
                    ],
                }),
        ],
    });
}
let d2 = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!P.Ay.keyboardModeEnabled && !i,
        o = (0, dm.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tv._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: n, url: s } = e;
            return null != s
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(eN.m, {
                              asContainer: !0,
                              text: z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              position: "top",
                              "aria-label": z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(dv, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: dX.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function d3(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, dk.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, dw.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: dX.MH,
        children: [
            (0, l.jsxs)("div", {
                className: dX.WP,
                children: [
                    (0, l.jsx)(o3.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: o6._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(o8.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(dX.Xn, dX.zA),
                        children: z.intl.format(t, {
                            user0: rf.Ay.getName(o, n?.id, g[0]),
                            user1: rf.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(dX.Mj, dX.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    dP.A,
                                    {
                                        textClassName: a()(dX.Mj, dX.nk),
                                        text: e,
                                        user: g[0],
                                        channel: n,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    t,
                                ),
                            name1Hook: (e, t) =>
                                (0, l.jsx)(
                                    dP.A,
                                    {
                                        textClassName: a()(dX.Mj, dX.nk),
                                        text: e,
                                        user: g[1],
                                        channel: n,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    t,
                                ),
                        }),
                    }),
                ],
            }),
            null != p && (0, l.jsx)(dh.Ay, { size: dh.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(dV.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function d5(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(nX.D, { className: dX.Zw, onClick: t, children: n });
}
function d9(e) {
    let {
            title: n,
            subtitle: t,
            badges: i,
            children: r,
            onClickThumbnail: o,
            onClickTitle: d,
            onClickSubtitle: c,
            headerIcons: u,
            disableGameProfileLinks: h = !1,
            showCoverImage: A = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: g,
            ...x
        } = e,
        { entry: f } = x,
        I = (0, dO.zD)(f),
        j = I ? f.extra?.application_id : void 0,
        C = (0, dI.W)();
    null != C && (j = C);
    let E = (0, dp.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : j,
                source: dA.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(oV.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dR.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([df.A], () => df.A.getDetectableIdsToApplicationIds()),
        N = I ? E : void 0,
        T = s.useContext(dQ);
    return (0, l.jsxs)("div", {
        className: dX.au,
        children: [
            (0, l.jsx)(d3, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(dZ, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: dX.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: dX.Fb,
                                children: (0, l.jsx)(dM.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dM.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: dX.iC,
                                children: [
                                    (0, l.jsx)(d5, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(dX.$2, { [dX.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(d5, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dX.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(o8.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: dX.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != j && null != v[j]
                ? (0, l.jsx)(d$, {
                      className: dX.zu,
                      applicationId: j,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aU.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function d7(e) {
    let {
            title: n,
            subtitle: t,
            badges: i,
            children: r,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: d,
            onClickSubtitle: c,
            onUserPopoutClosed: u,
            trackRankingItemInteraction: h,
            ...A
        } = e,
        { actionString: p, canWatch: g } = (0, dg.K)(a),
        { entry: x } = A,
        f = (0, dO.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        j = (0, dI.W)();
    null != j && (I = j);
    let C = (0, dp.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: dA.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(oV.PA.OPENED_GAME_PROFILE) },
        ),
        E = f ? C : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, dD.A)(x),
        { largeImage: N, smallImage: T } = (0, dR.D8)(y, b ?? v),
        { largeImage: S } = (0, dR.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        O = (0, m.bG)([df.A], () => df.A.getDetectableIdsToApplicationIds()),
        P = s.useContext(dQ);
    return (0, l.jsxs)("div", {
        className: dX.au,
        children: [
            (0, l.jsx)(d3, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(dZ, {
                backgroundImgSrc: S?.src,
                className: dX.uR,
                children: [
                    (0, l.jsx)(d5, {
                        onClick: g
                            ? () => {
                                  (lb.default.selectVoiceChannel(a.channelId), (0, dl.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: dX.nh,
                            children: [
                                (0, l.jsx)(dx.A, { className: dX.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: dX.NE,
                                        children: (0, l.jsx)(_.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: p,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: dX.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: dX.Fb,
                                    children: (0, l.jsx)(dM.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? E,
                                        size: dM.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: dX.gv,
                                children: [
                                    (0, l.jsx)(d5, {
                                        onClick: d ?? E,
                                        children: (0, l.jsx)(R.D, {
                                            id: P,
                                            variant: "heading-md/semibold",
                                            className: dX.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(d5, {
                                              onClick: c ?? E,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dX.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(o8.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != O[I]
                ? (0, l.jsx)(d$, {
                      className: dX.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aU.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var d6 = t(299846);
let d8 = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, d6.u)(t);
    function u() {
        (0, oZ.hg)(t.extra.application_id);
    }
    let { data: h } = (0, o0.YY)(t.extra.application_id),
        m = (0, oQ.Ay)({ application: h, analyticsLocations: [M.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(o2.iT, { location: o2.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(d9, {
            channel: n,
            userDescription: (0, o1.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, oX.A)(d, eo.jUm.JOIN) || (0, o$.A)(d),
        f = g
            ? (0, l.jsx)(oJ.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: oz.I,
              })
            : null,
        I =
            null == m
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: m,
                      text: z.intl.string(z.t["jaYS/h"]),
                      icon: oq.h,
                  }),
        j =
            null != I || r
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: oK.k,
                  }),
        C = [I, g && !r ? f : j].filter(so.Vq);
    return (0, l.jsxs)(dJ, {
        children: [
            p,
            (0, l.jsx)(d0, {
                children: (0, l.jsx)(d1, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: n,
                    entry: t,
                    buttons: C,
                }),
            }),
        ],
    });
};
var d4 = t(322789),
    ce = t(808380),
    cn = t(687966),
    ct = t(960076),
    ci = t(544441),
    cl = t(562708),
    cs = t(139286);
function cr(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(t),
        s = (0, oQ.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cs.A)({
            name: cl.ImpressionNames.CLOUD_PLAY_CTA,
            type: cl.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: oq.h,
                text: z.intl.string(z.t["jaYS/h"]),
                onClick: function () {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var ca = t(601007),
    co = t(648246),
    cd = t(308335),
    cc = t(790381),
    cu = t(266080),
    ch = t(968309),
    cm = t(30370);
function cA(e) {
    let n = (0, m.bG)([cm.A], () => cm.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, ch.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cp = t(18282);
let cg = [...d4.n, o2.Yq],
    cx = {
        [ce.Y.DESKTOP]: null,
        [ce.Y.LINUX]: null,
        [ce.Y.MACOS]: null,
        [ce.Y.NINTENDO]: null,
        [ce.Y.IOS]: null,
        [ce.Y.ANDROID]: null,
        [ce.Y.XBOX]: cu.A,
        [ce.Y.PLAYSTATION]: cc.A,
    },
    cf = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, d6.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, dw.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? cx[g] : null,
            I = cA(g === ce.Y.XBOX ? eo.fg2.XBOX : g === ce.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: j } = (0, o0.YY)(x),
            C = (0, ci.A)(x),
            { analyticsLocations: E } = (0, L.Ay)(M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, oQ.JC)(j),
            b = (0, cd.o)(h?.application_id ?? m?.applicationId ?? j?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(o2.mG, {
                location: null == A ? o2.N5.POPOUT : o2.N5.STREAMING_POPOUT,
                children: cg.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(d9, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cp.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, o1.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(ca.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: E,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(d7, {
                          channel: n,
                          title: t.extra.game_name,
                          subtitle: c,
                          badges: _,
                          userDescription: z.t["6oWFUN"],
                          entry: t,
                          stream: p,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(ca.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: E,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && y
                    ? (0, l.jsx)(
                          cr,
                          { application: j, analyticsLocation: M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, oX.A)(h, eo.jUm.JOIN) || (0, o$.A)(h))
                    ? (0, l.jsx)(
                          oJ.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cn.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, ct.A)(h)
                    ? (0, l.jsx)(co.A, { activity: h, size: "md", variant: "primary", icon: n2.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(so.Vq);
        return (0, l.jsxs)(dJ, {
            children: [
                v,
                (0, l.jsx)(d0, {
                    children: (0, l.jsx)(d1, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: d,
                        channel: n,
                        entry: t,
                        buttons: T,
                    }),
                }),
            ],
        });
    },
    cI = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cj(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, o0.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, L.Ay)(M.A.CLOUD_PLAY_POPOVER),
        o = (0, oQ.Ay)({ application: r, analyticsLocations: a }),
        d = (0, tz.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cI(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, dU.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lw.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, j] = s.useState(!1);
    return (
        f && !I && j(!0),
        (0, cs.A)(
            {
                name: cl.ImpressionNames.CLOUD_PLAY_CTA,
                type: cl.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lj.A, {
            title: z.intl.string(z.t["+WNDtV"]),
            body: z.intl.string(z.t["5QKxGI"]),
            targetElementRef: i,
            shouldShow: f,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/912562ba9ec7f9f728ce5b336c9bed5f5195dcab1451d12b0e592b1a7389200c.svg",
            },
            actions: [
                {
                    icon: oq.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lw.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cC = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cj, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cE = t(363670),
    cy = t(205327),
    cb = t(52133),
    c_ = t(835723),
    cv = t(172710),
    cN = t(655116),
    cT = t(763758),
    cS = t(286617),
    cR = t(533207),
    cO = t(280450),
    cP = t(121090),
    cM = t(693879),
    cL = t(809854),
    cD = t(272984),
    ck = t(170699);
function cw(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, cL.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, o1.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: ck.lu,
              children: [
                  (0, l.jsx)(cM.z, { entry: t }),
                  (0, l.jsx)("div", { className: ck.Lt, children: (0, l.jsx)("div", { className: ck.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: ck.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function cG(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cE.u7)(r),
        g = cA(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cN.A, cO.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cS.A)(cN.A, cO.default, p, c) : void 0),
            [c, p],
            cb.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        j = [];
    u.media.provider === cy.X.SPOTIFY &&
        ((t = () => {
            (0, cv.Mp)(c);
        }),
        (i = () => {
            (0, cv.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cv.Mp)(c);
        }),
        (I = (0, l.jsx)(cT.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: dX.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cv.mN)(c, p.id, e);
            },
        })),
        f?.syncDisabled === !1 &&
            j.push(
                (0, l.jsx)(
                    x.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: c_.J,
                        onClick: function () {
                            null != f && ((0, cR.A)(f, cD.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let C = (0, l.jsx)(d9, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cy.X.SPOTIFY
                ? (0, l.jsx)(cp.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: cP.A })
                : null,
        userDescription: (0, o1.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(cw, { activity: c }),
    });
    return (0, l.jsxs)(dJ, {
        children: [
            C,
            (0, l.jsx)(d0, {
                children: (0, l.jsx)(d1, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: j,
                }),
            }),
        ],
    });
}
var cU = t(903134),
    cF = t(56121),
    cH = t(263577),
    cV = t(868065),
    cB = t(804779);
let cY = [o2.Y8],
    cW = [cF.j.WEEK],
    cz = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, dR.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, o1.TQ)(n);
        return null != r && (0, so.S1)(r, cW)
            ? (0, l.jsxs)(cV.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(cV.UA, {
                          children: [
                              (0, l.jsx)(cV.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(cV.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(o2.mG, {
                                  location: o2.N5.CARD,
                                  children: cY.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(cH.V, { src: s?.src, size: 48, className: cB.xn }),
                  ],
              })
            : null;
    });
var cq = t(210528);
let cK = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, o1.TQ)(t),
        u = cA(eo.fg2.SPOTIFY);
    if (null == d || !(0, so.S1)(c, cW)) return null;
    function h() {
        let e = cD.M0.ALBUM,
            n = cq.A.isProtocolRegistered()
                ? cD.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : cD.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(dJ, {
        children: [
            (0, l.jsx)(d9, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cD.M0.ARTIST,
                        n = cq.A.isProtocolRegistered()
                            ? cD.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : cD.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === cy.X.SPOTIFY
                        ? (0, l.jsx)(cp.A, { onClick: u, Icon: cP.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(o2.mG, {
                    location: o2.N5.POPOUT,
                    children: cY.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(d0, {
                children: (0, l.jsx)(d1, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var cX = t(977001);
let c$ = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, d6.u)(t),
        c = (0, o1.ty)(t),
        u = (0, o1.TQ)(t);
    if (null == a || null == c || null == u || !(0, cX._E)(u)) return null;
    let h = null != t.extra.platform ? cx[t.extra.platform] : null;
    return (0, l.jsxs)(dJ, {
        children: [
            (0, l.jsx)(d9, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cp.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(o2.mG, {
                    location: o2.N5.POPOUT,
                    children: cX.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(d0, {
                children: (0, l.jsx)(d1, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var cQ = t(514243),
    cJ = t(347306),
    cZ = t(123917),
    c0 = t(998218);
let c1 = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cA(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = c0.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, cZ.h)({ href: c0.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(dJ, {
              children: [
                  (0, l.jsx)(d9, {
                      channel: n,
                      entry: t,
                      userDescription: (0, o1.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cp.A, {
                          onClick: a,
                          Icon: cJ.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(o2.mG, {
                          location: o2.N5.POPOUT,
                          children: cQ.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(d0, {
                      children: (0, l.jsx)(d1, {
                          onReaction: i,
                          onVoiceChannelPreview: s,
                          user: r,
                          channel: n,
                          entry: t,
                      }),
                  }),
              ],
          });
};
function c2(e) {
    return e?.type === oH.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oI.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function c3(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oI.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(d4.A, { ...t, entry: n });
        case oI.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(cQ.A, { ...t, entry: n });
        case oI.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(cX.Ay, { ...t, entry: n });
        case oI.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cz, { ...t, entry: n });
        case oI.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cE.Ay, { ...t, entry: n });
        case oI.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(oW.A, { ...t, entry: n });
        default:
            return null;
    }
}
function c5(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oI.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cC, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function c9(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(c7, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(oV.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function c7(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oI.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cf, { ...t, entry: n });
        case oI.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(c1, { ...t, entry: n });
        case oI.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(c$, { ...t, entry: n });
        case oI.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cK, { ...t, entry: n });
        case oI.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cG, { ...t, entry: n });
        case oI.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(d8, { ...t, entry: n });
        default:
            return null;
    }
}
let c6 = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, E.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, d6.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(oS);
        s.useEffect(() => n(e), [n, e]);
    })(r.entry.id);
    let f = s.useMemo(
            () => ({
                entry: r.entry,
                channelId: r.channel.id,
                guildId: r.channel.guild_id,
                requestId: r.requestId,
                richPresenceName: g ? x : void 0,
            }),
            [x, r.channel.guild_id, r.channel.id, r.entry, r.requestId, g],
        ),
        I = s.useRef(!1),
        [j, y] = s.useState(!1),
        [b, _] = s.useState(!1),
        v = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        j && v && _(!0);
    }, [j, v]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, C.L3)(e, async () => {
                        let { default: e } = await t.e("789346").then(t.bind(t, 949881));
                        return () => (0, l.jsx)(e, { entry: r.entry, requestId: r.requestId });
                    });
            },
            [r, p],
        ),
        T = s.useCallback(() => {
            d(String(Date.now()));
        }, []),
        S = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                oY(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        oY(oV.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        );
    function O() {
        ((I.current = !1),
            setTimeout(() => {
                I.current || (y(!1), _(v));
            }, 100));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(c5, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: O,
                children: (0, l.jsx)(ni.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(cU.J.Provider, {
                            value: O,
                            children: (0, l.jsx)(c9, {
                                closePopout: n,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: j,
                    positionKey: o,
                    onRequestOpen: () => R(f),
                    onRequestClose: () => {
                        b && O();
                    },
                    spacing: 8,
                    children: (e, n) => {
                        let { isShown: t } = n;
                        return (0, l.jsx)(nX.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                j || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(c3, {
                                ...r,
                                selected: t,
                                hovered: I.current,
                                trackRankingItemInteraction: S,
                            }),
                        });
                    },
                }),
            }),
        ],
    });
});
var c8 = t(531685),
    c4 = t(99066),
    ue = t(376261),
    un = t(99753),
    ut = t(136722),
    ui = t(860071);
let ul = [],
    us = new Set(),
    ur = new Set();
var ua = t(808323);
let uo = new Set([
    oI.ContentInventoryEntryType.PLAYED_GAME,
    oI.ContentInventoryEntryType.WATCHED_MEDIA,
    oI.ContentInventoryEntryType.TOP_GAME,
    oI.ContentInventoryEntryType.TOP_ARTIST,
    oI.ContentInventoryEntryType.LISTENED_SESSION,
    oI.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var ud = t(728321),
    uc = t(282006);
let uu = er.Ay.getEnableHardwareAcceleration(),
    uh = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    um = s.memo(function (e) {
        let {
                colorString: n,
                colorStrings: i,
                colorRoleName: r,
                colorRoleId: a,
                isOwner: o,
                nick: d,
                user: c,
                currentUser: u,
                activities: h,
                applicationStream: m,
                status: A,
                channel: p,
                guildId: g,
                isTyping: x,
                isMobileOnline: f,
                isVROnline: I,
                premiumSince: j,
                nameplate: E,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != j ? new Date(j) : null,
            { analyticsLocations: S } = (0, L.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, C.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                t.e("463317"),
                                t.e("893190"),
                                t.e("189673"),
                                t.e("882073"),
                                t.e("797558"),
                                t.e("691994"),
                                t.e("576665"),
                                t.e("624198"),
                                t.e("245996"),
                                t.e("700792"),
                                t.e("592822"),
                                t.e("529422"),
                                t.e("823427"),
                                t.e("309291"),
                                t.e("307059"),
                                t.e("343116"),
                                t.e("139103"),
                                t.e("470314"),
                                t.e("70515"),
                                t.e("404524"),
                                t.e("654148"),
                                t.e("666939"),
                                t.e("717334"),
                                t.e("184841"),
                            ]).then(t.bind(t, 107632)),
                            n = lD.A.isInChannel(eG.Ay.getVoiceChannelId(), c.id);
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                user: c,
                                guildId: g,
                                channel: p,
                                showMediaItems: n,
                                analyticsLocations: S,
                            });
                    });
                },
                [c, g, p, S],
            ),
            P = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    n = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    O.A.startTyping(p.id));
            }, [c, p.id]),
            M = s.useCallback(
                (e) => {
                    null != g &&
                        (e.stopPropagation(),
                        (0, w.K4)({
                            guildId: g,
                            location: { section: eo.JJy.MEMBER_LIST, object: eo.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [g],
            );
        return (0, l.jsx)(K.A, {
            targetElementRef: _,
            user: c,
            guildId: g,
            channelId: p.id,
            roleId: a,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: P,
            shouldShow: v,
            onRequestClose: () => {
                N(!1);
            },
            children: (e) => {
                let { onClick: t, onMouseDown: s, ...a } = e;
                return (0, l.jsx)(ea.A, {
                    ref: _,
                    className: ec.Dc,
                    onContextMenu: R,
                    shouldAnimateStatus: uu,
                    user: c,
                    currentUser: u,
                    nick: d,
                    status: A,
                    activities: h,
                    applicationStream: m,
                    isOwner: o,
                    premiumSince: T,
                    colorString: n,
                    colorStrings: i,
                    colorRoleName: r,
                    isTyping: x,
                    channel: p,
                    guildId: g,
                    isMobile: f,
                    isVR: I,
                    onClickPremiumGuildIcon: M,
                    selected: v,
                    itemProps: y,
                    nameplate: E,
                    onClick: (e) => {
                        e.shiftKey ? P?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    uA = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, E.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([B.A], () => (null != n ? B.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(um, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function up(e) {
    let { index: n } = e,
        t = (0, E.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class ug extends s.Component {
    _list = null;
    _firstApplicationIdOccurrences = null;
    _lastRowsVersion;
    lastReportedAnalyticsChannel;
    shouldComponentUpdate(e) {
        return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
        );
    }
    componentDidMount() {
        (this.updateSubscription(), this.trackMemberListViewed());
    }
    componentDidUpdate(e) {
        (e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen());
    }
    setList = (e) => {
        ((this._list = e), (this.props.listRef.current = e));
    };
    renderSection = (e) => {
        let { section: n } = e,
            { groups: t, channel: i } = this.props,
            r = t[n];
        if (r?.id === oD) return (0, s.createElement)(oU, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                ud.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uh,
                    children: (0, s.createElement)(uc.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uc.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
    };
    getRowProps = (e) => {
        let { groups: n, rows: t } = this.props,
            i = n[e.section];
        if (null == i) return null;
        let { index: l } = i;
        return null == l || "row" !== e.type ? null : t[l + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: n } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === n)
            return this._firstApplicationIdOccurrences;
        let t = new Set(),
            i = new Set();
        for (let n of e)
            if (null != n && n.type === oH.S9.CONTENT_INVENTORY) {
                let { entry: e } = n;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let n = e.extra.application_id;
                    t.has(n) || (t.add(n), i.add(e.id));
                }
            }
        return ((this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = n), i);
    };
    renderRow = (e) => {
        let { section: n, row: t, rowIndex: i } = e,
            { channel: s } = this.props,
            r = this.getRowProps(e);
        if (null != r) {
            if (r.type === oH.S9.MEMBER && "user" in r) {
                let {
                    colorString: e,
                    colorStrings: n,
                    colorRoleId: t,
                    user: a,
                    status: o,
                    isOwner: d,
                    isMobileOnline: c,
                    isVROnline: u,
                    nick: h,
                    activities: m,
                    applicationStream: A,
                    premiumSince: p,
                } = r;
                return (0, l.jsx)(
                    uA,
                    {
                        colorString: e,
                        colorStrings: n,
                        colorRoleId: t,
                        user: a,
                        status: o,
                        isOwner: d,
                        nick: h,
                        activities: m,
                        applicationStream: A,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: p,
                        isMobileOnline: c,
                        isVROnline: u,
                        index: i,
                    },
                    `member-${r.user.id}`,
                );
            }
            if (r.type === oH.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    c6,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === oH.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(oF, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(up, { index: i }, `placeholder-${n}:${t}`);
    };
    handleScroll = () => {
        (this.updateSubscription(), this.updateMaxContentFeedRowSeen());
    };
    updateMaxContentFeedRowSeen = u().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: n, scrollTop: t } = e.getScrollerState(),
            i = t + n - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === oD) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? c2(t[i + 1 + l]) : n;
            };
        }
        return n;
    };
    getContentFeedHeight = () => {
        let e = this.getContentFeedGroup();
        return null != e ? e.feedHeight + this.props.sectionHeight : 0;
    };
    getContentFeedAdjustedDimensions(e) {
        let { height: n, rowHeight: t, y: i } = e,
            l = this.getContentFeedHeight(),
            s = Math.max(0, n - Math.max(0, l - i)),
            r = Math.floor(s / t);
        return { height: s, rowHeight: t, rowsVisible: r, y: Math.max(0, i - l) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: n, scrollTop: t } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            l = Math.floor(n / i);
        return this.getContentFeedAdjustedDimensions({ height: n, rowHeight: i, rowsVisible: l, y: t });
    }
    updateSubscription = u().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: n, y: t, height: i } = this.getDimensions();
        (0, F.NJ)({ guildId: e.guild_id, channelId: e.id, y: t, height: i, rowHeight: n });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: n } = this.getDimensions();
        if (void 0 === n || 0 === n || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
        let t = e
            .map((e) => this.getRowProps(e))
            .slice(0, n + 1)
            .filter(so.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== oH.S9.MEMBER ||
                    (e.num_users_visible++,
                    n.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != n.activities &&
                        n.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        n.activities.some((e) => e.type === eo.$pd.PLAYING) &&
                            e.num_users_visible_with_game_activity++),
                    null != n.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                    n.user.collectibles?.nameplate != null && e.num_users_visible_with_nameplate++),
                e
            ),
            {
                num_users_visible: 0,
                num_users_visible_with_mobile_indicator: 0,
                num_users_visible_with_game_activity: 0,
                num_users_visible_with_activity: 0,
                num_users_visible_with_avatar_decoration: 0,
                num_users_visible_with_nameplate: 0,
            },
        );
        ((this.lastReportedAnalyticsChannel = this.props.channel.id),
            eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_VIEWED, { ...i }));
    };
    render() {
        let { groups: e, listId: n, channel: t, sectionHeight: i } = this.props;
        return (0, l.jsx)(N.sk, {
            children: (s) =>
                (0, l.jsx)(sP.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rA.F, {
                                component: (0, l.jsx)(rp.A, {
                                    children: (0, l.jsx)(rA.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tK.m1)(t, ee.default, lL.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(E.PR, {
                                    children: (t) => {
                                        let { ref: r, role: o, ...d } = t;
                                        return (0, l.jsx)(
                                            T.OZ,
                                            {
                                                role: o,
                                                "aria-label": z.intl.string(z.t["9Oq93m"]),
                                                ref: (e) => {
                                                    ((this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (r.current = e?.getScrollerNode() ?? null));
                                                },
                                                className: a()(ec.ol, { [ec.Ij]: b.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: i,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...d,
                                                ...s,
                                            },
                                            n,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
}
function ux(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(M.A.MEMBER_LIST),
        r = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        o = (0, m.cf)([oH.Ay], () => oH.Ay.getProps(n.guild_id, n.id)),
        {
            rows: d,
            groups: c,
            version: u,
            updateMaxRowSeen: h,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: n, rows: t, version: i },
                    channelId: l,
                    guildId: r,
                } = e,
                [a, o] = s.useState(!1),
                {
                    requestId: d,
                    entries: c,
                    impressionCappedEntryIds: u,
                } = (function (e) {
                    var n, t;
                    let i,
                        l = (0, ua.A)({ id: oV.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cb.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    ui.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return ul;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return us;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    ut.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => uo.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [oM.A, un.A],
                            () => {
                                let e = un.A.getDebugImpressionCappingDisabled();
                                return !(0, c4.sE)("useFilterImpressionCappedContent") || e
                                    ? ur
                                    : oM.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: ur };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, o1.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([un.A], () => un.A.getFeedRequestId(oV.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oS).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([oM.A], () => oM.A.hidden),
                A = (0, m.bG)([c8.A], () => c8.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([n_.A], () => n_.A.getGuild(r), [r]),
                x = ((0, ue.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, j, C] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: oH.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: oH.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: oD,
                        type: oH.S9.CONTENT_INVENTORY_GROUP,
                        key: oD,
                        count: e.length,
                        index: t.length,
                        title: z.intl.string(z.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let n = !e;
                                return (
                                    et.default.track(eo.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: l,
                                        guild_id: r,
                                        expanded: n,
                                    }),
                                    n
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(c2).reduce((e, n) => e + n, 0),
                    };
                    return [[m, ...n], [...t, m, ...e], Math.random(), e];
                }, [l, c, a, n, r, d, t, i, h, x]),
                E = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                v = s.useCallback(
                    (e) => {
                        let n = Math.floor(e / 72),
                            t = Math.min(C?.length ?? 0, n);
                        E.current = Math.max(E.current, t);
                    },
                    [C],
                );
            return (
                s.useEffect(() => {
                    y.current = c;
                }, [c]),
                s.useEffect(() => {
                    _.current = { impressionCappedEntryIds: u };
                }, [u]),
                s.useEffect(
                    () => (
                        (E.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                n = e.slice(0, E.current);
                            !h &&
                                A &&
                                x &&
                                (oB(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: oV.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, c4.sE)("useInjectContentInventoryFeed") &&
                                    nU.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: I, version: j, updateMaxRowSeen: v }
            );
        })({ memberStoreProps: o, channelId: n.id, guildId: n.guild_id }),
        A = s.useRef(null),
        p = s.useRef(null);
    s.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let g = (0, ox.W)("lg") + (0, ox.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = A.current;
                if (null == t) return;
                let i = n === ok || n === ow ? 0 : parseInt(n, 10),
                    [l, s] = t.getSectionRowFromIndex(i);
                t.scrollToIndex({
                    section: l,
                    row: s,
                    padding: 42 * (0 === l && 0 === s),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        f = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = A.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = A.current;
                    if (null == n) return e();
                    n.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        j = (0, y.Ay)({ id: `members-${n.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: I });
    return (0, l.jsx)(L.f5, {
        value: i,
        children: (0, l.jsx)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: (0, l.jsx)(E.hD, {
                navigator: j,
                children: (0, l.jsx)(ug, {
                    ...e,
                    ...o,
                    version: u,
                    groups: c,
                    rows: d,
                    listRef: A,
                    updateMaxContentFeedRowSeen: h,
                    sectionHeight: 18 + g,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function uf(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(oR, { children: (0, l.jsx)(ux, { channel: i, className: t }) }), [i, t]);
}
var uI = t(888904);
let uj = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uI.kL,
        children: [
            (0, l.jsxs)(lI.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lI.A.Icon, { icon: o9.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lI.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uI.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uI.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uI.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uC = t(909735),
    uE = t(943712),
    uy = t(274541),
    ub = t(516607),
    u_ = t(999900);
function uv() {
    return (0, l.jsx)("div", { className: u_.wG, children: (0, l.jsx)(g.y, {}) });
}
let uN = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("229511"),
                t.e("908346"),
                t.e("808216"),
                t.e("202342"),
                t.e("500194"),
                t.e("207309"),
                t.e("430877"),
                t.e("302800"),
                t.e("249681"),
                t.e("666140"),
                t.e("333097"),
                t.e("704374"),
                t.e("777848"),
                t.e("689160"),
                t.e("623685"),
                t.e("842516"),
                t.e("421225"),
                t.e("822070"),
            ]).then(t.bind(t, 559296)),
        webpackId: 559296,
        renderLoader: uv,
        name: "ForumChannel",
    }),
    uT = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("770583"),
                t.e("355197"),
                t.e("979585"),
                t.e("87729"),
                t.e("889300"),
                t.e("344322"),
                t.e("998976"),
            ]).then(t.bind(t, 780611)),
        webpackId: 780611,
        renderLoader: uv,
        name: "AppChannel",
    });
function uS() {
    return Promise.all([
        t.e("651299"),
        t.e("426965"),
        t.e("256172"),
        t.e("859821"),
        t.e("113561"),
        t.e("368991"),
        t.e("223213"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("945210"),
        t.e("792818"),
        t.e("630279"),
        t.e("460582"),
        t.e("477751"),
        t.e("245851"),
        t.e("125466"),
        t.e("740705"),
        t.e("468617"),
        t.e("770583"),
        t.e("64097"),
        t.e("355197"),
        t.e("389187"),
        t.e("347285"),
        t.e("494653"),
        t.e("355761"),
        t.e("459397"),
        t.e("847810"),
        t.e("249727"),
        t.e("686047"),
        t.e("997708"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("93461"),
        t.e("437961"),
        t.e("139103"),
        t.e("949013"),
        t.e("33448"),
        t.e("79216"),
        t.e("815275"),
        t.e("544901"),
        t.e("704374"),
        t.e("986300"),
        t.e("874821"),
        t.e("426792"),
        t.e("815057"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("726223"),
        t.e("979585"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("497306"),
        t.e("736793"),
        t.e("87729"),
        t.e("889300"),
        t.e("932011"),
        t.e("112733"),
        t.e("792461"),
    ]).then(t.bind(t, 540462));
}
let uR = (0, ts.Fe)({ createPromise: uS, webpackId: 540462, name: "ChannelCall", renderLoader: uv });
function uO() {
    return Promise.all([
        t.e("770583"),
        t.e("998392"),
        t.e("703540"),
        t.e("368991"),
        t.e("256172"),
        t.e("223213"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("945210"),
        t.e("792818"),
        t.e("630279"),
        t.e("494653"),
        t.e("668526"),
        t.e("125466"),
        t.e("460582"),
        t.e("477751"),
        t.e("740705"),
        t.e("468617"),
        t.e("805551"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("93461"),
        t.e("437961"),
        t.e("949013"),
        t.e("33448"),
        t.e("79216"),
        t.e("815275"),
        t.e("256373"),
        t.e("544901"),
        t.e("704374"),
        t.e("420577"),
        t.e("874821"),
        t.e("426792"),
        t.e("464287"),
        t.e("360536"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("979585"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("497306"),
        t.e("678827"),
        t.e("407525"),
    ]).then(t.bind(t, 883396));
}
let uP = (0, ts.Fe)({ createPromise: uO, webpackId: 883396, name: "StageChannelCall", renderLoader: uv }),
    uM = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("66554"),
                t.e("259465"),
                t.e("527552"),
                t.e("769266"),
                t.e("193845"),
                t.e("249681"),
                t.e("428235"),
                t.e("369501"),
                t.e("161058"),
                t.e("333097"),
                t.e("359702"),
                t.e("39214"),
                t.e("220803"),
                t.e("79171"),
                t.e("417664"),
                t.e("662368"),
            ]).then(t.bind(t, 392)),
        webpackId: 392,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(sx, {});
        },
    }),
    uL = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("577154"),
                t.e("424216"),
                t.e("877730"),
                t.e("611899"),
                t.e("259465"),
                t.e("527552"),
                t.e("769266"),
                t.e("487873"),
                t.e("765626"),
                t.e("683302"),
                t.e("249681"),
                t.e("728136"),
                t.e("507775"),
                t.e("428235"),
                t.e("369501"),
                t.e("161058"),
                t.e("333097"),
                t.e("636002"),
                t.e("359702"),
                t.e("466913"),
                t.e("71719"),
                t.e("213848"),
            ]).then(t.bind(t, 754744)),
        webpackId: 754744,
        name: "GuildMemberModViewSidebar",
    }),
    uD = (0, ts.Fe)({
        createPromise: () => Promise.all([t.e("188547"), t.e("269178"), t.e("875746")]).then(t.bind(t, 155769)),
        webpackId: 155769,
        name: "FriendsSidebar",
    });
class uk extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rh.d0)("guild_channel"), this.maybePreloadChannelCall());
    }
    componentDidUpdate(e) {
        (null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.props.channel?.type !== e.channel?.type && this.maybePreloadChannelCall(),
            this.openChannelModal());
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE ? uS() : e === eo.rbe.GUILD_STAGE_VOICE && uO();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, ia.iN)(e.id);
    };
    _handleContextMenu = (e, n) => {
        switch (n.type) {
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_APP:
                this.openChannelContextMenu(e, n);
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, n);
                break;
            case eo.rbe.DM:
                this.openDMContextMenu(e, n);
        }
    };
    handleContextMenu = (e) => {
        (d()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel));
    };
    handleParentContextMenu = (e) => {
        (d()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel));
    };
    handleThreadSidebarResize = (e, n) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: n });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        (d()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, rm.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [M.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("947502"),
                    t.e("309004"),
                    t.e("430997"),
                    t.e("379995"),
                    t.e("544058"),
                    t.e("591377"),
                    t.e("35723"),
                    t.e("256372"),
                    t.e("29542"),
                    t.e("359545"),
                ]).then(t.bind(t, 22496));
                return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
            }));
    }
    openThreadContextMenu(e, n) {
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("955557"),
                    t.e("947502"),
                    t.e("965789"),
                    t.e("584615"),
                ]).then(t.bind(t, 612826));
                return (t) => (0, l.jsx)(e, { ...t, channel: n });
            }));
    }
    openDMContextMenu(e, n) {
        d()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = ee.default.getUser(n.getRecipientId());
        (d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("463317"),
                    t.e("926132"),
                    t.e("146652"),
                    t.e("893190"),
                    t.e("189673"),
                    t.e("955557"),
                    t.e("882073"),
                    t.e("797558"),
                    t.e("691994"),
                    t.e("576665"),
                    t.e("947502"),
                    t.e("245996"),
                    t.e("700792"),
                    t.e("965789"),
                    t.e("592822"),
                    t.e("529422"),
                    t.e("823427"),
                    t.e("198415"),
                    t.e("309291"),
                    t.e("307059"),
                    t.e("935483"),
                    t.e("17244"),
                    t.e("298199"),
                    t.e("864464"),
                    t.e("439778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            }));
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(nS.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iG.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(nq.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dy.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ik.A,
                  { size: dh.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: n,
            isLurking: t,
            showCall: i,
            showActivityPanel: s,
            showFramePanel: r,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let a = [];
        if (e.isSystemDM()) return a;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
                break;
            case eo.rbe.DM:
                (a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lF, { channel: e }, "calls")),
                    a.push((0, l.jsx)(le, { channel: e }, "pins")),
                    a.push((0, l.jsx)(lH.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    a.push((0, l.jsx)(l5, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    a.push((0, l.jsx)(l$, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lF, { channel: e }, "calls")),
                    a.push((0, l.jsx)(le, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, l.jsx)(lH.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    a.push((0, l.jsx)(i7, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && a.push((0, l.jsx)(ig, { channel: e })),
                    null == n || n.isForumLikeChannel() || a.push((0, l.jsx)(rt, { channel: n }, "browser")),
                    e.isVocalThread() && a.push((0, l.jsx)(lZ, { channel: e }, "thread-call")),
                    a.push((0, l.jsx)(ib, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(le, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, l.jsx)(i7, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && a.push((0, l.jsx)(ls, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(rr, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (a.push((0, l.jsx)(rt, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(i6.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(le, { channel: e }, "pins")),
                    (0, nK.PD)(e.guild_id, "channel_header") &&
                        a.push((0, l.jsx)(i5, { channelId: e.id }, "conversations")),
                    a.push((0, l.jsx)(i7, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && a.push((0, l.jsx)(ls, { channel: e }, "summaries")));
                break;
            case eo.rbe.GUILD_APP:
                (a.push((0, l.jsx)(nV, { channel: e }, "popout")),
                    a.push((0, l.jsx)(rt, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(i6.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(le, { channel: e }, "pins")),
                    a.push((0, l.jsx)(i7, { channelId: e.id }, "members")),
                    a.push((0, l.jsx)(i2, { channelId: e.id }, "chat")),
                    a.push((0, l.jsx)(nD, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && a.push((0, l.jsx)(lf, {}, "game-invite-channel-learn-more")),
                    t ||
                        (a.push((0, l.jsx)(lA, { channel: e }, "forum-onboarding")),
                        a.push((0, l.jsx)(i6.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, l.jsx)(i7, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                a.push((0, l.jsx)(i7, { channelId: e.id }, "members"));
        }
        return a;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let n = [];
        if (e.isSystemDM()) return n;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
                break;
            case eo.rbe.GROUP_DM:
                n.push((0, l.jsx)(i7, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(i7, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(i7, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: u_.u8,
                  children: (0, l.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("836178"), t.e("670774")]).then(
                                  t.bind(t, 464035),
                              );
                              return (t) => (0, l.jsx)(e, { channel: n, ...t });
                          }),
                  }),
              })
            : null;
    };
    renderHeaderBar = () => {
        let {
            channel: e,
            channelName: n,
            parentChannel: t,
            guild: i,
            guildId: s,
            showCall: r,
            showActivityPanel: o,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != n, "Should not be null if channel is not null."));
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, ia.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = o || c,
            g = r || p;
        return (0, l.jsxs)("div", {
            className: u_.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && r ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lI.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(u_.DD, r, { [u_.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: c,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(t$.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, t$.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: i,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: m,
                                        handleParentClick: A,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: u_.u8,
                                              children: (0, l.jsx)(x.$, {
                                                  onClick: () => (0, nx.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, t$.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sA.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: n, spoilerGatingChannelId: t } = this.props;
        return !n && null == t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
                return (0, l.jsx)(uP, { channel: e, popoutType: nW.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    uR,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: nW.N.NO_POPOUT,
                    },
                    `call-${e.id}`,
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            n = this.shouldRenderCall();
        if ((d()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), n)) return null;
        let t = this.props.height - 200;
        return (0, l.jsx)(e7, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: n,
            needSubscriptionToAccess: t,
            channelIsContentGated: i,
            spoilerGatingChannelId: s,
            showCall: r,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), t))
            return (d()(null != n, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(iW, { guildId: n.id })
                : (0, l.jsx)(iU.H, { guildId: n.id, children: (0, l.jsx)(iJ, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(oc.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tJ.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tW, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(uN, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return e.type === eo.rbe.GUILD_APP
            ? (0, l.jsx)(uT, { channel: e }, e.id)
            : (0, l.jsx)(tX.A, { channel: e, guild: n, chatInputType: nz.oU.NORMAL }, null != n ? n.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: n,
            guild: t,
            needSubscriptionToAccess: i,
            section: s,
            showCall: r,
            showActivityPanel: a,
            showFramePanel: o,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (s === eo.YvQ.PROFILE && e.isPrivate() && !r && !a && !o)
            return (0, l.jsx)(od, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sm, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uf, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uf, { channel: n }, `channel-members-${n.id}`);
                    break;
                case eo.rbe.PUBLIC_THREAD:
                case eo.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(ep, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === eo.YvQ.CONVERSATIONS)
            switch (e.type) {
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(tl, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(uM, { guildId: t?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: n,
            hasModalOpen: i,
            showWelcomeModal: s,
            isLurking: r,
            isUnavailable: a,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == n ||
                a ||
                i ||
                (o &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await t.e("638763").then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => iw(l8.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, ou.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: n,
                section: t,
                channelSidebarState: i,
                guildSidebarState: s,
                width: r,
                channelIsContentGated: a,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == s && null == i) return null;
        if (t === eo.YvQ.SIDEBAR_CHAT && null != i) {
            if (a || null != o) return null;
            switch (i.type) {
                case i0.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(s1, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case i0.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(ru, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case i0.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? iP : ru;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (null != n && (0, om.ZV)(n.type)) {
                        e = (0, l.jsx)(uy.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case i0.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== i0.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: u_.uC,
                    children: (0, l.jsx)(uL, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iZ.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(og.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? og.X.PostSidebar : og.X.ThreadSidebar,
                maxWidth: c,
                capturePointer: n?.type === eo.rbe.GUILD_APP,
                onWidthChange: this.handleThreadSidebarResize,
                children: e,
            })
        );
    }
    render() {
        let {
                channel: e,
                guild: n,
                formattedChannelName: t,
                isUnavailable: i,
                layout: s,
                section: r,
                hasModalOpen: o,
                guildSidebarState: d,
                hasTextActivityInPanelMode: c,
                friendsSidebarExperimentEnabled: u,
                canShowFriendsSidebar: h,
                friendsSidebarAppBarToggleEnabled: m,
                friendsSidebarCollapsed: A,
            } = this.props,
            { threadSidebarWidth: p, isThreadSidebarFloating: g } = this.state,
            x = h && (!m || !A),
            f = this.shouldRenderCall();
        if (i) return (0, l.jsx)(uj, {});
        if (null == e) return (0, l.jsx)(uE.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            j = (0, uC.UN)("Channel"),
            C = null != d && !I,
            E = (0, om.nO)(e.type) && !o,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE,
                        className: a()(u_.TE, {
                            [u_.js]: (I && !j) || C,
                            [u_.Rs]: I ? !j || g : C || x,
                            [u_.jl]: I && g,
                        }),
                        children: [
                            E
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: u_.x4,
                                      channel: e,
                                      draftType: iS.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(u_.Qs, { [u_.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tr.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: u_.zP, children: b }) : b,
                x && (0, l.jsx)(uD, {}),
            ],
        });
    }
}
let uw = (0, ef.A)(uk),
    uG = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
            c = (0, m.bG)([eG.Ay], () => eG.Ay.getVoiceChannelId()),
            g = (0, m.bG)([ew.A], () => r ?? ew.A.getChannel(d), [d, r]),
            x = (0, tq.DZ)(),
            f = (0, tq.e4)(g, "ConnectedChannel"),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(c), [c]),
            E = f?.parent_id,
            y = (0, m.bG)([ew.A], () => ew.A.getChannel(E), [E]),
            b = (0, m.bG)([n_.A], () => n_.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: _ } = (0, iF.A)(f?.id ?? void 0),
            v = (0, m.bG)(
                [nY.A],
                () => {
                    let e = null != d ? nY.A.getParticipants(d) : [],
                        n = null != d ? nY.A.getActivityParticipants(d) : [];
                    return e.length - n.length > 0;
                },
                [d],
            ),
            N = (0, iD.A)(),
            T = (0, m.bG)([eG.Ay], () => (N?.channelId ?? eG.Ay.getVoiceChannelId()) === f?.id),
            S = (0, m.bG)([eC.Ay], () => (null != f ? eC.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, m.bG)([op.A], () => op.A.isConnected()),
            O = (0, ej.Ay)(R),
            P = R && !1 === O;
        s.useEffect(() => {
            T &&
                P &&
                null != S &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, nB.Qt)({ applicationId: S.applicationId, instanceId: S.compositeInstanceId }),
                );
        }, [P, f, T, S]);
        let M = (0, m.bG)([eC.Ay], () => eC.Ay.getCurrentEmbeddedActivity()),
            L = (0, m.bG)([eC.Ay], () => eC.Ay.getActivityPanelMode()),
            D = null != M && !(0, ev.A)(f?.id) && L === eZ.Gd.PANEL,
            k = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: w, isUserInThisVoice: G } = (0, m.cf)([lD.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lD.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lD.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !D && v,
            F = f?.isGuildVocal() || U || (w && (G || !k)),
            H = (0, m.bG)([nm.A], () => {
                let e = (0, nR.ny)(nm.A.getMainFrame());
                return e?.data.layoutMode === nR.y0.FOCUSED && e.intent === nR.sV.MAIN;
            }),
            { welcomeModalChannelId: V } = (0, h.zy)(),
            B = (0, m.bG)([ij.A], () => null != f && ij.A.isLurking(f.guild_id), [f]),
            Y = (0, m.bG)([oh.A], () => oh.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, m.bG)(
                [nY.A, eC.Ay],
                () =>
                    null != eC.Ay.getConnectedActivityLocation() && eC.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eC.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != d
                          ? nY.A.getLayout(d)
                          : eo.DUB.NORMAL,
                [d],
            ),
            z =
                ((n = b?.id),
                (i = (0, m.bG)([n_.A, l6, ee.default, $.Ay], () => {
                    let e = n_.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === l6.hasViewedPrompt(l8.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || iw(l8.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            q =
                ((t = b?.id),
                (0, m.bG)([ew.A, n_.A, eG.Ay], () => {
                    let e = n_.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(V);
                    return V === eG.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, om.ke)(n.type);
                })),
            { section: K, channelSidebarState: X } = (0, m.cf)(
                [i1.Ay],
                () => ({ section: i1.Ay.getSection(d, f?.isDM()), channelSidebarState: i1.Ay.getSidebarState(d) }),
                [d, f],
            ),
            J = b?.id,
            Z = (0, m.bG)([i1.Ay], () => i1.Ay.getGuildSidebarState(J), [J]),
            en = (0, se.lI)(),
            et = (0, tK.Ay)(f),
            el = (0, tK.Ay)(f, !0),
            es = (0, m.bG)([nY.A], () => (null != f ? nY.A.getSelectedParticipant(f.id) : null)),
            er = (0, e4.vL)(f),
            ea = (0, tQ.Uf)(f),
            ed = null != f && c === f.id,
            ec = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eu, appBarToggleEnabled: eh } = iM.A.useConfig({ location: "Channel" }),
            em = (0, iL.c)(),
            eA = (0, m.bG)(
                [oA.A, i9.A],
                () => {
                    let e = f?.guild_id ?? i9.A.getGuildId();
                    return null != e && oA.A.isUnavailable(e);
                },
                [f],
            ),
            ep = eu && !__OVERLAY__ && null != f && !eA && !f.isGuildVocal();
        (s.useEffect(() => (j.A.setFriendsSidebarAvailable(ep), () => j.A.setFriendsSidebarAvailable(!1)), [ep]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, ev.A)(i)) return;
                        eG.Ay.getVoiceChannelId() !== i && (await (0, e6.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, e8.A)(s, t), n?.());
                        }, 0);
                    }
                    return (
                        ei._.subscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e),
                        () => {
                            ei._.unsubscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e);
                        }
                    );
                }, [n]);
            })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, nx.JK)();
                if (e?.location?.state?.stageInviteKey === ub.J2) {
                    let { channelId: n } = (0, l4.vu)(e?.location?.pathname) ?? {};
                    null != n && o(n);
                }
            }, []));
        let eg = { channel: f, inCurrentVoiceChannel: ed },
            ex = s.useRef(eg);
        (s.useEffect(() => {
            ex.current = eg;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = ex.current;
                null != a && null != e && ec && e.id === a && !n && ((0, sf.av)(e), o(null));
            }, [a, ec]));
        let ef = (0, eI.cI)(f),
            eE = null != f && f.isPrivate(),
            ey = (0, ej.Ay)(eE),
            eb = (0, ej.Ay)(f?.id);
        s.useEffect(() => {
            let e = ey && !eE,
                n = ey && eE && f?.id !== eb;
            (e || n) && (0, tz.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lw.i.AUTO });
        }, [f?.id, eb, eE, ey]);
        let eN = (0, p.useHasAnyModalOpen)();
        return (0, l.jsx)(uw, {
            guildId: f?.guild_id,
            channelId: d,
            channel: f,
            channelName: et,
            formattedChannelName: el,
            parentChannel: y,
            voiceChannel: C,
            layout: W,
            needSubscriptionToAccess: _,
            isLurking: B,
            hasModalOpen: eN,
            section: K,
            channelSidebarState: X,
            guildSidebarState: Z,
            guild: b,
            showCall: !_ && F,
            showActivityPanel: D,
            showFramePanel: H,
            channelIsContentGated: er,
            spoilerGatingChannelId: ea,
            isMobile: (0, m.bG)([Q.A], () => f?.type === eo.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: eA,
            showRealNameModal: z,
            showWelcomeModal: !Y && q,
            showFollowButton: (f?.type === eo.rbe.GUILD_ANNOUNCEMENT && b?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lD.A], () => ({ hasVideo: null != f && lD.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: es,
            showChannelSummaries: ef,
            showHeaderGuildBreadcrumb: x || en,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: M,
            friendsSidebarExperimentEnabled: eu,
            canShowFriendsSidebar: ep,
            friendsSidebarAppBarToggleEnabled: eh,
            friendsSidebarCollapsed: em,
        });
    });
