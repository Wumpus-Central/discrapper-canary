(n(134528), n(947204));
var l = n(477900),
    i = n(582128),
    r = n(520698),
    a = n(412780),
    s = n(262012);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { currentUserId: t, participant: n } = e,
                o = (0, r.A)(n.type),
                [u, c] = i.useState(),
                [d, m] = i.useState(),
                [p, g] = i.useState(),
                [f, h] = i.useState(),
                A = n.id.split(":").at(-1),
                x = t === A,
                v = i.useCallback((e, t, n) => {
                    var l, i;
                    let r = n ? a.Ay.getOutboundStats(t) : a.Ay.getInboundStats(e, t),
                        s =
                            void 0 === (l = r?.resolution) || (0 === l.width && 0 === l.height)
                                ? "unknown"
                                : l.width + " x " + l.height;
                    (c("unknown" === s ? "-" : (r?.codec ?? "unknown")),
                        m("unknown" === s ? "-" : s),
                        g(
                            r?.bitrateEstimate !== void 0
                                ? ((i = r.bitrateEstimate), `${(i / 1e3).toFixed(2)} Kbps`)
                                : "unknown",
                        ),
                        h("unknown" === s || r?.fps === void 0 ? "-" : String(r.fps)));
                }, []);
            return (
                i.useEffect(() => {
                    function e() {
                        return v(A, o, x);
                    }
                    e();
                    let t = setInterval(e, 1e3);
                    return () => clearInterval(t);
                }, [x, A, o, v]),
                (0, l.jsxs)("div", {
                    className: s.w,
                    children: [
                        (0, l.jsx)("div", { children: (0, l.jsx)("strong", { children: "Stream Info" }) }),
                        (0, l.jsxs)("div", {
                            className: s.l,
                            children: [
                                (0, l.jsx)("span", { children: "Video Codec: " }),
                                (0, l.jsx)("strong", { children: u }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: s.l,
                            children: [
                                (0, l.jsx)("span", { children: "Resolution: " }),
                                (0, l.jsx)("strong", { children: d }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: s.l,
                            children: [
                                (0, l.jsx)("span", { children: "FPS: " }),
                                (0, l.jsx)("strong", { children: f }),
                            ],
                        }),
                        x &&
                            (0, l.jsxs)("div", {
                                className: s.l,
                                children: [
                                    (0, l.jsx)("span", { children: "Bitrate Estimate: " }),
                                    (0, l.jsx)("strong", { children: p }),
                                ],
                            }),
                    ],
                })
            );
        },
    },
);
