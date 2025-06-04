n.d(t, { Q: () => s });
var r = n(430901),
    i = n(229579),
    a = n(222285),
    o = function (e) {
        return !(0, a.zd)(e) && !(0, a.jD)(e) && 'inline' === getComputedStyle(e).display;
    },
    s = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || r.z.CONTENT_BOX),
                (this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                });
        }
        return (
            (e.prototype.isActive = function () {
                var e = (0, i.Y)(this.target, this.observedBox, !0);
                return o(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
            }),
            e
        );
    })();
