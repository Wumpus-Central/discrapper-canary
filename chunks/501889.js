t.exports = function (t) {
    var e = typeof t;
    return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t;
};
