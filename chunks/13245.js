t.r(n), t.d(n, { default: () => de }), t(321073);
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
    j = t(367513),
    I = t(442433);
t(183994);
var b = t(837381),
    C = t(887129),
    E = t(607399),
    y = t(834730),
    v = t(194261),
    N = t(312138),
    T = t(475825),
    _ = t(177953),
    S = t(297264),
    R = t(414798),
    L = t(775602),
    O = t(793574),
    M = t(688810),
    P = t(449582),
    D = t(485947),
    k = t(906199),
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
    ed = t(843311),
    eo = t(998448);
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
            j = (0, A.bG)([q.A], () => q.A.getAnyStreamForUser(a)),
            C = (0, b.rm)(a),
            y = (0, A.bG)([V.A], () => V.A.canUserViewChannel(n.id, i, a)),
            v = h?.id != null && h.id === r,
            N = s.useCallback(
                (e) => {
                    null != h &&
                        (0, I.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("97705"),
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("82073"),
                                t.e("91994"),
                                t.e("76665"),
                                t.e("24198"),
                                t.e("23427"),
                                t.e("43116"),
                                t.e("70515"),
                                t.e("66939"),
                                t.e("24966"),
                            ]).then(t.bind(t, 175269));
                            return (t) => (0, l.jsx)(e, { ...t, user: h, guildId: n.guild_id, channel: n });
                        });
                },
                [h, n],
            ),
            T = s.useCallback(() => {
                if (null == h) return;
                let e = `@${el.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                et._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    et._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    R.A.startTyping(n.id);
            }, [h, n]),
            _ = s.useCallback(
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
            onShiftClick: T,
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
                    applicationStream: j,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: _,
                    itemProps: C,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: v,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? T?.() : O((e) => !e);
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
                              (0, l.jsx)(v.X, { size: "xxs", color: "currentColor" }),
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
        { navigator: f, listRef: j } =
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
        I = 0 === x.length || x.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(er.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        I)
    )
        return (0, l.jsx)(eg, { channel: c });
    let E = u().omit(f.containerProps, ["ref"]),
        y = ei.wT(h);
    return (0, l.jsx)(M.f5, {
        value: g,
        children: (0, l.jsx)(b.hD, {
            navigator: f,
            children: (0, l.jsx)(N.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: r()(eo.yg, eo.ML, ed.kL),
                        children: (0, l.jsx)(
                            T.OZ,
                            {
                                ref: j,
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
                        children: (0, l.jsx)(_.n, { size: "lg", color: "currentColor" }),
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
    ej = t(475743),
    eI = t(933958),
    eb = t(702841),
    eC = t(567249),
    eE = t(811024),
    ey = t(969151),
    ev = t(108959),
    eN = t(866665),
    eT = t(446576),
    e_ = t(817281),
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
    e$ = t(568548),
    eQ = t(234320),
    eZ = t(5867),
    eJ = t(47513);
function e0(e) {
    let { channelId: n, className: t, ...i } = e,
        a = s.useRef(null),
        r = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
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
    let x = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
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
var e1 = t(221424);
let e2 = eV.DN.SIZE_32,
    e3 = { [eZ.E8.NO_CHAT]: e1.Oo, [eZ.E8.RESIZABLE]: e1.Ig };
function e7(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        a = (0, eH.A)(),
        d = (0, A.yK)([eI.Ay], () => eI.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        o = (0, ey.H)(t),
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(o)),
        u = (0, ew.IQ)(d),
        h = (0, ew.Rz)(u),
        m = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        g = s.useRef(null),
        x = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
        p = x !== eZ.E8.NO_CHAT,
        [j, I] = s.useState(eO.Ay.activityPanelHeight ?? n ?? null),
        b = s.useCallback((e) => {
            e_.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
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
        T = 0,
        _ = 0,
        S = (0, eF.A)(a?.id);
    if (!S) {
        let e = E.width,
            n = E.height;
        N
            ? ((n = E.width / eZ.B5) > E.height && (e = (n = E.height) * eZ.B5), (_ = (E.height - n) / 2))
            : ((e = Math.min(E.height * eZ.B5)) > E.width && (n = (e = E.width) / eZ.B5), (T = (E.width - e) / 2));
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
            let i = (0, ej.Ay)(e),
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
        })(p, j, n),
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
                    className: r()(e1.iE, e3[x], e),
                    ref: g,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eL.A, { applicationId: a.id }),
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
                                    style: { paddingLeft: T, paddingRight: T, paddingTop: _, paddingBottom: _ },
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
                                                                  iconComponent: eT.g,
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
                                      et._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), I(e);
                                  },
                                  onResizeEnd: (e) => {
                                      et._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), b(e);
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
            activityPanelMode: a,
        } = (0, eb.cf)([eI.Ay], () => {
            let e = eI.Ay.getConnectedActivityLocation(),
                n = eI.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, ey.H)(e),
                connectedActivity: n,
                activityPanelMode: eI.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, eb.bG)([eC.A], () => eC.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT));
    if (!(0, eE.Gp)(i)) return null;
    let d = s?.applicationId;
    return a !== eZ.Gd.PANEL || null == d || r || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e7, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e9 = t(90804),
    e5 = t(748975),
    e6 = t(323073),
    e8 = t(568598),
    ne = t(313961),
    nn = t(164617),
    nt = t(355622),
    ni = t(689874),
    nl = t(828488),
    ns = t(939249),
    na = t(408278),
    nr = t(624479),
    nd = t(691540),
    no = t(857250),
    nc = t(97483),
    nu = t(534890),
    nh = t(661531),
    nA = t(39623),
    nm = t(952270),
    ng = t(381849),
    nx = t(549973),
    np = t(957565),
    nf = t(935208),
    nj = t(256331),
    nI = t(623562),
    nb = t(619065),
    nC = t(87177);
let nE = ["high", "medium", "low"],
    ny = s.memo(function (e) {
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
                              nE.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            o = d?.severity ?? null,
            c = d?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: nC.UO,
            children: [
                (0, l.jsx)(y.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nC.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: nC.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nC.a7,
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
                            className: nC.a7,
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
                            className: nC.a7,
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
    nv = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = nf.default.extractTimestamp(n.startMessageId),
            s = nf.default.extractTimestamp(n.endMessageId),
            a = (0, nx.e)({ timestamp: i }),
            r = Math.max(1, Math.round((s - i) / 1e3)),
            d = (0, ng.WR)({ seconds: r, getFormatter: ng.i }),
            o = (0, A.bG)([nb.A], () => nb.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(ns.D, {
            className: nC.Nm,
            style: { backgroundColor: o },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: nC.PY,
                    children: [
                        (0, l.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: nC.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(na.K, {
                            icon: nr.T,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, np.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nd.P0)((0, no.o)("Copied conversation JSON", nc.Ck.SUCCESS)),
                                    );
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: nC.FR,
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
                        className: nC.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: nC.JP,
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
                    className: nC.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: nC.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nC.UO,
                    children: [
                        (0, l.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nC.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: nC.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nC.a7,
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
                                    className: nC.a7,
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
                                    className: nC.a7,
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
                (0, l.jsx)(ny, { moderation: n.moderation ?? null }),
            ],
        });
    });
function nN(e) {
    let { channel: n } = e,
        t = (0, A.bG)([nb.A], () => nb.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, A.bG)([nb.A], () => nb.A.isPendingFetch(n.id), [n.id]),
        a = (0, A.bG)([nj.A], () => nj.A.isHighlightingEnabled(), []),
        r = s.useCallback(
            (e) => {
                (0, nI.xI)(n.id, n.guild_id, e.id);
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nC.zr,
        children: [
            (0, l.jsxs)("div", {
                className: nC.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: nC.gn,
                        children: [
                            (0, l.jsx)(nu.o, { color: nh.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(y.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: nC.y6,
                        children: (0, l.jsx)(na.K, {
                            icon: a ? nA.b : nm.G,
                            "aria-label": a ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: nI.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: nC.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(nv, { conversation: e, onJump: r }, e.id))
                        : (0, l.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: nC.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var nT = t(268218),
    n_ = t(726249),
    nS = t(228366),
    nR = t(334738),
    nL = t(208882),
    nO = t(938764),
    nM = t(519480),
    nP = t(352123),
    nD = t(328857),
    nk = t(83703);
let nU = function (e) {
    let { guild: n, onAddGuild: i } = e,
        a = s.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("27574"),
                    t.e("21149"),
                    t.e("59957"),
                    t.e("28136"),
                    t.e("16084"),
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
        className: nk.h2,
        children: [
            (0, l.jsx)("img", { className: nk.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(S.D, {
                className: nk._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(y.E, { variant: "text-md/normal", className: nk.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(nD.E, {
                      className: nk.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(nD.E, {
                className: nk.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var nG = t(892547),
    nw = t(689175),
    nF = t(761508),
    nH = t(765671),
    nB = t(22231),
    nV = t(365199),
    nW = t(66834),
    nz = t(573435),
    nY = t(101555),
    nK = t(548118),
    nq = t(714991),
    nX = t(597098),
    n$ = t(345942),
    nQ = t(71393),
    nZ = t(486020),
    nJ = t(860689),
    n0 = t(682557),
    n1 = t(599487);
let n2 = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(ns.D, {
        onClick: n,
        className: n1.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: n1.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function n3(e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: o } = (0, nP.A)(n);
    return (0, l.jsx)("div", {
        className: r()(n1.fc, { [n1.QX]: i }),
        children: (0, l.jsxs)(nY.Ay, {
            children: [
                o
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(nY.$n, {
                              onClick: () => {
                                  (0, g.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("11895"), t.e("88869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(nB.R, { size: "xs", color: "currentColor", className: n1.IQ }),
                          }),
                      })
                    : null,
                (0, l.jsx)(n0.A, {
                    targetElementRef: d,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(nY.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nV.j, { size: "md", color: "currentColor", className: n1.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let n7 = s.memo(function (e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        r = null != (0, A.bG)([nQ.A], () => nQ.A.getGuild(n.guildId));
    async function d() {
        a(!0);
        try {
            r ? (0, n$.u)(n.guildId) : await nW.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
        } finally {
            a(!1);
        }
    }
    let o = nZ.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, nX.mZ)() }),
        c = nZ.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        r && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: n1.Nr,
            onContextMenu: function (e) {
                (0, I.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: n1.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: n1.Yi,
                            children: null != o && (0, l.jsx)("img", { src: o, alt: "", className: n1.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: n1.$f,
                            children: (0, l.jsx)(nz.Ay, {
                                mask: nz.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: n1.SA,
                                    children: (0, l.jsx)(nK.Ay, {
                                        className: n1.rZ,
                                        iconSrc: c,
                                        guild: (0, nJ.xi)(n),
                                        size: nK.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: n1.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: n1.DD,
                            children: [
                                (0, l.jsx)(nq.A, { className: n1.n2, guild: n }),
                                (0, l.jsx)(y.E, {
                                    className: n1.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(y.E, {
                            className: n1.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: n1.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: n1.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: n1.JX }),
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
                                        className: n1.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: n1.Li }),
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
                            className: n1.PD,
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
                (0, l.jsx)(n3, { entry: n }),
            ],
        })
    );
});
var n4 = t(946116),
    n9 = t(935397),
    n5 = t(564014);
function n6(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: a, width: d } = (0, nH.Ay)(),
        o = null != d && d <= 800;
    return (0, l.jsxs)("div", {
        ref: a,
        className: n5.wx,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: n5.F0,
                src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
            }),
            (0, l.jsx)("div", {
                className: n5.AZ,
                children: (0, l.jsxs)("div", {
                    className: r()(n5.VW, { [n5.eO]: o }),
                    children: [
                        (0, l.jsx)(S.D, {
                            variant: "heading-xl/semibold",
                            className: n5.dc,
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(y.E, {
                            variant: "text-md/normal",
                            className: n5.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)(f.N, {
                            theme: W.NJ.LIGHT,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: r()(n5.MT, e),
                                    children: (0, l.jsx)(nG.I, {
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
let n8 = function (e) {
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
        className: n9.$$,
        children: (0, l.jsxs)(nw.Gt, {
            className: n9.XG,
            children: [
                (0, l.jsx)(n6, { searchQuery: a, setSearchQuery: r, handleClearSearch: d, handleSearchKeyPress: o }),
                (0, l.jsx)(nw.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(nF.V, {
                        className: n5.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                nF.V.Item,
                                { className: n5.YU, id: n4.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${A})` },
                                n4.mU.ALL,
                            ),
                            (0, n4.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    nF.V.Item,
                                    { className: n5.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                m && null == t
                    ? (0, l.jsx)(x.y, { className: n9.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(y.E, {
                                                variant: "text-md/semibold",
                                                className: n5.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: n9.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(n7, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(n2, { onClick: i }) : null,
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
var te = t(370876),
    tn = t(349288),
    tt = t(364522),
    ti = t(792831),
    tl = t(591623);
let ts = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: n9.$$, children: (0, l.jsx)(x.y, { className: n9.u1 }) });
    else if (0 === o.length) {
        let e =
            null != d
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tn.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tl.Je,
            children: [
                (0, l.jsx)("img", { className: tl.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, l.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: tl.gR,
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(y.E, { variant: "text-md/normal", color: "text-default", className: tl.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: n9.vY, children: o.map((e) => (0, l.jsx)(n7, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: n9.$$,
        children: (0, l.jsxs)(tt.Ar, {
            className: n9.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tl.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tl.Dr,
                            children: [
                                (0, l.jsx)(ns.D, {
                                    onClick: a,
                                    className: tl.UE,
                                    children: (0, l.jsx)(ti.A, { direction: ti.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(S.D, {
                                    variant: "heading-xl/semibold",
                                    className: tl.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: o.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(nG.I, {
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
var ta = t(650583);
let tr = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, A.cf)([nM.A], () => {
            let e = nM.A.getCurrentCategoryId(n.id),
                t = nM.A.getDirectoryEntries(n.id, e === n4.mU.ALL ? null : e),
                i = nM.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: nM.A.getDirectoryAllEntriesCount(n.id),
                isLoading: nM.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = e$.Ay.lastMessageId(n.id);
            null != e &&
                nS.h.wait(() => {
                    (0, nR.ack)(
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
                          if (n !== n4.mU.ALL) return [{ entries: (0, te._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, te.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, te.DN)(s)).length > 0 &&
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
        } = (0, A.cf)([nO.A], () => {
            let { mostRecentQuery: e, fetching: t } = nO.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nO.A.getSearchResults(n.id, e) };
        }),
        [f, j] = s.useState(h),
        I = "" !== h,
        b = { mostRecentQuery: h },
        C = s.useRef(b);
    s.useEffect(() => {
        C.current = b;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            nL.Yc(n.id), nL.YS(n.id), j(e);
        }, [n.id]),
        s.useEffect(() => {
            en.default.track(er.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: a,
            });
        }, [n.id, i.id, a]);
    let E = (0, nP.b)(n),
        y = s.useMemo(
            () =>
                E
                    ? () => {
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("21009"),
                                  t.e("11895"),
                                  t.e("88147"),
                                  t.e("97556"),
                                  t.e("19580"),
                                  t.e("97804"),
                                  t.e("56856"),
                                  t.e("96349"),
                              ]).then(t.bind(t, 579735));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: n.id,
                                      currentCategoryId: a === n4.mU.ALL ? null : a,
                                  });
                          });
                      }
                    : void 0,
            [E, i.name, i.id, n.id, a],
        );
    function v(e) {
        0 !== f.trim().length &&
            e.key === ta.dh.ENTER &&
            (nL.Se(n.id, f),
            en.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function N() {
        j(""), nL.BA(n.id);
    }
    return I
        ? (0, l.jsx)(ts, {
              searchQuery: f,
              setSearchQuery: j,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: N,
              handleCreateOrAddGuild: y,
              searchResults: p,
              searchFetching: m,
          })
        : null == u && null == a
          ? (0, l.jsx)("div", { className: n9.$$, children: (0, l.jsx)(x.y, { className: n9.u1 }) })
          : u?.length === 0 && null == a
            ? (0, l.jsx)("div", { className: n9.$$, children: (0, l.jsx)(nU, { guild: i, onAddGuild: y }) })
            : (0, l.jsx)(n8, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: j,
                  handleSearchKeyPress: v,
                  handleClearSearch: N,
                  handleCreateOrAddGuild: y,
                  currentCategoryId: a,
                  handleSelectCategory: function (e) {
                      nL.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: d,
                  allEntriesCount: o,
                  isLoading: c,
              });
};
var td = t(826673),
    to = t(298358),
    tc = t(47167),
    tu = t(928078),
    th = t(58736),
    tA = t(131047),
    tm = t(976860),
    tg = t(288254),
    tx = t(873614),
    tp = t(649852),
    tf = t.n(tp),
    tj = t(922016),
    tI = t(980707),
    tb = t(477782),
    tC = t(811893),
    tE = t(789645),
    ty = t(163126),
    tv = t(182061),
    tN = t(886393),
    tT = t(307623),
    t_ = t(660273),
    tS = t(707792),
    tR = t(41402),
    tL = t(271456),
    tO = t(200273),
    tM = t(565846),
    tP = t(57907),
    tD = t(375500),
    tk = t(707653),
    tU = t(50268),
    tG = t(378570),
    tw = t(162199),
    tF = t(713608),
    tH = t(473503),
    tB = t(901472),
    tV = t(267102),
    tW = t(474397),
    tz = t(486974),
    tY = t(221314);
function tK(e) {
    let { channel: n } = e,
        t = s.useContext(en.AnalyticsContext),
        i = (0, tV.aL)(),
        a = z.intl.string(tY.default["Beo/7v"]),
        { firstMessage: r } = (0, tH.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, l.jsx)(th.Ay.Icon, {
              onClick: function () {
                  null != o &&
                      ((0, tG.iN)(n.id),
                      (0, tW.A)(),
                      (0, tB.z)(n.guild_id, o, n.id, {
                          modViewPanel: tz.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(er.jej.POPOUT_CLOSE));
              },
              tooltip: a,
              icon: tF.q,
              "aria-label": a,
          })
        : null;
}
var tq = t(780338),
    tX = t(782603),
    t$ = t(857071),
    tQ = t(607508),
    tZ = t(914703),
    tJ = t(37411);
function t0(e) {
    let { channel: n } = e,
        t = (0, tQ.X)(n),
        [i, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, A.bG)([t$.A], () => null != n.guild_id && t$.A.isLurking(n.guild_id));
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
    return (0, l.jsx)(tj.Y, {
        targetElementRef: r,
        shouldShow: i,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, l.jsx)(tZ.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: i ? null : o,
                icon: t === tJ.CP.NO_MESSAGES ? tq.a : tX.X,
                "aria-label": o,
                selected: i,
            });
        },
    });
}
var t1 = t(747926);
function t2(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(tj.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(t3, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nV.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function t3(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t_.A)(n, "Sidebar Overflow"),
        a = (0, tR.A)(n),
        r = (0, tP.A)(n),
        d = (0, tD.A)(n),
        o = (0, tv.A)(n),
        c = (0, tS.A)(n),
        u = (0, tM.A)(n.id),
        h = (0, tO.A)(n),
        A = (0, tT.A)(n),
        m = (0, tN.A)(n),
        g = (0, tU.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, tk.A)(n),
        p = (0, tL.A)(n),
        f = (0, ty.$)(1e3);
    function j() {
        (0, tG.iN)(n.id);
    }
    function I(e) {
        let t = tf()(() => {
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
    return (0, l.jsxs)(tI.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tb.rX, {
                children: [s, (0, l.jsx)(tb.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: j })],
            }),
            (0, l.jsxs)(tb.rX, { children: [r, d] }),
            (0, l.jsxs)(tb.rX, { children: [h, a, u, p] }),
            (0, l.jsxs)(tb.rX, {
                children: [
                    (0, l.jsx)(tb.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: tC.t,
                        trailingIndicator: { type: "icon", icon: tC.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                j();
                        },
                    }),
                    (0, l.jsx)(tb.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: tC.t,
                        trailingIndicator: { type: "icon", icon: tC.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                j();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(tb.rX, { children: [x, o, c, A] }),
            (0, l.jsxs)(tb.rX, { children: [m, g] }),
        ],
    });
}
function t7(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(th.Ay.Icon, {
            icon: tE.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, t1.xu)((0, tw.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(t0, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(tK, { channel: n }) : null,
                  (0, l.jsx)(t2, { channel: n }),
                  i,
              ],
          });
}
var t4 = t(31717),
    t9 = t(853742),
    t5 = t(671373);
function t6(e) {
    let { channelId: n } = e,
        i = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, A.bG)([ek.A], () => ek.A.getChannel(i?.parent_id)),
        r = (0, A.bG)([nQ.A], () => nQ.A.getGuild(i?.getGuildId())),
        d = (0, tc.Ay)(i),
        o = (0, tg.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, t9.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    if (null != o) return (0, l.jsx)(tx.A, { guild: r, channelId: o });
    let u = (0, l.jsx)(t7, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: t4.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tA.zF)({
                    channel: i,
                    parentChannel: a,
                    channelName: d,
                    guild: r,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, I.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("26132"),
                                t.e("38730"),
                                t.e("47502"),
                                t.e("84615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, tm.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: t5.T,
                children: (0, l.jsx)(tu.A, { channel: i, guild: r, chatInputType: nt.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var t8 = t(91242),
    ie = t(857253),
    it = t(872363);
let ii = function (e, n) {
    nS.h.wait(() => {
        nS.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var il = t(561446),
    is = t(300233),
    ia = t(499211),
    ir = t(468689),
    id = t(529942),
    io = t(739455),
    ic = t(400656);
function iu(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: ic.t7,
        children: (0, l.jsxs)("div", {
            className: ic.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: ic.xw,
                    children: [
                        (0, l.jsx)(S.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(y.E, {
                            variant: "text-sm/normal",
                            className: ic.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ic.__invalid_button,
                            children: (0, l.jsx)(p.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    (0, id.rf)(n),
                                        ir.A.open(n, er.BEX.ROLE_SUBSCRIPTIONS, void 0, er.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, io.Fx)(n);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ih = t(599941),
    iA = t(29385),
    im = t(950344),
    ig = t(217530),
    ix = t(162093),
    ip = t(548547);
function ij(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iA.e)({ guildId: n, channelId: t }),
        a = (0, ih.uk)(n),
        r = (0, ih.Tq)(n),
        d = (0, A.bG)([nQ.A], () => nQ.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(t)),
        u = (0, tc.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of a) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [a]);
    return ((0, im.A)({
        guildId: n,
        location: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == d)
        ? (0, l.jsx)("div", {
              className: ip.__invalid_spinnerContainer,
              children: (0, l.jsx)(x.y, { className: ip.__invalid_spinner }),
          })
        : (0, l.jsxs)(tt.Ar, {
              className: ip.$$,
              children: [
                  (0, l.jsx)(S.D, {
                      variant: "heading-xl/semibold",
                      className: ip.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: o, channelName: u }),
                  }),
                  (0, l.jsx)(y.E, {
                      className: ip.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, l.jsx)(ig.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  ix.A,
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
var iI = t(473855),
    ib = t(604681),
    iC = t(761640),
    iE = t(700695);
function iy(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([iC.Ay], () => iC.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        i = (0, A.bG)([nb.A], () => (nb.A.getChannelConversations(n)?.length ?? 0) > 0, [n]);
    return (0, l.jsx)(th.In, {
        onClick: ib.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nu.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iE.q : void 0,
        selected: t,
        showBadge: i,
    });
}
var iv = t(967198);
function iN(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([iC.Ay], () => iC.Ay.getSection(n)),
        i = (0, A.bG)([iv.A], () => iv.A.getGuildId()),
        s = t === er.YvQ.MEMBERS;
    return (0, l.jsx)(th.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: _.n,
        onClick: function () {
            eS.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                ib.A.toggleMembersSection();
        },
        selected: s,
    });
}
var iT = t(187360),
    i_ = t(366605),
    iS = t(945830);
let iR = function (e) {
    let { channel: n } = e,
        t = (0, e6.ni)(n),
        [i, a] = s.useState(!1),
        r = (0, A.bG)([e$.Ay], () => e$.Ay.hasUnreadPins(n.id), [n]),
        d = (0, tV.aL)(),
        o = s.useRef(null),
        c = s.useCallback(() => {
            t || a((e) => !e);
        }, [t]);
    function u(e) {
        e?.shiftKey || d.dispatch(er.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                et._.subscribe(er.jej.TOGGLE_CHANNEL_PINS, c),
                () => {
                    et._.unsubscribe(er.jej.TOGGLE_CHANNEL_PINS, c);
                }
            ),
            [c],
        ),
        (0, l.jsx)(tj.Y, {
            targetElementRef: o,
            shouldShow: i,
            animation: tj.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => a(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(iS.A, { ...e, onJump: u, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(th.In, {
                    ...e,
                    ref: o,
                    onClick: c,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: i_.t,
                    iconSize: 20,
                    "aria-label": z.intl.string(z.t["mp1N/2"]),
                    disabled: t,
                    showBadge: r,
                    selected: i,
                });
            },
        })
    );
};
var iL = t(306788),
    iO = t(863922),
    iM = t(822074),
    iP = t(521732);
function iD(e) {
    let { channel: n } = e,
        t = (0, e6.ni)(n),
        i = (0, A.bG)([iM.A], () => iM.A.shouldShowTopicsBar());
    return (0, l.jsx)(th.Ay.Icon, {
        icon: iL.K,
        onClick: function () {
            en.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iP.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iO.Oz)();
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var ik = t(885574),
    iU = t(947094),
    iG = t(919577),
    iw = t(207777),
    iF = t(422844),
    iH = t(435470),
    iB = t(892110),
    iV = t(45494);
function iW(e) {
    let { channel: n } = e,
        t = (0, iH.S4)(n),
        i = (0, A.bG)([iU.A], () => iU.A.hasHidden(n.id)),
        s = (0, iB.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, iF.R)(n.id),
        o = (0, A.bG)(
            [iw.A, iV.A],
            () => !!(iw.A.getThreadIds(n.id, a, r, d).length > 0) || !!(iV.A.getThreads(n.id, a, r, d).length > 0),
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
    return (0, l.jsx)(th.In, {
        tooltip: u,
        icon: ik.m,
        onClick: function () {
            return iG.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var iz = t(290136),
    iY = t(975571),
    iK = t(774418);
function iq() {
    let e = z.intl.string(iK.default.pdipXI);
    return (0, l.jsx)(th.In, {
        tooltip: e,
        icon: iz.c,
        onClick: function () {
            window.open(iY.A.getArticleURL(er.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var iX = t(742589),
    i$ = t(43105),
    iQ = t(428689),
    iZ = t(978940),
    iJ = t(387755),
    i0 = t(730852),
    i1 = t(641703),
    i2 = t(379848),
    i3 = t(753727),
    i7 = t(222692),
    i4 = t(442353),
    i9 = t(470710),
    i5 = t(186111),
    i6 = t(293246),
    i8 = t(994500),
    le = t(977997),
    ln = t(360469),
    lt = t(49999),
    li = t(731854);
class ll extends s.PureComponent {
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
                : i6.Ay.supports(li.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U))),
            (0, l.jsx)(th.Ay.Icon, { icon: iQ.n, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(th.Ay.Icon, {
            ref: this.iconRef,
            icon: iZ._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(i2.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(i$.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: ln.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lt.i.USER_DISMISS),
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
            return iJ.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, i4.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        i0.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, td.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lt.i.AUTO }),
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
        (0, i4.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, i7.A)();
    };
}
function ls(e) {
    let { channel: n } = e,
        t = (0, i3.A)(),
        i = (0, A.bG)([ne.A], () => ne.A.getMode(n.id)),
        s = (0, A.bG)([le.A], () => le.A.isInChannel(n.id)),
        a = (0, A.bG)([L.Ay], () => L.Ay.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, A.cf)([i9.A], () => ({
            callActive: i9.A.isCallActive(n.id),
            callUnavailable: i9.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([i8.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !i8.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && i8.A.isBlocked(o),
        })),
        h = (0, A.bG)([J.default], () => J.default.getUser(o)),
        g = (0, tV.Us)(),
        x = [],
        p = (0, i1.A)(n.id),
        f = (0, A.bG)([i5.A], () => i5.A.hasLayers());
    return (p && !f && x.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(ll, {
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
var la = t(277370),
    lr = t(765178),
    ld = t(231483),
    lo = t(544231),
    lc = t(338510),
    lu = t(151119),
    lh = t(278941),
    lA = t(665909),
    lm = t(327337);
let lg = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lc.u)(n.id),
        a = (0, lu.S)(n.id),
        r = (0, lh.e)(n.id),
        d = (0, g.useHasAnyModalOpen)(),
        o = (0, A.bG)([i5.A], () => i5.A.hasLayers()),
        c = s.useCallback(
            () => (a ? z.intl.string(z.t["16QyDv"]) : null != r ? z.intl.string(z.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, m] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != i &&
            (lr.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lo.xi)(n.id, [r.id]);
            }, 5e3),
            (0, lA.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: lA.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (lr.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lo.bg)(n.id);
                }, 5e3));
    }, [n, r, i, a]),
        (0, F.Ay)(() => {
            null != i &&
                (0, lA.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: lA.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && m(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, lo.xi)(n.id, [r.id]),
            null != i &&
                ((0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("79340"),
                            t.e("6627"),
                            t.e("70940"),
                            t.e("2033"),
                            t.e("19959"),
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
                    { modalKey: lm.V },
                ),
                (0, lA._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lA.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != r,
                }));
    }, [r, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(th.Ay.Icon, {
                  icon: ld.l,
                  onClick: x,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var lx = t(262763),
    lp = t(406704),
    lf = t(576705);
let lj = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, i3.A)(),
        i = (0, A.bG)([le.A], () => le.A.isInChannel(n.id)),
        a = (0, A.bG)([le.A], () => !u().isEmpty(le.A.getVoiceStatesForChannel(n.id))),
        r = (0, A.bG)([lf.A], () => lf.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, ia.A)(n.id),
        o = (0, lp.Id)(n),
        { enabled: c } = lp.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lx.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: d, locked: !1 });
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
        ? (0, l.jsx)(th.Ay.Icon, {
              icon: iZ._,
              onClick: h,
              tooltip: a ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lI = t(812991),
    lb = t(47675),
    lC = t(999291);
function lE() {
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
function ly(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, A.bG)([iC.Ay], () => iC.Ay.getSection(n.id, n?.isDM())),
        s = (0, lC.Ay)(n.getRecipientId()),
        a = lE(),
        r = i === er.YvQ.PROFILE && a;
    return (0, l.jsx)(th.In, {
        disabled: !a || t,
        tooltip: !a || t ? z.intl.string(z.t.YneDgF) : r ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lI.n,
        onClick: function () {
            (0, lb.am)({ displayProfile: s, isProfileOpen: !r }), ib.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let lv = {};
class lN extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lv[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lv[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lv;
    }
}
let lT = new lN(nS.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lv[t];
        return null == i ? ((lv[t] = new Set()), lv[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lv[n.id] && !n.unavailable && (delete lv[n.id], !0);
    },
});
var l_ = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lS = t(376943),
    lR = t(394953),
    lL = t(241541),
    lO = t(709066),
    lM = t(87664),
    lP = t(18707);
t(667532);
var lD = t(403362);
let lk = [],
    lU = es.Ay.getEnableHardwareAcceleration();
function lG(e) {
    let { user: n, channel: i, status: a, activities: r } = e,
        d = (0, A.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        o = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, A.bG)([$.A], () => $.A.isMobileOnline(n.id)),
        u = (0, A.bG)([i8.A], () => i8.A.getNickname(n.id)),
        h = (0, lM.A)(n.id),
        m = s.useRef(null);
    function g(e) {
        (0, I.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("97705"),
                t.e("26132"),
                t.e("46652"),
                t.e("93190"),
                t.e("89673"),
                t.e("82073"),
                t.e("97558"),
                t.e("91994"),
                t.e("76665"),
                t.e("24198"),
                t.e("45996"),
                t.e("792"),
                t.e("92822"),
                t.e("23427"),
                t.e("29422"),
                t.e("9291"),
                t.e("7059"),
                t.e("28864"),
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
        [f, j] = s.useState(!1);
    return (0, l.jsx)(K.A, {
        targetElementRef: m,
        user: n,
        channelId: i.id,
        position: E.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: x,
        shouldShow: f,
        onRequestClose: () => j(!1),
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
                    shouldAnimateStatus: lU,
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
                        e.shiftKey ? x?.() : j((e) => !e);
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
function lw(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function lF(e) {
    let n,
        { channel: t } = e,
        i = J.default.getCurrentUser(),
        a = i?.isStaff(),
        { analyticsLocations: r } = (0, M.Ay)(O.A.MEMBER_LIST),
        { listItems: d } = (0, A.bG)(
            [i8.A, J.default, $.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = J.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(lD.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    i8.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: $.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: $.A.getActivities(e.id) ?? lk,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: lk });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [t],
            lw,
        );
    s.useEffect(() => {
        en.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = a && d.every((e) => e.user.isStaff()),
        c = (0, lP.G)("PrivateChannelRecipients"),
        h = (0, g.useHasAnyModalOpen)(),
        m =
            ((n = J.default.getCurrentUser()),
            n?.isStaff() ? er.$aF : null != t && t.userLimit > 0 ? t.userLimit : er.wLU);
    return (0, l.jsx)(M.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: eo.kL,
            children: (0, l.jsx)("aside", {
                className: eo.yg,
                children: (0, l.jsxs)(tt.Ip, {
                    className: eo.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(D.A, {
                            className: eo.lL,
                            children: [
                                `${z.intl.string(z.t["9Oq93m"])}\u{2014}${d.length} `,
                                o && (0, l.jsx)(lO.A, { type: lO.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        d.map((e) =>
                            (0, l.jsx)(
                                lG,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                        c && d.length < m
                            ? (0, l.jsx)("div", {
                                  className: eo.Uf,
                                  children: (0, l.jsx)(la.NE, {
                                      channel: t,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: lL.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !h,
                                      entryPointType: la.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var lH = t(527549),
    lB = t(248791),
    lV = t(73502);
function lW() {
    return (0, l.jsx)("div", {
        className: lV.zt,
        children: (0, l.jsx)("header", {
            className: lB.wL,
            children: (0, l.jsxs)("div", {
                className: lB.TN,
                role: "status",
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: lB.zp,
                        children: (0, l.jsx)(x.y, {
                            type: x.y.Type.SPINNING_CIRCLE,
                            className: lB.u1,
                            itemClassName: lB.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var lz = t(138298),
    lY = t(940382),
    lK = t(790535),
    lq = t(163328),
    lX = t(425557),
    l$ = t(270003),
    lQ = t(150934),
    lZ = t(452027),
    lJ = t(292666),
    l0 = t(511274),
    l1 = t(465532),
    l2 = t(579872),
    l3 = t(119031),
    l7 = t(408018),
    l4 = t(138617),
    l9 = t(822610),
    l5 = t(915089),
    l6 = t(314307),
    l8 = t(636922),
    se = t(931664),
    sn = t(631576),
    st = t(885386),
    si = t(232835),
    sl = t(522602),
    ss = t(806150),
    sa = t(518960),
    sr = t(753738);
function sd(e, n) {
    return { type: e, message: n ?? null };
}
function so(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sc = t(659617),
    su = t(474078),
    sh = t(562465),
    sA = t(152367),
    sm = t(147087);
async function sg(e) {
    try {
        let n = await sh.Bo.post({
            url: er.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, sh.fT)(),
        });
        return n.ok ? (n.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
var sx = t(55294),
    sp = t(236726),
    sf = t(726088);
let sj = nt.oU.THREAD_CREATION;
function sI(e) {
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
                      className: sp.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: t4.C.FirstThreadMessage }),
                          (0, l.jsx)(sb, { parentChannelId: n }),
                          (0, l.jsx)(sC, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function sb(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = t4.A.getThreadSettings(n),
                t = t4.A.getDraft(n, t4.C.FirstThreadMessage).trim(),
                i = sl.A.getUploads(n, t4.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? l2.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, t1.bA)(n);
                      },
                  })
                : (0, t1.bA)(n);
        }, [n]);
    return (0, l.jsxs)(th.Ay, {
        toolbar: (0, l.jsx)(th.Ay.Icon, { icon: tE.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(th.Ay.Icon, { icon: lq.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(th.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sC(e) {
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
            let t = (0, A.bG)([t4.A], () => t4.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        l((e) => ({ ...e, ...t })), l1.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(t, i),
        { textAreaState: m, setTextAreaState: g } = (function (e, n) {
            let [t, i] = s.useState((0, l7.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = t4.A.getDraft(e.id, t4.C.FirstThreadMessage);
                        (0 === l.length || !0 === t) && i((0, l7.ur)(l)), n(t4.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        t(!0),
                        t4.A.addChangeListener(t),
                        () => {
                            t4.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        x = (0, sc.EN)(t),
        {
            isGeneratingAI: p,
            enableAIFeatures: f,
            getThreadNameInputAccessory: j,
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
                h = (0, sm.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = si.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await sg(e);
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
                                icon: sA.D,
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
                                  children: (0, l.jsx)(na.K, {
                                      icon: sA.D,
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
            nameError: I,
            messageError: b,
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
                g = (0, sx.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: r,
                    onThreadCreated: t1.JA,
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
                                (l = se.A.getStickerPreview(n.id, sj.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sl.A.getUploads(n.id, t4.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(o ? sd(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sd(0, z.intl.string(z.t.kesTVT)) : null),
                            o || u)
                        )
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, ss.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sj,
                            channel: null == t ? n : null,
                        });
                        if (!x) return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, l, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), sd(1, (0, sr.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sd(2, z.intl.string(z.t.uXA573)));
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, sn.x5)(n.id, sj.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 };
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
        y = (0, sc.Iy)(c, x) ? lX.t : lq.y;
    return (0, l.jsx)("div", {
        className: sp.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, l.jsx)("div", {
            className: r()(sp.Og, `group-spacing-${d}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: sp.Zd,
                children: [
                    (0, l.jsx)(tt.Ip, {
                        className: sp.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sp.bv,
                            children: [
                                (0, l.jsxs)(l6.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(sf.P0, sp.P0),
                                            children: (0, l.jsx)(y, { className: sf.Kk }),
                                        }),
                                        (0, l.jsxs)(l$.n, {
                                            children: [
                                                (0, l.jsx)(sy, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: I,
                                                    disabled: E,
                                                    isGeneratingAI: p,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: j,
                                                }),
                                                t.type === er.rbe.GUILD_TEXT
                                                    ? (0, l.jsx)(sE, {
                                                          startedFromMessage: null != i,
                                                          threadSettings: c,
                                                          updateThreadSettings: h,
                                                          privateThreadMode: x,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sN, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sp.Eh,
                        children: [
                            (0, l.jsx)(sv, {
                                parentChannel: t,
                                textAreaState: m,
                                setTextAreaState: g,
                                submit: C,
                                error: b,
                            }),
                            (0, l.jsx)(l3.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sp.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sE(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        a = (0, sc.Iy)(t, s),
        r = (0, l.jsx)(lQ.S, {
            disabled: s === sc.jk.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === sc.jk.Disabled
        ? null
        : (0, l.jsx)(lZ.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: a ? z.intl.string(z.t.EWXycz) : void 0,
              children: r,
          });
}
function sy(e) {
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
        h = so(a, { content: u }),
        A = (0, sc.l1)(n, t),
        m = null != t && !o,
        g = (0, l5.GV)(),
        x = o ? z.intl.string(z.t["Nb2/RE"]) : "" !== A ? A : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(lJ.k, {
        label: z.intl.string(m ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: g,
        placeholder: x,
        maxLength: er.Ign,
        onChange: function (e) {
            s({ name: (0, su.A)(e, !1) }), "" !== e ? R.A.startTyping(n.id) : R.A.stopTyping(n.id);
        },
        onBlur: function () {
            let e = (0, su.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || d,
    });
}
function sv(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: a, error: d } = e,
        [o, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        m = s.useCallback(() => c(!1), []),
        g = s.useCallback(
            (e, t, l) => {
                l1.A.saveDraft(n.id, t, t4.C.FirstThreadMessage),
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
    let p = (0, A.bG)([lf.A], () => lf.A.can(er.xBc.ATTACH_FILES, n)),
        f = so(d, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l9.A, { channelId: n.id, type: sj, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sp.xN, children: (0, l.jsx)(l0.U, { error: f }) }),
            (0, l.jsx)(l4.Ay, {
                type: sj,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sp.gM, sp.Yy),
                innerClassName: r()(sp.SL, { [sp.cr]: null != f }),
                onFocus: h,
                onBlur: m,
                onChange: g,
                onSubmit: x,
                promptToUpload: sa.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sN(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, A.bG)([si.A], () => (null == t ? null : si.A.getMessage(n.id, t))),
        s = st.hH.useSetting();
    return null != i
        ? (0, l.jsx)(l8.A, {
              className: sp.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sT = t(305866),
    s_ = t(707539),
    sS = t(702513),
    sR = t(111847);
function sL(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e6.ni)(n),
        d = s.useCallback(() => {
            i(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, s_.D3)("Popout"), i(!t);
        }, [t]);
    return (0, l.jsx)(tj.Y, {
        targetElementRef: a,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: t,
        onRequestClose: d,
        renderPopout: function () {
            return (0, l.jsx)(sT.l, {
                children: (0, l.jsx)(sS.A, { className: sR.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(th.In, {
                ...e,
                ref: a,
                className: sR.Kk,
                onClick: o,
                icon: lq.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sO = t(40389),
    sM = t(148494),
    sP = t(56562);
function sD(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(tj.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(sk, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nV.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function sk(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tv.A)(n),
        a = (0, tS.A)(n),
        r = (0, tM.A)(n.id),
        d = (0, tO.A)(n),
        o = (0, tU.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, tN.A)(n),
        h = (0, tT.A)(n),
        m = (0, t_.A)(n, "Toolbar Overflow"),
        g = (0, tR.A)(n),
        x = (0, sO.A)(n),
        p = (0, tk.A)(n),
        f = (0, tL.A)(n),
        j = n.isThread()
            ? (0, l.jsx)(tb.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      sM.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: sP.vx.INSTANT });
                  },
              })
            : null,
        I = st.SY.useSetting(),
        b = (0, A.bG)([le.A], () => !u().isEmpty(le.A.getVoiceStatesForChannel(n.id)));
    return (0, l.jsxs)(tI.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tb.rX, { children: [m, x] }),
            (0, l.jsxs)(tb.rX, {
                children: [
                    j,
                    d,
                    g,
                    r,
                    I && !b
                        ? (0, l.jsx)(tb.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, t1.JA)(n);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, l.jsxs)(tb.rX, { children: [p, s, a, h] }),
            (0, l.jsxs)(tb.rX, { children: [c, o] }),
        ],
    });
}
var sU = t(332456),
    sG = t(973854),
    sw = t(73137);
function sF(e) {
    var n;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, A.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, A.bG)([nQ.A], () => nQ.A.getGuild(o?.getGuildId())),
        h = (0, tc.Ay)(o),
        m = (0, tg.Uf)(o);
    (n = o),
        (i = (0, A.bG)([le.A], () => null != n && !u().isEmpty(le.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nS.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tG.N9)(n, { source: tJ.H9.VOICE_AUTO_OPEN }));
        }, [i, n]);
    let g = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || g.current) return;
            g.current = !0;
            let e = (0, sU.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, sG.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    if (null != m) return (0, l.jsx)(tx.A, { guild: c, channelId: m });
    let x = (0, l.jsx)(t7, { channel: o, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: o, draftType: t4.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: x,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tA.zF)({
                    channel: o,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, I.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("26132"),
                                t.e("38730"),
                                t.e("47502"),
                                t.e("84615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: o });
                        });
                    },
                    handleClick: function () {
                        null != o && (0, tG.iN)(o.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: sw.T,
                children: (0, l.jsx)(tu.A, { channel: o, guild: c, chatInputType: nt.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sH = t(210714),
    sB = t(975732),
    sV = t(707554),
    sW = t(140735),
    sz = t(590180),
    sY = t(32206),
    sK = t(372320),
    sq = t(562153),
    sX = t(945810);
let s$ = (0, sX.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function sQ(e) {
    return s$.useConfig({ location: e }).enabled;
}
var sZ = t(215530),
    sJ = t(454719),
    s0 = t(736653),
    s1 = t(311016),
    s2 = t(480335),
    s3 = t(713517),
    s7 = t(183555),
    s4 = t(718019),
    s9 = t(413492),
    s5 = t(915614),
    s6 = t(308244),
    s8 = t(743987),
    ae = t(900179),
    an = t(946356),
    at = t(465829),
    ai = t(35241),
    al = t(587168),
    as = t(442228),
    aa = t(744808);
let ar = (0, sX.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var ad = t(444793);
function ao(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function ac(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: a } = e,
        { showButton: r } = ar.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !r) return null;
    function d() {
        a(), (0, lb.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
    }
    if (s)
        return (0, l.jsx)("div", {
            className: ad.lS,
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
              className: ad.qr,
              children: (0, l.jsx)(ns.D, {
                  onClick: d,
                  className: ad.wC,
                  children: (0, l.jsx)(y.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: ad.xQ, children: [(0, l.jsx)(aa.A, { frame: i, filterLayer: ao }), o] })
        : o;
}
var au = t(996988),
    ah = t(357786),
    aA = t(86434);
function am(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        a = __OVERLAY__ || !(0, s1.A)(n.id),
        d = (0, lC.Ay)(n.id),
        o = (0, s0.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        h = (0, s7.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        A = s.useRef(null),
        { isHoveringOrFocusing: m, isHovering: g } = (0, s3.A)(A);
    function x() {
        (0, sB.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(M.f5, {
        value: u,
        children: (0, l.jsx)(s7.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsxs)(an.A, {
                ref: A,
                user: n,
                displayProfile: d,
                themeType: au.d.SIDEBAR,
                themeOverride: o,
                className: i ? r()(ah.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tt.d_, {
                        className: i ? ah.BE : void 0,
                        children: [
                            (0, l.jsx)(al.A, { children: (0, l.jsx)(ai.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: ah.wx,
                                children: [
                                    (0, l.jsx)(s5.A, {
                                        user: n,
                                        displayProfile: d,
                                        themeType: au.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !m,
                                    }),
                                    (0, l.jsx)(s4.A, {
                                        user: n,
                                        displayProfile: d,
                                        channelId: t.id,
                                        themeType: au.d.SIDEBAR,
                                        onOpenProfile: a ? void 0 : x,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: aA.rf,
                                children: [
                                    (0, l.jsx)(at.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sq.Ay.getName(null, t.id, n),
                                        onClickName: a ? void 0 : x,
                                        pronouns: d?.pronouns,
                                        trailing: (0, l.jsx)(s9.A, {
                                            displayProfile: d,
                                            themeType: au.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(as.A, {
                                                      userId: n.id,
                                                      userBio: d?.bio,
                                                      isHoveringOrFocusing: m,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(ae.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s8.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(an.A.Overlay, {
                                              className: aA.Lw,
                                              children: [
                                                  d?.bio != null &&
                                                      "" !== d.bio &&
                                                      (0, l.jsx)(ae.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(s6.A, {
                                                              userBio: d?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: m,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(ae.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s8.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !a &&
                        (0, l.jsx)(ac, {
                            handleOpenProfile: x,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    d?.profileEffect != null && (0, l.jsx)(s2.A, { skuId: d?.profileEffect?.skuId, isHovering: g }),
                ],
            }),
        }),
    });
}
var ag = t(331322),
    ax = t(249790),
    ap = t(254828),
    af = t(783123),
    aj = t(898711);
function aI(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: a } = e,
        r = (0, lC.Ay)(n.id),
        d = (0, s0.Ay)(),
        o = (0, A.bG)([i8.A], () => i8.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, M.Ay)(o ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        u = (0, s7.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        h = s.useRef(null);
    return (0, l.jsx)(M.f5, {
        value: c,
        children: (0, l.jsx)(s7.of, {
            value: u,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(an.A, {
                ref: h,
                user: n,
                displayProfile: r,
                themeType: au.d.SIDEBAR,
                themeOverride: d,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tt.d_, {
                    children: (0, l.jsxs)("div", {
                        className: aj.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: aj.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: aj.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: aj.N1,
                                        children: [
                                            (0, l.jsx)(ax.A, { user: n }),
                                            (0, l.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(o ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: sq.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ag.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(af.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    a(),
                                                        (0, lb.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        });
                                                },
                                            }),
                                            (0, l.jsx)(ap.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    a(),
                                                        (0, lb.Wn)({
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
var ab = t(534740),
    aC = t(717421),
    aE = t(31956),
    ay = t(673843),
    av = t(561794),
    aN = t(321191),
    aT = t(679492),
    a_ = t(439053),
    aS = t(312381),
    aR = t(349419),
    aL = t(984545),
    aO = t(193738),
    aM = t(133385),
    aP = t(983495),
    aD = t(695366),
    ak = t(922590),
    aU = t(821269),
    aG = t(93246),
    aw = t(351906),
    aF = t(383199),
    aH = t(559506),
    aB = t(361311),
    aV = t(931481),
    aW = t(501193),
    az = t(383448),
    aY = t(646986),
    aK = t(243166),
    aq = t(360563),
    aX = t(123292),
    a$ = t(840411),
    aQ = t(909536);
let aZ = (0, sX.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aJ = t(666810),
    a0 = t(711690),
    a1 = t(394300),
    a2 = t(575593),
    a3 = t(44120),
    a7 = t(532794),
    a4 = t(317560),
    a9 = t(99161),
    a5 = t(661492),
    a6 = t(212387),
    a8 = t(662349),
    re = t(479026),
    rn = t(636374),
    rt = t(699976),
    ri = t(202541),
    rl = t(518477),
    rs = t(356727),
    ra = t(134222);
function rr(e) {
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
        { trackUserProfileWishlistAction: m } = (0, s7.NJ)(),
        g = sQ("DMSidePanelWishlistItemCard") ? rt.y.SIZE_78 : rt.y.SIZE_90,
        x = rt.Z[g],
        p = s.useCallback(() => {
            m({
                action: rl.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                u();
        }, [n, i, u, m]),
        f = s.useCallback(() => {
            m({
                action: rl.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [h, n.id, i, n.productLine, m]),
        {
            onBodyClick: j,
            onOverlayClick: I,
            showOverlayButton: b,
            routesToGift: C,
            label: E,
            icon: y,
        } = (0, rn.P)({ wishlistOwner: t, isOwned: !1, shortText: !0, onDetailsClick: p, onPurchaseClick: f }),
        [v, N] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: rs.kL,
        children: (0, l.jsxs)(a6.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: c,
            sku: n,
            user: t,
            spec: x,
            cardStyle: r()(rs.Nr, a),
            skuPreviewStyle: r()(rs.ho, d),
            skuAssetClassName: v ? o : void 0,
            onClick: j,
            "aria-label": C ? (0, a5.T)(n) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a5.T)(n) }),
            onHoverOrFocusChange: N,
            children: [
                b &&
                    (0, l.jsx)(a8.A, {
                        spec: x,
                        onClick: I,
                        isHoveringOrFocusing: v,
                        label: E,
                        icon: E.length < 6 ? y : void 0,
                    }),
                A?.(b && v),
            ],
        }),
    });
}
function rd(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        { analyticsLocations: r } = (0, M.Ay)(
            ...(i ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        d = s.useCallback(() => {
            (0, a9.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: r },
            );
        }, [n, t, r]),
        o = s.useCallback(() => {
            (0, a4.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [n.id, n.applicationId, t, r]);
    return (0, l.jsx)(rr, {
        sku: n,
        analyticsLocations: r,
        wishlistOwner: t,
        onDetailsClick: o,
        onPurchaseClick: d,
        ...a,
    });
}
function ro(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        d = s.useCallback(() => {
            (0, a3.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        o = (0, re.e)({ sku: n, giftRecipient: t, giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                r()(rs.ML, {
                    [rs.M]: n?.tenantMetadata?.collectibles?.type === a2.R.AVATAR_DECORATION,
                    [rs.Hm]: n?.tenantMetadata?.collectibles?.type === a2.R.PROFILE_EFFECT,
                    [rs.hH]: n?.tenantMetadata?.collectibles?.type === a2.R.PROFILE_FRAME,
                    [rs.qF]: n?.tenantMetadata?.collectibles?.type === a2.R.NAMEPLATE,
                    [rs.l2]: n?.tenantMetadata?.collectibles?.type === a2.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(rr, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: o,
        onPurchaseClick: d,
        skuPreviewStyle: c,
        ...a,
    });
}
function rc(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: a, style: d, ...o } = e,
        c = s.useCallback(() => {
            (0, a7.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = a === av.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(rr, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: a,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: r()(ra.MO, { [rs.F5]: u }),
        style: d,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: r()(rs.fi, { [rs.sp]: e }),
                      children: (0, l.jsx)(y.E, {
                          className: r()(rs.p7, { [rs.SW]: h.length >= 10, [rs.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...o,
    });
}
function ru(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rd, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(ro, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(rc, { sku: n, ...t });
        default:
            return null;
    }
}
var rh = t(158045),
    rA = t(535089),
    rm = t(448476);
function rg(e) {
    let {
            unownedWishlistItems: n,
            profileOwner: t,
            onClick: i,
            wishlistId: a,
            isNitroRecEnabled: r,
            isSortingNitroToFront: d,
        } = e,
        { analyticsLocations: o } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: c } = (0, s7.NJ)(),
        u = (0, s.useId)(),
        h = (0, s.useMemo)(() => (d ? (0, a$.gm)(n ?? []) : (n ?? [])), [n, d]),
        A = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        m = (0, s.useMemo)(() => {
            let e = h.slice(0, 3).map((e) => ({ item: e, source: av.uS.WISHLIST }));
            if (r && e.length < 3) {
                let n = h.some((e) => rh.Ay.isPremiumSku(e.skuId));
                if (!rh.Ay.isPremiumAtLeast(t.premiumType, ri.PremiumTypes.TIER_2) && !n) {
                    let n = a1.A.fromSKU((0, a$.rI)());
                    null != n &&
                        (d
                            ? e.unshift({ item: n, source: av.uS.POPULAR })
                            : e.push({ item: n, source: av.uS.POPULAR }));
                }
            }
            return e;
        }, [h, r, t.premiumType, d]),
        g = (0, s.useMemo)(
            () =>
                new Set(
                    m.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [m],
        ),
        x = (0, rA.A)({ wishlistId: a ?? null, onAction: A, productLines: g }),
        p = (0, s.useMemo)(
            () =>
                m
                    .map((e, n) => {
                        let { item: s, source: r } = e;
                        return null == s.sku
                            ? null
                            : (0, l.jsx)(
                                  ru,
                                  {
                                      sku: s.sku,
                                      index: n,
                                      wishlistOwner: t,
                                      wishlistId: a,
                                      analyticsLocations: o,
                                      onViewWishlist: i,
                                      source: r,
                                  },
                                  s.skuId,
                              );
                    })
                    .filter(lD.Vq),
            [o, i, t, m, a],
        );
    return 0 === p.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(an.A.Overlay, {
                  ref: x,
                  className: rm.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: rm.wx,
                          children: [
                              (0, l.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: u,
                                  children: z.intl.string(z.t["7lZ31J"]),
                              }),
                              h.length > 3 &&
                                  (0, l.jsx)(aX.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(sV.F, { children: (0, l.jsx)("div", { className: rm.vY, children: p }) }),
                  ],
              }),
          });
}
function rx(e) {
    let n = (0, a0.a)("UserProfileSidebarWishlistBreadcrumb");
    return (0, l.jsx)(rg, { ...e, isSortingNitroToFront: n });
}
function rp(e) {
    var n;
    let t,
        i,
        { isLoading: s, unownedWishlistItems: a, canSeeWishlist: r = !1, ...d } = e,
        o =
            ((n = "UserProfileSidebarWishlistBreadcrumb"),
            (t = (0, aQ.Gh)(n)),
            (i = aZ.useConfig({ location: n }).isEnabled),
            t && i && r);
    if (s || d.profileOwner.bot || ((null == a || 0 === a.length) && !o)) return null;
    let c = J.default.getCurrentUser()?.id,
        u = null != c && c !== d.profileOwner.id,
        h = a?.some((e) => rh.Ay.isPremiumSku(e.skuId)) ?? !1,
        A = o && (a ?? []).length < 3;
    return (0, l.jsx)(aJ.h, {
        isGifting: u,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children:
            u && (h || A)
                ? (0, l.jsx)(rx, { ...d, unownedWishlistItems: a, isNitroRecEnabled: o })
                : (0, l.jsx)(rg, { ...d, unownedWishlistItems: a, isNitroRecEnabled: o, isSortingNitroToFront: !1 }),
    });
}
function rf(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: a,
            isHoveringOrFocusing: r,
            isRedesignEnabled: d,
            onOpenProfile: o,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, A.cf)([i8.A], () => ({
            relationshipType: i8.A.getRelationshipType(n.id),
            originApplicationId: i8.A.getOriginApplicationId(n.id),
        })),
        h = (0, ak.fi)(n.id),
        m = (0, aU.q)({ userId: n.id }),
        g = (0, A.bG)([aw.A], () => aw.A.hidePersonalInformation),
        x = (0, A.bG)([aN.A], () => aN.A.getUserProfile(n.id)?.application),
        p = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, A.cf)([aN.A], () => ({ defaultWishlistId: aN.A.getFirstWishlistId(n.id) })),
        { wishlist: j, isFetching: I } = (0, av.fw)({ wishlistId: d ? f : void 0, userId: n.id });
    (0, ay.A)(j);
    let b = s.useMemo(() => j?.items.filter((e) => !e.isOwned) ?? null, [j]);
    return (0, l.jsxs)("div", {
        className: aA.rf,
        children: [
            (0, l.jsx)(aH.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: aA.pq,
                children: [
                    (0, l.jsx)(at.Ay, {
                        user: n,
                        guildId: a.guild_id,
                        displayName: sq.Ay.getName(null, a.id, n),
                        onClickName: o,
                        displayNameTrailing: g
                            ? null
                            : (0, l.jsx)(aK.A, { userId: n.id, isVisible: r, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(s9.A, {
                            displayProfile: i,
                            themeType: au.d.SIDEBAR,
                            isRedesignEnabled: d,
                        }),
                    }),
                    d && (0, l.jsx)(aq.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            c === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(an.A.Overlay, {
                    children: (0, l.jsx)(aV.A, { user: n, channelId: a.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    an.A.Overlay,
                    {
                        children: (0, l.jsx)(aV.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(az.A, { user: n }),
            i?.private &&
                (0, l.jsx)(an.A.Overlay, { children: (0, l.jsx)(aW.A, { username: sq.Ay.getName(null, a.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(an.A.Overlay, {
                    className: aA.Lw,
                    children: (0, l.jsx)(ae.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: (0, l.jsx)(aD.E, { size: "xxs", color: nh.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aG.T, { userId: n.id }),
                    }),
                }),
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(as.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: g,
                            isHoveringOrFocusing: r,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(ae.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(s8.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: aA.kR,
                children: [
                    d && p && (0, l.jsx)(aR.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: o }),
                    (0, l.jsx)(aY.A, { user: n, currentUser: t, onOpenUserProfileModal: o }),
                    d
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  x?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aF.A, {
                                          applicationId: x.id,
                                          commandIds: x.popularApplicationCommandIds,
                                          channel: a,
                                      }),
                                  m.length > 0 &&
                                      (0, l.jsx)(ae.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aB.A, { applicationIds: m }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(an.A.Overlay, {
                              className: aA.Lw,
                              children: [
                                  !g &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(ae.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(s6.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: r,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          x?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aF.A, {
                                                  applicationId: x.id,
                                                  commandIds: x.popularApplicationCommandIds,
                                                  channel: a,
                                              }),
                                          m.length > 0 &&
                                              (0, l.jsx)(ae.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aB.A, { applicationIds: m }),
                                              }),
                                          (0, l.jsx)(ae.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(s8.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    d &&
                        (0, l.jsx)(rp, {
                            profileOwner: n,
                            unownedWishlistItems: b,
                            wishlistId: f,
                            isLoading: I,
                            onClick: () => {
                                o?.({ tabSection: rl.RP.WISHLIST });
                            },
                            canSeeWishlist: null != j,
                        }),
                ],
            }),
        ],
    });
}
var rj = t(114212),
    rI = t(913453),
    rb = t(229187),
    rC = t(21241),
    rE = t(503062),
    ry = t(51943),
    rv = t(847374),
    rN = t(320448),
    rT = t(882255);
function r_(e) {
    let { section: n, header: t, items: i, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, s7.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? rv.a : rN._;
    return (0, l.jsxs)("section", {
        className: rT.uW,
        children: [
            (0, l.jsxs)(ns.D, {
                className: r()(rT.wx, rT.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(rT.p_, a), children: i }),
        ],
    });
}
var rS = t(185301);
function rR(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, M.Ay)(),
        { context: s } = (0, s7.NJ)(),
        a = (0, ty.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, rI.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, l.jsxs)(an.A.Overlay, {
              className: rS.Lw,
              children: [
                  u &&
                      (0, l.jsx)(r_, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: rS.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  ry.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, n$.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(rC.A, { className: rS.yF }),
                  c &&
                      (0, l.jsx)(r_, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: rS.p_,
                          onExpand: () => (0, rb.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: rS.nC,
                                                children: [
                                                    (0, l.jsx)(rj.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(rj.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            rE.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, sB.openUserProfileModal)({
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
function rL(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: a } = e,
        d = __OVERLAY__,
        o = (0, lC.Ay)(n.id),
        c = (0, s0.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: m } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        g = (0, s7.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id }),
        x = s.useRef(null),
        { isHoveringOrFocusing: p, isHovering: f } = (0, s3.A)(x),
        j = (0, aT.fC)(),
        I = (0, sK.A)(o?.profileFrame?.skuId, "UserProfileSidebar");
    (0, aE.A)({ skuId: o?.profileFrame?.skuId, openedAt: u.current, context: g, analyticsLocations: m });
    let b = (0, aC.z)({ opacity: +(null != j.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, sB.openUserProfileModal)({ sourceAnalyticsLocations: m, hideRestrictedProfile: !0, ...g, ...e });
    }
    let E = o?.widgets != null && o.widgets.length > 0,
        { defaultWishlistId: y } = (0, A.cf)([aN.A], () => ({ defaultWishlistId: aN.A.getFirstWishlistId(n.id) })),
        { wishlist: v, isFetching: N } = (0, av.fw)({ wishlistId: a ? void 0 : y, userId: n.id });
    (0, ay.A)(v);
    let T = s.useMemo(() => (null == v ? null : v.items.filter((e) => !e.isOwned)), [v]);
    return (0, l.jsx)(M.f5, {
        value: m,
        children: (0, l.jsx)(s7.of, {
            value: g,
            openedAt: u.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(aT.Hl, {
                value: j,
                children: (0, l.jsxs)(an.A, {
                    ref: x,
                    user: n,
                    displayProfile: o,
                    themeType: au.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: a ? o?.profileFrame?.skuId : null,
                    className: a ? r()(ah.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: o?.private === !0,
                    children: [
                        o?.private === !0 && (0, l.jsx)(aS.A, {}),
                        null != j.interactionType && (0, l.jsx)(ab.animated.div, { style: b, className: ah.tB }),
                        (0, l.jsxs)(tt.d_, {
                            className: r()(a && ah.BE, !a && null != I && ah.It),
                            children: [
                                (0, l.jsxs)(al.A, {
                                    children: [
                                        (0, l.jsx)(aO.A, { user: n, themeType: au.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aL.A, { user: n }) : (0, l.jsx)(aM.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ah.wx,
                                    children: [
                                        (0, l.jsx)(s5.A, {
                                            user: n,
                                            displayProfile: o,
                                            themeType: au.d.SIDEBAR,
                                            specOverrides: a
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !p,
                                            className: ah.vK,
                                        }),
                                        (0, l.jsx)(a_.A, { userId: n.id, className: ah.oR }),
                                        (0, l.jsx)(s4.A, {
                                            user: n,
                                            displayProfile: o,
                                            channelId: i.id,
                                            themeType: au.d.SIDEBAR,
                                            onOpenProfile: d ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aP.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: au.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rf, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: o,
                                    channel: i,
                                    isHoveringOrFocusing: null == j.interactionType && p,
                                    isRedesignEnabled: a,
                                    onOpenProfile: d ? void 0 : C,
                                }),
                                !a &&
                                    E &&
                                    (0, l.jsx)("div", {
                                        className: ah.sJ,
                                        children: (0, l.jsx)(aR.A, {
                                            user: n,
                                            widgets: o.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !a &&
                                    (0, l.jsx)("div", {
                                        className: ah.vS,
                                        children: (0, l.jsx)(rp, {
                                            profileOwner: n,
                                            unownedWishlistItems: T,
                                            wishlistId: y,
                                            isLoading: N,
                                            onClick: () => {
                                                C?.({ tabSection: rl.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != v,
                                        }),
                                    }),
                                !a && (0, l.jsx)(rR, { user: n, channelId: i.id }),
                            ],
                        }),
                        !d &&
                            (0, l.jsx)(ac, {
                                context: g,
                                analyticsLocations: m,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: a,
                            }),
                        o?.profileEffect != null && (0, l.jsx)(s2.A, { skuId: o?.profileEffect?.skuId, isHovering: f }),
                        a && null != I && (0, l.jsx)(aa.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var rO = t(219277);
function rM(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, A.bG)([J.default], () => J.default.getUser(t)),
        a = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        r = lE(),
        [d, o] = (0, sZ.A)(t),
        [c, u] = s.useState(!1),
        h = sQ("UserProfileSidebarRenderer"),
        m = (0, lC.Ay)(t),
        g = (0, sY.c)("UserProfileSidebarRenderer") ? m?.profileFrame?.skuId : void 0,
        x = (0, sK.A)(g, "UserProfileSidebarRenderer"),
        p = (0, A.bG)([sz.A], () => sz.A.getProductFetch(g));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, sJ.A)(i, e) : (0, sJ.A)(t, void 0, e);
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
        j = sq.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? rO.H : void 0,
        children: (0, l.jsx)(sV.F, {
            component: (0, l.jsx)(sW.A, {
                children: (0, l.jsx)(sV.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: j }) }),
            }),
            children:
                null == i || null == a
                    ? null
                    : d
                      ? (0, l.jsx)(aI, { user: i, currentUser: a, onHide: o, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(am, { user: i, currentUser: a, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(rL, { user: i, currentUser: a, isRedesignEnabled: h, ...e }),
        }),
    });
}
var rP = t(522556),
    rD = t(225315),
    rk = t(684407),
    rU = t(95701),
    rG = t(919638),
    rw = t(763827),
    rF = t(812771),
    rH = t(946228),
    rB = t(462887),
    rV = t(276293),
    rW = t(844913),
    rz = t(745652);
let rY = () => {
    let e = (0, s0.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, rB.M)(e) ? rz : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: rW.kL,
        children: [
            (0, l.jsxs)(iX.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(iX.A.Icon, { icon: rV.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iX.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: rW.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: rW.j0, src: n }),
                    (0, l.jsx)(S.D, {
                        className: rW.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(y.E, {
                        className: rW.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rK = t(943712),
    rq = t(402216),
    rX = t(746080),
    r$ = t(806931),
    rQ = t(165610),
    rZ = t(516607),
    rJ = t(354919);
function r0() {
    return (0, l.jsx)("div", { className: rJ.wG, children: (0, l.jsx)(x.y, {}) });
}
let r1 = (0, nT.Fe)({
    createPromise: () =>
        Promise.all([
            t.e("78250"),
            t.e("41838"),
            t.e("45438"),
            t.e("64488"),
            t.e("56007"),
            t.e("65482"),
            t.e("35941"),
            t.e("37944"),
            t.e("57088"),
            t.e("49681"),
            t.e("66140"),
            t.e("33097"),
            t.e("4374"),
            t.e("89160"),
            t.e("21225"),
            t.e("23685"),
            t.e("42516"),
            t.e("76001"),
        ]).then(t.bind(t, 492385)),
    webpackId: 492385,
    renderLoader: r0,
    name: "ForumChannel",
});
function r2() {
    return Promise.all([
        t.e("97950"),
        t.e("36736"),
        t.e("6229"),
        t.e("21792"),
        t.e("57504"),
        t.e("64636"),
        t.e("56486"),
        t.e("67732"),
        t.e("55045"),
        t.e("67902"),
        t.e("17791"),
        t.e("80263"),
        t.e("76880"),
        t.e("83393"),
        t.e("25621"),
        t.e("48570"),
        t.e("80427"),
        t.e("69785"),
        t.e("24092"),
        t.e("13221"),
        t.e("48019"),
        t.e("76739"),
        t.e("78931"),
        t.e("20230"),
        t.e("42704"),
        t.e("88872"),
        t.e("39411"),
        t.e("17909"),
        t.e("75899"),
        t.e("147"),
        t.e("58983"),
        t.e("68201"),
        t.e("36686"),
        t.e("792"),
        t.e("92822"),
        t.e("9291"),
        t.e("63584"),
        t.e("29260"),
        t.e("39103"),
        t.e("36624"),
        t.e("4098"),
        t.e("755"),
        t.e("49013"),
        t.e("33448"),
        t.e("15275"),
        t.e("4374"),
        t.e("22644"),
        t.e("95992"),
        t.e("74821"),
        t.e("43710"),
        t.e("15057"),
        t.e("26792"),
        t.e("54624"),
        t.e("22094"),
        t.e("45916"),
        t.e("26223"),
        t.e("70011"),
        t.e("91553"),
        t.e("61924"),
        t.e("15980"),
        t.e("42492"),
        t.e("30761"),
        t.e("97306"),
        t.e("36793"),
        t.e("14842"),
    ]).then(t.bind(t, 540462));
}
let r3 = (0, nT.Fe)({ createPromise: r2, webpackId: 540462, name: "ChannelCall", renderLoader: r0 });
function r7() {
    return Promise.all([
        t.e("48019"),
        t.e("15462"),
        t.e("36736"),
        t.e("6229"),
        t.e("21792"),
        t.e("57504"),
        t.e("64636"),
        t.e("56486"),
        t.e("67732"),
        t.e("55045"),
        t.e("67902"),
        t.e("17791"),
        t.e("13221"),
        t.e("42704"),
        t.e("50350"),
        t.e("25621"),
        t.e("48570"),
        t.e("80427"),
        t.e("69785"),
        t.e("31282"),
        t.e("68201"),
        t.e("792"),
        t.e("92822"),
        t.e("9291"),
        t.e("63584"),
        t.e("29260"),
        t.e("4098"),
        t.e("755"),
        t.e("49013"),
        t.e("33448"),
        t.e("15275"),
        t.e("4374"),
        t.e("22644"),
        t.e("56373"),
        t.e("20577"),
        t.e("74821"),
        t.e("43710"),
        t.e("60536"),
        t.e("26792"),
        t.e("64287"),
        t.e("54624"),
        t.e("22094"),
        t.e("45916"),
        t.e("70011"),
        t.e("91553"),
        t.e("61924"),
        t.e("15980"),
        t.e("42492"),
        t.e("30761"),
        t.e("97306"),
        t.e("78827"),
        t.e("28732"),
    ]).then(t.bind(t, 67319));
}
let r4 = (0, nT.Fe)({ createPromise: r7, webpackId: 67319, name: "StageChannelCall", renderLoader: r0 }),
    r9 = (0, nT.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("87524"),
                t.e("65482"),
                t.e("36893"),
                t.e("48149"),
                t.e("63933"),
                t.e("65831"),
                t.e("59729"),
                t.e("86422"),
                t.e("49681"),
                t.e("28235"),
                t.e("61058"),
                t.e("33097"),
                t.e("74333"),
                t.e("39214"),
                t.e("13582"),
                t.e("43184"),
                t.e("21225"),
                t.e("79171"),
                t.e("17664"),
                t.e("62368"),
            ]).then(t.bind(t, 104731)),
        webpackId: 104731,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(lW, {});
        },
    }),
    r5 = (0, nT.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("83647"),
                t.e("91109"),
                t.e("87085"),
                t.e("72118"),
                t.e("63933"),
                t.e("65831"),
                t.e("59729"),
                t.e("3240"),
                t.e("72767"),
                t.e("38647"),
                t.e("49681"),
                t.e("28136"),
                t.e("7775"),
                t.e("28235"),
                t.e("61058"),
                t.e("33097"),
                t.e("36002"),
                t.e("74333"),
                t.e("66913"),
                t.e("71719"),
                t.e("13848"),
            ]).then(t.bind(t, 754744)),
        webpackId: 754744,
        name: "GuildMemberModViewSidebar",
    });
class r6 extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sH.d0)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? r2() : e === er.rbe.GUILD_STAGE_VOICE && r7();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, tG.iN)(e.id);
    };
    _handleContextMenu = (e, n) => {
        switch (n.type) {
            case er.rbe.GUILD_VOICE:
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
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
            (0, sB.openUserProfileModal)({
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
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("26132"),
                    t.e("47502"),
                    t.e("9004"),
                    t.e("30997"),
                    t.e("79995"),
                    t.e("44058"),
                    t.e("91377"),
                    t.e("35723"),
                    t.e("56372"),
                    t.e("29542"),
                    t.e("59545"),
                ]).then(t.bind(t, 22496));
                return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
            });
    }
    openThreadContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([t.e("26132"), t.e("38730"), t.e("47502"), t.e("84615")]).then(
                    t.bind(t, 612826),
                );
                return (t) => (0, l.jsx)(e, { ...t, channel: n });
            });
    }
    openDMContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = J.default.getUser(n.getRecipientId());
        o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("97705"),
                    t.e("26132"),
                    t.e("46652"),
                    t.e("93190"),
                    t.e("38730"),
                    t.e("89673"),
                    t.e("82073"),
                    t.e("97558"),
                    t.e("91994"),
                    t.e("76665"),
                    t.e("47502"),
                    t.e("45996"),
                    t.e("792"),
                    t.e("92822"),
                    t.e("23427"),
                    t.e("29422"),
                    t.e("9291"),
                    t.e("7059"),
                    t.e("80740"),
                    t.e("98199"),
                    t.e("17244"),
                    t.e("64464"),
                    t.e("39778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(rX.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(il.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(ni.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== r$.lp.STREAM
            ? null
            : (0, l.jsx)(
                  it.A,
                  { size: rq.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
            titleExperimentEnabled: r,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let d = [];
        if (e.isSystemDM()) return d;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
                break;
            case er.rbe.DM:
                d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, l.jsx)(ls, { channel: e }, "calls")),
                    d.push((0, l.jsx)(iR, { channel: e }, "pins")),
                    d.push(
                        (0, l.jsx)(
                            la.Ay,
                            { channel: e, tooltip: r ? z.intl.string(z.t.IIOxgV) : z.intl.string(z.t["PWkO7+"]) },
                            "invite",
                        ),
                    ),
                    d.push((0, l.jsx)(ly, { channel: e, showCallOrActivityPanel: i || s || a }, "profile")),
                    d.push((0, l.jsx)(lg, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                d.push(this.renderJoinRequestInterviewButtons()),
                    d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, l.jsx)(ls, { channel: e }, "calls")),
                    d.push((0, l.jsx)(iR, { channel: e }, "pins")),
                    e.isManaged() ||
                        d.push((0, l.jsx)(la.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    d.push((0, l.jsx)(iN, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && d.push((0, l.jsx)(tK, { channel: e })),
                    null == n || n.isForumLikeChannel() || d.push((0, l.jsx)(sL, { channel: n }, "browser")),
                    e.isVocalThread() && d.push((0, l.jsx)(lj, { channel: e }, "thread-call")),
                    d.push((0, l.jsx)(t0, { channel: e }, "notifications")),
                    d.push((0, l.jsx)(iR, { channel: e }, "pins")),
                    e.isArchivedThread() || d.push((0, l.jsx)(iN, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && d.push((0, l.jsx)(iD, { channel: e }, "summaries")),
                    d.push((0, l.jsx)(sD, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                d.push((0, l.jsx)(sL, { channel: e }, "browser")),
                    t || d.push((0, l.jsx)(iT.A, { channel: e }, "notifications")),
                    d.push((0, l.jsx)(iR, { channel: e }, "pins")),
                    (0, nl.PD)(e.guild_id, "channel_header") &&
                        d.push((0, l.jsx)(iy, { channelId: e.id }, "conversations")),
                    d.push((0, l.jsx)(iN, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && d.push((0, l.jsx)(iD, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                e.isGameInvitesChannel() && d.push((0, l.jsx)(iq, {}, "game-invite-channel-learn-more")),
                    t ||
                        (d.push((0, l.jsx)(iW, { channel: e }, "forum-onboarding")),
                        d.push((0, l.jsx)(iT.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || d.push((0, l.jsx)(iN, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                d.push((0, l.jsx)(iN, { channelId: e.id }, "members"));
        }
        return d;
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
                n.push((0, l.jsx)(iN, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(iN, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(iN, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: rJ.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("87915"), t.e("70774")]).then(
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
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tG.iN)(e.id) : void 0,
            m = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            g = d || c,
            x = a || g;
        return (0, l.jsxs)("div", {
            className: rJ.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, l.jsxs)(
                            iX.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rJ.DD, a, { [rJ.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tA.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tA.zF)({
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
                                              className: rJ.u8,
                                              children: (0, l.jsx)(p.$, {
                                                  onClick: () => (0, tm.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tA.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(lH.A, { channelId: e.id }),
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
                return (0, l.jsx)(r4, { channel: e, popoutType: nn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    r3,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: nn.N.NO_POPOUT,
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
        return (0, l.jsx)(e4, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(iu, { guildId: n.id })
                : (0, l.jsx)(is.H, { guildId: n.id, children: (0, l.jsx)(ij, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(rP.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tx.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && a)) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tr, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(r1, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (0, l.jsx)(tu.A, { channel: e, guild: n, chatInputType: nt.oU.NORMAL }, null != n ? n.id : "home");
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
            return (0, l.jsx)(rM, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, l.jsx)(lF, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(rH.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(rH.A, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(nN, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, l.jsx)(r9, { guildId: t?.id, channelId: e.id });
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
                            let { default: e } = await t.e("38763").then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => ii(l_.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("31874"), t.e("10585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, rD.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                case lY.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sI, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case lY.PE.VIEW_THREAD:
                    let t = n?.isForumLikeChannel() ? t6 : sF;
                    e = (0, l.jsx)(t, { channelId: i.channelId });
                    break;
                case lY.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sF, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case lY.PE.VIEW_CHANNEL:
                case lY.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== lY.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: er.da6 },
                    className: rJ.uC,
                    children: (0, l.jsx)(r5, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => lz.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - er.MdR - o;
        return (
            (c += 375),
            (0, l.jsx)(rF.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rF.X.PostSidebar : rF.X.ThreadSidebar,
                maxWidth: c,
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
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            A = this.shouldRenderCall();
        if (i) return (0, l.jsx)(rY, {});
        if (null == e) return (0, l.jsx)(rK.A, { channelId: this.props.channelId });
        let m = a === er.YvQ.SIDEBAR_CHAT,
            g = null != o && !m,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(n_.HI, { location: p, subsection: t ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rJ.TE, { [rJ.js]: m || g, [rJ.jl]: m && h }),
                    children: [
                        x
                            ? (0, l.jsx)(ex.A, {
                                  style: { right: m ? u : void 0 },
                                  className: rJ.x4,
                                  channel: e,
                                  draftType: t4.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: r()(rJ.Qs, { [rJ.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let r8 = (0, ep.A)(r6),
    de = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            c = (0, A.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, A.bG)([ek.A], () => a ?? ek.A.getChannel(o), [o, a]),
            p = (0, to.DZ)(),
            f = (0, to.e4)(x, "ConnectedChannel"),
            I = (0, A.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            b = f?.parent_id,
            C = (0, A.bG)([ek.A], () => ek.A.getChannel(b), [b]),
            E = (0, A.bG)([nQ.A], () => nQ.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, ia.A)(f?.id ?? void 0),
            v = (0, A.bG)([ne.A], () => {
                let e = null != o ? ne.A.getParticipants(o) : [],
                    n = null != o ? ne.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, ie.A)(),
            T = (0, A.bG)([eU.Ay], () => (N?.channelId ?? eU.Ay.getVoiceChannelId()) === f?.id),
            _ = (0, A.bG)([eI.Ay], () => (null != f ? eI.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, A.bG)([rw.A], () => rw.A.isConnected()),
            R = (0, ej.Ay)(S),
            L = S && !1 === R;
        s.useEffect(() => {
            T &&
                L &&
                null != _ &&
                null != f &&
                j.A.selectParticipant(
                    f.id,
                    (0, e8.Qt)({ applicationId: _.applicationId, instanceId: _.compositeInstanceId }),
                );
        }, [L, f, T, _]);
        let O = (0, A.bG)([eI.Ay], () => eI.Ay.getCurrentEmbeddedActivity()),
            M = (0, A.bG)([eI.Ay], () => eI.Ay.getActivityPanelMode()),
            P = null != O && !(0, ev.A)(f?.id) && M === eZ.Gd.PANEL,
            D = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: k, isUserInThisVoice: U } = (0, A.cf)([le.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(le.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: le.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            G = null != f && f.isPrivate() && !P && v,
            w = f?.isGuildVocal() || G || (k && (U || !D)),
            F = (0, A.bG)([t8.A], () => t8.A.getFrameLayoutMode() === rQ.y.FOCUSED),
            { welcomeModalChannelId: H } = (0, h.zy)(),
            B = (0, A.bG)([t$.A], () => null != f && t$.A.isLurking(f.guild_id), [f]),
            V = (0, A.bG)([rk.A], () => rk.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, A.bG)(
                [ne.A, eI.Ay],
                () =>
                    null != eI.Ay.getConnectedActivityLocation() && eI.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eI.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? er.DUB.NO_CHAT
                            : er.DUB.NORMAL
                        : null != o
                          ? ne.A.getLayout(o)
                          : er.DUB.NORMAL,
                [o],
            ),
            z =
                ((n = E?.id),
                (i = (0, A.bG)([nQ.A, lT, J.default, X.Ay], () => {
                    let e = nQ.A.getGuild(n);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === lT.hasViewedPrompt(l_.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = J.default.getCurrentUser();
                    if (null == t) return null;
                    let i = X.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || ii(l_.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            Y =
                ((t = E?.id),
                (0, A.bG)([ek.A, nQ.A, eU.Ay], () => {
                    let e = nQ.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ek.A.getChannel(H);
                    return H === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rU.ke)(n.type);
                })),
            { section: K, channelSidebarState: q } = (0, A.cf)(
                [iC.Ay],
                () => ({ section: iC.Ay.getSection(o, f?.isDM()), channelSidebarState: iC.Ay.getSidebarState(o) }),
                [o, f],
            ),
            Q = E?.id,
            Z = (0, A.bG)([iC.Ay], () => iC.Ay.getGuildSidebarState(Q), [Q]),
            ee = (0, lR.lI)(),
            en = (0, tc.Ay)(f),
            ei = (0, tc.Ay)(f, !0),
            el = (0, A.bG)([ne.A], () => (null != f ? ne.A.getSelectedParticipant(f.id) : null)),
            es = (0, e6.vL)(f),
            ea = (0, tg.Uf)(f),
            ed = null != f && c === f.id,
            eo = null != f && f.isGuildStageVoice(),
            { enabled: ec } = iI.s.useConfig({
                location: f?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
            });
        !(function (e) {
            let { onTransition: n } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: t } = e,
                        i = (0, ey.H)(t);
                    if (null == i || !(0, ev.A)(i)) return;
                    eU.Ay.getVoiceChannelId() !== i && (await (0, e9.A)({ channelId: i }));
                    let l = ek.A.getChannel(i),
                        s = l?.guild_id;
                    setTimeout(() => {
                        (0, e5.A)(s, t), n?.();
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
                let e = (0, tm.JK)();
                if (e?.location?.state?.stageInviteKey === rZ.J2) {
                    let { channelId: n } = (0, lS.vu)(e?.location?.pathname) ?? {};
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
                null != r && null != e && eo && e.id === r && !n && ((0, lK.av)(e), d(null));
            }, [r, eo]);
        let eA = (0, ef.cI)(f),
            em = null != f && f.isPrivate(),
            eg = (0, ej.Ay)(em),
            ex = (0, ej.Ay)(f?.id);
        s.useEffect(() => {
            let e = eg && !em,
                n = eg && em && f?.id !== ex;
            (e || n) && (0, td.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lt.i.AUTO });
        }, [f?.id, ex, em, eg]);
        let ep = (0, g.useHasAnyModalOpen)();
        return (0, l.jsx)(r8, {
            guildId: f?.guild_id,
            channelId: o,
            channel: f,
            channelName: en,
            formattedChannelName: ei,
            parentChannel: C,
            voiceChannel: I,
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
            isUnavailable: (0, A.bG)([rG.A, iv.A], () => {
                let e = f?.guild_id ?? iv.A.getGuildId();
                return null != e && rG.A.isUnavailable(e);
            }, [f]),
            showRealNameModal: z,
            showWelcomeModal: !V && Y,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([le.A], () => ({ hasVideo: null != f && le.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: el,
            showChannelSummaries: eA,
            showHeaderGuildBreadcrumb: p || ee,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: P,
            embeddedActivity: O,
            titleExperimentEnabled: ec,
        });
    });
