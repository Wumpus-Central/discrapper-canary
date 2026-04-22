"use strict";
n.d(t, { G: () => i, t: () => s });
var r,
    i = (((r = {})[(r.MANAGED = 0)] = "MANAGED"), (r[(r.QUICK = 1)] = "QUICK"), r);
function s(e) {
    if (null == e) return null;
    let [t, n] = e.split("-"),
        r = (function (e) {
            switch (e) {
                case "0":
                    return 0;
                case "1":
                    return 1;
                default:
                    return null;
            }
        })(t);
    return null == r ? null : { type: r, encodedLinkId: e, decodedLinkId: n };
}
