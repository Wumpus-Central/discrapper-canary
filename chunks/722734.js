function s(t, e, i) {
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
function n(t, e) {
    return Math.max(Math.min((t - e) / 30, 1), -1);
}
i.d(e, { Z: () => a });
let a = class {
    initialize() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }
    terminate() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
    update() {
        this.x !== this.px && this.y !== this.py && ((this.forceX += n(this.x, this.px)), (this.forceY += n(this.y, this.py)), (this.px = this.x), (this.py = this.y)), 0 !== this.forceX && (this.forceX = this.forceX * this.resistance), 0 !== this.forceY && (this.forceY = this.forceY * this.resistance);
    }
    render() {}
    constructor() {
        s(this, 'resistance', 0.98),
            s(this, 'px', 0),
            s(this, 'py', 0),
            s(this, 'x', 0),
            s(this, 'y', 0),
            s(this, 'forceX', 0),
            s(this, 'forceY', 0),
            s(this, 'handleMouseMove', (t) => {
                let { clientX: e, clientY: i } = t;
                (this.x = e), (this.y = i);
            });
    }
};
