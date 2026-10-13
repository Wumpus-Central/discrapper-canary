(t.r(n), t.d(n, { default: () => uq }), t(321073));
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
                    premiumSince: null == P ? null : new Date(P),
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
    eM = t(587837),
    eO = t(850891),
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
    e9 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e7(e) {
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
        M = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
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
                    className: a()(e2.iE, e9[g], e),
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
                                                  renderUser: G,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e2.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e2.qi,
                                                          children: [
                                                              (0, l.jsx)(e1, { channelId: M }),
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
        : (0, l.jsx)(e7, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
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
var np = t(270593);
function ng(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: ne.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nu.A)(n.application_id ?? null, t);
    return (0, l.jsx)(np.A, { frame: i });
}
var nx = t(568598),
    nf = t(198052),
    nI = t(164617),
    nE = t(355622),
    nj = t(689874),
    nC = t(70688),
    ny = t(627363),
    nb = t(91242),
    n_ = t(71393),
    nv = t(793480),
    nN = t(577964),
    nT = t(248675);
function nS(e) {
    let { channel: n } = e,
        t = (0, m.bG)([nb.A], () => nb.A.getFramesForChannel(n.id).find((e) => (0, nm.x1)(e)), [n.id]),
        i = (0, ny.YY)(t?.applicationId).data,
        s = (0, m.bG)(
            [n_.A],
            () => n_.A.getGuild(n.guild_id)?.features.has(eo.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) === !0,
            [n.guild_id],
        ),
        r = (0, nv.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.vibegrationsProjectId == null || !r || s) return null;
    let a = z.intl.string(nT.default["/TlGcK"]);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: nC.DoorExitIcon,
        tooltip: a,
        "aria-label": a,
        onClick: () => (0, nN.A)(t.id, n.guild_id ?? null, n.id),
    });
}
var nR = t(828488),
    nM = t(939249),
    nO = t(408278),
    nP = t(624479),
    nL = t(858899),
    nD = t(534890),
    nk = t(661531),
    nw = t(39623),
    nG = t(952270),
    nU = t(381849),
    nF = t(549973),
    nH = t(957565),
    nB = t(935208),
    nV = t(181041),
    nY = t(256331),
    nW = t(623562),
    nz = t(403862);
