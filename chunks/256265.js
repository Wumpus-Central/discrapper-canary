"use strict";
n.d(t, { $2: () => w, Ky: () => b, L_: () => D, no: () => O, vV: () => S, xz: () => L, yC: () => R }), n(938796);
var i,
    r = n(64700),
    s = n(665260),
    a = n(155718),
    o = n(814890),
    l = n(731068),
    u = n(59318),
    c = n(456874),
    d = n(885386),
    _ = n(734057),
    f = n(232835),
    h = n(287809),
    p = n(403362),
    E = n(935208),
    m = n(998218),
    g = n(652215);
function A(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: i } = e;
    return (0, u.u)(t) && null != n && n > 0 && null != i && i > 0;
}
function I(e) {
    return null != e && null != e && (0, u.AE)(e.filename) && null != e.proxy_url;
}
function T(e) {
    return A(e) || I(e);
}
var S = (((i = {}).EMBED = "embed"), (i.ATTACHMENT = "attachment"), (i.COMPONENT = "component"), i);
function N(e) {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.X6.getSetting();
        if (!t) return [];
        let n =
            e?.messageSnapshots[0]?.moderatorReport != null
                ? e?.messageSnapshots[0]?.message.attachments
                : e?.attachments;
        return null == e || null == n
            ? []
            : n
                  .filter(T)
                  .map((e, t) => {
                      let {
                          proxy_url: n,
                          url: i,
                          description: r,
                          spoiler: a,
                          flags: o,
                          width: l,
                          height: c,
                          filename: d,
                          content_scan_version: _,
                      } = e;
                      if (null == l || null == c) return null;
                      let f = (0, u.AE)(d),
                          h = null != e.flags && (0, s.Lt)(e.flags, g.sbO.IS_THUMBNAIL),
                          p = n ?? i;
                      if (f) {
                          let e = m.A.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append("format", "webp"), (p = e.toString());
                      }
                      return {
                          type: "attachment",
                          src: p,
                          width: l,
                          height: c,
                          spoiler: a ?? !1,
                          flags: o,
                          contentScanVersion: _,
                          alt: r,
                          isVideo: f,
                          isThumbnail: h,
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, s.Lt)(e.flags ?? 0, g.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(p.Vq);
    })(e, d.X6.useSetting());
}
function y(e, t) {
    let n = d.hD.useSetting(),
        i = d.rs.useSetting();
    if (null == e) return [];
    let r = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && i && null != r
        ? r
              .map((e, n) => {
                  let i = e.image ?? e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: r, proxyURL: a, url: o, width: l, flags: c } = i,
                          d = null != a && (0, u.r1)(a);
                      return {
                          type: "embed",
                          src: null != a && "" !== a ? a : o,
                          height: r,
                          width: l,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: n,
                          srcIsAnimated: (0, s.Lt)(c ?? 0, g.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(p.Vq)
        : [];
}
function C(e) {
    let t = d.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, o.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case a.I5.THUMBNAIL:
                          return v(e.media, e.spoiler ?? !1);
                      case a.I5.MEDIA_GALLERY:
                          return e.items.map((e) => v(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(p.Vq)
        : [];
}
function v(e, t) {
    let n = (0, l.FE)(e);
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
              srcIsAnimated: (0, s.Lt)(e.flags, l.e5.IS_ANIMATED),
              isVideo: "VIDEO" === n,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function O(e, t) {
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
    return [...N(e), ...y(e, t), ...C(e)];
}
function b(e, t) {
    let n = N(e),
        i = y(e, t),
        r = C(e);
    return n[0] ?? i[0] ?? r[0] ?? null;
}
function D(e, t) {
    let n = N(e),
        i = y(e, t),
        r = C(e);
    return null == n[0] && null == r[0] && null != i[0];
}
function L(e, t) {
    let n = _.A.getChannel(t);
    if (null == n) return !1;
    let i = f.A.getMessage(n.id, E.default.castChannelIdAsMessageId(n.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === h.default.getCurrentUser()?.id &&
        0 === c.A.getCount(n.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => A(e) || I(e)))
    );
}
function w(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, u.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
