e.d(i, { Z: () => a }), e(653041);
var s = e(342412),
    n = e(722734);
function h(t, i, e) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = e),
        t
    );
}
let a = class {
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
        0 !== this.particles.length && (!this.isFilled && this.alpha < 1 ? (this.alpha = Math.min(1, this.alpha + t)) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * t)), this.wind.update(), this.particles.forEach((i) => i.update(10 * this.wind.forceX * t, 10 * Math.min(this.wind.forceY, -0.001) * t + -0.1)));
    }
    render(t) {
        0 !== this.particles.length && (t.save(), (t.globalCompositeOperation = 'source-atop'), this.particles.forEach((i) => i.render(t, this.alpha)), t.restore());
    }
    fill() {
        this.isFilled = !0;
    }
    constructor() {
        h(this, 'particles', []), h(this, 'wind', new n.Z()), h(this, 'alpha', 0), h(this, 'isFilled', !1), h(this, 'loadInTimer', null);
    }
};
