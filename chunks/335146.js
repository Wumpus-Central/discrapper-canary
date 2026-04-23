"use strict";
n.d(t, { V: () => a });
var r = n(181981),
    i = n(250015),
    s = n(685518),
    a = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || r.U.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = (0, i.Px)(this.target, this.observedBox);
                return (
                    (e = this.target),
                    (0, s.XJ)(e) ||
                        (0, s.td)(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })();
