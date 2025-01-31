n.d(t, { Z: () => s }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var a = n(192379),
    l = n(442837),
    r = n(703558),
    i = n(117530),
    o = n(524100);
function s(e) {
    var t, n;
    let { channelId: s, localCreationAnswerId: c, image: u } = e,
        d = null == u ? void 0 : u.emoji,
        m = (null == u ? void 0 : null === (t = u.mediaAttachmentState) || void 0 === t ? void 0 : t.status) === o._.PREPARING,
        f = (0, l.e7)([i.Z], () => i.Z.getUpload(s, c, r.d.Poll)),
        [h, x] = a.useState(),
        [g, p] = a.useState('');
    return (
        a.useEffect(() => {
            var e;
            if ((null == f ? void 0 : null === (e = f.item) || void 0 === e ? void 0 : e.file) == null) return;
            let t = URL.createObjectURL(f.item.file);
            return (
                x(t),
                p(f.item.file.name),
                () => {
                    URL.revokeObjectURL(t);
                }
            );
        }, [null == f ? void 0 : null === (n = f.item) || void 0 === n ? void 0 : n.file]),
        {
            emoji: d,
            isLoadingMedia: m,
            hasUpload: null != f,
            upload: f,
            mediaUrl: h,
            mediaFilename: g
        }
    );
}
