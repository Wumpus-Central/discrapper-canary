n.d(t, {
    BO: () => s,
    cq: () => c,
    gI: () => u,
    xN: () => h,
    yA: () => d
});
var i = n(348327),
    o = n.n(i),
    r = n(972959),
    l = n(569545);
let a = (0, r.H)(() => ({ streams: {} }));
function s(e) {
    var t, n;
    let i = (0, l.V9)(e);
    return null !== (n = null === (t = a.useState((e) => e.streams, o())[i]) || void 0 === t ? void 0 : t.zoom) && void 0 !== n ? n : 100;
}
function d(e) {
    return s(e) / 100;
}
function c(e, t) {
    let n = (0, l.V9)(e);
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
    let n = (0, l.V9)(e);
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
    let n = (0, l.V9)(e);
    return null === (t = a.useState((e) => e.streams, o())[n]) || void 0 === t ? void 0 : t.fitOverride;
}
