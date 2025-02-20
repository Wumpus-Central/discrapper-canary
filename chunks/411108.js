var r = n(546299).rotr32;
function i(e, t, n, r) {
    return 0 === e ? o(t, n, r) : 1 === e || 3 === e ? s(t, n, r) : 2 === e ? a(t, n, r) : void 0;
}
function o(e, t, n) {
    return (e & t) ^ (~e & n);
}
function a(e, t, n) {
    return (e & t) ^ (e & n) ^ (t & n);
}
function s(e, t, n) {
    return e ^ t ^ n;
}
function l(e) {
    return r(e, 2) ^ r(e, 13) ^ r(e, 22);
}
function c(e) {
    return r(e, 6) ^ r(e, 11) ^ r(e, 25);
}
function u(e) {
    return r(e, 7) ^ r(e, 18) ^ (e >>> 3);
}
function d(e) {
    return r(e, 17) ^ r(e, 19) ^ (e >>> 10);
}
(t.ft_1 = i), (t.ch32 = o), (t.maj32 = a), (t.p32 = s), (t.s0_256 = l), (t.s1_256 = c), (t.g0_256 = u), (t.g1_256 = d);
