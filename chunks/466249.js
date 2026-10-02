(n.r(t), n.d(t, { default: () => uE }), n(321073));
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
    I = n(367513),
    j = n(604681),
    C = n(442433);
n(183994);
var E = n(837381),
    y = n(887129),
    b = n(607399),
    _ = n(834730),
    v = n(194261),
    N = n(312138),
    T = n(475825),
    S = n(177953),
    R = n(297264),
    O = n(414798),
    P = n(775602),
    M = n(793574),
    L = n(688810),
    k = n(449582),
    D = n(485947),
    w = n(878678),
    G = n(69282),
    U = n(657048),
    F = n(361610),
    H = n(964486),
    V = n(36124),
    B = n(317525),
    Y = n(219065),
    W = n(818348),
    z = n(375708);
let q = [];
var K = n(342296),
    $ = n(616356),
    X = n(696451),
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
            c = (0, m.bG)([X.Ay], () => X.Ay.getMember(t.guild_id, r)),
            u = (0, m.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(t.guild_id, c.colorRoleId)?.name : void 0),
                [t.guild_id, c],
            ),
            h = (0, m.bG)([ee.default], () => ee.default.getUser(r)),
            A = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === A?.id,
            g = (0, m.bG)([Q.A, J.A], () => (p ? J.A.getStatus() : Q.A.getStatus(r, t.guild_id))),
            x = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, m.yK)([Q.A, J.A], () => (p ? J.A.getActivities() : Q.A.getActivities(r, t.guild_id))),
            I = (0, m.bG)([$.A], () => $.A.getAnyStreamForUser(r)),
            j = (0, E.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(t.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("146652"),
                                n.e("893190"),
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
                    O.A.startTyping(t.id));
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
            S = (0, k.r)({ user: h, guildId: t.guild_id }),
            [R, P] = s.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, l.jsx)(K.A, {
            targetElementRef: o,
            user: h,
            guildId: t.guild_id,
            channelId: t.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => P(!1),
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
                    applicationStream: I,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: T,
                    itemProps: j,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? N?.() : P((e) => !e);
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
            r = (0, G.Xx)({ roleId: t, guildId: s, size: 16 });
        return t === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(D.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: n, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(U.A, { className: ec.UT, ...r }) : null,
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
        { analyticsLocations: p } = (0, L.Ay)(M.A.MEMBER_LIST),
        g = (function (e, t) {
            (0, H.Ay)(() => {
                t?.id != null && (0, F.Ey)(t.id, e, V.LD);
            });
            let n = (0, m.bG)([B.A], () => (null != t ? B.A.getSortedRoles(t.id) : [])),
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
        { navigator: f, listRef: I } =
            ((t = A),
            (n = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled)),
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
        j = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        j)
    )
        return (0, l.jsx)(eg, { channel: c });
    let C = u().omit(f.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(L.f5, {
        value: p,
        children: (0, l.jsx)(E.hD, {
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
                                ...C,
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
    eI = n(432371),
    ej = n(475743),
    eC = n(933958),
    eE = n(702841),
    ey = n(567249),
    eb = n(811024),
    e_ = n(969151),
    ev = n(108959),
    eN = n(866665),
    eT = n(446576),
    eS = n(817281),
    eR = n(95561),
    eO = n(587837),
    eP = n(850891),
    eM = n(742023),
    eL = n(204651),
    ek = n(383831),
    eD = n(128286),
    ew = n(734057),
    eG = n(309010),
    eU = n(795816),
    eF = n(685399),
    eH = n(216418),
    eV = n(620148),
    eB = n(732637),
    eY = n(104171),
    eW = n(47294),
    ez = n(594007),
    eq = n(16961),
    eK = n(138017),
    e$ = n(715482),
    eX = n(315502),
    eQ = n(573163),
    eJ = n(234320),
    eZ = n(5867),
    e0 = n(248310);
function e1(e) {
    let { channelId: t, className: n, ...i } = e,
        r = s.useRef(null),
        a = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eU.i5)(e);
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
    let g = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
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
                iconComponent: g === eZ.E8.NO_CHAT ? eK.j : e$.g,
                themeable: !0,
                className: n,
                ...i,
            }),
            f ? (0, l.jsx)(eX.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e0.qS }) : null,
        ],
    });
}
var e2 = n(538303);
let e3 = eY.DN.SIZE_32,
    e9 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e5(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: i } = e,
        r = (0, eV.A)(),
        o = (0, m.yK)([eC.Ay], () => eC.Ay.getEmbeddedActivitiesForLocationIncludingHidden(n), [n]),
        d = (0, e_.H)(n),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [I, j] = s.useState(eM.Ay.activityPanelHeight ?? t ?? null),
        C = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        E = s.useRef(null),
        [y, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == E.current) return;
        let e = new ResizeObserver(() => {
            b({ width: E.current?.clientWidth ?? 0, height: E.current?.clientHeight ?? 0 });
        });
        return (e.observe(E.current), () => e.disconnect());
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
        O = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
        M = (0, m.yK)(
            [X.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => X.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        L = s.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [M]),
        k = (function (e, t, n) {
            let i = (0, ej.Ay)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !P.Ay.useReducedMotion && (l || r);
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
        })(x, I, t),
        D = (0, eq.G)();
    if (null == r) return null;
    let w = [];
    function G(e) {
        if (null == e || void 0 === e || e === eY.mt) return null;
        let t = L.get(e.id),
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
                    className: a()(e2.iE, e9[g], e),
                    ref: p,
                    style: k,
                    children: [
                        i?.(),
                        (0, l.jsx)(eP.A, { type: "embedded-activity", applicationId: r.id }),
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
                                    ref: E,
                                    children: (0, l.jsx)(eB.A, { className: e2.pU, embedId: (0, ez.A)(n.id, r.id) }),
                                }),
                                null != O
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
                                                              (0, l.jsx)(e1, { channelId: O }),
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
                                                          children: (0, l.jsx)(ek.A, {
                                                              applicationId: r.id,
                                                              location: n,
                                                              centerButton: !0,
                                                              color: "disconnect",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              D
                                                  ? (0, l.jsx)(eD.A, {
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
                        x && null != t
                            ? (0, l.jsx)(eO.A, {
                                  minHeight: 480,
                                  maxHeight: t,
                                  resizableNode: p,
                                  onResize: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), j(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), C(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e7(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eE.cf)([eC.Ay], () => {
            let e = eC.Ay.getConnectedActivityLocation(),
                t = eC.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: t,
                activityPanelMode: eC.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eE.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e5, { maxHeight: t, connectedLocation: s.location, renderExternalHeader: n });
}
var e6 = n(90804),
    e8 = n(748975),
    e4 = n(323073),
    te = n(991690),
    tt = n(922016),
    tn = n(980707),
    ti = n(477782),
    tl = n(663417),
    ts = n(365199),
    tr = n(342321),
    ta = n(625180),
    to = n(672929),
    td = n(58736),
    tc = n(165610);
function tu(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, tr.A)(t, "app_channel_header"),
        o = s.useMemo(
            () => ({ type: te.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        d = (0, to.A)(t.application_id ?? null, o),
        c = (0, tc.x1)(d) && d.data.proxyTicketRefreshing,
        u = s.useCallback(() => {
            null == d || c || ta.A.refreshProxyTicket(d.id);
        }, [d, c]),
        h = z.intl.string(z.t["UKOtz+"]),
        m = (0, tc.x1)(d);
    return m || null != a
        ? (0, l.jsx)(tt.Y, {
              targetElementRef: r,
              shouldShow: n,
              animation: tt.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => i(!1),
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(tn.W, {
                      "data-menu-migrated": !0,
                      navId: "app-channel-header-overflow",
                      onClose: t,
                      onSelect: t,
                      "aria-label": z.intl.string(z.t.Xm41aV),
                      children: (0, l.jsxs)(ti.rX, {
                          children: [
                              m &&
                                  (0, l.jsx)(ti.Dr, {
                                      id: "reload-app",
                                      label: z.intl.string(z.t.kHie4V),
                                      action: u,
                                      icon: tl.RefreshIcon,
                                      leadingAccessory: { type: "icon", icon: tl.RefreshIcon },
                                      disabled: c,
                                  }),
                              a,
                          ],
                      }),
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, l.jsx)(td.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: n ? null : h,
                      icon: ts.MoreHorizontalIcon,
                      "aria-label": h,
                      selected: n,
                  });
              },
          })
        : null;
}
var th = n(12470),
    tm = n(811893),
    tA = n(91242),
    tp = n(809871),
    tg = n(241696),
    tx = n(869146);
function tf(e) {
    let { channel: t } = e,
        n = s.useMemo(
            () => ({ type: te.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        i = (0, to.A)(t.application_id ?? null, n),
        r = (0, eq.G)(),
        a = (0, m.bG)(
            [tx.A, tA.A],
            () => tx.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) && null != i && tA.A.getMainFrame()?.id === i.id,
            [i],
        ),
        o = s.useCallback(() => {
            null != i && (0, eW.A)({ onConfirm: () => (0, tg.A)(i.id) });
        }, [i]),
        d = s.useCallback(() => {
            (0, eW.A)({ onConfirm: () => tp.A.popInFrame() });
        }, []);
    return (0, tc.x1)(i)
        ? a
            ? (0, l.jsx)(td.In, {
                  icon: th._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: d,
              })
            : r
              ? (0, l.jsx)(td.In, {
                    icon: tm.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: o,
                })
              : null
        : null;
}
var tI = n(568598),
    tj = n(198052),
    tC = n(164617),
    tE = n(355622),
    ty = n(689874),
    tb = n(828488),
    t_ = n(939249),
    tv = n(408278),
    tN = n(624479),
    tT = n(376357),
    tS = n(857250),
    tR = n(97483),
    tO = n(534890),
    tP = n(661531),
    tM = n(39623),
    tL = n(952270),
    tk = n(381849),
    tD = n(549973),
    tw = n(957565),
    tG = n(935208),
    tU = n(181041),
    tF = n(256331),
    tH = n(623562),
    tV = n(403862);
let tB = ["high", "medium", "low"],
    tY = s.memo(function (e) {
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
                              tB.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: tV.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: tV.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: tV.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tV.a7,
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
                            className: tV.a7,
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
                            className: tV.a7,
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
    tW = s.memo(function (e) {
        let { conversation: t, onJump: n } = e,
            i = tG.default.extractTimestamp(t.startMessageId),
            s = tG.default.extractTimestamp(t.endMessageId),
            r = (0, tD.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, tk.WR)({ seconds: a, getFormatter: tk.i }),
            d = (0, m.bG)([tU.A], () => tU.A.getConversationColor(t.channelId, t.id) ?? void 0, [t.channelId, t.id]);
        return (0, l.jsxs)(t_.D, {
            className: tV.Nm,
            style: { backgroundColor: d },
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: tV.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: tV.So,
                            children: t.title,
                        }),
                        (0, l.jsx)(tv.K, {
                            icon: tN.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, tw.C)(JSON.stringify(t, null, 2), () =>
                                        (0, tT.P)((0, tS.o)("Copied conversation JSON", tR.Ck.SUCCESS)),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: tV.FR,
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
                        className: tV.g5,
                        children: t.briefSummary,
                    }),
                t.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: tV.JP,
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
                    className: tV.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: tV.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tV.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: tV.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: tV.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tV.a7,
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
                                    className: tV.a7,
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
                                    className: tV.a7,
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
                (0, l.jsx)(tY, { moderation: t.moderation ?? null }),
            ],
        });
    });
function tz(e) {
    let { channel: t } = e,
        n = (0, m.bG)([tU.A], () => tU.A.getChannelConversations(t.id) ?? [], [t.id]),
        i = (0, m.bG)([tU.A], () => tU.A.isPendingFetch(t.id), [t.id]),
        r = (0, m.bG)([tF.A], () => tF.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, tH.xI)(t.id, e.id);
            },
            [t],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tV.zr,
        children: [
            (0, l.jsxs)("div", {
                className: tV.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tV.gn,
                        children: [
                            (0, l.jsx)(tO.ChatIcon, { color: tP.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: tV.y6,
                        children: (0, l.jsx)(tv.K, {
                            icon: r ? tM.EyeIcon : tL.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: tH.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tV.Qs,
                children:
                    0 !== n.length || i
                        ? n.map((e) => (0, l.jsx)(tW, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: tV.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var tq = n(268218),
    tK = n(726249),
    t$ = n(73153),
    tX = n(334738),
    tQ = n(208882),
    tJ = n(938764),
    tZ = n(519480),
    t0 = n(352123),
    t1 = n(825244),
    t2 = n(130696);
let t3 = function (e) {
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
        className: t2.h2,
        children: [
            (0, l.jsx)("img", { className: t2.hd, alt: "", src: n(668778) }),
            (0, l.jsx)(R.D, {
                className: t2._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: t.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: t2.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(t1.E, {
                      className: t2.c5,
                      iconUrl: n(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(t1.E, {
                className: t2.c5,
                iconUrl: n(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var t9 = n(683438),
    t5 = n(689175),
    t7 = n(761508),
    t6 = n(765671),
    t8 = n(22231),
    t4 = n(66834),
    ne = n(573435),
    nt = n(101555),
    nn = n(548118),
    ni = n(714991),
    nl = n(776231),
    ns = n(345942),
    nr = n(71393),
    na = n(486020),
    no = n(149790),
    nd = n(682557),
    nc = n(524058);
let nu = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(t_.D, {
        onClick: t,
        className: nc.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: nc.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function nh(e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, t0.A)(t);
    return (0, l.jsx)("div", {
        className: a()(nc.fc, { [nc.QX]: i }),
        children: (0, l.jsxs)(nt.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(nt.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("533651"), n.e("988869")]).then(
                                          n.bind(n, 201700),
                                      );
                                      return (n) => (0, l.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(t8.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: nc.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(nd.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(nt.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(ts.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: nc.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let nm = s.memo(function (e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([nr.A], () => nr.A.getGuild(t.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, ns.u)(t.guildId) : await t4.A.joinGuild(t.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = na.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, nl.mZ)() }),
        c = na.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: nc.Nr,
            onContextMenu: function (e) {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, l.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: nc.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: nc.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: nc.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: nc.$f,
                            children: (0, l.jsx)(ne.Ay, {
                                mask: ne.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: nc.SA,
                                    children: (0, l.jsx)(nn.Ay, {
                                        className: nc.rZ,
                                        iconSrc: c,
                                        guild: (0, no.xi)(t),
                                        size: nn.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nc.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nc.DD,
                            children: [
                                (0, l.jsx)(ni.A, { className: nc.n2, guild: t }),
                                (0, l.jsx)(_.E, {
                                    className: nc.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: nc.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: nc.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: nc.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nc.JX }),
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
                                        className: nc.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nc.Li }),
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
                            className: nc.PD,
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
                (0, l.jsx)(nh, { entry: t }),
            ],
        })
    );
});
var nA = n(946116),
    np = n(844086),
    ng = n(770679);
function nx(e) {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, t6.Ay)(),
        d = null != o && o <= 800;
    return (0, l.jsxs)("div", {
        ref: r,
        className: ng.wx,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: ng.F0,
                src: d ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
            }),
            (0, l.jsx)("div", {
                className: ng.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(ng.VW, { [ng.eO]: d }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            className: ng.dc,
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            className: ng.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)(f.N, {
                            theme: W.NJ.LIGHT,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: a()(ng.MT, e),
                                    children: (0, l.jsx)(t9.I, {
                                        query: t,
                                        "aria-label": z.intl.string(z.t.nL2wKD),
                                        placeholder: z.intl.string(z.t.nL2wKD),
                                        onChange: n,
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
let nf = function (e) {
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
        className: np.$$,
        children: (0, l.jsxs)(t5.Gt, {
            className: np.XG,
            children: [
                (0, l.jsx)(nx, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(t5.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(t7.V, {
                        className: ng.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                t7.V.Item,
                                { className: ng.YU, id: nA.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                nA.mU.ALL,
                            ),
                            (0, nA.g2)(t.id).map((e) => {
                                let { value: t, label: n } = e;
                                return (0, l.jsx)(
                                    t7.V.Item,
                                    { className: ng.YU, id: t, children: `${n} ${null != h[t] ? `(${h[t]})` : ""}` },
                                    t,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == n
                    ? (0, l.jsx)(g.y, { className: np.u1 })
                    : n?.map((e, t) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: ng.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: np.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(nm, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(nu, { onClick: i }) : null,
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
var nI = n(370876),
    nj = n(28863),
    nC = n(364522),
    nE = n(792831),
    ny = n(211862);
let nb = function (e) {
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
    if (c) t = (0, l.jsx)("div", { className: np.$$, children: (0, l.jsx)(g.y, { className: np.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, l.jsx)(nj.Anchor, { onClick: o, children: e }, t);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        t = (0, l.jsxs)("div", {
            className: ny.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: ny.av, children: e }),
            ],
        });
    } else t = (0, l.jsx)("div", { className: np.vY, children: d.map((e) => (0, l.jsx)(nm, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: np.$$,
        children: (0, l.jsxs)(nC.Ar, {
            className: np.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: ny.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ny.Dr,
                            children: [
                                (0, l.jsx)(t_.D, {
                                    onClick: r,
                                    className: ny.UE,
                                    children: (0, l.jsx)(nE.A, { direction: nE.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: ny.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(t9.I, {
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
var n_ = n(650583);
let nv = function (e) {
    let { channel: t, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([tZ.A], () => {
            let e = tZ.A.getCurrentCategoryId(t.id),
                n = tZ.A.getDirectoryEntries(t.id, e === nA.mU.ALL ? null : e),
                i = tZ.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: tZ.A.getDirectoryAllEntriesCount(t.id),
                isLoading: tZ.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(t.id);
            null != e &&
                t$.h.wait(() => {
                    (0, tX.ack)(
                        t.id,
                        {
                            object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: eo.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let u = s.useMemo(
            () =>
                null != a
                    ? (function (e, t) {
                          if (t !== nA.mU.ALL) return [{ entries: (0, nI._t)(e), appendEndCard: !0 }];
                          let n = [],
                              i = (0, nI.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && n.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, nI.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([tJ.A], () => {
            let { mostRecentQuery: e, fetching: n } = tJ.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: tJ.A.getSearchResults(t.id, e) };
        }),
        [f, I] = s.useState(h),
        j = "" !== h,
        C = { mostRecentQuery: h },
        E = s.useRef(C);
    (s.useEffect(() => {
        E.current = C;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = E.current;
            (tQ.Yc(t.id), tQ.YS(t.id), I(e));
        }, [t.id]),
        s.useEffect(() => {
            en.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [t.id, i.id, r]));
    let y = (0, t0.b)(t),
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
                                      currentCategoryId: r === nA.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, t.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === n_.dh.ENTER &&
            (tQ.Se(t.id, f),
            en.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: t.id, directory_guild_id: i.id }));
    }
    function v() {
        (I(""), tQ.BA(t.id));
    }
    return j
        ? (0, l.jsx)(nb, {
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
          ? (0, l.jsx)("div", { className: np.$$, children: (0, l.jsx)(g.y, { className: np.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: np.$$, children: (0, l.jsx)(t3, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(nf, {
                  channel: t,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      tQ.uU(t.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var nN = n(826673),
    nT = n(93055),
    nS = n(47167),
    nR = n(688438),
    nO = n(353428),
    nP = n(976860),
    nM = n(288254),
    nL = n(873614),
    nk = n(649852),
    nD = n.n(nk),
    nw = n(789645),
    nG = n(163126),
    nU = n(182061),
    nF = n(886393),
    nH = n(307623),
    nV = n(660273),
    nB = n(707792),
    nY = n(41402),
    nW = n(271456),
    nz = n(200273),
    nq = n(565846),
    nK = n(57907),
    n$ = n(375500),
    nX = n(707653),
    nQ = n(50268),
    nJ = n(378570),
    nZ = n(162199),
    n0 = n(713608),
    n1 = n(473503),
    n2 = n(901472),
    n3 = n(267102),
    n9 = n(474397),
    n5 = n(486974),
    n7 = n(39470);
function n6(e) {
    let { channel: t } = e,
        n = s.useContext(en.AnalyticsContext),
        i = (0, n3.aL)(),
        r = z.intl.string(n7.default["Beo/7v"]),
        { firstMessage: a } = (0, n1.OA)(t),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(td.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, nJ.iN)(t.id),
                      (0, n9.A)(),
                      (0, n2.z)(t.guild_id, d, t.id, {
                          modViewPanel: n5.g.INFO,
                          sourceLocation: location ?? n.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: n0.q,
              "aria-label": r,
          })
        : null;
}
var n8 = n(780338),
    n4 = n(782603),
    ie = n(857071),
    it = n(607508),
    ii = n(914703),
    il = n(37411);
function is(e) {
    let { channel: t } = e,
        n = (0, it.X)(t),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([ie.A], () => null != t.guild_id && ie.A.isLurking(t.guild_id));
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
    return (0, l.jsx)(tt.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: tt.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(ii.A, { ...e, channel: t, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(td.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: n === il.CP.NO_MESSAGES ? n8.BellSlashIcon : n4.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var ir = n(747926);
function ia(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(tt.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: tt.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(io, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(td.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: ts.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function io(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nV.A)(t, "Sidebar Overflow"),
        r = (0, nY.A)(t),
        a = (0, nK.A)(t),
        o = (0, n$.A)(t),
        d = (0, nU.A)(t),
        c = (0, nB.A)(t),
        u = (0, nq.A)(t.id),
        h = (0, nz.A)(t),
        m = (0, nH.A)(t),
        A = (0, nF.A)(t),
        p = (0, nQ.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, nX.A)(t),
        x = (0, nW.A)(t),
        f = (0, nG.$)(1e3);
    function I() {
        (0, nJ.iN)(t.id);
    }
    function j(e) {
        let n = nD()(() => {
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
    return (0, l.jsxs)(tn.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ti.rX, {
                children: [s, (0, l.jsx)(ti.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: I })],
            }),
            (0, l.jsxs)(ti.rX, { children: [a, o] }),
            (0, l.jsxs)(ti.rX, { children: [h, r, u, x] }),
            (0, l.jsxs)(ti.rX, {
                children: [
                    (0, l.jsx)(ti.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: tm.t,
                        trailingIndicator: { type: "icon", icon: tm.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I());
                        },
                    }),
                    (0, l.jsx)(ti.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: tm.t,
                        trailingIndicator: { type: "icon", icon: tm.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(ti.rX, { children: [g, d, c, m] }),
            (0, l.jsxs)(ti.rX, { children: [A, p] }),
        ],
    });
}
function id(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, l.jsx)(td.Ay.Icon, {
            icon: nw.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, ir.xu)((0, nZ.j)(t), n ?? t.parent_id),
        });
    return t.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  t.isForumPost() ? null : (0, l.jsx)(is, { channel: t }),
                  t.isModeratorReportChannel() ? (0, l.jsx)(n6, { channel: t }) : null,
                  (0, l.jsx)(ia, { channel: t }),
                  i,
              ],
          });
}
var ic = n(31717),
    iu = n(853742),
    ih = n(85190);
function im(e) {
    let { channelId: t } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([nr.A], () => nr.A.getGuild(i?.getGuildId())),
        o = (0, nS.Ay)(i),
        d = (0, nM.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iu.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(nL.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(id, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: ic.C.ChannelMessage }),
            (0, l.jsx)(td.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nO.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
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
                        null != i && (0, nP.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ih.T,
                children: (0, l.jsx)(nR.A, { channel: i, guild: a, chatInputType: tE.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var iA = n(925166),
    ip = n(605117),
    ig = n(857253),
    ix = n(872363);
let iI = function (e, t) {
    t$.h.wait(() => {
        t$.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
    });
};
var ij = n(561446),
    iC = n(300233),
    iE = n(499211),
    iy = n(468689),
    ib = n(529942),
    i_ = n(739455),
    iv = n(709017);
function iN(e) {
    let { guildId: t } = e;
    return (0, l.jsx)("div", {
        className: iv.t7,
        children: (0, l.jsxs)("div", {
            className: iv.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iv.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iv.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iv.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, ib.rf)(t),
                                        iy.default.open(
                                            t,
                                            eo.BEX.ROLE_SUBSCRIPTIONS,
                                            void 0,
                                            eo.nd0.ROLE_SUBSCRIPTION_TIERS,
                                        ),
                                        (0, i_.Fx)(t));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iT = n(599941),
    iS = n(29385),
    iR = n(950344),
    iO = n(217530),
    iP = n(162093),
    iM = n(325348);
function iL(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, iS.e)({ guildId: t, channelId: n }),
        r = (0, iT.uk)(t),
        a = (0, iT.Tq)(t),
        o = (0, m.bG)([nr.A], () => nr.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        u = (0, nS.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let t of r) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [r]);
    return ((0, iR.A)({
        guildId: t,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iM.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iM.__invalid_spinner }),
          })
        : (0, l.jsxs)(nC.Ar, {
              className: iM.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iM.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iM.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iO.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iP.A,
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
var ik = n(138298),
    iD = n(940382),
    iw = n(761640);
function iG(e) {
    let { channelId: t } = e,
        n = (function (e) {
            let { hasUnread: t, mentionCount: n } = (0, m.cf)(
                [eQ.Ay],
                () => ({ hasUnread: eQ.Ay.hasUnread(e), mentionCount: eQ.Ay.getMentionCount(e) }),
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
        i = (0, m.bG)([iw.Ay], () => iw.Ay.getCurrentSidebarChannelId(t) === t, [t]),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(t)?.getGuildId(), [t]);
    return (0, l.jsx)(td.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: tO.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? ik.A.closeChannelSidebar(t)
                : ik.A.openChannelAsSidebar({
                      guildId: r,
                      channelId: t,
                      baseChannelId: t,
                      details: { type: iD.kk.CHAT },
                  });
        },
        selected: i,
        badge: n,
    });
}
var iU = n(284252);
function iF(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iw.Ay], () => iw.Ay.getSection(t), [t]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([tU.A], () => (tU.A.getChannelConversations(t)?.length ?? 0) > 0, [t]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(td.In, {
        onClick: j.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: tO.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iU.q : void 0,
        selected: n,
        badge: r,
    });
}
var iH = n(967198);
function iV(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iw.Ay], () => iw.Ay.getSection(t)),
        i = (0, m.bG)([iH.A], () => iH.A.getGuildId()),
        s = n === eo.YvQ.MEMBERS;
    return (0, l.jsx)(td.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !s }),
                j.A.toggleMembersSection());
        },
        selected: s,
    });
}
var iB = n(187360),
    iY = n(366605),
    iW = n(945830);
let iz = function (e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        [i, r] = s.useState(!1),
        a = (0, n3.aL)(),
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
        (0, l.jsx)(tt.Y, {
            targetElementRef: o,
            shouldShow: i,
            animation: tt.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => r(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(iW.A, { ...e, onJump: h, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, l.jsx)(td.In, {
                    ...e,
                    ref: o,
                    onClick: d,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iY.t,
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
var iq = n(306788),
    iK = n(863922),
    i$ = n(822074),
    iX = n(521732);
function iQ(e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        i = (0, m.bG)([i$.A], () => i$.A.shouldShowTopicsBar());
    return (0, l.jsx)(td.Ay.Icon, {
        icon: iq.K,
        onClick: function () {
            (en.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iX.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, iK.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: n,
    });
}
var iJ = n(885574),
    iZ = n(947094),
    i0 = n(919577),
    i1 = n(207777),
    i2 = n(422844),
    i3 = n(435470),
    i9 = n(892110),
    i5 = n(45494);
function i7(e) {
    let { channel: t } = e,
        n = (0, i3.S4)(t),
        i = (0, m.bG)([iZ.A], () => iZ.A.hasHidden(t.id)),
        s = (0, i9.l)(t.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, i2.R)(t.id),
        d = (0, m.bG)(
            [i1.A, i5.A],
            () => !!(i1.A.getThreadIds(t.id, r, a, o).length > 0) || !!(i5.A.getThreads(t.id, r, a, o).length > 0),
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
    return (0, l.jsx)(td.In, {
        tooltip: u,
        icon: iJ.CircleInformationIcon,
        onClick: function () {
            return i0.A.hideAdminOnboarding(t.id, !i);
        },
        selected: !i,
    });
}
var i6 = n(290136),
    i8 = n(975571),
    i4 = n(490094);
function le() {
    let e = z.intl.string(i4.default.pdipXI);
    return (0, l.jsx)(td.In, {
        tooltip: e,
        icon: i6.CircleQuestionIcon,
        onClick: function () {
            window.open(i8.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lt = n(742589),
    ln = n(43105),
    li = n(428689),
    ll = n(978940),
    ls = n(387755),
    lr = n(730852),
    la = n(641703),
    lo = n(379848),
    ld = n(753727),
    lc = n(625075),
    lu = n(222692),
    lh = n(442353),
    lm = n(470710),
    lA = n(186111),
    lp = n(25578),
    lg = n(994500),
    lx = n(977997),
    lf = n(818023),
    lI = n(49999),
    lj = n(731854);
class lC extends s.PureComponent {
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
                : lp.Ay.supports(lj.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : n && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lc.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(td.Ay.Icon, { icon: li.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(td.Ay.Icon, {
            ref: this.iconRef,
            icon: ll._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lo.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(ln.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lf.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(lI.i.USER_DISMISS),
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
            return ls.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        }
        t ? (0, lh.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lr.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, nN.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lI.i.AUTO }),
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
        (0, lh.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, lu.A)();
    };
}
function lE(e) {
    let { channel: t } = e,
        n = (0, ld.A)(),
        i = (0, m.bG)([tj.A], () => tj.A.getMode(t.id)),
        s = (0, m.bG)([lx.A], () => lx.A.isInChannel(t.id)),
        r = (0, m.bG)([P.Ay], () => P.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lm.A], () => ({
            callActive: lm.A.isCallActive(t.id),
            callUnavailable: lm.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lg.A], () => ({
            notFriend: t.type === eo.rbe.DM && null != d && !lg.A.isFriend(d),
            isBlocked: t.type === eo.rbe.DM && null != d && lg.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, n3.Us)(),
        g = [],
        x = (0, la.A)(t.id),
        f = (0, m.bG)([lA.A], () => lA.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(lC, {
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
var ly = n(452015),
    lb = n(765178),
    l_ = n(231483),
    lv = n(544231),
    lN = n(338510),
    lT = n(151119),
    lS = n(278941),
    lR = n(665909),
    lO = n(327337);
let lP = s.memo(function (e) {
    let { channel: t } = e,
        i = (0, lN.u)(t.id),
        r = (0, lT.S)(t.id),
        a = (0, lS.e)(t.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lA.A], () => lA.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lb.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lv.xi)(t.id, [a.id]);
            }, 5e3),
            (0, lR.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lR.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lb.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lv.bg)(t.id);
                }, 5e3)));
    }, [t, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lR.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lR.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lv.xi)(t.id, [a.id]),
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
                    { modalKey: lO.V },
                ),
                (0, lR._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lR.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, t]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(td.Ay.Icon, {
                  icon: l_.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lM = n(262763),
    lL = n(406704),
    lk = n(576705);
let lD = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, ld.A)(),
        i = (0, m.bG)([lx.A], () => lx.A.isInChannel(t.id)),
        r = (0, m.bG)([lx.A], () => !u().isEmpty(lx.A.getVoiceStatesForChannel(t.id))),
        a = (0, m.bG)([lk.A], () => lk.A.can(eo.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, iE.A)(t.id),
        d = (0, lL.Id)(t),
        { enabled: c } = lL.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lM.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(td.Ay.Icon, {
              icon: ll._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lw = n(812991),
    lG = n(47675),
    lU = n(999291);
function lF() {
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
function lH(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        i = (0, m.bG)([iw.Ay], () => iw.Ay.getSection(t.id, t?.isDM())),
        s = (0, lU.Ay)(t.getRecipientId()),
        r = lF(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(td.In, {
        disabled: !r || n,
        tooltip: !r || n ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lw.n,
        onClick: function () {
            ((0, lG.am)({ displayProfile: s, isProfileOpen: !a }), j.A.toggleUserProfileSidebarSection());
        },
        selected: a && !n,
    });
}
let lV = {};
class lB extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            lV[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = lV[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return lV;
    }
}
let lY = new lB(t$.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = lV[n];
        return null == i ? ((lV[n] = new Set()), lV[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != lV[t.id] && !t.unavailable && (delete lV[t.id], !0);
    },
});
var lW = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lz = n(376943),
    lq = n(394953),
    lK = n(683063),
    l$ = n(403581),
    lX = n(241541),
    lQ = n(709066),
    lJ = n(87664),
    lZ = n(247676),
    l0 = n(695526);
n(667532);
var l1 = n(403362);
n(696101);
let l2 = [],
    l3 = er.Ay.getEnableHardwareAcceleration();
function l9(e) {
    let { user: t, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, m.bG)([lg.A], () => lg.A.getNickname(t.id)),
        h = (0, lJ.A)(t.id),
        A = s.useRef(null);
    function p(e) {
        (0, C.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("463317"),
                n.e("926132"),
                n.e("146652"),
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
                n.e("309291"),
                n.e("307059"),
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
            O.A.startTyping(i.id));
    }
    let x = (0, k.r)({ user: t }),
        [f, I] = s.useState(!1);
    return (0, l.jsx)(K.A, {
        targetElementRef: A,
        user: t,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => I(!1),
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
                    shouldAnimateStatus: l3,
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
                t.id,
            );
        },
    });
}
function l5(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function l7(e) {
    let { channel: t } = e,
        n = ee.default.getCurrentUser(),
        i = n?.isStaff(),
        { analyticsLocations: r } = (0, L.Ay)(M.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lg.A, ee.default, Q.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = ee.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(l1.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lg.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? l2,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: l2 });
                let s = [];
                for (let e of i) {
                    let t = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(t);
                }
                return { listItems: s };
            },
            [t],
            l5,
        );
    s.useEffect(() => {
        en.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, lZ.A)({ useNitroCapExperiment: !0 }),
        h = (0, l0.qH)(),
        A = t.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(L.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(nC.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(D.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(lK.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(l$.t, {
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
                                o && (0, l.jsx)(lQ.A, { type: lQ.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                l9,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(ly.NE, {
                                      channel: t,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: lX.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: ly.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var l6 = n(322338),
    l8 = n(898029),
    l4 = n(36537);
function se() {
    return (0, l.jsx)("div", {
        className: l4.zt,
        children: (0, l.jsx)("header", {
            className: l8.wL,
            children: (0, l.jsxs)("div", {
                className: l8.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: l8.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: l8.u1,
                            itemClassName: l8.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var st = n(747376),
    sn = n(163328),
    si = n(425557),
    sl = n(270003),
    ss = n(150934),
    sr = n(452027),
    sa = n(95477),
    so = n(281595),
    sd = n(465532),
    sc = n(579872),
    su = n(119031),
    sh = n(408018),
    sm = n(479909),
    sA = n(822610),
    sp = n(915089),
    sg = n(314307),
    sx = n(636922),
    sf = n(931664),
    sI = n(631576),
    sj = n(885386),
    sC = n(232835),
    sE = n(522602),
    sy = n(806150),
    sb = n(518960),
    s_ = n(753738);
function sv(e, t) {
    return { type: e, message: t ?? null };
}
function sN(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
var sT = n(659617),
    sS = n(474078),
    sR = n(636537),
    sO = n(152367),
    sP = n(147087);
async function sM(e) {
    try {
        let t = await sR.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, sR.fT)(),
        });
        return t.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var sL = n(55294),
    sk = n(143161),
    sD = n(909833);
let sw = tE.oU.THREAD_CREATION;
function sG(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        { analyticsLocations: r } = (0, L.Ay)(M.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(L.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: sk.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: ic.C.FirstThreadMessage }),
                          (0, l.jsx)(sU, { parentChannelId: t }),
                          (0, l.jsx)(sF, { parentChannel: s, parentMessageId: n, location: i }),
                      ],
                  }),
              }),
          });
}
function sU(e) {
    let { parentChannelId: t } = e,
        n = s.useCallback(() => {
            let e = ic.A.getThreadSettings(t),
                n = ic.A.getDraft(t, ic.C.FirstThreadMessage).trim(),
                i = sE.A.getUploads(t, ic.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? sc.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, ir.bA)(t);
                      },
                  })
                : (0, ir.bA)(t);
        }, [t]);
    return (0, l.jsxs)(td.Ay, {
        toolbar: (0, l.jsx)(td.Ay.Icon, { icon: nw.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: n }),
        children: [
            (0, l.jsx)(td.Ay.Icon, { icon: sn.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(td.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sF(e) {
    let t,
        { parentChannel: n, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([P.Ay], () => P.Ay.messageGroupSpacing),
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
            let n = (0, m.bG)([ic.A], () => ic.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(n),
                r = s.useCallback(
                    (n) => {
                        (l((e) => ({ ...e, ...n })), sd.A.changeThreadSettings(e.id, { ...n, parentMessageId: t }));
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(n, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, t) {
            let [n, i] = s.useState((0, sh.N3)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        let l = ic.A.getDraft(e.id, ic.C.FirstThreadMessage);
                        ((0 === l.length || !0 === n) && i((0, sh.ur)(l)), t(ic.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        n(!0),
                        ic.A.addChangeListener(n),
                        () => {
                            ic.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, u),
        g = (0, sT.EN)(n),
        {
            isGeneratingAI: x,
            enableAIFeatures: f,
            getThreadNameInputAccessory: I,
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
                h = (0, sP.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != n) {
                                let i = sC.A.getMessage(t.id, n);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let t = await sM(e);
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
                                icon: sO.D,
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
                                  children: (0, l.jsx)(tv.K, {
                                      icon: sO.D,
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
            nameError: j,
            messageError: C,
            submit: E,
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
                p = (0, sL.Ay)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: ir.JA,
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
                                (l = sf.A.getStickerPreview(t.id, sw.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sE.A.getUploads(t.id, ic.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sv(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sv(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, sy.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sw,
                            channel: null == n ? t : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), sv(1, (0, s_.cw)(x, t?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sv(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sI.x5)(t.id, sw.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, sT.Iy)(c, g) ? si.t : sn.y;
    return (0, l.jsx)("div", {
        className: sk.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(sk.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), E());
                },
                className: sk.Zd,
                children: [
                    (0, l.jsx)(nC.Ip, {
                        className: sk.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sk.bv,
                            children: [
                                (0, l.jsxs)(sg.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(sD.P0, sk.P0),
                                            children: (0, l.jsx)(b, { className: sD.Kk }),
                                        }),
                                        (0, l.jsxs)(sl.n, {
                                            children: [
                                                (0, l.jsx)(sV, {
                                                    parentChannel: n,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: j,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: I,
                                                }),
                                                (0, l.jsx)(sH, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sY, { parentChannel: n, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sk.Eh,
                        children: [
                            (0, l.jsx)(sB, {
                                parentChannel: n,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: E,
                                error: C,
                            }),
                            (0, l.jsx)(su.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: sk.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sH(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, sT.Iy)(n, s),
        a = (0, l.jsx)(ss.S, {
            disabled: s === sT.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return t || s === sT.jk.Disabled
        ? null
        : (0, l.jsx)(sr.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function sV(e) {
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
        h = sN(r, { content: u }),
        m = (0, sT.l1)(t, n),
        A = null != n && !d,
        p = (0, sp.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sa.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, sS.A)(e, !1) }), "" !== e ? O.A.startTyping(t.id) : O.A.stopTyping(t.id));
        },
        onBlur: function () {
            let e = (0, sS.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function sB(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, n, l) => {
                (sd.A.saveDraft(t.id, n, ic.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== n && e.textValue !== n ? O.A.startTyping(t.id) : "" === n && O.A.stopTyping(t.id),
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
    let x = (0, m.bG)([lk.A], () => lk.A.can(eo.xBc.ATTACH_FILES, t)),
        f = sN(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sA.A, { channelId: t.id, type: sw, canAttachFiles: x }),
            (0, l.jsx)("div", { className: sk.xN, children: (0, l.jsx)(so.U, { error: f }) }),
            (0, l.jsx)(sm.Ay, {
                type: sw,
                channel: t,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: a()(sk.gM, sk.Yy),
                innerClassName: a()(sk.SL, { [sk.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: sb.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sY(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, m.bG)([sC.A], () => (null == n ? null : sC.A.getMessage(t.id, n))),
        s = sj.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sx.A, {
              className: sk.IL,
              message: i,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sW = n(305866),
    sz = n(707539),
    sq = n(702513),
    sK = n(272736);
function s$(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, e4.ni)(t),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            (n || (0, sz.D3)("Popout"), i(!n));
        }, [n]);
    return (0, l.jsx)(tt.Y, {
        targetElementRef: r,
        animation: tt.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: o,
        renderPopout: function () {
            return (0, l.jsx)(sW.l, {
                children: (0, l.jsx)(sq.A, { className: sK.T, channel: t, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(td.In, {
                ...e,
                ref: r,
                className: sK.Kk,
                onClick: d,
                icon: sn.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: n ? null : z.intl.string(z.t.B2panI),
                disabled: a,
                selected: n,
            });
        },
    });
}
var sX = n(40389),
    sQ = n(148494),
    sJ = n(56562);
function sZ(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(tt.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: tt.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(s0, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(td.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: ts.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function s0(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nU.A)(t),
        r = (0, nB.A)(t),
        a = (0, nq.A)(t.id),
        o = (0, nz.A)(t),
        d = (0, nQ.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, nF.A)(t),
        h = (0, nH.A)(t),
        A = (0, nV.A)(t, "Toolbar Overflow"),
        p = (0, nY.A)(t),
        g = (0, sX.A)(t),
        x = (0, nX.A)(t),
        f = (0, nW.A)(t),
        I = t.isThread()
            ? (0, l.jsx)(ti.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      sQ.A.jumpToMessage({ channelId: t.id, messageId: "0", jumpType: sJ.vx.INSTANT });
                  },
              })
            : null,
        j = sj.SY.useSetting(),
        C = (0, m.bG)([lx.A], () => !u().isEmpty(lx.A.getVoiceStatesForChannel(t.id))),
        E = (0, m.bG)([ew.A], () => null != t.parent_id && ew.A.getChannel(t.parent_id)?.type === eo.rbe.GUILD_APP, [
            t.parent_id,
        ]);
    return (0, l.jsxs)(tn.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ti.rX, { children: [A, g] }),
            (0, l.jsxs)(ti.rX, {
                children: [
                    I,
                    o,
                    p,
                    a,
                    !j || C || E
                        ? null
                        : (0, l.jsx)(ti.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, ir.JA)(t);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(ti.rX, { children: [x, s, r, h] }),
            (0, l.jsxs)(ti.rX, { children: [c, d] }),
        ],
    });
}
var s1 = n(332456),
    s2 = n(973854),
    s3 = n(62502);
function s9(e) {
    var t;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([nr.A], () => nr.A.getGuild(d?.getGuildId())),
        h = (0, nS.Ay)(d),
        A = (0, nM.Uf)(d);
    ((t = d),
        (i = (0, m.bG)([lx.A], () => null != t && !u().isEmpty(lx.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            i &&
                null != t &&
                (t$.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, nJ.N9)(t, { source: il.H9.VOICE_AUTO_OPEN }));
        }, [i, t]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, s1.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, eR.qL)(d.id), channel_view: o }),
                (0, s2.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(nL.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(id, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: ic.C.ChannelMessage }),
            (0, l.jsx)(td.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nO.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
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
                        null != d && (0, nJ.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: s3.T,
                children: (0, l.jsx)(nR.A, { channel: d, guild: c, chatInputType: tE.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var s5 = n(210714),
    s7 = n(402860),
    s6 = n(707554),
    s8 = n(140735),
    s4 = n(590180),
    re = n(372320),
    rt = n(562153),
    rn = n(945810);
let ri = (0, rn.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rl(e) {
    return ri.useConfig({ location: e }).enabled;
}
var rs = n(215530),
    rr = n(454719),
    ra = n(736653),
    ro = n(311016),
    rd = n(480335),
    rc = n(713517),
    ru = n(397562),
    rh = n(183555),
    rm = n(718019),
    rA = n(365607),
    rp = n(915614),
    rg = n(308244),
    rx = n(743987),
    rf = n(900179),
    rI = n(946356),
    rj = n(465829),
    rC = n(35241),
    rE = n(587168),
    ry = n(442228),
    rb = n(744808);
let r_ = (0, rn.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rv = n(827428);
function rN(e) {
    let { type: t, anchor: n } = e;
    return "staple" === t && "bottom" !== n;
}
function rT(e) {
    let { context: t, analyticsLocations: n, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = r_.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lG.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rv.lS,
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
              className: rv.qr,
              children: (0, l.jsx)(t_.D, {
                  onClick: o,
                  className: rv.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rv.xQ, children: [(0, l.jsx)(rb.A, { frame: i, filterLayer: rN }), d] })
        : d;
}
var rS = n(518477),
    rR = n(996988),
    rO = n(207634),
    rP = n(561419),
    rM = n(396095);
function rL(e) {
    let { user: t, channel: n, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, ro.A)(t.id),
        o = (0, lU.Ay)(t.id),
        d = (0, ra.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, L.Ay)(M.A.USER_PROFILE_SIDEBAR),
        h = (0, rh.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, ru.A)(u, o, rS.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rc.A)(m);
    function g() {
        (0, s7.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(L.f5, {
        value: u,
        children: (0, l.jsx)(rh.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rI.A, {
                ref: m,
                user: t,
                displayProfile: o,
                themeType: rR.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(rP.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(nC.d_, {
                        className: i ? rP.BE : void 0,
                        children: [
                            (0, l.jsx)(rE.A, { children: (0, l.jsx)(rC.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: rP.wx,
                                children: [
                                    (0, l.jsx)(rp.A, {
                                        user: t,
                                        displayProfile: o,
                                        themeType: rR.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rm.A, {
                                        user: t,
                                        displayProfile: o,
                                        channelId: n.id,
                                        avatarSize: rO.T[rR.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: rM.rf,
                                children: [
                                    (0, l.jsx)(rj.Ay, {
                                        user: t,
                                        guildId: n.guild_id,
                                        displayName: rt.Ay.getName(null, n.id, t),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rA.A, {
                                            displayProfile: o,
                                            themeType: rR.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(ry.A, {
                                                      userId: t.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rf.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rx.A, { userId: t.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rI.A.Overlay, {
                                              className: rM.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rf.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rg.A, {
                                                              userBio: o?.bio,
                                                              userId: t.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rf.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rx.A, { userId: t.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(rT, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rd.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var rk = n(331322),
    rD = n(249790),
    rw = n(254828),
    rG = n(783123),
    rU = n(966430);
function rF(e) {
    let { user: t, channel: n, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lU.Ay)(t.id),
        o = (0, ra.Ay)(),
        d = (0, m.bG)([lg.A], () => lg.A.isBlocked(t.id)),
        { analyticsLocations: c } = (0, L.Ay)(d ? M.A.BLOCKED_PROFILE_PANEL : M.A.IGNORED_PROFILE_PANEL),
        u = (0, rh.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, ru.A)(c, a, rS.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(L.f5, {
        value: c,
        children: (0, l.jsx)(rh.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rI.A, {
                ref: h,
                user: t,
                displayProfile: a,
                themeType: rR.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(nC.d_, {
                    children: (0, l.jsxs)("div", {
                        className: rU.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: rU.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: rU.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: rU.N1,
                                        children: [
                                            (0, l.jsx)(rD.A, { user: t }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rt.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(rk.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(rG.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lG.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(rw.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lG.Wn)({
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
var rH = n(202091),
    rV = n(717421),
    rB = n(31956),
    rY = n(673843),
    rW = n(594832),
    rz = n(321191),
    rq = n(679492),
    rK = n(439053),
    r$ = n(312381),
    rX = n(657538),
    rQ = n(984545),
    rJ = n(193738),
    rZ = n(211031),
    r0 = n(394816),
    r1 = n(695366),
    r2 = n(922590),
    r3 = n(821269),
    r9 = n(93246),
    r5 = n(351906),
    r7 = n(383199),
    r6 = n(559506),
    r8 = n(361311),
    r4 = n(931481),
    ae = n(791556),
    at = n(501193),
    an = n(383448),
    ai = n(646986),
    al = n(243166),
    as = n(812993),
    ar = n(123292),
    aa = n(840411);
let ao = (0, rn.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var ad = n(666810),
    ac = n(394300),
    au = n(575593),
    ah = n(44120),
    am = n(75678),
    aA = n(317560),
    ap = n(99161),
    ag = n(827258),
    ax = n(661492),
    af = n(146423),
    aI = n(662349),
    aj = n(479026),
    aC = n(636374),
    aE = n(699976),
    ay = n(202541),
    ab = n(733484),
    a_ = n(880465);
function av(e) {
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
        { trackUserProfileWishlistAction: g } = (0, rh.NJ)(),
        x = rl("DMSidePanelWishlistItemCard") ? aE.y.SIZE_78 : aE.y.SIZE_90,
        f = aE.Z[x],
        I = s.useCallback(() => {
            (g({
                action: rS.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                h());
        }, [n, r, h, g]),
        j = s.useCallback(() => {
            (g({
                action: rS.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                m());
        }, [m, n.id, r, n.productLine, g]),
        {
            onBodyClick: C,
            onOverlayClick: E,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, aC.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: j }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: ab.kL,
        children: (0, l.jsxs)(af.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: n,
            user: i,
            spec: f,
            cardStyle: a()(ab.Nr, o),
            skuPreviewStyle: a()(ab.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: C,
            "aria-label":
                ((t = b ? (0, ax.T)(n) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, ax.T)(n) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: t }) : t),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(ag.A, { className: ab.Pf }),
                y &&
                    (0, l.jsx)(aI.A, {
                        spec: f,
                        onClick: E,
                        isHoveringOrFocusing: N,
                        label: _,
                        icon: _.length < 6 ? v : void 0,
                    }),
                A?.(y && N),
            ],
        }),
    });
}
function aN(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, L.Ay)(
            ...(i ?? []),
            M.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, ap.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: ay.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [t, n, a]),
        d = s.useCallback(() => {
            (0, aA.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: ay.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.id, t.applicationId, n, a]);
    return (0, l.jsx)(av, {
        sku: t,
        analyticsLocations: a,
        wishlistOwner: n,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function aT(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, ah.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: ay.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, aj.e)({ sku: t, giftRecipient: n, giftingOrigin: ay.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(ab.ML, {
                    [ab.M]: t?.tenantMetadata?.collectibles?.type === au.R.AVATAR_DECORATION,
                    [ab.Hm]: t?.tenantMetadata?.collectibles?.type === au.R.PROFILE_EFFECT,
                    [ab.hH]: t?.tenantMetadata?.collectibles?.type === au.R.PROFILE_FRAME,
                    [ab.qF]: t?.tenantMetadata?.collectibles?.type === au.R.NAMEPLATE,
                    [ab.l2]: t?.tenantMetadata?.collectibles?.type === au.R.BUNDLE,
                }),
            [t?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(av, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function aS(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = t.id;
            (0, am.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: ay.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        u = r === rW.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(av, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(a_.MO, { [ab.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(ab.fi, { [ab.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(ab.p7, { [ab.SW]: h.length >= 10, [ab.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function aR(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(aN, { sku: t, ...n });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(aT, { sku: t, ...n });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(aS, { sku: t, ...n });
        default:
            return null;
    }
}
var aO = n(158045),
    aP = n(249203),
    aM = n(419731),
    aL = n(695904),
    ak = n(116331),
    aD = n(713348),
    aw = n(535089),
    aG = n(815637);
function aU(e) {
    let { unownedWishlistItems: t, profileOwner: n, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, L.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rh.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, ak.A)(n),
        g = (0, m.bG)([aP.A], () => aP.A.getEntry(n.id)?.lastViewedAt ?? null, [n.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: rS.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => t ?? [], [t]),
        I = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && c({ wishlistId: t, action: n, productLines: i });
            },
            [c],
        ),
        j = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: rW.uS.WISHLIST }));
            if (a && e.length < 3) {
                let t = f.some((e) => aO.Ay.isPremiumSku(e.skuId));
                if (!aO.Ay.isPremiumAtLeast(n.premiumType, ay.PremiumTypes.TIER_2) && !t) {
                    let t = ac.A.fromSKU((0, aa.rI)());
                    null != t && e.push({ item: t, source: rW.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, n.premiumType]),
        C = (0, s.useMemo)(
            () =>
                new Set(
                    j.map((e) => {
                        let { item: t } = e;
                        return t.skuProductLine;
                    }),
                ),
            [j],
        ),
        E = (0, aw.A)({ wishlistId: r ?? null, onAction: I, productLines: C }),
        y = (0, s.useMemo)(
            () =>
                j
                    .map((e, t) => {
                        let { item: i, source: s } = e;
                        return null == i.sku
                            ? null
                            : (0, l.jsx)(
                                  aR,
                                  {
                                      sku: i.sku,
                                      index: t,
                                      wishlistOwner: n,
                                      wishlistId: r,
                                      analyticsLocations: o,
                                      onViewWishlist: x,
                                      source: s,
                                      isNew: h && (0, aM.f3)(i.addedAt, g),
                                  },
                                  i.skuId,
                              );
                    })
                    .filter(l1.Vq),
            [o, x, n, j, r, h, g],
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
              children: (0, l.jsxs)(rI.A.Overlay, {
                  ref: E,
                  className: aG.kL,
                  children: [
                      p && (0, l.jsx)(aL.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: aG.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: aG.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(as.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: tP.A.colors.BADGE_BACKGROUND_BRAND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(ar.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(s6.F, { children: (0, l.jsx)("div", { className: aG.vY, children: y }) }),
                  ],
              }),
          });
}
function aF(e) {
    let { isLoading: t, unownedWishlistItems: n, canSeeWishlist: i = !1, ...s } = e,
        r = ao.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, aD.A)(s.profileOwner), t || s.profileOwner.bot || ((null == n || 0 === n.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(ad.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(aU, { ...s, unownedWishlistItems: n, isNitroRecEnabled: r }),
    });
}
function aH(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lg.A], () => ({
            relationshipType: lg.A.getRelationshipType(t.id),
            originApplicationId: lg.A.getOriginApplicationId(t.id),
        })),
        h = (0, r2.fi)(t.id),
        A = (0, r3.q)({ userId: t.id }),
        p = (0, m.bG)([r5.A], () => r5.A.hidePersonalInformation),
        g = (0, m.bG)([rz.A], () => rz.A.getUserProfile(t.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([rz.A], () => ({ defaultWishlistId: rz.A.getFirstWishlistId(t.id) })),
        { wishlist: I, isFetching: j } = (0, rW.fw)({ wishlistId: o ? f : void 0, userId: t.id });
    (0, rY.A)(I);
    let C = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: rM.rf,
        children: [
            (0, l.jsx)(r6.A, { userId: t.id }),
            (0, l.jsxs)("div", {
                className: rM.pq,
                children: [
                    (0, l.jsx)(rj.Ay, {
                        user: t,
                        guildId: r.guild_id,
                        displayName: rt.Ay.getName(null, r.id, t),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(al.A, { userId: t.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rA.A, {
                            displayProfile: i,
                            themeType: rR.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(ae.A, { user: t, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rI.A.Overlay, {
                    children: (0, l.jsx)(r4.A, { user: t, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rI.A.Overlay,
                    {
                        children: (0, l.jsx)(r4.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(an.A, { user: t }),
            i?.private &&
                (0, l.jsx)(rI.A.Overlay, { children: (0, l.jsx)(at.A, { username: rt.Ay.getName(null, r.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(rI.A.Overlay, {
                    className: rM.Lw,
                    children: (0, l.jsx)(rf.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: r1.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(r9.T, { userId: t.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ry.A, {
                            userId: t.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rf.A, {
                            heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rx.A, { userId: t.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: rM.kR,
                children: [
                    o && x && (0, l.jsx)(rX.A, { user: t, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(ai.A, { user: t, currentUser: n, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(r7.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rf.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(r8.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rI.A.Overlay, {
                              className: rM.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rf.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rg.A, {
                                              userId: t.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(r7.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rf.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(r8.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rf.A, {
                                              heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rx.A, { userId: t.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(aF, {
                            profileOwner: t,
                            unownedWishlistItems: C,
                            wishlistId: f,
                            isLoading: j,
                            onClick: () => {
                                d?.({ tabSection: rS.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var aV = n(114212),
    aB = n(913453),
    aY = n(229187),
    aW = n(21241),
    az = n(503062),
    aq = n(51943),
    aK = n(847374),
    a$ = n(320448),
    aX = n(723200);
function aQ(e) {
    let { section: t, header: n, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rh.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? aK.a : a$._;
    return (0, l.jsxs)("section", {
        className: aX.uW,
        children: [
            (0, l.jsxs)(t_.D, {
                className: a()(aX.wx, aX.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(aX.p_, r), children: i }),
        ],
    });
}
var aJ = n(341278);
function aZ(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, L.Ay)(),
        { context: s } = (0, rh.NJ)(),
        r = (0, nG.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, aB.A)(t),
        c = !t.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rI.A.Overlay, {
              className: aJ.Lw,
              children: [
                  u &&
                      (0, l.jsx)(aQ, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: aJ.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  aq.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, ns.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(aW.A, { className: aJ.yF }),
                  c &&
                      (0, l.jsx)(aQ, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: aJ.p_,
                          onExpand: () => (0, aY.A)(t.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: aJ.nC,
                                                children: [
                                                    (0, l.jsx)(aV.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(aV.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            az.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, s7.openUserProfileModal)({
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
function a0(e) {
    let { user: t, currentUser: n, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lU.Ay)(t.id),
        c = (0, ra.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== t.id && ((h.current = t.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, L.Ay)(M.A.USER_PROFILE_SIDEBAR),
        p = (0, rh.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id });
    (0, ru.A)(A, d, rS.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rc.A)(g),
        I = (0, rq.fC)(),
        j = (0, re.A)(d?.profileFrame?.skuId);
    (0, rB.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let C = (0, rV.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function E(e) {
        (0, s7.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([rz.A], () => ({ defaultWishlistId: rz.A.getFirstWishlistId(t.id) })),
        { wishlist: _, isFetching: v } = (0, rW.fw)({ wishlistId: r ? void 0 : b, userId: t.id });
    (0, rY.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(L.f5, {
        value: A,
        children: (0, l.jsx)(rh.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(rq.Hl, {
                value: I,
                children: (0, l.jsxs)(rI.A, {
                    ref: g,
                    user: t,
                    displayProfile: d,
                    themeType: rR.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(rP.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(r$.A, {}),
                        null != I.interactionType && (0, l.jsx)(rH.animated.div, { style: C, className: rP.tB }),
                        (0, l.jsxs)(nC.d_, {
                            className: a()(r && rP.BE, !r && null != j && rP.It),
                            children: [
                                (0, l.jsxs)(rE.A, {
                                    children: [
                                        (0, l.jsx)(rJ.A, { user: t, themeType: rR.d.SIDEBAR }),
                                        t.bot ? (0, l.jsx)(rQ.A, { user: t }) : (0, l.jsx)(rZ.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: rP.wx,
                                    children: [
                                        (0, l.jsx)(rp.A, {
                                            user: t,
                                            displayProfile: d,
                                            themeType: rR.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: rP.vK,
                                        }),
                                        (0, l.jsx)(rK.A, { userId: t.id, className: rP.oR }),
                                        (0, l.jsx)(rm.A, {
                                            user: t,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: rO.T[rR.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : E,
                                        }),
                                        (0, l.jsx)(r0.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: rR.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(aH, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == I.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : E,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: rP.sJ,
                                        children: (0, l.jsx)(rX.A, {
                                            user: t,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: E,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: rP.vS,
                                        children: (0, l.jsx)(aF, {
                                            profileOwner: t,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                E?.({ tabSection: rS.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(aZ, { user: t, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(rT, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: j,
                                handleOpenProfile: E,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rd.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != j && (0, l.jsx)(rb.A, { frame: j, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var a1 = n(901600);
function a2(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lF(),
        [o, d] = (0, rs.A)(n),
        [c, u] = s.useState(!1),
        h = rl("UserProfileSidebarRenderer"),
        A = (0, lU.Ay)(n),
        p = A?.profileFrame?.skuId,
        g = (0, re.A)(p),
        x = (0, m.bG)([s4.A], () => s4.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: t.id,
            };
            null != i ? (0, rr.A)(i, e) : (0, rr.A)(n, void 0, e);
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
        I = rt.Ay.getName(null, t.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? a1.H : void 0,
        children: (0, l.jsx)(s6.F, {
            component: (0, l.jsx)(s8.A, {
                children: (0, l.jsx)(s6.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(rF, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(rL, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(a0, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var a3 = n(522556),
    a9 = n(225315),
    a5 = n(684407),
    a7 = n(95701),
    a6 = n(919638),
    a8 = n(763827),
    a4 = n(812771),
    oe = n(506309),
    ot = n(598748),
    on = n(681154),
    oi = n(975460),
    ol = n(587895),
    os = n(429913),
    or = n(201718),
    oa = n(339580),
    oo = n(633075),
    od = n(903209),
    oc = n(382483),
    ou = n(385113);
let oh = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function om(e) {
    let [t, n] = s.useState(new Set()),
        i = s.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)(oh.Provider, {
        value: {
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
                        I,
                        { appsWithConfigs: j, isLoadingConfigs: C } =
                            ((n = sj.Q_.useSetting()),
                            s.useEffect(() => {
                                (0, oc.Wq)().catch(() => {});
                            }, []),
                            s.useEffect(() => {
                                n && (0, oc.i$)().catch(() => {});
                            }, [n]),
                            (i = (0, m.bG)([ou.A], () => ou.A.getFeaturedFetchState())),
                            (l = (0, m.bG)([ou.A], () => ou.A.getDeveloperFetchState())),
                            (r = (0, m.yK)([ou.A], () => ou.A.getFeaturedApplicationIds())),
                            (a = (0, m.yK)([ou.A], () => ou.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                isLoadingConfigs:
                                    i === ou.e.NOT_FETCHED ||
                                    i === ou.e.FETCHING ||
                                    (n && (l === ou.e.NOT_FETCHED || l === ou.e.FETCHING)),
                            }),
                        {
                            widgetApps: E,
                            userIdsWhoMightHaveWidgetData: y,
                            isFetchingApplications: b,
                        } = ((o = s.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === on.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        )),
                        (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                        (c = (0, m.bG)(
                            [ol.A],
                            () =>
                                d.length > 0 &&
                                d.some(
                                    (e) =>
                                        ol.A.isFetchingApplication(e) ||
                                        (null == ol.A.getApplication(e) && !ol.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (u = (0, os.A)(d)),
                        (h = s.useMemo(
                            () =>
                                Object.fromEntries(
                                    u
                                        .filter(l1.Vq)
                                        .map((e) => [e.id, (0, oi.t)(e)])
                                        .filter(l1.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return j.has(n.id);
                                        }),
                                ),
                            [j, u],
                        )),
                        (A = s.useMemo(
                            () => [...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id))],
                            [o, h],
                        )),
                        { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                        { identitiesByUserId: _, isLoadingIdentities: v } =
                            ((p = (0, m.cf)([oa.A], () =>
                                Object.fromEntries(y.map((e) => [e, oa.A.getUserIdentities(e)]).filter(l1.QE)),
                            )),
                            (g = (0, m.bG)([oa.A], () =>
                                y.some((e) => oa.A.getFetchState(e) === oa.e.NOT_FETCHED || oa.A.isFetchingUser(e)),
                            )),
                            s.useEffect(() => {
                                y.length > 0 && or.P.fetchMany(...y.map((e) => [e]));
                            }, [y]),
                            { identitiesByUserId: p, isLoadingIdentities: g }),
                        { profilesByUserId: N, isLoadingProfiles: T } =
                            ((x = (0, m.cf)([rz.A], () =>
                                Object.fromEntries(y.map((e) => [e, rz.A.getUserProfile(e) ?? null]).filter(l1.QE)),
                            )),
                            (f = (0, m.yK)([rz.A], () =>
                                y.filter((e) => null == rz.A.getUserProfile(e) && !rz.A.isFetchingProfile(e)),
                            )),
                            (I = (0, m.bG)([rz.A], () => y.some((e) => rz.A.isFetchingProfile(e)))),
                            s.useEffect(() => {
                                for (let e of f) (0, od.A)(e);
                            }, [f]),
                            { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                        S = (0, m.cf)(
                            [ou.A],
                            () => Object.fromEntries([...j].map((e) => [e, ou.A.getConfig(e)]).filter(l1.QE)),
                            [j],
                        ),
                        R = C || b || v || T,
                        O = s.useMemo(() => {
                            if (!R && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== on.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let t = E[e.extra.application_id] ?? null;
                                    if (null == t) return e;
                                    let n = S[t.id] ?? null;
                                    if (null == n || null == n.surfaces[ot.m.ACTIVITY_ACCESSORY]) return e;
                                    let i = _[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                    if (i?.profile == null) return e;
                                    let l = N[e.author_id]?.widgets?.some((e) => (0, oo.E)(e, t.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: t.id, hasWidget: l },
                                    };
                                });
                        }, [R, e, E, S, _, N]),
                        [P, M] = s.useState(O);
                    return (
                        s.useEffect(() => {
                            R || M(O);
                        }, [R, O]),
                        P
                    );
                })(e, t),
        },
        children: e.children,
    });
}
var oA = n(900797),
    op = n(180170),
    og = n(435738),
    ox = n(38055);
let of = "content-inventory-feed",
    oI = `${of}-settings`,
    oj = `${of}-toggle`;
var oC = n(569709);
let oE = s.memo(function (e) {
        let t,
            { title: i, onToggleExpand: r, expanded: a, expandedCount: o } = e,
            d = (0, m.bG)([og.A], () => og.A.hidden),
            u = (0, c.omit)((0, E.rm)(oI), ["role", "tabIndex"]),
            h = (0, c.omit)((0, E.rm)(oj), ["role", "tabIndex"]),
            A = s.useCallback((e) => {
                (0, C.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: C.Z_ });
                });
            }, []),
            p = s.useCallback(() => (d ? (0, op.Il)() : o > 3 ? r() : (0, eo.tEg)()), [d, o, r]);
        return (0, l.jsxs)(D.A, {
            className: ec.lL,
            children: [
                (0, l.jsx)(s8.A, { children: z.intl.format(z.t.Uaqbke, { title: i, count: o }) }),
                (0, l.jsxs)("div", {
                    className: oC.N1,
                    children: [
                        (0, l.jsx)(t_.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, l.jsxs)("span", { children: [i, " \u2014 ", o] }),
                        }),
                        (0, l.jsx)(ox.A, { ...u }),
                        (0, l.jsx)(t_.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: oC.AN,
                            children: (0, l.jsx)("span", {}),
                        }),
                        o <= 3 && !d
                            ? null
                            : ((t = d
                                  ? (0, l.jsx)(oA.t, { className: oC.wT })
                                  : a
                                    ? (0, l.jsx)(aK.a, { className: oC.wT })
                                    : (0, l.jsx)(a$._, { className: oC.wT })),
                              (0, l.jsx)(t_.D, {
                                  ...h,
                                  onClick: p,
                                  tag: "span",
                                  "aria-label": z.intl.string(a && !d ? z.t.iTcuma : z.t.dcl9MQ),
                                  "aria-expanded": !d && a,
                                  className: oC.wT,
                                  children: t,
                              })),
                    ],
                }),
            ],
        });
    }),
    oy = function () {
        return null;
    };
var ob = n(963307),
    o_ = n(424994);
let ov = en.default.track;
function oN(e, t) {
    ov(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: o_.UG.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName,
    });
}
var oT = n(468581),
    oS = n(808666),
    oR = n(414499),
    oO = n(323384),
    oP = n(55730),
    oM = n(765379),
    oL = n(146779),
    ok = n(284525),
    oD = n(482030),
    ow = n(627363),
    oG = n(583846),
    oU = n(506326);
n(333007);
var oF = n(342952),
    oH = n(315710),
    oV = n(276293),
    oB = n(935063),
    oY = n(778712),
    oW = n(696986),
    oz = n(97808),
    oq = n(738188),
    oK = n(983851),
    o$ = n(31300),
    oX = n(308528),
    oQ = n(401843),
    oJ = n(375499),
    oZ = n(429433),
    o0 = n(324688);
let o1 = (0, a7.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function o2(e) {
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
        [p, g] = s.useState((0, sh.x7)("")),
        x = tE.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sm.Ay, {
        ref: f,
        placeholder: t,
        editorClassName: h,
        className: a()(o0.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? o1,
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
                : (n(t), A(""), g((0, sh.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function o3(e) {
    var t;
    let { onSelectEmoji: n, onClick: i } = e,
        r = (0, ra.Ay)(),
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
        (0, l.jsx)(tt.Y, {
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
                            children: (0, l.jsx)(oZ.C, {
                                messageId: eo.dJq,
                                channel: o1,
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
                        className: o0.mJ,
                        children: (0, l.jsx)(oJ.A, {
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
var o9 = n(402216),
    o5 = n(822123),
    o7 = n(409626),
    o6 = n(692969),
    o8 = n(711589),
    o4 = n(607407),
    de = n(832163),
    dt = n(533562),
    dn = n(805901),
    di = n(565645);
n(267889);
var dl = n(7584);
(n(850992), n(690521));
var ds = n(806931),
    dr = n(307731),
    da = n(866780);
function dd(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rc.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(t_.D, {
            onClick: i,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(dn.c, {
                config: oJ.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(rH.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(di.A, {
                            className: a()(da.Zg, r, { [da.c4]: n }),
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
(dr.EmojiIntention.CHAT,
    [
        dl.Ay.getByName("thumbsup"),
        dl.Ay.getByName("eyes"),
        dl.Ay.getByName("laughing"),
        dl.Ay.getByName("watermelon"),
        dl.Ay.getByName("fork_and_knife"),
        dl.Ay.getByName("yum"),
    ].filter(l1.Vq));
var dc = n(636585),
    du = n(543465),
    dh = n(607567),
    dm = n(915833),
    dA = n(20805),
    dp = n(22869),
    dg = n(623671),
    dx = n(428249),
    df = n(327098),
    dI = n(576757),
    dj = n(202195),
    dC = n(140651),
    dE = n(131607),
    dy = n(345394);
let db = function (e) {
    let { children: t } = e,
        [n, i] = (0, dE.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lI.i.USER_DISMISS);
    }, [i]);
    return n !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(ln.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: dy.A },
                  }),
              ],
          });
};
var d_ = n(315246),
    dv = n(866323),
    dN = n(339190),
    dT = n(655214);
function dS() {
    return (0, l.jsxs)("div", {
        className: dT.oR,
        children: [
            (0, l.jsx)(g.y, { type: g.t.SPINNING_CIRCLE_SIMPLE, className: dN.S }),
            (0, l.jsx)(_.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: z.intl.string(z.t["5z/hlE"]),
            }),
        ],
    });
}
let dR = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, m.bG)([P.Ay], () => P.Ay.useReducedMotion),
        r = (0, dv.p)(
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
                (0, l.jsx)(rH.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(tS.y, {
                              message: z.intl.string(z.t.fjcCk5),
                              type: tR.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, l.jsx)(tS.y, {
                              message: "",
                              type: tR.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, l.jsx)(dS, {}) },
                          }),
                }),
        ),
    });
};
var dO = n(381941),
    dP = n(231188);
let dM = (0, tq.Fe)({
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
                n.e("377109"),
                n.e("74886"),
                n.e("713273"),
                n.e("656997"),
                n.e("679157"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("661630"),
                n.e("470126"),
                n.e("128804"),
                n.e("71151"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("989649"),
                n.e("925420"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("763945"),
                n.e("261204"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("279774"),
                n.e("590088"),
                n.e("125298"),
                n.e("295570"),
                n.e("728824"),
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
                n.e("680431"),
                n.e("338332"),
                n.e("894292"),
                n.e("153302"),
                n.e("88683"),
                n.e("363874"),
                n.e("923981"),
                n.e("750370"),
                n.e("612162"),
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
                n.e("77473"),
                n.e("863232"),
                n.e("25279"),
                n.e("364827"),
                n.e("517888"),
                n.e("811133"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("952372"),
                n.e("784569"),
                n.e("861060"),
                n.e("77333"),
                n.e("56366"),
                n.e("639161"),
                n.e("477175"),
                n.e("960235"),
                n.e("402368"),
                n.e("190779"),
                n.e("910486"),
                n.e("221856"),
                n.e("678157"),
                n.e("646271"),
                n.e("325675"),
                n.e("996481"),
                n.e("331988"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("373122"),
                n.e("217951"),
                n.e("793716"),
                n.e("293159"),
                n.e("186212"),
                n.e("755936"),
                n.e("209338"),
                n.e("749894"),
                n.e("927875"),
                n.e("833703"),
                n.e("55252"),
                n.e("692990"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("532039"),
                n.e("719466"),
                n.e("99799"),
                n.e("576909"),
                n.e("27355"),
                n.e("407170"),
                n.e("756055"),
                n.e("255580"),
                n.e("608557"),
                n.e("631908"),
                n.e("114308"),
                n.e("895785"),
                n.e("73536"),
                n.e("147864"),
                n.e("241176"),
                n.e("93461"),
                n.e("437961"),
                n.e("604172"),
                n.e("949013"),
                n.e("820667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    dL = s.createContext(void 0);
function dk(e) {
    let { children: t } = e,
        n = s.useRef(null),
        i = s.useId();
    return (
        (0, oH.tj)(n),
        (0, l.jsx)(dL.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: n,
                className: dP.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function dD(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, dC.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(dP.ZK, e, i), style: s, children: t }),
        })
    );
}
function dw(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: dP.$m, children: t });
}
function dG(e) {
    var t;
    let n,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [j, C] = s.useState(!1),
        [E, y] = s.useState(null),
        b = (0, m.bG)(
            [lk.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lk.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: O } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, dj.A)(n),
                o = (0, nS.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iE.A)(t?.id),
                c = (0, m.bG)([nr.A], () => (null != a ? nr.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dh.Ay], () => (null != a ? dh.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lx.A], () => lx.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let t = ew.A.getDMFromUserId(e.user.id),
                            n = null != t && du.Ay.isChannelMuted(null, t),
                            i = lg.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(oq.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: dP.vb,
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
                            className: dP.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(t_.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, nJ.iN)(a.id), i?.(a));
                                        },
                                        className: dP.I3,
                                        children: [
                                            (0, l.jsx)(nn.Ay, {
                                                guild: c,
                                                size: nn.Ay.Sizes.SMOL,
                                                className: dP.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(a$._, {
                                                size: "xxs",
                                                color: tP.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(oK.H, { size: "xs", color: tP.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: dP.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dc.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(oz.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: oY._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: dP.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(oW.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lM.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? o$.k : oK.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: P } = (0, df.A)(h),
        M =
            ((t = P),
            (n = (0, m.bG)([nr.A], () => nr.A.getGuild((0, e_.D)(t?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(t?.location)))),
            (r = (0, m.yK)([ee.default], () => t?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, nS.Ay)(i)),
            null != t && null != n && null != i && a7.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: dP.kP,
                              children: [
                                  (0, l.jsxs)(t_.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, nJ.iN)(i.id),
                                      className: dP.I3,
                                      children: [
                                          (0, l.jsx)(nn.Ay, {
                                              guild: n,
                                              size: nn.Ay.Sizes.SMOL,
                                              className: dP.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(a$._, {
                                              size: "xxs",
                                              color: tP.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(oV.N, { size: "xs", color: tP.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: dP.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dc.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(oz.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: oY._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: dP.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(oW.h, { size: 16 }),
                      ],
                  })
                : null),
        L = null != O && 0 === p.length ? [O] : p,
        k = L.length > 0,
        D = L.length >= 2,
        [w, G] = s.useState(!k),
        U = rt.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, nS.Ay)(o, !0),
        H =
            null != o && j
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${U}` }),
        V = j ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function B(e) {
        let t,
            { emoji: n } = e;
        if (null != n) {
            if (
                (en.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: o_.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, nN.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                j)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
            else {
                let e = await oX.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: o_.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let t;
        if (((0, nN.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), j))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
        else {
            let e = await oX.A.openPrivateChannel({ recipientIds: c.id }),
                n = ew.A.getChannel(e);
            (d()(null != n, "DM channel must be defined"), (t = n));
        }
        let n = t.type === eo.rbe.DM ? o_.PA.DM_REACTION_MESSAGE_SENT : o_.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: t, interactionType: n, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: t, sendToChannel: n, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (E?.focus(),
            await (0, dx.d)({
                channel: n,
                content: t,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: dO.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, n));
    }
    let q = g ?? R ?? M;
    function K() {
        (C((e) => !e), w && E?.focus());
    }
    function $(e) {
        (G(e), e && E?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(dR, { sent: T, shown: v, className: dP.Jt }),
            q ??
                (0, l.jsx)(db, {
                    children: (0, l.jsxs)("div", {
                        className: dP.T7,
                        children: [
                            (0, l.jsx)(dU, { channel: o, onClickSuggestion: B }),
                            (0, l.jsx)(o3, { onSelectEmoji: B }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? dP.P2 : dP.VE,
                children: [
                    (0, l.jsx)(o2, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: j ? o : void 0,
                        showEmojiButton: null != q,
                        className: dP.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: V,
                                      children: (0, l.jsx)(t_.D, {
                                          className: dP.wD,
                                          onClick: K,
                                          children: j
                                              ? (0, l.jsx)(oV.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(oB.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    k &&
                        (0, l.jsx)(t_.D, {
                            onClick: () => $(!1),
                            className: dP.i3,
                            children: (0, l.jsx)(nw.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: tP.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: dP.fh,
                    children: [
                        !D &&
                            (0, l.jsx)(
                                x.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => $(!0),
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
let dU = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!P.Ay.keyboardModeEnabled && !i,
        o = (0, o5.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, na._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(dd, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n({ emoji: t }),
                                  className: dP.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function dF(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = t?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, dI.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, dj.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: dP.MH,
        children: [
            (0, l.jsxs)("div", {
                className: dP.WP,
                children: [
                    (0, l.jsx)(oF.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: oY._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(oW.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(dP.Xn, dP.zA),
                        children: z.intl.format(n, {
                            user0: rt.Ay.getName(o, t?.id, g[0]),
                            user1: rt.Ay.getName(o, t?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(dP.Mj, dP.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    dp.A,
                                    {
                                        textClassName: a()(dP.Mj, dP.nk),
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
                                    dp.A,
                                    {
                                        textClassName: a()(dP.Mj, dP.nk),
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
            null != p && (0, l.jsx)(o9.Ay, { size: o9.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(d_.A, { user: A, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function dH(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(t_.D, { className: dP.Zw, onClick: n, children: t });
}
function dV(e) {
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
        I = (0, dA.zD)(f),
        j = I ? f.extra?.application_id : void 0,
        C = (0, dt.W)();
    null != C && (j = C);
    let E = (0, o6.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : j,
                source: o7.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(o_.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dm.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([de.A], () => de.A.getDetectableIdsToApplicationIds()),
        N = I ? E : void 0,
        T = s.useContext(dL);
    return (0, l.jsxs)("div", {
        className: dP.au,
        children: [
            (0, l.jsx)(dF, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(dD, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: dP.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: dP.Fb,
                                children: (0, l.jsx)(dg.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dg.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: dP.iC,
                                children: [
                                    (0, l.jsx)(dH, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(dP.$2, { [dP.bC]: null != u }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(dH, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dP.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(oW.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: dP.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != j && null != v[j]
                ? (0, l.jsx)(dM, {
                      className: dP.zu,
                      applicationId: j,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aE.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function dB(e) {
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
        { actionString: p, canWatch: g } = (0, o8.K)(a),
        { entry: x } = A,
        f = (0, dA.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        j = (0, dt.W)();
    null != j && (I = j);
    let C = (0, o6.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: o7.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(o_.PA.OPENED_GAME_PROFILE) },
        ),
        E = f ? C : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, df.A)(x),
        { largeImage: N, smallImage: T } = (0, dm.D8)(y, b ?? v),
        { largeImage: S } = (0, dm.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        O = (0, m.bG)([de.A], () => de.A.getDetectableIdsToApplicationIds()),
        P = s.useContext(dL);
    return (0, l.jsxs)("div", {
        className: dP.au,
        children: [
            (0, l.jsx)(dF, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(dD, {
                backgroundImgSrc: S?.src,
                className: dP.uR,
                children: [
                    (0, l.jsx)(dH, {
                        onClick: g
                            ? () => {
                                  (lr.default.selectVoiceChannel(a.channelId), (0, oQ.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: dP.nh,
                            children: [
                                (0, l.jsx)(o4.A, { className: dP.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: dP.NE,
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
                        className: dP.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: dP.Fb,
                                    children: (0, l.jsx)(dg.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? E,
                                        size: dg.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: dP.gv,
                                children: [
                                    (0, l.jsx)(dH, {
                                        onClick: d ?? E,
                                        children: (0, l.jsx)(R.D, {
                                            id: P,
                                            variant: "heading-md/semibold",
                                            className: dP.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(dH, {
                                              onClick: c ?? E,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dP.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(oW.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != O[I]
                ? (0, l.jsx)(dM, {
                      className: dP.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: aE.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var dY = n(299846);
let dW = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, dY.u)(n);
    function u() {
        (0, oD.hg)(n.extra.application_id);
    }
    let { data: h } = (0, ow.YY)(n.extra.application_id),
        m = (0, oL.Ay)({ application: h, analyticsLocations: [M.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(oU.iT, { location: oU.N5.POPOUT, entry: n }),
        p = (0, l.jsx)(dV, {
            channel: t,
            userDescription: (0, oG.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: n,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, oP.A)(d, eo.jUm.JOIN) || (0, oM.A)(d),
        f = g
            ? (0, l.jsx)(ok.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: oS.I,
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
                      icon: oR.h,
                  }),
        j =
            null != I || r
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: oO.k,
                  }),
        C = [I, g && !r ? f : j].filter(l1.Vq);
    return (0, l.jsxs)(dk, {
        children: [
            p,
            (0, l.jsx)(dw, {
                children: (0, l.jsx)(dG, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: t,
                    entry: n,
                    buttons: C,
                }),
            }),
        ],
    });
};
var dz = n(322789),
    dq = n(808380),
    dK = n(687966),
    d$ = n(960076),
    dX = n(544441),
    dQ = n(562708),
    dJ = n(139286);
function dZ(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, L.Ay)(n),
        s = (0, oL.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, dJ.A)({
            name: dQ.ImpressionNames.CLOUD_PLAY_CTA,
            type: dQ.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: oR.h,
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
var d0 = n(601007),
    d1 = n(648246),
    d2 = n(308335),
    d3 = n(790381),
    d9 = n(266080),
    d5 = n(968309),
    d7 = n(30370);
function d6(e) {
    let t = (0, m.bG)([d7.A], () => d7.A.getAccounts().some((t) => t.type === e)),
        n = s.useCallback(() => {
            if (null == e) return null;
            (0, d5.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var d8 = n(18282);
let d4 = [...dz.n, oU.Yq],
    ce = {
        [dq.Y.DESKTOP]: null,
        [dq.Y.LINUX]: null,
        [dq.Y.MACOS]: null,
        [dq.Y.NINTENDO]: null,
        [dq.Y.IOS]: null,
        [dq.Y.ANDROID]: null,
        [dq.Y.XBOX]: d9.A,
        [dq.Y.PLAYSTATION]: d3.A,
    },
    ct = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, dY.u)(n),
            { streamPreviewUrl: A, stream: p } = (0, dj.A)(n),
            g = n.extra.platform,
            x = n.extra.application_id,
            f = null != g ? ce[g] : null,
            I = d6(g === dq.Y.XBOX ? eo.fg2.XBOX : g === dq.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: j } = (0, ow.YY)(x),
            C = (0, dX.A)(x),
            { analyticsLocations: E } = (0, L.Ay)(M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, oL.JC)(j),
            b = (0, d2.o)(h?.application_id ?? m?.applicationId ?? j?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(oU.mG, {
                location: null == A ? oU.N5.POPOUT : oU.N5.STREAMING_POPOUT,
                children: d4.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(dV, {
                          channel: t,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(d8.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, oG.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: n,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(d0.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: E,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(dB, {
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
                              C.length > 0
                                  ? (0, l.jsx)(d0.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: E,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && y
                    ? (0, l.jsx)(
                          dZ,
                          { application: j, analyticsLocation: M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, oP.A)(h, eo.jUm.JOIN) || (0, oM.A)(h))
                    ? (0, l.jsx)(
                          ok.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: dK.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, d$.A)(h)
                    ? (0, l.jsx)(d1.A, { activity: h, size: "md", variant: "primary", icon: tM.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(l1.Vq);
        return (0, l.jsxs)(dk, {
            children: [
                v,
                (0, l.jsx)(dw, {
                    children: (0, l.jsx)(dG, {
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
    cn = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function ci(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e,
        { data: r } = (0, ow.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, L.Ay)(M.A.CLOUD_PLAY_POPOVER),
        o = (0, oL.Ay)({ application: r, analyticsLocations: a }),
        d = (0, nN.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && n,
        { activeEntryId: u, setActiveEntryId: h } = cn(),
        m = u === t.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, dE.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(t.id);
    }, [u, c, t.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lI.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, j] = s.useState(!1);
    return (
        f && !I && j(!0),
        (0, dJ.A)(
            {
                name: dQ.ImpressionNames.CLOUD_PLAY_CTA,
                type: dQ.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(ln.A, {
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
                    icon: oR.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lI.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cl = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(ci, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var cs = n(363670),
    cr = n(205327),
    ca = n(52133),
    co = n(835723),
    cd = n(172710),
    cc = n(655116),
    cu = n(763758),
    ch = n(286617),
    cm = n(533207),
    cA = n(280450),
    cp = n(121090),
    cg = n(693879),
    cx = n(809854),
    cf = n(272984),
    cI = n(170699);
function cj(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: i } = (0, cx.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, i),
                s = n - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, oG.W6)({ start: 0 }, s) };
        }, [t, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cI.lu,
              children: [
                  (0, l.jsx)(cg.z, { entry: n }),
                  (0, l.jsx)("div", { className: cI.Lt, children: (0, l.jsx)("div", { className: cI.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cI.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function cC(e) {
    let t,
        n,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cs.u7)(r),
        g = d6(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cc.A, cA.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, ch.A)(cc.A, cA.default, p, c) : void 0),
            [c, p],
            ca.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        j = [];
    u.media.provider === cr.X.SPOTIFY &&
        ((n = () => {
            (0, cd.Mp)(c);
        }),
        (i = () => {
            (0, cd.QX)(c, p.id);
        }),
        (t = () => {
            null != g ? g() : (0, cd.Mp)(c);
        }),
        (I = (0, l.jsx)(cu.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: dP.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cd.mN)(c, p.id, e);
            },
        })),
        f?.syncDisabled === !1 &&
            j.push(
                (0, l.jsx)(
                    x.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: co.J,
                        onClick: function () {
                            null != f && ((0, cm.A)(f, cf.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let C = (0, l.jsx)(dV, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cr.X.SPOTIFY
                ? (0, l.jsx)(d8.A, { onClick: t, "aria-label": z.intl.string(z.t.rRffNz), Icon: cp.A })
                : null,
        userDescription: (0, oG.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: n,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(cj, { activity: c }),
    });
    return (0, l.jsxs)(dk, {
        children: [
            C,
            (0, l.jsx)(dw, {
                children: (0, l.jsx)(dG, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: j,
                }),
            }),
        ],
    });
}
var cE = n(903134),
    cy = n(56121),
    cb = n(263577),
    c_ = n(868065),
    cv = n(804779);
let cN = [oU.Y8],
    cT = [cy.j.WEEK],
    cS = s.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, dm.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, oG.TQ)(t);
        return null != r && (0, l1.S1)(r, cT)
            ? (0, l.jsxs)(c_.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(c_.UA, {
                          children: [
                              (0, l.jsx)(c_.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(c_.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(oU.mG, {
                                  location: oU.N5.CARD,
                                  children: cN.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(cb.V, { src: s?.src, size: 48, className: cv.xn }),
                  ],
              })
            : null;
    });
var cR = n(210528);
let cO = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = n.extra.media,
        o = n.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        c = (0, oG.TQ)(n),
        u = d6(eo.fg2.SPOTIFY);
    if (null == d || !(0, l1.S1)(c, cT)) return null;
    function h() {
        let e = cf.M0.ALBUM,
            t = cR.A.isProtocolRegistered()
                ? cf.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                : cf.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(dk, {
        children: [
            (0, l.jsx)(dV, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cf.M0.ARTIST,
                        t = cR.A.isProtocolRegistered()
                            ? cf.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                            : cf.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: h,
                channel: t,
                entry: n,
                headerIcons:
                    a === cr.X.SPOTIFY
                        ? (0, l.jsx)(d8.A, { onClick: u, Icon: cp.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(oU.mG, {
                    location: oU.N5.POPOUT,
                    children: cN.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
            }),
            (0, l.jsx)(dw, {
                children: (0, l.jsx)(dG, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: t, entry: n }),
            }),
        ],
    });
};
var cP = n(977001);
let cM = function (e) {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, dY.u)(n),
        c = (0, oG.ty)(n),
        u = (0, oG.TQ)(n);
    if (null == a || null == c || null == u || !(0, cP._E)(u)) return null;
    let h = null != n.extra.platform ? ce[n.extra.platform] : null;
    return (0, l.jsxs)(dk, {
        children: [
            (0, l.jsx)(dV, {
                channel: t,
                headerIcons: null == h ? null : (0, l.jsx)(d8.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: n,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(oU.mG, {
                    location: oU.N5.POPOUT,
                    children: cP.ac.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(dw, {
                children: (0, l.jsx)(dG, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: t, entry: n }),
            }),
        ],
    });
};
var cL = n(514243),
    ck = n(347306),
    cD = n(123917),
    cw = n(998218);
let cG = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        a = d6(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == n.extra.url) return;
        let e = cw.A.safeParseWithQuery(n.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, cD.h)({ href: cw.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(dk, {
              children: [
                  (0, l.jsx)(dV, {
                      channel: t,
                      entry: n,
                      userDescription: (0, oG.JM)(n) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(d8.A, {
                          onClick: a,
                          Icon: ck.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(oU.mG, {
                          location: oU.N5.POPOUT,
                          children: cL.R.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(dw, {
                      children: (0, l.jsx)(dG, {
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
function cU(e) {
    return e?.type === ob.S9.CONTENT_INVENTORY
        ? e.entry.content_type === on.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function cF(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case on.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(dz.A, { ...n, entry: t });
        case on.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(cL.A, { ...n, entry: t });
        case on.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(cP.Ay, { ...n, entry: t });
        case on.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cS, { ...n, entry: t });
        case on.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cs.Ay, { ...n, entry: t });
        case on.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(oT.A, { ...n, entry: t });
        default:
            return null;
    }
}
function cH(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === on.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cl, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function cV(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(cB, {
        onReaction: (e, i) => {
            (n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t());
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(o_.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function cB(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case on.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(ct, { ...n, entry: t });
        case on.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(cG, { ...n, entry: t });
        case on.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(cM, { ...n, entry: t });
        case on.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cO, { ...n, entry: t });
        case on.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cC, { ...n, entry: t });
        case on.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(dW, { ...n, entry: t });
        default:
            return null;
    }
}
let cY = s.memo(function (e) {
    let { index: t, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, E.rm)(`${t}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, dY.u)(r.entry);
    !(function (e) {
        let { markAsVisible: t } = s.useContext(oh);
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
        I = s.useRef(!1),
        [j, y] = s.useState(!1),
        [b, _] = s.useState(!1),
        v = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        j && v && _(!0);
    }, [j, v]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, C.L3)(e, async () => {
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
                oN(e, { ...f, ...t });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        oN(o_.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        );
    function O() {
        ((I.current = !1),
            setTimeout(() => {
                I.current || (y(!1), _(v));
            }, 100));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(cH, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: O,
                children: (0, l.jsx)(tt.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(cE.J.Provider, {
                            value: O,
                            children: (0, l.jsx)(cV, {
                                closePopout: t,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: j,
                    positionKey: o,
                    onRequestOpen: () => R(f),
                    onRequestClose: () => {
                        b && O();
                    },
                    spacing: 8,
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.jsx)(t_.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                j || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(cF, {
                                ...r,
                                selected: n,
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
var cW = n(531685),
    cz = n(99066),
    cq = n(376261),
    cK = n(99753),
    c$ = n(136722),
    cX = n(860071);
let cQ = [],
    cJ = new Set(),
    cZ = new Set();
var c0 = n(808323);
let c1 = new Set([
    on.ContentInventoryEntryType.PLAYED_GAME,
    on.ContentInventoryEntryType.WATCHED_MEDIA,
    on.ContentInventoryEntryType.TOP_GAME,
    on.ContentInventoryEntryType.TOP_ARTIST,
    on.ContentInventoryEntryType.LISTENED_SESSION,
    on.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var c2 = n(728321),
    c3 = n(282006);
let c9 = er.Ay.getEnableHardwareAcceleration(),
    c5 = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    c7 = s.memo(function (e) {
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
                isVROnline: I,
                premiumSince: j,
                nameplate: E,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != j ? new Date(j) : null,
            { analyticsLocations: S } = (0, L.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, C.L3)(e, async () => {
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
                                n.e("309291"),
                                n.e("307059"),
                                n.e("343116"),
                                n.e("139103"),
                                n.e("470314"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("666939"),
                                n.e("717334"),
                                n.e("184841"),
                            ]).then(n.bind(n, 107632)),
                            t = lx.A.isInChannel(eG.Ay.getVoiceChannelId(), c.id);
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
            P = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    O.A.startTyping(p.id));
            }, [c, p.id]),
            M = s.useCallback(
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
            onShiftClick: P,
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
                    shouldAnimateStatus: c9,
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
                    isVR: I,
                    onClickPremiumGuildIcon: M,
                    selected: v,
                    itemProps: y,
                    nameplate: E,
                    onClick: (e) => {
                        e.shiftKey ? P?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    c6 = s.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, E.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([B.A], () => (null != t ? B.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            u = (0, k.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(c7, { ...n, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function c8(e) {
    let { index: t } = e,
        n = (0, E.rm)(`${t}`);
    return (0, l.jsx)(ea.A, { itemProps: n });
}
class c4 extends s.Component {
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
        if (r?.id === of) return (0, s.createElement)(oE, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                c2.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: c5,
                    children: (0, s.createElement)(c3.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, s.createElement)(c3.Y, { ...r, key: `section-${t}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != t && t.type === ob.S9.CONTENT_INVENTORY) {
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
            if (r.type === ob.S9.MEMBER && "user" in r) {
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
                    c6,
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
            if (r.type === ob.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    cY,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === ob.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(oy, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(c8, { index: i }, `placeholder-${t}:${n}`);
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
        if (e?.id === of) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? cU(n[i + 1 + l]) : t;
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
            .filter(l1.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== ob.S9.MEMBER ||
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
                (0, l.jsx)(sp.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(s6.F, {
                                component: (0, l.jsx)(s8.A, {
                                    children: (0, l.jsx)(s6.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, nS.m1)(n, ee.default, lg.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(E.PR, {
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
function ue(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: i } = (0, L.Ay)(M.A.MEMBER_LIST),
        r = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        o = (0, m.cf)([ob.Ay], () => ob.Ay.getProps(t.guild_id, t.id)),
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
                        l = (0, c0.A)({ id: o_.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return ((0, ca.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [t]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    cX.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [X.Ay],
                                () => {
                                    if (null == l) return cQ;
                                    let e = [];
                                    for (let t of a) X.Ay.isMember(l, t) && e.push(t);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return cJ;
                                let e = new Set();
                                for (let t of o) {
                                    let n = el.cc({ user: t, context: i });
                                    c$.zy(n, W.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => t?.filter((e) => d.has(e.author_id)), [t, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((t = l = s.useMemo(() => l?.filter((e) => c1.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [og.A, cK.A],
                            () => {
                                let e = cK.A.getDebugImpressionCappingDisabled();
                                return !(0, cz.sE)("useFilterImpressionCappedContent") || e
                                    ? cZ
                                    : og.A.getImpressionCappedItemIds();
                            },
                            [t],
                        )),
                        s.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: cZ };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, oG.JM)(t) || !i.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, i]));
                    l = r;
                    let o = (0, m.bG)([cK.A], () => cK.A.getFeedRequestId(o_.X1.GLOBAL_FEED));
                    return (
                        (n = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oh).useInjectEntriesWithPreviewData(n)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([og.A], () => og.A.hidden),
                A = (0, m.bG)([cW.A], () => cW.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([nr.A], () => nr.A.getGuild(r), [r]),
                x = ((0, cq.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, j, C] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [t, n, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: ob.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: ob.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: of,
                        type: ob.S9.CONTENT_INVENTORY_GROUP,
                        key: of,
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
                        feedHeight: e.map(cU).reduce((e, t) => e + t, 0),
                    };
                    return [[m, ...t], [...n, m, ...e], Math.random(), e];
                }, [l, c, a, t, r, d, n, i, h, x]),
                E = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                v = s.useCallback(
                    (e) => {
                        let t = Math.floor(e / 72),
                            n = Math.min(C?.length ?? 0, t);
                        E.current = Math.max(E.current, n);
                    },
                    [C],
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
                        (E.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, E.current);
                            !h &&
                                A &&
                                x &&
                                (ov(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: t,
                                    surface_type: o_.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, cz.sE)("useInjectContentInventoryFeed") &&
                                    t$.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: I, version: j, updateMaxRowSeen: v }
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
    let g = (0, oe.W)("lg") + (0, oe.W)("xxs"),
        x = s.useCallback(
            (e, t) => {
                let n = A.current;
                if (null == n) return;
                let i = t === oI || t === oj ? 0 : parseInt(t, 10),
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
        I = s.useCallback(
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
        j = (0, y.Ay)({ id: `members-${t.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: I });
    return (0, l.jsx)(L.f5, {
        value: i,
        children: (0, l.jsx)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, n),
            children: (0, l.jsx)(E.hD, {
                navigator: j,
                children: (0, l.jsx)(c4, {
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
        }),
    });
}
function ut(e) {
    let { channel: t, className: n } = e,
        i = s.useDeferredValue(t);
    return s.useMemo(() => (0, l.jsx)(om, { children: (0, l.jsx)(ue, { channel: i, className: n }) }), [i, n]);
}
var un = n(888904);
let ui = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: un.kL,
        children: [
            (0, l.jsxs)(lt.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lt.A.Icon, { icon: oV.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lt.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: un.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: un.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: un.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var ul = n(909735),
    us = n(943712),
    ur = n(274541),
    ua = n(746080),
    uo = n(516607),
    ud = n(999900);
function uc() {
    return (0, l.jsx)("div", { className: ud.wG, children: (0, l.jsx)(g.y, {}) });
}
let uu = (0, tq.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("229511"),
                n.e("908346"),
                n.e("808216"),
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
        renderLoader: uc,
        name: "ForumChannel",
    }),
    uh = (0, tq.Fe)({
        createPromise: () =>
            Promise.all([n.e("153662"), n.e("802179"), n.e("87729"), n.e("530707"), n.e("96711")]).then(
                n.bind(n, 114701),
            ),
        webpackId: 114701,
        renderLoader: uc,
        name: "AppChannel",
    });
function um() {
    return Promise.all([
        n.e("651299"),
        n.e("426965"),
        n.e("256172"),
        n.e("859821"),
        n.e("113561"),
        n.e("368991"),
        n.e("223213"),
        n.e("520641"),
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
        n.e("125466"),
        n.e("740705"),
        n.e("468617"),
        n.e("764984"),
        n.e("834541"),
        n.e("64097"),
        n.e("153662"),
        n.e("693684"),
        n.e("45646"),
        n.e("472252"),
        n.e("693818"),
        n.e("459397"),
        n.e("847810"),
        n.e("249727"),
        n.e("686047"),
        n.e("997708"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("139103"),
        n.e("829260"),
        n.e("437961"),
        n.e("327198"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("33448"),
        n.e("79216"),
        n.e("815275"),
        n.e("704374"),
        n.e("544901"),
        n.e("986300"),
        n.e("874821"),
        n.e("426792"),
        n.e("815057"),
        n.e("654624"),
        n.e("322094"),
        n.e("45916"),
        n.e("726223"),
        n.e("979585"),
        n.e("87729"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("497306"),
        n.e("736793"),
        n.e("530707"),
        n.e("932011"),
        n.e("112733"),
        n.e("792461"),
    ]).then(n.bind(n, 540462));
}
let uA = (0, tq.Fe)({ createPromise: um, webpackId: 540462, name: "ChannelCall", renderLoader: uc });
function up() {
    return Promise.all([
        n.e("764984"),
        n.e("834541"),
        n.e("998392"),
        n.e("703540"),
        n.e("368991"),
        n.e("256172"),
        n.e("223213"),
        n.e("520641"),
        n.e("656997"),
        n.e("828849"),
        n.e("944121"),
        n.e("655282"),
        n.e("375971"),
        n.e("792818"),
        n.e("630279"),
        n.e("45646"),
        n.e("668526"),
        n.e("125466"),
        n.e("460582"),
        n.e("477751"),
        n.e("740705"),
        n.e("468617"),
        n.e("805551"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("829260"),
        n.e("437961"),
        n.e("327198"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("33448"),
        n.e("79216"),
        n.e("815275"),
        n.e("256373"),
        n.e("704374"),
        n.e("544901"),
        n.e("420577"),
        n.e("874821"),
        n.e("426792"),
        n.e("464287"),
        n.e("360536"),
        n.e("654624"),
        n.e("322094"),
        n.e("45916"),
        n.e("979585"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("497306"),
        n.e("678827"),
        n.e("407525"),
    ]).then(n.bind(n, 883396));
}
let ug = (0, tq.Fe)({ createPromise: up, webpackId: 883396, name: "StageChannelCall", renderLoader: uc }),
    ux = (0, tq.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("923972"),
                n.e("259465"),
                n.e("527552"),
                n.e("769266"),
                n.e("193845"),
                n.e("249681"),
                n.e("428235"),
                n.e("369501"),
                n.e("161058"),
                n.e("333097"),
                n.e("359702"),
                n.e("39214"),
                n.e("220803"),
                n.e("79171"),
                n.e("417664"),
                n.e("662368"),
            ]).then(n.bind(n, 392)),
        webpackId: 392,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(se, {});
        },
    }),
    uf = (0, tq.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("577154"),
                n.e("424216"),
                n.e("877730"),
                n.e("611899"),
                n.e("259465"),
                n.e("527552"),
                n.e("769266"),
                n.e("487873"),
                n.e("765626"),
                n.e("683302"),
                n.e("249681"),
                n.e("728136"),
                n.e("507775"),
                n.e("428235"),
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
    uI = (0, tq.Fe)({
        createPromise: () => Promise.all([n.e("188547"), n.e("269178"), n.e("875746")]).then(n.bind(n, 155769)),
        webpackId: 155769,
        name: "FriendsSidebar",
    });
class uj extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, s5.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        e === eo.rbe.GUILD_VOICE ? um() : e === eo.rbe.GUILD_STAGE_VOICE && up();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, nJ.iN)(e.id);
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
            (0, s7.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [M.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        (d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
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
            (0, C.L3)(e, async () => {
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
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("463317"),
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("189673"),
                    n.e("955557"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("691994"),
                    n.e("576665"),
                    n.e("947502"),
                    n.e("245996"),
                    n.e("700792"),
                    n.e("592822"),
                    n.e("965789"),
                    n.e("529422"),
                    n.e("823427"),
                    n.e("309291"),
                    n.e("198415"),
                    n.e("307059"),
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
        return e?.hasFlag(ua.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ij.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(ty.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== ds.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ix.A,
                  { size: o9.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
                    a.push((0, l.jsx)(lE, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iz, { channel: e }, "pins")),
                    a.push((0, l.jsx)(ly.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    a.push((0, l.jsx)(lH, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    a.push((0, l.jsx)(lP, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lE, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iz, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, l.jsx)(ly.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    a.push((0, l.jsx)(iV, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && a.push((0, l.jsx)(n6, { channel: e })),
                    null == t || t.isForumLikeChannel() || a.push((0, l.jsx)(s$, { channel: t }, "browser")),
                    e.isVocalThread() && a.push((0, l.jsx)(lD, { channel: e }, "thread-call")),
                    a.push((0, l.jsx)(is, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iz, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, l.jsx)(iV, { channelId: e.id }, "members")),
                    null != t && (0, eI.pk)(e) && a.push((0, l.jsx)(iQ, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(sZ, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (a.push((0, l.jsx)(s$, { channel: e }, "browser")),
                    n || a.push((0, l.jsx)(iB.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iz, { channel: e }, "pins")),
                    (0, tb.PD)(e.guild_id, "channel_header") &&
                        a.push((0, l.jsx)(iF, { channelId: e.id }, "conversations")),
                    a.push((0, l.jsx)(iV, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && a.push((0, l.jsx)(iQ, { channel: e }, "summaries")));
                break;
            case eo.rbe.GUILD_APP:
                (a.push((0, l.jsx)(tf, { channel: e }, "popout")),
                    a.push((0, l.jsx)(s$, { channel: e }, "browser")),
                    n || a.push((0, l.jsx)(iB.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iz, { channel: e }, "pins")),
                    a.push((0, l.jsx)(iV, { channelId: e.id }, "members")),
                    a.push((0, l.jsx)(iG, { channelId: e.id }, "chat")),
                    a.push((0, l.jsx)(tu, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && a.push((0, l.jsx)(le, {}, "game-invite-channel-learn-more")),
                    n ||
                        (a.push((0, l.jsx)(i7, { channel: e }, "forum-onboarding")),
                        a.push((0, l.jsx)(iB.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, l.jsx)(iV, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                a.push((0, l.jsx)(iV, { channelId: e.id }, "members"));
        }
        return a;
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
                t.push((0, l.jsx)(iV, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(iV, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(iV, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: ud.u8,
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, nJ.iN)(e.id) : void 0,
            A = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            p = o || c,
            g = r || p;
        return (0, l.jsxs)("div", {
            className: ud.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && r ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lt.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(ud.DD, r, { [ud.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: c,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(nO.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, nO.zF)({
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
                                              className: ud.u8,
                                              children: (0, l.jsx)(x.$, {
                                                  onClick: () => (0, nP.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, nO.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(l6.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t, spoilerGatingChannelId: n } = this.props;
        return !t && null == n && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
                return (0, l.jsx)(ug, { channel: e, popoutType: tC.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    uA,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: tC.N.NO_POPOUT,
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
        return (0, l.jsx)(e7, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(iN, { guildId: t.id })
                : (0, l.jsx)(iC.H, { guildId: t.id, children: (0, l.jsx)(iL, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(a3.A, { guild: t, channelId: e.id });
        if (null != s) return (0, l.jsx)(nL.A, { guild: t, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != t, "directory channels must exist within a guild"), (0, l.jsx)(nv, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            d()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(uu, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return e.type === eo.rbe.GUILD_APP
            ? (0, l.jsx)(uh, { channel: e }, e.id)
            : (0, l.jsx)(nR.A, { channel: e, guild: t, chatInputType: tE.oU.NORMAL }, null != t ? t.id : "home");
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
            return (0, l.jsx)(a2, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(l7, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(ut, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(ut, { channel: t }, `channel-members-${t.id}`);
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
                    return (0, l.jsx)(tz, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(ux, { guildId: n?.id, channelId: e.id });
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
                        { onCloseCallback: () => iI(lW.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("99643"), n.e("510585")]).then(
                                n.bind(n, 954784),
                            );
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, a9.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
                case iD.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sG, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case iD.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(s9, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case iD.PE.VIEW_CHANNEL: {
                    let n = ew.A.getChannel(i.channelId);
                    if (n?.isThread()) {
                        let n = t?.isForumLikeChannel() ? im : s9;
                        e = (0, l.jsx)(n, { channelId: i.channelId });
                        break;
                    }
                    if (null != t && (0, a7.ZV)(t.type)) {
                        e = (0, l.jsx)(ur.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case iD.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iD.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: ud.uC,
                    children: (0, l.jsx)(uf, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => ik.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(a4.A, {
                sidebarType:
                    t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? a4.X.PostSidebar : a4.X.ThreadSidebar,
                maxWidth: c,
                capturePointer: t?.type === eo.rbe.GUILD_APP,
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
        if (i) return (0, l.jsx)(ui, {});
        if (null == e) return (0, l.jsx)(us.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            j = (0, ul.UN)("Channel"),
            C = null != d && !I,
            E = (0, a7.nO)(e.type) && !o,
            y = t?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE,
                        className: a()(ud.TE, {
                            [ud.js]: (I && !j) || C,
                            [ud.Rs]: I ? !j || g : C || x,
                            [ud.jl]: I && g,
                        }),
                        children: [
                            E
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: ud.x4,
                                      channel: e,
                                      draftType: ic.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(ud.Qs, { [ud.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tK.HI, { location: y, subsection: n ?? void 0 }),
                u ? (0, l.jsx)("div", { className: ud.zP, children: b }) : b,
                x && (0, l.jsx)(uI, {}),
            ],
        });
    }
}
let uC = (0, ef.A)(uj),
    uE = s.memo(function (e) {
        var t, n;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
            c = (0, m.bG)([eG.Ay], () => eG.Ay.getVoiceChannelId()),
            g = (0, m.bG)([ew.A], () => r ?? ew.A.getChannel(d), [d, r]),
            x = (0, nT.DZ)(),
            f = (0, nT.e4)(g, "ConnectedChannel"),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(c), [c]),
            E = f?.parent_id,
            y = (0, m.bG)([ew.A], () => ew.A.getChannel(E), [E]),
            b = (0, m.bG)([nr.A], () => nr.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: _ } = (0, iE.A)(f?.id ?? void 0),
            v = (0, m.bG)(
                [tj.A],
                () => {
                    let e = null != d ? tj.A.getParticipants(d) : [],
                        t = null != d ? tj.A.getActivityParticipants(d) : [];
                    return e.length - t.length > 0;
                },
                [d],
            ),
            N = (0, ig.A)(),
            T = (0, m.bG)([eG.Ay], () => (N?.channelId ?? eG.Ay.getVoiceChannelId()) === f?.id),
            S = (0, m.bG)([eC.Ay], () => (null != f ? eC.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, m.bG)([a8.A], () => a8.A.isConnected()),
            O = (0, ej.Ay)(R),
            P = R && !1 === O;
        s.useEffect(() => {
            T &&
                P &&
                null != S &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, tI.Qt)({ applicationId: S.applicationId, instanceId: S.compositeInstanceId }),
                );
        }, [P, f, T, S]);
        let M = (0, m.bG)([eC.Ay], () => eC.Ay.getCurrentEmbeddedActivity()),
            L = (0, m.bG)([eC.Ay], () => eC.Ay.getActivityPanelMode()),
            k = null != M && !(0, ev.A)(f?.id) && L === eZ.Gd.PANEL,
            D = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: w, isUserInThisVoice: G } = (0, m.cf)([lx.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lx.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lx.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !k && v,
            F = f?.isGuildVocal() || U || (w && (G || !D)),
            H = (0, m.bG)([tA.A], () => {
                let e = (0, tc.ny)(tA.A.getMainFrame());
                return e?.data.layoutMode === tc.y0.FOCUSED && e.intent === tc.sV.MAIN;
            }),
            { welcomeModalChannelId: V } = (0, h.zy)(),
            B = (0, m.bG)([ie.A], () => null != f && ie.A.isLurking(f.guild_id), [f]),
            Y = (0, m.bG)([a5.A], () => a5.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, m.bG)(
                [tj.A, eC.Ay],
                () =>
                    null != eC.Ay.getConnectedActivityLocation() && eC.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eC.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != d
                          ? tj.A.getLayout(d)
                          : eo.DUB.NORMAL,
                [d],
            ),
            z =
                ((t = b?.id),
                (i = (0, m.bG)([nr.A, lY, ee.default, X.Ay], () => {
                    let e = nr.A.getGuild(t);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === lY.hasViewedPrompt(lW.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = ee.default.getCurrentUser();
                    if (null == n) return null;
                    let i = X.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != t && null != i && (i || iI(lW.REAL_NAME_PROMPT, t));
                }, [i, t]),
                !0 === i),
            q =
                ((n = b?.id),
                (0, m.bG)([ew.A, nr.A, eG.Ay], () => {
                    let e = nr.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = ew.A.getChannel(V);
                    return V === eG.Ay.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, a7.ke)(t.type);
                })),
            { section: K, channelSidebarState: $ } = (0, m.cf)(
                [iw.Ay],
                () => ({ section: iw.Ay.getSection(d, f?.isDM()), channelSidebarState: iw.Ay.getSidebarState(d) }),
                [d, f],
            ),
            J = b?.id,
            Z = (0, m.bG)([iw.Ay], () => iw.Ay.getGuildSidebarState(J), [J]),
            et = (0, lq.lI)(),
            en = (0, nS.Ay)(f),
            el = (0, nS.Ay)(f, !0),
            es = (0, m.bG)([tj.A], () => (null != f ? tj.A.getSelectedParticipant(f.id) : null)),
            er = (0, e4.vL)(f),
            ea = (0, nM.Uf)(f),
            ed = null != f && c === f.id,
            ec = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eu, appBarToggleEnabled: eh } = iA.A.useConfig({ location: "Channel" }),
            em = (0, ip.c)(),
            eA = (0, m.bG)(
                [a6.A, iH.A],
                () => {
                    let e = f?.guild_id ?? iH.A.getGuildId();
                    return null != e && a6.A.isUnavailable(e);
                },
                [f],
            ),
            ep = eu && !__OVERLAY__ && null != f && !eA && !f.isGuildVocal();
        (s.useEffect(() => (j.A.setFriendsSidebarAvailable(ep), () => j.A.setFriendsSidebarAvailable(!1)), [ep]),
            (function (e) {
                let { onTransition: t } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: n } = e,
                            i = (0, e_.H)(n);
                        if (null == i || !(0, ev.A)(i)) return;
                        eG.Ay.getVoiceChannelId() !== i && (await (0, e6.A)({ channelId: i }));
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
                let e = (0, nP.JK)();
                if (e?.location?.state?.stageInviteKey === uo.J2) {
                    let { channelId: t } = (0, lz.vu)(e?.location?.pathname) ?? {};
                    null != t && o(t);
                }
            }, []));
        let eg = { channel: f, inCurrentVoiceChannel: ed },
            ex = s.useRef(eg);
        (s.useEffect(() => {
            ex.current = eg;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ex.current;
                null != a && null != e && ec && e.id === a && !t && ((0, st.av)(e), o(null));
            }, [a, ec]));
        let ef = (0, eI.cI)(f),
            eE = null != f && f.isPrivate(),
            ey = (0, ej.Ay)(eE),
            eb = (0, ej.Ay)(f?.id);
        s.useEffect(() => {
            let e = ey && !eE,
                t = ey && eE && f?.id !== eb;
            (e || t) && (0, nN.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lI.i.AUTO });
        }, [f?.id, eb, eE, ey]);
        let eN = (0, p.useHasAnyModalOpen)();
        return (0, l.jsx)(uC, {
            guildId: f?.guild_id,
            channelId: d,
            channel: f,
            channelName: en,
            formattedChannelName: el,
            parentChannel: y,
            voiceChannel: C,
            layout: W,
            needSubscriptionToAccess: _,
            isLurking: B,
            hasModalOpen: eN,
            section: K,
            channelSidebarState: $,
            guildSidebarState: Z,
            guild: b,
            showCall: !_ && F,
            showActivityPanel: k,
            showFramePanel: H,
            channelIsContentGated: er,
            spoilerGatingChannelId: ea,
            isMobile: (0, m.bG)([Q.A], () => f?.type === eo.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: eA,
            showRealNameModal: z,
            showWelcomeModal: !Y && q,
            showFollowButton: (f?.type === eo.rbe.GUILD_ANNOUNCEMENT && b?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lx.A], () => ({ hasVideo: null != f && lx.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: es,
            showChannelSummaries: ef,
            showHeaderGuildBreadcrumb: x || et,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: M,
            friendsSidebarExperimentEnabled: eu,
            canShowFriendsSidebar: ep,
            friendsSidebarAppBarToggleEnabled: eh,
            friendsSidebarCollapsed: em,
        });
    });
