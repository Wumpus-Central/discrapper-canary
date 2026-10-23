(t.r(n), t.d(n, { default: () => hu }), t(321073));
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
function e9(e) {
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
function e6(e) {
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
        : (0, l.jsx)(e9, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
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
var nl = t(857071),
    ns = t(371169),
    nr = t(260498),
    na = t(95264),
    no = t(914315),
    nd = t(248675);
function nc(e) {
    let { channel: n } = e,
        t = n.guild_id ?? null,
        i = (0, no.A)(n, "ConjureAppChannelRemixButton"),
        r = (0, m.bG)([nl.A], () => null != t && nl.A.isLurking(t), [t]),
        a =
            (s.useEffect(() => {
                (0, ns.b8)();
            }, []),
            (0, m.bG)([nr.Ay], () => {
                let e = nr.Ay.getMaxProjects();
                return null != e && nr.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - nr.Ay.getOwnedProjects().length)
                    : null;
            }));
    return null == i || null == t || r || 0 === a
        ? null
        : (0, l.jsx)(x.$, {
              variant: "secondary",
              size: "sm",
              text: z.intl.string(nd.default.XWgAfc),
              onClick: () => (0, na.A)(i, t),
          });
}
var nu = t(246338),
    nh = t(534890),
    nm = t(58736);
function nA(e) {
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
    return (0, l.jsx)(nm.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nh.ChatIcon,
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
var np = t(358047),
    ng = t(967198);
function nx(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([np.Ay], () => np.Ay.getSection(n)),
        i = (0, m.bG)([ng.A], () => ng.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nm.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                I.A.toggleMembersSection());
        },
        selected: s,
    });
}
var nf = t(187360),
    nE = t(991690),
    nI = t(621466),
    nj = t(453903),
    nC = t(477782),
    ny = t(12470),
    nb = t(811893),
    n_ = t(70688),
    nv = t(663417),
    nN = t(729475),
    nT = t(265872),
    nS = t(980707),
    nR = t(885574),
    nM = t(365199),
    nO = t(146337),
    nL = t(130332),
    nP = t(625180),
    nD = t(545691),
    nk = t(672929),
    nw = t(156548),
    nU = t(646973),
    nG = t(402860),
    nF = t(475815),
    nH = t(615606),
    nB = t(165610);
function nV(e) {
    let { channel: n, isConjured: t } = e,
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, nO.A)(n, "app_channel_header"),
        d = (0, nH.q)(n)?.bot,
        c = s.useMemo(
            () => ({ type: nE.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        u = (0, nk.A)(n.application_id ?? null, c),
        h = (0, nB.x1)(u) && u.data.proxyTicketRefreshing,
        m = (0, nL.A)(n, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        A = null != m.edit,
        { canPopout: p, isPoppedOut: g, popOut: x, popIn: f } = (0, nU.A)(u),
        E = s.useCallback(() => {
            null == u || h || nP.A.refreshProxyTicket(u.id);
        }, [u, h]),
        I = z.intl.string(z.t["UKOtz+"]),
        j = (0, nB.x1)(u);
    if (!j && null == d && null == o && !A) return null;
    function C() {
        return (0, nB.x1)(u)
            ? (0, l.jsx)(nC.Dr, {
                  id: "close-app",
                  label: z.intl.string(z.t.VkMnR2),
                  action: () => (0, nD.A)(u.id),
                  icon: n_.DoorExitIcon,
                  leadingAccessory: { type: "icon", icon: n_.DoorExitIcon },
              })
            : null;
    }
    function y() {
        return j
            ? (0, l.jsx)(nC.Dr, {
                  id: "reload-app",
                  label: z.intl.string(z.t.kHie4V),
                  action: E,
                  icon: nv.RefreshIcon,
                  leadingAccessory: { type: "icon", icon: nv.RefreshIcon },
                  disabled: h,
              })
            : null;
    }
    function b() {
        let e = (0, nB.x1)(u) && !g ? (0, nw.fl)(u.id) : null;
        return null != e && (0, nF.Ub)(e)
            ? (0, l.jsx)(nC.Dr, {
                  id: "full-screen-app",
                  label: z.intl.string(z.t.OIDkcp),
                  icon: nN.T,
                  leadingAccessory: { type: "icon", icon: nN.T },
                  action: () => (0, nF.tl)(e),
              })
            : null;
    }
    return (0, l.jsx)(nT.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, nI.vq)(document.activeElement, HTMLIFrameElement)) return nj.oU;
            r(!1);
        },
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsxs)(nS.W, {
                "data-menu-migrated": !0,
                navId: "app-channel-header-overflow",
                onClose: i,
                onSelect: i,
                "aria-label": z.intl.string(z.t.Xm41aV),
                children: [
                    t
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  j
                                      ? (0, l.jsxs)(nC.rX, {
                                            children: [
                                                j
                                                    ? g
                                                        ? (0, l.jsx)(nC.Dr, {
                                                              id: "pop-in-app",
                                                              label: z.intl.string(z.t["NKV/MO"]),
                                                              icon: ny._,
                                                              leadingAccessory: { type: "icon", icon: ny._ },
                                                              action: f,
                                                          })
                                                        : p
                                                          ? (0, l.jsx)(nC.Dr, {
                                                                id: "pop-out-app",
                                                                label: z.intl.string(z.t["3Zypbv"]),
                                                                icon: nb.t,
                                                                leadingAccessory: { type: "icon", icon: nb.t },
                                                                action: x,
                                                            })
                                                          : null
                                                    : null,
                                                b(),
                                                m.showOverlay,
                                            ],
                                        })
                                      : null,
                                  j || A ? (0, l.jsxs)(nC.rX, { children: [m.edit, y(), C()] }) : null,
                              ],
                          })
                        : j
                          ? (0, l.jsxs)(nC.rX, { children: [b(), y(), C()] })
                          : null,
                    null != d || null != o
                        ? (0, l.jsxs)(nC.rX, {
                              children: [
                                  null != d
                                      ? (0, l.jsx)(nC.Dr, {
                                            id: "app-info",
                                            label: z.intl.string(z.t.Sh2z9g),
                                            action: () =>
                                                (0, nG.openUserProfileModal)({
                                                    userId: d.id,
                                                    guildId: n.guild_id,
                                                    channelId: n.id,
                                                }),
                                            leadingAccessory: { type: "icon", icon: nR.CircleInformationIcon },
                                        })
                                      : null,
                                  o,
                              ],
                          })
                        : null,
                ],
            });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nm.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: t ? null : I,
                icon: nM.MoreHorizontalIcon,
                "aria-label": I,
                selected: t,
            });
        },
    });
}
function nY(e) {
    let { frame: n } = e,
        { canPopout: t, isPoppedOut: i, popOut: s, popIn: r } = (0, nU.A)(n);
    return (0, nB.x1)(n)
        ? i
            ? (0, l.jsx)(nm.In, {
                  icon: ny._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: r,
              })
            : t
              ? (0, l.jsx)(nm.In, {
                    icon: nb.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: s,
                })
              : null
        : null;
}
function nW(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: nE.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nk.A)(n.application_id ?? null, t);
    return (0, l.jsx)(nY, { frame: i });
}
function nz(e) {
    let { channel: n, isLurking: t } = e,
        i = (0, nu.w$)(n, "AppChannelHeaderActions");
    return (0, l.jsxs)(l.Fragment, {
        children: [
            i ? (0, l.jsx)(nc, { channel: n }) : (0, l.jsx)(nW, { channel: n }),
            t ? null : (0, l.jsx)(nf.A, { channel: n }),
            (0, l.jsx)(nx, { channelId: n.id }),
            (0, l.jsx)(nA, { channelId: n.id }),
            (0, l.jsx)(nV, { channel: n, isConjured: i }),
        ],
    });
}
var nX = t(320989);
let nq = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var nK = t(568598),
    n$ = t(198052),
    nQ = t(164617),
    nJ = t(355622),
    nZ = t(689874),
    n0 = t(631828),
    n1 = t(627363),
    n2 = t(91242),
    n3 = t(793480);
function n7(e) {
    let { channel: n } = e,
        t = (0, m.bG)([n2.A], () => n2.A.getFramesForChannel(n.id).find((e) => (0, nB.x1)(e)), [n.id]),
        i = (0, n1.YY)(t?.applicationId).data,
        s = (0, n3.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.conjureProjectId == null || !s) return null;
    let r = z.intl.string(nd.default["/TlGcK"]);
    return (0, l.jsx)(nm.Ay.Icon, {
        icon: n_.DoorExitIcon,
        tooltip: r,
        "aria-label": r,
        onClick: () => (0, nD.A)(t.id),
    });
}
var n9 = t(828488),
    n6 = t(939249),
    n5 = t(408278),
    n8 = t(624479),
    n4 = t(858899),
    te = t(661531),
    tn = t(39623),
    tt = t(952270),
    ti = t(381849),
    tl = t(549973),
    ts = t(957565),
    tr = t(935208),
    ta = t(181041),
    to = t(256331),
    td = t(623562),
    tc = t(403862);
