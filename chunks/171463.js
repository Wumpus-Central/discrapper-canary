"use strict";
var n = r(721602),
    o = r(870064),
    i = "object" == typeof StopIteration ? StopIteration : null;
e.exports = function (e) {
    if (!i) throw new o("this environment lacks StopIteration");
    n.set(e, "[[Done]]", !1);
    var t = {
        next: function () {
            var e = n.get(this, "[[Iterator]]"),
                t = !!n.get(e, "[[Done]]");
            try {
                return { done: t, value: t ? void 0 : e.next() };
            } catch (t) {
                if ((n.set(e, "[[Done]]", !0), t !== i)) throw t;
                return { done: !0, value: void 0 };
            }
        },
    };
    return n.set(t, "[[Iterator]]", e), t;
};
