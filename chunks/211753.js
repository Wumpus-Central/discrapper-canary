"use strict";
n.d(t, { x: () => o });
var i,
    r = n(506774),
    s = n(206885),
    a =
        (((i = {}).Version1 = "OverlayStore"),
        (i.Version2 = "overlayEnabled"),
        (i.Version3 = "OverlayStore3"),
        (i.Version4 = "OverlayStore4"),
        (i.Version5 = "OverlayStore5"),
        (i.Version6 = "OverlayStore6"),
        i);
class o {
    static _loaded = null;
    legacyEnabled;
    oopEnabled;
    constructor(e, t) {
        (this.legacyEnabled = e), (this.oopEnabled = t);
    }
    static get legacyEnabled() {
        return o.load().legacyEnabled;
    }
    static get oopEnabled() {
        return o.load().oopEnabled;
    }
    static DEV_clearAllSavedSettings() {
        for (let e of Object.values(a)) r.w.remove(e);
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
        let e = { legacyEnabled: this.legacyEnabled, oopEnabled: this.oopEnabled };
        r.w.set("OverlayStore6", e);
    }
    static load() {
        return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded;
    }
    static serialize() {
        let e = this.load();
        return { legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled };
    }
    static fromSerialized(e) {
        let t = new o(e.legacyEnabled, e.oopEnabled);
        return t.save(), t;
    }
    static loadInternal() {
        let e = r.w.get("OverlayStore");
        if (null != e) {
            let t = new o("boolean" == typeof e.enabled ? e.enabled : s.O, s.O);
            return t.save(), r.w.remove("OverlayStore"), t;
        }
        let t = r.w.get("overlayEnabled");
        if (null != t) {
            let e = new o("boolean" == typeof t ? t : s.O, s.O);
            return e.save(), r.w.remove("overlayEnabled"), e;
        }
        let n = r.w.get("OverlayStore3");
        if (null != n) {
            let e = new o((n.enabled || n.legacyEnabled) ?? s.O, s.O);
            return e.save(), r.w.remove("OverlayStore3"), e;
        }
        let i = r.w.get("OverlayStore4");
        if (null != i) {
            let e = new o(i.legacyEnabled || s.O, i.oopEnabled ?? s.O);
            return e.save(), r.w.remove("OverlayStore4"), e;
        }
        let a = r.w.get("OverlayStore5");
        if (null != a) {
            let e = new o(a.legacyEnabled ?? s.O, a.oopEnabled || s.O);
            return e.save(), r.w.remove("OverlayStore5"), e;
        }
        let l = r.w.get("OverlayStore6");
        if (null != l) return new o(l.legacyEnabled ?? s.O, l.oopEnabled ?? s.O);
        let u = new o(s.O, s.O);
        return u.save(), u;
    }
}
