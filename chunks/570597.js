"use strict";
n.d(t, { X: () => r });
var i = n(375708);
function r(e, t) {
    let n = t ?? e.length;
    return 0 === n
        ? ""
        : 1 === n
          ? i.intl.formatToPlainString(i.t["8s9z8P"], { first: e[0] })
          : 2 === n
            ? i.intl.formatToPlainString(i.t["i0K/dw"], { first: e[0], second: e[1] })
            : 3 === n
              ? i.intl.formatToPlainString(i.t["/KSOKY"], { first: e[0], second: e[1], third: e[2] })
              : i.intl.formatToPlainString(i.t.xpU76u, { first: e[0], second: e[1], third: e[2], count: n - 3 });
}
