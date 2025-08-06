(n.d(t, { Z: () => _ }), n(388685));
var r = n(525654),
    i = n.n(r),
    o = n(570140),
    a = n(240872),
    s = n(317770),
    l = n(63063),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
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
class f extends s.Z {
    _initialize() {
        o.Z.subscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    _terminate() {
        o.Z.unsubscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    constructor(...e) {
        (super(...e),
            d(this, 'handlePermission', (e) => {
                let { kind: t, granted: n } = e,
                    r = 'Firefox' === i().name ? c.BhN.ENABLE_MIC_FIREFOX : c.BhN.ENABLE_MIC_CHROME;
                if (!n) {
                    let e = 'audio' !== t;
                    a.Z.show({
                        title: e ? u.intl.string(u.t.OqloHx) : u.intl.string(u.t['kI+OOT']),
                        body: e ? u.intl.string(u.t.l3P7Ky) : u.intl.string(u.t.l3jwOT),
                        onConfirm: () => window.open(l.Z.getArticleURL(r), '_blank'),
                        confirmText: u.intl.string(u.t.psXQHB)
                    });
                }
            }));
    }
}
let _ = new f();
