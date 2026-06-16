"use strict";
n.d(t, { Ah: () => c, EG: () => m, EH: () => u, Vo: () => d });
var l = n(627968),
    i = n(64700),
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
            r = (0, s.A)(() => new o());
        return i.useImperativeHandle(t, () => r, [r]), (0, l.jsx)(u.Provider, { value: r, children: n });
    });
function d(e) {
    let { event: t, handler: n } = e,
        l = i.useContext(u),
        r = i.useRef(n);
    i.useEffect(() => {
        r.current = n;
    }, [n]);
    let s = null == n;
    return (
        i.useEffect(() => {
            if (s) return;
            let e = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                r.current?.(...t);
            };
            return (
                l.subscribe(t, e),
                () => {
                    l.unsubscribe(t, e);
                }
            );
        }, [l, t, s]),
        null
    );
}
function m(e) {
    return d(e), null;
}
