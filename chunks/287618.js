n.d(t, {
    A: () => c,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(64700),
    l = n(311907),
    a = n(31717),
    i = n(522602),
    o = n(256095);

function c(e) {
    var t, n;
    let { channelId: c, localCreationAnswerId: s, image: u } = e,
        f = null == u ? void 0 : u.emoji,
        d = (null == u || null == (t = u.mediaAttachmentState) ? void 0 : t.status) === o.k.PREPARING,
        b = (0, l.bG)([i.A], () => i.A.getUpload(c, s, a.C.Poll)),
        [m, p] = r.useState(),
        [g, O] = r.useState("");
    return (
        r.useEffect(() => {
            var e;
            if ((null == b || null == (e = b.item) ? void 0 : e.file) == null) return;
            let t = URL.createObjectURL(b.item.file);
            return (
                p(t),
                O(b.item.file.name),
                () => {
                    URL.revokeObjectURL(t);
                }
            );
        }, [null == b || null == (n = b.item) ? void 0 : n.file]),
        {
            emoji: f,
            isLoadingMedia: d,
            hasUpload: null != b,
            upload: b,
            mediaUrl: m,
            mediaFilename: g,
        }
    );
}
