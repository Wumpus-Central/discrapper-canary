(n.d(t, {
    FO: () => y,
    YC: () => O,
    rv: () => b
}),
    n(388685),
    n(781311));
var r = n(726542),
    i = n(394821),
    a = n(834353),
    o = n(802856),
    s = n(835473),
    l = n(210753),
    c = n(750154),
    u = n(81063),
    d = n(768581),
    _ = n(26033),
    f = n(593294),
    p = n(981631),
    h = n(701488),
    m = n(388032);
function g(e) {
    return (0, _.dU)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, _.y0)(e)
          ? {
                src: (0, u.xF)(e.extra.application_id, e.extra.media_assets_large_image, h.Si.LARGE),
                alt: e.extra.media_title
            }
          : (0, _.KF)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function E(e) {
    let t = null == e ? void 0 : e.getIconURL(h.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? m.intl.string(m.t['2B/phI']) : m.intl.formatToPlainString(m.t.tiKyYm, { applicationName: n })
        };
}
function b(e) {
    var t;
    let { entry: n, showCoverImage: r = !0 } = e,
        { activity: i, activityApplication: a, fallbackApplication: o } = (0, f.Z)(n),
        { largeImage: s, smallImage: c } = O(i, a),
        { largeImage: u } = y(i, null != o ? o : a),
        { coverImageUrl: d } = (0, l.$)(null == (t = null != o ? o : a) ? void 0 : t.id),
        _ = g(n);
    return null != s
        ? {
              largeImage: s,
              smallImage: c
          }
        : null != _
          ? {
                largeImage: _,
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
    let { largeImage: n, smallImage: i } = O(e, t);
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
                alt: m.intl.string(m.t['Nfvo7+'])
            },
            smallImage: void 0
        };
    if (null == n && null == i && (0, a.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(p.ABu.PLAYSTATION).icon.lightPNG,
                alt: m.intl.string(m.t.fFl4jo)
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
function O(e, t) {
    var n, r, a, o, l, c, d, _;
    let f = (0, s.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let p = null == e || null == (n = e.assets) ? void 0 : n.large_image,
        m =
            null != p
                ? {
                      src: (0, u.xF)(e.application_id, p, [h.Si.LARGE, h.Si.LARGE]),
                      text: null == (a = e.assets) || null == (r = a.large_text) ? void 0 : r.trim(),
                      url: null == (o = e.assets) ? void 0 : o.large_url
                  }
                : void 0,
        g = (0, i.Z)(e) || null == e || null == (l = e.assets) ? void 0 : l.small_image,
        b =
            null != g
                ? {
                      src: (0, u.xF)(e.application_id, g, [h.Si.LARGE, h.Si.LARGE]),
                      text: null == (d = e.assets) || null == (c = d.small_text) ? void 0 : c.trim(),
                      url: null == (_ = e.assets) ? void 0 : _.small_url
                  }
                : void 0;
    return {
        largeImage: null != m ? m : E(null != t ? t : f),
        smallImage: b
    };
}
