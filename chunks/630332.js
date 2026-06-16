"use strict";
var n = r(265930),
    i = r(116740),
    o = i.List,
    a = i.Repeat,
    s = i.Record,
    u = function () {
        return !0;
    },
    c = s({ start: null, end: null }),
    l = s({ start: null, end: null, decoratorKey: null, leaves: null });
function f(t, e) {
    return t === e;
}
t.exports = {
    generate: function (t, e, r) {
        var i = e.getLength();
        if (!i) return o.of(new l({ start: 0, end: 0, decoratorKey: null, leaves: o.of(new c({ start: 0, end: 0 })) }));
        var s = [],
            p = r ? r.getDecorations(e, t) : o(a(null, i)),
            h = e.getCharacterList();
        return (
            n(p, f, u, function (t, e) {
                var r, i, a;
                s.push(
                    new l({
                        start: t,
                        end: e,
                        decoratorKey: p.get(t),
                        leaves:
                            ((r = h.slice(t, e).toList()),
                            (i = t),
                            (a = []),
                            n(
                                r
                                    .map(function (t) {
                                        return t.getStyle();
                                    })
                                    .toList(),
                                f,
                                u,
                                function (t, e) {
                                    a.push(new c({ start: t + i, end: e + i }));
                                },
                            ),
                            o(a)),
                    }),
                );
            }),
            o(s)
        );
    },
};
