var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.strict =
        t.casual =
        t.Weekday =
        t.Meridiem =
        t.ReferenceWithTimezone =
        t.ParsingComponents =
        t.ParsingResult =
        t.Chrono =
            void 0),
    (t.parse = function (e, r, n) {
        return t.casual.parse(e, r, n);
    }),
    (t.parseDate = function (e, r, n) {
        return t.casual.parseDate(e, r, n);
    }),
    (t.createCasualConfiguration = C),
    (t.createConfiguration = A));
let a = r(550550),
    i = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return i.Chrono;
    },
});
let s = r(115835);
(Object.defineProperty(t, "ParsingResult", {
    enumerable: !0,
    get: function () {
        return s.ParsingResult;
    },
}),
    Object.defineProperty(t, "ParsingComponents", {
        enumerable: !0,
        get: function () {
            return s.ParsingComponents;
        },
    }),
    Object.defineProperty(t, "ReferenceWithTimezone", {
        enumerable: !0,
        get: function () {
            return s.ReferenceWithTimezone;
        },
    }));
let o = r(115004);
(Object.defineProperty(t, "Meridiem", {
    enumerable: !0,
    get: function () {
        return o.Meridiem;
    },
}),
    Object.defineProperty(t, "Weekday", {
        enumerable: !0,
        get: function () {
            return o.Weekday;
        },
    }));
let u = n(r(463791)),
    l = n(r(73939)),
    d = n(r(617139)),
    c = n(r(913866)),
    m = n(r(629929)),
    f = n(r(116729)),
    g = n(r(64236)),
    h = n(r(48393)),
    p = n(r(537371)),
    y = n(r(309084)),
    P = n(r(378105)),
    T = n(r(754634)),
    _ = n(r(619846)),
    M = n(r(763423)),
    D = n(r(232585)),
    b = n(r(224137)),
    R = n(r(318106));
function C(e = !0) {
    let t = A(!1, e);
    return (
        t.parsers.unshift(new d.default()),
        t.parsers.unshift(new c.default()),
        t.parsers.unshift(new _.default()),
        t.parsers.unshift(new p.default()),
        t.parsers.unshift(new D.default()),
        t.parsers.unshift(new M.default()),
        t
    );
}
function A(e = !0, t = !0) {
    return (0, a.includeCommonConfiguration)(
        {
            parsers: [
                new m.default(t),
                new f.default(),
                new h.default(),
                new p.default(),
                new g.default(),
                new T.default(),
                new y.default(),
                new P.default(e),
                new b.default(e),
                new R.default(e),
            ],
            refiners: [new l.default(), new u.default()],
        },
        e,
    );
}
((t.casual = new i.Chrono(C())), (t.strict = new i.Chrono(A(!0))));
