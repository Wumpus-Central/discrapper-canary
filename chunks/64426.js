var t = Math.ceil,
    n = Math.floor;
e.exports =
    Math.trunc ||
    function (e) {
        var r = +e;
        return (r > 0 ? n : t)(r);
    };
