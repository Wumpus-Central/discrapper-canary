var a,
    l = t(828066);
t(697509)(r, "__esModule", { value: !0 }), (r.default = void 0);
var o = l(t(442160)),
    s = l(t(520636)),
    n = l(t(36556)),
    i = l(t(688057)),
    u = l(t(729823)),
    d = l(t(747562)),
    c = l(t(358508)),
    p = new d.default([]);
(0, u.default)((a = (0, i.default)((0, n.default)(c.default).call(c.default)))).call(a, function (e) {
    var r,
        t,
        a = c.default.get(e);
    a &&
        (0, u.default)(
            (r = (0, s.default)((t = [])).call(t, (0, i.default)(a.baseConcepts), (0, i.default)(a.relatedConcepts))),
        ).call(r, function (r) {
            if ("HTML" === r.module) {
                var t = r.concept;
                if (t) {
                    var a = p.get(e) || new o.default([]);
                    a.add(t), p.set(e, a);
                }
            }
        });
}),
    (r.default = p);
