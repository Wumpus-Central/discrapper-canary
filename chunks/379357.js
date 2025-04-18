n.d(t, {
    FO: () => y,
    YC: () => v,
    rv: () => b
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
    _ = n(593294),
    p = n(981631),
    h = n(701488),
    m = n(388032);
function g(e) {
    return (0, f.dU)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, f.y0)(e)
          ? {
                src: (0, u.xF)(e.extra.application_id, e.extra.media_assets_large_image, h.Si.LARGE),
                alt: e.extra.media_title
            }
          : (0, f.KF)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function E(e) {
    let t = null == e ? void 0 : e.getIconURL(h.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? m.NW.string(m.t['2B/phI']) : m.NW.formatToPlainString(m.t.tiKyYm, { applicationName: n })
        };
}
function b(e) {
    var t;
    let { entry: n, showCoverImage: r = !0 } = e,
        { activity: i, activityApplication: a, fallbackApplication: o } = (0, _.Z)(n),
        { largeImage: s, smallImage: c } = v(i, a),
        { largeImage: u } = y(i, null != o ? o : a),
        { coverImageUrl: d } = (0, l.$)(null == (t = null != o ? o : a) ? void 0 : t.id),
        f = g(n);
    return null != s
        ? {
              largeImage: s,
              smallImage: c
          }
        : null != f
          ? {
                largeImage: f,
                smallImage: void 0
            }
          : null != d && r
            ? {
                  largeImage: { src: d },
                  smallImage: void 0
              }
            : {
                  largeImage: u,
                  smallImage: void 0
              };
}
function y(e, t) {
    let { largeImage: n, smallImage: i } = v(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i
        };
    if ((0, c.dS)(e)) {
        var s;
        let t = (0, c.rq)(e),
            n =
                null != t
                    ? d.ZP.getGuildIconURL({
                          id: t.guildId,
                          icon: null == e || null == (s = e.assets) ? void 0 : s.small_image,
                          size: h.Si.SMALL
                      })
                    : void 0;
        return {
            largeImage: null != n ? { src: n } : void 0,
            smallImage: void 0
        };
    }
    if (null == n && (0, o.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(p.ABu.XBOX).icon.customPNG,
                alt: m.NW.string(m.t['Nfvo7+'])
            },
            smallImage: void 0
        };
    if (null == n && null == i && (0, a.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(p.ABu.PLAYSTATION).icon.lightPNG,
                alt: m.NW.string(m.t.fFl4jo)
            },
            smallImage: void 0
        };
    let l = E(t);
    return null != l
        ? {
              largeImage: l,
              smallImage: i
          }
        : {
              largeImage: i,
              smallImage: void 0
          };
}
function v(e, t) {
    var n, r, a, o, l, c;
    let d = (0, s.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let f = null == e || null == (n = e.assets) ? void 0 : n.large_image,
        _ =
            null != f
                ? {
                      src: (0, u.xF)(e.application_id, f, [h.Si.LARGE, h.Si.LARGE]),
                      text: null == (a = e.assets) || null == (r = a.large_text) ? void 0 : r.trim()
                  }
                : void 0,
        p = (0, i.Z)(e) || null == e || null == (o = e.assets) ? void 0 : o.small_image,
        m =
            null != p
                ? {
                      src: (0, u.xF)(e.application_id, p, [h.Si.LARGE, h.Si.LARGE]),
                      text: null == (c = e.assets) || null == (l = c.small_text) ? void 0 : l.trim()
                  }
                : void 0;
    return {
        largeImage: null != _ ? _ : E(null != t ? t : d),
        smallImage: m
    };
}
