n.d(t, {
    A: () => d,
}),
    n(896048),
    n(321073);
var r = n(143236),
    i = n(723702),
    l = n(837921),
    s = n(350535),
    a = n(650583);
let o = [],
    c = (e, t, n) => {
        let r = +!(0, i.isWindows)();
        (e !== a.zY.MOUSE_BUTTON || n !== r) && o.forEach((r) => r._handleEvent(e, t, n));
    };
class d extends r.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (o = o.filter((e) => e !== this)).length && l.Ay.setOnInputEventCallback(null);
    }
    toString() {
        return (0, s.dI)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [r, i] = t;
                  return r !== e || i !== n;
              }))
            : (this.combo.push([e, n, (0, s._$)()]), this.emit("change", this));
    }
    constructor() {
        super(),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "combo", []),
            o.push(this),
            1 === o.length && l.Ay.setOnInputEventCallback(c);
    }
}
