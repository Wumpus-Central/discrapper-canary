i.d(e, { Z: () => h }), i(653041);
var s = i(342412),
    n = i(722734);
function a(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let h = class {
    initialize() {
        (this.particles = []),
            this.wind.initialize(),
            (this.loadInTimer = setTimeout(() => {
                for (let t = 0; t < 75; t++) this.particles.push(new s.Z());
            }, 250));
    }
    terminate() {
        (this.particles = []), this.wind.terminate(), null != this.loadInTimer && clearTimeout(this.loadInTimer);
    }
    update(t) {
        0 !== this.particles.length && (!this.isFilled && this.alpha < 1 ? (this.alpha = Math.min(1, this.alpha + t)) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * t)), this.wind.update(), this.particles.forEach((e) => e.update(10 * this.wind.forceX * t, 10 * Math.min(this.wind.forceY, -0.001) * t + -0.1)));
    }
    render(t) {
        0 !== this.particles.length && (t.save(), (t.globalCompositeOperation = 'source-atop'), this.particles.forEach((e) => e.render(t, this.alpha)), t.restore());
    }
    fill() {
        this.isFilled = !0;
    }
    constructor() {
        a(this, 'particles', []), a(this, 'wind', new n.Z()), a(this, 'alpha', 0), a(this, 'isFilled', !1), a(this, 'loadInTimer', null);
    }
};
