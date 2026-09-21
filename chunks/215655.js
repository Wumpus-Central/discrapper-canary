n.d(t, { A: () => i });
var r = n(582128),
    l = n(625494),
    a = n(652215);
function i(e, t, n) {
    r.useEffect(() => {
        function r(e) {
            let { timestampMs: r } = e;
            null != n ? n(r) : null != t.current && (t.current.seek(r / 1e3), t.current.play());
        }
        return (
            l._.subscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, r),
            () => {
                l._.unsubscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, r);
            }
        );
    }, [e, t, n]);
}
