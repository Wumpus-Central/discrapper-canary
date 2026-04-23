"use strict";
n.d(t, { $2: () => w, Ky: () => b, L_: () => D, no: () => O, vV: () => S, xz: () => L, yC: () => R }), n(938796);
var r,
    i = n(64700),
    s = n(665260),
    a = n(155718),
    o = n(814890),
    l = n(731068),
    u = n(77350),
    c = n(456874),
    d = n(253932),
    _ = n(734057),
    f = n(320501),
    p = n(287809),
    h = n(403362),
    E = n(661191),
    m = n(998218),
    g = n(652215);
function A(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, u.u)(t) && null != n && n > 0 && null != r && r > 0;
}
function I(e) {
    return null != e && null != e && (0, u.AE)(e.filename) && null != e.proxy_url;
}
function T(e) {
    return A(e) || I(e);
}
var S = (((r = {}).EMBED = "embed"), (r.ATTACHMENT = "attachment"), (r.COMPONENT = "component"), r);
function y(e) {
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
                          url: r,
                          description: i,
                          spoiler: a,
                          flags: o,
                          width: l,
                          height: c,
                          filename: d,
                          content_scan_version: _,
                      } = e;
                      if (null == l || null == c) return null;
                      let f = (0, u.AE)(d),
                          p = null != e.flags && (0, s.Lt)(e.flags, g.sbO.IS_THUMBNAIL),
                          h = n ?? r;
                      if (f) {
                          let e = m.A.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append("format", "webp"), (h = e.toString());
                      }
                      return {
                          type: "attachment",
                          src: h,
                          width: l,
                          height: c,
                          spoiler: a ?? !1,
                          flags: o,
                          contentScanVersion: _,
                          alt: i,
                          isVideo: f,
                          isThumbnail: p,
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, s.Lt)(e.flags ?? 0, g.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(h.Vq);
    })(e, d.X6.useSetting());
}
function N(e, t) {
    let n = d.hD.useSetting(),
        r = d.rs.useSetting();
    if (null == e) return [];
    let i = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && r && null != i
        ? i
              .map((e, n) => {
                  let r = e.image ?? e.thumbnail;
                  if ((null == r && null != e.images && (r = e.images[0]), null != r && null != r.url)) {
                      let { height: i, proxyURL: a, url: o, width: l, flags: c } = r,
                          d = null != a && (0, u.r1)(a);
                      return {
                          type: "embed",
                          src: null != a && "" !== a ? a : o,
                          height: i,
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
              .filter(h.Vq)
        : [];
}
function v(e) {
    let t = d.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, o.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case a.I5.THUMBNAIL:
                          return C(e.media, e.spoiler ?? !1);
                      case a.I5.MEDIA_GALLERY:
                          return e.items.map((e) => C(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(h.Vq)
        : [];
}
function C(e, t) {
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
        r = R(e, n);
    return i.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return r;
        {
            let e = r.find((e) => e.isThumbnail);
            return null != e ? [e] : r;
        }
    }, [t, r]);
}
function R(e, t) {
    return [...y(e), ...N(e, t), ...v(e)];
}
function b(e, t) {
    let n = y(e),
        r = N(e, t),
        i = v(e);
    return n[0] ?? r[0] ?? i[0] ?? null;
}
function D(e, t) {
    let n = y(e),
        r = N(e, t),
        i = v(e);
    return null == n[0] && null == i[0] && null != r[0];
}
function L(e, t) {
    let n = _.A.getChannel(t);
    if (null == n) return !1;
    let r = f.A.getMessage(n.id, E.default.castChannelIdAsMessageId(n.id));
    return (
        null != r &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === p.default.getCurrentUser()?.id &&
        0 === c.A.getCount(n.id) &&
        (0 === r.attachments.length || null == r.attachments.find((e) => A(e) || I(e)))
    );
}
function w(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, u.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
