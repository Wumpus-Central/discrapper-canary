(n.d(t, { A: () => o }), n(134528), n(947204));
var i = n(477900),
    l = n(582128),
    s = n(520698),
    r = n(412780),
    a = n(262012);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, s.A)(n.type),
        [u, c] = l.useState(),
        [d, m] = l.useState(),
        [g, p] = l.useState(),
        [f, h] = l.useState(),
        x = n.id.split(":").at(-1),
        A = t === x,
        v = l.useCallback((e, t, n) => {
            var i, l;
            let s = n ? r.Ay.getOutboundStats(t) : r.Ay.getInboundStats(e, t),
                a =
                    void 0 === (i = s?.resolution) || (0 === i.width && 0 === i.height)
                        ? "unknown"
                        : i.width + " x " + i.height;
            (c("unknown" === a ? "-" : (s?.codec ?? "unknown")),
                m("unknown" === a ? "-" : a),
                p(
                    s?.bitrateEstimate !== void 0
                        ? ((l = s.bitrateEstimate), `${(l / 1e3).toFixed(2)} Kbps`)
                        : "unknown",
                ),
                h("unknown" === a || s?.fps === void 0 ? "-" : String(s.fps)));
        }, []);
    return (
        l.useEffect(() => {
            function e() {
                return v(x, o, A);
            }
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
        }, [A, x, o, v]),
        (0, i.jsxs)("div", {
            className: a.w,
            children: [
                (0, i.jsx)("div", { children: (0, i.jsx)("strong", { children: "Stream Info" }) }),
                (0, i.jsxs)("div", {
                    className: a.l,
                    children: [
                        (0, i.jsx)("span", { children: "Video Codec: " }),
                        (0, i.jsx)("strong", { children: u }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: a.l,
                    children: [(0, i.jsx)("span", { children: "Resolution: " }), (0, i.jsx)("strong", { children: d })],
                }),
                (0, i.jsxs)("div", {
                    className: a.l,
                    children: [(0, i.jsx)("span", { children: "FPS: " }), (0, i.jsx)("strong", { children: f })],
                }),
                A &&
                    (0, i.jsxs)("div", {
                        className: a.l,
                        children: [
                            (0, i.jsx)("span", { children: "Bitrate Estimate: " }),
                            (0, i.jsx)("strong", { children: g }),
                        ],
                    }),
            ],
        })
    );
}
