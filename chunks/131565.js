n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(357352),
    a = n(565942),
    s = n(411149),
    c = n(115215),
    u = n(151480),
    d = n(680783),
    p = n(24848);
function h(e) {
    let { chatWallpaperState: t } = e,
        n = (0, l.e7)([s.Z], () => {
            let e = s.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, o.I)(e.default.asset);
        }),
        [c, d] = i.useState(n);
    return (i.useEffect(() => {
        null == n && t.isViewable && s.Z.shouldFetchWallpapers && (0, u.k9)();
    }, [n, t.isViewable]),
    i.useEffect(() => {
        if (c !== n) {
            if (null == n) return void d(null);
            (0, a.p)(n, (e) => {
                e === n && d(e);
            });
        }
    }, [c, n]),
    t.isViewable && null != c)
        ? (0, r.jsx)('div', {
              className: p.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(c, ')') }
          })
        : null;
}
function f(e) {
    let { channel: t } = e,
        n = (0, d.Z)(t.id);
    return null == n || !n.isViewable || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || (c.t(t) && !n.isPreview) ? null : (0, r.jsx)(h, { chatWallpaperState: n });
}
