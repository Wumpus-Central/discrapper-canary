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
    (t.createCasualConfiguration = D),
    (t.createConfiguration = M),
    (t.parse = function (e, r, n) {
        return t.casual.parse(e, r, n);
    }),
    (t.parseDate = function (e, r, n) {
        return t.casual.parseDate(e, r, n);
    });
let a = n(r(911789)),
    i = n(r(276668)),
    s = n(r(534279)),
    o = n(r(293037)),
    u = n(r(54685)),
    l = n(r(562915)),
    d = n(r(292511)),
    c = r(550550),
    m = n(r(542599)),
    f = n(r(64526)),
    g = n(r(333840)),
    h = n(r(732469)),
    p = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return p.Chrono;
    },
});
let y = r(115835);
Object.defineProperty(t, "ParsingResult", {
    enumerable: !0,
    get: function () {
        return y.ParsingResult;
    },
}),
    Object.defineProperty(t, "ParsingComponents", {
        enumerable: !0,
        get: function () {
            return y.ParsingComponents;
        },
    }),
    Object.defineProperty(t, "ReferenceWithTimezone", {
        enumerable: !0,
        get: function () {
            return y.ReferenceWithTimezone;
        },
    });
let T = r(115004);
Object.defineProperty(t, "Meridiem", {
    enumerable: !0,
    get: function () {
        return T.Meridiem;
    },
}),
    Object.defineProperty(t, "Weekday", {
        enumerable: !0,
        get: function () {
            return T.Weekday;
        },
    });
let _ = n(r(629929)),
    P = n(r(632467)),
    R = n(r(886217));
function D() {
    let e = M(!1);
    return (
        e.parsers.unshift(new m.default()),
        e.parsers.unshift(new f.default()),
        e.parsers.unshift(new s.default()),
        e.parsers.unshift(new h.default()),
        e.parsers.unshift(new P.default()),
        e
    );
}
function M(e) {
    return (0, c.includeCommonConfiguration)(
        {
            parsers: [
                new R.default(),
                new _.default(!0),
                new a.default(),
                new i.default(),
                new g.default(),
                new o.default(e),
                new u.default(),
            ],
            refiners: [new d.default(), new l.default()],
        },
        e,
    );
}
(t.casual = new p.Chrono(D())), (t.strict = new p.Chrono(M(!0)));
