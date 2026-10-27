(t.r(n), t.d(n, { default: () => hE }), t(321073));
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
    M = t(414798),
    O = t(775602),
    L = t(793574),
    P = t(688810),
    D = t(449582),
    k = t(485947),
    w = t(878678),
    U = t(69282),
    G = t(657048),
    F = t(361610),
    H = t(964486),
    B = t(36124),
    V = t(317525),
    Y = t(219065),
    W = t(818348),
    z = t(105292);
let X = [];
var q = t(342296),
    K = t(616356),
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
            I = (0, m.bG)([K.A], () => K.A.getAnyStreamForUser(r)),
            E = (0, C.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(n.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("893190"),
                                t.e("146652"),
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
                    M.A.startTyping(n.id));
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
            [R, O] = s.useState(!1);
        if (null == h) return null;
        let L = c?.premiumSince;
        return (0, l.jsx)(q.A, {
            targetElementRef: o,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => O(!1),
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
                    premiumSince: null == L ? null : new Date(L),
                    onClickPremiumGuildIcon: T,
                    itemProps: E,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? N?.() : O((e) => !e);
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
            r = (0, U.Xx)({ roleId: n, guildId: s, size: 16 });
        return n === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(G.A, { className: ec.UT, ...r }) : null,
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
        { analyticsLocations: p } = (0, P.Ay)(L.A.MEMBER_LIST),
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
                    if (r) return X;
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
            return null != l ? a : X;
        })(c.id, h),
        x = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: I } =
            ((n = A),
            (t = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
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
    return (0, l.jsx)(P.f5, {
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
    eM = t(587837),
    eO = t(850891),
    eL = t(964404),
    eP = t(204651),
    eD = t(383831),
    ek = t(128286),
    ew = t(734057),
    eU = t(309010),
    eG = t(795816),
    eF = t(685399),
    eH = t(216418),
    eB = t(620148),
    eV = t(732637),
    eY = t(104171),
    eW = t(47294),
    ez = t(594007),
    eX = t(16961),
    eq = t(73153),
    eK = t(652934),
    e$ = t(735168),
    eQ = t(5867),
    eJ = t(138017),
    eZ = t(715482),
    e0 = t(315502),
    e1 = t(573163),
    e2 = t(234320),
    e3 = t(248310);
function e6(e) {
    let { channelId: n, className: t, ...i } = e,
        r = s.useRef(null),
        a = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout() === eQ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eQ.E8.NO_CHAT : eQ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [a]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let n = (0, m.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, m.cf)(
                    [e1.Ay],
                    () => ({ unreadCount: e1.Ay.getUnreadCount(e), mentionCount: e1.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: i, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            r.current?.focus();
        }, []);
    (0, e2.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: h });
    let A = a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        p = [A];
    (u > 0 && p.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        d > 0 && p.push(z.intl.string(z.t.x5zAGZ)));
    let g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = u > 0 ? u : d,
        f = x > 0;
    return (0, l.jsxs)("div", {
        className: e3.iE,
        children: [
            (0, l.jsx)(eP.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: A,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eQ.E8.NO_CHAT ? eJ.j : eZ.g,
                themeable: !0,
                className: t,
                ...i,
            }),
            f ? (0, l.jsx)(e0.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e3.qS }) : null,
        ],
    });
}
var e9 = t(538303);
let e7 = eY.DN.SIZE_32,
    e5 = { [eQ.E8.NO_CHAT]: e9.Oo, [eQ.E8.RESIZABLE]: e9.Ig };
function e8(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        r = (0, eB.A)(),
        o = (0, m.yK)([ej.Ay], () => ej.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eG.gk)(eQ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = g !== eQ.E8.NO_CHAT,
        [I, E] = s.useState(eL.Ay.activityPanelHeight ?? n ?? null),
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
    let v = y.width / Math.max(y.height, 1) < eQ.B5,
        N = 0,
        T = 0,
        S = (0, eH.A)(r?.id);
    if (!S) {
        let e = y.width,
            n = y.height;
        v
            ? ((n = y.width / eQ.B5) > y.height && (e = (n = y.height) * eQ.B5), (T = (y.height - n) / 2))
            : ((e = Math.min(y.height * eQ.B5)) > y.width && (n = (e = y.width) / eQ.B5), (N = (y.width - e) / 2));
    }
    let R = h.get(r?.id ?? ""),
        M = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        L = (0, m.yK)(
            [$.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => $.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        P = s.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [L]),
        D = (function (e, n, t) {
            let i = (0, eE.Ay)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !O.Ay.useReducedMotion && (l || r);
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
        k = (0, eX.G)();
    if (null == r) return null;
    let w = [];
    function U(e) {
        if (null == e || void 0 === e || e === eY.mt) return null;
        let n = P.get(e.id),
            t = n?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e7), alt: t, className: e9.my }, e.id),
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
                    className: a()(e9.iE, e5[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: r.id }),
                        (0, l.jsxs)("div", {
                            className: e9.lq,
                            children: [
                                x
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e9.wx,
                                          children: (0, l.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: e9.qd,
                                              children: r?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: a()(e9.ht, { [e9.kK]: S }),
                                    style: { paddingLeft: N, paddingRight: N, paddingTop: T, paddingBottom: T },
                                    ref: C,
                                    children: (0, l.jsx)(eV.A, { className: e9.pU, embedId: (0, ez.A)(t.id, r.id) }),
                                }),
                                null != M
                                    ? (0, l.jsxs)("div", {
                                          className: e9.qr,
                                          children: [
                                              (0, l.jsx)(eY.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e7,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e9.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e9.qi,
                                                          children: [
                                                              (0, l.jsx)(e6, { channelId: M }),
                                                              (0, l.jsx)(eP.l, {
                                                                  isTrayButton: !0,
                                                                  label: z.intl.string(z.t.brPQ5U),
                                                                  onClick: A,
                                                                  iconComponent: eT.g,
                                                                  themeable: !0,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: e9.pt,
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
                                                                    onConfirm: () => {
                                                                        var e, n;
                                                                        return (
                                                                            (e = r.id),
                                                                            (n = d ?? null),
                                                                            (0, e$.A)({
                                                                                windowKey: eo.MLl.ACTIVITY_POPOUT,
                                                                                openWindow: () =>
                                                                                    eq.h.dispatch({
                                                                                        type: "ACTIVITY_POPOUT_WINDOW_OPEN",
                                                                                    }),
                                                                                onWindowOpened: () =>
                                                                                    (0, eG.gk)(
                                                                                        eQ.Gd.ACTIVITY_POPOUT_WINDOW,
                                                                                    ),
                                                                                refreshProxyTicket: () =>
                                                                                    null != n
                                                                                        ? (0, eG.od)(e, n)
                                                                                        : Promise.resolve(!0),
                                                                                onRefreshFailed: eK.G,
                                                                            })
                                                                        );
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
                            ? (0, l.jsx)(eM.A, {
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
function e4(e) {
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
    return r !== eQ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e8, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var ne = t(90804),
    nn = t(748975),
    nt = t(323073),
    ni = t(964167),
    nl = t(483510),
    ns = t(976860);
function nr(e) {
    let { channel: n } = e;
    return (0, l.jsx)(x.$, {
        onClick: function () {
            let e = n.getGuildId();
            (ei._.dispatch(eo.jej.SEARCH_RESULTS_CLOSE), (0, ns.pX)(eo.BVt.CHANNEL(e, n.id)), (0, nl.ci)(e, n.id));
        },
        variant: "secondary",
        size: "sm",
        text: z.intl.string(z.t.vLgj1J),
    });
}
var na = t(991690),
    no = t(70688),
    nd = t(995102),
    nc = t(288104),
    nu = t(857071),
    nh = t(371169),
    nm = t(260498),
    nA = t(95264),
    np = t(914315),
    ng = t(248675);
function nx(e) {
    let { channel: n } = e,
        t = n.guild_id ?? null,
        i = (0, np.A)(n, "ConjureAppChannelRemixButton"),
        r = (0, m.bG)([nu.A], () => null != t && nu.A.isLurking(t), [t]),
        a =
            (s.useEffect(() => {
                (0, nh.b8)();
            }, []),
            (0, m.bG)([nm.Ay], () => {
                let e = nm.Ay.getMaxProjects();
                return null != e && nm.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - nm.Ay.getOwnedProjects().length)
                    : null;
            }));
    return null == i || null == t || r || 0 === a
        ? null
        : (0, l.jsx)(x.$, {
              variant: "secondary",
              size: "sm",
              text: z.intl.string(ng.default.XWgAfc),
              onClick: () => (0, nA.A)(i, t),
          });
}
var nf = t(766367),
    nI = t(246338),
    nE = t(545691),
    nj = t(64656),
    nC = t(672929),
    ny = t(58736),
    nb = t(534890);
function n_(e) {
    let { channelId: n } = e,
        t = (function (e) {
            let { hasUnread: n, mentionCount: t } = (0, m.cf)(
                [e1.Ay],
                () => ({
                    hasUnread: null != e && e1.Ay.hasUnread(e),
                    mentionCount: null != e ? e1.Ay.getMentionCount(e) : 0,
                }),
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
        i = s.useRef(null),
        r = s.useCallback(() => i.current?.focus(), []);
    (0, e2.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: r });
    let a = (0, nl.HP)(n),
        o = (0, m.bG)([ew.A], () => ew.A.getBasicChannel(n)?.guild_id, [n]);
    return (0, l.jsx)(ny.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nb.ChatIcon,
        iconSize: 20,
        onClick: () => {
            a
                ? (0, nl.m)(n)
                : ((0, nl.ci)(o, n),
                  setTimeout(() => ei._.dispatch(eo.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: n }), 0));
        },
        selected: a,
        badge: t,
    });
}
var nv = t(358047),
    nN = t(967198);
function nT(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([nv.Ay], () => nv.Ay.getSection(n)),
        i = (0, m.bG)([nN.A], () => nN.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(ny.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                E.A.toggleMembersSection());
        },
        selected: s,
    });
}
var nS = t(187360),
    nR = t(621466),
    nM = t(453903),
    nO = t(477782),
    nL = t(12470),
    nP = t(811893),
    nD = t(663417),
    nk = t(729475),
    nw = t(265872),
    nU = t(980707),
    nG = t(885574),
    nF = t(365199),
    nH = t(146337),
    nB = t(130332),
    nV = t(625180),
    nY = t(156548),
    nW = t(646973),
    nz = t(402860),
    nX = t(475815),
    nq = t(615606),
    nK = t(165610);
function n$(e) {
    let { channel: n, isConjured: t, notificationItems: i } = e,
        [r, a] = s.useState(!1),
        o = s.useRef(null),
        d = (0, nH.A)(n, "app_channel_header"),
        c = (0, nq.q)(n)?.bot,
        u = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        h = (0, nC.A)(n.application_id ?? null, u),
        m = (0, nK.x1)(h) && h.data.proxyTicketRefreshing,
        A = (0, nB.A)(n, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        p = null != A.edit,
        { canPopout: g, isPoppedOut: x, popOut: f, popIn: I } = (0, nW.A)(h),
        E = s.useCallback(() => {
            null == h || m || nV.A.refreshProxyTicket(h.id);
        }, [h, m]),
        j = z.intl.string(z.t["UKOtz+"]),
        C = (0, nK.x1)(h);
    if (!C && null == c && null == d && !p && null == i) return null;
    function y() {
        return (0, nK.x1)(h)
            ? (0, l.jsx)(nO.Dr, {
                  id: "close-app",
                  label: z.intl.string(z.t.VkMnR2),
                  action: () => (0, nE.A)(h.id),
                  icon: no.DoorExitIcon,
                  leadingAccessory: { type: "icon", icon: no.DoorExitIcon },
              })
            : null;
    }
    function b() {
        return C
            ? (0, l.jsx)(nO.Dr, {
                  id: "reload-app",
                  label: z.intl.string(z.t.kHie4V),
                  action: E,
                  icon: nD.RefreshIcon,
                  leadingAccessory: { type: "icon", icon: nD.RefreshIcon },
                  disabled: m,
              })
            : null;
    }
    function _() {
        let e = (0, nK.x1)(h) && !x ? (0, nY.fl)(h.id) : null;
        return null != e && (0, nX.Ub)(e)
            ? (0, l.jsx)(nO.Dr, {
                  id: "full-screen-app",
                  label: z.intl.string(z.t.OIDkcp),
                  icon: nk.T,
                  leadingAccessory: { type: "icon", icon: nk.T },
                  action: () => (0, nX.tl)(e),
              })
            : null;
    }
    return (0, l.jsx)(nw.Y, {
        targetElementRef: o,
        shouldShow: r,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, nR.vq)(document.activeElement, HTMLIFrameElement)) return nM.oU;
            a(!1);
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsxs)(nU.W, {
                "data-menu-migrated": !0,
                navId: "app-channel-header-overflow",
                onClose: s,
                onSelect: s,
                "aria-label": z.intl.string(z.t.Xm41aV),
                children: [
                    t
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  C
                                      ? (0, l.jsxs)(nO.rX, {
                                            children: [
                                                C
                                                    ? x
                                                        ? (0, l.jsx)(nO.Dr, {
                                                              id: "pop-in-app",
                                                              label: z.intl.string(z.t["NKV/MO"]),
                                                              icon: nL._,
                                                              leadingAccessory: { type: "icon", icon: nL._ },
                                                              action: I,
                                                          })
                                                        : g
                                                          ? (0, l.jsx)(nO.Dr, {
                                                                id: "pop-out-app",
                                                                label: z.intl.string(z.t["3Zypbv"]),
                                                                icon: nP.t,
                                                                leadingAccessory: { type: "icon", icon: nP.t },
                                                                action: f,
                                                            })
                                                          : null
                                                    : null,
                                                _(),
                                                A.showOverlay,
                                            ],
                                        })
                                      : null,
                                  C || p
                                      ? (0, l.jsxs)(nO.rX, { children: [A.edit, A.devicePermissions, b(), y()] })
                                      : null,
                              ],
                          })
                        : C
                          ? (0, l.jsxs)(nO.rX, { children: [_(), b(), y()] })
                          : null,
                    null != i ? (0, l.jsx)(nO.rX, { children: i }) : null,
                    null != c || null != d
                        ? (0, l.jsxs)(nO.rX, {
                              children: [
                                  null != c
                                      ? (0, l.jsx)(nO.Dr, {
                                            id: "app-info",
                                            label: z.intl.string(z.t.Sh2z9g),
                                            action: () =>
                                                (0, nz.openUserProfileModal)({
                                                    userId: c.id,
                                                    guildId: n.guild_id,
                                                    channelId: n.id,
                                                }),
                                            leadingAccessory: { type: "icon", icon: nG.CircleInformationIcon },
                                        })
                                      : null,
                                  d,
                              ],
                          })
                        : null,
                ],
            });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: o,
                onClick: () => a((e) => !e),
                tooltip: t ? null : j,
                icon: nF.MoreHorizontalIcon,
                "aria-label": j,
                selected: t,
            });
        },
    });
}
function nQ(e) {
    let { frame: n } = e,
        { canPopout: t, isPoppedOut: i, popOut: s, popIn: r } = (0, nW.A)(n);
    return (0, nK.x1)(n)
        ? i
            ? (0, l.jsx)(ny.In, {
                  icon: nL._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: r,
              })
            : t
              ? (0, l.jsx)(ny.In, {
                    icon: nP.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: s,
                })
              : null
        : null;
}
function nJ(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nC.A)(n.application_id ?? null, t);
    return (0, l.jsx)(nQ, { frame: i });
}
var nZ = t(906340);
function n0(e) {
    let { frame: n } = e,
        t = (0, nj.A)(n?.id);
    if (!(0, nK.x1)(n) || !t) return null;
    let i = z.intl.string(z.t.VkMnR2);
    return (0, l.jsx)(ny.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: i,
        "aria-label": i,
        onClick: () => (0, nE.A)(n.id),
    });
}
function n1(e) {
    let { channel: n, isLurking: t } = e,
        i = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        r = (0, nC.A)(n.application_id ?? null, i),
        a = (0, nd.A)(n),
        o = (0, nc.A)(n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: nZ.t,
                children: [
                    (0, l.jsx)(nx, { channel: n }),
                    (0, l.jsx)(nf.A, { frame: r }),
                    (0, l.jsx)(n0, { frame: r }),
                ],
            }),
            (0, l.jsx)("div", { className: nZ.y, role: "separator", "aria-orientation": "vertical" }),
            (0, l.jsx)(nT, { channelId: n.id }),
            (0, l.jsx)(n_, { channelId: n.id }),
            (0, l.jsx)(n$, {
                channel: n,
                isConjured: !0,
                notificationItems: t ? null : (0, l.jsxs)(l.Fragment, { children: [a, o] }),
            }),
        ],
    });
}
function n2(e) {
    let { channel: n, isLurking: t } = e;
    return (0, nI.w$)(n, "AppChannelHeaderActions")
        ? (0, l.jsx)(n1, { channel: n, isLurking: t })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(nJ, { channel: n }),
                  t ? null : (0, l.jsx)(nS.A, { channel: n }),
                  (0, l.jsx)(nT, { channelId: n.id }),
                  (0, l.jsx)(n_, { channelId: n.id }),
                  (0, l.jsx)(n$, { channel: n, isConjured: !1 }),
              ],
          });
}
var n3 = t(320989);
let n6 = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var n9 = t(568598),
    n7 = t(198052),
    n5 = t(164617),
    n8 = t(355622),
    n4 = t(689874),
    te = t(631828),
    tn = t(627363),
    tt = t(91242),
    ti = t(97005);
