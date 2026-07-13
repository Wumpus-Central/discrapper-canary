t.r(n), t.d(n, { default: () => r6 }), t(321073);
var i,
    l = t(627968),
    s = t(64700),
    a = t(503698),
    r = t.n(a),
    d = t(284009),
    o = t.n(d),
    c = t(735438),
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
    S = t(534514),
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
    ed = t(784503),
    eo = t(540808);
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
                                t.e("94881"),
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
    eN = t(990078),
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
    eJ = t(702321);
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
var e1 = t(141160);
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
        O = (0, m.bG)([ew.A], () => ew.A.getChannelId()),
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
function e4(e) {
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
var e5 = t(90804),
    e9 = t(748975),
    e8 = t(323073),
    e6 = t(568598),
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
    nh = t(39623),
    nm = t(952270),
    nA = t(835835),
    ng = t(381849),
    nx = t(549973),
    np = t(957565),
    nf = t(935208),
    nI = t(256331),
    nj = t(623562),
    nb = t(619065),
    nC = t(84593);
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
            (0, l.jsx)(nA.Y9, {
                icon: nu.o,
                title: "Conversations",
                children: (0, l.jsx)("div", {
                    className: nC.y6,
                    children: (0, l.jsx)(na.K, {
                        icon: a ? nh.b : nm.G,
                        "aria-label": a ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: nj.Eg,
                    }),
                }),
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
    nk = t(478927);
let nw = function (e) {
    let { guild: n, onAddGuild: i } = e,
        a = s.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("92430"),
                    t.e("54453"),
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
    nX = t(776231),
    nQ = t(345942),
    n$ = t(71393),
    nZ = t(486020),
    nJ = t(860689),
    n0 = t(682557),
    n1 = t(253607);
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
                                      let { default: e } = await Promise.all([t.e("66234"), t.e("88869")]).then(
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
var n4 = t(946116),
    n5 = t(562845),
    n9 = t(519094);
let n8 = (e) => {
        let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
            { ref: a, width: d } = (0, nH.Ay)(),
            o = null != d && d <= 800;
        return (0, l.jsxs)("div", {
            ref: a,
            className: n9.wx,
            children: [
                (0, l.jsx)("img", {
                    alt: "",
                    className: n9.F0,
                    src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
                }),
                (0, l.jsx)("div", {
                    className: n9.AZ,
                    children: (0, l.jsxs)("div", {
                        className: r()(n9.VW, { [n9.eO]: o }),
                        children: [
                            (0, l.jsx)(S.D, {
                                variant: "heading-xl/semibold",
                                className: n9.dc,
                                children: z.intl.string(z.t.IT7qoC),
                            }),
                            (0, l.jsx)(y.E, {
                                variant: "text-md/normal",
                                className: n9.R_,
                                children: z.intl.string(z.t["5PoYts"]),
                            }),
                            (0, l.jsx)(f.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, l.jsx)("div", {
                                        className: r()(n9.MT, e),
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
    },
    n6 = function (e) {
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
            className: n5.$$,
            children: (0, l.jsxs)(nG.Gt, {
                className: n5.XG,
                children: [
                    (0, l.jsx)(n8, {
                        searchQuery: a,
                        setSearchQuery: r,
                        handleClearSearch: d,
                        handleSearchKeyPress: o,
                    }),
                    (0, l.jsx)(nG.Ch, {
                        orientation: "horizontal",
                        children: (0, l.jsxs)(nF.V, {
                            className: n9.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: function (e) {
                                u(e);
                            },
                            children: [
                                (0, l.jsx)(
                                    nF.V.Item,
                                    {
                                        className: n9.YU,
                                        id: n4.mU.ALL,
                                        children: `${z.intl.string(z.t.hEAa2a)} (${m})`,
                                    },
                                    n4.mU.ALL,
                                ),
                                (0, n4.g2)(n.id).map((e) => {
                                    let { value: n, label: t } = e;
                                    return (0, l.jsx)(
                                        nF.V.Item,
                                        {
                                            className: n9.YU,
                                            id: n,
                                            children: `${t} ${null != h[n] ? `(${h[n]})` : ""}`,
                                        },
                                        n,
                                    );
                                }),
                            ],
                        }),
                    }),
                    A && null == t
                        ? (0, l.jsx)(x.y, { className: n5.u1 })
                        : t?.map((e, n) =>
                              (0, l.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, l.jsx)(y.E, {
                                                    variant: "text-md/semibold",
                                                    className: n9.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: n5.vY,
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
    tl = t(916815);
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
    if (c) n = (0, l.jsx)("div", { className: n5.$$, children: (0, l.jsx)(x.y, { className: n5.u1 }) });
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
    } else n = (0, l.jsx)("div", { className: n5.vY, children: o.map((e) => (0, l.jsx)(n7, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: n5.$$,
        children: (0, l.jsxs)(tt.Ar, {
            className: n5.XG,
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
                                  t.e("78841"),
                                  t.e("66234"),
                                  t.e("72891"),
                                  t.e("7132"),
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
          ? (0, l.jsx)("div", { className: n5.$$, children: (0, l.jsx)(x.y, { className: n5.u1 }) })
          : u?.length === 0 && null == a
            ? (0, l.jsx)("div", { className: n5.$$, children: (0, l.jsx)(nw, { guild: i, onAddGuild: y }) })
            : (0, l.jsx)(n6, {
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
    to = t(313281),
    tc = t(47167),
    tu = t(928078),
    th = t(58736),
    tm = t(353428),
    tA = t(976860),
    tg = t(288254),
    tx = t(873614),
    tp = t(111956),
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
              onClick: () => {
                  (0, tG.iN)(n.id),
                      (0, tW.A)(),
                      (0, tB.z)(n.guild_id, o, n.id, {
                          modViewPanel: tz.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(er.jej.POPOUT_CLOSE);
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
var t4 = t(31717),
    t5 = t(853742),
    t9 = t(224517);
function t8(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, m.bG)([ek.A], () => ek.A.getChannel(i?.parent_id)),
        r = (0, m.bG)([n$.A], () => n$.A.getGuild(i?.getGuildId())),
        d = (0, tc.Ay)(i),
        o = (0, tg.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, t5.rH)(i));
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
                className: t9.T,
                children: (0, l.jsx)(tu.A, { channel: i, guild: r, chatInputType: nt.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var t6 = t(91242),
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
    ic = t(328312);
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
    im = t(251766),
    iA = t(950344),
    ig = t(217530),
    ix = t(162093),
    ip = t(601099);
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
var ij = t(604681),
    ib = t(761640),
    iC = t(678959);
function iE(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([ib.Ay], () => ib.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        i = (0, m.bG)([nb.A], () => (nb.A.getChannelConversations(n)?.length ?? 0) > 0, [n]);
    return (0, l.jsx)(th.In, {
        onClick: ij.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nu.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iC.q : void 0,
        selected: t,
        showBadge: i,
    });
}
var iy = t(967198);
function iv(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([ib.Ay], () => ib.Ay.getSection(n)),
        i = (0, m.bG)([iy.A], () => iy.A.getGuildId()),
        s = t === er.YvQ.MEMBERS;
    return (0, l.jsx)(th.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: _.n,
        onClick: function () {
            eS.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                ij.A.toggleMembersSection();
        },
        selected: s,
    });
}
var iN = t(187360),
    iT = t(366605),
    i_ = t(945830);
let iS = function (e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
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
                return (0, l.jsx)(i_.A, { ...e, onJump: u, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(th.In, {
                    ...e,
                    ref: o,
                    onClick: c,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iT.t,
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
var iR = t(306788),
    iL = t(863922),
    iO = t(822074),
    iM = t(521732);
function iP(e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        i = (0, m.bG)([iO.A], () => iO.A.shouldShowTopicsBar());
    return (0, l.jsx)(th.Ay.Icon, {
        icon: iR.K,
        onClick: function () {
            en.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iM.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iL.Oz)();
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var iD = t(885574),
    ik = t(947094),
    iw = t(919577),
    iU = t(207777),
    iG = t(422844),
    iF = t(435470),
    iH = t(892110),
    iB = t(45494);
function iV(e) {
    let { channel: n } = e,
        t = (0, iF.S4)(n),
        i = (0, m.bG)([ik.A], () => ik.A.hasHidden(n.id)),
        s = (0, iH.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, iG.R)(n.id),
        o = (0, m.bG)(
            [iU.A, iB.A],
            () => !!(iU.A.getThreadIds(n.id, a, r, d).length > 0) || !!(iB.A.getThreads(n.id, a, r, d).length > 0),
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
        icon: iD.m,
        onClick: function () {
            return iw.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var iW = t(742589),
    iz = t(43105),
    iY = t(428689),
    iq = t(978940),
    iK = t(387755),
    iX = t(730852),
    iQ = t(641703),
    i$ = t(379848),
    iZ = t(753727),
    iJ = t(222692),
    i0 = t(442353),
    i1 = t(470710),
    i2 = t(186111),
    i3 = t(451409),
    i7 = t(994500),
    i4 = t(977997),
    i5 = t(360469),
    i9 = t(49999),
    i8 = t(731854);
class i6 extends s.PureComponent {
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
                : i3.Ay.supports(i8.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U))),
            (0, l.jsx)(th.Ay.Icon, { icon: iY.n, onClick: e, disabled: u || i, tooltip: c })
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
            icon: iq._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(i$.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(iz.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: i5.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(i9.i.USER_DISMISS),
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
            return iK.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, i0.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        iX.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, td.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: i9.i.AUTO }),
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
        (0, i0.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, iJ.A)();
    };
}
function le(e) {
    let { channel: n } = e,
        t = (0, iZ.A)(),
        i = (0, m.bG)([ne.A], () => ne.A.getMode(n.id)),
        s = (0, m.bG)([i4.A], () => i4.A.isInChannel(n.id)),
        a = (0, m.bG)([L.Ay], () => L.Ay.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, m.cf)([i1.A], () => ({
            callActive: i1.A.isCallActive(n.id),
            callUnavailable: i1.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([i7.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !i7.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && i7.A.isBlocked(o),
        })),
        h = (0, m.bG)([J.default], () => J.default.getUser(o)),
        g = (0, tV.Us)(),
        x = [],
        p = (0, iQ.A)(n.id),
        f = (0, m.bG)([i2.A], () => i2.A.hasLayers());
    return (p && !f && x.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(i6, {
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
var ln = t(277370),
    lt = t(765178),
    li = t(231483),
    ll = t(544231),
    ls = t(338510),
    la = t(151119),
    lr = t(278941),
    ld = t(665909),
    lo = t(327337);
let lc = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, ls.u)(n.id),
        a = (0, la.S)(n.id),
        r = (0, lr.e)(n.id),
        d = (0, g.useHasAnyModalOpen)(),
        o = (0, m.bG)([i2.A], () => i2.A.hasLayers()),
        c = s.useCallback(
            () => (a ? z.intl.string(z.t["16QyDv"]) : null != r ? z.intl.string(z.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, A] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != i &&
            (lt.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, ll.xi)(n.id, [r.id]);
            }, 5e3),
            (0, ld.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: ld.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (lt.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, ll.bg)(n.id);
                }, 5e3));
    }, [n, r, i, a]),
        (0, F.Ay)(() => {
            null != i &&
                (0, ld.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: ld.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, ll.xi)(n.id, [r.id]),
            null != i &&
                ((0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("25028"),
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
                    { modalKey: lo.V },
                ),
                (0, ld._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: ld.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
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
                  icon: li.l,
                  onClick: x,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var lu = t(262763),
    lh = t(406704),
    lm = t(576705);
let lA = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, iZ.A)(),
        i = (0, m.bG)([i4.A], () => i4.A.isInChannel(n.id)),
        a = (0, m.bG)([i4.A], () => !u().isEmpty(i4.A.getVoiceStatesForChannel(n.id))),
        r = (0, m.bG)([lm.A], () => lm.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, ia.A)(n.id),
        o = (0, lh.Id)(n),
        { enabled: c } = lh.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lu.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: d, locked: !1 });
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
              icon: iq._,
              onClick: h,
              tooltip: a ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lg = t(812991),
    lx = t(47675),
    lp = t(999291);
function lf() {
    let [e, n] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            let e = () => {
                n(window.innerWidth >= 1132);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
function lI(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, m.bG)([ib.Ay], () => ib.Ay.getSection(n.id, n?.isDM())),
        s = (0, lp.Ay)(n.getRecipientId()),
        a = lf(),
        r = i === er.YvQ.PROFILE && a;
    return (0, l.jsx)(th.In, {
        disabled: !a || t,
        tooltip: !a || t ? z.intl.string(z.t.YneDgF) : r ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lg.n,
        onClick: function () {
            (0, lx.am)({ displayProfile: s, isProfileOpen: !r }), ij.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let lj = {};
class lb extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lj[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lj[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lj;
    }
}
let lC = new lb(nS.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lj[t];
        return null == i ? ((lj[t] = new Set()), lj[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lj[n.id] && !n.unavailable && (delete lj[n.id], !0);
    },
});
var lE = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    ly = t(376943),
    lv = t(394953),
    lN = t(241541),
    lT = t(709066),
    l_ = t(87664),
    lS = t(18707);
t(667532);
var lR = t(403362);
let lL = [],
    lO = es.Ay.getEnableHardwareAcceleration();
function lM(e) {
    let { user: n, channel: i, status: a, activities: r } = e,
        d = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        o = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([i7.A], () => i7.A.getNickname(n.id)),
        h = (0, l_.A)(n.id),
        A = s.useRef(null);
    function g(e) {
        (0, j.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("94881"),
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
                    shouldAnimateStatus: lO,
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
function lP(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function lD(e) {
    let { channel: n } = e,
        t = J.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: a } = (0, M.Ay)(O.A.MEMBER_LIST),
        { listItems: r } = (0, m.bG)(
            [i7.A, J.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = J.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(lR.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    i7.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? lL,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: lL });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            lP,
        );
    s.useEffect(() => {
        en.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let d = i && r.every((e) => e.user.isStaff()),
        o = (0, lS.G)("PrivateChannelRecipients"),
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
                                d && (0, l.jsx)(lT.A, { type: lT.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lM,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        o &&
                            (0, l.jsx)("div", {
                                className: eo.Uf,
                                children: (0, l.jsx)(ln.NE, {
                                    channel: n,
                                    text: z.intl.string(z.t.NB5DFD),
                                    icon: lN.D,
                                    variant: "secondary",
                                    fullWidth: !0,
                                    allowFrictionlessGDMUpsell: !c,
                                    entryPointType: ln.YW.MEMBER_LIST,
                                }),
                            }),
                    ],
                }),
            }),
        }),
    });
}
var lk = t(527549),
    lw = t(853279),
    lU = t(85942);
function lG() {
    return (0, l.jsx)("div", {
        className: lU.zt,
        children: (0, l.jsx)("header", {
            className: lw.wL,
            children: (0, l.jsxs)("div", {
                className: lw.TN,
                role: "status",
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: lw.zp,
                        children: (0, l.jsx)(x.y, {
                            type: x.y.Type.SPINNING_CIRCLE,
                            className: lw.u1,
                            itemClassName: lw.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var lF = t(138298),
    lH = t(940382),
    lB = t(790535),
    lV = t(163328),
    lW = t(425557),
    lz = t(270003),
    lY = t(150934),
    lq = t(452027),
    lK = t(292666),
    lX = t(511274),
    lQ = t(465532),
    l$ = t(579872),
    lZ = t(119031),
    lJ = t(408018),
    l0 = t(138617),
    l1 = t(822610),
    l2 = t(915089),
    l3 = t(314307),
    l7 = t(636922),
    l4 = t(931664),
    l5 = t(631576),
    l9 = t(885386),
    l8 = t(232835),
    l6 = t(522602),
    se = t(806150),
    sn = t(518960),
    st = t(753738);
function si(e, n) {
    return { type: e, message: n ?? null };
}
function sl(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var ss = t(659617),
    sa = t(474078),
    sr = t(636537),
    sd = t(152367),
    so = t(147087);
async function sc(e) {
    try {
        let n = await sr.Bo.post({
            url: er.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return n.ok ? (n.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
var su = t(55294),
    sh = t(790158),
    sm = t(415296);
let sA = nt.oU.THREAD_CREATION;
function sg(e) {
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
                      className: sh.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: t4.C.FirstThreadMessage }),
                          (0, l.jsx)(sx, { parentChannelId: n }),
                          (0, l.jsx)(sp, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function sx(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = t4.A.getThreadSettings(n),
                t = t4.A.getDraft(n, t4.C.FirstThreadMessage).trim(),
                i = l6.A.getUploads(n, t4.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? l$.A.show({
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
            (0, l.jsx)(th.Ay.Icon, { icon: lV.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(th.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sp(e) {
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
            let t = (0, m.bG)([t4.A], () => t4.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        l((e) => ({ ...e, ...t })), lQ.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(t, i),
        { textAreaState: A, setTextAreaState: g } = (function (e, n) {
            let [t, i] = s.useState((0, lJ.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = t4.A.getDraft(e.id, t4.C.FirstThreadMessage);
                        (0 === l.length || !0 === t) && i((0, lJ.ur)(l)), n(t4.A.getThreadSettings(e.id) ?? {});
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
        x = (0, ss.EN)(t),
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
                h = (0, so.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = l8.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await sc(e);
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
                                icon: sd.D,
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
                                      icon: sd.D,
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
                g = (0, su.Ay)({
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
                                (l = l4.A.getStickerPreview(n.id, sA.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = l6.A.getUploads(n.id, t4.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(o ? si(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? si(0, z.intl.string(z.t.kesTVT)) : null),
                            o || u)
                        )
                            return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, se.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sA,
                            channel: null == t ? n : null,
                        });
                        if (!x) return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, l, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), si(1, (0, st.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(si(2, z.intl.string(z.t.uXA573)));
                            return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, l5.x5)(n.id, sA.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 };
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
        y = (0, ss.Iy)(c, x) ? lW.t : lV.y;
    return (0, l.jsx)("div", {
        className: sh.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, l.jsx)("div", {
            className: r()(sh.Og, `group-spacing-${d}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: sh.Zd,
                children: [
                    (0, l.jsx)(tt.Ip, {
                        className: sh.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sh.bv,
                            children: [
                                (0, l.jsxs)(l3.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(sm.P0, sh.P0),
                                            children: (0, l.jsx)(y, { className: sm.Kk }),
                                        }),
                                        (0, l.jsxs)(lz.n, {
                                            children: [
                                                (0, l.jsx)(sI, {
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
                                                    ? (0, l.jsx)(sf, {
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
                                (0, l.jsx)(sb, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sh.Eh,
                        children: [
                            (0, l.jsx)(sj, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: g,
                                submit: C,
                                error: b,
                            }),
                            (0, l.jsx)(lZ.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sh.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sf(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        a = (0, ss.Iy)(t, s),
        r = (0, l.jsx)(lY.S, {
            disabled: s === ss.jk.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === ss.jk.Disabled
        ? null
        : (0, l.jsx)(lq.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: a ? z.intl.string(z.t.EWXycz) : void 0,
              children: r,
          });
}
function sI(e) {
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
        h = sl(a, { content: u }),
        m = (0, ss.l1)(n, t),
        A = null != t && !o,
        g = (0, l2.GV)(),
        x = o ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(lK.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: g,
        placeholder: x,
        maxLength: er.Ign,
        onChange: function (e) {
            s({ name: (0, sa.A)(e, !1) }), "" !== e ? R.A.startTyping(n.id) : R.A.stopTyping(n.id);
        },
        onBlur: function () {
            let e = (0, sa.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || d,
    });
}
function sj(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: a, error: d } = e,
        [o, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        A = s.useCallback(() => c(!1), []),
        g = s.useCallback(
            (e, t, l) => {
                lQ.A.saveDraft(n.id, t, t4.C.FirstThreadMessage),
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
    let p = (0, m.bG)([lm.A], () => lm.A.can(er.xBc.ATTACH_FILES, n)),
        f = sl(d, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l1.A, { channelId: n.id, type: sA, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sh.xN, children: (0, l.jsx)(lX.U, { error: f }) }),
            (0, l.jsx)(l0.Ay, {
                type: sA,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sh.gM, sh.Yy),
                innerClassName: r()(sh.SL, { [sh.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: g,
                onSubmit: x,
                promptToUpload: sn.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sb(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([l8.A], () => (null == t ? null : l8.A.getMessage(n.id, t))),
        s = l9.hH.useSetting();
    return null != i
        ? (0, l.jsx)(l7.A, {
              className: sh.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sC = t(305866),
    sE = t(707539),
    sy = t(702513),
    sv = t(614879);
function sN(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e8.ni)(n),
        d = s.useCallback(() => {
            i(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, sE.D3)("Popout"), i(!t);
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
            return (0, l.jsx)(sC.l, {
                children: (0, l.jsx)(sy.A, { className: sv.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(th.In, {
                ...e,
                ref: a,
                className: sv.Kk,
                onClick: o,
                icon: lV.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sT = t(40389);
function s_(e) {
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
            return (0, l.jsx)(sS, { ...e, channel: n });
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
function sS(e) {
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
        x = (0, sT.A)(n),
        p = (0, tk.A)(n),
        f = (0, tL.A)(n),
        I = l9.SY.useSetting(),
        j = (0, m.bG)([i4.A], () => !u().isEmpty(i4.A.getVoiceStatesForChannel(n.id)));
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
var sR = t(332456),
    sL = t(973854),
    sO = t(248537);
function sM(e) {
    var n;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, m.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, m.bG)([n$.A], () => n$.A.getGuild(o?.getGuildId())),
        h = (0, tc.Ay)(o),
        A = (0, tg.Uf)(o);
    (n = o),
        (i = (0, m.bG)([i4.A], () => null != n && !u().isEmpty(i4.A.getVoiceStatesForChannel(n.id)))),
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
            let e = (0, sR.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, sL.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(tx.A, { guild: c, channelId: A });
    let x = (0, l.jsx)(t7, { channel: o, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: o, draftType: t4.C.ChannelMessage }),
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
                className: sO.T,
                children: (0, l.jsx)(tu.A, { channel: o, guild: c, chatInputType: nt.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sP = t(210714),
    sD = t(975732),
    sk = t(707554),
    sw = t(140735),
    sU = t(590180),
    sG = t(32206),
    sF = t(474257),
    sH = t(562153),
    sB = t(945810);
let sV = (0, sB.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function sW(e) {
    return sV.useConfig({ location: e }).enabled;
}
var sz = t(215530),
    sY = t(148411),
    sq = t(736653),
    sK = t(311016),
    sX = t(480335),
    sQ = t(713517),
    s$ = t(183555),
    sZ = t(718019),
    sJ = t(413492),
    s0 = t(915614),
    s1 = t(308244),
    s2 = t(743987),
    s3 = t(900179),
    s7 = t(946356),
    s4 = t(878555),
    s5 = t(35241),
    s9 = t(587168),
    s8 = t(442228),
    s6 = t(744808);
let ae = (0, sB.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var an = t(416497);
function at(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function ai(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: a } = e,
        { showButton: r } = ae.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !r) return null;
    function d() {
        a(), (0, lx.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
    }
    if (s)
        return (0, l.jsx)("div", {
            className: an.lS,
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
              className: an.qr,
              children: (0, l.jsx)(ns.D, {
                  onClick: d,
                  className: an.wC,
                  children: (0, l.jsx)(y.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: an.xQ, children: [(0, l.jsx)(s6.A, { frame: i, filterLayer: at }), o] })
        : o;
}
var al = t(996988),
    as = t(556818),
    aa = t(523802);
function ar(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        a = __OVERLAY__ || !(0, sK.A)(n.id),
        d = (0, lp.Ay)(n.id),
        o = (0, sq.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        h = (0, s$.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: g } = (0, sQ.A)(m);
    function x() {
        (0, sD.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(M.f5, {
        value: u,
        children: (0, l.jsx)(s$.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsxs)(s7.A, {
                ref: m,
                user: n,
                displayProfile: d,
                themeType: al.d.SIDEBAR,
                themeOverride: o,
                className: i ? r()(as.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tt.d_, {
                        className: i ? as.BE : void 0,
                        children: [
                            (0, l.jsx)(s9.A, { children: (0, l.jsx)(s5.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: as.wx,
                                children: [
                                    (0, l.jsx)(s0.A, {
                                        user: n,
                                        displayProfile: d,
                                        themeType: al.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(sZ.A, {
                                        user: n,
                                        displayProfile: d,
                                        channelId: t.id,
                                        themeType: al.d.SIDEBAR,
                                        onOpenProfile: a ? void 0 : x,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: aa.rf,
                                children: [
                                    (0, l.jsx)(s4.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sH.Ay.getName(null, t.id, n),
                                        onClickName: a ? void 0 : x,
                                        pronouns: d?.pronouns,
                                        trailing: (0, l.jsx)(sJ.A, {
                                            displayProfile: d,
                                            themeType: al.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(s8.A, {
                                                      userId: n.id,
                                                      userBio: d?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(s3.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s2.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(s7.A.Overlay, {
                                              className: aa.Lw,
                                              children: [
                                                  d?.bio != null &&
                                                      "" !== d.bio &&
                                                      (0, l.jsx)(s3.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(s1.A, {
                                                              userBio: d?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(s3.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s2.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !a &&
                        (0, l.jsx)(ai, {
                            handleOpenProfile: x,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    d?.profileEffect != null && (0, l.jsx)(sX.A, { skuId: d?.profileEffect?.skuId, isHovering: g }),
                ],
            }),
        }),
    });
}
var ad = t(331322),
    ao = t(249790),
    ac = t(254828),
    au = t(783123),
    ah = t(735103);
function am(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: a } = e,
        r = (0, lp.Ay)(n.id),
        d = (0, sq.Ay)(),
        o = (0, m.bG)([i7.A], () => i7.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, M.Ay)(o ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        u = (0, s$.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        h = s.useRef(null);
    return (0, l.jsx)(M.f5, {
        value: c,
        children: (0, l.jsx)(s$.of, {
            value: u,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(s7.A, {
                ref: h,
                user: n,
                displayProfile: r,
                themeType: al.d.SIDEBAR,
                themeOverride: d,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tt.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ah.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ah.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ah.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ah.N1,
                                        children: [
                                            (0, l.jsx)(ao.A, { user: n }),
                                            (0, l.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(o ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: sH.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ad.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(au.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    a(),
                                                        (0, lx.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        });
                                                },
                                            }),
                                            (0, l.jsx)(ac.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    a(),
                                                        (0, lx.Wn)({
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
var aA = t(580929),
    ag = t(717421),
    ax = t(31956),
    ap = t(673843),
    af = t(561794),
    aI = t(321191),
    aj = t(679492),
    ab = t(439053),
    aC = t(312381),
    aE = t(349419),
    ay = t(984545),
    av = t(193738),
    aN = t(344565),
    aT = t(983495),
    a_ = t(695366),
    aS = t(661531),
    aR = t(922590),
    aL = t(821269),
    aO = t(93246),
    aM = t(351906),
    aP = t(383199),
    aD = t(559506),
    ak = t(361311),
    aw = t(931481),
    aU = t(501193),
    aG = t(383448),
    aF = t(646986),
    aH = t(243166),
    aB = t(360563),
    aV = t(123292),
    aW = t(840411),
    az = t(909536);
let aY = (0, sB.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aq = t(711690),
    aK = t(394300),
    aX = t(575593),
    aQ = t(587895),
    a$ = t(44120),
    aZ = t(532794),
    aJ = t(31969),
    a0 = t(317560),
    a1 = t(533406),
    a2 = t(661492);
let a3 = (0, sB.mj)({
    name: "2026-06-remove-wishlist-dm-sidebar-side-copy",
    kind: "user",
    defaultConfig: { shouldHideSideText: !1 },
    variations: { 0: { shouldHideSideText: !1 }, 1: { shouldHideSideText: !0 } },
});
var a7 = t(212387),
    a4 = t(74135),
    a5 = t(662349),
    a9 = t(369005);
function a8(e) {
    let { title: n, description: t, onClick: i } = e;
    return (0, l.jsxs)("div", {
        className: a9.S,
        children: [
            (0, l.jsx)(ns.D, {
                onClick: i,
                className: a9.H,
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
var a6 = t(532423),
    re = t(479026),
    rn = t(699976),
    rt = t(202541),
    ri = t(518477),
    rl = t(80223),
    rs = t(997990);
function ra(e) {
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
            promotion: g,
            source: x = af.uS.WISHLIST,
            hasMultipleSources: p = !1,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, s$.NJ)(),
        I = sW("DMSidePanelWishlistItemCard") ? rn.y.SIZE_78 : rn.y.SIZE_90,
        j = rn.Z[I],
        b = s.useCallback(() => {
            f({
                action: ri.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [n, i, h, f]),
        C = s.useCallback(() => {
            f({
                action: ri.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                m();
        }, [m, n.id, i, n.productLine, f]),
        { label: E, icon: y, isPromptingPurchase: v } = (0, a5.h)({ wishlistOwner: t, isOwned: !1, shortText: !0 }),
        [N, T] = s.useState(!1),
        _ = a3.useConfig({ location: "dm_side_panel_wishlist_item_card" }).shouldHideSideText;
    return (0, l.jsxs)(ad.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", {
                className: rl.kL,
                children: (0, l.jsxs)(a7.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: n,
                    user: t,
                    spec: j,
                    cardStyle: r()(rl.Nr, d),
                    skuPreviewStyle: r()(rl.ho, o),
                    skuAssetClassName: N ? c : void 0,
                    onClick: b,
                    "aria-label": z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a2.TC)(n) }),
                    onHoverOrFocusChange: T,
                    children: [
                        p && x === af.uS.WISHLIST ? (0, l.jsx)(a6.n, { spec: j, user: t }) : null,
                        (0, l.jsx)(a5.A, { spec: j, onClick: v ? C : b, isHoveringOrFocusing: N, label: E, icon: y }),
                        !N && g,
                    ],
                }),
            }),
            a && !_ && (0, l.jsx)(a8, { title: A.title, description: A.description, onClick: b }),
        ],
    });
}
function rr(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        r = (0, eb.bG)([aQ.A], () => aQ.A.getApplication(n.applicationId)),
        { analyticsLocations: d } = (0, M.Ay)(
            ...(i ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = sW("DMSidePanelWishlistItemCard") ? rn.y.SIZE_78 : rn.y.SIZE_90,
        c = rn.Z[o],
        u = (0, aJ.F)("sku_gift_badge", { applicationId: n.applicationId, skuId: n.id }),
        h = s.useCallback(() => {
            (0, a1.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: rt.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: d },
            );
        }, [n, t, d]),
        m = s.useCallback(() => {
            (0, a0.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: rt.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: d,
            });
        }, [n.id, n.applicationId, t, d]),
        A = s.useMemo(
            () => ({ title: n.name, description: z.intl.format(z.t["CqpEC+"], { applicationName: r?.name }) }),
            [n.name, r?.name],
        );
    return (0, l.jsx)(ra, {
        sku: n,
        analyticsLocations: d,
        wishlistOwner: t,
        onDetailsClick: m,
        onPurchaseClick: h,
        singleCardInfo: A,
        promotion: null != u ? (0, l.jsx)(a4.s, { spec: c, icon: u.Icon, tooltipText: u.tooltip }) : null,
        ...a,
    });
}
function rd(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        d = s.useCallback(() => {
            (0, a$.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: rt.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        o = (0, re.e)({ sku: n, giftRecipient: t, giftingOrigin: rt.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                r()(rl.ML, {
                    [rl.M]: n?.tenantMetadata?.collectibles?.type === aX.R.AVATAR_DECORATION,
                    [rl.Hm]: n?.tenantMetadata?.collectibles?.type === aX.R.PROFILE_EFFECT,
                    [rl.hH]: n?.tenantMetadata?.collectibles?.type === aX.R.PROFILE_FRAME,
                    [rl.qF]: n?.tenantMetadata?.collectibles?.type === aX.R.NAMEPLATE,
                    [rl.l2]: n?.tenantMetadata?.collectibles?.type === aX.R.BUNDLE,
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
                        case aX.R.AVATAR_DECORATION:
                            return z.intl.string(z.t["7v0T9P"]);
                        case aX.R.PROFILE_EFFECT:
                            return z.intl.string(z.t.wR5wOo);
                        case aX.R.NAMEPLATE:
                            return z.intl.string(z.t.x5CoXR);
                        default:
                            return "";
                    }
                })(n),
            }),
            [n],
        );
    return (0, l.jsx)(ra, {
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
function ro(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        r = s.useCallback(() => {
            (0, aZ.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: rt.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        d = s.useMemo(() => ({ title: n.name, description: z.intl.string(z.t.Ipxkog) }), [n.name]);
    return (0, l.jsx)(ra, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: rs.MO,
        disableRiveHover: !0,
        singleCardInfo: d,
        ...a,
    });
}
function rc(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rr, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(rd, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(ro, { sku: n, ...t });
        default:
            return null;
    }
}
var ru = t(428262),
    rh = t(535089),
    rm = t(617348);
function rA(e) {
    let {
            unownedWishlistItems: n,
            profileOwner: t,
            onClick: i,
            wishlistId: a,
            isNitroRecEnabled: r,
            isSortingNitroToFront: d,
        } = e,
        { analyticsLocations: o } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: c } = (0, s$.NJ)(),
        u = (0, s.useId)(),
        h = (0, s.useMemo)(() => (d ? (0, aW.gm)(n ?? []) : (n ?? [])), [n, d]),
        m = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        A = (0, s.useMemo)(() => {
            let e = h.slice(0, 3).map((e) => ({ item: e, source: af.uS.WISHLIST }));
            if (r && e.length < 3) {
                let n = h.some((e) => ru.Ay.isPremiumSku(e.skuId));
                if (!ru.Ay.isPremiumAtLeast(t.premiumType, rt.PremiumTypes.TIER_2) && !n) {
                    let n = aK.A.fromSKU((0, aW.rI)());
                    null != n &&
                        (d
                            ? e.unshift({ item: n, source: af.uS.POPULAR })
                            : e.push({ item: n, source: af.uS.POPULAR }));
                }
            }
            return e;
        }, [h, r, t.premiumType, d]),
        g = (0, s.useMemo)(
            () =>
                new Set(
                    A.map((e) => {
                        let { source: n } = e;
                        return n;
                    }),
                ).size > 1,
            [A],
        ),
        x = (0, s.useMemo)(
            () =>
                g
                    ? z.intl.string(z.t.yBivur)
                    : A.length > 0 && A[0].source === af.uS.POPULAR
                      ? z.intl.string(z.t.BCi1gT)
                      : z.intl.string(z.t["7lZ31J"]),
            [A, g],
        ),
        p = (0, s.useMemo)(
            () =>
                new Set(
                    A.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [A],
        ),
        f = (0, rh.A)({ wishlistId: a ?? null, onAction: m, productLines: p }),
        I = (0, s.useMemo)(
            () =>
                A.map((e, n) => {
                    let { item: s, source: r } = e;
                    return null == s.sku
                        ? null
                        : (0, l.jsx)(
                              rc,
                              {
                                  sku: s.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: a,
                                  analyticsLocations: o,
                                  onViewWishlist: i,
                                  isSingleCard: 1 === A.length,
                                  source: r,
                                  hasMultipleSources: g,
                              },
                              s.skuId,
                          );
                }).filter(lR.Vq),
            [o, i, t, A, g, a],
        );
    return 0 === I.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(s7.A.Overlay, {
                  ref: f,
                  className: rm.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: rm.wx,
                          children: [
                              (0, l.jsx)(S.D, { variant: "text-sm/medium", id: u, children: x }),
                              h.length > 3 &&
                                  (0, l.jsx)(aV.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(sk.F, { children: (0, l.jsx)("div", { className: rm.vY, children: I }) }),
                  ],
              }),
          });
}
function rg(e) {
    let n = (0, aq.a)("UserProfileSidebarWishlistBreadcrumb");
    return (0, l.jsx)(rA, { ...e, isSortingNitroToFront: n });
}
function rx(e) {
    var n;
    let t,
        i,
        { isLoading: s, unownedWishlistItems: a, ...r } = e,
        d =
            ((n = "UserProfileSidebarWishlistBreadcrumb"),
            (t = (0, az.Gh)(n)),
            (i = aY.useConfig({ location: n }).isEnabled),
            t && i);
    if (s || r.profileOwner.bot || ((null == a || 0 === a.length) && !d)) return null;
    let o = J.default.getCurrentUser()?.id,
        c = null != o && o !== r.profileOwner.id,
        u = a?.some((e) => ru.Ay.isPremiumSku(e.skuId)) ?? !1,
        h = d && (a ?? []).length < 3;
    return c && (u || h)
        ? (0, l.jsx)(rg, { ...r, unownedWishlistItems: a, isNitroRecEnabled: d })
        : (0, l.jsx)(rA, { ...r, unownedWishlistItems: a, isNitroRecEnabled: d, isSortingNitroToFront: !1 });
}
function rp(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: a,
            isHoveringOrFocusing: r,
            isRedesignEnabled: d,
            onOpenProfile: o,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([i7.A], () => ({
            relationshipType: i7.A.getRelationshipType(n.id),
            originApplicationId: i7.A.getOriginApplicationId(n.id),
        })),
        h = (0, aR.fi)(n.id),
        A = (0, aL.q)({ userId: n.id }),
        g = (0, m.bG)([aM.A], () => aM.A.hidePersonalInformation),
        x = (0, m.bG)([aI.A], () => aI.A.getUserProfile(n.id)?.application),
        p = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([aI.A], () => ({ defaultWishlistId: aI.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: j } = (0, af.fw)({ wishlistId: d ? f : void 0, userId: n.id });
    (0, ap.A)(I);
    let b = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: aa.rf,
        children: [
            (0, l.jsx)(aD.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: aa.pq,
                children: [
                    (0, l.jsx)(s4.Ay, {
                        user: n,
                        guildId: a.guild_id,
                        displayName: sH.Ay.getName(null, a.id, n),
                        onClickName: o,
                        displayNameTrailing: g
                            ? null
                            : (0, l.jsx)(aH.A, { userId: n.id, isVisible: r, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(sJ.A, {
                            displayProfile: i,
                            themeType: al.d.SIDEBAR,
                            isRedesignEnabled: d,
                        }),
                    }),
                    d && (0, l.jsx)(aB.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            c === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(s7.A.Overlay, {
                    children: (0, l.jsx)(aw.A, { user: n, channelId: a.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    s7.A.Overlay,
                    {
                        children: (0, l.jsx)(aw.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aG.A, { user: n }),
            i?.private &&
                (0, l.jsx)(s7.A.Overlay, { children: (0, l.jsx)(aU.A, { username: sH.Ay.getName(null, a.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(s7.A.Overlay, {
                    className: aa.Lw,
                    children: (0, l.jsx)(s3.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: (0, l.jsx)(a_.E, { size: "xxs", color: aS.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aO.T, { userId: n.id }),
                    }),
                }),
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(s8.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: g,
                            isHoveringOrFocusing: r,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(s3.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(s2.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: aa.kR,
                children: [
                    d && p && (0, l.jsx)(aE.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: o }),
                    (0, l.jsx)(aF.A, { user: n, currentUser: t, onOpenUserProfileModal: o }),
                    d
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  x?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aP.A, {
                                          applicationId: x.id,
                                          commandIds: x.popularApplicationCommandIds,
                                          channel: a,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(s3.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(ak.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(s7.A.Overlay, {
                              className: aa.Lw,
                              children: [
                                  !g &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(s3.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(s1.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: r,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          x?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aP.A, {
                                                  applicationId: x.id,
                                                  commandIds: x.popularApplicationCommandIds,
                                                  channel: a,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(s3.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(ak.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(s3.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(s2.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    d &&
                        (0, l.jsx)(rx, {
                            profileOwner: n,
                            unownedWishlistItems: b,
                            wishlistId: f,
                            isLoading: j,
                            onClick: () => {
                                o?.({ tabSection: ri.RP.WISHLIST });
                            },
                        }),
                ],
            }),
        ],
    });
}
var rf = t(114212),
    rI = t(913453),
    rj = t(229187),
    rb = t(21241),
    rC = t(201934),
    rE = t(51943),
    ry = t(847374),
    rv = t(320448),
    rN = t(680391);
function rT(e) {
    let { section: n, header: t, items: i, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, s$.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? ry.a : rv._;
    return (0, l.jsxs)("section", {
        className: rN.uW,
        children: [
            (0, l.jsxs)(ns.D, {
                className: r()(rN.wx, rN.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(rN.p_, a), children: i }),
        ],
    });
}
var r_ = t(54557);
function rS(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, M.Ay)(),
        { context: s } = (0, s$.NJ)(),
        a = (0, ty.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, rI.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, l.jsxs)(s7.A.Overlay, {
              className: r_.Lw,
              children: [
                  u &&
                      (0, l.jsx)(rT, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: r_.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  rE.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, nQ.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(rb.A, { className: r_.yF }),
                  c &&
                      (0, l.jsx)(rT, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: r_.p_,
                          onExpand: () => (0, rj.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: r_.nC,
                                                children: [
                                                    (0, l.jsx)(rf.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(rf.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            rC.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, sD.openUserProfileModal)({
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
function rR(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: a } = e,
        d = __OVERLAY__,
        o = (0, lp.Ay)(n.id),
        c = (0, sq.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        g = (0, s$.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id }),
        x = s.useRef(null),
        { isHoveringOrFocusing: p, isHovering: f } = (0, sQ.A)(x),
        I = (0, aj.fC)(),
        j = (0, sF.A)(o?.profileFrame?.skuId, "UserProfileSidebar");
    (0, ax.A)({ skuId: o?.profileFrame?.skuId, openedAt: u.current, context: g, analyticsLocations: A });
    let b = (0, ag.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, sD.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...g, ...e });
    }
    let E = o?.widgets != null && o.widgets.length > 0,
        { defaultWishlistId: y } = (0, m.cf)([aI.A], () => ({ defaultWishlistId: aI.A.getFirstWishlistId(n.id) })),
        { wishlist: v, isFetching: N } = (0, af.fw)({ wishlistId: a ? void 0 : y, userId: n.id });
    (0, ap.A)(v);
    let T = s.useMemo(() => (null == v ? null : v.items.filter((e) => !e.isOwned)), [v]);
    return (0, l.jsx)(M.f5, {
        value: A,
        children: (0, l.jsx)(s$.of, {
            value: g,
            openedAt: u.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(aj.Hl, {
                value: I,
                children: (0, l.jsxs)(s7.A, {
                    ref: x,
                    user: n,
                    displayProfile: o,
                    themeType: al.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: a ? o?.profileFrame?.skuId : null,
                    className: a ? r()(as.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: o?.private === !0,
                    children: [
                        o?.private === !0 && (0, l.jsx)(aC.A, {}),
                        null != I.interactionType && (0, l.jsx)(aA.animated.div, { style: b, className: as.tB }),
                        (0, l.jsxs)(tt.d_, {
                            className: r()(a && as.BE, !a && null != j && as.It),
                            children: [
                                (0, l.jsxs)(s9.A, {
                                    children: [
                                        (0, l.jsx)(av.A, { user: n, themeType: al.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(ay.A, { user: n }) : (0, l.jsx)(aN.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: as.wx,
                                    children: [
                                        (0, l.jsx)(s0.A, {
                                            user: n,
                                            displayProfile: o,
                                            themeType: al.d.SIDEBAR,
                                            specOverrides: a
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !p,
                                            className: as.vK,
                                        }),
                                        (0, l.jsx)(ab.A, { userId: n.id, className: as.oR }),
                                        (0, l.jsx)(sZ.A, {
                                            user: n,
                                            displayProfile: o,
                                            channelId: i.id,
                                            themeType: al.d.SIDEBAR,
                                            onOpenProfile: d ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aT.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: al.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rp, {
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
                                        className: as.sJ,
                                        children: (0, l.jsx)(aE.A, {
                                            user: n,
                                            widgets: o.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !a &&
                                    (0, l.jsx)("div", {
                                        className: as.vS,
                                        children: (0, l.jsx)(rx, {
                                            profileOwner: n,
                                            unownedWishlistItems: T,
                                            wishlistId: y,
                                            isLoading: N,
                                            onClick: () => {
                                                C?.({ tabSection: ri.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                !a && (0, l.jsx)(rS, { user: n, channelId: i.id }),
                            ],
                        }),
                        !d &&
                            (0, l.jsx)(ai, {
                                context: g,
                                analyticsLocations: A,
                                profileFrame: j,
                                handleOpenProfile: C,
                                isRedesignEnabled: a,
                            }),
                        o?.profileEffect != null && (0, l.jsx)(sX.A, { skuId: o?.profileEffect?.skuId, isHovering: f }),
                        a && null != j && (0, l.jsx)(s6.A, { frame: j, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var rL = t(748597);
function rO(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([J.default], () => J.default.getUser(t)),
        a = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
        r = lf(),
        [d, o] = (0, sz.A)(t),
        [c, u] = s.useState(!1),
        h = sW("UserProfileSidebarRenderer"),
        A = (0, lp.Ay)(t),
        g = (0, sG.c)("UserProfileSidebarRenderer") ? A?.profileFrame?.skuId : void 0,
        x = (0, sF.A)(g, "UserProfileSidebarRenderer"),
        p = (0, m.bG)([sU.A], () => sU.A.getProductFetch(g));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, sY.A)(i, e) : (0, sY.A)(t, void 0, e);
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
        I = sH.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? rL.H : void 0,
        children: (0, l.jsx)(sk.F, {
            component: (0, l.jsx)(sw.A, {
                children: (0, l.jsx)(sk.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children: d
                ? (0, l.jsx)(am, { user: i, currentUser: a, onHide: o, isRedesignEnabled: h, ...e })
                : i.isNonUserBot()
                  ? (0, l.jsx)(ar, { user: i, currentUser: a, isRedesignEnabled: h, ...e })
                  : (0, l.jsx)(rR, { user: i, currentUser: a, isRedesignEnabled: h, ...e }),
        }),
    });
}
var rM = t(522556),
    rP = t(225315),
    rD = t(684407),
    rk = t(95701),
    rw = t(919638),
    rU = t(763827),
    rG = t(812771),
    rF = t(946228),
    rH = t(462887),
    rB = t(276293),
    rV = t(96361),
    rW = t(745652);
let rz = () => {
    let e = (0, sq.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, rH.M)(e) ? rW : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: rV.kL,
        children: [
            (0, l.jsxs)(iW.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(iW.A.Icon, { icon: rB.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iW.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: rV.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: rV.j0, src: n }),
                    (0, l.jsx)(S.D, {
                        className: rV.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(y.E, {
                        className: rV.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rY = t(943712),
    rq = t(402216),
    rK = t(746080),
    rX = t(806931),
    rQ = t(165610),
    r$ = t(516607),
    rZ = t(964623);
function rJ() {
    return (0, l.jsx)("div", { className: rZ.wG, children: (0, l.jsx)(x.y, {}) });
}
let r0 = (0, nT.Fe)({
    createPromise: () =>
        Promise.all([
            t.e("83314"),
            t.e("64801"),
            t.e("91062"),
            t.e("39328"),
            t.e("41847"),
            t.e("57234"),
            t.e("31557"),
            t.e("72136"),
            t.e("78625"),
            t.e("49681"),
            t.e("21044"),
            t.e("33097"),
            t.e("4374"),
            t.e("21225"),
            t.e("23685"),
            t.e("42516"),
            t.e("89160"),
            t.e("58769"),
        ]).then(t.bind(t, 627669)),
    webpackId: 627669,
    renderLoader: rJ,
    name: "ForumChannel",
});
function r1() {
    return Promise.all([
        t.e("81142"),
        t.e("24856"),
        t.e("71453"),
        t.e("52264"),
        t.e("44400"),
        t.e("50814"),
        t.e("98444"),
        t.e("81725"),
        t.e("98902"),
        t.e("27655"),
        t.e("73040"),
        t.e("56804"),
        t.e("38450"),
        t.e("77219"),
        t.e("62489"),
        t.e("812"),
        t.e("36614"),
        t.e("91064"),
        t.e("7777"),
        t.e("45171"),
        t.e("39528"),
        t.e("91555"),
        t.e("30438"),
        t.e("38112"),
        t.e("77824"),
        t.e("93315"),
        t.e("8813"),
        t.e("11491"),
        t.e("62867"),
        t.e("65703"),
        t.e("68201"),
        t.e("60730"),
        t.e("792"),
        t.e("92822"),
        t.e("9291"),
        t.e("29260"),
        t.e("39103"),
        t.e("4098"),
        t.e("755"),
        t.e("33448"),
        t.e("36624"),
        t.e("15275"),
        t.e("22644"),
        t.e("73611"),
        t.e("4374"),
        t.e("74821"),
        t.e("43710"),
        t.e("15057"),
        t.e("26792"),
        t.e("88109"),
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
let r2 = (0, nT.Fe)({ createPromise: r1, webpackId: 540462, name: "ChannelCall", renderLoader: rJ });
function r3() {
    return Promise.all([
        t.e("45171"),
        t.e("89881"),
        t.e("24856"),
        t.e("71453"),
        t.e("52264"),
        t.e("44400"),
        t.e("50814"),
        t.e("98444"),
        t.e("81725"),
        t.e("98902"),
        t.e("27655"),
        t.e("36614"),
        t.e("38112"),
        t.e("85222"),
        t.e("56804"),
        t.e("38450"),
        t.e("77219"),
        t.e("62489"),
        t.e("2146"),
        t.e("68201"),
        t.e("792"),
        t.e("92822"),
        t.e("9291"),
        t.e("29260"),
        t.e("4098"),
        t.e("755"),
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
        t.e("88109"),
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
let r7 = (0, nT.Fe)({ createPromise: r3, webpackId: 67319, name: "StageChannelCall", renderLoader: rJ }),
    r4 = (0, nT.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("36885"),
                t.e("57234"),
                t.e("11394"),
                t.e("37082"),
                t.e("46757"),
                t.e("78381"),
                t.e("76831"),
                t.e("8177"),
                t.e("63982"),
                t.e("49681"),
                t.e("27786"),
                t.e("60241"),
                t.e("61058"),
                t.e("33097"),
                t.e("74333"),
                t.e("39214"),
                t.e("20803"),
                t.e("21225"),
                t.e("83752"),
                t.e("62368"),
            ]).then(t.bind(t, 104731)),
        webpackId: 104731,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(lG, {});
        },
    }),
    r5 = (0, nT.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("15079"),
                t.e("48845"),
                t.e("70613"),
                t.e("25870"),
                t.e("78381"),
                t.e("76831"),
                t.e("8177"),
                t.e("41027"),
                t.e("37351"),
                t.e("22671"),
                t.e("49681"),
                t.e("28136"),
                t.e("7775"),
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
class r9 extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sP.d)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? r1() : e === er.rbe.GUILD_STAGE_VOICE && r3();
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
            (0, sD.openUserProfileModal)({
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
                    t.e("94881"),
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
                    t.e("17244"),
                    t.e("98199"),
                    t.e("41175"),
                    t.e("39778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(rK.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(il.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(ni.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== rX.lp.STREAM
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
                    r.push((0, l.jsx)(le, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iS, { channel: e }, "pins")),
                    r.push((0, l.jsx)(ln.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    r.push((0, l.jsx)(lI, { channel: e, showCallOrActivityPanel: i || s || a }, "profile")),
                    r.push((0, l.jsx)(lc, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(le, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iS, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, l.jsx)(ln.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    r.push((0, l.jsx)(iv, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, l.jsx)(tq, { channel: e })),
                    null == n || n.isForumLikeChannel() || r.push((0, l.jsx)(sN, { channel: n }, "browser")),
                    e.isVocalThread() && r.push((0, l.jsx)(lA, { channel: e }, "thread-call")),
                    r.push((0, l.jsx)(t0, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iS, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, l.jsx)(iv, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && r.push((0, l.jsx)(iP, { channel: e }, "summaries")),
                    r.push((0, l.jsx)(s_, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                r.push((0, l.jsx)(sN, { channel: e }, "browser")),
                    t || r.push((0, l.jsx)(iN.A, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iS, { channel: e }, "pins")),
                    (0, nl.PD)(e.guild_id, "channel_header") &&
                        r.push((0, l.jsx)(iE, { channelId: e.id }, "conversations")),
                    r.push((0, l.jsx)(iv, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && r.push((0, l.jsx)(iP, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                t ||
                    (r.push((0, l.jsx)(iV, { channel: e }, "forum-onboarding")),
                    r.push((0, l.jsx)(iN.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, l.jsx)(iv, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                r.push((0, l.jsx)(iv, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(iv, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(iv, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(iv, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: rZ.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("21315"), t.e("70774")]).then(
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
            className: rZ.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, l.jsxs)(
                            iW.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rZ.DD, a, { [rZ.zh]: e.type === er.rbe.GROUP_DM }),
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
                                              className: rZ.u8,
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
                (0, l.jsx)(lk.A, { channelId: e.id }),
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
                return (0, l.jsx)(r7, { channel: e, popoutType: nn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    r2,
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
                : (0, l.jsx)(is.H, { guildId: n.id, children: (0, l.jsx)(iI, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(rM.A, { guild: n, channelId: e.id });
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
            return (0, l.jsx)(r0, { channel: e, guild: n, sidebarState: t }, e.id);
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
            return (0, l.jsx)(rO, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, l.jsx)(lD, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(rF.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(rF.A, { channel: n }, `channel-members-${n.id}`);
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
        else if (s === er.YvQ.SEARCH) return (0, l.jsx)(r4, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => ii(lE.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("71898"), t.e("10585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, rP.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                case lH.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sg, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case lH.PE.VIEW_THREAD:
                    let t = n?.isForumLikeChannel() ? t8 : sM;
                    e = (0, l.jsx)(t, { channelId: i.channelId });
                    break;
                case lH.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sM, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case lH.PE.VIEW_CHANNEL:
                case lH.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== lH.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: er.da6 },
                    className: rZ.uC,
                    children: (0, l.jsx)(r5, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => lF.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - er.MdR - o;
        return (
            (c += 375),
            (0, l.jsx)(rG.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rG.X.PostSidebar : rG.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(rz, {});
        if (null == e) return (0, l.jsx)(rY.A, { channelId: this.props.channelId });
        let A = a === er.YvQ.SIDEBAR_CHAT,
            g = null != o && !A,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(n_.HI, { location: p, subsection: t ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rZ.TE, { [rZ.js]: A || g, [rZ.jl]: A && h }),
                    children: [
                        x
                            ? (0, l.jsx)(ex.A, {
                                  style: { right: A ? u : void 0 },
                                  className: rZ.x4,
                                  channel: e,
                                  draftType: t4.C.ChannelMessage,
                              })
                            : null,
                        m || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: r()(rZ.Qs, { [rZ.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let r8 = (0, ep.A)(r9),
    r6 = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, m.bG)([ew.A], () => ew.A.getChannelId()),
            c = (0, m.bG)([ew.A], () => ew.A.getVoiceChannelId()),
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
            T = (0, m.bG)([ew.A], () => (N?.channelId ?? ew.A.getVoiceChannelId()) === f?.id),
            _ = (0, m.bG)([ej.Ay], () => (null != f ? ej.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, m.bG)([rU.A], () => rU.A.isConnected()),
            R = (0, eI.A)(S),
            L = S && !1 === R;
        s.useEffect(() => {
            T &&
                L &&
                null != _ &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, e6.Qt)({ applicationId: _.applicationId, instanceId: _.compositeInstanceId }),
                );
        }, [L, f, T, _]);
        let O = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            M = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            P = null != O && !(0, ev.A)(f?.id) && M === eZ.Gd.PANEL,
            D = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: k, isUserInThisVoice: w } = (0, m.cf)([i4.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(i4.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: i4.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !P && v,
            G = f?.isGuildVocal() || U || (k && (w || !D)),
            F = (0, m.bG)([t6.A], () => t6.A.getFrameLayoutMode() === rQ.y.FOCUSED),
            { welcomeModalChannelId: H } = (0, h.zy)(),
            B = (0, m.bG)([tQ.A], () => null != f && tQ.A.isLurking(f.guild_id), [f]),
            V = (0, m.bG)([rD.A], () => rD.A.hasSeen(f?.guild_id, B), [f, B]),
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
                (i = (0, m.bG)([n$.A, lC, J.default, X.Ay], () => {
                    let e = n$.A.getGuild(n);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === lC.hasViewedPrompt(lE.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = J.default.getCurrentUser();
                    if (null == t) return null;
                    let i = X.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || ii(lE.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            Y =
                ((t = E?.id),
                (0, m.bG)([ek.A, n$.A, ew.A], () => {
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
                    return H === ew.A.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rk.ke)(n.type);
                })),
            { section: q, channelSidebarState: K } = (0, m.cf)(
                [ib.Ay],
                () => ({ section: ib.Ay.getSection(o, f?.isDM()), channelSidebarState: ib.Ay.getSidebarState(o) }),
                [o, f],
            ),
            $ = E?.id,
            Z = (0, m.bG)([ib.Ay], () => ib.Ay.getGuildSidebarState($), [$]),
            ee = (0, lv.lI)(),
            en = (0, tc.Ay)(f),
            ei = (0, tc.Ay)(f, !0),
            el = (0, m.bG)([ne.A], () => (null != f ? ne.A.getSelectedParticipant(f.id) : null)),
            es = (0, e8.vL)(f),
            ea = (0, tg.Uf)(f),
            ed = null != f && c === f.id,
            eo = null != f && f.isGuildStageVoice();
        !(function (e) {
            let { onTransition: n } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: t } = e,
                        i = (0, ey.H)(t);
                    if (null == i || !(0, ev.A)(i)) return;
                    ew.A.getVoiceChannelId() !== i && (await (0, e5.A)({ channelId: i }));
                    let l = ek.A.getChannel(i),
                        s = l?.guild_id;
                    setTimeout(() => {
                        (0, e9.A)(s, t), n?.();
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
                if (e?.location?.state?.stageInviteKey === r$.J2) {
                    let { channelId: n } = (0, ly.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []);
        let ec = { channel: f, inCurrentVoiceChannel: ed },
            eu = s.useRef(ec);
        s.useEffect(() => {
            eu.current = ec;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eu.current;
                null != r && null != e && eo && e.id === r && !n && ((0, lB.av)(e), d(null));
            }, [r, eo]);
        let eh = (0, ef.cI)(f),
            em = null != f && f.isPrivate(),
            eA = (0, eI.A)(em),
            eg = (0, eI.A)(f?.id);
        s.useEffect(() => {
            let e = eA && !em,
                n = eA && em && f?.id !== eg;
            (e || n) && (0, td.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: i9.i.AUTO });
        }, [f?.id, eg, em, eA]);
        let ex = (0, g.useHasAnyModalOpen)();
        return (0, l.jsx)(r8, {
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
            hasModalOpen: ex,
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
            isUnavailable: (0, m.bG)([rw.A], () => f?.guild_id != null && rw.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: z,
            showWelcomeModal: !V && Y,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([i4.A], () => ({ hasVideo: null != f && i4.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: el,
            showChannelSummaries: eh,
            showHeaderGuildBreadcrumb: p || ee,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: P,
            embeddedActivity: O,
        });
    });
