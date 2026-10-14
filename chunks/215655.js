n.d(t, { A: () => a });
var r = n(582128),
    l = n(625494),
    i = n(652215);
function a(e, t, n) {
    r.useEffect(() => {
        function r(e) {
            let { timestampMs: r } = e;
            null != n ? n(r) : null != t.current && (t.current.seek(r / 1e3), t.current.play());
        }
        return (
            l._.subscribeKeyed(i.zOV.CLIP_SEEK_VIDEO, e, r),
            () => {
                l._.unsubscribeKeyed(i.zOV.CLIP_SEEK_VIDEO, e, r);
            }
        );
    }, [e, t, n]);
}
