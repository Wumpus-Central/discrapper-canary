"use strict";
n.d(t, { A: () => b });
var r = n(792976),
    i = n(341251),
    a = n(322010),
    s = n(210296),
    o = n(8222),
    l = n(199577),
    u = n(942548),
    c = n(29782),
    d = n(189165),
    _ = n(761328),
    f = n(545570),
    p = n(125659),
    h = n(916018),
    m = n(905323),
    g = n(31111),
    E = n(2268),
    A = n(774188),
    I = n(183806),
    T = n(507833),
    y = n(107125),
    S = n(83707),
    v = n(730846),
    C = n(161666);
class b {
    createCasualConfiguration(e = !1) {
        let t = this.createConfiguration(!1, e);
        return (
            t.parsers.push(new h.A()),
            t.parsers.push(new m.A()),
            t.parsers.push(new s.A()),
            t.parsers.push(new E.A()),
            t.parsers.push(new I.A()),
            t.refiners.push(new C.A()),
            t
        );
    }
    createConfiguration(e = !0, t = !1) {
        let n = (0, p.i)(
            {
                parsers: [
                    new A.A(t),
                    new r.A(e),
                    new i.A(),
                    new a.A(t),
                    new g.A(),
                    new l.A(),
                    new u.A(e),
                    new c.A(e),
                    new d.A(e),
                ],
                refiners: [new f.A()],
            },
            e,
        );
        return (
            n.parsers.unshift(new o.A(e)),
            n.refiners.unshift(new y.A()),
            n.refiners.unshift(new T.A()),
            n.refiners.unshift(new S.A()),
            n.refiners.push(new f.A()),
            n.refiners.push(new v.A()),
            n.refiners.push(new _.A()),
            n
        );
    }
}
