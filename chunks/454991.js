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
        i.K.set('OverlayStore6', e);
    }
    static load() {
        return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded;
    }
    static loadInternal() {
        var e, t, n, s, l;
        let u = (0, r.NW)('OverlayStoredSettings', !1),
            c = i.K.get('OverlayStore');
        if (null != c) {
            let e = new o('boolean' == typeof c.enabled ? c.enabled : a.iP, u);
            return e.save(), i.K.remove('OverlayStore'), e;
        }
        let d = i.K.get('overlayEnabled');
        if (null != d) {
            let e = new o('boolean' == typeof d ? d : a.iP, u);
            return e.save(), i.K.remove('overlayEnabled'), e;
        }
        let f = i.K.get('OverlayStore3');
        if (null != f) {
            let t = new o(null !== (e = f.enabled || f.legacyEnabled) && void 0 !== e ? e : a.iP, a.iP && u);
            return t.save(), i.K.remove('OverlayStore3'), t;
        }
        let _ = i.K.get('OverlayStore4');
        if (null != _) {
            let e = new o(_.legacyEnabled || a.iP, null !== (t = _.oopEnabled) && void 0 !== t ? t : a.iP && u);
            return e.save(), i.K.remove('OverlayStore4'), e;
        }
        let p = i.K.get('OverlayStore5');
        if (null != p) {
            let e = new o(null !== (n = p.legacyEnabled) && void 0 !== n ? n : a.iP, p.oopEnabled || a.iP);
            return e.save(), i.K.remove('OverlayStore5'), e;
        }
        let h = i.K.get('OverlayStore6');
        if (null != h) return new o(null !== (s = h.legacyEnabled) && void 0 !== s ? s : a.iP, null !== (l = h.oopEnabled) && void 0 !== l ? l : a.iP);
        let m = new o(a.iP, u);
        return m.save(), m;
    }
    constructor(e, t) {
        s(this, 'legacyEnabled', void 0), s(this, 'oopEnabled', void 0), (this.legacyEnabled = e), (this.oopEnabled = t);
    }
}
s(o, '_loaded', null);
