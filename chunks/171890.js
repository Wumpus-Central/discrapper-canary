(n.d(t, { F: () => i, E: () => a }), n(938796));
var e = n(951178);
function a(l, t) {
    return (0, e.XE)(l) ? "public" : null == t ? null : t ? "link" : "collaborators";
}
function i(l, t, n) {
    let a = (function (l, t) {
        let { flags: n } = l;
        return null == n ? null : t ? n | e.Zh.PUBLIC : n & ~e.Zh.PUBLIC;
    })(l, "public" === n);
    if (null == a) return null;
    let i = {};
    return (
        a !== l.flags && (i.flags = a),
        "link" === n && !0 !== t && (i.share_links_enabled = !0),
        "collaborators" === n && !1 !== t && (i.share_links_enabled = !1),
        i
    );
}
