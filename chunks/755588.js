n.d(t, { b: () => F });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(397927),
    u = n(730134),
    d = n(775602),
    c = n(566903),
    h = n(47167),
    g = n(410540),
    m = n(302223),
    f = n(609425),
    A = n(922301),
    I = n(750112),
    E = n(853390),
    p = n(253932),
    _ = n(734057),
    S = n(290863),
    x = n(383501),
    T = n(222823),
    N = n(309010),
    C = n(741961),
    v = n(287809),
    y = n(977997),
    M = n(486020),
    R = n(427262),
    D = n(914853),
    b = n(589051),
    O = n(545807),
    w = n(406595),
    j = n(652215),
    U = n(985018),
    L = n(385129);
let k = l.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, O.A)(),
        [i, r] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = n.setInterval(() => r(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (i - t) / 1e3);
    return (0, E.fU)(s);
});
k.displayName = "OverlayElapsedTime";
let G = l.memo(function () {
    let e = (0, O.A)(),
        [t, n] = l.useState(() => Date.now());
    l.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let i = (0, a.bG)([x.A], () => x.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, E.fU)(i / 1e3);
});
function P(e) {
    var t;
    let n,
        { currentUser: r, activity: s, currentGameName: d } = e,
        E = r?.id ?? null,
        x = (0, b.Mn)("UserActivityBanner"),
        T = (0, R.tx)(r),
        C = x ? T : (r?.globalName ?? r?.username),
        v = (0, f.A)({ userId: E, guildId: null }),
        { isMobileOnline: y, status: D } = (0, a.cf)(
            [S.A],
            () =>
                null == E
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: S.A.isMobileOnline(E), status: S.A.getStatus(E) },
            [E],
        ),
        O = (0, a.bG)([N.A], () => N.A.getVoiceChannelId()),
        w = (0, a.bG)([_.A], () => (null != O ? _.A.getChannel(O) : null), [O]),
        P = (0, h.Ay)(w),
        F = (0, g.A)(E ?? "0") ?? null,
        V = null != E ? F : null,
        z =
            null == (n = (0, c.A)(s, !0).text ?? d)
                ? null
                : s?.type === j.$pd.PLAYING || null == s
                  ? U.intl.formatToPlainString(U.t.lFApmz, { game: n })
                  : n,
        H = s?.timestamps?.start != null ? ((t = s.timestamps.start) < 1e12 ? 1e3 * t : t) : null,
        Y = l.useMemo(
            () =>
                (function (e) {
                    let {
                        activityLabel: t,
                        activityStartTimestampMs: n,
                        voiceCallName: i,
                        customStatusActivity: l,
                    } = e;
                    return null != t
                        ? { type: "activity", label: t, startTimestampMs: n }
                        : null != i
                          ? { type: "voice_call", label: i }
                          : null != l
                            ? { type: "custom_status", customStatusActivity: l }
                            : { type: "none" };
                })({ activityLabel: z, activityStartTimestampMs: H, voiceCallName: P, customStatusActivity: V }),
            [z, H, P, V],
        );
    if (null == r) return null;
    let W =
        null == r.banner
            ? null
            : ((0, M.z)({ id: r.id, banner: r.banner, canAnimate: p.kt.getSetting(), size: 600 }) ?? null);
    return (0, i.jsxs)("div", {
        className: L.cI,
        children: [
            (0, i.jsx)("div", { className: L.CK, style: { backgroundImage: null != W ? `url(${W})` : void 0 } }),
            (0, i.jsxs)("div", {
                className: L.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: L.iy,
                        children: [
                            (0, i.jsx)(u.A, { user: r, isMobile: y, status: D, className: L.my, size: o._3J.SIZE_40 }),
                            (0, i.jsxs)("div", {
                                className: L.ic,
                                children: [
                                    (0, i.jsx)(I.A, {
                                        userName: C,
                                        textClassName: L.Xh,
                                        displayNameStyles: v,
                                        effectDisplayType: A.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (Y.type) {
                                            case "activity":
                                                return (0, i.jsxs)("div", {
                                                    className: L.nU,
                                                    children: [
                                                        (0, i.jsx)(o._xR, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: L.Wo,
                                                        }),
                                                        (0, i.jsx)(o.Text, {
                                                            className: L.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: Y.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, i.jsxs)("div", {
                                                    className: L.nU,
                                                    children: [
                                                        (0, i.jsx)(o.HKD, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: L.Wo,
                                                        }),
                                                        (0, i.jsx)(o.Text, {
                                                            className: L.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: Y.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, i.jsx)("div", {
                                                    className: L.nU,
                                                    children: (0, i.jsx)(m.A, {
                                                        activity: Y.customStatusActivity,
                                                        className: L.tR,
                                                        emojiClassName: L.qp,
                                                        textClassName: L.Yg,
                                                        hideTooltip: !0,
                                                    }),
                                                });
                                            default:
                                                return null;
                                        }
                                    })(),
                                ],
                            }),
                        ],
                    }),
                    "activity" === Y.type
                        ? null == Y.startTimestampMs
                            ? null
                            : (0, i.jsx)(o.Text, {
                                  className: L.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, i.jsx)(k, { startTimestampMs: Y.startTimestampMs }),
                              })
                        : "voice_call" === Y.type
                          ? null == O
                              ? null
                              : (0, i.jsx)(o.Text, {
                                    className: L.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, i.jsx)(G, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}
function F(e) {
    let { currentUser: t, activity: n, currentGameName: r, activeTab: s, onTabChange: o } = e,
        {
            friendsHasUnreadFavorites: u,
            messagesHasUnreadFavorites: c,
            voiceHasActiveFavorites: h,
            friendsHasTypingInFavorites: g,
            messagesHasTypingInFavorites: m,
        } = (0, a.cf)([w.A, T.Ay, _.A, y.A, C.A, v.default], () => {
            let e = v.default.getCurrentUser()?.id ?? null,
                [t] = w.A.getFavoriteTargetIdsForTab(D.x.FRIENDS),
                [n] = w.A.getFavoriteTargetIdsForTab(D.x.MESSAGES),
                [i] = w.A.getFavoriteTargetIdsForTab(D.x.VOICE),
                l = (e) => T.Ay.hasUnread(e) || T.Ay.getMentionCount(e) > 0,
                r = (t) => {
                    let n = C.A.getTypingUsers(t);
                    for (let t in n) if (t !== e) return !0;
                    return !1;
                },
                s = (e) => _.A.getDMFromUserId(e) ?? null,
                a = t.some((e) => {
                    let t = s(e);
                    return null != t && l(t);
                }),
                o = t.some((e) => {
                    let t = s(e);
                    return null != t && r(t);
                }),
                u = n.some(l),
                d = n.some(r);
            return {
                friendsHasUnreadFavorites: a,
                messagesHasUnreadFavorites: u,
                voiceHasActiveFavorites: i.some((e) => {
                    let t = y.A.getVoiceStatesForChannel(e);
                    for (let e in t) return !0;
                    return !1;
                }),
                friendsHasTypingInFavorites: o,
                messagesHasTypingInFavorites: d,
            };
        }, []),
        f = l.useMemo(() => ({ [D.x.FRIENDS]: u, [D.x.MESSAGES]: c, [D.x.VOICE]: h }), [u, c, h]),
        A = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        I = l.useMemo(() => ({ [D.x.FRIENDS]: !A && g, [D.x.MESSAGES]: !A && m, [D.x.VOICE]: !1 }), [A, g, m]);
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            (0, i.jsx)(P, { currentUser: t, activity: n, currentGameName: r }),
            (0, i.jsx)("div", {
                className: L.vR,
                role: "tablist",
                "aria-label": U.intl.string(U.t.TdEu5X),
                children: [
                    { id: D.x.FRIENDS, label: U.t.TdEu5X },
                    { id: D.x.MESSAGES, label: U.t.OIgYlQ },
                    { id: D.x.VOICE, label: U.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        l = !0 === f[t],
                        r = !0 === I[t];
                    return (0, i.jsx)(
                        V,
                        {
                            tab: t,
                            label: U.intl.formatToPlainString(n, {}),
                            selected: s === t,
                            shouldShowCutoutDot: l,
                            shouldPulseDot: r,
                            onSelect: o,
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function V(e) {
    let {
            tab: t,
            label: n,
            selected: l,
            shouldShowCutoutDot: r = !1,
            shouldPulseDot: a = !1,
            onSelect: u,
            className: d,
        } = e,
        c = r ? s()(L.OD, a && L.S) : null;
    return (0, i.jsxs)(o.DUT, {
        role: "tab",
        "aria-selected": l,
        className: s()(L.Mf, l && L.jP, d),
        onClick: () => u(t),
        children: [
            null != c ? (0, i.jsx)("span", { className: c, "aria-hidden": !0 }) : null,
            (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
G.displayName = "OverlayVoiceCallElapsedTime";
