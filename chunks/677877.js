t.r(n), t.d(n, { default: () => r2 }), t(321073);
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
    g = t(17928),
    A = t(554146),
    m = t(192308),
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
    S = t(534514),
    R = t(414798),
    O = t(775602),
    L = t(793574),
    M = t(688810),
    D = t(449582),
    P = t(485947),
    k = t(63152),
    w = t(201275),
    G = t(657048),
    U = t(361610),
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
            o = (0, g.bG)([Z.A], () => Z.A.isTyping(n.id, a)),
            c = (0, g.bG)([X.Ay], () => X.Ay.getMember(n.guild_id, a)),
            u = (0, g.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, g.bG)([J.default], () => J.default.getUser(a)),
            A = (0, g.bG)([J.default], () => J.default.getCurrentUser()),
            m = h?.id === A?.id,
            x = (0, g.bG)([Q.A, $.A], () => (m ? $.A.getStatus() : Q.A.getStatus(a, n.guild_id))),
            p = (0, g.bG)([Q.A], () => Q.A.isMobileOnline(a)),
            f = (0, g.yK)([Q.A, $.A], () => (m ? $.A.getActivities() : Q.A.getActivities(a, n.guild_id))),
            j = (0, g.bG)([K.A], () => K.A.getAnyStreamForUser(a)),
            C = (0, b.rm)(a),
            y = (0, g.bG)([V.A], () => V.A.canUserViewChannel(n.id, i, a)),
            v = h?.id != null && h.id === r,
            N = s.useCallback(
                (e) => {
                    null != h &&
                        (0, I.L3)(e, async () => {
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
            S = (0, D.r)({ user: h, guildId: n.guild_id }),
            [O, L] = s.useState(!1);
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
            shouldShow: O,
            onRequestClose: () => L(!1),
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
                    selected: O,
                    applicationStream: j,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: _,
                    itemProps: C,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: v,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? T?.() : L((e) => !e);
                    },
                    onMouseDown: (e) => {
                        O ? e.stopPropagation() : i?.(e);
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
            : (0, l.jsxs)(P.A, {
                  className: eo.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != a ? (0, l.jsx)(G.A, { className: eo.UT, ...a }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    eg = s.memo(function (e) {
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
        { analyticsLocations: m } = (0, M.Ay)(L.A.MEMBER_LIST),
        x = (function (e, n) {
            (0, F.Ay)(() => {
                n?.id != null && (0, U.Ey)(n.id, e, H.LD);
            });
            let t = (0, g.bG)([B.A], () => (null != n ? B.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, g.cf)([V.A], () => ({
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
            ((n = A),
            (t = (0, g.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
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
        return (0, l.jsx)(em, { channel: c });
    let E = u().omit(f.containerProps, ["ref"]),
        y = ei.wT(h);
    return (0, l.jsx)(M.f5, {
        value: m,
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
                                    x[e.section] === p ? (0, l.jsx)(eg, { channel: c }, "footer") : null,
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
function em(e) {
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
    eN = t(990078),
    eT = t(446576),
    e_ = t(817281),
    eS = t(95561),
    eR = t(587837),
    eO = t(982484),
    eL = t(742023),
    eM = t(204651),
    eD = t(383831),
    eP = t(128286),
    ek = t(734057),
    ew = t(309010),
    eG = t(795816),
    eU = t(685399),
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
    e$ = t(11939),
    eZ = t(5867),
    eJ = t(702321);
function e0(e) {
    let { channelId: n, className: t, ...i } = e,
        a = s.useRef(null),
        r = (0, g.bG)([eI.Ay], () => eI.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        d = s.useCallback(() => {
            let e = r ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [r]),
        { unreadCount: o, mentionCount: u } = (function (e) {
            let n = (0, g.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, g.cf)(
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
        m = [A];
    u > 0 && m.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        o > 0 && m.push(z.intl.string(z.t.x5zAGZ));
    let x = (0, g.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
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
                "aria-label": m.join(", "),
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
    e7 = { [eZ.E8.NO_CHAT]: e1.Oo, [eZ.E8.RESIZABLE]: e1.Ig };
function e3(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        a = (0, eH.A)(),
        d = (0, g.yK)([eI.Ay], () => eI.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        o = (0, ey.H)(t),
        c = (0, g.bG)([ek.A], () => ek.A.getChannel(o)),
        u = (0, eU.IQ)(d),
        h = (0, eU.Rz)(u),
        A = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        m = s.useRef(null),
        x = (0, g.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
        p = x !== eZ.E8.NO_CHAT,
        [j, I] = s.useState(eL.Ay.activityPanelHeight ?? n ?? null),
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
        L = (0, g.bG)([ew.A], () => ew.A.getChannelId()),
        M = (0, g.yK)(
            [X.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => X.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        D = s.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [M]),
        P = (function (e, n, t) {
            let i = (0, ej.A)(e),
                l = e !== i,
                [a, r] = s.useState(!1);
            s.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let d = !O.Ay.useReducedMotion && (l || a);
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
    let w = [];
    function G(e) {
        if (null == e || void 0 === e || e === eV.mt) return null;
        let n = D.get(e.id),
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
                    className: r()(e1.iE, e7[x], e),
                    ref: m,
                    style: P,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { applicationId: a.id }),
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
                                null != L
                                    ? (0, l.jsxs)("div", {
                                          className: e1.qr,
                                          children: [
                                              (0, l.jsx)(eV.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
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
                                                              (0, l.jsx)(e0, { channelId: L }),
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
                                                          children: (0, l.jsx)(eD.A, {
                                                              applicationId: a.id,
                                                              location: t,
                                                              centerButton: !0,
                                                              color: "disconnect",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              k
                                                  ? (0, l.jsx)(eP.A, {
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
                                  resizableNode: m,
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
function e9(e) {
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
        : (0, l.jsx)(e3, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e5 = t(90804),
    e4 = t(748975),
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
    ng = t(952270),
    nA = t(835835),
    nm = t(381849),
    nx = t(549973),
    np = t(957565),
    nf = t(935208),
    nj = t(256331),
    nI = t(775632),
    nb = t(958720),
    nC = t(84593);
function nE(e, n) {
    if (e.length !== n.length) return !1;
    for (let t = 0; t < e.length; t++) if (e[t].conversation.id !== n[t].conversation.id) return !1;
    return !0;
}
let ny = ["high", "medium", "low"],
    nv = s.memo(function (e) {
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
                              ny.find((e) => t.includes(e)) ?? null)
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
                                    color: null == n ? "text-muted" : t ? "status-positive" : "status-danger",
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
                                    color: null == n ? "text-muted" : i ? "status-positive" : "status-danger",
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
                                              : "status-danger",
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
    nN = s.memo(function (e) {
        let { conversation: n, color: t, onJump: i } = e,
            s = nf.default.extractTimestamp(n.startMessageId),
            a = nf.default.extractTimestamp(n.endMessageId),
            r = (0, nx.e)({ timestamp: s }),
            d = Math.max(1, Math.round((a - s) / 1e3)),
            o = (0, nm.WR)({ seconds: d, getFormatter: nm.i });
        return (0, l.jsxs)(ns.D, {
            className: nC.Nm,
            style: { backgroundColor: t },
            onClick: () => i(n),
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
                (0, l.jsx)(nv, { moderation: n.moderation ?? null }),
            ],
        });
    });
function nT(e) {
    let { channel: n } = e,
        t = (0, g.bG)([nb.A], () => nb.A.getChannelConversations(n.id) ?? [], [n.id], nE),
        i = (0, g.bG)([nb.A], () => nb.A.isPendingFetch(n.id), [n.id]),
        a = (0, g.bG)([nj.A], () => nj.A.isHighlightingEnabled(), []),
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
            (0, l.jsx)(nA.Y9, {
                icon: nu.o,
                title: "Conversations",
                children: (0, l.jsx)("div", {
                    className: nC.y6,
                    children: (0, l.jsx)(na.K, {
                        icon: a ? nh.b : ng.G,
                        "aria-label": a ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: nI.Eg,
                    }),
                }),
            }),
            (0, l.jsx)("div", {
                className: nC.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => {
                              let { conversation: n, color: t } = e;
                              return (0, l.jsx)(nN, { conversation: n, color: t, onJump: r }, n.id);
                          })
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
var n_ = t(268218),
    nS = t(726249),
    nR = t(228366),
    nO = t(334738),
    nL = t(208882),
    nM = t(938764),
    nD = t(519480),
    nP = t(352123),
    nk = t(328857),
    nw = t(478927);
let nG = function (e) {
    let { guild: n, onAddGuild: i } = e,
        a = s.useCallback(() => {
            (0, m.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("92430"),
                    t.e("80339"),
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
        className: nw.h2,
        children: [
            (0, l.jsx)("img", { className: nw.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(S.D, {
                className: nw._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(y.E, { variant: "text-md/normal", className: nw.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(nk.E, {
                      className: nw.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(nk.E, {
                className: nw.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var nU = t(892547),
    nF = t(689175),
    nH = t(761508),
    nB = t(765671),
    nV = t(22231),
    nW = t(365199),
    nz = t(66834),
    nY = t(573435),
    nq = t(101555),
    nK = t(548118),
    nX = t(714991),
    nQ = t(776231),
    n$ = t(345942),
    nZ = t(71393),
    nJ = t(486020),
    n0 = t(860689),
    n1 = t(682557),
    n2 = t(253607);
let n7 = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(ns.D, {
        onClick: n,
        className: n2.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: n2.Kk,
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
        className: r()(n2.fc, { [n2.QX]: i }),
        children: (0, l.jsxs)(nq.Ay, {
            children: [
                o
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(nq.$n, {
                              onClick: () => {
                                  (0, m.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("66234"), t.e("88869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(nV.R, { size: "xs", color: "currentColor", className: n2.IQ }),
                          }),
                      })
                    : null,
                (0, l.jsx)(n1.A, {
                    targetElementRef: d,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(nq.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nW.j, { size: "md", color: "currentColor", className: n2.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let n9 = s.memo(function (e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        r = null != (0, g.bG)([nZ.A], () => nZ.A.getGuild(n.guildId));
    async function d() {
        a(!0);
        try {
            r ? (0, n$.u)(n.guildId) : await nz.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
        } finally {
            a(!1);
        }
    }
    let o = nJ.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, nQ.mZ)() }),
        c = nJ.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        r && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: n2.Nr,
            onContextMenu: function (e) {
                (0, I.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: n2.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: n2.Yi,
                            children: null != o && (0, l.jsx)("img", { src: o, alt: "", className: n2.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: n2.$f,
                            children: (0, l.jsx)(nY.Ay, {
                                mask: nY.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: n2.SA,
                                    children: (0, l.jsx)(nK.Ay, {
                                        className: n2.rZ,
                                        iconSrc: c,
                                        guild: (0, n0.xi)(n),
                                        size: nK.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: n2.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: n2.DD,
                            children: [
                                (0, l.jsx)(nX.A, { className: n2.n2, guild: n }),
                                (0, l.jsx)(y.E, {
                                    className: n2.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(y.E, {
                            className: n2.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: n2.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: n2.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: n2.JX }),
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
                                        className: n2.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: n2.Li }),
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
                            className: n2.PD,
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
var n5 = t(946116),
    n4 = t(562845),
    n8 = t(519094);
let n6 = (e) => {
        let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
            { ref: a, width: d } = (0, nB.Ay)(),
            o = null != d && d <= 800;
        return (0, l.jsxs)("div", {
            ref: a,
            className: n8.wx,
            children: [
                (0, l.jsx)("img", {
                    alt: "",
                    className: n8.F0,
                    src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
                }),
                (0, l.jsx)("div", {
                    className: n8.AZ,
                    children: (0, l.jsxs)("div", {
                        className: r()(n8.VW, { [n8.eO]: o }),
                        children: [
                            (0, l.jsx)(S.D, {
                                variant: "heading-xl/semibold",
                                className: n8.dc,
                                children: z.intl.string(z.t.IT7qoC),
                            }),
                            (0, l.jsx)(y.E, {
                                variant: "text-md/normal",
                                className: n8.R_,
                                children: z.intl.string(z.t["5PoYts"]),
                            }),
                            (0, l.jsx)(f.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, l.jsx)("div", {
                                        className: r()(n8.MT, e),
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
    te = function (e) {
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
            allEntriesCount: g,
            isLoading: A,
        } = e;
        return (0, l.jsx)("div", {
            className: n4.$$,
            children: (0, l.jsxs)(nF.Gt, {
                className: n4.XG,
                children: [
                    (0, l.jsx)(n6, {
                        searchQuery: a,
                        setSearchQuery: r,
                        handleClearSearch: d,
                        handleSearchKeyPress: o,
                    }),
                    (0, l.jsx)(nF.Ch, {
                        orientation: "horizontal",
                        children: (0, l.jsxs)(nH.V, {
                            className: n8.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: function (e) {
                                u(e);
                            },
                            children: [
                                (0, l.jsx)(
                                    nH.V.Item,
                                    {
                                        className: n8.YU,
                                        id: n5.mU.ALL,
                                        children: `${z.intl.string(z.t.hEAa2a)} (${g})`,
                                    },
                                    n5.mU.ALL,
                                ),
                                (0, n5.g2)(n.id).map((e) => {
                                    let { value: n, label: t } = e;
                                    return (0, l.jsx)(
                                        nH.V.Item,
                                        {
                                            className: n8.YU,
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
                        ? (0, l.jsx)(x.y, { className: n4.u1 })
                        : t?.map((e, n) =>
                              (0, l.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, l.jsx)(y.E, {
                                                    variant: "text-md/semibold",
                                                    className: n8.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: n4.vY,
                                              children: [
                                                  e.entries.map((e) => (0, l.jsx)(n9, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != i ? (0, l.jsx)(n7, { onClick: i }) : null,
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
var tn = t(370876),
    tt = t(349288),
    ti = t(364522),
    tl = t(792831),
    ts = t(916815);
let ta = function (e) {
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
                          return (0, l.jsx)(tt.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: ts.Je,
            children: [
                (0, l.jsx)("img", { className: ts.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, l.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: ts.gR,
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(y.E, { variant: "text-md/normal", color: "text-default", className: ts.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: n4.vY, children: o.map((e) => (0, l.jsx)(n9, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: n4.$$,
        children: (0, l.jsxs)(ti.Ar, {
            className: n4.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: ts.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ts.Dr,
                            children: [
                                (0, l.jsx)(ns.D, {
                                    onClick: a,
                                    className: ts.UE,
                                    children: (0, l.jsx)(tl.A, { direction: tl.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(S.D, {
                                    variant: "heading-xl/semibold",
                                    className: ts.s7,
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
var tr = t(650583);
let td = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, g.cf)([nD.A], () => {
            let e = nD.A.getCurrentCategoryId(n.id),
                t = nD.A.getDirectoryEntries(n.id, e === n5.mU.ALL ? null : e),
                i = nD.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: nD.A.getDirectoryAllEntriesCount(n.id),
                isLoading: nD.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                nR.h.wait(() => {
                    (0, nO.ack)(
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
                          if (n !== n5.mU.ALL) return [{ entries: (0, tn._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tn.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tn.DN)(s)).length > 0 &&
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
        } = (0, g.cf)([nM.A], () => {
            let { mostRecentQuery: e, fetching: t } = nM.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nM.A.getSearchResults(n.id, e) };
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
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("78841"),
                                  t.e("66234"),
                                  t.e("72891"),
                                  t.e("7132"),
                                  t.e("97199"),
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
                                      currentCategoryId: a === n5.mU.ALL ? null : a,
                                  });
                          });
                      }
                    : void 0,
            [E, i.name, i.id, n.id, a],
        );
    function v(e) {
        0 !== f.trim().length &&
            e.key === tr.dh.ENTER &&
            (nL.Se(n.id, f),
            en.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function N() {
        j(""), nL.BA(n.id);
    }
    return I
        ? (0, l.jsx)(ta, {
              searchQuery: f,
              setSearchQuery: j,
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
            ? (0, l.jsx)("div", { className: n4.$$, children: (0, l.jsx)(nG, { guild: i, onAddGuild: y }) })
            : (0, l.jsx)(te, {
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
var to = t(826673),
    tc = t(313281),
    tu = t(47167),
    th = t(928078),
    tg = t(58736),
    tA = t(353428),
    tm = t(976860),
    tx = t(288254),
    tp = t(873614),
    tf = t(111956),
    tj = t.n(tf),
    tI = t(922016),
    tb = t(980707),
    tC = t(477782),
    tE = t(811893),
    ty = t(789645),
    tv = t(163126),
    tN = t(182061),
    tT = t(886393),
    t_ = t(307623),
    tS = t(660273),
    tR = t(707792),
    tO = t(41402),
    tL = t(271456),
    tM = t(200273),
    tD = t(565846),
    tP = t(57907),
    tk = t(375500),
    tw = t(707653),
    tG = t(50268),
    tU = t(584682),
    tF = t(378570),
    tH = t(713608),
    tB = t(473503),
    tV = t(901472),
    tW = t(267102),
    tz = t(474397),
    tY = t(486974),
    tq = t(221314);
function tK(e) {
    let { channel: n } = e,
        t = s.useContext(en.AnalyticsContext),
        i = (0, tW.aL)(),
        a = z.intl.string(tq.default["Beo/7v"]),
        { firstMessage: r } = (0, tB.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, l.jsx)(tg.Ay.Icon, {
              onClick: () => {
                  (0, tF.iN)(n.id),
                      (0, tz.A)(),
                      (0, tV.z)(n.guild_id, o, n.id, {
                          modViewPanel: tY.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(er.jej.POPOUT_CLOSE);
              },
              tooltip: a,
              icon: tH.q,
              "aria-label": a,
          })
        : null;
}
var tX = t(780338),
    tQ = t(782603),
    t$ = t(857071),
    tZ = t(607508),
    tJ = t(914703),
    t0 = t(37411);
function t1(e) {
    let { channel: n } = e,
        t = (0, tZ.X)(n),
        [i, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, g.bG)([t$.A], () => null != n.guild_id && t$.A.isLurking(n.guild_id));
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
            (0, l.jsx)(tJ.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(tg.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: i ? null : o,
                icon: t === t0.CP.NO_MESSAGES ? tX.a : tQ.X,
                "aria-label": o,
                selected: i,
            });
        },
    });
}
var t2 = t(747926);
function t7(e) {
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
            return (0, l.jsx)(tg.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nW.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function t3(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tS.A)(n, "Sidebar Overflow"),
        a = (0, tO.A)(n),
        r = (0, tP.A)(n),
        d = (0, tk.A)(n),
        o = (0, tN.A)(n),
        c = (0, tR.A)(n),
        u = (0, tD.A)(n.id),
        h = (0, tM.A)(n),
        g = (0, t_.A)(n),
        A = (0, tT.A)(n),
        m = (0, tG.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, tw.A)(n),
        p = (0, tL.A)(n),
        f = (0, tv.$)(1e3);
    function j() {
        (0, tF.iN)(n.id);
    }
    function I(e) {
        let t = tj()(() => {
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
    return (0, l.jsxs)(tb.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tC.rX, {
                children: [s, (0, l.jsx)(tC.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: j })],
            }),
            (0, l.jsxs)(tC.rX, { children: [r, d] }),
            (0, l.jsxs)(tC.rX, { children: [h, a, u, p] }),
            (0, l.jsxs)(tC.rX, {
                children: [
                    (0, l.jsx)(tC.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: tE.t,
                        trailingIndicator: { type: "icon", icon: tE.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                j();
                        },
                    }),
                    (0, l.jsx)(tC.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: tE.t,
                        trailingIndicator: { type: "icon", icon: tE.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                j();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(tC.rX, { children: [x, o, c, g] }),
            (0, l.jsxs)(tC.rX, { children: [A, m] }),
        ],
    });
}
function t9(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(tg.Ay.Icon, {
            icon: ty.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, t2.xu)((0, tU.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(t1, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(tK, { channel: n }) : null,
                  (0, l.jsx)(t7, { channel: n }),
                  i,
              ],
          });
}
var t5 = t(31717),
    t4 = t(853742),
    t8 = t(224517);
function t6(e) {
    let { channelId: n } = e,
        i = (0, g.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, g.bG)([ek.A], () => ek.A.getChannel(i?.parent_id)),
        r = (0, g.bG)([nZ.A], () => nZ.A.getGuild(i?.getGuildId())),
        d = (0, tu.Ay)(i),
        o = (0, tx.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, t4.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    if (null != o) return (0, l.jsx)(tp.A, { guild: r, channelId: o });
    let u = (0, l.jsx)(t9, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: t5.C.ChannelMessage }),
            (0, l.jsx)(tg.Ay, {
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
                                t.e("34971"),
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
                className: t8.T,
                children: (0, l.jsx)(th.A, { channel: i, guild: r, chatInputType: nt.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var ie = t(91242),
    it = t(857253),
    ii = t(872363);
let il = function (e, n) {
    nR.h.wait(() => {
        nR.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var is = t(561446),
    ia = t(300233),
    ir = t(499211),
    id = t(468689),
    io = t(529942),
    ic = t(739455),
    iu = t(328312);
function ih(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iu.t7,
        children: (0, l.jsxs)("div", {
            className: iu.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iu.xw,
                    children: [
                        (0, l.jsx)(S.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(y.E, {
                            variant: "text-sm/normal",
                            className: iu.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iu.__invalid_button,
                            children: (0, l.jsx)(p.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    (0, io.rf)(n),
                                        id.A.open(n, er.BEX.ROLE_SUBSCRIPTIONS, void 0, er.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, ic.Fx)(n);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ig = t(599941),
    iA = t(251766),
    im = t(950344),
    ix = t(217530),
    ip = t(162093),
    ij = t(601099);
function iI(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iA.e)({ guildId: n, channelId: t }),
        a = (0, ig.uk)(n),
        r = (0, ig.Tq)(n),
        d = (0, g.bG)([nZ.A], () => nZ.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, g.bG)([ek.A], () => ek.A.getChannel(t)),
        u = (0, tu.Ay)(c),
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
              className: ij.__invalid_spinnerContainer,
              children: (0, l.jsx)(x.y, { className: ij.__invalid_spinner }),
          })
        : (0, l.jsxs)(ti.Ar, {
              className: ij.$$,
              children: [
                  (0, l.jsx)(S.D, {
                      variant: "heading-xl/semibold",
                      className: ij.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: o, channelName: u }),
                  }),
                  (0, l.jsx)(y.E, {
                      className: ij.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, l.jsx)(ix.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  ip.A,
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
var ib = t(41e4),
    iC = t(604681),
    iE = t(761640),
    iy = t(678959);
function iv(e) {
    let { channelId: n } = e,
        t = (0, g.bG)([iE.Ay], () => iE.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        i = (0, g.bG)([nb.A], () => (nb.A.getChannelConversations(n)?.length ?? 0) > 0, [n]);
    return (0, l.jsx)(tg.In, {
        onClick: iC.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nu.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iy.q : void 0,
        selected: t,
        showBadge: i,
    });
}
var iN = t(967198);
function iT(e) {
    let { channelId: n } = e,
        t = (0, g.bG)([iE.Ay], () => iE.Ay.getSection(n)),
        i = (0, g.bG)([iN.A], () => iN.A.getGuildId()),
        s = t === er.YvQ.MEMBERS;
    return (0, l.jsx)(tg.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: _.n,
        onClick: function () {
            eS.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                iC.A.toggleMembersSection();
        },
        selected: s,
    });
}
var i_ = t(187360),
    iS = t(366605),
    iR = t(945830);
let iO = function (e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        [i, a] = s.useState(!1),
        r = (0, g.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(n.id), [n]),
        d = (0, tW.aL)(),
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
                return (0, l.jsx)(iR.A, { ...e, onJump: u, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(tg.In, {
                    ...e,
                    ref: o,
                    onClick: c,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iS.t,
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
    iM = t(863922),
    iD = t(822074),
    iP = t(521732);
function ik(e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        i = (0, g.bG)([iD.A], () => iD.A.shouldShowTopicsBar());
    return (0, l.jsx)(tg.Ay.Icon, {
        icon: iL.K,
        onClick: function () {
            en.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iP.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iM.Oz)();
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var iw = t(885574),
    iG = t(947094),
    iU = t(919577),
    iF = t(207777),
    iH = t(422844),
    iB = t(435470),
    iV = t(892110),
    iW = t(45494);
function iz(e) {
    let { channel: n } = e,
        t = (0, iB.S4)(n),
        i = (0, g.bG)([iG.A], () => iG.A.hasHidden(n.id)),
        s = (0, iV.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, iH.R)(n.id),
        o = (0, g.bG)(
            [iF.A, iW.A],
            () => !!(iF.A.getThreadIds(n.id, a, r, d).length > 0) || !!(iW.A.getThreads(n.id, a, r, d).length > 0),
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
    return (0, l.jsx)(tg.In, {
        tooltip: u,
        icon: iw.m,
        onClick: function () {
            return iU.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var iY = t(742589),
    iq = t(43105),
    iK = t(428689),
    iX = t(978940),
    iQ = t(387755),
    i$ = t(730852),
    iZ = t(641703),
    iJ = t(379848),
    i0 = t(753727),
    i1 = t(222692),
    i2 = t(442353),
    i7 = t(470710),
    i3 = t(186111),
    i9 = t(451409),
    i5 = t(994500),
    i4 = t(977997),
    i8 = t(360469),
    i6 = t(49999),
    le = t(731854);
class ln extends s.PureComponent {
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
                : i9.Ay.supports(le.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U))),
            (0, l.jsx)(tg.Ay.Icon, { icon: iK.n, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(tg.Ay.Icon, {
            ref: this.iconRef,
            icon: iX._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(iJ.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(iq.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: i8.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(i6.i.USER_DISMISS),
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
            return iQ.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, i2.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        i$.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, to.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: i6.i.AUTO }),
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
        (0, i2.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, i1.A)();
    };
}
function lt(e) {
    let { channel: n } = e,
        t = (0, i0.A)(),
        i = (0, g.bG)([ne.A], () => ne.A.getMode(n.id)),
        s = (0, g.bG)([i4.A], () => i4.A.isInChannel(n.id)),
        a = (0, g.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, g.cf)([i7.A], () => ({
            callActive: i7.A.isCallActive(n.id),
            callUnavailable: i7.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, g.cf)([i5.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !i5.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && i5.A.isBlocked(o),
        })),
        h = (0, g.bG)([J.default], () => J.default.getUser(o)),
        m = (0, tW.Us)(),
        x = [],
        p = (0, iZ.A)(n.id),
        f = (0, g.bG)([i3.A], () => i3.A.hasLayers());
    return (p && !f && x.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(ln, {
              channel: n,
              mode: i,
              inCall: s,
              callActive: r,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: d,
              notFriend: c,
              isBlocked: u,
              appContext: m,
              dismissibleContentTypes: x,
              useReducedMotion: a,
          });
}
var li = t(277370),
    ll = t(765178),
    ls = t(231483),
    la = t(544231),
    lr = t(338510),
    ld = t(151119),
    lo = t(278941),
    lc = t(665909),
    lu = t(327337);
let lh = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lr.u)(n.id),
        a = (0, ld.S)(n.id),
        r = (0, lo.e)(n.id),
        d = (0, m.useHasAnyModalOpen)(),
        o = (0, g.bG)([i3.A], () => i3.A.hasLayers()),
        c = s.useCallback(
            () => (a ? z.intl.string(z.t["16QyDv"]) : null != r ? z.intl.string(z.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, A] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != i &&
            (ll.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, la.xi)(n.id, [r.id]);
            }, 5e3),
            (0, lc.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: lc.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (ll.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, la.bg)(n.id);
                }, 5e3));
    }, [n, r, i, a]),
        (0, F.Ay)(() => {
            null != i &&
                (0, lc.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: lc.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, la.xi)(n.id, [r.id]),
            null != i &&
                ((0, m.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("8376"),
                            t.e("97893"),
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
                    { modalKey: lu.V },
                ),
                (0, lc._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lc.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != r,
                }));
    }, [r, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(tg.Ay.Icon, {
                  icon: ls.l,
                  onClick: x,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var lg = t(262763),
    lA = t(406704),
    lm = t(576705);
let lx = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, i0.A)(),
        i = (0, g.bG)([i4.A], () => i4.A.isInChannel(n.id)),
        a = (0, g.bG)([i4.A], () => !u().isEmpty(i4.A.getVoiceStatesForChannel(n.id))),
        r = (0, g.bG)([lm.A], () => lm.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, ir.A)(n.id),
        o = (0, lA.Id)(n),
        { enabled: c } = lA.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lg.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: d, locked: !1 });
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
        ? (0, l.jsx)(tg.Ay.Icon, {
              icon: iX._,
              onClick: h,
              tooltip: a ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lp = t(812991),
    lf = t(47675),
    lj = t(999291);
function lI() {
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
function lb(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, g.bG)([iE.Ay], () => iE.Ay.getSection(n.id, n?.isDM())),
        s = (0, lj.Ay)(n.getRecipientId()),
        a = lI(),
        r = i === er.YvQ.PROFILE && a;
    return (0, l.jsx)(tg.In, {
        disabled: !a || t,
        tooltip: !a || t ? z.intl.string(z.t.YneDgF) : r ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lp.n,
        onClick: function () {
            (0, lf.am)({ displayProfile: s, isProfileOpen: !r }), iC.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let lC = {};
class lE extends g.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lC[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lC[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lC;
    }
}
let ly = new lE(nR.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lC[t];
        return null == i ? ((lC[t] = new Set()), lC[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lC[n.id] && !n.unavailable && (delete lC[n.id], !0);
    },
});
var lv = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lN = t(376943),
    lT = t(394953),
    l_ = t(241541),
    lS = t(709066),
    lR = t(87664),
    lO = t(18707);
t(667532);
var lL = t(403362);
let lM = [],
    lD = es.Ay.getEnableHardwareAcceleration();
function lP(e) {
    let { user: n, channel: i, status: a, activities: r } = e,
        d = (0, g.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        o = (0, g.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, g.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, g.bG)([i5.A], () => i5.A.getNickname(n.id)),
        h = (0, lR.A)(n.id),
        A = s.useRef(null);
    function m(e) {
        (0, I.L3)(e, async () => {
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
    let p = (0, D.r)({ user: n }),
        [f, j] = s.useState(!1);
    return (0, l.jsx)(q.A, {
        targetElementRef: A,
        user: n,
        channelId: i.id,
        position: E.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: x,
        shouldShow: f,
        onRequestClose: () => j(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...g } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: A,
                    user: n,
                    currentUser: o,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: lD,
                    isTyping: d,
                    status: a,
                    activities: r,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: m,
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
                    ...g,
                },
                n.id,
            );
        },
    });
}
function lk(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function lw(e) {
    let { channel: n } = e,
        t = J.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: a } = (0, M.Ay)(L.A.MEMBER_LIST),
        { listItems: r } = (0, g.bG)(
            [i5.A, J.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = J.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(lL.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    i5.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? lM,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: lM });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            lk,
        );
    s.useEffect(() => {
        en.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let d = i && r.every((e) => e.user.isStaff()),
        o = (0, lO.G)("PrivateChannelRecipients"),
        c = (0, m.useHasAnyModalOpen)();
    return (0, l.jsx)(M.f5, {
        value: a,
        children: (0, l.jsx)("div", {
            className: eo.kL,
            children: (0, l.jsx)("aside", {
                className: eo.yg,
                children: (0, l.jsxs)(ti.Ip, {
                    className: eo.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(P.A, {
                            className: eo.lL,
                            children: [
                                `${z.intl.string(z.t["9Oq93m"])}\u{2014}${r.length} `,
                                d && (0, l.jsx)(lS.A, { type: lS.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lP,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        o &&
                            (0, l.jsx)("div", {
                                className: eo.Uf,
                                children: (0, l.jsx)(li.NE, {
                                    channel: n,
                                    text: z.intl.string(z.t.NB5DFD),
                                    icon: l_.D,
                                    variant: "secondary",
                                    fullWidth: !0,
                                    allowFrictionlessGDMUpsell: !c,
                                    entryPointType: li.YW.MEMBER_LIST,
                                }),
                            }),
                    ],
                }),
            }),
        }),
    });
}
var lG = t(527549),
    lU = t(853279),
    lF = t(85942);
function lH() {
    return (0, l.jsx)("div", {
        className: lF.zt,
        children: (0, l.jsx)("header", {
            className: lU.wL,
            children: (0, l.jsxs)("div", {
                className: lU.TN,
                role: "status",
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: lU.zp,
                        children: (0, l.jsx)(x.y, {
                            type: x.y.Type.SPINNING_CIRCLE,
                            className: lU.u1,
                            itemClassName: lU.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var lB = t(138298),
    lV = t(940382),
    lW = t(790535),
    lz = t(163328),
    lY = t(425557),
    lq = t(270003),
    lK = t(150934),
    lX = t(452027),
    lQ = t(292666),
    l$ = t(511274),
    lZ = t(465532),
    lJ = t(579872),
    l0 = t(119031),
    l1 = t(408018),
    l2 = t(138617),
    l7 = t(822610),
    l3 = t(915089),
    l9 = t(314307),
    l5 = t(636922),
    l4 = t(931664),
    l8 = t(631576),
    l6 = t(885386),
    se = t(232835),
    sn = t(522602),
    st = t(806150),
    si = t(518960),
    sl = t(753738);
function ss(e, n) {
    return { type: e, message: n ?? null };
}
function sa(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sr = t(659617),
    sd = t(474078),
    so = t(636537),
    sc = t(152367),
    su = t(147087);
async function sh(e) {
    try {
        let n = await so.Bo.post({
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
var sg = t(55294),
    sA = t(790158),
    sm = t(415296);
let sx = nt.oU.THREAD_CREATION;
function sp(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, g.bG)([ek.A], () => ek.A.getChannel(n)),
        { analyticsLocations: a } = (0, M.Ay)(L.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(M.f5, {
              value: a,
              children: (0, l.jsx)(e$.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: sA.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: t5.C.FirstThreadMessage }),
                          (0, l.jsx)(sf, { parentChannelId: n }),
                          (0, l.jsx)(sj, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function sf(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = t5.A.getThreadSettings(n),
                t = t5.A.getDraft(n, t5.C.FirstThreadMessage).trim(),
                i = sn.A.getUploads(n, t5.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? lJ.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, t2.bA)(n);
                      },
                  })
                : (0, t2.bA)(n);
        }, [n]);
    return (0, l.jsxs)(tg.Ay, {
        toolbar: (0, l.jsx)(tg.Ay.Icon, { icon: ty.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(tg.Ay.Icon, { icon: lz.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(tg.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sj(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: a } = e,
        d = (0, g.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
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
            let t = (0, g.bG)([t5.A], () => t5.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        l((e) => ({ ...e, ...t })), lZ.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(t, i),
        { textAreaState: A, setTextAreaState: m } = (function (e, n) {
            let [t, i] = s.useState((0, l1.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = t5.A.getDraft(e.id, t5.C.FirstThreadMessage);
                        (0 === l.length || !0 === t) && i((0, l1.ur)(l)), n(t5.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        t(!0),
                        t5.A.addChangeListener(t),
                        () => {
                            t5.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        x = (0, sr.EN)(t),
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
                h = (0, su.b)(),
                g = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = se.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await sh(e);
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
                    (null != a.name && "" !== a.name.trim()) || c || (h && null != t && (u(!0), g()));
                }, [n.id, t, i, a.name, c, h, g]);
            let A = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: sc.D,
                                onClick: g,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: d,
                            };
                    },
                    [h, g, d, t, r.textValue],
                ),
                m = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(na.K, {
                                      icon: sc.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: g,
                                      disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                      loading: d,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, d, t, r.textValue, g],
                );
            return {
                isGeneratingAI: d,
                generateAIName: g,
                enableAIFeatures: h,
                renderAiGenerateButton: m,
                getThreadNameInputAccessory: A,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: A }),
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
                [g, A] = s.useState(!1),
                m = (0, sg.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: r,
                    onThreadCreated: t2.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: o,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (g) return { shouldClear: !1, shouldRefocus: !1 };
                        A(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = l4.A.getStickerPreview(n.id, sx.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sn.A.getUploads(n.id, t5.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(o ? ss(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? ss(0, z.intl.string(z.t.kesTVT)) : null),
                            o || u)
                        )
                            return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, st.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sx,
                            channel: null == t ? n : null,
                        });
                        if (!x) return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await m(e, l, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), ss(1, (0, sl.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(ss(2, z.intl.string(z.t.uXA573)));
                            return A(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, l8.x5)(n.id, sx.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [m, a.textValue, i.name, t, n, g, d],
                ),
                submitting: g,
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
        y = (0, sr.Iy)(c, x) ? lY.t : lz.y;
    return (0, l.jsx)("div", {
        className: sA.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, l.jsx)("div", {
            className: r()(sA.Og, `group-spacing-${d}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: sA.Zd,
                children: [
                    (0, l.jsx)(ti.Ip, {
                        className: sA.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sA.bv,
                            children: [
                                (0, l.jsxs)(l9.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(sm.P0, sA.P0),
                                            children: (0, l.jsx)(y, { className: sm.Kk }),
                                        }),
                                        (0, l.jsxs)(lq.n, {
                                            children: [
                                                (0, l.jsx)(sb, {
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
                                                    ? (0, l.jsx)(sI, {
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
                                (0, l.jsx)(sE, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sA.Eh,
                        children: [
                            (0, l.jsx)(sC, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: m,
                                submit: C,
                                error: b,
                            }),
                            (0, l.jsx)(l0.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sA.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sI(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        a = (0, sr.Iy)(t, s),
        r = (0, l.jsx)(lK.S, {
            disabled: s === sr.jk.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === sr.jk.Disabled
        ? null
        : (0, l.jsx)(lX.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: a ? z.intl.string(z.t.EWXycz) : void 0,
              children: r,
          });
}
function sb(e) {
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
        h = sa(a, { content: u }),
        g = (0, sr.l1)(n, t),
        A = null != t && !o,
        m = (0, l3.GV)(),
        x = o ? z.intl.string(z.t["Nb2/RE"]) : "" !== g ? g : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(lQ.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: m,
        placeholder: x,
        maxLength: er.Ign,
        onChange: function (e) {
            s({ name: (0, sd.A)(e, !1) }), "" !== e ? R.A.startTyping(n.id) : R.A.stopTyping(n.id);
        },
        onBlur: function () {
            let e = (0, sd.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || d,
    });
}
function sC(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: a, error: d } = e,
        [o, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        A = s.useCallback(() => c(!1), []),
        m = s.useCallback(
            (e, t, l) => {
                lZ.A.saveDraft(n.id, t, t5.C.FirstThreadMessage),
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
    let p = (0, g.bG)([lm.A], () => lm.A.can(er.xBc.ATTACH_FILES, n)),
        f = sa(d, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l7.A, { channelId: n.id, type: sx, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sA.xN, children: (0, l.jsx)(l$.U, { error: f }) }),
            (0, l.jsx)(l2.Ay, {
                type: sx,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sA.gM, sA.Yy),
                innerClassName: r()(sA.SL, { [sA.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: m,
                onSubmit: x,
                promptToUpload: si.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sE(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, g.bG)([se.A], () => (null == t ? null : se.A.getMessage(n.id, t))),
        s = l6.hH.useSetting();
    return null != i
        ? (0, l.jsx)(l5.A, {
              className: sA.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sy = t(305866),
    sv = t(707539),
    sN = t(702513),
    sT = t(614879);
function s_(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e8.ni)(n),
        d = s.useCallback(() => {
            i(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, sv.D3)("Popout"), i(!t);
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
            return (0, l.jsx)(sy.l, {
                children: (0, l.jsx)(sN.A, { className: sT.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(tg.In, {
                ...e,
                ref: a,
                className: sT.Kk,
                onClick: o,
                icon: lz.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: t ? null : z.intl.string(z.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sS = t(40389);
function sR(e) {
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
            return (0, l.jsx)(sO, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(tg.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nW.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function sO(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tN.A)(n),
        a = (0, tR.A)(n),
        r = (0, tD.A)(n.id),
        d = (0, tM.A)(n),
        o = (0, tG.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, tT.A)(n),
        h = (0, t_.A)(n),
        A = (0, tS.A)(n, "Toolbar Overflow"),
        m = (0, tO.A)(n),
        x = (0, sS.A)(n),
        p = (0, tw.A)(n),
        f = (0, tL.A)(n),
        j = l6.SY.useSetting(),
        I = (0, g.bG)([i4.A], () => !u().isEmpty(i4.A.getVoiceStatesForChannel(n.id)));
    return (0, l.jsxs)(tb.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tC.rX, { children: [A, x] }),
            (0, l.jsxs)(tC.rX, {
                children: [
                    d,
                    m,
                    r,
                    j && !I
                        ? (0, l.jsx)(tC.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, t2.JA)(n);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, l.jsxs)(tC.rX, { children: [p, s, a, h] }),
            (0, l.jsxs)(tC.rX, { children: [c, o] }),
        ],
    });
}
var sL = t(332456),
    sM = t(973854),
    sD = t(248537);
function sP(e) {
    var n;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, g.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, g.bG)([nZ.A], () => nZ.A.getGuild(o?.getGuildId())),
        h = (0, tu.Ay)(o),
        A = (0, tx.Uf)(o);
    (n = o),
        (i = (0, g.bG)([i4.A], () => null != n && !u().isEmpty(i4.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nR.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tF.N9)(n, { source: t0.H9.VOICE_AUTO_OPEN }));
        }, [i, n]);
    let m = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || m.current) return;
            m.current = !0;
            let e = (0, sL.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, sM.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(tp.A, { guild: c, channelId: A });
    let x = (0, l.jsx)(t9, { channel: o, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: o, draftType: t5.C.ChannelMessage }),
            (0, l.jsx)(tg.Ay, {
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
                                t.e("34971"),
                                t.e("84615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: o });
                        });
                    },
                    handleClick: function () {
                        null != o && (0, tF.iN)(o.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: sD.T,
                children: (0, l.jsx)(th.A, { channel: o, guild: c, chatInputType: nt.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sk = t(210714),
    sw = t(975732),
    sG = t(707554),
    sU = t(140735),
    sF = t(590180),
    sH = t(32206),
    sB = t(474257),
    sV = t(562153),
    sW = t(945810);
let sz = (0, sW.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function sY(e) {
    return sz.useConfig({ location: e }).enabled;
}
var sq = t(215530),
    sK = t(148411),
    sX = t(736653),
    sQ = t(311016),
    s$ = t(480335),
    sZ = t(713517),
    sJ = t(183555),
    s0 = t(718019),
    s1 = t(413492),
    s2 = t(915614),
    s7 = t(308244),
    s3 = t(743987),
    s9 = t(900179),
    s5 = t(946356),
    s4 = t(878555),
    s8 = t(35241),
    s6 = t(587168),
    ae = t(442228),
    an = t(744808);
let at = (0, sW.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var ai = t(416497);
function al(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function as(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: a } = e,
        { showButton: r } = at.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !r) return null;
    function d() {
        a(), (0, lf.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
    }
    if (s)
        return (0, l.jsx)("div", {
            className: ai.lS,
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
              className: ai.qr,
              children: (0, l.jsx)(ns.D, {
                  onClick: d,
                  className: ai.wC,
                  children: (0, l.jsx)(y.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: ai.xQ, children: [(0, l.jsx)(an.A, { frame: i, filterLayer: al }), o] })
        : o;
}
var aa = t(996988),
    ar = t(556818),
    ad = t(523802);
function ao(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        a = __OVERLAY__ || !(0, sQ.A)(n.id),
        d = (0, lj.Ay)(n.id),
        o = (0, sX.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, M.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, sJ.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        g = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: m } = (0, sZ.A)(g);
    function x() {
        (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(M.f5, {
        value: u,
        children: (0, l.jsx)(sJ.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsxs)(s5.A, {
                ref: g,
                user: n,
                displayProfile: d,
                themeType: aa.d.SIDEBAR,
                themeOverride: o,
                className: i ? r()(ar.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(ti.d_, {
                        className: i ? ar.BE : void 0,
                        children: [
                            (0, l.jsx)(s6.A, { children: (0, l.jsx)(s8.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: ar.wx,
                                children: [
                                    (0, l.jsx)(s2.A, {
                                        user: n,
                                        displayProfile: d,
                                        themeType: aa.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(s0.A, {
                                        user: n,
                                        displayProfile: d,
                                        channelId: t.id,
                                        themeType: aa.d.SIDEBAR,
                                        onOpenProfile: a ? void 0 : x,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ad.rf,
                                children: [
                                    (0, l.jsx)(s4.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sV.Ay.getName(null, t.id, n),
                                        onClickName: a ? void 0 : x,
                                        pronouns: d?.pronouns,
                                        trailing: (0, l.jsx)(s1.A, {
                                            displayProfile: d,
                                            themeType: aa.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(ae.A, {
                                                      userId: n.id,
                                                      userBio: d?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(s9.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s3.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(s5.A.Overlay, {
                                              className: ad.Lw,
                                              children: [
                                                  d?.bio != null &&
                                                      "" !== d.bio &&
                                                      (0, l.jsx)(s9.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(s7.A, {
                                                              userBio: d?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(s9.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(s3.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !a &&
                        (0, l.jsx)(as, {
                            handleOpenProfile: x,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    d?.profileEffect != null && (0, l.jsx)(s$.A, { skuId: d?.profileEffect?.skuId, isHovering: m }),
                ],
            }),
        }),
    });
}
var ac = t(331322),
    au = t(249790),
    ah = t(254828),
    ag = t(783123),
    aA = t(735103);
function am(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: a } = e,
        r = (0, lj.Ay)(n.id),
        d = (0, sX.Ay)(),
        o = (0, g.bG)([i5.A], () => i5.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, M.Ay)(o ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, sJ.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        h = s.useRef(null);
    return (0, l.jsx)(M.f5, {
        value: c,
        children: (0, l.jsx)(sJ.of, {
            value: u,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(s5.A, {
                ref: h,
                user: n,
                displayProfile: r,
                themeType: aa.d.SIDEBAR,
                themeOverride: d,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(ti.d_, {
                    children: (0, l.jsxs)("div", {
                        className: aA.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: aA.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: aA.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: aA.N1,
                                        children: [
                                            (0, l.jsx)(au.A, { user: n }),
                                            (0, l.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(o ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: sV.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ac.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(ag.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    a(),
                                                        (0, lf.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        });
                                                },
                                            }),
                                            (0, l.jsx)(ah.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    a(),
                                                        (0, lf.Wn)({
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
var ax = t(580929),
    ap = t(717421),
    af = t(31956),
    aj = t(673843),
    aI = t(561794),
    ab = t(321191),
    aC = t(679492),
    aE = t(439053),
    ay = t(312381),
    av = t(349419),
    aN = t(984545),
    aT = t(193738),
    a_ = t(700174),
    aS = t(983495),
    aR = t(695366),
    aO = t(661531),
    aL = t(922590),
    aM = t(821269),
    aD = t(93246),
    aP = t(351906),
    ak = t(383199),
    aw = t(559506),
    aG = t(361311),
    aU = t(931481),
    aF = t(501193),
    aH = t(383448),
    aB = t(646986),
    aV = t(243166),
    aW = t(360563),
    az = t(123292),
    aY = t(575593),
    aq = t(587895),
    aK = t(44120),
    aX = t(532794),
    aQ = t(31969),
    a$ = t(317560),
    aZ = t(533406),
    aJ = t(661492);
let a0 = (0, sW.mj)({
    name: "2026-06-remove-wishlist-dm-sidebar-side-copy",
    kind: "user",
    defaultConfig: { shouldHideSideText: !1 },
    variations: { 0: { shouldHideSideText: !1 }, 1: { shouldHideSideText: !0 } },
});
var a1 = t(212387),
    a2 = t(74135),
    a7 = t(662349),
    a3 = t(369005);
function a9(e) {
    let { title: n, description: t, onClick: i } = e;
    return (0, l.jsxs)("div", {
        className: a3.S,
        children: [
            (0, l.jsx)(ns.D, {
                onClick: i,
                className: a3.H,
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
var a5 = t(479026),
    a4 = t(699976),
    a8 = t(202541),
    a6 = t(518477),
    re = t(80223),
    rn = t(997990);
function rt(e) {
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
            onPurchaseClick: g,
            singleCardInfo: A,
            promotion: m,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, sJ.NJ)(),
        p = sY("DMSidePanelWishlistItemCard") ? a4.y.SIZE_78 : a4.y.SIZE_90,
        f = a4.Z[p],
        j = s.useCallback(() => {
            x({
                action: a6.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [n, i, h, x]),
        I = s.useCallback(() => {
            x({
                action: a6.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                g();
        }, [g, n.id, i, n.productLine, x]),
        { label: b, icon: C, isPromptingPurchase: E } = (0, a7.h)({ wishlistOwner: t, isOwned: !1, shortText: !0 }),
        [y, v] = s.useState(!1),
        N = a0.useConfig({ location: "dm_side_panel_wishlist_item_card" }).shouldHideSideText;
    return (0, l.jsxs)(ac.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", {
                className: re.kL,
                children: (0, l.jsxs)(a1.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: n,
                    user: t,
                    spec: f,
                    cardStyle: r()(re.Nr, d),
                    skuPreviewStyle: r()(re.ho, o),
                    skuAssetClassName: y ? c : void 0,
                    onClick: j,
                    "aria-label": z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, aJ.TC)(n) }),
                    onHoverOrFocusChange: v,
                    children: [
                        (0, l.jsx)(a7.A, { spec: f, onClick: E ? I : j, isHoveringOrFocusing: y, label: b, icon: C }),
                        !y && m,
                    ],
                }),
            }),
            a && !N && (0, l.jsx)(a9, { title: A.title, description: A.description, onClick: j }),
        ],
    });
}
function ri(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        r = (0, eb.bG)([aq.A], () => aq.A.getApplication(n.applicationId)),
        { analyticsLocations: d } = (0, M.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = sY("DMSidePanelWishlistItemCard") ? a4.y.SIZE_78 : a4.y.SIZE_90,
        c = a4.Z[o],
        u = (0, aQ.F)("sku_gift_badge", { applicationId: n.applicationId, skuId: n.id }),
        h = s.useCallback(() => {
            (0, aZ.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: a8.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: d },
            );
        }, [n, t, d]),
        g = s.useCallback(() => {
            (0, a$.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: a8.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: d,
            });
        }, [n.id, n.applicationId, t, d]),
        A = s.useMemo(
            () => ({ title: n.name, description: z.intl.format(z.t["CqpEC+"], { applicationName: r?.name }) }),
            [n.name, r?.name],
        );
    return (0, l.jsx)(rt, {
        sku: n,
        analyticsLocations: d,
        wishlistOwner: t,
        onDetailsClick: g,
        onPurchaseClick: h,
        singleCardInfo: A,
        promotion: null != u ? (0, l.jsx)(a2.s, { spec: c, icon: u.Icon, tooltipText: u.tooltip }) : null,
        ...a,
    });
}
function rl(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        d = s.useCallback(() => {
            (0, aK.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: a8.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        o = (0, a5.e)({ sku: n, giftRecipient: t, giftingOrigin: a8.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                r()(re.ML, {
                    [re.M]: n?.tenantMetadata?.collectibles?.type === aY.R.AVATAR_DECORATION,
                    [re.Hm]: n?.tenantMetadata?.collectibles?.type === aY.R.PROFILE_EFFECT,
                    [re.hH]: n?.tenantMetadata?.collectibles?.type === aY.R.PROFILE_FRAME,
                    [re.qF]: n?.tenantMetadata?.collectibles?.type === aY.R.NAMEPLATE,
                    [re.l2]: n?.tenantMetadata?.collectibles?.type === aY.R.BUNDLE,
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
                        case aY.R.AVATAR_DECORATION:
                            return z.intl.string(z.t["7v0T9P"]);
                        case aY.R.PROFILE_EFFECT:
                            return z.intl.string(z.t.wR5wOo);
                        case aY.R.NAMEPLATE:
                            return z.intl.string(z.t.x5CoXR);
                        default:
                            return "";
                    }
                })(n),
            }),
            [n],
        );
    return (0, l.jsx)(rt, {
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
function rs(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        r = s.useCallback(() => {
            (0, aX.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: a8.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        d = s.useMemo(() => ({ title: n.name, description: z.intl.string(z.t.Ipxkog) }), [n.name]);
    return (0, l.jsx)(rt, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: rn.MO,
        disableRiveHover: !0,
        singleCardInfo: d,
        ...a,
    });
}
function ra(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(ri, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(rl, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(rs, { sku: n, ...t });
        default:
            return null;
    }
}
var rr = t(535089),
    rd = t(617348);
function ro(e) {
    let { unownedWishlistItems: n = [], profileOwner: t, onClick: i, wishlistId: a, title: r } = e,
        { analyticsLocations: d } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: o } = (0, sJ.NJ)(),
        c = (0, s.useId)(),
        u = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && o({ wishlistId: n, action: t, productLines: i });
            },
            [o],
        ),
        h = (0, s.useMemo)(() => {
            let e = [];
            for (let t = 0; t < n.length && e.length < 3; t++) {
                let i = n[t];
                e.push(i);
            }
            return e;
        }, [n]),
        g = (0, s.useMemo)(() => new Set(h.map((e) => e.skuProductLine)), [h]),
        A = (0, rr.A)({ wishlistId: a ?? null, onAction: u, productLines: g }),
        m = (0, s.useMemo)(
            () =>
                h
                    .map((e, s) =>
                        null == e.sku
                            ? null
                            : (0, l.jsx)(
                                  ra,
                                  {
                                      sku: e.sku,
                                      index: s,
                                      wishlistOwner: t,
                                      wishlistId: a,
                                      analyticsLocations: d,
                                      onViewWishlist: i,
                                      isSingleCard: 1 === n.length,
                                  },
                                  e.skuId,
                              ),
                    )
                    .filter(lL.Vq),
            [d, i, t, n.length, h, a],
        );
    return 0 === m.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": c,
              children: (0, l.jsxs)(s5.A.Overlay, {
                  ref: A,
                  className: rd.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: rd.wx,
                          children: [
                              (0, l.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: r ?? z.intl.string(z.t["7lZ31J"]),
                              }),
                              n.length > 3 &&
                                  (0, l.jsx)(az.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(sG.F, { children: (0, l.jsx)("div", { className: rd.vY, children: m }) }),
                  ],
              }),
          });
}
function rc(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: a,
            isHoveringOrFocusing: r,
            isRedesignEnabled: d,
            onOpenProfile: o,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, g.cf)([i5.A], () => ({
            relationshipType: i5.A.getRelationshipType(n.id),
            originApplicationId: i5.A.getOriginApplicationId(n.id),
        })),
        h = (0, aL.fi)(n.id),
        A = (0, aM.q)({ userId: n.id }),
        m = (0, g.bG)([aP.A], () => aP.A.hidePersonalInformation),
        x = (0, g.bG)([ab.A], () => ab.A.getUserProfile(n.id)?.application),
        p = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, g.cf)([ab.A], () => ({ defaultWishlistId: ab.A.getFirstWishlistId(n.id) })),
        { wishlist: j } = (0, aI.fw)({ wishlistId: d ? f : void 0, userId: n.id });
    (0, aj.A)(j);
    let I = s.useMemo(() => j?.items.filter((e) => !e.isOwned) ?? null, [j]);
    return (0, l.jsxs)("div", {
        className: ad.rf,
        children: [
            (0, l.jsx)(aw.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: ad.pq,
                children: [
                    (0, l.jsx)(s4.Ay, {
                        user: n,
                        guildId: a.guild_id,
                        displayName: sV.Ay.getName(null, a.id, n),
                        onClickName: o,
                        displayNameTrailing: m
                            ? null
                            : (0, l.jsx)(aV.A, { userId: n.id, isVisible: r, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(s1.A, {
                            displayProfile: i,
                            themeType: aa.d.SIDEBAR,
                            isRedesignEnabled: d,
                        }),
                    }),
                    d && (0, l.jsx)(aW.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            c === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(s5.A.Overlay, {
                    children: (0, l.jsx)(aU.A, { user: n, channelId: a.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    s5.A.Overlay,
                    {
                        children: (0, l.jsx)(aU.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aH.A, { user: n }),
            i?.private &&
                (0, l.jsx)(s5.A.Overlay, { children: (0, l.jsx)(aF.A, { username: sV.Ay.getName(null, a.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(s5.A.Overlay, {
                    className: ad.Lw,
                    children: (0, l.jsx)(s9.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: (0, l.jsx)(aR.E, { size: "xxs", color: aO.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aD.T, { userId: n.id }),
                    }),
                }),
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ae.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: m,
                            isHoveringOrFocusing: r,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(s9.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(s3.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: ad.kR,
                children: [
                    d && p && (0, l.jsx)(av.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: o }),
                    (0, l.jsx)(aB.A, { user: n, currentUser: t, onOpenUserProfileModal: o }),
                    d
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  x?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(ak.A, {
                                          applicationId: x.id,
                                          commandIds: x.popularApplicationCommandIds,
                                          channel: a,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(s9.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aG.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(s5.A.Overlay, {
                              className: ad.Lw,
                              children: [
                                  !m &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(s9.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(s7.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: r,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          x?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(ak.A, {
                                                  applicationId: x.id,
                                                  commandIds: x.popularApplicationCommandIds,
                                                  channel: a,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(s9.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aG.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(s9.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(s3.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    d &&
                        null != I &&
                        I.length > 0 &&
                        (0, l.jsx)(ro, {
                            profileOwner: n,
                            unownedWishlistItems: I,
                            wishlistId: f,
                            title: z.intl.string(z.t["7lZ31J"]),
                            onClick: () => {
                                o?.({ tabSection: a6.RP.WISHLIST });
                            },
                        }),
                ],
            }),
        ],
    });
}
var ru = t(114212),
    rh = t(913453),
    rg = t(229187),
    rA = t(21241),
    rm = t(201934),
    rx = t(51943),
    rp = t(847374),
    rf = t(320448),
    rj = t(680391);
function rI(e) {
    let { section: n, header: t, items: i, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, sJ.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        g = u ? rp.a : rf._;
    return (0, l.jsxs)("section", {
        className: rj.uW,
        children: [
            (0, l.jsxs)(ns.D, {
                className: r()(rj.wx, rj.vk),
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
                    (0, l.jsx)(g, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(rj.p_, a), children: i }),
        ],
    });
}
var rb = t(54557);
function rC(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, M.Ay)(),
        { context: s } = (0, sJ.NJ)(),
        a = (0, tv.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, rh.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, l.jsxs)(s5.A.Overlay, {
              className: rb.Lw,
              children: [
                  u &&
                      (0, l.jsx)(rI, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: rb.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  rx.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, n$.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(rA.A, { className: rb.yF }),
                  c &&
                      (0, l.jsx)(rI, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: rb.p_,
                          onExpand: () => (0, rg.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: rb.nC,
                                                children: [
                                                    (0, l.jsx)(ru.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(ru.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            rm.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, sw.openUserProfileModal)({
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
function rE(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: a } = e,
        d = __OVERLAY__,
        o = (0, lj.Ay)(n.id),
        c = (0, sX.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, M.Ay)(L.A.USER_PROFILE_SIDEBAR),
        m = (0, sJ.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id }),
        x = s.useRef(null),
        { isHoveringOrFocusing: p, isHovering: f } = (0, sZ.A)(x),
        j = (0, aC.fC)(),
        I = (0, sB.A)(o?.profileFrame?.skuId, "UserProfileSidebar");
    (0, af.A)({ skuId: o?.profileFrame?.skuId, openedAt: u.current, context: m, analyticsLocations: A });
    let b = (0, ap.z)({ opacity: +(null != j.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...m, ...e });
    }
    let E = o?.widgets != null && o.widgets.length > 0,
        { defaultWishlistId: y } = (0, g.cf)([ab.A], () => ({ defaultWishlistId: ab.A.getFirstWishlistId(n.id) })),
        { wishlist: v } = (0, aI.fw)({ wishlistId: a ? void 0 : y, userId: n.id });
    (0, aj.A)(v);
    let N = s.useMemo(() => (null == v ? null : v.items.filter((e) => !e.isOwned)), [v]);
    return (0, l.jsx)(M.f5, {
        value: A,
        children: (0, l.jsx)(sJ.of, {
            value: m,
            openedAt: u.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(aC.Hl, {
                value: j,
                children: (0, l.jsxs)(s5.A, {
                    ref: x,
                    user: n,
                    displayProfile: o,
                    themeType: aa.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: a ? o?.profileFrame?.skuId : null,
                    className: a ? r()(ar.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: o?.private === !0,
                    children: [
                        o?.private === !0 && (0, l.jsx)(ay.A, {}),
                        null != j.interactionType && (0, l.jsx)(ax.animated.div, { style: b, className: ar.tB }),
                        (0, l.jsxs)(ti.d_, {
                            className: r()(a && ar.BE, !a && null != I && ar.It),
                            children: [
                                (0, l.jsxs)(s6.A, {
                                    children: [
                                        (0, l.jsx)(aT.A, { user: n, themeType: aa.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aN.A, { user: n }) : (0, l.jsx)(a_.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ar.wx,
                                    children: [
                                        (0, l.jsx)(s2.A, {
                                            user: n,
                                            displayProfile: o,
                                            themeType: aa.d.SIDEBAR,
                                            specOverrides: a
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !p,
                                            className: ar.vK,
                                        }),
                                        (0, l.jsx)(aE.A, { userId: n.id, className: ar.oR }),
                                        (0, l.jsx)(s0.A, {
                                            user: n,
                                            displayProfile: o,
                                            channelId: i.id,
                                            themeType: aa.d.SIDEBAR,
                                            onOpenProfile: d ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aS.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: aa.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rc, {
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
                                        className: ar.sJ,
                                        children: (0, l.jsx)(av.A, {
                                            user: n,
                                            widgets: o.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !a &&
                                    null != N &&
                                    N.length > 0 &&
                                    (0, l.jsx)("div", {
                                        className: ar.vS,
                                        children: (0, l.jsx)(ro, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: y,
                                            title: z.intl.string(z.t["7lZ31J"]),
                                            onClick: () => {
                                                C?.({ tabSection: a6.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                !a && (0, l.jsx)(rC, { user: n, channelId: i.id }),
                            ],
                        }),
                        !d &&
                            (0, l.jsx)(as, {
                                context: m,
                                analyticsLocations: A,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: a,
                            }),
                        o?.profileEffect != null && (0, l.jsx)(s$.A, { skuId: o?.profileEffect?.skuId, isHovering: f }),
                        a && null != I && (0, l.jsx)(an.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var ry = t(748597);
function rv(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, g.bG)([J.default], () => J.default.getUser(t)),
        a = (0, g.bG)([J.default], () => J.default.getCurrentUser()),
        r = lI(),
        [d, o] = (0, sq.A)(t),
        [c, u] = s.useState(!1),
        h = sY("UserProfileSidebarRenderer"),
        A = (0, lj.Ay)(t),
        m = (0, sH.c)("UserProfileSidebarRenderer") ? A?.profileFrame?.skuId : void 0,
        x = (0, sB.A)(m, "UserProfileSidebarRenderer"),
        p = (0, g.bG)([sF.A], () => sF.A.getProductFetch(m));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, sK.A)(i, e) : (0, sK.A)(t, void 0, e);
        }, [i, t, n.id, h]),
        null == i ||
            null == a ||
            !r ||
            (h && !c && A?.isLoaded !== !0) ||
            (h && !c && null != m && m !== x?.skuId && p?.state !== "success" && p?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        j = sV.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? ry.H : void 0,
        children: (0, l.jsx)(sG.F, {
            component: (0, l.jsx)(sU.A, {
                children: (0, l.jsx)(sG.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: j }) }),
            }),
            children: d
                ? (0, l.jsx)(am, { user: i, currentUser: a, onHide: o, isRedesignEnabled: h, ...e })
                : i.isNonUserBot()
                  ? (0, l.jsx)(ao, { user: i, currentUser: a, isRedesignEnabled: h, ...e })
                  : (0, l.jsx)(rE, { user: i, currentUser: a, isRedesignEnabled: h, ...e }),
        }),
    });
}
var rN = t(522556),
    rT = t(225315),
    r_ = t(684407),
    rS = t(95701),
    rR = t(919638),
    rO = t(763827),
    rL = t(812771),
    rM = t(946228),
    rD = t(462887),
    rP = t(276293),
    rk = t(96361),
    rw = t(745652);
let rG = () => {
    let e = (0, sX.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, rD.M)(e) ? rw : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: rk.kL,
        children: [
            (0, l.jsxs)(iY.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(iY.A.Icon, { icon: rP.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iY.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: rk.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: rk.j0, src: n }),
                    (0, l.jsx)(S.D, {
                        className: rk.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(y.E, {
                        className: rk.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rU = t(943712),
    rF = t(402216),
    rH = t(746080),
    rB = t(806931),
    rV = t(165610),
    rW = t(516607),
    rz = t(964623);
function rY() {
    return (0, l.jsx)("div", { className: rz.wG, children: (0, l.jsx)(x.y, {}) });
}
let rq = (0, n_.Fe)({
    createPromise: () =>
        Promise.all([
            t.e("83314"),
            t.e("64801"),
            t.e("91062"),
            t.e("39328"),
            t.e("41847"),
            t.e("57234"),
            t.e("31557"),
            t.e("95816"),
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
    renderLoader: rY,
    name: "ForumChannel",
});
function rK() {
    return Promise.all([
        t.e("74791"),
        t.e("71453"),
        t.e("52264"),
        t.e("44400"),
        t.e("70676"),
        t.e("50814"),
        t.e("98444"),
        t.e("81725"),
        t.e("98902"),
        t.e("27655"),
        t.e("88875"),
        t.e("38450"),
        t.e("77219"),
        t.e("23481"),
        t.e("812"),
        t.e("51506"),
        t.e("91064"),
        t.e("7777"),
        t.e("45171"),
        t.e("39528"),
        t.e("4589"),
        t.e("50960"),
        t.e("77824"),
        t.e("93315"),
        t.e("8813"),
        t.e("11491"),
        t.e("62867"),
        t.e("18885"),
        t.e("68201"),
        t.e("85755"),
        t.e("792"),
        t.e("92822"),
        t.e("9291"),
        t.e("29260"),
        t.e("39103"),
        t.e("4098"),
        t.e("755"),
        t.e("49013"),
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
        t.e("99128"),
        t.e("14842"),
    ]).then(t.bind(t, 540462));
}
let rX = (0, n_.Fe)({ createPromise: rK, webpackId: 540462, name: "ChannelCall", renderLoader: rY });
function rQ() {
    return Promise.all([
        t.e("45171"),
        t.e("89881"),
        t.e("74791"),
        t.e("71453"),
        t.e("52264"),
        t.e("44400"),
        t.e("70676"),
        t.e("50814"),
        t.e("98444"),
        t.e("81725"),
        t.e("98902"),
        t.e("27655"),
        t.e("51506"),
        t.e("50960"),
        t.e("85222"),
        t.e("88875"),
        t.e("38450"),
        t.e("77219"),
        t.e("23481"),
        t.e("2146"),
        t.e("68201"),
        t.e("792"),
        t.e("92822"),
        t.e("9291"),
        t.e("29260"),
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
let r$ = (0, n_.Fe)({ createPromise: rQ, webpackId: 67319, name: "StageChannelCall", renderLoader: rY }),
    rZ = (0, n_.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("18078"),
                t.e("57234"),
                t.e("11394"),
                t.e("37082"),
                t.e("46757"),
                t.e("78381"),
                t.e("76831"),
                t.e("8177"),
                t.e("63982"),
                t.e("49681"),
                t.e("38939"),
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
            return (0, l.jsx)(lH, {});
        },
    }),
    rJ = (0, n_.Fe)({
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
class r0 extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sk.d)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? rK() : e === er.rbe.GUILD_STAGE_VOICE && rQ();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, tF.iN)(e.id);
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
            (0, sw.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [L.A.CHANNEL_HEADER],
            });
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, I.L3)(e, async () => {
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
            (0, I.L3)(e, async () => {
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
            (0, I.L3)(e, async () => {
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
        return e?.hasFlag(rH.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(is.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(ni.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== rB.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ii.A,
                  { size: rF.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
            addToDMTitleUpdate: r,
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
                    d.push((0, l.jsx)(lt, { channel: e }, "calls")),
                    d.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    d.push(
                        (0, l.jsx)(
                            li.Ay,
                            { channel: e, tooltip: r ? z.intl.string(z.t.IIOxgV) : z.intl.string(z.t["PWkO7+"]) },
                            "invite",
                        ),
                    ),
                    d.push((0, l.jsx)(lb, { channel: e, showCallOrActivityPanel: i || s || a }, "profile")),
                    d.push((0, l.jsx)(lh, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                d.push(this.renderJoinRequestInterviewButtons()),
                    d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, l.jsx)(lt, { channel: e }, "calls")),
                    d.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    e.isManaged() ||
                        d.push((0, l.jsx)(li.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    d.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && d.push((0, l.jsx)(tK, { channel: e })),
                    null == n || n.isForumLikeChannel() || d.push((0, l.jsx)(s_, { channel: n }, "browser")),
                    e.isVocalThread() && d.push((0, l.jsx)(lx, { channel: e }, "thread-call")),
                    d.push((0, l.jsx)(t1, { channel: e }, "notifications")),
                    d.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    e.isArchivedThread() || d.push((0, l.jsx)(iT, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && d.push((0, l.jsx)(ik, { channel: e }, "summaries")),
                    d.push((0, l.jsx)(sR, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                d.push((0, l.jsx)(s_, { channel: e }, "browser")),
                    t || d.push((0, l.jsx)(i_.A, { channel: e }, "notifications")),
                    d.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    (0, nl.PD)(e.guild_id, "channel_header") &&
                        d.push((0, l.jsx)(iv, { channelId: e.id }, "conversations")),
                    d.push((0, l.jsx)(iT, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && d.push((0, l.jsx)(ik, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                t ||
                    (d.push((0, l.jsx)(iz, { channel: e }, "forum-onboarding")),
                    d.push((0, l.jsx)(i_.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || d.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                d.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: rz.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, m.openModalLazy)(async () => {
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
        let g = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tF.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            m = d || c,
            x = a || m;
        return (0, l.jsxs)("div", {
            className: rz.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, l.jsxs)(
                            iY.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rz.DD, a, { [rz.zh]: e.type === er.rbe.GROUP_DM }),
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
                                        handleClick: g,
                                        handleParentClick: A,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: rz.u8,
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
                (0, l.jsx)(lG.A, { channelId: e.id }),
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
                return (0, l.jsx)(r$, { channel: e, popoutType: nn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    rX,
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
                ? (0, l.jsx)(ih, { guildId: n.id })
                : (0, l.jsx)(ia.H, { guildId: n.id, children: (0, l.jsx)(iI, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(rN.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tp.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && a)) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(td, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(rq, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (0, l.jsx)(th.A, { channel: e, guild: n, chatInputType: nt.oU.NORMAL }, null != n ? n.id : "home");
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
            return (0, l.jsx)(rv, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, l.jsx)(lw, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(rM.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(rM.A, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, l.jsx)(nT, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, l.jsx)(rZ, { guildId: t?.id, channelId: e.id });
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
                    (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await t.e("38763").then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => il(lv.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("71898"), t.e("10585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, rT.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                case lV.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sp, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case lV.PE.VIEW_THREAD:
                    let t = n?.isForumLikeChannel() ? t6 : sP;
                    e = (0, l.jsx)(t, { channelId: i.channelId });
                    break;
                case lV.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sP, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case lV.PE.VIEW_CHANNEL:
                case lV.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== lV.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: er.da6 },
                    className: rz.uC,
                    children: (0, l.jsx)(rJ, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => lB.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - er.MdR - o;
        return (
            (c += 375),
            (0, l.jsx)(rL.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rL.X.PostSidebar : rL.X.ThreadSidebar,
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
            g = this.shouldRenderCall();
        if (i) return (0, l.jsx)(rG, {});
        if (null == e) return (0, l.jsx)(rU.A, { channelId: this.props.channelId });
        let A = a === er.YvQ.SIDEBAR_CHAT,
            m = null != o && !A,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nS.HI, { location: p, subsection: t ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rz.TE, { [rz.js]: A || m, [rz.jl]: A && h }),
                    children: [
                        x
                            ? (0, l.jsx)(ex.A, {
                                  style: { right: A ? u : void 0 },
                                  className: rz.x4,
                                  channel: e,
                                  draftType: t5.C.ChannelMessage,
                              })
                            : null,
                        g || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: r()(rz.Qs, { [rz.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let r1 = (0, ep.A)(r0),
    r2 = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, g.bG)([ew.A], () => ew.A.getChannelId()),
            c = (0, g.bG)([ew.A], () => ew.A.getVoiceChannelId()),
            x = (0, g.bG)([ek.A], () => a ?? ek.A.getChannel(o), [o, a]),
            p = (0, tc.DZ)(),
            f = (0, tc.e4)(x, "ConnectedChannel"),
            I = (0, g.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            b = f?.parent_id,
            C = (0, g.bG)([ek.A], () => ek.A.getChannel(b), [b]),
            E = (0, g.bG)([nZ.A], () => nZ.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, ir.A)(f?.id ?? void 0),
            v = (0, g.bG)([ne.A], () => {
                let e = null != o ? ne.A.getParticipants(o) : [],
                    n = null != o ? ne.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, it.A)(),
            T = (0, g.bG)([ew.A], () => (N?.channelId ?? ew.A.getVoiceChannelId()) === f?.id),
            _ = (0, g.bG)([eI.Ay], () => (null != f ? eI.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, g.bG)([rO.A], () => rO.A.isConnected()),
            R = (0, ej.A)(S),
            O = S && !1 === R;
        s.useEffect(() => {
            T &&
                O &&
                null != _ &&
                null != f &&
                j.A.selectParticipant(
                    f.id,
                    (0, e6.Qt)({ applicationId: _.applicationId, instanceId: _.compositeInstanceId }),
                );
        }, [O, f, T, _]);
        let L = (0, g.bG)([eI.Ay], () => eI.Ay.getCurrentEmbeddedActivity()),
            M = (0, g.bG)([eI.Ay], () => eI.Ay.getActivityPanelMode()),
            D = null != L && !(0, ev.A)(f?.id) && M === eZ.Gd.PANEL,
            P = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: k, isUserInThisVoice: w } = (0, g.cf)([i4.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(i4.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: i4.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            G = null != f && f.isPrivate() && !D && v,
            U = f?.isGuildVocal() || G || (k && (w || !P)),
            F = (0, g.bG)([ie.A], () => ie.A.getFrameLayoutMode() === rV.y.FOCUSED),
            { welcomeModalChannelId: H } = (0, h.zy)(),
            B = (0, g.bG)([t$.A], () => null != f && t$.A.isLurking(f.guild_id), [f]),
            V = (0, g.bG)([r_.A], () => r_.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, g.bG)(
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
                (i = (0, g.bG)([nZ.A, ly, J.default, X.Ay], () => {
                    let e = nZ.A.getGuild(n);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === ly.hasViewedPrompt(lv.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = J.default.getCurrentUser();
                    if (null == t) return null;
                    let i = X.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || il(lv.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            Y =
                ((t = E?.id),
                (0, g.bG)([ek.A, nZ.A, ew.A], () => {
                    let e = nZ.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ek.A.getChannel(H);
                    return H === ew.A.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rS.ke)(n.type);
                })),
            { section: q, channelSidebarState: K } = (0, g.cf)(
                [iE.Ay],
                () => ({ section: iE.Ay.getSection(o, f?.isDM()), channelSidebarState: iE.Ay.getSidebarState(o) }),
                [o, f],
            ),
            $ = E?.id,
            Z = (0, g.bG)([iE.Ay], () => iE.Ay.getGuildSidebarState($), [$]),
            ee = (0, lT.lI)(),
            en = (0, tu.Ay)(f),
            ei = (0, tu.Ay)(f, !0),
            el = (0, g.bG)([ne.A], () => (null != f ? ne.A.getSelectedParticipant(f.id) : null)),
            es = (0, e8.vL)(f),
            ea = (0, tx.Uf)(f),
            ed = null != f && c === f.id,
            eo = null != f && f.isGuildStageVoice(),
            { enabled: ec } = ib.n.useConfig({
                location: f?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
            });
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
                        (0, e4.A)(s, t), n?.();
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
                if (e?.location?.state?.stageInviteKey === rW.J2) {
                    let { channelId: n } = (0, lN.vu)(e?.location?.pathname) ?? {};
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
                null != r && null != e && eo && e.id === r && !n && ((0, lW.av)(e), d(null));
            }, [r, eo]);
        let eg = (0, ef.cI)(f),
            eA = null != f && f.isPrivate(),
            em = (0, ej.A)(eA),
            ex = (0, ej.A)(f?.id);
        s.useEffect(() => {
            let e = em && !eA,
                n = em && eA && f?.id !== ex;
            (e || n) && (0, to.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: i6.i.AUTO });
        }, [f?.id, ex, eA, em]);
        let ep = (0, m.useHasAnyModalOpen)();
        return (0, l.jsx)(r1, {
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
            section: q,
            channelSidebarState: K,
            guildSidebarState: Z,
            guild: E,
            showCall: !y && U,
            showActivityPanel: D,
            showFramePanel: F,
            channelIsContentGated: es,
            spoilerGatingChannelId: ea,
            isMobile: (0, g.bG)([Q.A], () => f?.type === er.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: (0, g.bG)([rR.A], () => f?.guild_id != null && rR.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: z,
            showWelcomeModal: !V && Y,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, g.cf)([i4.A], () => ({ hasVideo: null != f && i4.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: el,
            showChannelSummaries: eg,
            showHeaderGuildBreadcrumb: p || ee,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: L,
            addToDMTitleUpdate: ec,
        });
    });
