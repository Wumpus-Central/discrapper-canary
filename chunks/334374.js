(n.d(t, { Z: () => u }), n(388685), n(35282), n(784620), n(973216));
var r = n(255367),
    l = n(73800),
    i = n(414910),
    a = n(226961),
    o = n(422636);
function u(e) {
    let { currentUserId: t, participant: n } = e,
        u = (0, i.Z)(n.type),
        [s, c] = l.useState(),
        [d, f] = l.useState(),
        [p, m] = l.useState(),
        E = n.id.split(':').at(-1),
        g = t === E,
        v = l.useCallback((e, t, n) => {
            var r, l, i;
            let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
            (c(null != (r = null == o ? void 0 : o.codec) ? r : 'unknown'), f(void 0 === (l = null == o ? void 0 : o.resolution) || (0 === l.width && 0 === l.height) ? 'unknown' : l.width + ' x ' + l.height), m((null == o ? void 0 : o.bitrateEstimate) !== void 0 ? ((i = o.bitrateEstimate), ''.concat((i / 1000).toFixed(2), ' Kbps')) : 'unknown'));
        }, []);
    return (
        l.useEffect(() => {
            let e = () => v(E, u, g);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [g, E, u, v]),
        (0, r.jsxs)('div', {
            className: o.streamInfoContainer,
            children: [
                (0, r.jsx)('div', { children: (0, r.jsx)('strong', { children: 'Stream Info' }) }),
                (0, r.jsxs)('div', {
                    className: o.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Video Codec: ' }), (0, r.jsx)('strong', { children: s })]
                }),
                (0, r.jsxs)('div', {
                    className: o.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Resolution: ' }), (0, r.jsx)('strong', { children: d })]
                }),
                g &&
                    (0, r.jsxs)('div', {
                        className: o.infoRow,
                        children: [(0, r.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, r.jsx)('strong', { children: p })]
                    })
            ]
        })
    );
}
