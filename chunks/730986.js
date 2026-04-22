n.d(t, { Q: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(205693),
    o = n(691540),
    c = n(857250),
    d = n(97483),
    u = n(194261),
    h = n(827734),
    m = n(349288),
    A = n(811893),
    g = n(624479),
    p = n(233545),
    _ = n(229659),
    f = n(253932),
    E = n(430452),
    C = n(954571),
    x = n(957565),
    S = n(975571),
    I = n(917592),
    N = n(652215),
    v = n(731854),
    T = n(985018),
    y = n(666153);
let b = () => {
    E.Ay.getMediaEngine().once(r.bg.ConnectionStats, (e) => {
        let t = JSON.stringify(
            Object.values(v.x)
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
        (0, x.C)(t, () => (0, o.P0)((0, c.o)(T.intl.string(T.t.t5VZ88), d.Ck.SUCCESS)));
    });
};
function j(e) {
    (0, l.useEffect)(() => {
        C.default.track(N.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let t = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), p.ho();
        }, [e]),
        n = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: a, outboundLossRate: r } = e,
                o = f.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: y.o0,
                                    children: (0, i.jsx)(_.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)("div", {
                                    className: y.xB,
                                    children: (0, i.jsx)("strong", { children: I.A.getShortHostname(t) }),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: y.xB,
                        children: T.intl.format(T.t["X58/lN"], { averagePing: n.toFixed(0) }),
                    }),
                    null != a
                        ? (0, i.jsx)("div", {
                              className: y.xB,
                              children: T.intl.format(T.t["6iv2TF"], { lastPing: a.toFixed(0) }),
                          })
                        : null,
                    null != r
                        ? (0, i.jsx)("div", {
                              className: y.xB,
                              children: T.intl.format(T.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: s()(y.xB, y.xJ),
                        children: [
                            null == r ? T.intl.formatToPlainString(T.t.vggaMt, { badPing: 250 }) : null,
                            null != r
                                ? T.intl.formatToPlainString(T.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                                : null,
                        ],
                    }),
                ],
            });
        }, [e]),
        { connectionState: a, connectionTypeText: r } = e,
        o = f.Q_.getSetting(),
        c = {
            [N.S7L.AWAITING_ENDPOINT]: T.intl.format(T.t.Eu2vUR, { url: N.qF7.STATUS }),
            [N.S7L.CONNECTING]: T.intl.string(T.t["y+E8aD"]),
            [N.S7L.AUTHENTICATING]: T.intl.string(T.t["5lGIZH"]),
            [N.S7L.DISCONNECTED]: T.intl.string(T.t.fOX25I),
            [N.S7L.RTC_CONNECTING]: T.intl.string(T.t.b5Ubd5),
            [N.S7L.ICE_CHECKING]: T.intl.format(T.t.SyoYUb, { url: S.A.getArticleURL(N.MVz.VOICE_CONNECTION_ERRORS) }),
            [N.S7L.DTLS_CONNECTING]: T.intl.format(T.t.SyoYUb, {
                url: S.A.getArticleURL(N.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [N.S7L.RTC_CONNECTED]: n,
            [N.S7L.NO_ROUTE]: T.intl.format(T.t["2tgQnk"], { url: S.A.getArticleURL(N.MVz.VOICE_CONNECTION_ERRORS) }),
            [N.S7L.RTC_DISCONNECTED]: T.intl.string(T.t.fOX25I),
        }[a];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            "function" == typeof c ? c() : (0, i.jsx)("p", { className: s()(y.xB, y.xJ), children: c }),
            (0, i.jsx)("hr", { className: y.me }),
            (0, i.jsxs)("div", {
                className: y.Vf,
                children: [
                    (0, i.jsxs)("span", {
                        className: s()(y.uO, y.ro),
                        children: [
                            (0, i.jsx)(u.X, {
                                size: "xxs",
                                color: h.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                                className: y.__invalid_icon,
                            }),
                            r,
                        ],
                    }),
                    o &&
                        E.Ay.supports(v.O5.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(m.Anchor, {
                                    className: s()(y.Ce, y.ro),
                                    onClick: t,
                                    children: [
                                        T.intl.string(T.t.KBoWg9),
                                        (0, i.jsx)(A.t, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: y.__invalid_icon,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(m.Anchor, {
                                    className: s()(y.d3, y.ro),
                                    onClick: b,
                                    title: "Copy to clipboard",
                                    children: [
                                        T.intl.string(T.t["XEb+Sj"]),
                                        (0, i.jsx)(g.T, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: y.__invalid_icon,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    !o &&
                        !__OVERLAY__ &&
                        (0, i.jsx)(m.Anchor, {
                            className: y.Ce,
                            href: S.A.getArticleURL(N.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: T.intl.string(T.t.hvVgAZ),
                        }),
                ],
            }),
        ],
    });
}
