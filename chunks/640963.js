n.d(t, { x: () => s }), n(388685);
var r = n(192379),
    i = n(442837),
    o = n(493683),
    a = n(592125);
function s(e) {
    let { channelId: t, onUpdateComplete: n } = e,
        [s, l] = r.useState(!1),
        c = r.useRef(null),
        u = (0, i.e7)([a.Z], () => {
            var e, n;
            return null == (n = a.Z.getChannel(t)) || null == (e = n.wallpaper) ? void 0 : e.wallpaperId;
        }),
        d = r.useCallback(() => {
            s && (null == n || n(c.current), l(!1));
        }, [n, s]),
        f = r.useCallback(
            async (e, t) => {
                l(!0), (c.current = t);
                try {
                    await o.Z.setWallpaper(e, t);
                    let n = setTimeout(() => d(), 5000);
                    return () => clearTimeout(n);
                } catch (e) {
                    l(!1);
                }
            },
            [l, d]
        );
    return (
        r.useEffect(() => {
            (null != u ? u : null) === c.current && d();
        }, [u, d]),
        {
            isUpdating: s,
            updateChatWallpaper: f
        }
    );
}
