n.d(t, { v: () => s }), n(47120);
var r = n(433517),
    i = n(987650);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var a = (function (e) {
    return (e.Version1 = 'OverlayStore'), (e.Version2 = 'overlayEnabled'), (e.Version3 = 'OverlayStore3'), (e.Version4 = 'OverlayStore4'), (e.Version5 = 'OverlayStore5'), (e.Version6 = 'OverlayStore6'), e;
})({});
class s {
    static get legacyEnabled() {
        return s.load().legacyEnabled;
    }
    static get oopEnabled() {
        return s.load().oopEnabled;
    }
    static DEV_clearAllSavedSettings() {
        for (let e of Object.values(a)) r.K.remove(e);
        this._loaded = null;
    }
    static DEV_saveSettingsForVersion(e) {
        for (let [t, n] of Object.entries(e)) r.K.set(t, n);
        this._loaded = null;
    }
    static update(e) {
        let t = s.load();
        'boolean' == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), 'boolean' == typeof e.oopEnabled && (t.oopEnabled = e.oopEnabled), t.save();
    }
    save() {
        let e = {
            legacyEnabled: this.legacyEnabled,
            oopEnabled: this.oopEnabled
        };
        r.K.set('OverlayStore6', e);
    }
    static load() {
        return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded;
    }
    static loadInternal() {
        var e, t, n, o, a;
        let l = r.K.get('OverlayStore');
        if (null != l) {
            let e = new s('boolean' == typeof l.enabled ? l.enabled : i.iP, i.iP);
            return e.save(), r.K.remove('OverlayStore'), e;
        }
        let c = r.K.get('overlayEnabled');
        if (null != c) {
            let e = new s('boolean' == typeof c ? c : i.iP, i.iP);
            return e.save(), r.K.remove('overlayEnabled'), e;
        }
        let u = r.K.get('OverlayStore3');
        if (null != u) {
            let t = new s(null != (e = u.enabled || u.legacyEnabled) ? e : i.iP, i.iP);
            return t.save(), r.K.remove('OverlayStore3'), t;
        }
        let d = r.K.get('OverlayStore4');
        if (null != d) {
            let e = new s(d.legacyEnabled || i.iP, null != (t = d.oopEnabled) ? t : i.iP);
            return e.save(), r.K.remove('OverlayStore4'), e;
        }
        let f = r.K.get('OverlayStore5');
        if (null != f) {
            let e = new s(null != (n = f.legacyEnabled) ? n : i.iP, f.oopEnabled || i.iP);
            return e.save(), r.K.remove('OverlayStore5'), e;
        }
        let _ = r.K.get('OverlayStore6');
        if (null != _) return new s(null != (o = _.legacyEnabled) ? o : i.iP, null != (a = _.oopEnabled) ? a : i.iP);
        let p = new s(i.iP, i.iP);
        return p.save(), p;
    }
    constructor(e, t) {
        o(this, 'legacyEnabled', void 0), o(this, 'oopEnabled', void 0), (this.legacyEnabled = e), (this.oopEnabled = t);
    }
}
o(s, '_loaded', null);
