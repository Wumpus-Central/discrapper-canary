var r = n(257469),
    i = n(65183),
    a = i.List,
    o = i.Repeat,
    s = i.Record,
    l = function () {
        return !0;
    },
    c = s({
        start: null,
        end: null,
    }),
    u = s({
        start: null,
        end: null,
        decoratorKey: null,
        leaves: null,
    });
function d(e, t) {
    var n = [];
    return (
        r(
            e
                .map(function (e) {
                    return e.getStyle();
                })
                .toList(),
            f,
            l,
            function (e, r) {
                n.push(
                    new c({
                        start: e + t,
                        end: r + t,
                    }),
                );
            },
        ),
        a(n)
    );
}
function f(e, t) {
    return e === t;
}
e.exports = {
    generate: function (e, t, n) {
        var i = t.getLength();
        if (!i)
            return a.of(
                new u({
                    start: 0,
                    end: 0,
                    decoratorKey: null,
                    leaves: a.of(
                        new c({
                            start: 0,
                            end: 0,
                        }),
                    ),
                }),
            );
        var s = [],
            _ = n ? n.getDecorations(t, e) : a(o(null, i)),
            p = t.getCharacterList();
        return (
            r(_, f, l, function (e, t) {
                s.push(
                    new u({
                        start: e,
                        end: t,
                        decoratorKey: _.get(e),
                        leaves: d(p.slice(e, t).toList(), e),
                    }),
                );
            }),
            a(s)
        );
    },
};
