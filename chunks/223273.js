"use strict";
n.d(t, { Lb: () => l, Mh: () => s, q0: () => a, vI: () => u, xg: () => o });
var r = n(315069),
    i = n(611010),
    s = (function (e) {
        return (e[(e.LINKED = 1)] = "LINKED"), (e[(e.OFFICIAL = 2)] = "OFFICIAL"), e;
    })({}),
    a = (function (e) {
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
    genres;
    platforms;
    bannerHash;
    screenshotHashes;
    screenshotUrls;
    websites;
    companies;
    supplementalGameData;
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
            (this.linkedApplications = e.linkedApplications),
            (this.genres = e.genres),
            (this.platforms = e.platforms),
            (this.bannerHash = e.bannerHash),
            (this.screenshotHashes = e.screenshotHashes),
            (this.screenshotUrls = e.screenshotUrls),
            (this.websites = e.websites),
            (this.companies = e.companies),
            (this.supplementalGameData = e.supplementalGameData);
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
    })({}),
    u = (function (e) {
        return (
            (e[(e.NO_USER_REVIEWS = 0)] = "NO_USER_REVIEWS"),
            (e[(e.OVERWHELMINGLY_POSITIVE = 1)] = "OVERWHELMINGLY_POSITIVE"),
            (e[(e.VERY_POSITIVE = 2)] = "VERY_POSITIVE"),
            (e[(e.POSITIVE = 3)] = "POSITIVE"),
            (e[(e.MOSTLY_POSITIVE = 4)] = "MOSTLY_POSITIVE"),
            (e[(e.MIXED = 5)] = "MIXED"),
            (e[(e.MOSTLY_NEGATIVE = 6)] = "MOSTLY_NEGATIVE"),
            (e[(e.NEGATIVE = 7)] = "NEGATIVE"),
            (e[(e.VERY_NEGATIVE = 8)] = "VERY_NEGATIVE"),
            (e[(e.OVERWHELMINGLY_NEGATIVE = 9)] = "OVERWHELMINGLY_NEGATIVE"),
            e
        );
    })({});
