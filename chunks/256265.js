n.d(t, { $2: () => D, Ky: () => b, L_: () => w, no: () => N, vV: () => y, xz: () => x, yC: () => M }), n(938796);
var i,
    l = n(64700),
    r = n(665260),
    s = n(155718),
    a = n(814890),
    o = n(731068),
    u = n(77350),
    d = n(456874),
    c = n(253932),
    h = n(734057),
    p = n(232835),
    m = n(287809),
    f = n(403362),
    E = n(935208),
    g = n(998218),
    A = n(652215);
function _(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: i } = e;
    return (0, u.u)(t) && null != n && n > 0 && null != i && i > 0;
}
function S(e) {
    return null != e && null != e && (0, u.AE)(e.filename) && null != e.proxy_url;
}
function I(e) {
    return _(e) || S(e);
}
var y = (((i = {}).EMBED = "embed"), (i.ATTACHMENT = "attachment"), (i.COMPONENT = "component"), i);
function C(e) {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.X6.getSetting();
        if (!t) return [];
        let n =
            e?.messageSnapshots[0]?.moderatorReport != null
                ? e?.messageSnapshots[0]?.message.attachments
                : e?.attachments;
        return null == e || null == n
            ? []
            : n
                  .filter(I)
                  .map((e, t) => {
                      let {
                          proxy_url: n,
                          url: i,
                          description: l,
                          spoiler: s,
                          flags: a,
                          width: o,
                          height: d,
                          filename: c,
                          content_scan_version: h,
                      } = e;
                      if (null == o || null == d) return null;
                      let p = (0, u.AE)(c),
                          m = null != e.flags && (0, r.Lt)(e.flags, A.sbO.IS_THUMBNAIL),
                          f = n ?? i;
                      if (p) {
                          let e = g.A.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append("format", "webp"), (f = e.toString());
                      }
                      return {
                          type: "attachment",
                          src: f,
                          width: o,
                          height: d,
                          spoiler: s ?? !1,
                          flags: a,
                          contentScanVersion: h,
                          alt: l,
                          isVideo: p,
                          isThumbnail: m,
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, r.Lt)(e.flags ?? 0, A.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(f.Vq);
    })(e, c.X6.useSetting());
}
function T(e, t) {
    let n = c.hD.useSetting(),
        i = c.rs.useSetting();
    if (null == e) return [];
    let l = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && i && null != l
        ? l
              .map((e, n) => {
                  let i = e.image ?? e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: l, proxyURL: s, url: a, width: o, flags: d } = i,
                          c = null != s && (0, u.r1)(s);
                      return {
                          type: "embed",
                          src: null != s && "" !== s ? s : a,
                          height: l,
                          width: o,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: c,
                          mediaIndex: n,
                          srcIsAnimated: (0, r.Lt)(d ?? 0, A.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(f.Vq)
        : [];
}
function v(e) {
    let t = c.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, a.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case s.I5.THUMBNAIL:
                          return R(e.media, e.spoiler ?? !1);
                      case s.I5.MEDIA_GALLERY:
                          return e.items.map((e) => R(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(f.Vq)
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
              srcIsAnimated: (0, r.Lt)(e.flags, o.e5.IS_ANIMATED),
              isVideo: "VIDEO" === n,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = M(e, n);
    return l.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [t, i]);
}
function M(e, t) {
    return [...C(e), ...T(e, t), ...v(e)];
}
function b(e, t) {
    let n = C(e),
        i = T(e, t),
        l = v(e);
    return n[0] ?? i[0] ?? l[0] ?? null;
}
function w(e, t) {
    let n = C(e),
        i = T(e, t),
        l = v(e);
    return null == n[0] && null == l[0] && null != i[0];
}
function x(e, t) {
    let n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = p.A.getMessage(n.id, E.default.castChannelIdAsMessageId(n.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === m.default.getCurrentUser()?.id &&
        0 === d.A.getCount(n.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => _(e) || S(e)))
    );
}
function D(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, u.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
