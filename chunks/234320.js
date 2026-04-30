n.d(t, { Ah: () => d, EG: () => h, EH: () => u, Vo: () => c });
var i = n(627968),
    l = n(64700),
    r = n(143236),
    s = n(444927),
    a = n(625494);
class o {
    emitter = new r.EventEmitter();
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
let u = l.createContext(
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
    d = l.forwardRef(function (e, t) {
        let { children: n } = e,
            r = (0, s.A)(() => new o());
        return l.useImperativeHandle(t, () => r, [r]), (0, i.jsx)(u.Provider, { value: r, children: n });
    });
function c(e) {
    let { event: t, handler: n } = e,
        i = l.useContext(u),
        r = l.useRef(n);
    l.useEffect(() => {
        r.current = n;
    }, [n]);
    let s = null == n;
    return (
        l.useEffect(() => {
            if (s) return;
            let e = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                r.current?.(...t);
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
function h(e) {
    return c(e), null;
}
