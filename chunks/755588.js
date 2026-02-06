n.d(t, { b: () => w });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    u = n(397927),
    o = n(730134),
    d = n(566903),
    c = n(47167),
    h = n(410540),
    g = n(302223),
    I = n(609425),
    f = n(922301),
    A = n(750112),
    E = n(853390),
    m = n(253932),
    S = n(734057),
    p = n(290863),
    N = n(383501),
    T = n(222823),
    _ = n(309010),
    C = n(977997),
    y = n(486020),
    x = n(914853),
    v = n(545807),
    M = n(406595),
    D = n(652215),
    R = n(985018),
    U = n(742466);
let O = i.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, v.A)(),
        [l, r] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = n.setInterval(() => r(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (l - t) / 1e3);
    return (0, E.f)(s);
});
O.displayName = "OverlayElapsedTime";
let G = i.memo(function () {
    let e = (0, v.A)(),
        [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, a.bG)([N.A], () => N.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, E.f)(l / 1e3);
});
function b(e) {
    var t;
    let n,
        { currentUser: r, activity: s, currentGameName: E } = e,
        N = r?.id ?? null,
        T = (0, I.A)({ userId: N, guildId: null }),
        { isMobileOnline: C, status: x } = (0, a.cf)(
            [p.A],
            () =>
                null == N
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: p.A.isMobileOnline(N), status: p.A.getStatus(N) },
            [N],
        ),
        v = (0, a.bG)([_.A], () => _.A.getVoiceChannelId()),
        M = (0, a.bG)([S.A], () => (null != v ? S.A.getChannel(v) : null), [v]),
        b = (0, c.Ay)(M),
        w = (0, h.A)(N ?? "0") ?? null,
        L = null != N ? w : null,
        F =
            null == (n = (0, d.A)(s, !0).text ?? E)
                ? null
                : s?.type === D.$pd.PLAYING || null == s
                  ? R.intl.formatToPlainString(R.t.lFApmz, { game: n })
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
                })({ activityLabel: F, activityStartTimestampMs: k, voiceCallName: b, customStatusActivity: L }),
            [F, k, b, L],
        );
    if (null == r) return null;
    let j =
            null == r.banner
                ? null
                : ((0, y.z)({ id: r.id, banner: r.banner, canAnimate: m.kt.getSetting(), size: 600 }) ?? null),
        V = r.globalName ?? r.username;
    return (0, l.jsxs)("div", {
        className: U.cI,
        children: [
            (0, l.jsx)("div", { className: U.CK, style: { backgroundImage: null != j ? `url(${j})` : void 0 } }),
            (0, l.jsxs)("div", {
                className: U.vK,
                children: [
                    (0, l.jsxs)("div", {
                        className: U.iy,
                        children: [
                            (0, l.jsx)(o.A, { user: r, isMobile: C, status: x, className: U.my, size: u._3J.SIZE_40 }),
                            (0, l.jsxs)("div", {
                                className: U.ic,
                                children: [
                                    (0, l.jsx)(A.A, {
                                        userName: V,
                                        textClassName: U.Xh,
                                        displayNameStyles: T,
                                        effectDisplayType: f.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (P.type) {
                                            case "activity":
                                                return (0, l.jsxs)("div", {
                                                    className: U.nU,
                                                    children: [
                                                        (0, l.jsx)(u._xR, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: U.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: U.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, l.jsxs)("div", {
                                                    className: U.nU,
                                                    children: [
                                                        (0, l.jsx)(u.HKD, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: U.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: U.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, l.jsx)("div", {
                                                    className: U.nU,
                                                    children: (0, l.jsx)(g.A, {
                                                        activity: P.customStatusActivity,
                                                        className: U.tR,
                                                        emojiClassName: U.qp,
                                                        textClassName: U.Yg,
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
                                  className: U.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, l.jsx)(O, { startTimestampMs: P.startTimestampMs }),
                              })
                        : "voice_call" === P.type
                          ? null == v
                              ? null
                              : (0, l.jsx)(u.Text, {
                                    className: U.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, l.jsx)(G, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}
function w(e) {
    let { currentUser: t, activity: n, currentGameName: r, activeTab: s, onTabChange: u } = e,
        {
            friendsHasUnreadFavorites: o,
            messagesHasUnreadFavorites: d,
            voiceHasActiveFavorites: c,
        } = (0, a.cf)([M.A, T.Ay, S.A, C.A], () => {
            let [e] = M.A.getFavoriteTargetIdsForTab(x.x.FRIENDS),
                [t] = M.A.getFavoriteTargetIdsForTab(x.x.MESSAGES),
                [n] = M.A.getFavoriteTargetIdsForTab(x.x.VOICE),
                l = (e) => T.Ay.hasUnread(e) || T.Ay.getMentionCount(e) > 0,
                i = e.some((e) => {
                    let t = S.A.getDMFromUserId(e);
                    return null != t && l(t);
                });
            return {
                friendsHasUnreadFavorites: i,
                messagesHasUnreadFavorites: t.some(l),
                voiceHasActiveFavorites: n.some((e) => {
                    let t = C.A.getVoiceStatesForChannel(e);
                    for (let e in t) return !0;
                    return !1;
                }),
            };
        }, []),
        h = i.useMemo(() => ({ [x.x.FRIENDS]: o, [x.x.MESSAGES]: d, [x.x.VOICE]: c }), [o, d, c]);
    return (0, l.jsxs)("div", {
        className: U.kL,
        children: [
            (0, l.jsx)(b, { currentUser: t, activity: n, currentGameName: r }),
            (0, l.jsx)("div", {
                className: U.vR,
                role: "tablist",
                "aria-label": R.intl.string(R.t.TdEu5X),
                children: [
                    { id: x.x.FRIENDS, label: R.t.TdEu5X },
                    { id: x.x.MESSAGES, label: R.t.OIgYlQ },
                    { id: x.x.VOICE, label: R.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        i = !0 === h[t];
                    return (0, l.jsx)(
                        L,
                        {
                            tab: t,
                            label: R.intl.formatToPlainString(n, {}),
                            selected: s === t,
                            shouldShowCutoutDot: i,
                            onSelect: u,
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function L(e) {
    let { tab: t, label: n, selected: i, shouldShowCutoutDot: r = !1, onSelect: a, className: o } = e;
    return (0, l.jsxs)(u.DUT, {
        role: "tab",
        "aria-selected": i,
        className: s()(U.Mf, i && U.jP, o),
        onClick: () => a(t),
        children: [
            r ? (0, l.jsx)("span", { className: U.OD, "aria-hidden": !0 }) : null,
            (0, l.jsx)(u.Text, { variant: "text-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
G.displayName = "OverlayVoiceCallElapsedTime";
