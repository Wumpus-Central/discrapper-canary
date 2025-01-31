n.d(t, { J: () => a });
var i = n(442837),
    l = n(375954),
    r = n(594174);
let a = (e) =>
    (0, i.e7)([l.Z, r.default], () => {
        if (null == e) return !1;
        let t = r.default.getCurrentUser();
        return null != l.Z.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    });
