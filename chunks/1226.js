n.d(t, {
    BO: () => s,
    cq: () => d,
    gI: () => u,
    xN: () => h,
    yA: () => c
});
var i = n(348327),
    r = n.n(i),
    o = n(972959),
    a = n(569545);
let l = (0, o.H)(() => ({ streams: {} }));
function s(e) {
    var t, n;
    let i = (0, a.V9)(e);
    return null !== (n = null === (t = l.useState((e) => e.streams, r())[i]) || void 0 === t ? void 0 : t.zoom) && void 0 !== n ? n : 100;
}
function c(e) {
    return s(e) / 100;
}
function d(e, t) {
    let n = (0, a.V9)(e);
    l.setState((e) => {
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
    let n = (0, a.V9)(e);
    l.setState((e) => {
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
    let n = (0, a.V9)(e);
    return null === (t = l.useState((e) => e.streams, r())[n]) || void 0 === t ? void 0 : t.fitOverride;
}
