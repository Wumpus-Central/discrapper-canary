"use strict";
n.d(t, { Ay: () => l });
let r = Object.freeze({ overflowY: "scroll", overflowX: "hidden" }),
    i = Object.freeze({ overflowY: "auto", overflowX: "hidden" }),
    a = Object.freeze({ overflowX: "scroll", overflowY: "hidden" }),
    s = Object.freeze({ overflowX: "auto", overflowY: "hidden" }),
    o = Object.freeze({ overflow: "auto" });
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "scroll",
        l = "vertical" === t ? ("auto" === n ? i : r) : "horizontal" === t ? ("auto" === n ? s : a) : o;
    return null != e ? { ...l, ...e } : l;
}
