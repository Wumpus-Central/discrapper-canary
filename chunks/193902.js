n.d(t, { Z: () => A });
var r = n(547750),
    i = n(540469),
    a = n(890378),
    o = n(815985),
    s = n(290717),
    l = n(468083),
    c = n(289504),
    u = n(362858),
    d = n(548354),
    f = n(111166),
    p = n(333665),
    _ = n(717319),
    m = n(533435),
    h = n(197256),
    g = n(322065),
    E = n(843458),
    b = n(659124),
    y = n(979655),
    O = n(369697),
    v = n(250265),
    S = n(411307),
    I = n(198435),
    T = n(859126);
class A {
    createCasualConfiguration(e = !1) {
        let t = this.createConfiguration(!1, e);
        return (
            t.parsers.push(new m.Z()),
            t.parsers.push(new h.Z()),
            t.parsers.push(new o.Z()),
            t.parsers.push(new E.Z()),
            t.parsers.push(new y.Z()),
            t.refiners.push(new T.Z()),
            t
        );
    }
    createConfiguration(e = !0, t = !1) {
        let n = (0, _.l)(
            {
                parsers: [
                    new b.Z(t),
                    new r.Z(e),
                    new i.Z(),
                    new a.Z(t),
                    new g.Z(),
                    new l.Z(),
                    new c.Z(e),
                    new u.Z(e),
                    new d.Z(e),
                ],
                refiners: [new p.Z()],
            },
            e,
        );
        return (
            n.parsers.unshift(new s.Z(e)),
            n.refiners.unshift(new v.Z()),
            n.refiners.unshift(new O.Z()),
            n.refiners.unshift(new S.Z()),
            n.refiners.push(new p.Z()),
            n.refiners.push(new I.Z()),
            n.refiners.push(new f.Z()),
            n
        );
    }
}
