e.d(i, { Z: () => r });
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
let a = ['#7d8187', '#18191c', '#8fa2df', '#4f545c'],
    r = class {
        checkBounds() {
            this.x > this.offscreenX ? (this.x = -this.size) : this.y > this.offscreenY ? (this.y = -this.size) : this.x < -this.size ? (this.x = this.offscreenX) : this.y < -this.size && (this.y = this.offscreenY);
        }
        update(t, i) {
            this.checkBounds(), (this.y += i * this.positionMultiplier), (this.x += t * this.positionMultiplier);
        }
        render(t, i) {
            t.beginPath(), (t.globalAlpha = (i * this.depth) / 4), t.arc(this.x, this.y, this.size, 0, n.uo, !0), (t.fillStyle = this.color), t.fill(), (t.globalAlpha = 1);
        }
        constructor() {
            h(this, 'size', (0, s.M)(2, 3)), h(this, 'depth', (0, s.M)(1, 4)), h(this, 'positionMultiplier', this.depth / 4), h(this, 'color', a[4 - this.depth]), h(this, 'offscreenX', n.pg + this.size), h(this, 'offscreenY', n.pg + this.size), h(this, 'x', (0, s.M)(-this.size, this.offscreenX)), h(this, 'y', (0, s.M)(-this.size, this.offscreenY));
        }
    };
