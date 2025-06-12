n.d(t, { Z: () => m }), n(388685);
var r = n(255367);
n(73800);
var i = n(525654),
    a = n.n(i),
    o = n(481060),
    s = n(570140),
    l = n(468026),
    c = n(317770),
    u = n(63063),
    d = n(981631),
    _ = n(388032);
function f(e, t, n) {
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
                f(e, t, n[t]);
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
            f(this, 'handlePermission', (e) => {
                let { kind: t, granted: n } = e,
                    i = 'Firefox' === a().name ? d.BhN.ENABLE_MIC_FIREFOX : d.BhN.ENABLE_MIC_CHROME;
                if (!n) {
                    let e = 'audio' !== t;
                    (0, o.h7j)((t) =>
                        (0, r.jsx)(
                            l.default,
                            p(
                                {
                                    title: e ? _.intl.string(_.t.OqloHx) : _.intl.string(_.t['kI+OOT']),
                                    body: e ? _.intl.string(_.t.l3P7Ky) : _.intl.string(_.t.l3jwOT),
                                    onConfirm: () => window.open(u.Z.getArticleURL(i), '_blank'),
                                    confirmText: _.intl.string(_.t.psXQHB)
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
