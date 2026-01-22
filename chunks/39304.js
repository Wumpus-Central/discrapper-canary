n.d(t, {
    HV: () => o,
    WQ: () => a,
    lK: () => s,
}),
    n(321073);
let r = 10,
    i = [];

function a(e) {
    for (i.push(e); i.length > r; ) i.shift();
}

function s() {
    return i.join(" -> ");
}

function o() {
    return i.length > 0 ? i[i.length - 1] : null;
}
