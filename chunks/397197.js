i.d(e, { A: () => a });
var s = i(364298),
    n = i(889135);
let a = class {
    img = null;
    loaded = !1;
    isFilled = !1;
    alpha = 0;
    mx = 0;
    my = 0;
    x = 0;
    y = 0;
    velX = 0;
    velY = 0;
    targetX = 40;
    targetY = 40;
    spring = { friction: 60, tension: 100 };
    initialize() {
        (this.img = new Image()),
            (this.img.onload = () => {
                this.loaded = !0;
            }),
            (this.img.src = n),
            this.bind();
    }
    bind() {
        window.addEventListener("mousemove", this.handleMouseMove, !1);
    }
    unbind() {
        window.removeEventListener("mousemove", this.handleMouseMove, !1);
    }
    terminate() {
        (this.img = null), (this.loaded = !1), (this.isFilled = !1), (this.alpha = 0), this.unbind();
    }
    handleMouseMove = (t) => {
        let { clientX: e, clientY: i } = t;
        (this.targetX = (e / window.innerWidth) * 20 + 20), (this.targetY = (i / window.innerWidth) * 20 + 20);
    };
    update(t) {
        this.loaded &&
            (!this.isFilled && this.alpha < 1
                ? (this.alpha = Math.min(1, this.alpha + t))
                : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * t)),
            (this.velX += (0, s.J)(this.targetX, this.x, this.velX, this.spring) * t),
            (this.velY += (0, s.J)(this.targetY, this.y, this.velY, this.spring) * t),
            (this.x += this.velX * t),
            (this.y += this.velY * t));
    }
    render(t) {
        let { img: e } = this;
        this.loaded &&
            null != e &&
            (t.save(),
            (t.globalCompositeOperation = "source-atop"),
            (t.globalAlpha = this.alpha),
            t.drawImage(e, this.x + 20, this.y + 20),
            t.restore());
    }
    fill() {
        this.isFilled = !0;
    }
};
