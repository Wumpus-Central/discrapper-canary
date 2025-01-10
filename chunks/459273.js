r.d(n, {
    I3: function () {
        return p;
    },
    d9: function () {
        return g;
    },
    oo: function () {
        return h;
    },
    yp: function () {
        return m;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(200651),
    o = r(192379),
    l = r(836560);
var u = r(211266),
    c = r(585483);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class f {
    subscribe(e, n) {
        c.S.subscribe(e, n), this.emitter.on(e, n);
    }
    unsubscribe(e, n) {
        c.S.unsubscribe(e, n), this.emitter.off(e, n);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let n of this.emitter.listeners(e)) c.S.resubscribe(e, n);
    }
    constructor() {
        d(this, 'emitter', new l.EventEmitter());
    }
}
class _ {
    subscribe(e, n) {
        c.S.subscribe(e, n);
    }
    unsubscribe(e, n) {
        c.S.unsubscribe(e, n);
    }
    bumpDispatchPriority() {}
}
let h = o.createContext(new _()),
    p = o.forwardRef(function (e, n) {
        let { children: r } = e,
            i = (0, u.Z)(() => new f());
        return (
            o.useImperativeHandle(n, () => i, [i]),
            (0, s.jsx)(h.Provider, {
                value: i,
                children: r
            })
        );
    });
function m(e) {
    let { event: n, handler: r } = e,
        i = o.useContext(h),
        a = o.useRef(r);
    o.useEffect(() => {
        a.current = r;
    }, [r]);
    let s = null == r;
    return (
        o.useEffect(() => {
            if (s) return;
            let e = function () {
                for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                null === (e = a.current) || void 0 === e || e.call(a, ...r);
            };
            return (
                i.subscribe(n, e),
                () => {
                    i.unsubscribe(n, e);
                }
            );
        }, [i, n, s]),
        null
    );
}
function g(e) {
    return m(e), null;
}
