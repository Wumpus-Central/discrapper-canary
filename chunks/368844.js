n.d(t, {
    Ah: () => O,
    CB: () => D,
    aU: () => C,
    cp: () => w,
    eL: () => R,
    vg: () => P,
    zy: () => N,
}),
    n(953529),
    n(997841),
    n(388685),
    n(361932),
    n(187205);
var r = n(473749),
    i = n(911969),
    a = n(292419),
    o = n(768494),
    s = n(406432),
    l = n(144140),
    c = n(695346),
    u = n(592125),
    d = n(375954),
    f = n(594174),
    _ = n(630388),
    p = n(823379),
    h = n(709054),
    m = n(591759),
    g = n(981631);
function E(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, s.CO)(t) && null != n && n > 0 && null != r && r > 0;
}
function b(e) {
    return null != e && null != e && (0, s.NU)(e.filename) && null != e.proxy_url;
}
function y(e) {
    return E(e) || b(e);
}
var O = (function (e) {
    return (e.EMBED = "embed"), (e.ATTACHMENT = "attachment"), (e.COMPONENT = "component"), e;
})({});
function v(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x4.getSetting();
    if (!r) return [];
    let i =
        (null == e || null == (t = e.messageSnapshots[0]) ? void 0 : t.moderatorReport) != null
            ? null == e || null == (n = e.messageSnapshots[0])
                ? void 0
                : n.message.attachments
            : null == e
              ? void 0
              : e.attachments;
    return null == e || null == i
        ? []
        : i
              .filter(y)
              .map((e, t) => {
                  var n;
                  let {
                      proxy_url: r,
                      url: i,
                      description: a,
                      spoiler: o,
                      flags: l,
                      width: c,
                      height: u,
                      filename: d,
                      content_scan_version: f,
                  } = e;
                  if (null == c || null == u) return null;
                  let p = (0, s.NU)(d),
                      h = null != e.flags && (0, _.yE)(e.flags, g.J0y.IS_THUMBNAIL),
                      E = null != r ? r : i;
                  if (p) {
                      let e = m.Z.toURLSafe(r);
                      if (null == e) return null;
                      e.searchParams.append("format", "webp"), (E = e.toString());
                  }
                  return {
                      type: "attachment",
                      src: E,
                      width: c,
                      height: u,
                      spoiler: null != o && o,
                      flags: l,
                      contentScanVersion: f,
                      alt: a,
                      isVideo: p,
                      isThumbnail: h,
                      attachmentId: e.id,
                      mediaIndex: t,
                      srcIsAnimated: (0, _.yE)(null != (n = e.flags) ? n : 0, g.J0y.IS_ANIMATED),
                  };
              })
              .filter(p.lm);
}
function I(e) {
    return v(e, c.x4.useSetting());
}
function T(e, t) {
    var n, r;
    let i = c.RS.useSetting(),
        a = c.NA.useSetting();
    if (null == e) return [];
    let o =
        (null == (n = e.messageSnapshots[0]) ? void 0 : n.moderatorReport) != null
            ? null == (r = e.messageSnapshots[0])
                ? void 0
                : r.message.embeds
            : e.embeds;
    return i && a && null != o
        ? o
              .map((e, n) => {
                  var r;
                  let i = null != (r = e.image) ? r : e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: r, proxyURL: a, url: o, width: l, flags: c } = i,
                          u = null != a && (0, s.cb)(a);
                      return {
                          type: "embed",
                          src: null != a && "" !== a ? a : o,
                          height: r,
                          width: l,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: u,
                          mediaIndex: n,
                          srcIsAnimated: (0, _.yE)(null != c ? c : 0, g.FoC.IS_ANIMATED),
                      };
                  }
              })
              .filter(p.lm)
        : [];
}
function S(e) {
    let t = c.RS.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, a.kS)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case i.re.THUMBNAIL:
                          var t;
                          return A(e.media, null != (t = e.spoiler) && t);
                      case i.re.MEDIA_GALLERY:
                          return e.items.map((e) => {
                              var t;
                              return A(e.media, null != (t = e.spoiler) && t);
                          });
                  }
                  return null;
              })
              .filter(p.lm)
        : [];
}
function A(e, t) {
    var n, r, i;
    let a = (0, o.hg)(e);
    return "INVALID" === a
        ? null
        : {
              type: "component",
              src: e.proxyUrl,
              height: null != (r = e.height) ? r : 0,
              width: null != (i = e.width) ? i : 0,
              spoiler: t,
              contentScanVersion: null == (n = e.contentScanMetadata) ? void 0 : n.version,
              flags: 0,
              srcIsAnimated: (0, _.yE)(e.flags, o.hR.IS_ANIMATED),
              isVideo: "VIDEO" === a,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = N(e, n);
    return r.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [t, i]);
}
function N(e, t) {
    let n = I(e);
    return [...n, ...T(e, t), ...S(e)];
}
function R(e, t) {
    var n, r, i;
    let a = I(e),
        o = T(e, t),
        s = S(e);
    return null != (i = null != (r = null != (n = a[0]) ? n : o[0]) ? r : s[0]) ? i : null;
}
function P(e, t) {
    let n = I(e),
        r = T(e, t),
        i = S(e);
    return null == n[0] && null == i[0] && null != r[0];
}
function D(e, t) {
    var n;
    let r = u.Z.getChannel(t);
    if (null == r) return !1;
    let i = d.Z.getMessage(r.id, h.default.castChannelIdAsMessageId(r.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        r.isForumPost() &&
        r.ownerId === (null == (n = f.default.getCurrentUser()) ? void 0 : n.id) &&
        0 === l.Z.getCount(r.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => E(e) || b(e)))
    );
}
function w(e) {
    return e.reduce(
        (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, s.d$)(t.src),
        }),
        {
            containsVideo: !1,
            containsGif: !1,
        },
    );
}
