n.d(t, { Z: () => s }), n(388685), n(35282), n(784620), n(973216);
var r = n(951288),
    i = n(647438),
    l = n(414910),
    a = n(226961),
    o = n(447661);
function s(e) {
    let { currentUserId: t, participant: n } = e,
        s = (0, l.Z)(n.type),
        [c, u] = i.useState(),
        [d, p] = i.useState(),
        [f, h] = i.useState(),
        m = n.id.split(":").at(-1),
        g = t === m,
        b = i.useCallback((e, t, n) => {
            var r, i, l;
            let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
            u(null != (r = null == o ? void 0 : o.codec) ? r : "unknown"),
                p(
                    void 0 === (i = null == o ? void 0 : o.resolution) || (0 === i.width && 0 === i.height)
                        ? "unknown"
                        : i.width + " x " + i.height,
                ),
                h(
                    (null == o ? void 0 : o.bitrateEstimate) !== void 0
                        ? ((l = o.bitrateEstimate), "".concat((l / 1000).toFixed(2), " Kbps"))
                        : "unknown",
                );
        }, []);
    return (
        i.useEffect(() => {
            let e = () => b(m, s, g);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [g, m, s, b]),
        (0, r.jsxs)("div", {
            className: o.streamInfoContainer,
            children: [
                (0, r.jsx)("div", { children: (0, r.jsx)("strong", { children: "Stream Info" }) }),
                (0, r.jsxs)("div", {
                    className: o.infoRow,
                    children: [
                        (0, r.jsx)("span", { children: "Video Codec: " }),
                        (0, r.jsx)("strong", { children: c }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: o.infoRow,
                    children: [(0, r.jsx)("span", { children: "Resolution: " }), (0, r.jsx)("strong", { children: d })],
                }),
                g &&
                    (0, r.jsxs)("div", {
                        className: o.infoRow,
                        children: [
                            (0, r.jsx)("span", { children: "Bitrate Estimate: " }),
                            (0, r.jsx)("strong", { children: f }),
                        ],
                    }),
            ],
        })
    );
}
