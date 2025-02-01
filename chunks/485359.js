n.d(t, { Z: () => h }), n(47120);
var i = n(200651);
n(192379);
var r = n(525654),
    a = n.n(r),
    s = n(481060),
    o = n(570140),
    l = n(468026),
    u = n(317770),
    c = n(63063),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
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
class p extends u.Z {
    _initialize() {
        o.Z.subscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    _terminate() {
        o.Z.unsubscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    constructor(...e) {
        super(...e),
            _(this, 'handlePermission', (e) => {
                let { kind: t, granted: n } = e,
                    r = 'Firefox' === a().name ? d.BhN.ENABLE_MIC_FIREFOX : d.BhN.ENABLE_MIC_CHROME;
                if (!n) {
                    let e = 'audio' !== t;
                    (0, s.h7j)((t) =>
                        (0, i.jsx)(l.default, {
                            title: e ? f.intl.string(f.t.OqloHx) : f.intl.string(f.t['kI+OOT']),
                            body: e ? f.intl.string(f.t.l3P7Ky) : f.intl.string(f.t.l3jwOT),
                            onConfirm: () => window.open(c.Z.getArticleURL(r), '_blank'),
                            confirmText: f.intl.string(f.t.psXQHB),
                            ...t
                        })
                    );
                }
            });
    }
}
let h = new p();
