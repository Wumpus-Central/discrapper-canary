var a,
    o = t(705723);
t(864733)(r, '__esModule', { value: !0 }), (r.default = void 0);
var n = o(t(131619)),
    l = o(t(698275)),
    i = o(t(972380)),
    s = o(t(823003)),
    u = o(t(139726)),
    d = o(t(485749)),
    c = o(t(690416)),
    p = new d.default([]);
(0, u.default)((a = (0, s.default)((0, i.default)(c.default).call(c.default)))).call(a, function (e) {
    var r,
        t,
        a = c.default.get(e);
    a &&
        (0, u.default)((r = (0, l.default)((t = [])).call(t, (0, s.default)(a.baseConcepts), (0, s.default)(a.relatedConcepts)))).call(r, function (r) {
            if ('HTML' === r.module) {
                var t = r.concept;
                if (t) {
                    var a = p.get(e) || new n.default([]);
                    a.add(t), p.set(e, a);
                }
            }
        });
}),
    (r.default = p);
