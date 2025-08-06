n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(788900),
    a = n(357352),
    s = n(565942),
    l = n(626135),
    c = n(436952),
    u = n(411149),
    d = n(115215),
    f = n(151480),
    _ = n(461762),
    p = n(680783),
    h = n(981631),
    m = n(24848),
    g = n(413135).Buffer;
function E(e) {
    let { chatWallpaperState: t } = e,
        n = c.qM.useExperiment({ location: "channel_chat_wallpaper" }).enabled,
        d = (0, _.Z)(t.wallpaperId),
        p = null != d ? (0, a.I)(d.asset) : null,
        E = (null == d ? void 0 : d.thumbhash) != null ? (0, o.xS)(g.from(d.thumbhash, "base64")) : void 0,
        [b, y] = i.useState(E);
    return (i.useEffect(() => {
        null == p && t.isViewable && u.Z.shouldFetchWallpapers && (0, f.k9)();
    }, [p, t.isViewable]),
    i.useEffect(() => {
        if (null == p) return void y(void 0);
        let e = performance.now();
        y(E),
            (0, s.p)(p, (t) => {
                if (t === p) {
                    y(void 0);
                    let n = performance.now() - e;
                    l.default.track(h.rMx.CHAT_WALLPAPER_DOWNLOADED, {
                        time_used_in_ms: n,
                        asset_url: t,
                    });
                }
            });
    }, [p, E]),
    t.isViewable && null != d)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != b &&
                      (0, r.jsx)("div", {
                          className: m.thumbhashContainer,
                          children: (0, r.jsx)("img", {
                              src: b,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      }),
                  (0, r.jsx)("div", {
                      className: m.wallpaperContainer,
                      style: {
                          backgroundImage: null != p ? "url(".concat(p, ")") : void 0,
                          opacity: n ? d.opacity : void 0,
                      },
                  }),
              ],
          })
        : null;
}
function b(e) {
    let { channel: t } = e,
        n = (0, p.Z)(t.id);
    return null == n || !n.isViewable || (!t.isDM() && !t.isMultiUserDM() && !t.isGroupDM()) || (d.t(t) && !n.isPreview)
        ? null
        : (0, r.jsx)(E, { chatWallpaperState: n });
}