function tl(e) {
    let { channel: n } = e,
        t = (0, m.bG)([tt.A], () => tt.A.getFramesForChannel(n.id).find((e) => (0, nK.x1)(e)), [n.id]),
        i = (0, tn.YY)(t?.applicationId).data,
        s = (0, ti.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.conjureProjectId == null || !s) return null;
    let r = z.intl.string(ng.default["/TlGcK"]);
    return (0, l.jsx)(ny.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: r,
        "aria-label": r,
        onClick: () => (0, nE.A)(t.id),
    });
}
var ts = t(828488),
    tr = t(939249),
    ta = t(408278),
    to = t(624479),
    td = t(858899),
    tc = t(661531),
    tu = t(39623),
    th = t(952270),
    tm = t(381849),
    tA = t(549973),
    tp = t(957565),
    tg = t(935208),
    tx = t(181041),
    tf = t(256331),
    tI = t(623562),
    tE = t(403862);
let tj = ["high", "medium", "low"],
    tC = s.memo(function (e) {
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
                              tj.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: tE.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: tE.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: tE.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tE.a7,
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
                            className: tE.a7,
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
                            className: tE.a7,
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
    ty = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = tg.default.extractTimestamp(n.startMessageId),
            s = tg.default.extractTimestamp(n.endMessageId),
            r = (0, tA.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, tm.WR)({ seconds: a, getFormatter: tm.i }),
            d = (0, m.bG)([tx.A], () => tx.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(tr.D, {
            className: tE.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: tE.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: tE.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(ta.K, {
                            icon: to.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, tp.C)(JSON.stringify(n, null, 2), () =>
                                        (0, td.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: tE.FR,
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
                        className: tE.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: tE.JP,
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
                    className: tE.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: tE.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tE.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: tE.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: tE.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tE.a7,
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
                                    className: tE.a7,
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
                                    className: tE.a7,
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
                (0, l.jsx)(tC, { moderation: n.moderation ?? null }),
            ],
        });
    });
function tb(e) {
    let { channel: n } = e,
        t = (0, m.bG)([tx.A], () => tx.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([tx.A], () => tx.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([tf.A], () => tf.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, tI.xI)(n.id, e.id, { cacheType: "channel" });
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tE.zr,
        children: [
            (0, l.jsxs)("div", {
                className: tE.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tE.gn,
                        children: [
                            (0, l.jsx)(nb.ChatIcon, { color: tc.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: tE.y6,
                        children: (0, l.jsx)(ta.K, {
                            icon: r ? tu.EyeIcon : th.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: tI.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tE.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(ty, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: tE.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var t_ = t(268218),
    tv = t(726249),
    tN = t(334738),
    tT = t(208882),
    tS = t(938764),
    tR = t(519480),
    tM = t(352123),
    tO = t(825244),
    tL = t(130696);
let tP = function (e) {
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
        className: tL.h2,
        children: [
            (0, l.jsx)("img", { className: tL.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: tL._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: tL.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(tO.E, {
                      className: tL.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(tO.E, {
                className: tL.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var tD = t(683438),
    tk = t(689175),
    tw = t(761508),
    tU = t(765671),
    tG = t(902119),
    tF = t(22231),
    tH = t(66834),
    tB = t(573435),
    tV = t(101555),
    tY = t(548118),
    tW = t(714991),
    tz = t(776231),
    tX = t(345942),
    tq = t(71393),
    tK = t(486020),
    t$ = t(149790),
    tQ = t(682557),
    tJ = t(524058);
let tZ = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(tr.D, {
        onClick: n,
        className: tJ.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tJ.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function t0(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tM.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tJ.fc, { [tJ.QX]: i }),
        children: (0, l.jsxs)(tV.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tV.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tF.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tJ.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tQ.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tV.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nF.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tJ.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let t1 = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([tq.A], () => tq.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, tX.u)(n.guildId) : await tH.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tK.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tz.mZ)() }),
        c = tK.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tJ.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tJ.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tJ.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tJ.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tJ.$f,
                            children: (0, l.jsx)(tB.Ay, {
                                mask: tB.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tJ.SA,
                                    children: (0, l.jsx)(tY.Ay, {
                                        className: tJ.rZ,
                                        iconSrc: c,
                                        guild: (0, t$.xi)(n),
                                        size: tY.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tJ.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tJ.DD,
                            children: [
                                (0, l.jsx)(tW.A, { className: tJ.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tJ.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tJ.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tJ.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tJ.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tJ.JX }),
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
                                        className: tJ.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tJ.Li }),
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
                            className: tJ.PD,
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
                (0, l.jsx)(t0, { entry: n }),
            ],
        })
    );
});
var t2 = t(946116),
    t3 = t(844086),
    t6 = t(770679);
function t9(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tU.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: t6.wx,
        children: [
            (0, l.jsx)("div", { className: t6.y2, children: (0, l.jsx)(tG.A, {}) }),
            (0, l.jsx)("div", {
                className: t6.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(t6.VW, { [t6.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: t6.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: t6.MT,
                            children: (0, l.jsx)(tD.I, {
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
let t7 = function (e) {
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
        className: t3.$$,
        children: (0, l.jsxs)(tk.Gt, {
            className: t3.XG,
            children: [
                (0, l.jsx)(t9, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tk.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(tw.V, {
                        className: t6.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                tw.V.Item,
                                { className: t6.YU, id: t2.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                t2.mU.ALL,
                            ),
                            (0, t2.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    tw.V.Item,
                                    { className: t6.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: t3.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: t6.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: t3.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(t1, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tZ, { onClick: i }) : null,
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
var t5 = t(370876),
    t8 = t(28863),
    t4 = t(364522),
    ie = t(792831),
    it = t(211862);
let ii = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: t3.$$, children: (0, l.jsx)(g.y, { className: t3.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(t8.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: it.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: it.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: t3.vY, children: d.map((e) => (0, l.jsx)(t1, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: t3.$$,
        children: (0, l.jsxs)(t4.Ar, {
            className: t3.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: it.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: it.Dr,
                            children: [
                                (0, l.jsx)(tr.D, {
                                    onClick: r,
                                    className: it.UE,
                                    children: (0, l.jsx)(ie.A, { direction: ie.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: it.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tD.I, {
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
var il = t(650583);
let is = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([tR.A], () => {
            let e = tR.A.getCurrentCategoryId(n.id),
                t = tR.A.getDirectoryEntries(n.id, e === t2.mU.ALL ? null : e),
                i = tR.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: tR.A.getDirectoryAllEntriesCount(n.id),
                isLoading: tR.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = e1.Ay.lastMessageId(n.id);
            null != e &&
                (0, tN.ack)(
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
                          if (n !== t2.mU.ALL) return [{ entries: (0, t5._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, t5.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, t5.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([tS.A], () => {
            let { mostRecentQuery: e, fetching: t } = tS.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: tS.A.getSearchResults(n.id, e) };
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
            (tT.Yc(n.id), tT.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, tM.b)(n),
        b = s.useMemo(
            () =>
                y
                    ? () => {
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("122326"),
                                  t.e("533651"),
                                  t.e("538288"),
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
                                      currentCategoryId: r === t2.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === il.dh.ENTER &&
            (tT.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (I(""), tT.BA(n.id));
    }
    return E
        ? (0, l.jsx)(ii, {
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
          ? (0, l.jsx)("div", { className: t3.$$, children: (0, l.jsx)(g.y, { className: t3.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: t3.$$, children: (0, l.jsx)(tP, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(t7, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      tT.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var ir = t(826673),
    ia = t(93055),
    io = t(47167),
    id = t(688606),
    ic = t(353428),
    iu = t(288254),
    ih = t(873614),
    im = t(649852),
    iA = t.n(im),
    ip = t(789645),
    ig = t(163126),
    ix = t(182061),
    iI = t(886393),
    iE = t(307623),
    ij = t(660273),
    iC = t(804006),
    iy = t(707792),
    ib = t(41402),
    i_ = t(271456),
    iv = t(200273),
    iN = t(565846),
    iT = t(57907),
    iS = t(375500),
    iR = t(707653),
    iM = t(50268),
    iO = t(378570),
    iL = t(162199),
    iP = t(713608),
    iD = t(473503),
    ik = t(901472),
    iw = t(267102),
    iU = t(474397),
    iG = t(486974),
    iF = t(39470);
function iH(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, iw.aL)(),
        r = z.intl.string(iF.default["Beo/7v"]),
        { firstMessage: a } = (0, iD.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(ny.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, iO.iN)(n.id),
                      (0, iU.A)(),
                      (0, ik.z)(n.guild_id, d, n.id, {
                          modViewPanel: iG.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: iP.q,
              "aria-label": r,
          })
        : null;
}
var iB = t(780338),
    iV = t(782603),
    iY = t(607508),
    iW = t(914703),
    iz = t(37411);
function iX(e) {
    let { channel: n } = e,
        t = (0, iY.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([nu.A], () => null != n.guild_id && nu.A.isLurking(n.guild_id));
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
    return (0, l.jsx)(nw.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(iW.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === iz.CP.NO_MESSAGES ? iB.BellSlashIcon : iV.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var iq = t(747926);
function iK(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nw.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(i$, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nF.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function i$(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, ij.A)(n, "Sidebar Overflow"),
        r = (0, iC.A)(n, "Sidebar Overflow"),
        a = (0, ib.A)(n),
        o = (0, iT.A)(n),
        d = (0, iS.A)(n),
        c = (0, ix.A)(n),
        u = (0, iy.A)(n),
        h = (0, iN.A)(n.id),
        m = (0, iv.A)(n),
        A = (0, iE.A)(n),
        p = (0, iI.A)(n),
        g = (0, iM.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, iR.A)(n),
        f = (0, i_.A)(n),
        I = (0, ig.$)(1e3);
    function E() {
        (0, iO.iN)(n.id);
    }
    function j(e) {
        let t = iA()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            I.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(nU.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nO.rX, {
                children: [s, (0, l.jsx)(nO.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(nO.rX, { children: [o, d] }),
            (0, l.jsxs)(nO.rX, { children: [m, a, h, f] }),
            (0, l.jsxs)(nO.rX, {
                children: [
                    (0, l.jsx)(nO.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nP.t,
                        trailingIndicator: { type: "icon", icon: nP.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E());
                        },
                    }),
                    (0, l.jsx)(nO.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nP.t,
                        trailingIndicator: { type: "icon", icon: nP.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nO.rX, { children: [x, c, u, A] }),
            (0, l.jsx)(nO.rX, { children: r }),
            (0, l.jsxs)(nO.rX, { children: [p, g] }),
        ],
    });
}
function iQ(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(ny.Ay.Icon, {
            icon: ip.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, iq.xu)((0, iL.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iX, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(iH, { channel: n }) : null,
                  (0, l.jsx)(iK, { channel: n }),
                  i,
              ],
          });
}
var iJ = t(31717),
    iZ = t(853742),
    i0 = t(85190);
function i1(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([tq.A], () => tq.A.getGuild(i?.getGuildId())),
        o = (0, io.Ay)(i),
        d = (0, iu.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iZ.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(ih.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iQ, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iJ.C.ChannelMessage }),
            (0, l.jsx)(ny.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, ic.zF)({
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
                        null != i && (0, ns.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: i0.T,
                children: (0, l.jsx)(id.A, { channel: i, guild: a, chatInputType: n8.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var i2 = t(925166),
    i3 = t(76268),
    i6 = t(605117),
    i9 = t(857253),
    i7 = t(872363);
let i5 = function (e, n) {
    eq.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var i8 = t(561446),
    i4 = t(300233),
    le = t(499211),
    ln = t(468689),
    lt = t(529942),
    li = t(739455),
    ll = t(709017);
function ls(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: ll.t7,
        children: (0, l.jsxs)("div", {
            className: ll.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: ll.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: ll.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ll.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, lt.rf)(n),
                                        ln.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, li.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var lr = t(599941),
    la = t(29385),
    lo = t(950344),
    ld = t(217530),
    lc = t(162093),
    lu = t(325348);
function lh(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, la.e)({ guildId: n, channelId: t }),
        r = (0, lr.uk)(n),
        a = (0, lr.Tq)(n),
        o = (0, m.bG)([tq.A], () => tq.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, io.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, lo.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: lu.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: lu.__invalid_spinner }),
          })
        : (0, l.jsxs)(t4.Ar, {
              className: lu.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: lu.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: lu.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(ld.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  lc.A,
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
var lm = t(284252);
function lA(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([nv.Ay], () => nv.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([tx.A], () => (tx.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(ny.In, {
        onClick: E.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nb.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? lm.q : void 0,
        selected: t,
        badge: r,
    });
}
var lp = t(287074),
    lg = t(306788),
    lx = t(863922),
    lf = t(822074),
    lI = t(521732);
function lE(e) {
    let { channel: n } = e,
        t = (0, nt.ni)(n),
        i = (0, m.bG)([lf.A], () => lf.A.shouldShowTopicsBar());
    return (0, l.jsx)(ny.Ay.Icon, {
        icon: lg.K,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: lI.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, lx.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var lj = t(947094),
    lC = t(919577),
    ly = t(207777),
    lb = t(422844),
    l_ = t(435470),
    lv = t(892110),
    lN = t(45494);
function lT(e) {
    let { channel: n } = e,
        t = (0, l_.S4)(n),
        i = (0, m.bG)([lj.A], () => lj.A.hasHidden(n.id)),
        s = (0, lv.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, lb.R)(n.id),
        d = (0, m.bG)(
            [ly.A, lN.A],
            () => !!(ly.A.getThreadIds(n.id, r, a, o).length > 0) || !!(lN.A.getThreads(n.id, r, a, o).length > 0),
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
    return (0, l.jsx)(ny.In, {
        tooltip: u,
        icon: nG.CircleInformationIcon,
        onClick: function () {
            return lC.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lS = t(290136),
    lR = t(975571),
    lM = t(490094);
function lO() {
    let e = z.intl.string(lM.default.pdipXI);
    return (0, l.jsx)(ny.In, {
        tooltip: e,
        icon: lS.CircleQuestionIcon,
        onClick: function () {
            window.open(lR.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lL = t(742589),
    lP = t(43105),
    lD = t(428689),
    lk = t(978940),
    lw = t(387755),
    lU = t(730852),
    lG = t(641703),
    lF = t(379848),
    lH = t(753727),
    lB = t(625075),
    lV = t(222692),
    lY = t(442353),
    lW = t(470710),
    lz = t(186111),
    lX = t(360906),
    lq = t(994500),
    lK = t(977997),
    l$ = t(818023),
    lQ = t(49999),
    lJ = t(731854);
class lZ extends s.PureComponent {
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
                : lX.Ay.supports(lJ.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lB.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(ny.Ay.Icon, { icon: lD.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(ny.Ay.Icon, {
            ref: this.iconRef,
            icon: lk._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lF.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lP.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: l$.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lQ.i.USER_DISMISS),
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
            return lw.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lY.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lU.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, ir.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lQ.i.AUTO }),
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
        (0, lY.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lV.A)();
    };
}
function l0(e) {
    let { channel: n } = e,
        t = (0, lH.A)(),
        i = (0, m.bG)([n7.A], () => n7.A.getMode(n.id)),
        s = (0, m.bG)([lK.A], () => lK.A.isInChannel(n.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lW.A], () => ({
            callActive: lW.A.isCallActive(n.id),
            callUnavailable: lW.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lq.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lq.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lq.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, iw.Us)(),
        g = [],
        x = (0, lG.A)(n.id),
        f = (0, m.bG)([lz.A], () => lz.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lZ, {
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
var l1 = t(452015),
    l2 = t(765178),
    l3 = t(231483),
    l6 = t(544231),
    l9 = t(338510),
    l7 = t(151119),
    l5 = t(278941),
    l8 = t(665909),
    l4 = t(327337);
let se = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, l9.u)(n.id),
        r = (0, l7.S)(n.id),
        a = (0, l5.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lz.A], () => lz.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (l2.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, l6.xi)(n.id, [a.id]);
            }, 5e3),
            (0, l8.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: l8.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (l2.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, l6.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, l8.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: l8.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, l6.xi)(n.id, [a.id]),
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
                    { modalKey: l4.V },
                ),
                (0, l8._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: l8.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(ny.Ay.Icon, {
                  icon: l3.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var sn = t(262763),
    st = t(406704),
    si = t(576705);
let sl = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lH.A)(),
        i = (0, m.bG)([lK.A], () => lK.A.isInChannel(n.id)),
        r = (0, m.bG)([lK.A], () => !u().isEmpty(lK.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([si.A], () => si.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, le.A)(n.id),
        d = (0, st.Id)(n),
        { enabled: c } = st.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            sn.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(ny.Ay.Icon, {
              icon: lk._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var ss = t(812991),
    sr = t(47675),
    sa = t(999291);
function so() {
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
function sd(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([nv.Ay], () => nv.Ay.getSection(n.id, n?.isDM())),
        s = (0, sa.Ay)(n.getRecipientId()),
        r = so(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(ny.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: ss.n,
        onClick: function () {
            ((0, sr.am)({ displayProfile: s, isProfileOpen: !a }), E.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let sc = {};
class su extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            sc[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = sc[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return sc;
    }
}
let sh = new su(eq.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = sc[t];
        return null == i ? ((sc[t] = new Set()), sc[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != sc[n.id] && !n.unavailable && (delete sc[n.id], !0);
    },
});
var sm = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    sA = t(376943),
    sp = t(394953),
    sg = t(683063),
    sx = t(403581),
    sf = t(241541),
    sI = t(709066),
    sE = t(87664),
    sj = t(247676),
    sC = t(695526),
    sy = t(927813),
    sb = t(427358),
    s_ = t(945810);
let sv = (0, s_.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var sN = t(280450),
    sT = t(851746),
    sS = t(103411);
function sR() {
    let e = (0, sS.m)(),
        n = (0, m.bG)([sT.A], () => sT.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, m.bG)([sN.default], () => sN.default.getId()),
    };
}
var sM = t(315629),
    sO = t(744413),
    sL = t(303682),
    sP = t(224370),
    sD = t(544879);
function sk(e) {
    let {
            analyticsLocation: n,
            markAsDismissed: t,
            className: i,
            title: s = z.intl.string(z.t["DMie/y"]),
            body: r = z.intl.string(z.t.u0HAhn),
            ctaText: o = z.intl.string(z.t.Lm2nFc),
            onPrimaryAction: d,
        } = e,
        { analyticsLocations: c } = (0, P.Ay)(n);
    return (0, l.jsxs)(sM.h, {
        color: "nitro-pink",
        className: a()(sP.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: sP.lj,
                children: [
                    (0, l.jsx)("img", { className: sP.Dp, src: sD.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sP.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: sP.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: sP.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(tr.D, {
                        className: sP.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            t(lQ.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(ip.P, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sP.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (t(lQ.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, sO.jM)({
                                  startingScreen: sL.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sw = t(349420);
let sU = { cooldownDurationMs: 60 * sy.A.Millis.DAY };
function sG(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: sv.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = sR(),
                l = (0, m.bG)(
                    [lq.A, ee.default, sb.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i) return !1;
                            let n = ee.default.getUser(e);
                            if (null == n || lq.A.isBlockedOrIgnored(e)) return !1;
                            let t = sb.A.getUserAffinity(e);
                            return (
                                null != t &&
                                null != t.communicationRank &&
                                t.communicationRank <= 20 &&
                                null == n.premiumType
                            );
                        }),
                    [e.recipients, i],
                );
            return !!t && !!n && !!l;
        })(n);
    return (0, l.jsx)(lF.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sU,
        groupName: lQ.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sk, {
                      className: sw.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sF = t(403362);
t(696101);
let sH = [],
    sB = er.Ay.getEnableHardwareAcceleration();
function sV(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([lq.A], () => lq.A.getNickname(n.id)),
        h = (0, sE.A)(n.id),
        A = s.useRef(null);
    function p(e) {
        (0, j.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("463317"),
                t.e("926132"),
                t.e("893190"),
                t.e("146652"),
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
            M.A.startTyping(i.id));
    }
    let x = (0, D.r)({ user: n }),
        [f, I] = s.useState(!1);
    return (0, l.jsx)(q.A, {
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
                    shouldAnimateStatus: sB,
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
function sY(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sW(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(L.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lq.A, ee.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(sF.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lq.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sH,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sH });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sY,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, sj.A)({ useNitroCapExperiment: !0 }),
        h = (0, sC.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(t4.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sG, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(sg.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(sx.t, {
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
                                o && (0, l.jsx)(sI.A, { type: sI.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sV,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(l1.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: sf.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: l1.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sz = t(322338),
    sX = t(898029),
    sq = t(36537);
function sK() {
    return (0, l.jsx)("div", {
        className: sq.zt,
        children: (0, l.jsx)("header", {
            className: sX.wL,
            children: (0, l.jsxs)("div", {
                className: sX.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sX.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sX.u1,
                            itemClassName: sX.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var s$ = t(138298),
    sQ = t(940382),
    sJ = t(747376),
    sZ = t(718734),
    s0 = t(163328),
    s1 = t(425557),
    s2 = t(270003),
    s3 = t(150934),
    s6 = t(452027),
    s9 = t(95477),
    s7 = t(281595),
    s5 = t(465532),
    s8 = t(579872),
    s4 = t(119031),
    re = t(408018),
    rn = t(845207),
    rt = t(822610),
    ri = t(915089),
    rl = t(314307),
    rs = t(636922),
    rr = t(931664),
    ra = t(631576),
    ro = t(253932),
    rd = t(232835),
    rc = t(522602),
    ru = t(806150),
    rh = t(518960),
    rm = t(753738);
function rA(e, n) {
    return { type: e, message: n ?? null };
}
function rp(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var rg = t(659617),
    rx = t(474078),
    rf = t(636537),
    rI = t(152367),
    rE = t(147087);
async function rj(e) {
    try {
        let n = await rf.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, rf.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var rC = t(55294),
    ry = t(143161),
    rb = t(909833);
let r_ = n8.oU.THREAD_CREATION;
function rv(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: r } = (0, P.Ay)(L.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: r,
              children: (0, l.jsx)(e2.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: ry.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iJ.C.FirstThreadMessage }),
                          (0, l.jsx)(rN, { parentChannelId: n }),
                          (0, l.jsx)(rT, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function rN(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iJ.A.getThreadSettings(n),
                t = iJ.A.getDraft(n, iJ.C.FirstThreadMessage).trim(),
                i = rc.A.getUploads(n, iJ.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? s8.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, iq.bA)(n);
                      },
                  })
                : (0, iq.bA)(n);
        }, [n]);
    return (0, l.jsxs)(ny.Ay, {
        toolbar: (0, l.jsx)(ny.Ay.Icon, { icon: ip.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(ny.Ay.Icon, { icon: s0.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(ny.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function rT(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        d =
            ((n = s.useContext(e2.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, m.bG)([iJ.A], () => iJ.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), s5.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, re.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iJ.A.getDraft(e.id, iJ.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, re.ur)(l)), n(iJ.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iJ.A.addChangeListener(t),
                        () => {
                            iJ.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, rg.EN)(t),
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
                h = (0, rE.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = rd.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await rj(e);
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
                                icon: rI.D,
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
                                  children: (0, l.jsx)(ta.K, {
                                      icon: rI.D,
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
                p = (0, rC.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: iq.GS,
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
                                (l = rr.A.getStickerPreview(n.id, r_.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = rc.A.getUploads(n.id, iJ.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? rA(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? rA(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, ru.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: r_,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), rA(1, (0, rm.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(rA(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, ra.x5)(n.id, r_.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, rg.Iy)(c, g) ? s1.t : s0.y;
    return (0, l.jsx)("div", {
        className: ry.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(ry.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: ry.Zd,
                children: [
                    (0, l.jsx)(t4.Ip, {
                        className: ry.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: ry.bv,
                            children: [
                                (0, l.jsxs)(rl.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(rb.P0, ry.P0),
                                            children: (0, l.jsx)(b, { className: rb.Kk }),
                                        }),
                                        (0, l.jsxs)(s2.n, {
                                            children: [
                                                (0, l.jsx)(rR, {
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
                                                (0, l.jsx)(rS, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rO, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ry.Eh,
                        children: [
                            (0, l.jsx)(rM, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(s4.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: ry.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rS(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, rg.Iy)(t, s),
        a = (0, l.jsx)(s3.S, {
            disabled: s === rg.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === rg.jk.Disabled
        ? null
        : (0, l.jsx)(s6.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rR(e) {
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
        h = rp(r, { content: u }),
        m = (0, rg.l1)(n, t),
        A = null != t && !d,
        p = (0, ri.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(s9.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, rx.A)(e, !1) }), "" !== e ? M.A.startTyping(n.id) : M.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, rx.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rM(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (s5.A.saveDraft(n.id, t, iJ.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? M.A.startTyping(n.id) : "" === t && M.A.stopTyping(n.id),
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
    ((0, e2.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, e2.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: A }));
    let x = (0, m.bG)([si.A], () => si.A.can(eo.xBc.ATTACH_FILES, n)),
        f = rp(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(rt.A, { channelId: n.id, type: r_, canAttachFiles: x }),
            (0, l.jsx)("div", { className: ry.xN, children: (0, l.jsx)(s7.U, { error: f }) }),
            (0, l.jsx)(rn.Ay, {
                type: r_,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(ry.gM, ry.Yy),
                innerClassName: a()(ry.SL, { [ry.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: rh.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function rO(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([rd.A], () => (null == t ? null : rd.A.getMessage(n.id, t))),
        s = ro.hH.useSetting();
    return null != i
        ? (0, l.jsx)(rs.A, {
              className: ry.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rL = t(494208),
    rP = t(40389),
    rD = t(148494),
    rk = t(56562);
function rw(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nw.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(rU, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nF.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function rU(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, ix.A)(n),
        r = (0, iy.A)(n),
        a = (0, iN.A)(n.id),
        o = (0, iv.A)(n),
        d = (0, iM.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, iI.A)(n),
        h = (0, iE.A)(n),
        A = (0, ij.A)(n, "Toolbar Overflow"),
        p = (0, iC.A)(n, "Toolbar Overflow"),
        g = (0, ib.A)(n),
        x = (0, rP.A)(n),
        f = (0, iR.A)(n),
        I = (0, i_.A)(n),
        E = n.isThread()
            ? (0, l.jsx)(nO.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rD.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rk.vx.INSTANT });
                  },
              })
            : null,
        j = ro.SY.useSetting(),
        C = (0, m.bG)([lK.A], () => !u().isEmpty(lK.A.getVoiceStatesForChannel(n.id))),
        y = (0, m.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nU.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nO.rX, { children: [A, x] }),
            (0, l.jsxs)(nO.rX, {
                children: [
                    E,
                    o,
                    g,
                    a,
                    !j || C || y
                        ? null
                        : (0, l.jsx)(nO.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, iq.JA)(n);
                              },
                          }),
                    I,
                ],
            }),
            (0, l.jsxs)(nO.rX, { children: [f, s, r, h] }),
            (0, l.jsx)(nO.rX, { children: p }),
            (0, l.jsxs)(nO.rX, { children: [c, d] }),
        ],
    });
}
var rG = t(332456),
    rF = t(806411),
    rH = t(973854),
    rB = t(62502);
function rV(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([tq.A], () => tq.A.getGuild(d?.getGuildId())),
        h = (0, io.Ay)(d),
        A = (0, iu.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lK.A], () => null != n && !u().isEmpty(lK.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (eq.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, iO.N9)(n, { source: iz.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rG.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rF.q)(d.id), channel_view: o }),
                (0, rH.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(ih.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(iQ, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iJ.C.ChannelMessage }),
            (0, l.jsx)(ny.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, ic.zF)({
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
                        null != d && (0, iO.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rB.T,
                children: (0, l.jsx)(id.A, { channel: d, guild: c, chatInputType: n8.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rY = t(210714),
    rW = t(707554),
    rz = t(140735),
    rX = t(590180),
    rq = t(372320),
    rK = t(562153);
let r$ = (0, s_.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rQ(e) {
    return r$.useConfig({ location: e }).enabled;
}
var rJ = t(215530),
    rZ = t(549831),
    r0 = t(736653),
    r1 = t(311016),
    r2 = t(480335),
    r3 = t(713517),
    r6 = t(397562),
    r9 = t(183555),
    r7 = t(718019),
    r5 = t(977059),
    r8 = t(915614),
    r4 = t(308244),
    ae = t(743987),
    an = t(900179),
    at = t(946356),
    ai = t(465829),
    al = t(35241),
    as = t(587168),
    ar = t(442228),
    aa = t(744808);
let ao = (0, s_.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var ad = t(827428);
function ac(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function au(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = ao.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, sr.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: ad.lS,
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
              className: ad.qr,
              children: (0, l.jsx)(tr.D, {
                  onClick: o,
                  className: ad.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: ad.xQ, children: [(0, l.jsx)(aa.A, { frame: i, filterLayer: ac }), d] })
        : d;
}
var ah = t(518477),
    am = t(996988),
    aA = t(207634),
    ap = t(561419),
    ag = t(396095);
function ax(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, r1.A)(n.id),
        o = (0, sa.Ay)(n.id),
        d = (0, r0.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, r9.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, r6.A)(u, o, ah.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, r3.A)(m);
    function g() {
        (0, nz.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(r9.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(at.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: am.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(ap.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(t4.d_, {
                        className: i ? ap.BE : void 0,
                        children: [
                            (0, l.jsx)(as.A, { children: (0, l.jsx)(al.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: ap.wx,
                                children: [
                                    (0, l.jsx)(r8.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: am.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(r7.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: aA.T[am.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ag.rf,
                                children: [
                                    (0, l.jsx)(ai.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rK.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(r5.A, {
                                            displayProfile: o,
                                            themeType: am.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(ar.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(an.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(ae.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(at.A.Overlay, {
                                              className: ag.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(an.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(r4.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(an.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(ae.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(au, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(r2.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var af = t(331322),
    aI = t(249790),
    aE = t(254828),
    aj = t(783123),
    aC = t(966430);
function ay(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, sa.Ay)(n.id),
        o = (0, r0.Ay)(),
        d = (0, m.bG)([lq.A], () => lq.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, r9.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, r6.A)(c, a, ah.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(r9.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(at.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: am.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(t4.d_, {
                    children: (0, l.jsxs)("div", {
                        className: aC.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: aC.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: aC.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: aC.N1,
                                        children: [
                                            (0, l.jsx)(aI.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rK.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(af.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(aj.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, sr.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(aE.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, sr.Wn)({
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
var ab = t(399513),
    a_ = t(717421),
    av = t(31956),
    aN = t(673843),
    aT = t(561794),
    aS = t(321191),
    aR = t(679492),
    aM = t(439053),
    aO = t(312381),
    aL = t(657538),
    aP = t(984545),
    aD = t(193738),
    ak = t(413737),
    aw = t(394816),
    aU = t(695366),
    aG = t(922590),
    aF = t(821269),
    aH = t(131607),
    aB = t(326084),
    aV = t(834708),
    aY = t(154486);
let aW = (0, s_.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var az = t(158390),
    aX = t(906573);
let aq = new az.A(30 * sy.A.Millis.SECOND, 5 * sy.A.Millis.MINUTE, !0),
    aK = 0;
async function a$() {
    if (aX.A.shouldFetch() && !(Date.now() < aK)) {
        eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
        try {
            let e = await rf.Bo.get({
                url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            (aq.succeed(),
                (aK = 0),
                eq.h.dispatch({
                    type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                    version: String(e.body?.version ?? "0"),
                    targetIds: Array.isArray(e.body?.target_ids) ? e.body.target_ids.map((e) => String(e)) : [],
                }));
        } catch {
            ((aK = Date.now() + aq.fail()),
                eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
        }
    }
}
var aQ = t(504492);
function aJ(e) {
    let { targetUserId: n } = e,
        { isInTreatment: t } = {
            isInTreatment: aW.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n) ?? null, [n]),
        r = (0, aV.d)(i),
        a = t && r,
        {
            isDismissed: o,
            hasFetched: d,
            version: c,
            dismiss: u,
        } = (function (e) {
            let {
                isDismissed: n,
                hasFetched: t,
                version: i,
            } = (0, m.cf)([aX.A], () => {
                let n = Number(aX.A.getVersion());
                return {
                    isDismissed: null != e && aX.A.isDismissedFor(e),
                    hasFetched: aX.A.hasFetched(),
                    version: Number.isFinite(n) ? n : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e && a$();
                }, [e]),
                {
                    isDismissed: n,
                    hasFetched: t,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (aX.A.isDismissedFor(e) ||
                                (eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                rf.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? n : null);
    return a && d && !o && null != i ? (0, l.jsx)(aZ, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aZ(e) {
    let { targetUser: n, version: i, onDismiss: r } = e,
        a = (0, aY.p)(n.id),
        [o, d] = (0, aH.RF)(a ? A.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lQ.m.SIDEBAR, !0),
        c = s.useCallback(
            (e) => {
                (d(e), r());
            },
            [d, r],
        ),
        u = s.useCallback(
            (e) => {
                (et.default.track(eo.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: e }),
                    (0, p.openModalLazy)(async () => {
                        let [{ TrialsSharedConfirmationModal: e }, i] = await Promise.all([
                                Promise.resolve().then(t.bind(t, 809813)),
                                (0, aB.xm)([n.id]),
                            ]),
                            s = i.get(n.id) ?? aB.o.FAIL;
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                results: [{ recipient: n, status: s }],
                                isReminderConfirmation: !1,
                                showRecipientList: !1,
                                recipientName: es.Ay.getName(n),
                            });
                    }));
            },
            [n],
        );
    if (null == o) return null;
    let h = es.Ay.getName(n);
    return (0, l.jsx)(sk, {
        className: aQ.K,
        analyticsLocation: L.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var a0 = t(93246),
    a1 = t(351906),
    a2 = t(383199),
    a3 = t(559506),
    a6 = t(361311),
    a9 = t(931481),
    a7 = t(791556),
    a5 = t(501193),
    a8 = t(383448),
    a4 = t(646986),
    oe = t(243166),
    on = t(62010),
    ot = t(123292),
    oi = t(840411);
let ol = (0, s_.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var os = t(666810),
    or = t(394300),
    oa = t(575593),
    oo = t(498032),
    od = t(44120),
    oc = t(75678),
    ou = t(317560),
    oh = t(99161),
    om = t(661492),
    oA = t(146423),
    op = t(662349),
    og = t(479026),
    ox = t(636374),
    of = t(699976),
    oI = t(202541),
    oE = t(733484),
    oj = t(880465);
function oC(e) {
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
        { trackUserProfileWishlistAction: g } = (0, r9.NJ)(),
        x = rQ("DMSidePanelWishlistItemCard") ? of.y.SIZE_78 : of.y.SIZE_90,
        f = of.Z[x],
        I = s.useCallback(() => {
            (g({
                action: ah.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        E = s.useCallback(() => {
            (g({
                action: ah.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
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
        } = (0, ox.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: E }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: oE.kL,
        children: (0, l.jsxs)(oA.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(oE.Nr, o),
            skuPreviewStyle: a()(oE.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = b ? (0, om.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, om.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(oo.N, { className: oE.Pf }),
                y &&
                    (0, l.jsx)(op.A, {
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
function oy(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, oh.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: oI.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, ou.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: oI.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(oC, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function ob(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, od.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: oI.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, og.e)({ sku: n, giftRecipient: t, giftingOrigin: oI.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(oE.ML, {
                    [oE.M]: n?.tenantMetadata?.collectibles?.type === oa.R.AVATAR_DECORATION,
                    [oE.Hm]: n?.tenantMetadata?.collectibles?.type === oa.R.PROFILE_EFFECT,
                    [oE.hH]: n?.tenantMetadata?.collectibles?.type === oa.R.PROFILE_FRAME,
                    [oE.qF]: n?.tenantMetadata?.collectibles?.type === oa.R.NAMEPLATE,
                    [oE.l2]: n?.tenantMetadata?.collectibles?.type === oa.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(oC, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function o_(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, oc.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: oI.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === aT.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(oC, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(oj.MO, { [oE.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(oE.fi, { [oE.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(oE.p7, { [oE.SW]: h.length >= 10, [oE.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function ov(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(oy, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(ob, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(o_, { sku: n, ...t });
        default:
            return null;
    }
}
var oN = t(927578),
    oT = t(249203),
    oS = t(919769),
    oR = t(695904),
    oM = t(116331),
    oO = t(713348),
    oL = t(535089),
    oP = t(815637);
function oD(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, r9.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, oM.A)(t),
        g = (0, m.bG)([oT.A], () => oT.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: ah.RP.WISHLIST }), i());
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
            let e = f.slice(0, 3).map((e) => ({ item: e, source: aT.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => oN.Ay.isPremiumSku(e.skuId));
                if (!oN.Ay.isPremiumAtLeast(t.premiumType, oI.PremiumTypes.TIER_2) && !n) {
                    let n = or.A.fromSKU((0, oi.rI)());
                    null != n && e.push({ item: n, source: aT.uS.POPULAR });
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
        C = (0, oL.A)({ wishlistId: r ?? null, onAction: I, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                E.map((e, n) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              ov,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, oS.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sF.Vq),
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
              children: (0, l.jsxs)(at.A.Overlay, {
                  ref: C,
                  className: oP.kL,
                  children: [
                      p && (0, l.jsx)(oR.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: oP.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: oP.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(on.E, {
                                              type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: A }) },
                                              variant: "primary",
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(ot.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rW.F, { children: (0, l.jsx)("div", { className: oP.vY, children: y }) }),
                  ],
              }),
          });
}
function ok(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = ol.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, oO.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(os.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(oD, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
    });
}
function ow(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lq.A], () => ({
            relationshipType: lq.A.getRelationshipType(n.id),
            originApplicationId: lq.A.getOriginApplicationId(n.id),
        })),
        h = (0, aG.fi)(n.id),
        A = (0, aF.q)({ userId: n.id }),
        p = (0, m.bG)([a1.A], () => a1.A.hidePersonalInformation),
        g = (0, m.bG)([aS.A], () => aS.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([aS.A], () => ({ defaultWishlistId: aS.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: E } = (0, aT.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, aN.A)(I);
    let j = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: ag.rf,
        children: [
            (0, l.jsx)(a3.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: ag.pq,
                children: [
                    (0, l.jsx)(ai.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rK.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(oe.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(r5.A, {
                            displayProfile: i,
                            themeType: am.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(a7.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(at.A.Overlay, {
                    children: (0, l.jsx)(a9.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    at.A.Overlay,
                    {
                        children: (0, l.jsx)(a9.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(a8.A, { user: n }),
            i?.private &&
                (0, l.jsx)(at.A.Overlay, { children: (0, l.jsx)(a5.A, { username: rK.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(at.A.Overlay, {
                    className: ag.Lw,
                    children: (0, l.jsx)(an.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: aU.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(a0.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ar.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(an.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(ae.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: ag.kR,
                children: [
                    o && x && (0, l.jsx)(aL.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(a4.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(a2.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(an.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(a6.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(at.A.Overlay, {
                              className: ag.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(an.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(r4.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(a2.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(an.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(a6.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(an.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(ae.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(ok, {
                            profileOwner: n,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: E,
                            onClick: () => {
                                d?.({ tabSection: ah.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                    r.isDM() && (0, l.jsx)(aJ, { targetUserId: n.id }),
                ],
            }),
        ],
    });
}
var oU = t(114212),
    oG = t(913453),
    oF = t(229187),
    oH = t(21241),
    oB = t(503062),
    oV = t(51943),
    oY = t(847374),
    oW = t(320448),
    oz = t(723200);
function oX(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, r9.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? oY.a : oW._;
    return (0, l.jsxs)("section", {
        className: oz.uW,
        children: [
            (0, l.jsxs)(tr.D, {
                className: a()(oz.wx, oz.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(oz.p_, r), children: i }),
        ],
    });
}
var oq = t(341278);
function oK(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, r9.NJ)(),
        r = (0, ig.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, oG.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(at.A.Overlay, {
              className: oq.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oX, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oq.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  oV.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, tX.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oH.A, { className: oq.yF }),
                  c &&
                      (0, l.jsx)(oX, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oq.p_,
                          onExpand: () => (0, oF.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oq.nC,
                                                children: [
                                                    (0, l.jsx)(oU.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(oU.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            oB.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, nz.openUserProfileModal)({
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
function o$(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, sa.Ay)(n.id),
        c = (0, r0.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        p = (0, r9.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, r6.A)(A, d, ah.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, r3.A)(g),
        I = (0, aR.fC)(),
        E = (0, rq.A)(d?.profileFrame?.skuId);
    (0, av.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, a_.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, nz.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([aS.A], () => ({ defaultWishlistId: aS.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, aT.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, aN.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: A,
        children: (0, l.jsx)(r9.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(aR.Hl, {
                value: I,
                children: (0, l.jsxs)(at.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: am.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(ap.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(aO.A, {}),
                        null != I.interactionType && (0, l.jsx)(ab.animated.div, { style: j, className: ap.tB }),
                        (0, l.jsxs)(t4.d_, {
                            className: a()(r && ap.BE, !r && null != E && ap.It),
                            children: [
                                (0, l.jsxs)(as.A, {
                                    children: [
                                        (0, l.jsx)(aD.A, { user: n, themeType: am.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aP.A, { user: n }) : (0, l.jsx)(ak.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ap.wx,
                                    children: [
                                        (0, l.jsx)(r8.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: am.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: ap.vK,
                                        }),
                                        (0, l.jsx)(aM.A, { className: ap.oR }),
                                        (0, l.jsx)(r7.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: aA.T[am.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aw.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: am.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ow, {
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
                                        className: ap.sJ,
                                        children: (0, l.jsx)(aL.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: ap.vS,
                                        children: (0, l.jsx)(ok, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: ah.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oK, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(au, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: E,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(r2.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != E && (0, l.jsx)(aa.A, { frame: E, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oQ = t(901600);
function oJ(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = so(),
        [o, d] = (0, rJ.A)(t),
        [c, u] = s.useState(!1),
        h = rQ("UserProfileSidebarRenderer"),
        A = (0, sa.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rq.A)(p),
        x = (0, m.bG)([rX.A], () => rX.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rZ.A)(i, e) : (0, rZ.A)(t, void 0, e);
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
        I = rK.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oQ.H : void 0,
        children: (0, l.jsx)(rW.F, {
            component: (0, l.jsx)(rz.A, {
                children: (0, l.jsx)(rW.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(ay, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(ax, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(o$, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oZ = t(522556),
    o0 = t(225315),
    o1 = t(684407),
    o2 = t(95701),
    o3 = t(919638),
    o6 = t(763827),
    o9 = t(812771),
    o7 = t(506309),
    o5 = t(598748),
    o8 = t(681154),
    o4 = t(975460),
    de = t(587895),
    dn = t(429913),
    dt = t(201718),
    di = t(339580),
    dl = t(633075),
    ds = t(903209),
    dr = t(382483),
    da = t(385113);
let dd = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function dc(e) {
    let [n, t] = s.useState(new Set()),
        i = s.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []),
        r = s.useMemo(
            () => ({
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
                                ((t = ro.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, dr.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    t && (0, dr.i$)().catch(() => {});
                                }, [t]),
                                (i = (0, m.bG)([da.A], () => da.A.getFeaturedFetchState())),
                                (l = (0, m.bG)([da.A], () => da.A.getDeveloperFetchState())),
                                (r = (0, m.yK)([da.A], () => da.A.getFeaturedApplicationIds())),
                                (a = (0, m.yK)([da.A], () => da.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === da.e.NOT_FETCHED ||
                                        i === da.e.FETCHING ||
                                        (t && (l === da.e.NOT_FETCHED || l === da.e.FETCHING)),
                                }),
                            {
                                widgetApps: C,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === o8.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => n.has(e.id)) ?? [],
                                [e, n],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, m.bG)(
                                [de.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            de.A.isFetchingApplication(e) ||
                                            (null == de.A.getApplication(e) && !de.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, dn.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sF.Vq)
                                            .map((e) => [e.id, (0, o4.t)(e)])
                                            .filter(sF.QE)
                                            .filter((e) => {
                                                let [n, t] = e;
                                                return E.has(t.id);
                                            }),
                                    ),
                                [E, u],
                            )),
                            (A = s.useMemo(
                                () => [
                                    ...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id)),
                                ],
                                [o, h],
                            )),
                            { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                            { identitiesByUserId: _, isLoadingIdentities: v } =
                                ((p = (0, m.cf)([di.A], () =>
                                    Object.fromEntries(y.map((e) => [e, di.A.getUserIdentities(e)]).filter(sF.QE)),
                                )),
                                (g = (0, m.bG)([di.A], () =>
                                    y.some((e) => di.A.getFetchState(e) === di.e.NOT_FETCHED || di.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && dt.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: T } =
                                ((x = (0, m.cf)([aS.A], () =>
                                    Object.fromEntries(y.map((e) => [e, aS.A.getUserProfile(e) ?? null]).filter(sF.QE)),
                                )),
                                (f = (0, m.yK)([aS.A], () =>
                                    y.filter((e) => null == aS.A.getUserProfile(e) && !aS.A.isFetchingProfile(e)),
                                )),
                                (I = (0, m.bG)([aS.A], () => y.some((e) => aS.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, ds.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                            S = (0, m.cf)(
                                [da.A],
                                () => Object.fromEntries([...E].map((e) => [e, da.A.getConfig(e)]).filter(sF.QE)),
                                [E],
                            ),
                            R = j || b || v || T,
                            M = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== o8.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let n = C[e.extra.application_id] ?? null;
                                        if (null == n) return e;
                                        let t = S[n.id] ?? null;
                                        if (null == t || null == t.surfaces[o5.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, dl.E)(e, n.id)) ?? !1;
                                        return {
                                            ...e,
                                            applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                        };
                                    });
                            }, [R, e, C, S, _, N]),
                            [O, L] = s.useState(M);
                        return (
                            s.useEffect(() => {
                                R || L(M);
                            }, [R, M]),
                            O
                        );
                    })(e, n),
            }),
            [i, n],
        );
    return (0, l.jsx)(dd.Provider, { value: r, children: e.children });
}
var du = t(900797),
    dh = t(890856),
    dm = t(180170),
    dA = t(435738),
    dp = t(38055);
let dg = "content-inventory-feed",
    dx = `${dg}-settings`,
    df = `${dg}-toggle`;
var dI = t(569709);
function dE(e) {
    return !e.currentTarget.contains(e.target);
}
let dj = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([dA.A], () => dA.A.hidden),
            h = (0, c.omit)((0, C.rm)(dx), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(df), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                dE(e) ||
                    (0, j.L3)(e, async () => {
                        let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                        return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                    });
            }, []),
            x = s.useCallback(
                (e) => {
                    if (!dE(e)) return u ? (0, dm.Il)() : r();
                },
                [u, r],
            ),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(dp.A, { ...h }),
                    (0, l.jsx)("span", { className: dI.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(du.t, { className: dI.wT })
                              : o
                                ? (0, l.jsx)(oY.a, { className: dI.wT })
                                : (0, l.jsx)(oW._, { className: dI.wT })),
                          (0, l.jsx)("span", { className: dI.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(dh.s, {
                      ...A,
                      className: a()(dI.N1, { [dI.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: dI.N1, onContextMenu: g, children: f }),
        });
    }),
    dC = function () {
        return null;
    };
var dy = t(963307),
    db = t(424994);
let d_ = et.default.track;
function dv(e, n) {
    d_(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: db.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var dN = t(468581),
    dT = t(808666),
    dS = t(414499),
    dR = t(323384),
    dM = t(55730),
    dO = t(765379),
    dL = t(359549),
    dP = t(284525),
    dD = t(482030),
    dk = t(583846),
    dw = t(506326);
t(333007);
var dU = t(342952),
    dG = t(315710),
    dF = t(276293),
    dH = t(935063),
    dB = t(778712),
    dV = t(696986),
    dY = t(97808),
    dW = t(738188),
    dz = t(983851),
    dX = t(31300),
    dq = t(308528),
    dK = t(401843),
    d$ = t(375499),
    dQ = t(429433),
    dJ = t(324688);
let dZ = (0, o2.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function d0(e) {
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
        [p, g] = s.useState((0, re.x7)("")),
        x = n8.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(rn.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(dJ.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dZ,
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
                : (t(n), A(""), g((0, re.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function d1(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, r0.Ay)(),
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
        (0, l.jsx)(nw.Y, {
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
                            children: (0, l.jsx)(dQ.C, {
                                messageId: eo.dJq,
                                channel: dZ,
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
                        className: dJ.mJ,
                        children: (0, l.jsx)(d$.A, {
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
var d2 = t(402216),
    d3 = t(822123),
    d6 = t(409626),
    d9 = t(692969),
    d7 = t(711589),
    d5 = t(607407),
    d8 = t(832163),
    d4 = t(533562),
    ce = t(805901),
    cn = t(565645);
t(969602);
var ct = t(7584);
(t(850992), t(690521));
var ci = t(806931),
    cl = t(307731),
    cs = t(866780);
function cr(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, r3.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tr.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(ce.c, {
                config: d$.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(ab.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(cn.A, {
                            className: a()(cs.Zg, r, { [cs.c4]: t }),
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
(cl.EmojiIntention.CHAT,
    [
        ct.Ay.getByName("thumbsup"),
        ct.Ay.getByName("eyes"),
        ct.Ay.getByName("laughing"),
        ct.Ay.getByName("watermelon"),
        ct.Ay.getByName("fork_and_knife"),
        ct.Ay.getByName("yum"),
    ].filter(sF.Vq));
var ca = t(636585),
    co = t(543465),
    cd = t(607567),
    cc = t(774926),
    cu = t(20805),
    ch = t(22869),
    cm = t(623671),
    cA = t(428249),
    cp = t(327098),
    cg = t(576757),
    cx = t(202195),
    cf = t(140651),
    cI = t(345394);
let cE = function (e) {
    let { children: n } = e,
        [t, i] = (0, aH.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lQ.i.USER_DISMISS);
    }, [i]);
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lP.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: cI.A },
                  }),
              ],
          });
};
var cj = t(315246),
    cC = t(866323),
    cy = t(252392);
let cb = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, cC.p)(
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
                (0, l.jsx)(ab.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(cy.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(cy.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var c_ = t(381941),
    cv = t(231188);
let cN = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("419121"),
                t.e("149697"),
                t.e("60882"),
                t.e("489020"),
                t.e("919789"),
                t.e("669130"),
                t.e("70866"),
                t.e("802890"),
                t.e("232960"),
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
                t.e("833292"),
                t.e("470126"),
                t.e("128804"),
                t.e("71151"),
                t.e("227853"),
                t.e("286615"),
                t.e("311541"),
                t.e("795854"),
                t.e("870088"),
                t.e("300641"),
                t.e("571163"),
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
                t.e("206189"),
                t.e("804439"),
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
                t.e("440727"),
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
                t.e("959880"),
                t.e("174016"),
                t.e("907167"),
                t.e("910471"),
                t.e("11301"),
                t.e("811133"),
                t.e("861060"),
                t.e("364827"),
                t.e("77333"),
                t.e("217229"),
                t.e("477175"),
                t.e("960235"),
                t.e("910486"),
                t.e("198329"),
                t.e("678157"),
                t.e("942374"),
                t.e("147134"),
                t.e("331988"),
                t.e("10866"),
                t.e("236850"),
                t.e("40291"),
                t.e("733115"),
                t.e("397270"),
                t.e("190779"),
                t.e("373122"),
                t.e("217951"),
                t.e("221856"),
                t.e("186212"),
                t.e("755936"),
                t.e("46322"),
                t.e("899843"),
                t.e("904448"),
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
                t.e("178565"),
                t.e("630267"),
                t.e("576909"),
                t.e("27355"),
                t.e("407170"),
                t.e("255580"),
                t.e("299854"),
                t.e("608557"),
                t.e("247660"),
                t.e("556576"),
                t.e("773534"),
                t.e("649362"),
                t.e("556868"),
                t.e("691461"),
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
    cT = s.createContext(void 0);
function cS(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, dG.tj)(t),
        (0, l.jsx)(cT.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: cv.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function cR(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, cf.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(cv.ZK, e, i), style: s, children: n }),
        })
    );
}
function cM(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: cv.$m, children: n });
}
function cO(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [E, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [si.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && si.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, cx.A)(t),
                o = (0, io.Ay)(a),
                { needSubscriptionToAccess: d } = (0, le.A)(n?.id),
                c = (0, m.bG)([tq.A], () => (null != a ? tq.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([cd.Ay], () => (null != a ? cd.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lK.A], () => lK.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && co.Ay.isChannelMuted(null, n),
                            i = lq.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(dW.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: cv.vb,
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
                            className: cv.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(tr.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, iO.iN)(a.id), i?.(a));
                                        },
                                        className: cv.I3,
                                        children: [
                                            (0, l.jsx)(tY.Ay, {
                                                guild: c,
                                                size: tY.Ay.Sizes.SMOL,
                                                className: cv.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oW._, {
                                                size: "xxs",
                                                color: tc.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dz.H, { size: "xs", color: tc.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: cv.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(ca.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dY.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dB._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: cv.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dV.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      sn.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dX.k : dz.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, cp.A)(h),
        L =
            ((n = O),
            (t = (0, m.bG)([tq.A], () => tq.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, io.Ay)(i)),
            null != n && null != t && null != i && o2.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: cv.kP,
                              children: [
                                  (0, l.jsxs)(tr.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, iO.iN)(i.id),
                                      className: cv.I3,
                                      children: [
                                          (0, l.jsx)(tY.Ay, {
                                              guild: t,
                                              size: tY.Ay.Sizes.SMOL,
                                              className: cv.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oW._, {
                                              size: "xxs",
                                              color: tc.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dF.N, { size: "xs", color: tc.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: cv.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(ca.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dY.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: dB._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: cv.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dV.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != M && 0 === p.length ? [M] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rK.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, io.Ay)(o, !0),
        H =
            null != o && E
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${G}` }),
        B = E ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function V(e) {
        let n,
            { emoji: t } = e;
        if (null != t) {
            if (
                (et.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: db.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, ir.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                E)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dq.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: db.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, ir.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await dq.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? db.PA.DM_REACTION_MESSAGE_SENT : db.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, cA.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: c_.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, t));
    }
    let X = g ?? R ?? L;
    function q() {
        (j((e) => !e), w && C?.focus());
    }
    function K(e) {
        (U(e), e && C?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(cb, { sent: T, shown: v, className: cv.Jt }),
            X ??
                (0, l.jsx)(cE, {
                    children: (0, l.jsxs)("div", {
                        className: cv.T7,
                        children: [
                            (0, l.jsx)(cL, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(d1, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? cv.P2 : cv.VE,
                children: [
                    (0, l.jsx)(d0, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: E ? o : void 0,
                        showEmojiButton: null != X,
                        className: cv.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(tr.D, {
                                          className: cv.wD,
                                          onClick: q,
                                          children: E
                                              ? (0, l.jsx)(dF.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dH.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tr.D, {
                            onClick: () => K(!1),
                            className: cv.i3,
                            children: (0, l.jsx)(ip.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: tc.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: cv.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                x.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => K(!0),
                                    size: "md",
                                    text: z.intl.string(z.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        P,
                    ],
                }),
        ],
    });
}
let cL = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, d3.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tK._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(cr, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: cv.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function cP(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, cg.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, cx.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: cv.MH,
        children: [
            (0, l.jsxs)("div", {
                className: cv.WP,
                children: [
                    (0, l.jsx)(dU.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dB._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dV.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(cv.Xn, cv.zA),
                        children: z.intl.format(t, {
                            user0: rK.Ay.getName(o, n?.id, g[0]),
                            user1: rK.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(cv.Mj, cv.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    ch.A,
                                    {
                                        textClassName: a()(cv.Mj, cv.nk),
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
                                    ch.A,
                                    {
                                        textClassName: a()(cv.Mj, cv.nk),
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
            null != p && (0, l.jsx)(d2.Ay, { size: d2.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(cj.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cD(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(tr.D, { className: cv.Zw, onClick: t, children: n });
}
function ck(e) {
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
        I = (0, cu.zD)(f),
        E = I ? f.extra?.application_id : void 0,
        j = (0, d4.W)();
    null != j && (E = j);
    let C = (0, d9.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : E,
                source: d6.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(db.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, cc.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([d8.A], () => d8.A.getDetectableIdsToApplicationIds()),
        N = I ? C : void 0,
        T = s.useContext(cT);
    return (0, l.jsxs)("div", {
        className: cv.au,
        children: [
            (0, l.jsx)(cP, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(cR, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: cv.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: cv.Fb,
                                children: (0, l.jsx)(cm.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: cm.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: cv.iC,
                                children: [
                                    (0, l.jsx)(cD, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(cv.$2, { [cv.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cD, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cv.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dV.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: cv.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != v[E]
                ? (0, l.jsx)(cN, {
                      className: cv.zu,
                      applicationId: E,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: of.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cw(e) {
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
        { actionString: p, canWatch: g } = (0, d7.K)(a),
        { entry: x } = A,
        f = (0, cu.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        E = (0, d4.W)();
    null != E && (I = E);
    let j = (0, d9.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: d6.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(db.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, cp.A)(x),
        { largeImage: N, smallImage: T } = (0, cc.D8)(y, b ?? v),
        { largeImage: S } = (0, cc.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([d8.A], () => d8.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(cT);
    return (0, l.jsxs)("div", {
        className: cv.au,
        children: [
            (0, l.jsx)(cP, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(cR, {
                backgroundImgSrc: S?.src,
                className: cv.uR,
                children: [
                    (0, l.jsx)(cD, {
                        onClick: g
                            ? () => {
                                  (lU.default.selectVoiceChannel(a.channelId), (0, dK.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: cv.nh,
                            children: [
                                (0, l.jsx)(d5.A, { className: cv.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: cv.NE,
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
                        className: cv.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: cv.Fb,
                                    children: (0, l.jsx)(cm.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: cm.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: cv.gv,
                                children: [
                                    (0, l.jsx)(cD, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: cv.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cD, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cv.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dV.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != M[I]
                ? (0, l.jsx)(cN, {
                      className: cv.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: of.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cU = t(299846);
let cG = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cU.u)(t);
    function u() {
        (0, dD.hg)(t.extra.application_id);
    }
    let { data: h } = (0, tn.YY)(t.extra.application_id),
        m = (0, dL.Ay)({ application: h, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dw.iT, { location: dw.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(ck, {
            channel: n,
            userDescription: (0, dk.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, dM.A)(d, eo.jUm.JOIN) || (0, dO.A)(d),
        f = g
            ? (0, l.jsx)(dP.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dT.I,
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
                      icon: dS.h,
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
                      icon: dR.k,
                  }),
        j = [I, g && !r ? f : E].filter(sF.Vq);
    return (0, l.jsxs)(cS, {
        children: [
            p,
            (0, l.jsx)(cM, {
                children: (0, l.jsx)(cO, {
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
var cF = t(322789),
    cH = t(808380),
    cB = t(687966),
    cV = t(960076),
    cY = t(544441),
    cW = t(562708),
    cz = t(139286);
function cX(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(t),
        s = (0, dL.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cz.A)({
            name: cW.ImpressionNames.CLOUD_PLAY_CTA,
            type: cW.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: dS.h,
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
var cq = t(601007),
    cK = t(648246),
    c$ = t(308335),
    cQ = t(790381),
    cJ = t(266080),
    cZ = t(968309),
    c0 = t(30370);
function c1(e) {
    let n = (0, m.bG)([c0.A], () => c0.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cZ.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var c2 = t(18282);
let c3 = [...cF.n, dw.Yq],
    c6 = {
        [cH.Y.DESKTOP]: null,
        [cH.Y.LINUX]: null,
        [cH.Y.MACOS]: null,
        [cH.Y.NINTENDO]: null,
        [cH.Y.IOS]: null,
        [cH.Y.ANDROID]: null,
        [cH.Y.XBOX]: cJ.A,
        [cH.Y.PLAYSTATION]: cQ.A,
    },
    c9 = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cU.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, cx.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? c6[g] : null,
            I = c1(g === cH.Y.XBOX ? eo.fg2.XBOX : g === cH.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: E } = (0, tn.YY)(x),
            j = (0, cY.A)(x),
            { analyticsLocations: C } = (0, P.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, dL.JC)(E),
            b = (0, c$.o)(h?.application_id ?? m?.applicationId ?? E?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dw.mG, {
                location: null == A ? dw.N5.POPOUT : dw.N5.STREAMING_POPOUT,
                children: c3.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(ck, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(c2.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dk.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cq.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cw, {
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
                                  ? (0, l.jsx)(cq.A, {
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
                          cX,
                          { application: E, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, dM.A)(h, eo.jUm.JOIN) || (0, dO.A)(h))
                    ? (0, l.jsx)(
                          dP.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cB.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cV.A)(h)
                    ? (0, l.jsx)(cK.A, { activity: h, size: "md", variant: "primary", icon: tu.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sF.Vq);
        return (0, l.jsxs)(cS, {
            children: [
                v,
                (0, l.jsx)(cM, {
                    children: (0, l.jsx)(cO, {
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
    c7 = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function c5(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, tn.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, dL.Ay)({ application: r, analyticsLocations: a }),
        d = (0, ir.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = c7(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, aH.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lQ.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, E] = s.useState(!1);
    return (
        f && !I && E(!0),
        (0, cz.A)(
            {
                name: cW.ImpressionNames.CLOUD_PLAY_CTA,
                type: cW.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lP.A, {
            title: z.intl.string(z.t["+WNDtV"]),
            body: z.intl.string(z.t["5QKxGI"]),
            targetElementRef: i,
            shouldShow: f,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/5915cd247ac6483ec4affbfd6004c9f0379475a4de474e3d2021fc013022a823.svg",
            },
            actions: [
                {
                    icon: dS.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lQ.i.USER_DISMISS), h(null));
            },
        })
    );
}
let c8 = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(c5, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var c4 = t(363670),
    ue = t(205327),
    un = t(52133),
    ut = t(835723),
    ui = t(172710),
    ul = t(655116),
    us = t(763758),
    ur = t(286617),
    ua = t(533207),
    uo = t(121090),
    ud = t(693879),
    uc = t(809854),
    uu = t(272984),
    uh = t(170699);
function um(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, uc.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dk.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: uh.lu,
              children: [
                  (0, l.jsx)(ud.z, { entry: t }),
                  (0, l.jsx)("div", { className: uh.Lt, children: (0, l.jsx)("div", { className: uh.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: uh.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function uA(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, c4.u7)(r),
        g = c1(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [ul.A, sN.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, ur.A)(ul.A, sN.default, p, c) : void 0),
            [c, p],
            un.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        E = [];
    u.media.provider === ue.X.SPOTIFY &&
        ((t = () => {
            (0, ui.Mp)(c);
        }),
        (i = () => {
            (0, ui.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, ui.Mp)(c);
        }),
        (I = (0, l.jsx)(us.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: cv.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, ui.mN)(c, p.id, e);
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
                        icon: ut.J,
                        onClick: function () {
                            null != f && ((0, ua.A)(f, uu.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(ck, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === ue.X.SPOTIFY
                ? (0, l.jsx)(c2.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: uo.A })
                : null,
        userDescription: (0, dk.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(um, { activity: c }),
    });
    return (0, l.jsxs)(cS, {
        children: [
            j,
            (0, l.jsx)(cM, {
                children: (0, l.jsx)(cO, {
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
var up = t(903134),
    ug = t(56121),
    ux = t(263577),
    uf = t(868065),
    uI = t(804779);
let uE = [dw.Y8],
    uj = [ug.j.WEEK],
    uC = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, cc.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dk.TQ)(n);
        return null != r && (0, sF.S1)(r, uj)
            ? (0, l.jsxs)(uf.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(uf.UA, {
                          children: [
                              (0, l.jsx)(uf.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(uf.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(dw.mG, {
                                  location: dw.N5.CARD,
                                  children: uE.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(ux.V, { src: s?.src, size: 48, className: uI.xn }),
                  ],
              })
            : null;
    });
var uy = t(210528);
let ub = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, dk.TQ)(t),
        u = c1(eo.fg2.SPOTIFY);
    if (null == d || !(0, sF.S1)(c, uj)) return null;
    function h() {
        let e = uu.M0.ALBUM,
            n = uy.A.isProtocolRegistered()
                ? uu.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : uu.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(cS, {
        children: [
            (0, l.jsx)(ck, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = uu.M0.ARTIST,
                        n = uy.A.isProtocolRegistered()
                            ? uu.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : uu.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === ue.X.SPOTIFY
                        ? (0, l.jsx)(c2.A, { onClick: u, Icon: uo.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dw.mG, {
                    location: dw.N5.POPOUT,
                    children: uE.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(cM, {
                children: (0, l.jsx)(cO, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var u_ = t(977001);
let uv = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cU.u)(t),
        c = (0, dk.ty)(t),
        u = (0, dk.TQ)(t);
    if (null == a || null == c || null == u || !(0, u_._E)(u)) return null;
    let h = null != t.extra.platform ? c6[t.extra.platform] : null;
    return (0, l.jsxs)(cS, {
        children: [
            (0, l.jsx)(ck, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(c2.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dw.mG, {
                    location: dw.N5.POPOUT,
                    children: u_.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cM, {
                children: (0, l.jsx)(cO, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var uN = t(514243),
    uT = t(347306),
    uS = t(123917),
    uR = t(998218);
let uM = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = c1(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = uR.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, uS.h)({ href: uR.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cS, {
              children: [
                  (0, l.jsx)(ck, {
                      channel: n,
                      entry: t,
                      userDescription: (0, dk.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(c2.A, {
                          onClick: a,
                          Icon: uT.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dw.mG, {
                          location: dw.N5.POPOUT,
                          children: uN.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cM, {
                      children: (0, l.jsx)(cO, {
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
function uO(e) {
    return e?.type === dy.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o8.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function uL(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case o8.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cF.A, { ...t, entry: n });
        case o8.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uN.A, { ...t, entry: n });
        case o8.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(u_.Ay, { ...t, entry: n });
        case o8.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(uC, { ...t, entry: n });
        case o8.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c4.Ay, { ...t, entry: n });
        case o8.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(dN.A, { ...t, entry: n });
        default:
            return null;
    }
}
function uP(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === o8.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(c8, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uD(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(uk, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(db.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function uk(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case o8.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(c9, { ...t, entry: n });
        case o8.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uM, { ...t, entry: n });
        case o8.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(uv, { ...t, entry: n });
        case o8.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ub, { ...t, entry: n });
        case o8.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(uA, { ...t, entry: n });
        case o8.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cG, { ...t, entry: n });
        default:
            return null;
    }
}
let uw = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cU.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(dd);
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
        v = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled);
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
                dv(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        dv(db.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(() => {
            ((I.current = !1),
                setTimeout(() => {
                    I.current || (y(!1), _(v));
                }, 100));
        }, [v]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(uP, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: M,
                children: (0, l.jsx)(nw.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(up.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(uD, {
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
                        b && M();
                    },
                    spacing: 8,
                    children: (e, n) => {
                        let { isShown: t } = n;
                        return (0, l.jsx)(tr.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                E || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(uL, {
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
var uU = t(531685),
    uG = t(99066),
    uF = t(376261),
    uH = t(99753),
    uB = t(136722),
    uV = t(860071);
let uY = [],
    uW = new Set(),
    uz = new Set();
var uX = t(808323);
let uq = new Set([
    o8.ContentInventoryEntryType.PLAYED_GAME,
    o8.ContentInventoryEntryType.WATCHED_MEDIA,
    o8.ContentInventoryEntryType.TOP_GAME,
    o8.ContentInventoryEntryType.TOP_ARTIST,
    o8.ContentInventoryEntryType.LISTENED_SESSION,
    o8.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uK = t(498642);
let u$ = (0, s_.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uQ = t(293860);
let uJ = { cooldownDurationMs: 60 * sy.A.Millis.DAY };
function uZ(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: u$.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = sR(),
                i = (0, m.bG)([uK.A], () => uK.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i >= 200);
        })(n);
    return (0, l.jsx)(lF.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uJ,
        groupName: lQ.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sk, {
                      className: uQ.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var u0 = t(728321),
    u1 = t(282006);
let u2 = er.Ay.getEnableHardwareAcceleration(),
    u3 = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    u6 = s.memo(function (e) {
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
            { analyticsLocations: S } = (0, P.Ay)(),
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
                                t.e("78247"),
                                t.e("470314"),
                                t.e("70515"),
                                t.e("404524"),
                                t.e("654148"),
                                t.e("666939"),
                                t.e("281165"),
                                t.e("184841"),
                            ]).then(t.bind(t, 107632)),
                            n = lK.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
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
            O = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    n = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    M.A.startTyping(p.id));
            }, [c, p.id]),
            L = s.useCallback(
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
        return (0, l.jsx)(q.A, {
            targetElementRef: _,
            user: c,
            guildId: g,
            channelId: p.id,
            roleId: a,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: O,
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
                    shouldAnimateStatus: u2,
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
                    onClickPremiumGuildIcon: L,
                    selected: v,
                    itemProps: y,
                    nameplate: C,
                    onClick: (e) => {
                        e.shiftKey ? O?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    u9 = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != n ? V.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(u6, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function u7(e) {
    let { index: n } = e,
        t = (0, C.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class u5 extends s.Component {
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
        if (r?.id === dg) return (0, s.createElement)(dj, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                u0.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: u3,
                    children: (0, s.createElement)(u1.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(u1.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === dy.S9.CONTENT_INVENTORY) {
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
            if (r.type === dy.S9.MEMBER && "user" in r) {
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
                    u9,
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
            if (r.type === dy.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    uw,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === dy.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(dC, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(u7, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === dg) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uO(t[i + 1 + l]) : n;
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
            .filter(sF.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== dy.S9.MEMBER ||
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
                (0, l.jsx)(ri.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rW.F, {
                                component: (0, l.jsx)(rz.A, {
                                    children: (0, l.jsx)(rW.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, io.m1)(t, ee.default, lq.A),
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
function u8(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(L.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([dy.Ay], () => dy.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uX.A)({ id: db.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, un.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uV.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uY;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uW;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    uB.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => uq.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [dA.A, uH.A],
                            () => {
                                let e = uH.A.getDebugImpressionCappingDisabled();
                                return !(0, uG.sE)("useFilterImpressionCappedContent") || e
                                    ? uz
                                    : dA.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: uz };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, dk.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([uH.A], () => uH.A.getFeedRequestId(db.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(dd).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([dA.A], () => dA.A.hidden),
                A = (0, m.bG)([uU.A], () => uU.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([tq.A], () => tq.A.getGuild(r), [r]),
                x = ((0, uF.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, E, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: dy.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: dy.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: dg,
                        type: dy.S9.CONTENT_INVENTORY_GROUP,
                        key: dg,
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
                        feedHeight: e.map(uO).reduce((e, n) => e + n, 0),
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
                                (d_(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: db.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, uG.sE)("useInjectContentInventoryFeed") &&
                                    eq.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
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
    let g = (0, o7.W)("lg") + (0, o7.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = A.current;
                if (null == t) return;
                let i = n === dx || n === df ? 0 : parseInt(n, 10),
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
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: [
                (0, l.jsx)(uZ, { guildId: n.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: E,
                    children: (0, l.jsx)(u5, {
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
function u4(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(dc, { children: (0, l.jsx)(u8, { channel: i, className: t }) }), [i, t]);
}
var he = t(888904);
let hn = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: he.kL,
        children: [
            (0, l.jsxs)(lL.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lL.A.Icon, { icon: dF.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lL.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: he.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: he.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: he.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var ht = t(909735),
    hi = t(943712),
    hl = t(321255),
    hs = t(746080),
    hr = t(516607),
    ha = t(999900);
function ho() {
    return (0, l.jsx)("div", { className: ha.wG, children: (0, l.jsx)(g.y, {}) });
}
let hd = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("229511"),
                t.e("599660"),
                t.e("452880"),
                t.e("726399"),
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
        renderLoader: ho,
        name: "ForumChannel",
    }),
    hc = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("770583"),
                t.e("43853"),
                t.e("815852"),
                t.e("154168"),
                t.e("973902"),
                t.e("979585"),
                t.e("357718"),
                t.e("563600"),
            ]).then(t.bind(t, 203859)),
        webpackId: 203859,
        renderLoader: ho,
        name: "AppChannel",
    });
function hu() {
    return Promise.all([
        t.e("651299"),
        t.e("426965"),
        t.e("256172"),
        t.e("859821"),
        t.e("113561"),
        t.e("368991"),
        t.e("688508"),
        t.e("422037"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("375971"),
        t.e("792818"),
        t.e("630279"),
        t.e("17094"),
        t.e("585190"),
        t.e("114785"),
        t.e("205846"),
        t.e("998392"),
        t.e("703540"),
        t.e("728723"),
        t.e("794188"),
        t.e("740705"),
        t.e("730227"),
        t.e("374962"),
        t.e("770583"),
        t.e("907467"),
        t.e("43853"),
        t.e("102170"),
        t.e("28094"),
        t.e("371547"),
        t.e("673868"),
        t.e("389684"),
        t.e("45646"),
        t.e("604456"),
        t.e("774899"),
        t.e("847810"),
        t.e("249727"),
        t.e("784573"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("93461"),
        t.e("437961"),
        t.e("78247"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("920593"),
        t.e("949013"),
        t.e("256373"),
        t.e("33448"),
        t.e("79216"),
        t.e("420577"),
        t.e("815275"),
        t.e("636516"),
        t.e("360536"),
        t.e("704374"),
        t.e("986300"),
        t.e("815852"),
        t.e("465694"),
        t.e("874821"),
        t.e("426792"),
        t.e("932011"),
        t.e("154168"),
        t.e("769014"),
        t.e("973902"),
        t.e("815057"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("726223"),
        t.e("979585"),
        t.e("678827"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("60701"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("975076"),
        t.e("736793"),
        t.e("112733"),
        t.e("357718"),
        t.e("586546"),
        t.e("792461"),
    ]).then(t.bind(t, 540462));
}
let hh = (0, t_.Fe)({ createPromise: hu, webpackId: 540462, name: "ChannelCall", renderLoader: ho });
function hm() {
    return Promise.all([
        t.e("770583"),
        t.e("998392"),
        t.e("703540"),
        t.e("368991"),
        t.e("256172"),
        t.e("688508"),
        t.e("422037"),
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
        t.e("17094"),
        t.e("585190"),
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
        t.e("920593"),
        t.e("949013"),
        t.e("256373"),
        t.e("33448"),
        t.e("79216"),
        t.e("420577"),
        t.e("815275"),
        t.e("636516"),
        t.e("360536"),
        t.e("704374"),
        t.e("465694"),
        t.e("874821"),
        t.e("426792"),
        t.e("769014"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("979585"),
        t.e("678827"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("60701"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("975076"),
        t.e("580372"),
    ]).then(t.bind(t, 507007));
}
let hA = (0, t_.Fe)({ createPromise: hm, webpackId: 507007, name: "StageChannelCall", renderLoader: ho }),
    hp = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("804510"),
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
            return (0, l.jsx)(sK, {});
        },
    }),
    hg = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("577154"),
                t.e("424216"),
                t.e("877730"),
                t.e("611899"),
                t.e("804510"),
                t.e("527552"),
                t.e("769266"),
                t.e("487873"),
                t.e("765626"),
                t.e("683302"),
                t.e("249681"),
                t.e("728136"),
                t.e("428235"),
                t.e("507775"),
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
    hx = (0, t_.Fe)({
        createPromise: () => Promise.all([t.e("386345"), t.e("269178"), t.e("177718")]).then(t.bind(t, 763349)),
        webpackId: 763349,
        name: "FriendsSidebar",
    });
class hf extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rY.d0)("guild_channel"), this.maybePreloadChannelCall());
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
    isChatInSidebar() {
        let { channel: e, dmAppChannelApplicationId: n } = this.props;
        return null != e && ((0, o2.ZV)(e.type) || null != n);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? hu()
            : e === eo.rbe.GUILD_STAGE_VOICE && hm();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, iO.iN)(e.id);
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
            (0, nz.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [L.A.CHANNEL_HEADER],
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
                    t.e("893190"),
                    t.e("146652"),
                    t.e("189673"),
                    t.e("882073"),
                    t.e("797558"),
                    t.e("955557"),
                    t.e("691994"),
                    t.e("576665"),
                    t.e("947502"),
                    t.e("245996"),
                    t.e("700792"),
                    t.e("965789"),
                    t.e("592822"),
                    t.e("529422"),
                    t.e("823427"),
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
        return e?.hasFlag(hs.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(i8.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(n4.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== ci.lp.STREAM
            ? null
            : (0, l.jsx)(
                  i7.A,
                  { size: d2.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
            dmAppChannelApplicationId: a,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let o = [];
        if (e.isSystemDM()) return o;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
                break;
            case eo.rbe.DM:
                (o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(l0, { channel: e }, "calls")),
                    o.push((0, l.jsx)(lp.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(l1.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(n_, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(sd, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(se, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(l0, { channel: e }, "calls")),
                    o.push((0, l.jsx)(lp.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(l1.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(nT, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(iH, { channel: e })),
                    null == n || n.isForumLikeChannel() || o.push((0, l.jsx)(rL.A, { channel: n }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(sl, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iX, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(lp.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(nT, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && o.push((0, l.jsx)(lE, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rw, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rL.A, { channel: e }, "browser")),
                    t || o.push((0, l.jsx)(nS.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(lp.A, { channel: e }, "pins")),
                    (0, ts.PD)(e.guild_id, "channel_header") &&
                        o.push((0, l.jsx)(lA, { channelId: e.id }, "conversations")),
                    o.push((0, l.jsx)(nT, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && o.push((0, l.jsx)(lE, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(tl, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rL.A, { channel: e }, "browser")),
                        t || o.push((0, l.jsx)(nS.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(lp.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(nT, { channelId: e.id }, "members")));
                    break;
                }
                o.push((0, l.jsx)(n2, { channel: e, isLurking: t }, "app-channel-actions"));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lO, {}, "game-invite-channel-learn-more")),
                    t ||
                        (o.push((0, l.jsx)(lT, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(nS.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(nT, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(nT, { channelId: e.id }, "members"));
        }
        return o;
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
                n.push((0, l.jsx)(nT, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(nT, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(nT, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e && null != n
            ? (0, l.jsx)("div", {
                  className: ha.u8,
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
            showActivityPanel: r,
            showFramePanel: o,
            hasVideo: c,
            showHeaderGuildBreadcrumb: u,
            isAppChannelChatExpanded: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != n, "Should not be null if channel is not null."));
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, iO.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = r || o,
            I = p || g;
        return (0, l.jsxs)("div", {
            className: ha.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lL.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(ha.DD, r, { [ha.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: I,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(ic.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, ic.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: i,
                                        hasVideo: c,
                                        isAppChannelChatExpanded: h,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: m,
                                        handleParentClick: A,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: ha.u8,
                                              children: (0, l.jsx)(nr, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: ha.u8,
                                                children: (0, l.jsx)(x.$, {
                                                    onClick: () => (0, ns.uh)(e.guild_id, e.id),
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: z.intl.string(z.t.k5WiPf),
                                                }),
                                            })
                                          : (0, ic.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sz.A, { channelId: e.id }),
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
                if (!n) return (0, l.jsx)(hA, { channel: e, popoutType: n5.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    hh,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: n5.N.NO_POPOUT,
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
        return (0, l.jsx)(e4, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(ls, { guildId: n.id })
                : (0, l.jsx)(i4.H, { guildId: n.id, children: (0, l.jsx)(lh, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(oZ.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(ih.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(is, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(hd, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(id.A, { channel: e, guild: n, chatInputType: n8.oU.NORMAL }, null != n ? n.id : "home")
            : (0, l.jsx)(hc, { channel: e }, e.id);
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
            return (0, l.jsx)(oJ, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sW, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(u4, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(u4, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(tb, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(hp, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => i5(sm.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, o0.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case sQ.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rv, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sQ.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rV, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sQ.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? i1 : rV;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(hl.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sQ.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sQ.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: ha.uC,
                    children: (0, l.jsx)(hg, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => s$.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(o9.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? o9.X.PostSidebar : o9.X.ThreadSidebar,
                maxWidth: c,
                capturePointer: this.isChatInSidebar(),
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
        if (i) return (0, l.jsx)(hn, {});
        if (null == e) return (0, l.jsx)(hi.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            E = (0, ht.UN)("Channel"),
            j = null != d && !I,
            C =
                ((0, o2.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !f,
                        className: a()(ha.TE, {
                            [ha.js]: (I && !E) || j,
                            [ha.Rs]: I ? !E || g : j || x,
                            [ha.jl]: I && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: ha.x4,
                                      channel: e,
                                      draftType: iJ.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(ha.Qs, { [ha.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tv.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: ha.zP, children: b }) : b,
                x && (0, l.jsx)(hx, {}),
            ],
        });
    }
}
let hI = (0, ef.A)(hf),
    hE = s.memo(function (e) {
        var n, t, i;
        let r,
            { providedChannel: a } = e,
            [o, d] = s.useState(null),
            c = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, m.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, m.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            f = (0, ia.DZ)(),
            j = (0, ia.e4)(x),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            y = j?.parent_id,
            b = (0, m.bG)([ew.A], () => ew.A.getChannel(y), [y]),
            _ = (0, m.bG)([tq.A], () => tq.A.getGuild(j?.guild_id), [j]),
            { needSubscriptionToAccess: v } = (0, le.A)(j?.id ?? void 0),
            N = (0, m.bG)(
                [n7.A],
                () => {
                    let e = null != c ? n7.A.getParticipants(c) : [],
                        n = null != c ? n7.A.getActivityParticipants(c) : [];
                    return e.length - n.length > 0;
                },
                [c],
            ),
            T = (0, i9.A)(),
            S = (0, m.bG)([eU.Ay], () => (T?.channelId ?? eU.Ay.getVoiceChannelId()) === j?.id),
            R = (0, m.bG)([ej.Ay], () => (null != j ? ej.Ay.getSelfEmbeddedActivityForChannel(j.id) : null), [j]),
            M = (0, m.bG)([o6.A], () => o6.A.isConnected()),
            O = (0, eE.Ay)(M),
            L = M && !1 === O;
        s.useEffect(() => {
            S &&
                L &&
                null != R &&
                null != j &&
                I.A.selectParticipant(
                    j.id,
                    (0, n9.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [L, j, S, R]);
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            D = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            k = null != P && !(0, ev.A)(j?.id) && D === eQ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, m.cf)([lK.A], () =>
                null != j && j.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lK.A.getVoiceStatesForChannel(j.id)),
                          isUserInThisVoice: lK.A.isInChannel(j.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != j && j.isPrivate() && !k && N,
            H = j?.isGuildVocal() || F || (U && (G || !w)),
            B = (0, sZ.e)(j, "channel"),
            V = (0, m.bG)([tt.A], () => {
                let e = (0, nK.ny)(tt.A.getMainFrame());
                return e?.data.layoutMode === nK.y0.FOCUSED && e.intent === nK.sV.MAIN;
            }),
            { welcomeModalChannelId: Y } = (0, h.zy)(),
            W = (0, m.bG)([nu.A], () => null != j && nu.A.isLurking(j.guild_id), [j]),
            z = (0, m.bG)([o1.A], () => o1.A.hasSeen(j?.guild_id, W), [j, W]),
            X = (0, m.bG)(
                [n7.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eQ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eQ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? n7.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            q =
                ((n = _?.id),
                (r = (0, m.bG)([tq.A, sh, ee.default, $.Ay], () => {
                    let e = tq.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === sh.hasViewedPrompt(sm.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != r && (r || i5(sm.REAL_NAME_PROMPT, n));
                }, [r, n]),
                !0 === r),
            K =
                ((t = _?.id),
                (0, m.bG)([ew.A, tq.A, eU.Ay], () => {
                    let e = tq.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(Y);
                    return Y === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, o2.ke)(n.type);
                })),
            { section: J, channelSidebarState: Z } = (0, m.cf)(
                [nv.Ay],
                () => ({ section: nv.Ay.getSection(c, j?.isDM()), channelSidebarState: nv.Ay.getSidebarState(c) }),
                [c, j],
            ),
            en = _?.id,
            et = (0, m.bG)([nv.Ay], () => nv.Ay.getGuildSidebarState(en), [en]),
            el = (0, sp.lI)(),
            es = (0, ni.qz)() && j?.type === eo.rbe.GUILD_APP;
        ((i = j?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return n3.A.addRouteRewriter((e, n) => {
                        let { pathname: t, search: l, state: s } = e;
                        return "POP" === n || (0, ni.Dw)(l) || n6.exec(t)?.[1] !== i
                            ? null
                            : { path: (0, ni.gu)(t), state: s };
                    });
            }, [i, es]));
        let er = es && Z?.type === sQ.PE.VIEW_CHANNEL && Z.channelId === j.id,
            ea = (0, io.Ay)(j),
            ed = (0, io.Ay)(j, !0),
            ec = (0, m.bG)([n7.A], () => (null != j ? n7.A.getSelectedParticipant(j.id) : null)),
            eu = (0, nt.vL)(j),
            eh = (0, iu.Uf)(j),
            em = null != j && g === j.id,
            eA = null != j && j.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = i2.A.useConfig({ location: "Channel" }),
            ex = (0, i6.c)(),
            ef = (0, m.bG)(
                [o3.A, nN.A],
                () => {
                    let e = j?.guild_id ?? nN.A.getGuildId();
                    return null != e && o3.A.isUnavailable(e);
                },
                [j],
            ),
            eC = ep && (0, i3.A)() && null != j && !ef && !j.isGuildVocal();
        (s.useEffect(() => (E.A.setFriendsSidebarAvailable(eC), () => E.A.setFriendsSidebarAvailable(!1)), [eC]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, ev.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, ne.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, nn.A)(s, t), n?.());
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
                let e = (0, ns.JK)();
                if (e?.location?.state?.stageInviteKey === hr.J2) {
                    let { channelId: n } = (0, sA.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []));
        let ey = { channel: j, inCurrentVoiceChannel: em },
            eb = s.useRef(ey);
        (s.useEffect(() => {
            eb.current = ey;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eb.current;
                null != o && null != e && eA && e.id === o && !n && ((0, sJ.av)(e), d(null));
            }, [o, eA]));
        let eN = (0, eI.cI)(j),
            eT = null != j && j.isPrivate(),
            eS = (0, eE.Ay)(eT),
            eR = (0, eE.Ay)(j?.id);
        s.useEffect(() => {
            let e = eS && !eT,
                n = eS && eT && j?.id !== eR;
            (e || n) && (0, ir.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lQ.i.AUTO });
        }, [j?.id, eR, eT, eS]);
        let eM = (0, p.useHasAnyModalOpen)(),
            eO = (0, te.a)(j);
        return (0, l.jsx)(hI, {
            guildId: j?.guild_id,
            channelId: c,
            channel: j,
            channelName: ea,
            formattedChannelName: ed,
            parentChannel: b,
            voiceChannel: C,
            layout: X,
            needSubscriptionToAccess: v,
            isLurking: W,
            hasModalOpen: eM,
            section: J,
            channelSidebarState: er ? void 0 : Z,
            guildSidebarState: et,
            guild: _,
            showCall: !v && H,
            isStageUnifiedCall: B,
            showActivityPanel: k,
            showFramePanel: V,
            channelIsContentGated: eu,
            spoilerGatingChannelId: eh,
            isMobile: (0, m.bG)([Q.A], () => j?.type === eo.rbe.DM && Q.A.isMobileOnline(j.getRecipientId()), [j]),
            isUnavailable: ef,
            showRealNameModal: q,
            showWelcomeModal: !z && K,
            showFollowButton: (j?.type === eo.rbe.GUILD_ANNOUNCEMENT && _?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lK.A], () => ({ hasVideo: null != j && lK.A.hasVideo(j.id) }), [j]),
            inCall: em,
            selectedParticipant: ec,
            showChannelSummaries: eN,
            showHeaderGuildBreadcrumb: f || el,
            isAppChannelChatExpanded: es,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
            friendsSidebarExperimentEnabled: ep,
            canShowFriendsSidebar: eC,
            friendsSidebarAppBarToggleEnabled: eg,
            friendsSidebarCollapsed: ex,
            dmAppChannelApplicationId: eO,
        });
    });
