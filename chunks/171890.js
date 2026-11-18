(t.d(l, { F: () => i, E: () => a }), t(938796));
var n = t(951178);
function a(e, l) {
    return (0, n.XE)(e) ? "public" : null == l ? null : l ? "link" : "collaborators";
}
function i(e, l, t) {
    let a = (function (e, l) {
        let { flags: t } = e;
        return null == t ? null : l ? t | n.Zh.PUBLIC : t & ~n.Zh.PUBLIC;
    })(e, "public" === t);
    if (null == a) return null;
    let i = {};
    return (
        a !== e.flags && (i.flags = a),
        "link" === t && !0 !== l && (i.share_links_enabled = !0),
        "collaborators" === t && !1 !== l && (i.share_links_enabled = !1),
        i
    );
}
