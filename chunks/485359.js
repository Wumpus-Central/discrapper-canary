n.d(t, { Z: () => m }), n(47120);
var r = n(200651);
n(192379);
var i = n(525654),
    o = n.n(i),
    a = n(481060),
    s = n(570140),
    l = n(468026),
    c = n(317770),
    u = n(63063),
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
class h extends c.Z {
    _initialize() {
        s.Z.subscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    _terminate() {
        s.Z.unsubscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    constructor(...e) {
        super(...e),
            _(this, 'handlePermission', (e) => {
                let { kind: t, granted: n } = e,
                    i = 'Firefox' === o().name ? d.BhN.ENABLE_MIC_FIREFOX : d.BhN.ENABLE_MIC_CHROME;
                if (!n) {
                    let e = 'audio' !== t;
                    (0, a.h7j)((t) =>
                        (0, r.jsx)(
                            l.default,
                            p(
                                {
                                    title: e ? f.NW.string(f.t.OqloHx) : f.NW.string(f.t['kI+OOT']),
                                    body: e ? f.NW.string(f.t.l3P7Ky) : f.NW.string(f.t.l3jwOT),
                                    onConfirm: () => window.open(u.Z.getArticleURL(i), '_blank'),
                                    confirmText: f.NW.string(f.t.psXQHB)
                                },
                                t
                            )
                        )
                    );
                }
            });
    }
}
let m = new h();
