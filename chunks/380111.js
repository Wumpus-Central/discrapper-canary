i.d(e, { A: () => l });
var s = i(364298),
    n = i(852431);
let a = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"];
class h {
    size = (0, s.R)(2, 3);
    depth = (0, s.R)(1, 4);
    positionMultiplier = this.depth / 4;
    color = a[4 - this.depth];
    offscreenX = 1e3 + this.size;
    offscreenY = 1e3 + this.size;
    x = (0, s.R)(-this.size, this.offscreenX);
    y = (0, s.R)(-this.size, this.offscreenY);
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
}
let l = h;
