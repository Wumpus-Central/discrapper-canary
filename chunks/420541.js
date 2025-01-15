n.r(t);
var r = n(200651),
    i = n(192379),
    a = n(597846),
    u = n(885006),
    l = n(111810),
    c = n(516604),
    o = n(730123);
let s = () => {
    let e = (0, u.Z)(),
        t = i.useMemo(
            () => ({
                w: e.width,
                h: e.height
            }),
            [e]
        ),
        n = (0, c.Z)(t, 60);
    return (0, r.jsx)('div', {
        className: o.canvasWrapper,
        id: 'simple-confetti-canvas',
        children: (0, r.jsx)(a.z, {
            playing: n.playing,
            size: t,
            drawCallback: (e, t) => {
                n.update(t), n.draw(e);
            }
        })
    });
};
t.default = () => ((0, l.kf)('ConfettiCanvasComponent') ? (0, r.jsx)(s, {}) : null);
