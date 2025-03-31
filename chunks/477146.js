n.d(t, {
    $j: () => u,
    HV: () => l,
    Xv: () => s
}),
    n(47120),
    n(301563),
    n(866573),
    n(642549),
    n(787622),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var r = n(605387),
    i = n.n(r);
let o = (e) => i().decode(e),
    a = (e) => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
    s = async (e, t, n, r) => ({
        src: e,
        base64: t,
        loop: !1,
        loopDelay: 0,
        duration: a(o(await n.arrayBuffer())),
        start: 0,
        position: {
            x: 0,
            y: 0
        },
        zIndex: 100 + r,
        height: 880,
        width: 450,
        name: n.name
    }),
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'json',
            n = '\n[';
        return (
            'json' === t &&
                e.forEach((e, t) => {
                    n += '\n              {\n                  "src": "file-'.concat(t, '.png",\n                  "start": ').concat(e.start, ',\n                  "duration": ').concat(e.duration, ',\n                  "height": ').concat(e.height, ',\n                  "width": ').concat(e.width, ',\n                  "zIndex": ').concat(e.zIndex, ',\n                  "loop": ').concat(e.loop, ',\n                  "loop_delay": ').concat(e.loopDelay, '\n              },\n          ');
                }),
            'proto' === t &&
                e.forEach((e, t) => {
                    n += "\n              ProfileEffectKeyFrame(\n                  src='file-".concat(t, ".png',\n                  loop=").concat(e.loop, ',\n                  width=').concat(e.width, ',\n                  height=').concat(e.height, ',\n                  duration=').concat(e.duration, ',\n                  start=').concat(e.start, ',\n                  loop_delay=').concat(e.loopDelay, ',\n                  position=Point(x=0, y=0),\n                  z_index=').concat(e.zIndex, ',\n              ),\n          ');
                }),
            (n += '\n]')
        );
    },
    c = (e) => {
        let [t, n] = e.split(','),
            r = atob(n),
            i = t.split(';')[0],
            o = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
        return new Blob([o], { type: i });
    },
    u = (e) => {
        let t = c(e);
        return URL.createObjectURL(t);
    };
