t.r(n), t.d(n, { default: () => rZ }), t(321073);
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
    A = t(17928),
    g = t(554146),
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
    _ = t(475825),
    T = t(177953),
    S = t(534514),
    R = t(414798),
    L = t(775602),
    O = t(793574),
    M = t(688810),
    D = t(449582),
    P = t(485947),
    k = t(509536),
    G = t(201275),
    w = t(657048),
    U = t(361610),
    F = t(964486),
    H = t(36124),
    B = t(317525),
    V = t(219065),
    W = t(818348),
    Y = t(375708);
let z = [];
var K = t(342296),
    q = t(616356),
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
            o = (0, A.bG)([Z.A], () => Z.A.isTyping(n.id, a)),
            c = (0, A.bG)([X.Ay], () => X.Ay.getMember(n.guild_id, a)),
            u = (0, A.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, A.bG)([J.default], () => J.default.getUser(a)),
            g = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
            m = h?.id === g?.id,
            x = (0, A.bG)([Q.A, $.A], () => (m ? $.A.getStatus() : Q.A.getStatus(a, n.guild_id))),
            p = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(a)),
            f = (0, A.yK)([Q.A, $.A], () => (m ? $.A.getActivities() : Q.A.getActivities(a, n.guild_id))),
            j = (0, A.bG)([q.A], () => q.A.getAnyStreamForUser(a)),
            C = (0, b.rm)(a),
            y = (0, A.bG)([V.A], () => V.A.canUserViewChannel(n.id, i, a)),
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
            S = (0, D.r)({ user: h, guildId: n.guild_id }),
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
                    currentUser: g,
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
                    onClickPremiumGuildIcon: T,
                    itemProps: C,
                    lostPermissionTooltipText: y ? void 0 : Y.intl.string(Y.t["/QcoTz"]),
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
            a = (0, G.$7)({ roleId: n, guildId: s, size: 16 });
        return n === er.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: eo.lL, children: (0, l.jsx)("div", { className: eo.k1 }) })
            : (0, l.jsxs)(P.A, {
                  className: eo.lL,
                  "aria-label": Y.intl.formatToPlainString(Y.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != a ? (0, l.jsx)(w.A, { className: eo.UT, ...a }) : null,
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
                              Y.intl.string(Y.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: ed.GA,
                          children: Y.intl.string(Y.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function eg(e) {
    var n;
    let t,
        i,
        a,
        d,
        o,
        { channel: c, guild: h } = e,
        g = `members-${c.id}`,
        { analyticsLocations: m } = (0, M.Ay)(O.A.MEMBER_LIST),
        x = (function (e, n) {
            (0, F.Ay)(() => {
                n?.id != null && (0, U.Ey)(n.id, e, H.LD);
            });
            let t = (0, A.bG)([B.A], () => (null != n ? B.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, A.cf)([V.A], () => ({
                    version: V.A.getMemberListVersion(e),
                    members: V.A.getMemberListSections(e),
                })),
                a = null == n,
                r = s.useMemo(() => {
                    if (a) return z;
                    let e = t.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: Y.intl.string(Y.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: Y.intl.string(Y.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: n, label: t } = e;
                            return { label: t, userIds: l?.[n]?.userIds ?? [], id: n, roleId: n };
                        })
                    );
                }, [t, l, i, a]);
            return null != l ? r : z;
        })(c.id, h),
        p = x.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: j } =
            ((n = g),
            (t = (0, A.bG)([L.A], () => L.A.keyboardModeEnabled)),
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
                            _.OZ,
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
                                innerAriaLabel: Y.intl.string(Y.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: x.map((e) => e.userIds.length),
                                fade: !0,
                                ...E,
                                ...e,
                            },
                            g,
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
                children: Y.intl.string(Y.t["9Oq93m"]),
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
                children: n.isForumPost() ? Y.intl.string(Y.t.p0UgNQ) : Y.intl.string(Y.t["9/n5vz"]),
            }),
            (0, l.jsx)(y.E, {
                className: ed.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: Y.intl.string(Y.t.emw8UP),
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
    e_ = t(446576),
    eT = t(817281),
    eS = t(95561),
    eR = t(587837),
    eL = t(982484),
    eO = t(742023),
    eM = t(204651),
    eD = t(383831),
    eP = t(128286),
    ek = t(734057),
    eG = t(309010),
    ew = t(795816),
    eU = t(685399),
    eF = t(216418),
    eH = t(620148),
    eB = t(732637),
    eV = t(104171),
    eW = t(47294),
    eY = t(594007),
    ez = t(16961),
    eK = t(138017),
    eq = t(715482),
    eX = t(315502),
    eQ = t(222823),
    e$ = t(234320),
    eZ = t(5867),
    eJ = t(702321);
function e0(e) {
    let { channelId: n, className: t, ...i } = e,
        a = s.useRef(null),
        r = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        d = s.useCallback(() => {
            let e = r ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, ew.i5)(e);
        }, [r]),
        { unreadCount: o, mentionCount: u } = (function (e) {
            let n = (0, A.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, A.cf)(
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
    let g = r ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
        m = [g];
    u > 0 && m.push(Y.intl.formatToPlainString(Y.t["3l1GOx"], { mentionCount: u })),
        o > 0 && m.push(Y.intl.string(Y.t.x5zAGZ));
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
                label: g,
                "aria-label": m.join(", "),
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
var e1 = t(141160);
let e2 = eV.DN.SIZE_32,
    e3 = { [eZ.E8.NO_CHAT]: e1.Oo, [eZ.E8.RESIZABLE]: e1.Ig };
function e7(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        a = (0, eH.A)(),
        d = (0, A.yK)([eI.Ay], () => eI.Ay.getEmbeddedActivitiesForLocation(t), [t]),
        o = (0, ey.H)(t),
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(o)),
        u = (0, eU.IQ)(d),
        h = (0, eU.Rz)(u),
        g = s.useCallback(() => {
            (0, ew.gk)(eZ.Gd.PIP);
        }, []),
        m = s.useRef(null),
        x = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
        p = x !== eZ.E8.NO_CHAT,
        [j, I] = s.useState(eO.Ay.activityPanelHeight ?? n ?? null),
        b = s.useCallback((e) => {
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
        O = (0, A.bG)([eG.A], () => eG.A.getChannelId()),
        M = (0, A.yK)(
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
            let d = !L.A.useReducedMotion && (l || a);
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
        k = (0, ez.G)();
    if (null == a) return null;
    let G = [];
    null != R &&
        (G = Array.from(R.embeddedActivity.userIds)
            .map((e) => J.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let w = (e) => {
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
    };
    return (0, l.jsx)(f.N, {
        theme: er.NJ8.DARK,
        children: (e) =>
            (0, l.jsxs)("div", {
                className: r()(e1.iE, e3[x], e),
                ref: m,
                style: P,
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
                                style: { paddingLeft: _, paddingRight: _, paddingTop: T, paddingBottom: T },
                                ref: C,
                                children: (0, l.jsx)(eB.A, { className: e1.pU, embedId: (0, eY.A)(t.id, a.id) }),
                            }),
                            null != O
                                ? (0, l.jsxs)("div", {
                                      className: e1.qr,
                                      children: [
                                          (0, l.jsx)(eV.Ay, {
                                              renderIcon: !1,
                                              users: G,
                                              size: e2,
                                              max: 6,
                                              renderUser: w,
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
                                                              label: Y.intl.string(Y.t.brPQ5U),
                                                              onClick: g,
                                                              iconComponent: e_.g,
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
                                                                        (await (0, ew.od)(a.id, o)),
                                                                        (0, ew.jp)();
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
    });
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
        : (0, l.jsx)(e7, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
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
    nA = t(952270),
    ng = t(835835),
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
function n_(e) {
    let { channel: n } = e,
        t = (0, A.bG)([nb.A], () => nb.A.getChannelConversations(n.id) ?? [], [n.id], nE),
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
            (0, l.jsx)(ng.Y9, {
                icon: nu.o,
                title: "Conversations",
                children: (0, l.jsx)("div", {
                    className: nC.y6,
                    children: (0, l.jsx)(na.K, {
                        icon: a ? nh.b : nA.G,
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
var nT = t(268218),
    nS = t(726249),
    nR = t(228366),
    nL = t(334738),
    nO = t(208882),
    nM = t(938764),
    nD = t(519480),
    nP = t(352123),
    nk = t(222983),
    nG = t(478927);
let nw = (e) => {
    let { guild: n, onAddGuild: i } = e,
        a = s.useCallback(() => {
            (0, m.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("71632"),
                    t.e("70573"),
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
        className: nG.h2,
        children: [
            (0, l.jsx)("img", { className: nG.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(S.D, {
                className: nG._U,
                variant: "heading-xl/semibold",
                children: Y.intl.format(Y.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(y.E, { variant: "text-md/normal", className: nG.YI, children: Y.intl.string(Y.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(nk.E, {
                      className: nG.c5,
                      iconUrl: t(928202),
                      header: Y.intl.string(Y.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(nk.E, {
                className: nG.c5,
                iconUrl: t(799258),
                header: Y.intl.string(Y.t.L4bwJ9),
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
    nY = t(66834),
    nz = t(573435),
    nK = t(101555),
    nq = t(548118),
    nX = t(714991),
    nQ = t(776231),
    n$ = t(345942),
    nZ = t(71393),
    nJ = t(486020),
    n0 = t(860689),
    n1 = t(682557),
    n2 = t(253607);
let n3 = s.memo(function (e) {
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
                children: Y.intl.string(Y.t.H9jxS1),
            }),
        ],
    });
});
function n7(e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: o } = (0, nP.A)(n);
    return (0, l.jsx)("div", {
        className: r()(n2.fc, { [n2.QX]: i }),
        children: (0, l.jsxs)(nK.Ay, {
            children: [
                o
                    ? (0, l.jsx)(eN.m, {
                          text: Y.intl.string(Y.t.XnuOvN),
                          children: (0, l.jsx)(nK.$n, {
                              onClick: () => {
                                  (0, m.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("80774"), t.e("88869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": Y.intl.string(Y.t.XnuOvN),
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
                            text: Y.intl.string(Y.t["UKOtz+"]),
                            children: (0, l.jsx)(nK.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
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
        r = null != (0, A.bG)([nZ.A], () => nZ.A.getGuild(n.guildId)),
        d = async () => {
            a(!0);
            try {
                r ? (0, n$.u)(n.guildId) : await nY.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        o = nJ.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, nQ.mZ)() }),
        c = nJ.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = Y.intl.string(Y.t.VJlc0S);
    return (
        r && (u = Y.intl.string(Y.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: n2.Nr,
            onContextMenu: (e) => {
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
                            children: (0, l.jsx)(nz.Ay, {
                                mask: nz.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: n2.SA,
                                    children: (0, l.jsx)(nq.Ay, {
                                        className: n2.rZ,
                                        iconSrc: c,
                                        guild: (0, n0.xi)(n),
                                        size: nq.Ay.Sizes.MEDIUM,
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
                                                children: Y.intl.format(Y.t["LC+S+m"], {
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
                                                children: Y.intl.format(Y.t.zRl6XR, {
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
                (0, l.jsx)(n7, { entry: n }),
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
                                children: Y.intl.string(Y.t.IT7qoC),
                            }),
                            (0, l.jsx)(y.E, {
                                variant: "text-md/normal",
                                className: n8.R_,
                                children: Y.intl.string(Y.t["5PoYts"]),
                            }),
                            (0, l.jsx)(f.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, l.jsx)("div", {
                                        className: r()(n8.MT, e),
                                        children: (0, l.jsx)(nU.I, {
                                            query: n,
                                            "aria-label": Y.intl.string(Y.t.nL2wKD),
                                            placeholder: Y.intl.string(Y.t.nL2wKD),
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
    te = (e) => {
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
            isLoading: g,
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
                            onItemSelect: (e) => {
                                u(e);
                            },
                            children: [
                                (0, l.jsx)(
                                    nH.V.Item,
                                    {
                                        className: n8.YU,
                                        id: n5.mU.ALL,
                                        children: `${Y.intl.string(Y.t.hEAa2a)} (${A})`,
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
                    g && null == t
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
                                                  e.appendEndCard && null != i ? (0, l.jsx)(n3, { onClick: i }) : null,
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
let ta = (e) => {
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
                ? Y.intl.format(Y.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tt.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : Y.intl.string(Y.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: ts.Je,
            children: [
                (0, l.jsx)("img", { className: ts.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, l.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: ts.gR,
                    children: Y.intl.string(Y.t["6HXiuE"]),
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
                                    children: Y.intl.format(Y.t.UkOHRd, { numResults: o.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(nU.I, {
                            query: t,
                            "aria-label": Y.intl.string(Y.t.nL2wKD),
                            placeholder: Y.intl.string(Y.t.nL2wKD),
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
let td = (e) => {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, A.cf)([nD.A], () => {
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
                    (0, nL.ack)(
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
                          i.length > 0 && t.push({ header: Y.intl.string(Y.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tn.DN)(s)).length > 0 &&
                                  t.push({ header: Y.intl.string(Y.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(r), a)
                    : null,
            [r, a],
        ),
        {
            mostRecentQuery: h,
            searchFetching: g,
            searchResults: p,
        } = (0, A.cf)([nM.A], () => {
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
            nO.Yc(n.id), nO.YS(n.id), j(e);
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
                                  t.e("76568"),
                                  t.e("80774"),
                                  t.e("72891"),
                                  t.e("54046"),
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
        ),
        v = (e) => {
            0 !== f.trim().length &&
                e.key === tr.dh.ENTER &&
                (nO.Se(n.id, f),
                en.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: n.id,
                    directory_guild_id: i.id,
                }));
        },
        N = () => {
            j(""), nO.BA(n.id);
        };
    return I
        ? (0, l.jsx)(ta, {
              searchQuery: f,
              setSearchQuery: j,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: N,
              handleCreateOrAddGuild: y,
              searchResults: p,
              searchFetching: g,
          })
        : null == u && null == a
          ? (0, l.jsx)("div", { className: n4.$$, children: (0, l.jsx)(x.y, { className: n4.u1 }) })
          : u?.length === 0 && null == a
            ? (0, l.jsx)("div", { className: n4.$$, children: (0, l.jsx)(nw, { guild: i, onAddGuild: y }) })
            : (0, l.jsx)(te, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: j,
                  handleSearchKeyPress: v,
                  handleClearSearch: N,
                  handleCreateOrAddGuild: y,
                  currentCategoryId: a,
                  handleSelectCategory: (e) => {
                      nO.uU(n.id, e);
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
    th = t(806202),
    tA = t(58736),
    tg = t(353428),
    tm = t(976860),
    tx = t(111956),
    tp = t.n(tx),
    tf = t(922016),
    tj = t(980707),
    tI = t(477782),
    tb = t(811893),
    tC = t(789645),
    tE = t(163126),
    ty = t(182061),
    tv = t(886393),
    tN = t(307623),
    t_ = t(660273),
    tT = t(707792),
    tS = t(41402),
    tR = t(271456),
    tL = t(200273),
    tO = t(565846),
    tM = t(57907),
    tD = t(375500),
    tP = t(707653),
    tk = t(50268),
    tG = t(584682),
    tw = t(977997);
let tU = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, A.bG)([tw.A], () => !u().isEmpty(tw.A.getVoiceStatesForChannel(n.id)), [n.id]),
        i = (0, A.bG)([ne.A], () => ne.A.getForceTextView(n.id), [n.id]),
        a = s.useCallback(() => {
            j.A.updateForceTextView(n.id, !i);
        }, [n.id, i]);
    return t && n.isVocalThread()
        ? (0, l.jsx)(tA.Ay.Icon, {
              icon: nu.o,
              onClick: a,
              selected: i,
              tooltip: i ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
              role: "switch",
              "aria-checked": i,
          })
        : null;
});
var tF = t(378570),
    tH = t(713608),
    tB = t(473503),
    tV = t(901472),
    tW = t(267102),
    tY = t(474397),
    tz = t(486974),
    tK = t(221314);
function tq(e) {
    let { channel: n } = e,
        t = s.useContext(en.AnalyticsContext),
        i = (0, tW.aL)(),
        a = Y.intl.string(tK.default["Beo/7v"]),
        { firstMessage: r } = (0, tB.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, l.jsx)(tA.Ay.Icon, {
              onClick: () => {
                  (0, tF.iN)(n.id),
                      (0, tY.A)(),
                      (0, tV.z)(n.guild_id, o, n.id, {
                          modViewPanel: tz.g.INFO,
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
        d = (0, A.bG)([t$.A], () => null != n.guild_id && t$.A.isLurking(n.guild_id));
    if (
        (s.useEffect(() => {
            let e = () => a(!0);
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
    let o = Y.intl.string(Y.t.h850Ss);
    return (0, l.jsx)(tf.Y, {
        targetElementRef: r,
        shouldShow: i,
        animation: tf.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, l.jsx)(tJ.A, { ...e, channel: n, navId: "thread-context", label: Y.intl.string(Y.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(tA.Ay.Icon, {
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
function t3(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, l.jsx)(tf.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tf.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(t7, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(tA.Ay.Icon, {
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
function t7(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t_.A)(n, "Sidebar Overflow"),
        a = (0, tS.A)(n),
        r = (0, tM.A)(n),
        d = (0, tD.A)(n),
        o = (0, ty.A)(n),
        c = (0, tT.A)(n),
        u = (0, tO.A)(n.id),
        h = (0, tL.A)(n),
        A = (0, tN.A)(n),
        g = (0, tv.A)(n),
        m = (0, tk.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        x = (0, tP.A)(n),
        p = (0, tR.A)(n),
        f = (0, tE.$)(1e3);
    function j() {
        (0, tF.iN)(n.id);
    }
    function I(e) {
        let t = tp()(() => {
                et._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e();
            }, 250),
            i = (e) => {
                e.channelId === n.id && t();
            };
        et._.subscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                et._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            });
    }
    return (0, l.jsxs)(tj.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tI.rX, {
                children: [s, (0, l.jsx)(tI.Dr, { id: "open", label: Y.intl.string(Y.t.IxVmZi), action: j })],
            }),
            (0, l.jsxs)(tI.rX, { children: [r, d] }),
            (0, l.jsxs)(tI.rX, { children: [h, a, u, p] }),
            (0, l.jsxs)(tI.rX, {
                children: [
                    (0, l.jsx)(tI.Dr, {
                        id: "search",
                        label: Y.intl.string(Y.t["5h0QOP"]),
                        icon: tb.t,
                        trailingIndicator: { type: "icon", icon: tb.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                j();
                        },
                    }),
                    (0, l.jsx)(tI.Dr, {
                        id: "pins",
                        label: Y.intl.string(Y.t["2BSH7n"]),
                        icon: tb.t,
                        trailingIndicator: { type: "icon", icon: tb.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                j();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(tI.rX, { children: [x, o, c, A] }),
            (0, l.jsxs)(tI.rX, { children: [g, m] }),
        ],
    });
}
function t9(e) {
    let { channel: n, baseChannelId: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n.isForumPost() ? null : (0, l.jsx)(t1, { channel: n }),
            n.isModeratorReportChannel() ? (0, l.jsx)(tq, { channel: n }) : null,
            (0, l.jsx)(tU, { channel: n }),
            (0, l.jsx)(t3, { channel: n }),
            (0, l.jsx)(tA.Ay.Icon, {
                icon: tC.P,
                tooltip: Y.intl.string(Y.t.cpT0Cq),
                onClick: () => (0, t2.xu)((0, tG.j)(n), t ?? n.parent_id),
            }),
        ],
    });
}
var t5 = t(31717),
    t4 = t(853742),
    t8 = t(224517);
function t6(e) {
    let { channelId: n } = e,
        i = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, A.bG)([ek.A], () => ek.A.getChannel(i?.parent_id)),
        r = (0, A.bG)([nZ.A], () => nZ.A.getGuild(i?.getGuildId())),
        d = (0, tu.Ay)(i),
        o = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || o.current || ((o.current = !0), (0, t4.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    let c = (0, l.jsx)(t9, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: t5.C.ChannelMessage }),
            (0, l.jsx)(tA.Ay, {
                toolbar: c,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tg.zF)({
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
                        (0, l.jsx)(S.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["8gJGPs"]) }),
                        (0, l.jsx)(y.E, {
                            variant: "text-sm/normal",
                            className: iu.G3,
                            children: Y.intl.string(Y.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iu.__invalid_button,
                            children: (0, l.jsx)(p.$, {
                                variant: "primary",
                                text: Y.intl.string(Y.t["I/XhUn"]),
                                onClick: () => {
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
var iA = t(599941),
    ig = t(251766),
    im = t(950344),
    ix = t(217530),
    ip = t(162093),
    ij = t(601099);
function iI(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, ig.e)({ guildId: n, channelId: t }),
        a = (0, iA.uk)(n),
        r = (0, iA.Tq)(n),
        d = (0, A.bG)([nZ.A], () => nZ.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(t)),
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
                      children: Y.intl.format(Y.t.xHMpym, { serverName: o, channelName: u }),
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
        t = (0, A.bG)([iE.Ay], () => iE.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        i = (0, A.bG)([nb.A], () => (nb.A.getChannelConversations(n)?.length ?? 0) > 0, [n]);
    return (0, l.jsx)(tA.In, {
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
function i_(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([iE.Ay], () => iE.Ay.getSection(n)),
        i = (0, A.bG)([iN.A], () => iN.A.getGuildId()),
        s = t === er.YvQ.MEMBERS;
    return (0, l.jsx)(tA.In, {
        tooltip: s ? Y.intl.string(Y.t.Axvx8c) : Y.intl.string(Y.t.gxChDx),
        icon: T.n,
        onClick: () => {
            eS.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                iC.A.toggleMembersSection();
        },
        selected: s,
    });
}
var iT = t(187360),
    iS = t(366605),
    iR = t(945830);
let iL = function (e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        [i, a] = s.useState(!1),
        r = (0, A.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(n.id), [n]),
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
        (0, l.jsx)(tf.Y, {
            targetElementRef: o,
            shouldShow: i,
            animation: tf.Y.Animation.NONE,
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
                return (0, l.jsx)(tA.In, {
                    ...e,
                    ref: o,
                    onClick: c,
                    tooltip: i ? null : Y.intl.string(Y.t["mp1N/2"]),
                    icon: iS.t,
                    iconSize: 20,
                    "aria-label": Y.intl.string(Y.t["mp1N/2"]),
                    disabled: t,
                    showBadge: r,
                    selected: i,
                });
            },
        })
    );
};
var iO = t(306788),
    iM = t(863922),
    iD = t(822074),
    iP = t(521732);
function ik(e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        i = (0, A.bG)([iD.A], () => iD.A.shouldShowTopicsBar());
    return (0, l.jsx)(tA.Ay.Icon, {
        icon: iO.K,
        onClick: () => {
            en.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iP.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iM.Oz)();
        },
        tooltip: i ? Y.intl.string(Y.t.nGs3kO) : Y.intl.string(Y.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var iG = t(885574),
    iw = t(947094),
    iU = t(919577),
    iF = t(207777),
    iH = t(422844),
    iB = t(435470),
    iV = t(892110),
    iW = t(45494);
function iY(e) {
    let { channel: n } = e,
        t = (0, iB.S4)(n),
        i = (0, A.bG)([iw.A], () => iw.A.hasHidden(n.id)),
        s = (0, iV.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, iH.R)(n.id),
        o = (0, A.bG)(
            [iF.A, iW.A],
            () => !!(iF.A.getThreadIds(n.id, a, r, d).length > 0) || !!(iW.A.getThreads(n.id, a, r, d).length > 0),
            [n.id, a, r, d],
        ),
        c = n.isMediaChannel();
    if (!t || s || (c && o)) return null;
    let u = i
        ? c
            ? Y.intl.string(Y.t["WP/IE1"])
            : Y.intl.string(Y.t.zfq9V4)
        : c
          ? Y.intl.string(Y.t.p60yF1)
          : Y.intl.string(Y.t.SNOqYC);
    return (0, l.jsx)(tA.In, {
        tooltip: u,
        icon: iG.m,
        onClick: () => iU.A.hideAdminOnboarding(n.id, !i),
        selected: !i,
    });
}
var iz = t(742589),
    iK = t(43105),
    iq = t(428689),
    iX = t(978940),
    iQ = t(387755),
    i$ = t(730852),
    iZ = t(641703),
    iJ = t(379848),
    i0 = t(753727),
    i1 = t(222692),
    i2 = t(442353),
    i3 = t(470710),
    i7 = t(186111),
    i9 = t(555975),
    i5 = t(994500),
    i4 = t(360469),
    i8 = t(49999),
    i6 = t(731854);
class le extends s.PureComponent {
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
                ? ((u = !0), (c = Y.intl.string(Y.t.izMR7o)))
                : i9.Ay.supports(i6.O5.VIDEO)
                  ? s
                      ? ((c = Y.intl.string(Y.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = Y.intl.string(Y.t.UVpg3U))),
            (0, l.jsx)(tA.Ay.Icon, { icon: iq.n, onClick: e, disabled: u || i, tooltip: c })
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
            ? ((c = !0), (e = Y.intl.string(Y.t.izMR7o)))
            : i
              ? ((e = o ? Y.intl.string(Y.t.LW2Ghr) : Y.intl.string(Y.t.rF7lN5)), (c = !0))
              : s
                ? ((e = Y.intl.string(Y.t.PHzjvX)), (c = !0))
                : (e = t
                      ? o
                          ? Y.intl.string(Y.t.S0W8Z5)
                          : Y.intl.string(Y.t.fdEeb5)
                      : o
                        ? Y.intl.string(Y.t.S0W8Z5)
                        : Y.intl.string(Y.t.focH1t));
        let u = (0, l.jsx)(tA.Ay.Icon, {
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
                        return n === g.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(iK.A, {
                                  targetElementRef: this.iconRef,
                                  title: Y.intl.string(Y.t.HOPqzR),
                                  body: Y.intl.format(Y.t.xAW71b, { helpdeskUrl: i4.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(i8.i.USER_DISMISS),
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
            s = i ? t.getRecipientId() : null,
            a = () => iQ.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        n ? (0, i2.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        i$.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(g.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, to.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: i8.i.AUTO }),
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
function ln(e) {
    let { channel: n } = e,
        t = (0, i0.A)(),
        i = (0, A.bG)([ne.A], () => ne.A.getMode(n.id)),
        s = (0, A.bG)([tw.A], () => tw.A.isInChannel(n.id)),
        a = (0, A.bG)([L.A], () => L.A.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, A.cf)([i3.A], () => ({
            callActive: i3.A.isCallActive(n.id),
            callUnavailable: i3.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([i5.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !i5.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && i5.A.isBlocked(o),
        })),
        h = (0, A.bG)([J.default], () => J.default.getUser(o)),
        m = (0, tW.Us)(),
        x = [],
        p = (0, iZ.A)(n.id),
        f = (0, A.bG)([i7.A], () => i7.A.hasLayers());
    return (p && !f && x.push(g.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(le, {
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
var lt = t(277370),
    li = t(765178),
    ll = t(231483),
    ls = t(544231),
    la = t(338510),
    lr = t(151119),
    ld = t(278941),
    lo = t(665909),
    lc = t(327337);
let lu = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, la.u)(n.id),
        a = (0, lr.S)(n.id),
        r = (0, ld.e)(n.id),
        d = (0, m.useHasAnyModalOpen)(),
        o = (0, A.bG)([i7.A], () => i7.A.hasLayers()),
        c = s.useCallback(
            () => (a ? Y.intl.string(Y.t["16QyDv"]) : null != r ? Y.intl.string(Y.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, g] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != i &&
            (li.O.announce(Y.intl.string(Y.t.acsXuG)),
            setTimeout(() => {
                (0, ls.xi)(n.id, [r.id]);
            }, 5e3),
            (0, lo.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: lo.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (li.O.announce(Y.intl.string(Y.t["1dxCqG"])),
                setTimeout(() => {
                    (0, ls.bg)(n.id);
                }, 5e3));
    }, [n, r, i, a]),
        (0, F.Ay)(() => {
            null != i &&
                (0, lo.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: lo.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && g(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, ls.xi)(n.id, [r.id]),
            null != i &&
                ((0, m.openModalLazy)(
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
                    { modalKey: lc.V },
                ),
                (0, lo._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lo.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != r,
                }));
    }, [r, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(tA.Ay.Icon, {
                  icon: ll.l,
                  onClick: x,
                  tooltip: Y.intl.string(Y.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var lh = t(262763),
    lA = t(406704),
    lg = t(576705);
let lm = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, i0.A)(),
        i = (0, A.bG)([tw.A], () => tw.A.isInChannel(n.id)),
        a = (0, A.bG)([tw.A], () => !u().isEmpty(tw.A.getVoiceStatesForChannel(n.id))),
        r = (0, A.bG)([lg.A], () => lg.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, ir.A)(n.id),
        o = (0, lA.Id)(n),
        { enabled: c } = lA.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lh.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: d, locked: !1 });
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
        ? (0, l.jsx)(tA.Ay.Icon, {
              icon: iX._,
              onClick: h,
              tooltip: a ? Y.intl.string(Y.t.fdEeb5) : Y.intl.string(Y.t.focH1t),
          })
        : null;
});
var lx = t(812991),
    lp = t(47675),
    lf = t(999291);
function lj() {
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
        i = (0, A.bG)([iE.Ay], () => iE.Ay.getSection(n.id, n?.isDM())),
        s = (0, lf.Ay)(n.getRecipientId()),
        a = lj(),
        r = i === er.YvQ.PROFILE && a;
    return (0, l.jsx)(tA.In, {
        disabled: !a || t,
        tooltip: !a || t ? Y.intl.string(Y.t.YneDgF) : r ? Y.intl.string(Y.t.niD64e) : Y.intl.string(Y.t["+FAsHq"]),
        icon: lx.n,
        onClick: () => {
            (0, lp.am)({ displayProfile: s, isProfileOpen: !r }), iC.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let lb = {};
class lC extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lb[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lb[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lb;
    }
}
let lE = new lC(nR.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lb[t];
        return null == i ? ((lb[t] = new Set()), lb[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lb[n.id] && !n.unavailable && (delete lb[n.id], !0);
    },
});
var ly = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lv = t(376943),
    lN = t(394953),
    l_ = t(241541),
    lT = t(709066),
    lS = t(87664),
    lR = t(18707);
t(667532);
var lL = t(403362);
let lO = [],
    lM = es.Ay.getEnableHardwareAcceleration();
function lD(e) {
    let { user: n, channel: i, status: a, activities: r } = e,
        d = (0, A.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        o = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, A.bG)([i5.A], () => i5.A.getNickname(n.id)),
        h = (0, lS.A)(n.id),
        g = s.useRef(null),
        m = (e) => {
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
        },
        x = () => {
            let e = `@${el.Ay.getUserTag(n, { decoration: "never" })}`,
                t = `<@${n.id}>`;
            et._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: i.id }),
                et._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                R.A.startTyping(i.id);
        },
        p = (0, D.r)({ user: n }),
        [f, j] = s.useState(!1);
    return (0, l.jsx)(K.A, {
        targetElementRef: g,
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
                    ref: g,
                    user: n,
                    currentUser: o,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: Y.intl.string(Y.t["MRXZ+x"]),
                    shouldAnimateStatus: lM,
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
                    ...A,
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
function lk(e) {
    let { channel: n } = e,
        t = J.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: a } = (0, M.Ay)(O.A.MEMBER_LIST),
        { listItems: r } = (0, A.bG)(
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
                              activities: Q.A.getActivities(e.id) ?? lO,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: lO });
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
        o = (0, lR.G)("PrivateChannelRecipients"),
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
                                `${Y.intl.string(Y.t["9Oq93m"])}\u{2014}${r.length} `,
                                d && (0, l.jsx)(lT.A, { type: lT.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lD,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        o &&
                            (0, l.jsx)("div", {
                                className: eo.Uf,
                                children: (0, l.jsx)(lt.NE, {
                                    channel: n,
                                    text: Y.intl.string(Y.t.NB5DFD),
                                    icon: l_.D,
                                    variant: "secondary",
                                    fullWidth: !0,
                                    allowFrictionlessGDMUpsell: !c,
                                    entryPointType: lt.YW.MEMBER_LIST,
                                }),
                            }),
                    ],
                }),
            }),
        }),
    });
}
var lG = t(961974),
    lw = t(853279),
    lU = t(85942);
function lF() {
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
                        children: Y.intl.string(Y.t.uixzLf),
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
var lH = t(138298),
    lB = t(940382),
    lV = t(288254),
    lW = t(873614),
    lY = t(790535),
    lz = t(163328),
    lK = t(425557),
    lq = t(270003),
    lX = t(150934),
    lQ = t(452027),
    l$ = t(292666),
    lZ = t(511274),
    lJ = t(465532),
    l0 = t(579872),
    l1 = t(119031),
    l2 = t(408018),
    l3 = t(138617),
    l7 = t(822610),
    l9 = t(915089),
    l5 = t(314307),
    l4 = t(636922),
    l8 = t(931664),
    l6 = t(631576),
    se = t(885386),
    sn = t(232835),
    st = t(522602),
    si = t(806150),
    sl = t(518960),
    ss = t(753738);
function sa(e, n) {
    return { type: e, message: n ?? null };
}
function sr(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sd = t(659617),
    so = t(474078),
    sc = t(636537),
    su = t(152367),
    sh = t(147087);
async function sA(e) {
    try {
        let n = await sc.Bo.post({
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
    sm = t(790158),
    sx = t(415296);
let sp = nt.oU.THREAD_CREATION;
function sf(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        { analyticsLocations: a } = (0, M.Ay)(O.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(M.f5, {
              value: a,
              children: (0, l.jsx)(e$.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": Y.intl.string(Y.t.rBIGBL),
                      className: sm.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: t5.C.FirstThreadMessage }),
                          (0, l.jsx)(sj, { parentChannelId: n }),
                          (0, l.jsx)(sI, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function sj(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = t5.A.getThreadSettings(n),
                t = t5.A.getDraft(n, t5.C.FirstThreadMessage).trim(),
                i = st.A.getUploads(n, t5.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? l0.A.show({
                      title: Y.intl.string(Y.t["6kDZh1"]),
                      body: Y.intl.string(Y.t.NgS9jX),
                      confirmText: Y.intl.string(Y.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: Y.intl.string(Y.t["olcKd/"]),
                      onConfirm: () => {
                          (0, t2.bA)(n);
                      },
                  })
                : (0, t2.bA)(n);
        }, [n]);
    return (0, l.jsxs)(tA.Ay, {
        toolbar: (0, l.jsx)(tA.Ay.Icon, { icon: tC.P, tooltip: Y.intl.string(Y.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(tA.Ay.Icon, { icon: lz.y, disabled: !0, "aria-label": Y.intl.string(Y.t["7Xm5QI"]) }),
            (0, l.jsx)(tA.Ay.Title, { children: Y.intl.string(Y.t["4WNcpu"]) }),
        ],
    });
}
function sI(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: a } = e,
        d = (0, A.bG)([L.A], () => L.A.messageGroupSpacing),
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
            let t = (0, A.bG)([t5.A], () => t5.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        l((e) => ({ ...e, ...t })), lJ.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(t, i),
        { textAreaState: g, setTextAreaState: m } = (function (e, n) {
            let [t, i] = s.useState((0, l2.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = t5.A.getDraft(e.id, t5.C.FirstThreadMessage);
                        (0 === l.length || !0 === t) && i((0, l2.ur)(l)), n(t5.A.getThreadSettings(e.id) ?? {});
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
        x = (0, sd.EN)(t),
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
                h = (0, sh.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = sn.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await sA(e);
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
            let g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: su.D,
                                onClick: A,
                                "aria-label": Y.intl.string(Y.t.ZF2oBs),
                                disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                tooltip: Y.intl.string(Y.t.ZF2oBs),
                                loading: d,
                            };
                    },
                    [h, A, d, t, r.textValue],
                ),
                m = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: Y.intl.string(Y.t.ZF2oBs),
                                  children: (0, l.jsx)(na.K, {
                                      icon: su.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": Y.intl.string(Y.t.ZF2oBs),
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
                renderAiGenerateButton: m,
                getThreadNameInputAccessory: g,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: g }),
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
                [A, g] = s.useState(!1),
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
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        g(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = l8.A.getStickerPreview(n.id, sp.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = st.A.getUploads(n.id, t5.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(o ? sa(0, Y.intl.string(Y.t.uXA573)) : null),
                            h(u ? sa(0, Y.intl.string(Y.t.kesTVT)) : null),
                            o || u)
                        )
                            return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, si.i)({
                            content: e,
                            stickers: l,
                            uploads: s,
                            type: sp,
                            channel: null == t ? n : null,
                        });
                        if (!x) return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await m(e, l, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), sa(1, (0, ss.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sa(2, Y.intl.string(Y.t.uXA573)));
                            return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, l6.x5)(n.id, sp.drafts.type), g(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [m, a.textValue, i.name, t, n, A, d],
                ),
                submitting: A,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: x,
            textAreaState: g,
            location: a,
            enableAIFeatures: f,
        }),
        y = (0, sd.Iy)(c, x) ? lK.t : lz.y;
    return (0, l.jsx)("div", {
        className: sm.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, l.jsx)("div", {
            className: r()(sm.Og, `group-spacing-${d}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: sm.Zd,
                children: [
                    (0, l.jsx)(ti.Ip, {
                        className: sm.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sm.bv,
                            children: [
                                (0, l.jsxs)(l5.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(sx.P0, sm.P0),
                                            children: (0, l.jsx)(y, { className: sx.Kk }),
                                        }),
                                        (0, l.jsxs)(lq.n, {
                                            children: [
                                                (0, l.jsx)(sC, {
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
                                                    ? (0, l.jsx)(sb, {
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
                                (0, l.jsx)(sy, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sm.Eh,
                        children: [
                            (0, l.jsx)(sE, {
                                parentChannel: t,
                                textAreaState: g,
                                setTextAreaState: m,
                                submit: C,
                                error: b,
                            }),
                            (0, l.jsx)(l1.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sm.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sb(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        a = (0, sd.Iy)(t, s),
        r = (0, l.jsx)(lX.S, {
            disabled: s === sd.jk.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: Y.intl.string(Y.t.TRPp3g),
        });
    return n || s === sd.jk.Disabled
        ? null
        : (0, l.jsx)(lQ.D, {
              label: Y.intl.string(Y.t.F1zyvU),
              helperText: a ? Y.intl.string(Y.t.EWXycz) : void 0,
              children: r,
          });
}
function sC(e) {
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
        h = sr(a, { content: u }),
        A = (0, sd.l1)(n, t),
        g = null != t && !o,
        m = (0, l9.GV)(),
        x = o ? Y.intl.string(Y.t["Nb2/RE"]) : "" !== A ? A : Y.intl.string(Y.t["Nb2/RE"]);
    return (0, l.jsx)(l$.k, {
        label: Y.intl.string(g ? Y.t.JPvIiL : Y.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: m,
        placeholder: x,
        maxLength: er.Ign,
        onChange: (e) => {
            s({ name: (0, so.A)(e, !1) }), "" !== e ? R.A.startTyping(n.id) : R.A.stopTyping(n.id);
        },
        onBlur: () => {
            let e = (0, so.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || d,
    });
}
function sE(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: a, error: d } = e,
        [o, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        g = s.useCallback(() => c(!1), []),
        m = s.useCallback(
            (e, t, l) => {
                lJ.A.saveDraft(n.id, t, t5.C.FirstThreadMessage),
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
    (0, e$.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, e$.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: g });
    let p = (0, A.bG)([lg.A], () => lg.A.can(er.xBc.ATTACH_FILES, n)),
        f = sr(d, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l7.A, { channelId: n.id, type: sp, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sm.xN, children: (0, l.jsx)(lZ.U, { error: f }) }),
            (0, l.jsx)(l3.Ay, {
                type: sp,
                channel: n,
                placeholder: Y.intl.string(Y.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sm.gM, sm.Yy),
                innerClassName: r()(sm.SL, { [sm.cr]: null != f }),
                onFocus: h,
                onBlur: g,
                onChange: m,
                onSubmit: x,
                promptToUpload: sl.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sy(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, A.bG)([sn.A], () => (null == t ? null : sn.A.getMessage(n.id, t))),
        s = se.hH.useSetting();
    return null != i
        ? (0, l.jsx)(l4.A, {
              className: sm.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sv = t(305866),
    sN = t(707539),
    s_ = t(702513),
    sT = t(614879);
function sS(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e8.ni)(n),
        d = s.useCallback(() => {
            i(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, sN.D3)("Popout"), i(!t);
        }, [t]);
    return (0, l.jsx)(tf.Y, {
        targetElementRef: a,
        animation: tf.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: t,
        onRequestClose: d,
        renderPopout: function () {
            return (0, l.jsx)(sv.l, {
                children: (0, l.jsx)(s_.A, { className: sT.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(tA.In, {
                ...e,
                ref: a,
                className: sT.Kk,
                onClick: o,
                icon: lz.y,
                "aria-label": Y.intl.string(Y.t.B2panI),
                tooltip: t ? null : Y.intl.string(Y.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sR = t(40389);
function sL(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, l.jsx)(tf.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tf.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(sO, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(tA.Ay.Icon, {
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
        s = (0, ty.A)(n),
        a = (0, tT.A)(n),
        r = (0, tO.A)(n.id),
        d = (0, tL.A)(n),
        o = (0, tk.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        c = (0, tv.A)(n),
        h = (0, tN.A)(n),
        g = (0, t_.A)(n, "Toolbar Overflow"),
        m = (0, tS.A)(n),
        x = (0, sR.A)(n),
        p = (0, tP.A)(n),
        f = (0, tR.A)(n),
        j = se.SY.useSetting(),
        I = (0, A.bG)([tw.A], () => !u().isEmpty(tw.A.getVoiceStatesForChannel(n.id)));
    return (0, l.jsxs)(tj.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tI.rX, { children: [g, x] }),
            (0, l.jsxs)(tI.rX, {
                children: [
                    d,
                    m,
                    r,
                    j && !I
                        ? (0, l.jsx)(tI.Dr, {
                              id: "open",
                              label: Y.intl.string(Y.t.bX7EaG),
                              action: function () {
                                  (0, t2.JA)(n);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, l.jsxs)(tI.rX, { children: [p, s, a, h] }),
            (0, l.jsxs)(tI.rX, { children: [c, o] }),
        ],
    });
}
var sM = t(332456),
    sD = t(973854),
    sP = t(248537);
function sk(e) {
    var n;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, A.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, A.bG)([nZ.A], () => nZ.A.getGuild(o?.getGuildId())),
        h = (0, tu.Ay)(o);
    (n = o),
        (i = (0, A.bG)([tw.A], () => null != n && !u().isEmpty(tw.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nR.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tF.N9)(n, { source: t0.H9.VOICE_AUTO_OPEN }));
        }, [i, n]);
    let g = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || g.current) return;
            g.current = !0;
            let e = (0, sM.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, sD.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    let m = (0, l.jsx)(t9, { channel: o, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: o, draftType: t5.C.ChannelMessage }),
            (0, l.jsx)(tA.Ay, {
                toolbar: m,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tg.zF)({
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
                className: sP.T,
                children: (0, l.jsx)(th.A, { channel: o, guild: c, chatInputType: nt.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sG = t(210714),
    sw = t(975732),
    sU = t(707554),
    sF = t(140735),
    sH = t(562153),
    sB = t(215530),
    sV = t(454719),
    sW = t(736653),
    sY = t(311016),
    sz = t(480335),
    sK = t(713517),
    sq = t(183555),
    sX = t(718019),
    sQ = t(328296),
    s$ = t(915614),
    sZ = t(308244),
    sJ = t(743987),
    s0 = t(900179),
    s1 = t(946356),
    s2 = t(878555),
    s3 = t(35241),
    s7 = t(587168),
    s9 = t(744808),
    s5 = t(945810);
let s4 = (0, s5.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var s8 = t(416497);
let s6 = (e) => {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
};
function ae(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, handleOpenProfile: s } = e,
        { showButton: a } = s4.useConfig({ location: "UserProfileSidebarFooter" }),
        r = a
            ? (0, l.jsx)("div", {
                  className: s8.qr,
                  children: (0, l.jsx)(ns.D, {
                      onClick: () => {
                          s(), (0, lp.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
                      },
                      className: s8.wC,
                      children: (0, l.jsx)(y.E, {
                          color: "text-strong",
                          variant: "text-sm/normal",
                          children: Y.intl.string(Y.t["+Xp3hq"]),
                      }),
                  }),
              })
            : null;
    return null != i
        ? (0, l.jsxs)("div", { className: s8.xQ, children: [(0, l.jsx)(s9.A, { frame: i, filterLayer: s6 }), r] })
        : r;
}
var an = t(996988),
    at = t(556818),
    ai = t(523802);
function al(e) {
    let { user: n, channel: t } = e,
        i = __OVERLAY__ || !(0, sY.A)(n.id),
        a = (0, lf.Ay)(n.id),
        r = (0, sW.Ay)(),
        d = s.useRef(Date.now()),
        { analyticsLocations: o } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        u = s.useRef(null),
        { isHoveringOrFocusing: h, isHovering: A } = (0, sK.A)(u),
        g = () => {
            (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: o, hideRestrictedProfile: !0, ...c });
        };
    return (0, l.jsx)(M.f5, {
        value: o,
        children: (0, l.jsx)(sq.of, {
            value: c,
            openedAt: d.current,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsxs)(s1.A, {
                ref: u,
                user: n,
                displayProfile: a,
                themeType: an.d.SIDEBAR,
                themeOverride: r,
                children: [
                    (0, l.jsxs)(ti.d_, {
                        children: [
                            (0, l.jsx)(s7.A, { children: (0, l.jsx)(s3.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: at.wx,
                                children: [
                                    (0, l.jsx)(s$.A, {
                                        user: n,
                                        displayProfile: a,
                                        themeType: an.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !h,
                                    }),
                                    (0, l.jsx)(sX.A, {
                                        user: n,
                                        displayProfile: a,
                                        channelId: t.id,
                                        themeType: an.d.SIDEBAR,
                                        onOpenProfile: i ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ai.rf,
                                children: [
                                    (0, l.jsx)(s2.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sH.Ay.getName(null, t.id, n),
                                        onClickName: i ? void 0 : g,
                                        pronouns: a?.pronouns,
                                        trailing: (0, l.jsx)(sQ.A, { displayProfile: a, themeType: an.d.SIDEBAR }),
                                    }),
                                    (0, l.jsxs)(s1.A.Overlay, {
                                        className: ai.Lw,
                                        children: [
                                            (0, l.jsx)(s0.A, {
                                                heading: Y.intl.string(Y.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, l.jsx)(sZ.A, {
                                                    userBio: a?.bio,
                                                    userId: n.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: h,
                                                }),
                                            }),
                                            (0, l.jsx)(s0.A, {
                                                heading: Y.intl.string(Y.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, l.jsx)(sJ.A, { userId: n.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !i && (0, l.jsx)(ae, { handleOpenProfile: g, analyticsLocations: o, context: c }),
                    a?.profileEffect != null && (0, l.jsx)(sz.A, { skuId: a?.profileEffect?.skuId, isHovering: A }),
                ],
            }),
        }),
    });
}
var as = t(331322),
    aa = t(249790),
    ar = t(254828),
    ad = t(783123),
    ao = t(735103);
function ac(e) {
    let { user: n, channel: t, onHide: i } = e,
        a = (0, lf.Ay)(n.id),
        r = (0, sW.Ay)(),
        d = (0, A.bG)([i5.A], () => i5.A.isBlocked(n.id)),
        { analyticsLocations: o } = (0, M.Ay)(d ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        u = s.useRef(null);
    return (0, l.jsx)(M.f5, {
        value: o,
        children: (0, l.jsx)(sq.of, {
            value: c,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(s1.A, {
                ref: u,
                user: n,
                displayProfile: a,
                themeType: an.d.SIDEBAR,
                themeOverride: r,
                children: (0, l.jsx)(ti.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ao.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ao.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ao.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ao.N1,
                                        children: [
                                            (0, l.jsx)(aa.A, { user: n }),
                                            (0, l.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: Y.intl.string(Y.t.b33pLD),
                                            }),
                                            (0, l.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: Y.intl.format(d ? Y.t["8F+WNz"] : Y.t["/cZp5s"], {
                                                    username: sH.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(as.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(ad.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    i(),
                                                        (0, lp.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: o,
                                                            ...c,
                                                        });
                                                },
                                            }),
                                            (0, l.jsx)(ar.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    i(),
                                                        (0, lp.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: o,
                                                            ...c,
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
var au = t(922139),
    ah = t(717421),
    aA = t(31956),
    ag = t(361628),
    am = t(673843),
    ax = t(561794),
    ap = t(841595),
    af = t(679492),
    aj = t(439053),
    aI = t(312381),
    ab = t(349419),
    aC = t(984545),
    aE = t(193738),
    ay = t(700174),
    av = t(983495),
    aN = t(695366),
    a_ = t(661531),
    aT = t(922590),
    aS = t(821269),
    aR = t(93246),
    aL = t(351906),
    aO = t(383199),
    aM = t(559506),
    aD = t(361311),
    aP = t(931481),
    ak = t(501193),
    aG = t(383448),
    aw = t(646986),
    aU = t(243166);
function aF(e) {
    let { user: n, currentUser: t, displayProfile: i, channel: s, isHoveringOrFocusing: a, onOpenProfile: r } = e,
        { relationshipType: d, originApplicationId: o } = (0, A.cf)([i5.A], () => ({
            relationshipType: i5.A.getRelationshipType(n.id),
            originApplicationId: i5.A.getOriginApplicationId(n.id),
        })),
        c = (0, aT.fi)(n.id),
        u = (0, aS.q)({ userId: n.id }),
        h = (0, A.bG)([aL.A], () => aL.A.hidePersonalInformation),
        g = (0, A.bG)([ap.A], () => ap.A.getUserProfile(n.id)?.application);
    return (0, l.jsxs)("div", {
        className: ai.rf,
        children: [
            (0, l.jsx)(aM.A, { userId: n.id }),
            (0, l.jsx)(s2.Ay, {
                user: n,
                guildId: s.guild_id,
                displayName: sH.Ay.getName(null, s.id, n),
                onClickName: r,
                displayNameTrailing: h ? null : (0, l.jsx)(aU.A, { userId: n.id, isVisible: a, onOpenProfile: r }),
                pronouns: i?.pronouns,
                trailing: (0, l.jsx)(sQ.A, { displayProfile: i, themeType: an.d.SIDEBAR }),
            }),
            d === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(s1.A.Overlay, {
                    children: (0, l.jsx)(aP.A, { user: n, channelId: s.id, applicationId: o }),
                }),
            c.map((e) =>
                (0, l.jsx)(
                    s1.A.Overlay,
                    {
                        children: (0, l.jsx)(aP.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: s.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aG.A, { user: n }),
            i?.private &&
                (0, l.jsx)(s1.A.Overlay, { children: (0, l.jsx)(ak.A, { username: sH.Ay.getName(null, s.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(s1.A.Overlay, {
                    className: ai.Lw,
                    children: (0, l.jsx)(s0.A, {
                        heading: Y.intl.string(Y.t.Iyka0U),
                        headingIcon: (0, l.jsx)(aN.E, { size: "xxs", color: a_.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aR.T, { userId: n.id }),
                    }),
                }),
            (0, l.jsx)(aw.A, { user: n, currentUser: t, onOpenUserProfileModal: r }),
            (0, l.jsxs)(s1.A.Overlay, {
                className: ai.Lw,
                children: [
                    !h &&
                        i?.bio != null &&
                        i?.bio !== "" &&
                        (0, l.jsx)(s0.A, {
                            heading: Y.intl.string(Y.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(sZ.A, {
                                userId: n.id,
                                userBio: i.bio,
                                isHoveringOrFocusing: a,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    g?.popularApplicationCommandIds != null &&
                        (0, l.jsx)(aO.A, {
                            applicationId: g.id,
                            commandIds: g.popularApplicationCommandIds,
                            channel: s,
                        }),
                    u.length > 0 &&
                        (0, l.jsx)(s0.A, {
                            heading: Y.intl.string(Y.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(aD.A, { applicationIds: u }),
                        }),
                    (0, l.jsx)(s0.A, {
                        heading: n.bot ? Y.intl.string(Y.t["A//N4k"]) : Y.intl.string(Y.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(sJ.A, { userId: n.id }),
                    }),
                ],
            }),
        ],
    });
}
var aH = t(114212),
    aB = t(913453),
    aV = t(229187),
    aW = t(21241),
    aY = t(201934),
    az = t(51943),
    aK = t(847374),
    aq = t(320448),
    aX = t(680391);
function aQ(e) {
    let { section: n, header: t, items: i, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, sq.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? aK.a : aq._;
    return (0, l.jsxs)("section", {
        className: aX.uW,
        children: [
            (0, l.jsxs)(ns.D, {
                className: r()(aX.wx, aX.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(aX.p_, a), children: i }),
        ],
    });
}
var a$ = t(54557);
function aZ(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, M.Ay)(),
        { context: s } = (0, sq.NJ)(),
        a = (0, tE.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, aB.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, l.jsxs)(s1.A.Overlay, {
              className: a$.Lw,
              children: [
                  u &&
                      (0, l.jsx)(aQ, {
                          section: "MUTUAL_GUILDS",
                          header: Y.intl.string(Y.t["4lTDZq"]),
                          listClassName: a$.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  az.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, n$.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(aW.A, { className: a$.yF }),
                  c &&
                      (0, l.jsx)(aQ, {
                          section: "MUTUAL_FRIENDS",
                          header: Y.intl.string(Y.t["0mTJ3j"]),
                          listClassName: a$.p_,
                          onExpand: () => (0, aV.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: a$.nC,
                                                children: [
                                                    (0, l.jsx)(aH.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(aH.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            aY.A,
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
var aJ = t(123292),
    a0 = t(853735),
    a1 = t(131607),
    a2 = t(84511),
    a3 = t(575593),
    a7 = t(587895),
    a9 = t(44120),
    a5 = t(532794),
    a4 = t(317560),
    a8 = t(533406),
    a6 = t(661492);
let re = (0, s5.mj)({
    name: "2026-06-remove-wishlist-dm-sidebar-side-copy",
    kind: "user",
    defaultConfig: { shouldHideSideText: !1 },
    variations: { 0: { shouldHideSideText: !1 }, 1: { shouldHideSideText: !0 } },
});
var rn = t(212387),
    rt = t(662349),
    ri = t(369005);
function rl(e) {
    let { title: n, description: t, onClick: i } = e;
    return (0, l.jsxs)("div", {
        className: ri.S,
        children: [
            (0, l.jsx)(ns.D, {
                onClick: i,
                className: ri.H,
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
var rs = t(479026),
    ra = t(699976),
    rr = t(788868),
    rd = t(518477),
    ro = t(80223),
    rc = t(997990);
let ru = ra.Z.SIZE_90;
function rh(e) {
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
            onPurchaseClick: A,
            singleCardInfo: g,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, sq.NJ)(),
        x = s.useCallback(() => {
            m({
                action: rd.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [n, i, h, m]),
        p = s.useCallback(() => {
            m({
                action: rd.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: i,
                productLines: new Set([n.productLine]),
            }),
                A();
        }, [A, n.id, i, n.productLine, m]),
        { label: f, icon: j, isPromptingPurchase: I } = (0, rt.h)({ wishlistOwner: t, isOwned: !1, shortText: !0 }),
        [b, C] = s.useState(!1),
        E = re.useConfig({ location: "dm_side_panel_wishlist_item_card" }).shouldHideSideText;
    return (0, l.jsxs)(as.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", {
                className: ro.kL,
                children: (0, l.jsx)(rn.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: n,
                    user: t,
                    spec: ru,
                    cardStyle: r()(ro.Nr, d),
                    skuPreviewStyle: r()(ro.ho, o),
                    skuAssetClassName: b ? c : void 0,
                    onClick: x,
                    "aria-label": Y.intl.formatToPlainString(Y.t.ZBB4Ty, { productName: (0, a6.TC)(n) }),
                    onHoverOrFocusChange: C,
                    children: (0, l.jsx)(rt.A, {
                        spec: ru,
                        onClick: I ? p : x,
                        isHoveringOrFocusing: b,
                        label: f,
                        icon: j,
                    }),
                }),
            }),
            a && !E && (0, l.jsx)(rl, { title: g.title, description: g.description, onClick: x }),
        ],
    });
}
function rA(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        r = (0, eb.bG)([a7.A], () => a7.A.getApplication(n.applicationId)),
        { analyticsLocations: d } = (0, M.Ay)(
            ...(i ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a8.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: d },
            );
        }, [n, t, d]),
        c = s.useCallback(() => {
            (0, a4.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: d,
            });
        }, [n.id, n.applicationId, t, d]),
        u = s.useMemo(
            () => ({ title: n.name, description: Y.intl.format(Y.t["CqpEC+"], { applicationName: r?.name }) }),
            [n.name, r?.name],
        );
    return (0, l.jsx)(rh, {
        sku: n,
        analyticsLocations: d,
        wishlistOwner: t,
        onDetailsClick: c,
        onPurchaseClick: o,
        singleCardInfo: u,
        ...a,
    });
}
function rg(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        d = s.useCallback(() => {
            (0, a9.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        o = (0, rs.e)({ sku: n, giftRecipient: t, giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(() => {
            switch (n?.tenantMetadata?.collectibles?.type) {
                case a3.R.PROFILE_EFFECT:
                case a3.R.NAMEPLATE:
                case a3.R.BUNDLE:
                case a3.R.PROFILE_FRAME:
                    return;
                case a3.R.AVATAR_DECORATION:
                    return r()(ro.ML, ro._P);
                default:
                    return r()(ro.ML, ro.ZY);
            }
        }, [n?.tenantMetadata?.collectibles?.type]),
        u = s.useMemo(
            () => ({
                title: n.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return Y.intl.string(Y.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a3.R.AVATAR_DECORATION:
                            return Y.intl.string(Y.t["7v0T9P"]);
                        case a3.R.PROFILE_EFFECT:
                            return Y.intl.string(Y.t.wR5wOo);
                        case a3.R.NAMEPLATE:
                            return Y.intl.string(Y.t.x5CoXR);
                        default:
                            return "";
                    }
                })(n),
            }),
            [n],
        );
    return (0, l.jsx)(rh, {
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
function rm(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        r = s.useCallback(() => {
            (0, a5.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: rr.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        d = s.useMemo(() => ({ title: n.name, description: Y.intl.string(Y.t.Ipxkog) }), [n.name]);
    return (0, l.jsx)(rh, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: rc.MO,
        disableRiveHover: !0,
        singleCardInfo: d,
        ...a,
    });
}
function rx(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rA, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(rg, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(rm, { sku: n, ...t });
        default:
            return null;
    }
}
var rp = t(535089),
    rf = t(617348);
function rj(e) {
    let { unownedWishlistItems: n = [], profileOwner: t, onClick: i, wishlistId: a, title: r } = e,
        { analyticsLocations: d } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: o } = (0, sq.NJ)(),
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
        A = (0, s.useMemo)(() => new Set(h.map((e) => e.skuProductLine)), [h]),
        m = (0, rp.A)({ wishlistId: a ?? null, onAction: u, productLines: A }),
        x = (0, s.useMemo)(
            () =>
                h
                    .map((e, s) =>
                        null == e.sku
                            ? null
                            : (0, l.jsx)(
                                  rx,
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
        ),
        [p, f] = (0, a1.RF)(
            g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, a0.c)(g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        j = p !== g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === x.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": c,
              children: (0, l.jsxs)(s1.A.Overlay, {
                  ref: m,
                  className: rf.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: rf.wx,
                          children: [
                              (0, l.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: r ?? Y.intl.string(Y.t["7lZ31J"]),
                              }),
                              n.length > 3 &&
                                  (0, l.jsx)(aJ.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: Y.intl.string(Y.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsxs)(sU.F, {
                          children: [
                              (0, l.jsx)("div", { className: rf.vY, children: x }),
                              !j &&
                                  A.has(er.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, l.jsx)(a2.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: rf.EK,
                                      onDismiss: () => f(i8.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
function rI(e) {
    let { user: n, currentUser: t, channel: i } = e,
        a = __OVERLAY__,
        r = (0, lf.Ay)(n.id),
        d = (0, sW.Ay)(),
        o = s.useRef(Date.now()),
        { analyticsLocations: c } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        u = (0, sq.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id }),
        h = s.useRef(null),
        { isHoveringOrFocusing: g, isHovering: m } = (0, sK.A)(h),
        x = (0, af.fC)(),
        p = (0, ag.A)(r?.profileFrame?.skuId, "UserProfileSidebar");
    (0, aA.A)({ skuId: r?.profileFrame?.skuId, openedAt: o.current, context: u, analyticsLocations: c });
    let f = (0, ah.z)({ opacity: +(null != x.interactionType), config: { duration: 150 } }),
        j = (e) => {
            (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: c, hideRestrictedProfile: !0, ...u, ...e });
        },
        I = r?.widgets != null && r.widgets.length > 0,
        { defaultWishlistId: b } = (0, A.cf)([ap.A], () => ({ defaultWishlistId: ap.A.getFirstWishlistId(n.id) })),
        { wishlist: C } = (0, ax.fw)({ wishlistId: b, userId: n.id });
    (0, am.A)(C);
    let E = s.useMemo(() => (null == C ? null : C.items.filter((e) => !e.isOwned)), [C]);
    return (0, l.jsx)(M.f5, {
        value: c,
        children: (0, l.jsx)(sq.of, {
            value: u,
            openedAt: o.current,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(af.Hl, {
                value: x,
                children: (0, l.jsxs)(s1.A, {
                    ref: h,
                    user: n,
                    displayProfile: r,
                    themeType: an.d.SIDEBAR,
                    themeOverride: d,
                    isPrivate: r?.private === !0,
                    children: [
                        r?.private === !0 && (0, l.jsx)(aI.A, {}),
                        null != x.interactionType && (0, l.jsx)(au.animated.div, { style: f, className: at.tB }),
                        (0, l.jsxs)(ti.d_, {
                            className: null != p ? at.It : void 0,
                            children: [
                                (0, l.jsxs)(s7.A, {
                                    children: [
                                        (0, l.jsx)(aE.A, { user: n, themeType: an.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(aC.A, { user: n }) : (0, l.jsx)(ay.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: at.wx,
                                    children: [
                                        (0, l.jsx)(s$.A, {
                                            user: n,
                                            displayProfile: r,
                                            themeType: an.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !g,
                                            className: at.vK,
                                        }),
                                        (0, l.jsx)(aj.A, { userId: n.id, className: at.oR }),
                                        (0, l.jsx)(sX.A, {
                                            user: n,
                                            displayProfile: r,
                                            channelId: i.id,
                                            themeType: an.d.SIDEBAR,
                                            onOpenProfile: a ? void 0 : j,
                                        }),
                                        (0, l.jsx)(av.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: an.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(aF, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: r,
                                    channel: i,
                                    isHoveringOrFocusing: null == x.interactionType && g,
                                    onOpenProfile: a ? void 0 : j,
                                }),
                                I &&
                                    (0, l.jsx)("div", {
                                        className: at.sJ,
                                        children: (0, l.jsx)(ab.A, {
                                            user: n,
                                            widgets: r.widgets,
                                            onOpenUserProfileModal: j,
                                        }),
                                    }),
                                null != E &&
                                    E.length > 0 &&
                                    (0, l.jsx)("div", {
                                        className: at.vS,
                                        children: (0, l.jsx)(rj, {
                                            profileOwner: n,
                                            unownedWishlistItems: E,
                                            wishlistId: b,
                                            title: Y.intl.string(Y.t["7lZ31J"]),
                                            onClick: () => {
                                                j?.({ tabSection: rd.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, l.jsx)(aZ, { user: n, channelId: i.id }),
                            ],
                        }),
                        !a &&
                            (0, l.jsx)(ae, {
                                context: u,
                                analyticsLocations: c,
                                profileFrame: p,
                                handleOpenProfile: j,
                            }),
                        r?.profileEffect != null && (0, l.jsx)(sz.A, { skuId: r?.profileEffect?.skuId, isHovering: m }),
                    ],
                }),
            }),
        }),
    });
}
function rb(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, A.bG)([J.default], () => J.default.getUser(t)),
        a = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        r = lj(),
        [d, o] = (0, sB.A)(t);
    if (
        (s.useEffect(() => {
            (0, sV.A)(i ?? t, {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: n.id,
            });
        }, [i, t, n.id]),
        null == i || null == a || !r)
    )
        return null;
    let c = `user-profile-sidebar-heading-${i.id}`,
        u = sH.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": c,
        children: (0, l.jsx)(sU.F, {
            component: (0, l.jsx)(sF.A, {
                children: (0, l.jsx)(sU.H, { id: c, children: Y.intl.format(Y.t.KRe1Fk, { name: u }) }),
            }),
            children: d
                ? (0, l.jsx)(ac, { user: i, currentUser: a, onHide: o, ...e })
                : i.isNonUserBot()
                  ? (0, l.jsx)(al, { user: i, currentUser: a, ...e })
                  : (0, l.jsx)(rI, { user: i, currentUser: a, ...e }),
        }),
    });
}
var rC = t(522556),
    rE = t(225315),
    ry = t(684407),
    rv = t(95701),
    rN = t(919638),
    r_ = t(763827),
    rT = t(812771),
    rS = t(946228),
    rR = t(462887),
    rL = t(276293),
    rO = t(96361),
    rM = t(745652);
let rD = () => {
    let e = (0, sW.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, rR.M)(e) ? rM : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: rO.kL,
        children: [
            (0, l.jsxs)(iz.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(iz.A.Icon, { icon: rL.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iz.A.Title, { children: Y.intl.string(Y.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: rO.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: rO.j0, src: n }),
                    (0, l.jsx)(S.D, {
                        className: rO.Zd,
                        variant: "heading-lg/medium",
                        children: Y.intl.string(Y.t.m9gRVN),
                    }),
                    (0, l.jsx)(y.E, {
                        className: rO.fh,
                        variant: "text-md/normal",
                        children: Y.intl.string(Y.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rP = t(943712),
    rk = t(402216),
    rG = t(746080),
    rw = t(806931),
    rU = t(165610),
    rF = t(516607),
    rH = t(964623);
let rB = () => (0, l.jsx)("div", { className: rH.wG, children: (0, l.jsx)(x.y, {}) }),
    rV = (0, nT.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("40252"),
                t.e("87755"),
                t.e("64801"),
                t.e("91062"),
                t.e("71301"),
                t.e("70573"),
                t.e("37853"),
                t.e("49681"),
                t.e("21044"),
                t.e("33097"),
                t.e("4374"),
                t.e("21225"),
                t.e("23685"),
                t.e("42516"),
                t.e("89160"),
                t.e("41580"),
            ]).then(t.bind(t, 979301)),
        webpackId: 979301,
        renderLoader: rB,
        name: "ForumChannel",
    }),
    rW = () =>
        Promise.all([
            t.e("59499"),
            t.e("58107"),
            t.e("35114"),
            t.e("40942"),
            t.e("48936"),
            t.e("76568"),
            t.e("4981"),
            t.e("54662"),
            t.e("34712"),
            t.e("54633"),
            t.e("64776"),
            t.e("71632"),
            t.e("5677"),
            t.e("2677"),
            t.e("11491"),
            t.e("32703"),
            t.e("84045"),
            t.e("18885"),
            t.e("68201"),
            t.e("85755"),
            t.e("792"),
            t.e("92822"),
            t.e("9291"),
            t.e("29260"),
            t.e("39103"),
            t.e("755"),
            t.e("36624"),
            t.e("49013"),
            t.e("33448"),
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
        ]).then(t.bind(t, 540462)),
    rY = (0, nT.Fe)({ createPromise: rW, webpackId: 540462, name: "ChannelCall", renderLoader: rB }),
    rz = () =>
        Promise.all([
            t.e("54633"),
            t.e("44588"),
            t.e("76568"),
            t.e("4981"),
            t.e("54662"),
            t.e("34712"),
            t.e("71632"),
            t.e("59499"),
            t.e("58107"),
            t.e("35114"),
            t.e("68201"),
            t.e("792"),
            t.e("92822"),
            t.e("9291"),
            t.e("29260"),
            t.e("755"),
            t.e("49013"),
            t.e("33448"),
            t.e("15275"),
            t.e("22644"),
            t.e("56373"),
            t.e("20577"),
            t.e("4374"),
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
        ]).then(t.bind(t, 67319)),
    rK = (0, nT.Fe)({ createPromise: rz, webpackId: 67319, name: "StageChannelCall", renderLoader: rB }),
    rq = (0, nT.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("71301"),
                t.e("11394"),
                t.e("37082"),
                t.e("43489"),
                t.e("49681"),
                t.e("38939"),
                t.e("61058"),
                t.e("33097"),
                t.e("30501"),
                t.e("39214"),
                t.e("20803"),
                t.e("21225"),
                t.e("12549"),
                t.e("62368"),
            ]).then(t.bind(t, 104731)),
        webpackId: 104731,
        name: "SearchResults",
        renderLoader: () => (0, l.jsx)(lF, {}),
    }),
    rX = (0, nT.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("19810"),
                t.e("30571"),
                t.e("43489"),
                t.e("56574"),
                t.e("49681"),
                t.e("28136"),
                t.e("7775"),
                t.e("61058"),
                t.e("33097"),
                t.e("36002"),
                t.e("30501"),
                t.e("66913"),
                t.e("71719"),
                t.e("13848"),
            ]).then(t.bind(t, 538409)),
        webpackId: 538409,
        name: "GuildMemberModViewSidebar",
    });
class rQ extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sG.d)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? rW() : e === er.rbe.GUILD_STAGE_VOICE && rz();
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
                    t.e("89673"),
                    t.e("82073"),
                    t.e("97558"),
                    t.e("38730"),
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
        return e?.hasFlag(rG.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(is.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(ni.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== rw.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ii.A,
                  { size: rk.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    d.push((0, l.jsx)(ln, { channel: e }, "calls")),
                    d.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    d.push(
                        (0, l.jsx)(
                            lt.Ay,
                            { channel: e, tooltip: r ? Y.intl.string(Y.t.IIOxgV) : Y.intl.string(Y.t["PWkO7+"]) },
                            "invite",
                        ),
                    ),
                    d.push((0, l.jsx)(lI, { channel: e, showCallOrActivityPanel: i || s || a }, "profile")),
                    d.push((0, l.jsx)(lu, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                d.push(this.renderJoinRequestInterviewButtons()),
                    d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, l.jsx)(ln, { channel: e }, "calls")),
                    d.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    e.isManaged() ||
                        d.push((0, l.jsx)(lt.Ay, { channel: e, tooltip: Y.intl.string(Y.t.NB5DFD) }, "invite")),
                    d.push((0, l.jsx)(i_, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && d.push((0, l.jsx)(tq, { channel: e })),
                    null == n || n.isForumLikeChannel() || d.push((0, l.jsx)(sS, { channel: n }, "browser")),
                    e.isVocalThread() &&
                        (d.push((0, l.jsx)(lm, { channel: e }, "thread-call")),
                        d.push((0, l.jsx)(tU, { channel: e }, "thread-view-toggle"))),
                    d.push((0, l.jsx)(t1, { channel: e }, "notifications")),
                    d.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    e.isArchivedThread() || d.push((0, l.jsx)(i_, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && d.push((0, l.jsx)(ik, { channel: e }, "summaries")),
                    d.push((0, l.jsx)(sL, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                d.push((0, l.jsx)(sS, { channel: e }, "browser")),
                    t || d.push((0, l.jsx)(iT.A, { channel: e }, "notifications")),
                    d.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    (0, nl.PD)(e.guild_id, "channel_header") &&
                        d.push((0, l.jsx)(iv, { channelId: e.id }, "conversations")),
                    d.push((0, l.jsx)(i_, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && d.push((0, l.jsx)(ik, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                t ||
                    (d.push((0, l.jsx)(iY, { channel: e }, "forum-onboarding")),
                    d.push((0, l.jsx)(iT.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || d.push((0, l.jsx)(i_, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                d.push((0, l.jsx)(i_, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(i_, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(i_, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(i_, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: rH.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(Y.t["3aOv+h"]),
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
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tF.iN)(e.id) : void 0,
            g = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            m = d || c,
            x = a || m;
        return (0, l.jsxs)("div", {
            className: rH.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, l.jsxs)(
                            iz.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rH.DD, a, { [rH.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": Y.intl.string(Y.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tg.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tg.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: i,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: g,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: rH.u8,
                                              children: (0, l.jsx)(p.$, {
                                                  onClick: () => (0, tm.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: Y.intl.string(Y.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tg.EP)(e, i),
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
                return (0, l.jsx)(rK, { channel: e, popoutType: nn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    rY,
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
        if (i) return (0, l.jsx)(rC.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(lW.A, { guild: n, channelId: s });
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
            return (0, l.jsx)(rV, { channel: e, guild: n, sidebarState: t }, e.id);
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
            return (0, l.jsx)(rb, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, l.jsx)(lk, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(rS.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(rS.A, { channel: n }, `channel-members-${n.id}`);
                    break;
                case er.rbe.PUBLIC_THREAD:
                case er.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(eg, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === er.YvQ.CONVERSATIONS)
            switch (e.type) {
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(n_, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, l.jsx)(rq, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => il(ly.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("71898"), t.e("10585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, rE.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                case lB.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sf, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case lB.PE.VIEW_THREAD:
                    let t = n?.isForumLikeChannel() ? t6 : sk;
                    e = (0, l.jsx)(t, { channelId: i.channelId });
                    break;
                case lB.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sk, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case lB.PE.VIEW_CHANNEL:
                case lB.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== lB.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: er.da6 },
                    className: rH.uC,
                    children: (0, l.jsx)(rX, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => lH.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - er.MdR - o;
        return (
            (c += 375),
            (0, l.jsx)(rT.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rT.X.PostSidebar : rT.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(rD, {});
        if (null == e) return (0, l.jsx)(rP.A, { channelId: this.props.channelId });
        let g = a === er.YvQ.SIDEBAR_CHAT,
            m = null != o && !g,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nS.HI, { location: p, subsection: t ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rH.TE, { [rH.js]: g || m, [rH.jl]: g && h }),
                    children: [
                        x
                            ? (0, l.jsx)(ex.A, {
                                  style: { right: g ? u : void 0 },
                                  className: rH.x4,
                                  channel: e,
                                  draftType: t5.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: r()(rH.Qs, { [rH.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let r$ = (0, ep.A)(rQ),
    rZ = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, A.bG)([eG.A], () => eG.A.getChannelId()),
            c = (0, A.bG)([eG.A], () => eG.A.getVoiceChannelId()),
            x = (0, A.bG)([ek.A], () => a ?? ek.A.getChannel(o), [o, a]),
            p = (0, tc.DZ)(),
            f = (0, tc.e4)(x, "ConnectedChannel"),
            I = (0, A.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            b = f?.parent_id,
            C = (0, A.bG)([ek.A], () => ek.A.getChannel(b), [b]),
            E = (0, A.bG)([nZ.A], () => nZ.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, ir.A)(f?.id ?? void 0),
            v = (0, A.bG)([ne.A], () => {
                let e = null != o ? ne.A.getParticipants(o) : [],
                    n = null != o ? ne.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, it.A)(),
            _ = (0, A.bG)([eG.A], () => (N?.channelId ?? eG.A.getVoiceChannelId()) === f?.id),
            T = (0, A.bG)([eI.Ay], () => (null != f ? eI.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, A.bG)([r_.A], () => r_.A.isConnected()),
            R = (0, ej.A)(S),
            L = S && !1 === R;
        s.useEffect(() => {
            _ &&
                L &&
                null != T &&
                null != f &&
                j.A.selectParticipant(
                    f.id,
                    (0, e6.Qt)({ applicationId: T.applicationId, instanceId: T.compositeInstanceId }),
                );
        }, [L, f, _, T]);
        let O = (0, A.bG)([eI.Ay], () => eI.Ay.getCurrentEmbeddedActivity()),
            M = (0, A.bG)([eI.Ay], () => eI.Ay.getActivityPanelMode()),
            D = null != O && !(0, ev.A)(f?.id) && M === eZ.Gd.PANEL,
            P = (0, A.bG)(
                [tw.A, ne.A],
                () =>
                    null != f &&
                    f.isVocalThread() &&
                    !u().isEmpty(tw.A.getVoiceStatesForChannel(f.id)) &&
                    !ne.A.getForceTextView(f.id),
                [f],
            ),
            k = null != f && f.isPrivate() && !D && v,
            G = f?.isGuildVocal() || k || P,
            w = (0, A.bG)([ie.A], () => ie.A.getFrameLayoutMode() === rU.y.FOCUSED),
            { welcomeModalChannelId: U } = (0, h.zy)(),
            F = (0, A.bG)([t$.A], () => null != f && t$.A.isLurking(f.guild_id), [f]),
            H = (0, A.bG)([ry.A], () => ry.A.hasSeen(f?.guild_id, F), [f, F]),
            B = (0, A.bG)(
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
            V =
                ((n = E?.id),
                (i = (0, A.bG)([nZ.A, lE, J.default, X.Ay], () => {
                    let e = nZ.A.getGuild(n);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === lE.hasViewedPrompt(ly.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = J.default.getCurrentUser();
                    if (null == t) return null;
                    let i = X.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || il(ly.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            W =
                ((t = E?.id),
                (0, A.bG)([ek.A, nZ.A, eG.A], () => {
                    let e = nZ.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ek.A.getChannel(U);
                    return U === eG.A.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rv.ke)(n.type);
                })),
            { section: Y, channelSidebarState: z } = (0, A.cf)(
                [iE.Ay],
                () => ({ section: iE.Ay.getSection(o, f?.isDM()), channelSidebarState: iE.Ay.getSidebarState(o) }),
                [o, f],
            ),
            K = E?.id,
            q = (0, A.bG)([iE.Ay], () => iE.Ay.getGuildSidebarState(K), [K]),
            $ = (0, lN.lI)(),
            Z = (0, tu.Ay)(f),
            ee = (0, tu.Ay)(f, !0),
            en = (0, A.bG)([ne.A], () => (null != f ? ne.A.getSelectedParticipant(f.id) : null)),
            ei = (0, e8.vL)(f),
            el = (0, lV.Uf)(f),
            es = null != f && c === f.id,
            ea = null != f && f.isGuildStageVoice(),
            { enabled: ed } = ib.n.useConfig({
                location: f?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
            });
        !(function (e) {
            let { onTransition: n } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: t } = e,
                        i = (0, ey.H)(t);
                    if (null == i || !(0, ev.A)(i)) return;
                    eG.A.getVoiceChannelId() !== i && (await (0, e5.A)({ channelId: i }));
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
                if (e?.location?.state?.stageInviteKey === rF.J2) {
                    let { channelId: n } = (0, lv.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []);
        let eo = { channel: f, inCurrentVoiceChannel: es },
            ec = s.useRef(eo);
        s.useEffect(() => {
            ec.current = eo;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = ec.current;
                null != r && null != e && ea && e.id === r && !n && ((0, lY.av)(e), d(null));
            }, [r, ea]);
        let eu = (0, ef.cI)(f),
            eh = null != f && f.isPrivate(),
            eA = (0, ej.A)(eh),
            eg = (0, ej.A)(f?.id);
        s.useEffect(() => {
            let e = eA && !eh,
                n = eA && eh && f?.id !== eg;
            (e || n) && (0, to.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: i8.i.AUTO });
        }, [f?.id, eg, eh, eA]);
        let em = (0, m.useHasAnyModalOpen)();
        return (0, l.jsx)(r$, {
            guildId: f?.guild_id,
            channelId: o,
            channel: f,
            channelName: Z,
            formattedChannelName: ee,
            parentChannel: C,
            voiceChannel: I,
            layout: B,
            needSubscriptionToAccess: y,
            isLurking: F,
            hasModalOpen: em,
            section: Y,
            channelSidebarState: z,
            guildSidebarState: q,
            guild: E,
            showCall: !y && G,
            showActivityPanel: D,
            showFramePanel: w,
            channelIsContentGated: ei,
            spoilerGatingChannelId: el,
            isMobile: (0, A.bG)([Q.A], () => f?.type === er.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: (0, A.bG)([rN.A], () => f?.guild_id != null && rN.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: V,
            showWelcomeModal: !H && W,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([tw.A], () => ({ hasVideo: null != f && tw.A.hasVideo(f.id) }), [f]),
            inCall: es,
            selectedParticipant: en,
            showChannelSummaries: eu,
            showHeaderGuildBreadcrumb: p || $,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: O,
            addToDMTitleUpdate: ed,
        });
    });
