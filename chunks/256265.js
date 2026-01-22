n.d(t, {
    $2: () => D,
    Ky: () => R,
    L_: () => w,
    no: () => C,
    vV: () => O,
    xz: () => P,
    yC: () => N,
}),
    n(228524),
    n(938796),
    n(896048),
    n(114821),
    n(339614);
var r = n(64700),
    i = n(665260),
    a = n(155718),
    s = n(814890),
    o = n(731068),
    l = n(77350),
    c = n(456874),
    u = n(253932),
    d = n(734057),
    f = n(320501),
    p = n(287809),
    _ = n(403362),
    h = n(661191),
    m = n(998218),
    g = n(652215);

function E(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, l.u)(t) && null != n && n > 0 && null != r && r > 0;
}

function b(e) {
    return null != e && null != e && (0, l.AE)(e.filename) && null != e.proxy_url;
}

function y(e) {
    return E(e) || b(e);
}
var O = (function (e) {
    return (e.EMBED = "embed"), (e.ATTACHMENT = "attachment"), (e.COMPONENT = "component"), e;
})({});

function A(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.X6.getSetting();
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
                      description: s,
                      spoiler: o,
                      flags: c,
                      width: u,
                      height: d,
                      filename: f,
                      content_scan_version: p,
                  } = e;
                  if (null == u || null == d) return null;
                  let _ = (0, l.AE)(f),
                      h = null != e.flags && (0, i.Lt)(e.flags, g.sbO.IS_THUMBNAIL),
                      E = null != r ? r : a;
                  if (_) {
                      let e = m.A.toURLSafe(r);
                      if (null == e) return null;
                      e.searchParams.append("format", "webp"), (E = e.toString());
                  }
                  return {
                      type: "attachment",
                      src: E,
                      width: u,
                      height: d,
                      spoiler: null != o && o,
                      flags: c,
                      contentScanVersion: p,
                      alt: s,
                      isVideo: _,
                      isThumbnail: h,
                      attachmentId: e.id,
                      mediaIndex: t,
                      srcIsAnimated: (0, i.Lt)(null != (n = e.flags) ? n : 0, g.sbO.IS_ANIMATED),
                  };
              })
              .filter(_.Vq);
}

function v(e) {
    return A(e, u.X6.useSetting());
}

function S(e, t) {
    var n, r;
    let a = u.hD.useSetting(),
        s = u.rs.useSetting();
    if (null == e) return [];
    let o =
        (null == (n = e.messageSnapshots[0]) ? void 0 : n.moderatorReport) != null
            ? null == (r = e.messageSnapshots[0])
                ? void 0
                : r.message.embeds
            : e.embeds;
    return a && s && null != o
        ? o
              .map((e, n) => {
                  var r;
                  let a = null != (r = e.image) ? r : e.thumbnail;
                  if ((null == a && null != e.images && (a = e.images[0]), null != a && null != a.url)) {
                      let { height: r, proxyURL: s, url: o, width: c, flags: u } = a,
                          d = null != s && (0, l.r1)(s);
                      return {
                          type: "embed",
                          src: null != s && "" !== s ? s : o,
                          height: r,
                          width: c,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: n,
                          srcIsAnimated: (0, i.Lt)(null != u ? u : 0, g.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(_.Vq)
        : [];
}

function I(e) {
    let t = u.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, s.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case a.I5.THUMBNAIL:
                          var t;
                          return T(e.media, null != (t = e.spoiler) && t);
                      case a.I5.MEDIA_GALLERY:
                          return e.items.map((e) => {
                              var t;
                              return T(e.media, null != (t = e.spoiler) && t);
                          });
                  }
                  return null;
              })
              .filter(_.Vq)
        : [];
}

function T(e, t) {
    var n, r, a;
    let s = (0, o.FE)(e);
    return "INVALID" === s
        ? null
        : {
              type: "component",
              src: e.proxyUrl,
              height: null != (n = e.height) ? n : 0,
              width: null != (r = e.width) ? r : 0,
              spoiler: t,
              contentScanVersion: null == (a = e.contentScanMetadata) ? void 0 : a.version,
              flags: 0,
              srcIsAnimated: (0, i.Lt)(e.flags, o.e5.IS_ANIMATED),
              isVideo: "VIDEO" === s,
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
    return [...v(e), ...S(e, t), ...I(e)];
}

function R(e, t) {
    var n, r, i;
    let a = v(e),
        s = S(e, t),
        o = I(e);
    return null != (n = null != (r = null != (i = a[0]) ? i : s[0]) ? r : o[0]) ? n : null;
}

function w(e, t) {
    let n = v(e),
        r = S(e, t),
        i = I(e);
    return null == n[0] && null == i[0] && null != r[0];
}

function P(e, t) {
    var n;
    let r = d.A.getChannel(t);
    if (null == r) return !1;
    let i = f.A.getMessage(r.id, h.default.castChannelIdAsMessageId(r.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        r.isForumPost() &&
        r.ownerId === (null == (n = p.default.getCurrentUser()) ? void 0 : n.id) &&
        0 === c.A.getCount(r.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => E(e) || b(e)))
    );
}

function D(e) {
    return e.reduce(
        (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, l.ge)(t.src),
        }),
        {
            containsVideo: !1,
            containsGif: !1,
        },
    );
}
