"use strict";
e.exports = function (e, t, r) {
    var i,
        a,
        s,
        o,
        l = this,
        u = {},
        c = 0,
        d = !1;
    for (a = 0, i = l.getMatches(e, t, r); a < i.length; ++a) i[a].seq && (c = Math.max(c, i[a].level));
    for (a = 0; a < i.length; ++a) {
        if (i[a].seq) {
            if (i[a].level !== c) continue;
            (d = !0), (u[i[a].seq] = 1), l.fireCallback(i[a].callback, r, i[a].combo, i[a].seq);
            continue;
        }
        d || l.fireCallback(i[a].callback, r, i[a].combo);
    }
    (o = "keypress" === r.type && l.ignoreNextKeypress),
        (s = n(921194)),
        r.type !== l.nextExpectedAction || s(e) || o || l.resetSequences(u),
        (l.ignoreNextKeypress = d && "keydown" === r.type);
};
