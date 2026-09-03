n.d(t, { Ay: () => o });
let i = Object.freeze({ overflowY: "scroll", overflowX: "hidden" }),
    r = Object.freeze({ overflowY: "auto", overflowX: "hidden" }),
    a = Object.freeze({ overflowX: "scroll", overflowY: "hidden" }),
    s = Object.freeze({ overflowX: "auto", overflowY: "hidden" }),
    l = Object.freeze({ overflow: "auto" });
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "scroll",
        o = "vertical" === t ? ("auto" === n ? r : i) : "horizontal" === t ? ("auto" === n ? s : a) : l;
    return null != e ? { ...o, ...e } : o;
}
