var n = Math.round;
t.exports = function (t) {
    var r = n(t);
    return r < 0 ? 0 : r > 255 ? 255 : 255 & r;
};
