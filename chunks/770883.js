var o =
    (this && this.__importDefault) ||
    function (r) {
        return r && r.__esModule ? r : { default: r };
    };
Object.defineProperty(e, "__esModule", { value: !0 }), (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
var a = o(t(164565)),
    n = o(t(271689)),
    c = o(t(300115)),
    i = o(t(383593)),
    s = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
function l(r) {
    var e = p(r);
    return function (r) {
        return String(r).replace(s, e);
    };
}
(e.decodeXML = l(c.default)), (e.decodeHTMLStrict = l(a.default));
var u = function (r, e) {
    return r < e ? 1 : -1;
};
function p(r) {
    return function (e) {
        if ("#" === e.charAt(1)) {
            var t = e.charAt(2);
            return "X" === t || "x" === t ? i.default(parseInt(e.substr(3), 16)) : i.default(parseInt(e.substr(2), 10));
        }
        return r[e.slice(1, -1)] || e;
    };
}
e.decodeHTML = (function () {
    for (var r = Object.keys(n.default).sort(u), e = Object.keys(a.default).sort(u), t = 0, o = 0; t < e.length; t++)
        r[o] === e[t] ? ((e[t] += ";?"), o++) : (e[t] += ";");
    var c = RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
        i = p(a.default);
    function s(r) {
        return ";" !== r.substr(-1) && (r += ";"), i(r);
    }
    return function (r) {
        return String(r).replace(c, s);
    };
})();
