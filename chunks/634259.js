var a = t(151502),
    l = t(855042),
    o = t(258509);
(e.exports = function (e, r) {
    if (e) {
        if ("string" == typeof e) return o(e, r);
        var t,
            s = a((t = {}.toString.call(e))).call(t, 8, -1);
        return (
            "Object" === s && e.constructor && (s = e.constructor.name),
            "Map" === s || "Set" === s
                ? l(e)
                : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                  ? o(e, r)
                  : void 0
        );
    }
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
