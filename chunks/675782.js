(t.r(n), t.d(n, { default: () => dE }), t(321073));
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
    g = t(554146),
    m = t(192308),
    x = t(289873),
    p = t(821609),
    f = t(43990),
    I = t(367513),
    b = t(604681),
    j = t(442433);
t(183994);
var C = t(837381),
    E = t(887129),
    y = t(607399),
    v = t(834730),
    N = t(194261),
    _ = t(312138),
    T = t(475825),
    S = t(177953),
    R = t(297264),
    L = t(414798),
    O = t(775602),
    M = t(793574),
    P = t(688810),
    D = t(449582),
    k = t(485947),
    G = t(878678),
    U = t(69282),
    w = t(657048),
    F = t(361610),
    H = t(964486),
    B = t(36124),
    V = t(317525),
    W = t(219065),
    z = t(818348),
    Y = t(375708);
let K = [];
var q = t(342296),
    X = t(616356),
    Q = t(696451),
    $ = t(290863),
    Z = t(461213),
    J = t(741961),
    ee = t(287809),
    en = t(303727),
    et = t(174459),
    ei = t(625494),
    el = t(488926),
    es = t(427262),
    ea = t(19575),
    er = t(589158),
    ed = t(652215),
    eo = t(162866),
    ec = t(4577);
