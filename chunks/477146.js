n.d(t, {
    H: () => o,
    X: () => l
});
var r = n(605387),
    i = n.n(r);
let s = (e) => i().decode(e),
    a = (e) => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
    l = async (e, t, n, r) => ({
        src: e,
        base64: t,
        loop: !1,
        loopDelay: 0,
        duration: a(s(await n.arrayBuffer())),
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
    o = function (e) {
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
    };
