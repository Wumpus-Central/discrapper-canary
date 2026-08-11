"use strict";
n.d(t, { X: () => a });
var i = n(403362),
    r = n(469054);
function a(e) {
    let {
        assetOrigin: t = r.E.NEW_ASSET,
        imageUri: n,
        staticImageUri: a,
        description: s,
        originalAsset: l,
        originalMd5: o,
    } = e;
    switch (t) {
        case r.E.NEW_ASSET:
            return {
                assetOrigin: t,
                imageUri: n,
                staticImageUri: a,
                description: s,
                originalAsset: void 0,
                originalMd5: o,
            };
        case r.E.EDITED_ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, staticImageUri: a, description: s, originalAsset: l, originalMd5: o };
        case r.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, description: void 0, originalAsset: l };
        default:
            (0, i.xb)(t);
    }
}
