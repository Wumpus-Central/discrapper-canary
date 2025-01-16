n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(27457),
    r = n(131951),
    a = n(518063);
function s(e) {
    let { aspectRatio: t, blocked: n, ignored: s, channel: o, className: c, focused: d, children: u, inCall: h, inPopout: p, noBorder: m, onClick: f, onContextMenu: g, onDoubleClick: C, onVideoResize: x, paused: v, pulseSpeakingIndicator: _, participant: I, width: E, ...b } = e,
        Z = r.Z.getVideoComponent();
    return (0, i.jsx)('div', {
        style: { width: E },
        className: a.spaceBetweenTiles,
        children: (0, i.jsxs)('div', {
            className: a.tileSizer,
            style: { aspectRatio: t },
            children: [
                (0, i.jsx)(l.ZP, {
                    blocked: n,
                    ignored: s,
                    channel: o,
                    className: c,
                    focused: d,
                    inCall: h,
                    inPopout: p,
                    noBorder: m,
                    onClick: f,
                    onContextMenu: g,
                    onDoubleClick: C,
                    onVideoResize: x,
                    participant: I,
                    paused: v,
                    pulseSpeakingIndicator: _,
                    videoComponent: Z,
                    width: E,
                    ...b
                }),
                u
            ]
        })
    });
}
