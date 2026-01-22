e.exports = function (e, t, n) {
    for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
    return -1;
};
