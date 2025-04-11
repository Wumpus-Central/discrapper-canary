n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(788900),
    o = n(442837),
    a = n(357352),
    s = n(565942),
    c = n(626135),
    u = n(411149),
    d = n(115215),
    p = n(151480),
    h = n(680783),
    f = n(981631),
    m = n(24848),
    g = n(413135).Buffer;
function b(e) {
    let { chatWallpaperState: t } = e,
        { wallpaperAssetUrl: n, wallpaperThumbhashDataUrl: d } = (0, o.cj)([u.Z], () => {
            let e = u.Z.getWallpaperById(t.wallpaperId);
            return null == e
                ? {}
                : {
                      wallpaperAssetUrl: (0, a.I)(e.default.asset),
                      wallpaperThumbhashDataUrl: null != e.default.thumbhash ? (0, l.xS)(g.from(e.default.thumbhash, 'base64')) : void 0
                  };
        }),
        [h, b] = i.useState(n),
        [_, y] = i.useState(d);
    return (i.useEffect(() => {
        null == n && t.isViewable && u.Z.shouldFetchWallpapers && (0, p.k9)();
    }, [n, t.isViewable]),
    i.useEffect(() => {
        if (h === n) return;
        if (null == n) {
            b(void 0), y(void 0);
            return;
        }
        let e = performance.now();
        (0, s.p)(n, (t) => {
            if (t === n) {
                b(t), y(d);
                let n = performance.now();
                c.default.track(f.rMx.CHAT_WALLPAPER_DOWNLOADED, {
                    time_used_in_ms: n - e,
                    asset_url: t
                });
            }
        });
    }, [h, n, d]),
    t.isViewable)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != _ &&
                      (0, r.jsx)('div', {
                          className: m.thumbhashContainer,
                          children: (0, r.jsx)('img', {
                              src: _,
                              alt: '',
                              'aria-hidden': !0
                          })
                      }),
                  (0, r.jsx)('div', {
                      className: m.wallpaperContainer,
                      style: { backgroundImage: null != h ? 'url('.concat(h, ')') : void 0 }
                  })
              ]
          })
        : null;
}
function _(e) {
    let { channel: t } = e,
        n = (0, h.Z)(t.id);
    return null == n || !n.isViewable || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || (d.t(t) && !n.isPreview) ? null : (0, r.jsx)(b, { chatWallpaperState: n });
}
