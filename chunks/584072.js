var r = n(591305),
    i = n(733359).strlen;
e.exports = function (e, t) {
    var n = [];
    return (
        e.findEntityRanges(
            function (e) {
                return !!e.getEntity();
            },
            function (a, o) {
                var s = e.getText(),
                    l = e.getEntityAt(a);
                n.push({
                    offset: i(s.slice(0, a)),
                    length: i(s.slice(a, o)),
                    key: Number(t[r.stringify(l)]),
                });
            },
        ),
        n
    );
};
