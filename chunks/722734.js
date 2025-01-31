function s(t, i, e) {
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
function n(t, i) {
    return Math.max(Math.min((t - i) / 30, 1), -1);
}
e.d(i, { Z: () => h });
let h = class {
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
                let { clientX: i, clientY: e } = t;
                (this.x = i), (this.y = e);
            });
    }
};
