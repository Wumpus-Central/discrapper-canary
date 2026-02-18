"use strict";
n.d(t, { x: () => s });
var r = n(506774),
    i = n(206885),
    a = (function (e) {
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
class s {
    static _loaded = null;
    legacyEnabled;
    oopEnabled;
    constructor(e, t) {
        (this.legacyEnabled = e), (this.oopEnabled = t);
    }
    static get legacyEnabled() {
        return s.load().legacyEnabled;
    }
    static get oopEnabled() {
        return s.load().oopEnabled;
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
        let t = s.load();
        "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled),
            "boolean" == typeof e.oopEnabled && (t.oopEnabled = e.oopEnabled),
            t.save();
    }
    save() {
        let e = { legacyEnabled: this.legacyEnabled, oopEnabled: this.oopEnabled };
        r.w.set("OverlayStore6", e);
    }
    static load() {
        return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded;
    }
    static serialize() {
        let e = this.load();
        return { legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled };
    }
    static fromSerialized(e) {
        let t = new s(e.legacyEnabled, e.oopEnabled);
        return t.save(), t;
    }
    static loadInternal() {
        let e = r.w.get("OverlayStore");
        if (null != e) {
            let t = new s("boolean" == typeof e.enabled ? e.enabled : i.O, i.O);
            return t.save(), r.w.remove("OverlayStore"), t;
        }
        let t = r.w.get("overlayEnabled");
        if (null != t) {
            let e = new s("boolean" == typeof t ? t : i.O, i.O);
            return e.save(), r.w.remove("overlayEnabled"), e;
        }
        let n = r.w.get("OverlayStore3");
        if (null != n) {
            let e = new s((n.enabled || n.legacyEnabled) ?? i.O, i.O);
            return e.save(), r.w.remove("OverlayStore3"), e;
        }
        let a = r.w.get("OverlayStore4");
        if (null != a) {
            let e = new s(a.legacyEnabled || i.O, a.oopEnabled ?? i.O);
            return e.save(), r.w.remove("OverlayStore4"), e;
        }
        let o = r.w.get("OverlayStore5");
        if (null != o) {
            let e = new s(o.legacyEnabled ?? i.O, o.oopEnabled || i.O);
            return e.save(), r.w.remove("OverlayStore5"), e;
        }
        let l = r.w.get("OverlayStore6");
        if (null != l) return new s(l.legacyEnabled ?? i.O, l.oopEnabled ?? i.O);
        let u = new s(i.O, i.O);
        return u.save(), u;
    }
}
