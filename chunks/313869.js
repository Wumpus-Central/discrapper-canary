n.d(t, { A: () => u }), n(321073);
var i = n(143236),
    s = n(723702),
    l = n(837921),
    a = n(350535),
    r = n(650583);
let o = [],
    d = (e, t, n) => {
        let i = +!(0, s.isWindows)();
        (e !== r.zY.MOUSE_BUTTON || n !== i) && o.forEach((i) => i._handleEvent(e, t, n));
    };
class u extends i.EventEmitter {
    combo = [];
    constructor() {
        super(), o.push(this), 1 === o.length && l.Ay.setOnInputEventCallback(d);
    }
    destroy() {
        this.removeAllListeners(), 0 === (o = o.filter((e) => e !== this)).length && l.Ay.setOnInputEventCallback(null);
    }
    toString() {
        return (0, a.dI)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [i, s] = t;
                  return i !== e || s !== n;
              }))
            : (this.combo.push([e, n, (0, a._$)()]), this.emit("change", this));
    }
}
