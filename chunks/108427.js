n.d(t, {
    e: function () {
        return d;
    }
}),
    n(47120);
var i = n(772848),
    r = n(579806),
    l = n(626135),
    a = n(998502),
    o = n(981631);
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
let c = new (class e {
    trackEvent(e, t) {
        let n = Date.now();
        requestIdleCallback(() => {
            l.default.track(e, {
                ...(function () {
                    var e, t, n;
                    let i = '--campaign-id=';
                    for (let l of null !== (n = null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : []) if (l.startsWith(i)) return { referrer: l.substr(i.length) };
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
                                    r = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                    l = n.transferSize;
                                null != r && null != i && ((e = !0), (t.total_compressed_byte_size += i), (t.total_uncompressed_byte_size += r), null != l && (t.total_uncompressed_byte_size += l), 'resource' === n.entryType && ('script' === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && ((t.js_compressed_byte_size += i), (t.js_uncompressed_byte_size += r), null != l && (t.js_uncompressed_byte_size += l)), 'link' === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && ((t.css_compressed_byte_size += i), (t.css_uncompressed_byte_size += r), null != l && (t.css_uncompressed_byte_size += l))));
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
                a.ZP.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
    constructor() {
        s(this, 'loadId', (0, i.Z)()), s(this, 'appUIViewed', !1);
    }
})();
function d(e) {
    c.trackAppUIViewed(e);
}
