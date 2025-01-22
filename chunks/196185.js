var n = Math.ceil,
    r = Math.floor;
e.exports =
    Math.trunc ||
    function (e) {
        var i = +e;
        return (i > 0 ? r : n)(i);
    };
