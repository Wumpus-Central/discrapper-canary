function t(e, t) {
    return !!t && (e === t.documentElement || e === t.body);
}
e.exports = {
    getTop: function (e) {
        var n = e.ownerDocument;
        return t(e, n) ? n.body.scrollTop || n.documentElement.scrollTop : e.scrollTop;
    },
    setTop: function (e, n) {
        var r = e.ownerDocument;
        t(e, r) ? (r.body.scrollTop = r.documentElement.scrollTop = n) : (e.scrollTop = n);
    },
    getLeft: function (e) {
        var n = e.ownerDocument;
        return t(e, n) ? n.body.scrollLeft || n.documentElement.scrollLeft : e.scrollLeft;
    },
    setLeft: function (e, n) {
        var r = e.ownerDocument;
        t(e, r) ? (r.body.scrollLeft = r.documentElement.scrollLeft = n) : (e.scrollLeft = n);
    },
};
