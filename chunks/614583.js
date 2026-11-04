var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 });
let a = n(r(806531)),
    i = n(r(84578)),
    s = n(r(472683)),
    o = n(r(586965)),
    u = n(r(736929)),
    l = n(r(867562)),
    d = n(r(370647)),
    c = n(r(65743)),
    m = n(r(174516)),
    f = n(r(605571)),
    g = n(r(173503)),
    h = r(550550),
    p = n(r(196333)),
    y = n(r(166452)),
    P = n(r(637730)),
    T = n(r(173215)),
    _ = n(r(629929)),
    M = n(r(296097)),
    D = n(r(693242)),
    b = n(r(483548)),
    R = n(r(913912)),
    C = n(r(19903)),
    A = n(r(637755));
t.default = class {
    createCasualConfiguration(e = !1) {
        let t = this.createConfiguration(!1, e);
        return (
            t.parsers.push(new p.default()),
            t.parsers.push(new y.default()),
            t.parsers.push(new o.default()),
            t.parsers.push(new T.default()),
            t.parsers.push(new M.default()),
            t.refiners.push(new A.default()),
            t
        );
    }
    createConfiguration(e = !0, t = !1) {
        let r = (0, h.includeCommonConfiguration)(
            {
                parsers: [
                    new _.default(t),
                    new a.default(e),
                    new i.default(),
                    new s.default(t),
                    new P.default(),
                    new l.default(),
                    new d.default(e),
                    new c.default(e),
                    new m.default(e),
                ],
                refiners: [new g.default()],
            },
            e,
        );
        return (
            r.parsers.unshift(new u.default(e)),
            r.refiners.unshift(new b.default()),
            r.refiners.unshift(new D.default()),
            r.refiners.unshift(new R.default()),
            r.refiners.push(new g.default()),
            r.refiners.push(new C.default()),
            r.refiners.push(new f.default()),
            r
        );
    }
};
