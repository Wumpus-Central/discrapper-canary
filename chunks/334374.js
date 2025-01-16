n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120),
    n(571269),
    n(298267);
var i = n(200651),
    l = n(192379),
    a = n(414910),
    r = n(226961),
    s = n(284902);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, a.Z)(n.type),
        [c, u] = l.useState(),
        [d, m] = l.useState(),
        [f, p] = l.useState(),
        h = n.id.split(':').at(-1),
        g = t === h,
        v = l.useCallback((e, t, n) => {
            var i, l, a;
            let s = n ? r.ZP.getOutboundStats(t) : r.ZP.getInboundStats(e, t);
            u(null !== (i = null == s ? void 0 : s.codec) && void 0 !== i ? i : 'unknown'), m(void 0 === (l = null == s ? void 0 : s.resolution) || (0 === l.width && 0 === l.height) ? 'unknown' : l.width + ' x ' + l.height), p((null == s ? void 0 : s.bitrateEstimate) !== void 0 ? ((a = s.bitrateEstimate), ''.concat((a / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        l.useEffect(() => {
            let e = () => v(h, o, g);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [g, h, o, v]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: s.streamInfoContainer,
                children: [
                    (0, i.jsx)('div', { children: (0, i.jsx)('strong', { children: 'Stream Info' }) }),
                    (0, i.jsxs)('div', {
                        className: s.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Video Codec: ' }), (0, i.jsx)('strong', { children: c })]
                    }),
                    (0, i.jsxs)('div', {
                        className: s.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Resolution: ' }), (0, i.jsx)('strong', { children: d })]
                    }),
                    g &&
                        (0, i.jsxs)('div', {
                            className: s.infoRow,
                            children: [(0, i.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, i.jsx)('strong', { children: f })]
                        })
                ]
            })
        })
    );
}
