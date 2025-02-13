n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(27457),
    a = n(131951),
    r = n(260489);
function s(e) {
    let { aspectRatio: t, blocked: n, ignored: s, channel: o, className: c, focused: d, children: u, inCall: h, inPopout: p, noBorder: m, onClick: f, onContextMenu: g, onDoubleClick: _, onVideoResize: C, paused: x, pulseSpeakingIndicator: v, participant: E, width: I, ...b } = e,
        Z = a.Z.getVideoComponent();
    return (0, i.jsx)('div', {
        style: { width: I },
        className: r.spaceBetweenTiles,
        children: (0, i.jsxs)('div', {
            className: r.tileSizer,
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
                    onDoubleClick: _,
                    onVideoResize: C,
                    participant: E,
                    paused: x,
                    pulseSpeakingIndicator: v,
                    videoComponent: Z,
                    width: I,
                    ...b
                }),
                u
            ]
        })
    });
}
