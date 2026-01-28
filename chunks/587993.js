r.d(e, {
    Qd: () => s,
    Qg: () => i,
});
let n = Object.prototype.toString;

function s(t) {
    return "[object Object]" === n.call(t);
}

function i(t) {
    return !!(t && t.then && "function" == typeof t.then);
}
