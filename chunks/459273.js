n.d(t, {
    I3: () => f,
    d9: () => p,
    oo: () => d,
    yp: () => _
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(836560),
    s = n(211266),
    o = n(585483);
function l(e, t, n) {
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
class u {
    subscribe(e, t) {
        o.S.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        o.S.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) o.S.resubscribe(e, t);
    }
    constructor() {
        l(this, 'emitter', new a.EventEmitter());
    }
}
class c {
    subscribe(e, t) {
        o.S.subscribe(e, t);
    }
    unsubscribe(e, t) {
        o.S.unsubscribe(e, t);
    }
    bumpDispatchPriority() {}
}
let d = r.createContext(new c()),
    f = r.forwardRef(function (e, t) {
        let { children: n } = e,
            a = (0, s.Z)(() => new u());
        return (
            r.useImperativeHandle(t, () => a, [a]),
            (0, i.jsx)(d.Provider, {
                value: a,
                children: n
            })
        );
    });
function _(e) {
    let { event: t, handler: n } = e,
        i = r.useContext(d),
        a = r.useRef(n);
    r.useEffect(() => {
        a.current = n;
    }, [n]);
    let s = null == n;
    return (
        r.useEffect(() => {
            if (s) return;
            let e = function () {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                null === (e = a.current) || void 0 === e || e.call(a, ...n);
            };
            return (
                i.subscribe(t, e),
                () => {
                    i.unsubscribe(t, e);
                }
            );
        }, [i, t, s]),
        null
    );
}
function p(e) {
    return _(e), null;
}
