"use strict";
n.d(t, { Ay: () => o, Lb: () => l, Mh: () => a, q0: () => s });
var r = n(315069),
    i = n(611010),
    a = (function (e) {
        return (e[(e.LINKED = 1)] = "LINKED"), (e[(e.OFFICIAL = 2)] = "OFFICIAL"), e;
    })({}),
    s = (function (e) {
        return (e.EROTIC = "Erotic"), e;
    })({});
class o extends r.A {
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
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.description = e.description),
            (this.icon = e.icon),
            (this.icon_hash = e.icon_hash),
            (this.aliases = e.aliases || []),
            (this.cover_image_hash = e.cover_image_hash),
            (this.executables = (e.executables ?? []).map(i.lg)),
            (this.overlay = e.overlay || !1),
            (this.overlayWarn = e.overlayWarn || !1),
            (this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1),
            (this.hook = e.hook || !1),
            (this.supportsOutOfProcessOverlay = e.supportsOutOfProcessOverlay || !1),
            (this.thirdPartySkus = e.thirdPartySkus || []),
            (this.themes = e.themes || []),
            (this.linkedApplications = e.linkedApplications);
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
var l = (function (e) {
    return (e[(e.NONE = 0)] = "NONE"), (e[(e.WINDOWED_ONLY = 1)] = "WINDOWED_ONLY"), (e[(e.ALL = 2)] = "ALL"), e;
})({});
