n.d(t, {
    Ay: () => l,
    Lb: () => c,
    Mh: () => s,
    q0: () => o,
}),
    n(228524);
var r = n(315069),
    i = n(611010);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var s = (function (e) {
        return (e[(e.LINKED = 1)] = "LINKED"), (e[(e.OFFICIAL = 2)] = "OFFICIAL"), e;
    })({}),
    o = (function (e) {
        return (e.EROTIC = "Erotic"), e;
    })({});
class l extends r.A {
    getIconURL(e) {
        return null == this.icon
            ? null
            : "https://cdn.discordapp.com/app-icons/"
                  .concat(this.id, "/")
                  .concat(this.icon, ".png")
                  .concat(null != e ? "?size=".concat(e) : "");
    }
    hasTheme(e) {
        return this.themes.includes(e);
    }
    constructor(e) {
        var t;
        super(),
            a(this, "id", void 0),
            a(this, "name", void 0),
            a(this, "description", void 0),
            a(this, "icon", void 0),
            a(this, "icon_hash", void 0),
            a(this, "cover_image_hash", void 0),
            a(this, "aliases", void 0),
            a(this, "executables", void 0),
            a(this, "overlay", void 0),
            a(this, "overlayWarn", void 0),
            a(this, "overlayCompatibilityHook", void 0),
            a(this, "hook", void 0),
            a(this, "supportsOutOfProcessOverlay", void 0),
            a(this, "thirdPartySkus", void 0),
            a(this, "themes", void 0),
            a(this, "linkedApplications", void 0),
            (this.id = e.id),
            (this.name = e.name),
            (this.description = e.description),
            (this.icon = e.icon),
            (this.icon_hash = e.icon_hash),
            (this.aliases = e.aliases || []),
            (this.cover_image_hash = e.cover_image_hash),
            (this.executables = (null != (t = e.executables) ? t : []).map(i.lg)),
            (this.overlay = e.overlay || !1),
            (this.overlayWarn = e.overlayWarn || !1),
            (this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1),
            (this.hook = e.hook || !1),
            (this.supportsOutOfProcessOverlay = e.supportsOutOfProcessOverlay || !1),
            (this.thirdPartySkus = e.thirdPartySkus || []),
            (this.themes = e.themes || []),
            (this.linkedApplications = e.linkedApplications);
    }
}
var c = (function (e) {
    return (e[(e.NONE = 0)] = "NONE"), (e[(e.WINDOWED_ONLY = 1)] = "WINDOWED_ONLY"), (e[(e.ALL = 2)] = "ALL"), e;
})({});
