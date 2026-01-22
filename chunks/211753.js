n.d(t, { x: () => o }), n(896048);
var r = n(506774),
    i = n(672396);
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
    return (
        (e.Version1 = "OverlayStore"),
        (e.Version2 = "overlayEnabled"),
        (e.Version3 = "OverlayStore3"),
        (e.Version4 = "OverlayStore4"),
        (e.Version5 = "OverlayStore5"),
        (e.Version6 = "OverlayStore6"),
        e
    );
})({});
class o {
    static get legacyEnabled() {
        return o.load().legacyEnabled;
    }
    static get oopEnabled() {
        return o.load().oopEnabled;
    }
    static DEV_clearAllSavedSettings() {
        for (let e of Object.values(s)) r.w.remove(e);
        this._loaded = null;
    }
    static DEV_saveSettingsForVersion(e) {
        for (let [t, n] of Object.entries(e)) r.w.set(t, n);
        this._loaded = null;
    }
    static update(e) {
        let t = o.load();
        "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled),
            "boolean" == typeof e.oopEnabled && (t.oopEnabled = e.oopEnabled),
            t.save();
    }
    save() {
        let e = {
            legacyEnabled: this.legacyEnabled,
            oopEnabled: this.oopEnabled,
        };
        r.w.set("OverlayStore6", e);
    }
    static load() {
        return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded;
    }
    static serialize() {
        let e = this.load();
        return {
            legacyEnabled: e.legacyEnabled,
            oopEnabled: e.oopEnabled,
        };
    }
    static fromSerialized(e) {
        let t = new o(e.legacyEnabled, e.oopEnabled);
        return t.save(), t;
    }
    static loadInternal() {
        var e, t, n, a, s;
        let l = r.w.get("OverlayStore");
        if (null != l) {
            let e = new o("boolean" == typeof l.enabled ? l.enabled : i.OX, i.OX);
            return e.save(), r.w.remove("OverlayStore"), e;
        }
        let c = r.w.get("overlayEnabled");
        if (null != c) {
            let e = new o("boolean" == typeof c ? c : i.OX, i.OX);
            return e.save(), r.w.remove("overlayEnabled"), e;
        }
        let u = r.w.get("OverlayStore3");
        if (null != u) {
            let t = new o(null != (e = u.enabled || u.legacyEnabled) ? e : i.OX, i.OX);
            return t.save(), r.w.remove("OverlayStore3"), t;
        }
        let d = r.w.get("OverlayStore4");
        if (null != d) {
            let e = new o(d.legacyEnabled || i.OX, null != (t = d.oopEnabled) ? t : i.OX);
            return e.save(), r.w.remove("OverlayStore4"), e;
        }
        let f = r.w.get("OverlayStore5");
        if (null != f) {
            let e = new o(null != (n = f.legacyEnabled) ? n : i.OX, f.oopEnabled || i.OX);
            return e.save(), r.w.remove("OverlayStore5"), e;
        }
        let p = r.w.get("OverlayStore6");
        if (null != p) return new o(null != (a = p.legacyEnabled) ? a : i.OX, null != (s = p.oopEnabled) ? s : i.OX);
        let _ = new o(i.OX, i.OX);
        return _.save(), _;
    }
    constructor(e, t) {
        a(this, "legacyEnabled", void 0),
            a(this, "oopEnabled", void 0),
            (this.legacyEnabled = e),
            (this.oopEnabled = t);
    }
}
a(o, "_loaded", null);
