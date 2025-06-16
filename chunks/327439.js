n.d(t, { T: () => I });
var r = n(313694);
function i(e, t, n) {
    a(e, t), t.set(e, n);
}
function a(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
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
function s(e, t) {
    var n = u(e, t, 'get');
    return l(e, n);
}
function l(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function c(e, t, n) {
    var r = u(e, t, 'set');
    return d(e, r, n), n;
}
function u(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function d(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable) throw TypeError('attempted to set read only private field');
        t.value = n;
    }
}
var f = new WeakMap(),
    _ = new WeakMap(),
    p = new WeakMap(),
    h = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap(),
    E = new WeakMap(),
    b = new WeakMap(),
    y = new WeakMap(),
    O = new WeakMap(),
    v = new WeakMap();
class I {
    constructor(e, t, n) {
        if (
            (i(this, f, {
                writable: !0,
                value: void 0
            }),
            i(this, _, {
                writable: !0,
                value: void 0
            }),
            i(this, p, {
                writable: !0,
                value: void 0
            }),
            i(this, h, {
                writable: !0,
                value: void 0
            }),
            i(this, m, {
                writable: !0,
                value: void 0
            }),
            i(this, g, {
                writable: !0,
                value: (e, t, n) => {
                    var r, i;
                    if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
                    let a = n.backend(e, t, n.options),
                        o = n.id,
                        l = !n.id && a && a.constructor;
                    if ((l && (o = a.constructor.name), o)) l && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                    else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), '\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx'));
                    if (s(this, p)[o]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), ' (conflicts with: ').concat(JSON.stringify(s(this, p)[o]), ')'));
                    return {
                        id: o,
                        instance: a,
                        preview: null != (r = n.preview) && r,
                        transition: n.transition,
                        skipDispatchOnTransition: null != (i = n.skipDispatchOnTransition) && i
                    };
                }
            }),
            o(this, 'setup', () => {
                if ('undefined' != typeof window) {
                    if (I.isSetUp) throw Error('Cannot have two MultiBackends at the same time.');
                    (I.isSetUp = !0), s(this, E).call(this, window), s(this, p)[s(this, f)].instance.setup();
                }
            }),
            o(this, 'teardown', () => {
                'undefined' != typeof window && ((I.isSetUp = !1), s(this, b).call(this, window), s(this, p)[s(this, f)].instance.teardown());
            }),
            o(this, 'connectDragSource', (e, t, n) => s(this, v).call(this, 'connectDragSource', e, t, n)),
            o(this, 'connectDragPreview', (e, t, n) => s(this, v).call(this, 'connectDragPreview', e, t, n)),
            o(this, 'connectDropTarget', (e, t, n) => s(this, v).call(this, 'connectDropTarget', e, t, n)),
            o(this, 'profile', () => s(this, p)[s(this, f)].instance.profile()),
            o(this, 'previewEnabled', () => s(this, p)[s(this, f)].preview),
            o(this, 'previewsList', () => s(this, _)),
            o(this, 'backendsList', () => s(this, h)),
            i(this, E, {
                writable: !0,
                value: (e) => {
                    s(this, h).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, s(this, y));
                    });
                }
            }),
            i(this, b, {
                writable: !0,
                value: (e) => {
                    s(this, h).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, s(this, y));
                    });
                }
            }),
            i(this, y, {
                writable: !0,
                value: (e) => {
                    let t = s(this, f);
                    if ((s(this, h).some((t) => !!(t.id !== s(this, f) && t.transition && t.transition.check(e)) && (c(this, f, t.id), !0)), s(this, f) !== t)) {
                        var n;
                        s(this, p)[t].instance.teardown(),
                            Object.keys(s(this, m)).forEach((e) => {
                                let t = s(this, m)[e];
                                t.unsubscribe(), (t.unsubscribe = s(this, O).call(this, t.func, ...t.args));
                            }),
                            s(this, _).backendChanged(this);
                        let r = s(this, p)[s(this, f)];
                        if ((r.instance.setup(), r.skipDispatchOnTransition)) return;
                        let i = new e.constructor(e.type, e);
                        null == (n = e.target) || n.dispatchEvent(i);
                    }
                }
            }),
            i(this, O, {
                writable: !0,
                value: (e, t, n, r) => s(this, p)[s(this, f)].instance[e](t, n, r)
            }),
            i(this, v, {
                writable: !0,
                value: (e, t, n, r) => {
                    let i = ''.concat(e, '_').concat(t),
                        a = s(this, O).call(this, e, t, n, r);
                    return (
                        (s(this, m)[i] = {
                            func: e,
                            args: [t, n, r],
                            unsubscribe: a
                        }),
                        () => {
                            s(this, m)[i].unsubscribe(), delete s(this, m)[i];
                        }
                    );
                }
            }),
            !n || !n.backends || n.backends.length < 1)
        )
            throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
        c(this, _, new r.J()),
            c(this, p, {}),
            c(this, h, []),
            n.backends.forEach((n) => {
                let r = s(this, g).call(this, e, t, n);
                (s(this, p)[r.id] = r), s(this, h).push(r);
            }),
            c(this, f, s(this, h)[0].id),
            c(this, m, {});
    }
}
o(I, 'isSetUp', !1);
