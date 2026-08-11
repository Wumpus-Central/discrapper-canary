"use strict";
n.d(t, { Rh: () => _, V7: () => A, Xp: () => u, yM: () => E });
var i = n(488428),
    r = n(597098),
    a = n(469054),
    s = n(486020),
    l = n(403362),
    o = n(652215),
    d = n(375708);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: i = !0 } = e;
    if (n && (0, s.VI)(t)) return i && s.QB ? "webp" : "gif";
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    return null == r ? "jpg" : i && s.QB ? "webp" : "png";
}
function u(e) {
    let { userId: t, avatarId: n, storageHash: a, canAnimate: l = !1, allowWebp: d = !0, size: u } = e,
        { CDN_HOST: _ } = window.GLOBAL_ENV,
        E = null != _ ? `https://${_}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        A = c({ storageHash: a, canAnimate: l, allowWebp: d }),
        h = { size: (0, r.kr)(u * (0, r.mZ)()) };
    return (
        "webp" === A && l && (0, s.VI)(a) && (h.animated = !0),
        `${E}${o.Rsh.ARCHIVED_AVATAR(t, n, a, A)}?${i.stringify(h)}`
    );
}
function _(e) {
    let { filename: t, assetOrigin: n = a.E.NEW_ASSET } = e ?? {};
    if (n === a.E.ARCHIVED_ASSET) return;
    let i = t ?? d.intl.string(d.t.lqaIxI),
        r = new Date().toLocaleString(d.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return d.intl.formatToPlainString(n === a.E.EDITED_ARCHIVED_ASSET ? d.t.eC2sZi : d.t.DYil93, {
        name: i,
        dateTime: r,
    });
}
function E(e, t) {
    let n = c({ storageHash: e, canAnimate: !0, allowWebp: s.QB }),
        i = null == t ? d.intl.string(d.t.lqaIxI) : t.split(",")[0];
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
function A(e) {
    let { userId: t, image: n, size: i = 80, canAnimate: r = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === a.E.ARCHIVED_ASSET
            ? u({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: i,
                  canAnimate: r,
              })
            : r
              ? n.imageUri
              : (n.staticImageUri ?? n.imageUri)
        : n;
}
