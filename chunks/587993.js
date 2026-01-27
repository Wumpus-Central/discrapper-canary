n.d(t, {
    Qd: () => a,
    Qg: () => o,
});
let r = Object.prototype.toString;

function i(e, t) {
    return r.call(e) === `[object ${t}]`;
}

function a(e) {
    return i(e, "Object");
}

function o(e) {
    return !!(e && e.then && "function" == typeof e.then);
}
