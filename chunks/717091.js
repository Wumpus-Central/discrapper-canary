var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.GB = t.strict = t.casual = void 0),
    (t.parse = function (e, r, n) {
        return t.casual.parse(e, r, n);
    }),
    (t.parseDate = function (e, r, n) {
        return t.casual.parseDate(e, r, n);
    }),
    (t.createCasualConfiguration = R),
    (t.createConfiguration = C));
let a = n(r(223255)),
    i = n(r(435798)),
    s = n(r(243039)),
    o = n(r(945921)),
    u = n(r(445772)),
    l = n(r(379694)),
    d = n(r(745259)),
    c = n(r(542835)),
    m = n(r(965392)),
    f = n(r(962251)),
    g = n(r(611143)),
    h = r(550550),
    p = n(r(858081)),
    y = n(r(466344)),
    P = n(r(776998)),
    T = n(r(111051)),
    _ = r(329454),
    M = n(r(629929)),
    D = n(r(861797)),
    b = n(r(104796));
function R(e = !1) {
    let t = C(!1, e);
    return (
        t.parsers.unshift(new p.default()),
        t.parsers.unshift(new y.default()),
        t.parsers.unshift(new o.default()),
        t.parsers.unshift(new T.default()),
        t.parsers.unshift(new D.default()),
        t
    );
}
function C(e = !0, t = !1) {
    return (0, h.includeCommonConfiguration)(
        {
            parsers: [
                new M.default(t),
                new a.default(),
                new i.default(),
                new s.default(),
                new P.default(),
                new u.default(),
                new l.default(),
                new d.default(e),
                new c.default(e),
                new m.default(e),
            ],
            refiners: [new b.default(), new g.default(), new f.default()],
        },
        e,
    );
}
((t.casual = new _.Chrono(R(!1))), (t.strict = new _.Chrono(C(!0, !1))), (t.GB = new _.Chrono(C(!1, !0))));
