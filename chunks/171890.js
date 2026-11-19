(n.d(l, { F: () => i, E: () => a }), n(938796));
var e = n(951178);
function a(t, l) {
    return (0, e.XE)(t) ? "public" : null == l ? null : l ? "link" : "collaborators";
}
function i(t, l, n) {
    let a = (function (t, l) {
        let { flags: n } = t;
        return null == n ? null : l ? n | e.Zh.PUBLIC : n & ~e.Zh.PUBLIC;
    })(t, "public" === n);
    if (null == a) return null;
    let i = {};
    return (
        a !== t.flags && (i.flags = a),
        "link" === n && !0 !== l && (i.share_links_enabled = !0),
        "collaborators" === n && !1 !== l && (i.share_links_enabled = !1),
        i
    );
}
