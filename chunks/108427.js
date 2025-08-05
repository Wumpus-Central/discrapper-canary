(n.d(t, { e: () => d }), n(388685), n(35282));
var i = n(772848),
    r = n(579806),
    l = n(626135),
    a = n(998502),
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
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            var n, i;
            l.default.track(
                s.rMx.APP_UI_VIEWED,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                o(e, t, n[t]);
                            }));
                    }
                    return e;
                })(
                    {},
                    (function () {
                        var e, t, n;
                        let i = '--campaign-id=';
                        for (let l of null != (n = null === r.Z || void 0 === r.Z || null == (t = r.Z.processUtils) || null == (e = t.getMainArgvSync) ? void 0 : e.call(t)) ? n : []) if (l.startsWith(i)) return { referrer: l.substr(i.length) };
                        return {};
                    })(),
                    (function () {
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
                    })()
                )),
                (i = i =
                    {
                        load_id: this.loadId,
                        screen_name: e,
                        duration_ms_since_app_opened: t - window.GLOBAL_ENV.HTML_TIMESTAMP,
                        app_hardware_acceleration_enabled: a.ZP.getEnableHardwareAcceleration()
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n)
            );
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            this.trackEvent(e);
            try {
                a.ZP.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
    constructor() {
        (o(this, 'loadId', (0, i.Z)()), o(this, 'appUIViewed', !1));
    }
})();
function d(e) {
    c.trackAppUIViewed(e);
}
