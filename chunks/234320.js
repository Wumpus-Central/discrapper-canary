n.d(t, { Ah: () => c, EG: () => h, EH: () => u, Vo: () => d });
var l = n(477900),
    i = n(582128),
    s = n(143236),
    r = n(444927),
    a = n(625494);
class o {
    emitter = new s.EventEmitter();
    subscribe(e, t) {
        a._.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        a._.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) a._.resubscribe(e, t);
    }
}
let u = i.createContext(
        new (class {
            subscribe(e, t) {
                a._.subscribe(e, t);
            }
            unsubscribe(e, t) {
                a._.unsubscribe(e, t);
            }
            bumpDispatchPriority() {}
        })(),
    ),
    c = i.forwardRef(function (e, t) {
        let { children: n } = e,
            s = (0, r.A)(() => new o());
        return i.useImperativeHandle(t, () => s, [s]), (0, l.jsx)(u.Provider, { value: s, children: n });
    });
function d(e) {
    let { event: t, handler: n } = e,
        l = i.useContext(u),
        s = i.useRef(n);
    i.useEffect(() => {
        s.current = n;
    }, [n]);
    let r = null == n;
    return (
        i.useEffect(() => {
            if (r) return;
            let e = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                s.current?.(...t);
            };
            return (
                l.subscribe(t, e),
                () => {
                    l.unsubscribe(t, e);
                }
            );
        }, [l, t, r]),
        null
    );
}
function h(e) {
    return d(e), null;
}
