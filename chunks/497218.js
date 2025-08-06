var r,
    i = n(166898),
    o = n(65183),
    a = n(467159),
    s = o.OrderedMap;
e.exports = {
    getDirectionMap: function (e, t) {
        r ? r.reset() : (r = new i());
        var n = e.getBlockMap(),
            l = n.valueSeq().map(function (e) {
                return a(r).getDirection(e.getText());
            }),
            c = s(n.keySeq().zip(l));
        return null != t && o.is(t, c) ? t : c;
    },
};
