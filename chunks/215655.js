n.d(t, { A: () => s });
var i = n(64700),
    l = n(625494),
    a = n(652215);
function s(e, t) {
    i.useEffect(() => {
        function n(e) {
            let { timestampMs: n } = e;
            null != t.current && (t.current.seek(n / 1e3), t.current.play());
        }
        return (
            l._.subscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, n),
            () => {
                l._.unsubscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, n);
            }
        );
    }, [e, t]);
}
