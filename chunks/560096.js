"use strict";
e.exports = function (e, t, r) {
    var i,
        s,
        a,
        o,
        l = {},
        u = 0,
        d = !1;
    for (s = 0, i = this.getMatches(e, t, r); s < i.length; ++s) i[s].seq && (u = Math.max(u, i[s].level));
    for (s = 0; s < i.length; ++s) {
        if (i[s].seq) {
            if (i[s].level !== u) continue;
            (d = !0), (l[i[s].seq] = 1), this.fireCallback(i[s].callback, r, i[s].combo, i[s].seq);
            continue;
        }
        d || this.fireCallback(i[s].callback, r, i[s].combo);
    }
    (o = "keypress" === r.type && this.ignoreNextKeypress),
        (a = n(921194)),
        r.type !== this.nextExpectedAction || a(e) || o || this.resetSequences(l),
        (this.ignoreNextKeypress = d && "keydown" === r.type);
};
