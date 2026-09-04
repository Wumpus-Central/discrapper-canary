t.r(n), t.d(n, { default: () => dx }), t(321073);
var i,
    l = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    d = t(284009),
    o = t.n(d),
    c = t(435558),
    u = t.n(c),
    h = t(806163),
    A = t(17928),
    m = t(554146),
    g = t(192308),
    x = t(289873),
    p = t(821609),
    f = t(43990),
    I = t(367513),
    b = t(442433);
t(183994);
var j = t(837381),
    C = t(887129),
    E = t(607399),
    y = t(834730),
    v = t(194261),
    N = t(312138),
    _ = t(475825),
    T = t(177953),
    S = t(297264),
    R = t(414798),
    L = t(775602),
    O = t(793574),
    M = t(688810),
    P = t(449582),
    D = t(485947),
    k = t(878678),
    U = t(201275),
    G = t(657048),
    w = t(361610),
    F = t(964486),
    H = t(36124),
    B = t(317525),
    V = t(219065),
    W = t(818348),
    z = t(375708);
let Y = [];
var K = t(342296),
    q = t(616356),
    X = t(696451),
    $ = t(290863),
    Q = t(461213),
    Z = t(741961),
    J = t(287809),
    ee = t(303727),
    en = t(174459),
    et = t(625494),
    ei = t(488926),
    el = t(427262),
    es = t(19575),
    ea = t(589158),
    er = t(652215),
    ed = t(162866),
    eo = t(4577);
