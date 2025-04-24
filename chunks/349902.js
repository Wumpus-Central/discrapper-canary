t.d(n, { Z: () => l }), t(997841);
var i = t(442837),
    o = t(621853);
function l(e) {
    var n;
    let t = (0, i.e7)([o.Z], () => o.Z.getUserProfile(e.id));
    return (null == t ? void 0 : t.bio) === '' && (null == t ? void 0 : t.pronouns) === '' && (null == t ? void 0 : t.banner) === void 0 && (null == t ? void 0 : t.accentColor) === void 0 && (null == t ? void 0 : t.banner) === void 0 && e.flags === e.publicFlags && ((null == t ? void 0 : t.badges) == null || (null == t || null == (n = t.badges) ? void 0 : n.length) === 0);
}
