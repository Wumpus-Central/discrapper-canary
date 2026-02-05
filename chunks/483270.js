n.d(t, { A: () => J });
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
    g = n(442433),
    m = n(414798),
    p = n(775602),
    _ = n(793574),
    x = n(688810),
    f = n(485947),
    E = n(509536),
    C = n(201275),
    I = n(111864),
    S = n(657048),
    b = n(561010),
    N = n(441446),
    T = n(342296),
    j = n(616356),
    v = n(696451),
    y = n(317525),
    R = n(290863),
    O = n(461213),
    L = n(741961),
    D = n(287809),
    M = n(303727),
    G = n(954571),
    U = n(203982),
    P = n(488926),
    k = n(427262),
    w = n(837921),
    V = n(110574),
    B = n(652215),
    H = n(985018),
    F = n(767952),
    Y = n(701939);
let W = w.Ay.getEnableHardwareAcceleration(),
    K = 44 + V.b,
    z = l.memo(function (e) {
        let { channel: t, sectionId: s, userId: a, guildOwnerId: r } = e,
            o = l.useRef(null),
            c = (0, h.bG)([L.A], () => L.A.isTyping(t.id, a)),
            A = (0, h.bG)([v.Ay], () => v.Ay.getMember(t.guild_id, a)),
            p = (0, h.bG)(
                [y.A],
                () => (A?.colorRoleId != null ? y.A.getRole(t.guild_id, A.colorRoleId)?.name : void 0),
                [t.guild_id, A],
            ),
            _ = (0, h.bG)([D.default], () => D.default.getUser(a)),
            x = (0, h.bG)([D.default], () => D.default.getCurrentUser()),
            f = _?.id === x?.id,
            C = (0, h.bG)([R.A, O.A], () => (f ? O.A.getStatus() : R.A.getStatus(a, t.guild_id))),
            S = (0, h.bG)([R.A], () => R.A.isMobileOnline(a)),
            b = (0, h.bG)([R.A, O.A], () => (f ? O.A.getActivities() : R.A.getActivities(a, t.guild_id))),
            M = (0, h.bG)([j.A], () => j.A.getAnyStreamForUser(a)),
            G = (0, d.rm)(a),
            P = (0, h.bG)([N.A], () => N.A.canUserViewChannel(t.id, s, a)),
            w = _?.id != null && _.id === r,
            F = l.useCallback(
                (e) => {
                    null != _ &&
                        (0, g.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("79961")]).then(
                                n.bind(n, 708202),
                            );
                            return (n) => (0, i.jsx)(e, { ...n, user: _, guildId: t.guild_id, channel: t });
                        });
                },
                [_, t],
            ),
            Y = l.useCallback(() => {
                if (null == _) return;
                let e = `@${k.Ay.getUserTag(_, { decoration: "never" })}`,
                    n = `<@${_.id}>`;
                U._.dispatch(B.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    U._.dispatchToLastSubscribed(B.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    m.A.startTyping(t.id);
            }, [_, t]),
            K = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, E.K)({
                            guildId: t.guild_id,
                            location: { section: B.JJy.THREAD_MEMBER_LIST, object: B.ZSU.BOOST_GEM_ICON },
                        });
                },
                [t.guild_id],
            ),
            z = (0, I.r)({ user: _, guildId: t.guild_id }),
            [X, q] = l.useState(!1);
        if (null == _) return null;
        let J = A?.premiumSince;
        return (0, i.jsx)(T.A, {
            targetElementRef: o,
            user: _,
            guildId: t.guild_id,
            channelId: t.id,
            position: u.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: Y,
            shouldShow: X,
            onRequestClose: () => q(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: l, ...s } = e;
                return (0, i.jsx)(V.A, {
                    ref: o,
                    onContextMenu: F,
                    shouldAnimateStatus: W,
                    user: _,
                    currentUser: x,
                    nick: A?.nick,
                    status: C,
                    activities: b,
                    colorString: A?.colorString,
                    colorStrings: A?.colorStrings,
                    colorRoleName: p,
                    isTyping: c,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: S,
                    selected: X,
                    applicationStream: M,
                    premiumSince: null == J ? null : new Date(J),
                    onClickPremiumGuildIcon: K,
                    itemProps: G,
                    lostPermissionTooltipText: P ? void 0 : H.intl.string(H.t["/QcoTz"]),
                    isOwner: w,
                    nameplate: z,
                    onClick: (e) => {
                        e.shiftKey ? Y?.() : q((e) => !e);
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
        return t === B.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: Y.lL, children: (0, i.jsx)("div", { className: Y.k1 }) })
            : (0, i.jsxs)(f.A, {
                  className: Y.lL,
                  "aria-label": H.intl.formatToPlainString(H.t.Uaqbke, { title: n, count: l }),
                  children: [
                      null != a ? (0, i.jsx)(S.A, { className: Y.UT, ...a }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", l] }),
                  ],
              });
    }),
    q = l.memo(function (e) {
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
    let s,
        r,
        u,
        g,
        m,
        { channel: f, guild: E } = e,
        C = `members-${f.id}`,
        { analyticsLocations: I } = (0, x.Ay)(_.A.MEMBER_LIST),
        S = (0, b.q)(f.id, E),
        N = S.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: T, listRef: j } =
            ((t = C),
            (n = K),
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
            (g = l.useCallback(
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
                navigator: (0, c.Ay)({ id: t, setFocus: u, isEnabled: s, scrollToStart: g, scrollToEnd: m }),
                listRef: r,
            }),
        v = 0 === S.length || S.every((e) => 0 === e.userIds.length);
    if (
        (l.useEffect(() => {
            G.default.track(B.HAw.MEMBER_LIST_VIEWED, { channel_id: f.id, channel_type: f.type, guild_id: f.guild_id });
        }, [f.guild_id, f.id, f.type]),
        v)
    )
        return (0, i.jsx)(Q, { channel: f });
    let y = o().omit(T.containerProps, ["ref"]),
        R = P.wT(E);
    return (0, i.jsx)(x.f5, {
        value: I,
        children: (0, i.jsx)(d.hD, {
            navigator: T,
            children: (0, i.jsx)(A.skg, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: a()(Y.yg, Y.ML, F.kL),
                        children: (0, i.jsx)(
                            A.B8B,
                            {
                                ref: j,
                                className: Y.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = S[t];
                                    return (0, i.jsx)(
                                        X,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: E.id },
                                        n.id,
                                    );
                                },
                                rowHeight: K,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: l, id: s } = S[t];
                                    return (0, i.jsx)(
                                        z,
                                        { channel: f, sectionId: s, userId: l[n], guildOwnerId: R },
                                        l[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (S[e] === N && f.type === B.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    S[e.section] === N ? (0, i.jsx)(q, { channel: f }, "footer") : null,
                                innerAriaLabel: H.intl.string(H.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: S.map((e) => e.userIds.length),
                                fade: !0,
                                ...y,
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
        className: a()(F.p$, F.kL, Y.yg, Y.ML, Y.ol),
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
                    (0, i.jsx)(M.A, { className: F.WA }),
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
