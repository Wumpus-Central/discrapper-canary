r.d(n, {
    v: function () {
        return l;
    }
});
var i,
    a = r(433517),
    o = r(987650);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.Version1 = 'OverlayStore'), (e.Version2 = 'overlayEnabled'), (e.Version3 = 'OverlayStore3');
})(i || (i = {}));
class l {
    static get enabled() {
        return l.load().enabled;
    }
    static get legacyEnabled() {
        return l.load().legacyEnabled;
    }
    static get global() {
        return l.load().global;
    }
    static update(e) {
        let n = l.load();
        'boolean' == typeof e.enabled && (n.enabled = e.enabled), 'boolean' == typeof e.legacyEnabled && (n.legacyEnabled = e.legacyEnabled), 'boolean' == typeof e.global && (n.global = e.global), n.save();
    }
    save() {
        let e = {
            enabled: this.enabled,
            legacyEnabled: this.legacyEnabled,
            global: this.global
        };
        a.K.set('OverlayStore3', e);
    }
    static load() {
        return null == l._loaded && (l._loaded = l.loadInternal()), l._loaded;
    }
    static loadInternal() {
        let e = a.K.get('OverlayStore');
        if (null != e) {
            let n = new l('boolean' == typeof e.enabled ? e.enabled : o.iP, !1, !1);
            return n.save(), a.K.remove('OverlayStore'), n;
        }
        let n = a.K.get('overlayEnabled');
        if (null != n) {
            let e = new l('boolean' == typeof n ? n : o.iP, !1, !1);
            return e.save(), a.K.remove('overlayEnabled'), e;
        }
        let r = a.K.get('OverlayStore3');
        if (null != r) {
            var i, s, u;
            return new l(null !== (i = r.enabled) && void 0 !== i ? i : o.iP, null !== (s = r.legacyEnabled) && void 0 !== s && s, null !== (u = r.global) && void 0 !== u && u);
        }
        let c = new l(o.iP, !1, !1);
        return c.save(), c;
    }
    constructor(e, n, r) {
        s(this, 'enabled', void 0), s(this, 'legacyEnabled', void 0), s(this, 'global', void 0), (this.enabled = e), (this.legacyEnabled = n), (this.global = r);
    }
}
s(l, '_loaded', null);
