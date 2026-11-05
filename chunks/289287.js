(t.r(n), t.d(n, { default: () => ha }), t(321073));
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
    A = t(855986),
    m = t(554146),
    p = t(192308),
    g = t(289873),
    x = t(821609),
    f = t(43990),
    I = t(367513),
    E = t(604681),
    C = t(442433);
t(183994);
var j = t(837381),
    y = t(116903),
    b = t(607399),
    _ = t(834730),
    T = t(194261),
    v = t(312138),
    N = t(475825),
    S = t(177953),
    R = t(534514),
    L = t(414798),
    O = t(775602),
    M = t(793574),
    P = t(688810),
    D = t(449582),
    k = t(485947),
    w = t(233824),
    U = t(69282),
    G = t(657048),
    F = t(361610),
    H = t(964486),
    B = t(36124),
    V = t(317525),
    W = t(219065),
    Y = t(818348),
    z = t(792996);
let X = [];
var q = t(342296),
    K = t(616356),
    $ = t(696451),
    Z = t(290863),
    Q = t(894768),
    J = t(741961),
    ee = t(287809),
    en = t(303727),
    et = t(129230),
    ei = t(188567),
    el = t(488926),
    es = t(427262),
    er = t(253400),
    ea = t(110574),
    eo = t(652215),
    ed = t(940485),
    ec = t(4577);
