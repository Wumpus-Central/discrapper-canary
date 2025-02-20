(e.exports = {}).forEach = function (e, t) {
    for (var n = 0; n < e.length; n++) {
        var r = t(e[n]);
        if (r) return r;
    }
};
