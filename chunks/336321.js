var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.GB =
        t.strict =
        t.casual =
        t.configuration =
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
    });
let a = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return a.Chrono;
    },
});
let i = r(115835);
Object.defineProperty(t, "ParsingResult", {
    enumerable: !0,
    get: function () {
        return i.ParsingResult;
    },
}),
    Object.defineProperty(t, "ParsingComponents", {
        enumerable: !0,
        get: function () {
            return i.ParsingComponents;
        },
    }),
    Object.defineProperty(t, "ReferenceWithTimezone", {
        enumerable: !0,
        get: function () {
            return i.ReferenceWithTimezone;
        },
    });
let s = r(115004);
Object.defineProperty(t, "Meridiem", {
    enumerable: !0,
    get: function () {
        return s.Meridiem;
    },
}),
    Object.defineProperty(t, "Weekday", {
        enumerable: !0,
        get: function () {
            return s.Weekday;
        },
    }),
    (t.configuration = new (n(r(614583)).default)()),
    (t.casual = new a.Chrono(t.configuration.createCasualConfiguration(!1))),
    (t.strict = new a.Chrono(t.configuration.createConfiguration(!0, !1))),
    (t.GB = new a.Chrono(t.configuration.createCasualConfiguration(!0)));
