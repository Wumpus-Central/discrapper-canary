n.d(t, { Z: () => o }), n(997841);
var r = n(442837),
    l = n(621853);
function o(e) {
    var t;
    let n = (0, r.e7)([l.Z], () => l.Z.getUserProfile(e.id));
    return (
        (null == n ? void 0 : n.bio) === "" &&
        (null == n ? void 0 : n.pronouns) === "" &&
        (null == n ? void 0 : n.banner) === void 0 &&
        (null == n ? void 0 : n.accentColor) === void 0 &&
        (null == n ? void 0 : n.banner) === void 0 &&
        e.flags === e.publicFlags &&
        ((null == n ? void 0 : n.badges) == null || (null == n || null == (t = n.badges) ? void 0 : t.length) === 0)
    );
}
