n.d(t, { Z: () => s }), n(47120), n(301563), n(571269), n(298267);
var r = n(200651),
    l = n(192379),
    i = n(414910),
    a = n(226961),
    o = n(422636);
function s(e) {
    let { currentUserId: t, participant: n } = e,
        s = (0, i.Z)(n.type),
        [u, c] = l.useState(),
        [d, f] = l.useState(),
        [m, p] = l.useState(),
        g = n.id.split(':').at(-1),
        E = t === g,
        h = l.useCallback((e, t, n) => {
            var r, l, i;
            let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
            c(null != (r = null == o ? void 0 : o.codec) ? r : 'unknown'), f(void 0 === (l = null == o ? void 0 : o.resolution) || (0 === l.width && 0 === l.height) ? 'unknown' : l.width + ' x ' + l.height), p((null == o ? void 0 : o.bitrateEstimate) !== void 0 ? ((i = o.bitrateEstimate), ''.concat((i / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        l.useEffect(() => {
            let e = () => h(g, s, E);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [E, g, s, h]),
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
                E &&
                    (0, r.jsxs)('div', {
                        className: o.infoRow,
                        children: [(0, r.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, r.jsx)('strong', { children: m })]
                    })
            ]
        })
    );
}
