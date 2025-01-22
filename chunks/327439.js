r.d(n, {
    T: function () {
        return S;
    }
});
var i = r(313694);
function a(e, n, r) {
    o(e, n), n.set(e, r);
}
function o(e, n) {
    if (n.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function l(e, n) {
    var r = d(e, n, 'get');
    return u(e, r);
}
function u(e, n) {
    return n.get ? n.get.call(e) : n.value;
}
function c(e, n, r) {
    var i = d(e, n, 'set');
    return f(e, i, r), r;
}
function d(e, n, r) {
    if (!n.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
    return n.get(e);
}
function f(e, n, r) {
    if (n.set) n.set.call(e, r);
    else {
        if (!n.writable) throw TypeError('attempted to set read only private field');
        n.value = r;
    }
}
var p = new WeakMap(),
    h = new WeakMap(),
    _ = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap(),
    E = new WeakMap(),
    v = new WeakMap(),
    y = new WeakMap(),
    b = new WeakMap(),
    I = new WeakMap(),
    T = new WeakMap();
class S {
    constructor(e, n, r) {
        if (
            (a(this, p, {
                writable: !0,
                value: void 0
            }),
            a(this, h, {
                writable: !0,
                value: void 0
            }),
            a(this, _, {
                writable: !0,
                value: void 0
            }),
            a(this, m, {
                writable: !0,
                value: void 0
            }),
            a(this, g, {
                writable: !0,
                value: void 0
            }),
            a(this, E, {
                writable: !0,
                value: (e, n, r) => {
                    var i, a;
                    if (!r.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(r)));
                    let o = r.backend(e, n, r.options),
                        s = r.id,
                        u = !r.id && o && o.constructor;
                    if ((u && (s = o.constructor.name), s)) u && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
                    else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(r), '\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx'));
                    if (l(this, _)[s]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(r), ' (conflicts with: ').concat(JSON.stringify(l(this, _)[s]), ')'));
                    return {
                        id: s,
                        instance: o,
                        preview: null !== (i = r.preview) && void 0 !== i && i,
                        transition: r.transition,
                        skipDispatchOnTransition: null !== (a = r.skipDispatchOnTransition) && void 0 !== a && a
                    };
                }
            }),
            s(this, 'setup', () => {
                if ('undefined' != typeof window) {
                    if (S.isSetUp) throw Error('Cannot have two MultiBackends at the same time.');
                    (S.isSetUp = !0), l(this, v).call(this, window), l(this, _)[l(this, p)].instance.setup();
                }
            }),
            s(this, 'teardown', () => {
                if ('undefined' != typeof window) (S.isSetUp = !1), l(this, y).call(this, window), l(this, _)[l(this, p)].instance.teardown();
            }),
            s(this, 'connectDragSource', (e, n, r) => l(this, T).call(this, 'connectDragSource', e, n, r)),
            s(this, 'connectDragPreview', (e, n, r) => l(this, T).call(this, 'connectDragPreview', e, n, r)),
            s(this, 'connectDropTarget', (e, n, r) => l(this, T).call(this, 'connectDropTarget', e, n, r)),
            s(this, 'profile', () => l(this, _)[l(this, p)].instance.profile()),
            s(this, 'previewEnabled', () => l(this, _)[l(this, p)].preview),
            s(this, 'previewsList', () => l(this, h)),
            s(this, 'backendsList', () => l(this, m)),
            a(this, v, {
                writable: !0,
                value: (e) => {
                    l(this, m).forEach((n) => {
                        n.transition && e.addEventListener(n.transition.event, l(this, b));
                    });
                }
            }),
            a(this, y, {
                writable: !0,
                value: (e) => {
                    l(this, m).forEach((n) => {
                        n.transition && e.removeEventListener(n.transition.event, l(this, b));
                    });
                }
            }),
            a(this, b, {
                writable: !0,
                value: (e) => {
                    let n = l(this, p);
                    if ((l(this, m).some((n) => !!(n.id !== l(this, p) && n.transition && n.transition.check(e)) && (c(this, p, n.id), !0)), l(this, p) !== n)) {
                        var r;
                        l(this, _)[n].instance.teardown(),
                            Object.keys(l(this, g)).forEach((e) => {
                                let n = l(this, g)[e];
                                n.unsubscribe(), (n.unsubscribe = l(this, I).call(this, n.func, ...n.args));
                            }),
                            l(this, h).backendChanged(this);
                        let i = l(this, _)[l(this, p)];
                        if ((i.instance.setup(), i.skipDispatchOnTransition)) return;
                        let a = new e.constructor(e.type, e);
                        null === (r = e.target) || void 0 === r || r.dispatchEvent(a);
                    }
                }
            }),
            a(this, I, {
                writable: !0,
                value: (e, n, r, i) => l(this, _)[l(this, p)].instance[e](n, r, i)
            }),
            a(this, T, {
                writable: !0,
                value: (e, n, r, i) => {
                    let a = ''.concat(e, '_').concat(n),
                        o = l(this, I).call(this, e, n, r, i);
                    return (
                        (l(this, g)[a] = {
                            func: e,
                            args: [n, r, i],
                            unsubscribe: o
                        }),
                        () => {
                            l(this, g)[a].unsubscribe(), delete l(this, g)[a];
                        }
                    );
                }
            }),
            !r || !r.backends || r.backends.length < 1)
        )
            throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
        c(this, h, new i.J()),
            c(this, _, {}),
            c(this, m, []),
            r.backends.forEach((r) => {
                let i = l(this, E).call(this, e, n, r);
                (l(this, _)[i.id] = i), l(this, m).push(i);
            }),
            c(this, p, l(this, m)[0].id),
            c(this, g, {});
    }
}
s(S, 'isSetUp', !1);
