i.d(e, { Z: () => h });
var s = i(684827),
    n = i(898625);
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
                t.arc(this.x, this.y, this.size, 0, n.uo, !0),
                (t.fillStyle = this.color),
                t.fill(),
                (t.globalAlpha = 1);
        }
        constructor() {
            r(this, "size", (0, s.M)(2, 3)),
                r(this, "depth", (0, s.M)(1, 4)),
                r(this, "positionMultiplier", this.depth / 4),
                r(this, "color", a[4 - this.depth]),
                r(this, "offscreenX", n.pg + this.size),
                r(this, "offscreenY", n.pg + this.size),
                r(this, "x", (0, s.M)(-this.size, this.offscreenX)),
                r(this, "y", (0, s.M)(-this.size, this.offscreenY));
        }
    };
