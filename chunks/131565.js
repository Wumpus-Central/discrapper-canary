n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(357352),
    a = n(436952),
    s = n(411149),
    c = n(115215),
    u = n(151480),
    d = n(373076),
    p = n(680783),
    h = n(626287);
function f(e) {
    let { chatWallpaperState: t } = e,
        n = (0, l.e7)([s.Z], () => {
            let e = s.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, o.I)(e.default.asset);
        }),
        a = (0, d.P)(t.setterId) || !0 === t.isPreview;
    return (i.useEffect(() => {
        null == n && a && s.Z.shouldFetchWallpapers && (0, u.k9)();
    }, [n, a]),
    a && null != n)
        ? (0, r.jsx)('div', {
              className: h.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(n, ')') }
          })
        : null;
}
function m(e) {
    let { channel: t } = e,
        n = (0, a.sQ)({ location: 'ChannelChatWallpaper' }),
        i = (0, p.Z)(t.id);
    return !(!n || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || c.t(t)) && null != i ? (0, r.jsx)(f, { chatWallpaperState: i }) : null;
}
