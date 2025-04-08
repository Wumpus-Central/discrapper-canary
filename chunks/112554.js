n.d(t, {
    K: () => l,
    b: () => o
});
var r = n(399606),
    i = n(375954),
    a = n(247206);
let l = (e, t, n) => {
        var l, o;
        let s = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t));
        if (null == s) return [];
        let c =
            void 0 !== n
                ? (e) => e.url === n
                : (e) =>
                      (0, a.KP)(
                          {
                              type: a.lJ.Attachment,
                              media: e
                          },
                          (0, a.HH)(s)
                      );
        return null != (o = null == s || null == (l = s.attachments) ? void 0 : l.filter(c)) ? o : [];
    },
    o = (e, t, n) => {
        var l, o;
        let s = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t));
        if (null == s) return [];
        let c =
            void 0 !== n
                ? (e) => e.id === n
                : (e) =>
                      (0, a.KP)(
                          {
                              type: a.lJ.Embed,
                              media: e
                          },
                          (0, a.HH)(s)
                      );
        return null != (o = null == s || null == (l = s.embeds) ? void 0 : l.filter(c)) ? o : [];
    };
