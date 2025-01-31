s.d(e, {
    J8: () => r,
    PO: () => i
});
let n = Object.prototype.toString;
function i(t) {
    return '[object Object]' === n.call(t);
}
function r(t) {
    return !!(t && t.then && 'function' == typeof t.then);
}
