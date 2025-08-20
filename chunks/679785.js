e.exports = function (e) {
    var t = e || "",
        n = arguments.length;
    if (n > 1)
        for (var r = 1; r < n; r++) {
            var i = arguments[r];
            i && (t = (t ? t + " " : "") + i);
        }
    return t;
};
