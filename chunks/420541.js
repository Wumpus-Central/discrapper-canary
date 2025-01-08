t.r(n);
var r = t(200651),
    i = t(192379),
    a = t(597846),
    c = t(885006),
    o = t(111810),
    u = t(516604),
    s = t(936003);
let l = () => {
    let e = (0, c.Z)(),
        n = i.useMemo(
            () => ({
                w: e.width,
                h: e.height
            }),
            [e]
        ),
        t = (0, u.Z)(n, 90);
    return (0, r.jsx)('div', {
        className: s.canvasWrapper,
        id: 'simple-confetti-canvas',
        children: (0, r.jsx)(a.z, {
            size: n,
            drawCallback: (e, n) => {
                t.update(n), t.draw(e);
            }
        })
    });
};
n.default = () => ((0, o.kf)('ConfettiCanvasComponent') ? (0, r.jsx)(l, {}) : null);
