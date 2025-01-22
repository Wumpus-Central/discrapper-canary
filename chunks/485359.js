var i = r(47120);
var a = r(200651);
r(192379);
var o = r(525654),
    s = r.n(o),
    l = r(481060),
    u = r(570140),
    c = r(468026),
    d = r(317770),
    f = r(63063),
    p = r(981631),
    h = r(388032);
function _(e, n, r) {
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
class m extends d.Z {
    _initialize() {
        u.Z.subscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    _terminate() {
        u.Z.unsubscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    constructor(...e) {
        super(...e),
            _(this, 'handlePermission', (e) => {
                let { kind: n, granted: r } = e,
                    i = 'Firefox' === s().name ? p.BhN.ENABLE_MIC_FIREFOX : p.BhN.ENABLE_MIC_CHROME;
                if (!r) {
                    let e = 'audio' !== n;
                    (0, l.openModal)((n) =>
                        (0, a.jsx)(c.default, {
                            title: e ? h.intl.string(h.t.OqloHx) : h.intl.string(h.t['kI+OOT']),
                            body: e ? h.intl.string(h.t.l3P7Ky) : h.intl.string(h.t.l3jwOT),
                            onConfirm: () => window.open(f.Z.getArticleURL(i), '_blank'),
                            confirmText: h.intl.string(h.t.psXQHB),
                            ...n
                        })
                    );
                }
            });
    }
}
n.Z = new m();
