n.d(t, { A: () => $ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(837381),
    c = n(884362),
    u = n(607399),
    h = n(311907),
    A = n(397927),
    _ = n(442433),
    m = n(414798),
    p = n(775602),
    g = n(793574),
    f = n(688810),
    E = n(449582),
    x = n(485947),
    I = n(509536),
    C = n(201275),
    N = n(657048),
    T = n(561010),
    S = n(219065),
    b = n(342296),
    y = n(616356),
    v = n(696451),
    j = n(317525),
    R = n(290863),
    O = n(461213),
    L = n(741961),
    M = n(287809),
    D = n(303727),
    U = n(954571),
    G = n(203982),
    P = n(488926),
    k = n(427262),
    w = n(837921),
    B = n(110574),
    V = n(652215),
    H = n(985018),
    F = n(526439),
    W = n(922936);
let K = w.Ay.getEnableHardwareAcceleration(),
    Y = 44 + B.b,
    z = l.memo(function (e) {
        let { channel: t, sectionId: s, userId: a, guildOwnerId: r } = e,
            o = l.useRef(null),
            c = (0, h.bG)([L.A], () => L.A.isTyping(t.id, a)),
            A = (0, h.bG)([v.Ay], () => v.Ay.getMember(t.guild_id, a)),
            p = (0, h.bG)(
                [j.A],
                () => (A?.colorRoleId != null ? j.A.getRole(t.guild_id, A.colorRoleId)?.name : void 0),
                [t.guild_id, A],
            ),
            g = (0, h.bG)([M.default], () => M.default.getUser(a)),
            f = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
            x = g?.id === f?.id,
            C = (0, h.bG)([R.A, O.A], () => (x ? O.A.getStatus() : R.A.getStatus(a, t.guild_id))),
            N = (0, h.bG)([R.A], () => R.A.isMobileOnline(a)),
            T = (0, h.yK)([R.A, O.A], () => (x ? O.A.getActivities() : R.A.getActivities(a, t.guild_id))),
            D = (0, h.bG)([y.A], () => y.A.getAnyStreamForUser(a)),
            U = (0, d.rm)(a),
            P = (0, h.bG)([S.A], () => S.A.canUserViewChannel(t.id, s, a)),
            w = g?.id != null && g.id === r,
            F = l.useCallback(
                (e) => {
                    null != g &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("87340")]).then(
                                n.bind(n, 708202),
                            );
                            return (n) => (0, i.jsx)(e, { ...n, user: g, guildId: t.guild_id, channel: t });
                        });
                },
                [g, t],
            ),
            W = l.useCallback(() => {
                if (null == g) return;
                let e = `@${k.Ay.getUserTag(g, { decoration: "never" })}`,
                    n = `<@${g.id}>`;
                G._.dispatch(V.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    G._.dispatchToLastSubscribed(V.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    m.A.startTyping(t.id);
            }, [g, t]),
            Y = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, I.K4)({
                            guildId: t.guild_id,
                            location: { section: V.JJy.THREAD_MEMBER_LIST, object: V.ZSU.BOOST_GEM_ICON },
                        });
                },
                [t.guild_id],
            ),
            z = (0, E.r)({ user: g, guildId: t.guild_id }),
            [X, q] = l.useState(!1);
        if (null == g) return null;
        let $ = A?.premiumSince;
        return (0, i.jsx)(b.default, {
            targetElementRef: o,
            user: g,
            guildId: t.guild_id,
            channelId: t.id,
            position: u.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: W,
            shouldShow: X,
            onRequestClose: () => q(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: l, ...s } = e;
                return (0, i.jsx)(B.A, {
                    ref: o,
                    onContextMenu: F,
                    shouldAnimateStatus: K,
                    user: g,
                    currentUser: f,
                    nick: A?.nick,
                    status: C,
                    activities: T,
                    colorString: A?.colorString,
                    colorStrings: A?.colorStrings,
                    colorRoleName: p,
                    isTyping: c,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: N,
                    selected: X,
                    applicationStream: D,
                    premiumSince: null == $ ? null : new Date($),
                    onClickPremiumGuildIcon: Y,
                    itemProps: U,
                    lostPermissionTooltipText: P ? void 0 : H.intl.string(H.t["/QcoTz"]),
                    isOwner: w,
                    nameplate: z,
                    onClick: (e) => {
                        e.shiftKey ? W?.() : q((e) => !e);
                    },
                    onMouseDown: (e) => {
                        X ? e.stopPropagation() : l?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    X = l.memo(function (e) {
        let { id: t, label: n, count: l, guildId: s } = e,
            a = (0, C.$7)({ roleId: t, guildId: s, size: 16 });
        return t === V.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: W.lL, children: (0, i.jsx)("div", { className: W.k1 }) })
            : (0, i.jsxs)(x.A, {
                  className: W.lL,
                  "aria-label": H.intl.formatToPlainString(H.t.Uaqbke, { title: n, count: l }),
                  children: [
                      null != a ? (0, i.jsx)(N.A, { className: W.UT, ...a }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", l] }),
                  ],
              });
    }),
    q = l.memo(function (e) {
        let { channel: t } = e;
        return t.type === V.rbe.PRIVATE_THREAD
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
function $(e) {
    var t, n;
    let s,
        r,
        u,
        _,
        m,
        { channel: E, guild: x } = e,
        I = `members-${E.id}`,
        { analyticsLocations: C } = (0, f.Ay)(g.A.MEMBER_LIST),
        N = (0, T.q)(E.id, x),
        S = N.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: b, listRef: y } =
            ((t = I),
            (n = Y),
            (s = (0, h.bG)([p.A], () => p.A.keyboardModeEnabled)),
            (r = l.useRef(null)),
            (u = l.useCallback(
                (e, t) => {
                    let i = r.current;
                    if (null == i) return;
                    let l = parseInt(t, 10),
                        [s, a] = i.getSectionRowFromIndex(l),
                        o = 0 === s && 0 === a ? n : 0;
                    i.scrollToIndex({
                        section: s,
                        row: a,
                        padding: o,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [n],
            )),
            (_ = l.useCallback(
                () =>
                    new Promise((e) => {
                        let t = r.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (m = l.useCallback(
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
                navigator: (0, c.Ay)({ id: t, setFocus: u, isEnabled: s, scrollToStart: _, scrollToEnd: m }),
                listRef: r,
            }),
        v = 0 === N.length || N.every((e) => 0 === e.userIds.length);
    if (
        (l.useEffect(() => {
            U.default.track(V.HAw.MEMBER_LIST_VIEWED, { channel_id: E.id, channel_type: E.type, guild_id: E.guild_id });
        }, [E.guild_id, E.id, E.type]),
        v)
    )
        return (0, i.jsx)(Q, { channel: E });
    let j = o().omit(b.containerProps, ["ref"]),
        R = P.wT(x);
    return (0, i.jsx)(f.f5, {
        value: C,
        children: (0, i.jsx)(d.hD, {
            navigator: b,
            children: (0, i.jsx)(A.skg, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: a()(W.yg, W.ML, F.kL),
                        children: (0, i.jsx)(
                            A.B8B,
                            {
                                ref: y,
                                className: W.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = N[t];
                                    return (0, i.jsx)(
                                        X,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: x.id },
                                        n.id,
                                    );
                                },
                                rowHeight: Y,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: l, id: s } = N[t];
                                    return (0, i.jsx)(
                                        z,
                                        { channel: E, sectionId: s, userId: l[n], guildOwnerId: R },
                                        l[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (N[e] === S && E.type === V.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    N[e.section] === S ? (0, i.jsx)(q, { channel: E }, "footer") : null,
                                innerAriaLabel: H.intl.string(H.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: N.map((e) => e.userIds.length),
                                fade: !0,
                                ...j,
                                ...e,
                            },
                            I,
                        ),
                    }),
            }),
        }),
    });
}
function Q(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: a()(F.p$, F.kL, W.yg, W.ML, W.ol),
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
