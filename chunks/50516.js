e.d(i, { Z: () => a });
var s = e(684827),
    n = e(898625);
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
    updateStatic() {
        (this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count)), (this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count)), (this.x = this.targetX), (this.y = this.targetY);
    }
    update(t) {
        let i, e;
        if ((this.speedUp > 0 ? ((this.speedUp = Math.max(0, this.speedUp - t)), (this.count += t * (10 * Math.min(this.speedUp, 1) + 0.4))) : (this.count += 0.4 * t), (i = (0, s.B)(this.targetX, this.x, this.velX, this.spring)), (e = (0, s.B)(this.targetY, this.y, this.velY, this.spring)), (this.velX += i * t), (this.velY += e * t), this.oscillate)) {
            let n = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                h = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
            (i = (0, s.B)(n, this.x, this.velX, this.spring)), (e = (0, s.B)(h, this.y, this.velY, this.spring)), (this.velX += i * t), (this.velY += e * t);
        }
        (this.x += this.velX * t), (this.y += this.velY * t);
    }
    render(t) {
        (t.fillStyle = '#fff'), t.fillRect(this.x, this.y, 4, 4);
    }
    constructor(t) {
        h(this, 'x', -40),
            h(this, 'y', -40),
            h(this, 'targetX', 0),
            h(this, 'targetY', 0),
            h(this, 'oscillate', !0),
            h(this, 'velX', 0),
            h(this, 'velY', 0),
            h(this, 'angle', 0),
            h(this, 'speedUp', 1.5),
            h(this, 'waveRange', 60),
            h(this, 'count', void 0),
            h(this, 'index', void 0),
            h(this, 'spring', {
                friction: 15,
                tension: n.O1
            }),
            (this.index = t),
            (this.spring.tension = n.O1 * Math.max(0.1, t / 7) + n.O1),
            (this.count = -2.15 * t);
    }
};
