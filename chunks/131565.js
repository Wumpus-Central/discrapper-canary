n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(357352),
    a = n(411149),
    s = n(115215),
    c = n(151480),
    u = n(680783),
    d = n(443491);
function p(e) {
    let { chatWallpaperState: t } = e,
        n = (0, l.e7)([a.Z], () => {
            let e = a.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, o.I)(e.default.asset);
        });
    return (i.useEffect(() => {
        null == n && t.isViewable && a.Z.shouldFetchWallpapers && (0, c.k9)();
    }, [n, t.isViewable]),
    t.isViewable && null != n)
        ? (0, r.jsx)('div', {
              className: d.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(n, ')') }
          })
        : null;
}
function h(e) {
    let { channel: t } = e,
        n = (0, u.Z)(t.id);
    return !(null == n || !n.isViewable || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || (s.t(t) && !n.isPreview)) ? (0, r.jsx)(p, { chatWallpaperState: n }) : null;
}
