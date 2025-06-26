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
    let { chatWallpaperState: t } = e,
        n = c.qM.useExperiment({ location: 'channel_chat_wallpaper' }).enabled,
        d = (0, h.Z)(t.wallpaperId),
        f = null != d ? (0, o.I)(d.asset) : null,
        _ = (null == d ? void 0 : d.thumbhash) != null ? (0, l.xS)(b.from(d.thumbhash, 'base64')) : void 0,
        [y, C] = i.useState(_);
    return (i.useEffect(() => {
        null == f && t.isViewable && u.Z.shouldFetchWallpapers && (0, p.k9)();
    }, [f, t.isViewable]),
    i.useEffect(() => {
        if (null == f) return void C(void 0);
        let e = performance.now();
        C(_),
            (0, a.p)(f, (t) => {
                if (t === f) {
                    C(void 0);
                    let n = performance.now();
                    s.default.track(m.rMx.CHAT_WALLPAPER_DOWNLOADED, {
                        time_used_in_ms: n - e,
                        asset_url: t
                    });
                }
            });
    }, [f, _]),
    t.isViewable && null != d)
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
                          backgroundImage: null != f ? 'url('.concat(f, ')') : void 0,
                          opacity: n ? d.opacity : void 0
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
