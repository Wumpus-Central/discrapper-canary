(n.d(t, { Z: () => l }), n(388685), n(35282), n(784620), n(973216));
var r = n(255367),
    i = n(73800),
    a = n(414910),
    o = n(226961),
    s = n(422636);
function l(e) {
    let { currentUserId: t, participant: n } = e,
        l = (0, a.Z)(n.type),
        [c, u] = i.useState(),
        [d, f] = i.useState(),
        [_, p] = i.useState(),
        h = n.id.split(':').at(-1),
        m = t === h;
    function g(e) {
        return ''.concat((e / 1000).toFixed(2), ' Kbps');
    }
    function E(e) {
        return void 0 === e || (0 === e.width && 0 === e.height) ? 'unknown' : e.width + ' x ' + e.height;
    }
    let b = i.useCallback((e, t, n) => {
        var r;
        let i = n ? o.ZP.getOutboundStats(t) : o.ZP.getInboundStats(e, t);
        (u(null != (r = null == i ? void 0 : i.codec) ? r : 'unknown'), f(E(null == i ? void 0 : i.resolution)), p((null == i ? void 0 : i.bitrateEstimate) !== void 0 ? g(i.bitrateEstimate) : 'unknown'));
    }, []);
    return (
        i.useEffect(() => {
            let e = () => b(h, l, m);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [m, h, l, b]),
        (0, r.jsxs)('div', {
            className: s.streamInfoContainer,
            children: [
                (0, r.jsx)('div', { children: (0, r.jsx)('strong', { children: 'Stream Info' }) }),
                (0, r.jsxs)('div', {
                    className: s.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Video Codec: ' }), (0, r.jsx)('strong', { children: c })]
                }),
                (0, r.jsxs)('div', {
                    className: s.infoRow,
                    children: [(0, r.jsx)('span', { children: 'Resolution: ' }), (0, r.jsx)('strong', { children: d })]
                }),
                m &&
                    (0, r.jsxs)('div', {
                        className: s.infoRow,
                        children: [(0, r.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, r.jsx)('strong', { children: _ })]
                    })
            ]
        })
    );
}
