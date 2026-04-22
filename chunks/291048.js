"use strict";
n.d(t, { A: () => s });
var r = function (e, t) {
        switch (e) {
            case "P":
                return t.date({ width: "short" });
            case "PP":
                return t.date({ width: "medium" });
            case "PPP":
                return t.date({ width: "long" });
            default:
                return t.date({ width: "full" });
        }
    },
    i = function (e, t) {
        switch (e) {
            case "p":
                return t.time({ width: "short" });
            case "pp":
                return t.time({ width: "medium" });
            case "ppp":
                return t.time({ width: "long" });
            default:
                return t.time({ width: "full" });
        }
    };
let s = {
    p: i,
    P: function (e, t) {
        var n,
            s = e.match(/(P+)(p+)?/) || [],
            a = s[1],
            o = s[2];
        if (!o) return r(e, t);
        switch (a) {
            case "P":
                n = t.dateTime({ width: "short" });
                break;
            case "PP":
                n = t.dateTime({ width: "medium" });
                break;
            case "PPP":
                n = t.dateTime({ width: "long" });
                break;
            default:
                n = t.dateTime({ width: "full" });
        }
        return n.replace("{{date}}", r(a, t)).replace("{{time}}", i(o, t));
    },
};
