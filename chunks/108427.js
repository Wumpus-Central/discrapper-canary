n.d(t, { e: () => d }), n(47120);
var i = n(772848),
    l = n(579806),
    a = n(626135),
    r = n(998502),
    s = n(981631);
function o(e, t, n) {
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
let c = new (class {
    trackEvent(e, t) {
        let n = Date.now();
        requestIdleCallback(() => {
            a.default.track(e, {
                ...(function () {
                    var e, t, n;
                    let i = '--campaign-id=';
                    for (let a of null !== (n = null === l.Z || void 0 === l.Z ? void 0 : null === (t = l.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : []) if (a.startsWith(i)) return { referrer: a.substr(i.length) };
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
                                let i = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                    l = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                    a = n.transferSize;
                                null != l && null != i && ((e = !0), (t.total_compressed_byte_size += i), (t.total_uncompressed_byte_size += l), null != a && (t.total_uncompressed_byte_size += a), 'resource' === n.entryType && ('script' === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && ((t.js_compressed_byte_size += i), (t.js_uncompressed_byte_size += l), null != a && (t.js_uncompressed_byte_size += a)), 'link' === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && ((t.css_compressed_byte_size += i), (t.css_uncompressed_byte_size += l), null != a && (t.css_uncompressed_byte_size += a))));
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
            this.trackEvent(s.rMx.APP_UI_VIEWED, e);
            try {
                r.ZP.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
    constructor() {
        o(this, 'loadId', (0, i.Z)()), o(this, 'appUIViewed', !1);
    }
})();
function d(e) {
    c.trackAppUIViewed(e);
}
