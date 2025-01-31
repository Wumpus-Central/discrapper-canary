n.d(t, { Q: () => o });
var i = n(175730),
    r = n(641862),
    a = n(839826),
    s = function (e) {
        return !(0, a.zd)(e) && !(0, a.jD)(e) && 'inline' === getComputedStyle(e).display;
    },
    o = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || i.z.CONTENT_BOX),
                (this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                });
        }
        return (
            (e.prototype.isActive = function () {
                var e = (0, r.Y)(this.target, this.observedBox, !0);
                return s(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
            }),
            e
        );
    })();
