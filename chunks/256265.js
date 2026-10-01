(t.d(n, { $2: () => w, Ky: () => T, L_: () => D, no: () => C, vV: () => E, xz: () => v, yC: () => N }), t(938796));
var l,
    r = t(582128),
    i = t(665260),
    s = t(155718),
    u = t(437517),
    a = t(731068),
    o = t(59318),
    c = t(456874),
    d = t(885386),
    f = t(734057),
    m = t(232835),
    g = t(287809),
    p = t(403362),
    h = t(935208),
    I = t(998218),
    A = t(652215);
function S(e) {
    if (null == e) return !1;
    let { filename: n, height: t, width: l } = e;
    return (0, o.u)(n) && null != t && t > 0 && null != l && l > 0;
}
function M(e) {
    return null != e && null != e && (0, o.AE)(e.filename) && null != e.proxy_url;
}
function V(e) {
    return S(e) || M(e);
}
var E = (((l = {}).EMBED = "embed"), (l.ATTACHMENT = "attachment"), (l.COMPONENT = "component"), l);
function L(e) {
    return (function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.X6.getSetting();
        if (!n) return [];
        let t =
            e?.messageSnapshots[0]?.moderatorReport != null
                ? e?.messageSnapshots[0]?.message.attachments
                : e?.attachments;
        return null == e || null == t
            ? []
            : t
                  .filter(V)
                  .map((e, n) => {
                      let {
                          proxy_url: t,
                          url: l,
                          description: r,
                          flags: s,
                          width: u,
                          height: a,
                          filename: c,
                          content_scan_version: d,
                      } = e;
                      if (null == u || null == a) return null;
                      let f = (0, o.AE)(c),
                          m = null != e.flags && (0, i.Lt)(e.flags, A.sbO.IS_THUMBNAIL),
                          g = t ?? l;
                      if (f) {
                          let e = I.A.toURLSafe(t);
                          if (null == e) return null;
                          (e.searchParams.append("format", "webp"), (g = e.toString()));
                      }
                      return {
                          type: "attachment",
                          src: g,
                          width: u,
                          height: a,
                          spoiler: (0, i.Lt)(s ?? 0, A.sbO.IS_SPOILER),
                          flags: s,
                          contentScanVersion: d,
                          alt: r,
                          isVideo: f,
                          isThumbnail: m,
                          attachmentId: e.id,
                          mediaIndex: n,
                          srcIsAnimated: (0, i.Lt)(e.flags ?? 0, A.sbO.IS_ANIMATED),
                      };
                  })
                  .filter(p.Vq);
    })(e, d.X6.useSetting());
}
function _(e, n) {
    let t = d.hD.useSetting(),
        l = d.rs.useSetting();
    if (null == e) return [];
    let r = e.messageSnapshots[0]?.moderatorReport != null ? e.messageSnapshots[0]?.message.embeds : e.embeds;
    return t && l && null != r
        ? r
              .map((e, t) => {
                  let l = e.image ?? e.thumbnail;
                  if ((null == l && null != e.images && (l = e.images[0]), null != l && null != l.url)) {
                      let { height: r, proxyURL: s, url: u, width: a, flags: c } = l,
                          d = null != s && (0, o.r1)(s);
                      return {
                          type: "embed",
                          src: null != s && "" !== s ? s : u,
                          height: r,
                          width: a,
                          spoiler: n,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          mediaIndex: t,
                          srcIsAnimated: (0, i.Lt)(c ?? 0, A.qNw.IS_ANIMATED),
                      };
                  }
              })
              .filter(p.Vq)
        : [];
}
function b(e) {
    let n = d.hD.useSetting();
    if (null == e) return [];
    let t = e.components;
    return n && null != t
        ? Array.from((0, u.p4)(t).values())
              .flatMap((e) => {
                  switch (e.type) {
                      case s.I5.THUMBNAIL:
                          return y(e.media, e.spoiler ?? !1);
                      case s.I5.MEDIA_GALLERY:
                          return e.items.map((e) => y(e.media, e.spoiler ?? !1));
                  }
                  return null;
              })
              .filter(p.Vq)
        : [];
}
function y(e, n) {
    let t = (0, a.FE)(e);
    return "INVALID" === t
        ? null
        : {
              type: "component",
              src: e.proxyUrl,
              height: e.height ?? 0,
              width: e.width ?? 0,
              spoiler: n,
              contentScanVersion: e.contentScanMetadata?.version,
              flags: 0,
              srcIsAnimated: (0, i.Lt)(e.flags, a.e5.IS_ANIMATED),
              isVideo: "VIDEO" === t,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
          };
}
function C(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = N(e, t);
    return r.useMemo(() => {
        if (null == n) return [];
        if (!n.isMediaChannel()) return l;
        {
            let e = l.find((e) => e.isThumbnail);
            return null != e ? [e] : l;
        }
    }, [n, l]);
}
function N(e, n) {
    return [...L(e), ..._(e, n), ...b(e)];
}
function T(e, n) {
    let t = L(e),
        l = _(e, n),
        r = b(e);
    return t[0] ?? l[0] ?? r[0] ?? null;
}
function D(e, n) {
    let t = L(e),
        l = _(e, n),
        r = b(e);
    return null == t[0] && null == r[0] && null != l[0];
}
function v(e, n) {
    let t = f.A.getChannel(n);
    if (null == t) return !1;
    let l = m.A.getMessage(t.id, h.default.castChannelIdAsMessageId(t.id));
    return (
        null != l &&
        e.length > 0 &&
        null != e.find((e) => e.isImage || e.isVideo) &&
        t.isForumPost() &&
        t.ownerId === g.default.getCurrentUser()?.id &&
        0 === c.A.getCount(t.id) &&
        (0 === l.attachments.length || null == l.attachments.find((e) => S(e) || M(e)))
    );
}
function w(e) {
    return e.reduce(
        (e, n) => ({ containsVideo: e.containsVideo || n.isVideo, containsGif: e.containsGif || (0, o.ge)(n.src) }),
        { containsVideo: !1, containsGif: !1 },
    );
}
