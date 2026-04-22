n.d(t, { Rh: () => p, V7: () => _, XB: () => g, Xp: () => d, yM: () => A });
var a = n(488428),
    r = n(776231),
    l = n(486020),
    i = n(403362),
    o = n(392107),
    s = n(652215),
    c = n(985018);
function u(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: a = !0 } = e;
    if (n && (0, l.VI)(t)) return "gif";
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    return null == r ? "jpg" : a && l.QB ? "webp" : "png";
}
function d(e) {
    let { userId: t, avatarId: n, storageHash: l, canAnimate: i = !1, allowWebp: o = !0, size: c } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        p = null != d ? `https://${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        A = u({ storageHash: l, canAnimate: i, allowWebp: o }),
        g = `?${a.stringify({ size: (0, r.kr)(c * (0, r.mZ)()) })}`;
    return `${p}${s.Rsh.ARCHIVED_AVATAR(t, n, l, A)}${g}`;
}
function p(e) {
    let { filename: t, assetOrigin: n = o.E.NEW_ASSET } = e ?? {};
    if (n === o.E.ARCHIVED_ASSET) return;
    let a = t ?? c.intl.string(c.t.lqaIxI),
        r = new Date().toLocaleString(c.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return c.intl.formatToPlainString(n === o.E.EDITED_ARCHIVED_ASSET ? c.t.eC2sZi : c.t.DYil93, {
        name: a,
        dateTime: r,
    });
}
function A(e, t) {
    let n = u({ storageHash: e, canAnimate: !0, allowWebp: !1 }),
        a = null == t ? c.intl.string(c.t.lqaIxI) : t.split(",")[0];
    return {
        filename: `${a}.${n}`,
        type: (function (e) {
            switch (e) {
                case "gif":
                    return "image/gif";
                case "png":
                    return "image/png";
                case "jpg":
                    return "image/jpeg";
                default:
                    (0, i.xb)(e);
            }
        })(n),
    };
}
function g(e) {
    let { assetOrigin: t = o.E.NEW_ASSET, imageUri: n, description: a, originalAsset: r } = e;
    switch (t) {
        case o.E.NEW_ASSET:
            return { assetOrigin: t, imageUri: n, description: a };
        case o.E.EDITED_ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, description: a, originalAsset: r };
        case o.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, originalAsset: r };
        default:
            (0, i.xb)(t);
    }
}
function _(e) {
    let { userId: t, image: n, size: a = 80, canAnimate: r = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === o.E.ARCHIVED_ASSET
            ? d({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: a,
                  canAnimate: r,
                  allowWebp: !1,
              })
            : n.imageUri
        : n;
}
