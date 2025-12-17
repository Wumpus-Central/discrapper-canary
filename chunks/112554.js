n.d(t, {
    Z: () => s,
    v: () => c,
});
var r = n(399606),
    i = n(375954),
    l = n(991621),
    o = n(629710),
    a = n(262777);
let c = (e, t, n) => {
        var c, s;
        let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
            d = (0, a.v)(u);
        if (null == u) return [];
        let f =
            void 0 !== n
                ? (e) => e.url === n || e.id === n
                : (e) =>
                      (0, o.g4)(
                          {
                              type: l.l.Attachment,
                              media: e,
                          },
                          d,
                      );
        return null != (s = null == u || null == (c = u.attachments) ? void 0 : c.filter(f)) ? s : [];
    },
    s = (e, t, n) => {
        var c, s;
        let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
            d = (0, a.v)(u);
        if (null == u) return [];
        let f =
            void 0 !== n
                ? (e) => e.id === n
                : (e) =>
                      (0, o.g4)(
                          {
                              type: l.l.Embed,
                              media: e,
                          },
                          d,
                      );
        return null != (s = null == u || null == (c = u.embeds) ? void 0 : c.filter(f)) ? s : [];
    };
