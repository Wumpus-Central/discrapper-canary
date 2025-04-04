var r = n(177499),
    i = n(815329);
e.exports = function (e) {
    if ('number' != typeof e && 'bigint' != typeof e) throw new i('argument must be a Number or a BigInt');
    var t = e < 0 ? -r(-e) : r(e);
    return 0 === t ? 0 : t;
};
