var e = Math.ceil,
    a = Math.floor;
t.exports =
    Math.trunc ||
    function (t) {
        var r = +t;
        return (r > 0 ? a : e)(r);
    };
