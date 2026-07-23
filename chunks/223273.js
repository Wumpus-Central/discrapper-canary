"use strict";
n.d(t, { Lb: () => o, vI: () => d, xg: () => l });
var i,
    r,
    a = n(315069),
    s = n(395671);
class l extends a.A {
    id;
    name;
    description;
    icon;
    icon_hash;
    cover_image_hash;
    aliases;
    executables;
    overlay;
    overlayWarn;
    overlayCompatibilityHook;
    hook;
    supportsOutOfProcessOverlay;
    thirdPartySkus;
    themes;
    content_classification;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.description = e.description),
            (this.icon = e.icon),
            (this.icon_hash = e.icon_hash),
            (this.aliases = e.aliases || []),
            (this.cover_image_hash = e.cover_image_hash),
            (this.executables = (e.executables ?? []).map(s.lg)),
            (this.overlay = e.overlay || !1),
            (this.overlayWarn = e.overlayWarn || !1),
            (this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1),
            (this.hook = e.hook || !1),
            (this.supportsOutOfProcessOverlay = e.supportsOutOfProcessOverlay || !1),
            (this.thirdPartySkus = e.thirdPartySkus || []),
            (this.themes = e.themes || []),
            (this.content_classification = e.content_classification);
    }
    getIconURL(e) {
        return null == this.icon
            ? null
            : `https://cdn.discordapp.com/app-icons/${this.id}/${this.icon}.png${null != e ? `?size=${e}` : ""}`;
    }
    hasTheme(e) {
        return this.themes.includes(e);
    }
}
var o = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.WINDOWED_ONLY = 1)] = "WINDOWED_ONLY"), (i[(i.ALL = 2)] = "ALL"), i),
    d =
        (((r = {})[(r.NO_USER_REVIEWS = 0)] = "NO_USER_REVIEWS"),
        (r[(r.OVERWHELMINGLY_POSITIVE = 1)] = "OVERWHELMINGLY_POSITIVE"),
        (r[(r.VERY_POSITIVE = 2)] = "VERY_POSITIVE"),
        (r[(r.POSITIVE = 3)] = "POSITIVE"),
        (r[(r.MOSTLY_POSITIVE = 4)] = "MOSTLY_POSITIVE"),
        (r[(r.MIXED = 5)] = "MIXED"),
        (r[(r.MOSTLY_NEGATIVE = 6)] = "MOSTLY_NEGATIVE"),
        (r[(r.NEGATIVE = 7)] = "NEGATIVE"),
        (r[(r.VERY_NEGATIVE = 8)] = "VERY_NEGATIVE"),
        (r[(r.OVERWHELMINGLY_NEGATIVE = 9)] = "OVERWHELMINGLY_NEGATIVE"),
        r);
