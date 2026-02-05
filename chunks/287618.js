n.d(t, { A: () => s }), n(323874), n(14289), n(35956);
var l = n(64700),
    a = n(311907),
    i = n(31717),
    r = n(522602),
    o = n(256095);
function s(e) {
    let { channelId: t, localCreationAnswerId: n, image: s } = e,
        c = s?.emoji,
        u = s?.mediaAttachmentState?.status === o.k.PREPARING,
        m = (0, a.bG)([r.A], () => r.A.getUpload(t, n, i.C.Poll)),
        [d, f] = l.useState(),
        [g, b] = l.useState("");
    return (
        l.useEffect(() => {
            if (m?.item?.file == null) return;
            let e = URL.createObjectURL(m.item.file);
            return (
                f(e),
                b(m.item.file.name),
                () => {
                    URL.revokeObjectURL(e);
                }
            );
        }, [m?.item?.file]),
        { emoji: c, isLoadingMedia: u, hasUpload: null != m, upload: m, mediaUrl: d, mediaFilename: g }
    );
}
