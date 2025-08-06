var r = n(733359),
    i = n(720379),
    o = function (e, t) {
        return e === t;
    },
    a = function (e) {
        return !!e;
    },
    s = [];
function l(e, t, n) {
    var s = [];
    return (
        i(
            t
                .map(function (e) {
                    return e.has(n);
                })
                .toList(),
            o,
            a,
            function (t, i) {
                var o = e.getText();
                s.push({
                    offset: r.strlen(o.slice(0, t)),
                    length: r.strlen(o.slice(t, i)),
                    style: n
                });
            }
        ),
        s
    );
}
e.exports = function (e) {
    var t = e
            .getCharacterList()
            .map(function (e) {
                return e.getStyle();
            })
            .toList(),
        n = t
            .flatten()
            .toSet()
            .map(function (n) {
                return l(e, t, n);
            });
    return Array.prototype.concat.apply(s, n.toJS());
};
