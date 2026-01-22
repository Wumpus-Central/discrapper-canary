var r = n(341789).getPunctuation(),
    i = "['‘’]",
    a = "\\s|(?![_])" + r,
    s = RegExp("^(?:" + a + ")*(?:" + i + "|(?!" + a + ").)*(?:(?!" + a + ").)"),
    o = RegExp("(?:(?!" + a + ").)(?:" + i + "|(?!" + a + ").)*(?:" + a + ")*$");

function l(e, t) {
    var n = t ? o.exec(e) : s.exec(e);
    return n ? n[0] : e;
}
e.exports = {
    getBackward: function (e) {
        return l(e, !0);
    },
    getForward: function (e) {
        return l(e, !1);
    },
};
