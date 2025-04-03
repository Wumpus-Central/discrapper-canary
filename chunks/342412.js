i.d(e, { Z: () => r });
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
let h = ['#7d8187', '#18191c', '#8fa2df', '#4f545c'],
    r = class {
        checkBounds() {
            this.x > this.offscreenX ? (this.x = -this.size) : this.y > this.offscreenY ? (this.y = -this.size) : this.x < -this.size ? (this.x = this.offscreenX) : this.y < -this.size && (this.y = this.offscreenY);
        }
        update(t, e) {
            this.checkBounds(), (this.y += e * this.positionMultiplier), (this.x += t * this.positionMultiplier);
        }
        render(t, e) {
            t.beginPath(), (t.globalAlpha = (e * this.depth) / 4), t.arc(this.x, this.y, this.size, 0, n.uo, !0), (t.fillStyle = this.color), t.fill(), (t.globalAlpha = 1);
        }
        constructor() {
            a(this, 'size', (0, s.M)(2, 3)), a(this, 'depth', (0, s.M)(1, 4)), a(this, 'positionMultiplier', this.depth / 4), a(this, 'color', h[4 - this.depth]), a(this, 'offscreenX', n.pg + this.size), a(this, 'offscreenY', n.pg + this.size), a(this, 'x', (0, s.M)(-this.size, this.offscreenX)), a(this, 'y', (0, s.M)(-this.size, this.offscreenY));
        }
    };
