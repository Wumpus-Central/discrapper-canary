"use strict";
n.d(t, { Lb: () => _, Mh: () => u, q0: () => d, vI: () => f, xg: () => c });
var r,
    i,
    s,
    a,
    o = n(315069),
    l = n(611010),
    u = (((r = {})[(r.LINKED = 1)] = "LINKED"), (r[(r.OFFICIAL = 2)] = "OFFICIAL"), r),
    d = (((i = {}).EROTIC = "Erotic"), i);
class c extends o.A {
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
    linkedApplications;
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
            (this.executables = (e.executables ?? []).map(l.lg)),
            (this.overlay = e.overlay || !1),
            (this.overlayWarn = e.overlayWarn || !1),
            (this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1),
            (this.hook = e.hook || !1),
            (this.supportsOutOfProcessOverlay = e.supportsOutOfProcessOverlay || !1),
            (this.thirdPartySkus = e.thirdPartySkus || []),
            (this.themes = e.themes || []),
            (this.linkedApplications = e.linkedApplications),
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
var _ = (((s = {})[(s.NONE = 0)] = "NONE"), (s[(s.WINDOWED_ONLY = 1)] = "WINDOWED_ONLY"), (s[(s.ALL = 2)] = "ALL"), s),
    f =
        (((a = {})[(a.NO_USER_REVIEWS = 0)] = "NO_USER_REVIEWS"),
        (a[(a.OVERWHELMINGLY_POSITIVE = 1)] = "OVERWHELMINGLY_POSITIVE"),
        (a[(a.VERY_POSITIVE = 2)] = "VERY_POSITIVE"),
        (a[(a.POSITIVE = 3)] = "POSITIVE"),
        (a[(a.MOSTLY_POSITIVE = 4)] = "MOSTLY_POSITIVE"),
        (a[(a.MIXED = 5)] = "MIXED"),
        (a[(a.MOSTLY_NEGATIVE = 6)] = "MOSTLY_NEGATIVE"),
        (a[(a.NEGATIVE = 7)] = "NEGATIVE"),
        (a[(a.VERY_NEGATIVE = 8)] = "VERY_NEGATIVE"),
        (a[(a.OVERWHELMINGLY_NEGATIVE = 9)] = "OVERWHELMINGLY_NEGATIVE"),
        a);