let tu = ["high", "medium", "low"],
    th = s.memo(function (e) {
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
                              tu.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: tc.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: tc.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: tc.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tc.a7,
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
                            className: tc.a7,
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
                            className: tc.a7,
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
    tm = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = tr.default.extractTimestamp(n.startMessageId),
            s = tr.default.extractTimestamp(n.endMessageId),
            r = (0, tl.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, ti.WR)({ seconds: a, getFormatter: ti.i }),
            d = (0, m.bG)([ta.A], () => ta.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(n6.D, {
            className: tc.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: tc.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: tc.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(n5.K, {
                            icon: n8.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, ts.C)(JSON.stringify(n, null, 2), () =>
                                        (0, n4.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: tc.FR,
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
                        className: tc.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: tc.JP,
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
                    className: tc.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: tc.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tc.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: tc.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: tc.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tc.a7,
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
                                    className: tc.a7,
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
                                    className: tc.a7,
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
                (0, l.jsx)(th, { moderation: n.moderation ?? null }),
            ],
        });
    });
function tA(e) {
    let { channel: n } = e,
        t = (0, m.bG)([ta.A], () => ta.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([ta.A], () => ta.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([to.A], () => to.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, td.xI)(n.id, e.id, { cacheType: "channel" });
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tc.zr,
        children: [
            (0, l.jsxs)("div", {
                className: tc.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tc.gn,
                        children: [
                            (0, l.jsx)(nh.ChatIcon, { color: te.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: tc.y6,
                        children: (0, l.jsx)(n5.K, {
                            icon: r ? tn.EyeIcon : tt.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: td.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tc.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(tm, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: tc.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var tp = t(268218),
    tg = t(726249),
    tx = t(334738),
    tf = t(208882),
    tE = t(938764),
    tI = t(519480),
    tj = t(352123),
    tC = t(825244),
    ty = t(130696);
let tb = function (e) {
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
        className: ty.h2,
        children: [
            (0, l.jsx)("img", { className: ty.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: ty._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: ty.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(tC.E, {
                      className: ty.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(tC.E, {
                className: ty.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var t_ = t(683438),
    tv = t(689175),
    tN = t(761508),
    tT = t(765671),
    tS = t(902119),
    tR = t(22231),
    tM = t(66834),
    tO = t(573435),
    tL = t(101555),
    tP = t(548118),
    tD = t(714991),
    tk = t(776231),
    tw = t(345942),
    tU = t(71393),
    tG = t(486020),
    tF = t(149790),
    tH = t(682557),
    tB = t(524058);
let tV = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(n6.D, {
        onClick: n,
        className: tB.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tB.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tY(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tj.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tB.fc, { [tB.QX]: i }),
        children: (0, l.jsxs)(tL.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tL.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tR.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tB.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tH.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tL.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nM.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tB.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tW = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([tU.A], () => tU.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, tw.u)(n.guildId) : await tM.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tG.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tk.mZ)() }),
        c = tG.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tB.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tB.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tB.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tB.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tB.$f,
                            children: (0, l.jsx)(tO.Ay, {
                                mask: tO.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tB.SA,
                                    children: (0, l.jsx)(tP.Ay, {
                                        className: tB.rZ,
                                        iconSrc: c,
                                        guild: (0, tF.xi)(n),
                                        size: tP.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tB.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tB.DD,
                            children: [
                                (0, l.jsx)(tD.A, { className: tB.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tB.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tB.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tB.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tB.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tB.JX }),
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
                                        className: tB.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tB.Li }),
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
                            className: tB.PD,
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
                (0, l.jsx)(tY, { entry: n }),
            ],
        })
    );
});
var tz = t(946116),
    tX = t(844086),
    tq = t(770679);
function tK(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tT.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: tq.wx,
        children: [
            (0, l.jsx)("div", { className: tq.y2, children: (0, l.jsx)(tS.A, {}) }),
            (0, l.jsx)("div", {
                className: tq.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tq.VW, { [tq.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: tq.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: tq.MT,
                            children: (0, l.jsx)(t_.I, {
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
let t$ = function (e) {
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
        className: tX.$$,
        children: (0, l.jsxs)(tv.Gt, {
            className: tX.XG,
            children: [
                (0, l.jsx)(tK, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tv.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(tN.V, {
                        className: tq.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                tN.V.Item,
                                { className: tq.YU, id: tz.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                tz.mU.ALL,
                            ),
                            (0, tz.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    tN.V.Item,
                                    { className: tq.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: tX.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: tq.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tX.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tW, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tV, { onClick: i }) : null,
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
var tQ = t(370876),
    tJ = t(28863),
    tZ = t(364522),
    t0 = t(792831),
    t1 = t(211862);
let t2 = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: tX.$$, children: (0, l.jsx)(g.y, { className: tX.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tJ.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: t1.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: t1.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tX.vY, children: d.map((e) => (0, l.jsx)(tW, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tX.$$,
        children: (0, l.jsxs)(tZ.Ar, {
            className: tX.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: t1.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t1.Dr,
                            children: [
                                (0, l.jsx)(n6.D, {
                                    onClick: r,
                                    className: t1.UE,
                                    children: (0, l.jsx)(t0.A, { direction: t0.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: t1.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(t_.I, {
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
var t3 = t(650583);
let t7 = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([tI.A], () => {
            let e = tI.A.getCurrentCategoryId(n.id),
                t = tI.A.getDirectoryEntries(n.id, e === tz.mU.ALL ? null : e),
                i = tI.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: tI.A.getDirectoryAllEntriesCount(n.id),
                isLoading: tI.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                (0, tx.ack)(
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
                          if (n !== tz.mU.ALL) return [{ entries: (0, tQ._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tQ.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tQ.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([tE.A], () => {
            let { mostRecentQuery: e, fetching: t } = tE.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: tE.A.getSearchResults(n.id, e) };
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
            (tf.Yc(n.id), tf.YS(n.id), E(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, tj.b)(n),
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
                                      currentCategoryId: r === tz.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === t3.dh.ENTER &&
            (tf.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (E(""), tf.BA(n.id));
    }
    return I
        ? (0, l.jsx)(t2, {
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
          ? (0, l.jsx)("div", { className: tX.$$, children: (0, l.jsx)(g.y, { className: tX.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tX.$$, children: (0, l.jsx)(tb, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(t$, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      tf.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var t9 = t(826673),
    t6 = t(93055),
    t5 = t(47167),
    t8 = t(688438),
    t4 = t(353428),
    ie = t(288254),
    it = t(873614),
    ii = t(649852),
    il = t.n(ii),
    is = t(789645),
    ir = t(163126),
    ia = t(182061),
    io = t(886393),
    id = t(307623),
    ic = t(660273),
    iu = t(804006),
    ih = t(707792),
    im = t(41402),
    iA = t(271456),
    ip = t(200273),
    ig = t(565846),
    ix = t(57907),
    iE = t(375500),
    iI = t(707653),
    ij = t(50268),
    iC = t(378570),
    iy = t(162199),
    ib = t(713608),
    i_ = t(473503),
    iv = t(901472),
    iN = t(267102),
    iT = t(474397),
    iS = t(486974),
    iR = t(39470);
function iM(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, iN.aL)(),
        r = z.intl.string(iR.default["Beo/7v"]),
        { firstMessage: a } = (0, i_.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nm.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, iC.iN)(n.id),
                      (0, iT.A)(),
                      (0, iv.z)(n.guild_id, d, n.id, {
                          modViewPanel: iS.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: ib.q,
              "aria-label": r,
          })
        : null;
}
var iO = t(780338),
    iL = t(782603),
    iP = t(607508),
    iD = t(914703),
    ik = t(37411);
function iw(e) {
    let { channel: n } = e,
        t = (0, iP.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([nl.A], () => null != n.guild_id && nl.A.isLurking(n.guild_id));
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
    return (0, l.jsx)(nT.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(iD.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nm.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === ik.CP.NO_MESSAGES ? iO.BellSlashIcon : iL.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var iU = t(747926);
function iG(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nT.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iF, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nm.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nM.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function iF(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, ic.A)(n, "Sidebar Overflow"),
        r = (0, iu.A)(n, "Sidebar Overflow"),
        a = (0, im.A)(n),
        o = (0, ix.A)(n),
        d = (0, iE.A)(n),
        c = (0, ia.A)(n),
        u = (0, ih.A)(n),
        h = (0, ig.A)(n.id),
        m = (0, ip.A)(n),
        A = (0, id.A)(n),
        p = (0, io.A)(n),
        g = (0, ij.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, iI.A)(n),
        f = (0, iA.A)(n),
        E = (0, ir.$)(1e3);
    function I() {
        (0, iC.iN)(n.id);
    }
    function j(e) {
        let t = il()(() => {
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
    return (0, l.jsxs)(nS.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nC.rX, {
                children: [s, (0, l.jsx)(nC.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: I })],
            }),
            (0, l.jsxs)(nC.rX, { children: [o, d] }),
            (0, l.jsxs)(nC.rX, { children: [m, a, h, f] }),
            (0, l.jsxs)(nC.rX, {
                children: [
                    (0, l.jsx)(nC.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nb.t,
                        trailingIndicator: { type: "icon", icon: nb.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I());
                        },
                    }),
                    (0, l.jsx)(nC.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nb.t,
                        trailingIndicator: { type: "icon", icon: nb.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nC.rX, { children: [x, c, u, A] }),
            (0, l.jsx)(nC.rX, { children: r }),
            (0, l.jsxs)(nC.rX, { children: [p, g] }),
        ],
    });
}
function iH(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nm.Ay.Icon, {
            icon: is.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, iU.xu)((0, iy.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iw, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(iM, { channel: n }) : null,
                  (0, l.jsx)(iG, { channel: n }),
                  i,
              ],
          });
}
var iB = t(31717),
    iV = t(853742),
    iY = t(85190);
function iW(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([tU.A], () => tU.A.getGuild(i?.getGuildId())),
        o = (0, t5.Ay)(i),
        d = (0, ie.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iV.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(it.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iH, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iB.C.ChannelMessage }),
            (0, l.jsx)(nm.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t4.zF)({
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
                className: iY.T,
                children: (0, l.jsx)(t8.A, { channel: i, guild: a, chatInputType: nJ.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iz = t(925166),
    iX = t(76268),
    iq = t(605117),
    iK = t(857253),
    i$ = t(872363),
    iQ = t(73153);
let iJ = function (e, n) {
    iQ.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var iZ = t(561446),
    i0 = t(300233),
    i1 = t(499211),
    i2 = t(468689),
    i3 = t(529942),
    i7 = t(739455),
    i9 = t(709017);
function i6(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: i9.t7,
        children: (0, l.jsxs)("div", {
            className: i9.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: i9.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: i9.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: i9.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, i3.rf)(n),
                                        i2.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, i7.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var i5 = t(599941),
    i8 = t(29385),
    i4 = t(950344),
    le = t(217530),
    ln = t(162093),
    lt = t(325348);
function li(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, i8.e)({ guildId: n, channelId: t }),
        r = (0, i5.uk)(n),
        a = (0, i5.Tq)(n),
        o = (0, m.bG)([tU.A], () => tU.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, t5.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, i4.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: lt.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: lt.__invalid_spinner }),
          })
        : (0, l.jsxs)(tZ.Ar, {
              className: lt.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: lt.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: lt.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(le.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  ln.A,
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
var ll = t(284252);
function ls(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([np.Ay], () => np.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([ta.A], () => (ta.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(nm.In, {
        onClick: I.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nh.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? ll.q : void 0,
        selected: t,
        badge: r,
    });
}
var lr = t(287074),
    la = t(306788),
    lo = t(863922),
    ld = t(822074),
    lc = t(521732);
function lu(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, m.bG)([ld.A], () => ld.A.shouldShowTopicsBar());
    return (0, l.jsx)(nm.Ay.Icon, {
        icon: la.K,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: lc.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, lo.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var lh = t(947094),
    lm = t(919577),
    lA = t(207777),
    lp = t(422844),
    lg = t(435470),
    lx = t(892110),
    lf = t(45494);
function lE(e) {
    let { channel: n } = e,
        t = (0, lg.S4)(n),
        i = (0, m.bG)([lh.A], () => lh.A.hasHidden(n.id)),
        s = (0, lx.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, lp.R)(n.id),
        d = (0, m.bG)(
            [lA.A, lf.A],
            () => !!(lA.A.getThreadIds(n.id, r, a, o).length > 0) || !!(lf.A.getThreads(n.id, r, a, o).length > 0),
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
    return (0, l.jsx)(nm.In, {
        tooltip: u,
        icon: nR.CircleInformationIcon,
        onClick: function () {
            return lm.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lI = t(290136),
    lj = t(975571),
    lC = t(490094);
function ly() {
    let e = z.intl.string(lC.default.pdipXI);
    return (0, l.jsx)(nm.In, {
        tooltip: e,
        icon: lI.CircleQuestionIcon,
        onClick: function () {
            window.open(lj.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lb = t(742589),
    l_ = t(43105),
    lv = t(428689),
    lN = t(978940),
    lT = t(387755),
    lS = t(730852),
    lR = t(641703),
    lM = t(379848),
    lO = t(753727),
    lL = t(625075),
    lP = t(222692),
    lD = t(442353),
    lk = t(470710),
    lw = t(186111),
    lU = t(360906),
    lG = t(994500),
    lF = t(977997),
    lH = t(818023),
    lB = t(49999),
    lV = t(731854);
class lY extends s.PureComponent {
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
                : lU.Ay.supports(lV.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lL.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nm.Ay.Icon, { icon: lv.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(nm.Ay.Icon, {
            ref: this.iconRef,
            icon: lN._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lM.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(l_.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lH.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lB.i.USER_DISMISS),
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
            return lT.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lD.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lS.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, t9.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lB.i.AUTO }),
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
        (0, lD.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lP.A)();
    };
}
function lW(e) {
    let { channel: n } = e,
        t = (0, lO.A)(),
        i = (0, m.bG)([n$.A], () => n$.A.getMode(n.id)),
        s = (0, m.bG)([lF.A], () => lF.A.isInChannel(n.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lk.A], () => ({
            callActive: lk.A.isCallActive(n.id),
            callUnavailable: lk.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lG.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lG.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lG.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, iN.Us)(),
        g = [],
        x = (0, lR.A)(n.id),
        f = (0, m.bG)([lw.A], () => lw.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lY, {
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
var lz = t(452015),
    lX = t(765178),
    lq = t(231483),
    lK = t(544231),
    l$ = t(338510),
    lQ = t(151119),
    lJ = t(278941),
    lZ = t(665909),
    l0 = t(327337);
let l1 = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, l$.u)(n.id),
        r = (0, lQ.S)(n.id),
        a = (0, lJ.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lw.A], () => lw.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lX.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lK.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lZ.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lZ.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lX.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lK.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lZ.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lZ.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lK.xi)(n.id, [a.id]),
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
                    { modalKey: l0.V },
                ),
                (0, lZ._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lZ.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nm.Ay.Icon, {
                  icon: lq.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var l2 = t(262763),
    l3 = t(406704),
    l7 = t(576705);
let l9 = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lO.A)(),
        i = (0, m.bG)([lF.A], () => lF.A.isInChannel(n.id)),
        r = (0, m.bG)([lF.A], () => !u().isEmpty(lF.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([l7.A], () => l7.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, i1.A)(n.id),
        d = (0, l3.Id)(n),
        { enabled: c } = l3.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            l2.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(nm.Ay.Icon, {
              icon: lN._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var l6 = t(812991),
    l5 = t(47675),
    l8 = t(999291);
function l4() {
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
function se(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([np.Ay], () => np.Ay.getSection(n.id, n?.isDM())),
        s = (0, l8.Ay)(n.getRecipientId()),
        r = l4(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nm.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: l6.n,
        onClick: function () {
            ((0, l5.am)({ displayProfile: s, isProfileOpen: !a }), I.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let sn = {};
class st extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            sn[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = sn[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return sn;
    }
}
let si = new st(iQ.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = sn[t];
        return null == i ? ((sn[t] = new Set()), sn[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != sn[n.id] && !n.unavailable && (delete sn[n.id], !0);
    },
});
var sl = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    ss = t(376943),
    sr = t(394953),
    sa = t(683063),
    so = t(403581),
    sd = t(241541),
    sc = t(709066),
    su = t(87664),
    sh = t(247676),
    sm = t(695526),
    sA = t(927813),
    sp = t(427358),
    sg = t(945810);
let sx = (0, sg.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var sf = t(280450),
    sE = t(851746),
    sI = t(103411);
function sj() {
    let e = (0, sI.m)(),
        n = (0, m.bG)([sE.A], () => sE.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, m.bG)([sf.default], () => sf.default.getId()),
    };
}
var sC = t(315629),
    sy = t(744413),
    sb = t(303682),
    s_ = t(224370),
    sv = t(544879);
function sN(e) {
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
    return (0, l.jsxs)(sC.h, {
        color: "nitro-pink",
        className: a()(s_.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: s_.lj,
                children: [
                    (0, l.jsx)("img", { className: s_.Dp, src: sv.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: s_.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: s_.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: s_.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(n6.D, {
                        className: s_.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            t(lB.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(is.P, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s_.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (t(lB.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, sy.jM)({
                                  startingScreen: sb.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sT = t(349420);
let sS = { cooldownDurationMs: 60 * sA.A.Millis.DAY };
function sR(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: sx.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = sj(),
                l = (0, m.bG)(
                    [lG.A, ee.default, sp.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i) return !1;
                            let n = ee.default.getUser(e);
                            if (null == n || lG.A.isBlockedOrIgnored(e)) return !1;
                            let t = sp.A.getUserAffinity(e);
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
    return (0, l.jsx)(lM.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sS,
        groupName: lB.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sN, {
                      className: sT.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sM = t(403362);
t(696101);
let sO = [],
    sL = er.Ay.getEnableHardwareAcceleration();
function sP(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([lG.A], () => lG.A.getNickname(n.id)),
        h = (0, su.A)(n.id),
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
                    shouldAnimateStatus: sL,
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
function sD(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sk(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(L.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lG.A, ee.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(sM.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lG.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sO,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sO });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sD,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, sh.A)({ useNitroCapExperiment: !0 }),
        h = (0, sm.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tZ.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sR, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(sa.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(so.t, {
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
                                o && (0, l.jsx)(sc.A, { type: sc.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sP,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lz.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: sd.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lz.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sw = t(322338),
    sU = t(898029),
    sG = t(36537);
function sF() {
    return (0, l.jsx)("div", {
        className: sG.zt,
        children: (0, l.jsx)("header", {
            className: sU.wL,
            children: (0, l.jsxs)("div", {
                className: sU.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sU.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sU.u1,
                            itemClassName: sU.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sH = t(138298),
    sB = t(940382),
    sV = t(747376),
    sY = t(718734),
    sW = t(163328),
    sz = t(425557),
    sX = t(270003),
    sq = t(150934),
    sK = t(452027),
    s$ = t(95477),
    sQ = t(281595),
    sJ = t(465532),
    sZ = t(579872),
    s0 = t(119031),
    s1 = t(408018),
    s2 = t(845207),
    s3 = t(822610),
    s7 = t(915089),
    s9 = t(314307),
    s6 = t(636922),
    s5 = t(931664),
    s8 = t(631576),
    s4 = t(885386),
    re = t(232835),
    rn = t(522602),
    rt = t(806150),
    ri = t(518960),
    rl = t(753738);
function rs(e, n) {
    return { type: e, message: n ?? null };
}
function rr(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var ra = t(659617),
    ro = t(474078),
    rd = t(636537),
    rc = t(152367),
    ru = t(147087);
async function rh(e) {
    try {
        let n = await rd.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, rd.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var rm = t(55294),
    rA = t(143161),
    rp = t(909833);
let rg = nJ.oU.THREAD_CREATION;
function rx(e) {
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
                      className: rA.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iB.C.FirstThreadMessage }),
                          (0, l.jsx)(rf, { parentChannelId: n }),
                          (0, l.jsx)(rE, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function rf(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iB.A.getThreadSettings(n),
                t = iB.A.getDraft(n, iB.C.FirstThreadMessage).trim(),
                i = rn.A.getUploads(n, iB.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sZ.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, iU.bA)(n);
                      },
                  })
                : (0, iU.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nm.Ay, {
        toolbar: (0, l.jsx)(nm.Ay.Icon, { icon: is.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nm.Ay.Icon, { icon: sW.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nm.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function rE(e) {
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
            let t = (0, m.bG)([iB.A], () => iB.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sJ.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, s1.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iB.A.getDraft(e.id, iB.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, s1.ur)(l)), n(iB.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iB.A.addChangeListener(t),
                        () => {
                            iB.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, ra.EN)(t),
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
                h = (0, ru.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = re.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await rh(e);
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
                                icon: rc.D,
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
                                  children: (0, l.jsx)(n5.K, {
                                      icon: rc.D,
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
                p = (0, rm.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: iU.GS,
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
                                (l = s5.A.getStickerPreview(n.id, rg.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = rn.A.getUploads(n.id, iB.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? rs(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? rs(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, rt.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: rg,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), rs(1, (0, rl.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(rs(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, s8.x5)(n.id, rg.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, ra.Iy)(c, g) ? sz.t : sW.y;
    return (0, l.jsx)("div", {
        className: rA.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(rA.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: rA.Zd,
                children: [
                    (0, l.jsx)(tZ.Ip, {
                        className: rA.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: rA.bv,
                            children: [
                                (0, l.jsxs)(s9.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(rp.P0, rA.P0),
                                            children: (0, l.jsx)(b, { className: rp.Kk }),
                                        }),
                                        (0, l.jsxs)(sX.n, {
                                            children: [
                                                (0, l.jsx)(rj, {
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
                                                (0, l.jsx)(rI, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ry, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: rA.Eh,
                        children: [
                            (0, l.jsx)(rC, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(s0.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: rA.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rI(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, ra.Iy)(t, s),
        a = (0, l.jsx)(sq.S, {
            disabled: s === ra.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === ra.jk.Disabled
        ? null
        : (0, l.jsx)(sK.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rj(e) {
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
        h = rr(r, { content: u }),
        m = (0, ra.l1)(n, t),
        A = null != t && !d,
        p = (0, s7.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(s$.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, ro.A)(e, !1) }), "" !== e ? M.A.startTyping(n.id) : M.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, ro.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rC(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sJ.A.saveDraft(n.id, t, iB.C.FirstThreadMessage),
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
    let x = (0, m.bG)([l7.A], () => l7.A.can(eo.xBc.ATTACH_FILES, n)),
        f = rr(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s3.A, { channelId: n.id, type: rg, canAttachFiles: x }),
            (0, l.jsx)("div", { className: rA.xN, children: (0, l.jsx)(sQ.U, { error: f }) }),
            (0, l.jsx)(s2.Ay, {
                type: rg,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(rA.gM, rA.Yy),
                innerClassName: a()(rA.SL, { [rA.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: ri.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function ry(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([re.A], () => (null == t ? null : re.A.getMessage(n.id, t))),
        s = s4.hH.useSetting();
    return null != i
        ? (0, l.jsx)(s6.A, {
              className: rA.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rb = t(494208),
    r_ = t(40389),
    rv = t(148494),
    rN = t(56562);
function rT(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nT.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(rS, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nm.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nM.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function rS(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, ia.A)(n),
        r = (0, ih.A)(n),
        a = (0, ig.A)(n.id),
        o = (0, ip.A)(n),
        d = (0, ij.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, io.A)(n),
        h = (0, id.A)(n),
        A = (0, ic.A)(n, "Toolbar Overflow"),
        p = (0, iu.A)(n, "Toolbar Overflow"),
        g = (0, im.A)(n),
        x = (0, r_.A)(n),
        f = (0, iI.A)(n),
        E = (0, iA.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(nC.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rv.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rN.vx.INSTANT });
                  },
              })
            : null,
        j = s4.SY.useSetting(),
        C = (0, m.bG)([lF.A], () => !u().isEmpty(lF.A.getVoiceStatesForChannel(n.id))),
        y = (0, m.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nS.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nC.rX, { children: [A, x] }),
            (0, l.jsxs)(nC.rX, {
                children: [
                    I,
                    o,
                    g,
                    a,
                    !j || C || y
                        ? null
                        : (0, l.jsx)(nC.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, iU.JA)(n);
                              },
                          }),
                    E,
                ],
            }),
            (0, l.jsxs)(nC.rX, { children: [f, s, r, h] }),
            (0, l.jsx)(nC.rX, { children: p }),
            (0, l.jsxs)(nC.rX, { children: [c, d] }),
        ],
    });
}
var rR = t(332456),
    rM = t(806411),
    rO = t(973854),
    rL = t(62502);
function rP(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([tU.A], () => tU.A.getGuild(d?.getGuildId())),
        h = (0, t5.Ay)(d),
        A = (0, ie.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lF.A], () => null != n && !u().isEmpty(lF.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (iQ.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, iC.N9)(n, { source: ik.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rR.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rM.q)(d.id), channel_view: o }),
                (0, rO.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(it.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(iH, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iB.C.ChannelMessage }),
            (0, l.jsx)(nm.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t4.zF)({
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
                        null != d && (0, iC.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rL.T,
                children: (0, l.jsx)(t8.A, { channel: d, guild: c, chatInputType: nJ.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rD = t(210714),
    rk = t(707554),
    rw = t(140735),
    rU = t(590180),
    rG = t(372320),
    rF = t(562153);
let rH = (0, sg.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rB(e) {
    return rH.useConfig({ location: e }).enabled;
}
var rV = t(215530),
    rY = t(549831),
    rW = t(736653),
    rz = t(311016),
    rX = t(480335),
    rq = t(713517),
    rK = t(397562),
    r$ = t(183555),
    rQ = t(718019),
    rJ = t(977059),
    rZ = t(915614),
    r0 = t(308244),
    r1 = t(743987),
    r2 = t(900179),
    r3 = t(946356),
    r7 = t(465829),
    r9 = t(35241),
    r6 = t(587168),
    r5 = t(442228),
    r8 = t(744808);
let r4 = (0, sg.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var ae = t(827428);
function an(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function at(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = r4.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, l5.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: ae.lS,
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
              className: ae.qr,
              children: (0, l.jsx)(n6.D, {
                  onClick: o,
                  className: ae.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: ae.xQ, children: [(0, l.jsx)(r8.A, { frame: i, filterLayer: an }), d] })
        : d;
}
var ai = t(518477),
    al = t(996988),
    as = t(207634),
    ar = t(561419),
    aa = t(396095);
function ao(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rz.A)(n.id),
        o = (0, l8.Ay)(n.id),
        d = (0, rW.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, r$.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rK.A)(u, o, ai.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rq.A)(m);
    function g() {
        (0, nG.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(r$.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(r3.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: al.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(ar.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tZ.d_, {
                        className: i ? ar.BE : void 0,
                        children: [
                            (0, l.jsx)(r6.A, { children: (0, l.jsx)(r9.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: ar.wx,
                                children: [
                                    (0, l.jsx)(rZ.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: al.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rQ.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: as.T[al.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: aa.rf,
                                children: [
                                    (0, l.jsx)(r7.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rF.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rJ.A, {
                                            displayProfile: o,
                                            themeType: al.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r5.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(r2.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(r1.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(r3.A.Overlay, {
                                              className: aa.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(r2.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(r0.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(r2.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(r1.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(at, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rX.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var ad = t(331322),
    ac = t(249790),
    au = t(254828),
    ah = t(783123),
    am = t(966430);
function aA(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, l8.Ay)(n.id),
        o = (0, rW.Ay)(),
        d = (0, m.bG)([lG.A], () => lG.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, r$.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rK.A)(c, a, ai.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(r$.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(r3.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: al.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tZ.d_, {
                    children: (0, l.jsxs)("div", {
                        className: am.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: am.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: am.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: am.N1,
                                        children: [
                                            (0, l.jsx)(ac.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rF.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ad.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(ah.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, l5.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(au.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, l5.Wn)({
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
var ap = t(941143),
    ag = t(717421),
    ax = t(31956),
    af = t(673843),
    aE = t(594832),
    aI = t(321191),
    aj = t(679492),
    aC = t(439053),
    ay = t(312381),
    ab = t(657538),
    a_ = t(984545),
    av = t(193738),
    aN = t(413737),
    aT = t(394816),
    aS = t(695366),
    aR = t(922590),
    aM = t(821269),
    aO = t(131607),
    aL = t(326084),
    aP = t(834708),
    aD = t(154486);
let ak = (0, sg.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var aw = t(158390),
    aU = t(906573);
let aG = new aw.A(30 * sA.A.Millis.SECOND, 5 * sA.A.Millis.MINUTE, !0),
    aF = 0;
async function aH() {
    if (aU.A.shouldFetch() && !(Date.now() < aF)) {
        iQ.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
        try {
            let e = await rd.Bo.get({
                url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            (aG.succeed(),
                (aF = 0),
                iQ.h.dispatch({
                    type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                    version: String(e.body?.version ?? "0"),
                    targetIds: Array.isArray(e.body?.target_ids) ? e.body.target_ids.map((e) => String(e)) : [],
                }));
        } catch {
            ((aF = Date.now() + aG.fail()),
                iQ.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
        }
    }
}
var aB = t(504492);
function aV(e) {
    let { targetUserId: n } = e,
        { isInTreatment: t } = {
            isInTreatment: ak.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n) ?? null, [n]),
        r = (0, aP.d)(i),
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
            } = (0, m.cf)([aU.A], () => {
                let n = Number(aU.A.getVersion());
                return {
                    isDismissed: null != e && aU.A.isDismissedFor(e),
                    hasFetched: aU.A.hasFetched(),
                    version: Number.isFinite(n) ? n : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e && aH();
                }, [e]),
                {
                    isDismissed: n,
                    hasFetched: t,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (aU.A.isDismissedFor(e) ||
                                (iQ.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                rd.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? n : null);
    return a && d && !o && null != i ? (0, l.jsx)(aY, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aY(e) {
    let { targetUser: n, version: i, onDismiss: r } = e,
        a = (0, aD.p)(n.id),
        [o, d] = (0, aO.RF)(a ? A.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lB.m.SIDEBAR, !0),
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
                                (0, aL.xm)([n.id]),
                            ]),
                            s = i.get(n.id) ?? aL.o.FAIL;
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
    return (0, l.jsx)(sN, {
        className: aB.K,
        analyticsLocation: L.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var aW = t(93246),
    az = t(351906),
    aX = t(383199),
    aq = t(559506),
    aK = t(361311),
    a$ = t(931481),
    aQ = t(791556),
    aJ = t(501193),
    aZ = t(383448),
    a0 = t(646986),
    a1 = t(243166),
    a2 = t(62010),
    a3 = t(123292),
    a7 = t(840411);
let a9 = (0, sg.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var a6 = t(666810),
    a5 = t(394300),
    a8 = t(575593),
    a4 = t(498032),
    oe = t(44120),
    on = t(75678),
    ot = t(317560),
    oi = t(99161),
    ol = t(661492),
    os = t(146423),
    or = t(662349),
    oa = t(479026),
    oo = t(636374),
    od = t(699976),
    oc = t(202541),
    ou = t(733484),
    oh = t(880465);
function om(e) {
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
        { trackUserProfileWishlistAction: g } = (0, r$.NJ)(),
        x = rB("DMSidePanelWishlistItemCard") ? od.y.SIZE_78 : od.y.SIZE_90,
        f = od.Z[x],
        E = s.useCallback(() => {
            (g({
                action: ai.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        I = s.useCallback(() => {
            (g({
                action: ai.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
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
        } = (0, oo.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: E, onPurchaseClick: I }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: ou.kL,
        children: (0, l.jsxs)(os.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(ou.Nr, o),
            skuPreviewStyle: a()(ou.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = b ? (0, ol.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, ol.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(a4.N, { className: ou.Pf }),
                y &&
                    (0, l.jsx)(or.A, {
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
function oA(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, oi.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: oc.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, ot.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: oc.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(om, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function op(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, oe.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: oc.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, oa.e)({ sku: n, giftRecipient: t, giftingOrigin: oc.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(ou.ML, {
                    [ou.M]: n?.tenantMetadata?.collectibles?.type === a8.R.AVATAR_DECORATION,
                    [ou.Hm]: n?.tenantMetadata?.collectibles?.type === a8.R.PROFILE_EFFECT,
                    [ou.hH]: n?.tenantMetadata?.collectibles?.type === a8.R.PROFILE_FRAME,
                    [ou.qF]: n?.tenantMetadata?.collectibles?.type === a8.R.NAMEPLATE,
                    [ou.l2]: n?.tenantMetadata?.collectibles?.type === a8.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(om, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function og(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, on.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: oc.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === aE.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(om, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(oh.MO, { [ou.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(ou.fi, { [ou.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(ou.p7, { [ou.SW]: h.length >= 10, [ou.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function ox(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(oA, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(op, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(og, { sku: n, ...t });
        default:
            return null;
    }
}
var of = t(927578),
    oE = t(249203),
    oI = t(919769),
    oj = t(695904),
    oC = t(116331),
    oy = t(713348),
    ob = t(535089),
    o_ = t(815637);
function ov(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, r$.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, oC.A)(t),
        g = (0, m.bG)([oE.A], () => oE.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: ai.RP.WISHLIST }), i());
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
            let e = f.slice(0, 3).map((e) => ({ item: e, source: aE.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => of.Ay.isPremiumSku(e.skuId));
                if (!of.Ay.isPremiumAtLeast(t.premiumType, oc.PremiumTypes.TIER_2) && !n) {
                    let n = a5.A.fromSKU((0, a7.rI)());
                    null != n && e.push({ item: n, source: aE.uS.POPULAR });
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
        C = (0, ob.A)({ wishlistId: r ?? null, onAction: E, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                I.map((e, n) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              ox,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, oI.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sM.Vq),
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
              children: (0, l.jsxs)(r3.A.Overlay, {
                  ref: C,
                  className: o_.kL,
                  children: [
                      p && (0, l.jsx)(oj.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: o_.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: o_.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(a2.E, {
                                              type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: A }) },
                                              variant: "primary",
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(a3.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rk.F, { children: (0, l.jsx)("div", { className: o_.vY, children: y }) }),
                  ],
              }),
          });
}
function oN(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = a9.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, oy.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(a6.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(ov, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
    });
}
function oT(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lG.A], () => ({
            relationshipType: lG.A.getRelationshipType(n.id),
            originApplicationId: lG.A.getOriginApplicationId(n.id),
        })),
        h = (0, aR.fi)(n.id),
        A = (0, aM.q)({ userId: n.id }),
        p = (0, m.bG)([az.A], () => az.A.hidePersonalInformation),
        g = (0, m.bG)([aI.A], () => aI.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([aI.A], () => ({ defaultWishlistId: aI.A.getFirstWishlistId(n.id) })),
        { wishlist: E, isFetching: I } = (0, aE.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, af.A)(E);
    let j = s.useMemo(() => E?.items.filter((e) => !e.isOwned) ?? null, [E]);
    return (0, l.jsxs)("div", {
        className: aa.rf,
        children: [
            (0, l.jsx)(aq.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: aa.pq,
                children: [
                    (0, l.jsx)(r7.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rF.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(a1.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rJ.A, {
                            displayProfile: i,
                            themeType: al.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aQ.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(r3.A.Overlay, {
                    children: (0, l.jsx)(a$.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    r3.A.Overlay,
                    {
                        children: (0, l.jsx)(a$.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aZ.A, { user: n }),
            i?.private &&
                (0, l.jsx)(r3.A.Overlay, { children: (0, l.jsx)(aJ.A, { username: rF.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(r3.A.Overlay, {
                    className: aa.Lw,
                    children: (0, l.jsx)(r2.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: aS.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aW.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r5.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(r2.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(r1.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: aa.kR,
                children: [
                    o && x && (0, l.jsx)(ab.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(a0.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aX.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(r2.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aK.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(r3.A.Overlay, {
                              className: aa.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(r2.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(r0.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aX.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(r2.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aK.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(r2.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(r1.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(oN, {
                            profileOwner: n,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: I,
                            onClick: () => {
                                d?.({ tabSection: ai.RP.WISHLIST });
                            },
                            canSeeWishlist: null != E,
                        }),
                    r.isDM() && (0, l.jsx)(aV, { targetUserId: n.id }),
                ],
            }),
        ],
    });
}
var oS = t(114212),
    oR = t(913453),
    oM = t(229187),
    oO = t(21241),
    oL = t(503062),
    oP = t(51943),
    oD = t(847374),
    ok = t(320448),
    ow = t(723200);
function oU(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, r$.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? oD.a : ok._;
    return (0, l.jsxs)("section", {
        className: ow.uW,
        children: [
            (0, l.jsxs)(n6.D, {
                className: a()(ow.wx, ow.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(ow.p_, r), children: i }),
        ],
    });
}
var oG = t(341278);
function oF(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, r$.NJ)(),
        r = (0, ir.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, oR.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(r3.A.Overlay, {
              className: oG.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oU, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oG.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  oP.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, tw.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oO.A, { className: oG.yF }),
                  c &&
                      (0, l.jsx)(oU, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oG.p_,
                          onExpand: () => (0, oM.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oG.nC,
                                                children: [
                                                    (0, l.jsx)(oS.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(oS.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            oL.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, nG.openUserProfileModal)({
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
function oH(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, l8.Ay)(n.id),
        c = (0, rW.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        p = (0, r$.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rK.A)(A, d, ai.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rq.A)(g),
        E = (0, aj.fC)(),
        I = (0, rG.A)(d?.profileFrame?.skuId);
    (0, ax.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, ag.z)({ opacity: +(null != E.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, nG.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([aI.A], () => ({ defaultWishlistId: aI.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, aE.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, af.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: A,
        children: (0, l.jsx)(r$.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(aj.Hl, {
                value: E,
                children: (0, l.jsxs)(r3.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: al.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(ar.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(ay.A, {}),
                        null != E.interactionType && (0, l.jsx)(ap.animated.div, { style: j, className: ar.tB }),
                        (0, l.jsxs)(tZ.d_, {
                            className: a()(r && ar.BE, !r && null != I && ar.It),
                            children: [
                                (0, l.jsxs)(r6.A, {
                                    children: [
                                        (0, l.jsx)(av.A, { user: n, themeType: al.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(a_.A, { user: n }) : (0, l.jsx)(aN.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ar.wx,
                                    children: [
                                        (0, l.jsx)(rZ.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: al.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: ar.vK,
                                        }),
                                        (0, l.jsx)(aC.A, { className: ar.oR }),
                                        (0, l.jsx)(rQ.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: as.T[al.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aT.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: al.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(oT, {
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
                                        className: ar.sJ,
                                        children: (0, l.jsx)(ab.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: ar.vS,
                                        children: (0, l.jsx)(oN, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: ai.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oF, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(at, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rX.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != I && (0, l.jsx)(r8.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oB = t(901600);
function oV(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = l4(),
        [o, d] = (0, rV.A)(t),
        [c, u] = s.useState(!1),
        h = rB("UserProfileSidebarRenderer"),
        A = (0, l8.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rG.A)(p),
        x = (0, m.bG)([rU.A], () => rU.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rY.A)(i, e) : (0, rY.A)(t, void 0, e);
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
        E = rF.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oB.H : void 0,
        children: (0, l.jsx)(rk.F, {
            component: (0, l.jsx)(rw.A, {
                children: (0, l.jsx)(rk.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: E }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(aA, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(ao, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oH, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oY = t(522556),
    oW = t(225315),
    oz = t(684407),
    oX = t(95701),
    oq = t(919638),
    oK = t(763827),
    o$ = t(812771),
    oQ = t(506309),
    oJ = t(598748),
    oZ = t(681154),
    o0 = t(975460),
    o1 = t(587895),
    o2 = t(429913),
    o3 = t(201718),
    o7 = t(339580),
    o9 = t(633075),
    o6 = t(903209),
    o5 = t(382483),
    o8 = t(385113);
let o4 = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function de(e) {
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
                                ((t = s4.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, o5.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    t && (0, o5.i$)().catch(() => {});
                                }, [t]),
                                (i = (0, m.bG)([o8.A], () => o8.A.getFeaturedFetchState())),
                                (l = (0, m.bG)([o8.A], () => o8.A.getDeveloperFetchState())),
                                (r = (0, m.yK)([o8.A], () => o8.A.getFeaturedApplicationIds())),
                                (a = (0, m.yK)([o8.A], () => o8.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === o8.e.NOT_FETCHED ||
                                        i === o8.e.FETCHING ||
                                        (t && (l === o8.e.NOT_FETCHED || l === o8.e.FETCHING)),
                                }),
                            {
                                widgetApps: C,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oZ.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => n.has(e.id)) ?? [],
                                [e, n],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, m.bG)(
                                [o1.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            o1.A.isFetchingApplication(e) ||
                                            (null == o1.A.getApplication(e) && !o1.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, o2.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sM.Vq)
                                            .map((e) => [e.id, (0, o0.t)(e)])
                                            .filter(sM.QE)
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
                                ((p = (0, m.cf)([o7.A], () =>
                                    Object.fromEntries(y.map((e) => [e, o7.A.getUserIdentities(e)]).filter(sM.QE)),
                                )),
                                (g = (0, m.bG)([o7.A], () =>
                                    y.some((e) => o7.A.getFetchState(e) === o7.e.NOT_FETCHED || o7.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && o3.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: T } =
                                ((x = (0, m.cf)([aI.A], () =>
                                    Object.fromEntries(y.map((e) => [e, aI.A.getUserProfile(e) ?? null]).filter(sM.QE)),
                                )),
                                (f = (0, m.yK)([aI.A], () =>
                                    y.filter((e) => null == aI.A.getUserProfile(e) && !aI.A.isFetchingProfile(e)),
                                )),
                                (E = (0, m.bG)([aI.A], () => y.some((e) => aI.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, o6.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || E }),
                            S = (0, m.cf)(
                                [o8.A],
                                () => Object.fromEntries([...I].map((e) => [e, o8.A.getConfig(e)]).filter(sM.QE)),
                                [I],
                            ),
                            R = j || b || v || T,
                            M = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oZ.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let n = C[e.extra.application_id] ?? null;
                                        if (null == n) return e;
                                        let t = S[n.id] ?? null;
                                        if (null == t || null == t.surfaces[oJ.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, o9.E)(e, n.id)) ?? !1;
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
    return (0, l.jsx)(o4.Provider, { value: r, children: e.children });
}
var dn = t(900797),
    dt = t(890856),
    di = t(180170),
    dl = t(435738),
    ds = t(38055);
let dr = "content-inventory-feed",
    da = `${dr}-settings`,
    dd = `${dr}-toggle`;
var dc = t(569709);
function du(e) {
    return !e.currentTarget.contains(e.target);
}
let dh = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([dl.A], () => dl.A.hidden),
            h = (0, c.omit)((0, C.rm)(da), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(dd), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                du(e) ||
                    (0, j.L3)(e, async () => {
                        let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                        return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                    });
            }, []),
            x = s.useCallback(
                (e) => {
                    if (!du(e)) return u ? (0, di.Il)() : r();
                },
                [u, r],
            ),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(ds.A, { ...h }),
                    (0, l.jsx)("span", { className: dc.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(dn.t, { className: dc.wT })
                              : o
                                ? (0, l.jsx)(oD.a, { className: dc.wT })
                                : (0, l.jsx)(ok._, { className: dc.wT })),
                          (0, l.jsx)("span", { className: dc.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(dt.s, {
                      ...A,
                      className: a()(dc.N1, { [dc.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: dc.N1, onContextMenu: g, children: f }),
        });
    }),
    dm = function () {
        return null;
    };
var dA = t(963307),
    dp = t(424994);
let dg = et.default.track;
function dx(e, n) {
    dg(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: dp.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var df = t(468581),
    dE = t(808666),
    dI = t(414499),
    dj = t(323384),
    dC = t(55730),
    dy = t(765379),
    db = t(359549),
    d_ = t(284525),
    dv = t(482030),
    dN = t(583846),
    dT = t(506326);
t(333007);
var dS = t(342952),
    dR = t(315710),
    dM = t(276293),
    dO = t(935063),
    dL = t(778712),
    dP = t(696986),
    dD = t(97808),
    dk = t(738188),
    dw = t(983851),
    dU = t(31300),
    dG = t(308528),
    dF = t(401843),
    dH = t(375499),
    dB = t(429433),
    dV = t(324688);
let dY = (0, oX.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dW(e) {
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
        [p, g] = s.useState((0, s1.x7)("")),
        x = nJ.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(s2.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(dV.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dY,
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
                : (t(n), A(""), g((0, s1.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dz(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rW.Ay)(),
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
        (0, l.jsx)(nT.Y, {
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
                            children: (0, l.jsx)(dB.C, {
                                messageId: eo.dJq,
                                channel: dY,
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
                        className: dV.mJ,
                        children: (0, l.jsx)(dH.A, {
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
var dX = t(402216),
    dq = t(822123),
    dK = t(409626),
    d$ = t(692969),
    dQ = t(711589),
    dJ = t(607407),
    dZ = t(832163),
    d0 = t(533562),
    d1 = t(805901),
    d2 = t(565645);
t(90295);
var d3 = t(7584);
(t(850992), t(690521));
var d7 = t(806931),
    d9 = t(307731),
    d6 = t(866780);
function d5(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rq.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(n6.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(d1.c, {
                config: dH.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(ap.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(d2.A, {
                            className: a()(d6.Zg, r, { [d6.c4]: t }),
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
(d9.EmojiIntention.CHAT,
    [
        d3.Ay.getByName("thumbsup"),
        d3.Ay.getByName("eyes"),
        d3.Ay.getByName("laughing"),
        d3.Ay.getByName("watermelon"),
        d3.Ay.getByName("fork_and_knife"),
        d3.Ay.getByName("yum"),
    ].filter(sM.Vq));
var d8 = t(636585),
    d4 = t(543465),
    ce = t(607567),
    cn = t(774926),
    ct = t(20805),
    ci = t(22869),
    cl = t(623671),
    cs = t(428249),
    cr = t(327098),
    ca = t(576757),
    co = t(202195),
    cd = t(140651),
    cc = t(345394);
let cu = function (e) {
    let { children: n } = e,
        [t, i] = (0, aO.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lB.i.USER_DISMISS);
    }, [i]);
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(l_.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: cc.A },
                  }),
              ],
          });
};
var ch = t(315246),
    cm = t(866323),
    cA = t(252392);
let cp = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, cm.p)(
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
                (0, l.jsx)(ap.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(cA.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(cA.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var cg = t(381941),
    cx = t(231188);
let cf = (0, tp.Fe)({
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
    cE = s.createContext(void 0);
function cI(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, dR.tj)(t),
        (0, l.jsx)(cE.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: cx.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function cj(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, cd.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(cx.ZK, e, i), style: s, children: n }),
        })
    );
}
function cC(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: cx.$m, children: n });
}
function cy(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [I, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [l7.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && l7.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, co.A)(t),
                o = (0, t5.Ay)(a),
                { needSubscriptionToAccess: d } = (0, i1.A)(n?.id),
                c = (0, m.bG)([tU.A], () => (null != a ? tU.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([ce.Ay], () => (null != a ? ce.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lF.A], () => lF.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && d4.Ay.isChannelMuted(null, n),
                            i = lG.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(dk.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: cx.vb,
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
                            className: cx.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(n6.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (E.A.updateChatOpen(a.id, !0), (0, iC.iN)(a.id), i?.(a));
                                        },
                                        className: cx.I3,
                                        children: [
                                            (0, l.jsx)(tP.Ay, {
                                                guild: c,
                                                size: tP.Ay.Sizes.SMOL,
                                                className: cx.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(ok._, {
                                                size: "xxs",
                                                color: te.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dw.H, { size: "xs", color: te.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: cx.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(d8.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dD.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dL._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: cx.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dP.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      l2.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dU.k : dw.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, cr.A)(h),
        L =
            ((n = O),
            (t = (0, m.bG)([tU.A], () => tU.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, t5.Ay)(i)),
            null != n && null != t && null != i && oX.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: cx.kP,
                              children: [
                                  (0, l.jsxs)(n6.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, iC.iN)(i.id),
                                      className: cx.I3,
                                      children: [
                                          (0, l.jsx)(tP.Ay, {
                                              guild: t,
                                              size: tP.Ay.Sizes.SMOL,
                                              className: cx.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(ok._, {
                                              size: "xxs",
                                              color: te.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dM.N, { size: "xs", color: te.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: cx.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(d8.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dD.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: dL._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: cx.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dP.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != M && 0 === p.length ? [M] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rF.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, t5.Ay)(o, !0),
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
                    surface_type: dp.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, t9.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                I)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dG.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: dp.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, t9.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await dG.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? dp.PA.DM_REACTION_MESSAGE_SENT : dp.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, cs.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: cg.Hx.CONTENT_INVENTORY_MEMBERLIST,
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
            (0, l.jsx)(cp, { sent: T, shown: v, className: cx.Jt }),
            X ??
                (0, l.jsx)(cu, {
                    children: (0, l.jsxs)("div", {
                        className: cx.T7,
                        children: [
                            (0, l.jsx)(cb, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dz, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? cx.P2 : cx.VE,
                children: [
                    (0, l.jsx)(dW, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: I ? o : void 0,
                        showEmojiButton: null != X,
                        className: cx.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(n6.D, {
                                          className: cx.wD,
                                          onClick: q,
                                          children: I
                                              ? (0, l.jsx)(dM.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dO.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(n6.D, {
                            onClick: () => K(!1),
                            className: cx.i3,
                            children: (0, l.jsx)(is.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: te.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: cx.fh,
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
let cb = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dq.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tG._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(d5, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: cx.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function c_(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, ca.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, co.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: cx.MH,
        children: [
            (0, l.jsxs)("div", {
                className: cx.WP,
                children: [
                    (0, l.jsx)(dS.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dL._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dP.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(cx.Xn, cx.zA),
                        children: z.intl.format(t, {
                            user0: rF.Ay.getName(o, n?.id, g[0]),
                            user1: rF.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(cx.Mj, cx.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    ci.A,
                                    {
                                        textClassName: a()(cx.Mj, cx.nk),
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
                                    ci.A,
                                    {
                                        textClassName: a()(cx.Mj, cx.nk),
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
            null != p && (0, l.jsx)(dX.Ay, { size: dX.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(ch.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cv(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(n6.D, { className: cx.Zw, onClick: t, children: n });
}
function cN(e) {
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
        E = (0, ct.zD)(f),
        I = E ? f.extra?.application_id : void 0,
        j = (0, d0.W)();
    null != j && (I = j);
    let C = (0, d$.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : I,
                source: dK.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(dp.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, cn.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dZ.A], () => dZ.A.getDetectableIdsToApplicationIds()),
        N = E ? C : void 0,
        T = s.useContext(cE);
    return (0, l.jsxs)("div", {
        className: cx.au,
        children: [
            (0, l.jsx)(c_, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(cj, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: cx.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: cx.Fb,
                                children: (0, l.jsx)(cl.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: cl.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: cx.iC,
                                children: [
                                    (0, l.jsx)(cv, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(cx.$2, { [cx.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cv, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cx.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dP.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: cx.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != v[I]
                ? (0, l.jsx)(cf, {
                      className: cx.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: od.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cT(e) {
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
        { actionString: p, canWatch: g } = (0, dQ.K)(a),
        { entry: x } = A,
        f = (0, ct.zD)(x),
        E = f ? x.extra?.application_id : void 0,
        I = (0, d0.W)();
    null != I && (E = I);
    let j = (0, d$.A)(
            {
                location: "ContentPopout",
                applicationId: E,
                source: dK.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(dp.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, cr.A)(x),
        { largeImage: N, smallImage: T } = (0, cn.D8)(y, b ?? v),
        { largeImage: S } = (0, cn.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([dZ.A], () => dZ.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(cE);
    return (0, l.jsxs)("div", {
        className: cx.au,
        children: [
            (0, l.jsx)(c_, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(cj, {
                backgroundImgSrc: S?.src,
                className: cx.uR,
                children: [
                    (0, l.jsx)(cv, {
                        onClick: g
                            ? () => {
                                  (lS.default.selectVoiceChannel(a.channelId), (0, dF.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: cx.nh,
                            children: [
                                (0, l.jsx)(dJ.A, { className: cx.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: cx.NE,
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
                        className: cx.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: cx.Fb,
                                    children: (0, l.jsx)(cl.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: cl.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: cx.gv,
                                children: [
                                    (0, l.jsx)(cv, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: cx.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cv, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cx.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dP.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != M[E]
                ? (0, l.jsx)(cf, {
                      className: cx.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: od.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cS = t(299846);
let cR = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cS.u)(t);
    function u() {
        (0, dv.hg)(t.extra.application_id);
    }
    let { data: h } = (0, n1.YY)(t.extra.application_id),
        m = (0, db.Ay)({ application: h, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dT.iT, { location: dT.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(cN, {
            channel: n,
            userDescription: (0, dN.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, dC.A)(d, eo.jUm.JOIN) || (0, dy.A)(d),
        f = g
            ? (0, l.jsx)(d_.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dE.I,
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
                      icon: dI.h,
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
                      icon: dj.k,
                  }),
        j = [E, g && !r ? f : I].filter(sM.Vq);
    return (0, l.jsxs)(cI, {
        children: [
            p,
            (0, l.jsx)(cC, {
                children: (0, l.jsx)(cy, {
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
var cM = t(322789),
    cO = t(808380),
    cL = t(687966),
    cP = t(960076),
    cD = t(544441),
    ck = t(562708),
    cw = t(139286);
function cU(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(t),
        s = (0, db.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cw.A)({
            name: ck.ImpressionNames.CLOUD_PLAY_CTA,
            type: ck.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: dI.h,
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
var cG = t(601007),
    cF = t(648246),
    cH = t(308335),
    cB = t(790381),
    cV = t(266080),
    cY = t(968309),
    cW = t(30370);
function cz(e) {
    let n = (0, m.bG)([cW.A], () => cW.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cY.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cX = t(18282);
let cq = [...cM.n, dT.Yq],
    cK = {
        [cO.Y.DESKTOP]: null,
        [cO.Y.LINUX]: null,
        [cO.Y.MACOS]: null,
        [cO.Y.NINTENDO]: null,
        [cO.Y.IOS]: null,
        [cO.Y.ANDROID]: null,
        [cO.Y.XBOX]: cV.A,
        [cO.Y.PLAYSTATION]: cB.A,
    },
    c$ = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cS.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, co.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? cK[g] : null,
            E = cz(g === cO.Y.XBOX ? eo.fg2.XBOX : g === cO.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: I } = (0, n1.YY)(x),
            j = (0, cD.A)(x),
            { analyticsLocations: C } = (0, P.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, db.JC)(I),
            b = (0, cH.o)(h?.application_id ?? m?.applicationId ?? I?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dT.mG, {
                location: null == A ? dT.N5.POPOUT : dT.N5.STREAMING_POPOUT,
                children: cq.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(cN, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cX.A, { onClick: E, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dN.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cG.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cT, {
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
                                  ? (0, l.jsx)(cG.A, {
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
                          cU,
                          { application: I, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, dC.A)(h, eo.jUm.JOIN) || (0, dy.A)(h))
                    ? (0, l.jsx)(
                          d_.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cL.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cP.A)(h)
                    ? (0, l.jsx)(cF.A, { activity: h, size: "md", variant: "primary", icon: tn.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sM.Vq);
        return (0, l.jsxs)(cI, {
            children: [
                v,
                (0, l.jsx)(cC, {
                    children: (0, l.jsx)(cy, {
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
    cQ = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cJ(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, n1.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, db.Ay)({ application: r, analyticsLocations: a }),
        d = (0, t9.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cQ(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, aO.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lB.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [E, I] = s.useState(!1);
    return (
        f && !E && I(!0),
        (0, cw.A)(
            {
                name: ck.ImpressionNames.CLOUD_PLAY_CTA,
                type: ck.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !E },
            [E],
        ),
        (0, l.jsx)(l_.A, {
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
                    icon: dI.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lB.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cZ = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cJ, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var c0 = t(363670),
    c1 = t(205327),
    c2 = t(52133),
    c3 = t(835723),
    c7 = t(172710),
    c9 = t(655116),
    c6 = t(763758),
    c5 = t(286617),
    c8 = t(533207),
    c4 = t(121090),
    ue = t(693879),
    un = t(809854),
    ut = t(272984),
    ui = t(170699);
function ul(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, un.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dN.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: ui.lu,
              children: [
                  (0, l.jsx)(ue.z, { entry: t }),
                  (0, l.jsx)("div", { className: ui.Lt, children: (0, l.jsx)("div", { className: ui.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: ui.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function us(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, c0.u7)(r),
        g = cz(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [c9.A, sf.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, c5.A)(c9.A, sf.default, p, c) : void 0),
            [c, p],
            c2.A,
        );
    if (null == c || null == u) return null;
    let E = h,
        I = [];
    u.media.provider === c1.X.SPOTIFY &&
        ((t = () => {
            (0, c7.Mp)(c);
        }),
        (i = () => {
            (0, c7.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, c7.Mp)(c);
        }),
        (E = (0, l.jsx)(c6.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: cx.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, c7.mN)(c, p.id, e);
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
                        icon: c3.J,
                        onClick: function () {
                            null != f && ((0, c8.A)(f, ut.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(cN, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === c1.X.SPOTIFY
                ? (0, l.jsx)(cX.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: c4.A })
                : null,
        userDescription: (0, dN.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: E,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(ul, { activity: c }),
    });
    return (0, l.jsxs)(cI, {
        children: [
            j,
            (0, l.jsx)(cC, {
                children: (0, l.jsx)(cy, {
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
var ur = t(903134),
    ua = t(56121),
    uo = t(263577),
    ud = t(868065),
    uc = t(804779);
let uu = [dT.Y8],
    uh = [ua.j.WEEK],
    um = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, cn.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dN.TQ)(n);
        return null != r && (0, sM.S1)(r, uh)
            ? (0, l.jsxs)(ud.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(ud.UA, {
                          children: [
                              (0, l.jsx)(ud.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(ud.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(dT.mG, {
                                  location: dT.N5.CARD,
                                  children: uu.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(uo.V, { src: s?.src, size: 48, className: uc.xn }),
                  ],
              })
            : null;
    });
var uA = t(210528);
let up = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, dN.TQ)(t),
        u = cz(eo.fg2.SPOTIFY);
    if (null == d || !(0, sM.S1)(c, uh)) return null;
    function h() {
        let e = ut.M0.ALBUM,
            n = uA.A.isProtocolRegistered()
                ? ut.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : ut.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(cI, {
        children: [
            (0, l.jsx)(cN, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = ut.M0.ARTIST,
                        n = uA.A.isProtocolRegistered()
                            ? ut.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : ut.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === c1.X.SPOTIFY
                        ? (0, l.jsx)(cX.A, { onClick: u, Icon: c4.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dT.mG, {
                    location: dT.N5.POPOUT,
                    children: uu.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(cC, {
                children: (0, l.jsx)(cy, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var ug = t(977001);
let ux = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cS.u)(t),
        c = (0, dN.ty)(t),
        u = (0, dN.TQ)(t);
    if (null == a || null == c || null == u || !(0, ug._E)(u)) return null;
    let h = null != t.extra.platform ? cK[t.extra.platform] : null;
    return (0, l.jsxs)(cI, {
        children: [
            (0, l.jsx)(cN, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cX.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dT.mG, {
                    location: dT.N5.POPOUT,
                    children: ug.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cC, {
                children: (0, l.jsx)(cy, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var uf = t(514243),
    uE = t(347306),
    uI = t(123917),
    uj = t(998218);
let uC = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cz(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = uj.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, uI.h)({ href: uj.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cI, {
              children: [
                  (0, l.jsx)(cN, {
                      channel: n,
                      entry: t,
                      userDescription: (0, dN.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cX.A, {
                          onClick: a,
                          Icon: uE.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dT.mG, {
                          location: dT.N5.POPOUT,
                          children: uf.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cC, {
                      children: (0, l.jsx)(cy, {
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
function uy(e) {
    return e?.type === dA.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oZ.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function ub(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oZ.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cM.A, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uf.A, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ug.Ay, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(um, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c0.Ay, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(df.A, { ...t, entry: n });
        default:
            return null;
    }
}
function u_(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oZ.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cZ, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uv(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(uN, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(dp.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function uN(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oZ.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(c$, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uC, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ux, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(up, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(us, { ...t, entry: n });
        case oZ.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cR, { ...t, entry: n });
        default:
            return null;
    }
}
let uT = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cS.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(o4);
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
                dx(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        dx(dp.PA.CARD_POPOUT_OPEN, e);
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
            c && (0, l.jsx)(u_, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((E.current = !0),
                        setTimeout(() => {
                            (E.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: M,
                children: (0, l.jsx)(nT.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(ur.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(uv, {
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
                        return (0, l.jsx)(n6.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                I || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(ub, {
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
var uS = t(531685),
    uR = t(99066),
    uM = t(376261),
    uO = t(99753),
    uL = t(136722),
    uP = t(860071);
let uD = [],
    uk = new Set(),
    uw = new Set();
var uU = t(808323);
let uG = new Set([
    oZ.ContentInventoryEntryType.PLAYED_GAME,
    oZ.ContentInventoryEntryType.WATCHED_MEDIA,
    oZ.ContentInventoryEntryType.TOP_GAME,
    oZ.ContentInventoryEntryType.TOP_ARTIST,
    oZ.ContentInventoryEntryType.LISTENED_SESSION,
    oZ.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uF = t(498642);
let uH = (0, sg.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uB = t(293860);
let uV = { cooldownDurationMs: 60 * sA.A.Millis.DAY };
function uY(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: uH.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = sj(),
                i = (0, m.bG)([uF.A], () => uF.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i >= 200);
        })(n);
    return (0, l.jsx)(lM.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uV,
        groupName: lB.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sN, {
                      className: uB.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uW = t(728321),
    uz = t(282006);
let uX = er.Ay.getEnableHardwareAcceleration(),
    uq = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uK = s.memo(function (e) {
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
                            n = lF.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
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
                    shouldAnimateStatus: uX,
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
    u$ = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != n ? V.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uK, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uQ(e) {
    let { index: n } = e,
        t = (0, C.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class uJ extends s.Component {
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
        if (r?.id === dr) return (0, s.createElement)(dh, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                uW.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uq,
                    children: (0, s.createElement)(uz.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uz.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === dA.S9.CONTENT_INVENTORY) {
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
            if (r.type === dA.S9.MEMBER && "user" in r) {
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
                    u$,
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
            if (r.type === dA.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    uT,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === dA.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(dm, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uQ, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === dr) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uy(t[i + 1 + l]) : n;
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
            .filter(sM.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== dA.S9.MEMBER ||
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
                (0, l.jsx)(s7.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rk.F, {
                                component: (0, l.jsx)(rw.A, {
                                    children: (0, l.jsx)(rk.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, t5.m1)(t, ee.default, lG.A),
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
function uZ(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(L.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([dA.Ay], () => dA.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uU.A)({ id: dp.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, c2.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uP.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uD;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uk;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    uL.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => uG.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [dl.A, uO.A],
                            () => {
                                let e = uO.A.getDebugImpressionCappingDisabled();
                                return !(0, uR.sE)("useFilterImpressionCappedContent") || e
                                    ? uw
                                    : dl.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: uw };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, dN.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([uO.A], () => uO.A.getFeedRequestId(dp.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(o4).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([dl.A], () => dl.A.hidden),
                A = (0, m.bG)([uS.A], () => uS.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([tU.A], () => tU.A.getGuild(r), [r]),
                x = ((0, uM.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, E, I, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: dA.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: dA.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: dr,
                        type: dA.S9.CONTENT_INVENTORY_GROUP,
                        key: dr,
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
                        feedHeight: e.map(uy).reduce((e, n) => e + n, 0),
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
                                (dg(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: dp.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, uR.sE)("useInjectContentInventoryFeed") &&
                                    iQ.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
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
    let g = (0, oQ.W)("lg") + (0, oQ.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = A.current;
                if (null == t) return;
                let i = n === da || n === dd ? 0 : parseInt(n, 10),
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
                (0, l.jsx)(uY, { guildId: n.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: I,
                    children: (0, l.jsx)(uJ, {
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
function u0(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(de, { children: (0, l.jsx)(uZ, { channel: i, className: t }) }), [i, t]);
}
var u1 = t(888904);
let u2 = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: u1.kL,
        children: [
            (0, l.jsxs)(lb.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lb.A.Icon, { icon: dM.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lb.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: u1.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: u1.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: u1.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var u3 = t(909735),
    u7 = t(943712),
    u9 = t(321255),
    u6 = t(746080),
    u5 = t(516607),
    u8 = t(999900);
function u4() {
    return (0, l.jsx)("div", { className: u8.wG, children: (0, l.jsx)(g.y, {}) });
}
let he = (0, tp.Fe)({
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
        renderLoader: u4,
        name: "ForumChannel",
    }),
    hn = (0, tp.Fe)({
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
        renderLoader: u4,
        name: "AppChannel",
    });
function ht() {
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
let hi = (0, tp.Fe)({ createPromise: ht, webpackId: 540462, name: "ChannelCall", renderLoader: u4 });
function hl() {
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
let hs = (0, tp.Fe)({ createPromise: hl, webpackId: 507007, name: "StageChannelCall", renderLoader: u4 }),
    hr = (0, tp.Fe)({
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
            return (0, l.jsx)(sF, {});
        },
    }),
    ha = (0, tp.Fe)({
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
    ho = (0, tp.Fe)({
        createPromise: () => Promise.all([t.e("386345"), t.e("269178"), t.e("177718")]).then(t.bind(t, 763349)),
        webpackId: 763349,
        name: "FriendsSidebar",
    });
class hd extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rD.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        return null != e && ((0, oX.ZV)(e.type) || null != n);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? ht()
            : e === eo.rbe.GUILD_STAGE_VOICE && hl();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, iC.iN)(e.id);
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
            (0, nG.openUserProfileModal)({
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
        return e?.hasFlag(u6.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iZ.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(nZ.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== d7.lp.STREAM
            ? null
            : (0, l.jsx)(
                  i$.A,
                  { size: dX.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    o.push((0, l.jsx)(lW, { channel: e }, "calls")),
                    o.push((0, l.jsx)(lr.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lz.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(nA, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(se, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(l1, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lW, { channel: e }, "calls")),
                    o.push((0, l.jsx)(lr.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lz.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(nx, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(iM, { channel: e })),
                    null == n || n.isForumLikeChannel() || o.push((0, l.jsx)(rb.A, { channel: n }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(l9, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iw, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(lr.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(nx, { channelId: e.id }, "members")),
                    null != n && (0, eE.pk)(e) && o.push((0, l.jsx)(lu, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rT, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rb.A, { channel: e }, "browser")),
                    t || o.push((0, l.jsx)(nf.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(lr.A, { channel: e }, "pins")),
                    (0, n9.PD)(e.guild_id, "channel_header") &&
                        o.push((0, l.jsx)(ls, { channelId: e.id }, "conversations")),
                    o.push((0, l.jsx)(nx, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && o.push((0, l.jsx)(lu, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(n7, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rb.A, { channel: e }, "browser")),
                        t || o.push((0, l.jsx)(nf.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(lr.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(nx, { channelId: e.id }, "members")));
                    break;
                }
                o.push((0, l.jsx)(nz, { channel: e, isLurking: t }, "app-channel-actions"));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(ly, {}, "game-invite-channel-learn-more")),
                    t ||
                        (o.push((0, l.jsx)(lE, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(nf.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(nx, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(nx, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(nx, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(nx, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(nx, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e && null != n
            ? (0, l.jsx)("div", {
                  className: u8.u8,
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, iC.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = r || o,
            E = p || g;
        return (0, l.jsxs)("div", {
            className: u8.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lb.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(u8.DD, r, { [u8.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: E,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(t4.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, t4.zF)({
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
                                              className: u8.u8,
                                              children: (0, l.jsx)(ni, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: u8.u8,
                                                children: (0, l.jsx)(x.$, {
                                                    onClick: () => (0, nt.uh)(e.guild_id, e.id),
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: z.intl.string(z.t.k5WiPf),
                                                }),
                                            })
                                          : (0, t4.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sw.A, { channelId: e.id }),
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
                if (!n) return (0, l.jsx)(hs, { channel: e, popoutType: nQ.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    hi,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: nQ.N.NO_POPOUT,
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
        return (0, l.jsx)(e6, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(i6, { guildId: n.id })
                : (0, l.jsx)(i0.H, { guildId: n.id, children: (0, l.jsx)(li, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(oY.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(it.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(t7, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(he, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(t8.A, { channel: e, guild: n, chatInputType: nJ.oU.NORMAL }, null != n ? n.id : "home")
            : (0, l.jsx)(hn, { channel: e }, e.id);
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
            return (0, l.jsx)(oV, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sk, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(u0, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(u0, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(tA, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(hr, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => iJ(sl.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, oW.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case sB.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rx, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sB.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rP, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sB.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? iW : rP;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(u9.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sB.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sB.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: u8.uC,
                    children: (0, l.jsx)(ha, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => sH.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(o$.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? o$.X.PostSidebar : o$.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(u2, {});
        if (null == e) return (0, l.jsx)(u7.A, { channelId: this.props.channelId });
        let E = r === eo.YvQ.SIDEBAR_CHAT,
            I = (0, u3.UN)("Channel"),
            j = null != d && !E,
            C =
                ((0, oX.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !f,
                        className: a()(u8.TE, {
                            [u8.js]: (E && !I) || j,
                            [u8.Rs]: E ? !I || g : j || x,
                            [u8.jl]: E && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: E ? p : void 0 },
                                      className: u8.x4,
                                      channel: e,
                                      draftType: iB.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(u8.Qs, { [u8.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tg.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: u8.zP, children: b }) : b,
                x && (0, l.jsx)(ho, {}),
            ],
        });
    }
}
let hc = (0, ef.A)(hd),
    hu = s.memo(function (e) {
        var n, t, i;
        let r,
            { providedChannel: a } = e,
            [o, d] = s.useState(null),
            c = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, m.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, m.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            f = (0, t6.DZ)(),
            j = (0, t6.e4)(x),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            y = j?.parent_id,
            b = (0, m.bG)([ew.A], () => ew.A.getChannel(y), [y]),
            _ = (0, m.bG)([tU.A], () => tU.A.getGuild(j?.guild_id), [j]),
            { needSubscriptionToAccess: v } = (0, i1.A)(j?.id ?? void 0),
            N = (0, m.bG)(
                [n$.A],
                () => {
                    let e = null != c ? n$.A.getParticipants(c) : [],
                        n = null != c ? n$.A.getActivityParticipants(c) : [];
                    return e.length - n.length > 0;
                },
                [c],
            ),
            T = (0, iK.A)(),
            S = (0, m.bG)([eU.Ay], () => (T?.channelId ?? eU.Ay.getVoiceChannelId()) === j?.id),
            R = (0, m.bG)([ej.Ay], () => (null != j ? ej.Ay.getSelfEmbeddedActivityForChannel(j.id) : null), [j]),
            M = (0, m.bG)([oK.A], () => oK.A.isConnected()),
            O = (0, eI.Ay)(M),
            L = M && !1 === O;
        s.useEffect(() => {
            S &&
                L &&
                null != R &&
                null != j &&
                E.A.selectParticipant(
                    j.id,
                    (0, nK.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [L, j, S, R]);
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            D = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            k = null != P && !(0, ev.A)(j?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, m.cf)([lF.A], () =>
                null != j && j.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lF.A.getVoiceStatesForChannel(j.id)),
                          isUserInThisVoice: lF.A.isInChannel(j.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != j && j.isPrivate() && !k && N,
            H = j?.isGuildVocal() || F || (U && (G || !w)),
            B = (0, sY.e)(j, "channel"),
            V = (0, m.bG)([n2.A], () => {
                let e = (0, nB.ny)(n2.A.getMainFrame());
                return e?.data.layoutMode === nB.y0.FOCUSED && e.intent === nB.sV.MAIN;
            }),
            { welcomeModalChannelId: Y } = (0, h.zy)(),
            W = (0, m.bG)([nl.A], () => null != j && nl.A.isLurking(j.guild_id), [j]),
            z = (0, m.bG)([oz.A], () => oz.A.hasSeen(j?.guild_id, W), [j, W]),
            X = (0, m.bG)(
                [n$.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? n$.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            q =
                ((n = _?.id),
                (r = (0, m.bG)([tU.A, si, ee.default, $.Ay], () => {
                    let e = tU.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === si.hasViewedPrompt(sl.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != r && (r || iJ(sl.REAL_NAME_PROMPT, n));
                }, [r, n]),
                !0 === r),
            K =
                ((t = _?.id),
                (0, m.bG)([ew.A, tU.A, eU.Ay], () => {
                    let e = tU.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(Y);
                    return Y === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, oX.ke)(n.type);
                })),
            { section: J, channelSidebarState: Z } = (0, m.cf)(
                [np.Ay],
                () => ({ section: np.Ay.getSection(c, j?.isDM()), channelSidebarState: np.Ay.getSidebarState(c) }),
                [c, j],
            ),
            en = _?.id,
            et = (0, m.bG)([np.Ay], () => np.Ay.getGuildSidebarState(en), [en]),
            el = (0, sr.lI)(),
            es = (0, ne.qz)() && j?.type === eo.rbe.GUILD_APP;
        ((i = j?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return nX.A.addRouteRewriter((e, n) => {
                        let { pathname: t, search: l, state: s } = e;
                        return "POP" === n || (0, ne.Dw)(l) || nq.exec(t)?.[1] !== i
                            ? null
                            : { path: (0, ne.gu)(t), state: s };
                    });
            }, [i, es]));
        let er = es && Z?.type === sB.PE.VIEW_CHANNEL && Z.channelId === j.id,
            ea = (0, t5.Ay)(j),
            ed = (0, t5.Ay)(j, !0),
            ec = (0, m.bG)([n$.A], () => (null != j ? n$.A.getSelectedParticipant(j.id) : null)),
            eu = (0, e4.vL)(j),
            eh = (0, ie.Uf)(j),
            em = null != j && g === j.id,
            eA = null != j && j.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = iz.A.useConfig({ location: "Channel" }),
            ex = (0, iq.c)(),
            ef = (0, m.bG)(
                [oq.A, ng.A],
                () => {
                    let e = j?.guild_id ?? ng.A.getGuildId();
                    return null != e && oq.A.isUnavailable(e);
                },
                [j],
            ),
            eC = ep && (0, iX.A)() && null != j && !ef && !j.isGuildVocal();
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
                if (e?.location?.state?.stageInviteKey === u5.J2) {
                    let { channelId: n } = (0, ss.vu)(e?.location?.pathname) ?? {};
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
                null != o && null != e && eA && e.id === o && !n && ((0, sV.av)(e), d(null));
            }, [o, eA]));
        let eN = (0, eE.cI)(j),
            eT = null != j && j.isPrivate(),
            eS = (0, eI.Ay)(eT),
            eR = (0, eI.Ay)(j?.id);
        s.useEffect(() => {
            let e = eS && !eT,
                n = eS && eT && j?.id !== eR;
            (e || n) && (0, t9.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lB.i.AUTO });
        }, [j?.id, eR, eT, eS]);
        let eM = (0, p.useHasAnyModalOpen)(),
            eO = (0, n0.a)(j);
        return (0, l.jsx)(hc, {
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
            ...(0, m.cf)([lF.A], () => ({ hasVideo: null != j && lF.A.hasVideo(j.id) }), [j]),
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
