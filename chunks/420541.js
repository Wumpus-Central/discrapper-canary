r.r(t), r.d(t, { default: () => f });
var n = r(200651),
    a = r(192379),
    i = r(597846),
    l = r(885006),
    u = r(111810),
    c = r(317568),
    s = r(516604),
    o = r(992472);
let d = () => {
        let e = (0, l.Z)(),
            t = a.useMemo(
                () => ({
                    w: e.width,
                    h: e.height
                }),
                [e]
            ),
            r = (0, s.Z)(t);
        return (
            (0, c.Z)(),
            (0, n.jsx)('div', {
                className: o.canvasWrapper,
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
            })
        );
    },
    f = () => ((0, u.kf)('ConfettiCanvasComponent') ? (0, n.jsx)(d, {}) : null);
