e.exports =
    Number.isNaN ||
    function (e) {
        return e != e;
    };
