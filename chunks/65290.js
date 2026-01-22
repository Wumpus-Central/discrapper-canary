t.d(l, {
    A: () => r,
}),
    t(938796);
var n = t(311907),
    i = t(622543);

function r(e) {
    var l;
    let t = (0, n.bG)([i.A], () => i.A.getUserProfile(e.id));
    return (
        (null == t ? void 0 : t.bio) === "" &&
        (null == t ? void 0 : t.pronouns) === "" &&
        (null == t ? void 0 : t.banner) === void 0 &&
        (null == t ? void 0 : t.accentColor) === void 0 &&
        (null == t ? void 0 : t.banner) === void 0 &&
        e.flags === e.publicFlags &&
        ((null == t ? void 0 : t.badges) == null || (null == t || null == (l = t.badges) ? void 0 : l.length) === 0)
    );
}
