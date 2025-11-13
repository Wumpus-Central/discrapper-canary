n.d(e, { Z: () => E });
var i = n(972959),
    l = n(509613),
    u = n(313789),
    r = n(710808),
    s = n(253595),
    a = n(388032);
let o = (0, i.H)(() => ({ isUploading: !1 }));
async function c() {
    await (0, r.xI)({
        onUploadStart: () => o.setState({ isUploading: !0 }),
        onUploadFinish: () => o.setState({ isUploading: !1 }),
    });
}
let E = (0, l.ax)(u.n.VOICE_AND_VIDEO_UPLOAD_DEBUG_LOGS, {
    useTitle: () => a.intl.string(a.t.aY1OH2),
    useLabel: () => a.intl.string(a.t.EbwFfR),
    usePredicate: s.W,
    useDisabled: () => o.useField("isUploading"),
    onClick: c,
});
