n.d(t, { b: () => k });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    u = n(397927),
    o = n(730134),
    d = n(775602),
    c = n(566903),
    h = n(47167),
    g = n(410540),
    I = n(302223),
    f = n(609425),
    A = n(922301),
    E = n(750112),
    m = n(853390),
    S = n(253932),
    p = n(734057),
    N = n(290863),
    T = n(383501),
    _ = n(222823),
    C = n(309010),
    y = n(741961),
    x = n(287809),
    M = n(977997),
    v = n(486020),
    D = n(914853),
    R = n(545807),
    U = n(406595),
    O = n(652215),
    G = n(985018),
    b = n(742466);
let w = i.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, R.A)(),
        [l, r] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = n.setInterval(() => r(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (l - t) / 1e3);
    return (0, m.f)(s);
});
w.displayName = "OverlayElapsedTime";
let F = i.memo(function () {
    let e = (0, R.A)(),
        [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, a.bG)([T.A], () => T.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, m.f)(l / 1e3);
});
function L(e) {
    var t;
    let n,
        { currentUser: r, activity: s, currentGameName: d } = e,
        m = r?.id ?? null,
        T = (0, f.A)({ userId: m, guildId: null }),
        { isMobileOnline: _, status: y } = (0, a.cf)(
            [N.A],
            () =>
                null == m
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: N.A.isMobileOnline(m), status: N.A.getStatus(m) },
            [m],
        ),
        x = (0, a.bG)([C.A], () => C.A.getVoiceChannelId()),
        M = (0, a.bG)([p.A], () => (null != x ? p.A.getChannel(x) : null), [x]),
        D = (0, h.Ay)(M),
        R = (0, g.A)(m ?? "0") ?? null,
        U = null != m ? R : null,
        L =
            null == (n = (0, c.A)(s, !0).text ?? d)
                ? null
                : s?.type === O.$pd.PLAYING || null == s
                  ? G.intl.formatToPlainString(G.t.lFApmz, { game: n })
                  : n,
        k = s?.timestamps?.start != null ? ((t = s.timestamps.start) < 1e12 ? 1e3 * t : t) : null,
        P = i.useMemo(
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
                })({ activityLabel: L, activityStartTimestampMs: k, voiceCallName: D, customStatusActivity: U }),
            [L, k, D, U],
        );
    if (null == r) return null;
    let j =
            null == r.banner
                ? null
                : ((0, v.z)({ id: r.id, banner: r.banner, canAnimate: S.kt.getSetting(), size: 600 }) ?? null),
        V = r.globalName ?? r.username;
    return (0, l.jsxs)("div", {
        className: b.cI,
        children: [
            (0, l.jsx)("div", { className: b.CK, style: { backgroundImage: null != j ? `url(${j})` : void 0 } }),
            (0, l.jsxs)("div", {
                className: b.vK,
                children: [
                    (0, l.jsxs)("div", {
                        className: b.iy,
                        children: [
                            (0, l.jsx)(o.A, { user: r, isMobile: _, status: y, className: b.my, size: u._3J.SIZE_40 }),
                            (0, l.jsxs)("div", {
                                className: b.ic,
                                children: [
                                    (0, l.jsx)(E.A, {
                                        userName: V,
                                        textClassName: b.Xh,
                                        displayNameStyles: T,
                                        effectDisplayType: A.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (P.type) {
                                            case "activity":
                                                return (0, l.jsxs)("div", {
                                                    className: b.nU,
                                                    children: [
                                                        (0, l.jsx)(u._xR, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: b.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: b.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, l.jsxs)("div", {
                                                    className: b.nU,
                                                    children: [
                                                        (0, l.jsx)(u.HKD, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: b.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: b.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, l.jsx)("div", {
                                                    className: b.nU,
                                                    children: (0, l.jsx)(I.A, {
                                                        activity: P.customStatusActivity,
                                                        className: b.tR,
                                                        emojiClassName: b.qp,
                                                        textClassName: b.Yg,
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
                    "activity" === P.type
                        ? null == P.startTimestampMs
                            ? null
                            : (0, l.jsx)(u.Text, {
                                  className: b.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, l.jsx)(w, { startTimestampMs: P.startTimestampMs }),
                              })
                        : "voice_call" === P.type
                          ? null == x
                              ? null
                              : (0, l.jsx)(u.Text, {
                                    className: b.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, l.jsx)(F, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}
function k(e) {
    let { currentUser: t, activity: n, currentGameName: r, activeTab: s, onTabChange: u } = e,
        {
            friendsHasUnreadFavorites: o,
            messagesHasUnreadFavorites: c,
            voiceHasActiveFavorites: h,
            friendsHasTypingInFavorites: g,
            messagesHasTypingInFavorites: I,
        } = (0, a.cf)([U.A, _.Ay, p.A, M.A, y.A, x.default], () => {
            let e = x.default.getCurrentUser()?.id ?? null,
                [t] = U.A.getFavoriteTargetIdsForTab(D.x.FRIENDS),
                [n] = U.A.getFavoriteTargetIdsForTab(D.x.MESSAGES),
                [l] = U.A.getFavoriteTargetIdsForTab(D.x.VOICE),
                i = (e) => _.Ay.hasUnread(e) || _.Ay.getMentionCount(e) > 0,
                r = (t) => {
                    let n = y.A.getTypingUsers(t);
                    for (let t in n) if (t !== e) return !0;
                    return !1;
                },
                s = (e) => p.A.getDMFromUserId(e) ?? null,
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
                    let t = M.A.getVoiceStatesForChannel(e);
                    for (let e in t) return !0;
                    return !1;
                }),
                friendsHasTypingInFavorites: u,
                messagesHasTypingInFavorites: d,
            };
        }, []),
        f = i.useMemo(() => ({ [D.x.FRIENDS]: o, [D.x.MESSAGES]: c, [D.x.VOICE]: h }), [o, c, h]),
        A = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        E = i.useMemo(() => ({ [D.x.FRIENDS]: !A && g, [D.x.MESSAGES]: !A && I, [D.x.VOICE]: !1 }), [A, g, I]);
    return (0, l.jsxs)("div", {
        className: b.kL,
        children: [
            (0, l.jsx)(L, { currentUser: t, activity: n, currentGameName: r }),
            (0, l.jsx)("div", {
                className: b.vR,
                role: "tablist",
                "aria-label": G.intl.string(G.t.TdEu5X),
                children: [
                    { id: D.x.FRIENDS, label: G.t.TdEu5X },
                    { id: D.x.MESSAGES, label: G.t.OIgYlQ },
                    { id: D.x.VOICE, label: G.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        i = !0 === f[t],
                        r = !0 === E[t];
                    return (0, l.jsx)(
                        P,
                        {
                            tab: t,
                            label: G.intl.formatToPlainString(n, {}),
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
function P(e) {
    let {
            tab: t,
            label: n,
            selected: i,
            shouldShowCutoutDot: r = !1,
            shouldPulseDot: a = !1,
            onSelect: o,
            className: d,
        } = e,
        c = r ? s()(b.OD, a && b.S) : null;
    return (0, l.jsxs)(u.DUT, {
        role: "tab",
        "aria-selected": i,
        className: s()(b.Mf, i && b.jP, d),
        onClick: () => o(t),
        children: [
            null != c ? (0, l.jsx)("span", { className: c, "aria-hidden": !0 }) : null,
            (0, l.jsx)(u.Text, { variant: "text-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
F.displayName = "OverlayVoiceCallElapsedTime";
