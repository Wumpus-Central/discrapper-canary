"use strict";
n.d(t, {
    A: () =>
        function e(t, n, i, s) {
            let { length: a } = i,
                o = s,
                l = n;
            if (0 === a) return 0;
            if (null == o) o = l;
            else if (o === l) return l;
            return (l += t === r.vB.UP ? -1 : 1) < 0 || l >= a
                ? e(t, l < 0 ? a : -1, i, o)
                : i[l].type === r.rD.HEADER
                  ? e(t, l, i, o)
                  : l;
        },
});
var r = n(926140);
