n.d(t, { Rh: () => p, V7: () => m, Xp: () => g, yM: () => A });
var i = n(488428),
    a = n(776231),
    r = n(469054),
    u = n(486020),
    l = n(403362),
    s = n(652215),
    o = n(375708);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: i = !0 } = e;
    if (n && (0, u.VI)(t)) return i && u.QB ? "webp" : "gif";
    let { CDN_HOST: a } = window.GLOBAL_ENV;
    return null == a ? "jpg" : i && u.QB ? "webp" : "png";
}
function g(e) {
    let { userId: t, avatarId: n, storageHash: r, canAnimate: l = !1, allowWebp: o = !0, size: g } = e,
        { CDN_HOST: p } = window.GLOBAL_ENV,
        A = null != p ? `https://${p}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        m = c({ storageHash: r, canAnimate: l, allowWebp: o }),
        d = { size: (0, a.kr)(g * (0, a.mZ)()) };
    return (
        "webp" === m && l && (0, u.VI)(r) && (d.animated = !0),
        `${A}${s.Rsh.ARCHIVED_AVATAR(t, n, r, m)}?${i.stringify(d)}`
    );
}
function p(e) {
    let { filename: t, assetOrigin: n = r.E.NEW_ASSET } = e ?? {};
    if (n === r.E.ARCHIVED_ASSET) return;
    let i = t ?? o.intl.string(o.t.lqaIxI),
        a = new Date().toLocaleString(o.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return o.intl.formatToPlainString(n === r.E.EDITED_ARCHIVED_ASSET ? o.t.eC2sZi : o.t.DYil93, {
        name: i,
        dateTime: a,
    });
}
function A(e, t) {
    let n = c({ storageHash: e, canAnimate: !0, allowWebp: u.QB }),
        i = null == t ? o.intl.string(o.t.lqaIxI) : t.split(",")[0];
    return {
        filename: `${i}.${n}`,
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
                    (0, l.xb)(e);
            }
        })(n),
    };
}
function m(e) {
    let { userId: t, image: n, size: i = 80, canAnimate: a = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === r.E.ARCHIVED_ASSET
            ? g({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: i,
                  canAnimate: a,
              })
            : a
              ? n.imageUri
              : (n.staticImageUri ?? n.imageUri)
        : n;
}
