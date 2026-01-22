n.d(t, { V: () => o });
var r = n(181981),
    i = n(250015),
    a = n(685518),
    s = function (e) {
        return !(0, a.XJ)(e) && !(0, a.td)(e) && "inline" === getComputedStyle(e).display;
    },
    o = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || r.U.CONTENT_BOX),
                (this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0,
                });
        }
        return (
            (e.prototype.isActive = function () {
                var e = (0, i.Px)(this.target, this.observedBox);
                return (
                    s(this.target) && (this.lastReportedSize = e),
                    this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
                );
            }),
            e
        );
    })();
