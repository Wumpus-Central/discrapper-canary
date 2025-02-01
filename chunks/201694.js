(e.exports = {}).forEach = function (e, t) {
    for (var n = 0; n < e.length; n++) {
        var i = t(e[n]);
        if (i) return i;
    }
};
