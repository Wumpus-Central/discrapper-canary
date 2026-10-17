(n.r(t), n.d(t, { default: () => u9 }), n(321073));
var i,
    l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(284009),
    d = n.n(o),
    c = n(435558),
    u = n.n(c),
    h = n(806163),
    m = n(17928),
    A = n(554146),
    p = n(192308),
    g = n(289873),
    x = n(821609),
    f = n(43990),
    E = n(367513),
    I = n(604681),
    j = n(442433);
n(183994);
var C = n(837381),
    y = n(887129),
    b = n(607399),
    _ = n(834730),
    v = n(194261),
    N = n(312138),
    T = n(475825),
    S = n(177953),
    R = n(297264),
    M = n(414798),
    O = n(775602),
    L = n(793574),
    P = n(688810),
    D = n(449582),
    k = n(485947),
    w = n(878678),
    U = n(69282),
    G = n(657048),
    F = n(361610),
    H = n(964486),
    B = n(36124),
    V = n(317525),
    Y = n(219065),
    W = n(818348),
    z = n(105292);
let q = [];
var X = n(342296),
    K = n(616356),
    $ = n(696451),
    Q = n(290863),
    J = n(461213),
    Z = n(741961),
    ee = n(287809),
    et = n(303727),
    en = n(174459),
    ei = n(625494),
    el = n(488926),
    es = n(427262),
    er = n(19575),
    ea = n(589158),
    eo = n(652215),
    ed = n(162866),
    ec = n(4577);
