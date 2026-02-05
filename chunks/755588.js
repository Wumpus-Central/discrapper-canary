n.d(t, { b: () => O });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    u = n(397927),
    o = n(730134),
    d = n(566903),
    c = n(47167),
    h = n(410540),
    g = n(302223),
    I = n(609425),
    E = n(922301),
    A = n(750112),
    f = n(853390),
    m = n(253932),
    S = n(734057),
    p = n(290863),
    N = n(383501),
    T = n(309010),
    _ = n(486020),
    y = n(914853),
    C = n(545807),
    x = n(652215),
    v = n(985018),
    M = n(742466);
let D = i.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, C.A)(),
        [l, s] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = n.setInterval(() => s(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let r = Math.max(0, (l - t) / 1e3);
    return (0, f.f)(r);
});
D.displayName = "OverlayElapsedTime";
let R = i.memo(function () {
    let e = (0, C.A)(),
        [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, a.bG)([N.A], () => N.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, f.f)(l / 1e3);
});
function U(e) {
    var t;
    let n,
        { currentUser: s, activity: r, currentGameName: f } = e,
        N = s?.id ?? null,
        y = (0, I.A)({ userId: N, guildId: null }),
        { isMobileOnline: C, status: U } = (0, a.cf)(
            [p.A],
            () =>
                null == N
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: p.A.isMobileOnline(N), status: p.A.getStatus(N) },
            [N],
        ),
        O = (0, a.bG)([T.A], () => T.A.getVoiceChannelId()),
        G = (0, a.bG)([S.A], () => (null != O ? S.A.getChannel(O) : null), [O]),
        b = (0, c.Ay)(G),
        w = (0, h.A)(N ?? "0") ?? null,
        L = null != N ? w : null,
        k =
            null == (n = (0, d.A)(r, !0).text ?? f)
                ? null
                : r?.type === x.$pd.PLAYING || null == r
                  ? v.intl.formatToPlainString(v.t.lFApmz, { game: n })
                  : n,
        F = r?.timestamps?.start != null ? ((t = r.timestamps.start) < 1e12 ? 1e3 * t : t) : null,
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
                })({ activityLabel: k, activityStartTimestampMs: F, voiceCallName: b, customStatusActivity: L }),
            [k, F, b, L],
        );
    if (null == s) return null;
    let j =
            null == s.banner
                ? null
                : ((0, _.z)({ id: s.id, banner: s.banner, canAnimate: m.kt.getSetting(), size: 600 }) ?? null),
        V = s.globalName ?? s.username;
    return (0, l.jsxs)("div", {
        className: M.cI,
        children: [
            (0, l.jsx)("div", { className: M.CK, style: { backgroundImage: null != j ? `url(${j})` : void 0 } }),
            (0, l.jsxs)("div", {
                className: M.vK,
                children: [
                    (0, l.jsxs)("div", {
                        className: M.iy,
                        children: [
                            (0, l.jsx)(o.A, { user: s, isMobile: C, status: U, className: M.my, size: u._3J.SIZE_40 }),
                            (0, l.jsxs)("div", {
                                className: M.ic,
                                children: [
                                    (0, l.jsx)(A.A, {
                                        userName: V,
                                        textClassName: M.Xh,
                                        displayNameStyles: y,
                                        effectDisplayType: E.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (P.type) {
                                            case "activity":
                                                return (0, l.jsxs)("div", {
                                                    className: M.nU,
                                                    children: [
                                                        (0, l.jsx)(u._xR, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: M.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: M.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, l.jsxs)("div", {
                                                    className: M.nU,
                                                    children: [
                                                        (0, l.jsx)(u.HKD, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: M.Wo,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            className: M.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, l.jsx)("div", {
                                                    className: M.nU,
                                                    children: (0, l.jsx)(g.A, {
                                                        activity: P.customStatusActivity,
                                                        className: M.tR,
                                                        emojiClassName: M.qp,
                                                        textClassName: M.Yg,
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
                                  className: M.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, l.jsx)(D, { startTimestampMs: P.startTimestampMs }),
                              })
                        : "voice_call" === P.type
                          ? null == O
                              ? null
                              : (0, l.jsx)(u.Text, {
                                    className: M.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, l.jsx)(R, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}
function O(e) {
    let { currentUser: t, activity: n, currentGameName: i, activeTab: s, onTabChange: r } = e;
    return (0, l.jsxs)("div", {
        className: M.kL,
        children: [
            (0, l.jsx)(U, { currentUser: t, activity: n, currentGameName: i }),
            (0, l.jsx)("div", {
                className: M.vR,
                role: "tablist",
                "aria-label": v.intl.string(v.t.TdEu5X),
                children: [
                    { id: y.x.FRIENDS, label: v.t.TdEu5X },
                    { id: y.x.MESSAGES, label: v.t.OIgYlQ },
                    { id: y.x.VOICE, label: v.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e;
                    return (0, l.jsx)(
                        G,
                        { tab: t, label: v.intl.formatToPlainString(n, {}), selected: s === t, onSelect: r },
                        t,
                    );
                }),
            }),
        ],
    });
}
function G(e) {
    let { tab: t, label: n, selected: i, onSelect: s, className: a } = e;
    return (0, l.jsx)(u.DUT, {
        role: "tab",
        "aria-selected": i,
        className: r()(M.Mf, i && M.jP, a),
        onClick: () => s(t),
        children: (0, l.jsx)(u.Text, { variant: "text-sm/medium", color: "currentColor", children: n }),
    });
}
R.displayName = "OverlayVoiceCallElapsedTime";
