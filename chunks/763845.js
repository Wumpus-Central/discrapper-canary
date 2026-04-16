n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(205693),
    s = n(397927),
    r = n(233545),
    o = n(229659),
    c = n(253932),
    d = n(430452),
    u = n(954571),
    h = n(957565),
    m = n(975571),
    A = n(917592),
    g = n(652215),
    _ = n(731854),
    p = n(985018),
    f = n(394952),
    E = n(291614);
let C = function (e) {
    let [t, n] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        u.default.track(g.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let C = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), r.ho();
        }, [e]),
        x = (0, l.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                d.Ay.getMediaEngine().once(a.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(_.x)
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
                    (0, h.C)(n, e);
                });
        }, []),
        S =
            null != e.outboundLossRate
                ? p.intl.formatToPlainString(p.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : p.intl.formatToPlainString(p.t.vggaMt, { badPing: 250 }),
        I = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: a, outboundLossRate: r } = e,
                d = c.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    d &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: f.o0,
                                    children: (0, i.jsx)(o.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: f.VU,
                                    children: A.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: f.ew,
                        children: (0, i.jsxs)("div", {
                            className: f.zS,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: f.VU,
                                    children: p.intl.format(p.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != a
                                    ? (0, i.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: f.VU,
                                          children: p.intl.format(p.t["6iv2TF"], { lastPing: a.toFixed(0) }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: f.VU,
                                          children: p.intl.format(p.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(s.Text, { variant: "text-xs/normal", color: "text-muted", children: S }),
                ],
            });
        }, [e, S]),
        { connectionState: T, connectionTypeText: v } = e,
        N = c.Q_.getSetting(),
        y = {
            [g.S7L.AWAITING_ENDPOINT]: p.intl.format(p.t.Eu2vUR, { url: g.qF7.STATUS }),
            [g.S7L.CONNECTING]: p.intl.string(p.t["y+E8aD"]),
            [g.S7L.AUTHENTICATING]: p.intl.string(p.t["5lGIZH"]),
            [g.S7L.DISCONNECTED]: p.intl.string(p.t.fOX25I),
            [g.S7L.RTC_CONNECTING]: p.intl.string(p.t.b5Ubd5),
            [g.S7L.ICE_CHECKING]: p.intl.format(p.t.SyoYUb, { url: m.A.getArticleURL(g.MVz.VOICE_CONNECTION_ERRORS) }),
            [g.S7L.DTLS_CONNECTING]: p.intl.format(p.t.SyoYUb, {
                url: m.A.getArticleURL(g.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [g.S7L.RTC_CONNECTED]: I,
            [g.S7L.NO_ROUTE]: p.intl.format(p.t["2tgQnk"], { url: m.A.getArticleURL(g.MVz.VOICE_CONNECTION_ERRORS) }),
            [g.S7L.RTC_DISCONNECTED]: p.intl.string(p.t.fOX25I),
        }[T];
    return (0, i.jsxs)("div", {
        className: f.kL,
        children: [
            "function" == typeof y
                ? y()
                : (0, i.jsx)(s.Text, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: y }),
            N &&
                d.Ay.supports(_.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: E.me }),
                        (0, i.jsxs)("div", {
                            className: f.pw,
                            children: [
                                (0, i.jsx)(s.Button, {
                                    icon: s.Q5O,
                                    text: p.intl.string(p.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: C,
                                }),
                                (0, i.jsxs)(s.DUT, {
                                    className: `${E.n2} ${f.n2}`,
                                    onClick: x,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: t ? E.Dx : E.t6,
                                            children: (0, i.jsx)(s.Button, {
                                                icon: s.TdU,
                                                text: p.intl.string(p.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: t ? E.t6 : E.Dx,
                                            children: (0, i.jsx)(s.Button, {
                                                icon: s.yr3,
                                                text: p.intl.string(p.t.t5VZ88),
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
            (0, i.jsxs)(s.ZpM, {
                type: s.ZpM.Types.SUCCESS,
                className: E.g4,
                children: [
                    (0, i.jsx)(s.XAi, { size: "xxs", color: s.LU0.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(s.Text, { variant: "text-xs/medium", color: "text-feedback-positive", children: v }),
                ],
            }),
            !N &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: E.me }),
                        (0, i.jsx)(s.MzZ, {
                            className: f.CU,
                            href: m.A.getArticleURL(g.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: p.intl.string(p.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