let eu = er.Ay.getEnableHardwareAcceleration(),
    eh = s.memo(function (e) {
        let { channel: t, sectionId: i, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, m.bG)([Z.A], () => Z.A.isTyping(t.id, r)),
            c = (0, m.bG)([$.Ay], () => $.Ay.getMember(t.guild_id, r)),
            u = (0, m.bG)(
                [V.A],
                () => (c?.colorRoleId != null ? V.A.getRole(t.guild_id, c.colorRoleId)?.name : void 0),
                [t.guild_id, c],
            ),
            h = (0, m.bG)([ee.default], () => ee.default.getUser(r)),
            A = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === A?.id,
            g = (0, m.bG)([Q.A, J.A], () => (p ? J.A.getStatus() : Q.A.getStatus(r, t.guild_id))),
            x = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, m.yK)([Q.A, J.A], () => (p ? J.A.getActivities() : Q.A.getActivities(r, t.guild_id))),
            E = (0, m.bG)([K.A], () => K.A.getAnyStreamForUser(r)),
            I = (0, C.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(t.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("893190"),
                                n.e("146652"),
                                n.e("882073"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("823427"),
                                n.e("343116"),
                                n.e("70515"),
                                n.e("666939"),
                                n.e("424966"),
                            ]).then(n.bind(n, 175269));
                            return (n) => (0, l.jsx)(e, { ...n, user: h, guildId: t.guild_id, channel: t });
                        });
                },
                [h, t],
            ),
            N = s.useCallback(() => {
                if (null == h) return;
                let e = `@${es.Ay.getUserTag(h, { decoration: "never" })}`,
                    n = `<@${h.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    M.A.startTyping(t.id));
            }, [h, t]),
            T = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        (0, w.K4)({
                            guildId: t.guild_id,
                            location: { section: eo.JJy.THREAD_MEMBER_LIST, object: eo.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [t.guild_id],
            ),
            S = (0, D.r)({ user: h, guildId: t.guild_id }),
            [R, O] = s.useState(!1);
        if (null == h) return null;
        let L = c?.premiumSince;
        return (0, l.jsx)(X.A, {
            targetElementRef: o,
            user: h,
            guildId: t.guild_id,
            channelId: t.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...s } = e;
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
                    channel: t,
                    guildId: t.guild_id,
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
        let { id: t, label: n, count: i, guildId: s } = e,
            r = (0, U.Xx)({ roleId: t, guildId: s, size: 16 });
        return t === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: n, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(G.A, { className: ec.UT, ...r }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [n, " \u2014 ", i] }),
                  ],
              });
    }),
    eA = s.memo(function (e) {
        let { channel: t } = e;
        return t.type === eo.rbe.PRIVATE_THREAD
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
    var t;
    let n,
        i,
        r,
        o,
        d,
        { channel: c, guild: h } = e,
        A = `members-${c.id}`,
        { analyticsLocations: p } = (0, P.Ay)(L.A.MEMBER_LIST),
        g = (function (e, t) {
            (0, H.Ay)(() => {
                t?.id != null && (0, F.Ey)(t.id, e, B.LD);
            });
            let n = (0, m.bG)([V.A], () => (null != t ? V.A.getSortedRoles(t.id) : [])),
                { version: i, members: l } = (0, m.cf)([Y.A], () => ({
                    version: Y.A.getMemberListVersion(e),
                    members: Y.A.getMemberListSections(e),
                })),
                r = null == t,
                a = s.useMemo(() => {
                    if (r) return q;
                    let e = n.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: z.intl.string(z.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: z.intl.string(z.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: t, label: n } = e;
                            return { label: n, userIds: l?.[t]?.userIds ?? [], id: t, roleId: t };
                        })
                    );
                }, [n, l, i, r]);
            return null != l ? a : q;
        })(c.id, h),
        x = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: E } =
            ((t = A),
            (n = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
            (i = s.useRef(null)),
            (r = s.useCallback(
                (e, t) => {
                    let n = i.current;
                    if (null == n) return;
                    let l = parseInt(t, 10),
                        [s, r] = n.getSectionRowFromIndex(l),
                        a = 42 * (0 === s && 0 === r);
                    n.scrollToIndex({
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
                        let t = i.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (d = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = i.current;
                        if (null == t) return e();
                        t.scrollToBottom({
                            callback() {
                                requestAnimationFrame(() => setTimeout(e, 100));
                            },
                        });
                    }),
                [],
            )),
            {
                navigator: (0, y.Ay)({ id: t, setFocus: r, isEnabled: n, scrollToStart: o, scrollToEnd: d }),
                listRef: i,
            }),
        I = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
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
                                    let { section: t } = e,
                                        n = g[t];
                                    return (0, l.jsx)(
                                        em,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: h.id },
                                        n.id,
                                    );
                                },
                                rowHeight: 42,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: i, id: s } = g[t];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: c, sectionId: s, userId: i[n], guildOwnerId: b },
                                        i[n],
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
    let { channel: t } = e;
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
                    (0, l.jsx)(et.A, { className: ed.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
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
var ex = n(738876),
    ef = n(456412),
    eE = n(432371),
    eI = n(475743),
    ej = n(933958),
    eC = n(702841),
    ey = n(567249),
    eb = n(811024),
    e_ = n(969151),
    ev = n(108959),
    eN = n(866665),
    eT = n(446576),
    eS = n(817281),
    eR = n(666860),
    eM = n(587837),
    eO = n(850891),
    eL = n(964404),
    eP = n(204651),
    eD = n(383831),
    ek = n(128286),
    ew = n(734057),
    eU = n(309010),
    eG = n(795816),
    eF = n(685399),
    eH = n(216418),
    eB = n(620148),
    eV = n(732637),
    eY = n(104171),
    eW = n(47294),
    ez = n(594007),
    eq = n(16961),
    eX = n(138017),
    eK = n(715482),
    e$ = n(315502),
    eQ = n(573163),
    eJ = n(234320),
    eZ = n(5867),
    e0 = n(248310);
function e1(e) {
    let { channelId: t, className: n, ...i } = e,
        r = s.useRef(null),
        a = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [a]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let t = (0, m.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, m.cf)(
                    [eQ.Ay],
                    () => ({ unreadCount: eQ.Ay.getUnreadCount(e), mentionCount: eQ.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
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
                iconComponent: g === eZ.E8.NO_CHAT ? eX.j : eK.g,
                themeable: !0,
                className: n,
                ...i,
            }),
            f ? (0, l.jsx)(e$.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e0.qS }) : null,
        ],
    });
}
var e2 = n(538303);
let e3 = eY.DN.SIZE_32,
    e7 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e5(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: i } = e,
        r = (0, eB.A)(),
        o = (0, m.yK)([ej.Ay], () => ej.Ay.getEmbeddedActivitiesForLocationIncludingHidden(n), [n]),
        d = (0, e_.H)(n),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [E, I] = s.useState(eL.Ay.activityPanelHeight ?? t ?? null),
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
            t = y.height;
        v
            ? ((t = y.width / eZ.B5) > y.height && (e = (t = y.height) * eZ.B5), (T = (y.height - t) / 2))
            : ((e = Math.min(y.height * eZ.B5)) > y.width && (t = (e = y.width) / eZ.B5), (N = (y.width - e) / 2));
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
                L.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [L]),
        D = (function (e, t, n) {
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
                return e && null != t && null != n ? { ...i, minHeight: 200, maxHeight: n, height: t } : i;
            }, [o, e, n, t]);
        })(x, E, t),
        k = (0, eq.G)();
    if (null == r) return null;
    let w = [];
    function U(e) {
        if (null == e || void 0 === e || e === eY.mt) return null;
        let t = P.get(e.id),
            n = t?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e3), alt: n, className: e2.my }, e.id),
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
                                    children: (0, l.jsx)(eV.A, { className: e2.pU, embedId: (0, ez.A)(n.id, r.id) }),
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
                                                              location: n,
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
                        x && null != t
                            ? (0, l.jsx)(eM.A, {
                                  minHeight: 480,
                                  maxHeight: t,
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
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eC.cf)([ej.Ay], () => {
            let e = ej.Ay.getConnectedActivityLocation(),
                t = ej.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: t,
                activityPanelMode: ej.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eC.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e5, { maxHeight: t, connectedLocation: s.location, renderExternalHeader: n });
}
var e9 = n(90804),
    e8 = n(748975),
    e4 = n(323073),
    te = n(991690),
    tt = n(621466),
    tn = n(453903),
    ti = n(265872),
    tl = n(980707),
    ts = n(477782),
    tr = n(663417),
    ta = n(365199),
    to = n(146337),
    td = n(316768),
    tc = n(625180),
    tu = n(672929),
    th = n(58736),
    tm = n(165610);
function tA(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, to.A)(t, "app_channel_header"),
        o = s.useMemo(
            () => ({ type: te.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        d = (0, tu.A)(t.application_id ?? null, o),
        c = (0, tm.x1)(d) && d.data.proxyTicketRefreshing,
        u = (0, td.A)(t, d, "AppChannelHeaderOverflowMenu"),
        h = s.useCallback(() => {
            null == d || c || tc.A.refreshProxyTicket(d.id);
        }, [d, c]),
        m = z.intl.string(z.t["UKOtz+"]),
        A = (0, tm.x1)(d);
    return A || null != a || 0 !== u.length
        ? (0, l.jsx)(ti.Y, {
              targetElementRef: r,
              shouldShow: n,
              animation: ti.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: (e, t) => {
                  if ("user:escape" === t && (0, tt.vq)(document.activeElement, HTMLIFrameElement)) return tn.oU;
                  i(!1);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(tl.W, {
                      "data-menu-migrated": !0,
                      navId: "app-channel-header-overflow",
                      onClose: t,
                      onSelect: t,
                      "aria-label": z.intl.string(z.t.Xm41aV),
                      children: (0, l.jsxs)(ts.rX, {
                          children: [
                              u,
                              A &&
                                  (0, l.jsx)(ts.Dr, {
                                      id: "reload-app",
                                      label: z.intl.string(z.t.kHie4V),
                                      action: h,
                                      icon: tr.RefreshIcon,
                                      leadingAccessory: { type: "icon", icon: tr.RefreshIcon },
                                      disabled: c,
                                  }),
                              a,
                          ],
                      }),
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, l.jsx)(th.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: n ? null : m,
                      icon: ta.MoreHorizontalIcon,
                      "aria-label": m,
                      selected: n,
                  });
              },
          })
        : null;
}
var tp = n(270593);
function tg(e) {
    let { channel: t } = e,
        n = s.useMemo(
            () => ({ type: te.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        i = (0, tu.A)(t.application_id ?? null, n);
    return (0, l.jsx)(tp.A, { frame: i });
}
var tx = n(568598),
    tf = n(198052),
    tE = n(164617),
    tI = n(355622),
    tj = n(689874),
    tC = n(631828),
    ty = n(70688),
    tb = n(627363),
    t_ = n(91242),
    tv = n(71393),
    tN = n(793480),
    tT = n(577964),
    tS = n(248675);
function tR(e) {
    let { channel: t } = e,
        n = (0, m.bG)([t_.A], () => t_.A.getFramesForChannel(t.id).find((e) => (0, tm.x1)(e)), [t.id]),
        i = (0, tb.YY)(n?.applicationId).data,
        s = (0, m.bG)(
            [tv.A],
            () => tv.A.getGuild(t.guild_id)?.features.has(eo.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) === !0,
            [t.guild_id],
        ),
        r = (0, tN.m0)({ guildId: t.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == n || i?.conjureProjectId == null || !r || s) return null;
    let a = z.intl.string(tS.default["/TlGcK"]);
    return (0, l.jsx)(th.Ay.Icon, {
        icon: ty.DoorExitIcon,
        tooltip: a,
        "aria-label": a,
        onClick: () => (0, tT.A)(n.id, t.guild_id ?? null, t.id),
    });
}
var tM = n(828488),
    tO = n(939249),
    tL = n(408278),
    tP = n(624479),
    tD = n(858899),
    tk = n(534890),
    tw = n(661531),
    tU = n(39623),
    tG = n(952270),
    tF = n(381849),
    tH = n(549973),
    tB = n(957565),
    tV = n(935208),
    tY = n(181041),
    tW = n(256331),
    tz = n(623562),
    tq = n(403862);
let tX = ["high", "medium", "low"],
    tK = s.memo(function (e) {
        let { moderation: t } = e,
            n = null != t && 1 === t.status,
            i = null != t && !t.flaggedTitle && !t.flaggedSummary && !t.flaggedKeyPoints,
            r = s.useMemo(() => {
                if (null == t) return { passed: 0, failed: 0, unknown: 0 };
                let e = t.flaggedMessageCount ?? t.flaggedMessageIds.length,
                    n = t.totalMessageCount ?? 0,
                    i = 0,
                    l = 0;
                return (
                    null == t.flaggedMessageCount && 0 === t.flaggedMessageIds.length
                        ? (l = n)
                        : null != t.flaggedMessageCount
                          ? (i = Math.max(0, n - e))
                          : (l = Math.max(0, n - e)),
                    { passed: i, failed: e, unknown: l }
                );
            }, [t]),
            a =
                null == t
                    ? "unknown"
                    : r.failed > 0
                      ? "failed"
                      : r.unknown > 0
                        ? "unknown"
                        : r.passed > 0
                          ? "passed"
                          : "unknown",
            o =
                null != t
                    ? (t.flaggedSummaryDetails.find((e) => {
                          var n;
                          return (
                              e.severity ===
                              ((n = t.flaggedSummaryDetails.map((e) => e.severity)),
                              tX.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: tq.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: tq.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: tq.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tq.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : n ? "status-positive" : "text-feedback-critical",
                                    children: null == t ? "\u2014" : n ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != t &&
                                    !n &&
                                    null != t.statusReason &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: t.statusReason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tq.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : i ? "status-positive" : "text-feedback-critical",
                                    children: null == t ? "\u2014" : i ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != t &&
                                    !i &&
                                    (0, l.jsxs)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            [
                                                t.flaggedTitle && "title",
                                                t.flaggedSummary && "summary",
                                                t.flaggedKeyPoints && "key points",
                                            ]
                                                .filter(Boolean)
                                                .join(", "),
                                            " ",
                                            "flagged",
                                        ],
                                    }),
                                null != t &&
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
                            className: tq.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == t || "unknown" === a
                                            ? "text-muted"
                                            : "passed" === a
                                              ? "status-positive"
                                              : "text-feedback-critical",
                                    children:
                                        null == t || "unknown" === a ? "\u2014" : "passed" === a ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != t &&
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
    t$ = s.memo(function (e) {
        let { conversation: t, onJump: n } = e,
            i = tV.default.extractTimestamp(t.startMessageId),
            s = tV.default.extractTimestamp(t.endMessageId),
            r = (0, tH.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, tF.WR)({ seconds: a, getFormatter: tF.i }),
            d = (0, m.bG)([tY.A], () => tY.A.getConversationColor(t.channelId, t.id) ?? void 0, [t.channelId, t.id]);
        return (0, l.jsxs)(tO.D, {
            className: tq.Nm,
            style: { backgroundColor: d },
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: tq.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: tq.So,
                            children: t.title,
                        }),
                        (0, l.jsx)(tL.K, {
                            icon: tP.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, tB.C)(JSON.stringify(t, null, 2), () =>
                                        (0, tD.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: tq.FR,
                    children: [
                        r,
                        " ago \xb7 ",
                        o,
                        " duration \xb7 ",
                        t.messageCount,
                        " messages \xb7 ",
                        t.userCount,
                        " users",
                    ],
                }),
                null != t.briefSummary &&
                    (0, l.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: tq.g5,
                        children: t.briefSummary,
                    }),
                t.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: tq.JP,
                        children: t.keyPoints.map((e, t) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                t,
                            ),
                        ),
                    }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: tq.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: tq.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tq.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: tq.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: tq.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tq.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.substance?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: tq.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.engagement?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: tq.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.dynamics?.score?.toFixed(2) ?? "\u2014",
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
                (0, l.jsx)(tK, { moderation: t.moderation ?? null }),
            ],
        });
    });
function tQ(e) {
    let { channel: t } = e,
        n = (0, m.bG)([tY.A], () => tY.A.getChannelConversations(t.id) ?? [], [t.id]),
        i = (0, m.bG)([tY.A], () => tY.A.isPendingFetch(t.id), [t.id]),
        r = (0, m.bG)([tW.A], () => tW.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, tz.xI)(t.id, e.id, { cacheType: "channel" });
            },
            [t],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tq.zr,
        children: [
            (0, l.jsxs)("div", {
                className: tq.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tq.gn,
                        children: [
                            (0, l.jsx)(tk.ChatIcon, { color: tw.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: tq.y6,
                        children: (0, l.jsx)(tL.K, {
                            icon: r ? tU.EyeIcon : tG.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: tz.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tq.Qs,
                children:
                    0 !== n.length || i
                        ? n.map((e) => (0, l.jsx)(t$, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: tq.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var tJ = n(268218),
    tZ = n(726249),
    t0 = n(334738),
    t1 = n(208882),
    t2 = n(938764),
    t3 = n(519480),
    t7 = n(352123),
    t5 = n(825244),
    t6 = n(130696);
let t9 = function (e) {
    let { guild: t, onAddGuild: i } = e,
        r = s.useCallback(() => {
            (0, p.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("683621"),
                    n.e("711162"),
                    n.e("159957"),
                    n.e("728136"),
                    n.e("216084"),
                    n.e("284819"),
                ]).then(n.bind(n, 405342));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        guild: t,
                        source: eo.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: eo.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: t6.h2,
        children: [
            (0, l.jsx)("img", { className: t6.hd, alt: "", src: n(668778) }),
            (0, l.jsx)(R.D, {
                className: t6._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: t.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: t6.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(t5.E, {
                      className: t6.c5,
                      iconUrl: n(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(t5.E, {
                className: t6.c5,
                iconUrl: n(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var t8 = n(683438),
    t4 = n(689175),
    ne = n(761508),
    nt = n(765671),
    nn = n(902119),
    ni = n(22231),
    nl = n(66834),
    ns = n(573435),
    nr = n(101555),
    na = n(548118),
    no = n(714991),
    nd = n(776231),
    nc = n(345942),
    nu = n(486020),
    nh = n(149790),
    nm = n(682557),
    nA = n(524058);
let np = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(tO.D, {
        onClick: t,
        className: nA.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: nA.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function ng(e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, t7.A)(t);
    return (0, l.jsx)("div", {
        className: a()(nA.fc, { [nA.QX]: i }),
        children: (0, l.jsxs)(nr.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(nr.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("533651"), n.e("988869")]).then(
                                          n.bind(n, 201700),
                                      );
                                      return (n) => (0, l.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(ni.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: nA.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(nm.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(nr.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(ta.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: nA.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let nx = s.memo(function (e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([tv.A], () => tv.A.getGuild(t.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, nc.u)(t.guildId) : await nl.A.joinGuild(t.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = nu.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, nd.mZ)() }),
        c = nu.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: nA.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, l.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: nA.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: nA.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: nA.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: nA.$f,
                            children: (0, l.jsx)(ns.Ay, {
                                mask: ns.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: nA.SA,
                                    children: (0, l.jsx)(na.Ay, {
                                        className: nA.rZ,
                                        iconSrc: c,
                                        guild: (0, nh.xi)(t),
                                        size: na.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nA.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nA.DD,
                            children: [
                                (0, l.jsx)(no.A, { className: nA.n2, guild: t }),
                                (0, l.jsx)(_.E, {
                                    className: nA.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: nA.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: nA.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: nA.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nA.JX }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t["LC+S+m"], {
                                                    membersOnline: t.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != t.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: nA.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nA.Li }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t.zRl6XR, {
                                                    count: t.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: nA.PD,
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
                (0, l.jsx)(ng, { entry: t }),
            ],
        })
    );
});
var nf = n(946116),
    nE = n(844086),
    nI = n(770679);
function nj(e) {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, nt.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: nI.wx,
        children: [
            (0, l.jsx)("div", { className: nI.y2, children: (0, l.jsx)(nn.A, {}) }),
            (0, l.jsx)("div", {
                className: nI.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(nI.VW, { [nI.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: nI.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: nI.MT,
                            children: (0, l.jsx)(t8.I, {
                                query: t,
                                "aria-label": z.intl.string(z.t.nL2wKD),
                                placeholder: z.intl.string(z.t.nL2wKD),
                                onChange: n,
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
let nC = function (e) {
    let {
        channel: t,
        directoryEntries: n,
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
        className: nE.$$,
        children: (0, l.jsxs)(t4.Gt, {
            className: nE.XG,
            children: [
                (0, l.jsx)(nj, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(t4.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(ne.V, {
                        className: nI.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                ne.V.Item,
                                { className: nI.YU, id: nf.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                nf.mU.ALL,
                            ),
                            (0, nf.g2)(t.id).map((e) => {
                                let { value: t, label: n } = e;
                                return (0, l.jsx)(
                                    ne.V.Item,
                                    { className: nI.YU, id: t, children: `${n} ${null != h[t] ? `(${h[t]})` : ""}` },
                                    t,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == n
                    ? (0, l.jsx)(g.y, { className: nE.u1 })
                    : n?.map((e, t) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: nI.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: nE.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(nx, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(np, { onClick: i }) : null,
                                          ],
                                      }),
                                  ],
                              },
                              t,
                          ),
                      ),
            ],
        }),
    });
};
var ny = n(370876),
    nb = n(28863),
    n_ = n(364522),
    nv = n(792831),
    nN = n(211862);
let nT = function (e) {
    let t,
        {
            searchQuery: n,
            setSearchQuery: i,
            mostRecentQuery: s,
            handleClearSearch: r,
            handleSearchKeyPress: a,
            handleCreateOrAddGuild: o,
            searchResults: d,
            searchFetching: c,
        } = e;
    if (c) t = (0, l.jsx)("div", { className: nE.$$, children: (0, l.jsx)(g.y, { className: nE.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, l.jsx)(nb.Anchor, { onClick: o, children: e }, t);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        t = (0, l.jsxs)("div", {
            className: nN.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: nN.av, children: e }),
            ],
        });
    } else t = (0, l.jsx)("div", { className: nE.vY, children: d.map((e) => (0, l.jsx)(nx, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: nE.$$,
        children: (0, l.jsxs)(n_.Ar, {
            className: nE.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: nN.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nN.Dr,
                            children: [
                                (0, l.jsx)(tO.D, {
                                    onClick: r,
                                    className: nN.UE,
                                    children: (0, l.jsx)(nv.A, { direction: nv.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: nN.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(t8.I, {
                            query: n,
                            "aria-label": z.intl.string(z.t.nL2wKD),
                            placeholder: z.intl.string(z.t.nL2wKD),
                            onChange: i,
                            onClear: r,
                            onKeyDown: a,
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
};
var nS = n(650583);
let nR = function (e) {
    let { channel: t, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([t3.A], () => {
            let e = t3.A.getCurrentCategoryId(t.id),
                n = t3.A.getDirectoryEntries(t.id, e === nf.mU.ALL ? null : e),
                i = t3.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: t3.A.getDirectoryAllEntriesCount(t.id),
                isLoading: t3.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(t.id);
            null != e &&
                (0, t0.ack)(
                    t.id,
                    {
                        object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                        objectType: eo.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    e,
                );
        },
        [t.id],
    );
    let u = s.useMemo(
            () =>
                null != a
                    ? (function (e, t) {
                          if (t !== nf.mU.ALL) return [{ entries: (0, ny._t)(e), appendEndCard: !0 }];
                          let n = [],
                              i = (0, ny.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && n.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, ny.DN)(s)).length > 0 &&
                                  n.push({ header: z.intl.string(z.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              n
                          );
                      })(Object.values(a), r)
                    : null,
            [a, r],
        ),
        {
            mostRecentQuery: h,
            searchFetching: A,
            searchResults: x,
        } = (0, m.cf)([t2.A], () => {
            let { mostRecentQuery: e, fetching: n } = t2.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: t2.A.getSearchResults(t.id, e) };
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
            (t1.Yc(t.id), t1.YS(t.id), E(e));
        }, [t.id]),
        s.useEffect(() => {
            en.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [t.id, i.id, r]));
    let y = (0, t7.b)(t),
        b = s.useMemo(
            () =>
                y
                    ? () => {
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("122326"),
                                  n.e("533651"),
                                  n.e("554970"),
                                  n.e("140606"),
                                  n.e("419580"),
                                  n.e("197804"),
                                  n.e("756856"),
                                  n.e("796349"),
                              ]).then(n.bind(n, 579735));
                              return (n) =>
                                  (0, l.jsx)(e, {
                                      ...n,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: r === nf.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, t.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === nS.dh.ENTER &&
            (t1.Se(t.id, f),
            en.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: t.id, directory_guild_id: i.id }));
    }
    function v() {
        (E(""), t1.BA(t.id));
    }
    return I
        ? (0, l.jsx)(nT, {
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
          ? (0, l.jsx)("div", { className: nE.$$, children: (0, l.jsx)(g.y, { className: nE.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: nE.$$, children: (0, l.jsx)(t9, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(nC, {
                  channel: t,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      t1.uU(t.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var nM = n(826673),
    nO = n(93055),
    nL = n(47167),
    nP = n(688438),
    nD = n(353428),
    nk = n(976860),
    nw = n(288254),
    nU = n(873614),
    nG = n(649852),
    nF = n.n(nG),
    nH = n(811893),
    nB = n(789645),
    nV = n(163126),
    nY = n(182061),
    nW = n(886393),
    nz = n(307623),
    nq = n(660273),
    nX = n(707792),
    nK = n(41402),
    n$ = n(271456),
    nQ = n(200273),
    nJ = n(565846),
    nZ = n(57907),
    n0 = n(375500),
    n1 = n(707653),
    n2 = n(50268),
    n3 = n(378570),
    n7 = n(162199),
    n5 = n(713608),
    n6 = n(473503),
    n9 = n(901472),
    n8 = n(267102),
    n4 = n(474397),
    ie = n(486974),
    it = n(39470);
function ii(e) {
    let { channel: t } = e,
        n = s.useContext(en.AnalyticsContext),
        i = (0, n8.aL)(),
        r = z.intl.string(it.default["Beo/7v"]),
        { firstMessage: a } = (0, n6.OA)(t),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(th.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, n3.iN)(t.id),
                      (0, n4.A)(),
                      (0, n9.z)(t.guild_id, d, t.id, {
                          modViewPanel: ie.g.INFO,
                          sourceLocation: location ?? n.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: n5.q,
              "aria-label": r,
          })
        : null;
}
var il = n(780338),
    is = n(782603),
    ir = n(857071),
    ia = n(607508),
    io = n(914703),
    id = n(37411);
function ic(e) {
    let { channel: t } = e,
        n = (0, ia.X)(t),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([ir.A], () => null != t.guild_id && ir.A.isLurking(t.guild_id));
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
    return (0, l.jsx)(ti.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(io.A, { ...e, channel: t, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: n === id.CP.NO_MESSAGES ? il.BellSlashIcon : is.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var iu = n(747926);
function ih(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(ti.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(im, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: ta.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function im(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nq.A)(t, "Sidebar Overflow"),
        r = (0, nK.A)(t),
        a = (0, nZ.A)(t),
        o = (0, n0.A)(t),
        d = (0, nY.A)(t),
        c = (0, nX.A)(t),
        u = (0, nJ.A)(t.id),
        h = (0, nQ.A)(t),
        m = (0, nz.A)(t),
        A = (0, nW.A)(t),
        p = (0, n2.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, n1.A)(t),
        x = (0, n$.A)(t),
        f = (0, nV.$)(1e3);
    function E() {
        (0, n3.iN)(t.id);
    }
    function I(e) {
        let n = nF()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === t.id && n();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(tl.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ts.rX, {
                children: [s, (0, l.jsx)(ts.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(ts.rX, { children: [a, o] }),
            (0, l.jsxs)(ts.rX, { children: [h, r, u, x] }),
            (0, l.jsxs)(ts.rX, {
                children: [
                    (0, l.jsx)(ts.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nH.t,
                        trailingIndicator: { type: "icon", icon: nH.t },
                        action: function () {
                            (I(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E());
                        },
                    }),
                    (0, l.jsx)(ts.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nH.t,
                        trailingIndicator: { type: "icon", icon: nH.t },
                        action: function () {
                            (I(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(ts.rX, { children: [g, d, c, m] }),
            (0, l.jsxs)(ts.rX, { children: [A, p] }),
        ],
    });
}
function iA(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, l.jsx)(th.Ay.Icon, {
            icon: nB.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, iu.xu)((0, n7.j)(t), n ?? t.parent_id),
        });
    return t.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  t.isForumPost() ? null : (0, l.jsx)(ic, { channel: t }),
                  t.isModeratorReportChannel() ? (0, l.jsx)(ii, { channel: t }) : null,
                  (0, l.jsx)(ih, { channel: t }),
                  i,
              ],
          });
}
var ip = n(31717),
    ig = n(853742),
    ix = n(85190);
function iE(e) {
    let { channelId: t } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([tv.A], () => tv.A.getGuild(i?.getGuildId())),
        o = (0, nL.Ay)(i),
        d = (0, nw.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, ig.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(nU.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iA, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: ip.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nD.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("955557"),
                                n.e("947502"),
                                n.e("965789"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, nk.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ix.T,
                children: (0, l.jsx)(nP.A, { channel: i, guild: a, chatInputType: tI.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var iI = n(925166),
    ij = n(605117),
    iC = n(857253),
    iy = n(872363),
    ib = n(73153);
let i_ = function (e, t) {
    ib.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
};
var iv = n(561446),
    iN = n(300233),
    iT = n(499211),
    iS = n(468689),
    iR = n(529942),
    iM = n(739455),
    iO = n(709017);
function iL(e) {
    let { guildId: t } = e;
    return (0, l.jsx)("div", {
        className: iO.t7,
        children: (0, l.jsxs)("div", {
            className: iO.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iO.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iO.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iO.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iR.rf)(t),
                                        iS.A.open(t, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iM.Fx)(t));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iP = n(599941),
    iD = n(29385),
    ik = n(950344),
    iw = n(217530),
    iU = n(162093),
    iG = n(325348);
function iF(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, iD.e)({ guildId: t, channelId: n }),
        r = (0, iP.uk)(t),
        a = (0, iP.Tq)(t),
        o = (0, m.bG)([tv.A], () => tv.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        u = (0, nL.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let t of r) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [r]);
    return ((0, ik.A)({
        guildId: t,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iG.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iG.__invalid_spinner }),
          })
        : (0, l.jsxs)(n_.Ar, {
              className: iG.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iG.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iG.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iw.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iU.A,
                                  {
                                      guildId: t,
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
var iH = n(483510);
function iB(e) {
    let { channelId: t } = e,
        n = (function (e) {
            let { hasUnread: t, mentionCount: n } = (0, m.cf)(
                [eQ.Ay],
                () => ({
                    hasUnread: null != e && eQ.Ay.hasUnread(e),
                    mentionCount: null != e ? eQ.Ay.getMentionCount(e) : 0,
                }),
                [e],
            );
            return s.useMemo(() => {
                if (0 === n) {
                    if (!t) return;
                    return { type: "unread", position: "bottom" };
                }
                return { type: "important", position: "bottom", text: String(n) };
            }, [n, t]);
        })(t),
        i = (0, iH.HP)(t),
        r = (0, m.bG)([ew.A], () => ew.A.getBasicChannel(t)?.guild_id, [t]);
    return (0, l.jsx)(th.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: tk.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i ? (0, iH.m)(t) : (0, iH.ci)(r, t);
        },
        selected: i,
        badge: n,
    });
}
var iV = n(358047),
    iY = n(284252);
function iW(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iV.Ay], () => iV.Ay.getSection(t), [t]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([tY.A], () => (tY.A.getChannelConversations(t)?.length ?? 0) > 0, [t]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(th.In, {
        onClick: I.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: tk.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iY.q : void 0,
        selected: n,
        badge: r,
    });
}
var iz = n(967198);
function iq(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iV.Ay], () => iV.Ay.getSection(t)),
        i = (0, m.bG)([iz.A], () => iz.A.getGuildId()),
        s = n === eo.YvQ.MEMBERS;
    return (0, l.jsx)(th.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !s }),
                I.A.toggleMembersSection());
        },
        selected: s,
    });
}
var iX = n(187360),
    iK = n(366605),
    i$ = n(945830);
let iQ = function (e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        [i, r] = s.useState(!1),
        a = (0, n8.aL)(),
        o = s.useRef(null),
        d = s.useCallback(() => {
            n || r((e) => !e);
        }, [n]),
        c = (0, m.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(t.id), [t]),
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
        (0, l.jsx)(ti.Y, {
            targetElementRef: o,
            shouldShow: i,
            animation: ti.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => r(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(i$.A, { ...e, onJump: h, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, l.jsx)(th.In, {
                    ...e,
                    ref: o,
                    onClick: d,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iK.t,
                    iconSize: 20,
                    "aria-label": z.intl.string(z.t["mp1N/2"]),
                    disabled: n,
                    badge: u,
                    selected: i,
                });
            },
        })
    );
};
var iJ = n(306788),
    iZ = n(863922),
    i0 = n(822074),
    i1 = n(521732);
function i2(e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        i = (0, m.bG)([i0.A], () => i0.A.shouldShowTopicsBar());
    return (0, l.jsx)(th.Ay.Icon, {
        icon: iJ.K,
        onClick: function () {
            (en.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: i1.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, iZ.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: n,
    });
}
var i3 = n(885574),
    i7 = n(947094),
    i5 = n(919577),
    i6 = n(207777),
    i9 = n(422844),
    i8 = n(435470),
    i4 = n(892110),
    le = n(45494);
function lt(e) {
    let { channel: t } = e,
        n = (0, i8.S4)(t),
        i = (0, m.bG)([i7.A], () => i7.A.hasHidden(t.id)),
        s = (0, i4.l)(t.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, i9.R)(t.id),
        d = (0, m.bG)(
            [i6.A, le.A],
            () => !!(i6.A.getThreadIds(t.id, r, a, o).length > 0) || !!(le.A.getThreads(t.id, r, a, o).length > 0),
            [t.id, r, a, o],
        ),
        c = t.isMediaChannel();
    if (!n || s || (c && d)) return null;
    let u = i
        ? c
            ? z.intl.string(z.t["WP/IE1"])
            : z.intl.string(z.t.zfq9V4)
        : c
          ? z.intl.string(z.t.p60yF1)
          : z.intl.string(z.t.SNOqYC);
    return (0, l.jsx)(th.In, {
        tooltip: u,
        icon: i3.CircleInformationIcon,
        onClick: function () {
            return i5.A.hideAdminOnboarding(t.id, !i);
        },
        selected: !i,
    });
}
var ln = n(290136),
    li = n(975571),
    ll = n(490094);
function ls() {
    let e = z.intl.string(ll.default.pdipXI);
    return (0, l.jsx)(th.In, {
        tooltip: e,
        icon: ln.CircleQuestionIcon,
        onClick: function () {
            window.open(li.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lr = n(742589),
    la = n(43105),
    lo = n(428689),
    ld = n(978940),
    lc = n(387755),
    lu = n(730852),
    lh = n(641703),
    lm = n(379848),
    lA = n(753727),
    lp = n(625075),
    lg = n(222692),
    lx = n(442353),
    lf = n(470710),
    lE = n(186111),
    lI = n(192820),
    lj = n(994500),
    lC = n(977997),
    ly = n(818023),
    lb = n(49999),
    l_ = n(731854);
class lv extends s.PureComponent {
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
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: s,
                channel: r,
                mode: a,
                isProvisional: o,
            } = this.props;
        if (t || (n && a === eo._Of.VOICE)) return null;
        let d = r.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = z.intl.string(z.t.izMR7o)))
                : lI.Ay.supports(l_.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : n && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lp.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(th.Ay.Icon, { icon: lo.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: s,
                channel: r,
                dismissibleContentTypes: a,
                isProvisional: o,
            } = this.props;
        if (t) return null;
        let d = r.isManaged(),
            c = !1;
        o
            ? ((c = !0), (e = z.intl.string(z.t.izMR7o)))
            : i
              ? ((e = d ? z.intl.string(z.t.LW2Ghr) : z.intl.string(z.t.rF7lN5)), (c = !0))
              : s
                ? ((e = z.intl.string(z.t.PHzjvX)), (c = !0))
                : (e = n
                      ? d
                          ? z.intl.string(z.t.S0W8Z5)
                          : z.intl.string(z.t.fdEeb5)
                      : d
                        ? z.intl.string(z.t.S0W8Z5)
                        : z.intl.string(z.t.focH1t));
        let u = (0, l.jsx)(th.Ay.Icon, {
            ref: this.iconRef,
            icon: ld._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lm.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(la.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: ly.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(lb.i.USER_DISMISS),
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
    handleStartCall = (e, t) => {
        let { channel: n, notFriend: i, appContext: l } = this.props,
            s = i ? n.getRecipientId() : null;
        function r() {
            return lc.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        }
        t ? (0, lx.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lu.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, nM.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lb.i.AUTO }),
            t)
        );
        else if (n) return this.handleJoinCall(!1);
        else return this.handleStartCall(e, !1);
    };
    handleStartVideoCall = (e) => {
        this.handleStartCall(e, !0);
    };
    handleJoinVideoCall = () => {
        let { appContext: e } = this.props,
            t = () => this.handleJoinCall(!0);
        (0, lx.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, lg.A)();
    };
}
function lN(e) {
    let { channel: t } = e,
        n = (0, lA.A)(),
        i = (0, m.bG)([tf.A], () => tf.A.getMode(t.id)),
        s = (0, m.bG)([lC.A], () => lC.A.isInChannel(t.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lf.A], () => ({
            callActive: lf.A.isCallActive(t.id),
            callUnavailable: lf.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lj.A], () => ({
            notFriend: t.type === eo.rbe.DM && null != d && !lj.A.isFriend(d),
            isBlocked: t.type === eo.rbe.DM && null != d && lj.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, n8.Us)(),
        g = [],
        x = (0, lh.A)(t.id),
        f = (0, m.bG)([lE.A], () => lE.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(lv, {
              channel: t,
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
var lT = n(452015),
    lS = n(765178),
    lR = n(231483),
    lM = n(544231),
    lO = n(338510),
    lL = n(151119),
    lP = n(278941),
    lD = n(665909),
    lk = n(327337);
let lw = s.memo(function (e) {
    let { channel: t } = e,
        i = (0, lO.u)(t.id),
        r = (0, lL.S)(t.id),
        a = (0, lP.e)(t.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lE.A], () => lE.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lS.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lM.xi)(t.id, [a.id]);
            }, 5e3),
            (0, lD.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lD.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lS.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lM.bg)(t.id);
                }, 5e3)));
    }, [t, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lD.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lD.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lM.xi)(t.id, [a.id]),
            null != i &&
                ((0, p.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("456510"),
                            n.e("506627"),
                            n.e("770940"),
                            n.e("302033"),
                            n.e("623068"),
                        ]).then(n.bind(n, 516567));
                        return (n) => {
                            let { onClose: s, transitionState: r } = n;
                            return (0, l.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: s,
                                transitionState: r,
                            });
                        };
                    },
                    { modalKey: lk.V },
                ),
                (0, lD._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lD.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, t]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(th.Ay.Icon, {
                  icon: lR.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lU = n(262763),
    lG = n(406704),
    lF = n(576705);
let lH = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, lA.A)(),
        i = (0, m.bG)([lC.A], () => lC.A.isInChannel(t.id)),
        r = (0, m.bG)([lC.A], () => !u().isEmpty(lC.A.getVoiceStatesForChannel(t.id))),
        a = (0, m.bG)([lF.A], () => lF.A.can(eo.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, iT.A)(t.id),
        d = (0, lG.Id)(t),
        { enabled: c } = lG.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lU.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [t, i, o]);
    return (s.useEffect(() => {
        if (c)
            return (
                ei._.subscribe(eo.jej.CALL_START, h),
                () => {
                    ei._.unsubscribe(eo.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !n && !i && a && d && t.isVocalThread())
        ? (0, l.jsx)(th.Ay.Icon, {
              icon: ld._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lB = n(812991),
    lV = n(47675),
    lY = n(999291);
function lW() {
    let [e, t] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            function e() {
                t(window.innerWidth >= 1132);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        e
    );
}
function lz(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        i = (0, m.bG)([iV.Ay], () => iV.Ay.getSection(t.id, t?.isDM())),
        s = (0, lY.Ay)(t.getRecipientId()),
        r = lW(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(th.In, {
        disabled: !r || n,
        tooltip: !r || n ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lB.n,
        onClick: function () {
            ((0, lV.am)({ displayProfile: s, isProfileOpen: !a }), I.A.toggleUserProfileSidebarSection());
        },
        selected: a && !n,
    });
}
let lq = {};
class lX extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            lq[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = lq[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return lq;
    }
}
let lK = new lX(ib.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = lq[n];
        return null == i ? ((lq[n] = new Set()), lq[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != lq[t.id] && !t.unavailable && (delete lq[t.id], !0);
    },
});
var l$ = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lQ = n(376943),
    lJ = n(394953),
    lZ = n(683063),
    l0 = n(403581),
    l1 = n(241541),
    l2 = n(709066),
    l3 = n(87664),
    l7 = n(247676),
    l5 = n(695526),
    l6 = n(927813),
    l9 = n(427358),
    l8 = n(945810);
let l4 = (0, l8.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var se = n(280450),
    st = n(851746),
    sn = n(103411);
function si() {
    let e = (0, sn.m)(),
        t = (0, m.bG)([st.A], () => st.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != t && t > 0,
        currentUserId: (0, m.bG)([se.default], () => se.default.getId()),
    };
}
var sl = n(315629),
    ss = n(744413),
    sr = n(303682),
    sa = n(224370),
    so = n(544879);
function sd(e) {
    let {
            analyticsLocation: t,
            markAsDismissed: n,
            className: i,
            title: s = z.intl.string(z.t["DMie/y"]),
            body: r = z.intl.string(z.t.u0HAhn),
            ctaText: o = z.intl.string(z.t.Lm2nFc),
            onPrimaryAction: d,
        } = e,
        { analyticsLocations: c } = (0, P.Ay)(t);
    return (0, l.jsxs)(sl.h, {
        color: "purple",
        className: a()(sa.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsx)(tO.D, {
                className: sa.VN,
                "aria-label": z.intl.string(z.t.H2NPrR),
                onClick: function () {
                    n(lb.i.USER_DISMISS);
                },
                children: (0, l.jsx)(nB.P, { size: "xs", color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: sa.lj,
                children: [
                    (0, l.jsx)("img", { className: sa.Dp, src: so.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sa.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: sa.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: sa.rf,
                                children: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sa.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (n(lb.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, ss.jM)({
                                  startingScreen: sr.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sc = n(349420);
let su = { cooldownDurationMs: 60 * l6.A.Millis.DAY };
function sh(e) {
    let { channel: t } = e,
        n = (function (e) {
            let { isInTreatment: t } = {
                    isInTreatment: l4.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: n, currentUserId: i } = si(),
                l = (0, m.bG)(
                    [l9.A, lj.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i || lj.A.isBlockedOrIgnored(e)) return !1;
                            let t = l9.A.getUserAffinity(e);
                            return null != t && null != t.communicationRank && t.communicationRank <= 20;
                        }),
                    [e.recipients, i],
                );
            return !!n && !!t && !!l;
        })(t);
    return (0, l.jsx)(lm.zJ, {
        contentType: n ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: su,
        groupName: lb.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sd, {
                      className: sc.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: n,
                  });
        },
    });
}
n(667532);
var sm = n(403362);
n(696101);
let sA = [],
    sp = er.Ay.getEnableHardwareAcceleration();
function sg(e) {
    let { user: t, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, m.bG)([lj.A], () => lj.A.getNickname(t.id)),
        h = (0, l3.A)(t.id),
        A = s.useRef(null);
    function p(e) {
        (0, j.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("463317"),
                n.e("926132"),
                n.e("893190"),
                n.e("146652"),
                n.e("189673"),
                n.e("882073"),
                n.e("797558"),
                n.e("691994"),
                n.e("576665"),
                n.e("624198"),
                n.e("245996"),
                n.e("700792"),
                n.e("592822"),
                n.e("529422"),
                n.e("823427"),
                n.e("307059"),
                n.e("309291"),
                n.e("528864"),
            ]).then(n.bind(n, 778595));
            return (n) => (0, l.jsx)(e, { ...n, user: t, channel: i });
        });
    }
    function g() {
        let e = `@${es.Ay.getUserTag(t, { decoration: "never" })}`,
            n = `<@${t.id}>`;
        (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
            M.A.startTyping(i.id));
    }
    let x = (0, D.r)({ user: t }),
        [f, E] = s.useState(!1);
    return (0, l.jsx)(X.A, {
        targetElementRef: A,
        user: t,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => E(!1),
        children: (e) => {
            let { onClick: n, onMouseDown: s, ...m } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: A,
                    user: t,
                    currentUser: d,
                    isOwner: t.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: sp,
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
                t.id,
            );
        },
    });
}
function sx(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sf(e) {
    let { channel: t } = e,
        n = ee.default.getCurrentUser(),
        i = n?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(L.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lj.A, ee.default, Q.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = ee.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(sm.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lj.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sA,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sA });
                let s = [];
                for (let e of i) {
                    let t = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(t);
                }
                return { listItems: s };
            },
            [t],
            sx,
        );
    s.useEffect(() => {
        en.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, l7.A)({ useNitroCapExperiment: !0 }),
        h = (0, l5.qH)(),
        A = t.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(n_.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sh, { channel: t }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(lZ.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(l0.t, {
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
                                o && (0, l.jsx)(l2.A, { type: l2.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sg,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lT.NE, {
                                      channel: t,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: l1.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lT.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sE = n(322338),
    sI = n(898029),
    sj = n(36537);
function sC() {
    return (0, l.jsx)("div", {
        className: sj.zt,
        children: (0, l.jsx)("header", {
            className: sI.wL,
            children: (0, l.jsxs)("div", {
                className: sI.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sI.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sI.u1,
                            itemClassName: sI.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sy = n(138298),
    sb = n(940382),
    s_ = n(747376),
    sv = n(718734),
    sN = n(163328),
    sT = n(425557),
    sS = n(270003),
    sR = n(150934),
    sM = n(452027),
    sO = n(95477),
    sL = n(281595),
    sP = n(465532),
    sD = n(579872),
    sk = n(119031),
    sw = n(408018),
    sU = n(479909),
    sG = n(822610),
    sF = n(915089),
    sH = n(314307),
    sB = n(636922),
    sV = n(931664),
    sY = n(631576),
    sW = n(885386),
    sz = n(232835),
    sq = n(522602),
    sX = n(806150),
    sK = n(518960),
    s$ = n(753738);
function sQ(e, t) {
    return { type: e, message: t ?? null };
}
function sJ(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
var sZ = n(659617),
    s0 = n(474078),
    s1 = n(636537),
    s2 = n(152367),
    s3 = n(147087);
async function s7(e) {
    try {
        let t = await s1.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, s1.fT)(),
        });
        return t.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var s5 = n(55294),
    s6 = n(143161),
    s9 = n(909833);
let s8 = tI.oU.THREAD_CREATION;
function s4(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        { analyticsLocations: r } = (0, P.Ay)(L.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: s6.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: ip.C.FirstThreadMessage }),
                          (0, l.jsx)(re, { parentChannelId: t }),
                          (0, l.jsx)(rt, { parentChannel: s, parentMessageId: n, location: i }),
                      ],
                  }),
              }),
          });
}
function re(e) {
    let { parentChannelId: t } = e,
        n = s.useCallback(() => {
            let e = ip.A.getThreadSettings(t),
                n = ip.A.getDraft(t, ip.C.FirstThreadMessage).trim(),
                i = sq.A.getUploads(t, ip.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? sD.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, iu.bA)(t);
                      },
                  })
                : (0, iu.bA)(t);
        }, [t]);
    return (0, l.jsxs)(th.Ay, {
        toolbar: (0, l.jsx)(th.Ay.Icon, { icon: nB.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: n }),
        children: [
            (0, l.jsx)(th.Ay.Icon, { icon: sN.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(th.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function rt(e) {
    let t,
        { parentChannel: n, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        d =
            ((t = s.useContext(eJ.EH)),
            s.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, t) {
            let n = (0, m.bG)([ip.A], () => ip.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(n),
                r = s.useCallback(
                    (n) => {
                        (l((e) => ({ ...e, ...n })), sP.A.changeThreadSettings(e.id, { ...n, parentMessageId: t }));
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(n, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, t) {
            let [n, i] = s.useState((0, sw.N3)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        let l = ip.A.getDraft(e.id, ip.C.FirstThreadMessage);
                        ((0 === l.length || !0 === n) && i((0, sw.ur)(l)), t(ip.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        n(!0),
                        ip.A.addChangeListener(n),
                        () => {
                            ip.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, u),
        g = (0, sZ.EN)(n),
        {
            isGeneratingAI: x,
            enableAIFeatures: f,
            getThreadNameInputAccessory: E,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    updateThreadSettings: i,
                    threadSettings: r,
                    textAreaState: a,
                } = e,
                [o, d] = s.useState(!1),
                [c, u] = s.useState(!1),
                h = (0, s3.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != n) {
                                let i = sz.A.getMessage(t.id, n);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let t = await s7(e);
                                null != t && "" !== t.trim() && i({ name: t });
                            }
                        } finally {
                            d(!1);
                        }
                    }
                }, [t.id, n, i, h, a.textValue]);
            (s.useEffect(() => {
                (u(!1), d(!1), t.id === r.parentChannelId && n !== r.parentMessageId && i({ name: "" }));
            }, [n, i, t.id, r.parentChannelId, r.parentMessageId]),
                s.useEffect(() => {
                    (null != r.name && "" !== r.name.trim()) || c || (h && null != n && (u(!0), m()));
                }, [t.id, n, i, r.name, c, h, m]));
            let A = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: s2.D,
                                onClick: m,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || o || (null == n && a.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, m, o, n, a.textValue],
                ),
                p = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(tL.K, {
                                      icon: s2.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: m,
                                      disabled: e || o || (null == n && a.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, n, a.textValue, m],
                );
            return {
                isGeneratingAI: o,
                generateAIName: m,
                enableAIFeatures: h,
                renderAiGenerateButton: p,
                getThreadNameInputAccessory: A,
            };
        })({ parentChannel: n, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: A }),
        {
            nameError: I,
            messageError: j,
            submit: C,
            submitting: y,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
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
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: iu.JA,
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
                                (l = sV.A.getStickerPreview(t.id, s8.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sq.A.getUploads(t.id, ip.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sQ(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sQ(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, sX.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: s8,
                            channel: null == n ? t : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), sQ(1, (0, s$.cw)(x, t?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sQ(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sY.x5)(t.id, s8.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
                    },
                    [p, r.textValue, i.name, n, t, m, o],
                ),
                submitting: m,
            };
        })({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: g,
            textAreaState: A,
            location: r,
            enableAIFeatures: f,
        }),
        b = (0, sZ.Iy)(c, g) ? sT.t : sN.y;
    return (0, l.jsx)("div", {
        className: s6.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(s6.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: s6.Zd,
                children: [
                    (0, l.jsx)(n_.Ip, {
                        className: s6.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: s6.bv,
                            children: [
                                (0, l.jsxs)(sH.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(s9.P0, s6.P0),
                                            children: (0, l.jsx)(b, { className: s9.Kk }),
                                        }),
                                        (0, l.jsxs)(sS.n, {
                                            children: [
                                                (0, l.jsx)(ri, {
                                                    parentChannel: n,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: I,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: E,
                                                }),
                                                (0, l.jsx)(rn, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rs, { parentChannel: n, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: s6.Eh,
                        children: [
                            (0, l.jsx)(rl, {
                                parentChannel: n,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(sk.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: s6.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rn(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, sZ.Iy)(n, s),
        a = (0, l.jsx)(sR.S, {
            disabled: s === sZ.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return t || s === sZ.jk.Disabled
        ? null
        : (0, l.jsx)(sM.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function ri(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            updateThreadSettings: s,
            error: r,
            disabled: a,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = sJ(r, { content: u }),
        m = (0, sZ.l1)(t, n),
        A = null != n && !d,
        p = (0, sF.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sO.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, s0.A)(e, !1) }), "" !== e ? M.A.startTyping(t.id) : M.A.stopTyping(t.id));
        },
        onBlur: function () {
            let e = (0, s0.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rl(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, n, l) => {
                (sP.A.saveDraft(t.id, n, ip.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== n && e.textValue !== n ? M.A.startTyping(t.id) : "" === n && M.A.stopTyping(t.id),
                            { textValue: n, richValue: l }
                        ),
                    ));
            },
            [t.id, i],
        ),
        g = s.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return r(t, i, n);
            },
            [r],
        );
    ((0, eJ.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, eJ.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: A }));
    let x = (0, m.bG)([lF.A], () => lF.A.can(eo.xBc.ATTACH_FILES, t)),
        f = sJ(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sG.A, { channelId: t.id, type: s8, canAttachFiles: x }),
            (0, l.jsx)("div", { className: s6.xN, children: (0, l.jsx)(sL.U, { error: f }) }),
            (0, l.jsx)(sU.Ay, {
                type: s8,
                channel: t,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: a()(s6.gM, s6.Yy),
                innerClassName: a()(s6.SL, { [s6.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: sK.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function rs(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, m.bG)([sz.A], () => (null == n ? null : sz.A.getMessage(t.id, n))),
        s = sW.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sB.A, {
              className: s6.IL,
              message: i,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rr = n(305866),
    ra = n(707539),
    ro = n(751479),
    rd = n(272736);
function rc(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, e4.ni)(t),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            (n || (0, ra.D3)("Popout"), i(!n));
        }, [n]);
    return (0, l.jsx)(ti.Y, {
        targetElementRef: r,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: o,
        renderPopout: function () {
            return (0, l.jsx)(rr.l, {
                children: (0, l.jsx)(ro.A, { className: rd.T, channel: t, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(th.In, {
                ...e,
                ref: r,
                className: rd.Kk,
                onClick: d,
                icon: sN.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: n ? null : z.intl.string(z.t.B2panI),
                disabled: a,
                selected: n,
            });
        },
    });
}
var ru = n(40389),
    rh = n(148494),
    rm = n(56562);
function rA(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(ti.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(rp, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: ta.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function rp(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nY.A)(t),
        r = (0, nX.A)(t),
        a = (0, nJ.A)(t.id),
        o = (0, nQ.A)(t),
        d = (0, n2.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, nW.A)(t),
        h = (0, nz.A)(t),
        A = (0, nq.A)(t, "Toolbar Overflow"),
        p = (0, nK.A)(t),
        g = (0, ru.A)(t),
        x = (0, n1.A)(t),
        f = (0, n$.A)(t),
        E = t.isThread()
            ? (0, l.jsx)(ts.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rh.A.jumpToMessage({ channelId: t.id, messageId: "0", jumpType: rm.vx.INSTANT });
                  },
              })
            : null,
        I = sW.SY.useSetting(),
        j = (0, m.bG)([lC.A], () => !u().isEmpty(lC.A.getVoiceStatesForChannel(t.id))),
        C = (0, m.bG)([ew.A], () => null != t.parent_id && ew.A.getChannel(t.parent_id)?.type === eo.rbe.GUILD_APP, [
            t.parent_id,
        ]);
    return (0, l.jsxs)(tl.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ts.rX, { children: [A, g] }),
            (0, l.jsxs)(ts.rX, {
                children: [
                    E,
                    o,
                    p,
                    a,
                    !I || j || C
                        ? null
                        : (0, l.jsx)(ts.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, iu.JA)(t);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(ts.rX, { children: [x, s, r, h] }),
            (0, l.jsxs)(ts.rX, { children: [c, d] }),
        ],
    });
}
var rg = n(332456),
    rx = n(806411),
    rf = n(973854),
    rE = n(62502);
function rI(e) {
    var t;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([tv.A], () => tv.A.getGuild(d?.getGuildId())),
        h = (0, nL.Ay)(d),
        A = (0, nw.Uf)(d);
    ((t = d),
        (i = (0, m.bG)([lC.A], () => null != t && !u().isEmpty(lC.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            i &&
                null != t &&
                (ib.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, n3.N9)(t, { source: id.H9.VOICE_AUTO_OPEN }));
        }, [i, t]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rg.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rx.q)(d.id), channel_view: o }),
                (0, rf.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(nU.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(iA, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: ip.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nD.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("955557"),
                                n.e("947502"),
                                n.e("965789"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, n3.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rE.T,
                children: (0, l.jsx)(nP.A, { channel: d, guild: c, chatInputType: tI.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rj = n(210714),
    rC = n(402860),
    ry = n(707554),
    rb = n(140735),
    r_ = n(590180),
    rv = n(372320),
    rN = n(562153);
let rT = (0, l8.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rS(e) {
    return rT.useConfig({ location: e }).enabled;
}
var rR = n(215530),
    rM = n(454719),
    rO = n(736653),
    rL = n(311016),
    rP = n(480335),
    rD = n(713517),
    rk = n(397562),
    rw = n(183555),
    rU = n(718019),
    rG = n(977059),
    rF = n(915614),
    rH = n(308244),
    rB = n(743987),
    rV = n(900179),
    rY = n(946356),
    rW = n(465829),
    rz = n(35241),
    rq = n(587168),
    rX = n(442228),
    rK = n(744808);
let r$ = (0, l8.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rQ = n(827428);
function rJ(e) {
    let { type: t, anchor: n } = e;
    return "staple" === t && "bottom" !== n;
}
function rZ(e) {
    let { context: t, analyticsLocations: n, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = r$.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lV.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rQ.lS,
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
              className: rQ.qr,
              children: (0, l.jsx)(tO.D, {
                  onClick: o,
                  className: rQ.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rQ.xQ, children: [(0, l.jsx)(rK.A, { frame: i, filterLayer: rJ }), d] })
        : d;
}
var r0 = n(518477),
    r1 = n(996988),
    r2 = n(207634),
    r3 = n(561419),
    r7 = n(396095);
function r5(e) {
    let { user: t, channel: n, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rL.A)(t.id),
        o = (0, lY.Ay)(t.id),
        d = (0, rO.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, rw.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rk.A)(u, o, r0.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rD.A)(m);
    function g() {
        (0, rC.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(rw.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rY.A, {
                ref: m,
                user: t,
                displayProfile: o,
                themeType: r1.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(r3.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(n_.d_, {
                        className: i ? r3.BE : void 0,
                        children: [
                            (0, l.jsx)(rq.A, { children: (0, l.jsx)(rz.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: r3.wx,
                                children: [
                                    (0, l.jsx)(rF.A, {
                                        user: t,
                                        displayProfile: o,
                                        themeType: r1.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rU.A, {
                                        user: t,
                                        displayProfile: o,
                                        channelId: n.id,
                                        avatarSize: r2.T[r1.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r7.rf,
                                children: [
                                    (0, l.jsx)(rW.Ay, {
                                        user: t,
                                        guildId: n.guild_id,
                                        displayName: rN.Ay.getName(null, n.id, t),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rG.A, {
                                            displayProfile: o,
                                            themeType: r1.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(rX.A, {
                                                      userId: t.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rV.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rB.A, { userId: t.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rY.A.Overlay, {
                                              className: r7.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rV.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rH.A, {
                                                              userBio: o?.bio,
                                                              userId: t.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rV.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rB.A, { userId: t.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(rZ, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rP.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var r6 = n(331322),
    r9 = n(249790),
    r8 = n(254828),
    r4 = n(783123),
    ae = n(966430);
function at(e) {
    let { user: t, channel: n, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lY.Ay)(t.id),
        o = (0, rO.Ay)(),
        d = (0, m.bG)([lj.A], () => lj.A.isBlocked(t.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, rw.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rk.A)(c, a, r0.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(rw.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rY.A, {
                ref: h,
                user: t,
                displayProfile: a,
                themeType: r1.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(n_.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ae.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ae.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ae.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ae.N1,
                                        children: [
                                            (0, l.jsx)(r9.A, { user: t }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rN.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(r6.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(r4.A, {
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
                                            (0, l.jsx)(r8.A, {
                                                userId: t.id,
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
var an = n(941143),
    ai = n(717421),
    al = n(31956),
    as = n(673843),
    ar = n(594832),
    aa = n(321191),
    ao = n(679492),
    ad = n(439053),
    ac = n(312381),
    au = n(657538),
    ah = n(984545),
    am = n(193738),
    aA = n(413737),
    ap = n(394816),
    ag = n(695366),
    ax = n(922590),
    af = n(821269),
    aE = n(131607),
    aI = n(326084),
    aj = n(834708),
    aC = n(154486);
let ay = (0, l8.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var ab = n(158390),
    a_ = n(906573);
let av = new ab.A(30 * l6.A.Millis.SECOND, 5 * l6.A.Millis.MINUTE, !0),
    aN = 0;
async function aT() {
    if (a_.A.shouldFetch() && !(Date.now() < aN)) {
        ib.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
        try {
            let e = await s1.Bo.get({
                url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            (av.succeed(),
                (aN = 0),
                ib.h.dispatch({
                    type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                    version: String(e.body?.version ?? "0"),
                    targetIds: Array.isArray(e.body?.target_ids) ? e.body.target_ids.map((e) => String(e)) : [],
                }));
        } catch {
            ((aN = Date.now() + av.fail()),
                ib.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
        }
    }
}
var aS = n(504492);
function aR(e) {
    let { targetUserId: t } = e,
        { isInTreatment: n } = {
            isInTreatment: ay.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t) ?? null, [t]),
        r = (0, aj.d)(i),
        a = n && r,
        {
            isDismissed: o,
            hasFetched: d,
            version: c,
            dismiss: u,
        } = (function (e) {
            let {
                isDismissed: t,
                hasFetched: n,
                version: i,
            } = (0, m.cf)([a_.A], () => {
                let t = Number(a_.A.getVersion());
                return {
                    isDismissed: null != e && a_.A.isDismissedFor(e),
                    hasFetched: a_.A.hasFetched(),
                    version: Number.isFinite(t) ? t : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e && aT();
                }, [e]),
                {
                    isDismissed: t,
                    hasFetched: n,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (a_.A.isDismissedFor(e) ||
                                (ib.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                s1.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? t : null);
    return a && d && !o && null != i ? (0, l.jsx)(aM, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aM(e) {
    let { targetUser: t, version: i, onDismiss: r } = e,
        a = (0, aC.p)(t.id),
        [o, d] = (0, aE.RF)(a ? A.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lb.m.SIDEBAR, !0),
        c = s.useCallback(
            (e) => {
                (d(e), r());
            },
            [d, r],
        ),
        u = s.useCallback(
            (e) => {
                (en.default.track(eo.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: e }),
                    (0, p.openModalLazy)(async () => {
                        let [{ TrialsSharedConfirmationModal: e }, i] = await Promise.all([
                                Promise.resolve().then(n.bind(n, 809813)),
                                (0, aI.xm)([t.id]),
                            ]),
                            s = i.get(t.id) ?? aI.o.FAIL;
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                results: [{ recipient: t, status: s }],
                                isReminderConfirmation: !1,
                                showRecipientList: !1,
                                recipientName: es.Ay.getName(t),
                            });
                    }));
            },
            [t],
        );
    if (null == o) return null;
    let h = es.Ay.getName(t);
    return (0, l.jsx)(sd, {
        className: aS.K,
        analyticsLocation: L.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.dzQxHq),
        onPrimaryAction: u,
    });
}
var aO = n(93246),
    aL = n(351906),
    aP = n(383199),
    aD = n(559506),
    ak = n(361311),
    aw = n(931481),
    aU = n(791556),
    aG = n(501193),
    aF = n(383448),
    aH = n(646986),
    aB = n(243166),
    aV = n(812993),
    aY = n(123292),
    aW = n(840411);
let az = (0, l8.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aq = n(666810),
    aX = n(394300),
    aK = n(575593),
    a$ = n(498032),
    aQ = n(44120),
    aJ = n(75678),
    aZ = n(317560),
    a0 = n(99161),
    a1 = n(661492),
    a2 = n(146423),
    a3 = n(662349),
    a7 = n(479026),
    a5 = n(636374),
    a6 = n(699976),
    a9 = n(202541),
    a8 = n(733484),
    a4 = n(880465);
function oe(e) {
    let t,
        {
            sku: n,
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
        { trackUserProfileWishlistAction: g } = (0, rw.NJ)(),
        x = rS("DMSidePanelWishlistItemCard") ? a6.y.SIZE_78 : a6.y.SIZE_90,
        f = a6.Z[x],
        E = s.useCallback(() => {
            (g({
                action: r0.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                h());
        }, [n, r, h, g]),
        I = s.useCallback(() => {
            (g({
                action: r0.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                m());
        }, [m, n.id, r, n.productLine, g]),
        {
            onBodyClick: j,
            onOverlayClick: C,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, a5.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: E, onPurchaseClick: I }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: a8.kL,
        children: (0, l.jsxs)(a2.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: n,
            user: i,
            spec: f,
            cardStyle: a()(a8.Nr, o),
            skuPreviewStyle: a()(a8.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((t = b ? (0, a1.T)(n) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a1.T)(n) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: t }) : t),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(a$.N, { className: a8.Pf }),
                y &&
                    (0, l.jsx)(a3.A, {
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
function ot(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a0.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: a9.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [t, n, a]),
        d = s.useCallback(() => {
            (0, aZ.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: a9.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.id, t.applicationId, n, a]);
    return (0, l.jsx)(oe, {
        sku: t,
        analyticsLocations: a,
        wishlistOwner: n,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function on(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, aQ.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: a9.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, a7.e)({ sku: t, giftRecipient: n, giftingOrigin: a9.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(a8.ML, {
                    [a8.M]: t?.tenantMetadata?.collectibles?.type === aK.R.AVATAR_DECORATION,
                    [a8.Hm]: t?.tenantMetadata?.collectibles?.type === aK.R.PROFILE_EFFECT,
                    [a8.hH]: t?.tenantMetadata?.collectibles?.type === aK.R.PROFILE_FRAME,
                    [a8.qF]: t?.tenantMetadata?.collectibles?.type === aK.R.NAMEPLATE,
                    [a8.l2]: t?.tenantMetadata?.collectibles?.type === aK.R.BUNDLE,
                }),
            [t?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(oe, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function oi(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = t.id;
            (0, aJ.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: a9.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        u = r === ar.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(oe, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(a4.MO, { [a8.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(a8.fi, { [a8.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(a8.p7, { [a8.SW]: h.length >= 10, [a8.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function ol(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(ot, { sku: t, ...n });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(on, { sku: t, ...n });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(oi, { sku: t, ...n });
        default:
            return null;
    }
}
var os = n(158045),
    or = n(249203),
    oa = n(419731),
    oo = n(695904),
    od = n(116331),
    oc = n(713348),
    ou = n(535089),
    oh = n(815637);
function om(e) {
    let { unownedWishlistItems: t, profileOwner: n, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rw.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, od.A)(n),
        g = (0, m.bG)([or.A], () => or.A.getEntry(n.id)?.lastViewedAt ?? null, [n.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r0.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => t ?? [], [t]),
        E = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && c({ wishlistId: t, action: n, productLines: i });
            },
            [c],
        ),
        I = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: ar.uS.WISHLIST }));
            if (a && e.length < 3) {
                let t = f.some((e) => os.Ay.isPremiumSku(e.skuId));
                if (!os.Ay.isPremiumAtLeast(n.premiumType, a9.PremiumTypes.TIER_2) && !t) {
                    let t = aX.A.fromSKU((0, aW.rI)());
                    null != t && e.push({ item: t, source: ar.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, n.premiumType]),
        j = (0, s.useMemo)(
            () =>
                new Set(
                    I.map((e) => {
                        let { item: t } = e;
                        return t.skuProductLine;
                    }),
                ),
            [I],
        ),
        C = (0, ou.A)({ wishlistId: r ?? null, onAction: E, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                I.map((e, t) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              ol,
                              {
                                  sku: i.sku,
                                  index: t,
                                  wishlistOwner: n,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, oa.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sm.Vq),
            [o, x, n, I, r, h, g],
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
              children: (0, l.jsxs)(rY.A.Overlay, {
                  ref: C,
                  className: oh.kL,
                  children: [
                      p && (0, l.jsx)(oo.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: oh.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: oh.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(aV.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: tw.A.colors.BADGE_PRIMARY_BACKGROUND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(aY.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(ry.F, { children: (0, l.jsx)("div", { className: oh.vY, children: y }) }),
                  ],
              }),
          });
}
function oA(e) {
    let { isLoading: t, unownedWishlistItems: n, canSeeWishlist: i = !1, ...s } = e,
        r = az.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, oc.A)(s.profileOwner), t || s.profileOwner.bot || ((null == n || 0 === n.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(aq.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(om, { ...s, unownedWishlistItems: n, isNitroRecEnabled: r }),
    });
}
function op(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lj.A], () => ({
            relationshipType: lj.A.getRelationshipType(t.id),
            originApplicationId: lj.A.getOriginApplicationId(t.id),
        })),
        h = (0, ax.fi)(t.id),
        A = (0, af.q)({ userId: t.id }),
        p = (0, m.bG)([aL.A], () => aL.A.hidePersonalInformation),
        g = (0, m.bG)([aa.A], () => aa.A.getUserProfile(t.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([aa.A], () => ({ defaultWishlistId: aa.A.getFirstWishlistId(t.id) })),
        { wishlist: E, isFetching: I } = (0, ar.fw)({ wishlistId: o ? f : void 0, userId: t.id });
    (0, as.A)(E);
    let j = s.useMemo(() => E?.items.filter((e) => !e.isOwned) ?? null, [E]);
    return (0, l.jsxs)("div", {
        className: r7.rf,
        children: [
            (0, l.jsx)(aD.A, { userId: t.id }),
            (0, l.jsxs)("div", {
                className: r7.pq,
                children: [
                    (0, l.jsx)(rW.Ay, {
                        user: t,
                        guildId: r.guild_id,
                        displayName: rN.Ay.getName(null, r.id, t),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(aB.A, { userId: t.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rG.A, {
                            displayProfile: i,
                            themeType: r1.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aU.A, { user: t, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rY.A.Overlay, {
                    children: (0, l.jsx)(aw.A, { user: t, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rY.A.Overlay,
                    {
                        children: (0, l.jsx)(aw.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aF.A, { user: t }),
            i?.private &&
                (0, l.jsx)(rY.A.Overlay, { children: (0, l.jsx)(aG.A, { username: rN.Ay.getName(null, r.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(rY.A.Overlay, {
                    className: r7.Lw,
                    children: (0, l.jsx)(rV.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: ag.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aO.T, { userId: t.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(rX.A, {
                            userId: t.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rV.A, {
                            heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rB.A, { userId: t.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: r7.kR,
                children: [
                    o && x && (0, l.jsx)(au.A, { user: t, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aH.A, { user: t, currentUser: n, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aP.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rV.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(ak.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rY.A.Overlay, {
                              className: r7.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rV.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rH.A, {
                                              userId: t.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aP.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rV.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(ak.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rV.A, {
                                              heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rB.A, { userId: t.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(oA, {
                            profileOwner: t,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: I,
                            onClick: () => {
                                d?.({ tabSection: r0.RP.WISHLIST });
                            },
                            canSeeWishlist: null != E,
                        }),
                    r.isDM() && (0, l.jsx)(aR, { targetUserId: t.id }),
                ],
            }),
        ],
    });
}
var og = n(114212),
    ox = n(913453),
    of = n(229187),
    oE = n(21241),
    oI = n(503062),
    oj = n(51943),
    oC = n(847374),
    oy = n(320448),
    ob = n(723200);
function o_(e) {
    let { section: t, header: n, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rw.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? oC.a : oy._;
    return (0, l.jsxs)("section", {
        className: ob.uW,
        children: [
            (0, l.jsxs)(tO.D, {
                className: a()(ob.wx, ob.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    (h(!u), u || (d({ action: "PRESS_SECTION", section: t }), o?.()));
                },
                children: [
                    (0, l.jsxs)(R.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " \u2014 ", i.length],
                    }),
                    (0, l.jsx)(m, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(ob.p_, r), children: i }),
        ],
    });
}
var ov = n(341278);
function oN(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, rw.NJ)(),
        r = (0, nV.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, ox.A)(t),
        c = !t.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rY.A.Overlay, {
              className: ov.Lw,
              children: [
                  u &&
                      (0, l.jsx)(o_, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: ov.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  oj.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, nc.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oE.A, { className: ov.yF }),
                  c &&
                      (0, l.jsx)(o_, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: ov.p_,
                          onExpand: () => (0, of.A)(t.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: ov.nC,
                                                children: [
                                                    (0, l.jsx)(og.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(og.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            oI.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, rC.openUserProfileModal)({
                                                        ...s,
                                                        userId: r.id,
                                                        sourceAnalyticsLocations: i,
                                                    });
                                                },
                                            },
                                            t,
                                        );
                                    }),
                      }),
              ],
          })
        : null;
}
function oT(e) {
    let { user: t, currentUser: n, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lY.Ay)(t.id),
        c = (0, rO.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== t.id && ((h.current = t.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        p = (0, rw.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id });
    (0, rk.A)(A, d, r0.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rD.A)(g),
        E = (0, ao.fC)(),
        I = (0, rv.A)(d?.profileFrame?.skuId);
    (0, al.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, ai.z)({ opacity: +(null != E.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, rC.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([aa.A], () => ({ defaultWishlistId: aa.A.getFirstWishlistId(t.id) })),
        { wishlist: _, isFetching: v } = (0, ar.fw)({ wishlistId: r ? void 0 : b, userId: t.id });
    (0, as.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: A,
        children: (0, l.jsx)(rw.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(ao.Hl, {
                value: E,
                children: (0, l.jsxs)(rY.A, {
                    ref: g,
                    user: t,
                    displayProfile: d,
                    themeType: r1.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(r3.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(ac.A, {}),
                        null != E.interactionType && (0, l.jsx)(an.animated.div, { style: j, className: r3.tB }),
                        (0, l.jsxs)(n_.d_, {
                            className: a()(r && r3.BE, !r && null != I && r3.It),
                            children: [
                                (0, l.jsxs)(rq.A, {
                                    children: [
                                        (0, l.jsx)(am.A, { user: t, themeType: r1.d.SIDEBAR }),
                                        t.bot ? (0, l.jsx)(ah.A, { user: t }) : (0, l.jsx)(aA.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r3.wx,
                                    children: [
                                        (0, l.jsx)(rF.A, {
                                            user: t,
                                            displayProfile: d,
                                            themeType: r1.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: r3.vK,
                                        }),
                                        (0, l.jsx)(ad.A, { className: r3.oR }),
                                        (0, l.jsx)(rU.A, {
                                            user: t,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r2.T[r1.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(ap.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: r1.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(op, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == E.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : C,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: r3.sJ,
                                        children: (0, l.jsx)(au.A, {
                                            user: t,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: r3.vS,
                                        children: (0, l.jsx)(oA, {
                                            profileOwner: t,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: r0.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oN, { user: t, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(rZ, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rP.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != I && (0, l.jsx)(rK.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oS = n(901600);
function oR(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lW(),
        [o, d] = (0, rR.A)(n),
        [c, u] = s.useState(!1),
        h = rS("UserProfileSidebarRenderer"),
        A = (0, lY.Ay)(n),
        p = A?.profileFrame?.skuId,
        g = (0, rv.A)(p),
        x = (0, m.bG)([r_.A], () => r_.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: t.id,
            };
            null != i ? (0, rM.A)(i, e) : (0, rM.A)(n, void 0, e);
        }, [i, n, t.id, h]),
        null == i ||
            null == r ||
            !a ||
            (h && !c && A?.isLoaded !== !0) ||
            (h && !c && null != p && p !== g?.skuId && x?.state !== "success" && x?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        E = rN.Ay.getName(null, t.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oS.H : void 0,
        children: (0, l.jsx)(ry.F, {
            component: (0, l.jsx)(rb.A, {
                children: (0, l.jsx)(ry.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: E }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(at, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(r5, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oT, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oM = n(522556),
    oO = n(225315),
    oL = n(684407),
    oP = n(95701),
    oD = n(919638),
    ok = n(763827),
    ow = n(812771),
    oU = n(506309),
    oG = n(598748),
    oF = n(681154),
    oH = n(975460),
    oB = n(587895),
    oV = n(429913),
    oY = n(201718),
    oW = n(339580),
    oz = n(633075),
    oq = n(903209),
    oX = n(382483),
    oK = n(385113);
let o$ = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function oQ(e) {
    let [t, n] = s.useState(new Set()),
        i = s.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []),
        r = s.useMemo(
            () => ({
                markAsVisible: i,
                useInjectEntriesWithPreviewData: (e) =>
                    (function (e, t) {
                        let n,
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
                                ((n = sW.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, oX.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    n && (0, oX.i$)().catch(() => {});
                                }, [n]),
                                (i = (0, m.bG)([oK.A], () => oK.A.getFeaturedFetchState())),
                                (l = (0, m.bG)([oK.A], () => oK.A.getDeveloperFetchState())),
                                (r = (0, m.yK)([oK.A], () => oK.A.getFeaturedApplicationIds())),
                                (a = (0, m.yK)([oK.A], () => oK.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === oK.e.NOT_FETCHED ||
                                        i === oK.e.FETCHING ||
                                        (n && (l === oK.e.NOT_FETCHED || l === oK.e.FETCHING)),
                                }),
                            {
                                widgetApps: C,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oF.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => t.has(e.id)) ?? [],
                                [e, t],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, m.bG)(
                                [oB.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            oB.A.isFetchingApplication(e) ||
                                            (null == oB.A.getApplication(e) && !oB.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, oV.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sm.Vq)
                                            .map((e) => [e.id, (0, oH.t)(e)])
                                            .filter(sm.QE)
                                            .filter((e) => {
                                                let [t, n] = e;
                                                return I.has(n.id);
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
                                ((p = (0, m.cf)([oW.A], () =>
                                    Object.fromEntries(y.map((e) => [e, oW.A.getUserIdentities(e)]).filter(sm.QE)),
                                )),
                                (g = (0, m.bG)([oW.A], () =>
                                    y.some((e) => oW.A.getFetchState(e) === oW.e.NOT_FETCHED || oW.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && oY.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: T } =
                                ((x = (0, m.cf)([aa.A], () =>
                                    Object.fromEntries(y.map((e) => [e, aa.A.getUserProfile(e) ?? null]).filter(sm.QE)),
                                )),
                                (f = (0, m.yK)([aa.A], () =>
                                    y.filter((e) => null == aa.A.getUserProfile(e) && !aa.A.isFetchingProfile(e)),
                                )),
                                (E = (0, m.bG)([aa.A], () => y.some((e) => aa.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, oq.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || E }),
                            S = (0, m.cf)(
                                [oK.A],
                                () => Object.fromEntries([...I].map((e) => [e, oK.A.getConfig(e)]).filter(sm.QE)),
                                [I],
                            ),
                            R = j || b || v || T,
                            M = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oF.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let t = C[e.extra.application_id] ?? null;
                                        if (null == t) return e;
                                        let n = S[t.id] ?? null;
                                        if (null == n || null == n.surfaces[oG.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, oz.E)(e, t.id)) ?? !1;
                                        return {
                                            ...e,
                                            applicationWidgetPreview: { widgetApplicationId: t.id, hasWidget: l },
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
                    })(e, t),
            }),
            [i, t],
        );
    return (0, l.jsx)(o$.Provider, { value: r, children: e.children });
}
var oJ = n(900797),
    oZ = n(890856),
    o0 = n(180170),
    o1 = n(435738),
    o2 = n(38055);
let o3 = "content-inventory-feed",
    o7 = `${o3}-settings`,
    o5 = `${o3}-toggle`;
var o6 = n(569709);
let o9 = s.memo(function (e) {
        let t,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([o1.A], () => o1.A.hidden),
            h = (0, c.omit)((0, C.rm)(o7), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(o5), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                (0, j.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                });
            }, []),
            x = s.useCallback(() => (u ? (0, o0.Il)() : r()), [u, r]),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(o2.A, { ...h }),
                    (0, l.jsx)("span", { className: o6.AN }),
                    p
                        ? ((t = u
                              ? (0, l.jsx)(oJ.t, { className: o6.wT })
                              : o
                                ? (0, l.jsx)(oC.a, { className: o6.wT })
                                : (0, l.jsx)(oy._, { className: o6.wT })),
                          (0, l.jsx)("span", { className: o6.wT, children: t }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(oZ.s, {
                      ...A,
                      className: a()(o6.N1, { [o6.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: o6.N1, onContextMenu: g, children: f }),
        });
    }),
    o8 = function () {
        return null;
    };
var o4 = n(963307),
    de = n(424994);
let dt = en.default.track;
function dn(e, t) {
    dt(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: de.UG.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName,
    });
}
var di = n(468581),
    dl = n(808666),
    ds = n(414499),
    dr = n(323384),
    da = n(55730),
    dd = n(765379),
    dc = n(359549),
    du = n(284525),
    dh = n(482030),
    dm = n(583846),
    dA = n(506326);
n(333007);
var dp = n(342952),
    dg = n(315710),
    dx = n(276293),
    df = n(935063),
    dE = n(778712),
    dI = n(696986),
    dj = n(97808),
    dC = n(738188),
    dy = n(983851),
    db = n(31300),
    d_ = n(308528),
    dv = n(401843),
    dN = n(375499),
    dT = n(429433),
    dS = n(324688);
let dR = (0, oP.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dM(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: i,
            showEmojiButton: r = !1,
            renderAttachButton: o,
            autoFocus: d = !0,
            onFocus: c,
            channel: u,
            className: h,
        } = e,
        [m, A] = s.useState(""),
        [p, g] = s.useState((0, sw.x7)("")),
        x = tI.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sU.Ay, {
        ref: f,
        placeholder: t,
        editorClassName: h,
        className: a()(dS.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dR,
        onChange: (e, t, n) => {
            (A(t), g(n));
        },
        type: r ? { ...x, emojis: { button: !0 } } : x,
        textValue: m,
        richValue: p,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), A(""), g((0, sw.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
function dO(e) {
    var t;
    let { onSelectEmoji: n, onClick: i } = e,
        r = (0, rO.Ay)(),
        [a, o] = s.useState(!1),
        d = s.useRef(null),
        c = s.useRef(null);
    return (
        (t = () => o(!1)),
        s.useEffect(() => {
            function e(e) {
                "Escape" === e.key && t();
            }
            function n(e) {
                null != e.target && (d?.current?.contains(e?.target) || t());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    (document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n));
                }
            );
        }, [t, d]),
        (0, l.jsx)(ti.Y, {
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
                            children: (0, l.jsx)(dT.C, {
                                messageId: eo.dJq,
                                channel: dR,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: i, isBurst: l } = e;
                                    null != t && (n({ emoji: t, willClose: i, isBurst: l }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(eN.m, {
                    text: z.intl.string(z.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: c,
                        className: dS.mJ,
                        children: (0, l.jsx)(dN.A, {
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
var dL = n(402216),
    dP = n(822123),
    dD = n(409626),
    dk = n(692969),
    dw = n(711589),
    dU = n(607407),
    dG = n(832163),
    dF = n(533562),
    dH = n(805901),
    dB = n(565645);
n(989040);
var dV = n(7584);
(n(850992), n(690521));
var dY = n(806931),
    dW = n(307731),
    dz = n(866780);
function dq(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rD.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tO.D, {
            onClick: i,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(dH.c, {
                config: dN.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(an.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dB.A, {
                            className: a()(dz.Zg, r, { [dz.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
(dW.EmojiIntention.CHAT,
    [
        dV.Ay.getByName("thumbsup"),
        dV.Ay.getByName("eyes"),
        dV.Ay.getByName("laughing"),
        dV.Ay.getByName("watermelon"),
        dV.Ay.getByName("fork_and_knife"),
        dV.Ay.getByName("yum"),
    ].filter(sm.Vq));
var dX = n(636585),
    dK = n(543465),
    d$ = n(607567),
    dQ = n(774926),
    dJ = n(20805),
    dZ = n(22869),
    d0 = n(623671),
    d1 = n(428249),
    d2 = n(327098),
    d3 = n(576757),
    d7 = n(202195),
    d5 = n(140651),
    d6 = n(345394);
let d9 = function (e) {
    let { children: t } = e,
        [n, i] = (0, aE.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lb.i.USER_DISMISS);
    }, [i]);
    return n !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(la.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: d6.A },
                  }),
              ],
          });
};
var d8 = n(315246),
    d4 = n(866323),
    ce = n(252392);
let ct = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, d4.p)(
            t,
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
            (e, t) =>
                t &&
                (0, l.jsx)(an.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(ce.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(ce.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var cn = n(381941),
    ci = n(231188);
let cl = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("419121"),
                n.e("162775"),
                n.e("60882"),
                n.e("489020"),
                n.e("919789"),
                n.e("669130"),
                n.e("70866"),
                n.e("802890"),
                n.e("232960"),
                n.e("74886"),
                n.e("713273"),
                n.e("656997"),
                n.e("101105"),
                n.e("263406"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("833292"),
                n.e("222969"),
                n.e("515363"),
                n.e("128804"),
                n.e("71151"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("795854"),
                n.e("870088"),
                n.e("300641"),
                n.e("571163"),
                n.e("586662"),
                n.e("831377"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("279774"),
                n.e("763945"),
                n.e("261204"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("590088"),
                n.e("807003"),
                n.e("46083"),
                n.e("152133"),
                n.e("747802"),
                n.e("626353"),
                n.e("71169"),
                n.e("906470"),
                n.e("736663"),
                n.e("82937"),
                n.e("987221"),
                n.e("157064"),
                n.e("156957"),
                n.e("918786"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("358937"),
                n.e("448738"),
                n.e("261868"),
                n.e("84978"),
                n.e("894292"),
                n.e("153302"),
                n.e("88683"),
                n.e("363874"),
                n.e("923981"),
                n.e("750370"),
                n.e("972281"),
                n.e("307107"),
                n.e("896622"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("547510"),
                n.e("966366"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("156422"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("905581"),
                n.e("76428"),
                n.e("863232"),
                n.e("517888"),
                n.e("811133"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("861060"),
                n.e("364827"),
                n.e("77333"),
                n.e("56366"),
                n.e("217229"),
                n.e("477175"),
                n.e("960235"),
                n.e("402368"),
                n.e("190779"),
                n.e("910486"),
                n.e("221856"),
                n.e("678157"),
                n.e("147134"),
                n.e("996481"),
                n.e("331988"),
                n.e("10866"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("373122"),
                n.e("217951"),
                n.e("755936"),
                n.e("609705"),
                n.e("749894"),
                n.e("904448"),
                n.e("833703"),
                n.e("256274"),
                n.e("692990"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("532039"),
                n.e("719466"),
                n.e("630267"),
                n.e("576909"),
                n.e("27355"),
                n.e("407170"),
                n.e("255580"),
                n.e("299854"),
                n.e("608557"),
                n.e("247660"),
                n.e("506620"),
                n.e("649362"),
                n.e("773534"),
                n.e("153535"),
                n.e("147864"),
                n.e("276177"),
                n.e("93461"),
                n.e("437961"),
                n.e("604172"),
                n.e("949013"),
                n.e("820667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    cs = s.createContext(void 0);
function cr(e) {
    let { children: t } = e,
        n = s.useRef(null),
        i = s.useId();
    return (
        (0, dg.tj)(n),
        (0, l.jsx)(cs.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: n,
                className: ci.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function ca(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, d5.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(ci.ZK, e, i), style: s, children: t }),
        })
    );
}
function co(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: ci.$m, children: t });
}
function cd(e) {
    var t;
    let n,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [I, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [lF.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lF.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, d7.A)(n),
                o = (0, nL.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iT.A)(t?.id),
                c = (0, m.bG)([tv.A], () => (null != a ? tv.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([d$.Ay], () => (null != a ? d$.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lC.A], () => lC.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let t = ew.A.getDMFromUserId(e.user.id),
                            n = null != t && dK.Ay.isChannelMuted(null, t),
                            i = lj.A.isBlockedOrIgnored(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [u]);
            if (null == a || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != r;
            function g(e) {
                let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                    s = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(dC.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: ci.vb,
                                  }),
                                  z.intl.string(z.t.d6DpXI),
                              ],
                          })
                        : n;
                return (0, l.jsx)(
                    eN.m,
                    {
                        "aria-label": i ? z.intl.string(z.t.d6DpXI) : (n ?? !1),
                        __unsupportedReactNodeAsText: s,
                        shouldShow: !0,
                        children: t,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: ci.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(tO.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (E.A.updateChatOpen(a.id, !0), (0, n3.iN)(a.id), i?.(a));
                                        },
                                        className: ci.I3,
                                        children: [
                                            (0, l.jsx)(na.Ay, {
                                                guild: c,
                                                size: na.Ay.Sizes.SMOL,
                                                className: ci.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oy._, {
                                                size: "xxs",
                                                color: tw.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dy.H, { size: "xs", color: tw.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: ci.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dX.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(dj.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dE._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: ci.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dI.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lU.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? db.k : dy.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, d2.A)(h),
        L =
            ((t = O),
            (n = (0, m.bG)([tv.A], () => tv.A.getGuild((0, e_.D)(t?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(t?.location)))),
            (r = (0, m.yK)([ee.default], () => t?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, nL.Ay)(i)),
            null != t && null != n && null != i && oP.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: ci.kP,
                              children: [
                                  (0, l.jsxs)(tO.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, n3.iN)(i.id),
                                      className: ci.I3,
                                      children: [
                                          (0, l.jsx)(na.Ay, {
                                              guild: n,
                                              size: na.Ay.Sizes.SMOL,
                                              className: ci.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oy._, {
                                              size: "xxs",
                                              color: tw.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dx.N, { size: "xs", color: tw.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: ci.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dX.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(dj.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: dE._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: ci.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dI.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != M && 0 === p.length ? [M] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rN.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, nL.Ay)(o, !0),
        H =
            null != o && I
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${G}` }),
        B = I ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function V(e) {
        let t,
            { emoji: n } = e;
        if (null != n) {
            if (
                (en.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: de.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, nM.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                I)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
            else {
                let e = await d_.A.getOrEnsurePrivateChannel(c.id);
                t = ew.A.getChannel(e) ?? null;
            }
            return (
                d()(null != t, "Send channel must be defined"),
                W({
                    reply: `:${n.name}:`,
                    sendToChannel: t,
                    onComplete: (e, t) => {
                        (S(!0),
                            setTimeout(() => {
                                (N(!1), u(e, t));
                            }, 600));
                    },
                    interactionType: de.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let t;
        if (((0, nM.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
        else {
            let e = await d_.A.openPrivateChannel({ recipientIds: c.id }),
                n = ew.A.getChannel(e);
            (d()(null != n, "DM channel must be defined"), (t = n));
        }
        let n = t.type === eo.rbe.DM ? de.PA.DM_REACTION_MESSAGE_SENT : de.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: t, interactionType: n, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: t, sendToChannel: n, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, d1.d)({
                channel: n,
                content: t,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: cn.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, n));
    }
    let q = g ?? R ?? L;
    function X() {
        (j((e) => !e), w && C?.focus());
    }
    function K(e) {
        (U(e), e && C?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(ct, { sent: T, shown: v, className: ci.Jt }),
            q ??
                (0, l.jsx)(d9, {
                    children: (0, l.jsxs)("div", {
                        className: ci.T7,
                        children: [
                            (0, l.jsx)(cc, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dO, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? ci.P2 : ci.VE,
                children: [
                    (0, l.jsx)(dM, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: I ? o : void 0,
                        showEmojiButton: null != q,
                        className: ci.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(tO.D, {
                                          className: ci.wD,
                                          onClick: X,
                                          children: I
                                              ? (0, l.jsx)(dx.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(df.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tO.D, {
                            onClick: () => K(!1),
                            className: ci.i3,
                            children: (0, l.jsx)(nB.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: tw.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: ci.fh,
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
let cc = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dP.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, nu._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: s } = e;
            return null != s
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(eN.m, {
                              asContainer: !0,
                              text: z.intl.formatToPlainString(z.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": z.intl.formatToPlainString(z.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(dq, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n({ emoji: t }),
                                  className: ci.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function cu(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = t?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, d3.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, d7.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: ci.MH,
        children: [
            (0, l.jsxs)("div", {
                className: ci.WP,
                children: [
                    (0, l.jsx)(dp.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dE._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dI.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(ci.Xn, ci.zA),
                        children: z.intl.format(n, {
                            user0: rN.Ay.getName(o, t?.id, g[0]),
                            user1: rN.Ay.getName(o, t?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(ci.Mj, ci.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    dZ.A,
                                    {
                                        textClassName: a()(ci.Mj, ci.nk),
                                        text: e,
                                        user: g[0],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    dZ.A,
                                    {
                                        textClassName: a()(ci.Mj, ci.nk),
                                        text: e,
                                        user: g[1],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != p && (0, l.jsx)(dL.Ay, { size: dL.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(d8.A, { user: A, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function ch(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(tO.D, { className: ci.Zw, onClick: n, children: t });
}
function cm(e) {
    let {
            title: t,
            subtitle: n,
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
        E = (0, dJ.zD)(f),
        I = E ? f.extra?.application_id : void 0,
        j = (0, dF.W)();
    null != j && (I = j);
    let C = (0, dk.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : I,
                source: dD.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(de.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dQ.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dG.A], () => dG.A.getDetectableIdsToApplicationIds()),
        N = E ? C : void 0,
        T = s.useContext(cs);
    return (0, l.jsxs)("div", {
        className: ci.au,
        children: [
            (0, l.jsx)(cu, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(ca, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: ci.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: ci.Fb,
                                children: (0, l.jsx)(d0.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: d0.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: ci.iC,
                                children: [
                                    (0, l.jsx)(ch, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(ci.$2, { [ci.bC]: null != u }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(ch, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: ci.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dI.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: ci.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != v[I]
                ? (0, l.jsx)(cl, {
                      className: ci.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: a6.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cA(e) {
    let {
            title: t,
            subtitle: n,
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
        { actionString: p, canWatch: g } = (0, dw.K)(a),
        { entry: x } = A,
        f = (0, dJ.zD)(x),
        E = f ? x.extra?.application_id : void 0,
        I = (0, dF.W)();
    null != I && (E = I);
    let j = (0, dk.A)(
            {
                location: "ContentPopout",
                applicationId: E,
                source: dD.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(de.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, d2.A)(x),
        { largeImage: N, smallImage: T } = (0, dQ.D8)(y, b ?? v),
        { largeImage: S } = (0, dQ.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([dG.A], () => dG.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(cs);
    return (0, l.jsxs)("div", {
        className: ci.au,
        children: [
            (0, l.jsx)(cu, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(ca, {
                backgroundImgSrc: S?.src,
                className: ci.uR,
                children: [
                    (0, l.jsx)(ch, {
                        onClick: g
                            ? () => {
                                  (lu.default.selectVoiceChannel(a.channelId), (0, dv.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: ci.nh,
                            children: [
                                (0, l.jsx)(dU.A, { className: ci.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: ci.NE,
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
                        className: ci.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: ci.Fb,
                                    children: (0, l.jsx)(d0.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: d0.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: ci.gv,
                                children: [
                                    (0, l.jsx)(ch, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: ci.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(ch, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: ci.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dI.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != M[E]
                ? (0, l.jsx)(cl, {
                      className: ci.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: a6.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cp = n(299846);
let cg = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cp.u)(n);
    function u() {
        (0, dh.hg)(n.extra.application_id);
    }
    let { data: h } = (0, tb.YY)(n.extra.application_id),
        m = (0, dc.Ay)({ application: h, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dA.iT, { location: dA.N5.POPOUT, entry: n }),
        p = (0, l.jsx)(cm, {
            channel: t,
            userDescription: (0, dm.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: n,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, da.A)(d, eo.jUm.JOIN) || (0, dd.A)(d),
        f = g
            ? (0, l.jsx)(du.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dl.I,
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
                      icon: ds.h,
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
                      icon: dr.k,
                  }),
        j = [E, g && !r ? f : I].filter(sm.Vq);
    return (0, l.jsxs)(cr, {
        children: [
            p,
            (0, l.jsx)(co, {
                children: (0, l.jsx)(cd, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: t,
                    entry: n,
                    buttons: j,
                }),
            }),
        ],
    });
};
var cx = n(322789),
    cf = n(808380),
    cE = n(687966),
    cI = n(960076),
    cj = n(544441),
    cC = n(562708),
    cy = n(139286);
function cb(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(n),
        s = (0, dc.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, cy.A)({
            name: cC.ImpressionNames.CLOUD_PLAY_CTA,
            type: cC.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: ds.h,
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
var c_ = n(601007),
    cv = n(648246),
    cN = n(308335),
    cT = n(790381),
    cS = n(266080),
    cR = n(968309),
    cM = n(30370);
function cO(e) {
    let t = (0, m.bG)([cM.A], () => cM.A.getAccounts().some((t) => t.type === e)),
        n = s.useCallback(() => {
            if (null == e) return null;
            (0, cR.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var cL = n(18282);
let cP = [...cx.n, dA.Yq],
    cD = {
        [cf.Y.DESKTOP]: null,
        [cf.Y.LINUX]: null,
        [cf.Y.MACOS]: null,
        [cf.Y.NINTENDO]: null,
        [cf.Y.IOS]: null,
        [cf.Y.ANDROID]: null,
        [cf.Y.XBOX]: cS.A,
        [cf.Y.PLAYSTATION]: cT.A,
    },
    ck = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cp.u)(n),
            { streamPreviewUrl: A, stream: p } = (0, d7.A)(n),
            g = n.extra.platform,
            x = n.extra.application_id,
            f = null != g ? cD[g] : null,
            E = cO(g === cf.Y.XBOX ? eo.fg2.XBOX : g === cf.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: I } = (0, tb.YY)(x),
            j = (0, cj.A)(x),
            { analyticsLocations: C } = (0, P.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, dc.JC)(I),
            b = (0, cN.o)(h?.application_id ?? m?.applicationId ?? I?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dA.mG, {
                location: null == A ? dA.N5.POPOUT : dA.N5.STREAMING_POPOUT,
                children: cP.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(cm, {
                          channel: t,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cL.A, { onClick: E, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dm.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: n,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(c_.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cA, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: c,
                          badges: _,
                          userDescription: z.t["6oWFUN"],
                          entry: n,
                          stream: p,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(c_.A, {
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
                          cb,
                          { application: I, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, da.A)(h, eo.jUm.JOIN) || (0, dd.A)(h))
                    ? (0, l.jsx)(
                          du.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cE.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cI.A)(h)
                    ? (0, l.jsx)(cv.A, { activity: h, size: "md", variant: "primary", icon: tU.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sm.Vq);
        return (0, l.jsxs)(cr, {
            children: [
                v,
                (0, l.jsx)(co, {
                    children: (0, l.jsx)(cd, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: d,
                        channel: t,
                        entry: n,
                        buttons: T,
                    }),
                }),
            ],
        });
    },
    cw = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function cU(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e,
        { data: r } = (0, tb.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, dc.Ay)({ application: r, analyticsLocations: a }),
        d = (0, nM.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && n,
        { activeEntryId: u, setActiveEntryId: h } = cw(),
        m = u === t.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, aE.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(t.id);
    }, [u, c, t.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lb.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [E, I] = s.useState(!1);
    return (
        f && !E && I(!0),
        (0, cy.A)(
            {
                name: cC.ImpressionNames.CLOUD_PLAY_CTA,
                type: cC.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !E },
            [E],
        ),
        (0, l.jsx)(la.A, {
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
                    icon: ds.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lb.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cG = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(cU, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var cF = n(363670),
    cH = n(205327),
    cB = n(52133),
    cV = n(835723),
    cY = n(172710),
    cW = n(655116),
    cz = n(763758),
    cq = n(286617),
    cX = n(533207),
    cK = n(121090),
    c$ = n(693879),
    cQ = n(809854),
    cJ = n(272984),
    cZ = n(170699);
function c0(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: i } = (0, cQ.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, i),
                s = n - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dm.W6)({ start: 0 }, s) };
        }, [t, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cZ.lu,
              children: [
                  (0, l.jsx)(c$.z, { entry: n }),
                  (0, l.jsx)("div", { className: cZ.Lt, children: (0, l.jsx)("div", { className: cZ.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cZ.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function c1(e) {
    let t,
        n,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cF.u7)(r),
        g = cO(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cW.A, se.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cq.A)(cW.A, se.default, p, c) : void 0),
            [c, p],
            cB.A,
        );
    if (null == c || null == u) return null;
    let E = h,
        I = [];
    u.media.provider === cH.X.SPOTIFY &&
        ((n = () => {
            (0, cY.Mp)(c);
        }),
        (i = () => {
            (0, cY.QX)(c, p.id);
        }),
        (t = () => {
            null != g ? g() : (0, cY.Mp)(c);
        }),
        (E = (0, l.jsx)(cz.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: ci.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cY.mN)(c, p.id, e);
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
                        icon: cV.J,
                        onClick: function () {
                            null != f && ((0, cX.A)(f, cJ.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(cm, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cH.X.SPOTIFY
                ? (0, l.jsx)(cL.A, { onClick: t, "aria-label": z.intl.string(z.t.rRffNz), Icon: cK.A })
                : null,
        userDescription: (0, dm.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: n,
        subtitle: E,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(c0, { activity: c }),
    });
    return (0, l.jsxs)(cr, {
        children: [
            j,
            (0, l.jsx)(co, {
                children: (0, l.jsx)(cd, {
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
var c2 = n(903134),
    c3 = n(56121),
    c7 = n(263577),
    c5 = n(868065),
    c6 = n(804779);
let c9 = [dA.Y8],
    c8 = [c3.j.WEEK],
    c4 = s.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, dQ.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dm.TQ)(t);
        return null != r && (0, sm.S1)(r, c8)
            ? (0, l.jsxs)(c5.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(c5.UA, {
                          children: [
                              (0, l.jsx)(c5.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(c5.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(dA.mG, {
                                  location: dA.N5.CARD,
                                  children: c9.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(c7.V, { src: s?.src, size: 48, className: c6.xn }),
                  ],
              })
            : null;
    });
var ue = n(210528);
let ut = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = n.extra.media,
        o = n.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        c = (0, dm.TQ)(n),
        u = cO(eo.fg2.SPOTIFY);
    if (null == d || !(0, sm.S1)(c, c8)) return null;
    function h() {
        let e = cJ.M0.ALBUM,
            t = ue.A.isProtocolRegistered()
                ? cJ.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                : cJ.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(cr, {
        children: [
            (0, l.jsx)(cm, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cJ.M0.ARTIST,
                        t = ue.A.isProtocolRegistered()
                            ? cJ.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                            : cJ.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: h,
                channel: t,
                entry: n,
                headerIcons:
                    a === cH.X.SPOTIFY
                        ? (0, l.jsx)(cL.A, { onClick: u, Icon: cK.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dA.mG, {
                    location: dA.N5.POPOUT,
                    children: c9.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
            }),
            (0, l.jsx)(co, {
                children: (0, l.jsx)(cd, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: t, entry: n }),
            }),
        ],
    });
};
var un = n(977001);
let ui = function (e) {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cp.u)(n),
        c = (0, dm.ty)(n),
        u = (0, dm.TQ)(n);
    if (null == a || null == c || null == u || !(0, un._E)(u)) return null;
    let h = null != n.extra.platform ? cD[n.extra.platform] : null;
    return (0, l.jsxs)(cr, {
        children: [
            (0, l.jsx)(cm, {
                channel: t,
                headerIcons: null == h ? null : (0, l.jsx)(cL.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: n,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dA.mG, {
                    location: dA.N5.POPOUT,
                    children: un.ac.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(co, {
                children: (0, l.jsx)(cd, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: t, entry: n }),
            }),
        ],
    });
};
var ul = n(514243),
    us = n(347306),
    ur = n(123917),
    ua = n(998218);
let uo = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        a = cO(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == n.extra.url) return;
        let e = ua.A.safeParseWithQuery(n.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, ur.h)({ href: ua.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cr, {
              children: [
                  (0, l.jsx)(cm, {
                      channel: t,
                      entry: n,
                      userDescription: (0, dm.JM)(n) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cL.A, {
                          onClick: a,
                          Icon: us.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dA.mG, {
                          location: dA.N5.POPOUT,
                          children: ul.R.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(co, {
                      children: (0, l.jsx)(cd, {
                          onReaction: i,
                          onVoiceChannelPreview: s,
                          user: r,
                          channel: t,
                          entry: n,
                      }),
                  }),
              ],
          });
};
function ud(e) {
    return e?.type === o4.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oF.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function uc(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case oF.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cx.A, { ...n, entry: t });
        case oF.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ul.A, { ...n, entry: t });
        case oF.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(un.Ay, { ...n, entry: t });
        case oF.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(c4, { ...n, entry: t });
        case oF.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cF.Ay, { ...n, entry: t });
        case oF.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(di.A, { ...n, entry: t });
        default:
            return null;
    }
}
function uu(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === oF.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cG, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uh(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(um, {
        onReaction: (e, i) => {
            (n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t());
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(de.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function um(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case oF.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(ck, { ...n, entry: t });
        case oF.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uo, { ...n, entry: t });
        case oF.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ui, { ...n, entry: t });
        case oF.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ut, { ...n, entry: t });
        case oF.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c1, { ...n, entry: t });
        case oF.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cg, { ...n, entry: t });
        default:
            return null;
    }
}
let uA = s.memo(function (e) {
    let { index: t, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${t}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cp.u)(r.entry);
    !(function (e) {
        let { markAsVisible: t } = s.useContext(o$);
        s.useEffect(() => t(e), [t, e]);
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
                        let { default: e } = await n.e("789346").then(n.bind(n, 949881));
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
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                dn(e, { ...f, ...t });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        dn(de.PA.CARD_POPOUT_OPEN, e);
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
            c && (0, l.jsx)(uu, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((E.current = !0),
                        setTimeout(() => {
                            (E.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: M,
                children: (0, l.jsx)(ti.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(c2.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(uh, {
                                closePopout: t,
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
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.jsx)(tO.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                I || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(uc, {
                                ...r,
                                selected: n,
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
var up = n(531685),
    ug = n(99066),
    ux = n(376261),
    uf = n(99753),
    uE = n(136722),
    uI = n(860071);
let uj = [],
    uC = new Set(),
    uy = new Set();
var ub = n(808323);
let u_ = new Set([
    oF.ContentInventoryEntryType.PLAYED_GAME,
    oF.ContentInventoryEntryType.WATCHED_MEDIA,
    oF.ContentInventoryEntryType.TOP_GAME,
    oF.ContentInventoryEntryType.TOP_ARTIST,
    oF.ContentInventoryEntryType.LISTENED_SESSION,
    oF.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uv = n(498642);
let uN = (0, l8.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uT = n(293860);
let uS = { cooldownDurationMs: 60 * l6.A.Millis.DAY };
function uR(e) {
    let { guildId: t } = e,
        n = (function (e) {
            let { isInTreatment: t } = {
                    isInTreatment: uN.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: n } = si(),
                i = (0, m.bG)([uv.A], () => uv.A.getMemberCount(e), [e]);
            return null != e && !!n && !!t && null != i && !(i >= 200);
        })(t);
    return (0, l.jsx)(lm.zJ, {
        contentType: n ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uS,
        groupName: lb.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sd, {
                      className: uT.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: n,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uM = n(728321),
    uO = n(282006);
let uL = er.Ay.getEnableHardwareAcceleration(),
    uP = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uD = s.memo(function (e) {
        let {
                colorString: t,
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
                                n.e("463317"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("245996"),
                                n.e("700792"),
                                n.e("592822"),
                                n.e("529422"),
                                n.e("823427"),
                                n.e("307059"),
                                n.e("309291"),
                                n.e("343116"),
                                n.e("711617"),
                                n.e("470314"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("666939"),
                                n.e("717334"),
                                n.e("184841"),
                            ]).then(n.bind(n, 107632)),
                            t = lC.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                user: c,
                                guildId: g,
                                channel: p,
                                showMediaItems: t,
                                analyticsLocations: S,
                            });
                    });
                },
                [c, g, p, S],
            ),
            O = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
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
        return (0, l.jsx)(X.A, {
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
                let { onClick: n, onMouseDown: s, ...a } = e;
                return (0, l.jsx)(ea.A, {
                    ref: _,
                    className: ec.Dc,
                    onContextMenu: R,
                    shouldAnimateStatus: uL,
                    user: c,
                    currentUser: u,
                    nick: d,
                    status: A,
                    activities: h,
                    applicationStream: m,
                    isOwner: o,
                    premiumSince: T,
                    colorString: t,
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
    uk = s.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != t ? V.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uD, { ...n, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uw(e) {
    let { index: t } = e,
        n = (0, C.rm)(`${t}`);
    return (0, l.jsx)(ea.A, { itemProps: n });
}
class uU extends s.Component {
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
        let { section: t } = e,
            { groups: n, channel: i } = this.props,
            r = n[t];
        if (r?.id === o3) return (0, s.createElement)(o9, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                uM.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uP,
                    children: (0, s.createElement)(uO.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, s.createElement)(uO.Y, { ...r, key: `section-${t}`, guildId: i.guild_id, className: ec.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            i = t[e.section];
        if (null == i) return null;
        let { index: l } = i;
        return null == l || "row" !== e.type ? null : n[l + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            i = new Set();
        for (let t of e)
            if (null != t && t.type === o4.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), i.add(e.id));
                }
            }
        return ((this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = t), i);
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: i } = e,
            { channel: s } = this.props,
            r = this.getRowProps(e);
        if (null != r) {
            if (r.type === o4.S9.MEMBER && "user" in r) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
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
                    uk,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
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
            if (r.type === o4.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    uA,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === o4.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(o8, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uw, { index: i }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        (this.updateSubscription(), this.updateMaxContentFeedRowSeen());
    };
    updateMaxContentFeedRowSeen = u().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === o3) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? ud(n[i + 1 + l]) : t;
            };
        }
        return t;
    };
    getContentFeedHeight = () => {
        let e = this.getContentFeedGroup();
        return null != e ? e.feedHeight + this.props.sectionHeight : 0;
    };
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: i } = e,
            l = this.getContentFeedHeight(),
            s = Math.max(0, t - Math.max(0, l - i)),
            r = Math.floor(s / n);
        return { height: s, rowHeight: n, rowsVisible: r, y: Math.max(0, i - l) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            l = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: i, rowsVisible: l, y: n });
    }
    updateSubscription = u().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: i } = this.getDimensions();
        (0, F.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: i, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(sm.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== o4.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === eo.$pd.PLAYING) &&
                            e.num_users_visible_with_game_activity++),
                    null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                    t.user.collectibles?.nameplate != null && e.num_users_visible_with_nameplate++),
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
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, l.jsx)(N.sk, {
            children: (s) =>
                (0, l.jsx)(sF.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(ry.F, {
                                component: (0, l.jsx)(rb.A, {
                                    children: (0, l.jsx)(ry.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, nL.m1)(n, ee.default, lj.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(C.PR, {
                                    children: (n) => {
                                        let { ref: r, role: o, ...d } = n;
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
                                            t,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
}
function uG(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(L.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([o4.Ay], () => o4.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: c,
            version: u,
            updateMaxRowSeen: h,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: i },
                    channelId: l,
                    guildId: r,
                } = e,
                [a, o] = s.useState(!1),
                {
                    requestId: d,
                    entries: c,
                    impressionCappedEntryIds: u,
                } = (function (e) {
                    var t, n;
                    let i,
                        l = (0, ub.A)({ id: de.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return ((0, cB.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [t]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uI.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uj;
                                    let e = [];
                                    for (let t of a) $.Ay.isMember(l, t) && e.push(t);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uC;
                                let e = new Set();
                                for (let t of o) {
                                    let n = el.cc({ user: t, context: i });
                                    uE.zy(n, W.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => t?.filter((e) => d.has(e.author_id)), [t, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((t = l = s.useMemo(() => l?.filter((e) => u_.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [o1.A, uf.A],
                            () => {
                                let e = uf.A.getDebugImpressionCappingDisabled();
                                return !(0, ug.sE)("useFilterImpressionCappedContent") || e
                                    ? uy
                                    : o1.A.getImpressionCappedItemIds();
                            },
                            [t],
                        )),
                        s.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: uy };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, dm.JM)(t) || !i.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, i]));
                    l = r;
                    let o = (0, m.bG)([uf.A], () => uf.A.getFeedRequestId(de.X1.GLOBAL_FEED));
                    return (
                        (n = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(o$).useInjectEntriesWithPreviewData(n)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([o1.A], () => o1.A.hidden),
                A = (0, m.bG)([up.A], () => up.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([tv.A], () => tv.A.getGuild(r), [r]),
                x = ((0, ux.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, E, I, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [t, n, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: o4.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: o4.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: o3,
                        type: o4.S9.CONTENT_INVENTORY_GROUP,
                        key: o3,
                        count: e.length,
                        index: n.length,
                        title: z.intl.string(z.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let t = !e;
                                return (
                                    en.default.track(eo.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: l,
                                        guild_id: r,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(ud).reduce((e, t) => e + t, 0),
                    };
                    return [[m, ...t], [...n, m, ...e], Math.random(), e];
                }, [l, c, a, t, r, d, n, i, h, x]),
                C = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                v = s.useCallback(
                    (e) => {
                        let t = Math.floor(e / 72),
                            n = Math.min(j?.length ?? 0, t);
                        C.current = Math.max(C.current, n);
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
                                t = e.slice(0, C.current);
                            !h &&
                                A &&
                                x &&
                                (dt(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: t,
                                    surface_type: de.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, ug.sE)("useInjectContentInventoryFeed") &&
                                    ib.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: E, version: I, updateMaxRowSeen: v }
            );
        })({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
        A = s.useRef(null),
        p = s.useRef(null);
    s.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let g = (0, oU.W)("lg") + (0, oU.W)("xxs"),
        x = s.useCallback(
            (e, t) => {
                let n = A.current;
                if (null == n) return;
                let i = t === o7 || t === o5 ? 0 : parseInt(t, 10),
                    [l, s] = n.getSectionRowFromIndex(i);
                n.scrollToIndex({
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
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        E = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        I = (0, y.Ay)({ id: `members-${t.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: E });
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, n),
            children: [
                (0, l.jsx)(uR, { guildId: t.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: I,
                    children: (0, l.jsx)(uU, {
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
function uF(e) {
    let { channel: t, className: n } = e,
        i = s.useDeferredValue(t);
    return s.useMemo(() => (0, l.jsx)(oQ, { children: (0, l.jsx)(uG, { channel: i, className: n }) }), [i, n]);
}
var uH = n(888904);
let uB = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uH.kL,
        children: [
            (0, l.jsxs)(lr.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lr.A.Icon, { icon: dx.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lr.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uH.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uH.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uH.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uV = n(909735),
    uY = n(943712),
    uW = n(274541),
    uz = n(746080),
    uq = n(516607),
    uX = n(999900);
function uK() {
    return (0, l.jsx)("div", { className: uX.wG, children: (0, l.jsx)(g.y, {}) });
}
let u$ = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("229511"),
                n.e("599660"),
                n.e("452880"),
                n.e("202342"),
                n.e("500194"),
                n.e("207309"),
                n.e("430877"),
                n.e("302800"),
                n.e("249681"),
                n.e("666140"),
                n.e("333097"),
                n.e("704374"),
                n.e("777848"),
                n.e("689160"),
                n.e("623685"),
                n.e("842516"),
                n.e("421225"),
                n.e("822070"),
            ]).then(n.bind(n, 559296)),
        webpackId: 559296,
        renderLoader: uK,
        name: "ForumChannel",
    }),
    uQ = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("770583"),
                n.e("43853"),
                n.e("537832"),
                n.e("116694"),
                n.e("815852"),
                n.e("154168"),
                n.e("800775"),
                n.e("979585"),
                n.e("357718"),
                n.e("30750"),
            ]).then(n.bind(n, 422445)),
        webpackId: 422445,
        renderLoader: uK,
        name: "AppChannel",
    });
function uJ() {
    return Promise.all([
        n.e("651299"),
        n.e("426965"),
        n.e("256172"),
        n.e("859821"),
        n.e("113561"),
        n.e("368991"),
        n.e("688508"),
        n.e("422037"),
        n.e("656997"),
        n.e("828849"),
        n.e("944121"),
        n.e("655282"),
        n.e("375971"),
        n.e("792818"),
        n.e("630279"),
        n.e("460582"),
        n.e("477751"),
        n.e("245851"),
        n.e("998392"),
        n.e("703540"),
        n.e("728723"),
        n.e("794188"),
        n.e("740705"),
        n.e("730227"),
        n.e("374962"),
        n.e("770583"),
        n.e("64097"),
        n.e("43853"),
        n.e("529659"),
        n.e("693684"),
        n.e("389684"),
        n.e("45646"),
        n.e("604456"),
        n.e("459397"),
        n.e("847810"),
        n.e("249727"),
        n.e("784573"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("437961"),
        n.e("711617"),
        n.e("829260"),
        n.e("327198"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("256373"),
        n.e("33448"),
        n.e("420577"),
        n.e("79216"),
        n.e("537832"),
        n.e("815275"),
        n.e("116694"),
        n.e("636516"),
        n.e("360536"),
        n.e("704374"),
        n.e("986300"),
        n.e("815852"),
        n.e("932011"),
        n.e("465694"),
        n.e("874821"),
        n.e("426792"),
        n.e("769014"),
        n.e("154168"),
        n.e("815057"),
        n.e("654624"),
        n.e("322094"),
        n.e("800775"),
        n.e("45916"),
        n.e("726223"),
        n.e("979585"),
        n.e("678827"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("60701"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("975076"),
        n.e("736793"),
        n.e("112733"),
        n.e("357718"),
        n.e("586546"),
        n.e("792461"),
    ]).then(n.bind(n, 540462));
}
let uZ = (0, tJ.Fe)({ createPromise: uJ, webpackId: 540462, name: "ChannelCall", renderLoader: uK });
function u0() {
    return Promise.all([
        n.e("770583"),
        n.e("998392"),
        n.e("703540"),
        n.e("368991"),
        n.e("256172"),
        n.e("688508"),
        n.e("422037"),
        n.e("656997"),
        n.e("828849"),
        n.e("944121"),
        n.e("655282"),
        n.e("375971"),
        n.e("792818"),
        n.e("630279"),
        n.e("45646"),
        n.e("389684"),
        n.e("728723"),
        n.e("794188"),
        n.e("460582"),
        n.e("477751"),
        n.e("740705"),
        n.e("730227"),
        n.e("153965"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("437961"),
        n.e("829260"),
        n.e("327198"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("256373"),
        n.e("33448"),
        n.e("420577"),
        n.e("79216"),
        n.e("815275"),
        n.e("636516"),
        n.e("360536"),
        n.e("704374"),
        n.e("465694"),
        n.e("874821"),
        n.e("426792"),
        n.e("769014"),
        n.e("654624"),
        n.e("322094"),
        n.e("45916"),
        n.e("979585"),
        n.e("678827"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("60701"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("975076"),
        n.e("580372"),
    ]).then(n.bind(n, 507007));
}
let u1 = (0, tJ.Fe)({ createPromise: u0, webpackId: 507007, name: "StageChannelCall", renderLoader: uK }),
    u2 = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("784993"),
                n.e("489217"),
                n.e("527552"),
                n.e("769266"),
                n.e("193845"),
                n.e("249681"),
                n.e("428235"),
                n.e("369501"),
                n.e("161058"),
                n.e("333097"),
                n.e("359702"),
                n.e("220803"),
                n.e("79171"),
                n.e("417664"),
                n.e("662368"),
            ]).then(n.bind(n, 320704)),
        webpackId: 320704,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(sC, {});
        },
    }),
    u3 = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("577154"),
                n.e("424216"),
                n.e("877730"),
                n.e("611899"),
                n.e("489217"),
                n.e("527552"),
                n.e("769266"),
                n.e("487873"),
                n.e("765626"),
                n.e("683302"),
                n.e("249681"),
                n.e("728136"),
                n.e("428235"),
                n.e("507775"),
                n.e("369501"),
                n.e("161058"),
                n.e("333097"),
                n.e("636002"),
                n.e("359702"),
                n.e("466913"),
                n.e("71719"),
                n.e("213848"),
            ]).then(n.bind(n, 754744)),
        webpackId: 754744,
        name: "GuildMemberModViewSidebar",
    }),
    u7 = (0, tJ.Fe)({
        createPromise: () => Promise.all([n.e("386345"), n.e("269178"), n.e("177718")]).then(n.bind(n, 763349)),
        webpackId: 763349,
        name: "FriendsSidebar",
    });
class u5 extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rj.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        let { channel: e, dmAppChannelApplicationId: t } = this.props;
        return null != e && ((0, oP.ZV)(e.type) || null != t);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? uJ()
            : e === eo.rbe.GUILD_STAGE_VOICE && u0();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, n3.iN)(e.id);
    };
    _handleContextMenu = (e, t) => {
        switch (t.type) {
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_APP:
                this.openChannelContextMenu(e, t);
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case eo.rbe.DM:
                this.openDMContextMenu(e, t);
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
    handleThreadSidebarResize = (e, t) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: t });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        (d()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, rC.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [L.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        (d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("947502"),
                    n.e("309004"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("359545"),
                ]).then(n.bind(n, 22496));
                return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i });
            }));
    }
    openThreadContextMenu(e, t) {
        (d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("965789"),
                    n.e("584615"),
                ]).then(n.bind(n, 612826));
                return (n) => (0, l.jsx)(e, { ...n, channel: t });
            }));
    }
    openDMContextMenu(e, t) {
        d()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = ee.default.getUser(t.getRecipientId());
        (d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("463317"),
                    n.e("926132"),
                    n.e("893190"),
                    n.e("146652"),
                    n.e("189673"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("955557"),
                    n.e("691994"),
                    n.e("576665"),
                    n.e("947502"),
                    n.e("245996"),
                    n.e("700792"),
                    n.e("965789"),
                    n.e("592822"),
                    n.e("529422"),
                    n.e("823427"),
                    n.e("307059"),
                    n.e("309291"),
                    n.e("198415"),
                    n.e("935483"),
                    n.e("17244"),
                    n.e("298199"),
                    n.e("864464"),
                    n.e("439778"),
                ]).then(n.bind(n, 385913));
                return (n) => (0, l.jsx)(e, { ...n, user: i, channelSelected: !0, channel: t });
            }));
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(uz.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iv.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(tj.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== dY.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iy.A,
                  { size: dL.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: t,
            isLurking: n,
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
                    o.push((0, l.jsx)(lN, { channel: e }, "calls")),
                    o.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lT.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(iB, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(lz, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(lw, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lN, { channel: e }, "calls")),
                    o.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lT.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(iq, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(ii, { channel: e })),
                    null == t || t.isForumLikeChannel() || o.push((0, l.jsx)(rc, { channel: t }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(lH, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(ic, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(iq, { channelId: e.id }, "members")),
                    null != t && (0, eE.pk)(e) && o.push((0, l.jsx)(i2, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rA, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rc, { channel: e }, "browser")),
                    n || o.push((0, l.jsx)(iX.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    (0, tM.PD)(e.guild_id, "channel_header") &&
                        o.push((0, l.jsx)(iW, { channelId: e.id }, "conversations")),
                    o.push((0, l.jsx)(iq, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && o.push((0, l.jsx)(i2, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(tR, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                (o.push((0, l.jsx)(tg, { channel: e }, "popout")),
                    o.push((0, l.jsx)(rc, { channel: e }, "browser")),
                    n || o.push((0, l.jsx)(iX.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    o.push((0, l.jsx)(iq, { channelId: e.id }, "members")),
                    o.push((0, l.jsx)(iB, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(tA, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(ls, {}, "game-invite-channel-learn-more")),
                    n ||
                        (o.push((0, l.jsx)(lt, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(iX.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(iq, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
        }
        return o;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let t = [];
        if (e.isSystemDM()) return t;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
                break;
            case eo.rbe.GROUP_DM:
                t.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e && null != t
            ? (0, l.jsx)("div", {
                  className: uX.u8,
                  children: (0, l.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("836178"), n.e("670774")]).then(
                                  n.bind(n, 464035),
                              );
                              return (n) => (0, l.jsx)(e, { channel: t, ...n });
                          }),
                  }),
              })
            : null;
    };
    renderHeaderBar = () => {
        let {
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: i,
            guildId: s,
            showCall: r,
            showActivityPanel: o,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != t, "Should not be null if channel is not null."));
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, n3.iN)(e.id) : void 0,
            A = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            p = o || c,
            g = r || p;
        return (0, l.jsxs)("div", {
            className: uX.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && r ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lr.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(uX.DD, r, { [uX.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: c,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(nD.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, nD.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
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
                                              className: uX.u8,
                                              children: (0, l.jsx)(x.$, {
                                                  onClick: () => (0, nk.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, nD.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sE.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t, spoilerGatingChannelId: n } = this.props;
        return !t && null == n && e;
    }
    renderCall() {
        let { channel: e, isStageUnifiedCall: t } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
                if (!t) return (0, l.jsx)(u1, { channel: e, popoutType: tE.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    uZ,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: tE.N.NO_POPOUT,
                    },
                    `call-${e.id}`,
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((d()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, l.jsx)(e6, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: t,
            needSubscriptionToAccess: n,
            channelIsContentGated: i,
            spoilerGatingChannelId: s,
            showCall: r,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), n))
            return (d()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(iL, { guildId: t.id })
                : (0, l.jsx)(iN.H, { guildId: t.id, children: (0, l.jsx)(iF, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(oM.A, { guild: t, channelId: e.id });
        if (null != s) return (0, l.jsx)(nU.A, { guild: t, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != t, "directory channels must exist within a guild"), (0, l.jsx)(nR, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            d()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(u$, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return e.type === eo.rbe.GUILD_APP || null != this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(uQ, { channel: e }, e.id)
            : (0, l.jsx)(nP.A, { channel: e, guild: t, chatInputType: tI.oU.NORMAL }, null != t ? t.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: i,
            section: s,
            showCall: r,
            showActivityPanel: a,
            showFramePanel: o,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (s === eo.YvQ.PROFILE && e.isPrivate() && !r && !a && !o)
            return (0, l.jsx)(oR, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sf, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uF, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(uF, { channel: t }, `channel-members-${t.id}`);
                    break;
                case eo.rbe.PUBLIC_THREAD:
                case eo.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, l.jsx)(ep, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (s === eo.YvQ.CONVERSATIONS)
            switch (e.type) {
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(tQ, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(u2, { guildId: n?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: i,
            showWelcomeModal: s,
            isLurking: r,
            isUnavailable: a,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                a ||
                i ||
                (o &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("638763").then(n.bind(n, 201510));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => i_(l$.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("99643"), n.e("510585")]).then(
                                n.bind(n, 954784),
                            );
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, oO.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: t,
                section: n,
                channelSidebarState: i,
                guildSidebarState: s,
                width: r,
                channelIsContentGated: a,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == s && null == i) return null;
        if (n === eo.YvQ.SIDEBAR_CHAT && null != i) {
            if (a || null != o) return null;
            switch (i.type) {
                case sb.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(s4, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sb.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rI, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sb.PE.VIEW_CHANNEL: {
                    let n = ew.A.getChannel(i.channelId);
                    if (n?.isThread()) {
                        let n = t?.isForumLikeChannel() ? iE : rI;
                        e = (0, l.jsx)(n, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(uW.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sb.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sb.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: uX.uC,
                    children: (0, l.jsx)(u3, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => sy.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(ow.A, {
                sidebarType:
                    t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? ow.X.PostSidebar : ow.X.ThreadSidebar,
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
                guild: t,
                formattedChannelName: n,
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
        if (i) return (0, l.jsx)(uB, {});
        if (null == e) return (0, l.jsx)(uY.A, { channelId: this.props.channelId });
        let E = r === eo.YvQ.SIDEBAR_CHAT,
            I = (0, uV.UN)("Channel"),
            j = null != d && !E,
            C = (0, oP.nO)(e.type) && !o && null == this.props.dmAppChannelApplicationId,
            y = t?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE,
                        className: a()(uX.TE, {
                            [uX.js]: (E && !I) || j,
                            [uX.Rs]: E ? !I || g : j || x,
                            [uX.jl]: E && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: E ? p : void 0 },
                                      className: uX.x4,
                                      channel: e,
                                      draftType: ip.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uX.Qs, { [uX.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tZ.HI, { location: y, subsection: n ?? void 0 }),
                u ? (0, l.jsx)("div", { className: uX.zP, children: b }) : b,
                x && (0, l.jsx)(u7, {}),
            ],
        });
    }
}
let u6 = (0, ef.A)(u5),
    u9 = s.memo(function (e) {
        var t, n;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            c = (0, m.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            g = (0, m.bG)([ew.A], () => r ?? ew.A.getChannel(d), [d, r]),
            x = (0, nO.DZ)(),
            f = (0, nO.e4)(g),
            j = (0, m.bG)([ew.A], () => ew.A.getChannel(c), [c]),
            C = f?.parent_id,
            y = (0, m.bG)([ew.A], () => ew.A.getChannel(C), [C]),
            b = (0, m.bG)([tv.A], () => tv.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: _ } = (0, iT.A)(f?.id ?? void 0),
            v = (0, m.bG)(
                [tf.A],
                () => {
                    let e = null != d ? tf.A.getParticipants(d) : [],
                        t = null != d ? tf.A.getActivityParticipants(d) : [];
                    return e.length - t.length > 0;
                },
                [d],
            ),
            N = (0, iC.A)(),
            T = (0, m.bG)([eU.Ay], () => (N?.channelId ?? eU.Ay.getVoiceChannelId()) === f?.id),
            S = (0, m.bG)([ej.Ay], () => (null != f ? ej.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, m.bG)([ok.A], () => ok.A.isConnected()),
            M = (0, eI.Ay)(R),
            O = R && !1 === M;
        s.useEffect(() => {
            T &&
                O &&
                null != S &&
                null != f &&
                E.A.selectParticipant(
                    f.id,
                    (0, tx.Qt)({ applicationId: S.applicationId, instanceId: S.compositeInstanceId }),
                );
        }, [O, f, T, S]);
        let L = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            P = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            D = null != L && !(0, ev.A)(f?.id) && P === eZ.Gd.PANEL,
            k = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: w, isUserInThisVoice: U } = (0, m.cf)([lC.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lC.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lC.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            G = null != f && f.isPrivate() && !D && v,
            F = f?.isGuildVocal() || G || (w && (U || !k)),
            H = (0, sv.e)(f, "channel"),
            B = (0, m.bG)([t_.A], () => {
                let e = (0, tm.ny)(t_.A.getMainFrame());
                return e?.data.layoutMode === tm.y0.FOCUSED && e.intent === tm.sV.MAIN;
            }),
            { welcomeModalChannelId: V } = (0, h.zy)(),
            Y = (0, m.bG)([ir.A], () => null != f && ir.A.isLurking(f.guild_id), [f]),
            W = (0, m.bG)([oL.A], () => oL.A.hasSeen(f?.guild_id, Y), [f, Y]),
            z = (0, m.bG)(
                [tf.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != d
                          ? tf.A.getLayout(d)
                          : eo.DUB.NORMAL,
                [d],
            ),
            q =
                ((t = b?.id),
                (i = (0, m.bG)([tv.A, lK, ee.default, $.Ay], () => {
                    let e = tv.A.getGuild(t);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === lK.hasViewedPrompt(l$.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = ee.default.getCurrentUser();
                    if (null == n) return null;
                    let i = $.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != t && null != i && (i || i_(l$.REAL_NAME_PROMPT, t));
                }, [i, t]),
                !0 === i),
            X =
                ((n = b?.id),
                (0, m.bG)([ew.A, tv.A, eU.Ay], () => {
                    let e = tv.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = ew.A.getChannel(V);
                    return V === eU.Ay.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, oP.ke)(t.type);
                })),
            { section: K, channelSidebarState: J } = (0, m.cf)(
                [iV.Ay],
                () => ({ section: iV.Ay.getSection(d, f?.isDM()), channelSidebarState: iV.Ay.getSidebarState(d) }),
                [d, f],
            ),
            Z = b?.id,
            et = (0, m.bG)([iV.Ay], () => iV.Ay.getGuildSidebarState(Z), [Z]),
            en = (0, lJ.lI)(),
            el = (0, nL.Ay)(f),
            es = (0, nL.Ay)(f, !0),
            er = (0, m.bG)([tf.A], () => (null != f ? tf.A.getSelectedParticipant(f.id) : null)),
            ea = (0, e4.vL)(f),
            ed = (0, nw.Uf)(f),
            ec = null != f && c === f.id,
            eu = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eh, appBarToggleEnabled: em } = iI.A.useConfig({ location: "Channel" }),
            eA = (0, ij.c)(),
            ep = (0, m.bG)(
                [oD.A, iz.A],
                () => {
                    let e = f?.guild_id ?? iz.A.getGuildId();
                    return null != e && oD.A.isUnavailable(e);
                },
                [f],
            ),
            eg = eh && !__OVERLAY__ && null != f && !ep && !f.isGuildVocal();
        (s.useEffect(() => (I.A.setFriendsSidebarAvailable(eg), () => I.A.setFriendsSidebarAvailable(!1)), [eg]),
            (function (e) {
                let { onTransition: t } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: n } = e,
                            i = (0, e_.H)(n);
                        if (null == i || !(0, ev.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, e9.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, e8.A)(s, n), t?.());
                        }, 0);
                    }
                    return (
                        ei._.subscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e),
                        () => {
                            ei._.unsubscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e);
                        }
                    );
                }, [t]);
            })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, nk.JK)();
                if (e?.location?.state?.stageInviteKey === uq.J2) {
                    let { channelId: t } = (0, lQ.vu)(e?.location?.pathname) ?? {};
                    null != t && o(t);
                }
            }, []));
        let ex = { channel: f, inCurrentVoiceChannel: ec },
            ef = s.useRef(ex);
        (s.useEffect(() => {
            ef.current = ex;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ef.current;
                null != a && null != e && eu && e.id === a && !t && ((0, s_.av)(e), o(null));
            }, [a, eu]));
        let eC = (0, eE.cI)(f),
            ey = null != f && f.isPrivate(),
            eb = (0, eI.Ay)(ey),
            eN = (0, eI.Ay)(f?.id);
        s.useEffect(() => {
            let e = eb && !ey,
                t = eb && ey && f?.id !== eN;
            (e || t) && (0, nM.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lb.i.AUTO });
        }, [f?.id, eN, ey, eb]);
        let eT = (0, p.useHasAnyModalOpen)(),
            eS = (0, tC.a)(f);
        return (0, l.jsx)(u6, {
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
            section: K,
            channelSidebarState: J,
            guildSidebarState: et,
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
            showWelcomeModal: !W && X,
            showFollowButton: (f?.type === eo.rbe.GUILD_ANNOUNCEMENT && b?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lC.A], () => ({ hasVideo: null != f && lC.A.hasVideo(f.id) }), [f]),
            inCall: ec,
            selectedParticipant: er,
            showChannelSummaries: eC,
            showHeaderGuildBreadcrumb: x || en,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: L,
            friendsSidebarExperimentEnabled: eh,
            canShowFriendsSidebar: eg,
            friendsSidebarAppBarToggleEnabled: em,
            friendsSidebarCollapsed: eA,
            dmAppChannelApplicationId: eS,
        });
    });
