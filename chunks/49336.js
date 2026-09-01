var n,
    a =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, r, n) {
                  void 0 === n && (n = r);
                  var a = Object.getOwnPropertyDescriptor(t, r);
                  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
                      (a = {
                          enumerable: !0,
                          get: function () {
                              return t[r];
                          },
                      }),
                      Object.defineProperty(e, n, a);
              }
            : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r]);
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
            return i(t, e), t;
        });
Object.defineProperty(t, "__esModule", { value: !0 });
let o = s(r(681743)),
    u = r(767130),
    l = r(414533);
class d extends l.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return "(\u0441\u0435\u0439\u0447\u0430\u0441|\u043F\u0440\u043E\u0448\u043B\u044B\u043C\\s*\u0432\u0435\u0447\u0435\u0440\u043E\u043C|\u043F\u0440\u043E\u0448\u043B\u043E\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u0441\u0435\u0433\u043E\u0434\u043D\u044F\\s*\u043D\u043E\u0447\u044C\u044E|\u044D\u0442\u043E\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u043D\u043E\u0447\u044C\u044E|\u044D\u0442\u0438\u043C \u0443\u0442\u0440\u043E\u043C|\u0443\u0442\u0440\u043E\u043C|\u0443\u0442\u0440\u0430|\u0432\\s*\u043F\u043E\u043B\u0434\u0435\u043D\u044C|\u0432\u0435\u0447\u0435\u0440\u043E\u043C|\u0432\u0435\u0447\u0435\u0440\u0430|\u0432\\s*\u043F\u043E\u043B\u043D\u043E\u0447\u044C)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            a = e.createParsingComponents();
        if ("\u0441\u0435\u0439\u0447\u0430\u0441" === n) return o.now(e.reference);
        if ("\u0432\u0435\u0447\u0435\u0440\u043E\u043C" === n || "\u0432\u0435\u0447\u0435\u0440\u0430" === n)
            return o.evening(e.reference);
        if (n.endsWith("\u0443\u0442\u0440\u043E\u043C") || n.endsWith("\u0443\u0442\u0440\u0430"))
            return o.morning(e.reference);
        if (n.match(/\u0432\s*\u043f\u043e\u043b\u0434\u0435\u043d\u044c/)) return o.noon(e.reference);
        if (n.match(/\u043f\u0440\u043e\u0448\u043b\u043e\u0439\s*\u043d\u043e\u0447\u044c\u044e/))
            return o.lastNight(e.reference);
        if (n.match(/\u043f\u0440\u043e\u0448\u043b\u044b\u043c\s*\u0432\u0435\u0447\u0435\u0440\u043e\u043c/))
            return o.yesterdayEvening(e.reference);
        if (n.match(/\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439\s*\u043d\u043e\u0447\u044c\u044e/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, u.assignSimilarDate)(a, t), a.imply("hour", 0);
        }
        return n.match(/\u0432\s*\u043f\u043e\u043b\u043d\u043e\u0447\u044c/) ||
            n.endsWith("\u043D\u043E\u0447\u044C\u044E")
            ? o.midnight(e.reference)
            : a;
    }
}
t.default = d;
