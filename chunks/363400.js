"use strict";
n.d(t, { V: () => o });
var r = n(838259),
    i = n(635833),
    a = n(916784),
    o = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || r.U.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = (0, i.P)(this.target, this.observedBox, !0);
                return (
                    (e = this.target),
                    (0, a.XJ)(e) ||
                        (0, a.td)(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })();
