n.d(t, {
    HV: function () {
        return d;
    },
    Tp: function () {
        return c;
    },
    Xv: function () {
        return o;
    }
}),
    n(724458);
var i = n(392711),
    r = n(605387),
    s = n.n(r);
let a = (e) => s().decode(e),
    l = (e) => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
    o = async (e, t, n, i) => ({
        src: e,
        base64: t,
        loop: !1,
        loopDelay: 0,
        duration: l(a(await n.arrayBuffer())),
        start: 0,
        position: {
            x: 0,
            y: 0
        },
        zIndex: 100 + i,
        height: 880,
        width: 450,
        name: n.name
    }),
    c = (e) => {
        let t = (0, i.cloneDeep)(e),
            n = Math.floor(101 * Math.random()) + 150;
        return (
            t.forEach((e) => {
                e.duration -= n;
            }),
            t
        );
    },
    d = function (e) {
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
