"use strict";
n.d(t, { A: () => J });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(837381),
    d = n(884362),
    u = n(607399),
    h = n(311907),
    A = n(397927),
    p = n(442433),
    g = n(414798),
    m = n(775602),
    _ = n(793574),
    f = n(688810),
    x = n(485947),
    C = n(509536),
    E = n(201275),
    I = n(111864),
    b = n(657048),
    N = n(561010),
    S = n(219065),
    T = n(342296),
    v = n(616356),
    y = n(696451),
    j = n(317525),
    R = n(290863),
    O = n(461213),
    L = n(741961),
    M = n(287809),
    D = n(303727),
    G = n(954571),
    U = n(203982),
    P = n(488926),
    w = n(427262),
    k = n(837921),
    V = n(110574),
    B = n(652215),
    H = n(985018),
    F = n(767952),
    K = n(701939);
let W = k.Ay.getEnableHardwareAcceleration(),
    Y = 44 + V.b,
    z = s.memo(function (e) {
        let { channel: t, sectionId: l, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, h.bG)([L.A], () => L.A.isTyping(t.id, r)),
            A = (0, h.bG)([y.Ay], () => y.Ay.getMember(t.guild_id, r)),
            m = (0, h.bG)(
                [j.A],
                () => (A?.colorRoleId != null ? j.A.getRole(t.guild_id, A.colorRoleId)?.name : void 0),
                [t.guild_id, A],
            ),
            _ = (0, h.bG)([M.default], () => M.default.getUser(r)),
            f = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
            x = _?.id === f?.id,
            E = (0, h.bG)([R.A, O.A], () => (x ? O.A.getStatus() : R.A.getStatus(r, t.guild_id))),
            b = (0, h.bG)([R.A], () => R.A.isMobileOnline(r)),
            N = (0, h.bG)([R.A, O.A], () => (x ? O.A.getActivities() : R.A.getActivities(r, t.guild_id))),
            D = (0, h.bG)([v.A], () => v.A.getAnyStreamForUser(r)),
            G = (0, c.rm)(r),
            P = (0, h.bG)([S.A], () => S.A.canUserViewChannel(t.id, l, r)),
            k = _?.id != null && _.id === a,
            F = s.useCallback(
                (e) => {
                    null != _ &&
                        (0, p.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("79961")]).then(
                                n.bind(n, 708202),
                            );
                            return (n) => (0, i.jsx)(e, { ...n, user: _, guildId: t.guild_id, channel: t });
                        });
                },
                [_, t],
            ),
            K = s.useCallback(() => {
                if (null == _) return;
                let e = `@${w.Ay.getUserTag(_, { decoration: "never" })}`,
                    n = `<@${_.id}>`;
                U._.dispatch(B.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    U._.dispatchToLastSubscribed(B.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    g.A.startTyping(t.id);
            }, [_, t]),
            Y = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, C.K)({
                            guildId: t.guild_id,
                            location: { section: B.JJy.THREAD_MEMBER_LIST, object: B.ZSU.BOOST_GEM_ICON },
                        });
                },
                [t.guild_id],
            ),
            z = (0, I.r)({ user: _, guildId: t.guild_id }),
            [X, q] = s.useState(!1);
        if (null == _) return null;
        let J = A?.premiumSince;
        return (0, i.jsx)(T.A, {
            targetElementRef: o,
            user: _,
            guildId: t.guild_id,
            channelId: t.id,
            position: u.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: K,
            shouldShow: X,
            onRequestClose: () => q(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: s, ...l } = e;
                return (0, i.jsx)(V.A, {
                    ref: o,
                    onContextMenu: F,
                    shouldAnimateStatus: W,
                    user: _,
                    currentUser: f,
                    nick: A?.nick,
                    status: E,
                    activities: N,
                    colorString: A?.colorString,
                    colorStrings: A?.colorStrings,
                    colorRoleName: m,
                    isTyping: d,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: b,
                    selected: X,
                    applicationStream: D,
                    premiumSince: null == J ? null : new Date(J),
                    onClickPremiumGuildIcon: Y,
                    itemProps: G,
                    lostPermissionTooltipText: P ? void 0 : H.intl.string(H.t["/QcoTz"]),
                    isOwner: k,
                    nameplate: z,
                    onClick: (e) => {
                        e.shiftKey ? K?.() : q((e) => !e);
                    },
                    onMouseDown: (e) => {
                        X ? e.stopPropagation() : s?.(e);
                    },
                    ...l,
                });
            },
        });
    }),
    X = s.memo(function (e) {
        let { id: t, label: n, count: s, guildId: l } = e,
            r = (0, E.$7)({ roleId: t, guildId: l, size: 16 });
        return t === B.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: K.lL, children: (0, i.jsx)("div", { className: K.k1 }) })
            : (0, i.jsxs)(x.A, {
                  className: K.lL,
                  "aria-label": H.intl.formatToPlainString(H.t.Uaqbke, { title: n, count: s }),
                  children: [
                      null != r ? (0, i.jsx)(b.A, { className: K.UT, ...r }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", s] }),
                  ],
              });
    }),
    q = s.memo(function (e) {
        let { channel: t } = e;
        return t.type === B.rbe.PRIVATE_THREAD
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: F.yF }),
                      (0, i.jsxs)(A.Text, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: F.Uz,
                          children: [
                              (0, i.jsx)(A.XAi, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              H.intl.string(H.t.BTLTAs),
                          ],
                      }),
                      (0, i.jsx)(A.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: F.GA,
                          children: H.intl.string(H.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function J(e) {
    var t, n;
    let l,
        a,
        u,
        p,
        g,
        { channel: x, guild: C } = e,
        E = `members-${x.id}`,
        { analyticsLocations: I } = (0, f.Ay)(_.A.MEMBER_LIST),
        b = (0, N.q)(x.id, C),
        S = b.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: T, listRef: v } =
            ((t = E),
            (n = Y),
            (l = (0, h.bG)([m.A], () => m.A.keyboardModeEnabled)),
            (a = s.useRef(null)),
            (u = s.useCallback(
                (e, t) => {
                    let i = a.current;
                    if (null == i) return;
                    let s = parseInt(t, 10),
                        [l, r] = i.getSectionRowFromIndex(s),
                        o = 0 === l && 0 === r ? n : 0;
                    i.scrollToIndex({
                        section: l,
                        row: r,
                        padding: o,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [n],
            )),
            (p = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = a.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (g = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = a.current;
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
                navigator: (0, d.Ay)({ id: t, setFocus: u, isEnabled: l, scrollToStart: p, scrollToEnd: g }),
                listRef: a,
            }),
        y = 0 === b.length || b.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            G.default.track(B.HAw.MEMBER_LIST_VIEWED, { channel_id: x.id, channel_type: x.type, guild_id: x.guild_id });
        }, [x.guild_id, x.id, x.type]),
        y)
    )
        return (0, i.jsx)(Q, { channel: x });
    let j = o().omit(T.containerProps, ["ref"]),
        R = P.wT(C);
    return (0, i.jsx)(f.f5, {
        value: I,
        children: (0, i.jsx)(c.hD, {
            navigator: T,
            children: (0, i.jsx)(A.skg, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: r()(K.yg, K.ML, F.kL),
                        children: (0, i.jsx)(
                            A.B8B,
                            {
                                ref: v,
                                className: K.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = b[t];
                                    return (0, i.jsx)(
                                        X,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: C.id },
                                        n.id,
                                    );
                                },
                                rowHeight: Y,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: s, id: l } = b[t];
                                    return (0, i.jsx)(
                                        z,
                                        { channel: x, sectionId: l, userId: s[n], guildOwnerId: R },
                                        s[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (b[e] === S && x.type === B.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    b[e.section] === S ? (0, i.jsx)(q, { channel: x }, "footer") : null,
                                innerAriaLabel: H.intl.string(H.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: b.map((e) => e.userIds.length),
                                fade: !0,
                                ...j,
                                ...e,
                            },
                            E,
                        ),
                    }),
            }),
        }),
    });
}
function Q(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(F.p$, F.kL, K.yg, K.ML, K.ol),
        children: [
            (0, i.jsx)(A.Text, {
                className: F.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: H.intl.string(H.t["9Oq93m"]),
            }),
            (0, i.jsxs)("div", {
                className: F.hs,
                children: [
                    (0, i.jsx)("div", {
                        className: F.AI,
                        children: (0, i.jsx)(A.nFg, { size: "lg", color: "currentColor" }),
                    }),
                    (0, i.jsx)(D.A, { className: F.WA }),
                ],
            }),
            (0, i.jsx)(A.Heading, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? H.intl.string(H.t.p0UgNQ) : H.intl.string(H.t["9/n5vz"]),
            }),
            (0, i.jsx)(A.Text, {
                className: F.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: H.intl.string(H.t.emw8UP),
            }),
        ],
    });
}
