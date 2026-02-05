"use strict";
n.d(t, { Ah: () => d, EG: () => f, EH: () => c, Vo: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(143236),
    s = n(444927),
    o = n(203982);
class l {
    emitter = new a.EventEmitter();
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
class u {
    subscribe(e, t) {
        o._.subscribe(e, t);
    }
    unsubscribe(e, t) {
        o._.unsubscribe(e, t);
    }
    bumpDispatchPriority() {}
}
let c = i.createContext(new u()),
    d = i.forwardRef(function (e, t) {
        let { children: n } = e,
            a = (0, s.A)(() => new l());
        return i.useImperativeHandle(t, () => a, [a]), (0, r.jsx)(c.Provider, { value: a, children: n });
    });
function _(e) {
    let { event: t, handler: n } = e,
        r = i.useContext(c),
        a = i.useRef(n);
    i.useEffect(() => {
        a.current = n;
    }, [n]);
    let s = null == n;
    return (
        i.useEffect(() => {
            if (s) return;
            let e = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                a.current?.(...t);
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
function f(e) {
    return _(e), null;
}
