n.d(t, {
    FO: () => y,
    T7: () => E,
    YC: () => O,
    rv: () => b,
}),
    n(388685),
    n(781311);
var r = n(726542),
    i = n(394821),
    a = n(834353),
    o = n(802856),
    s = n(835473),
    l = n(210753),
    c = n(750154),
    u = n(81063),
    d = n(768581),
    f = n(26033),
    p = n(593294),
    _ = n(981631),
    m = n(701488),
    h = n(388032);
function g(e) {
    return (0, f.dU)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, f.y0)(e)
          ? {
                src: (0, u.xF)(e.extra.application_id, e.extra.media_assets_large_image, m.Si.LARGE),
                alt: e.extra.media_title,
            }
          : (0, f.KF)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function E(e) {
    let t = null == e ? void 0 : e.getIconURL(m.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? h.intl.string(h.t["2B/phM"])
                    : h.intl.formatToPlainString(h.t.tiKyYg, { applicationName: n }),
        };
}
function b(e) {
    var t;
    let { entry: n, showCoverImage: r = !0 } = e,
        { activity: i, activityApplication: a, fallbackApplication: o } = (0, p.Z)(n),
        { largeImage: s, smallImage: c } = O(i, a),
        { largeImage: u } = y(i, null != o ? o : a),
        { coverImageUrl: d } = (0, l.$)(null == (t = null != o ? o : a) ? void 0 : t.id),
        f = g(n);
    return null != s
        ? {
              largeImage: s,
              smallImage: c,
          }
        : null != f
          ? {
                largeImage: f,
                smallImage: void 0,
            }
          : null != d && r
            ? {
                  largeImage: { src: d },
                  smallImage: void 0,
              }
            : {
                  largeImage: u,
                  smallImage: void 0,
              };
}
function y(e, t) {
    let { largeImage: n, smallImage: i } = O(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i,
        };
    if ((0, c.dS)(e)) {
        var s;
        let t = (0, c.rq)(e),
            n =
                null != t
                    ? d.ZP.getGuildIconURL({
                          id: t.guildId,
                          icon: null == e || null == (s = e.assets) ? void 0 : s.small_image,
                          size: m.Si.SMALL,
                      })
                    : void 0;
        return {
            largeImage: null != n ? { src: n } : void 0,
            smallImage: void 0,
        };
    }
    if (null == n && (0, o.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(_.ABu.XBOX).icon.customPNG,
                alt: h.intl.string(h.t.Nfvo72),
            },
            smallImage: void 0,
        };
    if (null == n && null == i && (0, a.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(_.ABu.PLAYSTATION).icon.lightPNG,
                alt: h.intl.string(h.t.fFl4jo),
            },
            smallImage: void 0,
        };
    let l = E(t);
    return null != l
        ? {
              largeImage: l,
              smallImage: i,
          }
        : {
              largeImage: i,
              smallImage: void 0,
          };
}
function O(e, t) {
    var n, r, a, o, l, c, d, f;
    let p = (0, s.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0,
        };
    let _ = null == e || null == (n = e.assets) ? void 0 : n.large_image,
        h =
            null != _
                ? {
                      src: (0, u.xF)(e.application_id, _, [m.Si.LARGE, m.Si.LARGE]),
                      text: null == (a = e.assets) || null == (r = a.large_text) ? void 0 : r.trim(),
                      url: null == (o = e.assets) ? void 0 : o.large_url,
                  }
                : void 0,
        g = (0, i.Z)(e) || null == e || null == (l = e.assets) ? void 0 : l.small_image,
        b =
            null != g
                ? {
                      src: (0, u.xF)(e.application_id, g, [m.Si.LARGE, m.Si.LARGE]),
                      text: null == (d = e.assets) || null == (c = d.small_text) ? void 0 : c.trim(),
                      url: null == (f = e.assets) ? void 0 : f.small_url,
                  }
                : void 0;
    return {
        largeImage: null != h ? h : E(null != t ? t : p),
        smallImage: b,
    };
}
