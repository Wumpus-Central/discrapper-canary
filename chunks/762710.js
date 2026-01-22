var r = n(797686);
e.exports = function (e, t) {
    var n = [];
    return (
        e.findEntityRanges(
            function (e) {
                return e.getEntity() === t;
            },
            function (e, t) {
                n.push({
                    start: e,
                    end: t,
                });
            },
        ),
        n.length || r(!1),
        n
    );
};
