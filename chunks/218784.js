t.exports =
    Math.sign ||
    function (t) {
        var n = +t;
        return 0 === n || n != n ? n : n < 0 ? -1 : 1;
    };
