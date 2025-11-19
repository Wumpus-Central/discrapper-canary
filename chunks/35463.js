n.d(t, { Z: () => c }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(473749),
    l = n(442837),
    a = n(703558),
    i = n(117530),
    o = n(524100);
function c(e) {
    var t, n;
    let { channelId: c, localCreationAnswerId: s, image: u } = e,
        f = null == u ? void 0 : u.emoji,
        d = (null == u || null == (t = u.mediaAttachmentState) ? void 0 : t.status) === o._.PREPARING,
        m = (0, l.e7)([i.Z], () => i.Z.getUpload(c, s, a.d.Poll)),
        [p, b] = r.useState(),
        [g, j] = r.useState("");
    return (
        r.useEffect(() => {
            var e;
            if ((null == m || null == (e = m.item) ? void 0 : e.file) == null) return;
            let t = URL.createObjectURL(m.item.file);
            return (
                b(t),
                j(m.item.file.name),
                () => {
                    URL.revokeObjectURL(t);
                }
            );
        }, [null == m || null == (n = m.item) ? void 0 : n.file]),
        {
            emoji: f,
            isLoadingMedia: d,
            hasUpload: null != m,
            upload: m,
            mediaUrl: p,
            mediaFilename: g,
        }
    );
}
