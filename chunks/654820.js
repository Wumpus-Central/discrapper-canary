n.d(t, { A: () => o }), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(520698),
    r = n(412780),
    s = n(749167);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, a.A)(n.type),
        [d, c] = l.useState(),
        [u, _] = l.useState(),
        [f, m] = l.useState(),
        [p, g] = l.useState(),
        h = n.id.split(":").at(-1),
        x = t === h,
        v = l.useCallback((e, t, n) => {
            var i, l;
            let a = n ? r.Ay.getOutboundStats(t) : r.Ay.getInboundStats(e, t),
                s =
                    void 0 === (i = a?.resolution) || (0 === i.width && 0 === i.height)
                        ? "unknown"
                        : i.width + " x " + i.height;
            c("unknown" === s ? "-" : (a?.codec ?? "unknown")),
                _("unknown" === s ? "-" : s),
                m(
                    a?.bitrateEstimate !== void 0
                        ? ((l = a.bitrateEstimate), `${(l / 1e3).toFixed(2)} Kbps`)
                        : "unknown",
                ),
                g("unknown" === s || a?.fps === void 0 ? "-" : String(a.fps));
        }, []);
    return (
        l.useEffect(() => {
            let e = () => v(h, o, x);
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
        }, [x, h, o, v]),
        (0, i.jsxs)("div", {
            className: s.w,
            children: [
                (0, i.jsx)("div", { children: (0, i.jsx)("strong", { children: "Stream Info" }) }),
                (0, i.jsxs)("div", {
                    className: s.l,
                    children: [
                        (0, i.jsx)("span", { children: "Video Codec: " }),
                        (0, i.jsx)("strong", { children: d }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: s.l,
                    children: [(0, i.jsx)("span", { children: "Resolution: " }), (0, i.jsx)("strong", { children: u })],
                }),
                (0, i.jsxs)("div", {
                    className: s.l,
                    children: [(0, i.jsx)("span", { children: "FPS: " }), (0, i.jsx)("strong", { children: p })],
                }),
                x &&
                    (0, i.jsxs)("div", {
                        className: s.l,
                        children: [
                            (0, i.jsx)("span", { children: "Bitrate Estimate: " }),
                            (0, i.jsx)("strong", { children: f }),
                        ],
                    }),
            ],
        })
    );
}
