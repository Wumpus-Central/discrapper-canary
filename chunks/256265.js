"use strict";
n.d(t, { $2: () => L, Ky: () => j, L_: () => R, no: () => N, vV: () => I, xz: () => w, yC: () => T }), n(938796);
var i,
    l = n(64700),
    s = n(665260),
    r = n(155718),
    a = n(814890),
    o = n(731068),
    c = n(77350),
    u = n(456874),
    d = n(253932),
    h = n(734057),
    m = n(320501),
    p = n(287809),
    f = n(403362),
    g = n(661191),
    _ = n(998218),
    x = n(652215);
function A(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: i } = e;
    return (0, c.u)(t) && null != n && n > 0 && null != i && i > 0;
}
function C(e) {
    return null != e && null != e && (0, c.AE)(e.filename) && null != e.proxy_url;
}
function E(e) {
    return A(e) || C(e);
}
var I = (((i = {}).EMBED = "embed"), (i.ATTACHMENT = "attachment"), (i.COMPONENT = "component"), i);
function v(e) {
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
                  .filter(E)
                  .map((e, t) => {
                      let {
                          proxy_url: n,
                          url: i,
                          description: l,
                          spoiler: r,
                          flags: a,
                          width: o,
                          height: u,
                          filename: d,
                          content_scan_version: h,
                      } = e;
                      if (null == o || null == u) return null;
                      let m = (0, c.AE)(d),
                          p = null != e.flags && (0, s.Lt)(e.flags, x.sbO.IS_THUMBNAIL),
                          f = n ?? i;
                      if (m) {
                          let e = _.A.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append("format", "webp"), (f = e.toString());
                      }
                      return {
                          type: "attachment",
                          src: f,
                          width: o,
                          height: u,
                          spoiler: r ?? !1,
                          flags: a,
                          contentScanVersion: h,
                          alt: l,
                          isVideo: m,
                          isThumbnail: p,
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, s.Lt)(e.flags ?? 0, x.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(f.Vq);
    })(e, d.X6.useSetting());
}
function y(e, t) {
    let n = d.hD.useSetting(),
        i = d.rs.useSetting();
    if (null == e) return [];
    let l = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && i && null != l
        ? l
              .map((e, n) => {
                  let i = e.image ?? e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: l, proxyURL: r, url: a, width: o, flags: u } = i,
                          d = null != r && (0, c.r1)(r);
                      return {
                          type: "embed",
                          src: null != r && "" !== r ? r : a,
                          height: l,
                          width: o,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: n,
                          srcIsAnimated: (0, s.Lt)(u ?? 0, x.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(f.Vq)
        : [];
}
function S(e) {
    let t = d.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, a.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case r.I5.THUMBNAIL:
                          return b(e.media, e.spoiler ?? !1);
                      case r.I5.MEDIA_GALLERY:
                          return e.items.map((e) => b(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(f.Vq)
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
              srcIsAnimated: (0, s.Lt)(e.flags, o.e5.IS_ANIMATED),
              isVideo: "VIDEO" === n,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = T(e, n);
    return l.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [t, i]);
}
function T(e, t) {
    return [...v(e), ...y(e, t), ...S(e)];
}
function j(e, t) {
    let n = v(e),
        i = y(e, t),
        l = S(e);
    return n[0] ?? i[0] ?? l[0] ?? null;
}
function R(e, t) {
    let n = v(e),
        i = y(e, t),
        l = S(e);
    return null == n[0] && null == l[0] && null != i[0];
}
function w(e, t) {
    let n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = m.A.getMessage(n.id, g.default.castChannelIdAsMessageId(n.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === p.default.getCurrentUser()?.id &&
        0 === u.A.getCount(n.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => A(e) || C(e)))
    );
}
function L(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, c.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
