n.d(t, { A: () => o }), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(520698),
    s = n(412780),
    r = n(412958);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, a.A)(n.type),
        [c, d] = l.useState(),
        [u, h] = l.useState(),
        [m, A] = l.useState(),
        p = n.id.split(":").at(-1),
        g = t === p,
        f = l.useCallback((e, t, n) => {
            var i, l;
            let a = n ? s.Ay.getOutboundStats(t) : s.Ay.getInboundStats(e, t);
            d(a?.codec ?? "unknown"),
                h(
                    void 0 === (i = a?.resolution) || (0 === i.width && 0 === i.height)
                        ? "unknown"
                        : i.width + " x " + i.height,
                ),
                A(
                    a?.bitrateEstimate !== void 0
                        ? ((l = a.bitrateEstimate), `${(l / 1e3).toFixed(2)} Kbps`)
                        : "unknown",
                );
        }, []);
    return (
        l.useEffect(() => {
            let e = () => f(p, o, g);
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
        }, [g, p, o, f]),
        (0, i.jsxs)("div", {
            className: r.w,
            children: [
                (0, i.jsx)("div", { children: (0, i.jsx)("strong", { children: "Stream Info" }) }),
                (0, i.jsxs)("div", {
                    className: r.l,
                    children: [
                        (0, i.jsx)("span", { children: "Video Codec: " }),
                        (0, i.jsx)("strong", { children: c }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: r.l,
                    children: [(0, i.jsx)("span", { children: "Resolution: " }), (0, i.jsx)("strong", { children: u })],
                }),
                g &&
                    (0, i.jsxs)("div", {
                        className: r.l,
                        children: [
                            (0, i.jsx)("span", { children: "Bitrate Estimate: " }),
                            (0, i.jsx)("strong", { children: m }),
                        ],
                    }),
            ],
        })
    );
}
