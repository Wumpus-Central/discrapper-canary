n.d(t, { Rh: () => d, V7: () => E, Xp: () => c, yM: () => g });
var r = n(488428),
    a = n(776231),
    i = n(469054),
    l = n(486020),
    u = n(403362),
    o = n(652215),
    s = n(375708);
function A(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: r = !0 } = e;
    if (n && (0, l.VI)(t)) return r && l.QB ? "webp" : "gif";
    let { CDN_HOST: a } = window.GLOBAL_ENV;
    return null == a ? "jpg" : r && l.QB ? "webp" : "png";
}
function c(e) {
    let { userId: t, avatarId: n, storageHash: i, canAnimate: u = !1, allowWebp: s = !0, size: c } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        g = null != d ? `https://${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        E = A({ storageHash: i, canAnimate: u, allowWebp: s }),
        v = { size: (0, a.kr)(c * (0, a.mZ)()) };
    return (
        "webp" === E && u && (0, l.VI)(i) && (v.animated = !0),
        `${g}${o.Rsh.ARCHIVED_AVATAR(t, n, i, E)}?${r.stringify(v)}`
    );
}
function d(e) {
    let { filename: t, assetOrigin: n = i.E.NEW_ASSET } = e ?? {};
    if (n === i.E.ARCHIVED_ASSET) return;
    let r = t ?? s.intl.string(s.t.lqaIxI),
        a = new Date().toLocaleString(s.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return s.intl.formatToPlainString(n === i.E.EDITED_ARCHIVED_ASSET ? s.t.eC2sZi : s.t.DYil93, {
        name: r,
        dateTime: a,
    });
}
function g(e, t) {
    let n = A({ storageHash: e, canAnimate: !0, allowWebp: l.QB }),
        r = null == t ? s.intl.string(s.t.lqaIxI) : t.split(",")[0];
    return {
        filename: `${r}.${n}`,
        type: (function (e) {
            switch (e) {
                case "gif":
                    return "image/gif";
                case "png":
                    return "image/png";
                case "jpg":
                    return "image/jpeg";
                case "webp":
                    return "image/webp";
                default:
                    (0, u.xb)(e);
            }
        })(n),
    };
}
function E(e) {
    let { userId: t, image: n, size: r = 80, canAnimate: a = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === i.E.ARCHIVED_ASSET
            ? c({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: r,
                  canAnimate: a,
              })
            : a
              ? n.imageUri
              : (n.staticImageUri ?? n.imageUri)
        : n;
}
