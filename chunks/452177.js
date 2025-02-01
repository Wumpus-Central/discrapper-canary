var i = n(690244),
    r = n(76542),
    a = i('%TypeError%');
e.exports = function (e) {
    if ('number' != typeof e && 'bigint' != typeof e) throw new a('argument must be a Number or a BigInt');
    var t = e < 0 ? -r(-e) : r(e);
    return 0 === t ? 0 : t;
};
