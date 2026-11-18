var i = n(582128),
    l = n(188567),
    a = n(652215);
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            i.useEffect(() => {
                function i(e) {
                    let { timestampMs: i } = e;
                    null != n ? n(i) : null != t.current && (t.current.seek(i / 1e3), t.current.play());
                }
                return (
                    l._.subscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, i),
                    () => {
                        l._.unsubscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, i);
                    }
                );
            }, [e, t, n]);
        },
    },
);
