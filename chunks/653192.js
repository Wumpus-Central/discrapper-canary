var r = n(370260),
    i = n(733359).strlen;
e.exports = function (e, t) {
    var n = [];
    return (
        e.findEntityRanges(
            function (e) {
                return !!e.getEntity();
            },
            function (o, a) {
                var s = e.getText(),
                    l = e.getEntityAt(o);
                n.push({
                    offset: i(s.slice(0, o)),
                    length: i(s.slice(o, a)),
                    key: Number(t[r.stringify(l)])
                });
            }
        ),
        n
    );
};
