n.d(t, {
    $j: () => _,
    HV: () => d,
    Xv: () => s,
    cq: () => l,
    i0: () => u,
    z: () => c
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
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
    n(126298);
var r = n(605387),
    i = n.n(r);
let o = (e) => i().decode(e),
    a = (e) => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
    s = async (e, t, n) => {
        let r = o(await t.arrayBuffer());
        return {
            src: URL.createObjectURL(t),
            base64: e,
            loop: !1,
            loopDelay: 0,
            duration: a(r),
            start: 0,
            position: {
                x: 0,
                y: 0
            },
            zIndex: 100 + n,
            height: 880,
            width: 450,
            name: t.name
        };
    };
var l = (function (e) {
    return (e.THUMBNAIL = 'Thumbnail'), (e.STATIC = 'Static'), (e.REDUCED_MOTION = 'Reduced Motion'), e;
})({});
let c = (e, t) => ({
        name: t.name,
        src: URL.createObjectURL(t),
        base64: e
    }),
    u = (e, t) => {
        if (null == e) return;
        let n = new FileReader();
        (n.onload = (e) => {
            null != e.target && 'string' == typeof e.target.result && (null == t || t(e.target.result));
        }),
            n.readAsDataURL(e);
    },
    d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'python',
            n = '\n[';
        return (
            'python' === t
                ? e.forEach((e) => {
                      n += "\n              ProfileEffectKeyFrame(\n                  src='"
                          .concat(e.name, "',\n                  loop=")
                          .concat(e.loop ? 'True' : 'False', ',\n                  width=')
                          .concat(e.width, ',\n                  height=')
                          .concat(e.height, ',\n                  start=')
                          .concat(e.start, ',\n                  duration=')
                          .concat(e.duration, ',\n                  loop_delay=')
                          .concat(e.loopDelay, ',\n                  position=Point(x=0, y=0),\n                  z_index=')
                          .concat(e.zIndex, ',\n              ),\n          ');
                  })
                : 'json' === t &&
                  e.forEach((e) => {
                      n += '\n              {\n                  "src": "'.concat(e.name, '",\n                  "loop": ').concat(e.loop, ',\n                  "width": ').concat(e.width, ',\n                  "height": ').concat(e.height, ',\n                  "start": ').concat(e.start, ',\n                  "duration": ').concat(e.duration, ',\n                  "loop_delay": ').concat(e.loopDelay, ',\n                  "position": {\n                    "x": 0,\n                    "y": 0\n                  },\n                  "zIndex": ').concat(e.zIndex, ',\n              },\n          ');
                  }),
            (n += '\n]')
        );
    },
    f = (e) => {
        let [t, n] = e.split(','),
            r = atob(n),
            i = t.split(';')[0],
            o = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
        return new Blob([o], { type: i });
    },
    _ = (e) => {
        let t = f(e);
        return URL.createObjectURL(t);
    };
