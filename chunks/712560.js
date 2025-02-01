var t = Math.round;
e.exports = function (e) {
    var n = t(e);
    return n < 0 ? 0 : n > 255 ? 255 : 255 & n;
};
