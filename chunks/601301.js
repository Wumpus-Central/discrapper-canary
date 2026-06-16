"use strict";
var n = e(34714).charAt,
    o = e(57284),
    s = e(605944),
    i = e(735451),
    u = e(739146),
    c = "String Iterator",
    a = s.set,
    f = s.getterFor(c);
i(
    String,
    "String",
    function (t) {
        a(this, { type: c, string: o(t), index: 0 });
    },
    function () {
        var t,
            r = f(this),
            e = r.string,
            o = r.index;
        return o >= e.length ? u(void 0, !0) : ((t = n(e, o)), (r.index += t.length), u(t, !1));
    },
);
