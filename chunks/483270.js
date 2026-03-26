"use strict";
n.d(t, { A: () => J });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    d = n(884362),
    u = n(607399),
    h = n(311907),
    A = n(397927),
    m = n(442433),
    _ = n(414798),
    p = n(775602),
    g = n(793574),
    f = n(688810),
    x = n(449582),
    E = n(485947),
    C = n(509536),
    I = n(201275),
    N = n(657048),
    b = n(561010),
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
    F = n(526439),
    K = n(922936);
let W = k.Ay.getEnableHardwareAcceleration(),
    Y = 44 + V.b,
    z = s.memo(function (e) {
        let { channel: t, sectionId: l, userId: a, guildOwnerId: r } = e,
            o = s.useRef(null),
            d = (0, h.bG)([L.A], () => L.A.isTyping(t.id, a)),
            A = (0, h.bG)([y.Ay], () => y.Ay.getMember(t.guild_id, a)),
            p = (0, h.bG)(
                [j.A],
                () => (A?.colorRoleId != null ? j.A.getRole(t.guild_id, A.colorRoleId)?.name : void 0),
                [t.guild_id, A],
            ),
            g = (0, h.bG)([M.default], () => M.default.getUser(a)),
            f = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
            E = g?.id === f?.id,
            I = (0, h.bG)([R.A, O.A], () => (E ? O.A.getStatus() : R.A.getStatus(a, t.guild_id))),
            N = (0, h.bG)([R.A], () => R.A.isMobileOnline(a)),
            b = (0, h.bG)([R.A, O.A], () => (E ? O.A.getActivities() : R.A.getActivities(a, t.guild_id))),
            D = (0, h.bG)([v.A], () => v.A.getAnyStreamForUser(a)),
            G = (0, c.rm)(a),
            P = (0, h.bG)([S.A], () => S.A.canUserViewChannel(t.id, l, a)),
            k = g?.id != null && g.id === r,
            F = s.useCallback(
                (e) => {
                    null != g &&
                        (0, m.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("87340")]).then(
                                n.bind(n, 708202),
                            );
                            return (n) => (0, i.jsx)(e, { ...n, user: g, guildId: t.guild_id, channel: t });
                        });
                },
                [g, t],
            ),
            K = s.useCallback(() => {
                if (null == g) return;
                let e = `@${w.Ay.getUserTag(g, { decoration: "never" })}`,
                    n = `<@${g.id}>`;
                U._.dispatch(B.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    U._.dispatchToLastSubscribed(B.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    _.A.startTyping(t.id);
            }, [g, t]),
            Y = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, C.K4)({
                            guildId: t.guild_id,
                            location: { section: B.JJy.THREAD_MEMBER_LIST, object: B.ZSU.BOOST_GEM_ICON },
                        });
                },
                [t.guild_id],
            ),
            z = (0, x.r)({ user: g, guildId: t.guild_id }),
            [q, X] = s.useState(!1);
        if (null == g) return null;
        let J = A?.premiumSince;
        return (0, i.jsx)(T.A, {
            targetElementRef: o,
            user: g,
            guildId: t.guild_id,
            channelId: t.id,
            position: u.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: K,
            shouldShow: q,
            onRequestClose: () => X(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: s, ...l } = e;
                return (0, i.jsx)(V.A, {
                    ref: o,
                    onContextMenu: F,
                    shouldAnimateStatus: W,
                    user: g,
                    currentUser: f,
                    nick: A?.nick,
                    status: I,
                    activities: b,
                    colorString: A?.colorString,
                    colorStrings: A?.colorStrings,
                    colorRoleName: p,
                    isTyping: d,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: N,
                    selected: q,
                    applicationStream: D,
                    premiumSince: null == J ? null : new Date(J),
                    onClickPremiumGuildIcon: Y,
                    itemProps: G,
                    lostPermissionTooltipText: P ? void 0 : H.intl.string(H.t["/QcoTz"]),
                    isOwner: k,
                    nameplate: z,
                    onClick: (e) => {
                        e.shiftKey ? K?.() : X((e) => !e);
                    },
                    onMouseDown: (e) => {
                        q ? e.stopPropagation() : s?.(e);
                    },
                    ...l,
                });
            },
        });
    }),
    q = s.memo(function (e) {
        let { id: t, label: n, count: s, guildId: l } = e,
            a = (0, I.$7)({ roleId: t, guildId: l, size: 16 });
        return t === B.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: K.lL, children: (0, i.jsx)("div", { className: K.k1 }) })
            : (0, i.jsxs)(E.A, {
                  className: K.lL,
                  "aria-label": H.intl.formatToPlainString(H.t.Uaqbke, { title: n, count: s }),
                  children: [
                      null != a ? (0, i.jsx)(N.A, { className: K.UT, ...a }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", s] }),
                  ],
              });
    }),
    X = s.memo(function (e) {
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
        r,
        u,
        m,
        _,
        { channel: x, guild: E } = e,
        C = `members-${x.id}`,
        { analyticsLocations: I } = (0, f.Ay)(g.A.MEMBER_LIST),
        N = (0, b.q)(x.id, E),
        S = N.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: T, listRef: v } =
            ((t = C),
            (n = Y),
            (l = (0, h.bG)([p.A], () => p.A.keyboardModeEnabled)),
            (r = s.useRef(null)),
            (u = s.useCallback(
                (e, t) => {
                    let i = r.current;
                    if (null == i) return;
                    let s = parseInt(t, 10),
                        [l, a] = i.getSectionRowFromIndex(s),
                        o = 0 === l && 0 === a ? n : 0;
                    i.scrollToIndex({
                        section: l,
                        row: a,
                        padding: o,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [n],
            )),
            (m = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = r.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (_ = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = r.current;
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
                navigator: (0, d.Ay)({ id: t, setFocus: u, isEnabled: l, scrollToStart: m, scrollToEnd: _ }),
                listRef: r,
            }),
        y = 0 === N.length || N.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            G.default.track(B.HAw.MEMBER_LIST_VIEWED, { channel_id: x.id, channel_type: x.type, guild_id: x.guild_id });
        }, [x.guild_id, x.id, x.type]),
        y)
    )
        return (0, i.jsx)(Q, { channel: x });
    let j = o().omit(T.containerProps, ["ref"]),
        R = P.wT(E);
    return (0, i.jsx)(f.f5, {
        value: I,
        children: (0, i.jsx)(c.hD, {
            navigator: T,
            children: (0, i.jsx)(A.skg, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: a()(K.yg, K.ML, F.kL),
                        children: (0, i.jsx)(
                            A.B8B,
                            {
                                ref: v,
                                className: K.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = N[t];
                                    return (0, i.jsx)(
                                        q,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: E.id },
                                        n.id,
                                    );
                                },
                                rowHeight: Y,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: s, id: l } = N[t];
                                    return (0, i.jsx)(
                                        z,
                                        { channel: x, sectionId: l, userId: s[n], guildOwnerId: R },
                                        s[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (N[e] === S && x.type === B.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    N[e.section] === S ? (0, i.jsx)(X, { channel: x }, "footer") : null,
                                innerAriaLabel: H.intl.string(H.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: N.map((e) => e.userIds.length),
                                fade: !0,
                                ...j,
                                ...e,
                            },
                            C,
                        ),
                    }),
            }),
        }),
    });
}
function Q(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: a()(F.p$, F.kL, K.yg, K.ML, K.ol),
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
