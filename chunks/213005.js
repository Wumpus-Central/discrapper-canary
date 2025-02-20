n.d(t, { Z: () => h }), n(47120), n(653041);
var i = n(836560),
    s = n(358085),
    r = n(998502),
    l = n(13140),
    o = n(981631);
let a = [],
    d = (e, t, n) => {
        let i = +!(0, s.isWindows)();
        (e !== o.MoX.MOUSE_BUTTON || n !== i) && a.forEach((i) => i._handleEvent(e, t, n));
    };
class h extends i.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (a = a.filter((e) => e !== this)).length && r.ZP.setOnInputEventCallback(null);
    }
    toString() {
        return (0, l.BB)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [i, s] = t;
                  return i !== e || s !== n;
              }))
            : (this.combo.push([e, n, (0, l.dU)()]), this.emit('change', this));
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
            a.push(this),
            1 === a.length && r.ZP.setOnInputEventCallback(d);
    }
}
