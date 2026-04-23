"use strict";
n.d(t, { Ah: () => c, EG: () => _, EH: () => u, Vo: () => d });
var r = n(627968),
    i = n(64700),
    s = n(143236),
    a = n(444927),
    o = n(203982);
class l {
    emitter = new s.EventEmitter();
    subscribe(e, t) {
        o._.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        o._.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) o._.resubscribe(e, t);
    }
}
let u = i.createContext(
        new (class {
            subscribe(e, t) {
                o._.subscribe(e, t);
            }
            unsubscribe(e, t) {
                o._.unsubscribe(e, t);
            }
            bumpDispatchPriority() {}
        })(),
    ),
    c = i.forwardRef(function (e, t) {
        let { children: n } = e,
            s = (0, a.A)(() => new l());
        return i.useImperativeHandle(t, () => s, [s]), (0, r.jsx)(u.Provider, { value: s, children: n });
    });
function d(e) {
    let { event: t, handler: n } = e,
        r = i.useContext(u),
        s = i.useRef(n);
    i.useEffect(() => {
        s.current = n;
    }, [n]);
    let a = null == n;
    return (
        i.useEffect(() => {
            if (a) return;
            let e = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                s.current?.(...t);
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
function _(e) {
    return d(e), null;
}
