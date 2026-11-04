var n,
    a =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, r, n) {
                  void 0 === n && (n = r);
                  var a = Object.getOwnPropertyDescriptor(t, r);
                  ((!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
                      (a = {
                          enumerable: !0,
                          get: function () {
                              return t[r];
                          },
                      }),
                      Object.defineProperty(e, n, a));
              }
            : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
              }),
    i =
        (this && this.__setModuleDefault) ||
        (Object.create
            ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
              }
            : function (e, t) {
                  e.default = t;
              }),
    s =
        (this && this.__importStar) ||
        ((n = function (e) {
            return (n =
                Object.getOwnPropertyNames ||
                function (e) {
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t;
                })(e);
        }),
        function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r = n(e), s = 0; s < r.length; s++) "default" !== r[s] && a(t, e, r[s]);
            return (i(t, e), t);
        }),
    o =
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
        t.hans =
        t.hant =
            void 0),
    (t.parse = function (e, r, n) {
        return t.casual.parse(e, r, n);
    }),
    (t.parseDate = function (e, r, n) {
        return t.casual.parseDate(e, r, n);
    }),
    (t.createCasualConfiguration = A),
    (t.createConfiguration = E));
let u = r(550550),
    l = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return l.Chrono;
    },
});
let d = r(115835);
(Object.defineProperty(t, "ParsingResult", {
    enumerable: !0,
    get: function () {
        return d.ParsingResult;
    },
}),
    Object.defineProperty(t, "ParsingComponents", {
        enumerable: !0,
        get: function () {
            return d.ParsingComponents;
        },
    }),
    Object.defineProperty(t, "ReferenceWithTimezone", {
        enumerable: !0,
        get: function () {
            return d.ReferenceWithTimezone;
        },
    }));
let c = r(115004);
(Object.defineProperty(t, "Meridiem", {
    enumerable: !0,
    get: function () {
        return c.Meridiem;
    },
}),
    Object.defineProperty(t, "Weekday", {
        enumerable: !0,
        get: function () {
            return c.Weekday;
        },
    }));
let m = o(r(888234)),
    f = o(r(952421)),
    g = o(r(546778)),
    h = o(r(954885)),
    p = o(r(88174)),
    y = o(r(102865)),
    P = o(r(195858)),
    T = o(r(232415)),
    _ = o(r(521556)),
    M = o(r(354887)),
    D = o(r(786100)),
    b = o(r(377127)),
    R = o(r(192672)),
    C = o(r(451698));
function A() {
    let e = E();
    return (e.parsers.unshift(new P.default()), e);
}
function E() {
    let e = (0, u.includeCommonConfiguration)({
        parsers: [
            new T.default(),
            new f.default(),
            new M.default(),
            new h.default(),
            new b.default(),
            new y.default(),
            new D.default(),
            new p.default(),
            new _.default(),
            new g.default(),
        ],
        refiners: [new R.default(), new C.default()],
    });
    return ((e.refiners = e.refiners.filter((e) => !(e instanceof m.default))), e);
}
((t.hant = s(r(543544))), (t.hans = s(r(735277))), (t.casual = new l.Chrono(A())), (t.strict = new l.Chrono(E())));
