n.d(t, { x: () => l });
var i,
    r = n(506774),
    a = n(206885),
    s =
        (((i = {}).Version1 = "OverlayStore"),
        (i.Version2 = "overlayEnabled"),
        (i.Version3 = "OverlayStore3"),
        (i.Version4 = "OverlayStore4"),
        (i.Version5 = "OverlayStore5"),
        (i.Version6 = "OverlayStore6"),
        i);
class l {
    static _loaded = null;
    legacyEnabled;
    oopEnabled;
    constructor(e, t) {
        (this.legacyEnabled = e), (this.oopEnabled = t);
    }
    static get legacyEnabled() {
        return l.load().legacyEnabled;
    }
    static get oopEnabled() {
        return l.load().oopEnabled;
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
        let t = l.load();
        "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled),
            "boolean" == typeof e.oopEnabled && (t.oopEnabled = e.oopEnabled),
            t.save();
    }
    save() {
        let e = { legacyEnabled: this.legacyEnabled, oopEnabled: this.oopEnabled };
        r.w.set("OverlayStore6", e);
    }
    static load() {
        return null == l._loaded && (l._loaded = l.loadInternal()), l._loaded;
    }
    static serialize() {
        let e = this.load();
        return { legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled };
    }
    static fromSerialized(e) {
        let t = new l(e.legacyEnabled, e.oopEnabled);
        return t.save(), t;
    }
    static loadInternal() {
        let e = r.w.get("OverlayStore");
        if (null != e) {
            let t = new l("boolean" == typeof e.enabled ? e.enabled : a.O, a.O);
            return t.save(), r.w.remove("OverlayStore"), t;
        }
        let t = r.w.get("overlayEnabled");
        if (null != t) {
            let e = new l("boolean" == typeof t ? t : a.O, a.O);
            return e.save(), r.w.remove("overlayEnabled"), e;
        }
        let n = r.w.get("OverlayStore3");
        if (null != n) {
            let e = new l((n.enabled || n.legacyEnabled) ?? a.O, a.O);
            return e.save(), r.w.remove("OverlayStore3"), e;
        }
        let i = r.w.get("OverlayStore4");
        if (null != i) {
            let e = new l(i.legacyEnabled || a.O, i.oopEnabled ?? a.O);
            return e.save(), r.w.remove("OverlayStore4"), e;
        }
        let s = r.w.get("OverlayStore5");
        if (null != s) {
            let e = new l(s.legacyEnabled ?? a.O, s.oopEnabled || a.O);
            return e.save(), r.w.remove("OverlayStore5"), e;
        }
        let o = r.w.get("OverlayStore6");
        if (null != o) return new l(o.legacyEnabled ?? a.O, o.oopEnabled ?? a.O);
        let d = new l(a.O, a.O);
        return d.save(), d;
    }
}
