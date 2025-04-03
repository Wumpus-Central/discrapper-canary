var n = r(207549).getPunctuation(),
    i = "['\u2018\u2019]",
    o = '\\s|(?![_])' + n,
    a = RegExp('^(?:' + o + ')*(?:' + i + '|(?!' + o + ').)*(?:(?!' + o + ').)'),
    u = RegExp('(?:(?!' + o + ').)(?:' + i + '|(?!' + o + ').)*(?:' + o + ')*$');
function s(t, e) {
    var r = e ? u.exec(t) : a.exec(t);
    return r ? r[0] : t;
}
t.exports = {
    getBackward: function (t) {
        return s(t, !0);
    },
    getForward: function (t) {
        return s(t, !1);
    }
};
