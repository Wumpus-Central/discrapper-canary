n.d(t, { Q: () => s });
var r = n(175730),
    i = n(641862),
    o = n(839826),
    a = function (e) {
        return !(0, o.zd)(e) && !(0, o.jD)(e) && 'inline' === getComputedStyle(e).display;
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
                return a(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
            }),
            e
        );
    })();
