function s(t, e) {
    return Math.max(Math.min((t - e) / 30, 1), -1);
}
i.d(e, { A: () => n });
let n = class {
    resistance = 0.98;
    px = 0;
    py = 0;
    x = 0;
    y = 0;
    forceX = 0;
    forceY = 0;
    initialize() {
        window.addEventListener("mousemove", this.handleMouseMove);
    }
    terminate() {
        window.removeEventListener("mousemove", this.handleMouseMove);
    }
    handleMouseMove = (t) => {
        let { clientX: e, clientY: i } = t;
        (this.x = e), (this.y = i);
    };
    update() {
        this.x !== this.px &&
            this.y !== this.py &&
            ((this.forceX += s(this.x, this.px)),
            (this.forceY += s(this.y, this.py)),
            (this.px = this.x),
            (this.py = this.y)),
            0 !== this.forceX && (this.forceX = this.forceX * this.resistance),
            0 !== this.forceY && (this.forceY = this.forceY * this.resistance);
    }
    render() {}
};
