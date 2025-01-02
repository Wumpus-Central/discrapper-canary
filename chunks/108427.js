n.d(t, {
    e: function () {
        return d;
    }
}),
    n(47120);
var r = n(772848),
    i = n(579806),
    s = n(626135),
    l = n(998502),
    o = n(981631);
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
let c = new (class e {
    trackEvent(e, t) {
        let n = Date.now();
        requestIdleCallback(() => {
            s.default.track(e, {
                ...(function () {
                    var e, t, n;
                    let r = '--campaign-id=';
                    for (let s of null !== (n = null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : []) if (s.startsWith(r)) return { referrer: s.substr(r.length) };
                    return {};
                })(),
                ...(function () {
                    let e = !1,
                        t = {
                            total_compressed_byte_size: 0,
                            total_uncompressed_byte_size: 0,
                            total_transfer_byte_size: 0,
                            js_compressed_byte_size: 0,
                            js_uncompressed_byte_size: 0,
                            js_transfer_byte_size: 0,
                            css_compressed_byte_size: 0,
                            css_uncompressed_byte_size: 0,
                            css_transfer_byte_size: 0
                        };
                    return (
                        null != window.performance &&
                            null != window.performance.getEntries &&
                            window.performance.getEntries().forEach((n) => {
                                let r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                    i = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                    s = n.transferSize;
                                null != i && null != r && ((e = !0), (t.total_compressed_byte_size += r), (t.total_uncompressed_byte_size += i), null != s && (t.total_uncompressed_byte_size += s), 'resource' === n.entryType && ('script' === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && ((t.js_compressed_byte_size += r), (t.js_uncompressed_byte_size += i), null != s && (t.js_uncompressed_byte_size += s)), 'link' === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && ((t.css_compressed_byte_size += r), (t.css_uncompressed_byte_size += i), null != s && (t.css_uncompressed_byte_size += s))));
                            }),
                        e ? t : {}
                    );
                })(),
                load_id: this.loadId,
                screen_name: t,
                duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
            });
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            this.trackEvent(o.rMx.APP_UI_VIEWED, e);
            try {
                l.ZP.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
    constructor() {
        a(this, 'loadId', (0, r.Z)()), a(this, 'appUIViewed', !1);
    }
})();
function d(e) {
    c.trackAppUIViewed(e);
}
