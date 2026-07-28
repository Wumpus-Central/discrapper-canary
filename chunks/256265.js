"use strict";
n.d(t, { $2: () => M, Ky: () => D, L_: () => v, no: () => L, vV: () => S, xz: () => b, yC: () => y }), n(938796);
var i,
    r = n(582128),
    a = n(665260),
    s = n(155718),
    l = n(814890),
    o = n(731068),
    d = n(59318),
    c = n(456874),
    u = n(885386),
    _ = n(734057),
    E = n(232835),
    A = n(287809),
    h = n(403362),
    I = n(935208),
    f = n(998218),
    p = n(652215);
function T(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: i } = e;
    return (0, d.u)(t) && null != n && n > 0 && null != i && i > 0;
}
function m(e) {
    return null != e && null != e && (0, d.AE)(e.filename) && null != e.proxy_url;
}
function g(e) {
    return T(e) || m(e);
}
var S = (((i = {}).EMBED = "embed"), (i.ATTACHMENT = "attachment"), (i.COMPONENT = "component"), i);
function N(e) {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.X6.getSetting();
        if (!t) return [];
        let n =
            e?.messageSnapshots[0]?.moderatorReport != null
                ? e?.messageSnapshots[0]?.message.attachments
                : e?.attachments;
        return null == e || null == n
            ? []
            : n
                  .filter(g)
                  .map((e, t) => {
                      let {
                          proxy_url: n,
                          url: i,
                          description: r,
                          flags: s,
                          width: l,
                          height: o,
                          filename: c,
                          content_scan_version: u,
                      } = e;
                      if (null == l || null == o) return null;
                      let _ = (0, d.AE)(c),
                          E = null != e.flags && (0, a.Lt)(e.flags, p.sbO.IS_THUMBNAIL),
                          A = n ?? i;
                      if (_) {
                          let e = f.A.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append("format", "webp"), (A = e.toString());
                      }
                      return {
                          type: "attachment",
                          src: A,
                          width: l,
                          height: o,
                          spoiler: (0, a.Lt)(s ?? 0, p.sbO.IS_SPOILER),
                          flags: s,
                          contentScanVersion: u,
                          alt: r,
                          isVideo: _,
                          isThumbnail: E,
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, a.Lt)(e.flags ?? 0, p.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(h.Vq);
    })(e, u.X6.useSetting());
}
function C(e, t) {
    let n = u.hD.useSetting(),
        i = u.rs.useSetting();
    if (null == e) return [];
    let r = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && i && null != r
        ? r
              .map((e, n) => {
                  let i = e.image ?? e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: r, proxyURL: s, url: l, width: o, flags: c } = i,
                          u = null != s && (0, d.r1)(s);
                      return {
                          type: "embed",
                          src: null != s && "" !== s ? s : l,
                          height: r,
                          width: o,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: u,
                          mediaIndex: n,
                          srcIsAnimated: (0, a.Lt)(c ?? 0, p.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(h.Vq)
        : [];
}
function O(e) {
    let t = u.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, l.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case s.I5.THUMBNAIL:
                          return R(e.media, e.spoiler ?? !1);
                      case s.I5.MEDIA_GALLERY:
                          return e.items.map((e) => R(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(h.Vq)
        : [];
}
function R(e, t) {
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
              srcIsAnimated: (0, a.Lt)(e.flags, o.e5.IS_ANIMATED),
              isVideo: "VIDEO" === n,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = y(e, n);
    return r.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [t, i]);
}
function y(e, t) {
    return [...N(e), ...C(e, t), ...O(e)];
}
function D(e, t) {
    let n = N(e),
        i = C(e, t),
        r = O(e);
    return n[0] ?? i[0] ?? r[0] ?? null;
}
function v(e, t) {
    let n = N(e),
        i = C(e, t),
        r = O(e);
    return null == n[0] && null == r[0] && null != i[0];
}
function b(e, t) {
    let n = _.A.getChannel(t);
    if (null == n) return !1;
    let i = E.A.getMessage(n.id, I.default.castChannelIdAsMessageId(n.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === A.default.getCurrentUser()?.id &&
        0 === c.A.getCount(n.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => T(e) || m(e)))
    );
}
function M(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, d.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
