(t.r(n), t.d(n, { default: () => uF }), t(321073));
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
    E = t(442433);
t(183994);
var C = t(837381),
    y = t(887129),
    b = t(607399),
    _ = t(834730),
    v = t(194261),
    N = t(312138),
    T = t(475825),
    S = t(177953),
    R = t(297264),
    O = t(414798),
    M = t(775602),
    P = t(793574),
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
            j = (0, C.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(n.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, E.L3)(e, async () => {
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
            [R, M] = s.useState(!1);
        if (null == h) return null;
        let P = c?.premiumSince;
        return (0, l.jsx)(K.A, {
            targetElementRef: o,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => M(!1),
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
                    premiumSince: null == P ? null : new Date(P),
                    onClickPremiumGuildIcon: T,
                    itemProps: j,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? N?.() : M((e) => !e);
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
        { analyticsLocations: p } = (0, L.Ay)(P.A.MEMBER_LIST),
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
            (t = (0, m.bG)([M.Ay], () => M.Ay.keyboardModeEnabled)),
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
    let E = u().omit(f.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(L.f5, {
        value: p,
        children: (0, l.jsx)(C.hD, {
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
                                ...E,
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
    eE = t(933958),
    eC = t(702841),
    ey = t(567249),
    eb = t(811024),
    e_ = t(969151),
    ev = t(108959),
    eN = t(866665),
    eT = t(446576),
    eS = t(817281),
    eR = t(95561),
    eO = t(587837),
    eM = t(850891),
    eP = t(742023),
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
        a = (0, m.bG)([eE.Ay], () => eE.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
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
    let g = (0, m.bG)([eE.Ay], () => eE.Ay.getFocusedLayout()),
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
    e7 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e9(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        r = (0, eV.A)(),
        o = (0, m.yK)([eE.Ay], () => eE.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([eE.Ay], () => eE.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [I, j] = s.useState(eP.Ay.activityPanelHeight ?? n ?? null),
        E = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        C = s.useRef(null),
        [y, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            b({ width: C.current?.clientWidth ?? 0, height: C.current?.clientHeight ?? 0 });
        });
        return (e.observe(C.current), () => e.disconnect());
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
        P = (0, m.yK)(
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
                P.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [P]),
        D = (function (e, n, t) {
            let i = (0, ej.Ay)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !M.Ay.useReducedMotion && (l || r);
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
                    className: a()(e2.iE, e7[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eM.A, { type: "embedded-activity", applicationId: r.id }),
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
                                    ref: C,
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
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), E(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e5(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eC.cf)([eE.Ay], () => {
            let e = eE.Ay.getConnectedActivityLocation(),
                n = eE.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: n,
                activityPanelMode: eE.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eC.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
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
    nd = t(316768),
    nc = t(625180),
    nu = t(672929),
    nh = t(58736),
    nm = t(165610);
function nA(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, no.A)(n, "app_channel_header"),
        o = s.useMemo(
            () => ({ type: ne.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        d = (0, nu.A)(n.application_id ?? null, o),
        c = (0, nm.x1)(d) && d.data.proxyTicketRefreshing,
        u = (0, nd.A)(n, d, "AppChannelHeaderOverflowMenu"),
        h = s.useCallback(() => {
            null == d || c || nc.A.refreshProxyTicket(d.id);
        }, [d, c]),
        m = z.intl.string(z.t["UKOtz+"]),
        A = (0, nm.x1)(d);
    return A || null != a || 0 !== u.length
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
                              A &&
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
                  return (0, l.jsx)(nh.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: t ? null : m,
                      icon: na.MoreHorizontalIcon,
                      "aria-label": m,
                      selected: t,
                  });
              },
          })
        : null;
}
var np = t(12470),
    ng = t(811893),
    nx = t(91242),
    nf = t(809871),
    nI = t(73153),
    nj = t(494126);
async function nE(e) {
    null == nx.A.getFrame(e) ||
        ((await (0, nj.refreshProxyTicket)(e)) &&
            ((0, nj.promoteFrame)(e),
            (0, nj.updateFramePanelMode)(e, eZ.Gd.ACTIVITY_POPOUT_WINDOW),
            nI.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var nC = t(869146);
function ny(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: ne.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nu.A)(n.application_id ?? null, t),
        r = (0, eq.G)(),
        a = (0, m.bG)(
            [nC.A, nx.A],
            () => nC.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) && null != i && nx.A.getMainFrame()?.id === i.id,
            [i],
        ),
        o = s.useCallback(() => {
            null != i && (0, eW.A)({ onConfirm: () => nE(i.id) });
        }, [i]),
        d = s.useCallback(() => {
            (0, eW.A)({ onConfirm: () => nf.A.popInFrame() });
        }, []);
    return (0, nm.x1)(i)
        ? a
            ? (0, l.jsx)(nh.In, {
                  icon: np._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: d,
              })
            : r
              ? (0, l.jsx)(nh.In, {
                    icon: ng.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: o,
                })
              : null
        : null;
}
var nb = t(568598),
    n_ = t(198052),
    nv = t(164617),
    nN = t(355622),
    nT = t(689874),
    nS = t(828488),
    nR = t(939249),
    nO = t(408278),
    nM = t(624479),
    nP = t(739187),
    nL = t(857250),
    nD = t(97483),
    nk = t(534890),
    nw = t(661531),
    nG = t(39623),
    nU = t(952270),
    nF = t(381849),
    nH = t(549973),
    nV = t(957565),
    nB = t(935208),
    nY = t(181041),
    nW = t(256331),
    nz = t(623562),
    nq = t(403862);
let nK = ["high", "medium", "low"],
    nX = s.memo(function (e) {
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
                              nK.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: nq.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nq.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: nq.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nq.a7,
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
                            className: nq.a7,
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
                            className: nq.a7,
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
    n$ = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = nB.default.extractTimestamp(n.startMessageId),
            s = nB.default.extractTimestamp(n.endMessageId),
            r = (0, nH.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, nF.WR)({ seconds: a, getFormatter: nF.i }),
            d = (0, m.bG)([nY.A], () => nY.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(nR.D, {
            className: nq.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: nq.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: nq.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(nO.K, {
                            icon: nM.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, nV.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nP.P)((0, nL.o)("Copied conversation JSON", nD.Ck.SUCCESS)),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: nq.FR,
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
                        className: nq.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: nq.JP,
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
                    className: nq.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: nq.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nq.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nq.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: nq.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nq.a7,
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
                                    className: nq.a7,
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
                                    className: nq.a7,
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
                (0, l.jsx)(nX, { moderation: n.moderation ?? null }),
            ],
        });
    });
function nQ(e) {
    let { channel: n } = e,
        t = (0, m.bG)([nY.A], () => nY.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([nY.A], () => nY.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([nW.A], () => nW.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, nz.xI)(n.id, e.id);
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nq.zr,
        children: [
            (0, l.jsxs)("div", {
                className: nq.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: nq.gn,
                        children: [
                            (0, l.jsx)(nk.ChatIcon, { color: nw.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: nq.y6,
                        children: (0, l.jsx)(nO.K, {
                            icon: r ? nG.EyeIcon : nU.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: nz.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: nq.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(n$, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: nq.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var nJ = t(268218),
    nZ = t(726249),
    n0 = t(334738),
    n1 = t(208882),
    n2 = t(938764),
    n3 = t(519480),
    n7 = t(352123),
    n9 = t(825244),
    n5 = t(130696);
let n6 = function (e) {
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
        className: n5.h2,
        children: [
            (0, l.jsx)("img", { className: n5.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: n5._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: n5.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(n9.E, {
                      className: n5.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(n9.E, {
                className: n5.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var n8 = t(683438),
    n4 = t(689175),
    te = t(761508),
    tn = t(765671),
    tt = t(22231),
    ti = t(66834),
    tl = t(573435),
    ts = t(101555),
    tr = t(548118),
    ta = t(714991),
    to = t(776231),
    td = t(345942),
    tc = t(71393),
    tu = t(486020),
    th = t(149790),
    tm = t(682557),
    tA = t(524058);
let tp = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(nR.D, {
        onClick: n,
        className: tA.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tA.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tg(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, n7.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tA.fc, { [tA.QX]: i }),
        children: (0, l.jsxs)(ts.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(ts.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tt.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tA.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tm.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(ts.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(na.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tA.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tx = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([tc.A], () => tc.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, td.u)(n.guildId) : await ti.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tu.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, to.mZ)() }),
        c = tu.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tA.Nr,
            onContextMenu: function (e) {
                (0, E.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tA.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tA.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tA.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tA.$f,
                            children: (0, l.jsx)(tl.Ay, {
                                mask: tl.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tA.SA,
                                    children: (0, l.jsx)(tr.Ay, {
                                        className: tA.rZ,
                                        iconSrc: c,
                                        guild: (0, th.xi)(n),
                                        size: tr.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tA.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tA.DD,
                            children: [
                                (0, l.jsx)(ta.A, { className: tA.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tA.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tA.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tA.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tA.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tA.JX }),
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
                                        className: tA.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tA.Li }),
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
                            className: tA.PD,
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
                (0, l.jsx)(tg, { entry: n }),
            ],
        })
    );
});
var tf = t(946116),
    tI = t(844086),
    tj = t(770679);
function tE(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tn.Ay)(),
        d = null != o && o <= 800;
    return (0, l.jsxs)("div", {
        ref: r,
        className: tj.wx,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: tj.F0,
                src: d ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
            }),
            (0, l.jsx)("div", {
                className: tj.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tj.VW, { [tj.eO]: d }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            className: tj.dc,
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            className: tj.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)(f.N, {
                            theme: W.NJ.LIGHT,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: a()(tj.MT, e),
                                    children: (0, l.jsx)(n8.I, {
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
let tC = function (e) {
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
        className: tI.$$,
        children: (0, l.jsxs)(n4.Gt, {
            className: tI.XG,
            children: [
                (0, l.jsx)(tE, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(n4.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(te.V, {
                        className: tj.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                te.V.Item,
                                { className: tj.YU, id: tf.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                tf.mU.ALL,
                            ),
                            (0, tf.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    te.V.Item,
                                    { className: tj.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: tI.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: tj.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tI.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tx, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tp, { onClick: i }) : null,
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
var ty = t(370876),
    tb = t(28863),
    t_ = t(364522),
    tv = t(792831),
    tN = t(211862);
let tT = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: tI.$$, children: (0, l.jsx)(g.y, { className: tI.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tb.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tN.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: tN.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tI.vY, children: d.map((e) => (0, l.jsx)(tx, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tI.$$,
        children: (0, l.jsxs)(t_.Ar, {
            className: tI.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tN.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tN.Dr,
                            children: [
                                (0, l.jsx)(nR.D, {
                                    onClick: r,
                                    className: tN.UE,
                                    children: (0, l.jsx)(tv.A, { direction: tv.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tN.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(n8.I, {
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
var tS = t(650583);
let tR = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([n3.A], () => {
            let e = n3.A.getCurrentCategoryId(n.id),
                t = n3.A.getDirectoryEntries(n.id, e === tf.mU.ALL ? null : e),
                i = n3.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: n3.A.getDirectoryAllEntriesCount(n.id),
                isLoading: n3.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                nI.h.wait(() => {
                    (0, n0.ack)(
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
                          if (n !== tf.mU.ALL) return [{ entries: (0, ty._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, ty.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, ty.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([n2.A], () => {
            let { mostRecentQuery: e, fetching: t } = n2.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: n2.A.getSearchResults(n.id, e) };
        }),
        [f, I] = s.useState(h),
        j = "" !== h,
        E = { mostRecentQuery: h },
        C = s.useRef(E);
    (s.useEffect(() => {
        C.current = E;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            (n1.Yc(n.id), n1.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, n7.b)(n),
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
                                      currentCategoryId: r === tf.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === tS.dh.ENTER &&
            (n1.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (I(""), n1.BA(n.id));
    }
    return j
        ? (0, l.jsx)(tT, {
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
          ? (0, l.jsx)("div", { className: tI.$$, children: (0, l.jsx)(g.y, { className: tI.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tI.$$, children: (0, l.jsx)(n6, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tC, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      n1.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var tO = t(826673),
    tM = t(93055),
    tP = t(47167),
    tL = t(688438),
    tD = t(353428),
    tk = t(976860),
    tw = t(288254),
    tG = t(873614),
    tU = t(649852),
    tF = t.n(tU),
    tH = t(789645),
    tV = t(163126),
    tB = t(182061),
    tY = t(886393),
    tW = t(307623),
    tz = t(660273),
    tq = t(707792),
    tK = t(41402),
    tX = t(271456),
    t$ = t(200273),
    tQ = t(565846),
    tJ = t(57907),
    tZ = t(375500),
    t0 = t(707653),
    t1 = t(50268),
    t2 = t(378570),
    t3 = t(162199),
    t7 = t(713608),
    t9 = t(473503),
    t5 = t(901472),
    t6 = t(267102),
    t8 = t(474397),
    t4 = t(486974),
    ie = t(39470);
function it(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, t6.aL)(),
        r = z.intl.string(ie.default["Beo/7v"]),
        { firstMessage: a } = (0, t9.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nh.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, t2.iN)(n.id),
                      (0, t8.A)(),
                      (0, t5.z)(n.guild_id, d, n.id, {
                          modViewPanel: t4.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: t7.q,
              "aria-label": r,
          })
        : null;
}
var ii = t(780338),
    il = t(782603),
    is = t(857071),
    ir = t(607508),
    ia = t(914703),
    io = t(37411);
function id(e) {
    let { channel: n } = e,
        t = (0, ir.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([is.A], () => null != n.guild_id && is.A.isLurking(n.guild_id));
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
            (0, l.jsx)(ia.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === io.CP.NO_MESSAGES ? ii.BellSlashIcon : il.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var ic = t(747926);
function iu(e) {
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
            return (0, l.jsx)(ih, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
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
function ih(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tz.A)(n, "Sidebar Overflow"),
        r = (0, tK.A)(n),
        a = (0, tJ.A)(n),
        o = (0, tZ.A)(n),
        d = (0, tB.A)(n),
        c = (0, tq.A)(n),
        u = (0, tQ.A)(n.id),
        h = (0, t$.A)(n),
        m = (0, tW.A)(n),
        A = (0, tY.A)(n),
        p = (0, t1.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, t0.A)(n),
        x = (0, tX.A)(n),
        f = (0, tV.$)(1e3);
    function I() {
        (0, t2.iN)(n.id);
    }
    function j(e) {
        let t = tF()(() => {
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
                        icon: ng.t,
                        trailingIndicator: { type: "icon", icon: ng.t },
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
                        icon: ng.t,
                        trailingIndicator: { type: "icon", icon: ng.t },
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
function im(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nh.Ay.Icon, {
            icon: tH.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, ic.xu)((0, t3.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(id, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(it, { channel: n }) : null,
                  (0, l.jsx)(iu, { channel: n }),
                  i,
              ],
          });
}
var iA = t(31717),
    ip = t(853742),
    ig = t(85190);
function ix(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([tc.A], () => tc.A.getGuild(i?.getGuildId())),
        o = (0, tP.Ay)(i),
        d = (0, tw.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, ip.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(tG.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(im, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iA.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tD.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, E.L3)(e, async () => {
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
                        null != i && (0, tk.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ig.T,
                children: (0, l.jsx)(tL.A, { channel: i, guild: a, chatInputType: nN.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iI = t(925166),
    ij = t(605117),
    iE = t(857253),
    iC = t(872363);
let iy = function (e, n) {
    nI.h.wait(() => {
        nI.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var ib = t(561446),
    i_ = t(300233),
    iv = t(499211),
    iN = t(468689),
    iT = t(529942),
    iS = t(739455),
    iR = t(709017);
function iO(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iR.t7,
        children: (0, l.jsxs)("div", {
            className: iR.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iR.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iR.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iR.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iT.rf)(n),
                                        iN.default.open(
                                            n,
                                            eo.BEX.ROLE_SUBSCRIPTIONS,
                                            void 0,
                                            eo.nd0.ROLE_SUBSCRIPTION_TIERS,
                                        ),
                                        (0, iS.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iM = t(599941),
    iP = t(29385),
    iL = t(950344),
    iD = t(217530),
    ik = t(162093),
    iw = t(325348);
function iG(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iP.e)({ guildId: n, channelId: t }),
        r = (0, iM.uk)(n),
        a = (0, iM.Tq)(n),
        o = (0, m.bG)([tc.A], () => tc.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tP.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, iL.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iw.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iw.__invalid_spinner }),
          })
        : (0, l.jsxs)(t_.Ar, {
              className: iw.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iw.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iw.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iD.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  ik.A,
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
var iU = t(138298),
    iF = t(940382),
    iH = t(761640);
function iV(e) {
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
        i = (0, m.bG)([iH.Ay], () => iH.Ay.getCurrentSidebarChannelId(n) === n, [n]),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(n)?.getGuildId(), [n]);
    return (0, l.jsx)(nh.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nk.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? iU.A.closeChannelSidebar(n)
                : iU.A.openChannelAsSidebar({
                      guildId: r,
                      channelId: n,
                      baseChannelId: n,
                      details: { type: iF.kk.CHAT },
                  });
        },
        selected: i,
        badge: t,
    });
}
var iB = t(284252);
function iY(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([iH.Ay], () => iH.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([nY.A], () => (nY.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(nh.In, {
        onClick: j.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nk.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iB.q : void 0,
        selected: t,
        badge: r,
    });
}
var iW = t(967198);
function iz(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([iH.Ay], () => iH.Ay.getSection(n)),
        i = (0, m.bG)([iW.A], () => iW.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nh.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                j.A.toggleMembersSection());
        },
        selected: s,
    });
}
var iq = t(187360),
    iK = t(366605),
    iX = t(945830);
let i$ = function (e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        [i, r] = s.useState(!1),
        a = (0, t6.aL)(),
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
                return (0, l.jsx)(iX.A, { ...e, onJump: h, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(nh.In, {
                    ...e,
                    ref: o,
                    onClick: d,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iK.t,
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
var iQ = t(306788),
    iJ = t(863922),
    iZ = t(822074),
    i0 = t(521732);
function i1(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, m.bG)([iZ.A], () => iZ.A.shouldShowTopicsBar());
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: iQ.K,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: i0.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iJ.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var i2 = t(885574),
    i3 = t(947094),
    i7 = t(919577),
    i9 = t(207777),
    i5 = t(422844),
    i6 = t(435470),
    i8 = t(892110),
    i4 = t(45494);
function le(e) {
    let { channel: n } = e,
        t = (0, i6.S4)(n),
        i = (0, m.bG)([i3.A], () => i3.A.hasHidden(n.id)),
        s = (0, i8.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, i5.R)(n.id),
        d = (0, m.bG)(
            [i9.A, i4.A],
            () => !!(i9.A.getThreadIds(n.id, r, a, o).length > 0) || !!(i4.A.getThreads(n.id, r, a, o).length > 0),
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
    return (0, l.jsx)(nh.In, {
        tooltip: u,
        icon: i2.CircleInformationIcon,
        onClick: function () {
            return i7.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var ln = t(290136),
    lt = t(975571),
    li = t(490094);
function ll() {
    let e = z.intl.string(li.default.pdipXI);
    return (0, l.jsx)(nh.In, {
        tooltip: e,
        icon: ln.CircleQuestionIcon,
        onClick: function () {
            window.open(lt.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var ls = t(742589),
    lr = t(43105),
    la = t(428689),
    lo = t(978940),
    ld = t(387755),
    lc = t(730852),
    lu = t(641703),
    lh = t(379848),
    lm = t(753727),
    lA = t(625075),
    lp = t(222692),
    lg = t(442353),
    lx = t(470710),
    lf = t(186111),
    lI = t(25578),
    lj = t(994500),
    lE = t(977997),
    lC = t(818023),
    ly = t(49999),
    lb = t(731854);
class l_ extends s.PureComponent {
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
                : lI.Ay.supports(lb.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lA.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nh.Ay.Icon, { icon: la.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(nh.Ay.Icon, {
            ref: this.iconRef,
            icon: lo._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lh.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lr.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lC.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(ly.i.USER_DISMISS),
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
            return ld.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lg.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lc.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tO.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: ly.i.AUTO }),
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
        (0, lg.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lp.A)();
    };
}
function lv(e) {
    let { channel: n } = e,
        t = (0, lm.A)(),
        i = (0, m.bG)([n_.A], () => n_.A.getMode(n.id)),
        s = (0, m.bG)([lE.A], () => lE.A.isInChannel(n.id)),
        r = (0, m.bG)([M.Ay], () => M.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lx.A], () => ({
            callActive: lx.A.isCallActive(n.id),
            callUnavailable: lx.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lj.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lj.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lj.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, t6.Us)(),
        g = [],
        x = (0, lu.A)(n.id),
        f = (0, m.bG)([lf.A], () => lf.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(l_, {
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
var lN = t(452015),
    lT = t(765178),
    lS = t(231483),
    lR = t(544231),
    lO = t(338510),
    lM = t(151119),
    lP = t(278941),
    lL = t(665909),
    lD = t(327337);
let lk = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lO.u)(n.id),
        r = (0, lM.S)(n.id),
        a = (0, lP.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lf.A], () => lf.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lT.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lR.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lL.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lL.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lT.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lR.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lL.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lL.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lR.xi)(n.id, [a.id]),
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
                    { modalKey: lD.V },
                ),
                (0, lL._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lL.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nh.Ay.Icon, {
                  icon: lS.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lw = t(262763),
    lG = t(406704),
    lU = t(576705);
let lF = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lm.A)(),
        i = (0, m.bG)([lE.A], () => lE.A.isInChannel(n.id)),
        r = (0, m.bG)([lE.A], () => !u().isEmpty(lE.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([lU.A], () => lU.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iv.A)(n.id),
        d = (0, lG.Id)(n),
        { enabled: c } = lG.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lw.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(nh.Ay.Icon, {
              icon: lo._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lH = t(812991),
    lV = t(47675),
    lB = t(999291);
function lY() {
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
function lW(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([iH.Ay], () => iH.Ay.getSection(n.id, n?.isDM())),
        s = (0, lB.Ay)(n.getRecipientId()),
        r = lY(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nh.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lH.n,
        onClick: function () {
            ((0, lV.am)({ displayProfile: s, isProfileOpen: !a }), j.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let lz = {};
class lq extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lz[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lz[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lz;
    }
}
let lK = new lq(nI.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lz[t];
        return null == i ? ((lz[t] = new Set()), lz[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lz[n.id] && !n.unavailable && (delete lz[n.id], !0);
    },
});
var lX = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l$ = t(376943),
    lQ = t(394953),
    lJ = t(683063),
    lZ = t(403581),
    l0 = t(241541),
    l1 = t(709066),
    l2 = t(87664),
    l3 = t(247676),
    l7 = t(695526),
    l9 = t(927813),
    l5 = t(427358),
    l6 = t(280450),
    l8 = t(851746),
    l4 = t(103411),
    se = t(945810);
let sn = (0, se.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var st = t(315629),
    si = t(347886),
    sl = t(303682),
    ss = t(224370),
    sr = t(544879);
function sa(e) {
    let { analyticsLocation: n, markAsDismissed: t, className: i } = e,
        { analyticsLocations: s } = (0, L.Ay)(n);
    return (0, l.jsxs)(st.h, {
        color: "blue",
        className: a()(ss.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsx)(nR.D, {
                className: ss.VN,
                "aria-label": z.intl.string(z.t.H2NPrR),
                onClick: function () {
                    t(ly.i.USER_DISMISS);
                },
                children: (0, l.jsx)(tH.P, { size: "xs", color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: ss.lj,
                children: [
                    (0, l.jsx)("img", { className: ss.Dp, src: sr.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: ss.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: ss.DD,
                                children: z.intl.string(z.t["DMie/y"]),
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: ss.rf,
                                children: z.intl.string(z.t.u0HAhn),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: ss.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: z.intl.string(z.t.Lm2nFc),
                    onClick: function () {
                        (t(ly.i.TAKE_ACTION),
                            (0, si.jM)({
                                startingScreen: sl.SelectFriendsModalScreens.SELECT_FRIENDS,
                                analyticsLocations: s,
                            }));
                    },
                }),
            }),
        ],
    });
}
var so = t(349420);
let sd = { cooldownDurationMs: 60 * l9.A.Millis.DAY };
function sc(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: sn.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                t = (0, l4.m)(),
                i = (0, m.bG)([l8.A], () => l8.A.getReferralsRemaining()),
                l = (0, m.bG)([l6.default], () => l6.default.getId()),
                s = (0, m.bG)(
                    [l5.A, lj.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === l || lj.A.isBlockedOrIgnored(e)) return !1;
                            let n = l5.A.getUserAffinity(e);
                            return null != n && null != n.communicationRank && n.communicationRank <= 20;
                        }),
                    [e.recipients, l],
                );
            return !!t && null != i && !(i <= 0) && !!n && !!s;
        })(n);
    return (0, l.jsx)(lh.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sd,
        groupName: ly.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sa, {
                      className: so.K,
                      analyticsLocation: P.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var su = t(403362);
t(696101);
let sh = [],
    sm = er.Ay.getEnableHardwareAcceleration();
function sA(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([lj.A], () => lj.A.getNickname(n.id)),
        h = (0, l2.A)(n.id),
        A = s.useRef(null);
    function p(e) {
        (0, E.L3)(e, async () => {
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
                    shouldAnimateStatus: sm,
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
function sp(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sg(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, L.Ay)(P.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lj.A, ee.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(su.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lj.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sh,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sh });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sp,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, l3.A)({ useNitroCapExperiment: !0 }),
        h = (0, l7.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(L.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(t_.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sc, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(lJ.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(lZ.t, {
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
                                o && (0, l.jsx)(l1.A, { type: l1.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sA,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lN.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: l0.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lN.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sx = t(322338),
    sf = t(898029),
    sI = t(36537);
function sj() {
    return (0, l.jsx)("div", {
        className: sI.zt,
        children: (0, l.jsx)("header", {
            className: sf.wL,
            children: (0, l.jsxs)("div", {
                className: sf.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sf.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sf.u1,
                            itemClassName: sf.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sE = t(747376),
    sC = t(163328),
    sy = t(425557),
    sb = t(270003),
    s_ = t(150934),
    sv = t(452027),
    sN = t(95477),
    sT = t(281595),
    sS = t(465532),
    sR = t(579872),
    sO = t(119031),
    sM = t(408018),
    sP = t(479909),
    sL = t(822610),
    sD = t(915089),
    sk = t(314307),
    sw = t(636922),
    sG = t(931664),
    sU = t(631576),
    sF = t(885386),
    sH = t(232835),
    sV = t(522602),
    sB = t(806150),
    sY = t(518960),
    sW = t(753738);
function sz(e, n) {
    return { type: e, message: n ?? null };
}
function sq(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sK = t(659617),
    sX = t(474078),
    s$ = t(636537),
    sQ = t(152367),
    sJ = t(147087);
async function sZ(e) {
    try {
        let n = await s$.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, s$.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var s0 = t(55294),
    s1 = t(143161),
    s2 = t(909833);
let s3 = nN.oU.THREAD_CREATION;
function s7(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: r } = (0, L.Ay)(P.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(L.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: s1.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iA.C.FirstThreadMessage }),
                          (0, l.jsx)(s9, { parentChannelId: n }),
                          (0, l.jsx)(s5, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function s9(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iA.A.getThreadSettings(n),
                t = iA.A.getDraft(n, iA.C.FirstThreadMessage).trim(),
                i = sV.A.getUploads(n, iA.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sR.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, ic.bA)(n);
                      },
                  })
                : (0, ic.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nh.Ay, {
        toolbar: (0, l.jsx)(nh.Ay.Icon, { icon: tH.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nh.Ay.Icon, { icon: sC.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nh.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function s5(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([M.Ay], () => M.Ay.messageGroupSpacing),
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
            let t = (0, m.bG)([iA.A], () => iA.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sS.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, sM.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iA.A.getDraft(e.id, iA.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sM.ur)(l)), n(iA.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iA.A.addChangeListener(t),
                        () => {
                            iA.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, sK.EN)(t),
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
                h = (0, sJ.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = sH.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await sZ(e);
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
                                icon: sQ.D,
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
                                  children: (0, l.jsx)(nO.K, {
                                      icon: sQ.D,
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
            messageError: E,
            submit: C,
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
                p = (0, s0.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: ic.JA,
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
                                (l = sG.A.getStickerPreview(n.id, s3.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sV.A.getUploads(n.id, iA.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sz(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sz(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, sB.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: s3,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), sz(1, (0, sW.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sz(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sU.x5)(n.id, s3.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, sK.Iy)(c, g) ? sy.t : sC.y;
    return (0, l.jsx)("div", {
        className: s1.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(s1.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: s1.Zd,
                children: [
                    (0, l.jsx)(t_.Ip, {
                        className: s1.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: s1.bv,
                            children: [
                                (0, l.jsxs)(sk.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(s2.P0, s1.P0),
                                            children: (0, l.jsx)(b, { className: s2.Kk }),
                                        }),
                                        (0, l.jsxs)(sb.n, {
                                            children: [
                                                (0, l.jsx)(s8, {
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
                                                (0, l.jsx)(s6, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(re, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: s1.Eh,
                        children: [
                            (0, l.jsx)(s4, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: E,
                            }),
                            (0, l.jsx)(sO.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: s1.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function s6(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, sK.Iy)(t, s),
        a = (0, l.jsx)(s_.S, {
            disabled: s === sK.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === sK.jk.Disabled
        ? null
        : (0, l.jsx)(sv.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function s8(e) {
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
        h = sq(r, { content: u }),
        m = (0, sK.l1)(n, t),
        A = null != t && !d,
        p = (0, sD.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sN.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, sX.A)(e, !1) }), "" !== e ? O.A.startTyping(n.id) : O.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, sX.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function s4(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sS.A.saveDraft(n.id, t, iA.C.FirstThreadMessage),
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
    let x = (0, m.bG)([lU.A], () => lU.A.can(eo.xBc.ATTACH_FILES, n)),
        f = sq(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sL.A, { channelId: n.id, type: s3, canAttachFiles: x }),
            (0, l.jsx)("div", { className: s1.xN, children: (0, l.jsx)(sT.U, { error: f }) }),
            (0, l.jsx)(sP.Ay, {
                type: s3,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(s1.gM, s1.Yy),
                innerClassName: a()(s1.SL, { [s1.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: sY.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function re(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([sH.A], () => (null == t ? null : sH.A.getMessage(n.id, t))),
        s = sF.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sw.A, {
              className: s1.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rn = t(305866),
    rt = t(707539),
    ri = t(702513),
    rl = t(272736);
function rs(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, e4.ni)(n),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            (t || (0, rt.D3)("Popout"), i(!t));
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
            return (0, l.jsx)(rn.l, {
                children: (0, l.jsx)(ri.A, { className: rl.T, channel: n, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.In, {
                ...e,
                ref: r,
                className: rl.Kk,
                onClick: d,
                icon: sC.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: a,
                selected: t,
            });
        },
    });
}
var rr = t(40389),
    ra = t(148494),
    ro = t(56562);
function rd(e) {
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
            return (0, l.jsx)(rc, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
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
function rc(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tB.A)(n),
        r = (0, tq.A)(n),
        a = (0, tQ.A)(n.id),
        o = (0, t$.A)(n),
        d = (0, t1.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, tY.A)(n),
        h = (0, tW.A)(n),
        A = (0, tz.A)(n, "Toolbar Overflow"),
        p = (0, tK.A)(n),
        g = (0, rr.A)(n),
        x = (0, t0.A)(n),
        f = (0, tX.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(ns.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      ra.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: ro.vx.INSTANT });
                  },
              })
            : null,
        j = sF.SY.useSetting(),
        E = (0, m.bG)([lE.A], () => !u().isEmpty(lE.A.getVoiceStatesForChannel(n.id))),
        C = (0, m.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
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
                    !j || E || C
                        ? null
                        : (0, l.jsx)(ns.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, ic.JA)(n);
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
var ru = t(332456),
    rh = t(973854),
    rm = t(62502);
function rA(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([tc.A], () => tc.A.getGuild(d?.getGuildId())),
        h = (0, tP.Ay)(d),
        A = (0, tw.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lE.A], () => null != n && !u().isEmpty(lE.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nI.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, t2.N9)(n, { source: io.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, ru.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, eR.qL)(d.id), channel_view: o }),
                (0, rh.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(tG.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(im, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iA.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tD.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, E.L3)(e, async () => {
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
                        null != d && (0, t2.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rm.T,
                children: (0, l.jsx)(tL.A, { channel: d, guild: c, chatInputType: nN.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rp = t(210714),
    rg = t(402860),
    rx = t(707554),
    rf = t(140735),
    rI = t(590180),
    rj = t(372320),
    rE = t(562153);
let rC = (0, se.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ry(e) {
    return rC.useConfig({ location: e }).enabled;
}
var rb = t(215530),
    r_ = t(454719),
    rv = t(736653),
    rN = t(311016),
    rT = t(480335),
    rS = t(713517),
    rR = t(397562),
    rO = t(183555),
    rM = t(718019),
    rP = t(365607),
    rL = t(915614),
    rD = t(308244),
    rk = t(743987),
    rw = t(900179),
    rG = t(946356),
    rU = t(465829),
    rF = t(35241),
    rH = t(587168),
    rV = t(442228),
    rB = t(744808);
let rY = (0, se.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rW = t(827428);
function rz(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function rq(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = rY.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lV.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rW.lS,
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
              className: rW.qr,
              children: (0, l.jsx)(nR.D, {
                  onClick: o,
                  className: rW.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rW.xQ, children: [(0, l.jsx)(rB.A, { frame: i, filterLayer: rz }), d] })
        : d;
}
var rK = t(518477),
    rX = t(996988),
    r$ = t(207634),
    rQ = t(561419),
    rJ = t(396095);
function rZ(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rN.A)(n.id),
        o = (0, lB.Ay)(n.id),
        d = (0, rv.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, L.Ay)(P.A.USER_PROFILE_SIDEBAR),
        h = (0, rO.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rR.A)(u, o, rK.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rS.A)(m);
    function g() {
        (0, rg.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(L.f5, {
        value: u,
        children: (0, l.jsx)(rO.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rG.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: rX.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(rQ.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(t_.d_, {
                        className: i ? rQ.BE : void 0,
                        children: [
                            (0, l.jsx)(rH.A, { children: (0, l.jsx)(rF.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: rQ.wx,
                                children: [
                                    (0, l.jsx)(rL.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: rX.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rM.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: r$.T[rX.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: rJ.rf,
                                children: [
                                    (0, l.jsx)(rU.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rE.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rP.A, {
                                            displayProfile: o,
                                            themeType: rX.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(rV.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rw.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rk.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rG.A.Overlay, {
                                              className: rJ.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rw.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rD.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rw.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rk.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(rq, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rT.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var r0 = t(331322),
    r1 = t(249790),
    r2 = t(254828),
    r3 = t(783123),
    r7 = t(966430);
function r9(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lB.Ay)(n.id),
        o = (0, rv.Ay)(),
        d = (0, m.bG)([lj.A], () => lj.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, L.Ay)(d ? P.A.BLOCKED_PROFILE_PANEL : P.A.IGNORED_PROFILE_PANEL),
        u = (0, rO.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rR.A)(c, a, rK.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(L.f5, {
        value: c,
        children: (0, l.jsx)(rO.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rG.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: rX.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(t_.d_, {
                    children: (0, l.jsxs)("div", {
                        className: r7.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: r7.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: r7.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: r7.N1,
                                        children: [
                                            (0, l.jsx)(r1.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rE.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(r0.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(r3.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lV.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(r2.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lV.Wn)({
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
    r6 = t(717421),
    r8 = t(31956),
    r4 = t(673843),
    ae = t(594832),
    an = t(321191),
    at = t(679492),
    ai = t(439053),
    al = t(312381),
    as = t(657538),
    ar = t(984545),
    aa = t(193738),
    ao = t(211031),
    ad = t(394816),
    ac = t(695366),
    au = t(922590),
    ah = t(821269),
    am = t(93246),
    aA = t(351906),
    ap = t(383199),
    ag = t(559506),
    ax = t(361311),
    af = t(931481),
    aI = t(791556),
    aj = t(501193),
    aE = t(383448),
    aC = t(646986),
    ay = t(243166),
    ab = t(812993),
    a_ = t(123292),
    av = t(840411);
let aN = (0, se.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aT = t(666810),
    aS = t(394300),
    aR = t(575593),
    aO = t(44120),
    aM = t(75678),
    aP = t(317560),
    aL = t(99161),
    aD = t(827258),
    ak = t(661492),
    aw = t(146423),
    aG = t(662349),
    aU = t(479026),
    aF = t(636374),
    aH = t(699976),
    aV = t(202541),
    aB = t(733484),
    aY = t(880465);
function aW(e) {
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
        { trackUserProfileWishlistAction: g } = (0, rO.NJ)(),
        x = ry("DMSidePanelWishlistItemCard") ? aH.y.SIZE_78 : aH.y.SIZE_90,
        f = aH.Z[x],
        I = s.useCallback(() => {
            (g({
                action: rK.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        j = s.useCallback(() => {
            (g({
                action: rK.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                m());
        }, [m, t.id, r, t.productLine, g]),
        {
            onBodyClick: E,
            onOverlayClick: C,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, aF.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: j }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: aB.kL,
        children: (0, l.jsxs)(aw.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(aB.Nr, o),
            skuPreviewStyle: a()(aB.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: E,
            "aria-label":
                ((n = b ? (0, ak.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, ak.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(aD.A, { className: aB.Pf }),
                y &&
                    (0, l.jsx)(aG.A, {
                        spec: f,
                        onClick: C,
                        isHoveringOrFocusing: N,
                        label: _,
                        icon: _.length < 6 ? v : void 0,
                    }),
                A?.(y && N),
            ],
        }),
    });
}
function az(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, L.Ay)(
            ...(i ?? []),
            P.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, aL.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: aV.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, aP.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: aV.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(aW, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function aq(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, aO.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: aV.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, aU.e)({ sku: n, giftRecipient: t, giftingOrigin: aV.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(aB.ML, {
                    [aB.M]: n?.tenantMetadata?.collectibles?.type === aR.R.AVATAR_DECORATION,
                    [aB.Hm]: n?.tenantMetadata?.collectibles?.type === aR.R.PROFILE_EFFECT,
                    [aB.hH]: n?.tenantMetadata?.collectibles?.type === aR.R.PROFILE_FRAME,
                    [aB.qF]: n?.tenantMetadata?.collectibles?.type === aR.R.NAMEPLATE,
                    [aB.l2]: n?.tenantMetadata?.collectibles?.type === aR.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(aW, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function aK(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, aM.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: aV.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === ae.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(aW, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(aY.MO, { [aB.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(aB.fi, { [aB.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(aB.p7, { [aB.SW]: h.length >= 10, [aB.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function aX(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(az, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(aq, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(aK, { sku: n, ...t });
        default:
            return null;
    }
}
var a$ = t(158045),
    aQ = t(249203),
    aJ = t(419731),
    aZ = t(695904),
    a0 = t(116331),
    a1 = t(713348),
    a2 = t(535089),
    a3 = t(815637);
function a7(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, L.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rO.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, a0.A)(t),
        g = (0, m.bG)([aQ.A], () => aQ.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: rK.RP.WISHLIST }), i());
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
            let e = f.slice(0, 3).map((e) => ({ item: e, source: ae.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => a$.Ay.isPremiumSku(e.skuId));
                if (!a$.Ay.isPremiumAtLeast(t.premiumType, aV.PremiumTypes.TIER_2) && !n) {
                    let n = aS.A.fromSKU((0, av.rI)());
                    null != n && e.push({ item: n, source: ae.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, t.premiumType]),
        E = (0, s.useMemo)(
            () =>
                new Set(
                    j.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [j],
        ),
        C = (0, a2.A)({ wishlistId: r ?? null, onAction: I, productLines: E }),
        y = (0, s.useMemo)(
            () =>
                j
                    .map((e, n) => {
                        let { item: i, source: s } = e;
                        return null == i.sku
                            ? null
                            : (0, l.jsx)(
                                  aX,
                                  {
                                      sku: i.sku,
                                      index: n,
                                      wishlistOwner: t,
                                      wishlistId: r,
                                      analyticsLocations: o,
                                      onViewWishlist: x,
                                      source: s,
                                      isNew: h && (0, aJ.f3)(i.addedAt, g),
                                  },
                                  i.skuId,
                              );
                    })
                    .filter(su.Vq),
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
              children: (0, l.jsxs)(rG.A.Overlay, {
                  ref: C,
                  className: a3.kL,
                  children: [
                      p && (0, l.jsx)(aZ.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: a3.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: a3.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(ab.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: nw.A.colors.BADGE_BACKGROUND_BRAND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(a_.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rx.F, { children: (0, l.jsx)("div", { className: a3.vY, children: y }) }),
                  ],
              }),
          });
}
function a9(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = aN.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, a1.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(aT.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(a7, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
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
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lj.A], () => ({
            relationshipType: lj.A.getRelationshipType(n.id),
            originApplicationId: lj.A.getOriginApplicationId(n.id),
        })),
        h = (0, au.fi)(n.id),
        A = (0, ah.q)({ userId: n.id }),
        p = (0, m.bG)([aA.A], () => aA.A.hidePersonalInformation),
        g = (0, m.bG)([an.A], () => an.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([an.A], () => ({ defaultWishlistId: an.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: j } = (0, ae.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, r4.A)(I);
    let E = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: rJ.rf,
        children: [
            (0, l.jsx)(ag.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: rJ.pq,
                children: [
                    (0, l.jsx)(rU.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rE.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(ay.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rP.A, {
                            displayProfile: i,
                            themeType: rX.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aI.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rG.A.Overlay, {
                    children: (0, l.jsx)(af.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rG.A.Overlay,
                    {
                        children: (0, l.jsx)(af.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aE.A, { user: n }),
            i?.private &&
                (0, l.jsx)(rG.A.Overlay, { children: (0, l.jsx)(aj.A, { username: rE.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(rG.A.Overlay, {
                    className: rJ.Lw,
                    children: (0, l.jsx)(rw.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: ac.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(am.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(rV.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rw.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rk.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: rJ.kR,
                children: [
                    o && x && (0, l.jsx)(as.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aC.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(ap.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rw.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(ax.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rG.A.Overlay, {
                              className: rJ.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rw.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rD.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(ap.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rw.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(ax.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rw.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rk.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(a9, {
                            profileOwner: n,
                            unownedWishlistItems: E,
                            wishlistId: f,
                            isLoading: j,
                            onClick: () => {
                                d?.({ tabSection: rK.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var a6 = t(114212),
    a8 = t(913453),
    a4 = t(229187),
    oe = t(21241),
    on = t(503062),
    ot = t(51943),
    oi = t(847374),
    ol = t(320448),
    os = t(723200);
function or(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rO.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? oi.a : ol._;
    return (0, l.jsxs)("section", {
        className: os.uW,
        children: [
            (0, l.jsxs)(nR.D, {
                className: a()(os.wx, os.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(os.p_, r), children: i }),
        ],
    });
}
var oa = t(341278);
function oo(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(),
        { context: s } = (0, rO.NJ)(),
        r = (0, tV.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, a8.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rG.A.Overlay, {
              className: oa.Lw,
              children: [
                  u &&
                      (0, l.jsx)(or, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oa.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  ot.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, td.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oe.A, { className: oa.yF }),
                  c &&
                      (0, l.jsx)(or, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oa.p_,
                          onExpand: () => (0, a4.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oa.nC,
                                                children: [
                                                    (0, l.jsx)(a6.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(a6.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            on.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, rg.openUserProfileModal)({
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
function od(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lB.Ay)(n.id),
        c = (0, rv.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, L.Ay)(P.A.USER_PROFILE_SIDEBAR),
        p = (0, rO.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rR.A)(A, d, rK.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rS.A)(g),
        I = (0, at.fC)(),
        j = (0, rj.A)(d?.profileFrame?.skuId);
    (0, r8.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let E = (0, r6.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, rg.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([an.A], () => ({ defaultWishlistId: an.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, ae.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, r4.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(L.f5, {
        value: A,
        children: (0, l.jsx)(rO.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(at.Hl, {
                value: I,
                children: (0, l.jsxs)(rG.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: rX.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(rQ.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(al.A, {}),
                        null != I.interactionType && (0, l.jsx)(r5.animated.div, { style: E, className: rQ.tB }),
                        (0, l.jsxs)(t_.d_, {
                            className: a()(r && rQ.BE, !r && null != j && rQ.It),
                            children: [
                                (0, l.jsxs)(rH.A, {
                                    children: [
                                        (0, l.jsx)(aa.A, { user: n, themeType: rX.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(ar.A, { user: n }) : (0, l.jsx)(ao.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: rQ.wx,
                                    children: [
                                        (0, l.jsx)(rL.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: rX.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: rQ.vK,
                                        }),
                                        (0, l.jsx)(ai.A, { userId: n.id, className: rQ.oR }),
                                        (0, l.jsx)(rM.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r$.T[rX.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(ad.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: rX.d.SIDEBAR,
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
                                    onOpenProfile: o ? void 0 : C,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: rQ.sJ,
                                        children: (0, l.jsx)(as.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: rQ.vS,
                                        children: (0, l.jsx)(a9, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: rK.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oo, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(rq, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: j,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rT.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != j && (0, l.jsx)(rB.A, { frame: j, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oc = t(901600);
function ou(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lY(),
        [o, d] = (0, rb.A)(t),
        [c, u] = s.useState(!1),
        h = ry("UserProfileSidebarRenderer"),
        A = (0, lB.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rj.A)(p),
        x = (0, m.bG)([rI.A], () => rI.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, r_.A)(i, e) : (0, r_.A)(t, void 0, e);
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
        I = rE.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oc.H : void 0,
        children: (0, l.jsx)(rx.F, {
            component: (0, l.jsx)(rf.A, {
                children: (0, l.jsx)(rx.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(r9, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(rZ, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(od, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oh = t(522556),
    om = t(225315),
    oA = t(684407),
    op = t(95701),
    og = t(919638),
    ox = t(763827),
    of = t(812771),
    oI = t(506309),
    oj = t(598748),
    oE = t(681154),
    oC = t(975460),
    oy = t(587895),
    ob = t(429913),
    o_ = t(201718),
    ov = t(339580),
    oN = t(633075),
    oT = t(903209),
    oS = t(382483),
    oR = t(385113);
let oO = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function oM(e) {
    let [n, t] = s.useState(new Set()),
        i = s.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []);
    return (0, l.jsx)(oO.Provider, {
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
                        { appsWithConfigs: j, isLoadingConfigs: E } =
                            ((t = sF.Q_.useSetting()),
                            s.useEffect(() => {
                                (0, oS.Wq)().catch(() => {});
                            }, []),
                            s.useEffect(() => {
                                t && (0, oS.i$)().catch(() => {});
                            }, [t]),
                            (i = (0, m.bG)([oR.A], () => oR.A.getFeaturedFetchState())),
                            (l = (0, m.bG)([oR.A], () => oR.A.getDeveloperFetchState())),
                            (r = (0, m.yK)([oR.A], () => oR.A.getFeaturedApplicationIds())),
                            (a = (0, m.yK)([oR.A], () => oR.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                isLoadingConfigs:
                                    i === oR.e.NOT_FETCHED ||
                                    i === oR.e.FETCHING ||
                                    (t && (l === oR.e.NOT_FETCHED || l === oR.e.FETCHING)),
                            }),
                        {
                            widgetApps: C,
                            userIdsWhoMightHaveWidgetData: y,
                            isFetchingApplications: b,
                        } = ((o = s.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === oE.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => n.has(e.id)) ?? [],
                            [e, n],
                        )),
                        (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                        (c = (0, m.bG)(
                            [oy.A],
                            () =>
                                d.length > 0 &&
                                d.some(
                                    (e) =>
                                        oy.A.isFetchingApplication(e) ||
                                        (null == oy.A.getApplication(e) && !oy.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (u = (0, ob.A)(d)),
                        (h = s.useMemo(
                            () =>
                                Object.fromEntries(
                                    u
                                        .filter(su.Vq)
                                        .map((e) => [e.id, (0, oC.t)(e)])
                                        .filter(su.QE)
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
                            ((p = (0, m.cf)([ov.A], () =>
                                Object.fromEntries(y.map((e) => [e, ov.A.getUserIdentities(e)]).filter(su.QE)),
                            )),
                            (g = (0, m.bG)([ov.A], () =>
                                y.some((e) => ov.A.getFetchState(e) === ov.e.NOT_FETCHED || ov.A.isFetchingUser(e)),
                            )),
                            s.useEffect(() => {
                                y.length > 0 && o_.P.fetchMany(...y.map((e) => [e]));
                            }, [y]),
                            { identitiesByUserId: p, isLoadingIdentities: g }),
                        { profilesByUserId: N, isLoadingProfiles: T } =
                            ((x = (0, m.cf)([an.A], () =>
                                Object.fromEntries(y.map((e) => [e, an.A.getUserProfile(e) ?? null]).filter(su.QE)),
                            )),
                            (f = (0, m.yK)([an.A], () =>
                                y.filter((e) => null == an.A.getUserProfile(e) && !an.A.isFetchingProfile(e)),
                            )),
                            (I = (0, m.bG)([an.A], () => y.some((e) => an.A.isFetchingProfile(e)))),
                            s.useEffect(() => {
                                for (let e of f) (0, oT.A)(e);
                            }, [f]),
                            { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                        S = (0, m.cf)(
                            [oR.A],
                            () => Object.fromEntries([...j].map((e) => [e, oR.A.getConfig(e)]).filter(su.QE)),
                            [j],
                        ),
                        R = E || b || v || T,
                        O = s.useMemo(() => {
                            if (!R && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== oE.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let n = C[e.extra.application_id] ?? null;
                                    if (null == n) return e;
                                    let t = S[n.id] ?? null;
                                    if (null == t || null == t.surfaces[oj.m.ACTIVITY_ACCESSORY]) return e;
                                    let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                    if (i?.profile == null) return e;
                                    let l = N[e.author_id]?.widgets?.some((e) => (0, oN.E)(e, n.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                    };
                                });
                        }, [R, e, C, S, _, N]),
                        [M, P] = s.useState(O);
                    return (
                        s.useEffect(() => {
                            R || P(O);
                        }, [R, O]),
                        M
                    );
                })(e, n),
        },
        children: e.children,
    });
}
var oP = t(900797),
    oL = t(180170),
    oD = t(435738),
    ok = t(38055);
let ow = "content-inventory-feed",
    oG = `${ow}-settings`,
    oU = `${ow}-toggle`;
var oF = t(569709);
let oH = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: a, expandedCount: o } = e,
            d = (0, m.bG)([oD.A], () => oD.A.hidden),
            u = (0, c.omit)((0, C.rm)(oG), ["role", "tabIndex"]),
            h = (0, c.omit)((0, C.rm)(oU), ["role", "tabIndex"]),
            A = s.useCallback((e) => {
                (0, E.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                    return () => (0, l.jsx)(e, { closePopout: E.Z_ });
                });
            }, []),
            p = s.useCallback(() => (d ? (0, oL.Il)() : o > 3 ? r() : (0, eo.tEg)()), [d, o, r]);
        return (0, l.jsxs)(k.A, {
            className: ec.lL,
            children: [
                (0, l.jsx)(rf.A, { children: z.intl.format(z.t.Uaqbke, { title: i, count: o }) }),
                (0, l.jsxs)("div", {
                    className: oF.N1,
                    children: [
                        (0, l.jsx)(nR.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, l.jsxs)("span", { children: [i, " \u2014 ", o] }),
                        }),
                        (0, l.jsx)(ok.A, { ...u }),
                        (0, l.jsx)(nR.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: oF.AN,
                            children: (0, l.jsx)("span", {}),
                        }),
                        o <= 3 && !d
                            ? null
                            : ((n = d
                                  ? (0, l.jsx)(oP.t, { className: oF.wT })
                                  : a
                                    ? (0, l.jsx)(oi.a, { className: oF.wT })
                                    : (0, l.jsx)(ol._, { className: oF.wT })),
                              (0, l.jsx)(nR.D, {
                                  ...h,
                                  onClick: p,
                                  tag: "span",
                                  "aria-label": z.intl.string(a && !d ? z.t.iTcuma : z.t.dcl9MQ),
                                  "aria-expanded": !d && a,
                                  className: oF.wT,
                                  children: n,
                              })),
                    ],
                }),
            ],
        });
    }),
    oV = function () {
        return null;
    };
var oB = t(963307),
    oY = t(424994);
let oW = et.default.track;
function oz(e, n) {
    oW(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: oY.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var oq = t(468581),
    oK = t(808666),
    oX = t(414499),
    o$ = t(323384),
    oQ = t(55730),
    oJ = t(765379),
    oZ = t(146779),
    o0 = t(284525),
    o1 = t(482030),
    o2 = t(627363),
    o3 = t(583846),
    o7 = t(506326);
t(333007);
var o9 = t(342952),
    o5 = t(315710),
    o6 = t(276293),
    o8 = t(935063),
    o4 = t(778712),
    de = t(696986),
    dn = t(97808),
    dt = t(738188),
    di = t(983851),
    dl = t(31300),
    ds = t(308528),
    dr = t(401843),
    da = t(375499),
    dd = t(429433),
    dc = t(324688);
let du = (0, op.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dh(e) {
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
        [p, g] = s.useState((0, sM.x7)("")),
        x = nN.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sP.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(dc.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? du,
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
                : (t(n), A(""), g((0, sM.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dm(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rv.Ay)(),
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
                            children: (0, l.jsx)(dd.C, {
                                messageId: eo.dJq,
                                channel: du,
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
                        className: dc.mJ,
                        children: (0, l.jsx)(da.A, {
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
var dA = t(402216),
    dp = t(822123),
    dg = t(409626),
    dx = t(692969),
    df = t(711589),
    dI = t(607407),
    dj = t(832163),
    dE = t(533562),
    dC = t(805901),
    dy = t(565645);
t(267889);
var db = t(7584);
(t(850992), t(690521));
var d_ = t(806931),
    dv = t(307731),
    dN = t(866780);
function dT(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rS.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(nR.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dC.c, {
                config: da.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(r5.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dy.A, {
                            className: a()(dN.Zg, r, { [dN.c4]: t }),
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
(dv.EmojiIntention.CHAT,
    [
        db.Ay.getByName("thumbsup"),
        db.Ay.getByName("eyes"),
        db.Ay.getByName("laughing"),
        db.Ay.getByName("watermelon"),
        db.Ay.getByName("fork_and_knife"),
        db.Ay.getByName("yum"),
    ].filter(su.Vq));
var dS = t(636585),
    dR = t(543465),
    dO = t(607567),
    dM = t(774926),
    dP = t(20805),
    dL = t(22869),
    dD = t(623671),
    dk = t(428249),
    dw = t(327098),
    dG = t(576757),
    dU = t(202195),
    dF = t(140651),
    dH = t(131607),
    dV = t(345394);
let dB = function (e) {
    let { children: n } = e,
        [t, i] = (0, dH.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(ly.i.USER_DISMISS);
    }, [i]);
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lr.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: dV.A },
                  }),
              ],
          });
};
var dY = t(315246),
    dW = t(866323),
    dz = t(339190),
    dq = t(655214);
function dK() {
    return (0, l.jsxs)("div", {
        className: dq.oR,
        children: [
            (0, l.jsx)(g.y, { type: g.t.SPINNING_CIRCLE_SIMPLE, className: dz.S }),
            (0, l.jsx)(_.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: z.intl.string(z.t["5z/hlE"]),
            }),
        ],
    });
}
let dX = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([M.Ay], () => M.Ay.useReducedMotion),
        r = (0, dW.p)(
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
                        ? (0, l.jsx)(nL.y, {
                              message: z.intl.string(z.t.fjcCk5),
                              type: nD.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, l.jsx)(nL.y, {
                              message: "",
                              type: nD.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, l.jsx)(dK, {}) },
                          }),
                }),
        ),
    });
};
var d$ = t(381941),
    dQ = t(231188);
let dJ = (0, nJ.Fe)({
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
                t.e("263406"),
                t.e("1955"),
                t.e("341161"),
                t.e("410526"),
                t.e("202985"),
                t.e("603619"),
                t.e("470126"),
                t.e("128804"),
                t.e("71151"),
                t.e("227853"),
                t.e("286615"),
                t.e("311541"),
                t.e("472847"),
                t.e("870088"),
                t.e("300641"),
                t.e("932020"),
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
                t.e("327439"),
                t.e("685673"),
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
                t.e("793716"),
                t.e("910486"),
                t.e("221856"),
                t.e("678157"),
                t.e("147134"),
                t.e("325675"),
                t.e("996481"),
                t.e("331988"),
                t.e("40291"),
                t.e("733115"),
                t.e("397270"),
                t.e("373122"),
                t.e("217951"),
                t.e("293159"),
                t.e("755936"),
                t.e("209338"),
                t.e("434539"),
                t.e("927875"),
                t.e("833703"),
                t.e("256274"),
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
                t.e("255580"),
                t.e("608557"),
                t.e("649362"),
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
    dZ = s.createContext(void 0);
function d0(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, o5.tj)(t),
        (0, l.jsx)(dZ.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: dQ.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function d1(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, dF.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(dQ.ZK, e, i), style: s, children: n }),
        })
    );
}
function d2(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: dQ.$m, children: n });
}
function d3(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [j, E] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [lU.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lU.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: O } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, dU.A)(t),
                o = (0, tP.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iv.A)(n?.id),
                c = (0, m.bG)([tc.A], () => (null != a ? tc.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dO.Ay], () => (null != a ? dO.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lE.A], () => lE.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && dR.Ay.isChannelMuted(null, n),
                            i = lj.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(dt.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: dQ.vb,
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
                            className: dQ.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(nR.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, t2.iN)(a.id), i?.(a));
                                        },
                                        className: dQ.I3,
                                        children: [
                                            (0, l.jsx)(tr.Ay, {
                                                guild: c,
                                                size: tr.Ay.Sizes.SMOL,
                                                className: dQ.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(ol._, {
                                                size: "xxs",
                                                color: nw.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(di.H, { size: "xs", color: nw.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: dQ.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dS.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dn.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: o4._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: dQ.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(de.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lw.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dl.k : di.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: M } = (0, dw.A)(h),
        P =
            ((n = M),
            (t = (0, m.bG)([tc.A], () => tc.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tP.Ay)(i)),
            null != n && null != t && null != i && op.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: dQ.kP,
                              children: [
                                  (0, l.jsxs)(nR.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, t2.iN)(i.id),
                                      className: dQ.I3,
                                      children: [
                                          (0, l.jsx)(tr.Ay, {
                                              guild: t,
                                              size: tr.Ay.Sizes.SMOL,
                                              className: dQ.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(ol._, {
                                              size: "xxs",
                                              color: nw.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(o6.N, { size: "xs", color: nw.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: dQ.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dS.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dn.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: o4._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: dQ.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(de.h, { size: 16 }),
                      ],
                  })
                : null),
        L = null != O && 0 === p.length ? [O] : p,
        D = L.length > 0,
        k = L.length >= 2,
        [w, G] = s.useState(!D),
        U = rE.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tP.Ay)(o, !0),
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
                    surface_type: oY.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, tO.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                j)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await ds.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: oY.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, tO.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), j))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await ds.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? oY.PA.DM_REACTION_MESSAGE_SENT : oY.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, dk.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: d$.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, t));
    }
    let q = g ?? R ?? P;
    function K() {
        (E((e) => !e), w && C?.focus());
    }
    function X(e) {
        (G(e), e && C?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(dX, { sent: T, shown: v, className: dQ.Jt }),
            q ??
                (0, l.jsx)(dB, {
                    children: (0, l.jsxs)("div", {
                        className: dQ.T7,
                        children: [
                            (0, l.jsx)(d7, { channel: o, onClickSuggestion: B }),
                            (0, l.jsx)(dm, { onSelectEmoji: B }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? dQ.P2 : dQ.VE,
                children: [
                    (0, l.jsx)(dh, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: j ? o : void 0,
                        showEmojiButton: null != q,
                        className: dQ.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: V,
                                      children: (0, l.jsx)(nR.D, {
                                          className: dQ.wD,
                                          onClick: K,
                                          children: j
                                              ? (0, l.jsx)(o6.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(o8.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(nR.D, {
                            onClick: () => X(!1),
                            className: dQ.i3,
                            children: (0, l.jsx)(tH.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: nw.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: dQ.fh,
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
let d7 = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!M.Ay.keyboardModeEnabled && !i,
        o = (0, dp.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tu._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(dT, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: dQ.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function d9(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, dG.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, dU.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: dQ.MH,
        children: [
            (0, l.jsxs)("div", {
                className: dQ.WP,
                children: [
                    (0, l.jsx)(o9.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: o4._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(de.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(dQ.Xn, dQ.zA),
                        children: z.intl.format(t, {
                            user0: rE.Ay.getName(o, n?.id, g[0]),
                            user1: rE.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(dQ.Mj, dQ.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    dL.A,
                                    {
                                        textClassName: a()(dQ.Mj, dQ.nk),
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
                                    dL.A,
                                    {
                                        textClassName: a()(dQ.Mj, dQ.nk),
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
            null != p && (0, l.jsx)(dA.Ay, { size: dA.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(dY.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function d5(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(nR.D, { className: dQ.Zw, onClick: t, children: n });
}
function d6(e) {
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
        I = (0, dP.zD)(f),
        j = I ? f.extra?.application_id : void 0,
        E = (0, dE.W)();
    null != E && (j = E);
    let C = (0, dx.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : j,
                source: dg.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(oY.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dM.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dj.A], () => dj.A.getDetectableIdsToApplicationIds()),
        N = I ? C : void 0,
        T = s.useContext(dZ);
    return (0, l.jsxs)("div", {
        className: dQ.au,
        children: [
            (0, l.jsx)(d9, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(d1, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: dQ.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: dQ.Fb,
                                children: (0, l.jsx)(dD.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dD.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: dQ.iC,
                                children: [
                                    (0, l.jsx)(d5, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(dQ.$2, { [dQ.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(d5, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dQ.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(de.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: dQ.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != j && null != v[j]
                ? (0, l.jsx)(dJ, {
                      className: dQ.zu,
                      applicationId: j,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aH.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function d8(e) {
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
        { actionString: p, canWatch: g } = (0, df.K)(a),
        { entry: x } = A,
        f = (0, dP.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        j = (0, dE.W)();
    null != j && (I = j);
    let E = (0, dx.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: dg.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(oY.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? E : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, dw.A)(x),
        { largeImage: N, smallImage: T } = (0, dM.D8)(y, b ?? v),
        { largeImage: S } = (0, dM.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        O = (0, m.bG)([dj.A], () => dj.A.getDetectableIdsToApplicationIds()),
        M = s.useContext(dZ);
    return (0, l.jsxs)("div", {
        className: dQ.au,
        children: [
            (0, l.jsx)(d9, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(d1, {
                backgroundImgSrc: S?.src,
                className: dQ.uR,
                children: [
                    (0, l.jsx)(d5, {
                        onClick: g
                            ? () => {
                                  (lc.default.selectVoiceChannel(a.channelId), (0, dr.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: dQ.nh,
                            children: [
                                (0, l.jsx)(dI.A, { className: dQ.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: dQ.NE,
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
                        className: dQ.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: dQ.Fb,
                                    children: (0, l.jsx)(dD.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: dD.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: dQ.gv,
                                children: [
                                    (0, l.jsx)(d5, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: M,
                                            variant: "heading-md/semibold",
                                            className: dQ.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(d5, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dQ.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(de.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != O[I]
                ? (0, l.jsx)(dJ, {
                      className: dQ.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aH.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var d4 = t(299846);
let ce = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, d4.u)(t);
    function u() {
        (0, o1.hg)(t.extra.application_id);
    }
    let { data: h } = (0, o2.YY)(t.extra.application_id),
        m = (0, oZ.Ay)({ application: h, analyticsLocations: [P.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(o7.iT, { location: o7.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(d6, {
            channel: n,
            userDescription: (0, o3.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, oQ.A)(d, eo.jUm.JOIN) || (0, oJ.A)(d),
        f = g
            ? (0, l.jsx)(o0.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: oK.I,
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
                      icon: oX.h,
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
                      icon: o$.k,
                  }),
        E = [I, g && !r ? f : j].filter(su.Vq);
    return (0, l.jsxs)(d0, {
        children: [
            p,
            (0, l.jsx)(d2, {
                children: (0, l.jsx)(d3, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: n,
                    entry: t,
                    buttons: E,
                }),
            }),
        ],
    });
};
var cn = t(322789),
    ct = t(808380),
    ci = t(687966),
    cl = t(960076),
    cs = t(544441),
    cr = t(562708),
    ca = t(139286);
function co(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(t),
        s = (0, oZ.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, ca.A)({
            name: cr.ImpressionNames.CLOUD_PLAY_CTA,
            type: cr.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: oX.h,
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
var cd = t(601007),
    cc = t(648246),
    cu = t(308335),
    ch = t(790381),
    cm = t(266080),
    cA = t(968309),
    cp = t(30370);
function cg(e) {
    let n = (0, m.bG)([cp.A], () => cp.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cA.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cx = t(18282);
let cf = [...cn.n, o7.Yq],
    cI = {
        [ct.Y.DESKTOP]: null,
        [ct.Y.LINUX]: null,
        [ct.Y.MACOS]: null,
        [ct.Y.NINTENDO]: null,
        [ct.Y.IOS]: null,
        [ct.Y.ANDROID]: null,
        [ct.Y.XBOX]: cm.A,
        [ct.Y.PLAYSTATION]: ch.A,
    },
    cj = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, d4.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, dU.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? cI[g] : null,
            I = cg(g === ct.Y.XBOX ? eo.fg2.XBOX : g === ct.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: j } = (0, o2.YY)(x),
            E = (0, cs.A)(x),
            { analyticsLocations: C } = (0, L.Ay)(P.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, oZ.JC)(j),
            b = (0, cu.o)(h?.application_id ?? m?.applicationId ?? j?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(o7.mG, {
                location: null == A ? o7.N5.POPOUT : o7.N5.STREAMING_POPOUT,
                children: cf.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(d6, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cx.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, o3.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              E.length > 0
                                  ? (0, l.jsx)(cd.A, {
                                        distributorCTAConfigs: E,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(d8, {
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
                              E.length > 0
                                  ? (0, l.jsx)(cd.A, {
                                        distributorCTAConfigs: E,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && y
                    ? (0, l.jsx)(
                          co,
                          { application: j, analyticsLocation: P.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, oQ.A)(h, eo.jUm.JOIN) || (0, oJ.A)(h))
                    ? (0, l.jsx)(
                          o0.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: ci.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cl.A)(h)
                    ? (0, l.jsx)(cc.A, { activity: h, size: "md", variant: "primary", icon: nG.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(su.Vq);
        return (0, l.jsxs)(d0, {
            children: [
                v,
                (0, l.jsx)(d2, {
                    children: (0, l.jsx)(d3, {
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
    cE = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cC(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, o2.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, L.Ay)(P.A.CLOUD_PLAY_POPOVER),
        o = (0, oZ.Ay)({ application: r, analyticsLocations: a }),
        d = (0, tO.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cE(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, dH.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(ly.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, j] = s.useState(!1);
    return (
        f && !I && j(!0),
        (0, ca.A)(
            {
                name: cr.ImpressionNames.CLOUD_PLAY_CTA,
                type: cr.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lr.A, {
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
                    icon: oX.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(ly.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cy = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cC, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cb = t(363670),
    c_ = t(205327),
    cv = t(52133),
    cN = t(835723),
    cT = t(172710),
    cS = t(655116),
    cR = t(763758),
    cO = t(286617),
    cM = t(533207),
    cP = t(121090),
    cL = t(693879),
    cD = t(809854),
    ck = t(272984),
    cw = t(170699);
function cG(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, cD.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, o3.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cw.lu,
              children: [
                  (0, l.jsx)(cL.z, { entry: t }),
                  (0, l.jsx)("div", { className: cw.Lt, children: (0, l.jsx)("div", { className: cw.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cw.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function cU(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cb.u7)(r),
        g = cg(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cS.A, l6.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cO.A)(cS.A, l6.default, p, c) : void 0),
            [c, p],
            cv.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        j = [];
    u.media.provider === c_.X.SPOTIFY &&
        ((t = () => {
            (0, cT.Mp)(c);
        }),
        (i = () => {
            (0, cT.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cT.Mp)(c);
        }),
        (I = (0, l.jsx)(cR.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: dQ.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cT.mN)(c, p.id, e);
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
                        icon: cN.J,
                        onClick: function () {
                            null != f && ((0, cM.A)(f, ck.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let E = (0, l.jsx)(d6, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === c_.X.SPOTIFY
                ? (0, l.jsx)(cx.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: cP.A })
                : null,
        userDescription: (0, o3.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(cG, { activity: c }),
    });
    return (0, l.jsxs)(d0, {
        children: [
            E,
            (0, l.jsx)(d2, {
                children: (0, l.jsx)(d3, {
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
var cF = t(903134),
    cH = t(56121),
    cV = t(263577),
    cB = t(868065),
    cY = t(804779);
let cW = [o7.Y8],
    cz = [cH.j.WEEK],
    cq = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, dM.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, o3.TQ)(n);
        return null != r && (0, su.S1)(r, cz)
            ? (0, l.jsxs)(cB.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(cB.UA, {
                          children: [
                              (0, l.jsx)(cB.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(cB.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(o7.mG, {
                                  location: o7.N5.CARD,
                                  children: cW.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(cV.V, { src: s?.src, size: 48, className: cY.xn }),
                  ],
              })
            : null;
    });
var cK = t(210528);
let cX = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, o3.TQ)(t),
        u = cg(eo.fg2.SPOTIFY);
    if (null == d || !(0, su.S1)(c, cz)) return null;
    function h() {
        let e = ck.M0.ALBUM,
            n = cK.A.isProtocolRegistered()
                ? ck.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : ck.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(d0, {
        children: [
            (0, l.jsx)(d6, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = ck.M0.ARTIST,
                        n = cK.A.isProtocolRegistered()
                            ? ck.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : ck.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === c_.X.SPOTIFY
                        ? (0, l.jsx)(cx.A, { onClick: u, Icon: cP.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(o7.mG, {
                    location: o7.N5.POPOUT,
                    children: cW.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(d2, {
                children: (0, l.jsx)(d3, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var c$ = t(977001);
let cQ = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, d4.u)(t),
        c = (0, o3.ty)(t),
        u = (0, o3.TQ)(t);
    if (null == a || null == c || null == u || !(0, c$._E)(u)) return null;
    let h = null != t.extra.platform ? cI[t.extra.platform] : null;
    return (0, l.jsxs)(d0, {
        children: [
            (0, l.jsx)(d6, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cx.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(o7.mG, {
                    location: o7.N5.POPOUT,
                    children: c$.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(d2, {
                children: (0, l.jsx)(d3, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var cJ = t(514243),
    cZ = t(347306),
    c0 = t(123917),
    c1 = t(998218);
let c2 = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cg(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = c1.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, c0.h)({ href: c1.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(d0, {
              children: [
                  (0, l.jsx)(d6, {
                      channel: n,
                      entry: t,
                      userDescription: (0, o3.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cx.A, {
                          onClick: a,
                          Icon: cZ.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(o7.mG, {
                          location: o7.N5.POPOUT,
                          children: cJ.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(d2, {
                      children: (0, l.jsx)(d3, {
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
function c3(e) {
    return e?.type === oB.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oE.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function c7(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oE.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cn.A, { ...t, entry: n });
        case oE.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(cJ.A, { ...t, entry: n });
        case oE.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(c$.Ay, { ...t, entry: n });
        case oE.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cq, { ...t, entry: n });
        case oE.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cb.Ay, { ...t, entry: n });
        case oE.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(oq.A, { ...t, entry: n });
        default:
            return null;
    }
}
function c9(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oE.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cy, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function c5(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(c6, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(oY.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function c6(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oE.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cj, { ...t, entry: n });
        case oE.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(c2, { ...t, entry: n });
        case oE.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(cQ, { ...t, entry: n });
        case oE.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cX, { ...t, entry: n });
        case oE.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cU, { ...t, entry: n });
        case oE.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(ce, { ...t, entry: n });
        default:
            return null;
    }
}
let c8 = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, d4.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(oO);
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
        v = (0, m.bG)([M.Ay], () => M.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        j && v && _(!0);
    }, [j, v]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, E.L3)(e, async () => {
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
                oz(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        oz(oY.PA.CARD_POPOUT_OPEN, e);
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
            c && (0, l.jsx)(c9, { ...r, targetElementRef: a }),
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
                        return (0, l.jsx)(cF.J.Provider, {
                            value: O,
                            children: (0, l.jsx)(c5, {
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
                        return (0, l.jsx)(nR.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                j || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(c7, {
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
var c4 = t(531685),
    ue = t(99066),
    un = t(376261),
    ut = t(99753),
    ui = t(136722),
    ul = t(860071);
let us = [],
    ur = new Set(),
    ua = new Set();
var uo = t(808323);
let ud = new Set([
    oE.ContentInventoryEntryType.PLAYED_GAME,
    oE.ContentInventoryEntryType.WATCHED_MEDIA,
    oE.ContentInventoryEntryType.TOP_GAME,
    oE.ContentInventoryEntryType.TOP_ARTIST,
    oE.ContentInventoryEntryType.LISTENED_SESSION,
    oE.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uc = t(728321),
    uu = t(282006);
let uh = er.Ay.getEnableHardwareAcceleration(),
    um = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uA = s.memo(function (e) {
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
                nameplate: C,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != j ? new Date(j) : null,
            { analyticsLocations: S } = (0, L.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, E.L3)(e, async () => {
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
                            n = lE.A.isInChannel(eG.Ay.getVoiceChannelId(), c.id);
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
            M = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    n = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    O.A.startTyping(p.id));
            }, [c, p.id]),
            P = s.useCallback(
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
            onShiftClick: M,
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
                    shouldAnimateStatus: uh,
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
                    onClickPremiumGuildIcon: P,
                    selected: v,
                    itemProps: y,
                    nameplate: C,
                    onClick: (e) => {
                        e.shiftKey ? M?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    up = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([B.A], () => (null != n ? B.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uA, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function ug(e) {
    let { index: n } = e,
        t = (0, C.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class ux extends s.Component {
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
        if (r?.id === ow) return (0, s.createElement)(oH, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                uc.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: um,
                    children: (0, s.createElement)(uu.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uu.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === oB.S9.CONTENT_INVENTORY) {
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
            if (r.type === oB.S9.MEMBER && "user" in r) {
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
                    up,
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
            if (r.type === oB.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    c8,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === oB.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(oV, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(ug, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === ow) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? c3(t[i + 1 + l]) : n;
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
            .filter(su.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== oB.S9.MEMBER ||
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
                (0, l.jsx)(sD.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rx.F, {
                                component: (0, l.jsx)(rf.A, {
                                    children: (0, l.jsx)(rx.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tP.m1)(t, ee.default, lj.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(C.PR, {
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
function uf(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(P.A.MEMBER_LIST),
        r = (0, m.bG)([M.Ay], () => M.Ay.keyboardModeEnabled),
        o = (0, m.cf)([oB.Ay], () => oB.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uo.A)({ id: oY.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cv.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    ul.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return us;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return ur;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    ui.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => ud.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [oD.A, ut.A],
                            () => {
                                let e = ut.A.getDebugImpressionCappingDisabled();
                                return !(0, ue.sE)("useFilterImpressionCappedContent") || e
                                    ? ua
                                    : oD.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: ua };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, o3.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([ut.A], () => ut.A.getFeedRequestId(oY.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oO).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([oD.A], () => oD.A.hidden),
                A = (0, m.bG)([c4.A], () => c4.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([tc.A], () => tc.A.getGuild(r), [r]),
                x = ((0, un.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, j, E] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: oB.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: oB.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: ow,
                        type: oB.S9.CONTENT_INVENTORY_GROUP,
                        key: ow,
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
                        feedHeight: e.map(c3).reduce((e, n) => e + n, 0),
                    };
                    return [[m, ...n], [...t, m, ...e], Math.random(), e];
                }, [l, c, a, n, r, d, t, i, h, x]),
                C = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                v = s.useCallback(
                    (e) => {
                        let n = Math.floor(e / 72),
                            t = Math.min(E?.length ?? 0, n);
                        C.current = Math.max(C.current, t);
                    },
                    [E],
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
                        (C.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                n = e.slice(0, C.current);
                            !h &&
                                A &&
                                x &&
                                (oW(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: oY.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, ue.sE)("useInjectContentInventoryFeed") &&
                                    nI.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
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
    let g = (0, oI.W)("lg") + (0, oI.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = A.current;
                if (null == t) return;
                let i = n === oG || n === oU ? 0 : parseInt(n, 10),
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
            children: (0, l.jsx)(C.hD, {
                navigator: j,
                children: (0, l.jsx)(ux, {
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
function uI(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(oM, { children: (0, l.jsx)(uf, { channel: i, className: t }) }), [i, t]);
}
var uj = t(888904);
let uE = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uj.kL,
        children: [
            (0, l.jsxs)(ls.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(ls.A.Icon, { icon: o6.N, "aria-hidden": !0 }),
                    (0, l.jsx)(ls.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uj.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uj.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uj.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uC = t(909735),
    uy = t(943712),
    ub = t(274541),
    u_ = t(746080),
    uv = t(516607),
    uN = t(999900);
function uT() {
    return (0, l.jsx)("div", { className: uN.wG, children: (0, l.jsx)(g.y, {}) });
}
let uS = (0, nJ.Fe)({
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
        renderLoader: uT,
        name: "ForumChannel",
    }),
    uR = (0, nJ.Fe)({
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
        renderLoader: uT,
        name: "AppChannel",
    });
function uO() {
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
        t.e("604456"),
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
        t.e("112733"),
        t.e("889300"),
        t.e("932011"),
        t.e("586546"),
        t.e("792461"),
    ]).then(t.bind(t, 540462));
}
let uM = (0, nJ.Fe)({ createPromise: uO, webpackId: 540462, name: "ChannelCall", renderLoader: uT });
function uP() {
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
let uL = (0, nJ.Fe)({ createPromise: uP, webpackId: 883396, name: "StageChannelCall", renderLoader: uT }),
    uD = (0, nJ.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("784993"),
                t.e("489217"),
                t.e("527552"),
                t.e("769266"),
                t.e("193845"),
                t.e("249681"),
                t.e("428235"),
                t.e("369501"),
                t.e("161058"),
                t.e("333097"),
                t.e("359702"),
                t.e("220803"),
                t.e("79171"),
                t.e("417664"),
                t.e("662368"),
            ]).then(t.bind(t, 320704)),
        webpackId: 320704,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(sj, {});
        },
    }),
    uk = (0, nJ.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("577154"),
                t.e("424216"),
                t.e("877730"),
                t.e("611899"),
                t.e("489217"),
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
    uw = (0, nJ.Fe)({
        createPromise: () => Promise.all([t.e("188547"), t.e("269178"), t.e("105906")]).then(t.bind(t, 546377)),
        webpackId: 546377,
        name: "FriendsSidebar",
    });
class uG extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rp.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        e === eo.rbe.GUILD_VOICE ? uO() : e === eo.rbe.GUILD_STAGE_VOICE && uP();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, t2.iN)(e.id);
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
            (0, rg.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [P.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, E.L3)(e, async () => {
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
            (0, E.L3)(e, async () => {
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
            (0, E.L3)(e, async () => {
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
        return e?.hasFlag(u_.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ib.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(nT.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== d_.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iC.A,
                  { size: dA.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    a.push((0, l.jsx)(lv, { channel: e }, "calls")),
                    a.push((0, l.jsx)(i$, { channel: e }, "pins")),
                    a.push((0, l.jsx)(lN.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    a.push((0, l.jsx)(lW, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    a.push((0, l.jsx)(lk, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lv, { channel: e }, "calls")),
                    a.push((0, l.jsx)(i$, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, l.jsx)(lN.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    a.push((0, l.jsx)(iz, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && a.push((0, l.jsx)(it, { channel: e })),
                    null == n || n.isForumLikeChannel() || a.push((0, l.jsx)(rs, { channel: n }, "browser")),
                    e.isVocalThread() && a.push((0, l.jsx)(lF, { channel: e }, "thread-call")),
                    a.push((0, l.jsx)(id, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(i$, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, l.jsx)(iz, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && a.push((0, l.jsx)(i1, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(rd, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (a.push((0, l.jsx)(rs, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(iq.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(i$, { channel: e }, "pins")),
                    (0, nS.PD)(e.guild_id, "channel_header") &&
                        a.push((0, l.jsx)(iY, { channelId: e.id }, "conversations")),
                    a.push((0, l.jsx)(iz, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && a.push((0, l.jsx)(i1, { channel: e }, "summaries")));
                break;
            case eo.rbe.GUILD_APP:
                (a.push((0, l.jsx)(ny, { channel: e }, "popout")),
                    a.push((0, l.jsx)(rs, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(iq.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(i$, { channel: e }, "pins")),
                    a.push((0, l.jsx)(iz, { channelId: e.id }, "members")),
                    a.push((0, l.jsx)(iV, { channelId: e.id }, "chat")),
                    a.push((0, l.jsx)(nA, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && a.push((0, l.jsx)(ll, {}, "game-invite-channel-learn-more")),
                    t ||
                        (a.push((0, l.jsx)(le, { channel: e }, "forum-onboarding")),
                        a.push((0, l.jsx)(iq.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, l.jsx)(iz, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                a.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: uN.u8,
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, t2.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = o || c,
            g = r || p;
        return (0, l.jsxs)("div", {
            className: uN.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && r ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            ls.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(uN.DD, r, { [uN.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: c,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tD.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tD.zF)({
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
                                              className: uN.u8,
                                              children: (0, l.jsx)(x.$, {
                                                  onClick: () => (0, tk.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tD.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sx.A, { channelId: e.id }),
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
                return (0, l.jsx)(uL, { channel: e, popoutType: nv.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    uM,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: nv.N.NO_POPOUT,
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
        return (0, l.jsx)(e5, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(iO, { guildId: n.id })
                : (0, l.jsx)(i_.H, { guildId: n.id, children: (0, l.jsx)(iG, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(oh.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tG.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tR, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(uS, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return e.type === eo.rbe.GUILD_APP
            ? (0, l.jsx)(uR, { channel: e }, e.id)
            : (0, l.jsx)(tL.A, { channel: e, guild: n, chatInputType: nN.oU.NORMAL }, null != n ? n.id : "home");
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
            return (0, l.jsx)(ou, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sg, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uI, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uI, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(nQ, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(uD, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => iy(lX.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, om.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case iF.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(s7, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case iF.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rA, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case iF.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? ix : rA;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (null != n && (0, op.ZV)(n.type)) {
                        e = (0, l.jsx)(ub.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case iF.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iF.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: uN.uC,
                    children: (0, l.jsx)(uk, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iU.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(of.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? of.X.PostSidebar : of.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(uE, {});
        if (null == e) return (0, l.jsx)(uy.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            j = (0, uC.UN)("Channel"),
            E = null != d && !I,
            C = (0, op.nO)(e.type) && !o,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE,
                        className: a()(uN.TE, {
                            [uN.js]: (I && !j) || E,
                            [uN.Rs]: I ? !j || g : E || x,
                            [uN.jl]: I && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: uN.x4,
                                      channel: e,
                                      draftType: iA.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uN.Qs, { [uN.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nZ.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: uN.zP, children: b }) : b,
                x && (0, l.jsx)(uw, {}),
            ],
        });
    }
}
let uU = (0, ef.A)(uG),
    uF = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
            c = (0, m.bG)([eG.Ay], () => eG.Ay.getVoiceChannelId()),
            g = (0, m.bG)([ew.A], () => r ?? ew.A.getChannel(d), [d, r]),
            x = (0, tM.DZ)(),
            f = (0, tM.e4)(g, "ConnectedChannel"),
            E = (0, m.bG)([ew.A], () => ew.A.getChannel(c), [c]),
            C = f?.parent_id,
            y = (0, m.bG)([ew.A], () => ew.A.getChannel(C), [C]),
            b = (0, m.bG)([tc.A], () => tc.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: _ } = (0, iv.A)(f?.id ?? void 0),
            v = (0, m.bG)(
                [n_.A],
                () => {
                    let e = null != d ? n_.A.getParticipants(d) : [],
                        n = null != d ? n_.A.getActivityParticipants(d) : [];
                    return e.length - n.length > 0;
                },
                [d],
            ),
            N = (0, iE.A)(),
            T = (0, m.bG)([eG.Ay], () => (N?.channelId ?? eG.Ay.getVoiceChannelId()) === f?.id),
            S = (0, m.bG)([eE.Ay], () => (null != f ? eE.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, m.bG)([ox.A], () => ox.A.isConnected()),
            O = (0, ej.Ay)(R),
            M = R && !1 === O;
        s.useEffect(() => {
            T &&
                M &&
                null != S &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, nb.Qt)({ applicationId: S.applicationId, instanceId: S.compositeInstanceId }),
                );
        }, [M, f, T, S]);
        let P = (0, m.bG)([eE.Ay], () => eE.Ay.getCurrentEmbeddedActivity()),
            L = (0, m.bG)([eE.Ay], () => eE.Ay.getActivityPanelMode()),
            D = null != P && !(0, ev.A)(f?.id) && L === eZ.Gd.PANEL,
            k = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: w, isUserInThisVoice: G } = (0, m.cf)([lE.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lE.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lE.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !D && v,
            F = f?.isGuildVocal() || U || (w && (G || !k)),
            H = (0, m.bG)([nx.A], () => {
                let e = (0, nm.ny)(nx.A.getMainFrame());
                return e?.data.layoutMode === nm.y0.FOCUSED && e.intent === nm.sV.MAIN;
            }),
            { welcomeModalChannelId: V } = (0, h.zy)(),
            B = (0, m.bG)([is.A], () => null != f && is.A.isLurking(f.guild_id), [f]),
            Y = (0, m.bG)([oA.A], () => oA.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, m.bG)(
                [n_.A, eE.Ay],
                () =>
                    null != eE.Ay.getConnectedActivityLocation() && eE.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eE.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != d
                          ? n_.A.getLayout(d)
                          : eo.DUB.NORMAL,
                [d],
            ),
            z =
                ((n = b?.id),
                (i = (0, m.bG)([tc.A, lK, ee.default, $.Ay], () => {
                    let e = tc.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === lK.hasViewedPrompt(lX.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || iy(lX.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            q =
                ((t = b?.id),
                (0, m.bG)([ew.A, tc.A, eG.Ay], () => {
                    let e = tc.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(V);
                    return V === eG.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, op.ke)(n.type);
                })),
            { section: K, channelSidebarState: X } = (0, m.cf)(
                [iH.Ay],
                () => ({ section: iH.Ay.getSection(d, f?.isDM()), channelSidebarState: iH.Ay.getSidebarState(d) }),
                [d, f],
            ),
            J = b?.id,
            Z = (0, m.bG)([iH.Ay], () => iH.Ay.getGuildSidebarState(J), [J]),
            en = (0, lQ.lI)(),
            et = (0, tP.Ay)(f),
            el = (0, tP.Ay)(f, !0),
            es = (0, m.bG)([n_.A], () => (null != f ? n_.A.getSelectedParticipant(f.id) : null)),
            er = (0, e4.vL)(f),
            ea = (0, tw.Uf)(f),
            ed = null != f && c === f.id,
            ec = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eu, appBarToggleEnabled: eh } = iI.A.useConfig({ location: "Channel" }),
            em = (0, ij.c)(),
            eA = (0, m.bG)(
                [og.A, iW.A],
                () => {
                    let e = f?.guild_id ?? iW.A.getGuildId();
                    return null != e && og.A.isUnavailable(e);
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
                let e = (0, tk.JK)();
                if (e?.location?.state?.stageInviteKey === uv.J2) {
                    let { channelId: n } = (0, l$.vu)(e?.location?.pathname) ?? {};
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
                null != a && null != e && ec && e.id === a && !n && ((0, sE.av)(e), o(null));
            }, [a, ec]));
        let ef = (0, eI.cI)(f),
            eC = null != f && f.isPrivate(),
            ey = (0, ej.Ay)(eC),
            eb = (0, ej.Ay)(f?.id);
        s.useEffect(() => {
            let e = ey && !eC,
                n = ey && eC && f?.id !== eb;
            (e || n) && (0, tO.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: ly.i.AUTO });
        }, [f?.id, eb, eC, ey]);
        let eN = (0, p.useHasAnyModalOpen)();
        return (0, l.jsx)(uU, {
            guildId: f?.guild_id,
            channelId: d,
            channel: f,
            channelName: et,
            formattedChannelName: el,
            parentChannel: y,
            voiceChannel: E,
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
            ...(0, m.cf)([lE.A], () => ({ hasVideo: null != f && lE.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: es,
            showChannelSummaries: ef,
            showHeaderGuildBreadcrumb: x || en,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: P,
            friendsSidebarExperimentEnabled: eu,
            canShowFriendsSidebar: ep,
            friendsSidebarAppBarToggleEnabled: eh,
            friendsSidebarCollapsed: em,
        });
    });
