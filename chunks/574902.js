i.d(e, { A: () => m }), i(321073);
var s = i(111956),
    n = i.n(s),
    a = i(319060),
    h = i(240248),
    l = i(406340),
    r = i(364298),
    o = i(852431);
let d = (0, h.xI)(a.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    c = 1 / 60;
function p() {
    return Math.min(Math.max(Math.min(0.8 * window.innerWidth, 0.8 * window.innerHeight), 780), 1e3);
}
class u {
    points = [];
    hasEntered = !1;
    isFilling = !1;
    updateWaveState;
    constructor(t) {
        (this.updateWaveState = t), (this.hasEntered = !1);
        for (let t = 0; t <= 15; t++)
            this.points.push(
                new l.A(
                    (function (t) {
                        return Math.floor(7.5 - Math.floor(Math.abs(t - 7.5)));
                    })(t),
                ),
            );
    }
    initialize() {
        this._resizeWave();
    }
    _resizeWave = () => {
        let t = p();
        this.points.forEach((e, i) => {
            let s = -40 + t * Math.cos(o.JM * ((i / 15) * 0.25 + 0)),
                n = -40 + t * Math.sin(o.JM * ((i / 15) * 0.25 + 0));
            0 !== i ? (n += (0, r.R)(0, 30) - 15) : (s += (0, r.R)(0, 30) - 15),
                (e.targetX = s),
                (e.targetY = n),
                (e.angle = Math.atan2(n, s));
        });
    };
    resizeWave = n()(this._resizeWave, 200);
    emphasize() {
        this.points.forEach((t) => (t.speedUp = 1));
    }
    terminate() {
        this.points = [];
    }
    update(t) {
        0 !== this.points.length &&
            (this.points.forEach((e) => e.update(Math.min(t, c))),
            !this.hasEntered && this.points[0].x > d && ((this.hasEntered = !0), this.updateWaveState(o.go.ENTERED)),
            this.isFilling &&
                this.points[0].x > this.points[0].targetX &&
                ((this.isFilling = !1), this.updateWaveState(o.go.FILLED)));
    }
    render(t) {
        if (0 === this.points.length) return;
        let [e, ...i] = this.points;
        t.save(),
            t.beginPath(),
            t.moveTo(e.x, e.y),
            i.forEach((e, s) => {
                if (null == i[s + 1]) t.quadraticCurveTo(e.x, e.y, e.x, e.y);
                else {
                    let n = (e.x + i[s + 1].x) / 2,
                        a = (e.y + i[s + 1].y) / 2;
                    t.quadraticCurveTo(e.x, e.y, n, a);
                }
            }),
            t.lineTo(0, 0),
            t.closePath(),
            (t.fillStyle = "#000"),
            (t.globalCompositeOperation = "destination-in"),
            t.fill(),
            t.restore();
    }
    fill() {
        let t = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
            e = p() - 140,
            i = (t, e, i, s) => {
                (t.targetX = -40 + e * Math.cos(o.JM * ((i / 15) * 0.25 + 0))),
                    (t.targetY = -40 + e * Math.sin(o.JM * ((i / 15) * 0.25 + 0))),
                    s &&
                        ((t.targetX += (0, r.R)(0, 30) - 15),
                        (t.targetY += (0, r.R)(0, 30) - 15),
                        (t.speedUp = 3),
                        (t.spring.tension = 150 * Math.random() * 0.5 + 150));
            };
        this.points.forEach((t, s) => i(t, e, s, !0)),
            setTimeout(() => {
                this.points.forEach((e, s) => {
                    i(e, t, s, !1);
                    let n = 1 - e.index / 7.5;
                    (e.spring.friction += e.spring.friction + e.spring.friction * n),
                        (e.spring.tension = 105 + 80 * Math.random()),
                        (e.waveRange = 2 * e.waveRange);
                }),
                    (this.isFilling = !0),
                    this.updateWaveState(o.go.FILLING);
            }, 250);
    }
}
let m = u;
