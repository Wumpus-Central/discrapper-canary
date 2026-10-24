(t.r(n), t.d(n, { default: () => hf }), t(321073));
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
    E = t(367513),
    I = t(604681),
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
            E = (0, m.bG)([K.A], () => K.A.getAnyStreamForUser(r)),
            I = (0, C.rm)(r),
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
                    applicationStream: E,
                    premiumSince: null == L ? null : new Date(L),
                    onClickPremiumGuildIcon: T,
                    itemProps: I,
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
        { navigator: f, listRef: E } =
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
        I = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        I)
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
                                ref: E,
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
    eE = t(432371),
    eI = t(475743),
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
    eq = t(138017),
    eK = t(715482),
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
            (0, eG.i5)(e);
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
            (0, l.jsx)(eP.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: A,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eZ.E8.NO_CHAT ? eq.j : eK.g,
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
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [E, I] = s.useState(eL.Ay.activityPanelHeight ?? n ?? null),
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
            let i = (0, eI.Ay)(e),
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
        })(x, E, n),
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
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: r.id }),
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
                                null != M
                                    ? (0, l.jsxs)("div", {
                                          className: e2.qr,
                                          children: [
                                              (0, l.jsx)(eY.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e3,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e2.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e2.qi,
                                                          children: [
                                                              (0, l.jsx)(e1, { channelId: M }),
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
                                                                            (await (0, eG.od)(r.id, d)),
                                                                            (0, eG.jp)());
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
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), I(e));
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
    ne = t(964167),
    nn = t(483510),
    nt = t(976860);
function ni(e) {
    let { channel: n } = e;
    return (0, l.jsx)(x.$, {
        onClick: function () {
            let e = n.getGuildId();
            (ei._.dispatch(eo.jej.SEARCH_RESULTS_CLOSE), (0, nt.pX)(eo.BVt.CHANNEL(e, n.id)), (0, nn.ci)(e, n.id));
        },
        variant: "secondary",
        size: "sm",
        text: z.intl.string(z.t.vLgj1J),
    });
}
var nl = t(991690),
    ns = t(70688),
    nr = t(995102),
    na = t(288104),
    no = t(857071),
    nd = t(371169),
    nc = t(260498),
    nu = t(95264),
    nh = t(914315),
    nm = t(248675);
function nA(e) {
    let { channel: n } = e,
        t = n.guild_id ?? null,
        i = (0, nh.A)(n, "ConjureAppChannelRemixButton"),
        r = (0, m.bG)([no.A], () => null != t && no.A.isLurking(t), [t]),
        a =
            (s.useEffect(() => {
                (0, nd.b8)();
            }, []),
            (0, m.bG)([nc.Ay], () => {
                let e = nc.Ay.getMaxProjects();
                return null != e && nc.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - nc.Ay.getOwnedProjects().length)
                    : null;
            }));
    return null == i || null == t || r || 0 === a
        ? null
        : (0, l.jsx)(x.$, {
              variant: "secondary",
              size: "sm",
              text: z.intl.string(nm.default.XWgAfc),
              onClick: () => (0, nu.A)(i, t),
          });
}
var np = t(766367),
    ng = t(246338),
    nx = t(545691),
    nf = t(64656),
    nE = t(672929),
    nI = t(58736),
    nj = t(534890);
function nC(e) {
    let { channelId: n } = e,
        t = (function (e) {
            let { hasUnread: n, mentionCount: t } = (0, m.cf)(
                [eQ.Ay],
                () => ({
                    hasUnread: null != e && eQ.Ay.hasUnread(e),
                    mentionCount: null != e ? eQ.Ay.getMentionCount(e) : 0,
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
    (0, eJ.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: r });
    let a = (0, nn.HP)(n),
        o = (0, m.bG)([ew.A], () => ew.A.getBasicChannel(n)?.guild_id, [n]);
    return (0, l.jsx)(nI.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nj.ChatIcon,
        iconSize: 20,
        onClick: () => {
            a
                ? (0, nn.m)(n)
                : ((0, nn.ci)(o, n),
                  setTimeout(() => ei._.dispatch(eo.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: n }), 0));
        },
        selected: a,
        badge: t,
    });
}
var ny = t(358047),
    nb = t(967198);
function n_(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([ny.Ay], () => ny.Ay.getSection(n)),
        i = (0, m.bG)([nb.A], () => nb.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nI.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                I.A.toggleMembersSection());
        },
        selected: s,
    });
}
var nv = t(187360),
    nN = t(621466),
    nT = t(453903),
    nS = t(477782),
    nR = t(12470),
    nM = t(811893),
    nO = t(663417),
    nL = t(729475),
    nP = t(265872),
    nD = t(980707),
    nk = t(885574),
    nw = t(365199),
    nU = t(146337),
    nG = t(130332),
    nF = t(625180),
    nH = t(156548),
    nB = t(646973),
    nV = t(402860),
    nY = t(475815),
    nW = t(615606),
    nz = t(165610);
function nX(e) {
    let { channel: n, isConjured: t, notificationItems: i } = e,
        [r, a] = s.useState(!1),
        o = s.useRef(null),
        d = (0, nU.A)(n, "app_channel_header"),
        c = (0, nW.q)(n)?.bot,
        u = s.useMemo(
            () => ({ type: nl.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        h = (0, nE.A)(n.application_id ?? null, u),
        m = (0, nz.x1)(h) && h.data.proxyTicketRefreshing,
        A = (0, nG.A)(n, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        p = null != A.edit,
        { canPopout: g, isPoppedOut: x, popOut: f, popIn: E } = (0, nB.A)(h),
        I = s.useCallback(() => {
            null == h || m || nF.A.refreshProxyTicket(h.id);
        }, [h, m]),
        j = z.intl.string(z.t["UKOtz+"]),
        C = (0, nz.x1)(h);
    if (!C && null == c && null == d && !p && null == i) return null;
    function y() {
        return (0, nz.x1)(h)
            ? (0, l.jsx)(nS.Dr, {
                  id: "close-app",
                  label: z.intl.string(z.t.VkMnR2),
                  action: () => (0, nx.A)(h.id),
                  icon: ns.DoorExitIcon,
                  leadingAccessory: { type: "icon", icon: ns.DoorExitIcon },
              })
            : null;
    }
    function b() {
        return C
            ? (0, l.jsx)(nS.Dr, {
                  id: "reload-app",
                  label: z.intl.string(z.t.kHie4V),
                  action: I,
                  icon: nO.RefreshIcon,
                  leadingAccessory: { type: "icon", icon: nO.RefreshIcon },
                  disabled: m,
              })
            : null;
    }
    function _() {
        let e = (0, nz.x1)(h) && !x ? (0, nH.fl)(h.id) : null;
        return null != e && (0, nY.Ub)(e)
            ? (0, l.jsx)(nS.Dr, {
                  id: "full-screen-app",
                  label: z.intl.string(z.t.OIDkcp),
                  icon: nL.T,
                  leadingAccessory: { type: "icon", icon: nL.T },
                  action: () => (0, nY.tl)(e),
              })
            : null;
    }
    return (0, l.jsx)(nP.Y, {
        targetElementRef: o,
        shouldShow: r,
        animation: nP.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, nN.vq)(document.activeElement, HTMLIFrameElement)) return nT.oU;
            a(!1);
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsxs)(nD.W, {
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
                                      ? (0, l.jsxs)(nS.rX, {
                                            children: [
                                                C
                                                    ? x
                                                        ? (0, l.jsx)(nS.Dr, {
                                                              id: "pop-in-app",
                                                              label: z.intl.string(z.t["NKV/MO"]),
                                                              icon: nR._,
                                                              leadingAccessory: { type: "icon", icon: nR._ },
                                                              action: E,
                                                          })
                                                        : g
                                                          ? (0, l.jsx)(nS.Dr, {
                                                                id: "pop-out-app",
                                                                label: z.intl.string(z.t["3Zypbv"]),
                                                                icon: nM.t,
                                                                leadingAccessory: { type: "icon", icon: nM.t },
                                                                action: f,
                                                            })
                                                          : null
                                                    : null,
                                                _(),
                                                A.showOverlay,
                                            ],
                                        })
                                      : null,
                                  C || p ? (0, l.jsxs)(nS.rX, { children: [A.edit, b(), y()] }) : null,
                              ],
                          })
                        : C
                          ? (0, l.jsxs)(nS.rX, { children: [_(), b(), y()] })
                          : null,
                    null != i ? (0, l.jsx)(nS.rX, { children: i }) : null,
                    null != c || null != d
                        ? (0, l.jsxs)(nS.rX, {
                              children: [
                                  null != c
                                      ? (0, l.jsx)(nS.Dr, {
                                            id: "app-info",
                                            label: z.intl.string(z.t.Sh2z9g),
                                            action: () =>
                                                (0, nV.openUserProfileModal)({
                                                    userId: c.id,
                                                    guildId: n.guild_id,
                                                    channelId: n.id,
                                                }),
                                            leadingAccessory: { type: "icon", icon: nk.CircleInformationIcon },
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
            return (0, l.jsx)(nI.Ay.Icon, {
                ...e,
                ref: o,
                onClick: () => a((e) => !e),
                tooltip: t ? null : j,
                icon: nw.MoreHorizontalIcon,
                "aria-label": j,
                selected: t,
            });
        },
    });
}
function nq(e) {
    let { frame: n } = e,
        { canPopout: t, isPoppedOut: i, popOut: s, popIn: r } = (0, nB.A)(n);
    return (0, nz.x1)(n)
        ? i
            ? (0, l.jsx)(nI.In, {
                  icon: nR._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: r,
              })
            : t
              ? (0, l.jsx)(nI.In, {
                    icon: nM.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: s,
                })
              : null
        : null;
}
function nK(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: nl.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nE.A)(n.application_id ?? null, t);
    return (0, l.jsx)(nq, { frame: i });
}
var n$ = t(906340);
function nQ(e) {
    let { frame: n } = e,
        t = (0, nf.A)(n?.id);
    if (!(0, nz.x1)(n) || !t) return null;
    let i = z.intl.string(z.t.VkMnR2);
    return (0, l.jsx)(nI.Ay.Icon, {
        icon: ns.DoorExitIcon,
        tooltip: i,
        "aria-label": i,
        onClick: () => (0, nx.A)(n.id),
    });
}
function nJ(e) {
    let { channel: n, isLurking: t } = e,
        i = s.useMemo(
            () => ({ type: nl.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        r = (0, nE.A)(n.application_id ?? null, i),
        a = (0, nr.A)(n),
        o = (0, na.A)(n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: n$.t,
                children: [
                    (0, l.jsx)(nA, { channel: n }),
                    (0, l.jsx)(np.A, { frame: r }),
                    (0, l.jsx)(nQ, { frame: r }),
                ],
            }),
            (0, l.jsx)("div", { className: n$.y, role: "separator", "aria-orientation": "vertical" }),
            (0, l.jsx)(n_, { channelId: n.id }),
            (0, l.jsx)(nC, { channelId: n.id }),
            (0, l.jsx)(nX, {
                channel: n,
                isConjured: !0,
                notificationItems: t ? null : (0, l.jsxs)(l.Fragment, { children: [a, o] }),
            }),
        ],
    });
}
function nZ(e) {
    let { channel: n, isLurking: t } = e;
    return (0, ng.w$)(n, "AppChannelHeaderActions")
        ? (0, l.jsx)(nJ, { channel: n, isLurking: t })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(nK, { channel: n }),
                  t ? null : (0, l.jsx)(nv.A, { channel: n }),
                  (0, l.jsx)(n_, { channelId: n.id }),
                  (0, l.jsx)(nC, { channelId: n.id }),
                  (0, l.jsx)(nX, { channel: n, isConjured: !1 }),
              ],
          });
}
var n0 = t(320989);
let n1 = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var n2 = t(568598),
    n3 = t(198052),
    n7 = t(164617),
    n6 = t(355622),
    n9 = t(689874),
    n5 = t(631828),
    n8 = t(627363),
    n4 = t(91242),
    te = t(793480);
