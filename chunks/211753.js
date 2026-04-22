"use strict";
n.d(t, { x: () => o });
var r,
    i = n(506774),
    s = n(206885),
    a =
        (((r = {}).Version1 = "OverlayStore"),
        (r.Version2 = "overlayEnabled"),
        (r.Version3 = "OverlayStore3"),
        (r.Version4 = "OverlayStore4"),
        (r.Version5 = "OverlayStore5"),
        (r.Version6 = "OverlayStore6"),
        r);
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
        for (let e of Object.values(a)) i.w.remove(e);
        this._loaded = null;
    }
    static DEV_saveSettingsForVersion(e) {
        for (let [t, n] of Object.entries(e)) i.w.set(t, n);
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
        i.w.set("OverlayStore6", e);
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
        let e = i.w.get("OverlayStore");
        if (null != e) {
            let t = new o("boolean" == typeof e.enabled ? e.enabled : s.O, s.O);
            return t.save(), i.w.remove("OverlayStore"), t;
        }
        let t = i.w.get("overlayEnabled");
        if (null != t) {
            let e = new o("boolean" == typeof t ? t : s.O, s.O);
            return e.save(), i.w.remove("overlayEnabled"), e;
        }
        let n = i.w.get("OverlayStore3");
        if (null != n) {
            let e = new o((n.enabled || n.legacyEnabled) ?? s.O, s.O);
            return e.save(), i.w.remove("OverlayStore3"), e;
        }
        let r = i.w.get("OverlayStore4");
        if (null != r) {
            let e = new o(r.legacyEnabled || s.O, r.oopEnabled ?? s.O);
            return e.save(), i.w.remove("OverlayStore4"), e;
        }
        let a = i.w.get("OverlayStore5");
        if (null != a) {
            let e = new o(a.legacyEnabled ?? s.O, a.oopEnabled || s.O);
            return e.save(), i.w.remove("OverlayStore5"), e;
        }
        let l = i.w.get("OverlayStore6");
        if (null != l) return new o(l.legacyEnabled ?? s.O, l.oopEnabled ?? s.O);
        let u = new o(s.O, s.O);
        return u.save(), u;
    }
}
