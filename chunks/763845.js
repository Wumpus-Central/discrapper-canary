n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(205693),
    s = n(834730),
    r = n(821609),
    o = n(92446),
    c = n(939249),
    d = n(624479),
    u = n(628284),
    h = n(359778),
    m = n(194261),
    A = n(827734),
    g = n(349288),
    _ = n(233545),
    p = n(229659),
    f = n(253932),
    E = n(430452),
    C = n(954571),
    x = n(957565),
    S = n(975571),
    I = n(917592),
    v = n(652215),
    N = n(731854),
    T = n(985018),
    y = n(394952),
    b = n(291614);
let j = function (e) {
    let [t, n] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        C.default.track(v.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let j = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), _.ho();
        }, [e]),
        R = (0, l.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                E.Ay.getMediaEngine().once(a.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(N.x)
                            .map((e) => {
                                let n = t
                                    .filter((t) => {
                                        let { connection: n } = t;
                                        return n.context === e;
                                    })
                                    .map((t, n) => {
                                        let i = t.stats;
                                        return (i.context = e), (i.index = n), i;
                                    });
                                for (let e of n)
                                    e?.transport?.localAddress != null && (e.transport.localAddress = "(redacted)");
                                return n;
                            })
                            .filter((e) => e.length > 0),
                        null,
                        2,
                    );
                    (0, x.C)(n, e);
                });
        }, []),
        M =
            null != e.outboundLossRate
                ? T.intl.formatToPlainString(T.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : T.intl.formatToPlainString(T.t.vggaMt, { badPing: 250 }),
        L = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: a, outboundLossRate: r } = e,
                o = f.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: y.o0,
                                    children: (0, i.jsx)(p.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(s.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: y.VU,
                                    children: I.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: y.ew,
                        children: (0, i.jsxs)("div", {
                            className: y.zS,
                            children: [
                                (0, i.jsx)(s.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: y.VU,
                                    children: T.intl.format(T.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != a
                                    ? (0, i.jsx)(s.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: y.VU,
                                          children: T.intl.format(T.t["6iv2TF"], { lastPing: a.toFixed(0) }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)(s.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: y.VU,
                                          children: T.intl.format(T.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: M }),
                ],
            });
        }, [e, M]),
        { connectionState: D, connectionTypeText: P } = e,
        O = f.Q_.getSetting(),
        w = {
            [v.S7L.AWAITING_ENDPOINT]: T.intl.format(T.t.Eu2vUR, { url: v.qF7.STATUS }),
            [v.S7L.CONNECTING]: T.intl.string(T.t["y+E8aD"]),
            [v.S7L.AUTHENTICATING]: T.intl.string(T.t["5lGIZH"]),
            [v.S7L.DISCONNECTED]: T.intl.string(T.t.fOX25I),
            [v.S7L.RTC_CONNECTING]: T.intl.string(T.t.b5Ubd5),
            [v.S7L.ICE_CHECKING]: T.intl.format(T.t.SyoYUb, { url: S.A.getArticleURL(v.MVz.VOICE_CONNECTION_ERRORS) }),
            [v.S7L.DTLS_CONNECTING]: T.intl.format(T.t.SyoYUb, {
                url: S.A.getArticleURL(v.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [v.S7L.RTC_CONNECTED]: L,
            [v.S7L.NO_ROUTE]: T.intl.format(T.t["2tgQnk"], { url: S.A.getArticleURL(v.MVz.VOICE_CONNECTION_ERRORS) }),
            [v.S7L.RTC_DISCONNECTED]: T.intl.string(T.t.fOX25I),
        }[D];
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [
            "function" == typeof w
                ? w()
                : (0, i.jsx)(s.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: w }),
            O &&
                E.Ay.supports(N.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: b.me }),
                        (0, i.jsxs)("div", {
                            className: y.pw,
                            children: [
                                (0, i.jsx)(r.$, {
                                    icon: o.Q,
                                    text: T.intl.string(T.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: j,
                                }),
                                (0, i.jsxs)(c.D, {
                                    className: `${b.n2} ${y.n2}`,
                                    onClick: R,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: t ? b.Dx : b.t6,
                                            children: (0, i.jsx)(r.$, {
                                                icon: d.T,
                                                text: T.intl.string(T.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: t ? b.t6 : b.Dx,
                                            children: (0, i.jsx)(r.$, {
                                                icon: u.y,
                                                text: T.intl.string(T.t.t5VZ88),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, i.jsxs)(h.Z, {
                type: h.Z.Types.SUCCESS,
                className: b.g4,
                children: [
                    (0, i.jsx)(m.X, { size: "xxs", color: A.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(s.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: P }),
                ],
            }),
            !O &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: b.me }),
                        (0, i.jsx)(g.Anchor, {
                            className: y.CU,
                            href: S.A.getArticleURL(v.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: T.intl.string(T.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
