var t = Math.floor,
    n = Math.random;
e.exports = function (e, i) {
    return e + t(n() * (i - e + 1));
};
