n.d(t, {
    Ah: () => f,
    EG: () => _,
    EH: () => d,
    Vo: () => p,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(143236),
    s = n(444927),
    o = n(203982);

function l(e, t, n) {
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
class c {
    subscribe(e, t) {
        o._.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        o._.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) o._.resubscribe(e, t);
    }
    constructor() {
        l(this, "emitter", new a.EventEmitter());
    }
}
class u {
    subscribe(e, t) {
        o._.subscribe(e, t);
    }
    unsubscribe(e, t) {
        o._.unsubscribe(e, t);
    }
    bumpDispatchPriority() {}
}
let d = i.createContext(new u()),
    f = i.forwardRef(function (e, t) {
        let { children: n } = e,
            a = (0, s.A)(() => new c());
        return (
            i.useImperativeHandle(t, () => a, [a]),
            (0, r.jsx)(d.Provider, {
                value: a,
                children: n,
            })
        );
    });

function p(e) {
    let { event: t, handler: n } = e,
        r = i.useContext(d),
        a = i.useRef(n);
    i.useEffect(() => {
        a.current = n;
    }, [n]);
    let s = null == n;
    return (
        i.useEffect(() => {
            if (s) return;
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
        }, [r, t, s]),
        null
    );
}

function _(e) {
    return p(e), null;
}
