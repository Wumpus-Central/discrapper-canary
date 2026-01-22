n.d(t, { W: () => v });
var r = n(755325);
function i(e, t, n) {
    a(e, t), t.set(e, n);
}
function a(e, t) {
    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e, t) {
    var n = u(e, t, "get");
    return l(e, n);
}
function l(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function c(e, t, n) {
    var r = u(e, t, "set");
    return d(e, r, n), n;
}
function u(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
function d(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable) throw TypeError("attempted to set read only private field");
        t.value = n;
    }
}
var f = new WeakMap(),
    p = new WeakMap(),
    _ = new WeakMap(),
    h = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap(),
    E = new WeakMap(),
    b = new WeakMap(),
    y = new WeakMap(),
    O = new WeakMap(),
    A = new WeakMap();
class v {
    constructor(e, t, n) {
        if (
            (i(this, f, {
                writable: !0,
                value: void 0,
            }),
            i(this, p, {
                writable: !0,
                value: void 0,
            }),
            i(this, _, {
                writable: !0,
                value: void 0,
            }),
            i(this, h, {
                writable: !0,
                value: void 0,
            }),
            i(this, m, {
                writable: !0,
                value: void 0,
            }),
            i(this, g, {
                writable: !0,
                value: (e, t, n) => {
                    var r, i;
                    if (!n.backend)
                        throw Error(
                            "You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)),
                        );
                    let a = n.backend(e, t, n.options),
                        s = n.id,
                        l = !n.id && a && a.constructor;
                    if ((l && (s = a.constructor.name), s))
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
                    if (o(this, _)[s])
                        throw Error(
                            "You must specify a unique 'id' property in your Backend entry:\n        "
                                .concat(JSON.stringify(n), " (conflicts with: ")
                                .concat(JSON.stringify(o(this, _)[s]), ")"),
                        );
                    return {
                        id: s,
                        instance: a,
                        preview: null != (r = n.preview) && r,
                        transition: n.transition,
                        skipDispatchOnTransition: null != (i = n.skipDispatchOnTransition) && i,
                    };
                },
            }),
            s(this, "setup", () => {
                if ("u" > typeof window) {
                    if (v.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                    (v.isSetUp = !0), o(this, E).call(this, window), o(this, _)[o(this, f)].instance.setup();
                }
            }),
            s(this, "teardown", () => {
                "u" > typeof window &&
                    ((v.isSetUp = !1), o(this, b).call(this, window), o(this, _)[o(this, f)].instance.teardown());
            }),
            s(this, "connectDragSource", (e, t, n) => o(this, A).call(this, "connectDragSource", e, t, n)),
            s(this, "connectDragPreview", (e, t, n) => o(this, A).call(this, "connectDragPreview", e, t, n)),
            s(this, "connectDropTarget", (e, t, n) => o(this, A).call(this, "connectDropTarget", e, t, n)),
            s(this, "profile", () => o(this, _)[o(this, f)].instance.profile()),
            s(this, "previewEnabled", () => o(this, _)[o(this, f)].preview),
            s(this, "previewsList", () => o(this, p)),
            s(this, "backendsList", () => o(this, h)),
            i(this, E, {
                writable: !0,
                value: (e) => {
                    o(this, h).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, o(this, y));
                    });
                },
            }),
            i(this, b, {
                writable: !0,
                value: (e) => {
                    o(this, h).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, o(this, y));
                    });
                },
            }),
            i(this, y, {
                writable: !0,
                value: (e) => {
                    let t = o(this, f);
                    if (
                        (o(this, h).some(
                            (t) =>
                                !!(t.id !== o(this, f) && t.transition && t.transition.check(e)) &&
                                (c(this, f, t.id), !0),
                        ),
                        o(this, f) !== t)
                    ) {
                        var n;
                        o(this, _)[t].instance.teardown(),
                            Object.keys(o(this, m)).forEach((e) => {
                                let t = o(this, m)[e];
                                t.unsubscribe(), (t.unsubscribe = o(this, O).call(this, t.func, ...t.args));
                            }),
                            o(this, p).backendChanged(this);
                        let r = o(this, _)[o(this, f)];
                        if ((r.instance.setup(), r.skipDispatchOnTransition)) return;
                        let i = new e.constructor(e.type, e);
                        null == (n = e.target) || n.dispatchEvent(i);
                    }
                },
            }),
            i(this, O, {
                writable: !0,
                value: (e, t, n, r) => o(this, _)[o(this, f)].instance[e](t, n, r),
            }),
            i(this, A, {
                writable: !0,
                value: (e, t, n, r) => {
                    let i = "".concat(e, "_").concat(t),
                        a = o(this, O).call(this, e, t, n, r);
                    return (
                        (o(this, m)[i] = {
                            func: e,
                            args: [t, n, r],
                            unsubscribe: a,
                        }),
                        () => {
                            o(this, m)[i].unsubscribe(), delete o(this, m)[i];
                        }
                    );
                },
            }),
            !n || !n.backends || n.backends.length < 1)
        )
            throw Error(
                "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
        c(this, p, new r.V()),
            c(this, _, {}),
            c(this, h, []),
            n.backends.forEach((n) => {
                let r = o(this, g).call(this, e, t, n);
                (o(this, _)[r.id] = r), o(this, h).push(r);
            }),
            c(this, f, o(this, h)[0].id),
            c(this, m, {});
    }
}
s(v, "isSetUp", !1);
