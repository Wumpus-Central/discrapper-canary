var r = n(207549).getPunctuation(),
    i = "['\u2018\u2019]",
    o = "\\s|(?![_])" + r,
    a = RegExp("^(?:" + o + ")*(?:" + i + "|(?!" + o + ").)*(?:(?!" + o + ").)"),
    s = RegExp("(?:(?!" + o + ").)(?:" + i + "|(?!" + o + ").)*(?:" + o + ")*$");
function l(e, t) {
    var n = t ? s.exec(e) : a.exec(e);
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
