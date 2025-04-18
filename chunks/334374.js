n.d(t, { Z: () => s }), n(388685), n(35282), n(784620), n(973216);
var r = n(200651),
    l = n(192379),
    i = n(414910),
    a = n(226961),
    o = n(340530);
function s(e) {
    let { currentUserId: t, participant: n } = e,
        s = (0, i.Z)(n.type),
        [u, c] = l.useState(),
        [d, f] = l.useState(),
        [m, p] = l.useState(),
        E = n.id.split(':').at(-1),
        g = t === E,
        h = l.useCallback((e, t, n) => {
            var r, l, i;
            let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
            c(null != (r = null == o ? void 0 : o.codec) ? r : 'unknown'), f(void 0 === (l = null == o ? void 0 : o.resolution) || (0 === l.width && 0 === l.height) ? 'unknown' : l.width + ' x ' + l.height), p((null == o ? void 0 : o.bitrateEstimate) !== void 0 ? ((i = o.bitrateEstimate), ''.concat((i / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        l.useEffect(() => {
            let e = () => h(E, s, g);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [g, E, s, h]),
        (0, r.jsxs)('div', {
            className: o.streamInfoContainer,
            children: [
                (0, r.jsx)('div', { children: (0, r.jsx)('strong', { children: 'Stream Info' }) }),
                (0, r.jsxs)('div', {
                    className: o.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Video Codec: ' }), (0, r.jsx)('strong', { children: u })]
                }),
                (0, r.jsxs)('div', {
                    className: o.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Resolution: ' }), (0, r.jsx)('strong', { children: d })]
                }),
                g &&
                    (0, r.jsxs)('div', {
                        className: o.infoRow,
                        children: [(0, r.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, r.jsx)('strong', { children: m })]
                    })
            ]
        })
    );
}
