"use strict";
var a,
    l = t(605685);
t(697509)(r, "__esModule", { value: !0 }), (r.default = void 0);
var o = l(t(442160)),
    s = l(t(733296)),
    i = l(t(768790)),
    n = l(t(204955)),
    u = l(t(287334)),
    d = l(t(520636)),
    c = l(t(36556)),
    p = l(t(132819)),
    m = l(t(729823)),
    b = l(t(747562)),
    f = l(t(358508)),
    v = new b.default([]);
(0, m.default)((a = (0, p.default)((0, c.default)(f.default).call(f.default)))).call(a, function (e) {
    var r,
        t,
        a = f.default.get(e);
    a &&
        (0, m.default)(
            (r = (0, d.default)((t = [])).call(t, (0, p.default)(a.baseConcepts), (0, p.default)(a.relatedConcepts))),
        ).call(r, function (r) {
            if ("HTML" === r.module) {
                var t = r.concept;
                if (t) {
                    var a,
                        l = (0, u.default)(t),
                        d = ((0, n.default)((a = (0, p.default)((0, i.default)(v).call(v)))).call(a, function (e) {
                            var r = (0, s.default)(e, 2),
                                t = r[0];
                            return r[1], (0, u.default)(t) === l;
                        }) || [])[1];
                    d || (d = new o.default([])), d.add(e), v.set(t, d);
                }
            }
        });
}),
    (r.default = v);
