r.d(n, {
    Ah: function () {
        return i;
    },
    CB: function () {
        return D;
    },
    aU: function () {
        return C;
    },
    cp: function () {
        return L;
    },
    eL: function () {
        return R;
    },
    vg: function () {
        return O;
    },
    zy: function () {
        return N;
    }
});
var i,
    a = r(789020);
var o = r(47120);
var s = r(724458);
var l = r(192379),
    u = r(406432),
    c = r(144140),
    d = r(695346),
    f = r(592125),
    p = r(375954),
    h = r(594174),
    _ = r(630388),
    m = r(823379),
    g = r(709054),
    E = r(591759),
    v = r(981631);
function y(e) {
    if (null == e) return !1;
    let { filename: n, height: r, width: i } = e;
    return (0, u.CO)(n) && null != r && r > 0 && null != i && i > 0;
}
function b(e) {
    return null != e && null != e && (0, u.NU)(e.filename) && null != e.proxy_url;
}
function I(e) {
    return y(e) || b(e);
}
function T(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x4.getSetting();
    if (!n) return [];
    let r = null == e ? void 0 : e.attachments;
    return null == e || null == r
        ? []
        : r
              .filter(I)
              .map((e, n) => {
                  var r;
                  let { proxy_url: i, url: a, description: o, spoiler: s, flags: l, width: c, height: d, filename: f, content_scan_version: p } = e;
                  if (null == c || null == d) return null;
                  let h = (0, u.NU)(f),
                      m = null != e.flags && (0, _.yE)(e.flags, v.J0y.IS_THUMBNAIL),
                      g = null != i ? i : a;
                  if (h) {
                      let e = E.Z.toURLSafe(i);
                      if (null == e) return null;
                      e.searchParams.append('format', 'webp'), (g = e.toString());
                  }
                  return {
                      src: g,
                      width: c,
                      height: d,
                      spoiler: null != s && s,
                      flags: l,
                      contentScanVersion: p,
                      alt: o,
                      isVideo: h,
                      isThumbnail: m,
                      type: 'attachment',
                      attachmentId: e.id,
                      mediaIndex: n,
                      srcIsAnimated: (0, _.yE)(null !== (r = e.flags) && void 0 !== r ? r : 0, v.J0y.IS_ANIMATED)
                  };
              })
              .filter(m.lm);
}
function S(e) {
    return T(e, d.x4.useSetting());
}
function A(e, n) {
    let r = d.RS.useSetting(),
        i = d.NA.useSetting();
    if (null == e) return [];
    let a = e.embeds;
    return r && i && null != a
        ? a
              .map((e, r) => {
                  var i;
                  let a = null !== (i = e.image) && void 0 !== i ? i : e.thumbnail;
                  if ((null == a && null != e.images && (a = e.images[0]), null != a && null != a.url)) {
                      let { height: i, proxyURL: o, url: s, width: l, flags: c } = a,
                          d = null != o && (0, u.cb)(o);
                      return {
                          src: null != o && '' !== o ? o : s,
                          height: i,
                          width: l,
                          spoiler: n,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: d,
                          type: 'embed',
                          mediaIndex: r,
                          srcIsAnimated: (0, _.yE)(null != c ? c : 0, v.FoC.IS_ANIMATED)
                      };
                  }
              })
              .filter(m.lm)
        : [];
}
function C(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = N(e, r);
    return l.useMemo(() => {
        if (null == n) return [];
        if (!n.isMediaChannel()) return i;
        {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
        }
    }, [n, i]);
}
function N(e, n) {
    let r = S(e);
    return [...r, ...A(e, n)];
}
function R(e, n) {
    var r, i;
    let a = S(e),
        o = A(e, n);
    return null !== (i = null !== (r = a[0]) && void 0 !== r ? r : o[0]) && void 0 !== i ? i : null;
}
function O(e, n) {
    let r = S(e),
        i = A(e, n);
    return null == r[0] && null != i[0];
}
function D(e, n) {
    var r;
    let i = f.Z.getChannel(n);
    if (null == i) return !1;
    let a = p.Z.getMessage(i.id, g.default.castChannelIdAsMessageId(i.id));
    return null != a && e.length > 0 && null != e.find((e) => e.isImage || e.isVideo) && i.isForumPost() && i.ownerId === (null === (r = h.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) && 0 === c.Z.getCount(i.id) && (0 === a.attachments.length || null == a.attachments.find((e) => y(e) || b(e)));
}
function L(e) {
    return e.reduce(
        (e, n) => ({
            containsVideo: e.containsVideo || n.isVideo,
            containsGif: e.containsGif || (0, u.d$)(n.src)
        }),
        {
            containsVideo: !1,
            containsGif: !1
        }
    );
}
!(function (e) {
    (e.EMBED = 'embed'), (e.ATTACHMENT = 'attachment');
})(i || (i = {}));
