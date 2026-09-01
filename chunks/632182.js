var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
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
    (t.createCasualConfiguration = P),
    (t.createConfiguration = R);
let a = r(550550),
    i = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return i.Chrono;
    },
});
let s = r(115835);
Object.defineProperty(t, "ParsingResult", {
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
    });
let o = r(115004);
Object.defineProperty(t, "Meridiem", {
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
    });
let u = n(r(64023)),
    l = n(r(724593)),
    d = n(r(629929)),
    c = n(r(497565)),
    m = n(r(40959)),
    f = n(r(279555)),
    g = n(r(373984)),
    h = n(r(745237)),
    p = n(r(808748)),
    y = n(r(973389)),
    T = n(r(132605)),
    _ = n(r(451514));
function P(e = !0) {
    let t = R(!1, e);
    return (
        t.parsers.unshift(new u.default()), t.parsers.unshift(new l.default()), t.parsers.unshift(new _.default()), t
    );
}
function R(e = !0, t = !0) {
    return (0, a.includeCommonConfiguration)(
        {
            parsers: [
                new d.default(t),
                new p.default(),
                new c.default(),
                new h.default(),
                new y.default(),
                new T.default(),
                new g.default(),
            ],
            refiners: [new m.default(), new f.default()],
        },
        e,
    );
}
(t.casual = new i.Chrono(P())), (t.strict = new i.Chrono(R(!0)));
