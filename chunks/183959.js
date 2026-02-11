i.d(e, { A: () => n });
var s = i(364298);
i(852431);
let n = class {
    x = -40;
    y = -40;
    targetX = 0;
    targetY = 0;
    oscillate = !0;
    velX = 0;
    velY = 0;
    angle = 0;
    speedUp = 1.5;
    waveRange = 60;
    count;
    index;
    spring = { friction: 15, tension: 150 };
    constructor(t) {
        (this.index = t), (this.spring.tension = 150 * Math.max(0.1, t / 7) + 150), (this.count = -2.15 * t);
    }
    updateStatic() {
        (this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count)),
            (this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count)),
            (this.x = this.targetX),
            (this.y = this.targetY);
    }
    update(t) {
        let e, i;
        if (
            (this.speedUp > 0
                ? ((this.speedUp = Math.max(0, this.speedUp - t)),
                  (this.count += t * (10 * Math.min(this.speedUp, 1) + 0.4)))
                : (this.count += 0.4 * t),
            (e = (0, s.J)(this.targetX, this.x, this.velX, this.spring)),
            (i = (0, s.J)(this.targetY, this.y, this.velY, this.spring)),
            (this.velX += e * t),
            (this.velY += i * t),
            this.oscillate)
        ) {
            let n = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                a = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
            (e = (0, s.J)(n, this.x, this.velX, this.spring)),
                (i = (0, s.J)(a, this.y, this.velY, this.spring)),
                (this.velX += e * t),
                (this.velY += i * t);
        }
        (this.x += this.velX * t), (this.y += this.velY * t);
    }
    render(t) {
        (t.fillStyle = "#fff"), t.fillRect(this.x, this.y, 4, 4);
    }
};
