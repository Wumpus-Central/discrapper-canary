"use strict";
n.d(t, { L: () => a, _: () => o });
var r = n(64700),
    i = n(486020),
    s = n(403362);
function a(e, t, n) {
    return null != t
        ? t.map((t) => i.Ay.getGameAssetURL({ id: e, hash: t, keepAspectRatio: !0 })).filter(s.Vq)
        : (n ?? []);
}
function o(e) {
    return r.useMemo(
        () =>
            e.media?.artwork_hashes == null && e.media?.artwork_urls == null
                ? []
                : a(e.id, e.media?.artwork_hashes, e.media?.artwork_urls),
        [e.id, e.media?.artwork_hashes, e.media?.artwork_urls],
    );
}
