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
    d = RegExp(
        "(nu|idag|imorgon|\xf6vermorgon|ig\xe5r|f\xf6rrg\xe5r|i\\s*f\xf6rrg\xe5r)(?:\\s*(?:p\xe5\\s*)?(morgonen?|f\xf6rmiddagen?|middagen?|eftermiddagen?|kv\xe4llen?|natten?|midnatt))?(?=\\W|$)",
        "i",
    );
class c extends o.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return d;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = (t[1] || "").toLowerCase(),
            a = (t[2] || "").toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "nu":
                i = l.now(e.reference);
                break;
            case "idag":
                i = l.today(e.reference);
                break;
            case "imorgon":
            case "imorn":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1), (0, u.assignSimilarDate)(i, s), (0, u.implySimilarTime)(i, s);
                break;
            case "ig\xe5r":
                let o = new Date(r.getTime());
                o.setDate(o.getDate() - 1), (0, u.assignSimilarDate)(i, o), (0, u.implySimilarTime)(i, o);
                break;
            case "f\xf6rrg\xe5r":
            case "i f\xf6rrg\xe5r":
                let d = new Date(r.getTime());
                d.setDate(d.getDate() - 2), (0, u.assignSimilarDate)(i, d), (0, u.implySimilarTime)(i, d);
        }
        switch (a) {
            case "morgon":
            case "morgonen":
                i.imply("hour", 6), i.imply("minute", 0), i.imply("second", 0), i.imply("millisecond", 0);
                break;
            case "f\xf6rmiddag":
            case "f\xf6rmiddagen":
                i.imply("hour", 9), i.imply("minute", 0), i.imply("second", 0), i.imply("millisecond", 0);
                break;
            case "middag":
            case "middagen":
                i.imply("hour", 12), i.imply("minute", 0), i.imply("second", 0), i.imply("millisecond", 0);
                break;
            case "eftermiddag":
            case "eftermiddagen":
                i.imply("hour", 15), i.imply("minute", 0), i.imply("second", 0), i.imply("millisecond", 0);
                break;
            case "kv\xe4ll":
            case "kv\xe4llen":
                i.imply("hour", 20), i.imply("minute", 0), i.imply("second", 0), i.imply("millisecond", 0);
                break;
            case "natt":
            case "natten":
            case "midnatt":
                "midnatt" === a ? i.imply("hour", 0) : i.imply("hour", 2),
                    i.imply("minute", 0),
                    i.imply("second", 0),
                    i.imply("millisecond", 0);
        }
        return i;
    }
}
t.default = c;
