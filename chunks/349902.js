r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(789020);
var a = r(442837),
    o = r(621853);
function s(e) {
    var n;
    let r = (0, a.e7)([o.Z], () => o.Z.getUserProfile(e.id));
    return (null == r ? void 0 : r.bio) === '' && (null == r ? void 0 : r.pronouns) === '' && (null == r ? void 0 : r.banner) === void 0 && (null == r ? void 0 : r.accentColor) === void 0 && (null == r ? void 0 : r.banner) === void 0 && e.flags === e.publicFlags && ((null == r ? void 0 : r.badges) == null || (null == r ? void 0 : null === (n = r.badges) || void 0 === n ? void 0 : n.length) === 0);
}
