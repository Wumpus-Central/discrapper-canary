t.r(n), t.d(n, { default: () => dl }), t(321073);
var i,
    l = t(627968),
    s = t(64700),
    a = t(503698),
    r = t.n(a),
    d = t(284009),
    o = t.n(d),
    c = t(435558),
    u = t.n(c),
    h = t(873263),
    m = t(17928),
    A = t(554146),
    g = t(192308),
    x = t(289873),
    p = t(821609),
    f = t(43990),
    I = t(367513),
    j = t(442433);
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
    k = t(63152),
    w = t(201275),
    U = t(657048),
    G = t(361610),
    F = t(964486),
    H = t(36124),
    B = t(317525),
    V = t(219065),
    W = t(818348),
    z = t(375708);
let Y = [];
var q = t(342296),
    K = t(616356),
    X = t(696451),
    Q = t(290863),
    $ = t(461213),
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
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(n.id, a)),
            c = (0, m.bG)([X.Ay], () => X.Ay.getMember(n.guild_id, a)),
            u = (0, m.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, m.bG)([J.default], () => J.default.getUser(a)),
            A = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
            g = h?.id === A?.id,
            x = (0, m.bG)([Q.A, $.A], () => (g ? $.A.getStatus() : Q.A.getStatus(a, n.guild_id))),
            p = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(a)),
            f = (0, m.yK)([Q.A, $.A], () => (g ? $.A.getActivities() : Q.A.getActivities(a, n.guild_id))),
            I = (0, m.bG)([K.A], () => K.A.getAnyStreamForUser(a)),
            C = (0, b.rm)(a),
            y = (0, m.bG)([V.A], () => V.A.canUserViewChannel(n.id, i, a)),
            v = h?.id != null && h.id === r,
            N = s.useCallback(
                (e) => {
                    null != h &&
                        (0, j.L3)(e, async () => {
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
        return (0, l.jsx)(q.A, {
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
                    currentUser: A,
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
            a = (0, w.$7)({ roleId: n, guildId: s, size: 16 });
        return n === er.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: eo.lL, children: (0, l.jsx)("div", { className: eo.k1 }) })
            : (0, l.jsxs)(D.A, {
                  className: eo.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != a ? (0, l.jsx)(U.A, { className: eo.UT, ...a }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    em = s.memo(function (e) {
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
function eA(e) {
    var n;
    let t,
        i,
        a,
        d,
        o,
        { channel: c, guild: h } = e,
        A = `members-${c.id}`,
        { analyticsLocations: g } = (0, M.Ay)(O.A.MEMBER_LIST),
        x = (function (e, n) {
            (0, F.Ay)(() => {
                n?.id != null && (0, G.Ey)(n.id, e, H.LD);
            });
            let t = (0, m.bG)([B.A], () => (null != n ? B.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, m.cf)([V.A], () => ({
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
            ((n = A),
            (t = (0, m.bG)([L.Ay], () => L.Ay.keyboardModeEnabled)),
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
        j = 0 === x.length || x.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(er.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        j)
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
                                    x[e.section] === p ? (0, l.jsx)(em, { channel: c }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: x.map((e) => e.userIds.length),
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
    eI = t(475743),
    ej = t(933958),
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
    ew = t(309010),
    eU = t(795816),
    eG = t(685399),
    eF = t(216418),
    eH = t(620148),
    eB = t(732637),
    eV = t(104171),
    eW = t(47294),
    ez = t(594007),
    eY = t(16961),
    eq = t(138017),
    eK = t(715482),
    eX = t(315502),
    eQ = t(568548),
    e$ = t(234320),
    eZ = t(5867),
    eJ = t(47513);
function e0(e) {
    let { channelId: n, className: t, ...i } = e,
        a = s.useRef(null),
        r = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        d = s.useCallback(() => {
            let e = r ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eU.i5)(e);
        }, [r]),
        { unreadCount: o, mentionCount: u } = (function (e) {
            let n = (0, m.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, m.cf)(
                    [eQ.Ay],
                    () => ({ unreadCount: eQ.Ay.getUnreadCount(e), mentionCount: eQ.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: i, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            a.current?.focus();
        }, []);
    (0, e$.Vo)({ event: er.jej.FOCUS_CHAT_BUTTON, handler: h });
    let A = r ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        g = [A];
    u > 0 && g.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        o > 0 && g.push(z.intl.string(z.t.x5zAGZ));
    let x = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        p = u > 0 ? u : o,
        f = p > 0;
    return (0, l.jsxs)("div", {
        className: eJ.iE,
        children: [
            (0, l.jsx)(eM.l, {
                isTrayButton: !0,
                buttonRef: a,
                onClick: d,
                label: A,
                "aria-label": g.join(", "),
                tooltipPosition: "top",
                iconComponent: x === eZ.E8.NO_CHAT ? eq.j : eK.g,
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
        d = (0, m.yK)([ej.Ay], () => ej.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        o = (0, ey.H)(t),
        c = (0, m.bG)([ek.A], () => ek.A.getChannel(o)),
        u = (0, eG.IQ)(d),
        h = (0, eG.Rz)(u),
        A = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        g = s.useRef(null),
        x = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        p = x !== eZ.E8.NO_CHAT,
        [I, j] = s.useState(eO.Ay.activityPanelHeight ?? n ?? null),
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
        O = (0, m.bG)([ew.Ay], () => ew.Ay.getChannelId()),
        M = (0, m.yK)(
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
            let i = (0, eI.A)(e),
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
    let w = [];
    function U(e) {
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
            (w = Array.from(R.embeddedActivity.userIds)
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
                                                  users: w,
                                                  size: e2,
                                                  max: 6,
                                                  renderUser: U,
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
                                                                  onClick: A,
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
                                                                            (await (0, eU.od)(a.id, o)),
                                                                            (0, eU.jp)();
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
                                      et._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), j(e);
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
function e9(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: a,
        } = (0, eb.cf)([ej.Ay], () => {
            let e = ej.Ay.getConnectedActivityLocation(),
                n = ej.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, ey.H)(e),
                connectedActivity: n,
                activityPanelMode: ej.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, eb.bG)([eC.A], () => eC.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT));
    if (!(0, eE.Gp)(i)) return null;
    let d = s?.applicationId;
    return a !== eZ.Gd.PANEL || null == d || r || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e7, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e4 = t(90804),
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
    nm = t(39623),
    nA = t(952270),
    ng = t(381849),
    nx = t(549973),
    np = t(957565),
    nf = t(935208),
    nI = t(256331),
    nj = t(623562),
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
            o = (0, m.bG)([nb.A], () => nb.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
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
        t = (0, m.bG)([nb.A], () => nb.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([nb.A], () => nb.A.isPendingFetch(n.id), [n.id]),
        a = (0, m.bG)([nI.A], () => nI.A.isHighlightingEnabled(), []),
        r = s.useCallback(
            (e) => {
                (0, nj.xI)(n.id, n.guild_id, e.id);
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
                            icon: a ? nm.b : nA.G,
                            "aria-label": a ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: nj.Eg,
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
let nw = function (e) {
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
var nU = t(892547),
    nG = t(689175),
    nF = t(761508),
    nH = t(765671),
    nB = t(22231),
    nV = t(365199),
    nW = t(66834),
    nz = t(573435),
    nY = t(101555),
    nq = t(548118),
    nK = t(714991),
    nX = t(597098),
    nQ = t(345942),
    n$ = t(71393),
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
                                      let { default: e } = await Promise.all([t.e("2666"), t.e("88869")]).then(
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
        r = null != (0, m.bG)([n$.A], () => n$.A.getGuild(n.guildId));
    async function d() {
        a(!0);
        try {
            r ? (0, nQ.u)(n.guildId) : await nW.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
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
                (0, j.L3)(e, async () => {
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
                                    children: (0, l.jsx)(nq.Ay, {
                                        className: n1.rZ,
                                        iconSrc: c,
                                        guild: (0, nJ.xi)(n),
                                        size: nq.Ay.Sizes.MEDIUM,
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
                                (0, l.jsx)(nK.A, { className: n1.n2, guild: n }),
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
var n9 = t(946116),
    n4 = t(935397),
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
                                    children: (0, l.jsx)(nU.I, {
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
        allEntriesCount: m,
        isLoading: A,
    } = e;
    return (0, l.jsx)("div", {
        className: n4.$$,
        children: (0, l.jsxs)(nG.Gt, {
            className: n4.XG,
            children: [
                (0, l.jsx)(n6, { searchQuery: a, setSearchQuery: r, handleClearSearch: d, handleSearchKeyPress: o }),
                (0, l.jsx)(nG.Ch, {
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
                                { className: n5.YU, id: n9.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                n9.mU.ALL,
                            ),
                            (0, n9.g2)(n.id).map((e) => {
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
                A && null == t
                    ? (0, l.jsx)(x.y, { className: n4.u1 })
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
                                          className: n4.vY,
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
    if (c) n = (0, l.jsx)("div", { className: n4.$$, children: (0, l.jsx)(x.y, { className: n4.u1 }) });
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
    } else n = (0, l.jsx)("div", { className: n4.vY, children: o.map((e) => (0, l.jsx)(n7, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: n4.$$,
        children: (0, l.jsxs)(tt.Ar, {
            className: n4.XG,
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
                        (0, l.jsx)(nU.I, {
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
        } = (0, m.cf)([nM.A], () => {
            let e = nM.A.getCurrentCategoryId(n.id),
                t = nM.A.getDirectoryEntries(n.id, e === n9.mU.ALL ? null : e),
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
            let e = eQ.Ay.lastMessageId(n.id);
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
                          if (n !== n9.mU.ALL) return [{ entries: (0, te._t)(e), appendEndCard: !0 }];
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
            searchFetching: A,
            searchResults: p,
        } = (0, m.cf)([nO.A], () => {
            let { mostRecentQuery: e, fetching: t } = nO.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nO.A.getSearchResults(n.id, e) };
        }),
        [f, I] = s.useState(h),
        j = "" !== h,
        b = { mostRecentQuery: h },
        C = s.useRef(b);
    s.useEffect(() => {
        C.current = b;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            nL.Yc(n.id), nL.YS(n.id), I(e);
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
                                  t.e("2666"),
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
                                      currentCategoryId: a === n9.mU.ALL ? null : a,
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
        I(""), nL.BA(n.id);
    }
    return j
        ? (0, l.jsx)(ts, {
              searchQuery: f,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: N,
              handleCreateOrAddGuild: y,
              searchResults: p,
              searchFetching: A,
          })
        : null == u && null == a
          ? (0, l.jsx)("div", { className: n4.$$, children: (0, l.jsx)(x.y, { className: n4.u1 }) })
          : u?.length === 0 && null == a
            ? (0, l.jsx)("div", { className: n4.$$, children: (0, l.jsx)(nw, { guild: i, onAddGuild: y }) })
            : (0, l.jsx)(n8, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
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
    tm = t(353428),
    tA = t(976860),
    tg = t(288254),
    tx = t(873614),
    tp = t(649852),
    tf = t.n(tp),
    tI = t(922016),
    tj = t(980707),
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
    tw = t(50268),
    tU = t(584682),
    tG = t(378570),
    tF = t(713608),
    tH = t(473503),
    tB = t(901472),
    tV = t(267102),
    tW = t(474397),
    tz = t(486974),
    tY = t(221314);
function tq(e) {
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
var tK = t(780338),
    tX = t(782603),
    tQ = t(857071),
    t$ = t(607508),
    tZ = t(914703),
    tJ = t(37411);
function t0(e) {
    let { channel: n } = e,
        t = (0, t$.X)(n),
        [i, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, m.bG)([tQ.A], () => null != n.guild_id && tQ.A.isLurking(n.guild_id));
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
    return (0, l.jsx)(tI.Y, {
        targetElementRef: r,
        shouldShow: i,
        animation: tI.Y.Animation.NONE,
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
                icon: t === tJ.CP.NO_MESSAGES ? tK.a : tX.X,
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
    return (0, l.jsx)(tI.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tI.Y.Animation.NONE,
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
        m = (0, tT.A)(n),
        A = (0, tN.A)(n),
        g = (0, tw.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, tk.A)(n),
        p = (0, tL.A)(n),
        f = (0, ty.$)(1e3);
    function I() {
        (0, tG.iN)(n.id);
    }
    function j(e) {
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
    return (0, l.jsxs)(tj.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tb.rX, {
                children: [s, (0, l.jsx)(tb.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: I })],
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
                            j(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I();
                        },
                    }),
                    (0, l.jsx)(tb.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: tC.t,
                        trailingIndicator: { type: "icon", icon: tC.t },
                        action: function () {
                            j(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(tb.rX, { children: [x, o, c, m] }),
            (0, l.jsxs)(tb.rX, { children: [A, g] }),
        ],
    });
}
function t7(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(th.Ay.Icon, {
            icon: tE.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, t1.xu)((0, tU.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(t0, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(tq, { channel: n }) : null,
                  (0, l.jsx)(t2, { channel: n }),
                  i,
              ],
          });
}
var t9 = t(31717),
    t4 = t(853742),
    t5 = t(671373);
function t6(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, m.bG)([ek.A], () => ek.A.getChannel(i?.parent_id)),
        r = (0, m.bG)([n$.A], () => n$.A.getGuild(i?.getGuildId())),
        d = (0, tc.Ay)(i),
        o = (0, tg.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, t4.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    if (null != o) return (0, l.jsx)(tx.A, { guild: r, channelId: o });
    let u = (0, l.jsx)(t7, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: t9.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tm.zF)({
                    channel: i,
                    parentChannel: a,
                    channelName: d,
                    guild: r,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("26132"),
                                t.e("38730"),
                                t.e("34971"),
                                t.e("84615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, tA.uh)(i.guild_id, i.id);
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
    im = t(29385),
    iA = t(950344),
    ig = t(217530),
    ix = t(162093),
    ip = t(548547);
function iI(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, im.e)({ guildId: n, channelId: t }),
        a = (0, ih.uk)(n),
        r = (0, ih.Tq)(n),
        d = (0, m.bG)([n$.A], () => n$.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, m.bG)([ek.A], () => ek.A.getChannel(t)),
        u = (0, tc.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of a) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [a]);
    return ((0, iA.A)({
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
var ij = t(473855),
    ib = t(604681),
    iC = t(761640),
    iE = t(700695);
function iy(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([iC.Ay], () => iC.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        i = (0, m.bG)([nb.A], () => (nb.A.getChannelConversations(n)?.length ?? 0) > 0, [n]);
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
        t = (0, m.bG)([iC.Ay], () => iC.Ay.getSection(n)),
        i = (0, m.bG)([iv.A], () => iv.A.getGuildId()),
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
        r = (0, m.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(n.id), [n]),
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
        (0, l.jsx)(tI.Y, {
            targetElementRef: o,
            shouldShow: i,
            animation: tI.Y.Animation.NONE,
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
        i = (0, m.bG)([iM.A], () => iM.A.shouldShowTopicsBar());
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
    iw = t(947094),
    iU = t(919577),
    iG = t(207777),
    iF = t(422844),
    iH = t(435470),
    iB = t(892110),
    iV = t(45494);
function iW(e) {
    let { channel: n } = e,
        t = (0, iH.S4)(n),
        i = (0, m.bG)([iw.A], () => iw.A.hasHidden(n.id)),
        s = (0, iB.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, iF.R)(n.id),
        o = (0, m.bG)(
            [iG.A, iV.A],
            () => !!(iG.A.getThreadIds(n.id, a, r, d).length > 0) || !!(iV.A.getThreads(n.id, a, r, d).length > 0),
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
            return iU.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var iz = t(290136),
    iY = t(975571),
    iq = t(774418);
function iK() {
    let e = z.intl.string(iq.default.pdipXI);
    return (0, l.jsx)(th.In, {
        tooltip: e,
        icon: iz.c,
        onClick: function () {
            window.open(iY.A.getArticleURL(er.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var iX = t(742589),
    iQ = t(43105),
    i$ = t(428689),
    iZ = t(978940),
    iJ = t(387755),
    i0 = t(730852),
    i1 = t(641703),
    i2 = t(379848),
    i3 = t(753727),
    i7 = t(222692),
    i9 = t(442353),
    i4 = t(470710),
    i5 = t(186111),
    i6 = t(283540),
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
            (0, l.jsx)(th.Ay.Icon, { icon: i$.n, onClick: e, disabled: u || i, tooltip: c })
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
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(iQ.A, {
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
        n ? (0, i9.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        i0.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, td.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lt.i.AUTO }),
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
        (0, i9.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, i7.A)();
    };
}
function ls(e) {
    let { channel: n } = e,
        t = (0, i3.A)(),
        i = (0, m.bG)([ne.A], () => ne.A.getMode(n.id)),
        s = (0, m.bG)([le.A], () => le.A.isInChannel(n.id)),
        a = (0, m.bG)([L.Ay], () => L.Ay.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, m.cf)([i4.A], () => ({
            callActive: i4.A.isCallActive(n.id),
            callUnavailable: i4.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([i8.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !i8.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && i8.A.isBlocked(o),
        })),
        h = (0, m.bG)([J.default], () => J.default.getUser(o)),
        g = (0, tV.Us)(),
        x = [],
        p = (0, i1.A)(n.id),
        f = (0, m.bG)([i5.A], () => i5.A.hasLayers());
    return (p && !f && x.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
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
    lm = t(665909),
    lA = t(327337);
let lg = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lc.u)(n.id),
        a = (0, lu.S)(n.id),
        r = (0, lh.e)(n.id),
        d = (0, g.useHasAnyModalOpen)(),
        o = (0, m.bG)([i5.A], () => i5.A.hasLayers()),
        c = s.useCallback(
            () => (a ? z.intl.string(z.t["16QyDv"]) : null != r ? z.intl.string(z.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, A] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != i &&
            (lr.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lo.xi)(n.id, [r.id]);
            }, 5e3),
            (0, lm.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: lm.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (lr.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lo.bg)(n.id);
                }, 5e3));
    }, [n, r, i, a]),
        (0, F.Ay)(() => {
            null != i &&
                (0, lm.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: lm.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
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
                    { modalKey: lA.V },
                ),
                (0, lm._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lm.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
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
let lI = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, i3.A)(),
        i = (0, m.bG)([le.A], () => le.A.isInChannel(n.id)),
        a = (0, m.bG)([le.A], () => !u().isEmpty(le.A.getVoiceStatesForChannel(n.id))),
        r = (0, m.bG)([lf.A], () => lf.A.can(er.xBc.CONNECT, n)),
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
var lj = t(812991),
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
        i = (0, m.bG)([iC.Ay], () => iC.Ay.getSection(n.id, n?.isDM())),
        s = (0, lC.Ay)(n.getRecipientId()),
        a = lE(),
        r = i === er.YvQ.PROFILE && a;
    return (0, l.jsx)(th.In, {
        disabled: !a || t,
        tooltip: !a || t ? z.intl.string(z.t.YneDgF) : r ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lj.n,
        onClick: function () {
            (0, lb.am)({ displayProfile: s, isProfileOpen: !r }), ib.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let lv = {};
class lN extends m.Ay.PersistedStore {
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
    lw = es.Ay.getEnableHardwareAcceleration();
function lU(e) {
    let { user: n, channel: i, status: a, activities: r } = e,
        d = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        o = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([i8.A], () => i8.A.getNickname(n.id)),
        h = (0, lM.A)(n.id),
        A = s.useRef(null);
    function g(e) {
        (0, j.L3)(e, async () => {
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
        [f, I] = s.useState(!1);
    return (0, l.jsx)(q.A, {
        targetElementRef: A,
        user: n,
        channelId: i.id,
        position: E.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: x,
        shouldShow: f,
        onRequestClose: () => I(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...m } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: A,
                    user: n,
                    currentUser: o,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: lw,
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
                    ...m,
                },
                n.id,
            );
        },
    });
}
function lG(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function lF(e) {
    let { channel: n } = e,
        t = J.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: a } = (0, M.Ay)(O.A.MEMBER_LIST),
        { listItems: r } = (0, m.bG)(
            [i8.A, J.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = J.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(lD.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    i8.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? lk,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: lk });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            lG,
        );
    s.useEffect(() => {
        en.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let d = i && r.every((e) => e.user.isStaff()),
        o = (0, lP.G)("PrivateChannelRecipients"),
        c = (0, g.useHasAnyModalOpen)();
    return (0, l.jsx)(M.f5, {
        value: a,
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
                                `${z.intl.string(z.t["9Oq93m"])}\u{2014}${r.length} `,
                                d && (0, l.jsx)(lO.A, { type: lO.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lU,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        o &&
                            (0, l.jsx)("div", {
                                className: eo.Uf,
                                children: (0, l.jsx)(la.NE, {
                                    channel: n,
                                    text: z.intl.string(z.t.NB5DFD),
                                    icon: lL.D,
                                    variant: "secondary",
                                    fullWidth: !0,
                                    allowFrictionlessGDMUpsell: !c,
                                    entryPointType: la.YW.MEMBER_LIST,
                                }),
                            }),
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
    lq = t(790535),
    lK = t(163328),
    lX = t(425557),
    lQ = t(270003),
    l$ = t(150934),
    lZ = t(452027),
    lJ = t(292666),
    l0 = t(511274),
    l1 = t(465532),
    l2 = t(579872),
    l3 = t(119031),
    l7 = t(408018),
    l9 = t(138617),
    l4 = t(822610),
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
    sm = t(152367),
    sA = t(147087);
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
let sI = nt.oU.THREAD_CREATION;
function sj(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, m.bG)([ek.A], () => ek.A.getChannel(n)),
        { analyticsLocations: a } = (0, M.Ay)(O.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(M.f5, {
              value: a,
              children: (0, l.jsx)(e$.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: sp.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: t9.C.FirstThreadMessage }),
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
            let e = t9.A.getThreadSettings(n),
                t = t9.A.getDraft(n, t9.C.FirstThreadMessage).trim(),
                i = sl.A.getUploads(n, t9.C.FirstThreadMessage);
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
            (0, l.jsx)(th.Ay.Icon, { icon: lK.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(th.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sC(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: a } = e,
        d = (0, m.bG)([L.Ay], () => L.Ay.messageGroupSpacing),
        o =
            ((n = s.useContext(e$.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, m.bG)([t9.A], () => t9.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        l((e) => ({ ...e, ...t })), l1.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(t, i),
        { textAreaState: A, setTextAreaState: g } = (function (e, n) {
            let [t, i] = s.useState((0, l7.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = t9.A.getDraft(e.id, t9.C.FirstThreadMessage);
                        (0 === l.length || !0 === t) && i((0, l7.ur)(l)), n(t9.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        t(!0),
                        t9.A.addChangeListener(t),
                        () => {
                            t9.A.removeChangeListener(t);
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
                h = (0, sA.b)(),
                m = s.useCallback(async () => {
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
                    (null != a.name && "" !== a.name.trim()) || c || (h && null != t && (u(!0), m()));
                }, [n.id, t, i, a.name, c, h, m]);
            let A = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: sm.D,
                                onClick: m,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: d,
                            };
                    },
                    [h, m, d, t, r.textValue],
                ),
                g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(na.K, {
                                      icon: sm.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: m,
                                      disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                      loading: d,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, d, t, r.textValue, m],
                );
            return {
                isGeneratingAI: d,
                generateAIName: m,
                enableAIFeatures: h,
                renderAiGenerateButton: g,
                getThreadNameInputAccessory: A,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: A }),
        {
            nameError: j,
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
                [m, A] = s.useState(!1),
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
                        if (m) return { shouldClear: !1, shouldRefocus: !1 };
                        A(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = se.A.getStickerPreview(n.id, sI.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sl.A.getUploads(n.id, t9.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(o ? sd(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sd(0, z.intl.string(z.t.kesTVT)) : null),
                            o || u)
                        )
                            return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, ss.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sI,
                            channel: null == t ? n : null,
                        });
                        if (!x) return A(!1), { shouldClear: !1, shouldRefocus: !0 };
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
                            return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, sn.x5)(n.id, sI.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [g, a.textValue, i.name, t, n, m, d],
                ),
                submitting: m,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: x,
            textAreaState: A,
            location: a,
            enableAIFeatures: f,
        }),
        y = (0, sc.Iy)(c, x) ? lX.t : lK.y;
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
                                        (0, l.jsxs)(lQ.n, {
                                            children: [
                                                (0, l.jsx)(sy, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: j,
                                                    disabled: E,
                                                    isGeneratingAI: p,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: I,
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
                                textAreaState: A,
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
        r = (0, l.jsx)(l$.S, {
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
        m = (0, sc.l1)(n, t),
        A = null != t && !o,
        g = (0, l5.GV)(),
        x = o ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(lJ.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
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
        A = s.useCallback(() => c(!1), []),
        g = s.useCallback(
            (e, t, l) => {
                l1.A.saveDraft(n.id, t, t9.C.FirstThreadMessage),
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
    (0, e$.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, e$.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: A });
    let p = (0, m.bG)([lf.A], () => lf.A.can(er.xBc.ATTACH_FILES, n)),
        f = so(d, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l4.A, { channelId: n.id, type: sI, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sp.xN, children: (0, l.jsx)(l0.U, { error: f }) }),
            (0, l.jsx)(l9.Ay, {
                type: sI,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sp.gM, sp.Yy),
                innerClassName: r()(sp.SL, { [sp.cr]: null != f }),
                onFocus: h,
                onBlur: A,
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
        i = (0, m.bG)([si.A], () => (null == t ? null : si.A.getMessage(n.id, t))),
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
    return (0, l.jsx)(tI.Y, {
        targetElementRef: a,
        animation: tI.Y.Animation.NONE,
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
                icon: lK.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sO = t(40389);
function sM(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(tI.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(sP, { ...e, channel: n });
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
function sP(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tv.A)(n),
        a = (0, tS.A)(n),
        r = (0, tM.A)(n.id),
        d = (0, tO.A)(n),
        o = (0, tw.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, tN.A)(n),
        h = (0, tT.A)(n),
        A = (0, t_.A)(n, "Toolbar Overflow"),
        g = (0, tR.A)(n),
        x = (0, sO.A)(n),
        p = (0, tk.A)(n),
        f = (0, tL.A)(n),
        I = st.SY.useSetting(),
        j = (0, m.bG)([le.A], () => !u().isEmpty(le.A.getVoiceStatesForChannel(n.id)));
    return (0, l.jsxs)(tj.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tb.rX, { children: [A, x] }),
            (0, l.jsxs)(tb.rX, {
                children: [
                    d,
                    g,
                    r,
                    I && !j
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
var sD = t(332456),
    sk = t(973854),
    sw = t(73137);
function sU(e) {
    var n;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, m.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, m.bG)([n$.A], () => n$.A.getGuild(o?.getGuildId())),
        h = (0, tc.Ay)(o),
        A = (0, tg.Uf)(o);
    (n = o),
        (i = (0, m.bG)([le.A], () => null != n && !u().isEmpty(le.A.getVoiceStatesForChannel(n.id)))),
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
            let e = (0, sD.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, sk.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(tx.A, { guild: c, channelId: A });
    let x = (0, l.jsx)(t7, { channel: o, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: o, draftType: t9.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: x,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tm.zF)({
                    channel: o,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("26132"),
                                t.e("38730"),
                                t.e("34971"),
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
var sG = t(210714),
    sF = t(975732),
    sH = t(707554),
    sB = t(140735),
    sV = t(590180),
    sW = t(32206),
    sz = t(372320),
    sY = t(562153),
    sq = t(945810);
let sK = (0, sq.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function sX(e) {
    return sK.useConfig({ location: e }).enabled;
}
var sQ = t(215530),
    s$ = t(454719),
    sZ = t(736653),
    sJ = t(311016),
    s0 = t(480335),
    s1 = t(713517),
    s2 = t(183555),
    s3 = t(718019),
    s7 = t(413492),
    s9 = t(915614),
    s4 = t(308244),
    s5 = t(743987),
    s6 = t(900179),
    s8 = t(946356),
    ae = t(465829),
    an = t(35241),
    at = t(587168),
    ai = t(442228),
    al = t(744808);
let as = (0, sq.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var aa = t(444793);
function ar(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function ad(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: a } = e,
        { showButton: r } = as.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !r) return null;
    function d() {
        a(), (0, lb.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
    }
    if (s)
        return (0, l.jsx)("div", {
            className: aa.lS,
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
              className: aa.qr,
              children: (0, l.jsx)(ns.D, {
                  onClick: d,
                  className: aa.wC,
                  children: (0, l.jsx)(y.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: aa.xQ, children: [(0, l.jsx)(al.A, { frame: i, filterLayer: ar }), o] })
        : o;
}
var ao = t(996988),
    ac = t(357786),
    au = t(86434);
function ah(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        a = __OVERLAY__ || !(0, sJ.A)(n.id),
        d = (0, lC.Ay)(n.id),
        o = (0, sZ.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        h = (0, s2.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: g } = (0, s1.A)(m);
    function x() {
        (0, sF.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(M.f5, {
        value: u,
        children: (0, l.jsx)(s2.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsxs)(s8.A, {
                ref: m,
                user: n,
                displayProfile: d,
                themeType: ao.d.SIDEBAR,
                themeOverride: o,
                className: i ? r()(ac.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tt.d_, {
                        className: i ? ac.BE : void 0,
                        children: [
                            (0, l.jsx)(at.A, { children: (0, l.jsx)(an.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: ac.wx,
                                children: [
                                    (0, l.jsx)(s9.A, {
                                        user: n,
                                        displayProfile: d,
                                        themeType: ao.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(s3.A, {
                                        user: n,
                                        displayProfile: d,
                                        channelId: t.id,
                                        themeType: ao.d.SIDEBAR,
                                        onOpenProfile: a ? void 0 : x,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: au.rf,
                                children: [
                                    (0, l.jsx)(ae.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sY.Ay.getName(null, t.id, n),
                                        onClickName: a ? void 0 : x,
                                        pronouns: d?.pronouns,
                                        trailing: (0, l.jsx)(s7.A, {
                                            displayProfile: d,
                                            themeType: ao.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(ai.A, {
                                                      userId: n.id,
                                                      userBio: d?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(s6.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s5.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(s8.A.Overlay, {
                                              className: au.Lw,
                                              children: [
                                                  d?.bio != null &&
                                                      "" !== d.bio &&
                                                      (0, l.jsx)(s6.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(s4.A, {
                                                              userBio: d?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(s6.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s5.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !a &&
                        (0, l.jsx)(ad, {
                            handleOpenProfile: x,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    d?.profileEffect != null && (0, l.jsx)(s0.A, { skuId: d?.profileEffect?.skuId, isHovering: g }),
                ],
            }),
        }),
    });
}
var am = t(331322),
    aA = t(249790),
    ag = t(254828),
    ax = t(783123),
    ap = t(898711);
function af(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: a } = e,
        r = (0, lC.Ay)(n.id),
        d = (0, sZ.Ay)(),
        o = (0, m.bG)([i8.A], () => i8.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, M.Ay)(o ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        u = (0, s2.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        h = s.useRef(null);
    return (0, l.jsx)(M.f5, {
        value: c,
        children: (0, l.jsx)(s2.of, {
            value: u,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(s8.A, {
                ref: h,
                user: n,
                displayProfile: r,
                themeType: ao.d.SIDEBAR,
                themeOverride: d,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tt.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ap.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ap.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ap.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ap.N1,
                                        children: [
                                            (0, l.jsx)(aA.A, { user: n }),
                                            (0, l.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(o ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: sY.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(am.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(ax.A, {
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
                                            (0, l.jsx)(ag.A, {
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
var aI = t(617498),
    aj = t(717421),
    ab = t(31956),
    aC = t(673843),
    aE = t(561794),
    ay = t(321191),
    av = t(679492),
    aN = t(439053),
    aT = t(312381),
    a_ = t(349419),
    aS = t(984545),
    aR = t(193738),
    aL = t(682356),
    aO = t(983495),
    aM = t(695366),
    aP = t(922590),
    aD = t(821269),
    ak = t(93246),
    aw = t(351906),
    aU = t(383199),
    aG = t(559506),
    aF = t(361311),
    aH = t(931481),
    aB = t(501193),
    aV = t(383448),
    aW = t(646986),
    az = t(243166),
    aY = t(360563),
    aq = t(123292),
    aK = t(840411),
    aX = t(909536);
let aQ = (0, sq.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var a$ = t(666810),
    aZ = t(711690),
    aJ = t(394300),
    a0 = t(575593),
    a1 = t(587895),
    a2 = t(44120),
    a3 = t(532794),
    a7 = t(31969),
    a9 = t(317560),
    a4 = t(99161),
    a5 = t(661492);
let a6 = (0, sq.mj)({
    name: "2026-06-remove-wishlist-dm-sidebar-side-copy",
    kind: "user",
    defaultConfig: { shouldHideSideText: !1 },
    variations: { 0: { shouldHideSideText: !1 }, 1: { shouldHideSideText: !0 } },
});
var a8 = t(212387),
    re = t(74135),
    rn = t(662349),
    rt = t(155653);
function ri(e) {
    let { title: n, description: t, onClick: i } = e;
    return (0, l.jsxs)("div", {
        className: rt.S,
        children: [
            (0, l.jsx)(ns.D, {
                onClick: i,
                className: rt.H,
                children: (0, l.jsx)(y.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: n,
                }),
            }),
            (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-default", children: t }),
        ],
    });
}
var rl = t(479026),
    rs = t(636374),
    ra = t(699976),
    rr = t(202541),
    rd = t(518477),
    ro = t(356727),
    rc = t(134222);
function ru(e) {
    let {
            sku: n,
            wishlistOwner: t,
            wishlistId: i,
            isSingleCard: a,
            style: d,
            skuPreviewStyle: o,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: m,
            singleCardInfo: A,
            renderChildren: g,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, s2.NJ)(),
        p = sX("DMSidePanelWishlistItemCard") ? ra.y.SIZE_78 : ra.y.SIZE_90,
        f = ra.Z[p],
        I = s.useCallback(() => {
            x({
                action: rd.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [n, i, h, x]),
        j = s.useCallback(() => {
            x({
                action: rd.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                m();
        }, [m, n.id, i, n.productLine, x]),
        {
            onBodyClick: b,
            onOverlayClick: C,
            showOverlayButton: E,
            routesToGift: y,
            label: v,
            icon: N,
        } = (0, rs.P)({ wishlistOwner: t, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: j }),
        [T, _] = s.useState(!1),
        S = a6.useConfig({ location: "dm_side_panel_wishlist_item_card" }).shouldHideSideText;
    return (0, l.jsxs)(am.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", {
                className: ro.kL,
                children: (0, l.jsxs)(a8.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: n,
                    user: t,
                    spec: f,
                    cardStyle: r()(ro.Nr, d),
                    skuPreviewStyle: r()(ro.ho, o),
                    skuAssetClassName: T ? c : void 0,
                    onClick: b,
                    "aria-label": y
                        ? (0, a5.T)(n)
                        : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a5.T)(n) }),
                    onHoverOrFocusChange: _,
                    children: [
                        E &&
                            (0, l.jsx)(rn.A, {
                                spec: f,
                                onClick: C,
                                isHoveringOrFocusing: T,
                                label: v,
                                icon: v.length < 6 ? N : void 0,
                            }),
                        g?.(E && T),
                    ],
                }),
            }),
            a && !S && (0, l.jsx)(ri, { title: A.title, description: A.description, onClick: b }),
        ],
    });
}
function rh(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        r = (0, eb.bG)([a1.A], () => a1.A.getApplication(n.applicationId)),
        { analyticsLocations: d } = (0, M.Ay)(
            ...(i ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = sX("DMSidePanelWishlistItemCard") ? ra.y.SIZE_78 : ra.y.SIZE_90,
        c = ra.Z[o],
        u = (0, a7.F)("sku_gift_badge", { applicationId: n.applicationId, skuId: n.id }),
        h = s.useCallback(() => {
            (0, a4.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: d },
            );
        }, [n, t, d]),
        m = s.useCallback(() => {
            (0, a9.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: d,
            });
        }, [n.id, n.applicationId, t, d]),
        A = s.useMemo(
            () => ({ title: n.name, description: z.intl.format(z.t["CqpEC+"], { applicationName: r?.name }) }),
            [n.name, r?.name],
        );
    return (0, l.jsx)(ru, {
        sku: n,
        analyticsLocations: d,
        wishlistOwner: t,
        onDetailsClick: m,
        onPurchaseClick: h,
        singleCardInfo: A,
        renderChildren: (e) =>
            e || null == u ? null : (0, l.jsx)(re.s, { spec: c, icon: u.Icon, tooltipText: u.tooltip }),
        ...a,
    });
}
function rm(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        d = s.useCallback(() => {
            (0, a2.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        o = (0, rl.e)({ sku: n, giftRecipient: t, giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                r()(ro.ML, {
                    [ro.M]: n?.tenantMetadata?.collectibles?.type === a0.R.AVATAR_DECORATION,
                    [ro.Hm]: n?.tenantMetadata?.collectibles?.type === a0.R.PROFILE_EFFECT,
                    [ro.hH]: n?.tenantMetadata?.collectibles?.type === a0.R.PROFILE_FRAME,
                    [ro.qF]: n?.tenantMetadata?.collectibles?.type === a0.R.NAMEPLATE,
                    [ro.l2]: n?.tenantMetadata?.collectibles?.type === a0.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        ),
        u = s.useMemo(
            () => ({
                title: n.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return z.intl.string(z.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a0.R.AVATAR_DECORATION:
                            return z.intl.string(z.t["7v0T9P"]);
                        case a0.R.PROFILE_EFFECT:
                            return z.intl.string(z.t.wR5wOo);
                        case a0.R.NAMEPLATE:
                            return z.intl.string(z.t.x5CoXR);
                        default:
                            return "";
                    }
                })(n),
            }),
            [n],
        );
    return (0, l.jsx)(ru, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: o,
        onPurchaseClick: d,
        skuPreviewStyle: c,
        singleCardInfo: u,
        ...a,
    });
}
function rA(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: a, style: d, ...o } = e,
        c = s.useCallback(() => {
            (0, a3.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = s.useMemo(() => ({ title: n.name, description: z.intl.string(z.t.Ipxkog) }), [n.name]),
        h = a === aE.uS.POPULAR,
        m = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(ru, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: a,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: r()(rc.MO, { [ro.F5]: h }),
        style: d,
        disableRiveHover: !0,
        singleCardInfo: u,
        renderChildren: (e) =>
            h
                ? (0, l.jsx)("div", {
                      className: r()(ro.fi, { [ro.sp]: e }),
                      children: (0, l.jsx)(y.E, {
                          className: r()(ro.p7, { [ro.SW]: m.length >= 10, [ro.ot]: m.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: m,
                      }),
                  })
                : null,
        ...o,
    });
}
function rg(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rh, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(rm, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(rA, { sku: n, ...t });
        default:
            return null;
    }
}
var rx = t(428262),
    rp = t(535089),
    rf = t(448476);
function rI(e) {
    let {
            unownedWishlistItems: n,
            profileOwner: t,
            onClick: i,
            wishlistId: a,
            isNitroRecEnabled: r,
            isSortingNitroToFront: d,
        } = e,
        { analyticsLocations: o } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: c } = (0, s2.NJ)(),
        u = (0, s.useId)(),
        h = (0, s.useMemo)(() => (d ? (0, aK.gm)(n ?? []) : (n ?? [])), [n, d]),
        m = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        A = (0, s.useMemo)(() => {
            let e = h.slice(0, 3).map((e) => ({ item: e, source: aE.uS.WISHLIST }));
            if (r && e.length < 3) {
                let n = h.some((e) => rx.Ay.isPremiumSku(e.skuId));
                if (!rx.Ay.isPremiumAtLeast(t.premiumType, rr.PremiumTypes.TIER_2) && !n) {
                    let n = aJ.A.fromSKU((0, aK.rI)());
                    null != n &&
                        (d
                            ? e.unshift({ item: n, source: aE.uS.POPULAR })
                            : e.push({ item: n, source: aE.uS.POPULAR }));
                }
            }
            return e;
        }, [h, r, t.premiumType, d]),
        g = (0, s.useMemo)(
            () =>
                new Set(
                    A.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [A],
        ),
        x = (0, rp.A)({ wishlistId: a ?? null, onAction: m, productLines: g }),
        p = (0, s.useMemo)(
            () =>
                A.map((e, n) => {
                    let { item: s, source: r } = e;
                    return null == s.sku
                        ? null
                        : (0, l.jsx)(
                              rg,
                              {
                                  sku: s.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: a,
                                  analyticsLocations: o,
                                  onViewWishlist: i,
                                  isSingleCard: 1 === A.length,
                                  source: r,
                              },
                              s.skuId,
                          );
                }).filter(lD.Vq),
            [o, i, t, A, a],
        );
    return 0 === p.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(s8.A.Overlay, {
                  ref: x,
                  className: rf.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: rf.wx,
                          children: [
                              (0, l.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: u,
                                  children: z.intl.string(z.t["7lZ31J"]),
                              }),
                              h.length > 3 &&
                                  (0, l.jsx)(aq.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(sH.F, { children: (0, l.jsx)("div", { className: rf.vY, children: p }) }),
                  ],
              }),
          });
}
function rj(e) {
    let n = (0, aZ.a)("UserProfileSidebarWishlistBreadcrumb");
    return (0, l.jsx)(rI, { ...e, isSortingNitroToFront: n });
}
function rb(e) {
    var n;
    let t,
        i,
        { isLoading: s, unownedWishlistItems: a, canSeeWishlist: r = !1, ...d } = e,
        o =
            ((n = "UserProfileSidebarWishlistBreadcrumb"),
            (t = (0, aX.Gh)(n)),
            (i = aQ.useConfig({ location: n }).isEnabled),
            t && i && r);
    if (s || d.profileOwner.bot || ((null == a || 0 === a.length) && !o)) return null;
    let c = J.default.getCurrentUser()?.id,
        u = null != c && c !== d.profileOwner.id,
        h = a?.some((e) => rx.Ay.isPremiumSku(e.skuId)) ?? !1,
        m = o && (a ?? []).length < 3;
    return (0, l.jsx)(a$.h, {
        isGifting: u,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children:
            u && (h || m)
                ? (0, l.jsx)(rj, { ...d, unownedWishlistItems: a, isNitroRecEnabled: o })
                : (0, l.jsx)(rI, { ...d, unownedWishlistItems: a, isNitroRecEnabled: o, isSortingNitroToFront: !1 }),
    });
}
function rC(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: a,
            isHoveringOrFocusing: r,
            isRedesignEnabled: d,
            onOpenProfile: o,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([i8.A], () => ({
            relationshipType: i8.A.getRelationshipType(n.id),
            originApplicationId: i8.A.getOriginApplicationId(n.id),
        })),
        h = (0, aP.fi)(n.id),
        A = (0, aD.q)({ userId: n.id }),
        g = (0, m.bG)([aw.A], () => aw.A.hidePersonalInformation),
        x = (0, m.bG)([ay.A], () => ay.A.getUserProfile(n.id)?.application),
        p = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([ay.A], () => ({ defaultWishlistId: ay.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: j } = (0, aE.fw)({ wishlistId: d ? f : void 0, userId: n.id });
    (0, aC.A)(I);
    let b = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: au.rf,
        children: [
            (0, l.jsx)(aG.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: au.pq,
                children: [
                    (0, l.jsx)(ae.Ay, {
                        user: n,
                        guildId: a.guild_id,
                        displayName: sY.Ay.getName(null, a.id, n),
                        onClickName: o,
                        displayNameTrailing: g
                            ? null
                            : (0, l.jsx)(az.A, { userId: n.id, isVisible: r, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(s7.A, {
                            displayProfile: i,
                            themeType: ao.d.SIDEBAR,
                            isRedesignEnabled: d,
                        }),
                    }),
                    d && (0, l.jsx)(aY.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            c === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(s8.A.Overlay, {
                    children: (0, l.jsx)(aH.A, { user: n, channelId: a.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    s8.A.Overlay,
                    {
                        children: (0, l.jsx)(aH.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aV.A, { user: n }),
            i?.private &&
                (0, l.jsx)(s8.A.Overlay, { children: (0, l.jsx)(aB.A, { username: sY.Ay.getName(null, a.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(s8.A.Overlay, {
                    className: au.Lw,
                    children: (0, l.jsx)(s6.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: (0, l.jsx)(aM.E, { size: "xxs", color: nh.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(ak.T, { userId: n.id }),
                    }),
                }),
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ai.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: g,
                            isHoveringOrFocusing: r,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(s6.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(s5.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: au.kR,
                children: [
                    d && p && (0, l.jsx)(a_.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: o }),
                    (0, l.jsx)(aW.A, { user: n, currentUser: t, onOpenUserProfileModal: o }),
                    d
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  x?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aU.A, {
                                          applicationId: x.id,
                                          commandIds: x.popularApplicationCommandIds,
                                          channel: a,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(s6.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aF.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(s8.A.Overlay, {
                              className: au.Lw,
                              children: [
                                  !g &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(s6.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(s4.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: r,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          x?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aU.A, {
                                                  applicationId: x.id,
                                                  commandIds: x.popularApplicationCommandIds,
                                                  channel: a,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(s6.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aF.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(s6.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(s5.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    d &&
                        (0, l.jsx)(rb, {
                            profileOwner: n,
                            unownedWishlistItems: b,
                            wishlistId: f,
                            isLoading: j,
                            onClick: () => {
                                o?.({ tabSection: rd.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var rE = t(114212),
    ry = t(913453),
    rv = t(229187),
    rN = t(21241),
    rT = t(503062),
    r_ = t(51943),
    rS = t(847374),
    rR = t(320448),
    rL = t(882255);
function rO(e) {
    let { section: n, header: t, items: i, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, s2.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? rS.a : rR._;
    return (0, l.jsxs)("section", {
        className: rL.uW,
        children: [
            (0, l.jsxs)(ns.D, {
                className: r()(rL.wx, rL.vk),
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
                    (0, l.jsx)(m, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(rL.p_, a), children: i }),
        ],
    });
}
var rM = t(185301);
function rP(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, M.Ay)(),
        { context: s } = (0, s2.NJ)(),
        a = (0, ty.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, ry.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, l.jsxs)(s8.A.Overlay, {
              className: rM.Lw,
              children: [
                  u &&
                      (0, l.jsx)(rO, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: rM.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  r_.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, nQ.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(rN.A, { className: rM.yF }),
                  c &&
                      (0, l.jsx)(rO, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: rM.p_,
                          onExpand: () => (0, rv.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: rM.nC,
                                                children: [
                                                    (0, l.jsx)(rE.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(rE.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            rT.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, sF.openUserProfileModal)({
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
function rD(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: a } = e,
        d = __OVERLAY__,
        o = (0, lC.Ay)(n.id),
        c = (0, sZ.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        g = (0, s2.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id }),
        x = s.useRef(null),
        { isHoveringOrFocusing: p, isHovering: f } = (0, s1.A)(x),
        I = (0, av.fC)(),
        j = (0, sz.A)(o?.profileFrame?.skuId, "UserProfileSidebar");
    (0, ab.A)({ skuId: o?.profileFrame?.skuId, openedAt: u.current, context: g, analyticsLocations: A });
    let b = (0, aj.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, sF.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...g, ...e });
    }
    let E = o?.widgets != null && o.widgets.length > 0,
        { defaultWishlistId: y } = (0, m.cf)([ay.A], () => ({ defaultWishlistId: ay.A.getFirstWishlistId(n.id) })),
        { wishlist: v, isFetching: N } = (0, aE.fw)({ wishlistId: a ? void 0 : y, userId: n.id });
    (0, aC.A)(v);
    let T = s.useMemo(() => (null == v ? null : v.items.filter((e) => !e.isOwned)), [v]);
    return (0, l.jsx)(M.f5, {
        value: A,
        children: (0, l.jsx)(s2.of, {
            value: g,
            openedAt: u.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(av.Hl, {
                value: I,
                children: (0, l.jsxs)(s8.A, {
                    ref: x,
                    user: n,
                    displayProfile: o,
                    themeType: ao.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: a ? o?.profileFrame?.skuId : null,
                    className: a ? r()(ac.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: o?.private === !0,
                    children: [
                        o?.private === !0 && (0, l.jsx)(aT.A, {}),
                        null != I.interactionType && (0, l.jsx)(aI.animated.div, { style: b, className: ac.tB }),
                        (0, l.jsxs)(tt.d_, {
                            className: r()(a && ac.BE, !a && null != j && ac.It),
                            children: [
                                (0, l.jsxs)(at.A, {
                                    children: [
                                        (0, l.jsx)(aR.A, { user: n, themeType: ao.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aS.A, { user: n }) : (0, l.jsx)(aL.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ac.wx,
                                    children: [
                                        (0, l.jsx)(s9.A, {
                                            user: n,
                                            displayProfile: o,
                                            themeType: ao.d.SIDEBAR,
                                            specOverrides: a
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !p,
                                            className: ac.vK,
                                        }),
                                        (0, l.jsx)(aN.A, { userId: n.id, className: ac.oR }),
                                        (0, l.jsx)(s3.A, {
                                            user: n,
                                            displayProfile: o,
                                            channelId: i.id,
                                            themeType: ao.d.SIDEBAR,
                                            onOpenProfile: d ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aO.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: ao.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rC, {
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
                                        className: ac.sJ,
                                        children: (0, l.jsx)(a_.A, {
                                            user: n,
                                            widgets: o.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !a &&
                                    (0, l.jsx)("div", {
                                        className: ac.vS,
                                        children: (0, l.jsx)(rb, {
                                            profileOwner: n,
                                            unownedWishlistItems: T,
                                            wishlistId: y,
                                            isLoading: N,
                                            onClick: () => {
                                                C?.({ tabSection: rd.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != v,
                                        }),
                                    }),
                                !a && (0, l.jsx)(rP, { user: n, channelId: i.id }),
                            ],
                        }),
                        !d &&
                            (0, l.jsx)(ad, {
                                context: g,
                                analyticsLocations: A,
                                profileFrame: j,
                                handleOpenProfile: C,
                                isRedesignEnabled: a,
                            }),
                        o?.profileEffect != null && (0, l.jsx)(s0.A, { skuId: o?.profileEffect?.skuId, isHovering: f }),
                        a && null != j && (0, l.jsx)(al.A, { frame: j, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var rk = t(219277);
function rw(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([J.default], () => J.default.getUser(t)),
        a = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
        r = lE(),
        [d, o] = (0, sQ.A)(t),
        [c, u] = s.useState(!1),
        h = sX("UserProfileSidebarRenderer"),
        A = (0, lC.Ay)(t),
        g = (0, sW.c)("UserProfileSidebarRenderer") ? A?.profileFrame?.skuId : void 0,
        x = (0, sz.A)(g, "UserProfileSidebarRenderer"),
        p = (0, m.bG)([sV.A], () => sV.A.getProductFetch(g));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, s$.A)(i, e) : (0, s$.A)(t, void 0, e);
        }, [i, t, n.id, h]),
        null == i ||
            null == a ||
            !r ||
            (h && !c && A?.isLoaded !== !0) ||
            (h && !c && null != g && g !== x?.skuId && p?.state !== "success" && p?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        I = sY.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? rk.H : void 0,
        children: (0, l.jsx)(sH.F, {
            component: (0, l.jsx)(sB.A, {
                children: (0, l.jsx)(sH.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == a
                    ? null
                    : d
                      ? (0, l.jsx)(af, { user: i, currentUser: a, onHide: o, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(ah, { user: i, currentUser: a, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(rD, { user: i, currentUser: a, isRedesignEnabled: h, ...e }),
        }),
    });
}
var rU = t(522556),
    rG = t(225315),
    rF = t(684407),
    rH = t(95701),
    rB = t(919638),
    rV = t(763827),
    rW = t(812771),
    rz = t(946228),
    rY = t(462887),
    rq = t(276293),
    rK = t(844913),
    rX = t(745652);
let rQ = () => {
    let e = (0, sZ.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, rY.M)(e) ? rX : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: rK.kL,
        children: [
            (0, l.jsxs)(iX.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(iX.A.Icon, { icon: rq.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iX.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: rK.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: rK.j0, src: n }),
                    (0, l.jsx)(S.D, {
                        className: rK.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(y.E, {
                        className: rK.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var r$ = t(943712),
    rZ = t(402216),
    rJ = t(746080),
    r0 = t(806931),
    r1 = t(165610),
    r2 = t(516607),
    r3 = t(354919);
function r7() {
    return (0, l.jsx)("div", { className: r3.wG, children: (0, l.jsx)(x.y, {}) });
}
let r9 = (0, nT.Fe)({
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
            t.e("99945"),
            t.e("49681"),
            t.e("66140"),
            t.e("33097"),
            t.e("4374"),
            t.e("21225"),
            t.e("23685"),
            t.e("42516"),
            t.e("89160"),
            t.e("58769"),
        ]).then(t.bind(t, 627669)),
    webpackId: 627669,
    renderLoader: r7,
    name: "ForumChannel",
});
function r4() {
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
        t.e("60730"),
        t.e("792"),
        t.e("92822"),
        t.e("9291"),
        t.e("29260"),
        t.e("39103"),
        t.e("63584"),
        t.e("36624"),
        t.e("4098"),
        t.e("755"),
        t.e("49013"),
        t.e("33448"),
        t.e("15275"),
        t.e("22644"),
        t.e("95992"),
        t.e("4374"),
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
let r5 = (0, nT.Fe)({ createPromise: r4, webpackId: 540462, name: "ChannelCall", renderLoader: r7 });
function r6() {
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
        t.e("29260"),
        t.e("63584"),
        t.e("4098"),
        t.e("755"),
        t.e("49013"),
        t.e("33448"),
        t.e("15275"),
        t.e("22644"),
        t.e("56373"),
        t.e("4374"),
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
let r8 = (0, nT.Fe)({ createPromise: r6, webpackId: 67319, name: "StageChannelCall", renderLoader: r7 }),
    de = (0, nT.Fe)({
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
    dn = (0, nT.Fe)({
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
class dt extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sG.d0)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? r4() : e === er.rbe.GUILD_STAGE_VOICE && r6();
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
            (0, sF.openUserProfileModal)({
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
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("26132"),
                    t.e("34971"),
                    t.e("9004"),
                    t.e("30997"),
                    t.e("79995"),
                    t.e("44058"),
                    t.e("91377"),
                    t.e("35723"),
                    t.e("66540"),
                    t.e("29542"),
                    t.e("59545"),
                ]).then(t.bind(t, 22496));
                return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
            });
    }
    openThreadContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([t.e("26132"), t.e("38730"), t.e("34971"), t.e("84615")]).then(
                    t.bind(t, 612826),
                );
                return (t) => (0, l.jsx)(e, { ...t, channel: n });
            });
    }
    openDMContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = J.default.getUser(n.getRecipientId());
        o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, j.L3)(e, async () => {
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
                    t.e("34971"),
                    t.e("45996"),
                    t.e("792"),
                    t.e("92822"),
                    t.e("23427"),
                    t.e("29422"),
                    t.e("9291"),
                    t.e("7059"),
                    t.e("42339"),
                    t.e("98199"),
                    t.e("17244"),
                    t.e("41175"),
                    t.e("39778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(rJ.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(il.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(ni.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== r0.lp.STREAM
            ? null
            : (0, l.jsx)(
                  it.A,
                  { size: rZ.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                e.isModeratorReportChannel() && d.push((0, l.jsx)(tq, { channel: e })),
                    null == n || n.isForumLikeChannel() || d.push((0, l.jsx)(sL, { channel: n }, "browser")),
                    e.isVocalThread() && d.push((0, l.jsx)(lI, { channel: e }, "thread-call")),
                    d.push((0, l.jsx)(t0, { channel: e }, "notifications")),
                    d.push((0, l.jsx)(iR, { channel: e }, "pins")),
                    e.isArchivedThread() || d.push((0, l.jsx)(iN, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && d.push((0, l.jsx)(iD, { channel: e }, "summaries")),
                    d.push((0, l.jsx)(sM, { channel: e }, "threads-overflow"));
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
                e.isGameInvitesChannel() && d.push((0, l.jsx)(iK, {}, "game-invite-channel-learn-more")),
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
                  className: r3.u8,
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tG.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            g = d || c,
            x = a || g;
        return (0, l.jsxs)("div", {
            className: r3.SC,
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
                                className: r()(r3.DD, a, { [r3.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tm.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tm.zF)({
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
                                              className: r3.u8,
                                              children: (0, l.jsx)(p.$, {
                                                  onClick: () => (0, tA.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tm.EP)(e, i),
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
                return (0, l.jsx)(r8, { channel: e, popoutType: nn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    r5,
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
                ? (0, l.jsx)(iu, { guildId: n.id })
                : (0, l.jsx)(is.H, { guildId: n.id, children: (0, l.jsx)(iI, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(rU.A, { guild: n, channelId: e.id });
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
            return (0, l.jsx)(r9, { channel: e, guild: n, sidebarState: t }, e.id);
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
            return (0, l.jsx)(rw, { channel: e }, `private-channel-profile-${e.id}`);
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
                    return (0, l.jsx)(rz.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(rz.A, { channel: n }, `channel-members-${n.id}`);
                    break;
                case er.rbe.PUBLIC_THREAD:
                case er.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(eA, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === er.YvQ.CONVERSATIONS)
            switch (e.type) {
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(nN, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, l.jsx)(de, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => (0, rG.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                    e = (0, l.jsx)(sj, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case lY.PE.VIEW_THREAD:
                    let t = n?.isForumLikeChannel() ? t6 : sU;
                    e = (0, l.jsx)(t, { channelId: i.channelId });
                    break;
                case lY.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sU, { channelId: i.channelId, baseChannelId: i.baseChannelId });
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
                    className: r3.uC,
                    children: (0, l.jsx)(dn, {
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
            (0, l.jsx)(rW.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rW.X.PostSidebar : rW.X.ThreadSidebar,
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
            m = this.shouldRenderCall();
        if (i) return (0, l.jsx)(rQ, {});
        if (null == e) return (0, l.jsx)(r$.A, { channelId: this.props.channelId });
        let A = a === er.YvQ.SIDEBAR_CHAT,
            g = null != o && !A,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(n_.HI, { location: p, subsection: t ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(r3.TE, { [r3.js]: A || g, [r3.jl]: A && h }),
                    children: [
                        x
                            ? (0, l.jsx)(ex.A, {
                                  style: { right: A ? u : void 0 },
                                  className: r3.x4,
                                  channel: e,
                                  draftType: t9.C.ChannelMessage,
                              })
                            : null,
                        m || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: r()(r3.Qs, { [r3.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let di = (0, ep.A)(dt),
    dl = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, m.bG)([ew.Ay], () => ew.Ay.getChannelId()),
            c = (0, m.bG)([ew.Ay], () => ew.Ay.getVoiceChannelId()),
            x = (0, m.bG)([ek.A], () => a ?? ek.A.getChannel(o), [o, a]),
            p = (0, to.DZ)(),
            f = (0, to.e4)(x, "ConnectedChannel"),
            j = (0, m.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            b = f?.parent_id,
            C = (0, m.bG)([ek.A], () => ek.A.getChannel(b), [b]),
            E = (0, m.bG)([n$.A], () => n$.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, ia.A)(f?.id ?? void 0),
            v = (0, m.bG)([ne.A], () => {
                let e = null != o ? ne.A.getParticipants(o) : [],
                    n = null != o ? ne.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, ie.A)(),
            T = (0, m.bG)([ew.Ay], () => (N?.channelId ?? ew.Ay.getVoiceChannelId()) === f?.id),
            _ = (0, m.bG)([ej.Ay], () => (null != f ? ej.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, m.bG)([rV.A], () => rV.A.isConnected()),
            R = (0, eI.A)(S),
            L = S && !1 === R;
        s.useEffect(() => {
            T &&
                L &&
                null != _ &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, e8.Qt)({ applicationId: _.applicationId, instanceId: _.compositeInstanceId }),
                );
        }, [L, f, T, _]);
        let O = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            M = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            P = null != O && !(0, ev.A)(f?.id) && M === eZ.Gd.PANEL,
            D = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: k, isUserInThisVoice: w } = (0, m.cf)([le.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(le.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: le.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !P && v,
            G = f?.isGuildVocal() || U || (k && (w || !D)),
            F = (0, m.bG)([t8.A], () => t8.A.getFrameLayoutMode() === r1.y.FOCUSED),
            { welcomeModalChannelId: H } = (0, h.zy)(),
            B = (0, m.bG)([tQ.A], () => null != f && tQ.A.isLurking(f.guild_id), [f]),
            V = (0, m.bG)([rF.A], () => rF.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, m.bG)(
                [ne.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? er.DUB.NO_CHAT
                            : er.DUB.NORMAL
                        : null != o
                          ? ne.A.getLayout(o)
                          : er.DUB.NORMAL,
                [o],
            ),
            z =
                ((n = E?.id),
                (i = (0, m.bG)([n$.A, lT, J.default, X.Ay], () => {
                    let e = n$.A.getGuild(n);
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
                (0, m.bG)([ek.A, n$.A, ew.Ay], () => {
                    let e = n$.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ek.A.getChannel(H);
                    return H === ew.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rH.ke)(n.type);
                })),
            { section: q, channelSidebarState: K } = (0, m.cf)(
                [iC.Ay],
                () => ({ section: iC.Ay.getSection(o, f?.isDM()), channelSidebarState: iC.Ay.getSidebarState(o) }),
                [o, f],
            ),
            $ = E?.id,
            Z = (0, m.bG)([iC.Ay], () => iC.Ay.getGuildSidebarState($), [$]),
            ee = (0, lR.lI)(),
            en = (0, tc.Ay)(f),
            ei = (0, tc.Ay)(f, !0),
            el = (0, m.bG)([ne.A], () => (null != f ? ne.A.getSelectedParticipant(f.id) : null)),
            es = (0, e6.vL)(f),
            ea = (0, tg.Uf)(f),
            ed = null != f && c === f.id,
            eo = null != f && f.isGuildStageVoice(),
            { enabled: ec } = ij.s.useConfig({
                location: f?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
            });
        !(function (e) {
            let { onTransition: n } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: t } = e,
                        i = (0, ey.H)(t);
                    if (null == i || !(0, ev.A)(i)) return;
                    ew.Ay.getVoiceChannelId() !== i && (await (0, e4.A)({ channelId: i }));
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
                let e = (0, tA.JK)();
                if (e?.location?.state?.stageInviteKey === r2.J2) {
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
                null != r && null != e && eo && e.id === r && !n && ((0, lq.av)(e), d(null));
            }, [r, eo]);
        let em = (0, ef.cI)(f),
            eA = null != f && f.isPrivate(),
            eg = (0, eI.A)(eA),
            ex = (0, eI.A)(f?.id);
        s.useEffect(() => {
            let e = eg && !eA,
                n = eg && eA && f?.id !== ex;
            (e || n) && (0, td.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lt.i.AUTO });
        }, [f?.id, ex, eA, eg]);
        let ep = (0, g.useHasAnyModalOpen)();
        return (0, l.jsx)(di, {
            guildId: f?.guild_id,
            channelId: o,
            channel: f,
            channelName: en,
            formattedChannelName: ei,
            parentChannel: C,
            voiceChannel: j,
            layout: W,
            needSubscriptionToAccess: y,
            isLurking: B,
            hasModalOpen: ep,
            section: q,
            channelSidebarState: K,
            guildSidebarState: Z,
            guild: E,
            showCall: !y && G,
            showActivityPanel: P,
            showFramePanel: F,
            channelIsContentGated: es,
            spoilerGatingChannelId: ea,
            isMobile: (0, m.bG)([Q.A], () => f?.type === er.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: (0, m.bG)([rB.A, iv.A], () => {
                let e = f?.guild_id ?? iv.A.getGuildId();
                return null != e && rB.A.isUnavailable(e);
            }, [f]),
            showRealNameModal: z,
            showWelcomeModal: !V && Y,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([le.A], () => ({ hasVideo: null != f && le.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: el,
            showChannelSummaries: em,
            showHeaderGuildBreadcrumb: p || ee,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: P,
            embeddedActivity: O,
            titleExperimentEnabled: ec,
        });
    });
