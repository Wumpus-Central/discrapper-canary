n.d(t, {
    FO: () => E,
    YC: () => b,
    rv: () => g
}),
    n(47120),
    n(566702);
var r = n(726542),
    i = n(394821),
    o = n(834353),
    a = n(802856),
    s = n(835473),
    l = n(210753),
    c = n(81063),
    u = n(26033),
    d = n(593294),
    f = n(981631),
    _ = n(701488),
    p = n(388032);
function h(e) {
    return (0, u.dU)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, u.y0)(e)
          ? {
                src: (0, c.xF)(e.extra.application_id, e.extra.media_assets_large_image, _.Si.LARGE),
                alt: e.extra.media_title
            }
          : (0, u.KF)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function m(e) {
    let t = null == e ? void 0 : e.getIconURL(_.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? p.NW.string(p.t['2B/phI']) : p.NW.formatToPlainString(p.t.tiKyYm, { applicationName: n })
        };
}
function g(e) {
    var t;
    let { entry: n, showCoverImage: r = !0 } = e,
        { activity: i, activityApplication: o, fallbackApplication: a } = (0, d.Z)(n),
        { largeImage: s, smallImage: c } = b(i, o),
        { largeImage: u } = E(i, null != a ? a : o),
        { coverImageUrl: f } = (0, l.$)(null == (t = null != a ? a : o) ? void 0 : t.id),
        _ = h(n);
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
          : null != f && r
            ? {
                  largeImage: { src: f },
                  smallImage: void 0
              }
            : {
                  largeImage: u,
                  smallImage: void 0
              };
}
function E(e, t) {
    let { largeImage: n, smallImage: i } = b(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i
        };
    if (null == n && (0, a.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.XBOX).icon.customPNG,
                alt: p.NW.string(p.t['Nfvo7+'])
            },
            smallImage: void 0
        };
    if (null == n && null == i && (0, o.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.PLAYSTATION).icon.lightPNG,
                alt: p.NW.string(p.t.fFl4jo)
            },
            smallImage: void 0
        };
    let s = m(t);
    return null != s
        ? {
              largeImage: s,
              smallImage: i
          }
        : {
              largeImage: i,
              smallImage: void 0
          };
}
function b(e, t) {
    var n, r, o, a, l, u;
    let d = (0, s.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let f = null == e || null == (n = e.assets) ? void 0 : n.large_image,
        p =
            null != f
                ? {
                      src: (0, c.xF)(e.application_id, f, [_.Si.LARGE, _.Si.LARGE]),
                      text: null == (o = e.assets) || null == (r = o.large_text) ? void 0 : r.trim()
                  }
                : void 0,
        h = (0, i.Z)(e) || null == e || null == (a = e.assets) ? void 0 : a.small_image,
        g =
            null != h
                ? {
                      src: (0, c.xF)(e.application_id, h, [_.Si.LARGE, _.Si.LARGE]),
                      text: null == (u = e.assets) || null == (l = u.small_text) ? void 0 : l.trim()
                  }
                : void 0;
    return {
        largeImage: null != p ? p : m(null != t ? t : d),
        smallImage: g
    };
}
