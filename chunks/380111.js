i.d(e, {
    A: () => h,
});
var s = i(364298),
    n = i(852431);

function r(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
let a = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"],
    h = class {
        checkBounds() {
            this.x > this.offscreenX
                ? (this.x = -this.size)
                : this.y > this.offscreenY
                  ? (this.y = -this.size)
                  : this.x < -this.size
                    ? (this.x = this.offscreenX)
                    : this.y < -this.size && (this.y = this.offscreenY);
        }
        update(t, e) {
            this.checkBounds(), (this.y += e * this.positionMultiplier), (this.x += t * this.positionMultiplier);
        }
        render(t, e) {
            t.beginPath(),
                (t.globalAlpha = (e * this.depth) / 4),
                t.arc(this.x, this.y, this.size, 0, n.JM, !0),
                (t.fillStyle = this.color),
                t.fill(),
                (t.globalAlpha = 1);
        }
        constructor() {
            r(this, "size", (0, s.R)(2, 3)),
                r(this, "depth", (0, s.R)(1, 4)),
                r(this, "positionMultiplier", this.depth / 4),
                r(this, "color", a[4 - this.depth]),
                r(this, "offscreenX", 1e3 + this.size),
                r(this, "offscreenY", 1e3 + this.size),
                r(this, "x", (0, s.R)(-this.size, this.offscreenX)),
                r(this, "y", (0, s.R)(-this.size, this.offscreenY));
        }
    };
