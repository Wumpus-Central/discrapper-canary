n.d(t, { A: () => s });
var l = n(582128),
    i = n(625494),
    a = n(652215);
function s(e, t) {
    l.useEffect(() => {
        function n(e) {
            let { timestampMs: n } = e;
            null != t.current && (t.current.seek(n / 1e3), t.current.play());
        }
        return (
            i._.subscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, n),
            () => {
                i._.unsubscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, n);
            }
        );
    }, [e, t]);
}
