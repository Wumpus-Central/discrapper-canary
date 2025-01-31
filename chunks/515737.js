a.d(e, { t: () => c });
var r = a(151122),
    n = a(370336),
    o = a(688838),
    _ = a(163162);
let i = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'BroadcastChannel', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'SharedWorker', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'],
    c = (0, r._I)((t = {}) => {
        let e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t
        };
        return {
            name: 'BrowserApiErrors',
            setupOnce() {
                e.setTimeout && (0, n.hl)(_.m9, 'setTimeout', s), e.setInterval && (0, n.hl)(_.m9, 'setInterval', s), e.requestAnimationFrame && (0, n.hl)(_.m9, 'requestAnimationFrame', E), e.XMLHttpRequest && 'XMLHttpRequest' in _.m9 && (0, n.hl)(XMLHttpRequest.prototype, 'send', l);
                let t = e.eventTarget;
                t && (Array.isArray(t) ? t : i).forEach(u);
            }
        };
    });
function s(t) {
    return function (...e) {
        let a = e[0];
        return (
            (e[0] = (0, _.re)(a, {
                mechanism: {
                    data: { function: (0, o.$P)(t) },
                    handled: !1,
                    type: 'instrument'
                }
            })),
            t.apply(this, e)
        );
    };
}
function E(t) {
    return function (e) {
        return t.apply(this, [
            (0, _.re)(e, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: (0, o.$P)(t)
                    },
                    handled: !1,
                    type: 'instrument'
                }
            })
        ]);
    };
}
function l(t) {
    return function (...e) {
        let a = this;
        return (
            ['onload', 'onerror', 'onprogress', 'onreadystatechange'].forEach((t) => {
                t in a &&
                    'function' == typeof a[t] &&
                    (0, n.hl)(a, t, function (e) {
                        let a = {
                                mechanism: {
                                    data: {
                                        function: t,
                                        handler: (0, o.$P)(e)
                                    },
                                    handled: !1,
                                    type: 'instrument'
                                }
                            },
                            r = (0, n.HK)(e);
                        return r && (a.mechanism.data.handler = (0, o.$P)(r)), (0, _.re)(e, a);
                    });
            }),
            t.apply(this, e)
        );
    };
}
function u(t) {
    let e = _.m9,
        a = e[t] && e[t].prototype;
    a &&
        a.hasOwnProperty &&
        a.hasOwnProperty('addEventListener') &&
        ((0, n.hl)(a, 'addEventListener', function (e) {
            return function (a, r, n) {
                try {
                    'function' == typeof r.handleEvent &&
                        (r.handleEvent = (0, _.re)(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: 'handleEvent',
                                    handler: (0, o.$P)(r),
                                    target: t
                                },
                                handled: !1,
                                type: 'instrument'
                            }
                        }));
                } catch (t) {}
                return e.apply(this, [
                    a,
                    (0, _.re)(r, {
                        mechanism: {
                            data: {
                                function: 'addEventListener',
                                handler: (0, o.$P)(r),
                                target: t
                            },
                            handled: !1,
                            type: 'instrument'
                        }
                    }),
                    n
                ]);
            };
        }),
        (0, n.hl)(a, 'removeEventListener', function (t) {
            return function (e, a, r) {
                try {
                    let n = a && a.__sentry_wrapped__;
                    n && t.call(this, e, n, r);
                } catch (t) {}
                return t.call(this, e, a, r);
            };
        }));
}
