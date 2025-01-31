n.d(t, { Z: () => o });
var i = n(217942);
function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = 500,
    s = 150;
class o {
    getCurrentValue() {
        if (null == this.animationDetails) return this.value;
        let e = performance.now() - this.animationDetails.animationStart,
            t = this.value < this.animationDetails.lastValue ? s : a;
        return e > t ? ((this.animationDetails = null), this.value) : this.value < this.animationDetails.lastValue ? i.easeOutQuint(e, this.animationDetails.lastValue, this.value, t) : i.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
    }
    animateTo(e) {
        (this.isReset = !1),
            this.value !== e &&
                ((this.animationDetails = {
                    lastValue: this.value,
                    animationStart: performance.now()
                }),
                (this.value = e));
    }
    isAnimating() {
        return null != this.animationDetails;
    }
    reset() {
        this.animateTo(0), (this.isReset = !0);
    }
    constructor(e) {
        r(this, 'value', void 0), r(this, 'animationDetails', void 0), r(this, 'isReset', void 0), (this.value = e), (this.animationDetails = null), (this.isReset = !1);
    }
}
