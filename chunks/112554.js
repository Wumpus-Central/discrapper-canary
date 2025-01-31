n.d(t, {
    K: () => s,
    b: () => r
});
var i = n(399606),
    l = n(375954),
    a = n(247206);
let s = (e, t, n) => {
        var s, r;
        let o = (0, i.e7)([l.Z], () => l.Z.getMessage(e, t));
        if (null == o) return [];
        let d =
            void 0 !== n
                ? (e) => e.url === n
                : (e) =>
                      (0, a.KP)(
                          {
                              type: a.lJ.Attachment,
                              media: e
                          },
                          (0, a.HH)(o)
                      );
        return null !== (r = null == o ? void 0 : null === (s = o.attachments) || void 0 === s ? void 0 : s.filter(d)) && void 0 !== r ? r : [];
    },
    r = (e, t, n) => {
        var s, r;
        let o = (0, i.e7)([l.Z], () => l.Z.getMessage(e, t));
        if (null == o) return [];
        let d =
            void 0 !== n
                ? (e) => e.id === n
                : (e) =>
                      (0, a.KP)(
                          {
                              type: a.lJ.Embed,
                              media: e
                          },
                          (0, a.HH)(o)
                      );
        return null !== (r = null == o ? void 0 : null === (s = o.embeds) || void 0 === s ? void 0 : s.filter(d)) && void 0 !== r ? r : [];
    };
