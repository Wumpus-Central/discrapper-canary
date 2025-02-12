n.d(t, { Z: () => o }), n(47120), n(571269), n(298267);
var l = n(200651),
    i = n(192379),
    r = n(414910),
    a = n(226961),
    s = n(558699);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, r.Z)(n.type),
        [u, c] = i.useState(),
        [d, m] = i.useState(),
        [f, h] = i.useState(),
        p = n.id.split(':').at(-1),
        v = t === p,
        g = i.useCallback((e, t, n) => {
            var l, i, r;
            let s = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
            c(null !== (l = null == s ? void 0 : s.codec) && void 0 !== l ? l : 'unknown'), m(void 0 === (i = null == s ? void 0 : s.resolution) || (0 === i.width && 0 === i.height) ? 'unknown' : i.width + ' x ' + i.height), h((null == s ? void 0 : s.bitrateEstimate) !== void 0 ? ((r = s.bitrateEstimate), ''.concat((r / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        i.useEffect(() => {
            let e = () => g(p, o, v);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [v, p, o, g]),
        (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)('div', {
                className: s.streamInfoContainer,
                children: [
                    (0, l.jsx)('div', { children: (0, l.jsx)('strong', { children: 'Stream Info' }) }),
                    (0, l.jsxs)('div', {
                        className: s.infoRow,
                        children: [(0, l.jsx)('span', { children: 'Video Codec: ' }), (0, l.jsx)('strong', { children: u })]
                    }),
                    (0, l.jsxs)('div', {
                        className: s.infoRow,
                        children: [(0, l.jsx)('span', { children: 'Resolution: ' }), (0, l.jsx)('strong', { children: d })]
                    }),
                    v &&
                        (0, l.jsxs)('div', {
                            className: s.infoRow,
                            children: [(0, l.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, l.jsx)('strong', { children: f })]
                        })
                ]
            })
        })
    );
}
