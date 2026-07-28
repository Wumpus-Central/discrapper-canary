"use strict";
n.d(t, { Ah: () => c, EG: () => _, EH: () => d, Vo: () => u });
var i = n(477900),
    r = n(582128),
    a = n(143236),
    s = n(444927),
    l = n(625494);
class o {
    emitter = new a.EventEmitter();
    subscribe(e, t) {
        l._.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        l._.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) l._.resubscribe(e, t);
    }
}
let d = r.createContext(
        new (class {
            subscribe(e, t) {
                l._.subscribe(e, t);
            }
            unsubscribe(e, t) {
                l._.unsubscribe(e, t);
            }
            bumpDispatchPriority() {}
        })(),
    ),
    c = r.forwardRef(function (e, t) {
        let { children: n } = e,
            a = (0, s.A)(() => new o());
        return r.useImperativeHandle(t, () => a, [a]), (0, i.jsx)(d.Provider, { value: a, children: n });
    });
function u(e) {
    let { event: t, handler: n } = e,
        i = r.useContext(d),
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
function _(e) {
    return u(e), null;
}
