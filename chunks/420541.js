r.r(t);
var n = r(200651),
    a = r(192379),
    i = r(597846),
    l = r(885006),
    c = r(111810),
    u = r(516604),
    s = r(936003);
let o = () => {
    let e = (0, l.Z)(),
        t = a.useMemo(
            () => ({
                w: e.width,
                h: e.height
            }),
            [e]
        ),
        r = (0, u.Z)(t);
    return (0, n.jsx)('div', {
        className: s.canvasWrapper,
        id: 'simple-confetti-canvas',
        children: (0, n.jsx)(i.z, {
            playing: r.playing,
            size: t,
            useClockOptions: {
                minInterval: r.tickRate,
                droppedFramesCallbackThreshold: 10,
                droppedFramesResetTime: 2000,
                droppedFramesCallback: r.improvePerformance
            },
            drawCallback: (e, t) => {
                r.update(t), r.draw(e);
            }
        })
    });
};
t.default = () => ((0, c.kf)('ConfettiCanvasComponent') ? (0, n.jsx)(o, {}) : null);
