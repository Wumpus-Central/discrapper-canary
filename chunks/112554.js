n.d(t, {
    Z: () => c,
    v: () => l,
});
var r = n(399606),
    i = n(375954),
    o = n(991621),
    a = n(629710),
    s = n(262777);
let l = (e, t, n) => {
        var l, c;
        let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
            d = (0, s.v)(u);
        if (null == u) return [];
        let f =
            void 0 !== n
                ? (e) => e.url === n || e.id === n
                : (e) =>
                      (0, a.g4)(
                          {
                              type: o.l.Attachment,
                              media: e,
                          },
                          d,
                      );
        return null != (c = null == u || null == (l = u.attachments) ? void 0 : l.filter(f)) ? c : [];
    },
    c = (e, t, n) => {
        var l, c;
        let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
            d = (0, s.v)(u);
        if (null == u) return [];
        let f =
            void 0 !== n
                ? (e) => e.id === n
                : (e) =>
                      (0, a.g4)(
                          {
                              type: o.l.Embed,
                              media: e,
                          },
                          d,
                      );
        return null != (c = null == u || null == (l = u.embeds) ? void 0 : l.filter(f)) ? c : [];
    };
