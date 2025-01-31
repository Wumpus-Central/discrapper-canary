n.d(t, { v: () => s });
var i = n(433517),
    r = n(987650);
function a(e, t, n) {
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
class s {
    static get enabled() {
        return s.load().enabled;
    }
    static get legacyEnabled() {
        return s.load().legacyEnabled;
    }
    static get global() {
        return s.load().global;
    }
    static update(e) {
        let t = s.load();
        'boolean' == typeof e.enabled && (t.enabled = e.enabled), 'boolean' == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), 'boolean' == typeof e.global && (t.global = e.global), t.save();
    }
    save() {
        let e = {
            enabled: this.enabled,
            legacyEnabled: this.legacyEnabled,
            global: this.global
        };
        i.K.set('OverlayStore3', e);
    }
    static load() {
        return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded;
    }
    static loadInternal() {
        let e = i.K.get('OverlayStore');
        if (null != e) {
            let t = new s('boolean' == typeof e.enabled ? e.enabled : r.iP, !1, !1);
            return t.save(), i.K.remove('OverlayStore'), t;
        }
        let t = i.K.get('overlayEnabled');
        if (null != t) {
            let e = new s('boolean' == typeof t ? t : r.iP, !1, !1);
            return e.save(), i.K.remove('overlayEnabled'), e;
        }
        let n = i.K.get('OverlayStore3');
        if (null != n) {
            var a, o, l;
            return new s(null !== (a = n.enabled) && void 0 !== a ? a : r.iP, null !== (o = n.legacyEnabled) && void 0 !== o && o, null !== (l = n.global) && void 0 !== l && l);
        }
        let u = new s(r.iP, !1, !1);
        return u.save(), u;
    }
    constructor(e, t, n) {
        a(this, 'enabled', void 0), a(this, 'legacyEnabled', void 0), a(this, 'global', void 0), (this.enabled = e), (this.legacyEnabled = t), (this.global = n);
    }
}
a(s, '_loaded', null);
