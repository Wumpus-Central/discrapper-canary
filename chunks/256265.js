n.d(t, { $2: () => M, Ky: () => b, L_: () => U, no: () => h, vV: () => C, xz: () => P, yC: () => g }), n(938796);
var i,
    r = n(64700),
    a = n(665260),
    s = n(155718),
    _ = n(814890),
    l = n(731068),
    o = n(77350),
    E = n(456874),
    d = n(253932),
    c = n(734057),
    u = n(232835),
    I = n(287809),
    A = n(403362),
    T = n(935208),
    S = n(998218),
    N = n(652215);
function O(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: i } = e;
    return (0, o.u)(t) && null != n && n > 0 && null != i && i > 0;
}
function R(e) {
    return null != e && null != e && (0, o.AE)(e.filename) && null != e.proxy_url;
}
function f(e) {
    return O(e) || R(e);
}
var C = (((i = {}).EMBED = "embed"), (i.ATTACHMENT = "attachment"), (i.COMPONENT = "component"), i);
function p(e) {
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
                  .filter(f)
                  .map((e, t) => {
                      let {
                          proxy_url: n,
                          url: i,
                          description: r,
                          spoiler: s,
                          flags: _,
                          width: l,
                          height: E,
                          filename: d,
                          content_scan_version: c,
                      } = e;
                      if (null == l || null == E) return null;
                      let u = (0, o.AE)(d),
                          I = null != e.flags && (0, a.Lt)(e.flags, N.sbO.IS_THUMBNAIL),
                          A = n ?? i;
                      if (u) {
                          let e = S.A.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append("format", "webp"), (A = e.toString());
                      }
                      return {
                          type: "attachment",
                          src: A,
                          width: l,
                          height: E,
                          spoiler: s ?? !1,
                          flags: _,
                          contentScanVersion: c,
                          alt: r,
                          isVideo: u,
                          isThumbnail: I,
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, a.Lt)(e.flags ?? 0, N.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(A.Vq);
    })(e, d.X6.useSetting());
}
function m(e, t) {
    let n = d.hD.useSetting(),
        i = d.rs.useSetting();
    if (null == e) return [];
    let r = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return n && i && null != r
        ? r
              .map((e, n) => {
                  let i = e.image ?? e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: r, proxyURL: s, url: _, width: l, flags: E } = i,
                          d = null != s && (0, o.r1)(s);
                      return {
                          type: "embed",
                          src: null != s && "" !== s ? s : _,
                          height: r,
                          width: l,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: n,
                          srcIsAnimated: (0, a.Lt)(E ?? 0, N.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(A.Vq)
        : [];
}
function L(e) {
    let t = d.hD.useSetting();
    if (null == e) return [];
    let n = e.components;
    return t && null != n
        ? Array.from((0, _.p4)(n).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case s.I5.THUMBNAIL:
                          return D(e.media, e.spoiler ?? !1);
                      case s.I5.MEDIA_GALLERY:
                          return e.items.map((e) => D(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(A.Vq)
        : [];
}
function D(e, t) {
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
              srcIsAnimated: (0, a.Lt)(e.flags, l.e5.IS_ANIMATED),
              isVideo: "VIDEO" === n,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = g(e, n);
    return r.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [t, i]);
}
function g(e, t) {
    return [...p(e), ...m(e, t), ...L(e)];
}
function b(e, t) {
    let n = p(e),
        i = m(e, t),
        r = L(e);
    return n[0] ?? i[0] ?? r[0] ?? null;
}
function U(e, t) {
    let n = p(e),
        i = m(e, t),
        r = L(e);
    return null == n[0] && null == r[0] && null != i[0];
}
function P(e, t) {
    let n = c.A.getChannel(t);
    if (null == n) return !1;
    let i = u.A.getMessage(n.id, T.default.castChannelIdAsMessageId(n.id));
    return (
        null != i &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        n.isForumPost() &&
        n.ownerId === I.default.getCurrentUser()?.id &&
        0 === E.A.getCount(n.id) &&
        (0 === i.attachments.length || null == i.attachments.find((e) => O(e) || R(e)))
    );
}
function M(e) {
    return e.reduce(
        (e, t) => ({ containsVideo: e.containsVideo || t.isVideo, containsGif: e.containsGif || (0, o.ge)(t.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
