var t = 9007199254740991;
e.exports = function (e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= t;
};
