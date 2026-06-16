"use strict";
n.d(t, { Lb: () => c, q0: () => l, vI: () => d, xg: () => u });
var i,
    r,
    s,
    a = n(315069),
    o = n(395671),
    l = (((i = {}).EROTIC = "Erotic"), i);
class u extends a.A {
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
            (this.executables = (e.executables ?? []).map(o.lg)),
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
var c = (((r = {})[(r.NONE = 0)] = "NONE"), (r[(r.WINDOWED_ONLY = 1)] = "WINDOWED_ONLY"), (r[(r.ALL = 2)] = "ALL"), r),
    d =
        (((s = {})[(s.NO_USER_REVIEWS = 0)] = "NO_USER_REVIEWS"),
        (s[(s.OVERWHELMINGLY_POSITIVE = 1)] = "OVERWHELMINGLY_POSITIVE"),
        (s[(s.VERY_POSITIVE = 2)] = "VERY_POSITIVE"),
        (s[(s.POSITIVE = 3)] = "POSITIVE"),
        (s[(s.MOSTLY_POSITIVE = 4)] = "MOSTLY_POSITIVE"),
        (s[(s.MIXED = 5)] = "MIXED"),
        (s[(s.MOSTLY_NEGATIVE = 6)] = "MOSTLY_NEGATIVE"),
        (s[(s.NEGATIVE = 7)] = "NEGATIVE"),
        (s[(s.VERY_NEGATIVE = 8)] = "VERY_NEGATIVE"),
        (s[(s.OVERWHELMINGLY_NEGATIVE = 9)] = "OVERWHELMINGLY_NEGATIVE"),
        s);