function tn(e) {
    let { channel: n } = e,
        t = (0, m.bG)([n4.A], () => n4.A.getFramesForChannel(n.id).find((e) => (0, nz.x1)(e)), [n.id]),
        i = (0, n8.YY)(t?.applicationId).data,
        s = (0, te.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.conjureProjectId == null || !s) return null;
    let r = z.intl.string(nm.default["/TlGcK"]);
    return (0, l.jsx)(nI.Ay.Icon, {
        icon: ns.DoorExitIcon,
        tooltip: r,
        "aria-label": r,
        onClick: () => (0, nx.A)(t.id),
    });
}
var tt = t(828488),
    ti = t(939249),
    tl = t(408278),
    ts = t(624479),
    tr = t(858899),
    ta = t(661531),
    to = t(39623),
    td = t(952270),
    tc = t(381849),
    tu = t(549973),
    th = t(957565),
    tm = t(935208),
    tA = t(181041),
    tp = t(256331),
    tg = t(623562),
    tx = t(403862);
let tf = ["high", "medium", "low"],
    tE = s.memo(function (e) {
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
                              tf.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: tx.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: tx.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: tx.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tx.a7,
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
                            className: tx.a7,
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
                            className: tx.a7,
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
    tI = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = tm.default.extractTimestamp(n.startMessageId),
            s = tm.default.extractTimestamp(n.endMessageId),
            r = (0, tu.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, tc.WR)({ seconds: a, getFormatter: tc.i }),
            d = (0, m.bG)([tA.A], () => tA.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(ti.D, {
            className: tx.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: tx.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: tx.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(tl.K, {
                            icon: ts.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, th.C)(JSON.stringify(n, null, 2), () =>
                                        (0, tr.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: tx.FR,
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
                        className: tx.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: tx.JP,
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
                    className: tx.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: tx.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tx.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: tx.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: tx.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tx.a7,
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
                                    className: tx.a7,
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
                                    className: tx.a7,
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
                (0, l.jsx)(tE, { moderation: n.moderation ?? null }),
            ],
        });
    });
function tj(e) {
    let { channel: n } = e,
        t = (0, m.bG)([tA.A], () => tA.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([tA.A], () => tA.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([tp.A], () => tp.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, tg.xI)(n.id, e.id, { cacheType: "channel" });
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tx.zr,
        children: [
            (0, l.jsxs)("div", {
                className: tx.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tx.gn,
                        children: [
                            (0, l.jsx)(nj.ChatIcon, { color: ta.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: tx.y6,
                        children: (0, l.jsx)(tl.K, {
                            icon: r ? to.EyeIcon : td.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: tg.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tx.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(tI, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: tx.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var tC = t(268218),
    ty = t(726249),
    tb = t(334738),
    t_ = t(208882),
    tv = t(938764),
    tN = t(519480),
    tT = t(352123),
    tS = t(825244),
    tR = t(130696);
let tM = function (e) {
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
        className: tR.h2,
        children: [
            (0, l.jsx)("img", { className: tR.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: tR._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: tR.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(tS.E, {
                      className: tR.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(tS.E, {
                className: tR.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var tO = t(683438),
    tL = t(689175),
    tP = t(761508),
    tD = t(765671),
    tk = t(902119),
    tw = t(22231),
    tU = t(66834),
    tG = t(573435),
    tF = t(101555),
    tH = t(548118),
    tB = t(714991),
    tV = t(776231),
    tY = t(345942),
    tW = t(71393),
    tz = t(486020),
    tX = t(149790),
    tq = t(682557),
    tK = t(524058);
let t$ = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(ti.D, {
        onClick: n,
        className: tK.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tK.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tQ(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tT.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tK.fc, { [tK.QX]: i }),
        children: (0, l.jsxs)(tF.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tF.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tw.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tK.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tq.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tF.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nw.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tK.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tJ = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([tW.A], () => tW.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, tY.u)(n.guildId) : await tU.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tz.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tV.mZ)() }),
        c = tz.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tK.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tK.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tK.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tK.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tK.$f,
                            children: (0, l.jsx)(tG.Ay, {
                                mask: tG.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tK.SA,
                                    children: (0, l.jsx)(tH.Ay, {
                                        className: tK.rZ,
                                        iconSrc: c,
                                        guild: (0, tX.xi)(n),
                                        size: tH.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tK.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tK.DD,
                            children: [
                                (0, l.jsx)(tB.A, { className: tK.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tK.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tK.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tK.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tK.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tK.JX }),
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
                                        className: tK.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tK.Li }),
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
                            className: tK.PD,
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
                (0, l.jsx)(tQ, { entry: n }),
            ],
        })
    );
});
var tZ = t(946116),
    t0 = t(844086),
    t1 = t(770679);
function t2(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tD.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: t1.wx,
        children: [
            (0, l.jsx)("div", { className: t1.y2, children: (0, l.jsx)(tk.A, {}) }),
            (0, l.jsx)("div", {
                className: t1.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(t1.VW, { [t1.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: t1.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: t1.MT,
                            children: (0, l.jsx)(tO.I, {
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
let t3 = function (e) {
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
        className: t0.$$,
        children: (0, l.jsxs)(tL.Gt, {
            className: t0.XG,
            children: [
                (0, l.jsx)(t2, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tL.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(tP.V, {
                        className: t1.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                tP.V.Item,
                                { className: t1.YU, id: tZ.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                tZ.mU.ALL,
                            ),
                            (0, tZ.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    tP.V.Item,
                                    { className: t1.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: t0.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: t1.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: t0.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tJ, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(t$, { onClick: i }) : null,
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
var t7 = t(370876),
    t6 = t(28863),
    t9 = t(364522),
    t5 = t(792831),
    t8 = t(211862);
let t4 = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: t0.$$, children: (0, l.jsx)(g.y, { className: t0.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(t6.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: t8.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: t8.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: t0.vY, children: d.map((e) => (0, l.jsx)(tJ, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: t0.$$,
        children: (0, l.jsxs)(t9.Ar, {
            className: t0.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: t8.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t8.Dr,
                            children: [
                                (0, l.jsx)(ti.D, {
                                    onClick: r,
                                    className: t8.UE,
                                    children: (0, l.jsx)(t5.A, { direction: t5.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: t8.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tO.I, {
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
var ie = t(650583);
let it = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([tN.A], () => {
            let e = tN.A.getCurrentCategoryId(n.id),
                t = tN.A.getDirectoryEntries(n.id, e === tZ.mU.ALL ? null : e),
                i = tN.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: tN.A.getDirectoryAllEntriesCount(n.id),
                isLoading: tN.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                (0, tb.ack)(
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
                          if (n !== tZ.mU.ALL) return [{ entries: (0, t7._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, t7.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, t7.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([tv.A], () => {
            let { mostRecentQuery: e, fetching: t } = tv.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: tv.A.getSearchResults(n.id, e) };
        }),
        [f, E] = s.useState(h),
        I = "" !== h,
        j = { mostRecentQuery: h },
        C = s.useRef(j);
    (s.useEffect(() => {
        C.current = j;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            (t_.Yc(n.id), t_.YS(n.id), E(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, tT.b)(n),
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
                                      currentCategoryId: r === tZ.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === ie.dh.ENTER &&
            (t_.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (E(""), t_.BA(n.id));
    }
    return I
        ? (0, l.jsx)(t4, {
              searchQuery: f,
              setSearchQuery: E,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: v,
              handleCreateOrAddGuild: b,
              searchResults: x,
              searchFetching: A,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: t0.$$, children: (0, l.jsx)(g.y, { className: t0.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: t0.$$, children: (0, l.jsx)(tM, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(t3, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      t_.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var ii = t(826673),
    il = t(93055),
    is = t(47167),
    ir = t(688438),
    ia = t(353428),
    io = t(288254),
    id = t(873614),
    ic = t(649852),
    iu = t.n(ic),
    ih = t(789645),
    im = t(163126),
    iA = t(182061),
    ip = t(886393),
    ig = t(307623),
    ix = t(660273),
    iE = t(804006),
    iI = t(707792),
    ij = t(41402),
    iC = t(271456),
    iy = t(200273),
    ib = t(565846),
    i_ = t(57907),
    iv = t(375500),
    iN = t(707653),
    iT = t(50268),
    iS = t(378570),
    iR = t(162199),
    iM = t(713608),
    iO = t(473503),
    iL = t(901472),
    iP = t(267102),
    iD = t(474397),
    ik = t(486974),
    iw = t(39470);
function iU(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, iP.aL)(),
        r = z.intl.string(iw.default["Beo/7v"]),
        { firstMessage: a } = (0, iO.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nI.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, iS.iN)(n.id),
                      (0, iD.A)(),
                      (0, iL.z)(n.guild_id, d, n.id, {
                          modViewPanel: ik.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: iM.q,
              "aria-label": r,
          })
        : null;
}
var iG = t(780338),
    iF = t(782603),
    iH = t(607508),
    iB = t(914703),
    iV = t(37411);
function iY(e) {
    let { channel: n } = e,
        t = (0, iH.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([no.A], () => null != n.guild_id && no.A.isLurking(n.guild_id));
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
    return (0, l.jsx)(nP.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nP.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(iB.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nI.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === iV.CP.NO_MESSAGES ? iG.BellSlashIcon : iF.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var iW = t(747926);
function iz(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nP.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nP.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iX, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nI.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nw.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function iX(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, ix.A)(n, "Sidebar Overflow"),
        r = (0, iE.A)(n, "Sidebar Overflow"),
        a = (0, ij.A)(n),
        o = (0, i_.A)(n),
        d = (0, iv.A)(n),
        c = (0, iA.A)(n),
        u = (0, iI.A)(n),
        h = (0, ib.A)(n.id),
        m = (0, iy.A)(n),
        A = (0, ig.A)(n),
        p = (0, ip.A)(n),
        g = (0, iT.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, iN.A)(n),
        f = (0, iC.A)(n),
        E = (0, im.$)(1e3);
    function I() {
        (0, iS.iN)(n.id);
    }
    function j(e) {
        let t = iu()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            E.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(nD.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nS.rX, {
                children: [s, (0, l.jsx)(nS.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: I })],
            }),
            (0, l.jsxs)(nS.rX, { children: [o, d] }),
            (0, l.jsxs)(nS.rX, { children: [m, a, h, f] }),
            (0, l.jsxs)(nS.rX, {
                children: [
                    (0, l.jsx)(nS.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nM.t,
                        trailingIndicator: { type: "icon", icon: nM.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I());
                        },
                    }),
                    (0, l.jsx)(nS.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nM.t,
                        trailingIndicator: { type: "icon", icon: nM.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nS.rX, { children: [x, c, u, A] }),
            (0, l.jsx)(nS.rX, { children: r }),
            (0, l.jsxs)(nS.rX, { children: [p, g] }),
        ],
    });
}
function iq(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nI.Ay.Icon, {
            icon: ih.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, iW.xu)((0, iR.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iY, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(iU, { channel: n }) : null,
                  (0, l.jsx)(iz, { channel: n }),
                  i,
              ],
          });
}
var iK = t(31717),
    i$ = t(853742),
    iQ = t(85190);
function iJ(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([tW.A], () => tW.A.getGuild(i?.getGuildId())),
        o = (0, is.Ay)(i),
        d = (0, io.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, i$.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(id.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iq, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iK.C.ChannelMessage }),
            (0, l.jsx)(nI.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, ia.zF)({
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
                        null != i && (0, nt.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iQ.T,
                children: (0, l.jsx)(ir.A, { channel: i, guild: a, chatInputType: n6.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iZ = t(925166),
    i0 = t(76268),
    i1 = t(605117),
    i2 = t(857253),
    i3 = t(872363),
    i7 = t(73153);
let i6 = function (e, n) {
    i7.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var i9 = t(561446),
    i5 = t(300233),
    i8 = t(499211),
    i4 = t(468689),
    le = t(529942),
    ln = t(739455),
    lt = t(709017);
function li(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: lt.t7,
        children: (0, l.jsxs)("div", {
            className: lt.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: lt.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: lt.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: lt.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, le.rf)(n),
                                        i4.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, ln.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ll = t(599941),
    ls = t(29385),
    lr = t(950344),
    la = t(217530),
    lo = t(162093),
    ld = t(325348);
function lc(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, ls.e)({ guildId: n, channelId: t }),
        r = (0, ll.uk)(n),
        a = (0, ll.Tq)(n),
        o = (0, m.bG)([tW.A], () => tW.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, is.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, lr.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: ld.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: ld.__invalid_spinner }),
          })
        : (0, l.jsxs)(t9.Ar, {
              className: ld.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: ld.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: ld.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(la.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  lo.A,
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
var lu = t(284252);
function lh(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([ny.Ay], () => ny.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([tA.A], () => (tA.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(nI.In, {
        onClick: I.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nj.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? lu.q : void 0,
        selected: t,
        badge: r,
    });
}
var lm = t(287074),
    lA = t(306788),
    lp = t(863922),
    lg = t(822074),
    lx = t(521732);
function lf(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, m.bG)([lg.A], () => lg.A.shouldShowTopicsBar());
    return (0, l.jsx)(nI.Ay.Icon, {
        icon: lA.K,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: lx.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, lp.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var lE = t(947094),
    lI = t(919577),
    lj = t(207777),
    lC = t(422844),
    ly = t(435470),
    lb = t(892110),
    l_ = t(45494);
function lv(e) {
    let { channel: n } = e,
        t = (0, ly.S4)(n),
        i = (0, m.bG)([lE.A], () => lE.A.hasHidden(n.id)),
        s = (0, lb.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, lC.R)(n.id),
        d = (0, m.bG)(
            [lj.A, l_.A],
            () => !!(lj.A.getThreadIds(n.id, r, a, o).length > 0) || !!(l_.A.getThreads(n.id, r, a, o).length > 0),
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
    return (0, l.jsx)(nI.In, {
        tooltip: u,
        icon: nk.CircleInformationIcon,
        onClick: function () {
            return lI.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lN = t(290136),
    lT = t(975571),
    lS = t(490094);
function lR() {
    let e = z.intl.string(lS.default.pdipXI);
    return (0, l.jsx)(nI.In, {
        tooltip: e,
        icon: lN.CircleQuestionIcon,
        onClick: function () {
            window.open(lT.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lM = t(742589),
    lO = t(43105),
    lL = t(428689),
    lP = t(978940),
    lD = t(387755),
    lk = t(730852),
    lw = t(641703),
    lU = t(379848),
    lG = t(753727),
    lF = t(625075),
    lH = t(222692),
    lB = t(442353),
    lV = t(470710),
    lY = t(186111),
    lW = t(360906),
    lz = t(994500),
    lX = t(977997),
    lq = t(818023),
    lK = t(49999),
    l$ = t(731854);
class lQ extends s.PureComponent {
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
                : lW.Ay.supports(l$.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lF.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nI.Ay.Icon, { icon: lL.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(nI.Ay.Icon, {
            ref: this.iconRef,
            icon: lP._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lU.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lO.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lq.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lK.i.USER_DISMISS),
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
            return lD.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lB.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lk.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, ii.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lK.i.AUTO }),
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
        (0, lB.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lH.A)();
    };
}
function lJ(e) {
    let { channel: n } = e,
        t = (0, lG.A)(),
        i = (0, m.bG)([n3.A], () => n3.A.getMode(n.id)),
        s = (0, m.bG)([lX.A], () => lX.A.isInChannel(n.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lV.A], () => ({
            callActive: lV.A.isCallActive(n.id),
            callUnavailable: lV.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lz.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lz.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lz.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, iP.Us)(),
        g = [],
        x = (0, lw.A)(n.id),
        f = (0, m.bG)([lY.A], () => lY.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lQ, {
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
var lZ = t(452015),
    l0 = t(765178),
    l1 = t(231483),
    l2 = t(544231),
    l3 = t(338510),
    l7 = t(151119),
    l6 = t(278941),
    l9 = t(665909),
    l5 = t(327337);
let l8 = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, l3.u)(n.id),
        r = (0, l7.S)(n.id),
        a = (0, l6.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lY.A], () => lY.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (l0.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, l2.xi)(n.id, [a.id]);
            }, 5e3),
            (0, l9.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: l9.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (l0.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, l2.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, l9.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: l9.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, l2.xi)(n.id, [a.id]),
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
                    { modalKey: l5.V },
                ),
                (0, l9._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: l9.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nI.Ay.Icon, {
                  icon: l1.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var l4 = t(262763),
    se = t(406704),
    sn = t(576705);
let st = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lG.A)(),
        i = (0, m.bG)([lX.A], () => lX.A.isInChannel(n.id)),
        r = (0, m.bG)([lX.A], () => !u().isEmpty(lX.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([sn.A], () => sn.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, i8.A)(n.id),
        d = (0, se.Id)(n),
        { enabled: c } = se.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            l4.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(nI.Ay.Icon, {
              icon: lP._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var si = t(812991),
    sl = t(47675),
    ss = t(999291);
function sr() {
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
function sa(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([ny.Ay], () => ny.Ay.getSection(n.id, n?.isDM())),
        s = (0, ss.Ay)(n.getRecipientId()),
        r = sr(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nI.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: si.n,
        onClick: function () {
            ((0, sl.am)({ displayProfile: s, isProfileOpen: !a }), I.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let so = {};
class sd extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            so[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = so[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return so;
    }
}
let sc = new sd(i7.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = so[t];
        return null == i ? ((so[t] = new Set()), so[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != so[n.id] && !n.unavailable && (delete so[n.id], !0);
    },
});
var su = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    sh = t(376943),
    sm = t(394953),
    sA = t(683063),
    sp = t(403581),
    sg = t(241541),
    sx = t(709066),
    sf = t(87664),
    sE = t(247676),
    sI = t(695526),
    sj = t(927813),
    sC = t(427358),
    sy = t(945810);
let sb = (0, sy.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var s_ = t(280450),
    sv = t(851746),
    sN = t(103411);
function sT() {
    let e = (0, sN.m)(),
        n = (0, m.bG)([sv.A], () => sv.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, m.bG)([s_.default], () => s_.default.getId()),
    };
}
var sS = t(315629),
    sR = t(744413),
    sM = t(303682),
    sO = t(224370),
    sL = t(544879);
function sP(e) {
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
    return (0, l.jsxs)(sS.h, {
        color: "nitro-pink",
        className: a()(sO.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: sO.lj,
                children: [
                    (0, l.jsx)("img", { className: sO.Dp, src: sL.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sO.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: sO.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: sO.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(ti.D, {
                        className: sO.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            t(lK.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(ih.P, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sO.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (t(lK.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, sR.jM)({
                                  startingScreen: sM.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sD = t(349420);
let sk = { cooldownDurationMs: 60 * sj.A.Millis.DAY };
function sw(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: sb.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = sT(),
                l = (0, m.bG)(
                    [lz.A, ee.default, sC.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i) return !1;
                            let n = ee.default.getUser(e);
                            if (null == n || lz.A.isBlockedOrIgnored(e)) return !1;
                            let t = sC.A.getUserAffinity(e);
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
    return (0, l.jsx)(lU.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sk,
        groupName: lK.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sP, {
                      className: sD.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sU = t(403362);
t(696101);
let sG = [],
    sF = er.Ay.getEnableHardwareAcceleration();
function sH(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([lz.A], () => lz.A.getNickname(n.id)),
        h = (0, sf.A)(n.id),
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
        [f, E] = s.useState(!1);
    return (0, l.jsx)(q.A, {
        targetElementRef: A,
        user: n,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => E(!1),
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
                    shouldAnimateStatus: sF,
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
                        e.shiftKey ? g?.() : E((e) => !e);
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
function sB(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sV(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(L.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lz.A, ee.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(sU.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lz.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sG,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sG });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sB,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, sE.A)({ useNitroCapExperiment: !0 }),
        h = (0, sI.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(t9.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sw, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(sA.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(sp.t, {
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
                                o && (0, l.jsx)(sx.A, { type: sx.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sH,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lZ.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: sg.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lZ.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sY = t(322338),
    sW = t(898029),
    sz = t(36537);
function sX() {
    return (0, l.jsx)("div", {
        className: sz.zt,
        children: (0, l.jsx)("header", {
            className: sW.wL,
            children: (0, l.jsxs)("div", {
                className: sW.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sW.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sW.u1,
                            itemClassName: sW.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sq = t(138298),
    sK = t(940382),
    s$ = t(747376),
    sQ = t(718734),
    sJ = t(163328),
    sZ = t(425557),
    s0 = t(270003),
    s1 = t(150934),
    s2 = t(452027),
    s3 = t(95477),
    s7 = t(281595),
    s6 = t(465532),
    s9 = t(579872),
    s5 = t(119031),
    s8 = t(408018),
    s4 = t(845207),
    re = t(822610),
    rn = t(915089),
    rt = t(314307),
    ri = t(636922),
    rl = t(931664),
    rs = t(631576),
    rr = t(885386),
    ra = t(232835),
    ro = t(522602),
    rd = t(806150),
    rc = t(518960),
    ru = t(753738);
function rh(e, n) {
    return { type: e, message: n ?? null };
}
function rm(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var rA = t(659617),
    rp = t(474078),
    rg = t(636537),
    rx = t(152367),
    rf = t(147087);
async function rE(e) {
    try {
        let n = await rg.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, rg.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var rI = t(55294),
    rj = t(143161),
    rC = t(909833);
let ry = n6.oU.THREAD_CREATION;
function rb(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: r } = (0, P.Ay)(L.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: rj.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iK.C.FirstThreadMessage }),
                          (0, l.jsx)(r_, { parentChannelId: n }),
                          (0, l.jsx)(rv, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function r_(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iK.A.getThreadSettings(n),
                t = iK.A.getDraft(n, iK.C.FirstThreadMessage).trim(),
                i = ro.A.getUploads(n, iK.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? s9.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, iW.bA)(n);
                      },
                  })
                : (0, iW.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nI.Ay, {
        toolbar: (0, l.jsx)(nI.Ay.Icon, { icon: ih.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nI.Ay.Icon, { icon: sJ.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nI.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function rv(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
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
            let t = (0, m.bG)([iK.A], () => iK.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), s6.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, s8.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iK.A.getDraft(e.id, iK.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, s8.ur)(l)), n(iK.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iK.A.addChangeListener(t),
                        () => {
                            iK.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, rA.EN)(t),
        {
            isGeneratingAI: x,
            enableAIFeatures: f,
            getThreadNameInputAccessory: E,
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
                h = (0, rf.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = ra.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await rE(e);
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
                                icon: rx.D,
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
                                  children: (0, l.jsx)(tl.K, {
                                      icon: rx.D,
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
            nameError: I,
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
                p = (0, rI.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: iW.GS,
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
                                (l = rl.A.getStickerPreview(n.id, ry.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = ro.A.getUploads(n.id, iK.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? rh(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? rh(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, rd.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: ry,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), rh(1, (0, ru.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(rh(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, rs.x5)(n.id, ry.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, rA.Iy)(c, g) ? sZ.t : sJ.y;
    return (0, l.jsx)("div", {
        className: rj.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(rj.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: rj.Zd,
                children: [
                    (0, l.jsx)(t9.Ip, {
                        className: rj.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: rj.bv,
                            children: [
                                (0, l.jsxs)(rt.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(rC.P0, rj.P0),
                                            children: (0, l.jsx)(b, { className: rC.Kk }),
                                        }),
                                        (0, l.jsxs)(s0.n, {
                                            children: [
                                                (0, l.jsx)(rT, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: I,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: E,
                                                }),
                                                (0, l.jsx)(rN, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rR, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: rj.Eh,
                        children: [
                            (0, l.jsx)(rS, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(s5.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: rj.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rN(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, rA.Iy)(t, s),
        a = (0, l.jsx)(s1.S, {
            disabled: s === rA.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === rA.jk.Disabled
        ? null
        : (0, l.jsx)(s2.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rT(e) {
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
        h = rm(r, { content: u }),
        m = (0, rA.l1)(n, t),
        A = null != t && !d,
        p = (0, rn.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(s3.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, rp.A)(e, !1) }), "" !== e ? M.A.startTyping(n.id) : M.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, rp.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rS(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (s6.A.saveDraft(n.id, t, iK.C.FirstThreadMessage),
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
    ((0, eJ.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, eJ.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: A }));
    let x = (0, m.bG)([sn.A], () => sn.A.can(eo.xBc.ATTACH_FILES, n)),
        f = rm(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(re.A, { channelId: n.id, type: ry, canAttachFiles: x }),
            (0, l.jsx)("div", { className: rj.xN, children: (0, l.jsx)(s7.U, { error: f }) }),
            (0, l.jsx)(s4.Ay, {
                type: ry,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(rj.gM, rj.Yy),
                innerClassName: a()(rj.SL, { [rj.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: rc.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function rR(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([ra.A], () => (null == t ? null : ra.A.getMessage(n.id, t))),
        s = rr.hH.useSetting();
    return null != i
        ? (0, l.jsx)(ri.A, {
              className: rj.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rM = t(494208),
    rO = t(40389),
    rL = t(148494),
    rP = t(56562);
function rD(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nP.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nP.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(rk, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nI.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nw.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function rk(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, iA.A)(n),
        r = (0, iI.A)(n),
        a = (0, ib.A)(n.id),
        o = (0, iy.A)(n),
        d = (0, iT.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, ip.A)(n),
        h = (0, ig.A)(n),
        A = (0, ix.A)(n, "Toolbar Overflow"),
        p = (0, iE.A)(n, "Toolbar Overflow"),
        g = (0, ij.A)(n),
        x = (0, rO.A)(n),
        f = (0, iN.A)(n),
        E = (0, iC.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(nS.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rL.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rP.vx.INSTANT });
                  },
              })
            : null,
        j = rr.SY.useSetting(),
        C = (0, m.bG)([lX.A], () => !u().isEmpty(lX.A.getVoiceStatesForChannel(n.id))),
        y = (0, m.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nD.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nS.rX, { children: [A, x] }),
            (0, l.jsxs)(nS.rX, {
                children: [
                    I,
                    o,
                    g,
                    a,
                    !j || C || y
                        ? null
                        : (0, l.jsx)(nS.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, iW.JA)(n);
                              },
                          }),
                    E,
                ],
            }),
            (0, l.jsxs)(nS.rX, { children: [f, s, r, h] }),
            (0, l.jsx)(nS.rX, { children: p }),
            (0, l.jsxs)(nS.rX, { children: [c, d] }),
        ],
    });
}
var rw = t(332456),
    rU = t(806411),
    rG = t(973854),
    rF = t(62502);
function rH(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([tW.A], () => tW.A.getGuild(d?.getGuildId())),
        h = (0, is.Ay)(d),
        A = (0, io.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lX.A], () => null != n && !u().isEmpty(lX.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (i7.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, iS.N9)(n, { source: iV.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rw.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rU.q)(d.id), channel_view: o }),
                (0, rG.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(id.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(iq, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iK.C.ChannelMessage }),
            (0, l.jsx)(nI.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, ia.zF)({
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
                        null != d && (0, iS.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rF.T,
                children: (0, l.jsx)(ir.A, { channel: d, guild: c, chatInputType: n6.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rB = t(210714),
    rV = t(707554),
    rY = t(140735),
    rW = t(590180),
    rz = t(372320),
    rX = t(562153);
let rq = (0, sy.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rK(e) {
    return rq.useConfig({ location: e }).enabled;
}
var r$ = t(215530),
    rQ = t(549831),
    rJ = t(736653),
    rZ = t(311016),
    r0 = t(480335),
    r1 = t(713517),
    r2 = t(397562),
    r3 = t(183555),
    r7 = t(718019),
    r6 = t(977059),
    r9 = t(915614),
    r5 = t(308244),
    r8 = t(743987),
    r4 = t(900179),
    ae = t(946356),
    an = t(465829),
    at = t(35241),
    ai = t(587168),
    al = t(442228),
    as = t(744808);
let ar = (0, sy.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var aa = t(827428);
function ao(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function ad(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = ar.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, sl.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: aa.lS,
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
              className: aa.qr,
              children: (0, l.jsx)(ti.D, {
                  onClick: o,
                  className: aa.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: aa.xQ, children: [(0, l.jsx)(as.A, { frame: i, filterLayer: ao }), d] })
        : d;
}
var ac = t(518477),
    au = t(996988),
    ah = t(207634),
    am = t(561419),
    aA = t(396095);
function ap(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rZ.A)(n.id),
        o = (0, ss.Ay)(n.id),
        d = (0, rJ.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, r3.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, r2.A)(u, o, ac.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, r1.A)(m);
    function g() {
        (0, nV.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(r3.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(ae.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: au.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(am.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(t9.d_, {
                        className: i ? am.BE : void 0,
                        children: [
                            (0, l.jsx)(ai.A, { children: (0, l.jsx)(at.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: am.wx,
                                children: [
                                    (0, l.jsx)(r9.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: au.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(r7.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: ah.T[au.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: aA.rf,
                                children: [
                                    (0, l.jsx)(an.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rX.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(r6.A, {
                                            displayProfile: o,
                                            themeType: au.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(al.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(r4.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(r8.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(ae.A.Overlay, {
                                              className: aA.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(r4.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(r5.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(r4.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(r8.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(ad, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(r0.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var ag = t(331322),
    ax = t(249790),
    af = t(254828),
    aE = t(783123),
    aI = t(966430);
function aj(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, ss.Ay)(n.id),
        o = (0, rJ.Ay)(),
        d = (0, m.bG)([lz.A], () => lz.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, r3.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, r2.A)(c, a, ac.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(r3.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(ae.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: au.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(t9.d_, {
                    children: (0, l.jsxs)("div", {
                        className: aI.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: aI.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: aI.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: aI.N1,
                                        children: [
                                            (0, l.jsx)(ax.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rX.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ag.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(aE.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, sl.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(af.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, sl.Wn)({
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
var aC = t(941143),
    ay = t(717421),
    ab = t(31956),
    a_ = t(673843),
    av = t(594832),
    aN = t(321191),
    aT = t(679492),
    aS = t(439053),
    aR = t(312381),
    aM = t(657538),
    aO = t(984545),
    aL = t(193738),
    aP = t(413737),
    aD = t(394816),
    ak = t(695366),
    aw = t(922590),
    aU = t(821269),
    aG = t(131607),
    aF = t(326084),
    aH = t(834708),
    aB = t(154486);
let aV = (0, sy.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var aY = t(158390),
    aW = t(906573);
let az = new aY.A(30 * sj.A.Millis.SECOND, 5 * sj.A.Millis.MINUTE, !0),
    aX = 0;
async function aq() {
    if (aW.A.shouldFetch() && !(Date.now() < aX)) {
        i7.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
        try {
            let e = await rg.Bo.get({
                url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            (az.succeed(),
                (aX = 0),
                i7.h.dispatch({
                    type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                    version: String(e.body?.version ?? "0"),
                    targetIds: Array.isArray(e.body?.target_ids) ? e.body.target_ids.map((e) => String(e)) : [],
                }));
        } catch {
            ((aX = Date.now() + az.fail()),
                i7.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
        }
    }
}
var aK = t(504492);
function a$(e) {
    let { targetUserId: n } = e,
        { isInTreatment: t } = {
            isInTreatment: aV.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n) ?? null, [n]),
        r = (0, aH.d)(i),
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
            } = (0, m.cf)([aW.A], () => {
                let n = Number(aW.A.getVersion());
                return {
                    isDismissed: null != e && aW.A.isDismissedFor(e),
                    hasFetched: aW.A.hasFetched(),
                    version: Number.isFinite(n) ? n : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e && aq();
                }, [e]),
                {
                    isDismissed: n,
                    hasFetched: t,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (aW.A.isDismissedFor(e) ||
                                (i7.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                rg.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? n : null);
    return a && d && !o && null != i ? (0, l.jsx)(aQ, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aQ(e) {
    let { targetUser: n, version: i, onDismiss: r } = e,
        a = (0, aB.p)(n.id),
        [o, d] = (0, aG.RF)(a ? A.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lK.m.SIDEBAR, !0),
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
                                (0, aF.xm)([n.id]),
                            ]),
                            s = i.get(n.id) ?? aF.o.FAIL;
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
    return (0, l.jsx)(sP, {
        className: aK.K,
        analyticsLocation: L.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var aJ = t(93246),
    aZ = t(351906),
    a0 = t(383199),
    a1 = t(559506),
    a2 = t(361311),
    a3 = t(931481),
    a7 = t(791556),
    a6 = t(501193),
    a9 = t(383448),
    a5 = t(646986),
    a8 = t(243166),
    a4 = t(62010),
    oe = t(123292),
    on = t(840411);
let ot = (0, sy.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var oi = t(666810),
    ol = t(394300),
    os = t(575593),
    or = t(498032),
    oa = t(44120),
    oo = t(75678),
    od = t(317560),
    oc = t(99161),
    ou = t(661492),
    oh = t(146423),
    om = t(662349),
    oA = t(479026),
    op = t(636374),
    og = t(699976),
    ox = t(202541),
    of = t(733484),
    oE = t(880465);
function oI(e) {
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
        { trackUserProfileWishlistAction: g } = (0, r3.NJ)(),
        x = rK("DMSidePanelWishlistItemCard") ? og.y.SIZE_78 : og.y.SIZE_90,
        f = og.Z[x],
        E = s.useCallback(() => {
            (g({
                action: ac.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        I = s.useCallback(() => {
            (g({
                action: ac.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
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
        } = (0, op.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: E, onPurchaseClick: I }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: of.kL,
        children: (0, l.jsxs)(oh.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(of.Nr, o),
            skuPreviewStyle: a()(of.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = b ? (0, ou.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, ou.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(or.N, { className: of.Pf }),
                y &&
                    (0, l.jsx)(om.A, {
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
function oj(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, oc.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: ox.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, od.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: ox.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(oI, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function oC(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, oa.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: ox.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, oA.e)({ sku: n, giftRecipient: t, giftingOrigin: ox.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(of.ML, {
                    [of.M]: n?.tenantMetadata?.collectibles?.type === os.R.AVATAR_DECORATION,
                    [of.Hm]: n?.tenantMetadata?.collectibles?.type === os.R.PROFILE_EFFECT,
                    [of.hH]: n?.tenantMetadata?.collectibles?.type === os.R.PROFILE_FRAME,
                    [of.qF]: n?.tenantMetadata?.collectibles?.type === os.R.NAMEPLATE,
                    [of.l2]: n?.tenantMetadata?.collectibles?.type === os.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(oI, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function oy(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, oo.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: ox.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === av.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(oI, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(oE.MO, { [of.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(of.fi, { [of.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(of.p7, { [of.SW]: h.length >= 10, [of.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function ob(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(oj, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(oC, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(oy, { sku: n, ...t });
        default:
            return null;
    }
}
var o_ = t(927578),
    ov = t(249203),
    oN = t(919769),
    oT = t(695904),
    oS = t(116331),
    oR = t(713348),
    oM = t(535089),
    oO = t(815637);
function oL(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, r3.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, oS.A)(t),
        g = (0, m.bG)([ov.A], () => ov.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: ac.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => n ?? [], [n]),
        E = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        I = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: av.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => o_.Ay.isPremiumSku(e.skuId));
                if (!o_.Ay.isPremiumAtLeast(t.premiumType, ox.PremiumTypes.TIER_2) && !n) {
                    let n = ol.A.fromSKU((0, on.rI)());
                    null != n && e.push({ item: n, source: av.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, t.premiumType]),
        j = (0, s.useMemo)(
            () =>
                new Set(
                    I.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [I],
        ),
        C = (0, oM.A)({ wishlistId: r ?? null, onAction: E, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                I.map((e, n) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              ob,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, oN.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sU.Vq),
            [o, x, t, I, r, h, g],
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
              children: (0, l.jsxs)(ae.A.Overlay, {
                  ref: C,
                  className: oO.kL,
                  children: [
                      p && (0, l.jsx)(oT.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: oO.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: oO.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(a4.E, {
                                              type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: A }) },
                                              variant: "primary",
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(oe.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rV.F, { children: (0, l.jsx)("div", { className: oO.vY, children: y }) }),
                  ],
              }),
          });
}
function oP(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = ot.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, oR.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(oi.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(oL, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
    });
}
function oD(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lz.A], () => ({
            relationshipType: lz.A.getRelationshipType(n.id),
            originApplicationId: lz.A.getOriginApplicationId(n.id),
        })),
        h = (0, aw.fi)(n.id),
        A = (0, aU.q)({ userId: n.id }),
        p = (0, m.bG)([aZ.A], () => aZ.A.hidePersonalInformation),
        g = (0, m.bG)([aN.A], () => aN.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([aN.A], () => ({ defaultWishlistId: aN.A.getFirstWishlistId(n.id) })),
        { wishlist: E, isFetching: I } = (0, av.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, a_.A)(E);
    let j = s.useMemo(() => E?.items.filter((e) => !e.isOwned) ?? null, [E]);
    return (0, l.jsxs)("div", {
        className: aA.rf,
        children: [
            (0, l.jsx)(a1.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: aA.pq,
                children: [
                    (0, l.jsx)(an.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rX.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(a8.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(r6.A, {
                            displayProfile: i,
                            themeType: au.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(a7.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(ae.A.Overlay, {
                    children: (0, l.jsx)(a3.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    ae.A.Overlay,
                    {
                        children: (0, l.jsx)(a3.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(a9.A, { user: n }),
            i?.private &&
                (0, l.jsx)(ae.A.Overlay, { children: (0, l.jsx)(a6.A, { username: rX.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(ae.A.Overlay, {
                    className: aA.Lw,
                    children: (0, l.jsx)(r4.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: ak.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aJ.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(al.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(r4.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(r8.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: aA.kR,
                children: [
                    o && x && (0, l.jsx)(aM.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(a5.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(a0.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(r4.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(a2.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(ae.A.Overlay, {
                              className: aA.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(r4.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(r5.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(a0.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(r4.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(a2.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(r4.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(r8.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(oP, {
                            profileOwner: n,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: I,
                            onClick: () => {
                                d?.({ tabSection: ac.RP.WISHLIST });
                            },
                            canSeeWishlist: null != E,
                        }),
                    r.isDM() && (0, l.jsx)(a$, { targetUserId: n.id }),
                ],
            }),
        ],
    });
}
var ok = t(114212),
    ow = t(913453),
    oU = t(229187),
    oG = t(21241),
    oF = t(503062),
    oH = t(51943),
    oB = t(847374),
    oV = t(320448),
    oY = t(723200);
function oW(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, r3.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? oB.a : oV._;
    return (0, l.jsxs)("section", {
        className: oY.uW,
        children: [
            (0, l.jsxs)(ti.D, {
                className: a()(oY.wx, oY.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(oY.p_, r), children: i }),
        ],
    });
}
var oz = t(341278);
function oX(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, r3.NJ)(),
        r = (0, im.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, ow.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(ae.A.Overlay, {
              className: oz.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oW, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oz.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  oH.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, tY.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oG.A, { className: oz.yF }),
                  c &&
                      (0, l.jsx)(oW, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oz.p_,
                          onExpand: () => (0, oU.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oz.nC,
                                                children: [
                                                    (0, l.jsx)(ok.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(ok.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            oF.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, nV.openUserProfileModal)({
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
function oq(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, ss.Ay)(n.id),
        c = (0, rJ.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        p = (0, r3.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, r2.A)(A, d, ac.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, r1.A)(g),
        E = (0, aT.fC)(),
        I = (0, rz.A)(d?.profileFrame?.skuId);
    (0, ab.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, ay.z)({ opacity: +(null != E.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, nV.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([aN.A], () => ({ defaultWishlistId: aN.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, av.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, a_.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: A,
        children: (0, l.jsx)(r3.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(aT.Hl, {
                value: E,
                children: (0, l.jsxs)(ae.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: au.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(am.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(aR.A, {}),
                        null != E.interactionType && (0, l.jsx)(aC.animated.div, { style: j, className: am.tB }),
                        (0, l.jsxs)(t9.d_, {
                            className: a()(r && am.BE, !r && null != I && am.It),
                            children: [
                                (0, l.jsxs)(ai.A, {
                                    children: [
                                        (0, l.jsx)(aL.A, { user: n, themeType: au.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aO.A, { user: n }) : (0, l.jsx)(aP.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: am.wx,
                                    children: [
                                        (0, l.jsx)(r9.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: au.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: am.vK,
                                        }),
                                        (0, l.jsx)(aS.A, { className: am.oR }),
                                        (0, l.jsx)(r7.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: ah.T[au.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aD.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: au.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(oD, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == E.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : C,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: am.sJ,
                                        children: (0, l.jsx)(aM.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: am.vS,
                                        children: (0, l.jsx)(oP, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: ac.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oX, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(ad, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(r0.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != I && (0, l.jsx)(as.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oK = t(901600);
function o$(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = sr(),
        [o, d] = (0, r$.A)(t),
        [c, u] = s.useState(!1),
        h = rK("UserProfileSidebarRenderer"),
        A = (0, ss.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rz.A)(p),
        x = (0, m.bG)([rW.A], () => rW.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rQ.A)(i, e) : (0, rQ.A)(t, void 0, e);
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
        E = rX.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oK.H : void 0,
        children: (0, l.jsx)(rV.F, {
            component: (0, l.jsx)(rY.A, {
                children: (0, l.jsx)(rV.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: E }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(aj, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(ap, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oq, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oQ = t(522556),
    oJ = t(225315),
    oZ = t(684407),
    o0 = t(95701),
    o1 = t(919638),
    o2 = t(763827),
    o3 = t(812771),
    o7 = t(506309),
    o6 = t(598748),
    o9 = t(681154),
    o5 = t(975460),
    o8 = t(587895),
    o4 = t(429913),
    de = t(201718),
    dn = t(339580),
    dt = t(633075),
    di = t(903209),
    dl = t(382483),
    ds = t(385113);
let dr = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function da(e) {
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
                            E,
                            { appsWithConfigs: I, isLoadingConfigs: j } =
                                ((t = rr.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, dl.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    t && (0, dl.i$)().catch(() => {});
                                }, [t]),
                                (i = (0, m.bG)([ds.A], () => ds.A.getFeaturedFetchState())),
                                (l = (0, m.bG)([ds.A], () => ds.A.getDeveloperFetchState())),
                                (r = (0, m.yK)([ds.A], () => ds.A.getFeaturedApplicationIds())),
                                (a = (0, m.yK)([ds.A], () => ds.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === ds.e.NOT_FETCHED ||
                                        i === ds.e.FETCHING ||
                                        (t && (l === ds.e.NOT_FETCHED || l === ds.e.FETCHING)),
                                }),
                            {
                                widgetApps: C,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === o9.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => n.has(e.id)) ?? [],
                                [e, n],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, m.bG)(
                                [o8.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            o8.A.isFetchingApplication(e) ||
                                            (null == o8.A.getApplication(e) && !o8.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, o4.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sU.Vq)
                                            .map((e) => [e.id, (0, o5.t)(e)])
                                            .filter(sU.QE)
                                            .filter((e) => {
                                                let [n, t] = e;
                                                return I.has(t.id);
                                            }),
                                    ),
                                [I, u],
                            )),
                            (A = s.useMemo(
                                () => [
                                    ...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id)),
                                ],
                                [o, h],
                            )),
                            { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                            { identitiesByUserId: _, isLoadingIdentities: v } =
                                ((p = (0, m.cf)([dn.A], () =>
                                    Object.fromEntries(y.map((e) => [e, dn.A.getUserIdentities(e)]).filter(sU.QE)),
                                )),
                                (g = (0, m.bG)([dn.A], () =>
                                    y.some((e) => dn.A.getFetchState(e) === dn.e.NOT_FETCHED || dn.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && de.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: T } =
                                ((x = (0, m.cf)([aN.A], () =>
                                    Object.fromEntries(y.map((e) => [e, aN.A.getUserProfile(e) ?? null]).filter(sU.QE)),
                                )),
                                (f = (0, m.yK)([aN.A], () =>
                                    y.filter((e) => null == aN.A.getUserProfile(e) && !aN.A.isFetchingProfile(e)),
                                )),
                                (E = (0, m.bG)([aN.A], () => y.some((e) => aN.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, di.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || E }),
                            S = (0, m.cf)(
                                [ds.A],
                                () => Object.fromEntries([...I].map((e) => [e, ds.A.getConfig(e)]).filter(sU.QE)),
                                [I],
                            ),
                            R = j || b || v || T,
                            M = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== o9.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let n = C[e.extra.application_id] ?? null;
                                        if (null == n) return e;
                                        let t = S[n.id] ?? null;
                                        if (null == t || null == t.surfaces[o6.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, dt.E)(e, n.id)) ?? !1;
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
    return (0, l.jsx)(dr.Provider, { value: r, children: e.children });
}
var dd = t(900797),
    dc = t(890856),
    du = t(180170),
    dh = t(435738),
    dm = t(38055);
let dA = "content-inventory-feed",
    dp = `${dA}-settings`,
    dg = `${dA}-toggle`;
var dx = t(569709);
function df(e) {
    return !e.currentTarget.contains(e.target);
}
let dE = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([dh.A], () => dh.A.hidden),
            h = (0, c.omit)((0, C.rm)(dp), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(dg), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                df(e) ||
                    (0, j.L3)(e, async () => {
                        let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                        return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                    });
            }, []),
            x = s.useCallback(
                (e) => {
                    if (!df(e)) return u ? (0, du.Il)() : r();
                },
                [u, r],
            ),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(dm.A, { ...h }),
                    (0, l.jsx)("span", { className: dx.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(dd.t, { className: dx.wT })
                              : o
                                ? (0, l.jsx)(oB.a, { className: dx.wT })
                                : (0, l.jsx)(oV._, { className: dx.wT })),
                          (0, l.jsx)("span", { className: dx.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(dc.s, {
                      ...A,
                      className: a()(dx.N1, { [dx.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: dx.N1, onContextMenu: g, children: f }),
        });
    }),
    dI = function () {
        return null;
    };
var dj = t(963307),
    dC = t(424994);
let dy = et.default.track;
function db(e, n) {
    dy(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: dC.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var d_ = t(468581),
    dv = t(808666),
    dN = t(414499),
    dT = t(323384),
    dS = t(55730),
    dR = t(765379),
    dM = t(359549),
    dO = t(284525),
    dL = t(482030),
    dP = t(583846),
    dD = t(506326);
t(333007);
var dk = t(342952),
    dw = t(315710),
    dU = t(276293),
    dG = t(935063),
    dF = t(778712),
    dH = t(696986),
    dB = t(97808),
    dV = t(738188),
    dY = t(983851),
    dW = t(31300),
    dz = t(308528),
    dX = t(401843),
    dq = t(375499),
    dK = t(429433),
    d$ = t(324688);
let dQ = (0, o0.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dJ(e) {
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
        [p, g] = s.useState((0, s8.x7)("")),
        x = n6.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(s4.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(d$.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dQ,
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
                : (t(n), A(""), g((0, s8.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dZ(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rJ.Ay)(),
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
        (0, l.jsx)(nP.Y, {
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
                            children: (0, l.jsx)(dK.C, {
                                messageId: eo.dJq,
                                channel: dQ,
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
                        className: d$.mJ,
                        children: (0, l.jsx)(dq.A, {
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
var d0 = t(402216),
    d1 = t(822123),
    d2 = t(409626),
    d3 = t(692969),
    d7 = t(711589),
    d6 = t(607407),
    d9 = t(832163),
    d5 = t(533562),
    d8 = t(805901),
    d4 = t(565645);
t(90295);
var ce = t(7584);
(t(850992), t(690521));
var cn = t(806931),
    ct = t(307731),
    ci = t(866780);
function cl(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, r1.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(ti.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(d8.c, {
                config: dq.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(aC.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(d4.A, {
                            className: a()(ci.Zg, r, { [ci.c4]: t }),
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
(ct.EmojiIntention.CHAT,
    [
        ce.Ay.getByName("thumbsup"),
        ce.Ay.getByName("eyes"),
        ce.Ay.getByName("laughing"),
        ce.Ay.getByName("watermelon"),
        ce.Ay.getByName("fork_and_knife"),
        ce.Ay.getByName("yum"),
    ].filter(sU.Vq));
var cs = t(636585),
    cr = t(543465),
    ca = t(607567),
    co = t(774926),
    cd = t(20805),
    cc = t(22869),
    cu = t(623671),
    ch = t(428249),
    cm = t(327098),
    cA = t(576757),
    cp = t(202195),
    cg = t(140651),
    cx = t(345394);
let cf = function (e) {
    let { children: n } = e,
        [t, i] = (0, aG.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lK.i.USER_DISMISS);
    }, [i]);
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lO.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: cx.A },
                  }),
              ],
          });
};
var cE = t(315246),
    cI = t(866323),
    cj = t(252392);
let cC = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, cI.p)(
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
                (0, l.jsx)(aC.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(cj.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(cj.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var cy = t(381941),
    cb = t(231188);
let c_ = (0, tC.Fe)({
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
                t.e("222969"),
                t.e("515363"),
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
                t.e("700181"),
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
                t.e("56366"),
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
                t.e("755936"),
                t.e("609705"),
                t.e("899843"),
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
                t.e("178565"),
                t.e("630267"),
                t.e("576909"),
                t.e("27355"),
                t.e("407170"),
                t.e("255580"),
                t.e("299854"),
                t.e("608557"),
                t.e("247660"),
                t.e("506620"),
                t.e("649362"),
                t.e("773534"),
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
    cv = s.createContext(void 0);
function cN(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, dw.tj)(t),
        (0, l.jsx)(cv.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: cb.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function cT(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, cg.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(cb.ZK, e, i), style: s, children: n }),
        })
    );
}
function cS(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: cb.$m, children: n });
}
function cR(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [I, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [sn.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && sn.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, cp.A)(t),
                o = (0, is.Ay)(a),
                { needSubscriptionToAccess: d } = (0, i8.A)(n?.id),
                c = (0, m.bG)([tW.A], () => (null != a ? tW.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([ca.Ay], () => (null != a ? ca.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lX.A], () => lX.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && cr.Ay.isChannelMuted(null, n),
                            i = lz.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(dV.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: cb.vb,
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
                            className: cb.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(ti.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (E.A.updateChatOpen(a.id, !0), (0, iS.iN)(a.id), i?.(a));
                                        },
                                        className: cb.I3,
                                        children: [
                                            (0, l.jsx)(tH.Ay, {
                                                guild: c,
                                                size: tH.Ay.Sizes.SMOL,
                                                className: cb.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oV._, {
                                                size: "xxs",
                                                color: ta.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dY.H, { size: "xs", color: ta.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: cb.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(cs.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dB.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dF._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: cb.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dH.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      l4.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dW.k : dY.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, cm.A)(h),
        L =
            ((n = O),
            (t = (0, m.bG)([tW.A], () => tW.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, is.Ay)(i)),
            null != n && null != t && null != i && o0.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: cb.kP,
                              children: [
                                  (0, l.jsxs)(ti.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, iS.iN)(i.id),
                                      className: cb.I3,
                                      children: [
                                          (0, l.jsx)(tH.Ay, {
                                              guild: t,
                                              size: tH.Ay.Sizes.SMOL,
                                              className: cb.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oV._, {
                                              size: "xxs",
                                              color: ta.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dU.N, { size: "xs", color: ta.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: cb.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(cs.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dB.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: dF._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: cb.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dH.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != M && 0 === p.length ? [M] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rX.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, is.Ay)(o, !0),
        H =
            null != o && I
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${G}` }),
        B = I ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function V(e) {
        let n,
            { emoji: t } = e;
        if (null != t) {
            if (
                (et.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: dC.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, ii.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                I)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dz.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: dC.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, ii.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await dz.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? dC.PA.DM_REACTION_MESSAGE_SENT : dC.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, ch.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: cy.Hx.CONTENT_INVENTORY_MEMBERLIST,
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
            (0, l.jsx)(cC, { sent: T, shown: v, className: cb.Jt }),
            X ??
                (0, l.jsx)(cf, {
                    children: (0, l.jsxs)("div", {
                        className: cb.T7,
                        children: [
                            (0, l.jsx)(cM, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dZ, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? cb.P2 : cb.VE,
                children: [
                    (0, l.jsx)(dJ, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: I ? o : void 0,
                        showEmojiButton: null != X,
                        className: cb.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(ti.D, {
                                          className: cb.wD,
                                          onClick: q,
                                          children: I
                                              ? (0, l.jsx)(dU.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dG.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(ti.D, {
                            onClick: () => K(!1),
                            className: cb.i3,
                            children: (0, l.jsx)(ih.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: ta.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: cb.fh,
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
let cM = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, d1.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tz._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(cl, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: cb.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function cO(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, cA.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, cp.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: cb.MH,
        children: [
            (0, l.jsxs)("div", {
                className: cb.WP,
                children: [
                    (0, l.jsx)(dk.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dF._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dH.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(cb.Xn, cb.zA),
                        children: z.intl.format(t, {
                            user0: rX.Ay.getName(o, n?.id, g[0]),
                            user1: rX.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(cb.Mj, cb.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    cc.A,
                                    {
                                        textClassName: a()(cb.Mj, cb.nk),
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
                                    cc.A,
                                    {
                                        textClassName: a()(cb.Mj, cb.nk),
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
            null != p && (0, l.jsx)(d0.Ay, { size: d0.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(cE.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cL(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(ti.D, { className: cb.Zw, onClick: t, children: n });
}
function cP(e) {
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
        E = (0, cd.zD)(f),
        I = E ? f.extra?.application_id : void 0,
        j = (0, d5.W)();
    null != j && (I = j);
    let C = (0, d3.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : I,
                source: d2.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(dC.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, co.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([d9.A], () => d9.A.getDetectableIdsToApplicationIds()),
        N = E ? C : void 0,
        T = s.useContext(cv);
    return (0, l.jsxs)("div", {
        className: cb.au,
        children: [
            (0, l.jsx)(cO, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(cT, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: cb.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: cb.Fb,
                                children: (0, l.jsx)(cu.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: cu.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: cb.iC,
                                children: [
                                    (0, l.jsx)(cL, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(cb.$2, { [cb.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cL, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cb.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dH.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: cb.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != v[I]
                ? (0, l.jsx)(c_, {
                      className: cb.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: og.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cD(e) {
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
        f = (0, cd.zD)(x),
        E = f ? x.extra?.application_id : void 0,
        I = (0, d5.W)();
    null != I && (E = I);
    let j = (0, d3.A)(
            {
                location: "ContentPopout",
                applicationId: E,
                source: d2.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(dC.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, cm.A)(x),
        { largeImage: N, smallImage: T } = (0, co.D8)(y, b ?? v),
        { largeImage: S } = (0, co.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([d9.A], () => d9.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(cv);
    return (0, l.jsxs)("div", {
        className: cb.au,
        children: [
            (0, l.jsx)(cO, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(cT, {
                backgroundImgSrc: S?.src,
                className: cb.uR,
                children: [
                    (0, l.jsx)(cL, {
                        onClick: g
                            ? () => {
                                  (lk.default.selectVoiceChannel(a.channelId), (0, dX.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: cb.nh,
                            children: [
                                (0, l.jsx)(d6.A, { className: cb.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: cb.NE,
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
                        className: cb.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: cb.Fb,
                                    children: (0, l.jsx)(cu.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: cu.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: cb.gv,
                                children: [
                                    (0, l.jsx)(cL, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: cb.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cL, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cb.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dH.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != M[E]
                ? (0, l.jsx)(c_, {
                      className: cb.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: og.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var ck = t(299846);
let cw = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, ck.u)(t);
    function u() {
        (0, dL.hg)(t.extra.application_id);
    }
    let { data: h } = (0, n8.YY)(t.extra.application_id),
        m = (0, dM.Ay)({ application: h, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dD.iT, { location: dD.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(cP, {
            channel: n,
            userDescription: (0, dP.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, dS.A)(d, eo.jUm.JOIN) || (0, dR.A)(d),
        f = g
            ? (0, l.jsx)(dO.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dv.I,
              })
            : null,
        E =
            null == m
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: m,
                      text: z.intl.string(z.t["jaYS/h"]),
                      icon: dN.h,
                  }),
        I =
            null != E || r
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: dT.k,
                  }),
        j = [E, g && !r ? f : I].filter(sU.Vq);
    return (0, l.jsxs)(cN, {
        children: [
            p,
            (0, l.jsx)(cS, {
                children: (0, l.jsx)(cR, {
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
var cU = t(322789),
    cG = t(808380),
    cF = t(687966),
    cH = t(960076),
    cB = t(544441),
    cV = t(562708),
    cY = t(139286);
function cW(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(t),
        s = (0, dM.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cY.A)({
            name: cV.ImpressionNames.CLOUD_PLAY_CTA,
            type: cV.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: dN.h,
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
var cz = t(601007),
    cX = t(648246),
    cq = t(308335),
    cK = t(790381),
    c$ = t(266080),
    cQ = t(968309),
    cJ = t(30370);
function cZ(e) {
    let n = (0, m.bG)([cJ.A], () => cJ.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cQ.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var c0 = t(18282);
let c1 = [...cU.n, dD.Yq],
    c2 = {
        [cG.Y.DESKTOP]: null,
        [cG.Y.LINUX]: null,
        [cG.Y.MACOS]: null,
        [cG.Y.NINTENDO]: null,
        [cG.Y.IOS]: null,
        [cG.Y.ANDROID]: null,
        [cG.Y.XBOX]: c$.A,
        [cG.Y.PLAYSTATION]: cK.A,
    },
    c3 = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, ck.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, cp.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? c2[g] : null,
            E = cZ(g === cG.Y.XBOX ? eo.fg2.XBOX : g === cG.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: I } = (0, n8.YY)(x),
            j = (0, cB.A)(x),
            { analyticsLocations: C } = (0, P.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, dM.JC)(I),
            b = (0, cq.o)(h?.application_id ?? m?.applicationId ?? I?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dD.mG, {
                location: null == A ? dD.N5.POPOUT : dD.N5.STREAMING_POPOUT,
                children: c1.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(cP, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(c0.A, { onClick: E, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dP.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cz.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cD, {
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
                                  ? (0, l.jsx)(cz.A, {
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
                          cW,
                          { application: I, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, dS.A)(h, eo.jUm.JOIN) || (0, dR.A)(h))
                    ? (0, l.jsx)(
                          dO.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cF.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cH.A)(h)
                    ? (0, l.jsx)(cX.A, { activity: h, size: "md", variant: "primary", icon: to.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sU.Vq);
        return (0, l.jsxs)(cN, {
            children: [
                v,
                (0, l.jsx)(cS, {
                    children: (0, l.jsx)(cR, {
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
function c6(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, n8.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, dM.Ay)({ application: r, analyticsLocations: a }),
        d = (0, ii.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = c7(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, aG.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lK.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [E, I] = s.useState(!1);
    return (
        f && !E && I(!0),
        (0, cY.A)(
            {
                name: cV.ImpressionNames.CLOUD_PLAY_CTA,
                type: cV.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !E },
            [E],
        ),
        (0, l.jsx)(lO.A, {
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
                    icon: dN.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lK.i.USER_DISMISS), h(null));
            },
        })
    );
}
let c9 = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(c6, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var c5 = t(363670),
    c8 = t(205327),
    c4 = t(52133),
    ue = t(835723),
    un = t(172710),
    ut = t(655116),
    ui = t(763758),
    ul = t(286617),
    us = t(533207),
    ur = t(121090),
    ua = t(693879),
    uo = t(809854),
    ud = t(272984),
    uc = t(170699);
function uu(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, uo.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dP.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: uc.lu,
              children: [
                  (0, l.jsx)(ua.z, { entry: t }),
                  (0, l.jsx)("div", { className: uc.Lt, children: (0, l.jsx)("div", { className: uc.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: uc.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function uh(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, c5.u7)(r),
        g = cZ(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [ut.A, s_.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, ul.A)(ut.A, s_.default, p, c) : void 0),
            [c, p],
            c4.A,
        );
    if (null == c || null == u) return null;
    let E = h,
        I = [];
    u.media.provider === c8.X.SPOTIFY &&
        ((t = () => {
            (0, un.Mp)(c);
        }),
        (i = () => {
            (0, un.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, un.Mp)(c);
        }),
        (E = (0, l.jsx)(ui.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: cb.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, un.mN)(c, p.id, e);
            },
        })),
        f?.syncDisabled === !1 &&
            I.push(
                (0, l.jsx)(
                    x.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: ue.J,
                        onClick: function () {
                            null != f && ((0, us.A)(f, ud.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(cP, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === c8.X.SPOTIFY
                ? (0, l.jsx)(c0.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: ur.A })
                : null,
        userDescription: (0, dP.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: E,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(uu, { activity: c }),
    });
    return (0, l.jsxs)(cN, {
        children: [
            j,
            (0, l.jsx)(cS, {
                children: (0, l.jsx)(cR, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: I,
                }),
            }),
        ],
    });
}
var um = t(903134),
    uA = t(56121),
    up = t(263577),
    ug = t(868065),
    ux = t(804779);
let uf = [dD.Y8],
    uE = [uA.j.WEEK],
    uI = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, co.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dP.TQ)(n);
        return null != r && (0, sU.S1)(r, uE)
            ? (0, l.jsxs)(ug.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(ug.UA, {
                          children: [
                              (0, l.jsx)(ug.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(ug.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(dD.mG, {
                                  location: dD.N5.CARD,
                                  children: uf.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(up.V, { src: s?.src, size: 48, className: ux.xn }),
                  ],
              })
            : null;
    });
var uj = t(210528);
let uC = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, dP.TQ)(t),
        u = cZ(eo.fg2.SPOTIFY);
    if (null == d || !(0, sU.S1)(c, uE)) return null;
    function h() {
        let e = ud.M0.ALBUM,
            n = uj.A.isProtocolRegistered()
                ? ud.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : ud.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(cN, {
        children: [
            (0, l.jsx)(cP, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = ud.M0.ARTIST,
                        n = uj.A.isProtocolRegistered()
                            ? ud.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : ud.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === c8.X.SPOTIFY
                        ? (0, l.jsx)(c0.A, { onClick: u, Icon: ur.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dD.mG, {
                    location: dD.N5.POPOUT,
                    children: uf.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(cS, {
                children: (0, l.jsx)(cR, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var uy = t(977001);
let ub = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, ck.u)(t),
        c = (0, dP.ty)(t),
        u = (0, dP.TQ)(t);
    if (null == a || null == c || null == u || !(0, uy._E)(u)) return null;
    let h = null != t.extra.platform ? c2[t.extra.platform] : null;
    return (0, l.jsxs)(cN, {
        children: [
            (0, l.jsx)(cP, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(c0.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dD.mG, {
                    location: dD.N5.POPOUT,
                    children: uy.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cS, {
                children: (0, l.jsx)(cR, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var u_ = t(514243),
    uv = t(347306),
    uN = t(123917),
    uT = t(998218);
let uS = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cZ(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = uT.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, uN.h)({ href: uT.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cN, {
              children: [
                  (0, l.jsx)(cP, {
                      channel: n,
                      entry: t,
                      userDescription: (0, dP.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(c0.A, {
                          onClick: a,
                          Icon: uv.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dD.mG, {
                          location: dD.N5.POPOUT,
                          children: u_.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cS, {
                      children: (0, l.jsx)(cR, {
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
function uR(e) {
    return e?.type === dj.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o9.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function uM(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case o9.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cU.A, { ...t, entry: n });
        case o9.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(u_.A, { ...t, entry: n });
        case o9.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(uy.Ay, { ...t, entry: n });
        case o9.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(uI, { ...t, entry: n });
        case o9.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c5.Ay, { ...t, entry: n });
        case o9.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(d_.A, { ...t, entry: n });
        default:
            return null;
    }
}
function uO(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === o9.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(c9, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uL(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(uP, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(dC.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function uP(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case o9.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(c3, { ...t, entry: n });
        case o9.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uS, { ...t, entry: n });
        case o9.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ub, { ...t, entry: n });
        case o9.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(uC, { ...t, entry: n });
        case o9.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(uh, { ...t, entry: n });
        case o9.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cw, { ...t, entry: n });
        default:
            return null;
    }
}
let uD = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, ck.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(dr);
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
        E = s.useRef(!1),
        [I, y] = s.useState(!1),
        [b, _] = s.useState(!1),
        v = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        I && v && _(!0);
    }, [I, v]),
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
                db(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        db(dC.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(() => {
            ((E.current = !1),
                setTimeout(() => {
                    E.current || (y(!1), _(v));
                }, 100));
        }, [v]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(uO, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((E.current = !0),
                        setTimeout(() => {
                            (E.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: M,
                children: (0, l.jsx)(nP.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(um.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(uL, {
                                closePopout: n,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: I,
                    positionKey: o,
                    onRequestOpen: () => R(f),
                    onRequestClose: () => {
                        b && M();
                    },
                    spacing: 8,
                    children: (e, n) => {
                        let { isShown: t } = n;
                        return (0, l.jsx)(ti.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                I || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(uM, {
                                ...r,
                                selected: t,
                                hovered: E.current,
                                trackRankingItemInteraction: S,
                            }),
                        });
                    },
                }),
            }),
        ],
    });
});
var uk = t(531685),
    uw = t(99066),
    uU = t(376261),
    uG = t(99753),
    uF = t(136722),
    uH = t(860071);
let uB = [],
    uV = new Set(),
    uY = new Set();
var uW = t(808323);
let uz = new Set([
    o9.ContentInventoryEntryType.PLAYED_GAME,
    o9.ContentInventoryEntryType.WATCHED_MEDIA,
    o9.ContentInventoryEntryType.TOP_GAME,
    o9.ContentInventoryEntryType.TOP_ARTIST,
    o9.ContentInventoryEntryType.LISTENED_SESSION,
    o9.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uX = t(498642);
let uq = (0, sy.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uK = t(293860);
let u$ = { cooldownDurationMs: 60 * sj.A.Millis.DAY };
function uQ(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: uq.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = sT(),
                i = (0, m.bG)([uX.A], () => uX.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i >= 200);
        })(n);
    return (0, l.jsx)(lU.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: u$,
        groupName: lK.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sP, {
                      className: uK.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uJ = t(728321),
    uZ = t(282006);
let u0 = er.Ay.getEnableHardwareAcceleration(),
    u1 = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    u2 = s.memo(function (e) {
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
                isVROnline: E,
                premiumSince: I,
                nameplate: C,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != I ? new Date(I) : null,
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
                                t.e("711617"),
                                t.e("470314"),
                                t.e("70515"),
                                t.e("404524"),
                                t.e("654148"),
                                t.e("666939"),
                                t.e("717334"),
                                t.e("184841"),
                            ]).then(t.bind(t, 107632)),
                            n = lX.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
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
                    shouldAnimateStatus: u0,
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
                    isVR: E,
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
    u3 = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != n ? V.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(u2, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function u7(e) {
    let { index: n } = e,
        t = (0, C.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class u6 extends s.Component {
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
        if (r?.id === dA) return (0, s.createElement)(dE, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                uJ.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: u1,
                    children: (0, s.createElement)(uZ.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uZ.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === dj.S9.CONTENT_INVENTORY) {
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
            if (r.type === dj.S9.MEMBER && "user" in r) {
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
                    u3,
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
            if (r.type === dj.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    uD,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === dj.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(dI, {}, "content-inventory-hidden-entry");
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
        if (e?.id === dA) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uR(t[i + 1 + l]) : n;
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
            .filter(sU.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== dj.S9.MEMBER ||
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
                (0, l.jsx)(rn.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rV.F, {
                                component: (0, l.jsx)(rY.A, {
                                    children: (0, l.jsx)(rV.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, is.m1)(t, ee.default, lz.A),
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
function u9(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(L.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([dj.Ay], () => dj.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uW.A)({ id: dC.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, c4.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uH.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uB;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uV;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    uF.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => uz.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [dh.A, uG.A],
                            () => {
                                let e = uG.A.getDebugImpressionCappingDisabled();
                                return !(0, uw.sE)("useFilterImpressionCappedContent") || e
                                    ? uY
                                    : dh.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: uY };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, dP.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([uG.A], () => uG.A.getFeedRequestId(dC.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(dr).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([dh.A], () => dh.A.hidden),
                A = (0, m.bG)([uk.A], () => uk.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([tW.A], () => tW.A.getGuild(r), [r]),
                x = ((0, uU.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, E, I, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: dj.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: dj.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: dA,
                        type: dj.S9.CONTENT_INVENTORY_GROUP,
                        key: dA,
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
                        feedHeight: e.map(uR).reduce((e, n) => e + n, 0),
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
                                (dy(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: dC.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, uw.sE)("useInjectContentInventoryFeed") &&
                                    i7.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: E, version: I, updateMaxRowSeen: v }
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
                let i = n === dp || n === dg ? 0 : parseInt(n, 10),
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
        E = s.useCallback(
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
        I = (0, y.Ay)({ id: `members-${n.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: E });
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: [
                (0, l.jsx)(uQ, { guildId: n.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: I,
                    children: (0, l.jsx)(u6, {
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
function u5(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(da, { children: (0, l.jsx)(u9, { channel: i, className: t }) }), [i, t]);
}
var u8 = t(888904);
let u4 = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: u8.kL,
        children: [
            (0, l.jsxs)(lM.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lM.A.Icon, { icon: dU.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lM.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: u8.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: u8.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: u8.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var he = t(909735),
    hn = t(943712),
    ht = t(321255),
    hi = t(746080),
    hl = t(516607),
    hs = t(999900);
function hr() {
    return (0, l.jsx)("div", { className: hs.wG, children: (0, l.jsx)(g.y, {}) });
}
let ha = (0, tC.Fe)({
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
        renderLoader: hr,
        name: "ForumChannel",
    }),
    ho = (0, tC.Fe)({
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
        renderLoader: hr,
        name: "AppChannel",
    });
function hd() {
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
        t.e("778326"),
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
        t.e("711617"),
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
        t.e("932011"),
        t.e("465694"),
        t.e("874821"),
        t.e("426792"),
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
let hc = (0, tC.Fe)({ createPromise: hd, webpackId: 540462, name: "ChannelCall", renderLoader: hr });
function hu() {
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
let hh = (0, tC.Fe)({ createPromise: hu, webpackId: 507007, name: "StageChannelCall", renderLoader: hr }),
    hm = (0, tC.Fe)({
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
            return (0, l.jsx)(sX, {});
        },
    }),
    hA = (0, tC.Fe)({
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
    hp = (0, tC.Fe)({
        createPromise: () => Promise.all([t.e("386345"), t.e("269178"), t.e("177718")]).then(t.bind(t, 763349)),
        webpackId: 763349,
        name: "FriendsSidebar",
    });
class hg extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rB.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        return null != e && ((0, o0.ZV)(e.type) || null != n);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? hd()
            : e === eo.rbe.GUILD_STAGE_VOICE && hu();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, iS.iN)(e.id);
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
            (0, nV.openUserProfileModal)({
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
        return e?.hasFlag(hi.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(i9.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(n9.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== cn.lp.STREAM
            ? null
            : (0, l.jsx)(
                  i3.A,
                  { size: d0.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    o.push((0, l.jsx)(lJ, { channel: e }, "calls")),
                    o.push((0, l.jsx)(lm.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lZ.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(nC, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(sa, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(l8, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lJ, { channel: e }, "calls")),
                    o.push((0, l.jsx)(lm.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lZ.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(n_, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(iU, { channel: e })),
                    null == n || n.isForumLikeChannel() || o.push((0, l.jsx)(rM.A, { channel: n }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(st, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iY, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(lm.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(n_, { channelId: e.id }, "members")),
                    null != n && (0, eE.pk)(e) && o.push((0, l.jsx)(lf, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rD, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rM.A, { channel: e }, "browser")),
                    t || o.push((0, l.jsx)(nv.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(lm.A, { channel: e }, "pins")),
                    (0, tt.PD)(e.guild_id, "channel_header") &&
                        o.push((0, l.jsx)(lh, { channelId: e.id }, "conversations")),
                    o.push((0, l.jsx)(n_, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && o.push((0, l.jsx)(lf, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(tn, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rM.A, { channel: e }, "browser")),
                        t || o.push((0, l.jsx)(nv.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(lm.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(n_, { channelId: e.id }, "members")));
                    break;
                }
                o.push((0, l.jsx)(nZ, { channel: e, isLurking: t }, "app-channel-actions"));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lR, {}, "game-invite-channel-learn-more")),
                    t ||
                        (o.push((0, l.jsx)(lv, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(nv.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(n_, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(n_, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(n_, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(n_, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(n_, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e && null != n
            ? (0, l.jsx)("div", {
                  className: hs.u8,
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, iS.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = r || o,
            E = p || g;
        return (0, l.jsxs)("div", {
            className: hs.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lM.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(hs.DD, r, { [hs.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: E,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(ia.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, ia.zF)({
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
                                              className: hs.u8,
                                              children: (0, l.jsx)(ni, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: hs.u8,
                                                children: (0, l.jsx)(x.$, {
                                                    onClick: () => (0, nt.uh)(e.guild_id, e.id),
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: z.intl.string(z.t.k5WiPf),
                                                }),
                                            })
                                          : (0, ia.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sY.A, { channelId: e.id }),
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
                if (!n) return (0, l.jsx)(hh, { channel: e, popoutType: n7.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    hc,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: n7.N.NO_POPOUT,
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
                ? (0, l.jsx)(li, { guildId: n.id })
                : (0, l.jsx)(i5.H, { guildId: n.id, children: (0, l.jsx)(lc, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(oQ.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(id.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(it, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(ha, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(ir.A, { channel: e, guild: n, chatInputType: n6.oU.NORMAL }, null != n ? n.id : "home")
            : (0, l.jsx)(ho, { channel: e }, e.id);
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
            return (0, l.jsx)(o$, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sV, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(u5, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(u5, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(tj, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(hm, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => i6(su.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, oJ.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case sK.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rb, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sK.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rH, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sK.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? iJ : rH;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(ht.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sK.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sK.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: hs.uC,
                    children: (0, l.jsx)(hA, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => sq.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(o3.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? o3.X.PostSidebar : o3.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(u4, {});
        if (null == e) return (0, l.jsx)(hn.A, { channelId: this.props.channelId });
        let E = r === eo.YvQ.SIDEBAR_CHAT,
            I = (0, he.UN)("Channel"),
            j = null != d && !E,
            C =
                ((0, o0.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !f,
                        className: a()(hs.TE, {
                            [hs.js]: (E && !I) || j,
                            [hs.Rs]: E ? !I || g : j || x,
                            [hs.jl]: E && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: E ? p : void 0 },
                                      className: hs.x4,
                                      channel: e,
                                      draftType: iK.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(hs.Qs, { [hs.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ty.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: hs.zP, children: b }) : b,
                x && (0, l.jsx)(hp, {}),
            ],
        });
    }
}
let hx = (0, ef.A)(hg),
    hf = s.memo(function (e) {
        var n, t, i;
        let r,
            { providedChannel: a } = e,
            [o, d] = s.useState(null),
            c = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, m.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, m.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            f = (0, il.DZ)(),
            j = (0, il.e4)(x),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            y = j?.parent_id,
            b = (0, m.bG)([ew.A], () => ew.A.getChannel(y), [y]),
            _ = (0, m.bG)([tW.A], () => tW.A.getGuild(j?.guild_id), [j]),
            { needSubscriptionToAccess: v } = (0, i8.A)(j?.id ?? void 0),
            N = (0, m.bG)(
                [n3.A],
                () => {
                    let e = null != c ? n3.A.getParticipants(c) : [],
                        n = null != c ? n3.A.getActivityParticipants(c) : [];
                    return e.length - n.length > 0;
                },
                [c],
            ),
            T = (0, i2.A)(),
            S = (0, m.bG)([eU.Ay], () => (T?.channelId ?? eU.Ay.getVoiceChannelId()) === j?.id),
            R = (0, m.bG)([ej.Ay], () => (null != j ? ej.Ay.getSelfEmbeddedActivityForChannel(j.id) : null), [j]),
            M = (0, m.bG)([o2.A], () => o2.A.isConnected()),
            O = (0, eI.Ay)(M),
            L = M && !1 === O;
        s.useEffect(() => {
            S &&
                L &&
                null != R &&
                null != j &&
                E.A.selectParticipant(
                    j.id,
                    (0, n2.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [L, j, S, R]);
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            D = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            k = null != P && !(0, ev.A)(j?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, m.cf)([lX.A], () =>
                null != j && j.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lX.A.getVoiceStatesForChannel(j.id)),
                          isUserInThisVoice: lX.A.isInChannel(j.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != j && j.isPrivate() && !k && N,
            H = j?.isGuildVocal() || F || (U && (G || !w)),
            B = (0, sQ.e)(j, "channel"),
            V = (0, m.bG)([n4.A], () => {
                let e = (0, nz.ny)(n4.A.getMainFrame());
                return e?.data.layoutMode === nz.y0.FOCUSED && e.intent === nz.sV.MAIN;
            }),
            { welcomeModalChannelId: Y } = (0, h.zy)(),
            W = (0, m.bG)([no.A], () => null != j && no.A.isLurking(j.guild_id), [j]),
            z = (0, m.bG)([oZ.A], () => oZ.A.hasSeen(j?.guild_id, W), [j, W]),
            X = (0, m.bG)(
                [n3.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? n3.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            q =
                ((n = _?.id),
                (r = (0, m.bG)([tW.A, sc, ee.default, $.Ay], () => {
                    let e = tW.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === sc.hasViewedPrompt(su.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != r && (r || i6(su.REAL_NAME_PROMPT, n));
                }, [r, n]),
                !0 === r),
            K =
                ((t = _?.id),
                (0, m.bG)([ew.A, tW.A, eU.Ay], () => {
                    let e = tW.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(Y);
                    return Y === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, o0.ke)(n.type);
                })),
            { section: J, channelSidebarState: Z } = (0, m.cf)(
                [ny.Ay],
                () => ({ section: ny.Ay.getSection(c, j?.isDM()), channelSidebarState: ny.Ay.getSidebarState(c) }),
                [c, j],
            ),
            en = _?.id,
            et = (0, m.bG)([ny.Ay], () => ny.Ay.getGuildSidebarState(en), [en]),
            el = (0, sm.lI)(),
            es = (0, ne.qz)() && j?.type === eo.rbe.GUILD_APP;
        ((i = j?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return n0.A.addRouteRewriter((e, n) => {
                        let { pathname: t, search: l, state: s } = e;
                        return "POP" === n || (0, ne.Dw)(l) || n1.exec(t)?.[1] !== i
                            ? null
                            : { path: (0, ne.gu)(t), state: s };
                    });
            }, [i, es]));
        let er = es && Z?.type === sK.PE.VIEW_CHANNEL && Z.channelId === j.id,
            ea = (0, is.Ay)(j),
            ed = (0, is.Ay)(j, !0),
            ec = (0, m.bG)([n3.A], () => (null != j ? n3.A.getSelectedParticipant(j.id) : null)),
            eu = (0, e4.vL)(j),
            eh = (0, io.Uf)(j),
            em = null != j && g === j.id,
            eA = null != j && j.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = iZ.A.useConfig({ location: "Channel" }),
            ex = (0, i1.c)(),
            ef = (0, m.bG)(
                [o1.A, nb.A],
                () => {
                    let e = j?.guild_id ?? nb.A.getGuildId();
                    return null != e && o1.A.isUnavailable(e);
                },
                [j],
            ),
            eC = ep && (0, i0.A)() && null != j && !ef && !j.isGuildVocal();
        (s.useEffect(() => (I.A.setFriendsSidebarAvailable(eC), () => I.A.setFriendsSidebarAvailable(!1)), [eC]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, ev.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, e5.A)({ channelId: i }));
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
                let e = (0, nt.JK)();
                if (e?.location?.state?.stageInviteKey === hl.J2) {
                    let { channelId: n } = (0, sh.vu)(e?.location?.pathname) ?? {};
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
                null != o && null != e && eA && e.id === o && !n && ((0, s$.av)(e), d(null));
            }, [o, eA]));
        let eN = (0, eE.cI)(j),
            eT = null != j && j.isPrivate(),
            eS = (0, eI.Ay)(eT),
            eR = (0, eI.Ay)(j?.id);
        s.useEffect(() => {
            let e = eS && !eT,
                n = eS && eT && j?.id !== eR;
            (e || n) && (0, ii.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lK.i.AUTO });
        }, [j?.id, eR, eT, eS]);
        let eM = (0, p.useHasAnyModalOpen)(),
            eO = (0, n5.a)(j);
        return (0, l.jsx)(hx, {
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
            ...(0, m.cf)([lX.A], () => ({ hasVideo: null != j && lX.A.hasVideo(j.id) }), [j]),
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
