"use strict";
n.d(t, { $2: () => w, Ky: () => O, L_: () => D, no: () => N, vV: () => T, xz: () => L, yC: () => R }), n(938796);
var r = n(64700),
    i = n(665260),
    a = n(155718),
    s = n(814890),
    o = n(731068),
    l = n(77350),
    u = n(456874),
    c = n(253932),
    d = n(734057),
    _ = n(320501),
    f = n(287809),
    p = n(403362),
    h = n(661191),
    m = n(998218),
    g = n(652215);
function E(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, l.u)(t) && null != n && n > 0 && null != r && r > 0;
}
function A(e) {
    return null != e && null != e && (0, l.AE)(e.filename) && null != e.proxy_url;
}
function I(e) {
    return E(e) || A(e);
}
var T = (function (e) {
    return (e.EMBED = "embed"), (e.ATTACHMENT = "attachment"), (e.COMPONENT = "component"), e;
})({});
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.X6.getSetting();
    if (!t) return [];
    let n =
        e?.messageSnapshots[0]?.moderatorReport != null ? e?.messageSnapshots[0]?.message.attachments : e?.attachments;
    return null == e || null == n
        ? []
        : n
              .filter(I)
              .map((e, t) => {
                  let {
                      proxy_url: n,
                      url: r,
                      description: a,
                      spoiler: s,
                      flags: o,
                      width: u,
                      height: c,
                      filename: d,
                      content_scan_version: _,
                  } = e;
                  if (null == u || null == c) return null;
                  let f = (0, l.AE)(d),
                      p = null != e.flags && (0, i.Lt)(e.flags, g.sbO.IS_THUMBNAIL),
                      h = n ?? r;
                  if (f) {
                      let e = m.A.toURLSafe(n);
                      if (null == e) return null;
                      e.searchParams.append("format", "webp"), (h = e.toString());
                  }
                  return {
                      type: "attachment",
                      src: h,
                      width: u,
                      height: c,
                      spoiler: s ?? !1,
                      flags: o,
                      contentScanVersion: _,
                      alt: a,
                      isVideo: f,
                      isThumbnail: p,
                      attachmentId: e.id,
                      mediaIndex: t,
                      srcIsAnimated: (0, i.Lt)(e.flags ?? 0, g.sbO.IS_ANIMATED),
                  };
              })
              .filter(p.Vq);
}
function S(e) {
    return y(e, c.X6.useSetting());
}
function v(e, t) {
    let n = c.hD.useSetting(),
        r = c.rs.useSetting();
    if (null == e) return [];
    let a = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && r && null != a
        ? a
              .map((e, n) => {
                  let r = e.image ?? e.thumbnail;
                  if ((null == r && null != e.images && (r = e.images[0]), null != r && null != r.url)) {
                      let { height: a, proxyURL: s, url: o, width: u, flags: c } = r,
                          d = null != s && (0, l.r1)(s);
                      return {
                          type: "embed",
                          src: null != s && "" !== s ? s : o,
                          height: a,
                          width: u,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: n,
                          srcIsAnimated: (0, i.Lt)(c ?? 0, g.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(p.Vq)
        : [];
}
function C(e) {
    let t = c.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, s.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case a.I5.THUMBNAIL:
                          return b(e.media, e.spoiler ?? !1);
                      case a.I5.MEDIA_GALLERY:
                          return e.items.map((e) => b(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(p.Vq)
        : [];
}
function b(e, t) {
    let n = (0, o.FE)(e);
    return "INVALID" === n
        ? null
        : {
              type: "component",
              src: e.proxyUrl,
              height: e.height ?? 0,
              width: e.width ?? 0,
              spoiler: t,
              contentScanVersion: e.contentScanMetadata?.version,
              flags: 0,
              srcIsAnimated: (0, i.Lt)(e.flags, o.e5.IS_ANIMATED),
              isVideo: "VIDEO" === n,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = R(e, n);
    return r.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [t, i]);
}
function R(e, t) {
    return [...S(e), ...v(e, t), ...C(e)];
}
function O(e, t) {
    let n = S(e),
        r = v(e, t),
        i = C(e);
    return n[0] ?? r[0] ?? i[0] ?? null;
}
function D(e, t) {
    let n = S(e),
        r = v(e, t),
        i = C(e);
    return null == n[0] && null == i[0] && null != r[0];
}
function L(e, t) {
    let n = d.A.getChannel(t);
    if (null == n) return !1;
    let r = _.A.getMessage(n.id, h.default.castChannelIdAsMessageId(n.id));
    return (
        null != r &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === f.default.getCurrentUser()?.id &&
        0 === u.A.getCount(n.id) &&
        (0 === r.attachments.length || null == r.attachments.find((e) => E(e) || A(e)))
    );
}
function w(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, l.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
