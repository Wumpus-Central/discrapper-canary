"use strict";
e.exports = function (e, t, n) {
    var o,
        i,
        a,
        s,
        l = {},
        u = 0,
        c = !1;
    for (i = 0, o = this.getMatches(e, t, n); i < o.length; ++i) o[i].seq && (u = Math.max(u, o[i].level));
    for (i = 0; i < o.length; ++i) {
        if (o[i].seq) {
            if (o[i].level !== u) continue;
            (c = !0), (l[o[i].seq] = 1), this.fireCallback(o[i].callback, n, o[i].combo, o[i].seq);
            continue;
        }
        c || this.fireCallback(o[i].callback, n, o[i].combo);
    }
    (s = "keypress" === n.type && this.ignoreNextKeypress),
        (a = r(921194)),
        n.type !== this.nextExpectedAction || a(e) || s || this.resetSequences(l),
        (this.ignoreNextKeypress = c && "keydown" === n.type);
};
