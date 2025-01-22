r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(217942);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let o = 500,
    s = 150;
class l {
    getCurrentValue() {
        if (null == this.animationDetails) return this.value;
        let e = performance.now() - this.animationDetails.animationStart,
            n = this.value < this.animationDetails.lastValue ? s : o;
        return e > n ? ((this.animationDetails = null), this.value) : this.value < this.animationDetails.lastValue ? i.easeOutQuint(e, this.animationDetails.lastValue, this.value, n) : i.easeOutBack(e, this.animationDetails.lastValue, this.value, n, 4);
    }
    animateTo(e) {
        if (((this.isReset = !1), this.value !== e))
            (this.animationDetails = {
                lastValue: this.value,
                animationStart: performance.now()
            }),
                (this.value = e);
    }
    isAnimating() {
        return null != this.animationDetails;
    }
    reset() {
        this.animateTo(0), (this.isReset = !0);
    }
    constructor(e) {
        a(this, 'value', void 0), a(this, 'animationDetails', void 0), a(this, 'isReset', void 0), (this.value = e), (this.animationDetails = null), (this.isReset = !1);
    }
}
