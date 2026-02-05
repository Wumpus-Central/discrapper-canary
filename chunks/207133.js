n.d(t, { A: () => a });
var i = n(417597),
    s = n(734057),
    l = n(746080);
function a(e) {
    let t = (0, i.bG)([s.A], () => {
        let t = s.A.getChannel(e);
        return t?.parent_id != null && t.isForumPost() ? s.A.getChannel(t?.parent_id) : null;
    });
    return t?.hasFlag(l.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS) === !0;
}
