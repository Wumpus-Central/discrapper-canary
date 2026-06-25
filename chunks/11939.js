"use strict";
n.d(t, { Ah: () => c, EG: () => _, EH: () => u, Vo: () => d });
var i = n(627968),
    r = n(64700),
    s = n(143236),
    a = n(444927),
    o = n(625494);
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
let u = r.createContext(
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
    c = r.forwardRef(function (e, t) {
        let { children: n } = e,
            s = (0, a.A)(() => new l());
        return r.useImperativeHandle(t, () => s, [s]), (0, i.jsx)(u.Provider, { value: s, children: n });
    });
function d(e) {
    let { event: t, handler: n } = e,
        i = r.useContext(u),
        s = r.useRef(n);
    r.useEffect(() => {
        s.current = n;
    }, [n]);
    let a = null == n;
    return (
        r.useEffect(() => {
            if (a) return;
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
        }, [i, t, a]),
        null
    );
}
function _(e) {
    return d(e), null;
}
