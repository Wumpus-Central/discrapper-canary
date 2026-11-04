var i = n(812729),
    r = n.n(i),
    l = n(839214),
    s = n(652896);
let a = (0, l.D)(() => ({ streams: {} }));
function o(e) {
    let t = (0, s._z)(e),
        n = a.useState((e) => e.streams, r());
    return n[t]?.zoom ?? 100;
}
n.d(
    t,
    {},
    {
        CZ: function (e, t) {
            let n = (0, s._z)(e);
            a.setState((e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: e.streams[n]?.zoom, fitOverride: t } } }));
        },
        Qp: function (e, t) {
            let n = (0, s._z)(e);
            a.setState(
                (e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: t, fitOverride: e.streams[n]?.fitOverride } } }),
                !0,
            );
        },
        XG: function (e) {
            let t = (0, s._z)(e),
                n = a.useState((e) => e.streams, r());
            return n[t]?.fitOverride;
        },
        dh: function (e) {
            return o(e) / 100;
        },
        f4: o,
    },
);
