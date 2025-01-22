r.d(n, {
    Q: function () {
        return l;
    }
});
var i = r(175730),
    a = r(641862),
    o = r(839826),
    s = function (e) {
        return !(0, o.zd)(e) && !(0, o.jD)(e) && 'inline' === getComputedStyle(e).display;
    },
    l = (function () {
        function e(e, n) {
            (this.target = e),
                (this.observedBox = n || i.z.CONTENT_BOX),
                (this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                });
        }
        return (
            (e.prototype.isActive = function () {
                var e = (0, a.Y)(this.target, this.observedBox, !0);
                return s(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize || !1;
            }),
            e
        );
    })();
