r.r(t);
var n = r(200651),
    a = r(192379),
    i = r(597846),
    u = r(885006),
    l = r(111810),
    o = r(516604),
    s = r(936003);
let c = () => {
    let e = (0, u.Z)(),
        t = a.useMemo(
            () => ({
                w: e.width,
                h: e.height
            }),
            [e]
        ),
        r = (0, o.Z)(t);
    return (0, n.jsx)('div', {
        className: s.canvasWrapper,
        id: 'simple-confetti-canvas',
        children: (0, n.jsx)(i.z, {
            playing: r.playing,
            size: t,
            useClockOptions: {
                minInterval: 1000 / 60,
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
t.default = () => ((0, l.kf)('ConfettiCanvasComponent') ? (0, n.jsx)(c, {}) : null);
