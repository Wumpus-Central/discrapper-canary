n.d(t, { A: () => J });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    d = n(884362),
    u = n(607399),
    h = n(311907),
    A = n(397927),
    _ = n(442433),
    m = n(414798),
    g = n(775602),
    p = n(793574),
    f = n(688810),
    x = n(449582),
    E = n(485947),
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
    K = n(922936);
let W = w.Ay.getEnableHardwareAcceleration(),
    Y = 44 + B.b,
    z = l.memo(function (e) {
        let { channel: t, sectionId: s, userId: a, guildOwnerId: r } = e,
            o = l.useRef(null),
            d = (0, h.bG)([L.A], () => L.A.isTyping(t.id, a)),
            A = (0, h.bG)([v.Ay], () => v.Ay.getMember(t.guild_id, a)),
            g = (0, h.bG)(
                [j.A],
                () => (A?.colorRoleId != null ? j.A.getRole(t.guild_id, A.colorRoleId)?.name : void 0),
                [t.guild_id, A],
            ),
            p = (0, h.bG)([M.default], () => M.default.getUser(a)),
            f = (0, h.bG)([M.default], () => M.default.getCurrentUser()),
            E = p?.id === f?.id,
            C = (0, h.bG)([R.A, O.A], () => (E ? O.A.getStatus() : R.A.getStatus(a, t.guild_id))),
            N = (0, h.bG)([R.A], () => R.A.isMobileOnline(a)),
            T = (0, h.bG)([R.A, O.A], () => (E ? O.A.getActivities() : R.A.getActivities(a, t.guild_id))),
            D = (0, h.bG)([y.A], () => y.A.getAnyStreamForUser(a)),
            U = (0, c.rm)(a),
            P = (0, h.bG)([S.A], () => S.A.canUserViewChannel(t.id, s, a)),
            w = p?.id != null && p.id === r,
            F = l.useCallback(
                (e) => {
                    null != p &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("87340")]).then(
                                n.bind(n, 708202),
                            );
                            return (n) => (0, i.jsx)(e, { ...n, user: p, guildId: t.guild_id, channel: t });
                        });
                },
                [p, t],
            ),
            K = l.useCallback(() => {
                if (null == p) return;
                let e = `@${k.Ay.getUserTag(p, { decoration: "never" })}`,
                    n = `<@${p.id}>`;
                G._.dispatch(V.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    G._.dispatchToLastSubscribed(V.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    m.A.startTyping(t.id);
            }, [p, t]),
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
            z = (0, x.r)({ user: p, guildId: t.guild_id }),
            [q, X] = l.useState(!1);
        if (null == p) return null;
        let J = A?.premiumSince;
        return (0, i.jsx)(b.A, {
            targetElementRef: o,
            user: p,
            guildId: t.guild_id,
            channelId: t.id,
            position: u.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: K,
            shouldShow: q,
            onRequestClose: () => X(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: l, ...s } = e;
                return (0, i.jsx)(B.A, {
                    ref: o,
                    onContextMenu: F,
                    shouldAnimateStatus: W,
                    user: p,
                    currentUser: f,
                    nick: A?.nick,
                    status: C,
                    activities: T,
                    colorString: A?.colorString,
                    colorStrings: A?.colorStrings,
                    colorRoleName: g,
                    isTyping: d,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: N,
                    selected: q,
                    applicationStream: D,
                    premiumSince: null == J ? null : new Date(J),
                    onClickPremiumGuildIcon: Y,
                    itemProps: U,
                    lostPermissionTooltipText: P ? void 0 : H.intl.string(H.t["/QcoTz"]),
                    isOwner: w,
                    nameplate: z,
                    onClick: (e) => {
                        e.shiftKey ? K?.() : X((e) => !e);
                    },
                    onMouseDown: (e) => {
                        q ? e.stopPropagation() : l?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    q = l.memo(function (e) {
        let { id: t, label: n, count: l, guildId: s } = e,
            a = (0, C.$7)({ roleId: t, guildId: s, size: 16 });
        return t === V.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: K.lL, children: (0, i.jsx)("div", { className: K.k1 }) })
            : (0, i.jsxs)(E.A, {
                  className: K.lL,
                  "aria-label": H.intl.formatToPlainString(H.t.Uaqbke, { title: n, count: l }),
                  children: [
                      null != a ? (0, i.jsx)(N.A, { className: K.UT, ...a }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", l] }),
                  ],
              });
    }),
    X = l.memo(function (e) {
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
function J(e) {
    var t, n;
    let s,
        r,
        u,
        _,
        m,
        { channel: x, guild: E } = e,
        I = `members-${x.id}`,
        { analyticsLocations: C } = (0, f.Ay)(p.A.MEMBER_LIST),
        N = (0, T.q)(x.id, E),
        S = N.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: b, listRef: y } =
            ((t = I),
            (n = Y),
            (s = (0, h.bG)([g.A], () => g.A.keyboardModeEnabled)),
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
                navigator: (0, d.Ay)({ id: t, setFocus: u, isEnabled: s, scrollToStart: _, scrollToEnd: m }),
                listRef: r,
            }),
        v = 0 === N.length || N.every((e) => 0 === e.userIds.length);
    if (
        (l.useEffect(() => {
            U.default.track(V.HAw.MEMBER_LIST_VIEWED, { channel_id: x.id, channel_type: x.type, guild_id: x.guild_id });
        }, [x.guild_id, x.id, x.type]),
        v)
    )
        return (0, i.jsx)(Q, { channel: x });
    let j = o().omit(b.containerProps, ["ref"]),
        R = P.wT(E);
    return (0, i.jsx)(f.f5, {
        value: C,
        children: (0, i.jsx)(c.hD, {
            navigator: b,
            children: (0, i.jsx)(A.skg, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: a()(K.yg, K.ML, F.kL),
                        children: (0, i.jsx)(
                            A.B8B,
                            {
                                ref: y,
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
                                        { userIds: l, id: s } = N[t];
                                    return (0, i.jsx)(
                                        z,
                                        { channel: x, sectionId: s, userId: l[n], guildOwnerId: R },
                                        l[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (N[e] === S && x.type === V.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    N[e.section] === S ? (0, i.jsx)(X, { channel: x }, "footer") : null,
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
