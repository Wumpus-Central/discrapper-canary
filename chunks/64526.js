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
    l = r(569370);
class d extends l.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return "(\u0437\u0430\u0440\u0430\u0437|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E\\s*\u0432\u0435\u0447\u043E\u0440\u0430|\u043C\u0438\u043D\u0443\u043B\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456\\s*\u0432\u043D\u043E\u0447\u0456|\u0446\u0456\u0454\u0457\\s*\u043D\u043E\u0447\u0456|\u0446\u044C\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443|\u0432\u0440\u0430\u043D\u0446\u0456|\u0440\u0430\u043D\u043A\u0443|\u0437\u0440\u0430\u043D\u043A\u0443|\u043E\u043F\u0456\u0432\u0434\u043D\u0456|\u0432\u0432\u0435\u0447\u0435\u0440\u0456|\u0432\u0435\u0447\u043E\u0440\u0430|\u043E\u043F\u0456\u0432\u043D\u043E\u0447\u0456|\u0432\u043D\u043E\u0447\u0456)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            a = e.createParsingComponents();
        if ("\u0437\u0430\u0440\u0430\u0437" === n) return o.now(e.reference);
        if ("\u0432\u0432\u0435\u0447\u0435\u0440\u0456" === n || "\u0432\u0435\u0447\u043E\u0440\u0430" === n)
            return o.evening(e.reference);
        if (
            n.endsWith("\u0432\u0440\u0430\u043D\u0446\u0456") ||
            n.endsWith("\u0440\u0430\u043D\u043A\u0443") ||
            n.endsWith("\u0437\u0440\u0430\u043D\u043A\u0443")
        )
            return o.morning(e.reference);
        if (n.endsWith("\u043E\u043F\u0456\u0432\u0434\u043D\u0456")) return o.noon(e.reference);
        if (n.match(/\u043c\u0438\u043d\u0443\u043b\u043e\u0457\s*\u043d\u043e\u0447\u0456/))
            return o.lastNight(e.reference);
        if (n.match(/\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e\s*\u0432\u0435\u0447\u043e\u0440\u0430/))
            return o.yesterdayEvening(e.reference);
        if (n.match(/\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457\s*\u043d\u043e\u0447\u0456/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, u.assignSimilarDate)(a, t), a.imply("hour", 1);
        }
        return n.match(/\u0446\u0456\u0454\u0457\s*\u043d\u043e\u0447\u0456/) ||
            n.endsWith("\u043E\u043F\u0456\u0432\u043D\u043E\u0447\u0456") ||
            n.endsWith("\u0432\u043D\u043E\u0447\u0456")
            ? o.midnight(e.reference)
            : a;
    }
}
t.default = d;
