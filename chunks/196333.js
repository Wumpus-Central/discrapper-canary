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
let o = r(389766),
    u = r(767130),
    l = s(r(681743)),
    d = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class c extends o.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return d;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            a = e.createParsingComponents();
        switch (n) {
            case "now":
                a = l.now(e.reference);
                break;
            case "today":
                a = l.today(e.reference);
                break;
            case "yesterday":
                a = l.yesterday(e.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                a = l.tomorrow(e.reference);
                break;
            case "tonight":
                a = l.tonight(e.reference);
                break;
            case "overmorrow":
                a = l.theDayAfter(e.reference, 2);
                break;
            default:
                if (n.match(/last\s*night/)) {
                    if (r.getHours() > 6) {
                        let e = new Date(r.getTime());
                        e.setDate(e.getDate() - 1), (r = e);
                    }
                    (0, u.assignSimilarDate)(a, r), a.imply("hour", 0);
                }
        }
        return a.addTag("parser/ENCasualDateParser"), a;
    }
}
t.default = c;
