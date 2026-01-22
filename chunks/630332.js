var r = n(265930),
    i = n(116740),
    a = i.List,
    s = i.Repeat,
    o = i.Record,
    l = function () {
        return !0;
    },
    c = o({
        start: null,
        end: null,
    }),
    u = o({
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
        var o = [],
            p = n ? n.getDecorations(t, e) : a(s(null, i)),
            _ = t.getCharacterList();
        return (
            r(p, f, l, function (e, t) {
                o.push(
                    new u({
                        start: e,
                        end: t,
                        decoratorKey: p.get(e),
                        leaves: d(_.slice(e, t).toList(), e),
                    }),
                );
            }),
            a(o)
        );
    },
};
