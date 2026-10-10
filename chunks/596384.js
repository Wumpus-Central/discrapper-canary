(t.r(n), t.d(n, { default: () => uQ }), t(321073));
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
    E = t(604681),
    j = t(442433);
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
    B = t(36124),
    V = t(317525),
    Y = t(219065),
    W = t(818348),
    z = t(660183);
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
                [V.A],
                () => (c?.colorRoleId != null ? V.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, m.bG)([ee.default], () => ee.default.getUser(r)),
            A = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === A?.id,
            g = (0, m.bG)([Q.A, J.A], () => (p ? J.A.getStatus() : Q.A.getStatus(r, n.guild_id))),
            x = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, m.yK)([Q.A, J.A], () => (p ? J.A.getActivities() : Q.A.getActivities(r, n.guild_id))),
            I = (0, m.bG)([X.A], () => X.A.getAnyStreamForUser(r)),
            E = (0, C.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(n.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, j.L3)(e, async () => {
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
                    itemProps: E,
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
                n?.id != null && (0, F.Ey)(n.id, e, B.LD);
            });
            let t = (0, m.bG)([V.A], () => (null != n ? V.A.getSortedRoles(n.id) : [])),
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
        E = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        E)
    )
        return (0, l.jsx)(eg, { channel: c });
    let j = u().omit(f.containerProps, ["ref"]),
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
                                ...j,
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
    eE = t(475743),
    ej = t(933958),
    eC = t(702841),
    ey = t(567249),
    eb = t(811024),
    e_ = t(969151),
    ev = t(108959),
    eN = t(866665),
    eT = t(446576),
    eS = t(817281),
    eR = t(666860),
    eO = t(587837),
    eM = t(850891),
    eP = t(964404),
    eL = t(204651),
    eD = t(383831),
    ek = t(128286),
    ew = t(734057),
    eG = t(309010),
    eU = t(795816),
    eF = t(685399),
    eH = t(216418),
    eB = t(620148),
    eV = t(732637),
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
        a = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
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
    let g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
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
function e6(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        r = (0, eB.A)(),
        o = (0, m.yK)([ej.Ay], () => ej.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [I, E] = s.useState(eP.Ay.activityPanelHeight ?? n ?? null),
        j = s.useCallback((e) => {
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
            let i = (0, eE.Ay)(e),
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
                                    children: (0, l.jsx)(eV.A, { className: e2.pU, embedId: (0, ez.A)(t.id, r.id) }),
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
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), E(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), j(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e9(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eC.cf)([ej.Ay], () => {
            let e = ej.Ay.getConnectedActivityLocation(),
                n = ej.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: n,
                activityPanelMode: ej.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eC.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e6, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e5 = t(90804),
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
    nf = t(73153),
    nI = t(494126);
async function nE(e) {
    null == nx.A.getFrame(e) ||
        ((await (0, nI.refreshProxyTicket)(e)) &&
            ((0, nI.promoteFrame)(e),
            (0, nI.updateFramePanelMode)(e, eZ.Gd.ACTIVITY_POPOUT_WINDOW),
            nf.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var nj = t(567245),
    nC = t(869146);
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
            (0, eW.A)({ onConfirm: () => (0, nj.E)() });
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
    nS = t(70688),
    nR = t(627363),
    nO = t(71393),
    nM = t(793480),
    nP = t(577964),
    nL = t(248675);
function nD(e) {
    let { channel: n } = e,
        t = (0, m.bG)([nx.A], () => nx.A.getFramesForChannel(n.id).find((e) => (0, nm.x1)(e)), [n.id]),
        i = (0, nR.YY)(t?.applicationId).data,
        s = (0, m.bG)(
            [nO.A],
            () => nO.A.getGuild(n.guild_id)?.features.has(eo.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) === !0,
            [n.guild_id],
        ),
        r = (0, nM.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.vibegrationsProjectId == null || !r || s) return null;
    let a = z.intl.string(nL.default["/TlGcK"]);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: nS.DoorExitIcon,
        tooltip: a,
        "aria-label": a,
        onClick: () => (0, nP.A)(t.id, n.guild_id ?? null, n.id),
    });
}
var nk = t(828488),
    nw = t(939249),
    nG = t(408278),
    nU = t(624479),
    nF = t(858899),
    nH = t(534890),
    nB = t(661531),
    nV = t(39623),
    nY = t(952270),
    nW = t(381849),
    nz = t(549973),
    nq = t(957565),
    nK = t(935208),
    nX = t(181041),
    n$ = t(256331),
    nQ = t(623562),
    nJ = t(403862);
let nZ = ["high", "medium", "low"],
    n0 = s.memo(function (e) {
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
                              nZ.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: nJ.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nJ.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: nJ.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nJ.a7,
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
                            className: nJ.a7,
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
                            className: nJ.a7,
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
    n1 = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = nK.default.extractTimestamp(n.startMessageId),
            s = nK.default.extractTimestamp(n.endMessageId),
            r = (0, nz.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, nW.WR)({ seconds: a, getFormatter: nW.i }),
            d = (0, m.bG)([nX.A], () => nX.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(nw.D, {
            className: nJ.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: nJ.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: nJ.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(nG.K, {
                            icon: nU.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, nq.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nF.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: nJ.FR,
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
                        className: nJ.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: nJ.JP,
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
                    className: nJ.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: nJ.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nJ.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nJ.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: nJ.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nJ.a7,
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
                                    className: nJ.a7,
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
                                    className: nJ.a7,
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
                (0, l.jsx)(n0, { moderation: n.moderation ?? null }),
            ],
        });
    });
function n2(e) {
    let { channel: n } = e,
        t = (0, m.bG)([nX.A], () => nX.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([nX.A], () => nX.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([n$.A], () => n$.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, nQ.xI)(n.id, e.id);
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nJ.zr,
        children: [
            (0, l.jsxs)("div", {
                className: nJ.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: nJ.gn,
                        children: [
                            (0, l.jsx)(nH.ChatIcon, { color: nB.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: nJ.y6,
                        children: (0, l.jsx)(nG.K, {
                            icon: r ? nV.EyeIcon : nY.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: nQ.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: nJ.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(n1, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: nJ.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var n3 = t(268218),
    n7 = t(726249),
    n6 = t(334738),
    n9 = t(208882),
    n5 = t(938764),
    n8 = t(519480),
    n4 = t(352123),
    te = t(825244),
    tn = t(130696);
let tt = function (e) {
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
        className: tn.h2,
        children: [
            (0, l.jsx)("img", { className: tn.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: tn._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: tn.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(te.E, {
                      className: tn.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(te.E, {
                className: tn.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var ti = t(683438),
    tl = t(689175),
    ts = t(761508),
    tr = t(765671),
    ta = t(902119),
    to = t(22231),
    td = t(66834),
    tc = t(573435),
    tu = t(101555),
    th = t(548118),
    tm = t(714991),
    tA = t(776231),
    tp = t(345942),
    tg = t(486020),
    tx = t(149790),
    tf = t(682557),
    tI = t(524058);
let tE = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(nw.D, {
        onClick: n,
        className: tI.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tI.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tj(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, n4.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tI.fc, { [tI.QX]: i }),
        children: (0, l.jsxs)(tu.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tu.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(to.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tI.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tf.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tu.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(na.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tI.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tC = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([nO.A], () => nO.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, tp.u)(n.guildId) : await td.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tg.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tA.mZ)() }),
        c = tg.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tI.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tI.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tI.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tI.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tI.$f,
                            children: (0, l.jsx)(tc.Ay, {
                                mask: tc.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tI.SA,
                                    children: (0, l.jsx)(th.Ay, {
                                        className: tI.rZ,
                                        iconSrc: c,
                                        guild: (0, tx.xi)(n),
                                        size: th.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tI.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tI.DD,
                            children: [
                                (0, l.jsx)(tm.A, { className: tI.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tI.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tI.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tI.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tI.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tI.JX }),
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
                                        className: tI.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tI.Li }),
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
                            className: tI.PD,
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
                (0, l.jsx)(tj, { entry: n }),
            ],
        })
    );
});
var ty = t(946116),
    tb = t(844086),
    t_ = t(770679);
function tv(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tr.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: t_.wx,
        children: [
            (0, l.jsx)("div", { className: t_.y2, children: (0, l.jsx)(ta.A, {}) }),
            (0, l.jsx)("div", {
                className: t_.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(t_.VW, { [t_.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: t_.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: t_.MT,
                            children: (0, l.jsx)(ti.I, {
                                query: n,
                                "aria-label": z.intl.string(z.t.nL2wKD),
                                placeholder: z.intl.string(z.t.nL2wKD),
                                onChange: t,
                                onClear: i,
                                onKeyDown: s,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
let tN = function (e) {
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
        className: tb.$$,
        children: (0, l.jsxs)(tl.Gt, {
            className: tb.XG,
            children: [
                (0, l.jsx)(tv, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tl.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(ts.V, {
                        className: t_.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                ts.V.Item,
                                { className: t_.YU, id: ty.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                ty.mU.ALL,
                            ),
                            (0, ty.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    ts.V.Item,
                                    { className: t_.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: tb.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: t_.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tb.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tC, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tE, { onClick: i }) : null,
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
var tT = t(370876),
    tS = t(28863),
    tR = t(364522),
    tO = t(792831),
    tM = t(211862);
let tP = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: tb.$$, children: (0, l.jsx)(g.y, { className: tb.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tS.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tM.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: tM.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tb.vY, children: d.map((e) => (0, l.jsx)(tC, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tb.$$,
        children: (0, l.jsxs)(tR.Ar, {
            className: tb.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tM.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tM.Dr,
                            children: [
                                (0, l.jsx)(nw.D, {
                                    onClick: r,
                                    className: tM.UE,
                                    children: (0, l.jsx)(tO.A, { direction: tO.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tM.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(ti.I, {
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
var tL = t(650583);
let tD = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([n8.A], () => {
            let e = n8.A.getCurrentCategoryId(n.id),
                t = n8.A.getDirectoryEntries(n.id, e === ty.mU.ALL ? null : e),
                i = n8.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: n8.A.getDirectoryAllEntriesCount(n.id),
                isLoading: n8.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                (0, n6.ack)(
                    n.id,
                    {
                        object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                        objectType: eo.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    e,
                );
        },
        [n.id],
    );
    let u = s.useMemo(
            () =>
                null != a
                    ? (function (e, n) {
                          if (n !== ty.mU.ALL) return [{ entries: (0, tT._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tT.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tT.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([n5.A], () => {
            let { mostRecentQuery: e, fetching: t } = n5.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: n5.A.getSearchResults(n.id, e) };
        }),
        [f, I] = s.useState(h),
        E = "" !== h,
        j = { mostRecentQuery: h },
        C = s.useRef(j);
    (s.useEffect(() => {
        C.current = j;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            (n9.Yc(n.id), n9.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, n4.b)(n),
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
                                      currentCategoryId: r === ty.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === tL.dh.ENTER &&
            (n9.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (I(""), n9.BA(n.id));
    }
    return E
        ? (0, l.jsx)(tP, {
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
          ? (0, l.jsx)("div", { className: tb.$$, children: (0, l.jsx)(g.y, { className: tb.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tb.$$, children: (0, l.jsx)(tt, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tN, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      n9.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var tk = t(826673),
    tw = t(93055),
    tG = t(47167),
    tU = t(688438),
    tF = t(353428),
    tH = t(976860),
    tB = t(288254),
    tV = t(873614),
    tY = t(649852),
    tW = t.n(tY),
    tz = t(789645),
    tq = t(163126),
    tK = t(182061),
    tX = t(886393),
    t$ = t(307623),
    tQ = t(660273),
    tJ = t(707792),
    tZ = t(41402),
    t0 = t(271456),
    t1 = t(200273),
    t2 = t(565846),
    t3 = t(57907),
    t7 = t(375500),
    t6 = t(707653),
    t9 = t(50268),
    t5 = t(378570),
    t8 = t(162199),
    t4 = t(713608),
    ie = t(473503),
    it = t(901472),
    ii = t(267102),
    il = t(474397),
    is = t(486974),
    ir = t(39470);
function ia(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, ii.aL)(),
        r = z.intl.string(ir.default["Beo/7v"]),
        { firstMessage: a } = (0, ie.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nh.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, t5.iN)(n.id),
                      (0, il.A)(),
                      (0, it.z)(n.guild_id, d, n.id, {
                          modViewPanel: is.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: t4.q,
              "aria-label": r,
          })
        : null;
}
var io = t(780338),
    id = t(782603),
    ic = t(857071),
    iu = t(607508),
    ih = t(914703),
    im = t(37411);
function iA(e) {
    let { channel: n } = e,
        t = (0, iu.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([ic.A], () => null != n.guild_id && ic.A.isLurking(n.guild_id));
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
            (0, l.jsx)(ih.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === im.CP.NO_MESSAGES ? io.BellSlashIcon : id.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var ip = t(747926);
function ig(e) {
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
            return (0, l.jsx)(ix, { ...e, channel: n });
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
function ix(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tQ.A)(n, "Sidebar Overflow"),
        r = (0, tZ.A)(n),
        a = (0, t3.A)(n),
        o = (0, t7.A)(n),
        d = (0, tK.A)(n),
        c = (0, tJ.A)(n),
        u = (0, t2.A)(n.id),
        h = (0, t1.A)(n),
        m = (0, t$.A)(n),
        A = (0, tX.A)(n),
        p = (0, t9.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, t6.A)(n),
        x = (0, t0.A)(n),
        f = (0, tq.$)(1e3);
    function I() {
        (0, t5.iN)(n.id);
    }
    function E(e) {
        let t = tW()(() => {
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
                            (E(() => {
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
                            (E(() => {
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
function iI(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nh.Ay.Icon, {
            icon: tz.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, ip.xu)((0, t8.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iA, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(ia, { channel: n }) : null,
                  (0, l.jsx)(ig, { channel: n }),
                  i,
              ],
          });
}
var iE = t(31717),
    ij = t(853742),
    iC = t(85190);
function iy(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([nO.A], () => nO.A.getGuild(i?.getGuildId())),
        o = (0, tG.Ay)(i),
        d = (0, tB.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, ij.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(tV.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iI, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iE.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tF.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
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
                        null != i && (0, tH.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iC.T,
                children: (0, l.jsx)(tU.A, { channel: i, guild: a, chatInputType: nN.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var ib = t(925166),
    i_ = t(605117),
    iv = t(857253),
    iN = t(872363);
let iT = function (e, n) {
    nf.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var iS = t(561446),
    iR = t(300233),
    iO = t(499211),
    iM = t(468689),
    iP = t(529942),
    iL = t(739455),
    iD = t(709017);
function ik(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iD.t7,
        children: (0, l.jsxs)("div", {
            className: iD.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iD.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iD.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iD.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iP.rf)(n),
                                        iM.default.open(
                                            n,
                                            eo.BEX.ROLE_SUBSCRIPTIONS,
                                            void 0,
                                            eo.nd0.ROLE_SUBSCRIPTION_TIERS,
                                        ),
                                        (0, iL.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iw = t(599941),
    iG = t(29385),
    iU = t(950344),
    iF = t(217530),
    iH = t(162093),
    iB = t(325348);
function iV(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iG.e)({ guildId: n, channelId: t }),
        r = (0, iw.uk)(n),
        a = (0, iw.Tq)(n),
        o = (0, m.bG)([nO.A], () => nO.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tG.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, iU.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iB.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iB.__invalid_spinner }),
          })
        : (0, l.jsxs)(tR.Ar, {
              className: iB.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iB.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iB.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iF.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iH.A,
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
var iY = t(138298),
    iW = t(940382),
    iz = t(761640);
function iq(e) {
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
        i = (0, m.bG)([iz.Ay], () => iz.Ay.getCurrentSidebarChannelId(n) === n, [n]),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(n)?.getGuildId(), [n]);
    return (0, l.jsx)(nh.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nH.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? iY.A.closeChannelSidebar(n)
                : iY.A.openChannelAsSidebar({
                      guildId: r,
                      channelId: n,
                      baseChannelId: n,
                      details: { type: iW.kk.CHAT },
                  });
        },
        selected: i,
        badge: t,
    });
}
var iK = t(284252);
function iX(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([iz.Ay], () => iz.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([nX.A], () => (nX.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(nh.In, {
        onClick: E.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nH.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iK.q : void 0,
        selected: t,
        badge: r,
    });
}
var i$ = t(967198);
function iQ(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([iz.Ay], () => iz.Ay.getSection(n)),
        i = (0, m.bG)([i$.A], () => i$.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nh.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                E.A.toggleMembersSection());
        },
        selected: s,
    });
}
var iJ = t(187360),
    iZ = t(366605),
    i0 = t(945830);
let i1 = function (e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        [i, r] = s.useState(!1),
        a = (0, ii.aL)(),
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
                return (0, l.jsx)(i0.A, { ...e, onJump: h, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(nh.In, {
                    ...e,
                    ref: o,
                    onClick: d,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iZ.t,
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
var i2 = t(306788),
    i3 = t(863922),
    i7 = t(822074),
    i6 = t(521732);
function i9(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, m.bG)([i7.A], () => i7.A.shouldShowTopicsBar());
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: i2.K,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: i6.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, i3.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var i5 = t(885574),
    i8 = t(947094),
    i4 = t(919577),
    le = t(207777),
    ln = t(422844),
    lt = t(435470),
    li = t(892110),
    ll = t(45494);
function ls(e) {
    let { channel: n } = e,
        t = (0, lt.S4)(n),
        i = (0, m.bG)([i8.A], () => i8.A.hasHidden(n.id)),
        s = (0, li.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, ln.R)(n.id),
        d = (0, m.bG)(
            [le.A, ll.A],
            () => !!(le.A.getThreadIds(n.id, r, a, o).length > 0) || !!(ll.A.getThreads(n.id, r, a, o).length > 0),
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
        icon: i5.CircleInformationIcon,
        onClick: function () {
            return i4.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lr = t(290136),
    la = t(975571),
    lo = t(490094);
function ld() {
    let e = z.intl.string(lo.default.pdipXI);
    return (0, l.jsx)(nh.In, {
        tooltip: e,
        icon: lr.CircleQuestionIcon,
        onClick: function () {
            window.open(la.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lc = t(742589),
    lu = t(43105),
    lh = t(428689),
    lm = t(978940),
    lA = t(387755),
    lp = t(730852),
    lg = t(641703),
    lx = t(379848),
    lf = t(753727),
    lI = t(625075),
    lE = t(222692),
    lj = t(442353),
    lC = t(470710),
    ly = t(186111),
    lb = t(192820),
    l_ = t(994500),
    lv = t(977997),
    lN = t(818023),
    lT = t(49999),
    lS = t(731854);
class lR extends s.PureComponent {
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
                : lb.Ay.supports(lS.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lI.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nh.Ay.Icon, { icon: lh.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
            icon: lm._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lx.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lu.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lN.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lT.i.USER_DISMISS),
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
            return lA.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lj.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lp.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tk.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lT.i.AUTO }),
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
        (0, lj.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lE.A)();
    };
}
function lO(e) {
    let { channel: n } = e,
        t = (0, lf.A)(),
        i = (0, m.bG)([n_.A], () => n_.A.getMode(n.id)),
        s = (0, m.bG)([lv.A], () => lv.A.isInChannel(n.id)),
        r = (0, m.bG)([M.Ay], () => M.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lC.A], () => ({
            callActive: lC.A.isCallActive(n.id),
            callUnavailable: lC.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([l_.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !l_.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && l_.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, ii.Us)(),
        g = [],
        x = (0, lg.A)(n.id),
        f = (0, m.bG)([ly.A], () => ly.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lR, {
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
var lM = t(452015),
    lP = t(765178),
    lL = t(231483),
    lD = t(544231),
    lk = t(338510),
    lw = t(151119),
    lG = t(278941),
    lU = t(665909),
    lF = t(327337);
let lH = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lk.u)(n.id),
        r = (0, lw.S)(n.id),
        a = (0, lG.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([ly.A], () => ly.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lP.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lD.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lU.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lU.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lP.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lD.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lU.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lU.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lD.xi)(n.id, [a.id]),
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
                    { modalKey: lF.V },
                ),
                (0, lU._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lU.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
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
                  icon: lL.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lB = t(262763),
    lV = t(406704),
    lY = t(576705);
let lW = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lf.A)(),
        i = (0, m.bG)([lv.A], () => lv.A.isInChannel(n.id)),
        r = (0, m.bG)([lv.A], () => !u().isEmpty(lv.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([lY.A], () => lY.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iO.A)(n.id),
        d = (0, lV.Id)(n),
        { enabled: c } = lV.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lB.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
              icon: lm._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lz = t(812991),
    lq = t(47675),
    lK = t(999291);
function lX() {
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
function l$(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([iz.Ay], () => iz.Ay.getSection(n.id, n?.isDM())),
        s = (0, lK.Ay)(n.getRecipientId()),
        r = lX(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nh.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lz.n,
        onClick: function () {
            ((0, lq.am)({ displayProfile: s, isProfileOpen: !a }), E.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let lQ = {};
class lJ extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lQ[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lQ[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lQ;
    }
}
let lZ = new lJ(nf.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lQ[t];
        return null == i ? ((lQ[t] = new Set()), lQ[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lQ[n.id] && !n.unavailable && (delete lQ[n.id], !0);
    },
});
var l0 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l1 = t(376943),
    l2 = t(394953),
    l3 = t(683063),
    l7 = t(403581),
    l6 = t(241541),
    l9 = t(709066),
    l5 = t(87664),
    l8 = t(247676),
    l4 = t(695526),
    se = t(927813),
    sn = t(427358),
    st = t(945810);
let si = (0, st.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var sl = t(280450),
    ss = t(851746),
    sr = t(103411);
function sa() {
    let e = (0, sr.m)(),
        n = (0, m.bG)([ss.A], () => ss.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, m.bG)([sl.default], () => sl.default.getId()),
    };
}
var so = t(315629),
    sd = t(744413),
    sc = t(303682),
    su = t(224370),
    sh = t(544879);
function sm(e) {
    let {
            analyticsLocation: n,
            markAsDismissed: t,
            className: i,
            title: s = z.intl.string(z.t["DMie/y"]),
            body: r = z.intl.string(z.t.u0HAhn),
        } = e,
        { analyticsLocations: o } = (0, L.Ay)(n);
    return (0, l.jsxs)(so.h, {
        color: "purple",
        className: a()(su.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsx)(nw.D, {
                className: su.VN,
                "aria-label": z.intl.string(z.t.H2NPrR),
                onClick: function () {
                    t(lT.i.USER_DISMISS);
                },
                children: (0, l.jsx)(tz.P, { size: "xs", color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: su.lj,
                children: [
                    (0, l.jsx)("img", { className: su.Dp, src: sh.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: su.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: su.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: su.rf,
                                children: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: su.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: z.intl.string(z.t.Lm2nFc),
                    onClick: function () {
                        (t(lT.i.TAKE_ACTION),
                            (0, sd.jM)({
                                startingScreen: sc.SelectFriendsModalScreens.SELECT_FRIENDS,
                                analyticsLocations: o,
                            }));
                    },
                }),
            }),
        ],
    });
}
var sA = t(349420);
let sp = { cooldownDurationMs: 60 * se.A.Millis.DAY };
function sg(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: si.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = sa(),
                l = (0, m.bG)(
                    [sn.A, l_.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i || l_.A.isBlockedOrIgnored(e)) return !1;
                            let n = sn.A.getUserAffinity(e);
                            return null != n && null != n.communicationRank && n.communicationRank <= 20;
                        }),
                    [e.recipients, i],
                );
            return !!t && !!n && !!l;
        })(n);
    return (0, l.jsx)(lx.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sp,
        groupName: lT.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sm, {
                      className: sA.K,
                      analyticsLocation: P.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sx = t(403362);
t(696101);
let sf = [],
    sI = er.Ay.getEnableHardwareAcceleration();
function sE(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([l_.A], () => l_.A.getNickname(n.id)),
        h = (0, l5.A)(n.id),
        A = s.useRef(null);
    function p(e) {
        (0, j.L3)(e, async () => {
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
                t.e("307059"),
                t.e("309291"),
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
                    shouldAnimateStatus: sI,
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
function sj(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sC(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, L.Ay)(P.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [l_.A, ee.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(sx.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    l_.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sf,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sf });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sj,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, l8.A)({ useNitroCapExperiment: !0 }),
        h = (0, l4.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(L.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tR.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sg, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(l3.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(l7.t, {
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
                                o && (0, l.jsx)(l9.A, { type: l9.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sE,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lM.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: l6.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lM.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sy = t(322338),
    sb = t(898029),
    s_ = t(36537);
function sv() {
    return (0, l.jsx)("div", {
        className: s_.zt,
        children: (0, l.jsx)("header", {
            className: sb.wL,
            children: (0, l.jsxs)("div", {
                className: sb.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sb.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sb.u1,
                            itemClassName: sb.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sN = t(747376),
    sT = t(718734),
    sS = t(163328),
    sR = t(425557),
    sO = t(270003),
    sM = t(150934),
    sP = t(452027),
    sL = t(95477),
    sD = t(281595),
    sk = t(465532),
    sw = t(579872),
    sG = t(119031),
    sU = t(408018),
    sF = t(479909),
    sH = t(822610),
    sB = t(915089),
    sV = t(314307),
    sY = t(636922),
    sW = t(931664),
    sz = t(631576),
    sq = t(885386),
    sK = t(232835),
    sX = t(522602),
    s$ = t(806150),
    sQ = t(518960),
    sJ = t(753738);
function sZ(e, n) {
    return { type: e, message: n ?? null };
}
function s0(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var s1 = t(659617),
    s2 = t(474078),
    s3 = t(636537),
    s7 = t(152367),
    s6 = t(147087);
async function s9(e) {
    try {
        let n = await s3.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, s3.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var s5 = t(55294),
    s8 = t(143161),
    s4 = t(909833);
let re = nN.oU.THREAD_CREATION;
function rn(e) {
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
                      className: s8.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iE.C.FirstThreadMessage }),
                          (0, l.jsx)(rt, { parentChannelId: n }),
                          (0, l.jsx)(ri, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function rt(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iE.A.getThreadSettings(n),
                t = iE.A.getDraft(n, iE.C.FirstThreadMessage).trim(),
                i = sX.A.getUploads(n, iE.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sw.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, ip.bA)(n);
                      },
                  })
                : (0, ip.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nh.Ay, {
        toolbar: (0, l.jsx)(nh.Ay.Icon, { icon: tz.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nh.Ay.Icon, { icon: sS.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nh.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function ri(e) {
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
            let t = (0, m.bG)([iE.A], () => iE.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sk.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, sU.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iE.A.getDraft(e.id, iE.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sU.ur)(l)), n(iE.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iE.A.addChangeListener(t),
                        () => {
                            iE.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, s1.EN)(t),
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
                h = (0, s6.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = sK.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await s9(e);
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
                                icon: s7.D,
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
                                  children: (0, l.jsx)(nG.K, {
                                      icon: s7.D,
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
            nameError: E,
            messageError: j,
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
                p = (0, s5.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: ip.JA,
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
                                (l = sW.A.getStickerPreview(n.id, re.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sX.A.getUploads(n.id, iE.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sZ(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sZ(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, s$.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: re,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), sZ(1, (0, sJ.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sZ(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sz.x5)(n.id, re.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, s1.Iy)(c, g) ? sR.t : sS.y;
    return (0, l.jsx)("div", {
        className: s8.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(s8.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: s8.Zd,
                children: [
                    (0, l.jsx)(tR.Ip, {
                        className: s8.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: s8.bv,
                            children: [
                                (0, l.jsxs)(sV.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(s4.P0, s8.P0),
                                            children: (0, l.jsx)(b, { className: s4.Kk }),
                                        }),
                                        (0, l.jsxs)(sO.n, {
                                            children: [
                                                (0, l.jsx)(rs, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: E,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: I,
                                                }),
                                                (0, l.jsx)(rl, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ra, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: s8.Eh,
                        children: [
                            (0, l.jsx)(rr, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(sG.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: s8.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rl(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, s1.Iy)(t, s),
        a = (0, l.jsx)(sM.S, {
            disabled: s === s1.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === s1.jk.Disabled
        ? null
        : (0, l.jsx)(sP.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rs(e) {
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
        h = s0(r, { content: u }),
        m = (0, s1.l1)(n, t),
        A = null != t && !d,
        p = (0, sB.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sL.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, s2.A)(e, !1) }), "" !== e ? O.A.startTyping(n.id) : O.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, s2.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rr(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sk.A.saveDraft(n.id, t, iE.C.FirstThreadMessage),
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
    let x = (0, m.bG)([lY.A], () => lY.A.can(eo.xBc.ATTACH_FILES, n)),
        f = s0(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sH.A, { channelId: n.id, type: re, canAttachFiles: x }),
            (0, l.jsx)("div", { className: s8.xN, children: (0, l.jsx)(sD.U, { error: f }) }),
            (0, l.jsx)(sF.Ay, {
                type: re,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(s8.gM, s8.Yy),
                innerClassName: a()(s8.SL, { [s8.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: sQ.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function ra(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([sK.A], () => (null == t ? null : sK.A.getMessage(n.id, t))),
        s = sq.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sY.A, {
              className: s8.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var ro = t(305866),
    rd = t(707539),
    rc = t(751479),
    ru = t(272736);
function rh(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, e4.ni)(n),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            (t || (0, rd.D3)("Popout"), i(!t));
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
            return (0, l.jsx)(ro.l, {
                children: (0, l.jsx)(rc.A, { className: ru.T, channel: n, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.In, {
                ...e,
                ref: r,
                className: ru.Kk,
                onClick: d,
                icon: sS.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: a,
                selected: t,
            });
        },
    });
}
var rm = t(40389),
    rA = t(148494),
    rp = t(56562);
function rg(e) {
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
            return (0, l.jsx)(rx, { ...e, channel: n });
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
function rx(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tK.A)(n),
        r = (0, tJ.A)(n),
        a = (0, t2.A)(n.id),
        o = (0, t1.A)(n),
        d = (0, t9.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, tX.A)(n),
        h = (0, t$.A)(n),
        A = (0, tQ.A)(n, "Toolbar Overflow"),
        p = (0, tZ.A)(n),
        g = (0, rm.A)(n),
        x = (0, t6.A)(n),
        f = (0, t0.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(ns.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rA.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rp.vx.INSTANT });
                  },
              })
            : null,
        E = sq.SY.useSetting(),
        j = (0, m.bG)([lv.A], () => !u().isEmpty(lv.A.getVoiceStatesForChannel(n.id))),
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
                    !E || j || C
                        ? null
                        : (0, l.jsx)(ns.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, ip.JA)(n);
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
var rf = t(332456),
    rI = t(806411),
    rE = t(973854),
    rj = t(62502);
function rC(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([nO.A], () => nO.A.getGuild(d?.getGuildId())),
        h = (0, tG.Ay)(d),
        A = (0, tB.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lv.A], () => null != n && !u().isEmpty(lv.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nf.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, t5.N9)(n, { source: im.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rf.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rI.q)(d.id), channel_view: o }),
                (0, rE.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(tV.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(iI, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iE.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tF.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
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
                        null != d && (0, t5.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rj.T,
                children: (0, l.jsx)(tU.A, { channel: d, guild: c, chatInputType: nN.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var ry = t(210714),
    rb = t(402860),
    r_ = t(707554),
    rv = t(140735),
    rN = t(590180),
    rT = t(372320),
    rS = t(562153);
let rR = (0, st.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rO(e) {
    return rR.useConfig({ location: e }).enabled;
}
var rM = t(215530),
    rP = t(454719),
    rL = t(736653),
    rD = t(311016),
    rk = t(480335),
    rw = t(713517),
    rG = t(397562),
    rU = t(183555),
    rF = t(718019),
    rH = t(365607),
    rB = t(915614),
    rV = t(308244),
    rY = t(743987),
    rW = t(900179),
    rz = t(946356),
    rq = t(465829),
    rK = t(35241),
    rX = t(587168),
    r$ = t(442228),
    rQ = t(744808);
let rJ = (0, st.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rZ = t(827428);
function r0(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function r1(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = rJ.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lq.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rZ.lS,
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
              className: rZ.qr,
              children: (0, l.jsx)(nw.D, {
                  onClick: o,
                  className: rZ.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rZ.xQ, children: [(0, l.jsx)(rQ.A, { frame: i, filterLayer: r0 }), d] })
        : d;
}
var r2 = t(518477),
    r3 = t(996988),
    r7 = t(207634),
    r6 = t(561419),
    r9 = t(396095);
function r5(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rD.A)(n.id),
        o = (0, lK.Ay)(n.id),
        d = (0, rL.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, L.Ay)(P.A.USER_PROFILE_SIDEBAR),
        h = (0, rU.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rG.A)(u, o, r2.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rw.A)(m);
    function g() {
        (0, rb.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(L.f5, {
        value: u,
        children: (0, l.jsx)(rU.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rz.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: r3.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(r6.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tR.d_, {
                        className: i ? r6.BE : void 0,
                        children: [
                            (0, l.jsx)(rX.A, { children: (0, l.jsx)(rK.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: r6.wx,
                                children: [
                                    (0, l.jsx)(rB.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: r3.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rF.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: r7.T[r3.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r9.rf,
                                children: [
                                    (0, l.jsx)(rq.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rS.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rH.A, {
                                            displayProfile: o,
                                            themeType: r3.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r$.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rW.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rY.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rz.A.Overlay, {
                                              className: r9.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rW.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rV.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rW.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rY.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(r1, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rk.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var r8 = t(331322),
    r4 = t(249790),
    ae = t(254828),
    an = t(783123),
    at = t(966430);
function ai(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lK.Ay)(n.id),
        o = (0, rL.Ay)(),
        d = (0, m.bG)([l_.A], () => l_.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, L.Ay)(d ? P.A.BLOCKED_PROFILE_PANEL : P.A.IGNORED_PROFILE_PANEL),
        u = (0, rU.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rG.A)(c, a, r2.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(L.f5, {
        value: c,
        children: (0, l.jsx)(rU.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rz.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: r3.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tR.d_, {
                    children: (0, l.jsxs)("div", {
                        className: at.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: at.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: at.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: at.N1,
                                        children: [
                                            (0, l.jsx)(r4.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rS.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(r8.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(an.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lq.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(ae.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lq.Wn)({
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
var al = t(202091),
    as = t(717421),
    ar = t(31956),
    aa = t(673843),
    ao = t(594832),
    ad = t(321191),
    ac = t(679492),
    au = t(439053),
    ah = t(312381),
    am = t(657538),
    aA = t(984545),
    ap = t(193738),
    ag = t(558514),
    ax = t(394816),
    af = t(695366),
    aI = t(922590),
    aE = t(821269),
    aj = t(93246),
    aC = t(351906),
    ay = t(383199),
    ab = t(559506),
    a_ = t(361311),
    av = t(931481),
    aN = t(791556),
    aT = t(501193),
    aS = t(383448),
    aR = t(646986),
    aO = t(243166),
    aM = t(812993),
    aP = t(123292),
    aL = t(840411);
let aD = (0, st.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var ak = t(666810),
    aw = t(394300),
    aG = t(575593),
    aU = t(44120),
    aF = t(75678),
    aH = t(317560),
    aB = t(99161),
    aV = t(827258),
    aY = t(661492),
    aW = t(146423),
    az = t(662349),
    aq = t(479026),
    aK = t(636374),
    aX = t(699976),
    a$ = t(202541),
    aQ = t(733484),
    aJ = t(880465);
function aZ(e) {
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
        { trackUserProfileWishlistAction: g } = (0, rU.NJ)(),
        x = rO("DMSidePanelWishlistItemCard") ? aX.y.SIZE_78 : aX.y.SIZE_90,
        f = aX.Z[x],
        I = s.useCallback(() => {
            (g({
                action: r2.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        E = s.useCallback(() => {
            (g({
                action: r2.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                m());
        }, [m, t.id, r, t.productLine, g]),
        {
            onBodyClick: j,
            onOverlayClick: C,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, aK.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: E }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: aQ.kL,
        children: (0, l.jsxs)(aW.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(aQ.Nr, o),
            skuPreviewStyle: a()(aQ.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = b ? (0, aY.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, aY.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(aV.A, { className: aQ.Pf }),
                y &&
                    (0, l.jsx)(az.A, {
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
function a0(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, L.Ay)(
            ...(i ?? []),
            P.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, aB.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: a$.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, aH.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: a$.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(aZ, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function a1(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, aU.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: a$.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, aq.e)({ sku: n, giftRecipient: t, giftingOrigin: a$.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(aQ.ML, {
                    [aQ.M]: n?.tenantMetadata?.collectibles?.type === aG.R.AVATAR_DECORATION,
                    [aQ.Hm]: n?.tenantMetadata?.collectibles?.type === aG.R.PROFILE_EFFECT,
                    [aQ.hH]: n?.tenantMetadata?.collectibles?.type === aG.R.PROFILE_FRAME,
                    [aQ.qF]: n?.tenantMetadata?.collectibles?.type === aG.R.NAMEPLATE,
                    [aQ.l2]: n?.tenantMetadata?.collectibles?.type === aG.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(aZ, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function a2(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, aF.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: a$.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === ao.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(aZ, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(aJ.MO, { [aQ.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(aQ.fi, { [aQ.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(aQ.p7, { [aQ.SW]: h.length >= 10, [aQ.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function a3(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(a0, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(a1, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(a2, { sku: n, ...t });
        default:
            return null;
    }
}
var a7 = t(158045),
    a6 = t(249203),
    a9 = t(419731),
    a5 = t(695904),
    a8 = t(116331),
    a4 = t(713348),
    oe = t(535089),
    on = t(815637);
function ot(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, L.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rU.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, a8.A)(t),
        g = (0, m.bG)([a6.A], () => a6.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r2.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => n ?? [], [n]),
        I = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        E = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: ao.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => a7.Ay.isPremiumSku(e.skuId));
                if (!a7.Ay.isPremiumAtLeast(t.premiumType, a$.PremiumTypes.TIER_2) && !n) {
                    let n = aw.A.fromSKU((0, aL.rI)());
                    null != n && e.push({ item: n, source: ao.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, t.premiumType]),
        j = (0, s.useMemo)(
            () =>
                new Set(
                    E.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [E],
        ),
        C = (0, oe.A)({ wishlistId: r ?? null, onAction: I, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                E.map((e, n) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              a3,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, a9.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sx.Vq),
            [o, x, t, E, r, h, g],
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
              children: (0, l.jsxs)(rz.A.Overlay, {
                  ref: C,
                  className: on.kL,
                  children: [
                      p && (0, l.jsx)(a5.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: on.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: on.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(aM.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: nB.A.colors.BADGE_BACKGROUND_BRAND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(aP.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(r_.F, { children: (0, l.jsx)("div", { className: on.vY, children: y }) }),
                  ],
              }),
          });
}
function oi(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = aD.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, a4.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(ak.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(ot, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
    });
}
function ol(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([l_.A], () => ({
            relationshipType: l_.A.getRelationshipType(n.id),
            originApplicationId: l_.A.getOriginApplicationId(n.id),
        })),
        h = (0, aI.fi)(n.id),
        A = (0, aE.q)({ userId: n.id }),
        p = (0, m.bG)([aC.A], () => aC.A.hidePersonalInformation),
        g = (0, m.bG)([ad.A], () => ad.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([ad.A], () => ({ defaultWishlistId: ad.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: E } = (0, ao.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, aa.A)(I);
    let j = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: r9.rf,
        children: [
            (0, l.jsx)(ab.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: r9.pq,
                children: [
                    (0, l.jsx)(rq.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rS.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(aO.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rH.A, {
                            displayProfile: i,
                            themeType: r3.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aN.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rz.A.Overlay, {
                    children: (0, l.jsx)(av.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rz.A.Overlay,
                    {
                        children: (0, l.jsx)(av.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aS.A, { user: n }),
            i?.private &&
                (0, l.jsx)(rz.A.Overlay, { children: (0, l.jsx)(aT.A, { username: rS.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(rz.A.Overlay, {
                    className: r9.Lw,
                    children: (0, l.jsx)(rW.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: af.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aj.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r$.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rW.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rY.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: r9.kR,
                children: [
                    o && x && (0, l.jsx)(am.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aR.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(ay.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rW.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(a_.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rz.A.Overlay, {
                              className: r9.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rW.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rV.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(ay.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rW.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(a_.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rW.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rY.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(oi, {
                            profileOwner: n,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: E,
                            onClick: () => {
                                d?.({ tabSection: r2.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var os = t(114212),
    or = t(913453),
    oa = t(229187),
    oo = t(21241),
    od = t(503062),
    oc = t(51943),
    ou = t(847374),
    oh = t(320448),
    om = t(723200);
function oA(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rU.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? ou.a : oh._;
    return (0, l.jsxs)("section", {
        className: om.uW,
        children: [
            (0, l.jsxs)(nw.D, {
                className: a()(om.wx, om.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(om.p_, r), children: i }),
        ],
    });
}
var op = t(341278);
function og(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(),
        { context: s } = (0, rU.NJ)(),
        r = (0, tq.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, or.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rz.A.Overlay, {
              className: op.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oA, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: op.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  oc.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, tp.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oo.A, { className: op.yF }),
                  c &&
                      (0, l.jsx)(oA, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: op.p_,
                          onExpand: () => (0, oa.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: op.nC,
                                                children: [
                                                    (0, l.jsx)(os.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(os.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            od.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, rb.openUserProfileModal)({
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
function ox(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lK.Ay)(n.id),
        c = (0, rL.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, L.Ay)(P.A.USER_PROFILE_SIDEBAR),
        p = (0, rU.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rG.A)(A, d, r2.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rw.A)(g),
        I = (0, ac.fC)(),
        E = (0, rT.A)(d?.profileFrame?.skuId);
    (0, ar.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, as.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, rb.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([ad.A], () => ({ defaultWishlistId: ad.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, ao.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, aa.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(L.f5, {
        value: A,
        children: (0, l.jsx)(rU.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(ac.Hl, {
                value: I,
                children: (0, l.jsxs)(rz.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: r3.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(r6.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(ah.A, {}),
                        null != I.interactionType && (0, l.jsx)(al.animated.div, { style: j, className: r6.tB }),
                        (0, l.jsxs)(tR.d_, {
                            className: a()(r && r6.BE, !r && null != E && r6.It),
                            children: [
                                (0, l.jsxs)(rX.A, {
                                    children: [
                                        (0, l.jsx)(ap.A, { user: n, themeType: r3.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aA.A, { user: n }) : (0, l.jsx)(ag.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r6.wx,
                                    children: [
                                        (0, l.jsx)(rB.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: r3.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: r6.vK,
                                        }),
                                        (0, l.jsx)(au.A, { className: r6.oR }),
                                        (0, l.jsx)(rF.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r7.T[r3.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(ax.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: r3.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ol, {
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
                                        className: r6.sJ,
                                        children: (0, l.jsx)(am.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: r6.vS,
                                        children: (0, l.jsx)(oi, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: r2.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(og, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(r1, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: E,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rk.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != E && (0, l.jsx)(rQ.A, { frame: E, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var of = t(901600);
function oI(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lX(),
        [o, d] = (0, rM.A)(t),
        [c, u] = s.useState(!1),
        h = rO("UserProfileSidebarRenderer"),
        A = (0, lK.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rT.A)(p),
        x = (0, m.bG)([rN.A], () => rN.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rP.A)(i, e) : (0, rP.A)(t, void 0, e);
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
        I = rS.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? of.H : void 0,
        children: (0, l.jsx)(r_.F, {
            component: (0, l.jsx)(rv.A, {
                children: (0, l.jsx)(r_.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(ai, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(r5, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(ox, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oE = t(522556),
    oj = t(225315),
    oC = t(684407),
    oy = t(95701),
    ob = t(919638),
    o_ = t(763827),
    ov = t(812771),
    oN = t(506309),
    oT = t(598748),
    oS = t(681154),
    oR = t(975460),
    oO = t(587895),
    oM = t(429913),
    oP = t(201718),
    oL = t(339580),
    oD = t(633075),
    ok = t(903209),
    ow = t(382483),
    oG = t(385113);
let oU = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function oF(e) {
    let [n, t] = s.useState(new Set()),
        i = s.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []);
    return (0, l.jsx)(oU.Provider, {
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
                        { appsWithConfigs: E, isLoadingConfigs: j } =
                            ((t = sq.Q_.useSetting()),
                            s.useEffect(() => {
                                (0, ow.Wq)().catch(() => {});
                            }, []),
                            s.useEffect(() => {
                                t && (0, ow.i$)().catch(() => {});
                            }, [t]),
                            (i = (0, m.bG)([oG.A], () => oG.A.getFeaturedFetchState())),
                            (l = (0, m.bG)([oG.A], () => oG.A.getDeveloperFetchState())),
                            (r = (0, m.yK)([oG.A], () => oG.A.getFeaturedApplicationIds())),
                            (a = (0, m.yK)([oG.A], () => oG.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                isLoadingConfigs:
                                    i === oG.e.NOT_FETCHED ||
                                    i === oG.e.FETCHING ||
                                    (t && (l === oG.e.NOT_FETCHED || l === oG.e.FETCHING)),
                            }),
                        {
                            widgetApps: C,
                            userIdsWhoMightHaveWidgetData: y,
                            isFetchingApplications: b,
                        } = ((o = s.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === oS.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => n.has(e.id)) ?? [],
                            [e, n],
                        )),
                        (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                        (c = (0, m.bG)(
                            [oO.A],
                            () =>
                                d.length > 0 &&
                                d.some(
                                    (e) =>
                                        oO.A.isFetchingApplication(e) ||
                                        (null == oO.A.getApplication(e) && !oO.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (u = (0, oM.A)(d)),
                        (h = s.useMemo(
                            () =>
                                Object.fromEntries(
                                    u
                                        .filter(sx.Vq)
                                        .map((e) => [e.id, (0, oR.t)(e)])
                                        .filter(sx.QE)
                                        .filter((e) => {
                                            let [n, t] = e;
                                            return E.has(t.id);
                                        }),
                                ),
                            [E, u],
                        )),
                        (A = s.useMemo(
                            () => [...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id))],
                            [o, h],
                        )),
                        { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                        { identitiesByUserId: _, isLoadingIdentities: v } =
                            ((p = (0, m.cf)([oL.A], () =>
                                Object.fromEntries(y.map((e) => [e, oL.A.getUserIdentities(e)]).filter(sx.QE)),
                            )),
                            (g = (0, m.bG)([oL.A], () =>
                                y.some((e) => oL.A.getFetchState(e) === oL.e.NOT_FETCHED || oL.A.isFetchingUser(e)),
                            )),
                            s.useEffect(() => {
                                y.length > 0 && oP.P.fetchMany(...y.map((e) => [e]));
                            }, [y]),
                            { identitiesByUserId: p, isLoadingIdentities: g }),
                        { profilesByUserId: N, isLoadingProfiles: T } =
                            ((x = (0, m.cf)([ad.A], () =>
                                Object.fromEntries(y.map((e) => [e, ad.A.getUserProfile(e) ?? null]).filter(sx.QE)),
                            )),
                            (f = (0, m.yK)([ad.A], () =>
                                y.filter((e) => null == ad.A.getUserProfile(e) && !ad.A.isFetchingProfile(e)),
                            )),
                            (I = (0, m.bG)([ad.A], () => y.some((e) => ad.A.isFetchingProfile(e)))),
                            s.useEffect(() => {
                                for (let e of f) (0, ok.A)(e);
                            }, [f]),
                            { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                        S = (0, m.cf)(
                            [oG.A],
                            () => Object.fromEntries([...E].map((e) => [e, oG.A.getConfig(e)]).filter(sx.QE)),
                            [E],
                        ),
                        R = j || b || v || T,
                        O = s.useMemo(() => {
                            if (!R && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== oS.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let n = C[e.extra.application_id] ?? null;
                                    if (null == n) return e;
                                    let t = S[n.id] ?? null;
                                    if (null == t || null == t.surfaces[oT.m.ACTIVITY_ACCESSORY]) return e;
                                    let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                    if (i?.profile == null) return e;
                                    let l = N[e.author_id]?.widgets?.some((e) => (0, oD.E)(e, n.id)) ?? !1;
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
var oH = t(900797),
    oB = t(890856),
    oV = t(180170),
    oY = t(435738),
    oW = t(38055);
let oz = "content-inventory-feed",
    oq = `${oz}-settings`,
    oK = `${oz}-toggle`;
var oX = t(569709);
let o$ = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([oY.A], () => oY.A.hidden),
            h = (0, c.omit)((0, C.rm)(oq), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(oK), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                (0, j.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                    return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                });
            }, []),
            x = s.useCallback(() => (u ? (0, oV.Il)() : r()), [u, r]),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(oW.A, { ...h }),
                    (0, l.jsx)("span", { className: oX.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(oH.t, { className: oX.wT })
                              : o
                                ? (0, l.jsx)(ou.a, { className: oX.wT })
                                : (0, l.jsx)(oh._, { className: oX.wT })),
                          (0, l.jsx)("span", { className: oX.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(oB.s, {
                      ...A,
                      className: a()(oX.N1, { [oX.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: oX.N1, onContextMenu: g, children: f }),
        });
    }),
    oQ = function () {
        return null;
    };
var oJ = t(963307),
    oZ = t(424994);
let o0 = et.default.track;
function o1(e, n) {
    o0(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: oZ.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var o2 = t(468581),
    o3 = t(808666),
    o7 = t(414499),
    o6 = t(323384),
    o9 = t(55730),
    o5 = t(765379),
    o8 = t(359549),
    o4 = t(284525),
    de = t(482030),
    dn = t(583846),
    dt = t(506326);
t(333007);
var di = t(342952),
    dl = t(315710),
    ds = t(276293),
    dr = t(935063),
    da = t(778712),
    dd = t(696986),
    dc = t(97808),
    du = t(738188),
    dh = t(983851),
    dm = t(31300),
    dA = t(308528),
    dp = t(401843),
    dg = t(375499),
    dx = t(429433),
    df = t(324688);
let dI = (0, oy.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dE(e) {
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
        [p, g] = s.useState((0, sU.x7)("")),
        x = nN.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sF.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(df.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dI,
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
                : (t(n), A(""), g((0, sU.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dj(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rL.Ay)(),
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
                            children: (0, l.jsx)(dx.C, {
                                messageId: eo.dJq,
                                channel: dI,
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
                        className: df.mJ,
                        children: (0, l.jsx)(dg.A, {
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
var dC = t(402216),
    dy = t(822123),
    db = t(409626),
    d_ = t(692969),
    dv = t(711589),
    dN = t(607407),
    dT = t(832163),
    dS = t(533562),
    dR = t(805901),
    dO = t(565645);
t(879064);
var dM = t(7584);
(t(850992), t(690521));
var dP = t(806931),
    dL = t(307731),
    dD = t(866780);
function dk(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rw.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(nw.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dR.c, {
                config: dg.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(al.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dO.A, {
                            className: a()(dD.Zg, r, { [dD.c4]: t }),
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
(dL.EmojiIntention.CHAT,
    [
        dM.Ay.getByName("thumbsup"),
        dM.Ay.getByName("eyes"),
        dM.Ay.getByName("laughing"),
        dM.Ay.getByName("watermelon"),
        dM.Ay.getByName("fork_and_knife"),
        dM.Ay.getByName("yum"),
    ].filter(sx.Vq));
var dw = t(636585),
    dG = t(543465),
    dU = t(607567),
    dF = t(774926),
    dH = t(20805),
    dB = t(22869),
    dV = t(623671),
    dY = t(428249),
    dW = t(327098),
    dz = t(576757),
    dq = t(202195),
    dK = t(140651),
    dX = t(131607),
    d$ = t(345394);
let dQ = function (e) {
    let { children: n } = e,
        [t, i] = (0, dX.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lT.i.USER_DISMISS);
    }, [i]);
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lu.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: d$.A },
                  }),
              ],
          });
};
var dJ = t(315246),
    dZ = t(866323),
    d0 = t(252392);
let d1 = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([M.Ay], () => M.Ay.useReducedMotion),
        r = (0, dZ.p)(
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
                (0, l.jsx)(al.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(d0.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(d0.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var d2 = t(381941),
    d3 = t(231188);
let d7 = (0, n3.Fe)({
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
                t.e("101105"),
                t.e("263406"),
                t.e("1955"),
                t.e("341161"),
                t.e("410526"),
                t.e("202985"),
                t.e("603619"),
                t.e("222969"),
                t.e("515363"),
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
                t.e("831377"),
                t.e("709976"),
                t.e("750955"),
                t.e("953343"),
                t.e("279774"),
                t.e("763945"),
                t.e("261204"),
                t.e("686731"),
                t.e("807432"),
                t.e("873532"),
                t.e("590088"),
                t.e("807003"),
                t.e("46083"),
                t.e("152133"),
                t.e("747802"),
                t.e("626353"),
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
                t.e("699806"),
                t.e("84978"),
                t.e("894292"),
                t.e("153302"),
                t.e("88683"),
                t.e("363874"),
                t.e("923981"),
                t.e("750370"),
                t.e("972281"),
                t.e("307107"),
                t.e("896622"),
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
                t.e("863232"),
                t.e("517888"),
                t.e("811133"),
                t.e("959880"),
                t.e("174016"),
                t.e("907167"),
                t.e("910471"),
                t.e("11301"),
                t.e("861060"),
                t.e("364827"),
                t.e("77333"),
                t.e("56366"),
                t.e("217229"),
                t.e("477175"),
                t.e("960235"),
                t.e("402368"),
                t.e("190779"),
                t.e("910486"),
                t.e("221856"),
                t.e("678157"),
                t.e("147134"),
                t.e("996481"),
                t.e("331988"),
                t.e("10866"),
                t.e("40291"),
                t.e("733115"),
                t.e("397270"),
                t.e("373122"),
                t.e("217951"),
                t.e("755936"),
                t.e("609705"),
                t.e("749894"),
                t.e("904448"),
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
                t.e("630267"),
                t.e("576909"),
                t.e("27355"),
                t.e("407170"),
                t.e("255580"),
                t.e("299854"),
                t.e("608557"),
                t.e("247660"),
                t.e("102328"),
                t.e("649362"),
                t.e("773534"),
                t.e("153535"),
                t.e("147864"),
                t.e("276177"),
                t.e("93461"),
                t.e("437961"),
                t.e("604172"),
                t.e("949013"),
                t.e("820667"),
            ]).then(t.bind(t, 316725)),
        webpackId: 316725,
    }),
    d6 = s.createContext(void 0);
function d9(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, dl.tj)(t),
        (0, l.jsx)(d6.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: d3.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function d5(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, dK.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(d3.ZK, e, i), style: s, children: n }),
        })
    );
}
function d8(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: d3.$m, children: n });
}
function d4(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [E, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [lY.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lY.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: O } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, dq.A)(t),
                o = (0, tG.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iO.A)(n?.id),
                c = (0, m.bG)([nO.A], () => (null != a ? nO.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dU.Ay], () => (null != a ? dU.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lv.A], () => lv.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && dG.Ay.isChannelMuted(null, n),
                            i = l_.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(du.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: d3.vb,
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
                            className: d3.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(nw.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, t5.iN)(a.id), i?.(a));
                                        },
                                        className: d3.I3,
                                        children: [
                                            (0, l.jsx)(th.Ay, {
                                                guild: c,
                                                size: th.Ay.Sizes.SMOL,
                                                className: d3.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oh._, {
                                                size: "xxs",
                                                color: nB.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dh.H, { size: "xs", color: nB.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: d3.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dw.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dc.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: da._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: d3.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dd.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lB.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dm.k : dh.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: M } = (0, dW.A)(h),
        P =
            ((n = M),
            (t = (0, m.bG)([nO.A], () => nO.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tG.Ay)(i)),
            null != n && null != t && null != i && oy.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: d3.kP,
                              children: [
                                  (0, l.jsxs)(nw.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, t5.iN)(i.id),
                                      className: d3.I3,
                                      children: [
                                          (0, l.jsx)(th.Ay, {
                                              guild: t,
                                              size: th.Ay.Sizes.SMOL,
                                              className: d3.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oh._, {
                                              size: "xxs",
                                              color: nB.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(ds.N, { size: "xs", color: nB.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: d3.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dw.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dc.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: da._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: d3.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dd.h, { size: 16 }),
                      ],
                  })
                : null),
        L = null != O && 0 === p.length ? [O] : p,
        D = L.length > 0,
        k = L.length >= 2,
        [w, G] = s.useState(!D),
        U = rS.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tG.Ay)(o, !0),
        H =
            null != o && E
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${U}` }),
        B = E ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function V(e) {
        let n,
            { emoji: t } = e;
        if (null != t) {
            if (
                (et.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: oZ.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, tk.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                E)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dA.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: oZ.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, tk.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await dA.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? oZ.PA.DM_REACTION_MESSAGE_SENT : oZ.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, dY.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: d2.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, t));
    }
    let q = g ?? R ?? P;
    function K() {
        (j((e) => !e), w && C?.focus());
    }
    function X(e) {
        (G(e), e && C?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(d1, { sent: T, shown: v, className: d3.Jt }),
            q ??
                (0, l.jsx)(dQ, {
                    children: (0, l.jsxs)("div", {
                        className: d3.T7,
                        children: [
                            (0, l.jsx)(ce, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dj, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? d3.P2 : d3.VE,
                children: [
                    (0, l.jsx)(dE, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: E ? o : void 0,
                        showEmojiButton: null != q,
                        className: d3.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(nw.D, {
                                          className: d3.wD,
                                          onClick: K,
                                          children: E
                                              ? (0, l.jsx)(ds.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dr.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(nw.D, {
                            onClick: () => X(!1),
                            className: d3.i3,
                            children: (0, l.jsx)(tz.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: nB.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: d3.fh,
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
let ce = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!M.Ay.keyboardModeEnabled && !i,
        o = (0, dy.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tg._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(dk, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: d3.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function cn(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, dz.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, dq.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: d3.MH,
        children: [
            (0, l.jsxs)("div", {
                className: d3.WP,
                children: [
                    (0, l.jsx)(di.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: da._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dd.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(d3.Xn, d3.zA),
                        children: z.intl.format(t, {
                            user0: rS.Ay.getName(o, n?.id, g[0]),
                            user1: rS.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(d3.Mj, d3.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    dB.A,
                                    {
                                        textClassName: a()(d3.Mj, d3.nk),
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
                                    dB.A,
                                    {
                                        textClassName: a()(d3.Mj, d3.nk),
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
            null != p && (0, l.jsx)(dC.Ay, { size: dC.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(dJ.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function ct(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(nw.D, { className: d3.Zw, onClick: t, children: n });
}
function ci(e) {
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
        I = (0, dH.zD)(f),
        E = I ? f.extra?.application_id : void 0,
        j = (0, dS.W)();
    null != j && (E = j);
    let C = (0, d_.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : E,
                source: db.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(oZ.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dF.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dT.A], () => dT.A.getDetectableIdsToApplicationIds()),
        N = I ? C : void 0,
        T = s.useContext(d6);
    return (0, l.jsxs)("div", {
        className: d3.au,
        children: [
            (0, l.jsx)(cn, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(d5, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: d3.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: d3.Fb,
                                children: (0, l.jsx)(dV.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dV.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: d3.iC,
                                children: [
                                    (0, l.jsx)(ct, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(d3.$2, { [d3.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(ct, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: d3.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dd.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: d3.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != v[E]
                ? (0, l.jsx)(d7, {
                      className: d3.zu,
                      applicationId: E,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aX.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cl(e) {
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
        { actionString: p, canWatch: g } = (0, dv.K)(a),
        { entry: x } = A,
        f = (0, dH.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        E = (0, dS.W)();
    null != E && (I = E);
    let j = (0, d_.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: db.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(oZ.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, dW.A)(x),
        { largeImage: N, smallImage: T } = (0, dF.D8)(y, b ?? v),
        { largeImage: S } = (0, dF.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        O = (0, m.bG)([dT.A], () => dT.A.getDetectableIdsToApplicationIds()),
        M = s.useContext(d6);
    return (0, l.jsxs)("div", {
        className: d3.au,
        children: [
            (0, l.jsx)(cn, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(d5, {
                backgroundImgSrc: S?.src,
                className: d3.uR,
                children: [
                    (0, l.jsx)(ct, {
                        onClick: g
                            ? () => {
                                  (lp.default.selectVoiceChannel(a.channelId), (0, dp.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: d3.nh,
                            children: [
                                (0, l.jsx)(dN.A, { className: d3.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: d3.NE,
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
                        className: d3.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: d3.Fb,
                                    children: (0, l.jsx)(dV.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: dV.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: d3.gv,
                                children: [
                                    (0, l.jsx)(ct, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: M,
                                            variant: "heading-md/semibold",
                                            className: d3.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(ct, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: d3.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dd.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != O[I]
                ? (0, l.jsx)(d7, {
                      className: d3.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aX.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cs = t(299846);
let cr = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cs.u)(t);
    function u() {
        (0, de.hg)(t.extra.application_id);
    }
    let { data: h } = (0, nR.YY)(t.extra.application_id),
        m = (0, o8.Ay)({ application: h, analyticsLocations: [P.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dt.iT, { location: dt.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(ci, {
            channel: n,
            userDescription: (0, dn.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, o9.A)(d, eo.jUm.JOIN) || (0, o5.A)(d),
        f = g
            ? (0, l.jsx)(o4.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: o3.I,
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
                      icon: o7.h,
                  }),
        E =
            null != I || r
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: o6.k,
                  }),
        j = [I, g && !r ? f : E].filter(sx.Vq);
    return (0, l.jsxs)(d9, {
        children: [
            p,
            (0, l.jsx)(d8, {
                children: (0, l.jsx)(d4, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: n,
                    entry: t,
                    buttons: j,
                }),
            }),
        ],
    });
};
var ca = t(322789),
    co = t(808380),
    cd = t(687966),
    cc = t(960076),
    cu = t(544441),
    ch = t(562708),
    cm = t(139286);
function cA(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(t),
        s = (0, o8.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cm.A)({
            name: ch.ImpressionNames.CLOUD_PLAY_CTA,
            type: ch.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: o7.h,
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
var cp = t(601007),
    cg = t(648246),
    cx = t(308335),
    cf = t(790381),
    cI = t(266080),
    cE = t(968309),
    cj = t(30370);
function cC(e) {
    let n = (0, m.bG)([cj.A], () => cj.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cE.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cy = t(18282);
let cb = [...ca.n, dt.Yq],
    c_ = {
        [co.Y.DESKTOP]: null,
        [co.Y.LINUX]: null,
        [co.Y.MACOS]: null,
        [co.Y.NINTENDO]: null,
        [co.Y.IOS]: null,
        [co.Y.ANDROID]: null,
        [co.Y.XBOX]: cI.A,
        [co.Y.PLAYSTATION]: cf.A,
    },
    cv = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cs.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, dq.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? c_[g] : null,
            I = cC(g === co.Y.XBOX ? eo.fg2.XBOX : g === co.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: E } = (0, nR.YY)(x),
            j = (0, cu.A)(x),
            { analyticsLocations: C } = (0, L.Ay)(P.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, o8.JC)(E),
            b = (0, cx.o)(h?.application_id ?? m?.applicationId ?? E?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dt.mG, {
                location: null == A ? dt.N5.POPOUT : dt.N5.STREAMING_POPOUT,
                children: cb.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(ci, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cy.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dn.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cp.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cl, {
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
                              j.length > 0
                                  ? (0, l.jsx)(cp.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && y
                    ? (0, l.jsx)(
                          cA,
                          { application: E, analyticsLocation: P.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, o9.A)(h, eo.jUm.JOIN) || (0, o5.A)(h))
                    ? (0, l.jsx)(
                          o4.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cd.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cc.A)(h)
                    ? (0, l.jsx)(cg.A, { activity: h, size: "md", variant: "primary", icon: nV.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sx.Vq);
        return (0, l.jsxs)(d9, {
            children: [
                v,
                (0, l.jsx)(d8, {
                    children: (0, l.jsx)(d4, {
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
    cN = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cT(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, nR.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, L.Ay)(P.A.CLOUD_PLAY_POPOVER),
        o = (0, o8.Ay)({ application: r, analyticsLocations: a }),
        d = (0, tk.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cN(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, dX.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lT.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, E] = s.useState(!1);
    return (
        f && !I && E(!0),
        (0, cm.A)(
            {
                name: ch.ImpressionNames.CLOUD_PLAY_CTA,
                type: ch.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lu.A, {
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
                    icon: o7.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lT.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cS = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cT, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cR = t(363670),
    cO = t(205327),
    cM = t(52133),
    cP = t(835723),
    cL = t(172710),
    cD = t(655116),
    ck = t(763758),
    cw = t(286617),
    cG = t(533207),
    cU = t(121090),
    cF = t(693879),
    cH = t(809854),
    cB = t(272984),
    cV = t(170699);
function cY(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, cH.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dn.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cV.lu,
              children: [
                  (0, l.jsx)(cF.z, { entry: t }),
                  (0, l.jsx)("div", { className: cV.Lt, children: (0, l.jsx)("div", { className: cV.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cV.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function cW(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cR.u7)(r),
        g = cC(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cD.A, sl.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cw.A)(cD.A, sl.default, p, c) : void 0),
            [c, p],
            cM.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        E = [];
    u.media.provider === cO.X.SPOTIFY &&
        ((t = () => {
            (0, cL.Mp)(c);
        }),
        (i = () => {
            (0, cL.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cL.Mp)(c);
        }),
        (I = (0, l.jsx)(ck.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: d3.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cL.mN)(c, p.id, e);
            },
        })),
        f?.syncDisabled === !1 &&
            E.push(
                (0, l.jsx)(
                    x.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: cP.J,
                        onClick: function () {
                            null != f && ((0, cG.A)(f, cB.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(ci, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cO.X.SPOTIFY
                ? (0, l.jsx)(cy.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: cU.A })
                : null,
        userDescription: (0, dn.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(cY, { activity: c }),
    });
    return (0, l.jsxs)(d9, {
        children: [
            j,
            (0, l.jsx)(d8, {
                children: (0, l.jsx)(d4, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: E,
                }),
            }),
        ],
    });
}
var cz = t(903134),
    cq = t(56121),
    cK = t(263577),
    cX = t(868065),
    c$ = t(804779);
let cQ = [dt.Y8],
    cJ = [cq.j.WEEK],
    cZ = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, dF.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dn.TQ)(n);
        return null != r && (0, sx.S1)(r, cJ)
            ? (0, l.jsxs)(cX.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(cX.UA, {
                          children: [
                              (0, l.jsx)(cX.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(cX.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(dt.mG, {
                                  location: dt.N5.CARD,
                                  children: cQ.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(cK.V, { src: s?.src, size: 48, className: c$.xn }),
                  ],
              })
            : null;
    });
var c0 = t(210528);
let c1 = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, dn.TQ)(t),
        u = cC(eo.fg2.SPOTIFY);
    if (null == d || !(0, sx.S1)(c, cJ)) return null;
    function h() {
        let e = cB.M0.ALBUM,
            n = c0.A.isProtocolRegistered()
                ? cB.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : cB.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(d9, {
        children: [
            (0, l.jsx)(ci, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cB.M0.ARTIST,
                        n = c0.A.isProtocolRegistered()
                            ? cB.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : cB.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === cO.X.SPOTIFY
                        ? (0, l.jsx)(cy.A, { onClick: u, Icon: cU.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dt.mG, {
                    location: dt.N5.POPOUT,
                    children: cQ.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(d8, {
                children: (0, l.jsx)(d4, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var c2 = t(977001);
let c3 = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cs.u)(t),
        c = (0, dn.ty)(t),
        u = (0, dn.TQ)(t);
    if (null == a || null == c || null == u || !(0, c2._E)(u)) return null;
    let h = null != t.extra.platform ? c_[t.extra.platform] : null;
    return (0, l.jsxs)(d9, {
        children: [
            (0, l.jsx)(ci, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cy.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dt.mG, {
                    location: dt.N5.POPOUT,
                    children: c2.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(d8, {
                children: (0, l.jsx)(d4, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var c7 = t(514243),
    c6 = t(347306),
    c9 = t(123917),
    c5 = t(998218);
let c8 = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cC(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = c5.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, c9.h)({ href: c5.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(d9, {
              children: [
                  (0, l.jsx)(ci, {
                      channel: n,
                      entry: t,
                      userDescription: (0, dn.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cy.A, {
                          onClick: a,
                          Icon: c6.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dt.mG, {
                          location: dt.N5.POPOUT,
                          children: c7.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(d8, {
                      children: (0, l.jsx)(d4, {
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
function c4(e) {
    return e?.type === oJ.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oS.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function ue(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oS.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(ca.A, { ...t, entry: n });
        case oS.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(c7.A, { ...t, entry: n });
        case oS.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(c2.Ay, { ...t, entry: n });
        case oS.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cZ, { ...t, entry: n });
        case oS.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cR.Ay, { ...t, entry: n });
        case oS.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(o2.A, { ...t, entry: n });
        default:
            return null;
    }
}
function un(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oS.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cS, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function ut(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(ui, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(oZ.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function ui(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oS.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cv, { ...t, entry: n });
        case oS.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(c8, { ...t, entry: n });
        case oS.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(c3, { ...t, entry: n });
        case oS.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(c1, { ...t, entry: n });
        case oS.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cW, { ...t, entry: n });
        case oS.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cr, { ...t, entry: n });
        default:
            return null;
    }
}
let ul = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cs.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(oU);
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
        [E, y] = s.useState(!1),
        [b, _] = s.useState(!1),
        v = (0, m.bG)([M.Ay], () => M.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        E && v && _(!0);
    }, [E, v]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, j.L3)(e, async () => {
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
                o1(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        o1(oZ.PA.CARD_POPOUT_OPEN, e);
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
            c && (0, l.jsx)(un, { ...r, targetElementRef: a }),
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
                        return (0, l.jsx)(cz.J.Provider, {
                            value: O,
                            children: (0, l.jsx)(ut, {
                                closePopout: n,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: E,
                    positionKey: o,
                    onRequestOpen: () => R(f),
                    onRequestClose: () => {
                        b && O();
                    },
                    spacing: 8,
                    children: (e, n) => {
                        let { isShown: t } = n;
                        return (0, l.jsx)(nw.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                E || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(ue, {
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
var us = t(531685),
    ur = t(99066),
    ua = t(376261),
    uo = t(99753),
    ud = t(136722),
    uc = t(860071);
let uu = [],
    uh = new Set(),
    um = new Set();
var uA = t(808323);
let up = new Set([
    oS.ContentInventoryEntryType.PLAYED_GAME,
    oS.ContentInventoryEntryType.WATCHED_MEDIA,
    oS.ContentInventoryEntryType.TOP_GAME,
    oS.ContentInventoryEntryType.TOP_ARTIST,
    oS.ContentInventoryEntryType.LISTENED_SESSION,
    oS.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var ug = t(498642);
let ux = (0, st.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uf = t(293860);
let uI = { cooldownDurationMs: 60 * se.A.Millis.DAY };
function uE(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: ux.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = sa(),
                i = (0, m.bG)([ug.A], () => ug.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i <= 200);
        })(n);
    return (0, l.jsx)(lx.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uI,
        groupName: lT.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sm, {
                      className: uf.K,
                      analyticsLocation: P.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uj = t(728321),
    uC = t(282006);
let uy = er.Ay.getEnableHardwareAcceleration(),
    ub = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    u_ = s.memo(function (e) {
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
                premiumSince: E,
                nameplate: C,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != E ? new Date(E) : null,
            { analyticsLocations: S } = (0, L.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, j.L3)(e, async () => {
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
                                t.e("307059"),
                                t.e("309291"),
                                t.e("343116"),
                                t.e("711617"),
                                t.e("470314"),
                                t.e("70515"),
                                t.e("404524"),
                                t.e("654148"),
                                t.e("666939"),
                                t.e("717334"),
                                t.e("184841"),
                            ]).then(t.bind(t, 107632)),
                            n = lv.A.isInChannel(eG.Ay.getVoiceChannelId(), c.id);
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
                    shouldAnimateStatus: uy,
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
    uv = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != n ? V.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(u_, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uN(e) {
    let { index: n } = e,
        t = (0, C.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class uT extends s.Component {
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
        if (r?.id === oz) return (0, s.createElement)(o$, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                uj.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: ub,
                    children: (0, s.createElement)(uC.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uC.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === oJ.S9.CONTENT_INVENTORY) {
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
            if (r.type === oJ.S9.MEMBER && "user" in r) {
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
                    uv,
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
            if (r.type === oJ.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    ul,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === oJ.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(oQ, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uN, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === oz) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? c4(t[i + 1 + l]) : n;
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
            .filter(sx.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== oJ.S9.MEMBER ||
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
                (0, l.jsx)(sB.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(r_.F, {
                                component: (0, l.jsx)(rv.A, {
                                    children: (0, l.jsx)(r_.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tG.m1)(t, ee.default, l_.A),
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
function uS(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(P.A.MEMBER_LIST),
        r = (0, m.bG)([M.Ay], () => M.Ay.keyboardModeEnabled),
        o = (0, m.cf)([oJ.Ay], () => oJ.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uA.A)({ id: oZ.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cM.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uc.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uu;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uh;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    ud.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => up.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [oY.A, uo.A],
                            () => {
                                let e = uo.A.getDebugImpressionCappingDisabled();
                                return !(0, ur.sE)("useFilterImpressionCappedContent") || e
                                    ? um
                                    : oY.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: um };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, dn.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([uo.A], () => uo.A.getFeedRequestId(oZ.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oU).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([oY.A], () => oY.A.hidden),
                A = (0, m.bG)([us.A], () => us.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([nO.A], () => nO.A.getGuild(r), [r]),
                x = ((0, ua.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, E, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: oJ.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: oJ.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: oz,
                        type: oJ.S9.CONTENT_INVENTORY_GROUP,
                        key: oz,
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
                        feedHeight: e.map(c4).reduce((e, n) => e + n, 0),
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
                            t = Math.min(j?.length ?? 0, n);
                        C.current = Math.max(C.current, t);
                    },
                    [j],
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
                                (o0(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: oZ.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, ur.sE)("useInjectContentInventoryFeed") &&
                                    nf.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: I, version: E, updateMaxRowSeen: v }
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
    let g = (0, oN.W)("lg") + (0, oN.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = A.current;
                if (null == t) return;
                let i = n === oq || n === oK ? 0 : parseInt(n, 10),
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
        E = (0, y.Ay)({ id: `members-${n.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: I });
    return (0, l.jsx)(L.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: [
                (0, l.jsx)(uE, { guildId: n.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: E,
                    children: (0, l.jsx)(uT, {
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
            ],
        }),
    });
}
function uR(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(oF, { children: (0, l.jsx)(uS, { channel: i, className: t }) }), [i, t]);
}
var uO = t(888904);
let uM = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uO.kL,
        children: [
            (0, l.jsxs)(lc.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lc.A.Icon, { icon: ds.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lc.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uO.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uO.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uO.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uP = t(909735),
    uL = t(943712),
    uD = t(274541),
    uk = t(746080),
    uw = t(516607),
    uG = t(999900);
function uU() {
    return (0, l.jsx)("div", { className: uG.wG, children: (0, l.jsx)(g.y, {}) });
}
let uF = (0, n3.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("229511"),
                t.e("599660"),
                t.e("452880"),
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
        renderLoader: uU,
        name: "ForumChannel",
    }),
    uH = (0, n3.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("770583"),
                t.e("43853"),
                t.e("817006"),
                t.e("154168"),
                t.e("979585"),
                t.e("344322"),
                t.e("191934"),
                t.e("30750"),
            ]).then(t.bind(t, 422445)),
        webpackId: 422445,
        renderLoader: uU,
        name: "AppChannel",
    });
function uB() {
    return Promise.all([
        t.e("651299"),
        t.e("426965"),
        t.e("256172"),
        t.e("859821"),
        t.e("113561"),
        t.e("368991"),
        t.e("223213"),
        t.e("318702"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("375971"),
        t.e("792818"),
        t.e("630279"),
        t.e("460582"),
        t.e("477751"),
        t.e("245851"),
        t.e("998392"),
        t.e("703540"),
        t.e("728723"),
        t.e("794188"),
        t.e("740705"),
        t.e("730227"),
        t.e("374962"),
        t.e("770583"),
        t.e("64097"),
        t.e("43853"),
        t.e("529659"),
        t.e("693684"),
        t.e("389684"),
        t.e("45646"),
        t.e("604456"),
        t.e("459397"),
        t.e("847810"),
        t.e("249727"),
        t.e("784573"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("93461"),
        t.e("437961"),
        t.e("711617"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("245691"),
        t.e("949013"),
        t.e("256373"),
        t.e("33448"),
        t.e("420577"),
        t.e("79216"),
        t.e("815275"),
        t.e("71223"),
        t.e("360536"),
        t.e("704374"),
        t.e("986300"),
        t.e("817006"),
        t.e("932011"),
        t.e("465694"),
        t.e("874821"),
        t.e("426792"),
        t.e("769014"),
        t.e("154168"),
        t.e("815057"),
        t.e("623547"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("726223"),
        t.e("979585"),
        t.e("678827"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("60701"),
        t.e("975076"),
        t.e("736793"),
        t.e("112733"),
        t.e("586546"),
        t.e("191934"),
        t.e("792461"),
    ]).then(t.bind(t, 540462));
}
let uV = (0, n3.Fe)({ createPromise: uB, webpackId: 540462, name: "ChannelCall", renderLoader: uU });
function uY() {
    return Promise.all([
        t.e("770583"),
        t.e("998392"),
        t.e("703540"),
        t.e("368991"),
        t.e("256172"),
        t.e("223213"),
        t.e("318702"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("375971"),
        t.e("792818"),
        t.e("630279"),
        t.e("45646"),
        t.e("389684"),
        t.e("728723"),
        t.e("794188"),
        t.e("460582"),
        t.e("477751"),
        t.e("740705"),
        t.e("730227"),
        t.e("153965"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("93461"),
        t.e("437961"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("245691"),
        t.e("949013"),
        t.e("256373"),
        t.e("33448"),
        t.e("420577"),
        t.e("79216"),
        t.e("815275"),
        t.e("71223"),
        t.e("360536"),
        t.e("704374"),
        t.e("465694"),
        t.e("874821"),
        t.e("426792"),
        t.e("769014"),
        t.e("623547"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("979585"),
        t.e("678827"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("60701"),
        t.e("975076"),
        t.e("580372"),
    ]).then(t.bind(t, 507007));
}
let uW = (0, n3.Fe)({ createPromise: uY, webpackId: 507007, name: "StageChannelCall", renderLoader: uU }),
    uz = (0, n3.Fe)({
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
            return (0, l.jsx)(sv, {});
        },
    }),
    uq = (0, n3.Fe)({
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
    uK = (0, n3.Fe)({
        createPromise: () => Promise.all([t.e("386345"), t.e("269178"), t.e("715268")]).then(t.bind(t, 98863)),
        webpackId: 98863,
        name: "FriendsSidebar",
    });
class uX extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, ry.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? uB()
            : e === eo.rbe.GUILD_STAGE_VOICE && uY();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, t5.iN)(e.id);
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
            (0, rb.openUserProfileModal)({
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
            (0, j.L3)(e, async () => {
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
            (0, j.L3)(e, async () => {
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
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("463317"),
                    t.e("926132"),
                    t.e("146652"),
                    t.e("893190"),
                    t.e("189673"),
                    t.e("882073"),
                    t.e("797558"),
                    t.e("955557"),
                    t.e("691994"),
                    t.e("576665"),
                    t.e("947502"),
                    t.e("245996"),
                    t.e("700792"),
                    t.e("592822"),
                    t.e("529422"),
                    t.e("823427"),
                    t.e("965789"),
                    t.e("307059"),
                    t.e("309291"),
                    t.e("198415"),
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
        return e?.hasFlag(uk.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iS.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(nT.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dP.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iN.A,
                  { size: dC.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    a.push((0, l.jsx)(lO, { channel: e }, "calls")),
                    a.push((0, l.jsx)(i1, { channel: e }, "pins")),
                    a.push((0, l.jsx)(lM.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    a.push((0, l.jsx)(l$, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    a.push((0, l.jsx)(lH, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lO, { channel: e }, "calls")),
                    a.push((0, l.jsx)(i1, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, l.jsx)(lM.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    a.push((0, l.jsx)(iQ, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && a.push((0, l.jsx)(ia, { channel: e })),
                    null == n || n.isForumLikeChannel() || a.push((0, l.jsx)(rh, { channel: n }, "browser")),
                    e.isVocalThread() && a.push((0, l.jsx)(lW, { channel: e }, "thread-call")),
                    a.push((0, l.jsx)(iA, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(i1, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, l.jsx)(iQ, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && a.push((0, l.jsx)(i9, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(rg, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (a.push((0, l.jsx)(rh, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(iJ.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(i1, { channel: e }, "pins")),
                    (0, nk.PD)(e.guild_id, "channel_header") &&
                        a.push((0, l.jsx)(iX, { channelId: e.id }, "conversations")),
                    a.push((0, l.jsx)(iQ, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && a.push((0, l.jsx)(i9, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(nD, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                (a.push((0, l.jsx)(ny, { channel: e }, "popout")),
                    a.push((0, l.jsx)(rh, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(iJ.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(i1, { channel: e }, "pins")),
                    a.push((0, l.jsx)(iQ, { channelId: e.id }, "members")),
                    a.push((0, l.jsx)(iq, { channelId: e.id }, "chat")),
                    a.push((0, l.jsx)(nA, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && a.push((0, l.jsx)(ld, {}, "game-invite-channel-learn-more")),
                    t ||
                        (a.push((0, l.jsx)(ls, { channel: e }, "forum-onboarding")),
                        a.push((0, l.jsx)(iJ.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, l.jsx)(iQ, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                a.push((0, l.jsx)(iQ, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(iQ, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(iQ, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(iQ, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: uG.u8,
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, t5.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = o || c,
            g = r || p;
        return (0, l.jsxs)("div", {
            className: uG.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && r ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lc.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(uG.DD, r, { [uG.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: c,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tF.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tF.zF)({
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
                                              className: uG.u8,
                                              children: (0, l.jsx)(x.$, {
                                                  onClick: () => (0, tH.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tF.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sy.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: n, spoilerGatingChannelId: t } = this.props;
        return !n && null == t && e;
    }
    renderCall() {
        let { channel: e, isStageUnifiedCall: n } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
                if (!n) return (0, l.jsx)(uW, { channel: e, popoutType: nv.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    uV,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
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
        return (0, l.jsx)(e9, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(ik, { guildId: n.id })
                : (0, l.jsx)(iR.H, { guildId: n.id, children: (0, l.jsx)(iV, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(oE.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tV.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tD, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(uF, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return e.type === eo.rbe.GUILD_APP
            ? (0, l.jsx)(uH, { channel: e }, e.id)
            : (0, l.jsx)(tU.A, { channel: e, guild: n, chatInputType: nN.oU.NORMAL }, null != n ? n.id : "home");
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
            return (0, l.jsx)(oI, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sC, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uR, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uR, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(n2, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(uz, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => iT(l0.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, oj.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case iW.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rn, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case iW.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rC, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case iW.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? iy : rC;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (null != n && (0, oy.ZV)(n.type)) {
                        e = (0, l.jsx)(uD.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case iW.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iW.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: uG.uC,
                    children: (0, l.jsx)(uq, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iY.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(ov.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? ov.X.PostSidebar : ov.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(uM, {});
        if (null == e) return (0, l.jsx)(uL.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            E = (0, uP.UN)("Channel"),
            j = null != d && !I,
            C = (0, oy.nO)(e.type) && !o,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE,
                        className: a()(uG.TE, {
                            [uG.js]: (I && !E) || j,
                            [uG.Rs]: I ? !E || g : j || x,
                            [uG.jl]: I && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: uG.x4,
                                      channel: e,
                                      draftType: iE.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uG.Qs, { [uG.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(n7.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: uG.zP, children: b }) : b,
                x && (0, l.jsx)(uK, {}),
            ],
        });
    }
}
let u$ = (0, ef.A)(uX),
    uQ = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
            c = (0, m.bG)([eG.Ay], () => eG.Ay.getVoiceChannelId()),
            g = (0, m.bG)([ew.A], () => r ?? ew.A.getChannel(d), [d, r]),
            x = (0, tw.DZ)(),
            f = (0, tw.e4)(g, "ConnectedChannel"),
            j = (0, m.bG)([ew.A], () => ew.A.getChannel(c), [c]),
            C = f?.parent_id,
            y = (0, m.bG)([ew.A], () => ew.A.getChannel(C), [C]),
            b = (0, m.bG)([nO.A], () => nO.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: _ } = (0, iO.A)(f?.id ?? void 0),
            v = (0, m.bG)(
                [n_.A],
                () => {
                    let e = null != d ? n_.A.getParticipants(d) : [],
                        n = null != d ? n_.A.getActivityParticipants(d) : [];
                    return e.length - n.length > 0;
                },
                [d],
            ),
            N = (0, iv.A)(),
            T = (0, m.bG)([eG.Ay], () => (N?.channelId ?? eG.Ay.getVoiceChannelId()) === f?.id),
            S = (0, m.bG)([ej.Ay], () => (null != f ? ej.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, m.bG)([o_.A], () => o_.A.isConnected()),
            O = (0, eE.Ay)(R),
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
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            L = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            D = null != P && !(0, ev.A)(f?.id) && L === eZ.Gd.PANEL,
            k = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: w, isUserInThisVoice: G } = (0, m.cf)([lv.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lv.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lv.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !D && v,
            F = f?.isGuildVocal() || U || (w && (G || !k)),
            H = (0, sT.e)(f, "channel"),
            B = (0, m.bG)([nx.A], () => {
                let e = (0, nm.ny)(nx.A.getMainFrame());
                return e?.data.layoutMode === nm.y0.FOCUSED && e.intent === nm.sV.MAIN;
            }),
            { welcomeModalChannelId: V } = (0, h.zy)(),
            Y = (0, m.bG)([ic.A], () => null != f && ic.A.isLurking(f.guild_id), [f]),
            W = (0, m.bG)([oC.A], () => oC.A.hasSeen(f?.guild_id, Y), [f, Y]),
            z = (0, m.bG)(
                [n_.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != d
                          ? n_.A.getLayout(d)
                          : eo.DUB.NORMAL,
                [d],
            ),
            q =
                ((n = b?.id),
                (i = (0, m.bG)([nO.A, lZ, ee.default, $.Ay], () => {
                    let e = nO.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === lZ.hasViewedPrompt(l0.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || iT(l0.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            K =
                ((t = b?.id),
                (0, m.bG)([ew.A, nO.A, eG.Ay], () => {
                    let e = nO.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(V);
                    return V === eG.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, oy.ke)(n.type);
                })),
            { section: X, channelSidebarState: J } = (0, m.cf)(
                [iz.Ay],
                () => ({ section: iz.Ay.getSection(d, f?.isDM()), channelSidebarState: iz.Ay.getSidebarState(d) }),
                [d, f],
            ),
            Z = b?.id,
            en = (0, m.bG)([iz.Ay], () => iz.Ay.getGuildSidebarState(Z), [Z]),
            et = (0, l2.lI)(),
            el = (0, tG.Ay)(f),
            es = (0, tG.Ay)(f, !0),
            er = (0, m.bG)([n_.A], () => (null != f ? n_.A.getSelectedParticipant(f.id) : null)),
            ea = (0, e4.vL)(f),
            ed = (0, tB.Uf)(f),
            ec = null != f && c === f.id,
            eu = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eh, appBarToggleEnabled: em } = ib.A.useConfig({ location: "Channel" }),
            eA = (0, i_.c)(),
            ep = (0, m.bG)(
                [ob.A, i$.A],
                () => {
                    let e = f?.guild_id ?? i$.A.getGuildId();
                    return null != e && ob.A.isUnavailable(e);
                },
                [f],
            ),
            eg = eh && !__OVERLAY__ && null != f && !ep && !f.isGuildVocal();
        (s.useEffect(() => (E.A.setFriendsSidebarAvailable(eg), () => E.A.setFriendsSidebarAvailable(!1)), [eg]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, ev.A)(i)) return;
                        eG.Ay.getVoiceChannelId() !== i && (await (0, e5.A)({ channelId: i }));
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
                let e = (0, tH.JK)();
                if (e?.location?.state?.stageInviteKey === uw.J2) {
                    let { channelId: n } = (0, l1.vu)(e?.location?.pathname) ?? {};
                    null != n && o(n);
                }
            }, []));
        let ex = { channel: f, inCurrentVoiceChannel: ec },
            ef = s.useRef(ex);
        (s.useEffect(() => {
            ef.current = ex;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = ef.current;
                null != a && null != e && eu && e.id === a && !n && ((0, sN.av)(e), o(null));
            }, [a, eu]));
        let eC = (0, eI.cI)(f),
            ey = null != f && f.isPrivate(),
            eb = (0, eE.Ay)(ey),
            eN = (0, eE.Ay)(f?.id);
        s.useEffect(() => {
            let e = eb && !ey,
                n = eb && ey && f?.id !== eN;
            (e || n) && (0, tk.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lT.i.AUTO });
        }, [f?.id, eN, ey, eb]);
        let eT = (0, p.useHasAnyModalOpen)();
        return (0, l.jsx)(u$, {
            guildId: f?.guild_id,
            channelId: d,
            channel: f,
            channelName: el,
            formattedChannelName: es,
            parentChannel: y,
            voiceChannel: j,
            layout: z,
            needSubscriptionToAccess: _,
            isLurking: Y,
            hasModalOpen: eT,
            section: X,
            channelSidebarState: J,
            guildSidebarState: en,
            guild: b,
            showCall: !_ && F,
            isStageUnifiedCall: H,
            showActivityPanel: D,
            showFramePanel: B,
            channelIsContentGated: ea,
            spoilerGatingChannelId: ed,
            isMobile: (0, m.bG)([Q.A], () => f?.type === eo.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: ep,
            showRealNameModal: q,
            showWelcomeModal: !W && K,
            showFollowButton: (f?.type === eo.rbe.GUILD_ANNOUNCEMENT && b?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lv.A], () => ({ hasVideo: null != f && lv.A.hasVideo(f.id) }), [f]),
            inCall: ec,
            selectedParticipant: er,
            showChannelSummaries: eC,
            showHeaderGuildBreadcrumb: x || et,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: P,
            friendsSidebarExperimentEnabled: eh,
            canShowFriendsSidebar: eg,
            friendsSidebarAppBarToggleEnabled: em,
            friendsSidebarCollapsed: eA,
        });
    });
