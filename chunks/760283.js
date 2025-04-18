e.exports = function (e, t, r) {
    var i,
        a,
        o,
        s,
        l = this,
        c = {},
        u = 0,
        d = !1;
    for (a = 0, i = l.getMatches(e, t, r); a < i.length; ++a) i[a].seq && (u = Math.max(u, i[a].level));
    for (a = 0; a < i.length; ++a) {
        if (i[a].seq) {
            if (i[a].level !== u) continue;
            (d = !0), (c[i[a].seq] = 1), l.fireCallback(i[a].callback, r, i[a].combo, i[a].seq);
            continue;
        }
        d || l.fireCallback(i[a].callback, r, i[a].combo);
    }
    (s = 'keypress' === r.type && l.ignoreNextKeypress), (o = n(64000)), r.type !== l.nextExpectedAction || o(e) || s || l.resetSequences(c), (l.ignoreNextKeypress = d && 'keydown' === r.type);
};
