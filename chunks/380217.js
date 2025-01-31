var n = r(733359),
    i = r(181676),
    o = function (t, e) {
        return t === e;
    },
    a = function (t) {
        return !!t;
    },
    u = [];
t.exports = function (t) {
    var e = t
            .getCharacterList()
            .map(function (t) {
                return t.getStyle();
            })
            .toList(),
        r = e
            .flatten()
            .toSet()
            .map(function (r) {
                var u;
                return (
                    (u = []),
                    i(
                        e
                            .map(function (t) {
                                return t.has(r);
                            })
                            .toList(),
                        o,
                        a,
                        function (e, i) {
                            var o = t.getText();
                            u.push({
                                offset: n.strlen(o.slice(0, e)),
                                length: n.strlen(o.slice(e, i)),
                                style: r
                            });
                        }
                    ),
                    u
                );
            });
    return Array.prototype.concat.apply(u, r.toJS());
};
