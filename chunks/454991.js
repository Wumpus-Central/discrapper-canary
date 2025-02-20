n.d(t, { v: () => s });
var r = n(433517),
    i = n(32300),
    o = n(987650);
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
    static get legacyEnabled() {
        return s.load().legacyEnabled;
    }
    static get oopEnabled() {
        return s.load().oopEnabled;
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
        var e, t, n, a, l;
        let c = (0, i.NW)('OverlayStoredSettings', !1),
            u = r.K.get('OverlayStore');
        if (null != u) {
            let e = new s('boolean' == typeof u.enabled ? u.enabled : o.iP, c);
            return e.save(), r.K.remove('OverlayStore'), e;
        }
        let d = r.K.get('overlayEnabled');
        if (null != d) {
            let e = new s('boolean' == typeof d ? d : o.iP, c);
            return e.save(), r.K.remove('overlayEnabled'), e;
        }
        let f = r.K.get('OverlayStore3');
        if (null != f) {
            let t = new s(null !== (e = f.enabled || f.legacyEnabled) && void 0 !== e ? e : o.iP, o.iP && c);
            return t.save(), r.K.remove('OverlayStore3'), t;
        }
        let p = r.K.get('OverlayStore4');
        if (null != p) {
            let e = new s(p.legacyEnabled || o.iP, null !== (t = p.oopEnabled) && void 0 !== t ? t : o.iP && c);
            return e.save(), r.K.remove('OverlayStore4'), e;
        }
        let _ = r.K.get('OverlayStore5');
        if (null != _) {
            let e = new s(null !== (n = _.legacyEnabled) && void 0 !== n ? n : o.iP, _.oopEnabled || o.iP);
            return e.save(), r.K.remove('OverlayStore5'), e;
        }
        let h = r.K.get('OverlayStore6');
        if (null != h) return new s(null !== (a = h.legacyEnabled) && void 0 !== a ? a : o.iP, null !== (l = h.oopEnabled) && void 0 !== l ? l : o.iP);
        let m = new s(o.iP, c);
        return m.save(), m;
    }
    constructor(e, t) {
        a(this, 'legacyEnabled', void 0), a(this, 'oopEnabled', void 0), (this.legacyEnabled = e), (this.oopEnabled = t);
    }
}
a(s, '_loaded', null);
