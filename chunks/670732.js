n.d(t, { N: () => i });
var r = n(721056),
    i = (function () {
        function e(e, t, n, i) {
            return (this.x = e), (this.y = t), (this.width = n), (this.height = i), (this.top = this.y), (this.left = this.x), (this.bottom = this.top + this.height), (this.right = this.left + this.width), (0, r.v)(this);
        }
        return (
            (e.prototype.toJSON = function () {
                var e = this;
                return {
                    x: e.x,
                    y: e.y,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.width,
                    height: e.height
                };
            }),
            (e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height);
            }),
            e
        );
    })();
