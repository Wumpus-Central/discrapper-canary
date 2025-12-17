n.d(t, {
    Ah: () => O,
    CB: () => w,
    aU: () => A,
    cp: () => D,
    eL: () => P,
    vg: () => R,
    zy: () => N,
}),
    n(953529),
    n(997841),
    n(388685),
    n(361932),
    n(187205);
var r = n(473749),
    i = n(95015),
    a = n(911969),
    o = n(292419),
    s = n(768494),
    l = n(406432),
    c = n(144140),
    u = n(695346),
    d = n(592125),
    f = n(375954),
    p = n(594174),
    _ = n(823379),
    m = n(709054),
    h = n(591759),
    g = n(981631);
function E(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, l.CO)(t) && null != n && n > 0 && null != r && r > 0;
}
function b(e) {
    return null != e && null != e && (0, l.NU)(e.filename) && null != e.proxy_url;
}
function y(e) {
    return E(e) || b(e);
}
var O = (function (e) {
    return (e.EMBED = "embed"), (e.ATTACHMENT = "attachment"), (e.COMPONENT = "component"), e;
})({});
function v(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x4.getSetting();
    if (!r) return [];
    let a =
        (null == e || null == (t = e.messageSnapshots[0]) ? void 0 : t.moderatorReport) != null
            ? null == e || null == (n = e.messageSnapshots[0])
                ? void 0
                : n.message.attachments
            : null == e
              ? void 0
              : e.attachments;
    return null == e || null == a
        ? []
        : a
              .filter(y)
              .map((e, t) => {
                  var n;
                  let {
                      proxy_url: r,
                      url: a,
                      description: o,
                      spoiler: s,
                      flags: c,
                      width: u,
                      height: d,
                      filename: f,
                      content_scan_version: p,
                  } = e;
                  if (null == u || null == d) return null;
                  let _ = (0, l.NU)(f),
                      m = null != e.flags && (0, i.yE)(e.flags, g.J0y.IS_THUMBNAIL),
                      E = null != r ? r : a;
                  if (_) {
                      let e = h.Z.toURLSafe(r);
                      if (null == e) return null;
                      e.searchParams.append("format", "webp"), (E = e.toString());
                  }
                  return {
                      type: "attachment",
                      src: E,
                      width: u,
                      height: d,
                      spoiler: null != s && s,
                      flags: c,
                      contentScanVersion: p,
                      alt: o,
                      isVideo: _,
                      isThumbnail: m,
                      attachmentId: e.id,
                      mediaIndex: t,
                      srcIsAnimated: (0, i.yE)(null != (n = e.flags) ? n : 0, g.J0y.IS_ANIMATED),
                  };
              })
              .filter(_.lm);
}
function S(e) {
    return v(e, u.x4.useSetting());
}
function I(e, t) {
    var n, r;
    let a = u.RS.useSetting(),
        o = u.NA.useSetting();
    if (null == e) return [];
    let s =
        (null == (n = e.messageSnapshots[0]) ? void 0 : n.moderatorReport) != null
            ? null == (r = e.messageSnapshots[0])
                ? void 0
                : r.message.embeds
            : e.embeds;
    return a && o && null != s
        ? s
              .map((e, n) => {
                  var r;
                  let a = null != (r = e.image) ? r : e.thumbnail;
                  if ((null == a && null != e.images && (a = e.images[0]), null != a && null != a.url)) {
                      let { height: r, proxyURL: o, url: s, width: c, flags: u } = a,
                          d = null != o && (0, l.cb)(o);
                      return {
                          type: "embed",
                          src: null != o && "" !== o ? o : s,
                          height: r,
                          width: c,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: n,
                          srcIsAnimated: (0, i.yE)(null != u ? u : 0, g.FoC.IS_ANIMATED),
                      };
                  }
              })
              .filter(_.lm)
        : [];
}
function T(e) {
    let t = u.RS.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, o.kS)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case a.re.THUMBNAIL:
                          var t;
                          return C(e.media, null != (t = e.spoiler) && t);
                      case a.re.MEDIA_GALLERY:
                          return e.items.map((e) => {
                              var t;
                              return C(e.media, null != (t = e.spoiler) && t);
                          });
                  }
                  return null;
              })
              .filter(_.lm)
        : [];
}
function C(e, t) {
    var n, r, a;
    let o = (0, s.hg)(e);
    return "INVALID" === o
        ? null
        : {
              type: "component",
              src: e.proxyUrl,
              height: null != (r = e.height) ? r : 0,
              width: null != (a = e.width) ? a : 0,
              spoiler: t,
              contentScanVersion: null == (n = e.contentScanMetadata) ? void 0 : n.version,
              flags: 0,
              srcIsAnimated: (0, i.yE)(e.flags, s.hR.IS_ANIMATED),
              isVideo: "VIDEO" === o,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function A(e, t) {
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
    let n = S(e);
    return [...n, ...I(e, t), ...T(e)];
}
function P(e, t) {
    var n, r, i;
    let a = S(e),
        o = I(e, t),
        s = T(e);
    return null != (i = null != (r = null != (n = a[0]) ? n : o[0]) ? r : s[0]) ? i : null;
}
function R(e, t) {
    let n = S(e),
        r = I(e, t),
        i = T(e);
    return null == n[0] && null == i[0] && null != r[0];
}
function w(e, t) {
    var n;
    let r = d.Z.getChannel(t);
    if (null == r) return !1;
    let i = f.Z.getMessage(r.id, m.default.castChannelIdAsMessageId(r.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        r.isForumPost() &&
        r.ownerId === (null == (n = p.default.getCurrentUser()) ? void 0 : n.id) &&
        0 === c.Z.getCount(r.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => E(e) || b(e)))
    );
}
function D(e) {
    return e.reduce(
        (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, l.d$)(t.src),
        }),
        {
            containsVideo: !1,
            containsGif: !1,
        },
    );
}
