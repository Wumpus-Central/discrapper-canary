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
    u = r(414533);
class l extends u.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return "(?:\u0441|\u0441\u043E)?\\s*(\u0441\u0435\u0433\u043E\u0434\u043D\u044F|\u0432\u0447\u0435\u0440\u0430|\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430|\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430)";
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "\u0441\u0435\u0433\u043E\u0434\u043D\u044F":
                return o.today(e.reference);
            case "\u0432\u0447\u0435\u0440\u0430":
                return o.yesterday(e.reference);
            case "\u0437\u0430\u0432\u0442\u0440\u0430":
                return o.tomorrow(e.reference);
            case "\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430":
                return o.theDayAfter(e.reference, 2);
            case "\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430":
                return o.theDayAfter(e.reference, 3);
            case "\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430":
                return o.theDayBefore(e.reference, 2);
            case "\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430":
                return o.theDayBefore(e.reference, 3);
        }
        return n;
    }
}
t.default = l;
