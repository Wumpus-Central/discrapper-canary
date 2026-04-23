"use strict";
n.d(t, { W: () => I });
var r = n(755325);
function i(e, t, n) {
    (function (e, t) {
        if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
    })(e, t),
        t.set(e, n);
}
function s(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function a(e, t) {
    var n,
        r,
        i = l(e, t, "get");
    return (n = e), (r = i).get ? r.get.call(n) : r.value;
}
function o(e, t, n) {
    var r = l(e, t, "set");
    return (
        (function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
                if (!t.writable) throw TypeError("attempted to set read only private field");
                t.value = n;
            }
        })(e, r, n),
        n
    );
}
function l(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
var u = new WeakMap(),
    c = new WeakMap(),
    d = new WeakMap(),
    _ = new WeakMap(),
    f = new WeakMap(),
    p = new WeakMap(),
    h = new WeakMap(),
    E = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap(),
    A = new WeakMap();
class I {
    constructor(e, t, n) {
        if (
            (i(this, u, { writable: !0, value: void 0 }),
            i(this, c, { writable: !0, value: void 0 }),
            i(this, d, { writable: !0, value: void 0 }),
            i(this, _, { writable: !0, value: void 0 }),
            i(this, f, { writable: !0, value: void 0 }),
            i(this, p, {
                writable: !0,
                value: (e, t, n) => {
                    var r, i;
                    if (!n.backend)
                        throw Error(
                            "You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)),
                        );
                    let s = n.backend(e, t, n.options),
                        o = n.id,
                        l = !n.id && s && s.constructor;
                    if ((l && (o = s.constructor.name), o))
                        l &&
                            console.warn(
                                "Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.",
                            );
                    else
                        throw Error(
                            "You must specify an 'id' property in your Backend entry: ".concat(
                                JSON.stringify(n),
                                "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx",
                            ),
                        );
                    if (a(this, d)[o])
                        throw Error(
                            "You must specify a unique 'id' property in your Backend entry:\n        "
                                .concat(JSON.stringify(n), " (conflicts with: ")
                                .concat(JSON.stringify(a(this, d)[o]), ")"),
                        );
                    return {
                        id: o,
                        instance: s,
                        preview: null != (r = n.preview) && r,
                        transition: n.transition,
                        skipDispatchOnTransition: null != (i = n.skipDispatchOnTransition) && i,
                    };
                },
            }),
            s(this, "setup", () => {
                if ("u" > typeof window) {
                    if (I.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                    (I.isSetUp = !0), a(this, h).call(this, window), a(this, d)[a(this, u)].instance.setup();
                }
            }),
            s(this, "teardown", () => {
                "u" > typeof window &&
                    ((I.isSetUp = !1), a(this, E).call(this, window), a(this, d)[a(this, u)].instance.teardown());
            }),
            s(this, "connectDragSource", (e, t, n) => a(this, A).call(this, "connectDragSource", e, t, n)),
            s(this, "connectDragPreview", (e, t, n) => a(this, A).call(this, "connectDragPreview", e, t, n)),
            s(this, "connectDropTarget", (e, t, n) => a(this, A).call(this, "connectDropTarget", e, t, n)),
            s(this, "profile", () => a(this, d)[a(this, u)].instance.profile()),
            s(this, "previewEnabled", () => a(this, d)[a(this, u)].preview),
            s(this, "previewsList", () => a(this, c)),
            s(this, "backendsList", () => a(this, _)),
            i(this, h, {
                writable: !0,
                value: (e) => {
                    a(this, _).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, a(this, m));
                    });
                },
            }),
            i(this, E, {
                writable: !0,
                value: (e) => {
                    a(this, _).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, a(this, m));
                    });
                },
            }),
            i(this, m, {
                writable: !0,
                value: (e) => {
                    let t = a(this, u);
                    if (
                        (a(this, _).some(
                            (t) =>
                                !!(t.id !== a(this, u) && t.transition && t.transition.check(e)) &&
                                (o(this, u, t.id), !0),
                        ),
                        a(this, u) !== t)
                    ) {
                        var n;
                        a(this, d)[t].instance.teardown(),
                            Object.keys(a(this, f)).forEach((e) => {
                                let t = a(this, f)[e];
                                t.unsubscribe(), (t.unsubscribe = a(this, g).call(this, t.func, ...t.args));
                            }),
                            a(this, c).backendChanged(this);
                        let r = a(this, d)[a(this, u)];
                        if ((r.instance.setup(), r.skipDispatchOnTransition)) return;
                        let i = new e.constructor(e.type, e);
                        null == (n = e.target) || n.dispatchEvent(i);
                    }
                },
            }),
            i(this, g, { writable: !0, value: (e, t, n, r) => a(this, d)[a(this, u)].instance[e](t, n, r) }),
            i(this, A, {
                writable: !0,
                value: (e, t, n, r) => {
                    let i = "".concat(e, "_").concat(t),
                        s = a(this, g).call(this, e, t, n, r);
                    return (
                        (a(this, f)[i] = { func: e, args: [t, n, r], unsubscribe: s }),
                        () => {
                            a(this, f)[i].unsubscribe(), delete a(this, f)[i];
                        }
                    );
                },
            }),
            !n || !n.backends || n.backends.length < 1)
        )
            throw Error(
                "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
        o(this, c, new r.V()),
            o(this, d, {}),
            o(this, _, []),
            n.backends.forEach((n) => {
                let r = a(this, p).call(this, e, t, n);
                (a(this, d)[r.id] = r), a(this, _).push(r);
            }),
            o(this, u, a(this, _)[0].id),
            o(this, f, {});
    }
}
s(I, "isSetUp", !1);
