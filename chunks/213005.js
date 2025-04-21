n.d(t, { Z: () => d }), n(388685), n(539854);
var i = n(836560),
    r = n(358085),
    s = n(998502),
    l = n(13140),
    a = n(981631);
let o = [],
    c = (e, t, n) => {
        let i = +!(0, r.isWindows)();
        (e !== a.MoX.MOUSE_BUTTON || n !== i) && o.forEach((i) => i._handleEvent(e, t, n));
    };
class d extends i.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (o = o.filter((e) => e !== this)).length && s.ZP.setOnInputEventCallback(null);
    }
    toString() {
        return (0, l.BB)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [i, r] = t;
                  return i !== e || r !== n;
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
            o.push(this),
            1 === o.length && s.ZP.setOnInputEventCallback(c);
    }
}
