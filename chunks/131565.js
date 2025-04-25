n.d(t, { Z: () => y }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(788900),
    o = n(442837),
    a = n(357352),
    s = n(565942),
    c = n(626135),
    u = n(436952),
    d = n(411149),
    p = n(115215),
    h = n(151480),
    f = n(680783),
    m = n(981631),
    g = n(24848),
    b = n(413135).Buffer;
function _(e) {
    let { chatWallpaperState: t } = e,
        {
            wallpaperAssetUrl: n,
            wallpaperThumbhashDataUrl: p,
            opacity: f
        } = (0, o.cj)([d.Z], () => {
            let e = d.Z.getWallpaperById(t.wallpaperId);
            return null == e
                ? {}
                : {
                      wallpaperAssetUrl: (0, a.I)(e.default.asset),
                      wallpaperThumbhashDataUrl: null != e.default.thumbhash ? (0, l.xS)(b.from(e.default.thumbhash, 'base64')) : void 0,
                      opacity: e.default.opacity
                  };
        }),
        _ = u.qM.useExperiment({ location: 'channel_chat_wallpaper' }).enabled,
        [y, x] = i.useState(p);
    return (i.useEffect(() => {
        null == n && t.isViewable && d.Z.shouldFetchWallpapers && (0, h.k9)();
    }, [n, t.isViewable]),
    i.useEffect(() => {
        if (null == n) return void x(void 0);
        let e = performance.now();
        x(p),
            (0, s.p)(n, (t) => {
                if (t === n) {
                    x(void 0);
                    let n = performance.now();
                    c.default.track(m.rMx.CHAT_WALLPAPER_DOWNLOADED, {
                        time_used_in_ms: n - e,
                        asset_url: t
                    });
                }
            });
    }, [n, p]),
    t.isViewable)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != y &&
                      (0, r.jsx)('div', {
                          className: g.thumbhashContainer,
                          children: (0, r.jsx)('img', {
                              src: y,
                              alt: '',
                              'aria-hidden': !0
                          })
                      }),
                  (0, r.jsx)('div', {
                      className: g.wallpaperContainer,
                      style: {
                          backgroundImage: null != n ? 'url('.concat(n, ')') : void 0,
                          opacity: _ ? f : void 0
                      }
                  })
              ]
          })
        : null;
}
function y(e) {
    let { channel: t } = e,
        n = (0, f.Z)(t.id);
    return null == n || !n.isViewable || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || (p.t(t) && !n.isPreview) ? null : (0, r.jsx)(_, { chatWallpaperState: n });
}
