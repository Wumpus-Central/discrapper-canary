n.d(t, {
    FO: () => E,
    YC: () => v,
    rv: () => g
}),
    n(47120);
var i = n(726542),
    r = n(394821),
    a = n(834353),
    s = n(802856),
    o = n(835473),
    l = n(210753),
    u = n(81063),
    c = n(26033),
    d = n(593294),
    f = n(981631),
    _ = n(701488),
    p = n(388032);
function h(e) {
    return (0, c.dU)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, c.y0)(e)
          ? {
                src: (0, u.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, _.Si.LARGE),
                alt: e.extra.media_title
            }
          : (0, c.KF)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function m(e) {
    let t = null == e ? void 0 : e.getIconURL(_.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? p.intl.string(p.t['2B/phI']) : p.intl.formatToPlainString(p.t.tiKyYm, { applicationName: n })
        };
}
function g(e) {
    var t;
    let { entry: n, showCoverImage: i = !0 } = e,
        { activity: r, activityApplication: a, fallbackApplication: s } = (0, d.Z)(n),
        { largeImage: o, smallImage: u } = v(r, a),
        { largeImage: c } = E(r, null != s ? s : a),
        { coverImageUrl: f } = (0, l.$)(null === (t = null != s ? s : a) || void 0 === t ? void 0 : t.id),
        _ = h(n);
    return null != o
        ? {
              largeImage: o,
              smallImage: u
          }
        : null != _
          ? {
                largeImage: _,
                smallImage: void 0
            }
          : null != f && i
            ? {
                  largeImage: { src: f },
                  smallImage: void 0
              }
            : {
                  largeImage: c,
                  smallImage: void 0
              };
}
function E(e, t) {
    let { largeImage: n, smallImage: r } = v(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: r
        };
    if (null == n && (0, s.Z)(e))
        return {
            largeImage: {
                src: i.Z.get(f.ABu.XBOX).icon.customPNG,
                alt: p.intl.string(p.t['Nfvo7+'])
            },
            smallImage: void 0
        };
    if (null == n && null == r && (0, a.Z)(e))
        return {
            largeImage: {
                src: i.Z.get(f.ABu.PLAYSTATION).icon.lightPNG,
                alt: p.intl.string(p.t.fFl4jo)
            },
            smallImage: void 0
        };
    let o = m(t);
    return null != o
        ? {
              largeImage: o,
              smallImage: r
          }
        : {
              largeImage: r,
              smallImage: void 0
          };
}
function v(e, t) {
    var n, i, a, s, l, c;
    let d = (0, o.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let f = null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.large_image,
        p =
            null != f
                ? {
                      src: (0, u.getAssetImage)(e.application_id, f, [_.Si.LARGE, _.Si.LARGE]),
                      text: null === (a = e.assets) || void 0 === a ? void 0 : null === (i = a.large_text) || void 0 === i ? void 0 : i.trim()
                  }
                : void 0,
        h = (0, r.Z)(e) ? void 0 : null == e ? void 0 : null === (s = e.assets) || void 0 === s ? void 0 : s.small_image,
        g =
            null != h
                ? {
                      src: (0, u.getAssetImage)(e.application_id, h, [_.Si.LARGE, _.Si.LARGE]),
                      text: null === (c = e.assets) || void 0 === c ? void 0 : null === (l = c.small_text) || void 0 === l ? void 0 : l.trim()
                  }
                : void 0;
    return {
        largeImage: null != p ? p : m(null != t ? t : d),
        smallImage: g
    };
}
