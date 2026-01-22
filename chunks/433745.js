n.d(t, {
    Cf: () => d,
    RA: () => s,
    _B: () => u,
    a3: () => i,
    es: () => o,
    rW: () => a,
    tN: () => f,
    uR: () => c,
    wl: () => l,
});
var r = n(341915);

function i(e) {
    return [r.uF.GIFT_INVENTORY_FOR_YOU, r.uF.GIFT_INVENTORY_OTHER].includes(e);
}

function a(e) {
    return e === r.uF.GIFT_INVENTORY_FOR_YOU || !i(e);
}

function s(e) {
    let { quest: t, location: n } = e,
        { userStatus: r } = t;
    return ((null == r ? void 0 : r.enrolledAt) != null && null == r.completedAt) || a(n);
}
let o = 100,
    l = 20,
    c = 32,
    u = 1e3,
    d = 460,
    f = 280;
