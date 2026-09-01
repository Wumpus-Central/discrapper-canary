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
    u = s(r(681743)),
    l =
        /\u4eca\u65e5|\u304d\u3087\u3046|\u672c\u65e5|\u307b\u3093\u3058\u3064|\u6628\u65e5|\u304d\u306e\u3046|\u660e\u65e5|\u3042\u3057\u305f|\u4eca\u591c|\u3053\u3093\u3084|\u4eca\u5915|\u3053\u3093\u3086\u3046|\u4eca\u6669|\u3053\u3093\u3070\u3093|\u4eca\u671d|\u3051\u3055/i;
t.default = class {
    pattern() {
        return l;
    }
    extract(e, t) {
        let r = (function (e) {
                switch (e) {
                    case "\u304D\u3087\u3046":
                        return "\u4ECA\u65E5";
                    case "\u307B\u3093\u3058\u3064":
                        return "\u672C\u65E5";
                    case "\u304D\u306E\u3046":
                        return "\u6628\u65E5";
                    case "\u3042\u3057\u305F":
                        return "\u660E\u65E5";
                    case "\u3053\u3093\u3084":
                        return "\u4ECA\u591C";
                    case "\u3053\u3093\u3086\u3046":
                        return "\u4ECA\u5915";
                    case "\u3053\u3093\u3070\u3093":
                        return "\u4ECA\u6669";
                    case "\u3051\u3055":
                        return "\u4ECA\u671D";
                    default:
                        return e;
                }
            })(t[0]),
            n = e.createParsingComponents();
        switch (r) {
            case "\u6628\u65E5":
                return u.yesterday(e.reference);
            case "\u660E\u65E5":
                return u.tomorrow(e.reference);
            case "\u672C\u65E5":
            case "\u4ECA\u65E5":
                return u.today(e.reference);
        }
        "\u4ECA\u591C" == r || "\u4ECA\u5915" == r || "\u4ECA\u6669" == r
            ? (n.imply("hour", 22), n.assign("meridiem", o.Meridiem.PM))
            : r.match("\u4ECA\u671D") && (n.imply("hour", 6), n.assign("meridiem", o.Meridiem.AM));
        let a = e.refDate;
        return n.assign("day", a.getDate()), n.assign("month", a.getMonth() + 1), n.assign("year", a.getFullYear()), n;
    }
};
