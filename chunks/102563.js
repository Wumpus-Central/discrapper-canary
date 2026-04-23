"use strict";
var r = n(299141);
n(308060);
var i = n(214958),
    s = n.n(i);
(window.platform = s()),
    null == window.ResizeObserver && (window.ResizeObserver = r.t),
    "object" != typeof globalThis && (window.globalThis = window),
    (Map.prototype.toJSON = function () {
        return Array.from(this);
    }),
    (Set.prototype.toJSON = function () {
        return Array.from(this);
    });
{
    class e {
        x;
        y;
        z;
        w;
        constructor(e = 0, t = 0, n = 0, r = 1) {
            (this.x = e), (this.y = t), (this.z = n), (this.w = r);
        }
        static fromPoint(t) {
            return new e(t.x, t.y, void 0 !== t.z ? t.z : 0, void 0 !== t.w ? t.w : 1);
        }
        matrixTransform(t) {
            return (t.is2D || t instanceof SVGMatrix) && 0 === this.z && 1 === this.w
                ? new e(this.x * t.a + this.y * t.c + t.e, this.x * t.b + this.y * t.d + t.f, 0, 1)
                : new e(
                      this.x * t.m11 + this.y * t.m21 + this.z * t.m31 + this.w * t.m41,
                      this.x * t.m12 + this.y * t.m22 + this.z * t.m32 + this.w * t.m42,
                      this.x * t.m13 + this.y * t.m23 + this.z * t.m33 + this.w * t.m43,
                      this.x * t.m14 + this.y * t.m24 + this.z * t.m34 + this.w * t.m44,
                  );
        }
        toJSON() {
            return { x: this.x, y: this.y, z: this.z, w: this.w };
        }
    }
    null == window.DOMPoint && (window.DOMPoint = e);
}
{
    class e {
        x;
        y;
        width;
        height;
        constructor(e = 0, t = 0, n = 0, r = 0) {
            (this.x = e), (this.y = t), (this.width = n), (this.height = r);
        }
        static fromRect(t) {
            return new e(t.x, t.y, t.width, t.height);
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
                bottom: this.bottom,
            };
        }
    }
    null == window.DOMRect && (window.DOMRect = e);
}
null == window.TextEncoder && n(283346);
