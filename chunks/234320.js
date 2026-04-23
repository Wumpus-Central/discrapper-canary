n.d(t, { Ah: () => E, EG: () => c, EH: () => o, Vo: () => d });
var i = n(627968),
    r = n(64700),
    a = n(143236),
    s = n(444927),
    _ = n(625494);
class l {
    emitter = new a.EventEmitter();
    subscribe(e, t) {
        _._.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        _._.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) _._.resubscribe(e, t);
    }
}
let o = r.createContext(
        new (class {
            subscribe(e, t) {
                _._.subscribe(e, t);
            }
            unsubscribe(e, t) {
                _._.unsubscribe(e, t);
            }
            bumpDispatchPriority() {}
        })(),
    ),
    E = r.forwardRef(function (e, t) {
        let { children: n } = e,
            a = (0, s.A)(() => new l());
        return r.useImperativeHandle(t, () => a, [a]), (0, i.jsx)(o.Provider, { value: a, children: n });
    });
function d(e) {
    let { event: t, handler: n } = e,
        i = r.useContext(o),
        a = r.useRef(n);
    r.useEffect(() => {
        a.current = n;
    }, [n]);
    let s = null == n;
    return (
        r.useEffect(() => {
            if (s) return;
            let e = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                a.current?.(...t);
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
function c(e) {
    return d(e), null;
}
