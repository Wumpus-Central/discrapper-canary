var r = n(690244),
    i = n(76542),
    o = r('%TypeError%');
e.exports = function (e) {
    if ('number' != typeof e && 'bigint' != typeof e) throw new o('argument must be a Number or a BigInt');
    var t = e < 0 ? -i(-e) : i(e);
    return 0 === t ? 0 : t;
};
