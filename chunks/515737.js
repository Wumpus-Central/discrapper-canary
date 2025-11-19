_.d(e, { t: () => i });
var a = _(151122),
    r = _(370336),
    n = _(688838),
    o = _(163162);
let E = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "BroadcastChannel",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "SharedWorker",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
    ],
    i = (0, a._I)((t = {}) => {
        let e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t,
        };
        return {
            name: "BrowserApiErrors",
            setupOnce() {
                e.setTimeout && (0, r.hl)(o.m9, "setTimeout", c),
                    e.setInterval && (0, r.hl)(o.m9, "setInterval", c),
                    e.requestAnimationFrame && (0, r.hl)(o.m9, "requestAnimationFrame", s),
                    e.XMLHttpRequest && "XMLHttpRequest" in o.m9 && (0, r.hl)(XMLHttpRequest.prototype, "send", l);
                let t = e.eventTarget;
                t && (Array.isArray(t) ? t : E).forEach(I);
            },
        };
    });
function c(t) {
    return function (...e) {
        let _ = e[0];
        return (
            (e[0] = (0, o.re)(_, {
                mechanism: {
                    data: { function: (0, n.$P)(t) },
                    handled: !1,
                    type: "instrument",
                },
            })),
            t.apply(this, e)
        );
    };
}
function s(t) {
    return function (e) {
        return t.apply(this, [
            (0, o.re)(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: (0, n.$P)(t),
                    },
                    handled: !1,
                    type: "instrument",
                },
            }),
        ]);
    };
}
function l(t) {
    return function (...e) {
        let _ = this;
        return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t) => {
                t in _ &&
                    "function" == typeof _[t] &&
                    (0, r.hl)(_, t, function (e) {
                        let _ = {
                                mechanism: {
                                    data: {
                                        function: t,
                                        handler: (0, n.$P)(e),
                                    },
                                    handled: !1,
                                    type: "instrument",
                                },
                            },
                            a = (0, r.HK)(e);
                        return a && (_.mechanism.data.handler = (0, n.$P)(a)), (0, o.re)(e, _);
                    });
            }),
            t.apply(this, e)
        );
    };
}
function I(t) {
    let e = o.m9,
        _ = e[t] && e[t].prototype;
    _ &&
        _.hasOwnProperty &&
        _.hasOwnProperty("addEventListener") &&
        ((0, r.hl)(_, "addEventListener", function (e) {
            return function (_, a, r) {
                try {
                    "function" == typeof a.handleEvent &&
                        (a.handleEvent = (0, o.re)(a.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0, n.$P)(a),
                                    target: t,
                                },
                                handled: !1,
                                type: "instrument",
                            },
                        }));
                } catch (t) {}
                return e.apply(this, [
                    _,
                    (0, o.re)(a, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0, n.$P)(a),
                                target: t,
                            },
                            handled: !1,
                            type: "instrument",
                        },
                    }),
                    r,
                ]);
            };
        }),
        (0, r.hl)(_, "removeEventListener", function (t) {
            return function (e, _, a) {
                try {
                    let r = _ && _.__sentry_wrapped__;
                    r && t.call(this, e, r, a);
                } catch (t) {}
                return t.call(this, e, _, a);
            };
        }));
}
