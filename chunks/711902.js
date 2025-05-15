var r = n(815329),
    i = n(425194),
    o = n(883367),
    a = n(699367);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!a(e)) throw new r('Assertion failed: `Desc` must be a Property Descriptor');
    return !(i(e) || o(e));
};
