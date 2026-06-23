n.d(t, { A: () => o }), n(134528), n(947204);
var l = n(627968),
    i = n(64700),
    s = n(520698),
    r = n(412780),
    a = n(749167);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, s.A)(n.type),
        [u, c] = i.useState(),
        [d, m] = i.useState(),
        [p, g] = i.useState(),
        [h, f] = i.useState(),
        A = n.id.split(":").at(-1),
        x = t === A,
        E = i.useCallback((e, t, n) => {
            var l, i;
            let s = n ? r.Ay.getOutboundStats(t) : r.Ay.getInboundStats(e, t),
                a =
                    void 0 === (l = s?.resolution) || (0 === l.width && 0 === l.height)
                        ? "unknown"
                        : l.width + " x " + l.height;
            c("unknown" === a ? "-" : (s?.codec ?? "unknown")),
                m("unknown" === a ? "-" : a),
                g(
                    s?.bitrateEstimate !== void 0
                        ? ((i = s.bitrateEstimate), `${(i / 1e3).toFixed(2)} Kbps`)
                        : "unknown",
                ),
                f("unknown" === a || s?.fps === void 0 ? "-" : String(s.fps));
        }, []);
    return (
        i.useEffect(() => {
            function e() {
                return E(A, o, x);
            }
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
        }, [x, A, o, E]),
        (0, l.jsxs)("div", {
            className: a.w,
            children: [
                (0, l.jsx)("div", { children: (0, l.jsx)("strong", { children: "Stream Info" }) }),
                (0, l.jsxs)("div", {
                    className: a.l,
                    children: [
                        (0, l.jsx)("span", { children: "Video Codec: " }),
                        (0, l.jsx)("strong", { children: u }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: a.l,
                    children: [(0, l.jsx)("span", { children: "Resolution: " }), (0, l.jsx)("strong", { children: d })],
                }),
                (0, l.jsxs)("div", {
                    className: a.l,
                    children: [(0, l.jsx)("span", { children: "FPS: " }), (0, l.jsx)("strong", { children: h })],
                }),
                x &&
                    (0, l.jsxs)("div", {
                        className: a.l,
                        children: [
                            (0, l.jsx)("span", { children: "Bitrate Estimate: " }),
                            (0, l.jsx)("strong", { children: p }),
                        ],
                    }),
            ],
        })
    );
}
