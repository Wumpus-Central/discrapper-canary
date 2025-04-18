n.d(t, {
    Ah: () => E,
    CB: () => N,
    aU: () => O,
    cp: () => A,
    eL: () => S,
    vg: () => T,
    zy: () => I
}),
    n(953529),
    n(997841),
    n(388685);
var r = n(192379),
    i = n(406432),
    a = n(144140),
    o = n(695346),
    s = n(592125),
    l = n(375954),
    c = n(594174),
    u = n(630388),
    d = n(823379),
    f = n(709054),
    _ = n(591759),
    p = n(981631);
function h(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, i.CO)(t) && null != n && n > 0 && null != r && r > 0;
}
function m(e) {
    return null != e && null != e && (0, i.NU)(e.filename) && null != e.proxy_url;
}
function g(e) {
    return h(e) || m(e);
}
var E = (function (e) {
    return (e.EMBED = 'embed'), (e.ATTACHMENT = 'attachment'), e;
})({});
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.x4.getSetting();
    if (!t) return [];
    let n = null == e ? void 0 : e.attachments;
    return null == e || null == n
        ? []
        : n
              .filter(g)
              .map((e, t) => {
                  var n;
                  let { proxy_url: r, url: a, description: o, spoiler: s, flags: l, width: c, height: d, filename: f, content_scan_version: h } = e;
                  if (null == c || null == d) return null;
                  let m = (0, i.NU)(f),
                      g = null != e.flags && (0, u.yE)(e.flags, p.J0y.IS_THUMBNAIL),
                      E = null != r ? r : a;
                  if (m) {
                      let e = _.Z.toURLSafe(r);
                      if (null == e) return null;
                      e.searchParams.append('format', 'webp'), (E = e.toString());
                  }
                  return {
                      src: E,
                      width: c,
                      height: d,
                      spoiler: null != s && s,
                      flags: l,
                      contentScanVersion: h,
                      alt: o,
                      isVideo: m,
                      isThumbnail: g,
                      type: 'attachment',
                      attachmentId: e.id,
                      mediaIndex: t,
                      srcIsAnimated: (0, u.yE)(null != (n = e.flags) ? n : 0, p.J0y.IS_ANIMATED)
                  };
              })
              .filter(d.lm);
}
function y(e) {
    return b(e, o.x4.useSetting());
}
function v(e, t) {
    let n = o.RS.useSetting(),
        r = o.NA.useSetting();
    if (null == e) return [];
    let a = e.embeds;
    return n && r && null != a
        ? a
              .map((e, n) => {
                  var r;
                  let a = null != (r = e.image) ? r : e.thumbnail;
                  if ((null == a && null != e.images && (a = e.images[0]), null != a && null != a.url)) {
                      let { height: r, proxyURL: o, url: s, width: l, flags: c } = a,
                          d = null != o && (0, i.cb)(o);
                      return {
                          src: null != o && '' !== o ? o : s,
                          height: r,
                          width: l,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          type: 'embed',
                          mediaIndex: n,
                          srcIsAnimated: (0, u.yE)(null != c ? c : 0, p.FoC.IS_ANIMATED)
                      };
                  }
              })
              .filter(d.lm)
        : [];
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = I(e, n);
    return r.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [t, i]);
}
function I(e, t) {
    return [...y(e), ...v(e, t)];
}
function S(e, t) {
    var n, r;
    let i = y(e),
        a = v(e, t);
    return null != (r = null != (n = i[0]) ? n : a[0]) ? r : null;
}
function T(e, t) {
    let n = y(e),
        r = v(e, t);
    return null == n[0] && null != r[0];
}
function N(e, t) {
    var n;
    let r = s.Z.getChannel(t);
    if (null == r) return !1;
    let i = l.Z.getMessage(r.id, f.default.castChannelIdAsMessageId(r.id));
    return null != i && e.length > 0 && null != e.find((e) => e.isImage || e.isVideo) && r.isForumPost() && r.ownerId === (null == (n = c.default.getCurrentUser()) ? void 0 : n.id) && 0 === a.Z.getCount(r.id) && (0 === i.attachments.length || null == i.attachments.find((e) => h(e) || m(e)));
}
function A(e) {
    return e.reduce(
        (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, i.d$)(t.src)
        }),
        {
            containsVideo: !1,
            containsGif: !1
        }
    );
}
