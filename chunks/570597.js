"use strict";
n.d(t, { X: () => i });
var l = n(985018);
function i(e, t) {
    let n = t ?? e.length;
    return 0 === n
        ? ""
        : 1 === n
          ? l.intl.formatToPlainString(l.t["8s9z8P"], { first: e[0] })
          : 2 === n
            ? l.intl.formatToPlainString(l.t["i0K/dw"], { first: e[0], second: e[1] })
            : 3 === n
              ? l.intl.formatToPlainString(l.t["/KSOKY"], { first: e[0], second: e[1], third: e[2] })
              : l.intl.formatToPlainString(l.t.xpU76u, { first: e[0], second: e[1], third: e[2], count: n - 3 });
}
