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
    A = n(609425),
    f = n(922301),
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
    w = n(742466);
let F = i.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, R.A)(),
        [l, r] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = n.setInterval(() => r(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (l - t) / 1e3);
    return (0, m.fU)(s);
});
F.displayName = "OverlayElapsedTime";
let L = i.memo(function () {
    let e = (0, R.A)(),
        [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, a.bG)([T.A], () => T.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, m.fU)(l / 1e3);
});
function b(e) {
    var t;
    let n,
        { currentUser: r, activity: s, currentGameName: d } = e,
        m = r?.id ?? null,
        T = (0, A.A)({ userId: m, guildId: null }),
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
        b =
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
                })({ activityLabel: b, activityStartTimestampMs: k, voiceCallName: D, customStatusActivity: U }),
            [b, k, D, U],
        );
    if (null == r) return null;
    let j =
            null == r.banner
                ? null
                : ((0, v.z)({ id: r.id, banner: r.banner, canAnimate: S.kt.getSetting(), size: 600 }) ?? null),
        V = r.globalName ?? r.username;
    return (0, l.jsxs)("div", {
        className: w.cI,
        children: [
            (0, l.jsx)("div", { className: w.CK, style: { backgroundImage: null != j ? `url(${j})` : void 0 } }),
            (0, l.jsxs)("div", {
                className: w.vK,
                children: [
                    (0, l.jsxs)("div", {
                        className: w.iy,
                        children: [
                            (0, l.jsx)(o.A, { user: r, isMobile: _, status: y, className: w.my, size: u._3J.SIZE_40 }),
                            (0, l.jsxs)("div", {
                                className: w.ic,
                                children: [
                                    (0, l.jsx)(E.A, {
                                        userName: V,
                                        textClassName: w.Xh,
                                        displayNameStyles: T,
                                        effectDisplayType: f.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (P.type) {
                                            case "activity":
                                                return (0, l.jsxs)("div", {
                                                    className: w.nU,
                                                    children: [
                                                        (0, l.jsx)(u._xR, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: w.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: w.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, l.jsxs)("div", {
                                                    className: w.nU,
                                                    children: [
                                                        (0, l.jsx)(u.HKD, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: w.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: w.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, l.jsx)("div", {
                                                    className: w.nU,
                                                    children: (0, l.jsx)(I.A, {
                                                        activity: P.customStatusActivity,
                                                        className: w.tR,
                                                        emojiClassName: w.qp,
                                                        textClassName: w.Yg,
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
                                  className: w.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, l.jsx)(F, { startTimestampMs: P.startTimestampMs }),
                              })
                        : "voice_call" === P.type
                          ? null == x
                              ? null
                              : (0, l.jsx)(u.Text, {
                                    className: w.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, l.jsx)(L, {}),
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
        A = i.useMemo(() => ({ [D.x.FRIENDS]: o, [D.x.MESSAGES]: c, [D.x.VOICE]: h }), [o, c, h]),
        f = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        E = i.useMemo(() => ({ [D.x.FRIENDS]: !f && g, [D.x.MESSAGES]: !f && I, [D.x.VOICE]: !1 }), [f, g, I]);
    return (0, l.jsxs)("div", {
        className: w.kL,
        children: [
            (0, l.jsx)(b, { currentUser: t, activity: n, currentGameName: r }),
            (0, l.jsx)("div", {
                className: w.vR,
                role: "tablist",
                "aria-label": G.intl.string(G.t.TdEu5X),
                children: [
                    { id: D.x.FRIENDS, label: G.t.TdEu5X },
                    { id: D.x.MESSAGES, label: G.t.OIgYlQ },
                    { id: D.x.VOICE, label: G.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        i = !0 === A[t],
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
        c = r ? s()(w.OD, a && w.S) : null;
    return (0, l.jsxs)(u.DUT, {
        role: "tab",
        "aria-selected": i,
        className: s()(w.Mf, i && w.jP, d),
        onClick: () => o(t),
        children: [
            null != c ? (0, l.jsx)("span", { className: c, "aria-hidden": !0 }) : null,
            (0, l.jsx)(u.Text, { variant: "text-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
L.displayName = "OverlayVoiceCallElapsedTime";
