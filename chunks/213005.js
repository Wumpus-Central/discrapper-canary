n.d(t, { Z: () => d }), n(47120), n(653041);
var r = n(836560),
    i = n(358085),
    s = n(998502),
    a = n(13140),
    l = n(981631);
let o = [],
    c = (e, t, n) => {
        let r = +!(0, i.isWindows)();
        (e !== l.MoX.MOUSE_BUTTON || n !== r) && o.forEach((r) => r._handleEvent(e, t, n));
    };
class d extends r.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (o = o.filter((e) => e !== this)).length && s.ZP.setOnInputEventCallback(null);
    }
    toString() {
        return (0, a.BB)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [r, i] = t;
                  return r !== e || i !== n;
              }))
            : (this.combo.push([e, n, (0, a.dU)()]), this.emit('change', this));
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
            1 === o.length && s.ZP.setOnInputEventCallback(c);
    }
}
