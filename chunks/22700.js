"use strict";
e.exports = function (e, t, n, i) {
    for (var r = 65535 & e, s = (e >>> 16) & 65535, a = 0; 0 !== n; ) {
        (a = n > 2e3 ? 2e3 : n), (n -= a);
        do s = (s + (r = (r + t[i++]) | 0)) | 0;
        while (--a);
        (r %= 65521), (s %= 65521);
    }
    return r | (s << 16);
};
