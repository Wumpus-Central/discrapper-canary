n.d(t, { vI: () => l, xg: () => s });
var i,
    r = n(315069),
    a = n(395671);
class s extends r.A {
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
        (super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.description = e.description),
            (this.icon = e.icon),
            (this.icon_hash = e.icon_hash),
            (this.aliases = e.aliases || []),
            (this.cover_image_hash = e.cover_image_hash),
            (this.executables = (e.executables ?? []).map(a.lg)),
            (this.overlay = e.overlay || !1),
            (this.overlayWarn = e.overlayWarn || !1),
            (this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1),
            (this.hook = e.hook || !1),
            (this.supportsOutOfProcessOverlay = e.supportsOutOfProcessOverlay || !1),
            (this.thirdPartySkus = e.thirdPartySkus || []),
            (this.themes = e.themes || []),
            (this.content_classification = e.content_classification));
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
var l =
    (((i = {})[(i.NO_USER_REVIEWS = 0)] = "NO_USER_REVIEWS"),
    (i[(i.OVERWHELMINGLY_POSITIVE = 1)] = "OVERWHELMINGLY_POSITIVE"),
    (i[(i.VERY_POSITIVE = 2)] = "VERY_POSITIVE"),
    (i[(i.POSITIVE = 3)] = "POSITIVE"),
    (i[(i.MOSTLY_POSITIVE = 4)] = "MOSTLY_POSITIVE"),
    (i[(i.MIXED = 5)] = "MIXED"),
    (i[(i.MOSTLY_NEGATIVE = 6)] = "MOSTLY_NEGATIVE"),
    (i[(i.NEGATIVE = 7)] = "NEGATIVE"),
    (i[(i.VERY_NEGATIVE = 8)] = "VERY_NEGATIVE"),
    (i[(i.OVERWHELMINGLY_NEGATIVE = 9)] = "OVERWHELMINGLY_NEGATIVE"),
    i);
