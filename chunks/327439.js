n.d(t, { T: () => T });
var i = n(313694);
function r(e, t, n) {
    a(e, t), t.set(e, n);
}
function a(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
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
function o(e, t) {
    var n = c(e, t, 'get');
    return l(e, n);
}
function l(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function u(e, t, n) {
    var i = c(e, t, 'set');
    return d(e, i, n), n;
}
function c(e, t, n) {
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
    v = new WeakMap(),
    y = new WeakMap(),
    I = new WeakMap(),
    b = new WeakMap();
class T {
    constructor(e, t, n) {
        if (
            (r(this, f, {
                writable: !0,
                value: void 0
            }),
            r(this, _, {
                writable: !0,
                value: void 0
            }),
            r(this, p, {
                writable: !0,
                value: void 0
            }),
            r(this, h, {
                writable: !0,
                value: void 0
            }),
            r(this, m, {
                writable: !0,
                value: void 0
            }),
            r(this, g, {
                writable: !0,
                value: (e, t, n) => {
                    var i, r;
                    if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
                    let a = n.backend(e, t, n.options),
                        s = n.id,
                        l = !n.id && a && a.constructor;
                    if ((l && (s = a.constructor.name), s)) l && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                    else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), '\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx'));
                    if (o(this, p)[s]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), ' (conflicts with: ').concat(JSON.stringify(o(this, p)[s]), ')'));
                    return {
                        id: s,
                        instance: a,
                        preview: null !== (i = n.preview) && void 0 !== i && i,
                        transition: n.transition,
                        skipDispatchOnTransition: null !== (r = n.skipDispatchOnTransition) && void 0 !== r && r
                    };
                }
            }),
            s(this, 'setup', () => {
                if ('undefined' != typeof window) {
                    if (T.isSetUp) throw Error('Cannot have two MultiBackends at the same time.');
                    (T.isSetUp = !0), o(this, E).call(this, window), o(this, p)[o(this, f)].instance.setup();
                }
            }),
            s(this, 'teardown', () => {
                'undefined' != typeof window && ((T.isSetUp = !1), o(this, v).call(this, window), o(this, p)[o(this, f)].instance.teardown());
            }),
            s(this, 'connectDragSource', (e, t, n) => o(this, b).call(this, 'connectDragSource', e, t, n)),
            s(this, 'connectDragPreview', (e, t, n) => o(this, b).call(this, 'connectDragPreview', e, t, n)),
            s(this, 'connectDropTarget', (e, t, n) => o(this, b).call(this, 'connectDropTarget', e, t, n)),
            s(this, 'profile', () => o(this, p)[o(this, f)].instance.profile()),
            s(this, 'previewEnabled', () => o(this, p)[o(this, f)].preview),
            s(this, 'previewsList', () => o(this, _)),
            s(this, 'backendsList', () => o(this, h)),
            r(this, E, {
                writable: !0,
                value: (e) => {
                    o(this, h).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, o(this, y));
                    });
                }
            }),
            r(this, v, {
                writable: !0,
                value: (e) => {
                    o(this, h).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, o(this, y));
                    });
                }
            }),
            r(this, y, {
                writable: !0,
                value: (e) => {
                    let t = o(this, f);
                    if ((o(this, h).some((t) => !!(t.id !== o(this, f) && t.transition && t.transition.check(e)) && (u(this, f, t.id), !0)), o(this, f) !== t)) {
                        var n;
                        o(this, p)[t].instance.teardown(),
                            Object.keys(o(this, m)).forEach((e) => {
                                let t = o(this, m)[e];
                                t.unsubscribe(), (t.unsubscribe = o(this, I).call(this, t.func, ...t.args));
                            }),
                            o(this, _).backendChanged(this);
                        let i = o(this, p)[o(this, f)];
                        if ((i.instance.setup(), i.skipDispatchOnTransition)) return;
                        let r = new e.constructor(e.type, e);
                        null === (n = e.target) || void 0 === n || n.dispatchEvent(r);
                    }
                }
            }),
            r(this, I, {
                writable: !0,
                value: (e, t, n, i) => o(this, p)[o(this, f)].instance[e](t, n, i)
            }),
            r(this, b, {
                writable: !0,
                value: (e, t, n, i) => {
                    let r = ''.concat(e, '_').concat(t),
                        a = o(this, I).call(this, e, t, n, i);
                    return (
                        (o(this, m)[r] = {
                            func: e,
                            args: [t, n, i],
                            unsubscribe: a
                        }),
                        () => {
                            o(this, m)[r].unsubscribe(), delete o(this, m)[r];
                        }
                    );
                }
            }),
            !n || !n.backends || n.backends.length < 1)
        )
            throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
        u(this, _, new i.J()),
            u(this, p, {}),
            u(this, h, []),
            n.backends.forEach((n) => {
                let i = o(this, g).call(this, e, t, n);
                (o(this, p)[i.id] = i), o(this, h).push(i);
            }),
            u(this, f, o(this, h)[0].id),
            u(this, m, {});
    }
}
s(T, 'isSetUp', !1);
