n.d(t, { J: () => a });
var r = n(442837),
    i = n(375954),
    l = n(594174);
let a = (e) =>
    (0, r.e7)([i.Z, l.default], () => {
        if (null == e) return !1;
        let t = l.default.getCurrentUser();
        return null != i.Z.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    });
