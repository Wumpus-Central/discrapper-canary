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
    (t.createCasualConfiguration = p),
    (t.createConfiguration = y);
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
let u = n(r(629929)),
    l = n(r(121200)),
    d = n(r(45005)),
    c = n(r(581711)),
    m = n(r(773939)),
    f = n(r(3484)),
    g = n(r(628647)),
    h = n(r(570286));
function p(e = !0) {
    let t = y(!1, e);
    return t.parsers.push(new g.default()), t.parsers.push(new h.default()), t;
}
function y(e = !0, t = !0) {
    return (0, a.includeCommonConfiguration)(
        {
            parsers: [new u.default(t), new l.default(), new d.default(), new f.default()],
            refiners: [new c.default(), new m.default()],
        },
        e,
    );
}
(t.casual = new i.Chrono(p())), (t.strict = new i.Chrono(y(!0)));
