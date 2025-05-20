n.d(t, {
    K: () => a,
    b: () => o
});
var r = n(399606),
    i = n(375954),
    l = n(247206);
let a = (e, t, n) => {
        var a, o;
        let s = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t));
        if (null == s) return [];
        let c =
            void 0 !== n
                ? (e) => e.url === n
                : (e) =>
                      (0, l.KP)(
                          {
                              type: l.lJ.Attachment,
                              media: e
                          },
                          (0, l.HH)(s)
                      );
        return null != (o = null == s || null == (a = s.attachments) ? void 0 : a.filter(c)) ? o : [];
    },
    o = (e, t, n) => {
        var a, o;
        let s = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t));
        if (null == s) return [];
        let c =
            void 0 !== n
                ? (e) => e.id === n
                : (e) =>
                      (0, l.KP)(
                          {
                              type: l.lJ.Embed,
                              media: e
                          },
                          (0, l.HH)(s)
                      );
        return null != (o = null == s || null == (a = s.embeds) ? void 0 : a.filter(c)) ? o : [];
    };