let eu = er.Ay.getEnableHardwareAcceleration(),
    eh = s.memo(function (e) {
        let { channel: n, sectionId: i, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, A.bG)([J.A], () => J.A.isTyping(n.id, r)),
            c = (0, A.bG)([$.Ay], () => $.Ay.getMember(n.guild_id, r)),
            u = (0, A.bG)(
                [V.A],
                () => (c?.colorRoleId != null ? V.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, A.bG)([ee.default], () => ee.default.getUser(r)),
            m = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === m?.id,
            g = (0, A.bG)([Z.A, Q.A], () => (p ? Q.A.getStatus() : Z.A.getStatus(r, n.guild_id))),
            x = (0, A.bG)([Z.A], () => Z.A.isMobileOnline(r)),
            f = (0, A.yK)([Z.A, Q.A], () => (p ? Q.A.getActivities() : Z.A.getActivities(r, n.guild_id))),
            I = (0, A.bG)([K.A], () => K.A.getAnyStreamForUser(r)),
            E = (0, j.rm)(r),
            y = (0, A.bG)([W.A], () => W.A.canUserViewChannel(n.id, i, r)),
            _ = h?.id != null && h.id === a,
            T = s.useCallback(
                (e) => {
                    null != h &&
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e(926132),
                                t.e(893190),
                                t.e(146652),
                                t.e(576432),
                                t.e(451162),
                                t.e(576665),
                                t.e(624198),
                                t.e(823427),
                                t.e(343116),
                                t.e(70515),
                                t.e(666939),
                                t.e(278544),
                            ]).then(t.bind(t, 202643));
                            return (t) => (0, l.jsx)(e, { ...t, user: h, guildId: n.guild_id, channel: n });
                        });
                },
                [h, n],
            ),
            v = s.useCallback(() => {
                if (null == h) return;
                let e = `@${es.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    L.A.startTyping(n.id));
            }, [h, n]),
            N = s.useCallback(
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
        let M = c?.premiumSince;
        return (0, l.jsx)(q.A, {
            targetElementRef: o,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: v,
            shouldShow: R,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: t, onMouseDown: i, ...s } = e;
                return (0, l.jsx)(ea.A, {
                    ref: o,
                    onContextMenu: T,
                    shouldAnimateStatus: eu,
                    user: h,
                    currentUser: m,
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
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: N,
                    itemProps: E,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? v?.() : O((e) => !e);
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
            r = (0, U.Xx)({ roleId: n, guildId: s, size: 16 });
        return n === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(G.A, { className: ec.UT, ...r }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    em = s.memo(function (e) {
        let { channel: n } = e;
        return n.type === eo.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: ed.yF }),
                      (0, l.jsxs)(_.E, {
                          variant: "body-xs/semibold",
                          color: "text-default",
                          className: ed.Uz,
                          children: [
                              (0, l.jsx)(T.LockIcon, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              z.intl.string(z.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(_.E, {
                          variant: "body-sm/normal",
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
        m = `members-${c.id}`,
        { analyticsLocations: p } = (0, P.Ay)(M.A.MEMBER_LIST),
        g = (function (e, n) {
            (0, H.Ay)(() => {
                n?.id != null && (0, F.Ey)(n.id, e, B.L);
            });
            let t = (0, A.bG)([V.A], () => (null != n ? V.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, A.cf)([W.A], () => ({
                    version: W.A.getMemberListVersion(e),
                    members: W.A.getMemberListSections(e),
                })),
                r = null == n,
                a = s.useMemo(() => {
                    if (r) return X;
                    let e = t.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: Y.cl.ONLINE, label: z.intl.string(z.t.WbGtnH) },
                            { id: Y.cl.OFFLINE, label: z.intl.string(z.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: n, label: t } = e;
                            return { label: t, userIds: l?.[n]?.userIds ?? [], id: n, roleId: n };
                        })
                    );
                }, [t, l, i, r]);
            return null != l ? a : X;
        })(c.id, h),
        x = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: I } =
            ((n = m),
            (t = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
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
    let C = u().omit(f.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(P.f5, {
        value: p,
        children: (0, l.jsx)(j.hD, {
            navigator: f,
            children: (0, l.jsx)(v.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(ec.yg, ec.ML, ed.kL),
                        children: (0, l.jsx)(
                            N.OZ,
                            {
                                ref: I,
                                className: ec.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = g[n];
                                    return (0, l.jsx)(
                                        eA,
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
                                    g[e.section] === x ? (0, l.jsx)(em, { channel: c }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: g.map((e) => e.userIds.length),
                                fade: !0,
                                ...C,
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
        className: a()(ed.p$, ed.kL, ec.yg, ec.ML, ec.ol),
        children: [
            (0, l.jsx)(_.E, {
                className: ed.ks,
                variant: "body-xs/semibold",
                color: "interactive-text-default",
                children: z.intl.string(z.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: ed.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: ed.AI,
                        children: (0, l.jsx)(S.GroupIcon, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(en.A, { className: ed.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-sm/semibold",
                children: n.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
            }),
            (0, l.jsx)(_.E, {
                className: ed.WO,
                variant: "body-sm/normal",
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
    eC = t(933958),
    ej = t(164636),
    ey = t(293432),
    eb = t(811024),
    e_ = t(969151),
    eT = t(108959),
    ev = t(866665),
    eN = t(446576),
    eS = t(817281),
    eR = t(149468),
    eL = t(587837),
    eO = t(850891),
    eM = t(964404),
    eP = t(693409),
    eD = t(383831),
    ek = t(128286),
    ew = t(734057),
    eU = t(309010),
    eG = t(795816),
    eF = t(685399),
    eH = t(216418),
    eB = t(620148),
    eV = t(732637),
    eW = t(104171),
    eY = t(47294),
    ez = t(594007),
    eX = t(16961),
    eq = t(73153),
    eK = t(652934),
    e$ = t(735168),
    eZ = t(5867),
    eQ = t(138017),
    eJ = t(715482),
    e0 = t(315502),
    e1 = t(218461),
    e2 = t(234320),
    e6 = t(248310);
function e3(e) {
    let { channelId: n, className: t, ...i } = e,
        r = s.useRef(null),
        a = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [a]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let n = (0, A.bG)([J.A], () => !(0, c.isEmpty)(J.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, A.cf)(
                    [e1.Ay],
                    () => ({ unreadCount: e1.Ay.getUnreadCount(e), mentionCount: e1.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: i, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            r.current?.focus();
        }, []);
    (0, e2.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: h });
    let m = a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        p = [m];
    (u > 0 && p.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        d > 0 && p.push(z.intl.string(z.t.x5zAGZ)));
    let g = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        x = u > 0 ? u : d,
        f = x > 0;
    return (0, l.jsxs)("div", {
        className: e6.iE,
        children: [
            (0, l.jsx)(eP.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: m,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eZ.E8.NO_CHAT ? eQ.ChevronLargeUpIcon : eJ.ChevronLargeDownIcon,
                themeable: !0,
                className: t,
                ...i,
            }),
            f ? (0, l.jsx)(e0.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e6.qS }) : null,
        ],
    });
}
var e9 = t(538303);
let e7 = eW.DN.SIZE_32,
    e5 = { [eZ.E8.NO_CHAT]: e9.Oo, [eZ.E8.RESIZABLE]: e9.Ig };
function e8(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        r = (0, eB.A)(),
        o = (0, A.yK)([eC.Ay], () => eC.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, A.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        m = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [I, E] = s.useState(eM.Ay.activityPanelHeight ?? n ?? null),
        C = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        j = s.useRef(null),
        [y, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == j.current) return;
        let e = new ResizeObserver(() => {
            b({ width: j.current?.clientWidth ?? 0, height: j.current?.clientHeight ?? 0 });
        });
        return (e.observe(j.current), () => e.disconnect());
    }, []);
    let T = y.width / Math.max(y.height, 1) < eZ.B5,
        v = 0,
        N = 0,
        S = (0, eH.A)(r?.id);
    if (!S) {
        let e = y.width,
            n = y.height;
        T
            ? ((n = y.width / eZ.B5) > y.height && (e = (n = y.height) * eZ.B5), (N = (y.height - n) / 2))
            : ((e = Math.min(y.height * eZ.B5)) > y.width && (n = (e = y.width) / eZ.B5), (v = (y.width - e) / 2));
    }
    let R = h.get(r?.id ?? ""),
        L = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        M = (0, A.yK)(
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
                M.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [M]),
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
        k = (0, eX.G)();
    if (null == r) return null;
    let w = [];
    function U(e) {
        if (null == e || void 0 === e || e === eW.mt) return null;
        let n = P.get(e.id),
            t = n?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            ev.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e7), alt: t, className: e9.my }, e.id),
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
                    className: a()(e9.iE, e5[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: r.id }),
                        (0, l.jsxs)("div", {
                            className: e9.lq,
                            children: [
                                x
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e9.wx,
                                          children: (0, l.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "body-md/semibold",
                                              className: e9.qd,
                                              children: r?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: a()(e9.ht, { [e9.kK]: S }),
                                    style: { paddingLeft: v, paddingRight: v, paddingTop: N, paddingBottom: N },
                                    ref: j,
                                    children: (0, l.jsx)(eV.A, { className: e9.pU, embedId: (0, ez.A)(t.id, r.id) }),
                                }),
                                null != L
                                    ? (0, l.jsxs)("div", {
                                          className: e9.qr,
                                          children: [
                                              (0, l.jsx)(eW.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e7,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e9.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e9.qi,
                                                          children: [
                                                              (0, l.jsx)(e3, { channelId: L }),
                                                              (0, l.jsx)(eP.l, {
                                                                  isTrayButton: !0,
                                                                  label: z.intl.string(z.t.brPQ5U),
                                                                  onClick: m,
                                                                  iconComponent: eN.MinimizeIcon,
                                                                  themeable: !0,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: e9.pt,
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
                                                                (0, eY.A)({
                                                                    onConfirm: () => {
                                                                        var e, n;
                                                                        return (
                                                                            (e = r.id),
                                                                            (n = d ?? null),
                                                                            (0, e$.A)({
                                                                                windowKey: eo.MLl.ACTIVITY_POPOUT,
                                                                                openWindow: () =>
                                                                                    eq.h.dispatch({
                                                                                        type: "ACTIVITY_POPOUT_WINDOW_OPEN",
                                                                                    }),
                                                                                onWindowOpened: () =>
                                                                                    (0, eG.gk)(
                                                                                        eZ.Gd.ACTIVITY_POPOUT_WINDOW,
                                                                                    ),
                                                                                refreshProxyTicket: () =>
                                                                                    null != n
                                                                                        ? (0, eG.od)(e, n)
                                                                                        : Promise.resolve(!0),
                                                                                onRefreshFailed: eK.G,
                                                                            })
                                                                        );
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
                            ? (0, l.jsx)(eL.A, {
                                  minHeight: 480,
                                  maxHeight: n,
                                  resizableNode: p,
                                  onResize: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), E(e));
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
function e4(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, ej.cf)([eC.Ay], () => {
            let e = eC.Ay.getConnectedActivityLocation(),
                n = eC.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: n,
                activityPanelMode: eC.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, ej.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, eT.A)(i)
        ? null
        : (0, l.jsx)(e8, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var ne = t(90804),
    nn = t(748975),
    nt = t(323073),
    ni = t(964167),
    nl = t(483510),
    ns = t(976860);
function nr(e) {
    let { channel: n } = e;
    return (0, l.jsx)(x.$, {
        onClick: function () {
            let e = n.getGuildId();
            (ei._.dispatch(eo.jej.SEARCH_RESULTS_CLOSE), (0, ns.pX)(eo.BVt.CHANNEL(e, n.id)), (0, nl.ci)(e, n.id));
        },
        variant: "secondary",
        size: "sm",
        text: z.intl.string(z.t.vLgj1J),
    });
}
var na = t(991690),
    no = t(70688),
    nd = t(995102),
    nc = t(288104),
    nu = t(444570),
    nh = t(58736),
    nA = t(857071),
    nm = t(233470),
    np = t(260498),
    ng = t(95264),
    nx = t(914315),
    nf = t(191850);
function nI(e) {
    let { channel: n } = e,
        t = n.guild_id ?? null,
        i = (0, nx.A)(n, "ConjureAppChannelRemixButton"),
        r = (0, A.bG)([nA.A], () => null != t && nA.A.isLurking(t), [t]),
        a =
            (s.useEffect(() => {
                (0, nm.b8)();
            }, []),
            (0, A.bG)([np.Ay], () => {
                let e = np.Ay.getMaxProjects();
                return null != e && np.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - np.Ay.getOwnedProjects().length)
                    : null;
            }));
    if (null == i || null == t || r || 0 === a) return null;
    let o = z.intl.string(nf.default["276ll6"]);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: nu.PaperPlusIcon,
        tooltip: o,
        "aria-label": o,
        onClick: () => (0, ng.A)(i, t),
    });
}
var nE = t(766367),
    nC = t(246338),
    nj = t(947162),
    ny = t(672929),
    nb = t(534890);
function n_(e) {
    let { channelId: n } = e,
        t = (function (e) {
            let { hasUnread: n, mentionCount: t } = (0, A.cf)(
                [e1.Ay],
                () => ({
                    hasUnread: null != e && e1.Ay.hasUnread(e),
                    mentionCount: null != e ? e1.Ay.getMentionCount(e) : 0,
                }),
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
        i = s.useRef(null),
        r = s.useCallback(() => i.current?.focus(), []);
    (0, e2.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: r });
    let a = (0, nl.HP)(n),
        o = (0, A.bG)([ew.A], () => ew.A.getBasicChannel(n)?.guild_id, [n]);
    return (0, l.jsx)(nh.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nb.ChatIcon,
        iconSize: 20,
        onClick: () => {
            a
                ? (0, nl.m)(n)
                : ((0, nl.ci)(o, n),
                  setTimeout(() => ei._.dispatch(eo.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: n }), 0));
        },
        selected: a,
        badge: t,
    });
}
var nT = t(799704),
    nv = t(967198);
function nN(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([nT.Ay], () => nT.Ay.getSection(n)),
        i = (0, A.bG)([nv.A], () => nv.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nh.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.GroupIcon,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                E.A.toggleMembersSection());
        },
        selected: s,
    });
}
var nS = t(187360),
    nR = t(621466),
    nL = t(453903),
    nO = t(477782),
    nM = t(12470),
    nP = t(811893),
    nD = t(663417),
    nk = t(729475),
    nw = t(265872),
    nU = t(165862),
    nG = t(885574),
    nF = t(365199),
    nH = t(586486),
    nB = t(130332),
    nV = t(625180),
    nW = t(156548),
    nY = t(646973),
    nz = t(702476),
    nX = t(475815),
    nq = t(615606),
    nK = t(165610);
function n$(e) {
    let { channel: n, isConjured: t, notificationItems: i } = e,
        [r, a] = s.useState(!1),
        o = s.useRef(null),
        d = (0, nH.A)(n, "app_channel_header"),
        c = (0, nq.q)(n)?.bot,
        u = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        h = (0, ny.A)(n.application_id ?? null, u),
        A = (0, nK.x1)(h) && h.data.proxyTicketRefreshing,
        m = (0, nB.A)(n, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        p = null != m.edit,
        { canPopout: g, isPoppedOut: x, popOut: f, popIn: I } = (0, nY.A)(h),
        E = s.useCallback(() => {
            null == h || A || nV.A.refreshProxyTicket(h.id);
        }, [h, A]),
        C = z.intl.string(z.t["UKOtz+"]),
        j = (0, nK.x1)(h);
    if (!j && null == c && null == d && !p && null == i) return null;
    function y() {
        return j
            ? (0, l.jsx)(nO.Dr, {
                  id: "reload-app",
                  label: z.intl.string(z.t.kHie4V),
                  action: E,
                  icon: nD.RefreshIcon,
                  leadingAccessory: { type: "icon", icon: nD.RefreshIcon },
                  disabled: A,
              })
            : null;
    }
    function b() {
        let e = (0, nK.x1)(h) && !x ? (0, nW.fl)(h.id) : null;
        return null != e && (0, nX.Ub)(e)
            ? (0, l.jsx)(nO.Dr, {
                  id: "full-screen-app",
                  label: z.intl.string(z.t.OIDkcp),
                  icon: nk.FullscreenEnterIcon,
                  leadingAccessory: { type: "icon", icon: nk.FullscreenEnterIcon },
                  action: () => (0, nX.tl)(e),
              })
            : null;
    }
    return (0, l.jsx)(nw.Y, {
        targetElementRef: o,
        shouldShow: r,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, nR.vq)(document.activeElement, HTMLIFrameElement)) return nL.oU;
            a(!1);
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsxs)(nU.W, {
                "data-menu-migrated": !0,
                navId: "app-channel-header-overflow",
                onClose: s,
                onSelect: s,
                "aria-label": z.intl.string(z.t.Xm41aV),
                children: [
                    t
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  j
                                      ? (0, l.jsxs)(nO.rX, {
                                            children: [
                                                j
                                                    ? x
                                                        ? (0, l.jsx)(nO.Dr, {
                                                              id: "pop-in-app",
                                                              label: z.intl.string(z.t["NKV/MO"]),
                                                              icon: nM.WindowReturnIcon,
                                                              leadingAccessory: {
                                                                  type: "icon",
                                                                  icon: nM.WindowReturnIcon,
                                                              },
                                                              action: I,
                                                          })
                                                        : g
                                                          ? (0, l.jsx)(nO.Dr, {
                                                                id: "pop-out-app",
                                                                label: z.intl.string(z.t["3Zypbv"]),
                                                                icon: nP.WindowLaunchIcon,
                                                                leadingAccessory: {
                                                                    type: "icon",
                                                                    icon: nP.WindowLaunchIcon,
                                                                },
                                                                action: f,
                                                            })
                                                          : null
                                                    : null,
                                                b(),
                                                m.showOverlay,
                                            ],
                                        })
                                      : null,
                                  j || p ? (0, l.jsxs)(nO.rX, { children: [m.edit, m.devicePermissions, y()] }) : null,
                              ],
                          })
                        : j
                          ? (0, l.jsxs)(nO.rX, {
                                children: [
                                    b(),
                                    y(),
                                    (0, nK.x1)(h)
                                        ? (0, l.jsx)(nO.Dr, {
                                              id: "close-app",
                                              label: z.intl.string(z.t.VkMnR2),
                                              action: () => (0, nj.A)(h.id),
                                              icon: no.DoorExitIcon,
                                              leadingAccessory: { type: "icon", icon: no.DoorExitIcon },
                                          })
                                        : null,
                                ],
                            })
                          : null,
                    null != i ? (0, l.jsx)(nO.rX, { children: i }) : null,
                    null != c || null != d
                        ? (0, l.jsxs)(nO.rX, {
                              children: [
                                  null != c
                                      ? (0, l.jsx)(nO.Dr, {
                                            id: "app-info",
                                            label: z.intl.string(z.t.Sh2z9g),
                                            action: () =>
                                                (0, nz.openUserProfileModal)({
                                                    userId: c.id,
                                                    guildId: n.guild_id,
                                                    channelId: n.id,
                                                }),
                                            leadingAccessory: { type: "icon", icon: nG.CircleInformationIcon },
                                        })
                                      : null,
                                  d,
                              ],
                          })
                        : null,
                ],
            });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: o,
                onClick: () => a((e) => !e),
                tooltip: t ? null : C,
                icon: nF.MoreHorizontalIcon,
                "aria-label": C,
                selected: t,
            });
        },
    });
}
function nZ(e) {
    let { frame: n } = e,
        { canPopout: t, isPoppedOut: i, popOut: s, popIn: r } = (0, nY.A)(n);
    return (0, nK.x1)(n)
        ? i
            ? (0, l.jsx)(nh.In, {
                  icon: nM.WindowReturnIcon,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: r,
              })
            : t
              ? (0, l.jsx)(nh.In, {
                    icon: nP.WindowLaunchIcon,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: s,
                })
              : null
        : null;
}
function nQ(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, ny.A)(n.application_id ?? null, t);
    return (0, l.jsx)(nZ, { frame: i });
}
function nJ(e) {
    let { frame: n } = e;
    if (!(0, nK.x1)(n)) return null;
    let t = z.intl.string(z.t.VkMnR2);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: t,
        "aria-label": t,
        onClick: () => (0, nj.A)(n.id),
    });
}
function n0(e) {
    let { channel: n, isLurking: t } = e,
        i = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        r = (0, ny.A)(n.application_id ?? null, i),
        a = (0, nd.A)(n),
        o = (0, nc.A)(n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nJ, { frame: r }),
            (0, l.jsx)(nI, { channel: n }),
            (0, l.jsx)(nE.A, { frame: r }),
            (0, l.jsx)(nN, { channelId: n.id }),
            (0, l.jsx)(n_, { channelId: n.id }),
            (0, l.jsx)(n$, {
                channel: n,
                isConjured: !0,
                notificationItems: t ? null : (0, l.jsxs)(l.Fragment, { children: [a, o] }),
            }),
        ],
    });
}
function n1(e) {
    let { channel: n, isLurking: t } = e;
    return (0, nC.w$)(n, "AppChannelHeaderActions")
        ? (0, l.jsx)(n0, { channel: n, isLurking: t })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(nQ, { channel: n }),
                  t ? null : (0, l.jsx)(nS.A, { channel: n }),
                  (0, l.jsx)(nN, { channelId: n.id }),
                  (0, l.jsx)(n_, { channelId: n.id }),
                  (0, l.jsx)(n$, { channel: n, isConjured: !1 }),
              ],
          });
}
var n2 = t(128376);
let n6 = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var n3 = t(568598),
    n9 = t(628983),
    n7 = t(164617),
    n5 = t(355622),
    n8 = t(689874),
    n4 = t(631828),
    te = t(627363),
    tn = t(91242),
    tt = t(499466);
function ti(e) {
    let { channel: n } = e,
        t = (0, A.bG)([tn.A], () => tn.A.getFramesForChannel(n.id).find((e) => (0, nK.x1)(e)), [n.id]),
        i = (0, te.YY)(t?.applicationId).data,
        s = (0, tt.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.conjureProjectId == null || !s) return null;
    let r = z.intl.string(nf.default["/TlGcK"]);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: r,
        "aria-label": r,
        onClick: () => (0, nj.A)(t.id),
    });
}
var tl = t(828488),
    ts = t(268218),
    tr = t(726249),
    ta = t(334738),
    to = t(208882),
    td = t(938764),
    tc = t(519480),
    tu = t(352123),
    th = t(302125),
    tA = t(130696);
let tm = function (e) {
    let { guild: n, onAddGuild: i } = e,
        r = s.useCallback(() => {
            (0, p.mM)(async () => {
                let { default: e } = await Promise.all([
                    t.e(683621),
                    t.e(711162),
                    t.e(159957),
                    t.e(728136),
                    t.e(680029),
                    t.e(966623),
                ]).then(t.bind(t, 660194));
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
        className: tA.h2,
        children: [
            (0, l.jsx)("img", { className: tA.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: tA._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "body-md/normal", className: tA.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(th.E, {
                      className: tA.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(th.E, {
                className: tA.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var tp = t(683438),
    tg = t(516521),
    tx = t(761508),
    tf = t(765671),
    tI = t(23815),
    tE = t(939249),
    tC = t(22231),
    tj = t(778858),
    ty = t(573435),
    tb = t(101555),
    t_ = t(682163),
    tT = t(714991),
    tv = t(776231),
    tN = t(345942),
    tS = t(71393),
    tR = t(486020),
    tL = t(537975),
    tO = t(682557),
    tM = t(524058);
let tP = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(tE.D, {
        onClick: n,
        className: tM.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                className: tM.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tD(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tu.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tM.fc, { [tM.QX]: i }),
        children: (0, l.jsxs)(tb.Ay, {
            children: [
                d
                    ? (0, l.jsx)(ev.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tb.$n, {
                              onClick: () => {
                                  (0, p.mM)(async () => {
                                      let { default: e } = await Promise.all([t.e(533651), t.e(988869)]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tC.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tM.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tO.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(ev.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tb.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nF.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tM.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tk = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, A.bG)([tS.A], () => tS.A.getGuild(n.guildId)),
        o = tR.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tv.mZ)() }),
        d = tR.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        c = z.intl.string(z.t.VJlc0S);
    return (
        a && (c = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tM.Nr,
            onContextMenu: function (e) {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tM.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tM.Yi,
                            children: null != o && (0, l.jsx)("img", { src: o, alt: "", className: tM.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tM.$f,
                            children: (0, l.jsx)(ty.Ay, {
                                mask: ty.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tM.SA,
                                    children: (0, l.jsx)(t_.Ay, {
                                        className: tM.rZ,
                                        iconSrc: d,
                                        guild: (0, tL.xi)(n),
                                        size: t_.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tM.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tM.DD,
                            children: [
                                (0, l.jsx)(tT.A, { className: tM.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tM.J5,
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tM.h_,
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tM.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tM.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tM.JX }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t["LC+S+m"], {
                                                    membersOnline: n.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != n.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: tM.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tM.Li }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-xs/normal",
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
                            className: tM.PD,
                            children: (0, l.jsx)(x.$, {
                                loading: i,
                                variant: a ? "secondary" : "active",
                                onClick: async function () {
                                    r(!0);
                                    try {
                                        a
                                            ? (0, tN.u)(n.guildId)
                                            : await tj.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
                                    } finally {
                                        r(!1);
                                    }
                                },
                                text: c,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(tD, { entry: n }),
            ],
        })
    );
});
var tw = t(946116),
    tU = t(844086),
    tG = t(770679);
function tF(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tf.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: tG.wx,
        children: [
            (0, l.jsx)("div", { className: tG.y2, children: (0, l.jsx)(tI.A, {}) }),
            (0, l.jsx)("div", {
                className: tG.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tG.VW, { [tG.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            className: tG.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: tG.MT,
                            children: (0, l.jsx)(tp.I, {
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
let tH = function (e) {
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
        allEntriesCount: A,
        isLoading: m,
    } = e;
    return (0, l.jsx)("div", {
        className: tU.$$,
        children: (0, l.jsxs)(tg.Gt, {
            className: tU.XG,
            children: [
                (0, l.jsx)(tF, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tg.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(tx.V, {
                        className: tG.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                tx.V.Item,
                                { className: tG.YU, id: tw.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${A})` },
                                tw.mU.ALL,
                            ),
                            (0, tw.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    tx.V.Item,
                                    { className: tG.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                m && null == t
                    ? (0, l.jsx)(g.y, { className: tU.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "body-md/semibold",
                                                className: tG.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tU.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tk, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tP, { onClick: i }) : null,
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
var tB = t(370876),
    tV = t(28863),
    tW = t(95362),
    tY = t(792831),
    tz = t(211862);
let tX = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: tU.$$, children: (0, l.jsx)(g.y, { className: tU.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tV.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tz.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "body-md/normal", color: "text-default", className: tz.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tU.vY, children: d.map((e) => (0, l.jsx)(tk, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tU.$$,
        children: (0, l.jsxs)(tW.Ar, {
            className: tU.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tz.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tz.Dr,
                            children: [
                                (0, l.jsx)(tE.D, {
                                    onClick: r,
                                    className: tz.UE,
                                    children: (0, l.jsx)(tY.A, { direction: tY.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tz.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tp.I, {
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
var tq = t(650583);
let tK = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, A.cf)([tc.A], () => {
            let e = tc.A.getCurrentCategoryId(n.id),
                t = tc.A.getDirectoryEntries(n.id, e === tw.mU.ALL ? null : e),
                i = tc.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: tc.A.getDirectoryAllEntriesCount(n.id),
                isLoading: tc.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = e1.Ay.lastMessageId(n.id);
            null != e &&
                (0, ta.I_)(
                    n.id,
                    { object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: eo.btD.ACK_AUTOMATIC },
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
                          if (n !== tw.mU.ALL) return [{ entries: (0, tB._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tB.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tB.DN)(s)).length > 0 &&
                                  t.push({ header: z.intl.string(z.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(a), r)
                    : null,
            [a, r],
        ),
        {
            mostRecentQuery: h,
            searchFetching: m,
            searchResults: x,
        } = (0, A.cf)([td.A], () => {
            let { mostRecentQuery: e, fetching: t } = td.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: td.A.getSearchResults(n.id, e) };
        }),
        [f, I] = s.useState(h),
        E = "" !== h,
        C = { mostRecentQuery: h },
        j = s.useRef(C);
    (s.useEffect(() => {
        j.current = C;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = j.current;
            (to.Yc(n.id), to.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, tu.b)(n),
        b = s.useMemo(
            () =>
                y
                    ? () => {
                          (0, p.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e(122326),
                                  t.e(533651),
                                  t.e(315907),
                                  t.e(419580),
                                  t.e(197804),
                                  t.e(756856),
                                  t.e(118822),
                              ]).then(t.bind(t, 668822));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: n.id,
                                      currentCategoryId: r === tw.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === tq.dh.ENTER &&
            (to.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function T() {
        (I(""), to.BA(n.id));
    }
    return E
        ? (0, l.jsx)(tX, {
              searchQuery: f,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: T,
              handleCreateOrAddGuild: b,
              searchResults: x,
              searchFetching: m,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: tU.$$, children: (0, l.jsx)(g.y, { className: tU.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tU.$$, children: (0, l.jsx)(tm, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tH, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: T,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      to.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var t$ = t(826673),
    tZ = t(93055),
    tQ = t(47167),
    tJ = t(699344),
    t0 = t(353428),
    t1 = t(288254),
    t2 = t(873614),
    t6 = t(649852),
    t3 = t.n(t6),
    t9 = t(789645),
    t7 = t(163126),
    t5 = t(182061),
    t8 = t(886393),
    t4 = t(307623),
    ie = t(660273),
    it = t(804006),
    ii = t(707792),
    il = t(41402),
    is = t(271456),
    ir = t(200273),
    ia = t(565846),
    io = t(57907),
    id = t(375500),
    ic = t(707653),
    iu = t(50268),
    ih = t(378570),
    iA = t(162199),
    im = t(713608),
    ip = t(473503),
    ig = t(474196),
    ix = t(267102),
    iI = t(474397),
    iE = t(486974),
    iC = t(307805);
function ij(e) {
    let { channel: n } = e,
        t = s.useContext(et.Ig),
        i = (0, ix.aL)(),
        r = z.intl.string(iC.default["Beo/7v"]),
        { firstMessage: a } = (0, ip.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nh.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, ih.iN)(n.id),
                      (0, iI.A)(),
                      (0, ig.z)(n.guild_id, d, n.id, {
                          modViewPanel: iE.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: im.ModerationIcon,
              "aria-label": r,
          })
        : null;
}
var iy = t(780338),
    ib = t(782603),
    i_ = t(607508),
    iT = t(914703),
    iv = t(37411);
function iN(e) {
    let { channel: n } = e,
        t = (0, i_.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, A.bG)([nA.A], () => null != n.guild_id && nA.A.isLurking(n.guild_id));
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
    return (0, l.jsx)(nw.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(iT.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === iv.CP.NO_MESSAGES ? iy.BellSlashIcon : ib.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var iS = t(747926);
function iR(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nw.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iL, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nF.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function iL(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, ie.A)(n, "Sidebar Overflow"),
        r = (0, it.A)(n, "Sidebar Overflow"),
        a = (0, il.A)(n),
        o = (0, io.A)(n),
        d = (0, id.A)(n),
        c = (0, t5.A)(n),
        u = (0, ii.A)(n),
        h = (0, ia.A)(n.id),
        A = (0, ir.A)(n),
        m = (0, t4.A)(n),
        p = (0, t8.A)(n),
        g = (0, iu.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        x = (0, ic.A)(n),
        f = (0, is.A)(n),
        I = (0, t7.$)(1e3);
    function E() {
        (0, ih.iN)(n.id);
    }
    function C(e) {
        let t = t3()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            I.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(nU.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nO.rX, {
                children: [s, (0, l.jsx)(nO.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(nO.rX, { children: [o, d] }),
            (0, l.jsxs)(nO.rX, { children: [A, a, h, f] }),
            (0, l.jsxs)(nO.rX, {
                children: [
                    (0, l.jsx)(nO.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nP.WindowLaunchIcon,
                        trailingIndicator: { type: "icon", icon: nP.WindowLaunchIcon },
                        action: function () {
                            (C(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E());
                        },
                    }),
                    (0, l.jsx)(nO.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nP.WindowLaunchIcon,
                        trailingIndicator: { type: "icon", icon: nP.WindowLaunchIcon },
                        action: function () {
                            (C(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nO.rX, { children: [x, c, u, m] }),
            (0, l.jsx)(nO.rX, { children: r }),
            (0, l.jsxs)(nO.rX, { children: [p, g] }),
        ],
    });
}
function iO(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nh.Ay.Icon, {
            icon: t9.XSmallIcon,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, iS.xu)((0, iA.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iN, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(ij, { channel: n }) : null,
                  (0, l.jsx)(iR, { channel: n }),
                  i,
              ],
          });
}
var iM = t(31717),
    iP = t(853742),
    iD = t(85190);
function ik(e) {
    let { channelId: n } = e,
        i = (0, A.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, A.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, A.bG)([tS.A], () => tS.A.getGuild(i?.getGuildId())),
        o = (0, tQ.Ay)(i),
        d = (0, t1.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iP.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(t2.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iO, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iM.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t0.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e(926132),
                                t.e(491001),
                                t.e(947502),
                                t.e(965789),
                                t.e(420105),
                            ]).then(t.bind(t, 949488));
                            return (n) => (0, l.jsx)(e, { ...n, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, ns.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iD.T,
                children: (0, l.jsx)(tJ.A, { channel: i, guild: a, chatInputType: n5.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iw = t(925166),
    iU = t(76268),
    iG = t(605117),
    iF = t(857253),
    iH = t(872363);
let iB = function (e, n) {
    eq.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var iV = t(561446),
    iW = t(300233),
    iY = t(499211),
    iz = t(727419),
    iX = t(529942),
    iq = t(739455),
    iK = t(709017);
function i$(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iK.t7,
        children: (0, l.jsxs)("div", {
            className: iK.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iK.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "body-sm/normal",
                            className: iK.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iK.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iX.rf)(n),
                                        iz.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iq.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iZ = t(599941),
    iQ = t(29385),
    iJ = t(950344),
    i0 = t(316369),
    i1 = t(31637),
    i2 = t(325348);
function i6(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iQ.e)({ guildId: n, channelId: t }),
        r = (0, iZ.uk)(n),
        a = (0, iZ.Tq)(n),
        o = (0, A.bG)([tS.A], () => tS.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, A.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tQ.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, iJ.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: i2.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: i2.__invalid_spinner }),
          })
        : (0, l.jsxs)(tW.Ar, {
              className: i2.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: i2.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: i2.Lv,
                      variant: "body-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(i0.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  i1.A,
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
var i3 = t(256331),
    i9 = t(856896);
function i7() {
    let e = (0, A.bG)([i3.A], () => i3.A.isHighlightingEnabled()),
        n = e ? "Hide Highlights" : "Highlight Conversations";
    return (0, l.jsx)(nh.In, {
        onClick: i9.Eg,
        tooltip: n,
        icon: nb.ChatIcon,
        iconSize: 20,
        "aria-label": n,
        role: "switch",
        "aria-checked": e,
        selected: e,
    });
}
var i5 = t(287074),
    i8 = t(306788),
    i4 = t(863922),
    le = t(391820),
    ln = t(521732);
function lt(e) {
    let { channel: n } = e,
        t = (0, nt.ni)(n),
        i = (0, A.bG)([le.A], () => le.A.shouldShowTopicsBar());
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: i8.TopicsIcon,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: ln.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, i4.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var li = t(947094),
    ll = t(919577),
    ls = t(207777),
    lr = t(422844),
    la = t(435470),
    lo = t(892110),
    ld = t(45494);
function lc(e) {
    let { channel: n } = e,
        t = (0, la.S4)(n),
        i = (0, A.bG)([li.A], () => li.A.hasHidden(n.id)),
        s = (0, lo.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, lr.R)(n.id),
        d = (0, A.bG)(
            [ls.A, ld.A],
            () => !!(ls.A.getThreadIds(n.id, r, a, o).length > 0) || !!(ld.A.getThreads(n.id, r, a, o).length > 0),
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
        icon: nG.CircleInformationIcon,
        onClick: function () {
            return ll.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lu = t(290136),
    lh = t(975571),
    lA = t(354817);
function lm() {
    let e = z.intl.string(lA.default.pdipXI);
    return (0, l.jsx)(nh.In, {
        tooltip: e,
        icon: lu.CircleQuestionIcon,
        onClick: function () {
            window.open(lh.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lp = t(742589),
    lg = t(43105),
    lx = t(428689),
    lf = t(978940),
    lI = t(387755),
    lE = t(597798),
    lC = t(641703),
    lj = t(384059),
    ly = t(379848),
    lb = t(753727),
    l_ = t(625075),
    lT = t(222692),
    lv = t(442353),
    lN = t(470710),
    lS = t(186111),
    lR = t(754712),
    lL = t(994500),
    lO = t(977997),
    lM = t(487887),
    lP = t(49999),
    lD = t(731854);
class lk extends s.PureComponent {
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
                : lR.Ay.supports(lD.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : l_.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nh.Ay.Icon, { icon: lx.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
            icon: lf.PhoneCallIcon,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(ly.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lg.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lM.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lP.i.USER_DISMISS),
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
            return (
                (0, lj.lO)(M.A.CHANNEL_HEADER, n ? lj.OP.START_VIDEO_CALL : lj.OP.START_CALL, t.id),
                lI.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s)
            );
        }
        n ? (0, lv.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        ((0, lj.lO)(M.A.CHANNEL_HEADER, e ? lj.OP.JOIN_VIDEO_CALL : lj.OP.JOIN_CALL, this.props.channel.id),
            lE.default.selectVoiceChannel(this.props.channel.id, e));
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, t$.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lP.i.AUTO }),
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
        (0, lv.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lT.A)();
    };
}
function lw(e) {
    let { channel: n } = e,
        t = (0, lb.A)(),
        i = (0, A.bG)([n9.A], () => n9.A.getMode(n.id)),
        s = (0, A.bG)([lO.A], () => lO.A.isInChannel(n.id)),
        r = (0, A.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, A.cf)([lN.A], () => ({
            callActive: lN.A.isCallActive(n.id),
            callUnavailable: lN.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([lL.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lL.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lL.A.isBlocked(d),
        })),
        h = (0, A.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, ix.Us)(),
        g = [],
        x = (0, lC.A)(n.id),
        f = (0, A.bG)([lS.A], () => lS.A.hasLayers());
    return (x && !f && g.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lk, {
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
var lU = t(753190),
    lG = t(765178),
    lF = t(231483),
    lH = t(544231),
    lB = t(338510),
    lV = t(151119),
    lW = t(278941),
    lY = t(665909),
    lz = t(327337);
let lX = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lB.u)(n.id),
        r = (0, lV.S)(n.id),
        a = (0, lW.e)(n.id),
        o = (0, p.Rv)(),
        d = (0, A.bG)([lS.A], () => lS.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, m] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lG.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lH.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lY.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lY.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lG.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lH.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lY.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lY.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && m(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lH.xi)(n.id, [a.id]),
            null != i &&
                ((0, p.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e(456510),
                            t.e(506627),
                            t.e(770940),
                            t.e(302033),
                            t.e(120884),
                        ]).then(t.bind(t, 556127));
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
                    { modalKey: lz.V },
                ),
                (0, lY._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lY.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(ev.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nh.Ay.Icon, {
                  icon: lF.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lq = t(262763),
    lK = t(406704),
    l$ = t(576705);
let lZ = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lb.A)(),
        i = (0, A.bG)([lO.A], () => lO.A.isInChannel(n.id)),
        r = (0, A.bG)([lO.A], () => !u().isEmpty(lO.A.getVoiceStatesForChannel(n.id))),
        a = (0, A.bG)([l$.A], () => l$.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iY.A)(n.id),
        d = (0, lK.Id)(n),
        { enabled: c } = lK.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lq.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
              icon: lf.PhoneCallIcon,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lQ = t(812991),
    lJ = t(741534),
    l0 = t(527212);
function l1() {
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
function l2(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, A.bG)([nT.Ay], () => nT.Ay.getSection(n.id, n?.isDM())),
        s = (0, l0.Ay)(n.getRecipientId()),
        r = l1(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nh.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lQ.UserCircleStatusIcon,
        onClick: function () {
            ((0, lJ.am)({ displayProfile: s, isProfileOpen: !a }), E.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let l6 = {};
class l3 extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            l6[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = l6[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return l6;
    }
}
let l9 = new l3(eq.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = l6[t];
        return null == i ? ((l6[t] = new Set()), l6[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != l6[n.id] && !n.unavailable && (delete l6[n.id], !0);
    },
});
var l7 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l5 = t(376943),
    l8 = t(394953),
    l4 = t(696357),
    se = t(683063),
    sn = t(403581),
    st = t(241541),
    si = t(709066),
    sl = t(87664),
    ss = t(247676),
    sr = t(695526),
    sa = t(927813),
    so = t(812020),
    sd = t(945810);
let sc = (0, sd.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var su = t(46653),
    sh = t(851746),
    sA = t(103411);
function sm() {
    let e = (0, sA.m)(),
        n = (0, A.bG)([sh.A], () => sh.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, A.bG)([su.default], () => su.default.getId()),
    };
}
var sp = t(315629),
    sg = t(610709),
    sx = t(303682),
    sf = t(224370),
    sI = t(544879);
function sE(e) {
    let {
            analyticsLocation: n,
            markAsDismissed: t,
            className: i,
            title: s = z.intl.string(z.t["DMie/y"]),
            body: r = z.intl.string(z.t.u0HAhn),
            ctaText: o = z.intl.string(z.t.Lm2nFc),
            onPrimaryAction: d,
        } = e,
        { analyticsLocations: c } = (0, P.Ay)(n);
    return (0, l.jsxs)(sp.h, {
        color: "nitro-pink",
        className: a()(sf.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: sf.lj,
                children: [
                    (0, l.jsx)("img", { className: sf.Dp, src: sI.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sf.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-xs/semibold",
                                color: "text-default",
                                className: sf.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                className: sf.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(tE.D, {
                        className: sf.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            t(lP.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(t9.XSmallIcon, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sf.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (t(lP.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, sg.jM)({
                                  startingScreen: sx.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sC = t(349420);
let sj = { cooldownDurationMs: 60 * sa.A.Millis.DAY };
function sy(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: sc.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = sm(),
                l = (0, A.bG)(
                    [lL.A, ee.default, so.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i) return !1;
                            let n = ee.default.getUser(e);
                            if (null == n || lL.A.isBlockedOrIgnored(e)) return !1;
                            let t = so.A.getUserAffinity(e);
                            return (
                                null != t &&
                                null != t.communicationRank &&
                                t.communicationRank <= 20 &&
                                null == n.premiumType
                            );
                        }),
                    [e.recipients, i],
                );
            return !!t && !!n && !!l;
        })(n);
    return (0, l.jsx)(ly.zJ, {
        contentType: t ? m.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sj,
        groupName: lP.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== m.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sE, {
                      className: sC.K,
                      analyticsLocation: M.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sb = t(403362);
t(696101);
let s_ = [],
    sT = er.Ay.getEnableHardwareAcceleration();
function sv(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, A.bG)([J.A], () => null != J.A.getTypingUsers(i.id)[n.id]),
        d = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, A.bG)([Z.A], () => Z.A.isMobileOnline(n.id)),
        u = (0, A.bG)([lL.A], () => lL.A.getNickname(n.id)),
        h = (0, sl.A)(n.id),
        m = s.useRef(null);
    function p(e) {
        (0, C.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e(463317),
                t.e(926132),
                t.e(893190),
                t.e(146652),
                t.e(189673),
                t.e(576432),
                t.e(797558),
                t.e(451162),
                t.e(576665),
                t.e(624198),
                t.e(245996),
                t.e(700792),
                t.e(552172),
                t.e(529422),
                t.e(823427),
                t.e(307059),
                t.e(309291),
                t.e(843326),
            ]).then(t.bind(t, 183245));
            return (t) => (0, l.jsx)(e, { ...t, user: n, channel: i });
        });
    }
    function g() {
        let e = `@${es.Ay.getUserTag(n, { decoration: "never" })}`,
            t = `<@${n.id}>`;
        (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
            L.A.startTyping(i.id));
    }
    let x = (0, D.r)({ user: n }),
        [f, I] = s.useState(!1);
    return (0, l.jsx)(q.A, {
        targetElementRef: m,
        user: n,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => I(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...A } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: m,
                    user: n,
                    currentUser: d,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: sT,
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
                    ...A,
                },
                n.id,
            );
        },
    });
}
function sN(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sS(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(M.A.MEMBER_LIST),
        { listItems: a } = (0, A.bG)(
            [lL.A, ee.default, Z.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(sb.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lL.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Z.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Z.A.getActivities(e.id) ?? s_,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: s_ });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sN,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.Rv)(),
        c = (0, ss.A)({ useNitroCapExperiment: !0 }),
        h = (0, sr.qH)(),
        m = n.isMultiUserDM() && "entitled" === h && c > 10;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tW.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sy, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                m
                                    ? (0, l.jsx)(se.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(sn.NitroWheelIcon, {
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
                                o && (0, l.jsx)(si.A, { type: si.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sv,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lU.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: st.GroupPlusIcon,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lU.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sR = t(10394),
    sL = t(898029),
    sO = t(36537);
function sM() {
    return (0, l.jsx)("div", {
        className: sO.zt,
        children: (0, l.jsx)("header", {
            className: sL.wL,
            children: (0, l.jsxs)("div", {
                className: sL.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sL.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sL.u1,
                            itemClassName: sL.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sP = t(138298),
    sD = t(940382),
    sk = t(129095),
    sw = t(718734),
    sU = t(163328),
    sG = t(425557),
    sF = t(270003),
    sH = t(150934),
    sB = t(452027),
    sV = t(95477),
    sW = t(281595),
    sY = t(465532),
    sz = t(579872),
    sX = t(620014),
    sq = t(408018),
    sK = t(989161),
    s$ = t(102077),
    sZ = t(915089),
    sQ = t(314307),
    sJ = t(636922),
    s0 = t(931664),
    s1 = t(631576),
    s2 = t(253932),
    s6 = t(596344),
    s3 = t(522602),
    s9 = t(710272),
    s7 = t(518960),
    s5 = t(753738);
function s8(e, n) {
    return { type: e, message: n ?? null };
}
function s4(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var re = t(971389),
    rn = t(474078),
    rt = t(620632),
    ri = t(152367),
    rl = t(408278),
    rs = t(147087),
    rr = t(55294),
    ra = t(143161),
    ro = t(909833);
let rd = n5.oU.THREAD_CREATION;
function rc(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, A.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: r } = (0, P.Ay)(M.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: r,
              children: (0, l.jsx)(e2.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: ra.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iM.C.FirstThreadMessage }),
                          (0, l.jsx)(ru, { parentChannelId: n }),
                          (0, l.jsx)(rh, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function ru(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iM.A.getThreadSettings(n),
                t = iM.A.getDraft(n, iM.C.FirstThreadMessage).trim(),
                i = s3.A.getUploads(n, iM.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sz.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, iS.bA)(n);
                      },
                  })
                : (0, iS.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nh.Ay, {
        toolbar: (0, l.jsx)(nh.Ay.Icon, { icon: t9.XSmallIcon, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nh.Ay.Icon, { icon: sU.ThreadIcon, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nh.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function rh(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: r } = e,
        o = (0, A.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        d =
            ((n = s.useContext(e2.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, A.bG)([iM.A], () => iM.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sY.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: m, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, sq.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iM.A.getDraft(e.id, iM.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sq.ur)(l)), n(iM.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iM.A.addChangeListener(t),
                        () => {
                            iM.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, re.EN)(t),
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
                h = (0, rs.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = s6.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await (async function (e) {
                                    try {
                                        let n = await rt.Bo.post({
                                            url: eo.Rsh.AI_TITLE,
                                            body: { content: e },
                                            oldFormErrors: !0,
                                            rejectWithError: (0, rt.fT)(),
                                        });
                                        return n.body?.title ?? null;
                                    } catch (e) {
                                        return null;
                                    }
                                })(e);
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
                    (null != r.name && "" !== r.name.trim()) || c || (h && null != t && (u(!0), A()));
                }, [n.id, t, i, r.name, c, h, A]));
            let m = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: ri.MagicWandIcon,
                                onClick: A,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, A, o, t, a.textValue],
                ),
                p = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(ev.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(rl.K, {
                                      icon: ri.MagicWandIcon,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: A,
                                      disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, t, a.textValue, A],
                );
            return {
                isGeneratingAI: o,
                generateAIName: A,
                enableAIFeatures: h,
                renderAiGenerateButton: p,
                getThreadNameInputAccessory: m,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: m }),
        {
            nameError: E,
            messageError: C,
            submit: j,
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
                [A, m] = s.useState(!1),
                p = (0, rr.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: iS.GS,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        (m(!0),
                            null == e && (e = r.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = s0.A.getStickerPreview(n.id, rd.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = s3.A.getUploads(n.id, iM.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? s8(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? s8(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, s9.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: rd,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), s8(1, (0, s5.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(s8(2, z.intl.string(z.t.uXA573)));
                            return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, s1.x5)(n.id, rd.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 });
                    },
                    [p, r.textValue, i.name, t, n, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: g,
            textAreaState: m,
            location: r,
            enableAIFeatures: f,
        }),
        b = (0, re.Iy)(c, g) ? sG.ThreadLockIcon : sU.ThreadIcon;
    return (0, l.jsx)("div", {
        className: ra.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(ra.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), j());
                },
                className: ra.Zd,
                children: [
                    (0, l.jsx)(tW.Ip, {
                        className: ra.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: ra.bv,
                            children: [
                                (0, l.jsxs)(sQ.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(ro.P0, ra.P0),
                                            children: (0, l.jsx)(b, { className: ro.Kk }),
                                        }),
                                        (0, l.jsxs)(sF.n, {
                                            children: [
                                                (0, l.jsx)(rm, {
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
                                                (0, l.jsx)(rA, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rg, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ra.Eh,
                        children: [
                            (0, l.jsx)(rp, {
                                parentChannel: t,
                                textAreaState: m,
                                setTextAreaState: p,
                                submit: j,
                                error: C,
                            }),
                            (0, l.jsx)(sX.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: ra.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rA(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, re.Iy)(t, s),
        a = (0, l.jsx)(sH.S, {
            disabled: s === re.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === re.jk.Disabled
        ? null
        : (0, l.jsx)(sB.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rm(e) {
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
        h = s4(r, { content: u }),
        A = (0, re.l1)(n, t),
        m = null != t && !d,
        p = (0, sZ.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== A ? A : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sV.k, {
        label: z.intl.string(m ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: 100,
        onChange: function (e) {
            (s({ name: (0, rn.A)(e, !1) }), "" !== e ? L.A.startTyping(n.id) : L.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, rn.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rp(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        m = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sY.A.saveDraft(n.id, t, iM.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? L.A.startTyping(n.id) : "" === t && L.A.stopTyping(n.id),
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
    ((0, e2.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, e2.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: m }));
    let x = (0, A.bG)([l$.A], () => l$.A.can(eo.xBc.ATTACH_FILES, n)),
        f = s4(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s$.A, { channelId: n.id, type: rd, canAttachFiles: x }),
            (0, l.jsx)("div", { className: ra.xN, children: (0, l.jsx)(sW.U, { error: f }) }),
            (0, l.jsx)(sK.Ay, {
                type: rd,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(ra.gM, ra.Yy),
                innerClassName: a()(ra.SL, { [ra.cr]: null != f }),
                onFocus: h,
                onBlur: m,
                onChange: p,
                onSubmit: g,
                promptToUpload: s7.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function rg(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, A.bG)([s6.A], () => (null == t ? null : s6.A.getMessage(n.id, t))),
        s = s2.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sJ.A, {
              className: ra.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rx = t(494208),
    rf = t(40389),
    rI = t(138399),
    rE = t(56562);
function rC(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nw.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(rj, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nF.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function rj(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t5.A)(n),
        r = (0, ii.A)(n),
        a = (0, ia.A)(n.id),
        o = (0, ir.A)(n),
        d = (0, iu.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, t8.A)(n),
        h = (0, t4.A)(n),
        m = (0, ie.A)(n, "Toolbar Overflow"),
        p = (0, it.A)(n, "Toolbar Overflow"),
        g = (0, il.A)(n),
        x = (0, rf.A)(n),
        f = (0, ic.A)(n),
        I = (0, is.A)(n),
        E = n.isThread()
            ? (0, l.jsx)(nO.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rI.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rE.vx.INSTANT });
                  },
              })
            : null,
        C = s2.SY.useSetting(),
        j = (0, A.bG)([lO.A], () => !u().isEmpty(lO.A.getVoiceStatesForChannel(n.id))),
        y = (0, A.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nU.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nO.rX, { children: [m, x] }),
            (0, l.jsxs)(nO.rX, {
                children: [
                    E,
                    o,
                    g,
                    a,
                    !C || j || y
                        ? null
                        : (0, l.jsx)(nO.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, iS.JA)(n);
                              },
                          }),
                    I,
                ],
            }),
            (0, l.jsxs)(nO.rX, { children: [f, s, r, h] }),
            (0, l.jsx)(nO.rX, { children: p }),
            (0, l.jsxs)(nO.rX, { children: [c, d] }),
        ],
    });
}
var ry = t(332456),
    rb = t(889812),
    r_ = t(973854),
    rT = t(62502);
function rv(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, A.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, A.bG)([tS.A], () => tS.A.getGuild(d?.getGuildId())),
        h = (0, tQ.Ay)(d),
        m = (0, t1.Uf)(d);
    ((n = d),
        (i = (0, A.bG)([lO.A], () => null != n && !u().isEmpty(lO.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (eq.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, ih.N9)(n, { source: iv.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, ry.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rb.q)(d.id), channel_view: o }),
                (0, r_.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != m) return (0, l.jsx)(t2.A, { guild: c, channelId: m });
    let g = (0, l.jsx)(iO, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iM.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t0.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e(926132),
                                t.e(491001),
                                t.e(947502),
                                t.e(965789),
                                t.e(420105),
                            ]).then(t.bind(t, 949488));
                            return (n) => (0, l.jsx)(e, { ...n, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, ih.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rT.T,
                children: (0, l.jsx)(tJ.A, { channel: d, guild: c, chatInputType: n5.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rN = t(210714),
    rS = t(707554),
    rR = t(140735),
    rL = t(590180),
    rO = t(287727),
    rM = t(562153);
let rP = (0, sd.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rD(e) {
    return rP.useConfig({ location: e }).enabled;
}
var rk = t(215530),
    rw = t(365958),
    rU = t(736653),
    rG = t(311016),
    rF = t(971217),
    rH = t(713517),
    rB = t(397562),
    rV = t(183555),
    rW = t(718019),
    rY = t(567556),
    rz = t(915614),
    rX = t(501925),
    rq = t(743987),
    rK = t(900179),
    r$ = t(946356),
    rZ = t(465829),
    rQ = t(35241),
    rJ = t(587168),
    r0 = t(442228),
    r1 = t(744808);
let r2 = (0, sd.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var r6 = t(827428);
function r3(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function r9(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = r2.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lJ.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: r6.lS,
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
              className: r6.qr,
              children: (0, l.jsx)(tE.D, {
                  onClick: o,
                  className: r6.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "body-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: r6.xQ, children: [(0, l.jsx)(r1.A, { frame: i, filterLayer: r3 }), d] })
        : d;
}
var r7 = t(518477),
    r5 = t(996988),
    r8 = t(207634),
    r4 = t(561419),
    ae = t(396095);
function an(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rG.A)(n.id),
        o = (0, l0.Ay)(n.id),
        d = (0, rU.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        h = (0, rV.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rB.A)(u, o, r7.R7.SIDEBAR);
    let A = s.useRef(null),
        { isHoveringOrFocusing: m, isHovering: p } = (0, rH.A)(A);
    function g() {
        (0, nz.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(rV.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(r$.A, {
                ref: A,
                user: n,
                displayProfile: o,
                themeType: r5.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(r4.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tW.d_, {
                        className: i ? r4.BE : void 0,
                        children: [
                            (0, l.jsx)(rJ.A, { children: (0, l.jsx)(rQ.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: r4.wx,
                                children: [
                                    (0, l.jsx)(rz.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: r5.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !m,
                                    }),
                                    (0, l.jsx)(rW.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: r8.T[r5.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ae.rf,
                                children: [
                                    (0, l.jsx)(rZ.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rM.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rY.A, {
                                            displayProfile: o,
                                            themeType: r5.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r0.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: m,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rK.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rq.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(r$.A.Overlay, {
                                              className: ae.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rK.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rX.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: m,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rK.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rq.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(r9, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rF.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var at = t(331322),
    ai = t(249790),
    al = t(254828),
    as = t(783123),
    ar = t(966430);
function aa(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, l0.Ay)(n.id),
        o = (0, rU.Ay)(),
        d = (0, A.bG)([lL.A], () => lL.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? M.A.BLOCKED_PROFILE_PANEL : M.A.IGNORED_PROFILE_PANEL),
        u = (0, rV.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rB.A)(c, a, r7.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(rV.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(r$.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: r5.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tW.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ar.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ar.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ar.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ar.N1,
                                        children: [
                                            (0, l.jsx)(ai.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/semibold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rM.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(at.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(as.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lJ.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(al.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lJ.Wn)({
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
var ao = t(120692),
    ad = t(717421),
    ac = t(31956),
    au = t(673843),
    ah = t(634110),
    aA = t(851767),
    am = t(679492),
    ap = t(439053),
    ag = t(312381),
    ax = t(312294),
    af = t(630891),
    aI = t(193738),
    aE = t(824638),
    aC = t(680581),
    aj = t(695366),
    ay = t(922590),
    ab = t(821269),
    a_ = t(263775),
    aT = t(326084),
    av = t(834708),
    aN = t(154486);
let aS = (0, sd.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var aR = t(158390),
    aL = t(906573);
let aO = new aR.A(30 * sa.A.Millis.SECOND, 5 * sa.A.Millis.MINUTE, !0),
    aM = 0;
var aP = t(504492);
function aD(e) {
    let { targetUserId: n } = e,
        { isInTreatment: t } = {
            isInTreatment: aS.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, A.bG)([ee.default], () => ee.default.getUser(n) ?? null, [n]),
        r = (0, av.d)(i),
        a = t && r,
        {
            isDismissed: o,
            hasFetched: d,
            version: c,
            dismiss: u,
        } = (function (e) {
            let {
                isDismissed: n,
                hasFetched: t,
                version: i,
            } = (0, A.cf)([aL.A], () => {
                let n = Number(aL.A.getVersion());
                return {
                    isDismissed: null != e && aL.A.isDismissedFor(e),
                    hasFetched: aL.A.hasFetched(),
                    version: Number.isFinite(n) ? n : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e &&
                        (async function () {
                            if (aL.A.shouldFetch() && !(Date.now() < aM)) {
                                eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
                                try {
                                    let e = await rt.Bo.get({
                                        url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                        oldFormErrors: !0,
                                        rejectWithError: !0,
                                    });
                                    (aO.succeed(),
                                        (aM = 0),
                                        eq.h.dispatch({
                                            type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                                            version: String(e.body?.version ?? "0"),
                                            targetIds: Array.isArray(e.body?.target_ids)
                                                ? e.body.target_ids.map((e) => String(e))
                                                : [],
                                        }));
                                } catch {
                                    ((aM = Date.now() + aO.fail()),
                                        eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
                                }
                            }
                        })();
                }, [e]),
                {
                    isDismissed: n,
                    hasFetched: t,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (aL.A.isDismissedFor(e) ||
                                (eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                rt.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? n : null);
    return a && d && !o && null != i ? (0, l.jsx)(ak, { targetUser: i, version: c, onDismiss: u }) : null;
}
function ak(e) {
    let { targetUser: n, version: i, onDismiss: r } = e,
        a = (0, aN.p)(n.id),
        [o, d] = (0, a_.RF)(a ? m.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lP.m.SIDEBAR, !0),
        c = s.useCallback(
            (e) => {
                (d(e), r());
            },
            [d, r],
        ),
        u = s.useCallback(
            (e) => {
                (et.default.track(eo.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: e }),
                    (0, p.mM)(async () => {
                        let [{ TrialsSharedConfirmationModal: e }, i] = await Promise.all([
                                Promise.resolve().then(t.bind(t, 810852)),
                                (0, aT.xm)([n.id]),
                            ]),
                            s = i.get(n.id) ?? aT.o.FAIL;
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                results: [{ recipient: n, status: s }],
                                isReminderConfirmation: !1,
                                showRecipientList: !1,
                                recipientName: es.Ay.getName(n),
                            });
                    }));
            },
            [n],
        );
    if (null == o) return null;
    let h = es.Ay.getName(n);
    return (0, l.jsx)(sE, {
        className: aP.K,
        analyticsLocation: M.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var aw = t(433380),
    aU = t(351906),
    aG = t(612770),
    aF = t(559506),
    aH = t(361311),
    aB = t(477534),
    aV = t(791556),
    aW = t(501193),
    aY = t(383448),
    az = t(646986),
    aX = t(243166),
    aq = t(805251),
    aK = t(123292),
    a$ = t(840411);
let aZ = (0, sd.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aQ = t(666810),
    aJ = t(394300),
    a0 = t(575593),
    a1 = t(329921),
    a2 = t(44120),
    a6 = t(778705),
    a3 = t(317560),
    a9 = t(306984),
    a7 = t(661492),
    a5 = t(146423),
    a8 = t(662349),
    a4 = t(479026),
    oe = t(636374),
    on = t(699976),
    ot = t(682901),
    oi = t(733484),
    ol = t(880465);
function os(e) {
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
            onPurchaseClick: A,
            onItemClick: m,
            renderChildren: p,
            isNew: g,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, rV.NJ)(),
        f = rD("DMSidePanelWishlistItemCard") ? on.y.SIZE_78 : on.y.SIZE_90,
        I = on.Z[f],
        E = s.useCallback(() => {
            (m?.(),
                x({
                    action: r7.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: t.id,
                    wishlistId: r,
                    productLines: new Set([t.productLine]),
                }),
                h());
        }, [t, r, h, m, x]),
        C = s.useCallback(() => {
            (m?.(),
                x({
                    action: r7.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: t.id,
                    wishlistId: r,
                    productLines: new Set([t.productLine]),
                }),
                A());
        }, [A, m, t.id, r, t.productLine, x]),
        {
            onBodyClick: j,
            onOverlayClick: y,
            showOverlayButton: b,
            routesToGift: _,
            label: T,
            icon: v,
        } = (0, oe.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: E, onPurchaseClick: C }),
        [N, S] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: oi.kL,
        children: (0, l.jsxs)(a5.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: I,
            cardStyle: a()(oi.Nr, o),
            skuPreviewStyle: a()(oi.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = _ ? (0, a7.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a7.T)(t) })),
                !0 === g ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: S,
            children: [
                !0 === g && (0, l.jsx)(a1.N, { className: oi.Pf }),
                b &&
                    (0, l.jsx)(a8.A, {
                        spec: I,
                        onClick: y,
                        isHoveringOrFocusing: N,
                        label: T,
                        icon: T.length < 6 ? v : void 0,
                    }),
                p?.(b && N),
            ],
        }),
    });
}
function or(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            M.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a9.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, a3.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(os, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function oa(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, a2.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, a4.e)({ sku: n, giftRecipient: t, giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(oi.ML, {
                    [oi.M]: n?.tenantMetadata?.collectibles?.type === a0.R.AVATAR_DECORATION,
                    [oi.Hm]: n?.tenantMetadata?.collectibles?.type === a0.R.PROFILE_EFFECT,
                    [oi.hH]: n?.tenantMetadata?.collectibles?.type === a0.R.PROFILE_FRAME,
                    [oi.qF]: n?.tenantMetadata?.collectibles?.type === a0.R.NAMEPLATE,
                    [oi.l2]: n?.tenantMetadata?.collectibles?.type === a0.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(os, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function oo(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, a6.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === ah.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(os, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(ol.MO, { [oi.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(oi.fi, { [oi.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(oi.p7, { [oi.SW]: h.length >= 10, [oi.ot]: h.length >= 12 }),
                          variant: "body-xs/semibold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function od(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(or, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(oa, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(oo, { sku: n, ...t });
        default:
            return null;
    }
}
var oc = t(722178),
    ou = t(695904),
    oh = t(573238),
    oA = t(342442),
    om = t(658946),
    op = t(419731),
    og = t(535089),
    ox = t(815637);
function of(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rV.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: m, shouldLogExposure: p } = (0, oh.A)(t),
        g = (0, s.useCallback)(() => {
            d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r7.RP.WISHLIST });
        }, [d]),
        { isItemNew: x, onItemPress: f } = (function (e, n) {
            let t = (0, ou.bq)(),
                i = (0, A.bG)(
                    [aA.A],
                    () => {
                        let n = aA.A.getProfileReadState(e);
                        return null == n ? void 0 : (n[oA.o.WISHLIST] ?? null);
                    },
                    [e],
                ),
                [l, r] = s.useState(void 0);
            null == t || void 0 !== l || (t.enabled && void 0 === i) || r(t.enabled ? i : null);
            let [a, o] = s.useState(() => new Set()),
                d = s.useCallback(
                    (e) => t?.enabled === !0 && !a.has(e.skuId) && (0, op.f3)(e.addedAt, l),
                    [t?.enabled, a, l],
                ),
                c = s.useCallback(
                    (i) => {
                        null != t && (o((e) => new Set(e).add(i.skuId)), d(i) && n(), (0, om.U)(e));
                    },
                    [t, e, d, n],
                );
            return { isItemNew: d, onItemPress: c };
        })(t.id, g),
        I = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r7.RP.WISHLIST }), i());
        }, [h, i, d]),
        E = (0, s.useMemo)(() => n ?? [], [n]),
        C = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        j = (0, s.useMemo)(() => {
            let e = E.slice(0, 3).map((e) => ({ item: e, source: ah.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = E.some((e) => oc.Ay.isPremiumSku(e.skuId));
                if (!oc.Ay.isPremiumAtLeast(t.premiumType, ot.PremiumTypes.TIER_2) && !n) {
                    let n = aJ.A.fromSKU((0, a$.rI)());
                    null != n && e.push({ item: n, source: ah.uS.POPULAR });
                }
            }
            return e;
        }, [E, a, t.premiumType]),
        y = (0, s.useMemo)(
            () =>
                new Set(
                    j.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [j],
        ),
        b = (0, og.A)({ wishlistId: r ?? null, onAction: C, productLines: y }),
        _ = (0, s.useMemo)(
            () =>
                j
                    .map((e, n) => {
                        let { item: i, source: s } = e;
                        return null == i.sku
                            ? null
                            : (0, l.jsx)(
                                  od,
                                  {
                                      sku: i.sku,
                                      index: n,
                                      wishlistOwner: t,
                                      wishlistId: r,
                                      analyticsLocations: o,
                                      onViewWishlist: I,
                                      source: s,
                                      onItemClick: s === ah.uS.WISHLIST ? () => f(i) : void 0,
                                      isNew: s === ah.uS.WISHLIST && x(i),
                                  },
                                  i.skuId,
                              );
                    })
                    .filter(sb.Vq),
            [o, I, t, j, r, x, f],
        ),
        T = h && _.length > 0,
        v = (0, s.useRef)(!1);
    return ((0, s.useEffect)(() => {
        T && !v.current && ((v.current = !0), d({ action: "VIEW_NEW_CONTENT_SIDEBAR" }));
    }, [T, d]),
    0 === _.length)
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(r$.A.Overlay, {
                  ref: b,
                  className: ox.kL,
                  children: [
                      p && (0, l.jsx)(ou.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: ox.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: ox.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "body-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(aq.E, {
                                              type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: m }) },
                                              variant: "primary",
                                          }),
                                  ],
                              }),
                              (E.length > 3 || h) &&
                                  (0, l.jsx)(aK.Q, {
                                      variant: "secondary",
                                      textVariant: "body-xs/normal",
                                      onClick: I,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rS.F, { children: (0, l.jsx)("div", { className: ox.vY, children: _ }) }),
                  ],
              }),
          });
}
function oI(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = aZ.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r)) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(aQ.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(of, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }, s.profileOwner.id),
    });
}
function oE(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, A.cf)([lL.A], () => ({
            relationshipType: lL.A.getRelationshipType(n.id),
            originApplicationId: lL.A.getOriginApplicationId(n.id),
        })),
        h = (0, ay.fi)(n.id),
        m = (0, ab.q)({ userId: n.id }),
        p = (0, A.bG)([aU.A], () => aU.A.hidePersonalInformation),
        g = (0, A.bG)([aA.A], () => aA.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, A.cf)([aA.A], () => ({ defaultWishlistId: aA.A.getFirstWishlistId(n.id) })),
        { wishlist: I, isFetching: E } = (0, ah.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, au.A)(I);
    let C = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: ae.rf,
        children: [
            (0, l.jsx)(aF.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: ae.pq,
                children: [
                    (0, l.jsx)(rZ.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rM.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(aX.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rY.A, {
                            displayProfile: i,
                            themeType: r5.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aV.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(r$.A.Overlay, {
                    children: (0, l.jsx)(aB.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    r$.A.Overlay,
                    {
                        children: (0, l.jsx)(aB.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aY.A, { user: n }),
            i?.private &&
                (0, l.jsx)(r$.A.Overlay, { children: (0, l.jsx)(aW.A, { username: rM.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(r$.A.Overlay, {
                    className: ae.Lw,
                    children: (0, l.jsx)(rK.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: aj.CircleErrorIcon,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aw.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r0.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rK.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rq.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: ae.kR,
                children: [
                    o && x && (0, l.jsx)(ax.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(az.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aG.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  m.length > 0 &&
                                      (0, l.jsx)(rK.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aH.A, { applicationIds: m }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(r$.A.Overlay, {
                              className: ae.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rK.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rX.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aG.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          m.length > 0 &&
                                              (0, l.jsx)(rK.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aH.A, { applicationIds: m }),
                                              }),
                                          (0, l.jsx)(rK.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rq.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(oI, {
                            profileOwner: n,
                            unownedWishlistItems: C,
                            wishlistId: f,
                            isLoading: E,
                            onClick: () => {
                                d?.({ tabSection: r7.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                    r.isDM() && (0, l.jsx)(aD, { targetUserId: n.id }),
                ],
            }),
        ],
    });
}
var oC = t(114212),
    oj = t(913453),
    oy = t(229187),
    ob = t(21241),
    o_ = t(503062),
    oT = t(51943),
    ov = t(847374),
    oN = t(320448),
    oS = t(723200);
function oR(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rV.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? ov.ChevronSmallDownIcon : oN.ChevronSmallRightIcon;
    return (0, l.jsxs)("section", {
        className: oS.uW,
        children: [
            (0, l.jsxs)(tE.D, {
                className: a()(oS.wx, oS.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    (h(!u), u || (d({ action: "PRESS_SECTION", section: n }), o?.()));
                },
                children: [
                    (0, l.jsxs)(R.D, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: [t, " \u2014 ", i.length],
                    }),
                    (0, l.jsx)(A, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(oS.p_, r), children: i }),
        ],
    });
}
var oL = t(341278);
function oO(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, rV.NJ)(),
        r = (0, t7.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, oj.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(r$.A.Overlay, {
              className: oL.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oR, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oL.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  oT.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, tN.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(ob.A, { className: oL.yF }),
                  c &&
                      (0, l.jsx)(oR, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oL.p_,
                          onExpand: () => (0, oy.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oL.nC,
                                                children: [
                                                    (0, l.jsx)(oC.F, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(oC.F, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            o_.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, nz.openUserProfileModal)({
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
function oM(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, l0.Ay)(n.id),
        c = (0, rU.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: m } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        p = (0, rV.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rB.A)(m, d, r7.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rH.A)(g),
        I = (0, am.fC)(),
        E = (0, rO.A)(d?.profileFrame?.skuId);
    (0, ac.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: m });
    let C = (0, ad.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function j(e) {
        (0, nz.openUserProfileModal)({ sourceAnalyticsLocations: m, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, A.cf)([aA.A], () => ({ defaultWishlistId: aA.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: T } = (0, ah.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, au.A)(_);
    let v = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: m,
        children: (0, l.jsx)(rV.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(am.Hl, {
                value: I,
                children: (0, l.jsxs)(r$.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: r5.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(r4.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(ag.A, {}),
                        null != I.interactionType && (0, l.jsx)(ao.animated.div, { style: C, className: r4.tB }),
                        (0, l.jsxs)(tW.d_, {
                            className: a()(r && r4.BE, !r && null != E && r4.It),
                            children: [
                                (0, l.jsxs)(rJ.A, {
                                    children: [
                                        (0, l.jsx)(aI.A, { user: n, themeType: r5.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(af.A, { user: n }) : (0, l.jsx)(aE.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r4.wx,
                                    children: [
                                        (0, l.jsx)(rz.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: r5.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: r4.vK,
                                        }),
                                        (0, l.jsx)(ap.A, { className: r4.oR }),
                                        (0, l.jsx)(rW.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r8.T[r5.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : j,
                                        }),
                                        (0, l.jsx)(aC.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: r5.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(oE, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == I.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : j,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: r4.sJ,
                                        children: (0, l.jsx)(ax.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: j,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: r4.vS,
                                        children: (0, l.jsx)(oI, {
                                            profileOwner: n,
                                            unownedWishlistItems: v,
                                            wishlistId: b,
                                            isLoading: T,
                                            onClick: () => {
                                                j?.({ tabSection: r7.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oO, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(r9, {
                                context: p,
                                analyticsLocations: m,
                                profileFrame: E,
                                handleOpenProfile: j,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rF.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != E && (0, l.jsx)(r1.A, { frame: E, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oP = t(901600);
function oD(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, A.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = l1(),
        [o, d] = (0, rk.A)(t),
        [c, u] = s.useState(!1),
        h = rD("UserProfileSidebarRenderer"),
        m = (0, l0.Ay)(t),
        p = m?.profileFrame?.skuId,
        g = (0, rO.A)(p),
        x = (0, A.bG)([rL.A], () => rL.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rw.A)(i, e) : (0, rw.A)(t, void 0, e);
        }, [i, t, n.id, h]),
        null == i ||
            null == r ||
            !a ||
            (h && !c && m?.isLoaded !== !0) ||
            (h && !c && null != p && p !== g?.skuId && x?.state !== "success" && x?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        I = rM.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oP.H : void 0,
        children: (0, l.jsx)(rS.F, {
            component: (0, l.jsx)(rR.A, {
                children: (0, l.jsx)(rS.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(aa, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(an, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oM, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var ok = t(522556),
    ow = t(225315),
    oU = t(684407),
    oG = t(95701),
    oF = t(919638),
    oH = t(495867),
    oB = t(812771),
    oV = t(350835),
    oW = t(506309),
    oY = t(598748),
    oz = t(681154),
    oX = t(975460),
    oq = t(587895),
    oK = t(429913),
    o$ = t(201718),
    oZ = t(339580),
    oQ = t(633075),
    oJ = t(917445),
    o0 = t(382483),
    o1 = t(385113);
let o2 = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function o6(e) {
    let [n, t] = s.useState(new Set()),
        i = s.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []),
        r = s.useMemo(
            () => ({
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
                            m,
                            p,
                            g,
                            x,
                            f,
                            I,
                            { appsWithConfigs: E, isLoadingConfigs: C } =
                                ((t = s2.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, o0.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    t && (0, o0.i$)().catch(() => {});
                                }, [t]),
                                (i = (0, A.bG)([o1.A], () => o1.A.getFeaturedFetchState())),
                                (l = (0, A.bG)([o1.A], () => o1.A.getDeveloperFetchState())),
                                (r = (0, A.yK)([o1.A], () => o1.A.getFeaturedApplicationIds())),
                                (a = (0, A.yK)([o1.A], () => o1.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === o1.e.NOT_FETCHED ||
                                        i === o1.e.FETCHING ||
                                        (t && (l === o1.e.NOT_FETCHED || l === o1.e.FETCHING)),
                                }),
                            {
                                widgetApps: j,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oz.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => n.has(e.id)) ?? [],
                                [e, n],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, A.bG)(
                                [oq.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            oq.A.isFetchingApplication(e) ||
                                            (null == oq.A.getApplication(e) && !oq.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, oK.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sb.Vq)
                                            .map((e) => [e.id, (0, oX.t)(e)])
                                            .filter(sb.QE)
                                            .filter((e) => {
                                                let [n, t] = e;
                                                return E.has(t.id);
                                            }),
                                    ),
                                [E, u],
                            )),
                            (m = s.useMemo(
                                () => [
                                    ...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id)),
                                ],
                                [o, h],
                            )),
                            { widgetApps: h, userIdsWhoMightHaveWidgetData: m, isFetchingApplications: c }),
                            { identitiesByUserId: _, isLoadingIdentities: T } =
                                ((p = (0, A.cf)([oZ.A], () =>
                                    Object.fromEntries(y.map((e) => [e, oZ.A.getUserIdentities(e)]).filter(sb.QE)),
                                )),
                                (g = (0, A.bG)([oZ.A], () =>
                                    y.some((e) => oZ.A.getFetchState(e) === oZ.e.NOT_FETCHED || oZ.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && o$.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: v, isLoadingProfiles: N } =
                                ((x = (0, A.cf)([aA.A], () =>
                                    Object.fromEntries(y.map((e) => [e, aA.A.getUserProfile(e) ?? null]).filter(sb.QE)),
                                )),
                                (f = (0, A.yK)([aA.A], () =>
                                    y.filter((e) => null == aA.A.getUserProfile(e) && !aA.A.isFetchingProfile(e)),
                                )),
                                (I = (0, A.bG)([aA.A], () => y.some((e) => aA.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, oJ.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                            S = (0, A.cf)(
                                [o1.A],
                                () => Object.fromEntries([...E].map((e) => [e, o1.A.getConfig(e)]).filter(sb.QE)),
                                [E],
                            ),
                            R = C || b || T || N,
                            L = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oz.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let n = j[e.extra.application_id] ?? null;
                                        if (null == n) return e;
                                        let t = S[n.id] ?? null;
                                        if (null == t || null == t.surfaces[oY.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = v[e.author_id]?.widgets?.some((e) => (0, oQ.E)(e, n.id)) ?? !1;
                                        return {
                                            ...e,
                                            applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                        };
                                    });
                            }, [R, e, j, S, _, v]),
                            [O, M] = s.useState(L);
                        return (
                            s.useEffect(() => {
                                R || M(L);
                            }, [R, L]),
                            O
                        );
                    })(e, n),
            }),
            [i, n],
        );
    return (0, l.jsx)(o2.Provider, { value: r, children: e.children });
}
var o3 = t(900797),
    o9 = t(890856),
    o7 = t(396696),
    o5 = t(435738),
    o8 = t(38055);
let o4 = "content-inventory-feed",
    de = `${o4}-settings`,
    dn = `${o4}-toggle`;
var dt = t(569709);
function di(e) {
    return !e.currentTarget.contains(e.target);
}
let dl = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, A.bG)([o5.A], () => o5.A.hidden),
            h = (0, c.omit)((0, j.rm)(de), ["role", "tabIndex"]),
            m = (0, c.omit)((0, j.rm)(dn), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                di(e) ||
                    (0, C.L3)(e, async () => {
                        let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                        return () => (0, l.jsx)(e, { closePopout: C.Z_ });
                    });
            }, []),
            x = s.useCallback(
                (e) => {
                    if (!di(e)) return u ? (0, o7.Il)() : r();
                },
                [u, r],
            ),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(o8.A, { ...h }),
                    (0, l.jsx)("span", { className: dt.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(o3.ChevronSmallUpIcon, { className: dt.wT })
                              : o
                                ? (0, l.jsx)(ov.ChevronSmallDownIcon, { className: dt.wT })
                                : (0, l.jsx)(oN.ChevronSmallRightIcon, { className: dt.wT })),
                          (0, l.jsx)("span", { className: dt.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(o9.s, {
                      ...m,
                      className: a()(dt.N1, { [dt.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: dt.N1, onContextMenu: g, children: f }),
        });
    }),
    ds = function () {
        return null;
    };
var dr = t(963307),
    da = t(424994);
let dd = et.default.track;
function dc(e, n) {
    dd(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: da.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var du = t(468581),
    dh = t(808666),
    dA = t(414499),
    dm = t(323384),
    dp = t(55730),
    dg = t(765379),
    dx = t(359549),
    df = t(284525),
    dI = t(212613),
    dE = t(583846),
    dC = t(506326);
t(333007);
var dj = t(646514),
    dy = t(342952),
    db = t(315710),
    d_ = t(276293),
    dT = t(935063),
    dv = t(778712),
    dN = t(696986),
    dS = t(97808),
    dR = t(738188),
    dL = t(983851),
    dO = t(31300),
    dM = t(308528),
    dP = t(401843),
    dD = t(375499),
    dk = t(429433),
    dw = t(324688);
let dU = (0, oG.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dG(e) {
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
        [A, m] = s.useState(""),
        [p, g] = s.useState((0, sq.x7)("")),
        x = n5.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sK.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(dw.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dU,
        onChange: (e, n, t) => {
            (m(n), g(t));
        },
        type: r ? { ...x, emojis: { button: !0 } } : x,
        textValue: A,
        richValue: p,
        onSubmit: (e) => {
            let { value: n } = e;
            return n.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (t(n), m(""), g((0, sq.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dF(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rU.Ay)(),
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
        (0, l.jsx)(nw.Y, {
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
                            children: (0, l.jsx)(dk.C, {
                                messageId: "",
                                channel: dU,
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
                (0, l.jsx)(ev.m, {
                    text: z.intl.string(z.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: c,
                        className: dw.mJ,
                        children: (0, l.jsx)(dD.A, {
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
var dH = t(402216),
    dB = t(822123),
    dV = t(409626),
    dW = t(692969),
    dY = t(711589),
    dz = t(607407),
    dX = t(832163),
    dq = t(533562),
    dK = t(805901),
    d$ = t(565645);
t(920134);
var dZ = t(7584);
(t(850992), t(690521));
var dQ = t(806931),
    dJ = t(307731),
    d0 = t(866780);
function d1(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rH.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tE.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dK.c, {
                config: dD.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(ao.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(d$.A, {
                            className: a()(d0.Zg, r, { [d0.c4]: t }),
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
(dJ.EmojiIntention.CHAT,
    [
        dZ.Ay.getByName("thumbsup"),
        dZ.Ay.getByName("eyes"),
        dZ.Ay.getByName("laughing"),
        dZ.Ay.getByName("watermelon"),
        dZ.Ay.getByName("fork_and_knife"),
        dZ.Ay.getByName("yum"),
    ].filter(sb.Vq));
var d2 = t(636585),
    d6 = t(543465),
    d3 = t(607567),
    d9 = t(325158),
    d7 = t(20805),
    d5 = t(22869),
    d8 = t(623671),
    d4 = t(428249),
    ce = t(327098),
    cn = t(576757),
    ct = t(202195),
    ci = t(823545),
    cl = t(345394);
let cs = function (e) {
    let { children: n } = e,
        [t, i] = (0, a_.kn)([m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lP.i.USER_DISMISS);
    }, [i]);
    return t !== m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lg.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: cl.A },
                  }),
              ],
          });
};
var cr = t(315246),
    ca = t(866323),
    co = t(994484);
let cd = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, A.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, ca.p)(
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
                (0, l.jsx)(ao.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(co.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(co.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var cc = t(381941),
    cu = t(231188);
let ch = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(419121),
                t.e(149697),
                t.e(60882),
                t.e(489020),
                t.e(919789),
                t.e(669130),
                t.e(735042),
                t.e(802890),
                t.e(377109),
                t.e(74886),
                t.e(713273),
                t.e(656997),
                t.e(412117),
                t.e(263406),
                t.e(1955),
                t.e(341161),
                t.e(410526),
                t.e(202985),
                t.e(603619),
                t.e(175927),
                t.e(470126),
                t.e(128804),
                t.e(71151),
                t.e(227853),
                t.e(286615),
                t.e(311541),
                t.e(274227),
                t.e(870088),
                t.e(300641),
                t.e(571163),
                t.e(586662),
                t.e(831377),
                t.e(709976),
                t.e(860596),
                t.e(279774),
                t.e(763945),
                t.e(261204),
                t.e(686731),
                t.e(807432),
                t.e(873532),
                t.e(590088),
                t.e(807003),
                t.e(46083),
                t.e(152133),
                t.e(747802),
                t.e(626353),
                t.e(71169),
                t.e(906470),
                t.e(736663),
                t.e(82937),
                t.e(987221),
                t.e(157064),
                t.e(156957),
                t.e(918786),
                t.e(701335),
                t.e(257935),
                t.e(724086),
                t.e(358937),
                t.e(448738),
                t.e(206189),
                t.e(804439),
                t.e(84978),
                t.e(894292),
                t.e(153302),
                t.e(88683),
                t.e(363874),
                t.e(923981),
                t.e(750370),
                t.e(972281),
                t.e(307107),
                t.e(896622),
                t.e(466592),
                t.e(73946),
                t.e(228271),
                t.e(387970),
                t.e(847445),
                t.e(547510),
                t.e(966366),
                t.e(983513),
                t.e(76928),
                t.e(699250),
                t.e(528311),
                t.e(156422),
                t.e(324469),
                t.e(70379),
                t.e(417333),
                t.e(905581),
                t.e(863232),
                t.e(295507),
                t.e(332447),
                t.e(959880),
                t.e(174016),
                t.e(22921),
                t.e(910471),
                t.e(11301),
                t.e(430858),
                t.e(861060),
                t.e(364827),
                t.e(77333),
                t.e(626565),
                t.e(257980),
                t.e(960235),
                t.e(486137),
                t.e(80421),
                t.e(206027),
                t.e(393471),
                t.e(177641),
                t.e(198329),
                t.e(678157),
                t.e(942374),
                t.e(223219),
                t.e(130795),
                t.e(10866),
                t.e(313537),
                t.e(40291),
                t.e(733115),
                t.e(397270),
                t.e(406222),
                t.e(761597),
                t.e(373122),
                t.e(649408),
                t.e(221856),
                t.e(186212),
                t.e(755936),
                t.e(316344),
                t.e(396705),
                t.e(274501),
                t.e(692990),
                t.e(714496),
                t.e(305834),
                t.e(745959),
                t.e(858529),
                t.e(481987),
                t.e(595653),
                t.e(958038),
                t.e(532039),
                t.e(719466),
                t.e(885553),
                t.e(576909),
                t.e(27355),
                t.e(282833),
                t.e(393766),
                t.e(255580),
                t.e(299854),
                t.e(608557),
                t.e(770182),
                t.e(506620),
                t.e(318939),
                t.e(178048),
                t.e(556868),
                t.e(764180),
                t.e(919726),
                t.e(907424),
                t.e(144179),
                t.e(437961),
                t.e(604172),
                t.e(949013),
                t.e(820667),
            ]).then(t.bind(t, 128790)),
        webpackId: 128790,
    }),
    cA = s.createContext(void 0);
function cm(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, db.tj)(t),
        (0, l.jsx)(cA.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: cu.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function cp(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, ci.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(cu.ZK, e, i), style: s, children: n }),
        })
    );
}
function cg(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: cu.$m, children: n });
}
function cx(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [E, C] = s.useState(!1),
        [j, y] = s.useState(null),
        b = (0, A.bG)(
            [l$.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && l$.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [T, v] = s.useState(!1),
        [N, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: L } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, ct.A)(t),
                o = (0, tQ.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iY.A)(n?.id),
                c = (0, A.bG)([tS.A], () => (null != a ? tS.A.getGuild(a.guild_id) : void 0)),
                u = (0, A.yK)([d3.Ay], () => (null != a ? d3.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, A.bG)([lO.A], () => lO.A.isInChannel(a?.id)),
                m = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && d6.Ay.isChannelMuted(null, n),
                            i = lL.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(dR.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: cu.vb,
                                  }),
                                  z.intl.string(z.t.d6DpXI),
                              ],
                          })
                        : t;
                return (0, l.jsx)(
                    ev.m,
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
                            className: cu.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: m,
                                    children: (0, l.jsxs)(tE.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, ih.iN)(a.id), i?.(a));
                                        },
                                        className: cu.I3,
                                        children: [
                                            (0, l.jsx)(t_.Ay, {
                                                guild: c,
                                                size: t_.Ay.Sizes.SMOL,
                                                className: cu.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oN.ChevronSmallRightIcon, {
                                                size: "xxs",
                                                color: dj.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dL.VoiceNormalIcon, {
                                                size: "xs",
                                                color: dj.A.colors.TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                className: cu.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(d2.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dS.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dv._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: cu.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "footnote/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dN.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: m,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lq.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dO.ScreenIcon : dL.VoiceNormalIcon,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, ce.A)(h),
        M =
            ((n = O),
            (t = (0, A.bG)([tS.A], () => tS.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, A.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, A.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tQ.Ay)(i)),
            null != n && null != t && null != i && oG.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: cu.kP,
                              children: [
                                  (0, l.jsxs)(tE.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, ih.iN)(i.id),
                                      className: cu.I3,
                                      children: [
                                          (0, l.jsx)(t_.Ay, {
                                              guild: t,
                                              size: t_.Ay.Sizes.SMOL,
                                              className: cu.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oN.ChevronSmallRightIcon, {
                                              size: "xxs",
                                              color: dj.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(d_.TextIcon, { size: "xs", color: dj.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              className: cu.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(d2.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dS.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: dv._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: cu.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "footnote/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dN.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != L && 0 === p.length ? [L] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rM.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tQ.Ay)(o, !0),
        H =
            null != o && E
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${G}` }),
        B = E ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function V(e) {
        let n,
            { emoji: t } = e;
        if (null != t) {
            if (
                (et.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: da.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, t$.Dr)(m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                v(!0),
                S(!1),
                E)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dM.A.getOrEnsurePrivateChannel(c.id);
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
                                (v(!1), u(e, n));
                            }, 600));
                    },
                    interactionType: da.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (j?.focus(),
            await (0, d4.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: cc.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, t));
    }
    let Y = g ?? R ?? M;
    function X() {
        (C((e) => !e), w && j?.focus());
    }
    function q(e) {
        (U(e), e && j?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: T ? "none" : "all" },
        children: [
            (0, l.jsx)(cd, { sent: N, shown: T, className: cu.Jt }),
            Y ??
                (0, l.jsx)(cs, {
                    children: (0, l.jsxs)("div", {
                        className: cu.T7,
                        children: [
                            (0, l.jsx)(cf, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dF, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? cu.P2 : cu.VE,
                children: [
                    (0, l.jsx)(dG, {
                        placeholder: H,
                        onEnter: async function (e) {
                            let n;
                            if (((0, t$.Dr)(m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"),
                                    (n = o));
                            else {
                                let e = await dM.A.openPrivateChannel({ recipientIds: c.id }),
                                    t = ew.A.getChannel(e);
                                (d()(null != t, "DM channel must be defined"), (n = t));
                            }
                            let t =
                                n.type === eo.rbe.DM
                                    ? da.PA.DM_REACTION_MESSAGE_SENT
                                    : da.PA.CHANNEL_REACTION_MESSAGE_SENT;
                            return W({
                                reply: e,
                                sendToChannel: n,
                                interactionType: t,
                                onComplete: u,
                                requiresChannelReadiness: !0,
                            });
                        },
                        setEditorRef: (e) => y(e),
                        channel: E ? o : void 0,
                        showEmojiButton: null != Y,
                        className: cu.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(ev.m, {
                                      text: B,
                                      children: (0, l.jsx)(tE.D, {
                                          className: cu.wD,
                                          onClick: X,
                                          children: E
                                              ? (0, l.jsx)(d_.TextIcon, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dT.AtIcon, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tE.D, {
                            onClick: () => q(!1),
                            className: cu.i3,
                            children: (0, l.jsx)(t9.XSmallIcon, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: dj.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: cu.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                x.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => q(!0),
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
let cf = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dB.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tR._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: n, url: s } = e;
            return null != s
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(ev.m, {
                              asContainer: !0,
                              text: z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              position: "top",
                              "aria-label": z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(d1, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: cu.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function cI(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, cn.A)(i, 3),
        m = (0, A.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, ct.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: cu.MH,
        children: [
            (0, l.jsxs)("div", {
                className: cu.WP,
                children: [
                    (0, l.jsx)(dy.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dv._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dN.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-xs/medium",
                        className: a()(cu.Xn, cu.zA),
                        children: z.intl.format(t, {
                            user0: rM.Ay.getName(o, n?.id, g[0]),
                            user1: rM.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "body-sm/medium", className: a()(cu.Mj, cu.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    d5.A,
                                    {
                                        textClassName: a()(cu.Mj, cu.nk),
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
                                    d5.A,
                                    {
                                        textClassName: a()(cu.Mj, cu.nk),
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
            null != p && (0, l.jsx)(dH.Ay, { size: dH.Ay.Sizes.SMALL }),
            null != m && (0, l.jsx)(cr.A, { user: m, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cE(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(tE.D, { className: cu.Zw, onClick: t, children: n });
}
function cC(e) {
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
            showCoverImage: m = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: g,
            ...x
        } = e,
        { entry: f } = x,
        I = (0, d7.zD)(f),
        E = I ? f.extra?.application_id : void 0,
        C = (0, dq.W)();
    null != C && (E = C);
    let j = (0, dW.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : E,
                source: dV.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(da.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, d9.nO)({
            entry: f,
            showCoverImage: m,
            trackingSource: "memberlist_content_popout",
        }),
        T = (0, A.bG)([dX.A], () => dX.A.getDetectableIdsToApplicationIds()),
        v = I ? j : void 0,
        N = s.useContext(cA);
    return (0, l.jsxs)("div", {
        className: cu.au,
        children: [
            (0, l.jsx)(cI, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(cp, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: cu.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: cu.Fb,
                                children: (0, l.jsx)(d8.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: o ?? v,
                                    size: d8.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: cu.iC,
                                children: [
                                    (0, l.jsx)(cE, {
                                        onClick: d ?? v,
                                        children: (0, l.jsx)(R.D, {
                                            id: N,
                                            variant: "heading-sm/medium",
                                            className: a()(cu.$2, { [cu.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cE, {
                                              onClick: c ?? v,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "body-sm/normal",
                                                  className: cu.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dN.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: cu.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != T[E]
                ? (0, l.jsx)(ch, {
                      className: cu.zu,
                      applicationId: E,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: on.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cj(e) {
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
            ...m
        } = e,
        { actionString: p, canWatch: g } = (0, dY.K)(a),
        { entry: x } = m,
        f = (0, d7.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        E = (0, dq.W)();
    null != E && (I = E);
    let C = (0, dW.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: dV.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(da.PA.OPENED_GAME_PROFILE) },
        ),
        j = f ? C : void 0,
        { activity: y, activityApplication: b, fallbackApplication: T } = (0, ce.A)(x),
        { largeImage: v, smallImage: N } = (0, d9.D8)(y, b ?? T),
        { largeImage: S } = (0, d9.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        L = (0, A.bG)([dX.A], () => dX.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(cA);
    return (0, l.jsxs)("div", {
        className: cu.au,
        children: [
            (0, l.jsx)(cI, { ...m, onUserPopoutClosed: u }),
            (0, l.jsxs)(cp, {
                backgroundImgSrc: S?.src,
                className: cu.uR,
                children: [
                    (0, l.jsx)(cE, {
                        onClick: g
                            ? () => {
                                  (lE.default.selectVoiceChannel(a.channelId), (0, dP.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: cu.nh,
                            children: [
                                (0, l.jsx)(dz.A, { className: cu.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: cu.NE,
                                        children: (0, l.jsx)(_.E, {
                                            variant: "body-md/normal",
                                            color: "text-overlay-light",
                                            children: p,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: cu.$6,
                        children: [
                            null != v &&
                                (0, l.jsx)("div", {
                                    className: cu.Fb,
                                    children: (0, l.jsx)(d8.d, {
                                        image: v,
                                        smallImage: N,
                                        onClick: o ?? j,
                                        size: d8.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: cu.gv,
                                children: [
                                    (0, l.jsx)(cE, {
                                        onClick: d ?? j,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-sm/semibold",
                                            className: cu.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cE, {
                                              onClick: c ?? j,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "body-sm/normal",
                                                  className: cu.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dN.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != L[I]
                ? (0, l.jsx)(ch, {
                      className: cu.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: m.channel?.guild_id,
                      channelId: m.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: on.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cy = t(299846);
let cb = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cy.u)(t);
    function u() {
        (0, dI.hg)(t.extra.application_id);
    }
    let { data: h } = (0, te.YY)(t.extra.application_id),
        A = (0, dx.Ay)({ application: h, analyticsLocations: [M.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let m = (0, l.jsx)(dC.iT, { location: dC.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(cC, {
            channel: n,
            userDescription: (0, dE.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: m,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, dp.A)(d, eo.jUm.JOIN) || (0, dg.A)(d),
        f = g
            ? (0, l.jsx)(df.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dh.DoorEnterIcon,
              })
            : null,
        I =
            null == A
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: A,
                      text: z.intl.string(z.t["jaYS/h"]),
                      icon: dA.CloudIcon,
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
                      icon: dm.AppsIcon,
                  }),
        C = [I, g && !r ? f : E].filter(sb.Vq);
    return (0, l.jsxs)(cm, {
        children: [
            p,
            (0, l.jsx)(cg, {
                children: (0, l.jsx)(cx, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: n,
                    entry: t,
                    buttons: C,
                }),
            }),
        ],
    });
};
var c_ = t(322789),
    cT = t(808380),
    cv = t(687966),
    cN = t(39623),
    cS = t(960076),
    cR = t(73963),
    cL = t(613412),
    cO = t(139286);
function cM(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(t),
        s = (0, dx.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cO.A)({
            name: cL.ImpressionNames.CLOUD_PLAY_CTA,
            type: cL.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: dA.CloudIcon,
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
var cP = t(607781),
    cD = t(648246),
    ck = t(308335),
    cw = t(790381),
    cU = t(266080),
    cG = t(80320),
    cF = t(417869);
function cH(e) {
    let n = (0, A.bG)([cF.A], () => cF.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cG.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cB = t(18282);
let cV = [...c_.n, dC.Yq],
    cW = {
        [cT.Y.DESKTOP]: null,
        [cT.Y.LINUX]: null,
        [cT.Y.MACOS]: null,
        [cT.Y.ROBLOX]: null,
        [cT.Y.NINTENDO]: null,
        [cT.Y.IOS]: null,
        [cT.Y.ANDROID]: null,
        [cT.Y.XBOX]: cU.A,
        [cT.Y.PLAYSTATION]: cw.A,
    },
    cY = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: A } = (0, cy.u)(t),
            { streamPreviewUrl: m, stream: p } = (0, ct.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? cW[g] : null,
            I = cH(g === cT.Y.XBOX ? eo.fg2.XBOX : g === cT.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: E } = (0, te.YY)(x),
            C = (0, cR.A)(x),
            { analyticsLocations: j } = (0, P.Ay)(M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, dx.JC)(E),
            b = (0, ck.o)(h?.application_id ?? A?.applicationId ?? E?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dC.mG, {
                location: null == m ? dC.N5.POPOUT : dC.N5.STREAMING_POPOUT,
                children: cV.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            T =
                null == p
                    ? (0, l.jsx)(cC, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cB.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dE.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(cP.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: j,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cj, {
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
                              C.length > 0
                                  ? (0, l.jsx)(cP.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: j,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            v =
                !b && y
                    ? (0, l.jsx)(
                          cM,
                          { application: E, analyticsLocation: M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            N = [
                null == v && ((0, dp.A)(h, eo.jUm.JOIN) || (0, dg.A)(h))
                    ? (0, l.jsx)(
                          df.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cv.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cS.A)(h)
                    ? (0, l.jsx)(cD.A, { activity: h, size: "md", variant: "primary", icon: cN.EyeIcon }, "watch")
                    : null,
                v,
            ].filter(sb.Vq);
        return (0, l.jsxs)(cm, {
            children: [
                T,
                (0, l.jsx)(cg, {
                    children: (0, l.jsx)(cx, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: d,
                        channel: n,
                        entry: t,
                        buttons: N,
                    }),
                }),
            ],
        });
    },
    cz = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cX(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, te.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(M.A.CLOUD_PLAY_POPOVER),
        o = (0, dx.Ay)({ application: r, analyticsLocations: a }),
        d = (0, t$.HX)(m.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cz(),
        A = u === n.id,
        p = c && A ? [m.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, a_.kn)(p),
        f = g === m.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lP.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, E] = s.useState(!1);
    return (
        f && !I && E(!0),
        (0, cO.A)(
            {
                name: cL.ImpressionNames.CLOUD_PLAY_CTA,
                type: cL.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lg.A, {
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
                    icon: dA.CloudIcon,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lP.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cq = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cX, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cK = t(363670),
    c$ = t(205327),
    cZ = t(52133),
    cQ = t(835723),
    cJ = t(172710),
    c0 = t(655116),
    c1 = t(763758),
    c2 = t(286617),
    c6 = t(533207),
    c3 = t(121090),
    c9 = t(693879),
    c7 = t(809854),
    c5 = t(272984),
    c8 = t(170699);
function c4(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, c7.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dE.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: c8.lu,
              children: [
                  (0, l.jsx)(c9.z, { entry: t }),
                  (0, l.jsx)("div", { className: c8.Lt, children: (0, l.jsx)("div", { className: c8.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: c8.vE,
                      variant: "body-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function ue(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: m, user: p } = (0, cK.u7)(r),
        g = cH(eo.fg2.SPOTIFY),
        f = (0, A.bG)(
            [c0.A, su.default],
            () => (c?.type === oV.$.LISTENING && null != p ? (0, c2.A)(c0.A, su.default, p, c) : void 0),
            [c, p],
            cZ.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        E = [];
    u.media.provider === c$.X.SPOTIFY &&
        ((t = () => {
            (0, cJ.Mp)(c);
        }),
        (i = () => {
            (0, cJ.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cJ.Mp)(c);
        }),
        (I = (0, l.jsx)(c1.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: cu.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cJ.mN)(c, p.id, e);
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
                        icon: cQ.UserPlayIcon,
                        onClick: function () {
                            null != f && ((0, c6.A)(f, c5.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let C = (0, l.jsx)(cC, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === c$.X.SPOTIFY
                ? (0, l.jsx)(cB.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: c3.A })
                : null,
        userDescription: (0, dE.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: m,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(c4, { activity: c }),
    });
    return (0, l.jsxs)(cm, {
        children: [
            C,
            (0, l.jsx)(cg, {
                children: (0, l.jsx)(cx, {
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
var un = t(903134),
    ut = t(56121),
    ui = t(263577),
    ul = t(868065),
    us = t(804779);
let ur = [dC.Y8],
    ua = [ut.j.WEEK],
    uo = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, d9.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dE.TQ)(n);
        return null != r && (0, sb.S1)(r, ua)
            ? (0, l.jsxs)(ul.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(ul.UA, {
                          children: [
                              (0, l.jsx)(ul.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(ul.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(dC.mG, {
                                  location: dC.N5.CARD,
                                  children: ur.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(ui.V, { src: s?.src, size: 48, className: us.xn }),
                  ],
              })
            : null;
    });
var ud = t(210528);
let uc = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, A.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, dE.TQ)(t),
        u = cH(eo.fg2.SPOTIFY);
    if (null == d || !(0, sb.S1)(c, ua)) return null;
    function h() {
        let e = c5.M0.ALBUM,
            n = ud.A.isProtocolRegistered()
                ? c5.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : c5.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(cm, {
        children: [
            (0, l.jsx)(cC, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = c5.M0.ARTIST,
                        n = ud.A.isProtocolRegistered()
                            ? c5.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : c5.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === c$.X.SPOTIFY
                        ? (0, l.jsx)(cB.A, { onClick: u, Icon: c3.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dC.mG, {
                    location: dC.N5.POPOUT,
                    children: ur.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(cg, {
                children: (0, l.jsx)(cx, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var uu = t(977001);
let uh = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cy.u)(t),
        c = (0, dE.ty)(t),
        u = (0, dE.TQ)(t);
    if (null == a || null == c || null == u || !(0, uu._E)(u)) return null;
    let h = null != t.extra.platform ? cW[t.extra.platform] : null;
    return (0, l.jsxs)(cm, {
        children: [
            (0, l.jsx)(cC, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cB.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dC.mG, {
                    location: dC.N5.POPOUT,
                    children: uu.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cg, {
                children: (0, l.jsx)(cx, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var uA = t(514243),
    um = t(347306),
    up = t(889558),
    ug = t(998218);
let ux = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, A.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cH(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = ug.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, up.h)({ href: ug.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cm, {
              children: [
                  (0, l.jsx)(cC, {
                      channel: n,
                      entry: t,
                      userDescription: (0, dE.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cB.A, {
                          onClick: a,
                          Icon: um.CrunchyrollNeutralIcon,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dC.mG, {
                          location: dC.N5.POPOUT,
                          children: uA.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cg, {
                      children: (0, l.jsx)(cx, {
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
function uf(e) {
    return e?.type === dr.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oz.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function uI(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oz.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(c_.A, { ...t, entry: n });
        case oz.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uA.A, { ...t, entry: n });
        case oz.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(uu.Ay, { ...t, entry: n });
        case oz.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(uo, { ...t, entry: n });
        case oz.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cK.Ay, { ...t, entry: n });
        case oz.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(du.A, { ...t, entry: n });
        default:
            return null;
    }
}
function uE(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oz.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cq, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uC(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(uj, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(da.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function uj(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oz.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cY, { ...t, entry: n });
        case oz.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ux, { ...t, entry: n });
        case oz.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(uh, { ...t, entry: n });
        case oz.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(uc, { ...t, entry: n });
        case oz.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(ue, { ...t, entry: n });
        case oz.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cb, { ...t, entry: n });
        default:
            return null;
    }
}
let uy = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        m = (0, j.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cy.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(o2);
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
        T = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        E && T && _(!0);
    }, [E, T]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let v = s.useCallback(
            (e) => {
                p &&
                    (0, C.L3)(e, async () => {
                        let { default: e } = await t.e(789346).then(t.bind(t, 949881));
                        return () => (0, l.jsx)(e, { entry: r.entry, requestId: r.requestId });
                    });
            },
            [r, p],
        ),
        N = s.useCallback(() => {
            d(String(Date.now()));
        }, []),
        S = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                dc(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        dc(da.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        L = s.useCallback(() => {
            ((I.current = !1),
                setTimeout(() => {
                    I.current || (y(!1), _(T));
                }, 100));
        }, [T]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(uE, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: L,
                children: (0, l.jsx)(nw.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(un.J.Provider, {
                            value: L,
                            children: (0, l.jsx)(uC, {
                                closePopout: n,
                                updatePopoutPosition: N,
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
                        b && L();
                    },
                    spacing: 8,
                    children: (e, n) => {
                        let { isShown: t } = n;
                        return (0, l.jsx)(tE.D, {
                            ...e,
                            ...m,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                E || y(!0);
                            },
                            onContextMenu: v,
                            children: (0, l.jsx)(uI, {
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
var ub = t(531685),
    u_ = t(99066),
    uT = t(376261),
    uv = t(99753),
    uN = t(136722),
    uS = t(949744);
let uR = [],
    uL = new Set(),
    uO = new Set();
var uM = t(214693);
let uP = new Set([
    oz.ContentInventoryEntryType.PLAYED_GAME,
    oz.ContentInventoryEntryType.WATCHED_MEDIA,
    oz.ContentInventoryEntryType.TOP_GAME,
    oz.ContentInventoryEntryType.TOP_ARTIST,
    oz.ContentInventoryEntryType.LISTENED_SESSION,
    oz.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uD = t(498642);
let uk = (0, sd.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uw = t(293860);
let uU = { cooldownDurationMs: 60 * sa.A.Millis.DAY };
function uG(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: uk.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = sm(),
                i = (0, A.bG)([uD.A], () => uD.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i >= 200);
        })(n);
    return (0, l.jsx)(ly.zJ, {
        contentType: t ? m.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uU,
        groupName: lP.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== m.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sE, {
                      className: uw.K,
                      analyticsLocation: M.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uF = t(728321),
    uH = t(282006);
let uB = er.Ay.getEnableHardwareAcceleration(),
    uV = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uW = s.memo(function (e) {
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
                applicationStream: A,
                status: m,
                channel: p,
                guildId: g,
                isTyping: x,
                isMobileOnline: f,
                isVROnline: I,
                premiumSince: E,
                nameplate: j,
                ...y
            } = e,
            _ = s.useRef(null),
            [T, v] = s.useState(!1),
            N = null != E ? new Date(E) : null,
            { analyticsLocations: S } = (0, P.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, C.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                t.e(463317),
                                t.e(893190),
                                t.e(189673),
                                t.e(576432),
                                t.e(797558),
                                t.e(451162),
                                t.e(576665),
                                t.e(624198),
                                t.e(245996),
                                t.e(700792),
                                t.e(552172),
                                t.e(529422),
                                t.e(823427),
                                t.e(307059),
                                t.e(309291),
                                t.e(343116),
                                t.e(557830),
                                t.e(470314),
                                t.e(70515),
                                t.e(404524),
                                t.e(654148),
                                t.e(666939),
                                t.e(281165),
                                t.e(184841),
                            ]).then(t.bind(t, 107632)),
                            n = lO.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
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
                    L.A.startTyping(p.id));
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
        return (0, l.jsx)(q.A, {
            targetElementRef: _,
            user: c,
            guildId: g,
            channelId: p.id,
            roleId: a,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: O,
            shouldShow: T,
            onRequestClose: () => {
                v(!1);
            },
            children: (e) => {
                let { onClick: t, onMouseDown: s, ...a } = e;
                return (0, l.jsx)(ea.A, {
                    ref: _,
                    className: ec.Dc,
                    onContextMenu: R,
                    shouldAnimateStatus: uB,
                    user: c,
                    currentUser: u,
                    nick: d,
                    status: m,
                    activities: h,
                    applicationStream: A,
                    isOwner: o,
                    premiumSince: N,
                    colorString: n,
                    colorStrings: i,
                    colorRoleName: r,
                    isTyping: x,
                    channel: p,
                    guildId: g,
                    isMobile: f,
                    isVR: I,
                    onClickPremiumGuildIcon: M,
                    selected: T,
                    itemProps: y,
                    nameplate: j,
                    onClick: (e) => {
                        e.shiftKey ? O?.() : v((e) => !e);
                    },
                    onMouseDown: (e) => {
                        T ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    uY = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, j.rm)(`${r}`),
            o = (0, A.bG)([J.A], () => J.A.isTyping(i.id, s.id)),
            d = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, A.bG)([V.A], () => (null != n ? V.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uW, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uz(e) {
    let { index: n } = e,
        t = (0, j.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class uX extends s.Component {
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
        if (r?.id === o4) return (0, s.createElement)(dl, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                uF.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uV,
                    children: (0, s.createElement)(uH.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uH.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === dr.S9.CONTENT_INVENTORY) {
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
            if (r.type === dr.S9.MEMBER && "user" in r) {
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
                    activities: A,
                    applicationStream: m,
                    premiumSince: p,
                } = r;
                return (0, l.jsx)(
                    uY,
                    {
                        colorString: e,
                        colorStrings: n,
                        colorRoleId: t,
                        user: a,
                        status: o,
                        isOwner: d,
                        nick: h,
                        activities: A,
                        applicationStream: m,
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
            if (r.type === dr.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    uy,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === dr.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(ds, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uz, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === o4) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uf(t[i + 1 + l]) : n;
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
            .filter(sb.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== dr.S9.MEMBER ||
                    (e.num_users_visible++,
                    n.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != n.activities &&
                        n.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        n.activities.some((e) => e.type === oV.$.PLAYING) && e.num_users_visible_with_game_activity++),
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
        return (0, l.jsx)(v.sk, {
            children: (s) =>
                (0, l.jsx)(sZ.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rS.F, {
                                component: (0, l.jsx)(rR.A, {
                                    children: (0, l.jsx)(rS.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tQ.m1)(t, ee.default, lL.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(j.PR, {
                                    children: (t) => {
                                        let { ref: r, role: o, ...d } = t;
                                        return (0, l.jsx)(
                                            N.OZ,
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
function uq(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(M.A.MEMBER_LIST),
        r = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, A.cf)([dr.Ay], () => dr.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uM.A)({ id: da.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, A.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cZ.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uS.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, A.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uR;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uL;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    uN.zy(t, Y.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => uP.has(e.content_type)), [l])),
                        (i = (0, A.bG)(
                            [o5.A, uv.A],
                            () => {
                                let e = uv.A.getDebugImpressionCappingDisabled();
                                return !(0, u_.sE)("useFilterImpressionCappedContent") || e
                                    ? uO
                                    : o5.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: uO };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, dE.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, A.bG)([uv.A], () => uv.A.getFeedRequestId(da.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(o2).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, A.bG)([o5.A], () => o5.A.hidden),
                m = (0, A.bG)([ub.A], () => ub.A.isFocused()),
                p = (0, A.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, A.bG)([tS.A], () => tS.A.getGuild(r), [r]),
                x = ((0, uT.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, E, C] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: dr.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: dr.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let A = {
                        id: o4,
                        type: dr.S9.CONTENT_INVENTORY_GROUP,
                        key: o4,
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
                        feedHeight: e.map(uf).reduce((e, n) => e + n, 0),
                    };
                    return [[A, ...n], [...t, A, ...e], Math.random(), e];
                }, [l, c, a, n, r, d, t, i, h, x]),
                j = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                T = s.useCallback(
                    (e) => {
                        let n = Math.floor(e / 72),
                            t = Math.min(C?.length ?? 0, n);
                        j.current = Math.max(j.current, t);
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
                        (j.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                n = e.slice(0, j.current);
                            !h &&
                                m &&
                                x &&
                                (dd(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: da.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, u_.sE)("useInjectContentInventoryFeed") &&
                                    eq.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
                        }
                    ),
                    [d, l, r, h, m, x],
                ),
                { groups: f, rows: I, version: E, updateMaxRowSeen: T }
            );
        })({ memberStoreProps: o, channelId: n.id, guildId: n.guild_id }),
        m = s.useRef(null),
        p = s.useRef(null);
    s.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let g = (0, oW.W)("lg") + (0, oW.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = m.current;
                if (null == t) return;
                let i = n === de || n === dn ? 0 : parseInt(n, 10),
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
                    let n = m.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = m.current;
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
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: [
                (0, l.jsx)(uG, { guildId: n.guild_id }),
                (0, l.jsx)(j.hD, {
                    navigator: E,
                    children: (0, l.jsx)(uX, {
                        ...e,
                        ...o,
                        version: u,
                        groups: c,
                        rows: d,
                        listRef: m,
                        updateMaxContentFeedRowSeen: h,
                        sectionHeight: 18 + g,
                        rowHeight: 42,
                    }),
                }),
            ],
        }),
    });
}
function uK(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(o6, { children: (0, l.jsx)(uq, { channel: i, className: t }) }), [i, t]);
}
var u$ = t(888904);
let uZ = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: u$.kL,
        children: [
            (0, l.jsxs)(lp.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lp.A.Icon, { icon: d_.TextIcon, "aria-hidden": !0 }),
                    (0, l.jsx)(lp.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: u$.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: u$.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: u$.fh,
                        variant: "body-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uQ = t(909735),
    uJ = t(205375),
    u0 = t(108926),
    u1 = t(746080),
    u2 = t(516607),
    u6 = t(999900);
function u3() {
    return (0, l.jsx)("div", { className: u6.wG, children: (0, l.jsx)(g.y, {}) });
}
let u9 = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(229511),
                t.e(599660),
                t.e(452880),
                t.e(726399),
                t.e(500194),
                t.e(207309),
                t.e(616045),
                t.e(302800),
                t.e(666140),
                t.e(583518),
                t.e(704374),
                t.e(777848),
                t.e(689160),
                t.e(846066),
                t.e(714573),
                t.e(218911),
                t.e(421225),
                t.e(943351),
            ]).then(t.bind(t, 745431)),
        webpackId: 745431,
        renderLoader: u3,
        name: "ForumChannel",
    }),
    u7 = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(770583),
                t.e(43853),
                t.e(578090),
                t.e(154168),
                t.e(979585),
                t.e(357718),
                t.e(989677),
            ]).then(t.bind(t, 98492)),
        webpackId: 98492,
        renderLoader: u3,
        name: "AppChannel",
    });
function u5() {
    return Promise.all([
        t.e(991625),
        t.e(426965),
        t.e(256172),
        t.e(859821),
        t.e(113561),
        t.e(368991),
        t.e(688508),
        t.e(422037),
        t.e(656997),
        t.e(828849),
        t.e(944121),
        t.e(655282),
        t.e(375971),
        t.e(792818),
        t.e(352694),
        t.e(460582),
        t.e(477751),
        t.e(245851),
        t.e(998392),
        t.e(703540),
        t.e(718878),
        t.e(655910),
        t.e(794188),
        t.e(188526),
        t.e(374962),
        t.e(770583),
        t.e(907467),
        t.e(43853),
        t.e(102170),
        t.e(28094),
        t.e(371547),
        t.e(972638),
        t.e(389684),
        t.e(45646),
        t.e(967493),
        t.e(93372),
        t.e(459397),
        t.e(847810),
        t.e(249727),
        t.e(784573),
        t.e(918024),
        t.e(700792),
        t.e(552172),
        t.e(309291),
        t.e(144179),
        t.e(246969),
        t.e(566976),
        t.e(437961),
        t.e(557830),
        t.e(829260),
        t.e(504098),
        t.e(746479),
        t.e(79216),
        t.e(545006),
        t.e(419360),
        t.e(528384),
        t.e(949013),
        t.e(202669),
        t.e(886913),
        t.e(256373),
        t.e(749736),
        t.e(14020),
        t.e(587732),
        t.e(420577),
        t.e(40811),
        t.e(548738),
        t.e(578090),
        t.e(360536),
        t.e(986300),
        t.e(300619),
        t.e(465694),
        t.e(704374),
        t.e(874821),
        t.e(13107),
        t.e(932011),
        t.e(154168),
        t.e(769014),
        t.e(815057),
        t.e(654624),
        t.e(241411),
        t.e(45916),
        t.e(726223),
        t.e(979585),
        t.e(678827),
        t.e(606913),
        t.e(314117),
        t.e(61924),
        t.e(291553),
        t.e(277749),
        t.e(105064),
        t.e(215980),
        t.e(842492),
        t.e(230761),
        t.e(975076),
        t.e(736793),
        t.e(83888),
        t.e(357718),
        t.e(276293),
        t.e(676510),
        t.e(586546),
        t.e(431692),
        t.e(613637),
        t.e(792461),
    ]).then(t.bind(t, 540462));
}
let u8 = (0, ts.Fe)({ createPromise: u5, webpackId: 540462, name: "ChannelCall", renderLoader: u3 });
function u4() {
    return Promise.all([
        t.e(770583),
        t.e(998392),
        t.e(703540),
        t.e(368991),
        t.e(256172),
        t.e(688508),
        t.e(422037),
        t.e(656997),
        t.e(828849),
        t.e(944121),
        t.e(655282),
        t.e(375971),
        t.e(792818),
        t.e(352694),
        t.e(45646),
        t.e(389684),
        t.e(655910),
        t.e(794188),
        t.e(460582),
        t.e(477751),
        t.e(188526),
        t.e(153965),
        t.e(700792),
        t.e(552172),
        t.e(309291),
        t.e(144179),
        t.e(246969),
        t.e(566976),
        t.e(437961),
        t.e(829260),
        t.e(504098),
        t.e(746479),
        t.e(79216),
        t.e(545006),
        t.e(419360),
        t.e(528384),
        t.e(949013),
        t.e(202669),
        t.e(886913),
        t.e(256373),
        t.e(749736),
        t.e(587732),
        t.e(420577),
        t.e(40811),
        t.e(548738),
        t.e(360536),
        t.e(300619),
        t.e(465694),
        t.e(704374),
        t.e(874821),
        t.e(13107),
        t.e(769014),
        t.e(654624),
        t.e(241411),
        t.e(45916),
        t.e(979585),
        t.e(678827),
        t.e(606913),
        t.e(314117),
        t.e(61924),
        t.e(291553),
        t.e(277749),
        t.e(105064),
        t.e(215980),
        t.e(842492),
        t.e(230761),
        t.e(975076),
        t.e(564001),
        t.e(949239),
    ]).then(t.bind(t, 482877));
}
let he = (0, ts.Fe)({ createPromise: u4, webpackId: 482877, name: "StageChannelCall", renderLoader: u3 }),
    hn = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(603977),
                t.e(527552),
                t.e(769266),
                t.e(193845),
                t.e(781202),
                t.e(583518),
                t.e(428235),
                t.e(966016),
                t.e(462984),
                t.e(369501),
                t.e(671367),
                t.e(138728),
                t.e(220803),
                t.e(79171),
                t.e(417664),
                t.e(662368),
            ]).then(t.bind(t, 252715)),
        webpackId: 252715,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(sM, {});
        },
    }),
    ht = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(577154),
                t.e(424216),
                t.e(877730),
                t.e(611899),
                t.e(603977),
                t.e(527552),
                t.e(769266),
                t.e(487873),
                t.e(765626),
                t.e(683302),
                t.e(728136),
                t.e(428235),
                t.e(966016),
                t.e(507775),
                t.e(462984),
                t.e(369501),
                t.e(218489),
                t.e(636002),
                t.e(138728),
                t.e(466913),
                t.e(71719),
                t.e(213848),
            ]).then(t.bind(t, 956972)),
        webpackId: 956972,
        name: "GuildMemberModViewSidebar",
    }),
    hi = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([t.e(276604), t.e(781202), t.e(269178), t.e(51919), t.e(53923), t.e(90445)]).then(
                t.bind(t, 839964),
            ),
        webpackId: 839964,
        name: "FriendsSidebar",
    });
function hl(e) {
    let { channel: n, guild: t, showTopic: i } = e,
        s = (0, l4.ZF)(n, "channel_header_label");
    return (0, l.jsxs)(l.Fragment, {
        children: [s ? (0, l.jsx)(l4.yw, { channel: n }) : null, i ? (0, t0.EP)(n, t, s ? "bar" : "dot") : null],
    });
}
class hs extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rN.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        let { channel: e, dmAppChannelApplicationId: n } = this.props;
        return null != e && ((0, oG.ZV)(e.type) || null != n);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? u5()
            : e === eo.rbe.GUILD_STAGE_VOICE && u4();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, ih.iN)(e.id);
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
            (0, nz.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [M.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e(926132),
                    t.e(947502),
                    t.e(309004),
                    t.e(430997),
                    t.e(379995),
                    t.e(544058),
                    t.e(591377),
                    t.e(35723),
                    t.e(256372),
                    t.e(29542),
                    t.e(135610),
                ]).then(t.bind(t, 834881));
                return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
            }));
    }
    openThreadContextMenu(e, n) {
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e(926132),
                    t.e(491001),
                    t.e(947502),
                    t.e(965789),
                    t.e(420105),
                ]).then(t.bind(t, 949488));
                return (t) => (0, l.jsx)(e, { ...t, channel: n });
            }));
    }
    openDMContextMenu(e, n) {
        d()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = ee.default.getUser(n.getRecipientId());
        (d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e(463317),
                    t.e(926132),
                    t.e(893190),
                    t.e(146652),
                    t.e(189673),
                    t.e(576432),
                    t.e(797558),
                    t.e(491001),
                    t.e(451162),
                    t.e(576665),
                    t.e(947502),
                    t.e(245996),
                    t.e(700792),
                    t.e(965789),
                    t.e(552172),
                    t.e(529422),
                    t.e(823427),
                    t.e(307059),
                    t.e(309291),
                    t.e(150773),
                    t.e(935483),
                    t.e(17244),
                    t.e(298199),
                    t.e(861649),
                    t.e(439778),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            }));
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(u1.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iV.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(n8.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dQ.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iH.A,
                  { size: dH.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    o.push((0, l.jsx)(lw, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lU.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(n_, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(l2, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(lX, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lw, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lU.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(nN, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(ij, { channel: e })),
                    null == n || n.isForumLikeChannel() || o.push((0, l.jsx)(rx.A, { channel: n }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(lZ, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iN, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(nN, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && o.push((0, l.jsx)(lt, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rC, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rx.A, { channel: e }, "browser")),
                    t || o.push((0, l.jsx)(nS.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    (0, tl.PD)(e.guild_id, "channel_header") && o.push((0, l.jsx)(i7, {}, "conversations")),
                    o.push((0, l.jsx)(nN, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && o.push((0, l.jsx)(lt, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(ti, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rx.A, { channel: e }, "browser")),
                        t || o.push((0, l.jsx)(nS.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(nN, { channelId: e.id }, "members")));
                    break;
                }
                o.push((0, l.jsx)(n1, { channel: e, isLurking: t }, "app-channel-actions"));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lm, {}, "game-invite-channel-learn-more")),
                    t ||
                        (o.push((0, l.jsx)(lc, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(nS.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(nN, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
        }
        return o;
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
                n.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e && null != n
            ? (0, l.jsx)("div", {
                  className: u6.u8,
                  children: (0, l.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, p.mM)(async () => {
                              let { default: e } = await Promise.all([t.e(836178), t.e(670774)]).then(
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
            showActivityPanel: r,
            showFramePanel: o,
            hasVideo: c,
            showHeaderGuildBreadcrumb: u,
            isAppChannelChatExpanded: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != n, "Should not be null if channel is not null."));
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, ih.iN)(e.id) : void 0,
            m = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = r || o,
            I = p || g;
        return (0, l.jsxs)("div", {
            className: u6.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lp.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(u6.DD, r, { [u6.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: I,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(t0.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, t0.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: i,
                                        hasVideo: c,
                                        isAppChannelChatExpanded: h,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: m,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    (0, l.jsx)(hl, { channel: e, guild: i, showTopic: !h && !u }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: u6.u8,
                                              children: (0, l.jsx)(nr, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: u6.u8,
                                                children: (0, l.jsx)(x.$, {
                                                    onClick: () => (0, ns.uh)(e.guild_id, e.id),
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: z.intl.string(z.t.k5WiPf),
                                                }),
                                            })
                                          : null,
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sR.A, { channelId: e.id }),
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
                if (!n) return (0, l.jsx)(he, { channel: e, popoutType: n7.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    u8,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: n7.N.NO_POPOUT,
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
        return (0, l.jsx)(e4, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(i$, { guildId: n.id })
                : (0, l.jsx)(iW.H, { guildId: n.id, children: (0, l.jsx)(i6, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(ok.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(t2.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tK, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(u9, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(tJ.A, { channel: e, guild: n, chatInputType: n5.oU.NORMAL }, null != n ? n.id : "home")
            : (0, l.jsx)(u7, { channel: e }, e.id);
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
            return (0, l.jsx)(oD, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sS, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uK, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uK, { channel: n }, `channel-members-${n.id}`);
                    break;
                case eo.rbe.PUBLIC_THREAD:
                case eo.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(ep, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(hn, { guildId: t?.id, channelId: e.id });
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
                    (0, p.mM)(
                        async () => {
                            let { default: e } = await t.e(638763).then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => iB(l7.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.mM)(
                        async () => {
                            let { default: e } = await Promise.all([t.e(99643), t.e(217388)]).then(t.bind(t, 538471));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, ow.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case sD.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rc, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sD.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rv, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sD.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? ik : rv;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(u0.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sD.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sD.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: 480 },
                    className: u6.uC,
                    children: (0, l.jsx)(ht, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => sP.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = r - 240 - (n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450);
        return (
            (d += 375),
            (0, l.jsx)(oB.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? oB.X.PostSidebar : oB.X.ThreadSidebar,
                maxWidth: d,
                capturePointer: this.isChatInSidebar(),
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
                friendsSidebarAppBarToggleEnabled: A,
                friendsSidebarCollapsed: m,
            } = this.props,
            { threadSidebarWidth: p, isThreadSidebarFloating: g } = this.state,
            x = h && s !== eo.DUB.FULL_SCREEN && (!A || !m),
            f = this.shouldRenderCall();
        if (i) return (0, l.jsx)(uZ, {});
        if (null == e) return (0, l.jsx)(uJ.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            E = (0, uQ.UN)("Channel"),
            C = null != d && !I,
            j =
                ((0, oG.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !f,
                        className: a()(u6.TE, {
                            [u6.js]: (I && !E) || C,
                            [u6.Rs]: I ? !E || g : C || x,
                            [u6.jl]: I && g,
                        }),
                        children: [
                            j
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: u6.x4,
                                      channel: e,
                                      draftType: iM.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(u6.Qs, { [u6.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tr.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: u6.zP, children: b }) : b,
                x && (0, l.jsx)(hi, {}),
            ],
        });
    }
}
let hr = (0, ef.A)(hs),
    ha = s.memo(function (e) {
        var n, t, i;
        let r,
            { providedChannel: a } = e,
            [o, d] = s.useState(null),
            c = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, A.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, A.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            f = (0, tZ.DZ)(),
            C = (0, tZ.e4)(x),
            j = (0, A.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            y = C?.parent_id,
            b = (0, A.bG)([ew.A], () => ew.A.getChannel(y), [y]),
            _ = (0, A.bG)([tS.A], () => tS.A.getGuild(C?.guild_id), [C]),
            { needSubscriptionToAccess: T } = (0, iY.A)(C?.id ?? void 0),
            v = (0, A.bG)(
                [n9.A],
                () => {
                    let e = null != c ? n9.A.getParticipants(c) : [],
                        n = null != c ? n9.A.getActivityParticipants(c) : [];
                    return e.length - n.length > 0;
                },
                [c],
            ),
            N = (0, iF.A)(),
            S = (0, A.bG)([eU.Ay], () => (N?.channelId ?? eU.Ay.getVoiceChannelId()) === C?.id),
            R = (0, A.bG)([eC.Ay], () => (null != C ? eC.Ay.getSelfEmbeddedActivityForChannel(C.id) : null), [C]),
            L = (0, A.bG)([oH.A], () => oH.A.isConnected()),
            O = (0, eE.Ay)(L),
            M = L && !1 === O;
        s.useEffect(() => {
            S &&
                M &&
                null != R &&
                null != C &&
                I.A.selectParticipant(
                    C.id,
                    (0, n3.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [M, C, S, R]);
        let P = (0, A.bG)([eC.Ay], () => eC.Ay.getCurrentEmbeddedActivity()),
            D = (0, A.bG)([eC.Ay], () => eC.Ay.getActivityPanelMode()),
            k = null != P && !(0, eT.A)(C?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, A.cf)([lO.A], () =>
                null != C && C.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lO.A.getVoiceStatesForChannel(C.id)),
                          isUserInThisVoice: lO.A.isInChannel(C.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != C && C.isPrivate() && !k && v,
            H = C?.isGuildVocal() || F || (U && (G || !w)),
            B = (0, sw.e)(C, "channel"),
            V = (0, A.bG)([tn.A], () => {
                let e = (0, nK.ny)(tn.A.getMainFrame());
                return e?.data.layoutMode === nK.y0.FOCUSED && e.intent === nK.sV.MAIN;
            }),
            { welcomeModalChannelId: W } = (0, h.zy)(),
            Y = (0, A.bG)([nA.A], () => null != C && nA.A.isLurking(C.guild_id), [C]),
            z = (0, A.bG)([oU.A], () => oU.A.hasSeen(C?.guild_id, Y), [C, Y]),
            X = (0, A.bG)(
                [n9.A, eC.Ay],
                () =>
                    null != eC.Ay.getConnectedActivityLocation() && eC.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eC.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? n9.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            q =
                ((n = _?.id),
                (r = (0, A.bG)([tS.A, l9, ee.default, $.Ay], () => {
                    let e = tS.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === l9.hasViewedPrompt(l7.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != r && (r || iB(l7.REAL_NAME_PROMPT, n));
                }, [r, n]),
                !0 === r),
            K =
                ((t = _?.id),
                (0, A.bG)([ew.A, tS.A, eU.Ay], () => {
                    let e = tS.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(W);
                    return W === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, oG.ke)(n.type);
                })),
            { section: Q, channelSidebarState: J } = (0, A.cf)(
                [nT.Ay],
                () => ({ section: nT.Ay.getSection(c, C?.isDM()), channelSidebarState: nT.Ay.getSidebarState(c) }),
                [c, C],
            ),
            en = _?.id,
            et = (0, A.bG)([nT.Ay], () => nT.Ay.getGuildSidebarState(en), [en]),
            el = (0, l8.lI)(),
            es = (0, ni.qz)() && C?.type === eo.rbe.GUILD_APP;
        ((i = C?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return n2.A.addRouteRewriter((e, n) => {
                        let { pathname: t, search: l, state: s } = e;
                        return "POP" === n || (0, ni.Dw)(l) || n6.exec(t)?.[1] !== i
                            ? null
                            : { path: (0, ni.gu)(t), state: s };
                    });
            }, [i, es]));
        let er = es && J?.type === sD.PE.VIEW_CHANNEL && J.channelId === C.id,
            ea = (0, tQ.Ay)(C),
            ed = (0, tQ.Ay)(C, !0),
            ec = (0, A.bG)([n9.A], () => (null != C ? n9.A.getSelectedParticipant(C.id) : null)),
            eu = (0, nt.vL)(C),
            eh = (0, t1.Uf)(C),
            eA = null != C && g === C.id,
            em = null != C && C.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = iw.A.useConfig({ location: "Channel" }),
            ex = (0, iG.c)(),
            ef = (0, A.bG)(
                [oF.A, nv.A],
                () => {
                    let e = C?.guild_id ?? nv.A.getGuildId();
                    return null != e && oF.A.isUnavailable(e);
                },
                [C],
            ),
            ej = ep && (0, iU.A)() && null != C && !ef && !C.isGuildVocal();
        (s.useEffect(() => (E.A.setFriendsSidebarAvailable(ej), () => E.A.setFriendsSidebarAvailable(!1)), [ej]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, eT.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, ne.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, nn.A)(s, t), n?.());
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
                let e = (0, ns.JK)();
                if (e?.location?.state?.stageInviteKey === u2.J2) {
                    let { channelId: n } = (0, l5.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []));
        let ey = { channel: C, inCurrentVoiceChannel: eA },
            eb = s.useRef(ey);
        (s.useEffect(() => {
            eb.current = ey;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eb.current;
                null != o && null != e && em && e.id === o && !n && ((0, sk.av)(e), d(null));
            }, [o, em]));
        let ev = (0, eI.cI)(C),
            eN = null != C && C.isPrivate(),
            eS = (0, eE.Ay)(eN),
            eR = (0, eE.Ay)(C?.id);
        s.useEffect(() => {
            let e = eS && !eN,
                n = eS && eN && C?.id !== eR;
            (e || n) && (0, t$.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lP.i.AUTO });
        }, [C?.id, eR, eN, eS]);
        let eL = (0, p.Rv)(),
            eO = (0, n4.a)(C);
        return (0, l.jsx)(hr, {
            guildId: C?.guild_id,
            channelId: c,
            channel: C,
            channelName: ea,
            formattedChannelName: ed,
            parentChannel: b,
            voiceChannel: j,
            layout: X,
            needSubscriptionToAccess: T,
            isLurking: Y,
            hasModalOpen: eL,
            section: Q,
            channelSidebarState: er ? void 0 : J,
            guildSidebarState: et,
            guild: _,
            showCall: !T && H,
            isStageUnifiedCall: B,
            showActivityPanel: k,
            showFramePanel: V,
            channelIsContentGated: eu,
            spoilerGatingChannelId: eh,
            isMobile: (0, A.bG)([Z.A], () => C?.type === eo.rbe.DM && Z.A.isMobileOnline(C.getRecipientId()), [C]),
            isUnavailable: ef,
            showRealNameModal: q,
            showWelcomeModal: !z && K,
            showFollowButton: (C?.type === eo.rbe.GUILD_ANNOUNCEMENT && _?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([lO.A], () => ({ hasVideo: null != C && lO.A.hasVideo(C.id) }), [C]),
            inCall: eA,
            selectedParticipant: ec,
            showChannelSummaries: ev,
            showHeaderGuildBreadcrumb: f || el,
            isAppChannelChatExpanded: es,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
            friendsSidebarExperimentEnabled: ep,
            canShowFriendsSidebar: ej,
            friendsSidebarAppBarToggleEnabled: eg,
            friendsSidebarCollapsed: ex,
            dmAppChannelApplicationId: eO,
        });
    });
