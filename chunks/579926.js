r.d(t, { A: () => F });
var n = r(792976),
    s = r(341251),
    a = r(322010),
    i = r(210296),
    o = r(8222),
    l = r(199577),
    u = r(942548),
    d = r(29782),
    m = r(189165),
    c = r(761328),
    g = r(545570),
    h = r(125659),
    f = r(916018),
    p = r(905323),
    y = r(31111),
    x = r(2268),
    w = r(774188),
    A = r(183806),
    D = r(507833),
    P = r(107125),
    C = r(83707),
    v = r(730846),
    T = r(161666);
class F {
    createCasualConfiguration(e = !1) {
        let t = this.createConfiguration(!1, e);
        return (
            t.parsers.push(new f.A()),
            t.parsers.push(new p.A()),
            t.parsers.push(new i.A()),
            t.parsers.push(new x.A()),
            t.parsers.push(new A.A()),
            t.refiners.push(new T.A()),
            t
        );
    }
    createConfiguration(e = !0, t = !1) {
        let r = (0, h.i)(
            {
                parsers: [
                    new w.A(t),
                    new n.A(e),
                    new s.A(),
                    new a.A(t),
                    new y.A(),
                    new l.A(),
                    new u.A(e),
                    new d.A(e),
                    new m.A(e),
                ],
                refiners: [new g.A()],
            },
            e,
        );
        return (
            r.parsers.unshift(new o.A(e)),
            r.refiners.unshift(new P.A()),
            r.refiners.unshift(new D.A()),
            r.refiners.unshift(new C.A()),
            r.refiners.push(new g.A()),
            r.refiners.push(new v.A()),
            r.refiners.push(new c.A()),
            r
        );
    }
}
