n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(780384),
    a = n(410030),
    s = n(357352),
    c = n(436952),
    u = n(411149),
    d = n(115215),
    p = n(151480),
    h = n(373076),
    f = n(680783),
    m = n(626287);
function g(e) {
    let { chatWallpaperState: t } = e,
        n = (0, l.e7)([u.Z], () => {
            let e = u.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, s.I)(e.default.asset);
        }),
        c = (0, o.wj)((0, a.ZP)()),
        d = ((0, h.P)(t.setterId) || !0 === t.isPreview) && c;
    return (i.useEffect(() => {
        null == n && d && u.Z.shouldFetchWallpapers && (0, p.k9)();
    }, [n, d]),
    d && null != n)
        ? (0, r.jsx)('div', {
              className: m.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(n, ')') }
          })
        : null;
}
function b(e) {
    let { channel: t } = e,
        n = (0, c.sQ)({ location: 'ChannelChatWallpaper' }),
        i = (0, f.Z)(t.id);
    return !(!n || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || d.t(t)) && null != i ? (0, r.jsx)(g, { chatWallpaperState: i }) : null;
}
