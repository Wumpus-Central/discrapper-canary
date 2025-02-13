n.d(t, {
    BO: () => s,
    cq: () => c,
    gI: () => u,
    xN: () => h,
    yA: () => d
});
var i = n(348327),
    l = n.n(i),
    r = n(972959),
    o = n(569545);
let a = (0, r.H)(() => ({ streams: {} }));
function s(e) {
    var t, n;
    let i = (0, o.V9)(e);
    return null !== (n = null === (t = a.useState((e) => e.streams, l())[i]) || void 0 === t ? void 0 : t.zoom) && void 0 !== n ? n : 100;
}
function d(e) {
    return s(e) / 100;
}
function c(e, t) {
    let n = (0, o.V9)(e);
    a.setState((e) => {
        var i;
        return {
            ...e,
            streams: {
                ...e.streams,
                [n]: {
                    zoom: t,
                    fitOverride: null === (i = e.streams[n]) || void 0 === i ? void 0 : i.fitOverride
                }
            }
        };
    }, !0);
}
function u(e, t) {
    let n = (0, o.V9)(e);
    a.setState((e) => {
        var i;
        return {
            ...e,
            streams: {
                ...e.streams,
                [n]: {
                    zoom: null === (i = e.streams[n]) || void 0 === i ? void 0 : i.zoom,
                    fitOverride: t
                }
            }
        };
    });
}
function h(e) {
    var t;
    let n = (0, o.V9)(e);
    return null === (t = a.useState((e) => e.streams, l())[n]) || void 0 === t ? void 0 : t.fitOverride;
}
