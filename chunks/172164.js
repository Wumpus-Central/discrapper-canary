var r = Math.ceil,
    e = Math.floor;
t.exports =
    Math.trunc ||
    function (t) {
        var n = +t;
        return (n > 0 ? e : r)(n);
    };
