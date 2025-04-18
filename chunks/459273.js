n.d(t, {
    I3: () => f,
    d9: () => p,
    oo: () => d,
    yp: () => _
}),
    n(388685),
    n(415506);
var r = n(200651),
    i = n(192379),
    a = n(836560),
    o = n(211266),
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
        l(this, 'emitter', new a.EventEmitter());
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
            a = (0, o.Z)(() => new c());
        return (
            i.useImperativeHandle(t, () => a, [a]),
            (0, r.jsx)(d.Provider, {
                value: a,
                children: n
            })
        );
    });
function _(e) {
    let { event: t, handler: n } = e,
        r = i.useContext(d),
        a = i.useRef(n);
    i.useEffect(() => {
        a.current = n;
    }, [n]);
    let o = null == n;
    return (
        i.useEffect(() => {
            if (o) return;
            let e = function () {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                null == (e = a.current) || e.call(a, ...n);
            };
            return (
                r.subscribe(t, e),
                () => {
                    r.unsubscribe(t, e);
                }
            );
        }, [r, t, o]),
        null
    );
}
function p(e) {
    return _(e), null;
}
