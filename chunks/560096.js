"use strict";
e.exports = function (e, t, i) {
    var r,
        s,
        a,
        o,
        l = {},
        u = 0,
        c = !1;
    for (s = 0, r = this.getMatches(e, t, i); s < r.length; ++s) r[s].seq && (u = Math.max(u, r[s].level));
    for (s = 0; s < r.length; ++s) {
        if (r[s].seq) {
            if (r[s].level !== u) continue;
            (c = !0), (l[r[s].seq] = 1), this.fireCallback(r[s].callback, i, r[s].combo, r[s].seq);
            continue;
        }
        c || this.fireCallback(r[s].callback, i, r[s].combo);
    }
    (o = "keypress" === i.type && this.ignoreNextKeypress),
        (a = n(921194)),
        i.type !== this.nextExpectedAction || a(e) || o || this.resetSequences(l),
        (this.ignoreNextKeypress = c && "keydown" === i.type);
};
