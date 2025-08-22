t.d(n, { Z: () => o }), t(997841);
var r = t(442837),
    l = t(621853);
function o(e) {
    var n;
    let t = (0, r.e7)([l.Z], () => l.Z.getUserProfile(e.id));
    return (
        (null == t ? void 0 : t.bio) === "" &&
        (null == t ? void 0 : t.pronouns) === "" &&
        (null == t ? void 0 : t.banner) === void 0 &&
        (null == t ? void 0 : t.accentColor) === void 0 &&
        (null == t ? void 0 : t.banner) === void 0 &&
        e.flags === e.publicFlags &&
        ((null == t ? void 0 : t.badges) == null || (null == t || null == (n = t.badges) ? void 0 : n.length) === 0)
    );
}
