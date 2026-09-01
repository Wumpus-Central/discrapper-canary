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
        }),
    o =
        (this && this.__importDefault) ||
        function (e) {
            return e && e.__esModule ? e : { default: e };
        };
Object.defineProperty(t, "__esModule", { value: !0 });
let u = r(167385),
    l = r(767130),
    d = o(r(418759)),
    c = s(r(681743)),
    m = r(628403),
    f = RegExp(
        "(jetzt|heute|morgen|\xfcbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)",
        "i",
    );
class g extends u.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return f;
    }
    innerExtract(e, t) {
        let r = e.reference.getDateWithAdjustedTimezone(),
            n = (t[1] || "").toLowerCase(),
            a = (t[2] || "").toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "jetzt":
                i = c.now(e.reference);
                break;
            case "heute":
                i = c.today(e.reference);
                break;
            case "morgen":
                (r = (0, m.addDuration)(r, { day: 1 })), (0, l.assignSimilarDate)(i, r), (0, l.implySimilarTime)(i, r);
                break;
            case "\xfcbermorgen":
            case "uebermorgen":
                (r = (0, m.addDuration)(r, { day: 2 })), (0, l.assignSimilarDate)(i, r), (0, l.implySimilarTime)(i, r);
                break;
            case "gestern":
                (r = (0, m.addDuration)(r, { day: -1 })), (0, l.assignSimilarDate)(i, r), (0, l.implySimilarTime)(i, r);
                break;
            case "vorgestern":
                (r = (0, m.addDuration)(r, { day: -2 })), (0, l.assignSimilarDate)(i, r), (0, l.implySimilarTime)(i, r);
                break;
            default:
                n.match(/letzte\s*nacht/) &&
                    (r.getHours() > 6 && (r = (0, m.addDuration)(r, { day: -1 })),
                    (0, l.assignSimilarDate)(i, r),
                    i.imply("hour", 0));
        }
        return a && (i = d.default.extractTimeComponents(i, a)), i;
    }
}
t.default = g;
