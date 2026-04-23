n.d(t, { b: () => K });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    u = n(834730),
    o = n(687966),
    d = n(983851),
    c = n(778712),
    h = n(939249),
    g = n(730134),
    m = n(775602),
    I = n(566903),
    E = n(47167),
    A = n(410540),
    f = n(302223),
    p = n(609425),
    S = n(922301),
    N = n(750112),
    x = n(853390),
    T = n(253932),
    _ = n(734057),
    y = n(290863),
    v = n(383501),
    C = n(222823),
    R = n(309010),
    D = n(741961),
    b = n(287809),
    j = n(977997),
    M = n(486020),
    k = n(427262),
    O = n(914853),
    w = n(589051),
    L = n(545807),
    F = n(406595),
    G = n(652215),
    U = n(985018),
    P = n(340281);
let V = i.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, L.A)(),
        [l, r] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = n.setInterval(() => r(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (l - t) / 1e3);
    return (0, x.fU)(s);
});
V.displayName = "OverlayElapsedTime";
let H = i.memo(function () {
    let e = (0, L.A)(),
        [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, a.bG)([v.A], () => v.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, x.fU)(l / 1e3);
});
function Y(e) {
    var t;
    let n,
        { currentUser: r, activity: s, currentGameName: h } = e,
        m = r?.id ?? null,
        x = (0, w.Mn)("UserActivityBanner"),
        v = (0, k.tx)(r),
        C = x ? v : (r?.globalName ?? r?.username),
        D = (0, p.A)({ userId: m, guildId: null }),
        { isMobileOnline: b, status: j } = (0, a.cf)(
            [y.A],
            () =>
                null == m
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: y.A.isMobileOnline(m), status: y.A.getStatus(m) },
            [m],
        ),
        O = (0, a.bG)([R.A], () => R.A.getVoiceChannelId()),
        L = (0, a.bG)([_.A], () => (null != O ? _.A.getChannel(O) : null), [O]),
        F = (0, E.Ay)(L),
        Y = (0, A.A)(m ?? "0") ?? null,
        K = null != m ? Y : null,
        z =
            null == (n = (0, I.A)(s, !0).text ?? h)
                ? null
                : s?.type === G.$pd.PLAYING || null == s
                  ? U.intl.formatToPlainString(U.t.lFApmz, { game: n })
                  : n,
        X = s?.timestamps?.start != null ? ((t = s.timestamps.start) < 1e12 ? 1e3 * t : t) : null,
        Z = i.useMemo(
            () =>
                (function (e) {
                    let {
                        activityLabel: t,
                        activityStartTimestampMs: n,
                        voiceCallName: l,
                        customStatusActivity: i,
                    } = e;
                    return null != t
                        ? { type: "activity", label: t, startTimestampMs: n }
                        : null != l
                          ? { type: "voice_call", label: l }
                          : null != i
                            ? { type: "custom_status", customStatusActivity: i }
                            : { type: "none" };
                })({ activityLabel: z, activityStartTimestampMs: X, voiceCallName: F, customStatusActivity: K }),
            [z, X, F, K],
        );
    if (null == r) return null;
    let B =
        null == r.banner
            ? null
            : ((0, M.z)({ id: r.id, banner: r.banner, canAnimate: T.kt.getSetting(), size: 600 }) ?? null);
    return (0, l.jsxs)("div", {
        className: P.cI,
        children: [
            (0, l.jsx)("div", { className: P.CK, style: { backgroundImage: null != B ? `url(${B})` : void 0 } }),
            (0, l.jsxs)("div", {
                className: P.vK,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.iy,
                        children: [
                            (0, l.jsx)(g.A, { user: r, isMobile: b, status: j, className: P.my, size: c._3.SIZE_40 }),
                            (0, l.jsxs)("div", {
                                className: P.ic,
                                children: [
                                    (0, l.jsx)(N.A, {
                                        userName: C,
                                        textClassName: P.Xh,
                                        displayNameStyles: D,
                                        effectDisplayType: S.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (Z.type) {
                                            case "activity":
                                                return (0, l.jsxs)("div", {
                                                    className: P.nU,
                                                    children: [
                                                        (0, l.jsx)(o._, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: P.Wo,
                                                        }),
                                                        (0, l.jsx)(u.E, {
                                                            className: P.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: Z.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, l.jsxs)("div", {
                                                    className: P.nU,
                                                    children: [
                                                        (0, l.jsx)(d.H, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: P.Wo,
                                                        }),
                                                        (0, l.jsx)(u.E, {
                                                            className: P.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: Z.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, l.jsx)("div", {
                                                    className: P.nU,
                                                    children: (0, l.jsx)(f.A, {
                                                        activity: Z.customStatusActivity,
                                                        className: P.tR,
                                                        emojiClassName: P.qp,
                                                        textClassName: P.Yg,
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
                    "activity" === Z.type
                        ? null == Z.startTimestampMs
                            ? null
                            : (0, l.jsx)(u.E, {
                                  className: P.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, l.jsx)(V, { startTimestampMs: Z.startTimestampMs }),
                              })
                        : "voice_call" === Z.type
                          ? null == O
                              ? null
                              : (0, l.jsx)(u.E, {
                                    className: P.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, l.jsx)(H, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}
function K(e) {
    let { currentUser: t, activity: n, currentGameName: r, activeTab: s, onTabChange: u } = e,
        {
            friendsHasUnreadFavorites: o,
            messagesHasUnreadFavorites: d,
            voiceHasActiveFavorites: c,
            friendsHasTypingInFavorites: h,
            messagesHasTypingInFavorites: g,
        } = (0, a.cf)([F.A, C.Ay, _.A, j.A, D.A, b.default], () => {
            let e = b.default.getCurrentUser()?.id ?? null,
                [t] = F.A.getFavoriteTargetIdsForTab(O.x.FRIENDS),
                [n] = F.A.getFavoriteTargetIdsForTab(O.x.MESSAGES),
                [l] = F.A.getFavoriteTargetIdsForTab(O.x.VOICE),
                i = (e) => C.Ay.hasUnread(e) || C.Ay.getMentionCount(e) > 0,
                r = (t) => {
                    let n = D.A.getTypingUsers(t);
                    for (let t in n) if (t !== e) return !0;
                    return !1;
                },
                s = (e) => _.A.getDMFromUserId(e) ?? null,
                a = t.some((e) => {
                    let t = s(e);
                    return null != t && i(t);
                }),
                u = t.some((e) => {
                    let t = s(e);
                    return null != t && r(t);
                }),
                o = n.some(i),
                d = n.some(r);
            return {
                friendsHasUnreadFavorites: a,
                messagesHasUnreadFavorites: o,
                voiceHasActiveFavorites: l.some((e) => {
                    let t = j.A.getVoiceStatesForChannel(e);
                    for (let e in t) return !0;
                    return !1;
                }),
                friendsHasTypingInFavorites: u,
                messagesHasTypingInFavorites: d,
            };
        }, []),
        I = i.useMemo(() => ({ [O.x.FRIENDS]: o, [O.x.MESSAGES]: d, [O.x.VOICE]: c }), [o, d, c]),
        E = (0, a.bG)([m.A], () => m.A.useReducedMotion),
        A = i.useMemo(() => ({ [O.x.FRIENDS]: !E && h, [O.x.MESSAGES]: !E && g, [O.x.VOICE]: !1 }), [E, h, g]);
    return (0, l.jsxs)("div", {
        className: P.kL,
        children: [
            (0, l.jsx)(Y, { currentUser: t, activity: n, currentGameName: r }),
            (0, l.jsx)("div", {
                className: P.vR,
                role: "tablist",
                "aria-label": U.intl.string(U.t.TdEu5X),
                children: [
                    { id: O.x.FRIENDS, label: U.t.TdEu5X },
                    { id: O.x.MESSAGES, label: U.t.OIgYlQ },
                    { id: O.x.VOICE, label: U.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        i = !0 === I[t],
                        r = !0 === A[t];
                    return (0, l.jsx)(
                        z,
                        {
                            tab: t,
                            label: U.intl.formatToPlainString(n, {}),
                            selected: s === t,
                            shouldShowCutoutDot: i,
                            shouldPulseDot: r,
                            onSelect: u,
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function z(e) {
    let {
            tab: t,
            label: n,
            selected: i,
            shouldShowCutoutDot: r = !1,
            shouldPulseDot: a = !1,
            onSelect: o,
            className: d,
        } = e,
        c = r ? s()(P.OD, a && P.S) : null;
    return (0, l.jsxs)(h.D, {
        role: "tab",
        "aria-selected": i,
        className: s()(P.Mf, i && P.jP, d),
        onClick: () => o(t),
        children: [
            null != c ? (0, l.jsx)("span", { className: c, "aria-hidden": !0 }) : null,
            (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
H.displayName = "OverlayVoiceCallElapsedTime";
