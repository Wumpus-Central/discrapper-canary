"use strict";
n.d(t, { Ah: () => u, EG: () => h, EH: () => c, Vo: () => d });
var i = n(627968),
    l = n(64700),
    s = n(143236),
    r = n(444927),
    a = n(203982);
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
let c = l.createContext(
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
    u = l.forwardRef(function (e, t) {
        let { children: n } = e,
            s = (0, r.A)(() => new o());
        return l.useImperativeHandle(t, () => s, [s]), (0, i.jsx)(c.Provider, { value: s, children: n });
    });
function d(e) {
    let { event: t, handler: n } = e,
        i = l.useContext(c),
        s = l.useRef(n);
    l.useEffect(() => {
        s.current = n;
    }, [n]);
    let r = null == n;
    return (
        l.useEffect(() => {
            if (r) return;
            let e = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                s.current?.(...t);
            };
            return (
                i.subscribe(t, e),
                () => {
                    i.unsubscribe(t, e);
                }
            );
        }, [i, t, r]),
        null
    );
}
function h(e) {
    return d(e), null;
}