let eu = ea.Ay.getEnableHardwareAcceleration(),
    eh = s.memo(function (e) {
        let { channel: n, sectionId: i, userId: a, guildOwnerId: r } = e,
            d = s.useRef(null),
            o = (0, A.bG)([J.A], () => J.A.isTyping(n.id, a)),
            c = (0, A.bG)([Q.Ay], () => Q.Ay.getMember(n.guild_id, a)),
            u = (0, A.bG)(
                [V.A],
                () => (c?.colorRoleId != null ? V.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, A.bG)([ee.default], () => ee.default.getUser(a)),
            g = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
            m = h?.id === g?.id,
            x = (0, A.bG)([$.A, Z.A], () => (m ? Z.A.getStatus() : $.A.getStatus(a, n.guild_id))),
            p = (0, A.bG)([$.A], () => $.A.isMobileOnline(a)),
            f = (0, A.yK)([$.A, Z.A], () => (m ? Z.A.getActivities() : $.A.getActivities(a, n.guild_id))),
            I = (0, A.bG)([X.A], () => X.A.getAnyStreamForUser(a)),
            b = (0, C.rm)(a),
            E = (0, A.bG)([W.A], () => W.A.canUserViewChannel(n.id, i, a)),
            v = h?.id != null && h.id === r,
            N = s.useCallback(
                (e) => {
                    null != h &&
                        (0, j.L3)(e, async () => {
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
                let e = `@${es.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                (ei._.dispatch(ed.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    ei._.dispatchToLastSubscribed(ed.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    L.A.startTyping(n.id));
            }, [h, n]),
            T = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        (0, G.K4)({
                            guildId: n.guild_id,
                            location: { section: ed.JJy.THREAD_MEMBER_LIST, object: ed.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [n.guild_id],
            ),
            S = (0, D.r)({ user: h, guildId: n.guild_id }),
            [R, O] = s.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, l.jsx)(q.A, {
            targetElementRef: d,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: y.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: _,
            shouldShow: R,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: t, onMouseDown: i, ...s } = e;
                return (0, l.jsx)(er.A, {
                    ref: d,
                    onContextMenu: N,
                    shouldAnimateStatus: eu,
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
                    selected: R,
                    applicationStream: I,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: T,
                    itemProps: b,
                    lostPermissionTooltipText: E ? void 0 : Y.intl.string(Y.t["/QcoTz"]),
                    isOwner: v,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? _?.() : O((e) => !e);
                    },
                    onMouseDown: (e) => {
                        R ? e.stopPropagation() : i?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    eA = s.memo(function (e) {
        let { id: n, label: t, count: i, guildId: s } = e,
            a = (0, U.Xx)({ roleId: n, guildId: s, size: 16 });
        return n === ed.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": Y.intl.formatToPlainString(Y.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != a ? (0, l.jsx)(w.A, { className: ec.UT, ...a }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    eg = s.memo(function (e) {
        let { channel: n } = e;
        return n.type === ed.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: eo.yF }),
                      (0, l.jsxs)(v.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: eo.Uz,
                          children: [
                              (0, l.jsx)(N.LockIcon, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              Y.intl.string(Y.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: eo.GA,
                          children: Y.intl.string(Y.t.Hsd8hC),
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
        g = `members-${c.id}`,
        { analyticsLocations: m } = (0, P.Ay)(M.A.MEMBER_LIST),
        x = (function (e, n) {
            (0, H.Ay)(() => {
                n?.id != null && (0, F.Ey)(n.id, e, B.LD);
            });
            let t = (0, A.bG)([V.A], () => (null != n ? V.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, A.cf)([W.A], () => ({
                    version: W.A.getMemberListVersion(e),
                    members: W.A.getMemberListSections(e),
                })),
                a = null == n,
                r = s.useMemo(() => {
                    if (a) return K;
                    let e = t.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: z.cl.ONLINE, label: Y.intl.string(Y.t.WbGtnH) },
                            { id: z.cl.OFFLINE, label: Y.intl.string(Y.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: n, label: t } = e;
                            return { label: t, userIds: l?.[n]?.userIds ?? [], id: n, roleId: n };
                        })
                    );
                }, [t, l, i, a]);
            return null != l ? r : K;
        })(c.id, h),
        p = x.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: I } =
            ((n = g),
            (t = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
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
                navigator: (0, E.Ay)({ id: n, setFocus: a, isEnabled: t, scrollToStart: d, scrollToEnd: o }),
                listRef: i,
            }),
        b = 0 === x.length || x.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(ed.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        b)
    )
        return (0, l.jsx)(ex, { channel: c });
    let j = u().omit(f.containerProps, ["ref"]),
        y = el.wT(h);
    return (0, l.jsx)(P.f5, {
        value: m,
        children: (0, l.jsx)(C.hD, {
            navigator: f,
            children: (0, l.jsx)(_.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: r()(ec.yg, ec.ML, eo.kL),
                        children: (0, l.jsx)(
                            T.OZ,
                            {
                                ref: I,
                                className: ec.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = x[n];
                                    return (0, l.jsx)(
                                        eA,
                                        { id: t.id, label: t.label, count: t.userIds.length, guildId: h.id },
                                        t.id,
                                    );
                                },
                                rowHeight: 42,
                                renderRow: (e) => {
                                    let { section: n, row: t } = e,
                                        { userIds: i, id: s } = x[n];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: c, sectionId: s, userId: i[t], guildOwnerId: y },
                                        i[t],
                                    );
                                },
                                footerHeight: (e) => 80 * (x[e] === p && c.type === ed.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    x[e.section] === p ? (0, l.jsx)(eg, { channel: c }, "footer") : null,
                                innerAriaLabel: Y.intl.string(Y.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: x.map((e) => e.userIds.length),
                                fade: !0,
                                ...j,
                                ...e,
                            },
                            g,
                        ),
                    }),
            }),
        }),
    });
}
function ex(e) {
    let { channel: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(eo.p$, eo.kL, ec.yg, ec.ML, ec.ol),
        children: [
            (0, l.jsx)(v.E, {
                className: eo.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: Y.intl.string(Y.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: eo.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: eo.AI,
                        children: (0, l.jsx)(S.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(en.A, { className: eo.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                children: n.isForumPost() ? Y.intl.string(Y.t.p0UgNQ) : Y.intl.string(Y.t["9/n5vz"]),
            }),
            (0, l.jsx)(v.E, {
                className: eo.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: Y.intl.string(Y.t.emw8UP),
            }),
        ],
    });
}
var ep = t(738876),
    ef = t(456412),
    eI = t(432371),
    eb = t(475743),
    ej = t(933958),
    eC = t(702841),
    eE = t(567249),
    ey = t(811024),
    ev = t(969151),
    eN = t(108959),
    e_ = t(866665),
    eT = t(446576),
    eS = t(817281),
    eR = t(95561),
    eL = t(587837),
    eO = t(850891),
    eM = t(742023),
    eP = t(204651),
    eD = t(383831),
    ek = t(128286),
    eG = t(734057),
    eU = t(309010),
    ew = t(795816),
    eF = t(685399),
    eH = t(216418),
    eB = t(620148),
    eV = t(732637),
    eW = t(104171),
    ez = t(47294),
    eY = t(594007),
    eK = t(16961),
    eq = t(138017),
    eX = t(715482),
    eQ = t(315502),
    e$ = t(573163),
    eZ = t(234320),
    eJ = t(5867),
    e0 = t(248310);
function e1(e) {
    let { channelId: n, className: t, ...i } = e,
        a = s.useRef(null),
        r = (0, A.bG)([ej.Ay], () => ej.Ay.getFocusedLayout() === eJ.E8.RESIZABLE),
        d = s.useCallback(() => {
            let e = r ? eJ.E8.NO_CHAT : eJ.E8.RESIZABLE;
            (0, ew.i5)(e);
        }, [r]),
        { unreadCount: o, mentionCount: u } = (function (e) {
            let n = (0, A.bG)([J.A], () => !(0, c.isEmpty)(J.A.getTypingUsers(e)), [e]),
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
    (0, eZ.Vo)({ event: ed.jej.FOCUS_CHAT_BUTTON, handler: h });
    let g = r ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
        m = [g];
    (u > 0 && m.push(Y.intl.formatToPlainString(Y.t["3l1GOx"], { mentionCount: u })),
        o > 0 && m.push(Y.intl.string(Y.t.x5zAGZ)));
    let x = (0, A.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        p = u > 0 ? u : o,
        f = p > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eP.l, {
                isTrayButton: !0,
                buttonRef: a,
                onClick: d,
                label: g,
                "aria-label": m.join(", "),
                tooltipPosition: "top",
                iconComponent: x === eJ.E8.NO_CHAT ? eq.j : eX.g,
                themeable: !0,
                className: t,
                ...i,
            }),
            f ? (0, l.jsx)(eQ.A, { hasMentions: u > 0, truncatedCount: p > 99 ? "99+" : p, className: e0.qS }) : null,
        ],
    });
}
var e2 = t(538303);
let e5 = eW.DN.SIZE_32,
    e6 = { [eJ.E8.NO_CHAT]: e2.Oo, [eJ.E8.RESIZABLE]: e2.Ig };
function e3(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        a = (0, eB.A)(),
        d = (0, A.yK)([ej.Ay], () => ej.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        o = (0, ev.H)(t),
        c = (0, A.bG)([eG.A], () => eG.A.getChannel(o)),
        u = (0, eF.IQ)(d),
        h = (0, eF.Rz)(u),
        g = s.useCallback(() => {
            (0, ew.gk)(eJ.Gd.PIP);
        }, []),
        m = s.useRef(null),
        x = (0, A.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        p = x !== eJ.E8.NO_CHAT,
        [I, b] = s.useState(eM.Ay.activityPanelHeight ?? n ?? null),
        j = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        C = s.useRef(null),
        [E, y] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            y({ width: C.current?.clientWidth ?? 0, height: C.current?.clientHeight ?? 0 });
        });
        return (e.observe(C.current), () => e.disconnect());
    }, []);
    let N = E.width / Math.max(E.height, 1) < eJ.B5,
        _ = 0,
        T = 0,
        S = (0, eH.A)(a?.id);
    if (!S) {
        let e = E.width,
            n = E.height;
        N
            ? ((n = E.width / eJ.B5) > E.height && (e = (n = E.height) * eJ.B5), (T = (E.height - n) / 2))
            : ((e = Math.min(E.height * eJ.B5)) > E.width && (n = (e = E.width) / eJ.B5), (_ = (E.width - e) / 2));
    }
    let R = h.get(a?.id ?? ""),
        L = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        M = (0, A.yK)(
            [Q.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => Q.Ay.getMember(c.guild_id, e)),
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
            let i = (0, eb.Ay)(e),
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
        })(p, I, n),
        k = (0, eK.G)();
    if (null == a) return null;
    let G = [];
    function U(e) {
        if (null == e || void 0 === e || e === eW.mt) return null;
        let n = P.get(e.id),
            t = n?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            e_.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e5), alt: t, className: e2.my }, e.id),
            },
            e.id,
        );
    }
    return (
        null != R &&
            (G = Array.from(R.embeddedActivity.userIds)
                .map((e) => ee.default.getUser(e))
                .filter((e) => null != e && void 0 !== e)),
        (0, l.jsx)(f.N, {
            theme: ed.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: r()(e2.iE, e6[x], e),
                    ref: m,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: a.id }),
                        (0, l.jsxs)("div", {
                            className: e2.lq,
                            children: [
                                p
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e2.wx,
                                          children: (0, l.jsx)(v.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: e2.qd,
                                              children: a?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: r()(e2.ht, { [e2.kK]: S }),
                                    style: { paddingLeft: _, paddingRight: _, paddingTop: T, paddingBottom: T },
                                    ref: C,
                                    children: (0, l.jsx)(eV.A, { className: e2.pU, embedId: (0, eY.A)(t.id, a.id) }),
                                }),
                                null != L
                                    ? (0, l.jsxs)("div", {
                                          className: e2.qr,
                                          children: [
                                              (0, l.jsx)(eW.Ay, {
                                                  renderIcon: !1,
                                                  users: G,
                                                  size: e5,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e2.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e2.qi,
                                                          children: [
                                                              (0, l.jsx)(e1, { channelId: L }),
                                                              (0, l.jsx)(eP.l, {
                                                                  isTrayButton: !0,
                                                                  label: Y.intl.string(Y.t.brPQ5U),
                                                                  onClick: g,
                                                                  iconComponent: eT.g,
                                                                  themeable: !0,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: e2.pt,
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
                                                  ? (0, l.jsx)(ek.A, {
                                                        popoutOpen: !1,
                                                        onOpenPopout: () => {
                                                            ((0, eR.zV)(ed.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                                (0, ez.A)({
                                                                    onConfirm: async () => {
                                                                        (a?.id != null &&
                                                                            null != o &&
                                                                            (await (0, ew.od)(a.id, o)),
                                                                            (0, ew.jp)());
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
                        p && null != n
                            ? (0, l.jsx)(eL.A, {
                                  minHeight: 480,
                                  maxHeight: n,
                                  resizableNode: m,
                                  onResize: (e) => {
                                      (ei._.dispatch(ed.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), b(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(ed.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), j(e));
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
        } = (0, eC.cf)([ej.Ay], () => {
            let e = ej.Ay.getConnectedActivityLocation(),
                n = ej.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, ev.H)(e),
                connectedActivity: n,
                activityPanelMode: ej.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, eC.bG)([eE.A], () => eE.A.getWindowOpen(ed.MLl.ACTIVITY_POPOUT));
    if (!(0, ey.Gp)(i)) return null;
    let d = s?.applicationId;
    return a !== eJ.Gd.PANEL || null == d || r || null == i || null == s || (0, eN.A)(i)
        ? null
        : (0, l.jsx)(e3, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e7 = t(90804),
    e4 = t(748975),
    e8 = t(323073),
    ne = t(12470),
    nn = t(811893),
    nt = t(91242),
    ni = t(672929),
    nl = t(809871),
    ns = t(241696),
    na = t(58736),
    nr = t(869146),
    nd = t(165610);
function no(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: nd.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, ni.A)(n.application_id ?? null, t),
        a = (0, eK.G)(),
        r = (0, A.bG)(
            [nr.A, nt.A],
            () => nr.A.getWindowOpen(ed.MLl.ACTIVITY_POPOUT) && null != i && nt.A.getMainFrame()?.id === i.id,
            [i],
        ),
        d = s.useCallback(() => {
            null != i && (0, ez.A)({ onConfirm: () => (0, ns.A)(i.id) });
        }, [i]),
        o = s.useCallback(() => {
            (0, ez.A)({ onConfirm: () => nl.A.popInFrame() });
        }, []);
    return (0, nd.x1)(i)
        ? r
            ? (0, l.jsx)(na.In, {
                  icon: ne._,
                  tooltip: Y.intl.string(Y.t["NKV/MO"]),
                  "aria-label": Y.intl.string(Y.t["NKV/MO"]),
                  onClick: o,
              })
            : a
              ? (0, l.jsx)(na.In, {
                    icon: nn.t,
                    tooltip: Y.intl.string(Y.t["3Zypbv"]),
                    "aria-label": Y.intl.string(Y.t["3Zypbv"]),
                    onClick: d,
                })
              : null
        : null;
}
var nc = t(568598),
    nu = t(198052),
    nh = t(164617),
    nA = t(355622),
    ng = t(689874),
    nm = t(828488),
    nx = t(939249),
    np = t(408278),
    nf = t(624479),
    nI = t(691540),
    nb = t(857250),
    nj = t(97483),
    nC = t(534890),
    nE = t(661531),
    ny = t(39623),
    nv = t(952270),
    nN = t(381849),
    n_ = t(549973),
    nT = t(957565),
    nS = t(935208),
    nR = t(256331),
    nL = t(623562),
    nO = t(958720),
    nM = t(403862);
let nP = ["high", "medium", "low"],
    nD = s.memo(function (e) {
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
                              nP.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            o = d?.severity ?? null,
            c = d?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: nM.UO,
            children: [
                (0, l.jsx)(v.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nM.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: nM.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nM.a7,
                            children: [
                                (0, l.jsx)(v.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : t ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : t ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != n &&
                                    !t &&
                                    null != n.statusReason &&
                                    (0, l.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: n.statusReason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: nM.a7,
                            children: [
                                (0, l.jsx)(v.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : i ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : i ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != n &&
                                    !i &&
                                    (0, l.jsxs)(v.E, {
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
                                    (0, l.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [o, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: nM.a7,
                            children: [
                                (0, l.jsx)(v.E, {
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
                                (0, l.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != n &&
                                    (a.passed > 0 || a.failed > 0 || a.unknown > 0) &&
                                    (0, l.jsx)(v.E, {
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
    nk = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = nS.default.extractTimestamp(n.startMessageId),
            s = nS.default.extractTimestamp(n.endMessageId),
            a = (0, n_.e)({ timestamp: i }),
            r = Math.max(1, Math.round((s - i) / 1e3)),
            d = (0, nN.WR)({ seconds: r, getFormatter: nN.i }),
            o = (0, A.bG)([nO.A], () => nO.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(nx.D, {
            className: nM.Nm,
            style: { backgroundColor: o },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: nM.PY,
                    children: [
                        (0, l.jsx)(v.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: nM.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(np.K, {
                            icon: nf.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, nT.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nI.P0)((0, nb.o)("Copied conversation JSON", nj.Ck.SUCCESS)),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: nM.FR,
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
                    (0, l.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: nM.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: nM.JP,
                        children: n.keyPoints.map((e, n) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                n,
                            ),
                        ),
                    }),
                (0, l.jsxs)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: nM.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: nM.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nM.UO,
                    children: [
                        (0, l.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nM.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: nM.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nM.a7,
                                    children: [
                                        (0, l.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.substance?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: nM.a7,
                                    children: [
                                        (0, l.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.engagement?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: nM.a7,
                                    children: [
                                        (0, l.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.dynamics?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(v.E, {
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
                (0, l.jsx)(nD, { moderation: n.moderation ?? null }),
            ],
        });
    });
function nG(e) {
    let { channel: n } = e,
        t = (0, A.bG)([nO.A], () => nO.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, A.bG)([nO.A], () => nO.A.isPendingFetch(n.id), [n.id]),
        a = (0, A.bG)([nR.A], () => nR.A.isHighlightingEnabled(), []),
        r = s.useCallback(
            (e) => {
                (0, nL.xI)(n.id, n.guild_id, e.id);
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nM.zr,
        children: [
            (0, l.jsxs)("div", {
                className: nM.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: nM.gn,
                        children: [
                            (0, l.jsx)(nC.ChatIcon, { color: nE.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(v.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: nM.y6,
                        children: (0, l.jsx)(np.K, {
                            icon: a ? ny.EyeIcon : nv.EyeSlashIcon,
                            "aria-label": a ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: nL.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: nM.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(nk, { conversation: e, onJump: r }, e.id))
                        : (0, l.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: nM.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var nU = t(268218),
    nw = t(726249),
    nF = t(228366),
    nH = t(334738),
    nB = t(208882),
    nV = t(938764),
    nW = t(519480),
    nz = t(352123),
    nY = t(687608),
    nK = t(130696);
let nq = function (e) {
    let { guild: n, onAddGuild: i } = e,
        a = s.useCallback(() => {
            (0, m.openModalLazy)(async () => {
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
                        source: ed.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: ed.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [n]);
    return (0, l.jsxs)("div", {
        className: nK.h2,
        children: [
            (0, l.jsx)("img", { className: nK.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: nK._U,
                variant: "heading-xl/semibold",
                children: Y.intl.format(Y.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(v.E, { variant: "text-md/normal", className: nK.YI, children: Y.intl.string(Y.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(nY.E, {
                      className: nK.c5,
                      iconUrl: t(928202),
                      header: Y.intl.string(Y.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(nY.E, {
                className: nK.c5,
                iconUrl: t(799258),
                header: Y.intl.string(Y.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var nX = t(683438),
    nQ = t(689175),
    n$ = t(761508),
    nZ = t(765671),
    nJ = t(22231),
    n0 = t(365199),
    n1 = t(66834),
    n2 = t(573435),
    n5 = t(101555),
    n6 = t(548118),
    n3 = t(714991),
    n9 = t(776231),
    n7 = t(345942),
    n4 = t(71393),
    n8 = t(486020),
    te = t(149790),
    tn = t(682557),
    tt = t(524058);
let ti = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(nx.D, {
        onClick: n,
        className: tt.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(v.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tt.Kk,
                children: Y.intl.string(Y.t.H9jxS1),
            }),
        ],
    });
});
function tl(e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: o } = (0, nz.A)(n);
    return (0, l.jsx)("div", {
        className: r()(tt.fc, { [tt.QX]: i }),
        children: (0, l.jsxs)(n5.Ay, {
            children: [
                o
                    ? (0, l.jsx)(e_.m, {
                          text: Y.intl.string(Y.t.XnuOvN),
                          children: (0, l.jsx)(n5.$n, {
                              onClick: () => {
                                  (0, m.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": Y.intl.string(Y.t.XnuOvN),
                              children: (0, l.jsx)(nJ.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tt.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tn.A, {
                    targetElementRef: d,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(e_.m, {
                            text: Y.intl.string(Y.t["UKOtz+"]),
                            children: (0, l.jsx)(n5.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                                children: (0, l.jsx)(n0.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tt.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let ts = s.memo(function (e) {
    let { entry: n } = e,
        [i, a] = s.useState(!1),
        r = null != (0, A.bG)([n4.A], () => n4.A.getGuild(n.guildId));
    async function d() {
        a(!0);
        try {
            r ? (0, n7.u)(n.guildId) : await n1.A.joinGuild(n.guildId, { source: ed.Q4z.DIRECTORY_ENTRY });
        } finally {
            a(!1);
        }
    }
    let o = n8.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, n9.mZ)() }),
        c = n8.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = Y.intl.string(Y.t.VJlc0S);
    return (
        r && (u = Y.intl.string(Y.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tt.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tt.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tt.Yi,
                            children: null != o && (0, l.jsx)("img", { src: o, alt: "", className: tt.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tt.$f,
                            children: (0, l.jsx)(n2.Ay, {
                                mask: n2.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tt.SA,
                                    children: (0, l.jsx)(n6.Ay, {
                                        className: tt.rZ,
                                        iconSrc: c,
                                        guild: (0, te.xi)(n),
                                        size: n6.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tt.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tt.DD,
                            children: [
                                (0, l.jsx)(n3.A, { className: tt.n2, guild: n }),
                                (0, l.jsx)(v.E, {
                                    className: tt.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(v.E, {
                            className: tt.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tt.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tt.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tt.JX }),
                                            (0, l.jsx)(v.E, {
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
                                        className: tt.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tt.Li }),
                                            (0, l.jsx)(v.E, {
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
                            className: tt.PD,
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
                (0, l.jsx)(tl, { entry: n }),
            ],
        })
    );
});
var ta = t(946116),
    tr = t(844086),
    td = t(770679);
function to(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: a, width: d } = (0, nZ.Ay)(),
        o = null != d && d <= 800;
    return (0, l.jsxs)("div", {
        ref: a,
        className: td.wx,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: td.F0,
                src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
            }),
            (0, l.jsx)("div", {
                className: td.AZ,
                children: (0, l.jsxs)("div", {
                    className: r()(td.VW, { [td.eO]: o }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            className: td.dc,
                            children: Y.intl.string(Y.t.IT7qoC),
                        }),
                        (0, l.jsx)(v.E, {
                            variant: "text-md/normal",
                            className: td.R_,
                            children: Y.intl.string(Y.t["5PoYts"]),
                        }),
                        (0, l.jsx)(f.N, {
                            theme: z.NJ.LIGHT,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: r()(td.MT, e),
                                    children: (0, l.jsx)(nX.I, {
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
}
let tc = function (e) {
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
        className: tr.$$,
        children: (0, l.jsxs)(nQ.Gt, {
            className: tr.XG,
            children: [
                (0, l.jsx)(to, { searchQuery: a, setSearchQuery: r, handleClearSearch: d, handleSearchKeyPress: o }),
                (0, l.jsx)(nQ.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(n$.V, {
                        className: td.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                n$.V.Item,
                                { className: td.YU, id: ta.mU.ALL, children: `${Y.intl.string(Y.t.hEAa2a)} (${A})` },
                                ta.mU.ALL,
                            ),
                            (0, ta.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    n$.V.Item,
                                    { className: td.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                g && null == t
                    ? (0, l.jsx)(x.y, { className: tr.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(v.E, {
                                                variant: "text-md/semibold",
                                                className: td.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tr.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(ts, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(ti, { onClick: i }) : null,
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
var tu = t(370876),
    th = t(28863),
    tA = t(364522),
    tg = t(792831),
    tm = t(211862);
let tx = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: tr.$$, children: (0, l.jsx)(x.y, { className: tr.u1 }) });
    else if (0 === o.length) {
        let e =
            null != d
                ? Y.intl.format(Y.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(th.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : Y.intl.string(Y.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tm.Je,
            children: [
                (0, l.jsx)("img", { className: tm.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: tm.gR,
                    children: Y.intl.string(Y.t["6HXiuE"]),
                }),
                (0, l.jsx)(v.E, { variant: "text-md/normal", color: "text-default", className: tm.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tr.vY, children: o.map((e) => (0, l.jsx)(ts, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tr.$$,
        children: (0, l.jsxs)(tA.Ar, {
            className: tr.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tm.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tm.Dr,
                            children: [
                                (0, l.jsx)(nx.D, {
                                    onClick: a,
                                    className: tm.UE,
                                    children: (0, l.jsx)(tg.A, { direction: tg.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tm.s7,
                                    children: Y.intl.format(Y.t.UkOHRd, { numResults: o.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(nX.I, {
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
var tp = t(650583);
let tf = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, A.cf)([nW.A], () => {
            let e = nW.A.getCurrentCategoryId(n.id),
                t = nW.A.getDirectoryEntries(n.id, e === ta.mU.ALL ? null : e),
                i = nW.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: nW.A.getDirectoryAllEntriesCount(n.id),
                isLoading: nW.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = e$.Ay.lastMessageId(n.id);
            null != e &&
                nF.h.wait(() => {
                    (0, nH.ack)(
                        n.id,
                        {
                            object: ed.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: ed.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
                          if (n !== ta.mU.ALL) return [{ entries: (0, tu._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tu.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: Y.intl.string(Y.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tu.DN)(s)).length > 0 &&
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
        } = (0, A.cf)([nV.A], () => {
            let { mostRecentQuery: e, fetching: t } = nV.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nV.A.getSearchResults(n.id, e) };
        }),
        [f, I] = s.useState(h),
        b = "" !== h,
        j = { mostRecentQuery: h },
        C = s.useRef(j);
    (s.useEffect(() => {
        C.current = j;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            (nB.Yc(n.id), nB.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(ed.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: a,
            });
        }, [n.id, i.id, a]));
    let E = (0, nz.b)(n),
        y = s.useMemo(
            () =>
                E
                    ? () => {
                          (0, m.openModalLazy)(async () => {
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
                                      currentCategoryId: a === ta.mU.ALL ? null : a,
                                  });
                          });
                      }
                    : void 0,
            [E, i.name, i.id, n.id, a],
        );
    function v(e) {
        0 !== f.trim().length &&
            e.key === tp.dh.ENTER &&
            (nB.Se(n.id, f),
            et.default.track(ed.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function N() {
        (I(""), nB.BA(n.id));
    }
    return b
        ? (0, l.jsx)(tx, {
              searchQuery: f,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: N,
              handleCreateOrAddGuild: y,
              searchResults: p,
              searchFetching: g,
          })
        : null == u && null == a
          ? (0, l.jsx)("div", { className: tr.$$, children: (0, l.jsx)(x.y, { className: tr.u1 }) })
          : u?.length === 0 && null == a
            ? (0, l.jsx)("div", { className: tr.$$, children: (0, l.jsx)(nq, { guild: i, onAddGuild: y }) })
            : (0, l.jsx)(tc, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: v,
                  handleClearSearch: N,
                  handleCreateOrAddGuild: y,
                  currentCategoryId: a,
                  handleSelectCategory: function (e) {
                      nB.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: d,
                  allEntriesCount: o,
                  isLoading: c,
              });
};
var tI = t(826673),
    tb = t(93055),
    tj = t(47167),
    tC = t(688438),
    tE = t(353428),
    ty = t(976860),
    tv = t(288254),
    tN = t(873614),
    t_ = t(649852),
    tT = t.n(t_),
    tS = t(922016),
    tR = t(980707),
    tL = t(477782),
    tO = t(789645),
    tM = t(163126),
    tP = t(182061),
    tD = t(886393),
    tk = t(307623),
    tG = t(660273),
    tU = t(707792),
    tw = t(41402),
    tF = t(271456),
    tH = t(200273),
    tB = t(565846),
    tV = t(57907),
    tW = t(375500),
    tz = t(707653),
    tY = t(50268),
    tK = t(378570),
    tq = t(162199),
    tX = t(713608),
    tQ = t(473503),
    t$ = t(901472),
    tZ = t(267102),
    tJ = t(474397),
    t0 = t(486974),
    t1 = t(39470);
function t2(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, tZ.aL)(),
        a = Y.intl.string(t1.default["Beo/7v"]),
        { firstMessage: r } = (0, tQ.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, l.jsx)(na.Ay.Icon, {
              onClick: function () {
                  null != o &&
                      ((0, tK.iN)(n.id),
                      (0, tJ.A)(),
                      (0, t$.z)(n.guild_id, o, n.id, {
                          modViewPanel: t0.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(ed.jej.POPOUT_CLOSE));
              },
              tooltip: a,
              icon: tX.q,
              "aria-label": a,
          })
        : null;
}
var t5 = t(780338),
    t6 = t(782603),
    t3 = t(857071),
    t9 = t(607508),
    t7 = t(914703),
    t4 = t(37411);
function t8(e) {
    let { channel: n } = e,
        t = (0, t9.X)(n),
        [i, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, A.bG)([t3.A], () => null != n.guild_id && t3.A.isLurking(n.guild_id));
    if (
        (s.useEffect(() => {
            function e() {
                return a(!0);
            }
            return (
                ei._.subscribe(ed.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    ei._.unsubscribe(ed.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        d)
    )
        return null;
    let o = Y.intl.string(Y.t.h850Ss);
    return (0, l.jsx)(tS.Y, {
        targetElementRef: r,
        shouldShow: i,
        animation: tS.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, l.jsx)(t7.A, { ...e, channel: n, navId: "thread-context", label: Y.intl.string(Y.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(na.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: i ? null : o,
                icon: t === t4.CP.NO_MESSAGES ? t5.BellSlashIcon : t6.BellIcon,
                "aria-label": o,
                selected: i,
            });
        },
    });
}
var ie = t(747926);
function it(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, l.jsx)(tS.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tS.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(ii, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(na.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: n0.MoreHorizontalIcon,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function ii(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tG.A)(n, "Sidebar Overflow"),
        a = (0, tw.A)(n),
        r = (0, tV.A)(n),
        d = (0, tW.A)(n),
        o = (0, tP.A)(n),
        c = (0, tU.A)(n),
        u = (0, tB.A)(n.id),
        h = (0, tH.A)(n),
        A = (0, tk.A)(n),
        g = (0, tD.A)(n),
        m = (0, tY.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        x = (0, tz.A)(n),
        p = (0, tF.A)(n),
        f = (0, tM.$)(1e3);
    function I() {
        (0, tK.iN)(n.id);
    }
    function b(e) {
        let t = tT()(() => {
            (ei._.unsubscribe(ed.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        (ei._.subscribe(ed.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                ei._.unsubscribe(ed.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(tR.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tL.rX, {
                children: [s, (0, l.jsx)(tL.Dr, { id: "open", label: Y.intl.string(Y.t.IxVmZi), action: I })],
            }),
            (0, l.jsxs)(tL.rX, { children: [r, d] }),
            (0, l.jsxs)(tL.rX, { children: [h, a, u, p] }),
            (0, l.jsxs)(tL.rX, {
                children: [
                    (0, l.jsx)(tL.Dr, {
                        id: "search",
                        label: Y.intl.string(Y.t["5h0QOP"]),
                        icon: nn.t,
                        trailingIndicator: { type: "icon", icon: nn.t },
                        action: function () {
                            (b(() => {
                                ei._.dispatch(ed.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I());
                        },
                    }),
                    (0, l.jsx)(tL.Dr, {
                        id: "pins",
                        label: Y.intl.string(Y.t["2BSH7n"]),
                        icon: nn.t,
                        trailingIndicator: { type: "icon", icon: nn.t },
                        action: function () {
                            (b(() => {
                                ei._.dispatch(ed.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(tL.rX, { children: [x, o, c, A] }),
            (0, l.jsxs)(tL.rX, { children: [g, m] }),
        ],
    });
}
function il(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(na.Ay.Icon, {
            icon: tO.P,
            tooltip: Y.intl.string(Y.t.cpT0Cq),
            onClick: () => (0, ie.xu)((0, tq.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(t8, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(t2, { channel: n }) : null,
                  (0, l.jsx)(it, { channel: n }),
                  i,
              ],
          });
}
var is = t(31717),
    ia = t(853742),
    ir = t(85190);
function id(e) {
    let { channelId: n } = e,
        i = (0, A.bG)([eG.A], () => eG.A.getChannel(n)),
        a = (0, A.bG)([eG.A], () => eG.A.getChannel(i?.parent_id)),
        r = (0, A.bG)([n4.A], () => n4.A.getGuild(i?.getGuildId())),
        d = (0, tj.Ay)(i),
        o = (0, tv.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, ia.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    if (null != o) return (0, l.jsx)(tN.A, { guild: r, channelId: o });
    let u = (0, l.jsx)(il, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep.A, { channel: i, draftType: is.C.ChannelMessage }),
            (0, l.jsx)(na.Ay, {
                toolbar: u,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tE.zF)({
                    channel: i,
                    parentChannel: a,
                    channelName: d,
                    guild: r,
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
                        null != i && (0, ty.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ir.T,
                children: (0, l.jsx)(tC.A, { channel: i, guild: r, chatInputType: nA.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var io = t(925166),
    ic = t(605117),
    iu = t(857253),
    ih = t(872363);
let iA = function (e, n) {
    nF.h.wait(() => {
        nF.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var ig = t(561446),
    im = t(300233),
    ix = t(499211),
    ip = t(468689),
    iI = t(529942),
    ib = t(739455),
    ij = t(709017);
function iC(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: ij.t7,
        children: (0, l.jsxs)("div", {
            className: ij.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: ij.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["8gJGPs"]) }),
                        (0, l.jsx)(v.E, {
                            variant: "text-sm/normal",
                            className: ij.G3,
                            children: Y.intl.string(Y.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ij.__invalid_button,
                            children: (0, l.jsx)(p.$, {
                                variant: "primary",
                                text: Y.intl.string(Y.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iI.rf)(n),
                                        ip.A.open(n, ed.BEX.ROLE_SUBSCRIPTIONS, void 0, ed.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, ib.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iE = t(599941),
    iy = t(29385),
    iv = t(950344),
    iN = t(217530),
    i_ = t(162093),
    iT = t(325348);
function iS(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iy.e)({ guildId: n, channelId: t }),
        a = (0, iE.uk)(n),
        r = (0, iE.Tq)(n),
        d = (0, A.bG)([n4.A], () => n4.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, A.bG)([eG.A], () => eG.A.getChannel(t)),
        u = (0, tj.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of a) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [a]);
    return ((0, iv.A)({
        guildId: n,
        location: ed.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == d)
        ? (0, l.jsx)("div", {
              className: iT.__invalid_spinnerContainer,
              children: (0, l.jsx)(x.y, { className: iT.__invalid_spinner }),
          })
        : (0, l.jsxs)(tA.Ar, {
              className: iT.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iT.DX,
                      children: Y.intl.format(Y.t.xHMpym, { serverName: o, channelName: u }),
                  }),
                  (0, l.jsx)(v.E, {
                      className: iT.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, l.jsx)(iN.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  i_.A,
                                  {
                                      guildId: n,
                                      listingId: e.id,
                                      groupListingId: h[e.id],
                                      analyticsLocation: ed.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
var iR = t(138298),
    iL = t(940382),
    iO = t(761640);
function iM(e) {
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
        i = (0, A.bG)([iO.Ay], () => iO.Ay.getCurrentSidebarChannelId(n) === n, [n]),
        a = (0, A.bG)([eG.A], () => eG.A.getChannel(n)?.getGuildId(), [n]);
    return (0, l.jsx)(na.In, {
        tooltip: i ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
        icon: nC.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? iR.A.closeChannelSidebar(n)
                : iR.A.openChannelAsSidebar({
                      guildId: a,
                      channelId: n,
                      baseChannelId: n,
                      details: { type: iL.kk.CHAT },
                  });
        },
        selected: i,
        badge: t,
    });
}
var iP = t(284252);
function iD(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([iO.Ay], () => iO.Ay.getSection(n), [n]) === ed.YvQ.CONVERSATIONS,
        i = (0, A.bG)([nO.A], () => (nO.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        a = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(na.In, {
        onClick: b.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nC.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iP.q : void 0,
        selected: t,
        badge: a,
    });
}
var ik = t(967198);
function iG(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([iO.Ay], () => iO.Ay.getSection(n)),
        i = (0, A.bG)([ik.A], () => ik.A.getGuildId()),
        s = t === ed.YvQ.MEMBERS;
    return (0, l.jsx)(na.In, {
        tooltip: s ? Y.intl.string(Y.t.Axvx8c) : Y.intl.string(Y.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(ed.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                b.A.toggleMembersSection());
        },
        selected: s,
    });
}
var iU = t(187360),
    iw = t(366605),
    iF = t(945830);
let iH = function (e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        [i, a] = s.useState(!1),
        r = (0, tZ.aL)(),
        d = s.useRef(null),
        o = s.useCallback(() => {
            t || a((e) => !e);
        }, [t]),
        c = (0, A.bG)([e$.Ay], () => e$.Ay.hasUnreadPins(n.id), [n]),
        u = s.useMemo(() => (c ? { type: "unread", position: "bottom" } : void 0), [c]);
    function h(e) {
        e?.shiftKey || r.dispatch(ed.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                ei._.subscribe(ed.jej.TOGGLE_CHANNEL_PINS, o),
                () => {
                    ei._.unsubscribe(ed.jej.TOGGLE_CHANNEL_PINS, o);
                }
            ),
            [o],
        ),
        (0, l.jsx)(tS.Y, {
            targetElementRef: d,
            shouldShow: i,
            animation: tS.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => a(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(iF.A, { ...e, onJump: h, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(na.In, {
                    ...e,
                    ref: d,
                    onClick: o,
                    tooltip: i ? null : Y.intl.string(Y.t["mp1N/2"]),
                    icon: iw.t,
                    iconSize: 20,
                    "aria-label": Y.intl.string(Y.t["mp1N/2"]),
                    disabled: t,
                    badge: u,
                    selected: i,
                });
            },
        })
    );
};
var iB = t(306788),
    iV = t(863922),
    iW = t(822074),
    iz = t(521732);
function iY(e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        i = (0, A.bG)([iW.A], () => iW.A.shouldShowTopicsBar());
    return (0, l.jsx)(na.Ay.Icon, {
        icon: iB.K,
        onClick: function () {
            (et.default.track(ed.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iz.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, iV.Oz)());
        },
        tooltip: i ? Y.intl.string(Y.t.nGs3kO) : Y.intl.string(Y.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var iK = t(885574),
    iq = t(947094),
    iX = t(919577),
    iQ = t(207777),
    i$ = t(422844),
    iZ = t(435470),
    iJ = t(892110),
    i0 = t(45494);
function i1(e) {
    let { channel: n } = e,
        t = (0, iZ.S4)(n),
        i = (0, A.bG)([iq.A], () => iq.A.hasHidden(n.id)),
        s = (0, iJ.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, i$.R)(n.id),
        o = (0, A.bG)(
            [iQ.A, i0.A],
            () => !!(iQ.A.getThreadIds(n.id, a, r, d).length > 0) || !!(i0.A.getThreads(n.id, a, r, d).length > 0),
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
    return (0, l.jsx)(na.In, {
        tooltip: u,
        icon: iK.CircleInformationIcon,
        onClick: function () {
            return iX.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var i2 = t(290136),
    i5 = t(975571),
    i6 = t(490094);
function i3() {
    let e = Y.intl.string(i6.default.pdipXI);
    return (0, l.jsx)(na.In, {
        tooltip: e,
        icon: i2.CircleQuestionIcon,
        onClick: function () {
            window.open(i5.A.getArticleURL(ed.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var i9 = t(742589),
    i7 = t(43105),
    i4 = t(428689),
    i8 = t(978940),
    le = t(387755),
    ln = t(730852),
    lt = t(641703),
    li = t(379848),
    ll = t(753727),
    ls = t(625075),
    la = t(222692),
    lr = t(442353),
    ld = t(470710),
    lo = t(186111),
    lc = t(544576),
    lu = t(994500),
    lh = t(977997),
    lA = t(360469),
    lg = t(49999),
    lm = t(731854);
class lx extends s.PureComponent {
    iconRef = s.createRef();
    componentDidMount() {
        ei._.subscribe(ed.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        ei._.unsubscribe(ed.jej.CALL_START, this.handleVoiceClick);
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
        if (n || (t && r === ed._Of.VOICE)) return null;
        let o = a.isManaged(),
            c = null,
            u = !1;
        return (
            d
                ? ((u = !0), (c = Y.intl.string(Y.t.izMR7o)))
                : lc.Ay.supports(lm.O5.VIDEO)
                  ? s
                      ? ((c = Y.intl.string(Y.t.PHzjvX)), (u = !0))
                      : t && r === ed._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.oCqlGG)))
                  : ls.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = Y.intl.string(Y.t.UVpg3U)))
                    : ((u = !0), (c = Y.intl.string(Y.t.UoW002))),
            (0, l.jsx)(na.Ay.Icon, { icon: i4.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(na.Ay.Icon, {
            ref: this.iconRef,
            icon: i8._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(li.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === g.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(i7.A, {
                                  targetElementRef: this.iconRef,
                                  title: Y.intl.string(Y.t.HOPqzR),
                                  body: Y.intl.format(Y.t.xAW71b, { helpdeskUrl: lA.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lg.i.USER_DISMISS),
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
            return le.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lr.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        ln.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(g.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tI.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lg.i.AUTO }),
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
        (0, lr.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, la.A)();
    };
}
function lp(e) {
    let { channel: n } = e,
        t = (0, ll.A)(),
        i = (0, A.bG)([nu.A], () => nu.A.getMode(n.id)),
        s = (0, A.bG)([lh.A], () => lh.A.isInChannel(n.id)),
        a = (0, A.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, A.cf)([ld.A], () => ({
            callActive: ld.A.isCallActive(n.id),
            callUnavailable: ld.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([lu.A], () => ({
            notFriend: n.type === ed.rbe.DM && null != o && !lu.A.isFriend(o),
            isBlocked: n.type === ed.rbe.DM && null != o && lu.A.isBlocked(o),
        })),
        h = (0, A.bG)([ee.default], () => ee.default.getUser(o)),
        m = (0, tZ.Us)(),
        x = [],
        p = (0, lt.A)(n.id),
        f = (0, A.bG)([lo.A], () => lo.A.hasLayers());
    return (p && !f && x.push(g.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lx, {
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
var lf = t(452015),
    lI = t(765178),
    lb = t(231483),
    lj = t(544231),
    lC = t(338510),
    lE = t(151119),
    ly = t(278941),
    lv = t(665909),
    lN = t(327337);
let l_ = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lC.u)(n.id),
        a = (0, lE.S)(n.id),
        r = (0, ly.e)(n.id),
        d = (0, m.useHasAnyModalOpen)(),
        o = (0, A.bG)([lo.A], () => lo.A.hasLayers()),
        c = s.useCallback(
            () => (a ? Y.intl.string(Y.t["16QyDv"]) : null != r ? Y.intl.string(Y.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, g] = s.useState(c());
    (s.useEffect(() => {
        (null != r &&
            null != i &&
            (lI.O.announce(Y.intl.string(Y.t.acsXuG)),
            setTimeout(() => {
                (0, lj.xi)(n.id, [r.id]);
            }, 5e3),
            (0, lv.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: lv.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (lI.O.announce(Y.intl.string(Y.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lj.bg)(n.id);
                }, 5e3)));
    }, [n, r, i, a]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lv.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: lv.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && g(e);
        }, [a, r, c]));
    let x = s.useCallback(() => {
        (null != r && (0, lj.xi)(n.id, [r.id]),
            null != i &&
                ((0, m.openModalLazy)(
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
                    { modalKey: lN.V },
                ),
                (0, lv._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lv.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != r,
                })));
    }, [r, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(e_.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(na.Ay.Icon, {
                  icon: lb.ShieldIcon,
                  onClick: x,
                  tooltip: Y.intl.string(Y.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var lT = t(262763),
    lS = t(406704),
    lR = t(576705);
let lL = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, ll.A)(),
        i = (0, A.bG)([lh.A], () => lh.A.isInChannel(n.id)),
        a = (0, A.bG)([lh.A], () => !u().isEmpty(lh.A.getVoiceStatesForChannel(n.id))),
        r = (0, A.bG)([lR.A], () => lR.A.can(ed.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, ix.A)(n.id),
        o = (0, lS.Id)(n),
        { enabled: c } = lS.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lT.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: d, locked: !1 });
        }, [n, i, d]);
    return (s.useEffect(() => {
        if (c)
            return (
                ei._.subscribe(ed.jej.CALL_START, h),
                () => {
                    ei._.unsubscribe(ed.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !t && !i && r && o && n.isVocalThread())
        ? (0, l.jsx)(na.Ay.Icon, {
              icon: i8._,
              onClick: h,
              tooltip: a ? Y.intl.string(Y.t.fdEeb5) : Y.intl.string(Y.t.focH1t),
          })
        : null;
});
var lO = t(812991),
    lM = t(47675),
    lP = t(999291);
function lD() {
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
function lk(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, A.bG)([iO.Ay], () => iO.Ay.getSection(n.id, n?.isDM())),
        s = (0, lP.Ay)(n.getRecipientId()),
        a = lD(),
        r = i === ed.YvQ.PROFILE && a;
    return (0, l.jsx)(na.In, {
        disabled: !a || t,
        tooltip: !a || t ? Y.intl.string(Y.t.YneDgF) : r ? Y.intl.string(Y.t.niD64e) : Y.intl.string(Y.t["+FAsHq"]),
        icon: lO.n,
        onClick: function () {
            ((0, lM.am)({ displayProfile: s, isProfileOpen: !r }), b.A.toggleUserProfileSidebarSection());
        },
        selected: r && !t,
    });
}
let lG = {};
class lU extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            lG[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = lG[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return lG;
    }
}
let lw = new lU(nF.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = lG[t];
        return null == i ? ((lG[t] = new Set()), lG[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != lG[n.id] && !n.unavailable && (delete lG[n.id], !0);
    },
});
var lF = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lH = t(376943),
    lB = t(394953),
    lV = t(683063),
    lW = t(403581),
    lz = t(241541),
    lY = t(709066),
    lK = t(87664),
    lq = t(247676),
    lX = t(695526);
t(667532);
var lQ = t(403362);
t(696101);
let l$ = [],
    lZ = ea.Ay.getEnableHardwareAcceleration();
function lJ(e) {
    let { user: n, channel: i, status: a, activities: r } = e,
        d = (0, A.bG)([J.A], () => null != J.A.getTypingUsers(i.id)[n.id]),
        o = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, A.bG)([$.A], () => $.A.isMobileOnline(n.id)),
        u = (0, A.bG)([lu.A], () => lu.A.getNickname(n.id)),
        h = (0, lK.A)(n.id),
        g = s.useRef(null);
    function m(e) {
        (0, j.L3)(e, async () => {
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
        let e = `@${es.Ay.getUserTag(n, { decoration: "never" })}`,
            t = `<@${n.id}>`;
        (ei._.dispatch(ed.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(ed.jej.INSERT_TEXT, { plainText: e, rawText: t }),
            L.A.startTyping(i.id));
    }
    let p = (0, D.r)({ user: n }),
        [f, I] = s.useState(!1);
    return (0, l.jsx)(q.A, {
        targetElementRef: g,
        user: n,
        channelId: i.id,
        position: y.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: x,
        shouldShow: f,
        onRequestClose: () => I(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...A } = e;
            return (0, l.jsx)(
                er.A,
                {
                    ref: g,
                    user: n,
                    currentUser: o,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: Y.intl.string(Y.t["MRXZ+x"]),
                    shouldAnimateStatus: lZ,
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
function l0(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function l1(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: a } = (0, P.Ay)(M.A.MEMBER_LIST),
        { listItems: r } = (0, A.bG)(
            [lu.A, ee.default, $.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(lQ.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lu.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: $.A.getStatus(e.id) ?? ed.clD.OFFLINE,
                              activities: $.A.getActivities(e.id) ?? l$,
                          })
                        : (l[e.id] = { status: ed.clD.OFFLINE, activities: l$ });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            l0,
        );
    s.useEffect(() => {
        et.default.track(ed.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let d = i && r.every((e) => e.user.isStaff()),
        o = (0, m.useHasAnyModalOpen)(),
        c = (0, lq.A)({ useNitroCapExperiment: !0 }),
        h = (0, lX.qH)(),
        g = n.isMultiUserDM() && "entitled" === h && c > ed.wLU;
    return (0, l.jsx)(P.f5, {
        value: a,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tA.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                g
                                    ? (0, l.jsx)(lV.u, {
                                          title: Y.intl.string(Y.t.u1ilug),
                                          body: Y.intl.format(Y.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(lW.t, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                      className: ec.K4,
                                                      "aria-hidden": !0,
                                                  }),
                                                  `${Y.intl.string(Y.t["9Oq93m"])}\u{2014}${r.length} `,
                                              ],
                                          }),
                                      })
                                    : `${Y.intl.string(Y.t["9Oq93m"])}\u{2014}${r.length} `,
                                d && (0, l.jsx)(lY.A, { type: lY.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lJ,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        r.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lf.NE, {
                                      channel: n,
                                      text: Y.intl.string(Y.t.NB5DFD),
                                      icon: lz.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !o,
                                      entryPointType: lf.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var l2 = t(322338),
    l5 = t(898029),
    l6 = t(36537);
function l3() {
    return (0, l.jsx)("div", {
        className: l6.zt,
        children: (0, l.jsx)("header", {
            className: l5.wL,
            children: (0, l.jsxs)("div", {
                className: l5.TN,
                role: "status",
                children: [
                    (0, l.jsx)(v.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: Y.intl.string(Y.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: l5.zp,
                        children: (0, l.jsx)(x.y, {
                            type: x.y.Type.SPINNING_CIRCLE,
                            className: l5.u1,
                            itemClassName: l5.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var l9 = t(790535),
    l7 = t(163328),
    l4 = t(425557),
    l8 = t(270003),
    se = t(150934),
    sn = t(452027),
    st = t(95477),
    si = t(281595),
    sl = t(465532),
    ss = t(579872),
    sa = t(119031),
    sr = t(408018),
    sd = t(865107),
    so = t(822610),
    sc = t(915089),
    su = t(314307),
    sh = t(636922),
    sA = t(931664),
    sg = t(631576),
    sm = t(885386),
    sx = t(232835),
    sp = t(522602),
    sf = t(806150),
    sI = t(518960),
    sb = t(753738);
function sj(e, n) {
    return { type: e, message: n ?? null };
}
function sC(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sE = t(659617),
    sy = t(474078),
    sv = t(636537),
    sN = t(152367),
    s_ = t(147087);
async function sT(e) {
    try {
        let n = await sv.Bo.post({
            url: ed.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, sv.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var sS = t(55294),
    sR = t(143161),
    sL = t(909833);
let sO = nA.oU.THREAD_CREATION;
function sM(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, A.bG)([eG.A], () => eG.A.getChannel(n)),
        { analyticsLocations: a } = (0, P.Ay)(M.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: a,
              children: (0, l.jsx)(eZ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": Y.intl.string(Y.t.rBIGBL),
                      className: sR.kL,
                      children: [
                          (0, l.jsx)(ep.A, { channel: s, draftType: is.C.FirstThreadMessage }),
                          (0, l.jsx)(sP, { parentChannelId: n }),
                          (0, l.jsx)(sD, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function sP(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = is.A.getThreadSettings(n),
                t = is.A.getDraft(n, is.C.FirstThreadMessage).trim(),
                i = sp.A.getUploads(n, is.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? ss.A.show({
                      title: Y.intl.string(Y.t["6kDZh1"]),
                      body: Y.intl.string(Y.t.NgS9jX),
                      confirmText: Y.intl.string(Y.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: Y.intl.string(Y.t["olcKd/"]),
                      onConfirm: () => {
                          (0, ie.bA)(n);
                      },
                  })
                : (0, ie.bA)(n);
        }, [n]);
    return (0, l.jsxs)(na.Ay, {
        toolbar: (0, l.jsx)(na.Ay.Icon, { icon: tO.P, tooltip: Y.intl.string(Y.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(na.Ay.Icon, { icon: l7.y, disabled: !0, "aria-label": Y.intl.string(Y.t["7Xm5QI"]) }),
            (0, l.jsx)(na.Ay.Title, { children: Y.intl.string(Y.t["4WNcpu"]) }),
        ],
    });
}
function sD(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: a } = e,
        d = (0, A.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        o =
            ((n = s.useContext(eZ.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, A.bG)([is.A], () => is.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sl.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(t, i),
        { textAreaState: g, setTextAreaState: m } = (function (e, n) {
            let [t, i] = s.useState((0, sr.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = is.A.getDraft(e.id, is.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sr.ur)(l)), n(is.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        is.A.addChangeListener(t),
                        () => {
                            is.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        x = (0, sE.EN)(t),
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
                h = (0, s_.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = sx.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await sT(e);
                                null != n && "" !== n.trim() && i({ name: n });
                            }
                        } finally {
                            o(!1);
                        }
                    }
                }, [n.id, t, i, h, r.textValue]);
            (s.useEffect(() => {
                (u(!1), o(!1), n.id === a.parentChannelId && t !== a.parentMessageId && i({ name: "" }));
            }, [t, i, n.id, a.parentChannelId, a.parentMessageId]),
                s.useEffect(() => {
                    (null != a.name && "" !== a.name.trim()) || c || (h && null != t && (u(!0), A()));
                }, [n.id, t, i, a.name, c, h, A]));
            let g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: sN.D,
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
                            ? (0, l.jsx)(e_.m, {
                                  text: Y.intl.string(Y.t.ZF2oBs),
                                  children: (0, l.jsx)(np.K, {
                                      icon: sN.D,
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
                [A, g] = s.useState(!1),
                m = (0, sS.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: r,
                    onThreadCreated: ie.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: o,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        (g(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = sA.A.getStickerPreview(n.id, sO.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sp.A.getUploads(n.id, is.C.FirstThreadMessage)));
                        let r = (i.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(o ? sj(0, Y.intl.string(Y.t.uXA573)) : null),
                            h(u ? sj(0, Y.intl.string(Y.t.kesTVT)) : null),
                            o || u)
                        )
                            return (g(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: x } = await (0, sf.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sO,
                            channel: null == t ? n : null,
                        });
                        if (!x) return (g(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await m(e, l, s);
                        } catch (e) {
                            if (e.body?.code === ed.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), sj(1, (0, sb.cw)(p, n?.id))));
                            } else
                                e.body?.code === ed.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sj(2, Y.intl.string(Y.t.uXA573)));
                            return (g(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sg.x5)(n.id, sO.drafts.type), g(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        y = (0, sE.Iy)(c, x) ? l4.t : l7.y;
    return (0, l.jsx)("div", {
        className: sR.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, l.jsx)("div", {
            className: r()(sR.Og, `group-spacing-${d}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: sR.Zd,
                children: [
                    (0, l.jsx)(tA.Ip, {
                        className: sR.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sR.bv,
                            children: [
                                (0, l.jsxs)(su.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(sL.P0, sR.P0),
                                            children: (0, l.jsx)(y, { className: sL.Kk }),
                                        }),
                                        (0, l.jsxs)(l8.n, {
                                            children: [
                                                (0, l.jsx)(sG, {
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
                                                (0, l.jsx)(sk, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: x,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sw, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sR.Eh,
                        children: [
                            (0, l.jsx)(sU, {
                                parentChannel: t,
                                textAreaState: g,
                                setTextAreaState: m,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(sa.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sR.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sk(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        a = (0, sE.Iy)(t, s),
        r = (0, l.jsx)(se.S, {
            disabled: s === sE.jk.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: Y.intl.string(Y.t.TRPp3g),
        });
    return n || s === sE.jk.Disabled
        ? null
        : (0, l.jsx)(sn.D, {
              label: Y.intl.string(Y.t.F1zyvU),
              helperText: a ? Y.intl.string(Y.t.EWXycz) : void 0,
              children: r,
          });
}
function sG(e) {
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
        h = sC(a, { content: u }),
        A = (0, sE.l1)(n, t),
        g = null != t && !o,
        m = (0, sc.GV)(),
        x = o ? Y.intl.string(Y.t["Nb2/RE"]) : "" !== A ? A : Y.intl.string(Y.t["Nb2/RE"]);
    return (0, l.jsx)(st.k, {
        label: Y.intl.string(g ? Y.t.JPvIiL : Y.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: m,
        placeholder: x,
        maxLength: ed.Ign,
        onChange: function (e) {
            (s({ name: (0, sy.A)(e, !1) }), "" !== e ? L.A.startTyping(n.id) : L.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, sy.A)(u, !0);
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
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        g = s.useCallback(() => c(!1), []),
        m = s.useCallback(
            (e, t, l) => {
                (sl.A.saveDraft(n.id, t, is.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? L.A.startTyping(n.id) : "" === t && L.A.stopTyping(n.id),
                            { textValue: t, richValue: l }
                        ),
                    ));
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
    ((0, eZ.Vo)({ event: ed.jej.TEXTAREA_FOCUS, handler: h }), (0, eZ.Vo)({ event: ed.jej.TEXTAREA_BLUR, handler: g }));
    let p = (0, A.bG)([lR.A], () => lR.A.can(ed.xBc.ATTACH_FILES, n)),
        f = sC(d, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(so.A, { channelId: n.id, type: sO, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sR.xN, children: (0, l.jsx)(si.U, { error: f }) }),
            (0, l.jsx)(sd.Ay, {
                type: sO,
                channel: n,
                placeholder: Y.intl.string(Y.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sR.gM, sR.Yy),
                innerClassName: r()(sR.SL, { [sR.cr]: null != f }),
                onFocus: h,
                onBlur: g,
                onChange: m,
                onSubmit: x,
                promptToUpload: sI.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sw(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, A.bG)([sx.A], () => (null == t ? null : sx.A.getMessage(n.id, t))),
        s = sm.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sh.A, {
              className: sR.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sF = t(305866),
    sH = t(707539),
    sB = t(702513),
    sV = t(272736);
function sW(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e8.ni)(n),
        d = s.useCallback(() => {
            i(!1);
        }, []),
        o = s.useCallback(() => {
            (t || (0, sH.D3)("Popout"), i(!t));
        }, [t]);
    return (0, l.jsx)(tS.Y, {
        targetElementRef: a,
        animation: tS.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: t,
        onRequestClose: d,
        renderPopout: function () {
            return (0, l.jsx)(sF.l, {
                children: (0, l.jsx)(sB.A, { className: sV.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(na.In, {
                ...e,
                ref: a,
                className: sV.Kk,
                onClick: o,
                icon: l7.y,
                "aria-label": Y.intl.string(Y.t.B2panI),
                tooltip: t ? null : Y.intl.string(Y.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sz = t(40389),
    sY = t(148494),
    sK = t(56562);
function sq(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, l.jsx)(tS.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tS.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(sX, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(na.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: n0.MoreHorizontalIcon,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function sX(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, tP.A)(n),
        a = (0, tU.A)(n),
        r = (0, tB.A)(n.id),
        d = (0, tH.A)(n),
        o = (0, tY.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        c = (0, tD.A)(n),
        h = (0, tk.A)(n),
        g = (0, tG.A)(n, "Toolbar Overflow"),
        m = (0, tw.A)(n),
        x = (0, sz.A)(n),
        p = (0, tz.A)(n),
        f = (0, tF.A)(n),
        I = n.isThread()
            ? (0, l.jsx)(tL.Dr, {
                  id: "jump-to-top",
                  label: Y.intl.string(Y.t.nFP4oa),
                  action: function () {
                      sY.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: sK.vx.INSTANT });
                  },
              })
            : null,
        b = sm.SY.useSetting(),
        j = (0, A.bG)([lh.A], () => !u().isEmpty(lh.A.getVoiceStatesForChannel(n.id))),
        C = (0, A.bG)([eG.A], () => null != n.parent_id && eG.A.getChannel(n.parent_id)?.type === ed.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(tR.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(tL.rX, { children: [g, x] }),
            (0, l.jsxs)(tL.rX, {
                children: [
                    I,
                    d,
                    m,
                    r,
                    !b || j || C
                        ? null
                        : (0, l.jsx)(tL.Dr, {
                              id: "open",
                              label: Y.intl.string(Y.t.bX7EaG),
                              action: function () {
                                  (0, ie.JA)(n);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(tL.rX, { children: [p, s, a, h] }),
            (0, l.jsxs)(tL.rX, { children: [c, o] }),
        ],
    });
}
var sQ = t(332456),
    s$ = t(973854),
    sZ = t(62502);
function sJ(e) {
    var n;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, A.bG)([eG.A], () => eG.A.getChannel(a)),
        c = (0, A.bG)([n4.A], () => n4.A.getGuild(o?.getGuildId())),
        h = (0, tj.Ay)(o),
        g = (0, tv.Uf)(o);
    ((n = o),
        (i = (0, A.bG)([lh.A], () => null != n && !u().isEmpty(lh.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (nF.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tK.N9)(n, { source: t4.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let m = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || m.current) return;
            m.current = !0;
            let e = (0, sQ.C)(eG.A.getChannel(o.id), !0);
            ((0, eR.zV)(ed.HAw.CHANNEL_OPENED, { ...e, ...(0, eR.qL)(o.id), channel_view: d }),
                (0, s$.A)({ channelId: o.id }));
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    if (null != g) return (0, l.jsx)(tN.A, { guild: c, channelId: g });
    let x = (0, l.jsx)(il, { channel: o, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep.A, { channel: o, draftType: is.C.ChannelMessage }),
            (0, l.jsx)(na.Ay, {
                toolbar: x,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tE.zF)({
                    channel: o,
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
                            return (n) => (0, l.jsx)(e, { ...n, channel: o });
                        });
                    },
                    handleClick: function () {
                        null != o && (0, tK.iN)(o.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: sZ.T,
                children: (0, l.jsx)(tC.A, { channel: o, guild: c, chatInputType: nA.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var s0 = t(210714),
    s1 = t(402860),
    s2 = t(707554),
    s5 = t(140735),
    s6 = t(590180),
    s3 = t(372320),
    s9 = t(562153),
    s7 = t(945810);
let s4 = (0, s7.mj)({
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
    ao = t(365607),
    ac = t(915614),
    au = t(308244),
    ah = t(743987),
    aA = t(900179),
    ag = t(946356),
    am = t(465829),
    ax = t(35241),
    ap = t(587168),
    af = t(442228),
    aI = t(744808);
let ab = (0, s7.mj)({
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
        (a(), (0, lM.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: aj.lS,
            children: (0, l.jsx)(p.$, {
                variant: "secondary",
                size: "md",
                fullWidth: !0,
                text: Y.intl.string(Y.t["+Xp3hq"]),
                onClick: d,
            }),
        });
    let o = r
        ? (0, l.jsx)("div", {
              className: aj.qr,
              children: (0, l.jsx)(nx.D, {
                  onClick: d,
                  className: aj.wC,
                  children: (0, l.jsx)(v.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: Y.intl.string(Y.t["+Xp3hq"]),
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
        d = (0, lP.Ay)(n.id),
        o = (0, at.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        h = (0, ar.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, aa.A)(u, d, ay.R7.SIDEBAR);
    let A = s.useRef(null),
        { isHoveringOrFocusing: g, isHovering: m } = (0, as.A)(A);
    function x() {
        (0, s1.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(ar.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsxs)(ag.A, {
                ref: A,
                user: n,
                displayProfile: d,
                themeType: av.d.SIDEBAR,
                themeOverride: o,
                className: i ? r()(a_.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tA.d_, {
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
                                        animateOnHoverOrFocusOnly: !g,
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
                                    (0, l.jsx)(am.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: s9.Ay.getName(null, t.id, n),
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
                                                      isHoveringOrFocusing: g,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(aA.A, {
                                                      heading: Y.intl.string(Y.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(ah.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(ag.A.Overlay, {
                                              className: aT.Lw,
                                              children: [
                                                  d?.bio != null &&
                                                      "" !== d.bio &&
                                                      (0, l.jsx)(aA.A, {
                                                          heading: Y.intl.string(Y.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(au.A, {
                                                              userBio: d?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: g,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(aA.A, {
                                                      heading: Y.intl.string(Y.t["A//N4k"]),
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
                    d?.profileEffect != null && (0, l.jsx)(al.A, { skuId: d?.profileEffect?.skuId, isHovering: m }),
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
        r = (0, lP.Ay)(n.id),
        d = (0, at.Ay)(),
        o = (0, A.bG)([lu.A], () => lu.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, P.Ay)(o ? M.A.BLOCKED_PROFILE_PANEL : M.A.IGNORED_PROFILE_PANEL),
        u = (0, ar.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, aa.A)(c, r, ay.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(ar.of, {
            value: u,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(ag.A, {
                ref: h,
                user: n,
                displayProfile: r,
                themeType: av.d.SIDEBAR,
                themeOverride: d,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tA.d_, {
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
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: Y.intl.string(Y.t.b33pLD),
                                            }),
                                            (0, l.jsx)(v.E, {
                                                variant: "text-sm/medium",
                                                children: Y.intl.format(o ? Y.t["8F+WNz"] : Y.t["/cZp5s"], {
                                                    username: s9.Ay.getName(t.guild_id, t.id, n),
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
                                                    (a(),
                                                        (0, lM.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(aO.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (a(),
                                                        (0, lM.Wn)({
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
var ak = t(128954),
    aG = t(717421),
    aU = t(31956),
    aw = t(673843),
    aF = t(594832),
    aH = t(321191),
    aB = t(679492),
    aV = t(439053),
    aW = t(312381),
    az = t(657538),
    aY = t(984545),
    aK = t(193738),
    aq = t(133385),
    aX = t(983495),
    aQ = t(695366),
    a$ = t(922590),
    aZ = t(821269),
    aJ = t(93246),
    a0 = t(351906),
    a1 = t(383199),
    a2 = t(559506),
    a5 = t(361311),
    a6 = t(931481),
    a3 = t(791556),
    a9 = t(501193),
    a7 = t(383448),
    a4 = t(646986),
    a8 = t(243166),
    re = t(812993),
    rn = t(123292),
    rt = t(840411);
let ri = (0, s7.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var rl = t(666810),
    rs = t(394300),
    ra = t(575593),
    rr = t(44120),
    rd = t(75678),
    ro = t(56815),
    rc = t(317560),
    ru = t(99161),
    rh = t(827258),
    rA = t(661492),
    rg = t(146423),
    rm = t(662349),
    rx = t(479026),
    rp = t(636374),
    rf = t(699976),
    rI = t(202541),
    rb = t(733484),
    rj = t(880465);
function rC(e) {
    let n,
        {
            sku: t,
            wishlistOwner: i,
            wishlistId: a,
            style: d,
            skuPreviewStyle: o,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: A,
            renderChildren: g,
            isNew: m,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, ar.NJ)(),
        p = s8("DMSidePanelWishlistItemCard") ? rf.y.SIZE_78 : rf.y.SIZE_90,
        f = rf.Z[p],
        I = s.useCallback(() => {
            (x({
                action: ay.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: a,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, a, h, x]),
        b = s.useCallback(() => {
            (x({
                action: ay.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: a,
                productLines: new Set([t.productLine]),
            }),
                A());
        }, [A, t.id, a, t.productLine, x]),
        {
            onBodyClick: j,
            onOverlayClick: C,
            showOverlayButton: E,
            routesToGift: y,
            label: v,
            icon: N,
        } = (0, rp.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: b }),
        [_, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: rb.kL,
        children: (0, l.jsxs)(rg.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: r()(rb.Nr, d),
            skuPreviewStyle: r()(rb.ho, o),
            skuAssetClassName: _ ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = y ? (0, rA.T)(t) : Y.intl.formatToPlainString(Y.t.ZBB4Ty, { productName: (0, rA.T)(t) })),
                !0 === m ? Y.intl.formatToPlainString(Y.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === m && (0, l.jsx)(rh.A, { className: rb.Pf }),
                E &&
                    (0, l.jsx)(rm.A, {
                        spec: f,
                        onClick: C,
                        isHoveringOrFocusing: _,
                        label: v,
                        icon: v.length < 6 ? N : void 0,
                    }),
                g?.(E && _),
            ],
        }),
    });
}
function rE(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        { analyticsLocations: r } = (0, P.Ay)(
            ...(i ?? []),
            M.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        d = s.useCallback(() => {
            (0, ru.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: rI.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: r },
            );
        }, [n, t, r]),
        o = s.useCallback(() => {
            (0, rc.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: rI.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [n.id, n.applicationId, t, r]);
    return (0, l.jsx)(rC, {
        sku: n,
        analyticsLocations: r,
        wishlistOwner: t,
        onDetailsClick: o,
        onPurchaseClick: d,
        ...a,
    });
}
function ry(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...a } = e,
        d = s.useCallback(() => {
            (0, rr.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: rI.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        o = (0, rx.e)({ sku: n, giftRecipient: t, giftingOrigin: rI.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                r()(rb.ML, {
                    [rb.M]: n?.tenantMetadata?.collectibles?.type === ra.R.AVATAR_DECORATION,
                    [rb.Hm]: n?.tenantMetadata?.collectibles?.type === ra.R.PROFILE_EFFECT,
                    [rb.hH]: n?.tenantMetadata?.collectibles?.type === ra.R.PROFILE_FRAME,
                    [rb.qF]: n?.tenantMetadata?.collectibles?.type === ra.R.NAMEPLATE,
                    [rb.l2]: n?.tenantMetadata?.collectibles?.type === ra.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(rC, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: o,
        onPurchaseClick: d,
        skuPreviewStyle: c,
        ...a,
    });
}
function rv(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: a, style: d, ...o } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, rd.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: rI.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
                ...(0, ro.Dv)(e, !0, "dm_side_panel_wishlist_item_card"),
            });
        }, [n.id, t, i]),
        u = a === aF.uS.POPULAR,
        h = Y.intl.string(Y.t.HbJ7eD);
    return (0, l.jsx)(rC, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: a,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: r()(rj.MO, { [rb.F5]: u }),
        style: d,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: r()(rb.fi, { [rb.sp]: e }),
                      children: (0, l.jsx)(v.E, {
                          className: r()(rb.p7, { [rb.SW]: h.length >= 10, [rb.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...o,
    });
}
function rN(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case ed.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rE, { sku: n, ...t });
        case ed.EZt.COLLECTIBLES:
            return (0, l.jsx)(ry, { sku: n, ...t });
        case ed.EZt.PREMIUM:
            return (0, l.jsx)(rv, { sku: n, ...t });
        default:
            return null;
    }
}
var r_ = t(158045),
    rT = t(249203),
    rS = t(419731),
    rR = t(695904),
    rL = t(116331),
    rO = t(713348),
    rM = t(535089),
    rP = t(815637);
function rD(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: a, isNitroRecEnabled: r } = e,
        { analyticsLocations: d } = (0, P.Ay)(),
        { trackUserProfileAction: o, trackUserProfileWishlistAction: c } = (0, ar.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: g, shouldLogExposure: m } = (0, rL.A)(t),
        x = (0, A.bG)([rT.A], () => rT.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        p = (0, s.useCallback)(() => {
            (h && o({ action: "PRESS_NEW_CONTENT_WISHLIST", section: ay.RP.WISHLIST }), i());
        }, [h, i, o]),
        f = (0, s.useMemo)(() => n ?? [], [n]),
        I = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        b = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: aF.uS.WISHLIST }));
            if (r && e.length < 3) {
                let n = f.some((e) => r_.Ay.isPremiumSku(e.skuId));
                if (!r_.Ay.isPremiumAtLeast(t.premiumType, rI.PremiumTypes.TIER_2) && !n) {
                    let n = rs.A.fromSKU((0, rt.rI)());
                    null != n && e.push({ item: n, source: aF.uS.POPULAR });
                }
            }
            return e;
        }, [f, r, t.premiumType]),
        j = (0, s.useMemo)(
            () =>
                new Set(
                    b.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [b],
        ),
        C = (0, rM.A)({ wishlistId: a ?? null, onAction: I, productLines: j }),
        E = (0, s.useMemo)(
            () =>
                b
                    .map((e, n) => {
                        let { item: i, source: s } = e;
                        return null == i.sku
                            ? null
                            : (0, l.jsx)(
                                  rN,
                                  {
                                      sku: i.sku,
                                      index: n,
                                      wishlistOwner: t,
                                      wishlistId: a,
                                      analyticsLocations: d,
                                      onViewWishlist: p,
                                      source: s,
                                      isNew: h && (0, rS.f3)(i.addedAt, x),
                                  },
                                  i.skuId,
                              );
                    })
                    .filter(lQ.Vq),
            [d, p, t, b, a, h, x],
        ),
        y = h && E.length > 0,
        v = (0, s.useRef)(!1);
    return ((0, s.useEffect)(() => {
        y && !v.current && ((v.current = !0), o({ action: "VIEW_NEW_CONTENT_SIDEBAR" }));
    }, [y, o]),
    0 === E.length)
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(ag.A.Overlay, {
                  ref: C,
                  className: rP.kL,
                  children: [
                      m && (0, l.jsx)(rR.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: rP.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: rP.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: Y.intl.string(Y.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(re.Lp, {
                                              text: Y.intl.format(Y.t.akCCqu, { count: g }),
                                              color: nE.A.colors.BADGE_BACKGROUND_BRAND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(rn.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: p,
                                      text: Y.intl.string(Y.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(s2.F, { children: (0, l.jsx)("div", { className: rP.vY, children: E }) }),
                  ],
              }),
          });
}
function rk(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        a = ri.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, rO.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !a))) return null;
    let r = ee.default.getCurrentUser()?.id,
        d = null != r && r !== s.profileOwner.id;
    return (0, l.jsx)(rl.h, {
        isGifting: d,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(rD, { ...s, unownedWishlistItems: t, isNitroRecEnabled: a }),
    });
}
function rG(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: a,
            isHoveringOrFocusing: r,
            isRedesignEnabled: d,
            onOpenProfile: o,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, A.cf)([lu.A], () => ({
            relationshipType: lu.A.getRelationshipType(n.id),
            originApplicationId: lu.A.getOriginApplicationId(n.id),
        })),
        h = (0, a$.fi)(n.id),
        g = (0, aZ.q)({ userId: n.id }),
        m = (0, A.bG)([a0.A], () => a0.A.hidePersonalInformation),
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
                    (0, l.jsx)(am.Ay, {
                        user: n,
                        guildId: a.guild_id,
                        displayName: s9.Ay.getName(null, a.id, n),
                        onClickName: o,
                        displayNameTrailing: m
                            ? null
                            : (0, l.jsx)(a8.A, { userId: n.id, isVisible: r, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(ao.A, {
                            displayProfile: i,
                            themeType: av.d.SIDEBAR,
                            isRedesignEnabled: d,
                        }),
                    }),
                    d && (0, l.jsx)(a3.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            c === ed.eA$.PENDING_INCOMING &&
                (0, l.jsx)(ag.A.Overlay, {
                    children: (0, l.jsx)(a6.A, { user: n, channelId: a.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    ag.A.Overlay,
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
            (0, l.jsx)(a7.A, { user: n }),
            i?.private &&
                (0, l.jsx)(ag.A.Overlay, { children: (0, l.jsx)(a9.A, { username: s9.Ay.getName(null, a.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(ag.A.Overlay, {
                    className: aT.Lw,
                    children: (0, l.jsx)(aA.A, {
                        heading: Y.intl.string(Y.t.Iyka0U),
                        headingIcon: aQ.E,
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
                            hidePersonalInformation: m,
                            isHoveringOrFocusing: r,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(aA.A, {
                            heading: n.bot ? Y.intl.string(Y.t["A//N4k"]) : Y.intl.string(Y.t.a6XYD9),
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
                                  g.length > 0 &&
                                      (0, l.jsx)(aA.A, {
                                          heading: Y.intl.string(Y.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(a5.A, { applicationIds: g }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(ag.A.Overlay, {
                              className: aT.Lw,
                              children: [
                                  !m &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(aA.A, {
                                          heading: Y.intl.string(Y.t.ZzAR2Y),
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
                                          g.length > 0 &&
                                              (0, l.jsx)(aA.A, {
                                                  heading: Y.intl.string(Y.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(a5.A, { applicationIds: g }),
                                              }),
                                          (0, l.jsx)(aA.A, {
                                              heading: n.bot ? Y.intl.string(Y.t["A//N4k"]) : Y.intl.string(Y.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(ah.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    d &&
                        (0, l.jsx)(rk, {
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
var rU = t(114212),
    rw = t(913453),
    rF = t(229187),
    rH = t(21241),
    rB = t(503062),
    rV = t(51943),
    rW = t(847374),
    rz = t(320448),
    rY = t(723200);
function rK(e) {
    let { section: n, header: t, items: i, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, ar.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? rW.a : rz._;
    return (0, l.jsxs)("section", {
        className: rY.uW,
        children: [
            (0, l.jsxs)(nx.D, {
                className: r()(rY.wx, rY.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    (h(!u), u || (o({ action: "PRESS_SECTION", section: n }), d?.()));
                },
                children: [
                    (0, l.jsxs)(R.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [t, " \u2014 ", i.length],
                    }),
                    (0, l.jsx)(A, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(rY.p_, a), children: i }),
        ],
    });
}
var rq = t(341278);
function rX(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, ar.NJ)(),
        a = (0, tM.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, rw.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, l.jsxs)(ag.A.Overlay, {
              className: rq.Lw,
              children: [
                  u &&
                      (0, l.jsx)(rK, {
                          section: "MUTUAL_GUILDS",
                          header: Y.intl.string(Y.t["4lTDZq"]),
                          listClassName: rq.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  rV.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, n7.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(rH.A, { className: rq.yF }),
                  c &&
                      (0, l.jsx)(rK, {
                          section: "MUTUAL_FRIENDS",
                          header: Y.intl.string(Y.t["0mTJ3j"]),
                          listClassName: rq.p_,
                          onExpand: () => (0, rF.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: rq.nC,
                                                children: [
                                                    (0, l.jsx)(rU.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(rU.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            rB.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, s1.openUserProfileModal)({
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
function rQ(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: a } = e,
        d = __OVERLAY__,
        o = (0, lP.Ay)(n.id),
        c = (0, at.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: g } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        m = (0, ar.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, aa.A)(g, o, ay.R7.SIDEBAR);
    let x = s.useRef(null),
        { isHoveringOrFocusing: p, isHovering: f } = (0, as.A)(x),
        I = (0, aB.fC)(),
        b = (0, s3.A)(o?.profileFrame?.skuId);
    (0, aU.A)({ skuId: o?.profileFrame?.skuId, openedAt: u.current, context: m, analyticsLocations: g });
    let j = (0, aG.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, s1.openUserProfileModal)({ sourceAnalyticsLocations: g, hideRestrictedProfile: !0, ...m, ...e });
    }
    let E = o?.widgets != null && o.widgets.length > 0,
        { defaultWishlistId: y } = (0, A.cf)([aH.A], () => ({ defaultWishlistId: aH.A.getFirstWishlistId(n.id) })),
        { wishlist: v, isFetching: N } = (0, aF.fw)({ wishlistId: a ? void 0 : y, userId: n.id });
    (0, aw.A)(v);
    let _ = s.useMemo(() => (null == v ? null : v.items.filter((e) => !e.isOwned)), [v]);
    return (0, l.jsx)(P.f5, {
        value: g,
        children: (0, l.jsx)(ar.of, {
            value: m,
            openedAt: u.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(aB.Hl, {
                value: I,
                children: (0, l.jsxs)(ag.A, {
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
                        (0, l.jsxs)(tA.d_, {
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
                                (0, l.jsx)(rG, {
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
                                        children: (0, l.jsx)(rk, {
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
                                !a && (0, l.jsx)(rX, { user: n, channelId: i.id }),
                            ],
                        }),
                        !d &&
                            (0, l.jsx)(aE, {
                                context: m,
                                analyticsLocations: g,
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
var r$ = t(901600);
function rZ(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, A.bG)([ee.default], () => ee.default.getUser(t)),
        a = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        r = lD(),
        [d, o] = (0, ae.A)(t),
        [c, u] = s.useState(!1),
        h = s8("UserProfileSidebarRenderer"),
        g = (0, lP.Ay)(t),
        m = g?.profileFrame?.skuId,
        x = (0, s3.A)(m),
        p = (0, A.bG)([s6.A], () => s6.A.getProductFetch(m));
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
            (h && !c && g?.isLoaded !== !0) ||
            (h && !c && null != m && m !== x?.skuId && p?.state !== "success" && p?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        I = s9.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? r$.H : void 0,
        children: (0, l.jsx)(s2.F, {
            component: (0, l.jsx)(s5.A, {
                children: (0, l.jsx)(s2.H, { id: f, children: Y.intl.format(Y.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == a
                    ? null
                    : d
                      ? (0, l.jsx)(aD, { user: i, currentUser: a, onHide: o, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(aS, { user: i, currentUser: a, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(rQ, { user: i, currentUser: a, isRedesignEnabled: h, ...e }),
        }),
    });
}
var rJ = t(522556),
    r0 = t(225315),
    r1 = t(684407),
    r2 = t(95701),
    r5 = t(919638),
    r6 = t(763827),
    r3 = t(812771),
    r9 = t(946228),
    r7 = t(462887),
    r4 = t(276293),
    r8 = t(888904),
    de = t(745652);
let dn = () => {
    let e = (0, at.Ay)();
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(ed.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, r7.M)(e) ? de : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: r8.kL,
        children: [
            (0, l.jsxs)(i9.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(i9.A.Icon, { icon: r4.N, "aria-hidden": !0 }),
                    (0, l.jsx)(i9.A.Title, { children: Y.intl.string(Y.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: r8.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: r8.j0, src: n }),
                    (0, l.jsx)(R.D, {
                        className: r8.Zd,
                        variant: "heading-lg/medium",
                        children: Y.intl.string(Y.t.m9gRVN),
                    }),
                    (0, l.jsx)(v.E, {
                        className: r8.fh,
                        variant: "text-md/normal",
                        children: Y.intl.string(Y.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var dt = t(909735),
    di = t(943712),
    dl = t(402216),
    ds = t(274541),
    da = t(746080),
    dr = t(806931),
    dd = t(516607),
    dc = t(999900);
function du() {
    return (0, l.jsx)("div", { className: dc.wG, children: (0, l.jsx)(x.y, {}) });
}
let dh = (0, nU.Fe)({
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
        renderLoader: du,
        name: "ForumChannel",
    }),
    dA = (0, nU.Fe)({
        createPromise: () =>
            Promise.all([t.e("452651"), t.e("802179"), t.e("87729"), t.e("530707"), t.e("96711")]).then(
                t.bind(t, 114701),
            ),
        webpackId: 114701,
        renderLoader: du,
        name: "AppChannel",
    });
function dg() {
    return Promise.all([
        t.e("606926"),
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
        t.e("764984"),
        t.e("834541"),
        t.e("452651"),
        t.e("389187"),
        t.e("503681"),
        t.e("45646"),
        t.e("355761"),
        t.e("459397"),
        t.e("847810"),
        t.e("546813"),
        t.e("784573"),
        t.e("136686"),
        t.e("93461"),
        t.e("700792"),
        t.e("592822"),
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
        t.e("979585"),
        t.e("87729"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("497306"),
        t.e("736793"),
        t.e("530707"),
        t.e("932011"),
        t.e("112733"),
        t.e("792461"),
    ]).then(t.bind(t, 540462));
}
let dm = (0, nU.Fe)({ createPromise: dg, webpackId: 540462, name: "ChannelCall", renderLoader: du });
function dx() {
    return Promise.all([
        t.e("764984"),
        t.e("834541"),
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
        t.e("93461"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("176911"),
        t.e("949013"),
        t.e("33448"),
        t.e("79216"),
        t.e("815275"),
        t.e("256373"),
        t.e("704374"),
        t.e("544901"),
        t.e("420577"),
        t.e("874821"),
        t.e("464287"),
        t.e("360536"),
        t.e("426792"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("979585"),
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
let dp = (0, nU.Fe)({ createPromise: dx, webpackId: 67319, name: "StageChannelCall", renderLoader: du }),
    df = (0, nU.Fe)({
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
            return (0, l.jsx)(l3, {});
        },
    }),
    dI = (0, nU.Fe)({
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
    db = (0, nU.Fe)({
        createPromise: () => Promise.all([t.e("846123"), t.e("415006")]).then(t.bind(t, 632941)),
        webpackId: 632941,
        name: "FriendsSidebar",
    });
class dj extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, s0.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        e === ed.rbe.GUILD_VOICE ? dg() : e === ed.rbe.GUILD_STAGE_VOICE && dx();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, tK.iN)(e.id);
    };
    _handleContextMenu = (e, n) => {
        switch (n.type) {
            case ed.rbe.GUILD_VOICE:
            case ed.rbe.GUILD_ANNOUNCEMENT:
            case ed.rbe.GUILD_TEXT:
            case ed.rbe.GUILD_FORUM:
            case ed.rbe.GUILD_MEDIA:
            case ed.rbe.GUILD_APP:
                this.openChannelContextMenu(e, n);
                break;
            case ed.rbe.ANNOUNCEMENT_THREAD:
            case ed.rbe.PUBLIC_THREAD:
            case ed.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, n);
                break;
            case ed.rbe.DM:
                this.openDMContextMenu(e, n);
        }
    };
    handleContextMenu = (e) => {
        (o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel));
    };
    handleParentContextMenu = (e) => {
        (o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel));
    };
    handleThreadSidebarResize = (e, n) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: n });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        (o()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, s1.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [M.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        (o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != i, "Missing guild in Channel.openChannelContextMenu"),
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
        (o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
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
        o()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = ee.default.getUser(n.getRecipientId());
        (o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, j.L3)(e, async () => {
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
                    t.e("537796"),
                    t.e("298199"),
                    t.e("17244"),
                    t.e("864464"),
                    t.e("439778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            }));
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(da.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ig.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(ng.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dr.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ih.A,
                  { size: dl.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
            case ed.rbe.GUILD_STAGE_VOICE:
            case ed.rbe.GUILD_VOICE:
                break;
            case ed.rbe.DM:
                (r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(lp, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iH, { channel: e }, "pins")),
                    r.push((0, l.jsx)(lf.Ay, { channel: e, tooltip: Y.intl.string(Y.t["PWkO7+"]) }, "invite")),
                    r.push((0, l.jsx)(lk, { channel: e, showCallOrActivityPanel: i || s || a }, "profile")),
                    r.push((0, l.jsx)(l_, { channel: e }, "safety_tools")));
                break;
            case ed.rbe.GROUP_DM:
                (r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(lp, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iH, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, l.jsx)(lf.Ay, { channel: e, tooltip: Y.intl.string(Y.t.NB5DFD) }, "invite")),
                    r.push((0, l.jsx)(iG, { channelId: e.id }, "members")));
                break;
            case ed.rbe.ANNOUNCEMENT_THREAD:
            case ed.rbe.PRIVATE_THREAD:
            case ed.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && r.push((0, l.jsx)(t2, { channel: e })),
                    null == n || n.isForumLikeChannel() || r.push((0, l.jsx)(sW, { channel: n }, "browser")),
                    e.isVocalThread() && r.push((0, l.jsx)(lL, { channel: e }, "thread-call")),
                    r.push((0, l.jsx)(t8, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iH, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, l.jsx)(iG, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && r.push((0, l.jsx)(iY, { channel: e }, "summaries")),
                    r.push((0, l.jsx)(sq, { channel: e }, "threads-overflow")));
                break;
            case ed.rbe.GUILD_ANNOUNCEMENT:
            case ed.rbe.GUILD_TEXT:
                (r.push((0, l.jsx)(sW, { channel: e }, "browser")),
                    t || r.push((0, l.jsx)(iU.A, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iH, { channel: e }, "pins")),
                    (0, nm.PD)(e.guild_id, "channel_header") &&
                        r.push((0, l.jsx)(iD, { channelId: e.id }, "conversations")),
                    r.push((0, l.jsx)(iG, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && r.push((0, l.jsx)(iY, { channel: e }, "summaries")));
                break;
            case ed.rbe.GUILD_APP:
                (r.push((0, l.jsx)(no, { channel: e }, "popout")),
                    r.push((0, l.jsx)(sW, { channel: e }, "browser")),
                    t || r.push((0, l.jsx)(iU.A, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iH, { channel: e }, "pins")),
                    r.push((0, l.jsx)(iG, { channelId: e.id }, "members")),
                    r.push((0, l.jsx)(iM, { channelId: e.id }, "chat")));
                break;
            case ed.rbe.GUILD_FORUM:
            case ed.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && r.push((0, l.jsx)(i3, {}, "game-invite-channel-learn-more")),
                    t ||
                        (r.push((0, l.jsx)(i1, { channel: e }, "forum-onboarding")),
                        r.push((0, l.jsx)(iU.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, l.jsx)(iG, { channelId: e.id }, "members")));
                break;
            case ed.rbe.GUILD_DIRECTORY:
                r.push((0, l.jsx)(iG, { channelId: e.id }, "members"));
        }
        return r;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let n = [];
        if (e.isSystemDM()) return n;
        switch (e.type) {
            case ed.rbe.GUILD_STAGE_VOICE:
            case ed.rbe.GUILD_VOICE:
            case ed.rbe.DM:
                break;
            case ed.rbe.GROUP_DM:
                n.push((0, l.jsx)(iG, { channelId: e.id }, "members"));
                break;
            case ed.rbe.ANNOUNCEMENT_THREAD:
            case ed.rbe.PRIVATE_THREAD:
            case ed.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(iG, { channelId: e.id }, "members"));
                break;
            case ed.rbe.GUILD_ANNOUNCEMENT:
            case ed.rbe.GUILD_TEXT:
            case ed.rbe.GUILD_FORUM:
            case ed.rbe.GUILD_MEDIA:
            case ed.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(iG, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: dc.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(Y.t["3aOv+h"]),
                      onClick: () =>
                          (0, m.openModalLazy)(async () => {
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
        (o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != n, "Should not be null if channel is not null."));
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tK.iN)(e.id) : void 0,
            g = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            m = d || c,
            x = a || m;
        return (0, l.jsxs)("div", {
            className: dc.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && a ? ed.NJ8.DARK : void 0,
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
                                className: r()(dc.DD, a, { [dc.zh]: e.type === ed.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": Y.intl.string(Y.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(tE.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tE.zF)({
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
                                              className: dc.u8,
                                              children: (0, l.jsx)(p.$, {
                                                  onClick: () => (0, ty.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: Y.intl.string(Y.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tE.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(l2.A, { channelId: e.id }),
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
            case ed.rbe.GUILD_STAGE_VOICE:
                return (0, l.jsx)(dp, { channel: e, popoutType: nh.N.NO_POPOUT }, e.id);
            case ed.rbe.GUILD_VOICE:
            case ed.rbe.DM:
            case ed.rbe.GROUP_DM:
            case ed.rbe.PUBLIC_THREAD:
            case ed.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    dm,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: nh.N.NO_POPOUT,
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
                ? (0, l.jsx)(iC, { guildId: n.id })
                : (0, l.jsx)(im.H, { guildId: n.id, children: (0, l.jsx)(iS, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(rJ.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(tN.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && a)) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tf, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(dh, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return e.type === ed.rbe.GUILD_APP
            ? (0, l.jsx)(dA, { channel: e }, e.id)
            : (0, l.jsx)(tC.A, { channel: e, guild: n, chatInputType: nA.oU.NORMAL }, null != n ? n.id : "home");
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
        else if (s === ed.YvQ.PROFILE && e.isPrivate() && !a && !r && !d)
            return (0, l.jsx)(rZ, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === ed.YvQ.MEMBERS)
            switch (e.type) {
                case ed.rbe.GROUP_DM:
                    return (0, l.jsx)(l1, { channel: e }, `private-channel-recipients-${e.id}`);
                case ed.rbe.GUILD_DIRECTORY:
                case ed.rbe.GUILD_FORUM:
                case ed.rbe.GUILD_MEDIA:
                case ed.rbe.GUILD_ANNOUNCEMENT:
                case ed.rbe.GUILD_TEXT:
                case ed.rbe.GUILD_APP:
                    let c = !0 === ed.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(r9.A, { channel: e }, `channel-members-${c}`);
                case ed.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(r9.A, { channel: n }, `channel-members-${n.id}`);
                    break;
                case ed.rbe.PUBLIC_THREAD:
                case ed.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(em, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === ed.YvQ.CONVERSATIONS)
            switch (e.type) {
                case ed.rbe.GUILD_TEXT:
                case ed.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(nG, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === ed.YvQ.SEARCH) return (0, l.jsx)(df, { guildId: t?.id, channelId: e.id });
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
                            let { default: e } = await t.e("638763").then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => iA(lF.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, r0.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
        if (t === ed.YvQ.SIDEBAR_CHAT && null != i) {
            if (r || null != d) return null;
            switch (i.type) {
                case iL.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sM, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case iL.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sJ, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case iL.PE.VIEW_CHANNEL: {
                    let t = eG.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? id : sJ;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (null != n && (0, r2.ZV)(n.type)) {
                        e = (0, l.jsx)(ds.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case iL.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iL.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: ed.da6 },
                    className: dc.uC,
                    children: (0, l.jsx)(dI, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iR.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && ed.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - ed.MdR - o;
        return (
            (c += 375),
            (0, l.jsx)(r3.A, {
                sidebarType:
                    n?.type != null && ed.kvI.GUILD_THREADS_ONLY.has(n.type) ? r3.X.PostSidebar : r3.X.ThreadSidebar,
                maxWidth: c,
                capturePointer: n?.type === ed.rbe.GUILD_APP,
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
                canShowFriendsSidebar: h,
                friendsSidebarAppBarToggleEnabled: A,
                friendsSidebarCollapsed: g,
            } = this.props,
            { threadSidebarWidth: m, isThreadSidebarFloating: x } = this.state,
            p = h && (!A || !g),
            f = this.shouldRenderCall();
        if (i) return (0, l.jsx)(dn, {});
        if (null == e) return (0, l.jsx)(di.A, { channelId: this.props.channelId });
        let I = a === ed.YvQ.SIDEBAR_CHAT,
            b = (0, dt.UN)("Channel"),
            j = null != o && !I,
            C = (0, r2.nO)(e.type) && !d,
            E = n?.name,
            y = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== ed.rbe.GUILD_VOICE,
                        className: r()(dc.TE, {
                            [dc.js]: (I && !b) || j,
                            [dc.Rs]: I ? !b || x : j || p,
                            [dc.jl]: I && x,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ep.A, {
                                      style: { right: I ? m : void 0 },
                                      className: dc.x4,
                                      channel: e,
                                      draftType: is.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: r()(dc.Qs, { [dc.Oo]: s === ed.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nw.HI, { location: E, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: dc.zP, children: y }) : y,
                p && (0, l.jsx)(db, {}),
            ],
        });
    }
}
let dC = (0, ef.A)(dj),
    dE = s.memo(function (e) {
        var n, t;
        let i,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            c = (0, A.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, A.bG)([eG.A], () => a ?? eG.A.getChannel(o), [o, a]),
            p = (0, tb.DZ)(),
            f = (0, tb.e4)(x, "ConnectedChannel"),
            j = (0, A.bG)([eG.A], () => eG.A.getChannel(c), [c]),
            C = f?.parent_id,
            E = (0, A.bG)([eG.A], () => eG.A.getChannel(C), [C]),
            y = (0, A.bG)([n4.A], () => n4.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: v } = (0, ix.A)(f?.id ?? void 0),
            N = (0, A.bG)(
                [nu.A],
                () => {
                    let e = null != o ? nu.A.getParticipants(o) : [],
                        n = null != o ? nu.A.getActivityParticipants(o) : [];
                    return e.length - n.length > 0;
                },
                [o],
            ),
            _ = (0, iu.A)(),
            T = (0, A.bG)([eU.Ay], () => (_?.channelId ?? eU.Ay.getVoiceChannelId()) === f?.id),
            S = (0, A.bG)([ej.Ay], () => (null != f ? ej.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, A.bG)([r6.A], () => r6.A.isConnected()),
            L = (0, eb.Ay)(R),
            O = R && !1 === L;
        s.useEffect(() => {
            T &&
                O &&
                null != S &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, nc.Qt)({ applicationId: S.applicationId, instanceId: S.compositeInstanceId }),
                );
        }, [O, f, T, S]);
        let M = (0, A.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            P = (0, A.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            D = null != M && !(0, eN.A)(f?.id) && P === eJ.Gd.PANEL,
            k = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: G, isUserInThisVoice: U } = (0, A.cf)([lh.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lh.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lh.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            w = null != f && f.isPrivate() && !D && N,
            F = f?.isGuildVocal() || w || (G && (U || !k)),
            H = (0, A.bG)([nt.A], () => {
                let e = (0, nd.ny)(nt.A.getMainFrame());
                return e?.data.layoutMode === nd.y0.FOCUSED && e.intent === nd.sV.MAIN;
            }),
            { welcomeModalChannelId: B } = (0, h.zy)(),
            V = (0, A.bG)([t3.A], () => null != f && t3.A.isLurking(f.guild_id), [f]),
            W = (0, A.bG)([r1.A], () => r1.A.hasSeen(f?.guild_id, V), [f, V]),
            z = (0, A.bG)(
                [nu.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eJ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eJ.E8.NO_CHAT
                            ? ed.DUB.NO_CHAT
                            : ed.DUB.NORMAL
                        : null != o
                          ? nu.A.getLayout(o)
                          : ed.DUB.NORMAL,
                [o],
            ),
            Y =
                ((n = y?.id),
                (i = (0, A.bG)([n4.A, lw, ee.default, Q.Ay], () => {
                    let e = n4.A.getGuild(n);
                    if (
                        e?.features.has(ed.GuildFeatures.HUB) !== !0 ||
                        !0 === lw.hasViewedPrompt(lF.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = Q.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != i && (i || iA(lF.REAL_NAME_PROMPT, n));
                }, [i, n]),
                !0 === i),
            K =
                ((t = y?.id),
                (0, A.bG)([eG.A, n4.A, eU.Ay], () => {
                    let e = n4.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(ed.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(ed.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(ed.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = eG.A.getChannel(B);
                    return B === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, r2.ke)(n.type);
                })),
            { section: q, channelSidebarState: X } = (0, A.cf)(
                [iO.Ay],
                () => ({ section: iO.Ay.getSection(o, f?.isDM()), channelSidebarState: iO.Ay.getSidebarState(o) }),
                [o, f],
            ),
            Z = y?.id,
            J = (0, A.bG)([iO.Ay], () => iO.Ay.getGuildSidebarState(Z), [Z]),
            en = (0, lB.lI)(),
            et = (0, tj.Ay)(f),
            el = (0, tj.Ay)(f, !0),
            es = (0, A.bG)([nu.A], () => (null != f ? nu.A.getSelectedParticipant(f.id) : null)),
            ea = (0, e8.vL)(f),
            er = (0, tv.Uf)(f),
            eo = null != f && c === f.id,
            ec = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eu, appBarToggleEnabled: eh } = io.A.useConfig({ location: "Channel" }),
            eA = (0, ic.c)(),
            eg = (0, A.bG)(
                [r5.A, ik.A],
                () => {
                    let e = f?.guild_id ?? ik.A.getGuildId();
                    return null != e && r5.A.isUnavailable(e);
                },
                [f],
            ),
            em = eu && !__OVERLAY__ && null != f && !eg && !f.isGuildVocal();
        (s.useEffect(() => (b.A.setFriendsSidebarAvailable(em), () => b.A.setFriendsSidebarAvailable(!1)), [em]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, ev.H)(t);
                        if (null == i || !(0, eN.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, e7.A)({ channelId: i }));
                        let l = eG.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, e4.A)(s, t), n?.());
                        }, 0);
                    }
                    return (
                        ei._.subscribe(ed.jej.OPEN_EMBEDDED_ACTIVITY, e),
                        () => {
                            ei._.unsubscribe(ed.jej.OPEN_EMBEDDED_ACTIVITY, e);
                        }
                    );
                }, [n]);
            })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, ty.JK)();
                if (e?.location?.state?.stageInviteKey === dd.J2) {
                    let { channelId: n } = (0, lH.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []));
        let ex = { channel: f, inCurrentVoiceChannel: eo },
            ep = s.useRef(ex);
        (s.useEffect(() => {
            ep.current = ex;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = ep.current;
                null != r && null != e && ec && e.id === r && !n && ((0, l9.av)(e), d(null));
            }, [r, ec]));
        let ef = (0, eI.cI)(f),
            eC = null != f && f.isPrivate(),
            eE = (0, eb.Ay)(eC),
            ey = (0, eb.Ay)(f?.id);
        s.useEffect(() => {
            let e = eE && !eC,
                n = eE && eC && f?.id !== ey;
            (e || n) && (0, tI.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lg.i.AUTO });
        }, [f?.id, ey, eC, eE]);
        let e_ = (0, m.useHasAnyModalOpen)();
        return (0, l.jsx)(dC, {
            guildId: f?.guild_id,
            channelId: o,
            channel: f,
            channelName: et,
            formattedChannelName: el,
            parentChannel: E,
            voiceChannel: j,
            layout: z,
            needSubscriptionToAccess: v,
            isLurking: V,
            hasModalOpen: e_,
            section: q,
            channelSidebarState: X,
            guildSidebarState: J,
            guild: y,
            showCall: !v && F,
            showActivityPanel: D,
            showFramePanel: H,
            channelIsContentGated: ea,
            spoilerGatingChannelId: er,
            isMobile: (0, A.bG)([$.A], () => f?.type === ed.rbe.DM && $.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: eg,
            showRealNameModal: Y,
            showWelcomeModal: !W && K,
            showFollowButton: (f?.type === ed.rbe.GUILD_ANNOUNCEMENT && y?.features.has(ed.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([lh.A], () => ({ hasVideo: null != f && lh.A.hasVideo(f.id) }), [f]),
            inCall: eo,
            selectedParticipant: es,
            showChannelSummaries: ef,
            showHeaderGuildBreadcrumb: p || en,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: M,
            friendsSidebarExperimentEnabled: eu,
            canShowFriendsSidebar: em,
            friendsSidebarAppBarToggleEnabled: eh,
            friendsSidebarCollapsed: eA,
        });
    });
