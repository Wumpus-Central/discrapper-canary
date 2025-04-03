i.d(e, { Z: () => h });
var s = i(684827),
    n = i(898625);
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
    updateStatic() {
        (this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count)), (this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count)), (this.x = this.targetX), (this.y = this.targetY);
    }
    update(t) {
        let e, i;
        if ((this.speedUp > 0 ? ((this.speedUp = Math.max(0, this.speedUp - t)), (this.count += t * (10 * Math.min(this.speedUp, 1) + 0.4))) : (this.count += 0.4 * t), (e = (0, s.B)(this.targetX, this.x, this.velX, this.spring)), (i = (0, s.B)(this.targetY, this.y, this.velY, this.spring)), (this.velX += e * t), (this.velY += i * t), this.oscillate)) {
            let n = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                a = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
            (e = (0, s.B)(n, this.x, this.velX, this.spring)), (i = (0, s.B)(a, this.y, this.velY, this.spring)), (this.velX += e * t), (this.velY += i * t);
        }
        (this.x += this.velX * t), (this.y += this.velY * t);
    }
    render(t) {
        (t.fillStyle = '#fff'), t.fillRect(this.x, this.y, 4, 4);
    }
    constructor(t) {
        a(this, 'x', -40),
            a(this, 'y', -40),
            a(this, 'targetX', 0),
            a(this, 'targetY', 0),
            a(this, 'oscillate', !0),
            a(this, 'velX', 0),
            a(this, 'velY', 0),
            a(this, 'angle', 0),
            a(this, 'speedUp', 1.5),
            a(this, 'waveRange', 60),
            a(this, 'count', void 0),
            a(this, 'index', void 0),
            a(this, 'spring', {
                friction: 15,
                tension: n.O1
            }),
            (this.index = t),
            (this.spring.tension = n.O1 * Math.max(0.1, t / 7) + n.O1),
            (this.count = -2.15 * t);
    }
};
