n.d(t, { Z: () => d }), n(388685), n(539854);
var r = n(836560),
    i = n(358085),
    a = n(998502),
    o = n(13140),
    s = n(295907);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = [],
    u = (e, t, n) => {
        let r = +!(0, i.isWindows)();
        (e !== s.Mo.MOUSE_BUTTON || n !== r) && c.forEach((r) => r._handleEvent(e, t, n));
    };
class d extends r.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (c = c.filter((e) => e !== this)).length && a.ZP.setOnInputEventCallback(null);
    }
    toString() {
        return (0, o.BB)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [r, i] = t;
                  return r !== e || i !== n;
              }))
            : (this.combo.push([e, n, (0, o.dU)()]), this.emit("change", this));
    }
    constructor() {
        super(), l(this, "combo", []), c.push(this), 1 === c.length && a.ZP.setOnInputEventCallback(u);
    }
}
