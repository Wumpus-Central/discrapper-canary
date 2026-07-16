n.d(t, { A: () => a });
var i = n(64700),
    l = n(625494),
    s = n(652215);
function a(e, t) {
    i.useEffect(() => {
        function n(e) {
            let { timestampMs: n } = e;
            null != t.current && (t.current.seek(n / 1e3), t.current.play());
        }
        return (
            l._.subscribeKeyed(s.zOV.CLIP_SEEK_VIDEO, e, n),
            () => {
                l._.unsubscribeKeyed(s.zOV.CLIP_SEEK_VIDEO, e, n);
            }
        );
    }, [e, t]);
}
