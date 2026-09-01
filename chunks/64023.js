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
let o = r(115004),
    u = r(167385),
    l = r(767130),
    d = s(r(681743));
class c extends u.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            a = e.createParsingComponents();
        switch (n) {
            case "maintenant":
                return d.now(e.reference);
            case "aujourd'hui":
                return d.today(e.reference);
            case "hier":
                return d.yesterday(e.reference);
            case "demain":
                return d.tomorrow(e.reference);
            default:
                if (n.match(/cette\s*nuit/))
                    (0, l.assignSimilarDate)(a, r), a.imply("hour", 22), a.imply("meridiem", o.Meridiem.PM);
                else if (n.match(/la\s*veille/)) {
                    let e = new Date(r.getTime());
                    e.setDate(e.getDate() - 1), (0, l.assignSimilarDate)(a, e), a.imply("hour", 0);
                }
        }
        return a;
    }
}
t.default = c;
