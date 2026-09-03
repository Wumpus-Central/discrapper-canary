n.d(t, { $2: () => M, Ky: () => b, L_: () => R, no: () => T, vV: () => y, xz: () => O, yC: () => j }), n(938796);
var l,
    i = n(582128),
    s = n(665260),
    r = n(155718),
    a = n(814890),
    o = n(731068),
    u = n(59318),
    c = n(456874),
    d = n(885386),
    h = n(734057),
    m = n(232835),
    f = n(287809),
    p = n(403362),
    g = n(935208),
    x = n(998218),
    A = n(652215);
function E(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: l } = e;
    return (0, u.u)(t) && null != n && n > 0 && null != l && l > 0;
}
function C(e) {
    return null != e && null != e && (0, u.AE)(e.filename) && null != e.proxy_url;
}
function I(e) {
    return E(e) || C(e);
}
var y = (((l = {}).EMBED = "embed"), (l.ATTACHMENT = "attachment"), (l.COMPONENT = "component"), l);
function S(e) {
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
                  .filter(I)
                  .map((e, t) => {
                      let {
                          proxy_url: n,
                          url: l,
                          description: i,
                          flags: r,
                          width: a,
                          height: o,
                          filename: c,
                          content_scan_version: d,
                      } = e;
                      if (null == a || null == o) return null;
                      let h = (0, u.AE)(c),
                          m = null != e.flags && (0, s.Lt)(e.flags, A.sbO.IS_THUMBNAIL),
                          f = n ?? l;
                      if (h) {
                          let e = x.A.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append("format", "webp"), (f = e.toString());
                      }
                      return {
                          type: "attachment",
                          src: f,
                          width: a,
                          height: o,
                          spoiler: (0, s.Lt)(r ?? 0, A.sbO.IS_SPOILER),
                          flags: r,
                          contentScanVersion: d,
                          alt: i,
                          isVideo: h,
                          isThumbnail: m,
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, s.Lt)(e.flags ?? 0, A.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(p.Vq);
    })(e, d.X6.useSetting());
}
function N(e, t) {
    let n = d.hD.useSetting(),
        l = d.rs.useSetting();
    if (null == e) return [];
    let i = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && l && null != i
        ? i
              .map((e, n) => {
                  let l = e.image ?? e.thumbnail;
                  if ((null == l && null != e.images && (l = e.images[0]), null != l && null != l.url)) {
                      let { height: i, proxyURL: r, url: a, width: o, flags: c } = l,
                          d = null != r && (0, u.r1)(r);
                      return {
                          type: "embed",
                          src: null != r && "" !== r ? r : a,
                          height: i,
                          width: o,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: n,
                          srcIsAnimated: (0, s.Lt)(c ?? 0, A.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(p.Vq)
        : [];
}
function v(e) {
    let t = d.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, a.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case r.I5.THUMBNAIL:
                          return _(e.media, e.spoiler ?? !1);
                      case r.I5.MEDIA_GALLERY:
                          return e.items.map((e) => _(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(p.Vq)
        : [];
}
function _(e, t) {
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
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = j(e, n);
    return i.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return l;
        {
            let e = l.find((e) => e.isThumbnail);
            return null != e ? [e] : l;
        }
    }, [t, l]);
}
function j(e, t) {
    return [...S(e), ...N(e, t), ...v(e)];
}
function b(e, t) {
    let n = S(e),
        l = N(e, t),
        i = v(e);
    return n[0] ?? l[0] ?? i[0] ?? null;
}
function R(e, t) {
    let n = S(e),
        l = N(e, t),
        i = v(e);
    return null == n[0] && null == i[0] && null != l[0];
}
function O(e, t) {
    let n = h.A.getChannel(t);
    if (null == n) return !1;
    let l = m.A.getMessage(n.id, g.default.castChannelIdAsMessageId(n.id));
    return (
        null != l &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === f.default.getCurrentUser()?.id &&
        0 === c.A.getCount(n.id) &&
        (0 === l.attachments.length || null == l.attachments.find((e) => E(e) || C(e)))
    );
}
function M(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, u.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
