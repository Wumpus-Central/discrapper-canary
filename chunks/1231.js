function e(t, e) {
    return !!e && (t === e.documentElement || t === e.body);
}
t.exports = {
    getTop: function (t) {
        var r = t.ownerDocument;
        return e(t, r) ? r.body.scrollTop || r.documentElement.scrollTop : t.scrollTop;
    },
    setTop: function (t, r) {
        var n = t.ownerDocument;
        e(t, n) ? (n.body.scrollTop = n.documentElement.scrollTop = r) : (t.scrollTop = r);
    },
    getLeft: function (t) {
        var r = t.ownerDocument;
        return e(t, r) ? r.body.scrollLeft || r.documentElement.scrollLeft : t.scrollLeft;
    },
    setLeft: function (t, r) {
        var n = t.ownerDocument;
        e(t, n) ? (n.body.scrollLeft = n.documentElement.scrollLeft = r) : (t.scrollLeft = r);
    }
};
