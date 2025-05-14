var n = Math.ceil,
    r = Math.floor;
t.exports =
    Math.trunc ||
    function (t) {
        var e = +t;
        return (e > 0 ? r : n)(e);
    };
