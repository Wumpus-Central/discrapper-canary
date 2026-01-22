var t = Math.floor,
    n = Math.random;
e.exports = function (e, r) {
    return e + t(n() * (r - e + 1));
};
