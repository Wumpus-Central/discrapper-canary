"use strict";
n.d(t, { p: () => i });
var r = n(47361),
    i = (function () {
        function e(e, t, n, i) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = n),
                (this.height = i),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                (0, r.C)(this)
            );
        }
        return (
            (e.prototype.toJSON = function () {
                return {
                    x: this.x,
                    y: this.y,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    width: this.width,
                    height: this.height,
                };
            }),
            (e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height);
            }),
            e
        );
    })();
