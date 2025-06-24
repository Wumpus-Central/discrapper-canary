n.d(t, { Z: () => o }), n(388685), n(35282), n(784620), n(973216);
var r = n(255367),
    l = n(73800),
    i = n(414910),
    a = n(226961),
    u = n(422636);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, i.Z)(n.type),
        [s, c] = l.useState(),
        [d, f] = l.useState(),
        [m, p] = l.useState(),
        E = n.id.split(':').at(-1),
        g = t === E,
        h = l.useCallback((e, t, n) => {
            var r, l, i;
            let u = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
            c(null != (r = null == u ? void 0 : u.codec) ? r : 'unknown'), f(void 0 === (l = null == u ? void 0 : u.resolution) || (0 === l.width && 0 === l.height) ? 'unknown' : l.width + ' x ' + l.height), p((null == u ? void 0 : u.bitrateEstimate) !== void 0 ? ((i = u.bitrateEstimate), ''.concat((i / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        l.useEffect(() => {
            let e = () => h(E, o, g);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [g, E, o, h]),
        (0, r.jsxs)('div', {
            className: u.streamInfoContainer,
            children: [
                (0, r.jsx)('div', { children: (0, r.jsx)('strong', { children: 'Stream Info' }) }),
                (0, r.jsxs)('div', {
                    className: u.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Video Codec: ' }), (0, r.jsx)('strong', { children: s })]
                }),
                (0, r.jsxs)('div', {
                    className: u.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Resolution: ' }), (0, r.jsx)('strong', { children: d })]
                }),
                g &&
                    (0, r.jsxs)('div', {
                        className: u.infoRow,
                        children: [(0, r.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, r.jsx)('strong', { children: m })]
                    })
            ]
        })
    );
}
