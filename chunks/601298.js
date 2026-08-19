n.d(t, { X: () => i });
var r = n(403362),
    a = n(469054);
function i(e) {
    let {
        assetOrigin: t = a.E.NEW_ASSET,
        imageUri: n,
        staticImageUri: i,
        description: l,
        originalAsset: u,
        originalMd5: o,
    } = e;
    switch (t) {
        case a.E.NEW_ASSET:
            return {
                assetOrigin: t,
                imageUri: n,
                staticImageUri: i,
                description: l,
                originalAsset: void 0,
                originalMd5: o,
            };
        case a.E.EDITED_ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, staticImageUri: i, description: l, originalAsset: u, originalMd5: o };
        case a.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, description: void 0, originalAsset: u };
        default:
            (0, r.xb)(t);
    }
}
