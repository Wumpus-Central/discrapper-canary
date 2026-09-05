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
    u = s(r(681743));
class l extends o.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[0].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "nu":
                return u.now(e.reference);
            case "vandaag":
                return u.today(e.reference);
            case "morgen":
            case "morgend":
                return u.tomorrow(e.reference);
            case "gisteren":
                return u.yesterday(e.reference);
        }
        return n;
    }
}
t.default = l;
