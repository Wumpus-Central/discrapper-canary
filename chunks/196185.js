var r = Math.ceil,
    n = Math.floor;
t.exports =
    Math.trunc ||
    function (t) {
        var e = +t;
        return (e > 0 ? n : r)(e);
    };
