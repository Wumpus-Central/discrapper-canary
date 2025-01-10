n.r(t);
var r = n(200651),
    i = n(192379),
    u = n(597846),
    a = n(885006),
    c = n(111810),
    l = n(516604),
    s = n(936003);
let o = () => {
    let e = (0, a.Z)(),
        t = i.useMemo(
            () => ({
                w: e.width,
                h: e.height
            }),
            [e]
        ),
        n = (0, l.Z)(t, 60);
    return (0, r.jsx)('div', {
        className: s.canvasWrapper,
        id: 'simple-confetti-canvas',
        children: (0, r.jsx)(u.z, {
            size: t,
            drawCallback: (e, t) => {
                n.update(t), n.draw(e);
            }
        })
    });
};
t.default = () => ((0, c.kf)('ConfettiCanvasComponent') ? (0, r.jsx)(o, {}) : null);
