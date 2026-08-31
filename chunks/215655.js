n.d(t, { A: () => s });
var l = n(582128),
    i = n(625494),
    a = n(652215);
function s(e, t, n) {
    l.useEffect(() => {
        function l(e) {
            let { timestampMs: l } = e;
            null != n ? n(l) : null != t.current && (t.current.seek(l / 1e3), t.current.play());
        }
        return (
            i._.subscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, l),
            () => {
                i._.unsubscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, l);
            }
        );
    }, [e, t, n]);
}