let nq = ["high", "medium", "low"],
    nK = s.memo(function (e) {
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
                              nq.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: nz.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nz.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: nz.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nz.a7,
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
                            className: nz.a7,
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
                            className: nz.a7,
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
    nX = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = nB.default.extractTimestamp(n.startMessageId),
            s = nB.default.extractTimestamp(n.endMessageId),
            r = (0, nF.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, nU.WR)({ seconds: a, getFormatter: nU.i }),
            d = (0, m.bG)([nV.A], () => nV.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(nM.D, {
            className: nz.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: nz.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: nz.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(nO.K, {
                            icon: nP.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, nH.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nL.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: nz.FR,
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
                        className: nz.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: nz.JP,
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
                    className: nz.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: nz.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nz.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nz.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: nz.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nz.a7,
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
                                    className: nz.a7,
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
                                    className: nz.a7,
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
                (0, l.jsx)(nK, { moderation: n.moderation ?? null }),
            ],
        });
    });
function n$(e) {
    let { channel: n } = e,
        t = (0, m.bG)([nV.A], () => nV.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([nV.A], () => nV.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([nY.A], () => nY.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, nW.xI)(n.id, e.id);
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nz.zr,
        children: [
            (0, l.jsxs)("div", {
                className: nz.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: nz.gn,
                        children: [
                            (0, l.jsx)(nD.ChatIcon, { color: nk.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: nz.y6,
                        children: (0, l.jsx)(nO.K, {
                            icon: r ? nw.EyeIcon : nG.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: nW.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: nz.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(nX, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: nz.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var nQ = t(268218),
    nJ = t(726249),
    nZ = t(334738),
    n0 = t(208882),
    n1 = t(938764),
    n2 = t(519480),
    n3 = t(352123),
    n9 = t(825244),
    n7 = t(130696);
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
        className: n7.h2,
        children: [
            (0, l.jsx)("img", { className: n7.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: n7._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: n7.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(n9.E, {
                      className: n7.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(n9.E, {
                className: n7.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var n5 = t(683438),
    n8 = t(689175),
    n4 = t(761508),
    te = t(765671),
    tn = t(902119),
    tt = t(22231),
    ti = t(66834),
    tl = t(573435),
    ts = t(101555),
    tr = t(548118),
    ta = t(714991),
    to = t(776231),
    td = t(345942),
    tc = t(486020),
    tu = t(149790),
    th = t(682557),
    tm = t(524058);
let tA = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(nM.D, {
        onClick: n,
        className: tm.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tm.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tp(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, n3.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tm.fc, { [tm.QX]: i }),
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
                                  className: tm.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(th.A, {
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
                                    className: tm.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tg = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([n_.A], () => n_.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, td.u)(n.guildId) : await ti.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tc.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, to.mZ)() }),
        c = tc.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tm.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tm.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tm.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tm.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tm.$f,
                            children: (0, l.jsx)(tl.Ay, {
                                mask: tl.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tm.SA,
                                    children: (0, l.jsx)(tr.Ay, {
                                        className: tm.rZ,
                                        iconSrc: c,
                                        guild: (0, tu.xi)(n),
                                        size: tr.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tm.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tm.DD,
                            children: [
                                (0, l.jsx)(ta.A, { className: tm.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tm.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tm.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tm.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tm.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tm.JX }),
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
                                        className: tm.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tm.Li }),
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
                            className: tm.PD,
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
                (0, l.jsx)(tp, { entry: n }),
            ],
        })
    );
});
var tx = t(946116),
    tf = t(844086),
    tI = t(770679);
function tE(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, te.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: tI.wx,
        children: [
            (0, l.jsx)("div", { className: tI.y2, children: (0, l.jsx)(tn.A, {}) }),
            (0, l.jsx)("div", {
                className: tI.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tI.VW, { [tI.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: tI.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: tI.MT,
                            children: (0, l.jsx)(n5.I, {
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
let tj = function (e) {
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
        className: tf.$$,
        children: (0, l.jsxs)(n8.Gt, {
            className: tf.XG,
            children: [
                (0, l.jsx)(tE, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(n8.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(n4.V, {
                        className: tI.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                n4.V.Item,
                                { className: tI.YU, id: tx.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                tx.mU.ALL,
                            ),
                            (0, tx.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    n4.V.Item,
                                    { className: tI.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: tf.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: tI.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tf.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tg, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tA, { onClick: i }) : null,
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
var tC = t(370876),
    ty = t(28863),
    tb = t(364522),
    t_ = t(792831),
    tv = t(211862);
let tN = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: tf.$$, children: (0, l.jsx)(g.y, { className: tf.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(ty.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tv.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: tv.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tf.vY, children: d.map((e) => (0, l.jsx)(tg, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tf.$$,
        children: (0, l.jsxs)(tb.Ar, {
            className: tf.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tv.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tv.Dr,
                            children: [
                                (0, l.jsx)(nM.D, {
                                    onClick: r,
                                    className: tv.UE,
                                    children: (0, l.jsx)(t_.A, { direction: t_.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tv.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(n5.I, {
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
var tT = t(650583);
let tS = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([n2.A], () => {
            let e = n2.A.getCurrentCategoryId(n.id),
                t = n2.A.getDirectoryEntries(n.id, e === tx.mU.ALL ? null : e),
                i = n2.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: n2.A.getDirectoryAllEntriesCount(n.id),
                isLoading: n2.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                (0, nZ.ack)(
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
                          if (n !== tx.mU.ALL) return [{ entries: (0, tC._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tC.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tC.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([n1.A], () => {
            let { mostRecentQuery: e, fetching: t } = n1.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: n1.A.getSearchResults(n.id, e) };
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
            (n0.Yc(n.id), n0.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, n3.b)(n),
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
                                      currentCategoryId: r === tx.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === tT.dh.ENTER &&
            (n0.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (I(""), n0.BA(n.id));
    }
    return E
        ? (0, l.jsx)(tN, {
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
          ? (0, l.jsx)("div", { className: tf.$$, children: (0, l.jsx)(g.y, { className: tf.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tf.$$, children: (0, l.jsx)(n6, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tj, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      n0.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var tR = t(826673),
    tM = t(93055),
    tO = t(47167),
    tP = t(688438),
    tL = t(353428),
    tD = t(976860),
    tk = t(288254),
    tw = t(873614),
    tG = t(649852),
    tU = t.n(tG),
    tF = t(811893),
    tH = t(789645),
    tB = t(163126),
    tV = t(182061),
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
    t9 = t(713608),
    t7 = t(473503),
    t6 = t(901472),
    t5 = t(267102),
    t8 = t(474397),
    t4 = t(486974),
    ie = t(39470);
function it(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, t5.aL)(),
        r = z.intl.string(ie.default["Beo/7v"]),
        { firstMessage: a } = (0, t7.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nh.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, t2.iN)(n.id),
                      (0, t8.A)(),
                      (0, t6.z)(n.guild_id, d, n.id, {
                          modViewPanel: t4.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: t9.q,
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
        d = (0, tV.A)(n),
        c = (0, tq.A)(n),
        u = (0, tQ.A)(n.id),
        h = (0, t$.A)(n),
        m = (0, tW.A)(n),
        A = (0, tY.A)(n),
        p = (0, t1.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, t0.A)(n),
        x = (0, tX.A)(n),
        f = (0, tB.$)(1e3);
    function I() {
        (0, t2.iN)(n.id);
    }
    function E(e) {
        let t = tU()(() => {
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
                        icon: tF.t,
                        trailingIndicator: { type: "icon", icon: tF.t },
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
                        icon: tF.t,
                        trailingIndicator: { type: "icon", icon: tF.t },
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
        a = (0, m.bG)([n_.A], () => n_.A.getGuild(i?.getGuildId())),
        o = (0, tO.Ay)(i),
        d = (0, tk.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, ip.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(tw.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(im, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iA.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tL.zF)({
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
                        null != i && (0, tD.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ig.T,
                children: (0, l.jsx)(tP.A, { channel: i, guild: a, chatInputType: nE.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iI = t(925166),
    iE = t(605117),
    ij = t(857253),
    iC = t(872363),
    iy = t(73153);
let ib = function (e, n) {
    iy.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var i_ = t(561446),
    iv = t(300233),
    iN = t(499211),
    iT = t(468689),
    iS = t(529942),
    iR = t(739455),
    iM = t(709017);
function iO(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iM.t7,
        children: (0, l.jsxs)("div", {
            className: iM.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iM.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iM.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iM.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iS.rf)(n),
                                        iT.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iR.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iP = t(599941),
    iL = t(29385),
    iD = t(950344),
    ik = t(217530),
    iw = t(162093),
    iG = t(325348);
function iU(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iL.e)({ guildId: n, channelId: t }),
        r = (0, iP.uk)(n),
        a = (0, iP.Tq)(n),
        o = (0, m.bG)([n_.A], () => n_.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tO.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, iD.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iG.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iG.__invalid_spinner }),
          })
        : (0, l.jsxs)(tb.Ar, {
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
                  (0, l.jsx)(ik.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iw.A,
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
var iF = t(138298),
    iH = t(940382),
    iB = t(761640);
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
        i = (0, m.bG)([iB.Ay], () => iB.Ay.getCurrentSidebarChannelId(n) === n, [n]),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(n)?.getGuildId(), [n]);
    return (0, l.jsx)(nh.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nD.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? iF.A.closeChannelSidebar(n)
                : iF.A.openChannelAsSidebar({
                      guildId: r,
                      channelId: n,
                      baseChannelId: n,
                      details: { type: iH.kk.CHAT },
                  });
        },
        selected: i,
        badge: t,
    });
}
var iY = t(284252);
function iW(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([iB.Ay], () => iB.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([nV.A], () => (nV.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(nh.In, {
        onClick: E.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nD.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iY.q : void 0,
        selected: t,
        badge: r,
    });
}
var iz = t(967198);
function iq(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([iB.Ay], () => iB.Ay.getSection(n)),
        i = (0, m.bG)([iz.A], () => iz.A.getGuildId()),
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
var iK = t(187360),
    iX = t(366605),
    i$ = t(945830);
let iQ = function (e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        [i, r] = s.useState(!1),
        a = (0, t5.aL)(),
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
                return (0, l.jsx)(i$.A, { ...e, onJump: h, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(nh.In, {
                    ...e,
                    ref: o,
                    onClick: d,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iX.t,
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
var iJ = t(306788),
    iZ = t(863922),
    i0 = t(822074),
    i1 = t(521732);
function i2(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, m.bG)([i0.A], () => i0.A.shouldShowTopicsBar());
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: iJ.K,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: i1.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iZ.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var i3 = t(885574),
    i9 = t(947094),
    i7 = t(919577),
    i6 = t(207777),
    i5 = t(422844),
    i8 = t(435470),
    i4 = t(892110),
    le = t(45494);
function ln(e) {
    let { channel: n } = e,
        t = (0, i8.S4)(n),
        i = (0, m.bG)([i9.A], () => i9.A.hasHidden(n.id)),
        s = (0, i4.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, i5.R)(n.id),
        d = (0, m.bG)(
            [i6.A, le.A],
            () => !!(i6.A.getThreadIds(n.id, r, a, o).length > 0) || !!(le.A.getThreads(n.id, r, a, o).length > 0),
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
        icon: i3.CircleInformationIcon,
        onClick: function () {
            return i7.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lt = t(290136),
    li = t(975571),
    ll = t(490094);
function ls() {
    let e = z.intl.string(ll.default.pdipXI);
    return (0, l.jsx)(nh.In, {
        tooltip: e,
        icon: lt.CircleQuestionIcon,
        onClick: function () {
            window.open(li.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lr = t(742589),
    la = t(43105),
    lo = t(428689),
    ld = t(978940),
    lc = t(387755),
    lu = t(730852),
    lh = t(641703),
    lm = t(379848),
    lA = t(753727),
    lp = t(625075),
    lg = t(222692),
    lx = t(442353),
    lf = t(470710),
    lI = t(186111),
    lE = t(192820),
    lj = t(994500),
    lC = t(977997),
    ly = t(818023),
    lb = t(49999),
    l_ = t(731854);
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
                : lE.Ay.supports(l_.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lp.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nh.Ay.Icon, { icon: lo.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(la.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: ly.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lb.i.USER_DISMISS),
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
            return lc.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lx.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lu.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tR.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lb.i.AUTO }),
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
        (0, lx.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lg.A)();
    };
}
function lN(e) {
    let { channel: n } = e,
        t = (0, lA.A)(),
        i = (0, m.bG)([nf.A], () => nf.A.getMode(n.id)),
        s = (0, m.bG)([lC.A], () => lC.A.isInChannel(n.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lf.A], () => ({
            callActive: lf.A.isCallActive(n.id),
            callUnavailable: lf.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lj.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lj.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lj.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, t5.Us)(),
        g = [],
        x = (0, lh.A)(n.id),
        f = (0, m.bG)([lI.A], () => lI.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lv, {
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
var lT = t(452015),
    lS = t(765178),
    lR = t(231483),
    lM = t(544231),
    lO = t(338510),
    lP = t(151119),
    lL = t(278941),
    lD = t(665909),
    lk = t(327337);
let lw = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lO.u)(n.id),
        r = (0, lP.S)(n.id),
        a = (0, lL.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lI.A], () => lI.A.hasLayers()),
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
                (0, lM.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lD.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lD.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lS.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lM.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lD.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
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
        (null != a && (0, lM.xi)(n.id, [a.id]),
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
                    { modalKey: lk.V },
                ),
                (0, lD._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lD.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
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
                  icon: lR.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lG = t(262763),
    lU = t(406704),
    lF = t(576705);
let lH = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lA.A)(),
        i = (0, m.bG)([lC.A], () => lC.A.isInChannel(n.id)),
        r = (0, m.bG)([lC.A], () => !u().isEmpty(lC.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([lF.A], () => lF.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iN.A)(n.id),
        d = (0, lU.Id)(n),
        { enabled: c } = lU.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lG.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
              icon: ld._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lB = t(812991),
    lV = t(47675),
    lY = t(999291);
function lW() {
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
function lz(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([iB.Ay], () => iB.Ay.getSection(n.id, n?.isDM())),
        s = (0, lY.Ay)(n.getRecipientId()),
        r = lW(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nh.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lB.n,
        onClick: function () {
            ((0, lV.am)({ displayProfile: s, isProfileOpen: !a }), E.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let lq = {};
class lK extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lq[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lq[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lq;
    }
}
let lX = new lK(iy.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lq[t];
        return null == i ? ((lq[t] = new Set()), lq[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lq[n.id] && !n.unavailable && (delete lq[n.id], !0);
    },
});
var l$ = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lQ = t(376943),
    lJ = t(394953),
    lZ = t(683063),
    l0 = t(403581),
    l1 = t(241541),
    l2 = t(709066),
    l3 = t(87664),
    l9 = t(247676),
    l7 = t(695526),
    l6 = t(927813),
    l5 = t(427358),
    l8 = t(945810);
let l4 = (0, l8.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var se = t(280450),
    sn = t(851746),
    st = t(103411);
function si() {
    let e = (0, st.m)(),
        n = (0, m.bG)([sn.A], () => sn.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, m.bG)([se.default], () => se.default.getId()),
    };
}
var sl = t(315629),
    ss = t(744413),
    sr = t(303682),
    sa = t(224370),
    so = t(544879);
function sd(e) {
    let {
            analyticsLocation: n,
            markAsDismissed: t,
            className: i,
            title: s = z.intl.string(z.t["DMie/y"]),
            body: r = z.intl.string(z.t.u0HAhn),
        } = e,
        { analyticsLocations: o } = (0, L.Ay)(n);
    return (0, l.jsxs)(sl.h, {
        color: "purple",
        className: a()(sa.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsx)(nM.D, {
                className: sa.VN,
                "aria-label": z.intl.string(z.t.H2NPrR),
                onClick: function () {
                    t(lb.i.USER_DISMISS);
                },
                children: (0, l.jsx)(tH.P, { size: "xs", color: "currentColor" }),
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
                    text: z.intl.string(z.t.Lm2nFc),
                    onClick: function () {
                        (t(lb.i.TAKE_ACTION),
                            (0, ss.jM)({
                                startingScreen: sr.SelectFriendsModalScreens.SELECT_FRIENDS,
                                analyticsLocations: o,
                            }));
                    },
                }),
            }),
        ],
    });
}
var sc = t(349420);
let su = { cooldownDurationMs: 60 * l6.A.Millis.DAY };
function sh(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: l4.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = si(),
                l = (0, m.bG)(
                    [l5.A, lj.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i || lj.A.isBlockedOrIgnored(e)) return !1;
                            let n = l5.A.getUserAffinity(e);
                            return null != n && null != n.communicationRank && n.communicationRank <= 20;
                        }),
                    [e.recipients, i],
                );
            return !!t && !!n && !!l;
        })(n);
    return (0, l.jsx)(lm.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: su,
        groupName: lb.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sd, {
                      className: sc.K,
                      analyticsLocation: P.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sm = t(403362);
t(696101);
let sA = [],
    sp = er.Ay.getEnableHardwareAcceleration();
function sg(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([lj.A], () => lj.A.getNickname(n.id)),
        h = (0, l3.A)(n.id),
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
            M.A.startTyping(i.id));
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
function sx(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sf(e) {
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
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sx,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, l9.A)({ useNitroCapExperiment: !0 }),
        h = (0, l7.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(L.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tb.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sh, { channel: n }),
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
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lT.NE, {
                                      channel: n,
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
var sI = t(322338),
    sE = t(898029),
    sj = t(36537);
function sC() {
    return (0, l.jsx)("div", {
        className: sj.zt,
        children: (0, l.jsx)("header", {
            className: sE.wL,
            children: (0, l.jsxs)("div", {
                className: sE.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sE.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sE.u1,
                            itemClassName: sE.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sy = t(747376),
    sb = t(718734),
    s_ = t(163328),
    sv = t(425557),
    sN = t(270003),
    sT = t(150934),
    sS = t(452027),
    sR = t(95477),
    sM = t(281595),
    sO = t(465532),
    sP = t(579872),
    sL = t(119031),
    sD = t(408018),
    sk = t(479909),
    sw = t(822610),
    sG = t(915089),
    sU = t(314307),
    sF = t(636922),
    sH = t(931664),
    sB = t(631576),
    sV = t(885386),
    sY = t(232835),
    sW = t(522602),
    sz = t(806150),
    sq = t(518960),
    sK = t(753738);
function sX(e, n) {
    return { type: e, message: n ?? null };
}
function s$(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sQ = t(659617),
    sJ = t(474078),
    sZ = t(636537),
    s0 = t(152367),
    s1 = t(147087);
async function s2(e) {
    try {
        let n = await sZ.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, sZ.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var s3 = t(55294),
    s9 = t(143161),
    s7 = t(909833);
let s6 = nE.oU.THREAD_CREATION;
function s5(e) {
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
                      className: s9.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iA.C.FirstThreadMessage }),
                          (0, l.jsx)(s8, { parentChannelId: n }),
                          (0, l.jsx)(s4, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function s8(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iA.A.getThreadSettings(n),
                t = iA.A.getDraft(n, iA.C.FirstThreadMessage).trim(),
                i = sW.A.getUploads(n, iA.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sP.A.show({
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
            (0, l.jsx)(nh.Ay.Icon, { icon: s_.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nh.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function s4(e) {
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
            let t = (0, m.bG)([iA.A], () => iA.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sO.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, sD.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iA.A.getDraft(e.id, iA.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sD.ur)(l)), n(iA.A.getThreadSettings(e.id) ?? {}));
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
        g = (0, sQ.EN)(t),
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
                h = (0, s1.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = sY.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await s2(e);
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
                                icon: s0.D,
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
                                      icon: s0.D,
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
                p = (0, s3.Ay)({
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
                                (l = sH.A.getStickerPreview(n.id, s6.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sW.A.getUploads(n.id, iA.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sX(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sX(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, sz.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: s6,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), sX(1, (0, sK.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sX(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sB.x5)(n.id, s6.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, sQ.Iy)(c, g) ? sv.t : s_.y;
    return (0, l.jsx)("div", {
        className: s9.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(s9.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: s9.Zd,
                children: [
                    (0, l.jsx)(tb.Ip, {
                        className: s9.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: s9.bv,
                            children: [
                                (0, l.jsxs)(sU.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(s7.P0, s9.P0),
                                            children: (0, l.jsx)(b, { className: s7.Kk }),
                                        }),
                                        (0, l.jsxs)(sN.n, {
                                            children: [
                                                (0, l.jsx)(rn, {
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
                                                (0, l.jsx)(re, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ri, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: s9.Eh,
                        children: [
                            (0, l.jsx)(rt, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(sL.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: s9.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function re(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, sQ.Iy)(t, s),
        a = (0, l.jsx)(sT.S, {
            disabled: s === sQ.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === sQ.jk.Disabled
        ? null
        : (0, l.jsx)(sS.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rn(e) {
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
        h = s$(r, { content: u }),
        m = (0, sQ.l1)(n, t),
        A = null != t && !d,
        p = (0, sG.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sR.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, sJ.A)(e, !1) }), "" !== e ? M.A.startTyping(n.id) : M.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, sJ.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rt(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sO.A.saveDraft(n.id, t, iA.C.FirstThreadMessage),
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
    let x = (0, m.bG)([lF.A], () => lF.A.can(eo.xBc.ATTACH_FILES, n)),
        f = s$(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sw.A, { channelId: n.id, type: s6, canAttachFiles: x }),
            (0, l.jsx)("div", { className: s9.xN, children: (0, l.jsx)(sM.U, { error: f }) }),
            (0, l.jsx)(sk.Ay, {
                type: s6,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(s9.gM, s9.Yy),
                innerClassName: a()(s9.SL, { [s9.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: sq.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function ri(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([sY.A], () => (null == t ? null : sY.A.getMessage(n.id, t))),
        s = sV.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sF.A, {
              className: s9.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rl = t(305866),
    rs = t(707539),
    rr = t(751479),
    ra = t(272736);
function ro(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, e4.ni)(n),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            (t || (0, rs.D3)("Popout"), i(!t));
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
            return (0, l.jsx)(rl.l, {
                children: (0, l.jsx)(rr.A, { className: ra.T, channel: n, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.In, {
                ...e,
                ref: r,
                className: ra.Kk,
                onClick: d,
                icon: s_.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: a,
                selected: t,
            });
        },
    });
}
var rd = t(40389),
    rc = t(148494),
    ru = t(56562);
function rh(e) {
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
            return (0, l.jsx)(rm, { ...e, channel: n });
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
function rm(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tV.A)(n),
        r = (0, tq.A)(n),
        a = (0, tQ.A)(n.id),
        o = (0, t$.A)(n),
        d = (0, t1.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, tY.A)(n),
        h = (0, tW.A)(n),
        A = (0, tz.A)(n, "Toolbar Overflow"),
        p = (0, tK.A)(n),
        g = (0, rd.A)(n),
        x = (0, t0.A)(n),
        f = (0, tX.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(ns.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rc.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: ru.vx.INSTANT });
                  },
              })
            : null,
        E = sV.SY.useSetting(),
        j = (0, m.bG)([lC.A], () => !u().isEmpty(lC.A.getVoiceStatesForChannel(n.id))),
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
var rA = t(332456),
    rp = t(806411),
    rg = t(973854),
    rx = t(62502);
function rf(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([n_.A], () => n_.A.getGuild(d?.getGuildId())),
        h = (0, tO.Ay)(d),
        A = (0, tk.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lC.A], () => null != n && !u().isEmpty(lC.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (iy.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, t2.N9)(n, { source: io.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rA.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rp.q)(d.id), channel_view: o }),
                (0, rg.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(tw.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(im, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iA.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tL.zF)({
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
                        null != d && (0, t2.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rx.T,
                children: (0, l.jsx)(tP.A, { channel: d, guild: c, chatInputType: nE.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rI = t(210714),
    rE = t(402860),
    rj = t(707554),
    rC = t(140735),
    ry = t(590180),
    rb = t(372320),
    r_ = t(562153);
let rv = (0, l8.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rN(e) {
    return rv.useConfig({ location: e }).enabled;
}
var rT = t(215530),
    rS = t(454719),
    rR = t(736653),
    rM = t(311016),
    rO = t(480335),
    rP = t(713517),
    rL = t(397562),
    rD = t(183555),
    rk = t(718019),
    rw = t(365607),
    rG = t(915614),
    rU = t(308244),
    rF = t(743987),
    rH = t(900179),
    rB = t(946356),
    rV = t(465829),
    rY = t(35241),
    rW = t(587168),
    rz = t(442228),
    rq = t(744808);
let rK = (0, l8.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rX = t(827428);
function r$(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function rQ(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = rK.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lV.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rX.lS,
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
              className: rX.qr,
              children: (0, l.jsx)(nM.D, {
                  onClick: o,
                  className: rX.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rX.xQ, children: [(0, l.jsx)(rq.A, { frame: i, filterLayer: r$ }), d] })
        : d;
}
var rJ = t(518477),
    rZ = t(996988),
    r0 = t(207634),
    r1 = t(561419),
    r2 = t(396095);
function r3(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rM.A)(n.id),
        o = (0, lY.Ay)(n.id),
        d = (0, rR.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, L.Ay)(P.A.USER_PROFILE_SIDEBAR),
        h = (0, rD.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rL.A)(u, o, rJ.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rP.A)(m);
    function g() {
        (0, rE.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(L.f5, {
        value: u,
        children: (0, l.jsx)(rD.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rB.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: rZ.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(r1.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tb.d_, {
                        className: i ? r1.BE : void 0,
                        children: [
                            (0, l.jsx)(rW.A, { children: (0, l.jsx)(rY.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: r1.wx,
                                children: [
                                    (0, l.jsx)(rG.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: rZ.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rk.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: r0.T[rZ.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r2.rf,
                                children: [
                                    (0, l.jsx)(rV.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: r_.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rw.A, {
                                            displayProfile: o,
                                            themeType: rZ.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(rz.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rH.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rF.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rB.A.Overlay, {
                                              className: r2.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rH.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rU.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rH.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rF.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(rQ, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rO.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var r9 = t(331322),
    r7 = t(249790),
    r6 = t(254828),
    r5 = t(783123),
    r8 = t(966430);
function r4(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lY.Ay)(n.id),
        o = (0, rR.Ay)(),
        d = (0, m.bG)([lj.A], () => lj.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, L.Ay)(d ? P.A.BLOCKED_PROFILE_PANEL : P.A.IGNORED_PROFILE_PANEL),
        u = (0, rD.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rL.A)(c, a, rJ.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(L.f5, {
        value: c,
        children: (0, l.jsx)(rD.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rB.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: rZ.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tb.d_, {
                    children: (0, l.jsxs)("div", {
                        className: r8.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: r8.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: r8.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: r8.N1,
                                        children: [
                                            (0, l.jsx)(r7.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: r_.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(r9.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(r5.A, {
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
                                            (0, l.jsx)(r6.A, {
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
var ae = t(202091),
    an = t(717421),
    at = t(31956),
    ai = t(673843),
    al = t(594832),
    as = t(321191),
    ar = t(679492),
    aa = t(439053),
    ao = t(312381),
    ad = t(657538),
    ac = t(984545),
    au = t(193738),
    ah = t(558514),
    am = t(394816),
    aA = t(695366),
    ap = t(922590),
    ag = t(821269),
    ax = t(93246),
    af = t(351906),
    aI = t(383199),
    aE = t(559506),
    aj = t(361311),
    aC = t(931481),
    ay = t(791556),
    ab = t(501193),
    a_ = t(383448),
    av = t(646986),
    aN = t(243166),
    aT = t(812993),
    aS = t(123292),
    aR = t(840411);
let aM = (0, l8.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aO = t(666810),
    aP = t(394300),
    aL = t(575593),
    aD = t(44120),
    ak = t(75678),
    aw = t(317560),
    aG = t(99161),
    aU = t(827258),
    aF = t(661492),
    aH = t(146423),
    aB = t(662349),
    aV = t(479026),
    aY = t(636374),
    aW = t(699976),
    az = t(202541),
    aq = t(733484),
    aK = t(880465);
function aX(e) {
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
        { trackUserProfileWishlistAction: g } = (0, rD.NJ)(),
        x = rN("DMSidePanelWishlistItemCard") ? aW.y.SIZE_78 : aW.y.SIZE_90,
        f = aW.Z[x],
        I = s.useCallback(() => {
            (g({
                action: rJ.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        E = s.useCallback(() => {
            (g({
                action: rJ.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
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
        } = (0, aY.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: E }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: aq.kL,
        children: (0, l.jsxs)(aH.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(aq.Nr, o),
            skuPreviewStyle: a()(aq.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = b ? (0, aF.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, aF.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(aU.A, { className: aq.Pf }),
                y &&
                    (0, l.jsx)(aB.A, {
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
function a$(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, L.Ay)(
            ...(i ?? []),
            P.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, aG.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: az.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, aw.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: az.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(aX, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function aQ(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, aD.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: az.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, aV.e)({ sku: n, giftRecipient: t, giftingOrigin: az.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(aq.ML, {
                    [aq.M]: n?.tenantMetadata?.collectibles?.type === aL.R.AVATAR_DECORATION,
                    [aq.Hm]: n?.tenantMetadata?.collectibles?.type === aL.R.PROFILE_EFFECT,
                    [aq.hH]: n?.tenantMetadata?.collectibles?.type === aL.R.PROFILE_FRAME,
                    [aq.qF]: n?.tenantMetadata?.collectibles?.type === aL.R.NAMEPLATE,
                    [aq.l2]: n?.tenantMetadata?.collectibles?.type === aL.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(aX, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function aJ(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, ak.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: az.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === al.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(aX, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(aK.MO, { [aq.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(aq.fi, { [aq.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(aq.p7, { [aq.SW]: h.length >= 10, [aq.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function aZ(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(a$, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(aQ, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(aJ, { sku: n, ...t });
        default:
            return null;
    }
}
var a0 = t(158045),
    a1 = t(249203),
    a2 = t(419731),
    a3 = t(695904),
    a9 = t(116331),
    a7 = t(713348),
    a6 = t(535089),
    a5 = t(815637);
function a8(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, L.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rD.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, a9.A)(t),
        g = (0, m.bG)([a1.A], () => a1.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: rJ.RP.WISHLIST }), i());
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
            let e = f.slice(0, 3).map((e) => ({ item: e, source: al.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => a0.Ay.isPremiumSku(e.skuId));
                if (!a0.Ay.isPremiumAtLeast(t.premiumType, az.PremiumTypes.TIER_2) && !n) {
                    let n = aP.A.fromSKU((0, aR.rI)());
                    null != n && e.push({ item: n, source: al.uS.POPULAR });
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
        C = (0, a6.A)({ wishlistId: r ?? null, onAction: I, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                E.map((e, n) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              aZ,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, a2.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sm.Vq),
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
              children: (0, l.jsxs)(rB.A.Overlay, {
                  ref: C,
                  className: a5.kL,
                  children: [
                      p && (0, l.jsx)(a3.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: a5.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: a5.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(aT.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: nk.A.colors.BADGE_BACKGROUND_BRAND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(aS.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rj.F, { children: (0, l.jsx)("div", { className: a5.vY, children: y }) }),
                  ],
              }),
          });
}
function a4(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = aM.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, a7.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(aO.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(a8, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
    });
}
function oe(e) {
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
        h = (0, ap.fi)(n.id),
        A = (0, ag.q)({ userId: n.id }),
        p = (0, m.bG)([af.A], () => af.A.hidePersonalInformation),
        g = (0, m.bG)([as.A], () => as.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([as.A], () => ({ defaultWishlistId: as.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: E } = (0, al.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, ai.A)(I);
    let j = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: r2.rf,
        children: [
            (0, l.jsx)(aE.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: r2.pq,
                children: [
                    (0, l.jsx)(rV.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: r_.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(aN.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rw.A, {
                            displayProfile: i,
                            themeType: rZ.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(ay.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rB.A.Overlay, {
                    children: (0, l.jsx)(aC.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rB.A.Overlay,
                    {
                        children: (0, l.jsx)(aC.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(a_.A, { user: n }),
            i?.private &&
                (0, l.jsx)(rB.A.Overlay, { children: (0, l.jsx)(ab.A, { username: r_.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(rB.A.Overlay, {
                    className: r2.Lw,
                    children: (0, l.jsx)(rH.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: aA.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(ax.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(rz.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rH.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rF.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: r2.kR,
                children: [
                    o && x && (0, l.jsx)(ad.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(av.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aI.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rH.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aj.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rB.A.Overlay, {
                              className: r2.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rH.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rU.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aI.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rH.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aj.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rH.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rF.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(a4, {
                            profileOwner: n,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: E,
                            onClick: () => {
                                d?.({ tabSection: rJ.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var on = t(114212),
    ot = t(913453),
    oi = t(229187),
    ol = t(21241),
    os = t(503062),
    or = t(51943),
    oa = t(847374),
    oo = t(320448),
    od = t(723200);
function oc(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rD.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? oa.a : oo._;
    return (0, l.jsxs)("section", {
        className: od.uW,
        children: [
            (0, l.jsxs)(nM.D, {
                className: a()(od.wx, od.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(od.p_, r), children: i }),
        ],
    });
}
var ou = t(341278);
function oh(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(),
        { context: s } = (0, rD.NJ)(),
        r = (0, tB.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, ot.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rB.A.Overlay, {
              className: ou.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oc, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: ou.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  or.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, td.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(ol.A, { className: ou.yF }),
                  c &&
                      (0, l.jsx)(oc, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: ou.p_,
                          onExpand: () => (0, oi.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: ou.nC,
                                                children: [
                                                    (0, l.jsx)(on.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(on.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            os.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, rE.openUserProfileModal)({
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
function om(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lY.Ay)(n.id),
        c = (0, rR.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, L.Ay)(P.A.USER_PROFILE_SIDEBAR),
        p = (0, rD.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rL.A)(A, d, rJ.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rP.A)(g),
        I = (0, ar.fC)(),
        E = (0, rb.A)(d?.profileFrame?.skuId);
    (0, at.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, an.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, rE.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([as.A], () => ({ defaultWishlistId: as.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, al.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, ai.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(L.f5, {
        value: A,
        children: (0, l.jsx)(rD.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(ar.Hl, {
                value: I,
                children: (0, l.jsxs)(rB.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: rZ.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(r1.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(ao.A, {}),
                        null != I.interactionType && (0, l.jsx)(ae.animated.div, { style: j, className: r1.tB }),
                        (0, l.jsxs)(tb.d_, {
                            className: a()(r && r1.BE, !r && null != E && r1.It),
                            children: [
                                (0, l.jsxs)(rW.A, {
                                    children: [
                                        (0, l.jsx)(au.A, { user: n, themeType: rZ.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(ac.A, { user: n }) : (0, l.jsx)(ah.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r1.wx,
                                    children: [
                                        (0, l.jsx)(rG.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: rZ.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: r1.vK,
                                        }),
                                        (0, l.jsx)(aa.A, { className: r1.oR }),
                                        (0, l.jsx)(rk.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r0.T[rZ.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(am.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: rZ.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(oe, {
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
                                        className: r1.sJ,
                                        children: (0, l.jsx)(ad.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: r1.vS,
                                        children: (0, l.jsx)(a4, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: rJ.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oh, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(rQ, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: E,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rO.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != E && (0, l.jsx)(rq.A, { frame: E, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oA = t(901600);
function op(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lW(),
        [o, d] = (0, rT.A)(t),
        [c, u] = s.useState(!1),
        h = rN("UserProfileSidebarRenderer"),
        A = (0, lY.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rb.A)(p),
        x = (0, m.bG)([ry.A], () => ry.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rS.A)(i, e) : (0, rS.A)(t, void 0, e);
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
        I = r_.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oA.H : void 0,
        children: (0, l.jsx)(rj.F, {
            component: (0, l.jsx)(rC.A, {
                children: (0, l.jsx)(rj.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(r4, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(r3, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(om, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var og = t(522556),
    ox = t(225315),
    of = t(684407),
    oI = t(95701),
    oE = t(919638),
    oj = t(763827),
    oC = t(812771),
    oy = t(506309),
    ob = t(598748),
    o_ = t(681154),
    ov = t(975460),
    oN = t(587895),
    oT = t(429913),
    oS = t(201718),
    oR = t(339580),
    oM = t(633075),
    oO = t(903209),
    oP = t(382483),
    oL = t(385113);
let oD = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function ok(e) {
    let [n, t] = s.useState(new Set()),
        i = s.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []);
    return (0, l.jsx)(oD.Provider, {
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
                            ((t = sV.Q_.useSetting()),
                            s.useEffect(() => {
                                (0, oP.Wq)().catch(() => {});
                            }, []),
                            s.useEffect(() => {
                                t && (0, oP.i$)().catch(() => {});
                            }, [t]),
                            (i = (0, m.bG)([oL.A], () => oL.A.getFeaturedFetchState())),
                            (l = (0, m.bG)([oL.A], () => oL.A.getDeveloperFetchState())),
                            (r = (0, m.yK)([oL.A], () => oL.A.getFeaturedApplicationIds())),
                            (a = (0, m.yK)([oL.A], () => oL.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                isLoadingConfigs:
                                    i === oL.e.NOT_FETCHED ||
                                    i === oL.e.FETCHING ||
                                    (t && (l === oL.e.NOT_FETCHED || l === oL.e.FETCHING)),
                            }),
                        {
                            widgetApps: C,
                            userIdsWhoMightHaveWidgetData: y,
                            isFetchingApplications: b,
                        } = ((o = s.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === o_.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => n.has(e.id)) ?? [],
                            [e, n],
                        )),
                        (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                        (c = (0, m.bG)(
                            [oN.A],
                            () =>
                                d.length > 0 &&
                                d.some(
                                    (e) =>
                                        oN.A.isFetchingApplication(e) ||
                                        (null == oN.A.getApplication(e) && !oN.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (u = (0, oT.A)(d)),
                        (h = s.useMemo(
                            () =>
                                Object.fromEntries(
                                    u
                                        .filter(sm.Vq)
                                        .map((e) => [e.id, (0, ov.t)(e)])
                                        .filter(sm.QE)
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
                            ((p = (0, m.cf)([oR.A], () =>
                                Object.fromEntries(y.map((e) => [e, oR.A.getUserIdentities(e)]).filter(sm.QE)),
                            )),
                            (g = (0, m.bG)([oR.A], () =>
                                y.some((e) => oR.A.getFetchState(e) === oR.e.NOT_FETCHED || oR.A.isFetchingUser(e)),
                            )),
                            s.useEffect(() => {
                                y.length > 0 && oS.P.fetchMany(...y.map((e) => [e]));
                            }, [y]),
                            { identitiesByUserId: p, isLoadingIdentities: g }),
                        { profilesByUserId: N, isLoadingProfiles: T } =
                            ((x = (0, m.cf)([as.A], () =>
                                Object.fromEntries(y.map((e) => [e, as.A.getUserProfile(e) ?? null]).filter(sm.QE)),
                            )),
                            (f = (0, m.yK)([as.A], () =>
                                y.filter((e) => null == as.A.getUserProfile(e) && !as.A.isFetchingProfile(e)),
                            )),
                            (I = (0, m.bG)([as.A], () => y.some((e) => as.A.isFetchingProfile(e)))),
                            s.useEffect(() => {
                                for (let e of f) (0, oO.A)(e);
                            }, [f]),
                            { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                        S = (0, m.cf)(
                            [oL.A],
                            () => Object.fromEntries([...E].map((e) => [e, oL.A.getConfig(e)]).filter(sm.QE)),
                            [E],
                        ),
                        R = j || b || v || T,
                        M = s.useMemo(() => {
                            if (!R && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== o_.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let n = C[e.extra.application_id] ?? null;
                                    if (null == n) return e;
                                    let t = S[n.id] ?? null;
                                    if (null == t || null == t.surfaces[ob.m.ACTIVITY_ACCESSORY]) return e;
                                    let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                    if (i?.profile == null) return e;
                                    let l = N[e.author_id]?.widgets?.some((e) => (0, oM.E)(e, n.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                    };
                                });
                        }, [R, e, C, S, _, N]),
                        [O, P] = s.useState(M);
                    return (
                        s.useEffect(() => {
                            R || P(M);
                        }, [R, M]),
                        O
                    );
                })(e, n),
        },
        children: e.children,
    });
}
var ow = t(900797),
    oG = t(890856),
    oU = t(180170),
    oF = t(435738),
    oH = t(38055);
let oB = "content-inventory-feed",
    oV = `${oB}-settings`,
    oY = `${oB}-toggle`;
var oW = t(569709);
let oz = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([oF.A], () => oF.A.hidden),
            h = (0, c.omit)((0, C.rm)(oV), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(oY), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                (0, j.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                    return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                });
            }, []),
            x = s.useCallback(() => (u ? (0, oU.Il)() : r()), [u, r]),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(oH.A, { ...h }),
                    (0, l.jsx)("span", { className: oW.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(ow.t, { className: oW.wT })
                              : o
                                ? (0, l.jsx)(oa.a, { className: oW.wT })
                                : (0, l.jsx)(oo._, { className: oW.wT })),
                          (0, l.jsx)("span", { className: oW.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(oG.s, {
                      ...A,
                      className: a()(oW.N1, { [oW.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: oW.N1, onContextMenu: g, children: f }),
        });
    }),
    oq = function () {
        return null;
    };
var oK = t(963307),
    oX = t(424994);
let o$ = et.default.track;
function oQ(e, n) {
    o$(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: oX.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var oJ = t(468581),
    oZ = t(808666),
    o0 = t(414499),
    o1 = t(323384),
    o2 = t(55730),
    o3 = t(765379),
    o9 = t(359549),
    o7 = t(284525),
    o6 = t(482030),
    o5 = t(583846),
    o8 = t(506326);
t(333007);
var o4 = t(342952),
    de = t(315710),
    dn = t(276293),
    dt = t(935063),
    di = t(778712),
    dl = t(696986),
    ds = t(97808),
    dr = t(738188),
    da = t(983851),
    dd = t(31300),
    dc = t(308528),
    du = t(401843),
    dh = t(375499),
    dm = t(429433),
    dA = t(324688);
let dp = (0, oI.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dg(e) {
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
        [p, g] = s.useState((0, sD.x7)("")),
        x = nE.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sk.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(dA.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dp,
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
                : (t(n), A(""), g((0, sD.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dx(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rR.Ay)(),
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
                            children: (0, l.jsx)(dm.C, {
                                messageId: eo.dJq,
                                channel: dp,
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
                        className: dA.mJ,
                        children: (0, l.jsx)(dh.A, {
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
var df = t(402216),
    dI = t(822123),
    dE = t(409626),
    dj = t(692969),
    dC = t(711589),
    dy = t(607407),
    db = t(832163),
    d_ = t(533562),
    dv = t(805901),
    dN = t(565645);
t(879064);
var dT = t(7584);
(t(850992), t(690521));
var dS = t(806931),
    dR = t(307731),
    dM = t(866780);
function dO(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rP.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(nM.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dv.c, {
                config: dh.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(ae.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dN.A, {
                            className: a()(dM.Zg, r, { [dM.c4]: t }),
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
(dR.EmojiIntention.CHAT,
    [
        dT.Ay.getByName("thumbsup"),
        dT.Ay.getByName("eyes"),
        dT.Ay.getByName("laughing"),
        dT.Ay.getByName("watermelon"),
        dT.Ay.getByName("fork_and_knife"),
        dT.Ay.getByName("yum"),
    ].filter(sm.Vq));
var dP = t(636585),
    dL = t(543465),
    dD = t(607567),
    dk = t(774926),
    dw = t(20805),
    dG = t(22869),
    dU = t(623671),
    dF = t(428249),
    dH = t(327098),
    dB = t(576757),
    dV = t(202195),
    dY = t(140651),
    dW = t(131607),
    dz = t(345394);
let dq = function (e) {
    let { children: n } = e,
        [t, i] = (0, dW.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
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
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(la.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: dz.A },
                  }),
              ],
          });
};
var dK = t(315246),
    dX = t(866323),
    d$ = t(252392);
let dQ = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, dX.p)(
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
                (0, l.jsx)(ae.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(d$.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(d$.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var dJ = t(381941),
    dZ = t(231188);
let d0 = (0, nQ.Fe)({
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
                t.e("795854"),
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
    d1 = s.createContext(void 0);
function d2(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, de.tj)(t),
        (0, l.jsx)(d1.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: dZ.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function d3(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, dY.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(dZ.ZK, e, i), style: s, children: n }),
        })
    );
}
function d9(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: dZ.$m, children: n });
}
function d7(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [E, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [lF.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lF.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, dV.A)(t),
                o = (0, tO.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iN.A)(n?.id),
                c = (0, m.bG)([n_.A], () => (null != a ? n_.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dD.Ay], () => (null != a ? dD.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lC.A], () => lC.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && dL.Ay.isChannelMuted(null, n),
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
                                  (0, l.jsx)(dr.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: dZ.vb,
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
                            className: dZ.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(nM.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, t2.iN)(a.id), i?.(a));
                                        },
                                        className: dZ.I3,
                                        children: [
                                            (0, l.jsx)(tr.Ay, {
                                                guild: c,
                                                size: tr.Ay.Sizes.SMOL,
                                                className: dZ.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oo._, {
                                                size: "xxs",
                                                color: nk.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(da.H, { size: "xs", color: nk.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: dZ.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dP.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(ds.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: di._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: dZ.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dl.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lG.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dd.k : da.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, dH.A)(h),
        P =
            ((n = O),
            (t = (0, m.bG)([n_.A], () => n_.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tO.Ay)(i)),
            null != n && null != t && null != i && oI.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: dZ.kP,
                              children: [
                                  (0, l.jsxs)(nM.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, t2.iN)(i.id),
                                      className: dZ.I3,
                                      children: [
                                          (0, l.jsx)(tr.Ay, {
                                              guild: t,
                                              size: tr.Ay.Sizes.SMOL,
                                              className: dZ.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oo._, {
                                              size: "xxs",
                                              color: nk.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dn.N, { size: "xs", color: nk.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: dZ.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dP.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(ds.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: di._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: dZ.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dl.h, { size: 16 }),
                      ],
                  })
                : null),
        L = null != M && 0 === p.length ? [M] : p,
        D = L.length > 0,
        k = L.length >= 2,
        [w, G] = s.useState(!D),
        U = r_.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tO.Ay)(o, !0),
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
                    surface_type: oX.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, tR.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                E)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dc.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: oX.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, tR.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await dc.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? oX.PA.DM_REACTION_MESSAGE_SENT : oX.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, dF.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: dJ.Hx.CONTENT_INVENTORY_MEMBERLIST,
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
            (0, l.jsx)(dQ, { sent: T, shown: v, className: dZ.Jt }),
            q ??
                (0, l.jsx)(dq, {
                    children: (0, l.jsxs)("div", {
                        className: dZ.T7,
                        children: [
                            (0, l.jsx)(d6, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dx, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? dZ.P2 : dZ.VE,
                children: [
                    (0, l.jsx)(dg, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: E ? o : void 0,
                        showEmojiButton: null != q,
                        className: dZ.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(nM.D, {
                                          className: dZ.wD,
                                          onClick: K,
                                          children: E
                                              ? (0, l.jsx)(dn.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dt.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(nM.D, {
                            onClick: () => X(!1),
                            className: dZ.i3,
                            children: (0, l.jsx)(tH.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: nk.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: dZ.fh,
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
let d6 = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dI.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tc._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(dO, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: dZ.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function d5(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, dB.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, dV.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: dZ.MH,
        children: [
            (0, l.jsxs)("div", {
                className: dZ.WP,
                children: [
                    (0, l.jsx)(o4.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: di._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dl.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(dZ.Xn, dZ.zA),
                        children: z.intl.format(t, {
                            user0: r_.Ay.getName(o, n?.id, g[0]),
                            user1: r_.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(dZ.Mj, dZ.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    dG.A,
                                    {
                                        textClassName: a()(dZ.Mj, dZ.nk),
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
                                    dG.A,
                                    {
                                        textClassName: a()(dZ.Mj, dZ.nk),
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
            null != p && (0, l.jsx)(df.Ay, { size: df.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(dK.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function d8(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(nM.D, { className: dZ.Zw, onClick: t, children: n });
}
function d4(e) {
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
        I = (0, dw.zD)(f),
        E = I ? f.extra?.application_id : void 0,
        j = (0, d_.W)();
    null != j && (E = j);
    let C = (0, dj.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : E,
                source: dE.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(oX.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dk.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([db.A], () => db.A.getDetectableIdsToApplicationIds()),
        N = I ? C : void 0,
        T = s.useContext(d1);
    return (0, l.jsxs)("div", {
        className: dZ.au,
        children: [
            (0, l.jsx)(d5, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(d3, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: dZ.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: dZ.Fb,
                                children: (0, l.jsx)(dU.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dU.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: dZ.iC,
                                children: [
                                    (0, l.jsx)(d8, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(dZ.$2, { [dZ.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(d8, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dZ.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dl.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: dZ.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != v[E]
                ? (0, l.jsx)(d0, {
                      className: dZ.zu,
                      applicationId: E,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aW.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function ce(e) {
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
        { actionString: p, canWatch: g } = (0, dC.K)(a),
        { entry: x } = A,
        f = (0, dw.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        E = (0, d_.W)();
    null != E && (I = E);
    let j = (0, dj.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: dE.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(oX.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, dH.A)(x),
        { largeImage: N, smallImage: T } = (0, dk.D8)(y, b ?? v),
        { largeImage: S } = (0, dk.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([db.A], () => db.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(d1);
    return (0, l.jsxs)("div", {
        className: dZ.au,
        children: [
            (0, l.jsx)(d5, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(d3, {
                backgroundImgSrc: S?.src,
                className: dZ.uR,
                children: [
                    (0, l.jsx)(d8, {
                        onClick: g
                            ? () => {
                                  (lu.default.selectVoiceChannel(a.channelId), (0, du.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: dZ.nh,
                            children: [
                                (0, l.jsx)(dy.A, { className: dZ.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: dZ.NE,
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
                        className: dZ.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: dZ.Fb,
                                    children: (0, l.jsx)(dU.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: dU.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: dZ.gv,
                                children: [
                                    (0, l.jsx)(d8, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: dZ.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(d8, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dZ.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dl.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != M[I]
                ? (0, l.jsx)(d0, {
                      className: dZ.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aW.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cn = t(299846);
let ct = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cn.u)(t);
    function u() {
        (0, o6.hg)(t.extra.application_id);
    }
    let { data: h } = (0, ny.YY)(t.extra.application_id),
        m = (0, o9.Ay)({ application: h, analyticsLocations: [P.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(o8.iT, { location: o8.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(d4, {
            channel: n,
            userDescription: (0, o5.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, o2.A)(d, eo.jUm.JOIN) || (0, o3.A)(d),
        f = g
            ? (0, l.jsx)(o7.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: oZ.I,
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
                      icon: o0.h,
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
                      icon: o1.k,
                  }),
        j = [I, g && !r ? f : E].filter(sm.Vq);
    return (0, l.jsxs)(d2, {
        children: [
            p,
            (0, l.jsx)(d9, {
                children: (0, l.jsx)(d7, {
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
var ci = t(322789),
    cl = t(808380),
    cs = t(687966),
    cr = t(960076),
    ca = t(544441),
    co = t(562708),
    cd = t(139286);
function cc(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(t),
        s = (0, o9.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cd.A)({
            name: co.ImpressionNames.CLOUD_PLAY_CTA,
            type: co.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: o0.h,
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
var cu = t(601007),
    ch = t(648246),
    cm = t(308335),
    cA = t(790381),
    cp = t(266080),
    cg = t(968309),
    cx = t(30370);
function cf(e) {
    let n = (0, m.bG)([cx.A], () => cx.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cg.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cI = t(18282);
let cE = [...ci.n, o8.Yq],
    cj = {
        [cl.Y.DESKTOP]: null,
        [cl.Y.LINUX]: null,
        [cl.Y.MACOS]: null,
        [cl.Y.NINTENDO]: null,
        [cl.Y.IOS]: null,
        [cl.Y.ANDROID]: null,
        [cl.Y.XBOX]: cp.A,
        [cl.Y.PLAYSTATION]: cA.A,
    },
    cC = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cn.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, dV.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? cj[g] : null,
            I = cf(g === cl.Y.XBOX ? eo.fg2.XBOX : g === cl.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: E } = (0, ny.YY)(x),
            j = (0, ca.A)(x),
            { analyticsLocations: C } = (0, L.Ay)(P.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, o9.JC)(E),
            b = (0, cm.o)(h?.application_id ?? m?.applicationId ?? E?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(o8.mG, {
                location: null == A ? o8.N5.POPOUT : o8.N5.STREAMING_POPOUT,
                children: cE.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(d4, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cI.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, o5.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cu.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(ce, {
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
                                  ? (0, l.jsx)(cu.A, {
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
                          cc,
                          { application: E, analyticsLocation: P.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, o2.A)(h, eo.jUm.JOIN) || (0, o3.A)(h))
                    ? (0, l.jsx)(
                          o7.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cs.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cr.A)(h)
                    ? (0, l.jsx)(ch.A, { activity: h, size: "md", variant: "primary", icon: nw.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sm.Vq);
        return (0, l.jsxs)(d2, {
            children: [
                v,
                (0, l.jsx)(d9, {
                    children: (0, l.jsx)(d7, {
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
    cy = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cb(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, ny.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, L.Ay)(P.A.CLOUD_PLAY_POPOVER),
        o = (0, o9.Ay)({ application: r, analyticsLocations: a }),
        d = (0, tR.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cy(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, dW.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lb.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, E] = s.useState(!1);
    return (
        f && !I && E(!0),
        (0, cd.A)(
            {
                name: co.ImpressionNames.CLOUD_PLAY_CTA,
                type: co.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
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
                src: "https://cdn.discordapp.com/assets/content/912562ba9ec7f9f728ce5b336c9bed5f5195dcab1451d12b0e592b1a7389200c.svg",
            },
            actions: [
                {
                    icon: o0.h,
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
let c_ = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cb, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cv = t(363670),
    cN = t(205327),
    cT = t(52133),
    cS = t(835723),
    cR = t(172710),
    cM = t(655116),
    cO = t(763758),
    cP = t(286617),
    cL = t(533207),
    cD = t(121090),
    ck = t(693879),
    cw = t(809854),
    cG = t(272984),
    cU = t(170699);
function cF(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, cw.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, o5.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cU.lu,
              children: [
                  (0, l.jsx)(ck.z, { entry: t }),
                  (0, l.jsx)("div", { className: cU.Lt, children: (0, l.jsx)("div", { className: cU.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cU.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function cH(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cv.u7)(r),
        g = cf(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cM.A, se.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cP.A)(cM.A, se.default, p, c) : void 0),
            [c, p],
            cT.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        E = [];
    u.media.provider === cN.X.SPOTIFY &&
        ((t = () => {
            (0, cR.Mp)(c);
        }),
        (i = () => {
            (0, cR.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cR.Mp)(c);
        }),
        (I = (0, l.jsx)(cO.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: dZ.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cR.mN)(c, p.id, e);
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
                        icon: cS.J,
                        onClick: function () {
                            null != f && ((0, cL.A)(f, cG.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(d4, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cN.X.SPOTIFY
                ? (0, l.jsx)(cI.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: cD.A })
                : null,
        userDescription: (0, o5.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(cF, { activity: c }),
    });
    return (0, l.jsxs)(d2, {
        children: [
            j,
            (0, l.jsx)(d9, {
                children: (0, l.jsx)(d7, {
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
var cB = t(903134),
    cV = t(56121),
    cY = t(263577),
    cW = t(868065),
    cz = t(804779);
let cq = [o8.Y8],
    cK = [cV.j.WEEK],
    cX = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, dk.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, o5.TQ)(n);
        return null != r && (0, sm.S1)(r, cK)
            ? (0, l.jsxs)(cW.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(cW.UA, {
                          children: [
                              (0, l.jsx)(cW.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(cW.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(o8.mG, {
                                  location: o8.N5.CARD,
                                  children: cq.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(cY.V, { src: s?.src, size: 48, className: cz.xn }),
                  ],
              })
            : null;
    });
var c$ = t(210528);
let cQ = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, o5.TQ)(t),
        u = cf(eo.fg2.SPOTIFY);
    if (null == d || !(0, sm.S1)(c, cK)) return null;
    function h() {
        let e = cG.M0.ALBUM,
            n = c$.A.isProtocolRegistered()
                ? cG.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : cG.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(d2, {
        children: [
            (0, l.jsx)(d4, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cG.M0.ARTIST,
                        n = c$.A.isProtocolRegistered()
                            ? cG.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : cG.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === cN.X.SPOTIFY
                        ? (0, l.jsx)(cI.A, { onClick: u, Icon: cD.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(o8.mG, {
                    location: o8.N5.POPOUT,
                    children: cq.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(d9, {
                children: (0, l.jsx)(d7, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var cJ = t(977001);
let cZ = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cn.u)(t),
        c = (0, o5.ty)(t),
        u = (0, o5.TQ)(t);
    if (null == a || null == c || null == u || !(0, cJ._E)(u)) return null;
    let h = null != t.extra.platform ? cj[t.extra.platform] : null;
    return (0, l.jsxs)(d2, {
        children: [
            (0, l.jsx)(d4, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cI.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(o8.mG, {
                    location: o8.N5.POPOUT,
                    children: cJ.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(d9, {
                children: (0, l.jsx)(d7, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var c0 = t(514243),
    c1 = t(347306),
    c2 = t(123917),
    c3 = t(998218);
let c9 = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cf(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = c3.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, c2.h)({ href: c3.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(d2, {
              children: [
                  (0, l.jsx)(d4, {
                      channel: n,
                      entry: t,
                      userDescription: (0, o5.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cI.A, {
                          onClick: a,
                          Icon: c1.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(o8.mG, {
                          location: o8.N5.POPOUT,
                          children: c0.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(d9, {
                      children: (0, l.jsx)(d7, {
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
function c7(e) {
    return e?.type === oK.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o_.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function c6(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case o_.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(ci.A, { ...t, entry: n });
        case o_.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(c0.A, { ...t, entry: n });
        case o_.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(cJ.Ay, { ...t, entry: n });
        case o_.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cX, { ...t, entry: n });
        case o_.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cv.Ay, { ...t, entry: n });
        case o_.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(oJ.A, { ...t, entry: n });
        default:
            return null;
    }
}
function c5(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === o_.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(c_, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function c8(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(c4, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(oX.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function c4(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case o_.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cC, { ...t, entry: n });
        case o_.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(c9, { ...t, entry: n });
        case o_.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(cZ, { ...t, entry: n });
        case o_.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cQ, { ...t, entry: n });
        case o_.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cH, { ...t, entry: n });
        case o_.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(ct, { ...t, entry: n });
        default:
            return null;
    }
}
let ue = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cn.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(oD);
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
                oQ(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        oQ(oX.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        );
    function M() {
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
                onMouseLeave: M,
                children: (0, l.jsx)(ni.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(cB.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(c8, {
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
                        return (0, l.jsx)(nM.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                E || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(c6, {
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
var un = t(531685),
    ut = t(99066),
    ui = t(376261),
    ul = t(99753),
    us = t(136722),
    ur = t(860071);
let ua = [],
    uo = new Set(),
    ud = new Set();
var uc = t(808323);
let uu = new Set([
    o_.ContentInventoryEntryType.PLAYED_GAME,
    o_.ContentInventoryEntryType.WATCHED_MEDIA,
    o_.ContentInventoryEntryType.TOP_GAME,
    o_.ContentInventoryEntryType.TOP_ARTIST,
    o_.ContentInventoryEntryType.LISTENED_SESSION,
    o_.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uh = t(498642);
let um = (0, l8.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uA = t(293860);
let up = { cooldownDurationMs: 60 * l6.A.Millis.DAY };
function ug(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: um.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = si(),
                i = (0, m.bG)([uh.A], () => uh.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i <= 200);
        })(n);
    return (0, l.jsx)(lm.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: up,
        groupName: lb.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sd, {
                      className: uA.K,
                      analyticsLocation: P.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var ux = t(728321),
    uf = t(282006);
let uI = er.Ay.getEnableHardwareAcceleration(),
    uE = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uj = s.memo(function (e) {
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
                            n = lC.A.isInChannel(eG.Ay.getVoiceChannelId(), c.id);
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
                    shouldAnimateStatus: uI,
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
    uC = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != n ? V.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uj, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uy(e) {
    let { index: n } = e,
        t = (0, C.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class ub extends s.Component {
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
        if (r?.id === oB) return (0, s.createElement)(oz, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                ux.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uE,
                    children: (0, s.createElement)(uf.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uf.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === oK.S9.CONTENT_INVENTORY) {
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
            if (r.type === oK.S9.MEMBER && "user" in r) {
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
                    uC,
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
            if (r.type === oK.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    ue,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === oK.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(oq, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uy, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === oB) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? c7(t[i + 1 + l]) : n;
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
            .filter(sm.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== oK.S9.MEMBER ||
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
                (0, l.jsx)(sG.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rj.F, {
                                component: (0, l.jsx)(rC.A, {
                                    children: (0, l.jsx)(rj.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tO.m1)(t, ee.default, lj.A),
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
function u_(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, L.Ay)(P.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([oK.Ay], () => oK.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uc.A)({ id: oX.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cT.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    ur.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return ua;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uo;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    us.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => uu.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [oF.A, ul.A],
                            () => {
                                let e = ul.A.getDebugImpressionCappingDisabled();
                                return !(0, ut.sE)("useFilterImpressionCappedContent") || e
                                    ? ud
                                    : oF.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: ud };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, o5.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([ul.A], () => ul.A.getFeedRequestId(oX.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oD).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([oF.A], () => oF.A.hidden),
                A = (0, m.bG)([un.A], () => un.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([n_.A], () => n_.A.getGuild(r), [r]),
                x = ((0, ui.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, E, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: oK.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: oK.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: oB,
                        type: oK.S9.CONTENT_INVENTORY_GROUP,
                        key: oB,
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
                        feedHeight: e.map(c7).reduce((e, n) => e + n, 0),
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
                                (o$(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: oX.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, ut.sE)("useInjectContentInventoryFeed") &&
                                    iy.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
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
    let g = (0, oy.W)("lg") + (0, oy.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = A.current;
                if (null == t) return;
                let i = n === oV || n === oY ? 0 : parseInt(n, 10),
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
                (0, l.jsx)(ug, { guildId: n.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: E,
                    children: (0, l.jsx)(ub, {
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
function uv(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(ok, { children: (0, l.jsx)(u_, { channel: i, className: t }) }), [i, t]);
}
var uN = t(888904);
let uT = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uN.kL,
        children: [
            (0, l.jsxs)(lr.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lr.A.Icon, { icon: dn.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lr.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uN.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uN.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uN.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uS = t(909735),
    uR = t(943712),
    uM = t(274541),
    uO = t(746080),
    uP = t(516607),
    uL = t(999900);
function uD() {
    return (0, l.jsx)("div", { className: uL.wG, children: (0, l.jsx)(g.y, {}) });
}
let uk = (0, nQ.Fe)({
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
        renderLoader: uD,
        name: "ForumChannel",
    }),
    uw = (0, nQ.Fe)({
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
        renderLoader: uD,
        name: "AppChannel",
    });
function uG() {
    return Promise.all([
        t.e("651299"),
        t.e("426965"),
        t.e("256172"),
        t.e("859821"),
        t.e("113561"),
        t.e("368991"),
        t.e("223213"),
        t.e("190227"),
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
        t.e("920593"),
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
let uU = (0, nQ.Fe)({ createPromise: uG, webpackId: 540462, name: "ChannelCall", renderLoader: uD });
function uF() {
    return Promise.all([
        t.e("770583"),
        t.e("998392"),
        t.e("703540"),
        t.e("368991"),
        t.e("256172"),
        t.e("223213"),
        t.e("190227"),
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
        t.e("920593"),
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
let uH = (0, nQ.Fe)({ createPromise: uF, webpackId: 507007, name: "StageChannelCall", renderLoader: uD }),
    uB = (0, nQ.Fe)({
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
            return (0, l.jsx)(sC, {});
        },
    }),
    uV = (0, nQ.Fe)({
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
    uY = (0, nQ.Fe)({
        createPromise: () => Promise.all([t.e("386345"), t.e("269178"), t.e("715268")]).then(t.bind(t, 98863)),
        webpackId: 98863,
        name: "FriendsSidebar",
    });
class uW extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rI.d0)("guild_channel"), this.maybePreloadChannelCall());
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
            ? uG()
            : e === eo.rbe.GUILD_STAGE_VOICE && uF();
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
            (0, rE.openUserProfileModal)({
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
        return e?.hasFlag(uO.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(i_.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(nj.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dS.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iC.A,
                  { size: df.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    a.push((0, l.jsx)(lN, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    a.push((0, l.jsx)(lT.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    a.push((0, l.jsx)(lz, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    a.push((0, l.jsx)(lw, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lN, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, l.jsx)(lT.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    a.push((0, l.jsx)(iq, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && a.push((0, l.jsx)(it, { channel: e })),
                    null == n || n.isForumLikeChannel() || a.push((0, l.jsx)(ro, { channel: n }, "browser")),
                    e.isVocalThread() && a.push((0, l.jsx)(lH, { channel: e }, "thread-call")),
                    a.push((0, l.jsx)(id, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, l.jsx)(iq, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && a.push((0, l.jsx)(i2, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(rh, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (a.push((0, l.jsx)(ro, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(iK.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    (0, nR.PD)(e.guild_id, "channel_header") &&
                        a.push((0, l.jsx)(iW, { channelId: e.id }, "conversations")),
                    a.push((0, l.jsx)(iq, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && a.push((0, l.jsx)(i2, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(nS, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                (a.push((0, l.jsx)(ng, { channel: e }, "popout")),
                    a.push((0, l.jsx)(ro, { channel: e }, "browser")),
                    t || a.push((0, l.jsx)(iK.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iQ, { channel: e }, "pins")),
                    a.push((0, l.jsx)(iq, { channelId: e.id }, "members")),
                    a.push((0, l.jsx)(iV, { channelId: e.id }, "chat")),
                    a.push((0, l.jsx)(nA, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && a.push((0, l.jsx)(ls, {}, "game-invite-channel-learn-more")),
                    t ||
                        (a.push((0, l.jsx)(ln, { channel: e }, "forum-onboarding")),
                        a.push((0, l.jsx)(iK.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, l.jsx)(iq, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                a.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(iq, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: uL.u8,
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
            className: uL.SC,
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
                                className: a()(uL.DD, r, { [uL.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: c,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tL.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tL.zF)({
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
                                              className: uL.u8,
                                              children: (0, l.jsx)(x.$, {
                                                  onClick: () => (0, tD.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tL.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sI.A, { channelId: e.id }),
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
                if (!n) return (0, l.jsx)(uH, { channel: e, popoutType: nI.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    uU,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: nI.N.NO_POPOUT,
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
                ? (0, l.jsx)(iO, { guildId: n.id })
                : (0, l.jsx)(iv.H, { guildId: n.id, children: (0, l.jsx)(iU, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(og.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tw.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tS, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(uk, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return e.type === eo.rbe.GUILD_APP
            ? (0, l.jsx)(uw, { channel: e }, e.id)
            : (0, l.jsx)(tP.A, { channel: e, guild: n, chatInputType: nE.oU.NORMAL }, null != n ? n.id : "home");
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
            return (0, l.jsx)(op, { channel: e }, `private-channel-profile-${e.id}`);
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
                    return (0, l.jsx)(uv, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uv, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(n$, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(uB, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => ib(l$.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, ox.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case iH.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(s5, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case iH.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rf, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case iH.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? ix : rf;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (null != n && (0, oI.ZV)(n.type)) {
                        e = (0, l.jsx)(uM.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case iH.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iH.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: uL.uC,
                    children: (0, l.jsx)(uV, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iF.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(oC.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? oC.X.PostSidebar : oC.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(uT, {});
        if (null == e) return (0, l.jsx)(uR.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            E = (0, uS.UN)("Channel"),
            j = null != d && !I,
            C = (0, oI.nO)(e.type) && !o,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE,
                        className: a()(uL.TE, {
                            [uL.js]: (I && !E) || j,
                            [uL.Rs]: I ? !E || g : j || x,
                            [uL.jl]: I && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: uL.x4,
                                      channel: e,
                                      draftType: iA.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uL.Qs, { [uL.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nJ.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: uL.zP, children: b }) : b,
                x && (0, l.jsx)(uY, {}),
            ],
        });
    }
}
let uz = (0, ef.A)(uW),
    uq = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
            c = (0, m.bG)([eG.Ay], () => eG.Ay.getVoiceChannelId()),
            g = (0, m.bG)([ew.A], () => r ?? ew.A.getChannel(d), [d, r]),
            x = (0, tM.DZ)(),
            f = (0, tM.e4)(g, "ConnectedChannel"),
            j = (0, m.bG)([ew.A], () => ew.A.getChannel(c), [c]),
            C = f?.parent_id,
            y = (0, m.bG)([ew.A], () => ew.A.getChannel(C), [C]),
            b = (0, m.bG)([n_.A], () => n_.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: _ } = (0, iN.A)(f?.id ?? void 0),
            v = (0, m.bG)(
                [nf.A],
                () => {
                    let e = null != d ? nf.A.getParticipants(d) : [],
                        n = null != d ? nf.A.getActivityParticipants(d) : [];
                    return e.length - n.length > 0;
                },
                [d],
            ),
            N = (0, ij.A)(),
            T = (0, m.bG)([eG.Ay], () => (N?.channelId ?? eG.Ay.getVoiceChannelId()) === f?.id),
            S = (0, m.bG)([ej.Ay], () => (null != f ? ej.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, m.bG)([oj.A], () => oj.A.isConnected()),
            M = (0, eE.Ay)(R),
            O = R && !1 === M;
        s.useEffect(() => {
            T &&
                O &&
                null != S &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, nx.Qt)({ applicationId: S.applicationId, instanceId: S.compositeInstanceId }),
                );
        }, [O, f, T, S]);
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            L = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            D = null != P && !(0, ev.A)(f?.id) && L === eZ.Gd.PANEL,
            k = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: w, isUserInThisVoice: G } = (0, m.cf)([lC.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lC.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lC.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !D && v,
            F = f?.isGuildVocal() || U || (w && (G || !k)),
            H = (0, sb.e)(f, "channel"),
            B = (0, m.bG)([nb.A], () => {
                let e = (0, nm.ny)(nb.A.getMainFrame());
                return e?.data.layoutMode === nm.y0.FOCUSED && e.intent === nm.sV.MAIN;
            }),
            { welcomeModalChannelId: V } = (0, h.zy)(),
            Y = (0, m.bG)([is.A], () => null != f && is.A.isLurking(f.guild_id), [f]),
            W = (0, m.bG)([of.A], () => of.A.hasSeen(f?.guild_id, Y), [f, Y]),
            z = (0, m.bG)(
                [nf.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != d
                          ? nf.A.getLayout(d)
                          : eo.DUB.NORMAL,
                [d],
            ),
            q =
                ((n = b?.id),
                (i = (0, m.bG)([n_.A, lX, ee.default, $.Ay], () => {
                    let e = n_.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === lX.hasViewedPrompt(l$.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || ib(l$.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            K =
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
                    return V === eG.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, oI.ke)(n.type);
                })),
            { section: X, channelSidebarState: J } = (0, m.cf)(
                [iB.Ay],
                () => ({ section: iB.Ay.getSection(d, f?.isDM()), channelSidebarState: iB.Ay.getSidebarState(d) }),
                [d, f],
            ),
            Z = b?.id,
            en = (0, m.bG)([iB.Ay], () => iB.Ay.getGuildSidebarState(Z), [Z]),
            et = (0, lJ.lI)(),
            el = (0, tO.Ay)(f),
            es = (0, tO.Ay)(f, !0),
            er = (0, m.bG)([nf.A], () => (null != f ? nf.A.getSelectedParticipant(f.id) : null)),
            ea = (0, e4.vL)(f),
            ed = (0, tk.Uf)(f),
            ec = null != f && c === f.id,
            eu = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eh, appBarToggleEnabled: em } = iI.A.useConfig({ location: "Channel" }),
            eA = (0, iE.c)(),
            ep = (0, m.bG)(
                [oE.A, iz.A],
                () => {
                    let e = f?.guild_id ?? iz.A.getGuildId();
                    return null != e && oE.A.isUnavailable(e);
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
                let e = (0, tD.JK)();
                if (e?.location?.state?.stageInviteKey === uP.J2) {
                    let { channelId: n } = (0, lQ.vu)(e?.location?.pathname) ?? {};
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
                null != a && null != e && eu && e.id === a && !n && ((0, sy.av)(e), o(null));
            }, [a, eu]));
        let eC = (0, eI.cI)(f),
            ey = null != f && f.isPrivate(),
            eb = (0, eE.Ay)(ey),
            eN = (0, eE.Ay)(f?.id);
        s.useEffect(() => {
            let e = eb && !ey,
                n = eb && ey && f?.id !== eN;
            (e || n) && (0, tR.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lb.i.AUTO });
        }, [f?.id, eN, ey, eb]);
        let eT = (0, p.useHasAnyModalOpen)();
        return (0, l.jsx)(uz, {
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
            ...(0, m.cf)([lC.A], () => ({ hasVideo: null != f && lC.A.hasVideo(f.id) }), [f]),
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
