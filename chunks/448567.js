function r(e, t) {
    var n = i.get(e, t);
    return "auto" === n || "scroll" === n;
}
var i = {
    get: n(907116),
    getScrollParent: function (e) {
        if (!e) return null;
        for (var t = e.ownerDocument; e && e !== t.body; ) {
            if (r(e, "overflow") || r(e, "overflowY") || r(e, "overflowX")) return e;
            e = e.parentNode;
        }
        return t.defaultView || t.parentWindow;
    },
};
e.exports = i;
