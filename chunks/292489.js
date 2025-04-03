function n(t, e) {
    var r = i.get(t, e);
    return 'auto' === r || 'scroll' === r;
}
var i = {
    get: r(858255),
    getScrollParent: function (t) {
        if (!t) return null;
        for (var e = t.ownerDocument; t && t !== e.body; ) {
            if (n(t, 'overflow') || n(t, 'overflowY') || n(t, 'overflowX')) return t;
            t = t.parentNode;
        }
        return e.defaultView || e.parentWindow;
    }
};
t.exports = i;
