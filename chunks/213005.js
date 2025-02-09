n.d(t, { Z: () => d }), n(47120), n(653041);
var i = n(836560),
    s = n(358085),
    l = n(998502),
    r = n(13140),
    a = n(981631);
let o = [],
    c = (e, t, n) => {
        let i = (0, s.isWindows)() ? 0 : 1;
        (e !== a.MoX.MOUSE_BUTTON || n !== i) && o.forEach((i) => i._handleEvent(e, t, n));
    };
class d extends i.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (o = o.filter((e) => e !== this)).length && l.ZP.setOnInputEventCallback(null);
    }
    toString() {
        return (0, r.BB)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [i, s] = t;
                  return !(i === e && s === n);
              }))
            : (this.combo.push([e, n, (0, r.dU)()]), this.emit('change', this));
    }
    constructor() {
        var e, t;
        super(),
            (t = []),
            (e = 'combo') in this
                ? Object.defineProperty(this, e, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = t),
            o.push(this),
            1 === o.length && l.ZP.setOnInputEventCallback(c);
    }
}
