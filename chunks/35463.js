n.d(t, { Z: () => s }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(73800),
    a = n(442837),
    l = n(703558),
    o = n(117530),
    i = n(524100);
function s(e) {
    var t, n;
    let { channelId: s, localCreationAnswerId: c, image: u } = e,
        d = null == u ? void 0 : u.emoji,
        f = (null == u || null == (t = u.mediaAttachmentState) ? void 0 : t.status) === i._.PREPARING,
        m = (0, a.e7)([o.Z], () => o.Z.getUpload(s, c, l.d.Poll)),
        [p, b] = r.useState(),
        [g, h] = r.useState('');
    return (
        r.useEffect(() => {
            var e;
            if ((null == m || null == (e = m.item) ? void 0 : e.file) == null) return;
            let t = URL.createObjectURL(m.item.file);
            return (
                b(t),
                h(m.item.file.name),
                () => {
                    URL.revokeObjectURL(t);
                }
            );
        }, [null == m || null == (n = m.item) ? void 0 : n.file]),
        {
            emoji: d,
            isLoadingMedia: f,
            hasUpload: null != m,
            upload: m,
            mediaUrl: p,
            mediaFilename: g
        }
    );
}
