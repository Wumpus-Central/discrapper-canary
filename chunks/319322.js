var i = r(47120);
var a = r(309749);
var o = r(328865),
    s = r(2831);
var l = r(264344),
    u = r.n(l);
function c(e, n, r) {
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
(window.platform = u()),
    null == window.ResizeObserver && (window.ResizeObserver = o.d),
    'object' != typeof globalThis && (window.globalThis = window),
    (Map.prototype.toJSON = function () {
        return Array.from(this);
    }),
    (Set.prototype.toJSON = function () {
        return Array.from(this);
    });
{
    class e {
        static fromPoint(n) {
            return new e(n.x, n.y, void 0 !== n.z ? n.z : 0, void 0 !== n.w ? n.w : 1);
        }
        matrixTransform(n) {
            return (n.is2D || n instanceof SVGMatrix) && 0 === this.z && 1 === this.w ? new e(this.x * n.a + this.y * n.c + n.e, this.x * n.b + this.y * n.d + n.f, 0, 1) : new e(this.x * n.m11 + this.y * n.m21 + this.z * n.m31 + this.w * n.m41, this.x * n.m12 + this.y * n.m22 + this.z * n.m32 + this.w * n.m42, this.x * n.m13 + this.y * n.m23 + this.z * n.m33 + this.w * n.m43, this.x * n.m14 + this.y * n.m24 + this.z * n.m34 + this.w * n.m44);
        }
        toJSON() {
            return {
                x: this.x,
                y: this.y,
                z: this.z,
                w: this.w
            };
        }
        constructor(e = 0, n = 0, r = 0, i = 1) {
            c(this, 'x', void 0), c(this, 'y', void 0), c(this, 'z', void 0), c(this, 'w', void 0), (this.x = e), (this.y = n), (this.z = r), (this.w = i);
        }
    }
    null == window.DOMPoint && (window.DOMPoint = e);
}
{
    class e {
        static fromRect(n) {
            return new e(n.x, n.y, n.width, n.height);
        }
        get top() {
            return this.y;
        }
        get left() {
            return this.x;
        }
        get right() {
            return this.x + this.width;
        }
        get bottom() {
            return this.y + this.height;
        }
        toJSON() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
                top: this.top,
                left: this.left,
                right: this.right,
                bottom: this.bottom
            };
        }
        constructor(e = 0, n = 0, r = 0, i = 0) {
            c(this, 'x', void 0), c(this, 'y', void 0), c(this, 'width', void 0), c(this, 'height', void 0), (this.x = e), (this.y = n), (this.width = r), (this.height = i);
        }
    }
    null == window.DOMRect && (window.DOMRect = e);
}
null == window.TextEncoder && r(251171);
