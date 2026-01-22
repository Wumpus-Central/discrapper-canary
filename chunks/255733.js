var r = n(381265),
    i = n(189891);
e.exports = function () {
    var e = i();
    return (
        r(
            Array.prototype,
            { map: e },
            {
                map: function () {
                    return Array.prototype.map !== e;
                },
            },
        ),
        e
    );
};
