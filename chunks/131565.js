n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(357352),
    a = n(565942),
    s = n(626135),
    c = n(411149),
    u = n(115215),
    d = n(151480),
    p = n(680783),
    h = n(981631),
    f = n(24848);
function m(e) {
    let { chatWallpaperState: t } = e,
        n = (0, l.e7)([c.Z], () => {
            let e = c.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, o.I)(e.default.asset);
        }),
        [u, p] = i.useState(n);
    return (i.useEffect(() => {
        null == n && t.isViewable && c.Z.shouldFetchWallpapers && (0, d.k9)();
    }, [n, t.isViewable]),
    i.useEffect(() => {
        if (u === n) return;
        if (null == n) return void p(null);
        let e = performance.now();
        (0, a.p)(n, (t) => {
            if (t === n) {
                p(t);
                let n = performance.now();
                s.default.track(h.rMx.CHAT_WALLPAPER_DOWNLOADED, {
                    time_used_in_ms: n - e,
                    asset_url: t
                });
            }
        });
    }, [u, n]),
    t.isViewable && null != u)
        ? (0, r.jsx)('div', {
              className: f.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(u, ')') }
          })
        : null;
}
function g(e) {
    let { channel: t } = e,
        n = (0, p.Z)(t.id);
    return null == n || !n.isViewable || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || (u.t(t) && !n.isPreview) ? null : (0, r.jsx)(m, { chatWallpaperState: n });
}
