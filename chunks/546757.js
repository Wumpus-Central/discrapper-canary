n.d(t, { Z: () => r });
let r = function (e) {
    var t = typeof e;
    return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e;
};
