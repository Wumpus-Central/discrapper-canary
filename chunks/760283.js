e.exports = function (e, t, r) {
    var i,
        o,
        a,
        s,
        l = this,
        c = {},
        u = 0,
        d = !1;
    for (o = 0, i = l.getMatches(e, t, r); o < i.length; ++o) i[o].seq && (u = Math.max(u, i[o].level));
    for (o = 0; o < i.length; ++o) {
        if (i[o].seq) {
            if (i[o].level !== u) continue;
            (d = !0), (c[i[o].seq] = 1), l.fireCallback(i[o].callback, r, i[o].combo, i[o].seq);
            continue;
        }
        d || l.fireCallback(i[o].callback, r, i[o].combo);
    }
    (s = 'keypress' === r.type && l.ignoreNextKeypress), (a = n(64000)), r.type !== l.nextExpectedAction || a(e) || s || l.resetSequences(c), (l.ignoreNextKeypress = d && 'keydown' === r.type);
};
