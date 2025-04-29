n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(788900),
    o = n(357352),
    a = n(565942),
    s = n(626135),
    c = n(436952),
    u = n(411149),
    d = n(115215),
    p = n(151480),
    h = n(461762),
    f = n(680783),
    m = n(981631),
    g = n(24848),
    b = n(413135).Buffer;
function _(e) {
    var t;
    let { chatWallpaperState: n } = e,
        d = c.qM.useExperiment({ location: 'channel_chat_wallpaper' }).enabled,
        f = (0, h.Z)(n.wallpaperId),
        _ = (0, o.I)(null != (t = null == f ? void 0 : f.asset) ? t : ''),
        y = (null == f ? void 0 : f.thumbhash) != null ? (0, l.xS)(b.from(f.thumbhash, 'base64')) : void 0,
        [C, x] = i.useState(y);
    return (i.useEffect(() => {
        null == _ && n.isViewable && u.Z.shouldFetchWallpapers && (0, p.k9)();
    }, [_, n.isViewable]),
    i.useEffect(() => {
        if (null == _) return void x(void 0);
        let e = performance.now();
        x(y),
            (0, a.p)(_, (t) => {
                if (t === _) {
                    x(void 0);
                    let n = performance.now();
                    s.default.track(m.rMx.CHAT_WALLPAPER_DOWNLOADED, {
                        time_used_in_ms: n - e,
                        asset_url: t
                    });
                }
            });
    }, [_, y]),
    n.isViewable && null != f)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != C &&
                      (0, r.jsx)('div', {
                          className: g.thumbhashContainer,
                          children: (0, r.jsx)('img', {
                              src: C,
                              alt: '',
                              'aria-hidden': !0
                          })
                      }),
                  (0, r.jsx)('div', {
                      className: g.wallpaperContainer,
                      style: {
                          backgroundImage: null != _ ? 'url('.concat(_, ')') : void 0,
                          opacity: d ? f.opacity : void 0
                      }
                  })
              ]
          })
        : null;
}
function y(e) {
    let { channel: t } = e,
        n = (0, f.Z)(t.id);
    return null == n || !n.isViewable || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || (d.t(t) && !n.isPreview) ? null : (0, r.jsx)(_, { chatWallpaperState: n });
}