let ec = es.Ay.getEnableHardwareAcceleration(),
    eu = s.memo(function (e) {
        let { channel: n, sectionId: i, userId: a, guildOwnerId: r } = e,
            d = s.useRef(null),
            o = (0, A.bG)([Z.A], () => Z.A.isTyping(n.id, a)),
            c = (0, A.bG)([X.Ay], () => X.Ay.getMember(n.guild_id, a)),
            u = (0, A.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, A.bG)([J.default], () => J.default.getUser(a)),
            m = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
            g = h?.id === m?.id,
            x = (0, A.bG)([$.A, Q.A], () => (g ? Q.A.getStatus() : $.A.getStatus(a, n.guild_id))),
            p = (0, A.bG)([$.A], () => $.A.isMobileOnline(a)),
            f = (0, A.yK)([$.A, Q.A], () => (g ? Q.A.getActivities() : $.A.getActivities(a, n.guild_id))),
            I = (0, A.bG)([q.A], () => q.A.getAnyStreamForUser(a)),
            C = (0, j.rm)(a),
            y = (0, A.bG)([V.A], () => V.A.canUserViewChannel(n.id, i, a)),
            v = h?.id != null && h.id === r,
            N = s.useCallback(
                (e) => {
                    null != h &&
                        (0, b.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("866038"),
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
            _ = s.useCallback(() => {
                if (null == h) return;
                let e = `@${el.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                et._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    et._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    R.A.startTyping(n.id);
            }, [h, n]),
            T = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, k.K4)({
                            guildId: n.guild_id,
                            location: { section: er.JJy.THREAD_MEMBER_LIST, object: er.ZSU.BOOST_GEM_ICON },
                        });
                },
                [n.guild_id],
            ),
            S = (0, P.r)({ user: h, guildId: n.guild_id }),
            [L, O] = s.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, l.jsx)(K.A, {
            targetElementRef: d,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: E.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: _,
            shouldShow: L,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: t, onMouseDown: i, ...s } = e;
                return (0, l.jsx)(ea.A, {
                    ref: d,
                    onContextMenu: N,
                    shouldAnimateStatus: ec,
                    user: h,
                    currentUser: m,
                    nick: c?.nick,
                    status: x,
                    activities: f,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: o,
                    channel: n,
                    guildId: n.guild_id,
                    isMobile: p,
                    selected: L,
                    applicationStream: I,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: T,
                    itemProps: C,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: v,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? _?.() : O((e) => !e);
                    },
                    onMouseDown: (e) => {
                        L ? e.stopPropagation() : i?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    eh = s.memo(function (e) {
        let { id: n, label: t, count: i, guildId: s } = e,
            a = (0, U.$7)({ roleId: n, guildId: s, size: 16 });
        return n === er.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: eo.lL, children: (0, l.jsx)("div", { className: eo.k1 }) })
            : (0, l.jsxs)(D.A, {
                  className: eo.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != a ? (0, l.jsx)(G.A, { className: eo.UT, ...a }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    eA = s.memo(function (e) {
        let { channel: n } = e;
        return n.type === er.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: ed.yF }),
                      (0, l.jsxs)(y.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: ed.Uz,
                          children: [
                              (0, l.jsx)(v.LockIcon, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              z.intl.string(z.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: ed.GA,
                          children: z.intl.string(z.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function em(e) {
    var n;
    let t,
        i,
        a,
        d,
        o,
        { channel: c, guild: h } = e,
        m = `members-${c.id}`,
        { analyticsLocations: g } = (0, M.Ay)(O.A.MEMBER_LIST),
        x = (function (e, n) {
            (0, F.Ay)(() => {
                n?.id != null && (0, w.Ey)(n.id, e, H.LD);
            });
            let t = (0, A.bG)([B.A], () => (null != n ? B.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, A.cf)([V.A], () => ({
                    version: V.A.getMemberListVersion(e),
                    members: V.A.getMemberListSections(e),
                })),
                a = null == n,
                r = s.useMemo(() => {
                    if (a) return Y;
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
                }, [t, l, i, a]);
            return null != l ? r : Y;
        })(c.id, h),
        p = x.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: I } =
            ((n = m),
            (t = (0, A.bG)([L.Ay], () => L.Ay.keyboardModeEnabled)),
            (i = s.useRef(null)),
            (a = s.useCallback(
                (e, n) => {
                    let t = i.current;
                    if (null == t) return;
                    let l = parseInt(n, 10),
                        [s, a] = t.getSectionRowFromIndex(l),
                        r = 42 * (0 === s && 0 === a);
                    t.scrollToIndex({
                        section: s,
                        row: a,
                        padding: r,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [42],
            )),
            (d = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = i.current;
                        if (null == n) return e();
                        n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (o = s.useCallback(
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
                navigator: (0, C.Ay)({ id: n, setFocus: a, isEnabled: t, scrollToStart: d, scrollToEnd: o }),
                listRef: i,
            }),
        b = 0 === x.length || x.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(er.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        b)
    )
        return (0, l.jsx)(eg, { channel: c });
    let E = u().omit(f.containerProps, ["ref"]),
        y = ei.wT(h);
    return (0, l.jsx)(M.f5, {
        value: g,
        children: (0, l.jsx)(j.hD, {
            navigator: f,
            children: (0, l.jsx)(N.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: r()(eo.yg, eo.ML, ed.kL),
                        children: (0, l.jsx)(
                            _.OZ,
                            {
                                ref: I,
                                className: eo.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = x[n];
                                    return (0, l.jsx)(
                                        eh,
                                        { id: t.id, label: t.label, count: t.userIds.length, guildId: h.id },
                                        t.id,
                                    );
                                },
                                rowHeight: 42,
                                renderRow: (e) => {
                                    let { section: n, row: t } = e,
                                        { userIds: i, id: s } = x[n];
                                    return (0, l.jsx)(
                                        eu,
                                        { channel: c, sectionId: s, userId: i[t], guildOwnerId: y },
                                        i[t],
                                    );
                                },
                                footerHeight: (e) => 80 * (x[e] === p && c.type === er.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    x[e.section] === p ? (0, l.jsx)(eA, { channel: c }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: x.map((e) => e.userIds.length),
                                fade: !0,
                                ...E,
                                ...e,
                            },
                            m,
                        ),
                    }),
            }),
        }),
    });
}
function eg(e) {
    let { channel: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(ed.p$, ed.kL, eo.yg, eo.ML, eo.ol),
        children: [
            (0, l.jsx)(y.E, {
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
                        children: (0, l.jsx)(T.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(ee.A, { className: ed.WA }),
                ],
            }),
            (0, l.jsx)(S.D, {
                variant: "heading-md/semibold",
                children: n.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
            }),
            (0, l.jsx)(y.E, {
                className: ed.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: z.intl.string(z.t.emw8UP),
            }),
        ],
    });
}
var ex = t(738876),
    ep = t(456412),
    ef = t(432371),
    eI = t(475743),
    eb = t(933958),
    ej = t(702841),
    eC = t(567249),
    eE = t(811024),
    ey = t(969151),
    ev = t(108959),
    eN = t(866665),
    e_ = t(446576),
    eT = t(817281),
    eS = t(95561),
    eR = t(587837),
    eL = t(850891),
    eO = t(742023),
    eM = t(204651),
    eP = t(383831),
    eD = t(128286),
    ek = t(734057),
    eU = t(309010),
    eG = t(795816),
    ew = t(685399),
    eF = t(216418),
    eH = t(620148),
    eB = t(732637),
    eV = t(104171),
    eW = t(47294),
    ez = t(594007),
    eY = t(16961),
    eK = t(138017),
    eq = t(715482),
    eX = t(315502),
    e$ = t(573163),
    eQ = t(234320),
    eZ = t(5867),
    eJ = t(248310);
function e0(e) {
    let { channelId: n, className: t, ...i } = e,
        a = s.useRef(null),
        r = (0, A.bG)([eb.Ay], () => eb.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        d = s.useCallback(() => {
            let e = r ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [r]),
        { unreadCount: o, mentionCount: u } = (function (e) {
            let n = (0, A.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, A.cf)(
                    [e$.Ay],
                    () => ({ unreadCount: e$.Ay.getUnreadCount(e), mentionCount: e$.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: i, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            a.current?.focus();
        }, []);
    (0, eQ.Vo)({ event: er.jej.FOCUS_CHAT_BUTTON, handler: h });
    let m = r ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        g = [m];
    u > 0 && g.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        o > 0 && g.push(z.intl.string(z.t.x5zAGZ));
    let x = (0, A.bG)([eb.Ay], () => eb.Ay.getFocusedLayout()),
        p = u > 0 ? u : o,
        f = p > 0;
    return (0, l.jsxs)("div", {
        className: eJ.iE,
        children: [
            (0, l.jsx)(eM.l, {
                isTrayButton: !0,
                buttonRef: a,
                onClick: d,
                label: m,
                "aria-label": g.join(", "),
                tooltipPosition: "top",
                iconComponent: x === eZ.E8.NO_CHAT ? eK.j : eq.g,
                themeable: !0,
                className: t,
                ...i,
            }),
            f ? (0, l.jsx)(eX.A, { hasMentions: u > 0, truncatedCount: p > 99 ? "99+" : p, className: eJ.qS }) : null,
        ],
    });
}
var e1 = t(538303);
let e2 = eV.DN.SIZE_32,
    e5 = { [eZ.E8.NO_CHAT]: e1.Oo, [eZ.E8.RESIZABLE]: e1.Ig };
function e6(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        a = (0, eH.A)(),
        d = (0, A.yK)([eb.Ay], () => eb.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        o = (0, ey.H)(t),
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(o)),
        u = (0, ew.IQ)(d),
        h = (0, ew.Rz)(u),
        m = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        g = s.useRef(null),
        x = (0, A.bG)([eb.Ay], () => eb.Ay.getFocusedLayout()),
        p = x !== eZ.E8.NO_CHAT,
        [I, b] = s.useState(eO.Ay.activityPanelHeight ?? n ?? null),
        j = s.useCallback((e) => {
            eT.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        C = s.useRef(null),
        [E, v] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            v({ width: C.current?.clientWidth ?? 0, height: C.current?.clientHeight ?? 0 });
        });
        return e.observe(C.current), () => e.disconnect();
    }, []);
    let N = E.width / Math.max(E.height, 1) < eZ.B5,
        _ = 0,
        T = 0,
        S = (0, eF.A)(a?.id);
    if (!S) {
        let e = E.width,
            n = E.height;
        N
            ? ((n = E.width / eZ.B5) > E.height && (e = (n = E.height) * eZ.B5), (T = (E.height - n) / 2))
            : ((e = Math.min(E.height * eZ.B5)) > E.width && (n = (e = E.width) / eZ.B5), (_ = (E.width - e) / 2));
    }
    let R = h.get(a?.id ?? ""),
        O = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        M = (0, A.yK)(
            [X.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => X.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        P = s.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [M]),
        D = (function (e, n, t) {
            let i = (0, eI.Ay)(e),
                l = e !== i,
                [a, r] = s.useState(!1);
            s.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let d = !L.Ay.useReducedMotion && (l || a);
            return s.useMemo(() => {
                let i = d
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "50ms",
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != n && null != t ? { ...i, minHeight: 200, maxHeight: t, height: n } : i;
            }, [d, e, t, n]);
        })(p, I, n),
        k = (0, eY.G)();
    if (null == a) return null;
    let U = [];
    function G(e) {
        if (null == e || void 0 === e || e === eV.mt) return null;
        let n = P.get(e.id),
            t = n?.nick ?? el.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e2), alt: t, className: e1.my }, e.id),
            },
            e.id,
        );
    }
    return (
        null != R &&
            (U = Array.from(R.embeddedActivity.userIds)
                .map((e) => J.default.getUser(e))
                .filter((e) => null != e && void 0 !== e)),
        (0, l.jsx)(f.N, {
            theme: er.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: r()(e1.iE, e5[x], e),
                    ref: g,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eL.A, { type: "embedded-activity", applicationId: a.id }),
                        (0, l.jsxs)("div", {
                            className: e1.lq,
                            children: [
                                p
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e1.wx,
                                          children: (0, l.jsx)(y.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: e1.qd,
                                              children: a?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: r()(e1.ht, { [e1.kK]: S }),
                                    style: { paddingLeft: _, paddingRight: _, paddingTop: T, paddingBottom: T },
                                    ref: C,
                                    children: (0, l.jsx)(eB.A, { className: e1.pU, embedId: (0, ez.A)(t.id, a.id) }),
                                }),
                                null != O
                                    ? (0, l.jsxs)("div", {
                                          className: e1.qr,
                                          children: [
                                              (0, l.jsx)(eV.Ay, {
                                                  renderIcon: !1,
                                                  users: U,
                                                  size: e2,
                                                  max: 6,
                                                  renderUser: G,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e1.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e1.qi,
                                                          children: [
                                                              (0, l.jsx)(e0, { channelId: O }),
                                                              (0, l.jsx)(eM.l, {
                                                                  isTrayButton: !0,
                                                                  label: z.intl.string(z.t.brPQ5U),
                                                                  onClick: m,
                                                                  iconComponent: e_.g,
                                                                  themeable: !0,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: e1.pt,
                                                          children: (0, l.jsx)(eP.A, {
                                                              applicationId: a.id,
                                                              location: t,
                                                              centerButton: !0,
                                                              color: "disconnect",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              k
                                                  ? (0, l.jsx)(eD.A, {
                                                        popoutOpen: !1,
                                                        onOpenPopout: () => {
                                                            (0, eS.zV)(er.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                                (0, eW.A)({
                                                                    onConfirm: async () => {
                                                                        a?.id != null &&
                                                                            null != o &&
                                                                            (await (0, eG.od)(a.id, o)),
                                                                            (0, eG.jp)();
                                                                    },
                                                                });
                                                        },
                                                        onClosePopout: () => {},
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        p && null != n
                            ? (0, l.jsx)(eR.A, {
                                  minHeight: 480,
                                  maxHeight: n,
                                  resizableNode: g,
                                  onResize: (e) => {
                                      et._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), b(e);
                                  },
                                  onResizeEnd: (e) => {
                                      et._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), j(e);
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
            activityPanelMode: a,
        } = (0, ej.cf)([eb.Ay], () => {
            let e = eb.Ay.getConnectedActivityLocation(),
                n = eb.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, ey.H)(e),
                connectedActivity: n,
                activityPanelMode: eb.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, ej.bG)([eC.A], () => eC.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT));
    if (!(0, eE.Gp)(i)) return null;
    let d = s?.applicationId;
    return a !== eZ.Gd.PANEL || null == d || r || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e6, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e7 = t(90804),
    e3 = t(748975),
    e4 = t(323073),
    e8 = t(12470),
    ne = t(811893),
    nn = t(91242),
    nt = t(672929),
    ni = t(809871),
    nl = t(241696),
    ns = t(58736),
    na = t(869146),
    nr = t(165610);
function nd(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: nr.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nt.A)(n.application_id ?? null, t),
        a = (0, eY.G)(),
        r = (0, A.bG)(
            [na.A, nn.A],
            () => na.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT) && null != i && nn.A.getMainFrame()?.id === i.id,
            [i],
        ),
        d = s.useCallback(() => {
            null != i && (0, eW.A)({ onConfirm: () => (0, nl.A)(i.id) });
        }, [i]),
        o = s.useCallback(() => {
            (0, eW.A)({ onConfirm: () => ni.A.popInFrame() });
        }, []);
    return (0, nr.x1)(i)
        ? r
            ? (0, l.jsx)(ns.In, {
                  icon: e8._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: o,
              })
            : a
              ? (0, l.jsx)(ns.In, {
                    icon: ne.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: d,
                })
              : null
        : null;
}
var no = t(568598),
    nc = t(198052),
    nu = t(164617),
    nh = t(355622),
    nA = t(689874),
    nm = t(828488),
    ng = t(939249),
    nx = t(408278),
    np = t(624479),
    nf = t(691540),
    nI = t(857250),
    nb = t(97483),
    nj = t(534890),
    nC = t(661531),
    nE = t(39623),
    ny = t(952270),
    nv = t(381849),
    nN = t(549973),
    n_ = t(957565),
    nT = t(935208),
    nS = t(256331),
    nR = t(623562),
    nL = t(619065),
    nO = t(403862);
let nM = ["high", "medium", "low"],
    nP = s.memo(function (e) {
        let { moderation: n } = e,
            t = null != n && 1 === n.status,
            i = null != n && !n.flaggedTitle && !n.flaggedSummary && !n.flaggedKeyPoints,
            a = s.useMemo(() => {
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
            r =
                null == n
                    ? "unknown"
                    : a.failed > 0
                      ? "failed"
                      : a.unknown > 0
                        ? "unknown"
                        : a.passed > 0
                          ? "passed"
                          : "unknown",
            d =
                null != n
                    ? (n.flaggedSummaryDetails.find((e) => {
                          var t;
                          return (
                              e.severity ===
                              ((t = n.flaggedSummaryDetails.map((e) => e.severity)),
                              nM.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            o = d?.severity ?? null,
            c = d?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: nO.UO,
            children: [
                (0, l.jsx)(y.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nO.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: nO.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nO.a7,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : t ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : t ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != n &&
                                    !t &&
                                    null != n.statusReason &&
                                    (0, l.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: n.statusReason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: nO.a7,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : i ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : i ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != n &&
                                    !i &&
                                    (0, l.jsxs)(y.E, {
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
                                    (null != o || null != c) &&
                                    (0, l.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [o, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: nO.a7,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == n || "unknown" === r
                                            ? "text-muted"
                                            : "passed" === r
                                              ? "status-positive"
                                              : "text-feedback-critical",
                                    children:
                                        null == n || "unknown" === r ? "\u2014" : "passed" === r ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != n &&
                                    (a.passed > 0 || a.failed > 0 || a.unknown > 0) &&
                                    (0, l.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            a.passed > 0 && `${a.passed} passed`,
                                            a.failed > 0 && `${a.failed} failed`,
                                            a.unknown > 0 && `${a.unknown} unknown`,
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
    nD = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = nT.default.extractTimestamp(n.startMessageId),
            s = nT.default.extractTimestamp(n.endMessageId),
            a = (0, nN.e)({ timestamp: i }),
            r = Math.max(1, Math.round((s - i) / 1e3)),
            d = (0, nv.WR)({ seconds: r, getFormatter: nv.i }),
            o = (0, A.bG)([nL.A], () => nL.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(ng.D, {
            className: nO.Nm,
            style: { backgroundColor: o },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: nO.PY,
                    children: [
                        (0, l.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: nO.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(nx.K, {
                            icon: np.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, n_.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nf.P0)((0, nI.o)("Copied conversation JSON", nb.Ck.SUCCESS)),
                                    );
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: nO.FR,
                    children: [
                        a,
                        " ago \xb7 ",
                        d,
                        " duration \xb7 ",
                        n.messageCount,
                        " messages \xb7 ",
                        n.userCount,
                        " users",
                    ],
                }),
                null != n.briefSummary &&
                    (0, l.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: nO.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: nO.JP,
                        children: n.keyPoints.map((e, n) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                n,
                            ),
                        ),
                    }),
                (0, l.jsxs)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: nO.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: nO.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nO.UO,
                    children: [
                        (0, l.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nO.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: nO.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nO.a7,
                                    children: [
                                        (0, l.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.substance?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: nO.a7,
                                    children: [
                                        (0, l.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.engagement?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: nO.a7,
                                    children: [
                                        (0, l.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.dynamics?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(y.E, {
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
                (0, l.jsx)(nP, { moderation: n.moderation ?? null }),
            ],
        });
    });
function nk(e) {
    let { channel: n } = e,
        t = (0, A.bG)([nL.A], () => nL.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, A.bG)([nL.A], () => nL.A.isPendingFetch(n.id), [n.id]),
        a = (0, A.bG)([nS.A], () => nS.A.isHighlightingEnabled(), []),
        r = s.useCallback(
            (e) => {
                (0, nR.xI)(n.id, n.guild_id, e.id);
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nO.zr,
        children: [
            (0, l.jsxs)("div", {
                className: nO.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: nO.gn,
                        children: [
                            (0, l.jsx)(nj.ChatIcon, { color: nC.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(y.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: nO.y6,
                        children: (0, l.jsx)(nx.K, {
                            icon: a ? nE.EyeIcon : ny.EyeSlashIcon,
                            "aria-label": a ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: nR.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: nO.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(nD, { conversation: e, onJump: r }, e.id))
                        : (0, l.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: nO.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var nU = t(268218),
    nG = t(726249),
    nw = t(228366),
    nF = t(334738),
    nH = t(208882),
    nB = t(938764),
    nV = t(519480),
    nW = t(352123),
    nz = t(328857),
    nY = t(130696);
let nK = function (e) {
    let { guild: n, onAddGuild: i } = e,
        a = s.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("683621"),
                    t.e("711162"),
                    t.e("159957"),
                    t.e("728136"),
                    t.e("216084"),
                    t.e("36624"),
                    t.e("22547"),
                ]).then(t.bind(t, 1310));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        guild: n,
                        source: er.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: er.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [n]);
    return (0, l.jsxs)("div", {
        className: nY.h2,
        children: [
            (0, l.jsx)("img", { className: nY.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(S.D, {
                className: nY._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(y.E, { variant: "text-md/normal", className: nY.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(nz.E, {
                      className: nY.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(nz.E, {
                className: nY.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var nq = t(683438),
    nX = t(689175),
    n$ = t(761508),
    nQ = t(765671),
    nZ = t(22231),
    nJ = t(365199),
    n0 = t(66834),
    n1 = t(573435),
    n2 = t(101555),
    n5 = t(548118),
    n6 = t(714991),
    n9 = t(776231),
    n7 = t(345942),
    n3 = t(71393),
    n4 = t(486020),
    n8 = t(149790),
    te = t(682557),
    tn = t(524058);
let tt = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(ng.D, {
        onClick: n,
        className: tn.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tn.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function ti(e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: o } = (0, nW.A)(n);
    return (0, l.jsx)("div", {
        className: r()(tn.fc, { [tn.QX]: i }),
        children: (0, l.jsxs)(n2.Ay, {
            children: [
                o
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(n2.$n, {
                              onClick: () => {
                                  (0, g.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("376991"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(nZ.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tn.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(te.A, {
                    targetElementRef: d,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(n2.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nJ.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tn.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tl = s.memo(function (e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        r = null != (0, A.bG)([n3.A], () => n3.A.getGuild(n.guildId));
    async function d() {
        a(!0);
        try {
            r ? (0, n7.u)(n.guildId) : await n0.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
        } finally {
            a(!1);
        }
    }
    let o = n4.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, n9.mZ)() }),
        c = n4.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        r && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tn.Nr,
            onContextMenu: function (e) {
                (0, b.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tn.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tn.Yi,
                            children: null != o && (0, l.jsx)("img", { src: o, alt: "", className: tn.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tn.$f,
                            children: (0, l.jsx)(n1.Ay, {
                                mask: n1.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tn.SA,
                                    children: (0, l.jsx)(n5.Ay, {
                                        className: tn.rZ,
                                        iconSrc: c,
                                        guild: (0, n8.xi)(n),
                                        size: n5.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tn.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tn.DD,
                            children: [
                                (0, l.jsx)(n6.A, { className: tn.n2, guild: n }),
                                (0, l.jsx)(y.E, {
                                    className: tn.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(y.E, {
                            className: tn.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tn.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tn.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tn.JX }),
                                            (0, l.jsx)(y.E, {
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
                                        className: tn.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tn.Li }),
                                            (0, l.jsx)(y.E, {
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
                            className: tn.PD,
                            children: (0, l.jsx)(p.$, {
                                loading: i,
                                variant: r ? "secondary" : "active",
                                onClick: d,
                                text: u,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(ti, { entry: n }),
            ],
        })
    );
});
var ts = t(946116),
    ta = t(844086),
    tr = t(770679);
function td(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: a, width: d } = (0, nQ.Ay)(),
        o = null != d && d <= 800;
    return (0, l.jsxs)("div", {
        ref: a,
        className: tr.wx,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: tr.F0,
                src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
            }),
            (0, l.jsx)("div", {
                className: tr.AZ,
                children: (0, l.jsxs)("div", {
                    className: r()(tr.VW, { [tr.eO]: o }),
                    children: [
                        (0, l.jsx)(S.D, {
                            variant: "heading-xl/semibold",
                            className: tr.dc,
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(y.E, {
                            variant: "text-md/normal",
                            className: tr.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)(f.N, {
                            theme: W.NJ.LIGHT,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: r()(tr.MT, e),
                                    children: (0, l.jsx)(nq.I, {
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
let to = function (e) {
    let {
        channel: n,
        directoryEntries: t,
        handleCreateOrAddGuild: i,
        searchQuery: a,
        setSearchQuery: r,
        handleClearSearch: d,
        handleSearchKeyPress: o,
        currentCategoryId: c,
        handleSelectCategory: u,
        categoryCounts: h,
        allEntriesCount: A,
        isLoading: m,
    } = e;
    return (0, l.jsx)("div", {
        className: ta.$$,
        children: (0, l.jsxs)(nX.Gt, {
            className: ta.XG,
            children: [
                (0, l.jsx)(td, { searchQuery: a, setSearchQuery: r, handleClearSearch: d, handleSearchKeyPress: o }),
                (0, l.jsx)(nX.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(n$.V, {
                        className: tr.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                n$.V.Item,
                                { className: tr.YU, id: ts.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${A})` },
                                ts.mU.ALL,
                            ),
                            (0, ts.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    n$.V.Item,
                                    { className: tr.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                m && null == t
                    ? (0, l.jsx)(x.y, { className: ta.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(y.E, {
                                                variant: "text-md/semibold",
                                                className: tr.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: ta.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tl, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tt, { onClick: i }) : null,
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
var tc = t(370876),
    tu = t(28863),
    th = t(364522),
    tA = t(792831),
    tm = t(211862);
let tg = function (e) {
    let n,
        {
            searchQuery: t,
            setSearchQuery: i,
            mostRecentQuery: s,
            handleClearSearch: a,
            handleSearchKeyPress: r,
            handleCreateOrAddGuild: d,
            searchResults: o,
            searchFetching: c,
        } = e;
    if (c) n = (0, l.jsx)("div", { className: ta.$$, children: (0, l.jsx)(x.y, { className: ta.u1 }) });
    else if (0 === o.length) {
        let e =
            null != d
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tu.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tm.Je,
            children: [
                (0, l.jsx)("img", { className: tm.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, l.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: tm.gR,
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(y.E, { variant: "text-md/normal", color: "text-default", className: tm.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: ta.vY, children: o.map((e) => (0, l.jsx)(tl, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: ta.$$,
        children: (0, l.jsxs)(th.Ar, {
            className: ta.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tm.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tm.Dr,
                            children: [
                                (0, l.jsx)(ng.D, {
                                    onClick: a,
                                    className: tm.UE,
                                    children: (0, l.jsx)(tA.A, { direction: tA.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(S.D, {
                                    variant: "heading-xl/semibold",
                                    className: tm.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: o.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(nq.I, {
                            query: t,
                            "aria-label": z.intl.string(z.t.nL2wKD),
                            placeholder: z.intl.string(z.t.nL2wKD),
                            onChange: i,
                            onClear: a,
                            onKeyDown: r,
                        }),
                    ],
                }),
                n,
            ],
        }),
    });
};
var tx = t(650583);
let tp = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, A.cf)([nV.A], () => {
            let e = nV.A.getCurrentCategoryId(n.id),
                t = nV.A.getDirectoryEntries(n.id, e === ts.mU.ALL ? null : e),
                i = nV.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: nV.A.getDirectoryAllEntriesCount(n.id),
                isLoading: nV.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = e$.Ay.lastMessageId(n.id);
            null != e &&
                nw.h.wait(() => {
                    (0, nF.ack)(
                        n.id,
                        {
                            object: er.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: er.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
                null != r
                    ? (function (e, n) {
                          if (n !== ts.mU.ALL) return [{ entries: (0, tc._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tc.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tc.DN)(s)).length > 0 &&
                                  t.push({ header: z.intl.string(z.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(r), a)
                    : null,
            [r, a],
        ),
        {
            mostRecentQuery: h,
            searchFetching: m,
            searchResults: p,
        } = (0, A.cf)([nB.A], () => {
            let { mostRecentQuery: e, fetching: t } = nB.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nB.A.getSearchResults(n.id, e) };
        }),
        [f, I] = s.useState(h),
        b = "" !== h,
        j = { mostRecentQuery: h },
        C = s.useRef(j);
    s.useEffect(() => {
        C.current = j;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            nH.Yc(n.id), nH.YS(n.id), I(e);
        }, [n.id]),
        s.useEffect(() => {
            en.default.track(er.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: a,
            });
        }, [n.id, i.id, a]);
    let E = (0, nW.b)(n),
        y = s.useMemo(
            () =>
                E
                    ? () => {
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("122326"),
                                  t.e("376991"),
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
                                      currentCategoryId: a === ts.mU.ALL ? null : a,
                                  });
                          });
                      }
                    : void 0,
            [E, i.name, i.id, n.id, a],
        );
    function v(e) {
        0 !== f.trim().length &&
            e.key === tx.dh.ENTER &&
            (nH.Se(n.id, f),
            en.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function N() {
        I(""), nH.BA(n.id);
    }
    return b
        ? (0, l.jsx)(tg, {
              searchQuery: f,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: N,
              handleCreateOrAddGuild: y,
              searchResults: p,
              searchFetching: m,
          })
        : null == u && null == a
          ? (0, l.jsx)("div", { className: ta.$$, children: (0, l.jsx)(x.y, { className: ta.u1 }) })
          : u?.length === 0 && null == a
            ? (0, l.jsx)("div", { className: ta.$$, children: (0, l.jsx)(nK, { guild: i, onAddGuild: y }) })
            : (0, l.jsx)(to, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: v,
                  handleClearSearch: N,
                  handleCreateOrAddGuild: y,
                  currentCategoryId: a,
                  handleSelectCategory: function (e) {
                      nH.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: d,
                  allEntriesCount: o,
                  isLoading: c,
              });
};
var tf = t(826673),
    tI = t(93055),
    tb = t(47167),
    tj = t(802426),
    tC = t(353428),
    tE = t(976860),
    ty = t(288254),
    tv = t(873614),
    tN = t(649852),
    t_ = t.n(tN),
    tT = t(922016),
    tS = t(980707),
    tR = t(477782),
    tL = t(789645),
    tO = t(163126),
    tM = t(182061),
    tP = t(886393),
    tD = t(307623),
    tk = t(660273),
    tU = t(707792),
    tG = t(41402),
    tw = t(271456),
    tF = t(200273),
    tH = t(565846),
    tB = t(57907),
    tV = t(375500),
    tW = t(707653),
    tz = t(50268),
    tY = t(378570),
    tK = t(162199),
    tq = t(713608),
    tX = t(473503),
    t$ = t(901472),
    tQ = t(267102),
    tZ = t(474397),
    tJ = t(486974),
    t0 = t(39470);
function t1(e) {
    let { channel: n } = e,
        t = s.useContext(en.AnalyticsContext),
        i = (0, tQ.aL)(),
        a = z.intl.string(t0.default["Beo/7v"]),
        { firstMessage: r } = (0, tX.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, l.jsx)(ns.Ay.Icon, {
              onClick: function () {
                  null != o &&
                      ((0, tY.iN)(n.id),
                      (0, tZ.A)(),
                      (0, t$.z)(n.guild_id, o, n.id, {
                          modViewPanel: tJ.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(er.jej.POPOUT_CLOSE));
              },
              tooltip: a,
              icon: tq.q,
              "aria-label": a,
          })
        : null;
}
var t2 = t(780338),
    t5 = t(782603),
    t6 = t(857071),
    t9 = t(607508),
    t7 = t(914703),
    t3 = t(37411);
function t4(e) {
    let { channel: n } = e,
        t = (0, t9.X)(n),
        [i, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, A.bG)([t6.A], () => null != n.guild_id && t6.A.isLurking(n.guild_id));
    if (
        (s.useEffect(() => {
            function e() {
                return a(!0);
            }
            return (
                et._.subscribe(er.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    et._.unsubscribe(er.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        d)
    )
        return null;
    let o = z.intl.string(z.t.h850Ss);
    return (0, l.jsx)(tT.Y, {
        targetElementRef: r,
        shouldShow: i,
        animation: tT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, l.jsx)(t7.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(ns.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: i ? null : o,
                icon: t === t3.CP.NO_MESSAGES ? t2.BellSlashIcon : t5.BellIcon,
                "aria-label": o,
                selected: i,
            });
        },
    });
}
var t8 = t(747926);
function ie(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(tT.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(it, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ns.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nJ.MoreHorizontalIcon,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function it(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tk.A)(n, "Sidebar Overflow"),
        a = (0, tG.A)(n),
        r = (0, tB.A)(n),
        d = (0, tV.A)(n),
        o = (0, tM.A)(n),
        c = (0, tU.A)(n),
        u = (0, tH.A)(n.id),
        h = (0, tF.A)(n),
        A = (0, tD.A)(n),
        m = (0, tP.A)(n),
        g = (0, tz.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, tW.A)(n),
        p = (0, tw.A)(n),
        f = (0, tO.$)(1e3);
    function I() {
        (0, tY.iN)(n.id);
    }
    function b(e) {
        let t = t_()(() => {
            et._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e();
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        et._.subscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                et._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            });
    }
    return (0, l.jsxs)(tS.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tR.rX, {
                children: [s, (0, l.jsx)(tR.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: I })],
            }),
            (0, l.jsxs)(tR.rX, { children: [r, d] }),
            (0, l.jsxs)(tR.rX, { children: [h, a, u, p] }),
            (0, l.jsxs)(tR.rX, {
                children: [
                    (0, l.jsx)(tR.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: ne.t,
                        trailingIndicator: { type: "icon", icon: ne.t },
                        action: function () {
                            b(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I();
                        },
                    }),
                    (0, l.jsx)(tR.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: ne.t,
                        trailingIndicator: { type: "icon", icon: ne.t },
                        action: function () {
                            b(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(tR.rX, { children: [x, o, c, A] }),
            (0, l.jsxs)(tR.rX, { children: [m, g] }),
        ],
    });
}
function ii(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(ns.Ay.Icon, {
            icon: tL.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, t8.xu)((0, tK.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(t4, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(t1, { channel: n }) : null,
                  (0, l.jsx)(ie, { channel: n }),
                  i,
              ],
          });
}
var il = t(31717),
    is = t(853742),
    ia = t(85190);
function ir(e) {
    let { channelId: n } = e,
        i = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, A.bG)([ek.A], () => ek.A.getChannel(i?.parent_id)),
        r = (0, A.bG)([n3.A], () => n3.A.getGuild(i?.getGuildId())),
        d = (0, tb.Ay)(i),
        o = (0, ty.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, is.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    if (null != o) return (0, l.jsx)(tv.A, { guild: r, channelId: o });
    let u = (0, l.jsx)(ii, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: il.C.ChannelMessage }),
            (0, l.jsx)(ns.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tC.zF)({
                    channel: i,
                    parentChannel: a,
                    channelName: d,
                    guild: r,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, b.L3)(e, async () => {
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
                        null != i && (0, tE.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ia.T,
                children: (0, l.jsx)(tj.A, { channel: i, guild: r, chatInputType: nh.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var id = t(925166),
    io = t(857253),
    ic = t(872363);
let iu = function (e, n) {
    nw.h.wait(() => {
        nw.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var ih = t(561446),
    iA = t(300233),
    im = t(499211),
    ig = t(468689),
    ix = t(529942),
    ip = t(739455),
    iI = t(709017);
function ib(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iI.t7,
        children: (0, l.jsxs)("div", {
            className: iI.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iI.xw,
                    children: [
                        (0, l.jsx)(S.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(y.E, {
                            variant: "text-sm/normal",
                            className: iI.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iI.__invalid_button,
                            children: (0, l.jsx)(p.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    (0, ix.rf)(n),
                                        ig.A.open(n, er.BEX.ROLE_SUBSCRIPTIONS, void 0, er.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, ip.Fx)(n);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ij = t(599941),
    iC = t(29385),
    iE = t(950344),
    iy = t(217530),
    iv = t(162093),
    iN = t(325348);
function i_(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iC.e)({ guildId: n, channelId: t }),
        a = (0, ij.uk)(n),
        r = (0, ij.Tq)(n),
        d = (0, A.bG)([n3.A], () => n3.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(t)),
        u = (0, tb.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of a) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [a]);
    return ((0, iE.A)({
        guildId: n,
        location: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == d)
        ? (0, l.jsx)("div", {
              className: iN.__invalid_spinnerContainer,
              children: (0, l.jsx)(x.y, { className: iN.__invalid_spinner }),
          })
        : (0, l.jsxs)(th.Ar, {
              className: iN.$$,
              children: [
                  (0, l.jsx)(S.D, {
                      variant: "heading-xl/semibold",
                      className: iN.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: o, channelName: u }),
                  }),
                  (0, l.jsx)(y.E, {
                      className: iN.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, l.jsx)(iy.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iv.A,
                                  {
                                      guildId: n,
                                      listingId: e.id,
                                      groupListingId: h[e.id],
                                      analyticsLocation: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
var iT = t(138298),
    iS = t(940382),
    iR = t(761640);
function iL(e) {
    let { channelId: n } = e,
        t = (function (e) {
            let { hasUnread: n, mentionCount: t } = (0, A.cf)(
                [e$.Ay],
                () => ({ hasUnread: e$.Ay.hasUnread(e), mentionCount: e$.Ay.getMentionCount(e) }),
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
        i = (0, A.bG)([iR.Ay], () => iR.Ay.getCurrentSidebarChannelId(n) === n, [n]),
        a = (0, A.bG)([ek.A], () => ek.A.getChannel(n)?.getGuildId(), [n]);
    return (0, l.jsx)(ns.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nj.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? iT.A.closeChannelSidebar(n)
                : iT.A.openChannelAsSidebar({
                      guildId: a,
                      channelId: n,
                      baseChannelId: n,
                      details: { type: iS.kk.CHAT },
                  });
        },
        selected: i,
        badge: t,
    });
}
var iO = t(604681),
    iM = t(284252);
function iP(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([iR.Ay], () => iR.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        i = (0, A.bG)([nL.A], () => (nL.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        a = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(ns.In, {
        onClick: iO.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nj.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iM.q : void 0,
        selected: t,
        badge: a,
    });
}
var iD = t(967198);
function ik(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([iR.Ay], () => iR.Ay.getSection(n)),
        i = (0, A.bG)([iD.A], () => iD.A.getGuildId()),
        s = t === er.YvQ.MEMBERS;
    return (0, l.jsx)(ns.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: T.n,
        onClick: function () {
            eS.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                iO.A.toggleMembersSection();
        },
        selected: s,
    });
}
var iU = t(187360),
    iG = t(366605),
    iw = t(945830);
let iF = function (e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        [i, a] = s.useState(!1),
        r = (0, tQ.aL)(),
        d = s.useRef(null),
        o = s.useCallback(() => {
            t || a((e) => !e);
        }, [t]),
        c = (0, A.bG)([e$.Ay], () => e$.Ay.hasUnreadPins(n.id), [n]),
        u = s.useMemo(() => (c ? { type: "unread", position: "bottom" } : void 0), [c]);
    function h(e) {
        e?.shiftKey || r.dispatch(er.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                et._.subscribe(er.jej.TOGGLE_CHANNEL_PINS, o),
                () => {
                    et._.unsubscribe(er.jej.TOGGLE_CHANNEL_PINS, o);
                }
            ),
            [o],
        ),
        (0, l.jsx)(tT.Y, {
            targetElementRef: d,
            shouldShow: i,
            animation: tT.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => a(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(iw.A, { ...e, onJump: h, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(ns.In, {
                    ...e,
                    ref: d,
                    onClick: o,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iG.t,
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
var iH = t(306788),
    iB = t(863922),
    iV = t(822074),
    iW = t(521732);
function iz(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, A.bG)([iV.A], () => iV.A.shouldShowTopicsBar());
    return (0, l.jsx)(ns.Ay.Icon, {
        icon: iH.K,
        onClick: function () {
            en.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iW.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iB.Oz)();
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var iY = t(885574),
    iK = t(947094),
    iq = t(919577),
    iX = t(207777),
    i$ = t(422844),
    iQ = t(435470),
    iZ = t(892110),
    iJ = t(45494);
function i0(e) {
    let { channel: n } = e,
        t = (0, iQ.S4)(n),
        i = (0, A.bG)([iK.A], () => iK.A.hasHidden(n.id)),
        s = (0, iZ.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, i$.R)(n.id),
        o = (0, A.bG)(
            [iX.A, iJ.A],
            () => !!(iX.A.getThreadIds(n.id, a, r, d).length > 0) || !!(iJ.A.getThreads(n.id, a, r, d).length > 0),
            [n.id, a, r, d],
        ),
        c = n.isMediaChannel();
    if (!t || s || (c && o)) return null;
    let u = i
        ? c
            ? z.intl.string(z.t["WP/IE1"])
            : z.intl.string(z.t.zfq9V4)
        : c
          ? z.intl.string(z.t.p60yF1)
          : z.intl.string(z.t.SNOqYC);
    return (0, l.jsx)(ns.In, {
        tooltip: u,
        icon: iY.CircleInformationIcon,
        onClick: function () {
            return iq.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var i1 = t(290136),
    i2 = t(975571),
    i5 = t(490094);
function i6() {
    let e = z.intl.string(i5.default.pdipXI);
    return (0, l.jsx)(ns.In, {
        tooltip: e,
        icon: i1.CircleQuestionIcon,
        onClick: function () {
            window.open(i2.A.getArticleURL(er.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var i9 = t(742589),
    i7 = t(43105),
    i3 = t(428689),
    i4 = t(978940),
    i8 = t(387755),
    le = t(730852),
    ln = t(641703),
    lt = t(379848),
    li = t(753727),
    ll = t(625075),
    ls = t(222692),
    la = t(442353),
    lr = t(470710),
    ld = t(186111),
    lo = t(916546),
    lc = t(994500),
    lu = t(977997),
    lh = t(360469),
    lA = t(49999),
    lm = t(731854);
class lg extends s.PureComponent {
    iconRef = s.createRef();
    componentDidMount() {
        et._.subscribe(er.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        et._.unsubscribe(er.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: i,
                isBlocked: s,
                channel: a,
                mode: r,
                isProvisional: d,
            } = this.props;
        if (n || (t && r === er._Of.VOICE)) return null;
        let o = a.isManaged(),
            c = null,
            u = !1;
        return (
            d
                ? ((u = !0), (c = z.intl.string(z.t.izMR7o)))
                : lo.Ay.supports(lm.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : ll.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(ns.Ay.Icon, { icon: i3.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: i,
                isBlocked: s,
                channel: a,
                dismissibleContentTypes: r,
                isProvisional: d,
            } = this.props;
        if (n) return null;
        let o = a.isManaged(),
            c = !1;
        d
            ? ((c = !0), (e = z.intl.string(z.t.izMR7o)))
            : i
              ? ((e = o ? z.intl.string(z.t.LW2Ghr) : z.intl.string(z.t.rF7lN5)), (c = !0))
              : s
                ? ((e = z.intl.string(z.t.PHzjvX)), (c = !0))
                : (e = t
                      ? o
                          ? z.intl.string(z.t.S0W8Z5)
                          : z.intl.string(z.t.fdEeb5)
                      : o
                        ? z.intl.string(z.t.S0W8Z5)
                        : z.intl.string(z.t.focH1t));
        let u = (0, l.jsx)(ns.Ay.Icon, {
            ref: this.iconRef,
            icon: i4._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lt.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(i7.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lh.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lA.i.USER_DISMISS),
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
        function a() {
            return i8.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, la.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        le.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tf.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lA.i.AUTO }),
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
        (0, la.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, ls.A)();
    };
}
function lx(e) {
    let { channel: n } = e,
        t = (0, li.A)(),
        i = (0, A.bG)([nc.A], () => nc.A.getMode(n.id)),
        s = (0, A.bG)([lu.A], () => lu.A.isInChannel(n.id)),
        a = (0, A.bG)([L.Ay], () => L.Ay.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, A.cf)([lr.A], () => ({
            callActive: lr.A.isCallActive(n.id),
            callUnavailable: lr.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([lc.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !lc.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && lc.A.isBlocked(o),
        })),
        h = (0, A.bG)([J.default], () => J.default.getUser(o)),
        g = (0, tQ.Us)(),
        x = [],
        p = (0, ln.A)(n.id),
        f = (0, A.bG)([ld.A], () => ld.A.hasLayers());
    return (p && !f && x.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lg, {
              channel: n,
              mode: i,
              inCall: s,
              callActive: r,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: d,
              notFriend: c,
              isBlocked: u,
              appContext: g,
              dismissibleContentTypes: x,
              useReducedMotion: a,
          });
}
var lp = t(452015),
    lf = t(765178),
    lI = t(231483),
    lb = t(544231),
    lj = t(338510),
    lC = t(151119),
    lE = t(278941),
    ly = t(665909),
    lv = t(327337);
let lN = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lj.u)(n.id),
        a = (0, lC.S)(n.id),
        r = (0, lE.e)(n.id),
        d = (0, g.useHasAnyModalOpen)(),
        o = (0, A.bG)([ld.A], () => ld.A.hasLayers()),
        c = s.useCallback(
            () => (a ? z.intl.string(z.t["16QyDv"]) : null != r ? z.intl.string(z.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, m] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != i &&
            (lf.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lb.xi)(n.id, [r.id]);
            }, 5e3),
            (0, ly.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: ly.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (lf.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lb.bg)(n.id);
                }, 5e3));
    }, [n, r, i, a]),
        (0, F.Ay)(() => {
            null != i &&
                (0, ly.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: ly.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && m(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, lb.xi)(n.id, [r.id]),
            null != i &&
                ((0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("456510"),
                            t.e("506627"),
                            t.e("770940"),
                            t.e("302033"),
                            t.e("819959"),
                        ]).then(t.bind(t, 131882));
                        return (t) => {
                            let { onClose: s, transitionState: a } = t;
                            return (0, l.jsx)(e, {
                                otherUserId: n.getRecipientId(),
                                channelId: n.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: s,
                                transitionState: a,
                            });
                        };
                    },
                    { modalKey: lv.V },
                ),
                (0, ly._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: ly.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != r,
                }));
    }, [r, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(ns.Ay.Icon, {
                  icon: lI.ShieldIcon,
                  onClick: x,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var l_ = t(262763),
    lT = t(406704),
    lS = t(576705);
let lR = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, li.A)(),
        i = (0, A.bG)([lu.A], () => lu.A.isInChannel(n.id)),
        a = (0, A.bG)([lu.A], () => !u().isEmpty(lu.A.getVoiceStatesForChannel(n.id))),
        r = (0, A.bG)([lS.A], () => lS.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, im.A)(n.id),
        o = (0, lT.Id)(n),
        { enabled: c } = lT.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            l_.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: d, locked: !1 });
        }, [n, i, d]);
    return (s.useEffect(() => {
        if (c)
            return (
                et._.subscribe(er.jej.CALL_START, h),
                () => {
                    et._.unsubscribe(er.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !t && !i && r && o && n.isVocalThread())
        ? (0, l.jsx)(ns.Ay.Icon, {
              icon: i4._,
              onClick: h,
              tooltip: a ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lL = t(812991),
    lO = t(47675),
    lM = t(999291);
function lP() {
    let [e, n] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            function e() {
                n(window.innerWidth >= 1132);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
function lD(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, A.bG)([iR.Ay], () => iR.Ay.getSection(n.id, n?.isDM())),
        s = (0, lM.Ay)(n.getRecipientId()),
        a = lP(),
        r = i === er.YvQ.PROFILE && a;
    return (0, l.jsx)(ns.In, {
        disabled: !a || t,
        tooltip: !a || t ? z.intl.string(z.t.YneDgF) : r ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lL.n,
        onClick: function () {
            (0, lO.am)({ displayProfile: s, isProfileOpen: !r }), iO.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let lk = {};
class lU extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lk[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lk[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lk;
    }
}
let lG = new lU(nw.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lk[t];
        return null == i ? ((lk[t] = new Set()), lk[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lk[n.id] && !n.unavailable && (delete lk[n.id], !0);
    },
});
var lw = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lF = t(376943),
    lH = t(394953),
    lB = t(683063),
    lV = t(403581),
    lW = t(241541),
    lz = t(709066),
    lY = t(87664),
    lK = t(247676),
    lq = t(695526);
t(667532);
var lX = t(403362);
t(696101);
let l$ = [],
    lQ = es.Ay.getEnableHardwareAcceleration();
function lZ(e) {
    let { user: n, channel: i, status: a, activities: r } = e,
        d = (0, A.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        o = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, A.bG)([$.A], () => $.A.isMobileOnline(n.id)),
        u = (0, A.bG)([lc.A], () => lc.A.getNickname(n.id)),
        h = (0, lY.A)(n.id),
        m = s.useRef(null);
    function g(e) {
        (0, b.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("866038"),
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
                t.e("823427"),
                t.e("529422"),
                t.e("309291"),
                t.e("307059"),
                t.e("528864"),
            ]).then(t.bind(t, 778595));
            return (t) => (0, l.jsx)(e, { ...t, user: n, channel: i });
        });
    }
    function x() {
        let e = `@${el.Ay.getUserTag(n, { decoration: "never" })}`,
            t = `<@${n.id}>`;
        et._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            et._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: t }),
            R.A.startTyping(i.id);
    }
    let p = (0, P.r)({ user: n }),
        [f, I] = s.useState(!1);
    return (0, l.jsx)(K.A, {
        targetElementRef: m,
        user: n,
        channelId: i.id,
        position: E.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: x,
        shouldShow: f,
        onRequestClose: () => I(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...A } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: m,
                    user: n,
                    currentUser: o,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: lQ,
                    isTyping: d,
                    status: a,
                    activities: r,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: g,
                    selected: f,
                    isMobile: c,
                    nick: u,
                    nameplate: p,
                    onClick: (e) => {
                        e.shiftKey ? x?.() : I((e) => !e);
                    },
                    onMouseDown: (e) => {
                        f ? e.stopPropagation() : s?.(e);
                    },
                    ...A,
                },
                n.id,
            );
        },
    });
}
function lJ(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function l0(e) {
    let { channel: n } = e,
        t = J.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: a } = (0, M.Ay)(O.A.MEMBER_LIST),
        { listItems: r } = (0, A.bG)(
            [lc.A, J.default, $.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = J.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(lX.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lc.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: $.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: $.A.getActivities(e.id) ?? l$,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: l$ });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            lJ,
        );
    s.useEffect(() => {
        en.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let d = i && r.every((e) => e.user.isStaff()),
        o = (0, g.useHasAnyModalOpen)(),
        c = (0, lK.A)({ useNitroCapExperiment: !0 }),
        h = (0, lq.qH)(),
        m = n.isMultiUserDM() && "entitled" === h && c > er.wLU;
    return (0, l.jsx)(M.f5, {
        value: a,
        children: (0, l.jsx)("div", {
            className: eo.kL,
            children: (0, l.jsx)("aside", {
                className: eo.yg,
                children: (0, l.jsxs)(th.Ip, {
                    className: eo.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(D.A, {
                            className: eo.lL,
                            children: [
                                m
                                    ? (0, l.jsx)(lB.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: eo.BY,
                                              children: [
                                                  (0, l.jsx)(lV.t, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                      className: eo.K4,
                                                      "aria-hidden": !0,
                                                  }),
                                                  `${z.intl.string(z.t["9Oq93m"])}\u{2014}${r.length} `,
                                              ],
                                          }),
                                      })
                                    : `${z.intl.string(z.t["9Oq93m"])}\u{2014}${r.length} `,
                                d && (0, l.jsx)(lz.A, { type: lz.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lZ,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        r.length < c
                            ? (0, l.jsx)("div", {
                                  className: eo.Uf,
                                  children: (0, l.jsx)(lp.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: lW.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !o,
                                      entryPointType: lp.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var l1 = t(322338),
    l2 = t(898029),
    l5 = t(36537);
function l6() {
    return (0, l.jsx)("div", {
        className: l5.zt,
        children: (0, l.jsx)("header", {
            className: l2.wL,
            children: (0, l.jsxs)("div", {
                className: l2.TN,
                role: "status",
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: l2.zp,
                        children: (0, l.jsx)(x.y, {
                            type: x.y.Type.SPINNING_CIRCLE,
                            className: l2.u1,
                            itemClassName: l2.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var l9 = t(790535),
    l7 = t(163328),
    l3 = t(425557),
    l4 = t(270003),
    l8 = t(150934),
    se = t(452027),
    sn = t(95477),
    st = t(281595),
    si = t(465532),
    sl = t(579872),
    ss = t(119031),
    sa = t(408018),
    sr = t(273754),
    sd = t(822610),
    so = t(915089),
    sc = t(314307),
    su = t(636922),
    sh = t(931664),
    sA = t(631576),
    sm = t(885386),
    sg = t(232835),
    sx = t(522602),
    sp = t(806150),
    sf = t(518960),
    sI = t(753738);
function sb(e, n) {
    return { type: e, message: n ?? null };
}
function sj(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sC = t(659617),
    sE = t(474078),
    sy = t(636537),
    sv = t(152367),
    sN = t(147087);
async function s_(e) {
    try {
        let n = await sy.Bo.post({
            url: er.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, sy.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var sT = t(55294),
    sS = t(143161),
    sR = t(909833);
let sL = nh.oU.THREAD_CREATION;
function sO(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        { analyticsLocations: a } = (0, M.Ay)(O.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(M.f5, {
              value: a,
              children: (0, l.jsx)(eQ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: sS.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: il.C.FirstThreadMessage }),
                          (0, l.jsx)(sM, { parentChannelId: n }),
                          (0, l.jsx)(sP, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function sM(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = il.A.getThreadSettings(n),
                t = il.A.getDraft(n, il.C.FirstThreadMessage).trim(),
                i = sx.A.getUploads(n, il.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sl.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, t8.bA)(n);
                      },
                  })
                : (0, t8.bA)(n);
        }, [n]);
    return (0, l.jsxs)(ns.Ay, {
        toolbar: (0, l.jsx)(ns.Ay.Icon, { icon: tL.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(ns.Ay.Icon, { icon: l7.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(ns.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sP(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: a } = e,
        d = (0, A.bG)([L.Ay], () => L.Ay.messageGroupSpacing),
        o =
            ((n = s.useContext(eQ.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, A.bG)([il.A], () => il.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        l((e) => ({ ...e, ...t })), si.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(t, i),
        { textAreaState: m, setTextAreaState: g } = (function (e, n) {
            let [t, i] = s.useState((0, sa.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = il.A.getDraft(e.id, il.C.FirstThreadMessage);
                        (0 === l.length || !0 === t) && i((0, sa.ur)(l)), n(il.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        t(!0),
                        il.A.addChangeListener(t),
                        () => {
                            il.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        x = (0, sC.EN)(t),
        {
            isGeneratingAI: p,
            enableAIFeatures: f,
            getThreadNameInputAccessory: I,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    updateThreadSettings: i,
                    threadSettings: a,
                    textAreaState: r,
                } = e,
                [d, o] = s.useState(!1),
                [c, u] = s.useState(!1),
                h = (0, sN.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = sg.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await s_(e);
                                null != n && "" !== n.trim() && i({ name: n });
                            }
                        } finally {
                            o(!1);
                        }
                    }
                }, [n.id, t, i, h, r.textValue]);
            s.useEffect(() => {
                u(!1), o(!1), n.id === a.parentChannelId && t !== a.parentMessageId && i({ name: "" });
            }, [t, i, n.id, a.parentChannelId, a.parentMessageId]),
                s.useEffect(() => {
                    (null != a.name && "" !== a.name.trim()) || c || (h && null != t && (u(!0), A()));
                }, [n.id, t, i, a.name, c, h, A]);
            let m = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: sv.D,
                                onClick: A,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: d,
                            };
                    },
                    [h, A, d, t, r.textValue],
                ),
                g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(nx.K, {
                                      icon: sv.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: A,
                                      disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                      loading: d,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, d, t, r.textValue, A],
                );
            return {
                isGeneratingAI: d,
                generateAIName: A,
                enableAIFeatures: h,
                renderAiGenerateButton: g,
                getThreadNameInputAccessory: m,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: m }),
        {
            nameError: b,
            messageError: j,
            submit: C,
            submitting: E,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    textAreaState: a,
                    location: r,
                    enableAIFeatures: d,
                } = e,
                [o, c] = s.useState(null),
                [u, h] = s.useState(null),
                [A, m] = s.useState(!1),
                g = (0, sT.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: r,
                    onThreadCreated: t8.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: o,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        m(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = sh.A.getStickerPreview(n.id, sL.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sx.A.getUploads(n.id, il.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(o ? sb(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sb(0, z.intl.string(z.t.kesTVT)) : null),
                            o || u)
                        )
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, sp.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sL,
                            channel: null == t ? n : null,
                        });
                        if (!x) return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, l, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), sb(1, (0, sI.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sb(2, z.intl.string(z.t.uXA573)));
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, sA.x5)(n.id, sL.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [g, a.textValue, i.name, t, n, A, d],
                ),
                submitting: A,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: x,
            textAreaState: m,
            location: a,
            enableAIFeatures: f,
        }),
        y = (0, sC.Iy)(c, x) ? l3.t : l7.y;
    return (0, l.jsx)("div", {
        className: sS.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, l.jsx)("div", {
            className: r()(sS.Og, `group-spacing-${d}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: sS.Zd,
                children: [
                    (0, l.jsx)(th.Ip, {
                        className: sS.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sS.bv,
                            children: [
                                (0, l.jsxs)(sc.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(sR.P0, sS.P0),
                                            children: (0, l.jsx)(y, { className: sR.Kk }),
                                        }),
                                        (0, l.jsxs)(l4.n, {
                                            children: [
                                                (0, l.jsx)(sk, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: b,
                                                    disabled: E,
                                                    isGeneratingAI: p,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: I,
                                                }),
                                                (0, l.jsx)(sD, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: x,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sG, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sS.Eh,
                        children: [
                            (0, l.jsx)(sU, {
                                parentChannel: t,
                                textAreaState: m,
                                setTextAreaState: g,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(ss.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sS.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sD(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        a = (0, sC.Iy)(t, s),
        r = (0, l.jsx)(l8.S, {
            disabled: s === sC.jk.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === sC.jk.Disabled
        ? null
        : (0, l.jsx)(se.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: a ? z.intl.string(z.t.EWXycz) : void 0,
              children: r,
          });
}
function sk(e) {
    let {
            parentChannel: n,
            parentMessageId: t,
            threadSettings: i,
            updateThreadSettings: s,
            error: a,
            disabled: r,
            isGeneratingAI: d,
            enableAIFeatures: o,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = sj(a, { content: u }),
        A = (0, sC.l1)(n, t),
        m = null != t && !o,
        g = (0, so.GV)(),
        x = o ? z.intl.string(z.t["Nb2/RE"]) : "" !== A ? A : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sn.k, {
        label: z.intl.string(m ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: g,
        placeholder: x,
        maxLength: er.Ign,
        onChange: function (e) {
            s({ name: (0, sE.A)(e, !1) }), "" !== e ? R.A.startTyping(n.id) : R.A.stopTyping(n.id);
        },
        onBlur: function () {
            let e = (0, sE.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || d,
    });
}
function sU(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: a, error: d } = e,
        [o, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        m = s.useCallback(() => c(!1), []),
        g = s.useCallback(
            (e, t, l) => {
                si.A.saveDraft(n.id, t, il.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? R.A.startTyping(n.id) : "" === t && R.A.stopTyping(n.id),
                            { textValue: t, richValue: l }
                        ),
                    );
            },
            [n.id, i],
        ),
        x = s.useCallback(
            (e) => {
                let { value: n, uploads: t, stickers: i } = e;
                return a(n, i, t);
            },
            [a],
        );
    (0, eQ.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, eQ.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: m });
    let p = (0, A.bG)([lS.A], () => lS.A.can(er.xBc.ATTACH_FILES, n)),
        f = sj(d, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sd.A, { channelId: n.id, type: sL, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sS.xN, children: (0, l.jsx)(st.U, { error: f }) }),
            (0, l.jsx)(sr.Ay, {
                type: sL,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sS.gM, sS.Yy),
                innerClassName: r()(sS.SL, { [sS.cr]: null != f }),
                onFocus: h,
                onBlur: m,
                onChange: g,
                onSubmit: x,
                promptToUpload: sf.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sG(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, A.bG)([sg.A], () => (null == t ? null : sg.A.getMessage(n.id, t))),
        s = sm.hH.useSetting();
    return null != i
        ? (0, l.jsx)(su.A, {
              className: sS.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sw = t(305866),
    sF = t(707539),
    sH = t(702513),
    sB = t(272736);
function sV(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e4.ni)(n),
        d = s.useCallback(() => {
            i(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, sF.D3)("Popout"), i(!t);
        }, [t]);
    return (0, l.jsx)(tT.Y, {
        targetElementRef: a,
        animation: tT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: t,
        onRequestClose: d,
        renderPopout: function () {
            return (0, l.jsx)(sw.l, {
                children: (0, l.jsx)(sH.A, { className: sB.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ns.In, {
                ...e,
                ref: a,
                className: sB.Kk,
                onClick: o,
                icon: l7.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sW = t(40389),
    sz = t(148494),
    sY = t(56562);
function sK(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(tT.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tT.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(sq, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ns.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nJ.MoreHorizontalIcon,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function sq(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tM.A)(n),
        a = (0, tU.A)(n),
        r = (0, tH.A)(n.id),
        d = (0, tF.A)(n),
        o = (0, tz.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, tP.A)(n),
        h = (0, tD.A)(n),
        m = (0, tk.A)(n, "Toolbar Overflow"),
        g = (0, tG.A)(n),
        x = (0, sW.A)(n),
        p = (0, tW.A)(n),
        f = (0, tw.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(tR.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      sz.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: sY.vx.INSTANT });
                  },
              })
            : null,
        b = sm.SY.useSetting(),
        j = (0, A.bG)([lu.A], () => !u().isEmpty(lu.A.getVoiceStatesForChannel(n.id))),
        C = (0, A.bG)([ek.A], () => null != n.parent_id && ek.A.getChannel(n.parent_id)?.type === er.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(tS.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tR.rX, { children: [m, x] }),
            (0, l.jsxs)(tR.rX, {
                children: [
                    I,
                    d,
                    g,
                    r,
                    !b || j || C
                        ? null
                        : (0, l.jsx)(tR.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, t8.JA)(n);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(tR.rX, { children: [p, s, a, h] }),
            (0, l.jsxs)(tR.rX, { children: [c, o] }),
        ],
    });
}
var sX = t(332456),
    s$ = t(973854),
    sQ = t(62502);
function sZ(e) {
    var n;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, A.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, A.bG)([n3.A], () => n3.A.getGuild(o?.getGuildId())),
        h = (0, tb.Ay)(o),
        m = (0, ty.Uf)(o);
    (n = o),
        (i = (0, A.bG)([lu.A], () => null != n && !u().isEmpty(lu.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nw.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tY.N9)(n, { source: t3.H9.VOICE_AUTO_OPEN }));
        }, [i, n]);
    let g = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || g.current) return;
            g.current = !0;
            let e = (0, sX.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, s$.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    if (null != m) return (0, l.jsx)(tv.A, { guild: c, channelId: m });
    let x = (0, l.jsx)(ii, { channel: o, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: o, draftType: il.C.ChannelMessage }),
            (0, l.jsx)(ns.Ay, {
                toolbar: x,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tC.zF)({
                    channel: o,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, b.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("955557"),
                                t.e("947502"),
                                t.e("965789"),
                                t.e("584615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: o });
                        });
                    },
                    handleClick: function () {
                        null != o && (0, tY.iN)(o.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: sQ.T,
                children: (0, l.jsx)(tj.A, { channel: o, guild: c, chatInputType: nh.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sJ = t(210714),
    s0 = t(402860),
    s1 = t(707554),
    s2 = t(140735),
    s5 = t(590180),
    s6 = t(32206),
    s9 = t(372320),
    s7 = t(562153),
    s3 = t(945810);
let s4 = (0, s3.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s8(e) {
    return s4.useConfig({ location: e }).enabled;
}
var ae = t(215530),
    an = t(454719),
    at = t(736653),
    ai = t(311016),
    al = t(480335),
    as = t(713517),
    aa = t(397562),
    ar = t(183555),
    ad = t(718019),
    ao = t(461116),
    ac = t(915614),
    au = t(308244),
    ah = t(743987),
    aA = t(900179),
    am = t(946356),
    ag = t(465829),
    ax = t(35241),
    ap = t(587168),
    af = t(442228),
    aI = t(744808);
let ab = (0, s3.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var aj = t(827428);
function aC(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function aE(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: a } = e,
        { showButton: r } = ab.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !r) return null;
    function d() {
        a(), (0, lO.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
    }
    if (s)
        return (0, l.jsx)("div", {
            className: aj.lS,
            children: (0, l.jsx)(p.$, {
                variant: "secondary",
                size: "md",
                fullWidth: !0,
                text: z.intl.string(z.t["+Xp3hq"]),
                onClick: d,
            }),
        });
    let o = r
        ? (0, l.jsx)("div", {
              className: aj.qr,
              children: (0, l.jsx)(ng.D, {
                  onClick: d,
                  className: aj.wC,
                  children: (0, l.jsx)(y.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: aj.xQ, children: [(0, l.jsx)(aI.A, { frame: i, filterLayer: aC }), o] })
        : o;
}
var ay = t(518477),
    av = t(996988),
    aN = t(207634),
    a_ = t(561419),
    aT = t(396095);
function aS(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        a = __OVERLAY__ || !(0, ai.A)(n.id),
        d = (0, lM.Ay)(n.id),
        o = (0, at.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        h = (0, ar.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, aa.A)(u, d, ay.R7.SIDEBAR);
    let A = s.useRef(null),
        { isHoveringOrFocusing: m, isHovering: g } = (0, as.A)(A);
    function x() {
        (0, s0.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(M.f5, {
        value: u,
        children: (0, l.jsx)(ar.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsxs)(am.A, {
                ref: A,
                user: n,
                displayProfile: d,
                themeType: av.d.SIDEBAR,
                themeOverride: o,
                className: i ? r()(a_.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(th.d_, {
                        className: i ? a_.BE : void 0,
                        children: [
                            (0, l.jsx)(ap.A, { children: (0, l.jsx)(ax.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: a_.wx,
                                children: [
                                    (0, l.jsx)(ac.A, {
                                        user: n,
                                        displayProfile: d,
                                        themeType: av.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !m,
                                    }),
                                    (0, l.jsx)(ad.A, {
                                        user: n,
                                        displayProfile: d,
                                        channelId: t.id,
                                        avatarSize: aN.T[av.d.SIDEBAR].avatarSize,
                                        onOpenProfile: a ? void 0 : x,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: aT.rf,
                                children: [
                                    (0, l.jsx)(ag.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: s7.Ay.getName(null, t.id, n),
                                        onClickName: a ? void 0 : x,
                                        pronouns: d?.pronouns,
                                        trailing: (0, l.jsx)(ao.A, {
                                            displayProfile: d,
                                            themeType: av.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(af.A, {
                                                      userId: n.id,
                                                      userBio: d?.bio,
                                                      isHoveringOrFocusing: m,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(aA.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(ah.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(am.A.Overlay, {
                                              className: aT.Lw,
                                              children: [
                                                  d?.bio != null &&
                                                      "" !== d.bio &&
                                                      (0, l.jsx)(aA.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(au.A, {
                                                              userBio: d?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: m,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(aA.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(ah.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !a &&
                        (0, l.jsx)(aE, {
                            handleOpenProfile: x,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    d?.profileEffect != null && (0, l.jsx)(al.A, { skuId: d?.profileEffect?.skuId, isHovering: g }),
                ],
            }),
        }),
    });
}
var aR = t(331322),
    aL = t(249790),
    aO = t(254828),
    aM = t(783123),
    aP = t(966430);
function aD(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: a } = e,
        r = (0, lM.Ay)(n.id),
        d = (0, at.Ay)(),
        o = (0, A.bG)([lc.A], () => lc.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, M.Ay)(o ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        u = (0, ar.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, aa.A)(c, r, ay.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(M.f5, {
        value: c,
        children: (0, l.jsx)(ar.of, {
            value: u,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(am.A, {
                ref: h,
                user: n,
                displayProfile: r,
                themeType: av.d.SIDEBAR,
                themeOverride: d,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(th.d_, {
                    children: (0, l.jsxs)("div", {
                        className: aP.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: aP.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: aP.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: aP.N1,
                                        children: [
                                            (0, l.jsx)(aL.A, { user: n }),
                                            (0, l.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(o ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: s7.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(aR.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(aM.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    a(),
                                                        (0, lO.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        });
                                                },
                                            }),
                                            (0, l.jsx)(aO.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    a(),
                                                        (0, lO.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        });
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
var ak = t(74445),
    aU = t(717421),
    aG = t(31956),
    aw = t(673843),
    aF = t(561794),
    aH = t(321191),
    aB = t(679492),
    aV = t(439053),
    aW = t(312381),
    az = t(657538),
    aY = t(984545),
    aK = t(193738),
    aq = t(133385),
    aX = t(983495),
    a$ = t(695366),
    aQ = t(922590),
    aZ = t(821269),
    aJ = t(93246),
    a0 = t(351906),
    a1 = t(383199),
    a2 = t(559506),
    a5 = t(361311),
    a6 = t(931481),
    a9 = t(791556),
    a7 = t(501193),
    a3 = t(383448),
    a4 = t(646986),
    a8 = t(243166),
    re = t(123292),
    rn = t(840411);
let rt = (0, s3.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var ri = t(666810),
    rl = t(394300),
    rs = t(575593),
    ra = t(44120),
    rr = t(75678),
    rd = t(56815),
    ro = t(317560),
    rc = t(99161),
    ru = t(661492),
    rh = t(212387),
    rA = t(662349),
    rm = t(479026),
    rg = t(636374),
    rx = t(699976),
    rp = t(202541),
    rf = t(733484),
    rI = t(880465);
function rb(e) {
    let {
            sku: n,
            wishlistOwner: t,
            wishlistId: i,
            style: a,
            skuPreviewStyle: d,
            skuAssetHoverClassName: o,
            disableRiveHover: c,
            onDetailsClick: u,
            onPurchaseClick: h,
            renderChildren: A,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, ar.NJ)(),
        g = s8("DMSidePanelWishlistItemCard") ? rx.y.SIZE_78 : rx.y.SIZE_90,
        x = rx.Z[g],
        p = s.useCallback(() => {
            m({
                action: ay.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                u();
        }, [n, i, u, m]),
        f = s.useCallback(() => {
            m({
                action: ay.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [h, n.id, i, n.productLine, m]),
        {
            onBodyClick: I,
            onOverlayClick: b,
            showOverlayButton: j,
            routesToGift: C,
            label: E,
            icon: y,
        } = (0, rg.P)({ wishlistOwner: t, isOwned: !1, shortText: !0, onDetailsClick: p, onPurchaseClick: f }),
        [v, N] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: rf.kL,
        children: (0, l.jsxs)(rh.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: c,
            sku: n,
            user: t,
            spec: x,
            cardStyle: r()(rf.Nr, a),
            skuPreviewStyle: r()(rf.ho, d),
            skuAssetClassName: v ? o : void 0,
            onClick: I,
            "aria-label": C ? (0, ru.T)(n) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, ru.T)(n) }),
            onHoverOrFocusChange: N,
            children: [
                j &&
                    (0, l.jsx)(rA.A, {
                        spec: x,
                        onClick: b,
                        isHoveringOrFocusing: v,
                        label: E,
                        icon: E.length < 6 ? y : void 0,
                    }),
                A?.(j && v),
            ],
        }),
    });
}
function rj(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        { analyticsLocations: r } = (0, M.Ay)(
            ...(i ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        d = s.useCallback(() => {
            (0, rc.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: rp.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: r },
            );
        }, [n, t, r]),
        o = s.useCallback(() => {
            (0, ro.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: rp.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [n.id, n.applicationId, t, r]);
    return (0, l.jsx)(rb, {
        sku: n,
        analyticsLocations: r,
        wishlistOwner: t,
        onDetailsClick: o,
        onPurchaseClick: d,
        ...a,
    });
}
function rC(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        d = s.useCallback(() => {
            (0, ra.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: rp.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        o = (0, rm.e)({ sku: n, giftRecipient: t, giftingOrigin: rp.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                r()(rf.ML, {
                    [rf.M]: n?.tenantMetadata?.collectibles?.type === rs.R.AVATAR_DECORATION,
                    [rf.Hm]: n?.tenantMetadata?.collectibles?.type === rs.R.PROFILE_EFFECT,
                    [rf.hH]: n?.tenantMetadata?.collectibles?.type === rs.R.PROFILE_FRAME,
                    [rf.qF]: n?.tenantMetadata?.collectibles?.type === rs.R.NAMEPLATE,
                    [rf.l2]: n?.tenantMetadata?.collectibles?.type === rs.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(rb, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: o,
        onPurchaseClick: d,
        skuPreviewStyle: c,
        ...a,
    });
}
function rE(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: a, style: d, ...o } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, rr.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: rp.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
                ...(0, rd.Dv)(e, !0, "dm_side_panel_wishlist_item_card"),
            });
        }, [n.id, t, i]),
        u = a === aF.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(rb, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: a,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: r()(rI.MO, { [rf.F5]: u }),
        style: d,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: r()(rf.fi, { [rf.sp]: e }),
                      children: (0, l.jsx)(y.E, {
                          className: r()(rf.p7, { [rf.SW]: h.length >= 10, [rf.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...o,
    });
}
function ry(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rj, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(rC, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(rE, { sku: n, ...t });
        default:
            return null;
    }
}
var rv = t(158045),
    rN = t(535089),
    r_ = t(815637);
function rT(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: a, isNitroRecEnabled: r } = e,
        { analyticsLocations: d } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: o } = (0, ar.NJ)(),
        c = (0, s.useId)(),
        u = (0, s.useMemo)(() => n ?? [], [n]),
        h = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && o({ wishlistId: n, action: t, productLines: i });
            },
            [o],
        ),
        A = (0, s.useMemo)(() => {
            let e = u.slice(0, 3).map((e) => ({ item: e, source: aF.uS.WISHLIST }));
            if (r && e.length < 3) {
                let n = u.some((e) => rv.Ay.isPremiumSku(e.skuId));
                if (!rv.Ay.isPremiumAtLeast(t.premiumType, rp.PremiumTypes.TIER_2) && !n) {
                    let n = rl.A.fromSKU((0, rn.rI)());
                    null != n && e.push({ item: n, source: aF.uS.POPULAR });
                }
            }
            return e;
        }, [u, r, t.premiumType]),
        m = (0, s.useMemo)(
            () =>
                new Set(
                    A.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [A],
        ),
        g = (0, rN.A)({ wishlistId: a ?? null, onAction: h, productLines: m }),
        x = (0, s.useMemo)(
            () =>
                A.map((e, n) => {
                    let { item: s, source: r } = e;
                    return null == s.sku
                        ? null
                        : (0, l.jsx)(
                              ry,
                              {
                                  sku: s.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: a,
                                  analyticsLocations: d,
                                  onViewWishlist: i,
                                  source: r,
                              },
                              s.skuId,
                          );
                }).filter(lX.Vq),
            [d, i, t, A, a],
        );
    return 0 === x.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": c,
              children: (0, l.jsxs)(am.A.Overlay, {
                  ref: g,
                  className: r_.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: r_.wx,
                          children: [
                              (0, l.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: z.intl.string(z.t["7lZ31J"]),
                              }),
                              u.length > 3 &&
                                  (0, l.jsx)(re.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(s1.F, { children: (0, l.jsx)("div", { className: r_.vY, children: x }) }),
                  ],
              }),
          });
}
function rS(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        a = rt.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (n || s.profileOwner.bot || ((null == t || 0 === t.length) && !a)) return null;
    let r = J.default.getCurrentUser()?.id,
        d = null != r && r !== s.profileOwner.id;
    return (0, l.jsx)(ri.h, {
        isGifting: d,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(rT, { ...s, unownedWishlistItems: t, isNitroRecEnabled: a }),
    });
}
function rR(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: a,
            isHoveringOrFocusing: r,
            isRedesignEnabled: d,
            onOpenProfile: o,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, A.cf)([lc.A], () => ({
            relationshipType: lc.A.getRelationshipType(n.id),
            originApplicationId: lc.A.getOriginApplicationId(n.id),
        })),
        h = (0, aQ.fi)(n.id),
        m = (0, aZ.q)({ userId: n.id }),
        g = (0, A.bG)([a0.A], () => a0.A.hidePersonalInformation),
        x = (0, A.bG)([aH.A], () => aH.A.getUserProfile(n.id)?.application),
        p = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, A.cf)([aH.A], () => ({ defaultWishlistId: aH.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: b } = (0, aF.fw)({ wishlistId: d ? f : void 0, userId: n.id });
    (0, aw.A)(I);
    let j = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: aT.rf,
        children: [
            (0, l.jsx)(a2.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: aT.pq,
                children: [
                    (0, l.jsx)(ag.Ay, {
                        user: n,
                        guildId: a.guild_id,
                        displayName: s7.Ay.getName(null, a.id, n),
                        onClickName: o,
                        displayNameTrailing: g
                            ? null
                            : (0, l.jsx)(a8.A, { userId: n.id, isVisible: r, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(ao.A, {
                            displayProfile: i,
                            themeType: av.d.SIDEBAR,
                            isRedesignEnabled: d,
                        }),
                    }),
                    d && (0, l.jsx)(a9.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            c === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(am.A.Overlay, {
                    children: (0, l.jsx)(a6.A, { user: n, channelId: a.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    am.A.Overlay,
                    {
                        children: (0, l.jsx)(a6.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(a3.A, { user: n }),
            i?.private &&
                (0, l.jsx)(am.A.Overlay, { children: (0, l.jsx)(a7.A, { username: s7.Ay.getName(null, a.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(am.A.Overlay, {
                    className: aT.Lw,
                    children: (0, l.jsx)(aA.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: a$.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aJ.T, { userId: n.id }),
                    }),
                }),
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(af.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: g,
                            isHoveringOrFocusing: r,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(aA.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(ah.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: aT.kR,
                children: [
                    d && p && (0, l.jsx)(az.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: o }),
                    (0, l.jsx)(a4.A, { user: n, currentUser: t, onOpenUserProfileModal: o }),
                    d
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  x?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(a1.A, {
                                          applicationId: x.id,
                                          commandIds: x.popularApplicationCommandIds,
                                          channel: a,
                                      }),
                                  m.length > 0 &&
                                      (0, l.jsx)(aA.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(a5.A, { applicationIds: m }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(am.A.Overlay, {
                              className: aT.Lw,
                              children: [
                                  !g &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(aA.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(au.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: r,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          x?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(a1.A, {
                                                  applicationId: x.id,
                                                  commandIds: x.popularApplicationCommandIds,
                                                  channel: a,
                                              }),
                                          m.length > 0 &&
                                              (0, l.jsx)(aA.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(a5.A, { applicationIds: m }),
                                              }),
                                          (0, l.jsx)(aA.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(ah.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    d &&
                        (0, l.jsx)(rS, {
                            profileOwner: n,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: b,
                            onClick: () => {
                                o?.({ tabSection: ay.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var rL = t(114212),
    rO = t(913453),
    rM = t(229187),
    rP = t(21241),
    rD = t(503062),
    rk = t(51943),
    rU = t(847374),
    rG = t(320448),
    rw = t(723200);
function rF(e) {
    let { section: n, header: t, items: i, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, ar.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? rU.a : rG._;
    return (0, l.jsxs)("section", {
        className: rw.uW,
        children: [
            (0, l.jsxs)(ng.D, {
                className: r()(rw.wx, rw.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    h(!u), u || (o({ action: "PRESS_SECTION", section: n }), d?.());
                },
                children: [
                    (0, l.jsxs)(S.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [t, " \u2014 ", i.length],
                    }),
                    (0, l.jsx)(A, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(rw.p_, a), children: i }),
        ],
    });
}
var rH = t(341278);
function rB(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, M.Ay)(),
        { context: s } = (0, ar.NJ)(),
        a = (0, tO.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, rO.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, l.jsxs)(am.A.Overlay, {
              className: rH.Lw,
              children: [
                  u &&
                      (0, l.jsx)(rF, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: rH.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  rk.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, n7.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(rP.A, { className: rH.yF }),
                  c &&
                      (0, l.jsx)(rF, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: rH.p_,
                          onExpand: () => (0, rM.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: rH.nC,
                                                children: [
                                                    (0, l.jsx)(rL.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(rL.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            rD.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, s0.openUserProfileModal)({
                                                        ...s,
                                                        userId: a.id,
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
function rV(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: a } = e,
        d = __OVERLAY__,
        o = (0, lM.Ay)(n.id),
        c = (0, at.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: m } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        g = (0, ar.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, aa.A)(m, o, ay.R7.SIDEBAR);
    let x = s.useRef(null),
        { isHoveringOrFocusing: p, isHovering: f } = (0, as.A)(x),
        I = (0, aB.fC)(),
        b = (0, s9.A)(o?.profileFrame?.skuId, "UserProfileSidebar");
    (0, aG.A)({ skuId: o?.profileFrame?.skuId, openedAt: u.current, context: g, analyticsLocations: m });
    let j = (0, aU.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, s0.openUserProfileModal)({ sourceAnalyticsLocations: m, hideRestrictedProfile: !0, ...g, ...e });
    }
    let E = o?.widgets != null && o.widgets.length > 0,
        { defaultWishlistId: y } = (0, A.cf)([aH.A], () => ({ defaultWishlistId: aH.A.getFirstWishlistId(n.id) })),
        { wishlist: v, isFetching: N } = (0, aF.fw)({ wishlistId: a ? void 0 : y, userId: n.id });
    (0, aw.A)(v);
    let _ = s.useMemo(() => (null == v ? null : v.items.filter((e) => !e.isOwned)), [v]);
    return (0, l.jsx)(M.f5, {
        value: m,
        children: (0, l.jsx)(ar.of, {
            value: g,
            openedAt: u.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(aB.Hl, {
                value: I,
                children: (0, l.jsxs)(am.A, {
                    ref: x,
                    user: n,
                    displayProfile: o,
                    themeType: av.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: a ? o?.profileFrame?.skuId : null,
                    className: a ? r()(a_.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: o?.private === !0,
                    children: [
                        o?.private === !0 && (0, l.jsx)(aW.A, {}),
                        null != I.interactionType && (0, l.jsx)(ak.animated.div, { style: j, className: a_.tB }),
                        (0, l.jsxs)(th.d_, {
                            className: r()(a && a_.BE, !a && null != b && a_.It),
                            children: [
                                (0, l.jsxs)(ap.A, {
                                    children: [
                                        (0, l.jsx)(aK.A, { user: n, themeType: av.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aY.A, { user: n }) : (0, l.jsx)(aq.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: a_.wx,
                                    children: [
                                        (0, l.jsx)(ac.A, {
                                            user: n,
                                            displayProfile: o,
                                            themeType: av.d.SIDEBAR,
                                            specOverrides: a
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !p,
                                            className: a_.vK,
                                        }),
                                        (0, l.jsx)(aV.A, { userId: n.id, className: a_.oR }),
                                        (0, l.jsx)(ad.A, {
                                            user: n,
                                            displayProfile: o,
                                            channelId: i.id,
                                            avatarSize: aN.T[av.d.SIDEBAR].avatarSize,
                                            onOpenProfile: d ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aX.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: av.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rR, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: o,
                                    channel: i,
                                    isHoveringOrFocusing: null == I.interactionType && p,
                                    isRedesignEnabled: a,
                                    onOpenProfile: d ? void 0 : C,
                                }),
                                !a &&
                                    E &&
                                    (0, l.jsx)("div", {
                                        className: a_.sJ,
                                        children: (0, l.jsx)(az.A, {
                                            user: n,
                                            widgets: o.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !a &&
                                    (0, l.jsx)("div", {
                                        className: a_.vS,
                                        children: (0, l.jsx)(rS, {
                                            profileOwner: n,
                                            unownedWishlistItems: _,
                                            wishlistId: y,
                                            isLoading: N,
                                            onClick: () => {
                                                C?.({ tabSection: ay.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != v,
                                        }),
                                    }),
                                !a && (0, l.jsx)(rB, { user: n, channelId: i.id }),
                            ],
                        }),
                        !d &&
                            (0, l.jsx)(aE, {
                                context: g,
                                analyticsLocations: m,
                                profileFrame: b,
                                handleOpenProfile: C,
                                isRedesignEnabled: a,
                            }),
                        o?.profileEffect != null && (0, l.jsx)(al.A, { skuId: o?.profileEffect?.skuId, isHovering: f }),
                        a && null != b && (0, l.jsx)(aI.A, { frame: b, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var rW = t(901600);
function rz(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, A.bG)([J.default], () => J.default.getUser(t)),
        a = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        r = lP(),
        [d, o] = (0, ae.A)(t),
        [c, u] = s.useState(!1),
        h = s8("UserProfileSidebarRenderer"),
        m = (0, lM.Ay)(t),
        g = (0, s6.c)("UserProfileSidebarRenderer") ? m?.profileFrame?.skuId : void 0,
        x = (0, s9.A)(g, "UserProfileSidebarRenderer"),
        p = (0, A.bG)([s5.A], () => s5.A.getProductFetch(g));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, an.A)(i, e) : (0, an.A)(t, void 0, e);
        }, [i, t, n.id, h]),
        null == i ||
            null == a ||
            !r ||
            (h && !c && m?.isLoaded !== !0) ||
            (h && !c && null != g && g !== x?.skuId && p?.state !== "success" && p?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        I = s7.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? rW.H : void 0,
        children: (0, l.jsx)(s1.F, {
            component: (0, l.jsx)(s2.A, {
                children: (0, l.jsx)(s1.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == a
                    ? null
                    : d
                      ? (0, l.jsx)(aD, { user: i, currentUser: a, onHide: o, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(aS, { user: i, currentUser: a, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(rV, { user: i, currentUser: a, isRedesignEnabled: h, ...e }),
        }),
    });
}
var rY = t(522556),
    rK = t(225315),
    rq = t(684407),
    rX = t(95701),
    r$ = t(919638),
    rQ = t(763827),
    rZ = t(812771),
    rJ = t(946228),
    r0 = t(462887),
    r1 = t(276293),
    r2 = t(888904),
    r5 = t(745652);
let r6 = () => {
    let e = (0, at.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, r0.M)(e) ? r5 : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: r2.kL,
        children: [
            (0, l.jsxs)(i9.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(i9.A.Icon, { icon: r1.N, "aria-hidden": !0 }),
                    (0, l.jsx)(i9.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: r2.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: r2.j0, src: n }),
                    (0, l.jsx)(S.D, {
                        className: r2.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(y.E, {
                        className: r2.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var r9 = t(909735),
    r7 = t(943712),
    r3 = t(402216),
    r4 = t(274541),
    r8 = t(746080),
    de = t(806931),
    dn = t(516607),
    dt = t(999900);
function di() {
    return (0, l.jsx)("div", { className: dt.wG, children: (0, l.jsx)(x.y, {}) });
}
let dl = (0, nU.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("308093"),
                t.e("908346"),
                t.e("808216"),
                t.e("202342"),
                t.e("500194"),
                t.e("245553"),
                t.e("131992"),
                t.e("430877"),
                t.e("615282"),
                t.e("249681"),
                t.e("666140"),
                t.e("333097"),
                t.e("704374"),
                t.e("689160"),
                t.e("421225"),
                t.e("623685"),
                t.e("842516"),
                t.e("76001"),
            ]).then(t.bind(t, 492385)),
        webpackId: 492385,
        renderLoader: di,
        name: "ForumChannel",
    }),
    ds = (0, nU.Fe)({
        createPromise: () => Promise.all([t.e("802179"), t.e("815852"), t.e("96711")]).then(t.bind(t, 114701)),
        webpackId: 114701,
        renderLoader: di,
        name: "AppChannel",
    });
function da() {
    return Promise.all([
        t.e("651299"),
        t.e("280574"),
        t.e("113561"),
        t.e("368991"),
        t.e("223213"),
        t.e("867336"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("375971"),
        t.e("792818"),
        t.e("890901"),
        t.e("460582"),
        t.e("477751"),
        t.e("245851"),
        t.e("125466"),
        t.e("740705"),
        t.e("468617"),
        t.e("770583"),
        t.e("842442"),
        t.e("389187"),
        t.e("928039"),
        t.e("45646"),
        t.e("947633"),
        t.e("459397"),
        t.e("847810"),
        t.e("546813"),
        t.e("686047"),
        t.e("136686"),
        t.e("700792"),
        t.e("592822"),
        t.e("93461"),
        t.e("309291"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("176911"),
        t.e("36624"),
        t.e("139103"),
        t.e("949013"),
        t.e("33448"),
        t.e("79216"),
        t.e("815275"),
        t.e("704374"),
        t.e("544901"),
        t.e("986300"),
        t.e("874821"),
        t.e("815057"),
        t.e("426792"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("726223"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("497306"),
        t.e("736793"),
        t.e("792461"),
    ]).then(t.bind(t, 540462));
}
let dr = (0, nU.Fe)({ createPromise: da, webpackId: 540462, name: "ChannelCall", renderLoader: di });
function dd() {
    return Promise.all([
        t.e("770583"),
        t.e("947359"),
        t.e("703540"),
        t.e("368991"),
        t.e("280574"),
        t.e("223213"),
        t.e("867336"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("375971"),
        t.e("792818"),
        t.e("890901"),
        t.e("45646"),
        t.e("668526"),
        t.e("125466"),
        t.e("460582"),
        t.e("477751"),
        t.e("740705"),
        t.e("468617"),
        t.e("805551"),
        t.e("700792"),
        t.e("592822"),
        t.e("93461"),
        t.e("309291"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("176911"),
        t.e("949013"),
        t.e("33448"),
        t.e("79216"),
        t.e("815275"),
        t.e("704374"),
        t.e("544901"),
        t.e("256373"),
        t.e("420577"),
        t.e("874821"),
        t.e("360536"),
        t.e("426792"),
        t.e("464287"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("497306"),
        t.e("678827"),
        t.e("228732"),
    ]).then(t.bind(t, 67319));
}
let dc = (0, nU.Fe)({ createPromise: dd, webpackId: 67319, name: "StageChannelCall", renderLoader: di }),
    du = (0, nU.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("855151"),
                t.e("245553"),
                t.e("421630"),
                t.e("541137"),
                t.e("259465"),
                t.e("527552"),
                t.e("769266"),
                t.e("193845"),
                t.e("249681"),
                t.e("428235"),
                t.e("161058"),
                t.e("333097"),
                t.e("359702"),
                t.e("39214"),
                t.e("113582"),
                t.e("443184"),
                t.e("421225"),
                t.e("79171"),
                t.e("417664"),
                t.e("662368"),
            ]).then(t.bind(t, 392)),
        webpackId: 392,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(l6, {});
        },
    }),
    dh = (0, nU.Fe)({
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
    dA = (0, nU.Fe)({
        createPromise: () => Promise.all([t.e("226291"), t.e("208927"), t.e("796778")]).then(t.bind(t, 173489)),
        webpackId: 173489,
        name: "FriendsSidebar",
    });
class dm extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sJ.d0)("guild_channel"), this.maybePreloadChannelCall();
    }
    componentDidUpdate(e) {
        null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.props.channel?.type !== e.channel?.type && this.maybePreloadChannelCall(),
            this.openChannelModal();
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === er.rbe.GUILD_VOICE ? da() : e === er.rbe.GUILD_STAGE_VOICE && dd();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, tY.iN)(e.id);
    };
    _handleContextMenu = (e, n) => {
        switch (n.type) {
            case er.rbe.GUILD_VOICE:
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_APP:
                this.openChannelContextMenu(e, n);
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, n);
                break;
            case er.rbe.DM:
                this.openDMContextMenu(e, n);
        }
    };
    handleContextMenu = (e) => {
        o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel);
    };
    handleParentContextMenu = (e) => {
        o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel);
    };
    handleThreadSidebarResize = (e, n) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: n });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        o()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, s0.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [O.A.CHANNEL_HEADER],
            });
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, b.L3)(e, async () => {
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
            });
    }
    openThreadContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, b.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("955557"),
                    t.e("947502"),
                    t.e("965789"),
                    t.e("584615"),
                ]).then(t.bind(t, 612826));
                return (t) => (0, l.jsx)(e, { ...t, channel: n });
            });
    }
    openDMContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = J.default.getUser(n.getRecipientId());
        o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, b.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("866038"),
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
                    t.e("592822"),
                    t.e("965789"),
                    t.e("823427"),
                    t.e("529422"),
                    t.e("309291"),
                    t.e("307059"),
                    t.e("187048"),
                    t.e("298199"),
                    t.e("17244"),
                    t.e("864464"),
                    t.e("439778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(r8.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ih.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(nA.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== de.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ic.A,
                  { size: r3.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
            showFramePanel: a,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let r = [];
        if (e.isSystemDM()) return r;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
                break;
            case er.rbe.DM:
                r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(lx, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iF, { channel: e }, "pins")),
                    r.push((0, l.jsx)(lp.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    r.push((0, l.jsx)(lD, { channel: e, showCallOrActivityPanel: i || s || a }, "profile")),
                    r.push((0, l.jsx)(lN, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(lx, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iF, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, l.jsx)(lp.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    r.push((0, l.jsx)(ik, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, l.jsx)(t1, { channel: e })),
                    null == n || n.isForumLikeChannel() || r.push((0, l.jsx)(sV, { channel: n }, "browser")),
                    e.isVocalThread() && r.push((0, l.jsx)(lR, { channel: e }, "thread-call")),
                    r.push((0, l.jsx)(t4, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iF, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, l.jsx)(ik, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && r.push((0, l.jsx)(iz, { channel: e }, "summaries")),
                    r.push((0, l.jsx)(sK, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                r.push((0, l.jsx)(sV, { channel: e }, "browser")),
                    t || r.push((0, l.jsx)(iU.A, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iF, { channel: e }, "pins")),
                    (0, nm.PD)(e.guild_id, "channel_header") &&
                        r.push((0, l.jsx)(iP, { channelId: e.id }, "conversations")),
                    r.push((0, l.jsx)(ik, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && r.push((0, l.jsx)(iz, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_APP:
                r.push((0, l.jsx)(nd, { channel: e }, "popout")),
                    r.push((0, l.jsx)(sV, { channel: e }, "browser")),
                    t || r.push((0, l.jsx)(iU.A, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iF, { channel: e }, "pins")),
                    r.push((0, l.jsx)(ik, { channelId: e.id }, "members")),
                    r.push((0, l.jsx)(iL, { channelId: e.id }, "chat"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                e.isGameInvitesChannel() && r.push((0, l.jsx)(i6, {}, "game-invite-channel-learn-more")),
                    t ||
                        (r.push((0, l.jsx)(i0, { channel: e }, "forum-onboarding")),
                        r.push((0, l.jsx)(iU.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, l.jsx)(ik, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                r.push((0, l.jsx)(ik, { channelId: e.id }, "members"));
        }
        return r;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let n = [];
        if (e.isSystemDM()) return n;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
                break;
            case er.rbe.GROUP_DM:
                n.push((0, l.jsx)(ik, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(ik, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(ik, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: dt.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, g.openModalLazy)(async () => {
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
            showCall: a,
            showActivityPanel: d,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != n, "Should not be null if channel is not null.");
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tY.iN)(e.id) : void 0,
            m = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            g = d || c,
            x = a || g;
        return (0, l.jsxs)("div", {
            className: dt.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, l.jsxs)(
                            i9.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(dt.DD, a, { [dt.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tC.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tC.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: i,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: m,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: dt.u8,
                                              children: (0, l.jsx)(p.$, {
                                                  onClick: () => (0, tE.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tC.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(l1.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: n, spoilerGatingChannelId: t } = this.props;
        return !n && null == t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
                return (0, l.jsx)(dc, { channel: e, popoutType: nu.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    dr,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: nu.N.NO_POPOUT,
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
        if ((o()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), n)) return null;
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
            showCall: a,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), t))
            return (o()(null != n, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(ib, { guildId: n.id })
                : (0, l.jsx)(iA.H, { guildId: n.id, children: (0, l.jsx)(i_, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(rY.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tv.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && a)) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tp, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(dl, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return e.type === er.rbe.GUILD_APP
            ? (0, l.jsx)(ds, { channel: e }, e.id)
            : (0, l.jsx)(tj.A, { channel: e, guild: n, chatInputType: nh.oU.NORMAL }, null != n ? n.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: n,
            guild: t,
            needSubscriptionToAccess: i,
            section: s,
            showCall: a,
            showActivityPanel: r,
            showFramePanel: d,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (s === er.YvQ.PROFILE && e.isPrivate() && !a && !r && !d)
            return (0, l.jsx)(rz, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, l.jsx)(l0, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_APP:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(rJ.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(rJ.A, { channel: n }, `channel-members-${n.id}`);
                    break;
                case er.rbe.PUBLIC_THREAD:
                case er.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(em, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === er.YvQ.CONVERSATIONS)
            switch (e.type) {
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(nk, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, l.jsx)(du, { guildId: t?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: n,
            hasModalOpen: i,
            showWelcomeModal: s,
            isLurking: a,
            isUnavailable: r,
            showRealNameModal: d,
        } = this.props;
        return (
            null == e ||
                null == n ||
                r ||
                i ||
                (d &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await t.e("638763").then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => iu(lw.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, rK.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                width: a,
                channelIsContentGated: r,
                spoilerGatingChannelId: d,
            } = this.props;
        if (null == s && null == i) return null;
        if (t === er.YvQ.SIDEBAR_CHAT && null != i) {
            if (r || null != d) return null;
            switch (i.type) {
                case iS.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sO, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case iS.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sZ, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case iS.PE.VIEW_CHANNEL: {
                    let t = ek.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? ir : sZ;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (null != n && (0, rX.ZV)(n.type)) {
                        e = (0, l.jsx)(r4.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case iS.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iS.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: er.da6 },
                    className: dt.uC,
                    children: (0, l.jsx)(dh, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iT.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - er.MdR - o;
        return (
            (c += 375),
            (0, l.jsx)(rZ.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rZ.X.PostSidebar : rZ.X.ThreadSidebar,
                maxWidth: c,
                capturePointer: n?.type === er.rbe.GUILD_APP,
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
                section: a,
                hasModalOpen: d,
                guildSidebarState: o,
                hasTextActivityInPanelMode: c,
                friendsSidebarExperimentEnabled: u,
            } = this.props,
            { threadSidebarWidth: h, isThreadSidebarFloating: A } = this.state,
            m = u && !__OVERLAY__,
            g = this.shouldRenderCall();
        if (i) return (0, l.jsx)(r6, {});
        if (null == e) return (0, l.jsx)(r7.A, { channelId: this.props.channelId });
        let x = a === er.YvQ.SIDEBAR_CHAT,
            p = (0, r9.UN)("Channel"),
            f = null != o && !x,
            I = (0, rX.nO)(e.type) && !d,
            b = n?.name,
            j = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                        className: r()(dt.TE, {
                            [dt.js]: (x && !p) || f,
                            [dt.Rs]: x ? !p || A : f || m,
                            [dt.jl]: x && A,
                        }),
                        children: [
                            I
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: x ? h : void 0 },
                                      className: dt.x4,
                                      channel: e,
                                      draftType: il.C.ChannelMessage,
                                  })
                                : null,
                            g || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: r()(dt.Qs, { [dt.Oo]: s === er.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nG.HI, { location: b, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: dt.zP, children: j }) : j,
                m && (0, l.jsx)(dA, {}),
            ],
        });
    }
}
let dg = (0, ep.A)(dm),
    dx = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            c = (0, A.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, A.bG)([ek.A], () => a ?? ek.A.getChannel(o), [o, a]),
            p = (0, tI.DZ)(),
            f = (0, tI.e4)(x, "ConnectedChannel"),
            b = (0, A.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            j = f?.parent_id,
            C = (0, A.bG)([ek.A], () => ek.A.getChannel(j), [j]),
            E = (0, A.bG)([n3.A], () => n3.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, im.A)(f?.id ?? void 0),
            v = (0, A.bG)([nc.A], () => {
                let e = null != o ? nc.A.getParticipants(o) : [],
                    n = null != o ? nc.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, io.A)(),
            _ = (0, A.bG)([eU.Ay], () => (N?.channelId ?? eU.Ay.getVoiceChannelId()) === f?.id),
            T = (0, A.bG)([eb.Ay], () => (null != f ? eb.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, A.bG)([rQ.A], () => rQ.A.isConnected()),
            R = (0, eI.Ay)(S),
            L = S && !1 === R;
        s.useEffect(() => {
            _ &&
                L &&
                null != T &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, no.Qt)({ applicationId: T.applicationId, instanceId: T.compositeInstanceId }),
                );
        }, [L, f, _, T]);
        let O = (0, A.bG)([eb.Ay], () => eb.Ay.getCurrentEmbeddedActivity()),
            M = (0, A.bG)([eb.Ay], () => eb.Ay.getActivityPanelMode()),
            P = null != O && !(0, ev.A)(f?.id) && M === eZ.Gd.PANEL,
            D = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: k, isUserInThisVoice: U } = (0, A.cf)([lu.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lu.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lu.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            G = null != f && f.isPrivate() && !P && v,
            w = f?.isGuildVocal() || G || (k && (U || !D)),
            F = (0, A.bG)([nn.A], () => {
                let e = (0, nr.ny)(nn.A.getMainFrame());
                return e?.data.layoutMode === nr.y0.FOCUSED && e.intent === nr.sV.MAIN;
            }),
            { welcomeModalChannelId: H } = (0, h.zy)(),
            B = (0, A.bG)([t6.A], () => null != f && t6.A.isLurking(f.guild_id), [f]),
            V = (0, A.bG)([rq.A], () => rq.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, A.bG)(
                [nc.A, eb.Ay],
                () =>
                    null != eb.Ay.getConnectedActivityLocation() && eb.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eb.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? er.DUB.NO_CHAT
                            : er.DUB.NORMAL
                        : null != o
                          ? nc.A.getLayout(o)
                          : er.DUB.NORMAL,
                [o],
            ),
            z =
                ((n = E?.id),
                (i = (0, A.bG)([n3.A, lG, J.default, X.Ay], () => {
                    let e = n3.A.getGuild(n);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === lG.hasViewedPrompt(lw.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = J.default.getCurrentUser();
                    if (null == t) return null;
                    let i = X.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || iu(lw.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            Y =
                ((t = E?.id),
                (0, A.bG)([ek.A, n3.A, eU.Ay], () => {
                    let e = n3.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ek.A.getChannel(H);
                    return H === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rX.ke)(n.type);
                })),
            { section: K, channelSidebarState: q } = (0, A.cf)(
                [iR.Ay],
                () => ({ section: iR.Ay.getSection(o, f?.isDM()), channelSidebarState: iR.Ay.getSidebarState(o) }),
                [o, f],
            ),
            Q = E?.id,
            Z = (0, A.bG)([iR.Ay], () => iR.Ay.getGuildSidebarState(Q), [Q]),
            ee = (0, lH.lI)(),
            en = (0, tb.Ay)(f),
            ei = (0, tb.Ay)(f, !0),
            el = (0, A.bG)([nc.A], () => (null != f ? nc.A.getSelectedParticipant(f.id) : null)),
            es = (0, e4.vL)(f),
            ea = (0, ty.Uf)(f),
            ed = null != f && c === f.id,
            eo = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: ec } = id.A.useConfig({ location: "Channel" });
        !(function (e) {
            let { onTransition: n } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: t } = e,
                        i = (0, ey.H)(t);
                    if (null == i || !(0, ev.A)(i)) return;
                    eU.Ay.getVoiceChannelId() !== i && (await (0, e7.A)({ channelId: i }));
                    let l = ek.A.getChannel(i),
                        s = l?.guild_id;
                    setTimeout(() => {
                        (0, e3.A)(s, t), n?.();
                    }, 0);
                }
                return (
                    et._.subscribe(er.jej.OPEN_EMBEDDED_ACTIVITY, e),
                    () => {
                        et._.unsubscribe(er.jej.OPEN_EMBEDDED_ACTIVITY, e);
                    }
                );
            }, [n]);
        })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, tE.JK)();
                if (e?.location?.state?.stageInviteKey === dn.J2) {
                    let { channelId: n } = (0, lF.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []);
        let eu = { channel: f, inCurrentVoiceChannel: ed },
            eh = s.useRef(eu);
        s.useEffect(() => {
            eh.current = eu;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eh.current;
                null != r && null != e && eo && e.id === r && !n && ((0, l9.av)(e), d(null));
            }, [r, eo]);
        let eA = (0, ef.cI)(f),
            em = null != f && f.isPrivate(),
            eg = (0, eI.Ay)(em),
            ex = (0, eI.Ay)(f?.id);
        s.useEffect(() => {
            let e = eg && !em,
                n = eg && em && f?.id !== ex;
            (e || n) && (0, tf.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lA.i.AUTO });
        }, [f?.id, ex, em, eg]);
        let ep = (0, g.useHasAnyModalOpen)();
        return (0, l.jsx)(dg, {
            guildId: f?.guild_id,
            channelId: o,
            channel: f,
            channelName: en,
            formattedChannelName: ei,
            parentChannel: C,
            voiceChannel: b,
            layout: W,
            needSubscriptionToAccess: y,
            isLurking: B,
            hasModalOpen: ep,
            section: K,
            channelSidebarState: q,
            guildSidebarState: Z,
            guild: E,
            showCall: !y && w,
            showActivityPanel: P,
            showFramePanel: F,
            channelIsContentGated: es,
            spoilerGatingChannelId: ea,
            isMobile: (0, A.bG)([$.A], () => f?.type === er.rbe.DM && $.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: (0, A.bG)([r$.A, iD.A], () => {
                let e = f?.guild_id ?? iD.A.getGuildId();
                return null != e && r$.A.isUnavailable(e);
            }, [f]),
            showRealNameModal: z,
            showWelcomeModal: !V && Y,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([lu.A], () => ({ hasVideo: null != f && lu.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: el,
            showChannelSummaries: eA,
            showHeaderGuildBreadcrumb: p || ee,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: P,
            embeddedActivity: O,
            friendsSidebarExperimentEnabled: ec,
        });
    });
