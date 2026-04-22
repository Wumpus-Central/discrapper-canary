n.d(t, { A: () => et });
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
    A = n(834730),
    _ = n(194261),
    m = n(312138),
    g = n(475825),
    p = n(177953),
    f = n(534514),
    E = n(442433),
    x = n(414798),
    I = n(775602),
    C = n(793574),
    b = n(688810),
    N = n(449582),
    S = n(485947),
    v = n(509536),
    T = n(201275),
    y = n(657048),
    R = n(561010),
    j = n(219065),
    L = n(342296),
    O = n(616356),
    G = n(696451),
    D = n(317525),
    M = n(290863),
    U = n(461213),
    P = n(741961),
    w = n(287809),
    k = n(303727),
    V = n(954571),
    B = n(203982),
    H = n(488926),
    F = n(427262),
    W = n(837921),
    Y = n(110574),
    K = n(652215),
    z = n(985018),
    q = n(784503),
    X = n(540808);
let Q = W.Ay.getEnableHardwareAcceleration(),
    J = 44 + Y.b,
    Z = l.memo(function (e) {
        let { channel: t, sectionId: s, userId: a, guildOwnerId: r } = e,
            o = l.useRef(null),
            c = (0, h.bG)([P.A], () => P.A.isTyping(t.id, a)),
            A = (0, h.bG)([G.Ay], () => G.Ay.getMember(t.guild_id, a)),
            _ = (0, h.bG)(
                [D.A],
                () => (A?.colorRoleId != null ? D.A.getRole(t.guild_id, A.colorRoleId)?.name : void 0),
                [t.guild_id, A],
            ),
            m = (0, h.bG)([w.default], () => w.default.getUser(a)),
            g = (0, h.bG)([w.default], () => w.default.getCurrentUser()),
            p = m?.id === g?.id,
            f = (0, h.bG)([M.A, U.A], () => (p ? U.A.getStatus() : M.A.getStatus(a, t.guild_id))),
            I = (0, h.bG)([M.A], () => M.A.isMobileOnline(a)),
            C = (0, h.yK)([M.A, U.A], () => (p ? U.A.getActivities() : M.A.getActivities(a, t.guild_id))),
            b = (0, h.bG)([O.A], () => O.A.getAnyStreamForUser(a)),
            S = (0, d.rm)(a),
            T = (0, h.bG)([j.A], () => j.A.canUserViewChannel(t.id, s, a)),
            y = m?.id != null && m.id === r,
            R = l.useCallback(
                (e) => {
                    null != m &&
                        (0, E.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("43840")]).then(
                                n.bind(n, 708202),
                            );
                            return (n) => (0, i.jsx)(e, { ...n, user: m, guildId: t.guild_id, channel: t });
                        });
                },
                [m, t],
            ),
            k = l.useCallback(() => {
                if (null == m) return;
                let e = `@${F.Ay.getUserTag(m, { decoration: "never" })}`,
                    n = `<@${m.id}>`;
                B._.dispatch(K.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    B._.dispatchToLastSubscribed(K.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    x.A.startTyping(t.id);
            }, [m, t]),
            V = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, v.K4)({
                            guildId: t.guild_id,
                            location: { section: K.JJy.THREAD_MEMBER_LIST, object: K.ZSU.BOOST_GEM_ICON },
                        });
                },
                [t.guild_id],
            ),
            H = (0, N.r)({ user: m, guildId: t.guild_id }),
            [W, q] = l.useState(!1);
        if (null == m) return null;
        let X = A?.premiumSince;
        return (0, i.jsx)(L.A, {
            targetElementRef: o,
            user: m,
            guildId: t.guild_id,
            channelId: t.id,
            position: u.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: k,
            shouldShow: W,
            onRequestClose: () => q(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: l, ...s } = e;
                return (0, i.jsx)(Y.A, {
                    ref: o,
                    onContextMenu: R,
                    shouldAnimateStatus: Q,
                    user: m,
                    currentUser: g,
                    nick: A?.nick,
                    status: f,
                    activities: C,
                    colorString: A?.colorString,
                    colorStrings: A?.colorStrings,
                    colorRoleName: _,
                    isTyping: c,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: I,
                    selected: W,
                    applicationStream: b,
                    premiumSince: null == X ? null : new Date(X),
                    onClickPremiumGuildIcon: V,
                    itemProps: S,
                    lostPermissionTooltipText: T ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: y,
                    nameplate: H,
                    onClick: (e) => {
                        e.shiftKey ? k?.() : q((e) => !e);
                    },
                    onMouseDown: (e) => {
                        W ? e.stopPropagation() : l?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    $ = l.memo(function (e) {
        let { id: t, label: n, count: l, guildId: s } = e,
            a = (0, T.$7)({ roleId: t, guildId: s, size: 16 });
        return t === K.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: X.lL, children: (0, i.jsx)("div", { className: X.k1 }) })
            : (0, i.jsxs)(S.A, {
                  className: X.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: n, count: l }),
                  children: [
                      null != a ? (0, i.jsx)(y.A, { className: X.UT, ...a }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", l] }),
                  ],
              });
    }),
    ee = l.memo(function (e) {
        let { channel: t } = e;
        return t.type === K.rbe.PRIVATE_THREAD
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: q.yF }),
                      (0, i.jsxs)(A.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: q.Uz,
                          children: [
                              (0, i.jsx)(_.X, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              z.intl.string(z.t.BTLTAs),
                          ],
                      }),
                      (0, i.jsx)(A.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: q.GA,
                          children: z.intl.string(z.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function et(e) {
    var t, n;
    let s,
        r,
        u,
        A,
        _,
        { channel: p, guild: f } = e,
        E = `members-${p.id}`,
        { analyticsLocations: x } = (0, b.Ay)(C.A.MEMBER_LIST),
        N = (0, R.q)(p.id, f),
        S = N.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: v, listRef: T } =
            ((t = E),
            (n = J),
            (s = (0, h.bG)([I.A], () => I.A.keyboardModeEnabled)),
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
            (A = l.useCallback(
                () =>
                    new Promise((e) => {
                        let t = r.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (_ = l.useCallback(
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
                navigator: (0, c.Ay)({ id: t, setFocus: u, isEnabled: s, scrollToStart: A, scrollToEnd: _ }),
                listRef: r,
            }),
        y = 0 === N.length || N.every((e) => 0 === e.userIds.length);
    if (
        (l.useEffect(() => {
            V.default.track(K.HAw.MEMBER_LIST_VIEWED, { channel_id: p.id, channel_type: p.type, guild_id: p.guild_id });
        }, [p.guild_id, p.id, p.type]),
        y)
    )
        return (0, i.jsx)(en, { channel: p });
    let j = o().omit(v.containerProps, ["ref"]),
        L = H.wT(f);
    return (0, i.jsx)(b.f5, {
        value: x,
        children: (0, i.jsx)(d.hD, {
            navigator: v,
            children: (0, i.jsx)(m.sk, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: a()(X.yg, X.ML, q.kL),
                        children: (0, i.jsx)(
                            g.OZ,
                            {
                                ref: T,
                                className: X.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = N[t];
                                    return (0, i.jsx)(
                                        $,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: f.id },
                                        n.id,
                                    );
                                },
                                rowHeight: J,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: l, id: s } = N[t];
                                    return (0, i.jsx)(
                                        Z,
                                        { channel: p, sectionId: s, userId: l[n], guildOwnerId: L },
                                        l[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (N[e] === S && p.type === K.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    N[e.section] === S ? (0, i.jsx)(ee, { channel: p }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: N.map((e) => e.userIds.length),
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
function en(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: a()(q.p$, q.kL, X.yg, X.ML, X.ol),
        children: [
            (0, i.jsx)(A.E, {
                className: q.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: z.intl.string(z.t["9Oq93m"]),
            }),
            (0, i.jsxs)("div", {
                className: q.hs,
                children: [
                    (0, i.jsx)("div", {
                        className: q.AI,
                        children: (0, i.jsx)(p.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, i.jsx)(k.A, { className: q.WA }),
                ],
            }),
            (0, i.jsx)(f.D, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
            }),
            (0, i.jsx)(A.E, {
                className: q.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: z.intl.string(z.t.emw8UP),
            }),
        ],
    });
}
