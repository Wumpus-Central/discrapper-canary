t.exports = function (t) {
    var e = t || '',
        r = arguments.length;
    if (r > 1)
        for (var n = 1; n < r; n++) {
            var i = arguments[n];
            i && (e = (e ? e + ' ' : '') + i);
        }
    return e;
};
