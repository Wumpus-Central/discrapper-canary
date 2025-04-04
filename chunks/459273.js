n.d(t, {
    I3: () => f,
    d9: () => p,
    oo: () => d,
    yp: () => _
}),
    n(47120),
    n(411104);
var r = n(200651),
    i = n(192379),
    o = n(836560),
    a = n(211266),
    s = n(585483);
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
class c {
    subscribe(e, t) {
        s.S.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        s.S.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) s.S.resubscribe(e, t);
    }
    constructor() {
        l(this, 'emitter', new o.EventEmitter());
    }
}
class u {
    subscribe(e, t) {
        s.S.subscribe(e, t);
    }
    unsubscribe(e, t) {
        s.S.unsubscribe(e, t);
    }
    bumpDispatchPriority() {}
}
let d = i.createContext(new u()),
    f = i.forwardRef(function (e, t) {
        let { children: n } = e,
            o = (0, a.Z)(() => new c());
        return (
            i.useImperativeHandle(t, () => o, [o]),
            (0, r.jsx)(d.Provider, {
                value: o,
                children: n
            })
        );
    });
function _(e) {
    let { event: t, handler: n } = e,
        r = i.useContext(d),
        o = i.useRef(n);
    i.useEffect(() => {
        o.current = n;
    }, [n]);
    let a = null == n;
    return (
        i.useEffect(() => {
            if (a) return;
            let e = function () {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                null == (e = o.current) || e.call(o, ...n);
            };
            return (
                r.subscribe(t, e),
                () => {
                    r.unsubscribe(t, e);
                }
            );
        }, [r, t, a]),
        null
    );
}
function p(e) {
    return _(e), null;
}
