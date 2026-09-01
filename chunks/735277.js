var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.strict =
        t.casual =
        t.hans =
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
    (t.createCasualConfiguration = y),
    (t.createConfiguration = T);
let a = n(r(888234)),
    i = r(550550),
    s = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return s.Chrono;
    },
});
let o = r(115835);
Object.defineProperty(t, "ParsingResult", {
    enumerable: !0,
    get: function () {
        return o.ParsingResult;
    },
}),
    Object.defineProperty(t, "ParsingComponents", {
        enumerable: !0,
        get: function () {
            return o.ParsingComponents;
        },
    }),
    Object.defineProperty(t, "ReferenceWithTimezone", {
        enumerable: !0,
        get: function () {
            return o.ReferenceWithTimezone;
        },
    });
let u = r(115004);
Object.defineProperty(t, "Meridiem", {
    enumerable: !0,
    get: function () {
        return u.Meridiem;
    },
}),
    Object.defineProperty(t, "Weekday", {
        enumerable: !0,
        get: function () {
            return u.Weekday;
        },
    });
let l = n(r(326312)),
    d = n(r(952421)),
    c = n(r(546778)),
    m = n(r(954885)),
    f = n(r(88174)),
    g = n(r(102865)),
    h = n(r(635184)),
    p = n(r(556770));
function y() {
    let e = T();
    return e.parsers.unshift(new l.default()), e;
}
function T() {
    let e = (0, i.includeCommonConfiguration)({
        parsers: [new d.default(), new m.default(), new g.default(), new f.default(), new c.default()],
        refiners: [new h.default(), new p.default()],
    });
    return (e.refiners = e.refiners.filter((e) => !(e instanceof a.default))), e;
}
(t.hans = new s.Chrono(y())), (t.casual = new s.Chrono(y())), (t.strict = new s.Chrono(T()));
