n.d(t, { x: () => s }), n(388685);
var r = n(73800),
    i = n(442837),
    a = n(493683),
    o = n(592125);
function s(e) {
    let { channelId: t, onUpdateComplete: n } = e,
        [s, l] = r.useState(!1),
        c = r.useRef(null),
        u = (0, i.e7)([o.Z], () => {
            var e, n;
            return null == (n = o.Z.getChannel(t)) || null == (e = n.wallpaper) ? void 0 : e.wallpaperId;
        }),
        d = r.useCallback(() => {
            s && (null == n || n(c.current), l(!1));
        }, [n, s]),
        f = r.useCallback(
            async (e, t, n) => {
                l(!0), (c.current = t);
                try {
                    (await a.Z.setWallpaper(e, t)).ok || null == n || n();
                    let r = setTimeout(() => d(), 5000);
                    return () => clearTimeout(r);
                } catch (e) {
                    null == n || n(), l(!1);
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
