n.d(t, { Q: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(205693),
    o = n(397927),
    c = n(233545),
    d = n(229659),
    u = n(253932),
    h = n(430452),
    m = n(954571),
    A = n(957565),
    g = n(975571),
    p = n(917592),
    f = n(652215),
    _ = n(731854),
    E = n(985018),
    x = n(375993);
let C = () => {
    h.Ay.getMediaEngine().once(r.bg.ConnectionStats, (e) => {
        let t = JSON.stringify(
            Object.values(_.x)
                .map((t) => {
                    let n = e
                        .filter((e) => {
                            let { connection: n } = e;
                            return n.context === t;
                        })
                        .map((e, n) => {
                            let i = e.stats;
                            return (i.context = t), (i.index = n), i;
                        });
                    for (let e of n) e?.transport?.localAddress != null && (e.transport.localAddress = "(redacted)");
                    return n;
                })
                .filter((e) => e.length > 0),
            null,
            2,
        );
        (0, A.C)(t, () => (0, o.showToast)((0, o.createToast)(E.intl.string(E.t.t5VZ88), o.ToastType.SUCCESS)));
    });
};
function S(e) {
    (0, l.useEffect)(() => {
        m.default.track(f.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let t = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.ho();
        }, [e]),
        n = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: r } = e,
                o = u.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: x.o0,
                                    children: (0, i.jsx)(d.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)("div", {
                                    className: x.xB,
                                    children: (0, i.jsx)("strong", { children: p.A.getShortHostname(t) }),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: x.xB,
                        children: E.intl.format(E.t["X58/lN"], { averagePing: n.toFixed(0) }),
                    }),
                    null != s
                        ? (0, i.jsx)("div", {
                              className: x.xB,
                              children: E.intl.format(E.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                          })
                        : null,
                    null != r
                        ? (0, i.jsx)("div", {
                              className: x.xB,
                              children: E.intl.format(E.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: a()(x.xB, x.xJ),
                        children: [
                            null == r ? E.intl.formatToPlainString(E.t.vggaMt, { badPing: 250 }) : null,
                            null != r
                                ? E.intl.formatToPlainString(E.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                                : null,
                        ],
                    }),
                ],
            });
        }, [e]),
        { connectionState: s, connectionTypeText: r } = e,
        A = u.Q_.getSetting(),
        S = {
            [f.S7L.AWAITING_ENDPOINT]: E.intl.format(E.t.Eu2vUR, { url: f.qF7.STATUS }),
            [f.S7L.CONNECTING]: E.intl.string(E.t["y+E8aD"]),
            [f.S7L.AUTHENTICATING]: E.intl.string(E.t["5lGIZH"]),
            [f.S7L.DISCONNECTED]: E.intl.string(E.t.fOX25I),
            [f.S7L.RTC_CONNECTING]: E.intl.string(E.t.b5Ubd5),
            [f.S7L.ICE_CHECKING]: E.intl.format(E.t.SyoYUb, { url: g.A.getArticleURL(f.MVz.VOICE_CONNECTION_ERRORS) }),
            [f.S7L.DTLS_CONNECTING]: E.intl.format(E.t.SyoYUb, {
                url: g.A.getArticleURL(f.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [f.S7L.RTC_CONNECTED]: n,
            [f.S7L.NO_ROUTE]: E.intl.format(E.t["2tgQnk"], { url: g.A.getArticleURL(f.MVz.VOICE_CONNECTION_ERRORS) }),
            [f.S7L.RTC_DISCONNECTED]: E.intl.string(E.t.fOX25I),
        }[s];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            "function" == typeof S ? S() : (0, i.jsx)("p", { className: a()(x.xB, x.xJ), children: S }),
            (0, i.jsx)("hr", { className: x.me }),
            (0, i.jsxs)("div", {
                className: x.Vf,
                children: [
                    (0, i.jsxs)("span", {
                        className: a()(x.uO, x.ro),
                        children: [
                            (0, i.jsx)(o.XAi, {
                                size: "xxs",
                                color: o.LU0.colors.TEXT_FEEDBACK_POSITIVE.css,
                                className: x.__invalid_icon,
                            }),
                            r,
                        ],
                    }),
                    A &&
                        h.Ay.supports(_.O5.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(o.MzZ, {
                                    className: a()(x.Ce, x.ro),
                                    onClick: t,
                                    children: [
                                        E.intl.string(E.t.KBoWg9),
                                        (0, i.jsx)(o.tfB, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: x.__invalid_icon,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(o.MzZ, {
                                    className: a()(x.d3, x.ro),
                                    onClick: C,
                                    title: "Copy to clipboard",
                                    children: [
                                        E.intl.string(E.t["XEb+Sj"]),
                                        (0, i.jsx)(o.TdU, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: x.__invalid_icon,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    !A &&
                        !__OVERLAY__ &&
                        (0, i.jsx)(o.MzZ, {
                            className: x.Ce,
                            href: g.A.getArticleURL(f.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: E.intl.string(E.t.hvVgAZ),
                        }),
                ],
            }),
        ],
    });
}
