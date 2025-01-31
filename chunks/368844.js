n.d(t, {
    Ah: () => E,
    CB: () => N,
    aU: () => b,
    cp: () => C,
    eL: () => S,
    vg: () => A,
    zy: () => T
}),
    n(789020),
    n(47120),
    n(724458);
var i = n(192379),
    r = n(406432),
    a = n(144140),
    s = n(695346),
    o = n(592125),
    l = n(375954),
    u = n(594174),
    c = n(630388),
    d = n(823379),
    f = n(709054),
    _ = n(591759),
    p = n(981631);
function h(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: i } = e;
    return (0, r.CO)(t) && null != n && n > 0 && null != i && i > 0;
}
function m(e) {
    return null != e && null != e && (0, r.NU)(e.filename) && null != e.proxy_url;
}
function g(e) {
    return h(e) || m(e);
}
var E = (function (e) {
    return (e.EMBED = 'embed'), (e.ATTACHMENT = 'attachment'), e;
})({});
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x4.getSetting();
    if (!t) return [];
    let n = null == e ? void 0 : e.attachments;
    return null == e || null == n
        ? []
        : n
              .filter(g)
              .map((e, t) => {
                  var n;
                  let { proxy_url: i, url: a, description: s, spoiler: o, flags: l, width: u, height: d, filename: f, content_scan_version: h } = e;
                  if (null == u || null == d) return null;
                  let m = (0, r.NU)(f),
                      g = null != e.flags && (0, c.yE)(e.flags, p.J0y.IS_THUMBNAIL),
                      E = null != i ? i : a;
                  if (m) {
                      let e = _.Z.toURLSafe(i);
                      if (null == e) return null;
                      e.searchParams.append('format', 'webp'), (E = e.toString());
                  }
                  return {
                      src: E,
                      width: u,
                      height: d,
                      spoiler: null != o && o,
                      flags: l,
                      contentScanVersion: h,
                      alt: s,
                      isVideo: m,
                      isThumbnail: g,
                      type: 'attachment',
                      attachmentId: e.id,
                      mediaIndex: t,
                      srcIsAnimated: (0, c.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, p.J0y.IS_ANIMATED)
                  };
              })
              .filter(d.lm);
}
function y(e) {
    return v(e, s.x4.useSetting());
}
function I(e, t) {
    let n = s.RS.useSetting(),
        i = s.NA.useSetting();
    if (null == e) return [];
    let a = e.embeds;
    return n && i && null != a
        ? a
              .map((e, n) => {
                  var i;
                  let a = null !== (i = e.image) && void 0 !== i ? i : e.thumbnail;
                  if ((null == a && null != e.images && (a = e.images[0]), null != a && null != a.url)) {
                      let { height: i, proxyURL: s, url: o, width: l, flags: u } = a,
                          d = null != s && (0, r.cb)(s);
                      return {
                          src: null != s && '' !== s ? s : o,
                          height: i,
                          width: l,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          type: 'embed',
                          mediaIndex: n,
                          srcIsAnimated: (0, c.yE)(null != u ? u : 0, p.FoC.IS_ANIMATED)
                      };
                  }
              })
              .filter(d.lm)
        : [];
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = T(e, n);
    return i.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return r;
        {
            let e = r.find((e) => e.isThumbnail);
            return null != e ? [e] : r;
        }
    }, [t, r]);
}
function T(e, t) {
    return [...y(e), ...I(e, t)];
}
function S(e, t) {
    var n, i;
    let r = y(e),
        a = I(e, t);
    return null !== (i = null !== (n = r[0]) && void 0 !== n ? n : a[0]) && void 0 !== i ? i : null;
}
function A(e, t) {
    let n = y(e),
        i = I(e, t);
    return null == n[0] && null != i[0];
}
function N(e, t) {
    var n;
    let i = o.Z.getChannel(t);
    if (null == i) return !1;
    let r = l.Z.getMessage(i.id, f.default.castChannelIdAsMessageId(i.id));
    return null != r && e.length > 0 && null != e.find((e) => e.isImage || e.isVideo) && i.isForumPost() && i.ownerId === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === a.Z.getCount(i.id) && (0 === r.attachments.length || null == r.attachments.find((e) => h(e) || m(e)));
}
function C(e) {
    return e.reduce(
        (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, r.d$)(t.src)
        }),
        {
            containsVideo: !1,
            containsGif: !1
        }
    );
}
