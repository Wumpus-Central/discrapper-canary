n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120),
    n(653041);
var i = n(836560),
    s = n(358085),
    r = n(998502),
    a = n(13140),
    l = n(981631);
let o = [],
    c = (e, t, n) => {
        let i = (0, s.isWindows)() ? 0 : 1;
        if (e !== l.MoX.MOUSE_BUTTON || n !== i) o.forEach((i) => i._handleEvent(e, t, n));
    };
class d extends i.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (o = o.filter((e) => e !== this)).length && r.ZP.setOnInputEventCallback(null);
    }
    toString() {
        return (0, a.BB)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [i, s] = t;
                  return !(i === e && s === n);
              }))
            : (this.combo.push([e, n, (0, a.dU)()]), this.emit('change', this));
    }
    constructor() {
        var e, t, n;
        super(),
            (e = this),
            (n = []),
            (t = 'combo') in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n),
            o.push(this),
            1 === o.length && r.ZP.setOnInputEventCallback(c);
    }
}
