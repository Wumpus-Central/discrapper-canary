var r = n(434431),
    i = Math.floor;
e.exports =
    Number.isInteger ||
    function (e) {
        return !r(e) && isFinite(e) && i(e) === e;
    };
