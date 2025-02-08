n.d(t, { v: () => o });
var i = n(433517),
    r = n(32300),
    a = n(987650);
function s(e, t, n) {
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
class o {
    static get legacyEnabled() {
        return o.load().legacyEnabled;
    }
    static get oopEnabled() {
        return o.load().oopEnabled;
    }
    static update(e) {
        let t = o.load();
        'boolean' == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), 'boolean' == typeof e.oopEnabled && (t.oopEnabled = e.oopEnabled), t.save();
    }
    save() {
        let e = {
            legacyEnabled: this.legacyEnabled,
            oopEnabled: this.oopEnabled
        };
        i.K.set('OverlayStore5', e);
    }
    static load() {
        return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded;
    }
    static loadInternal() {
        var e, t, n, s;
        let l = (0, r.NW)('OverlayStoredSettings', !1),
            u = i.K.get('OverlayStore');
        if (null != u) {
            let e = new o('boolean' == typeof u.enabled ? u.enabled : a.iP, l);
            return e.save(), i.K.remove('OverlayStore'), e;
        }
        let c = i.K.get('overlayEnabled');
        if (null != c) {
            let e = new o('boolean' == typeof c ? c : a.iP, l);
            return e.save(), i.K.remove('overlayEnabled'), e;
        }
        let d = i.K.get('OverlayStore3');
        if (null != d) {
            let t = new o(null !== (e = d.enabled || d.legacyEnabled) && void 0 !== e ? e : a.iP, a.iP && l);
            return t.save(), i.K.remove('OverlayStore3'), t;
        }
        let f = i.K.get('OverlayStore4');
        if (null != f) {
            let e = new o(f.legacyEnabled || a.iP, null !== (t = f.oopEnabled) && void 0 !== t ? t : a.iP && l);
            return e.save(), i.K.remove('OverlayStore4'), e;
        }
        let _ = i.K.get('OverlayStore5');
        if (null != _) return new o(null !== (n = _.legacyEnabled) && void 0 !== n ? n : a.iP, null !== (s = _.oopEnabled) && void 0 !== s ? s : a.iP && l);
        let p = new o(a.iP, l);
        return p.save(), p;
    }
    constructor(e, t) {
        s(this, 'legacyEnabled', void 0), s(this, 'oopEnabled', void 0), (this.legacyEnabled = e), (this.oopEnabled = t);
    }
}
s(o, '_loaded', null);
