var i = n(546299).rotr32;
function r(e, t, n, i) {
    return 0 === e ? a(t, n, i) : 1 === e || 3 === e ? o(t, n, i) : 2 === e ? s(t, n, i) : void 0;
}
function a(e, t, n) {
    return (e & t) ^ (~e & n);
}
function s(e, t, n) {
    return (e & t) ^ (e & n) ^ (t & n);
}
function o(e, t, n) {
    return e ^ t ^ n;
}
function l(e) {
    return i(e, 2) ^ i(e, 13) ^ i(e, 22);
}
function u(e) {
    return i(e, 6) ^ i(e, 11) ^ i(e, 25);
}
function c(e) {
    return i(e, 7) ^ i(e, 18) ^ (e >>> 3);
}
function d(e) {
    return i(e, 17) ^ i(e, 19) ^ (e >>> 10);
}
(t.ft_1 = r), (t.ch32 = a), (t.maj32 = s), (t.p32 = o), (t.s0_256 = l), (t.s1_256 = u), (t.g0_256 = c), (t.g1_256 = d);
