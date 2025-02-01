e.exports = function (e, t, i) {
    var r,
        a,
        s,
        o,
        l = this,
        u = {},
        c = 0,
        d = !1;
    for (a = 0, r = l.getMatches(e, t, i); a < r.length; ++a) r[a].seq && (c = Math.max(c, r[a].level));
    for (a = 0; a < r.length; ++a) {
        if (r[a].seq) {
            if (r[a].level !== c) continue;
            (d = !0), (u[r[a].seq] = 1), l.fireCallback(r[a].callback, i, r[a].combo, r[a].seq);
            continue;
        }
        d || l.fireCallback(r[a].callback, i, r[a].combo);
    }
    (o = 'keypress' === i.type && l.ignoreNextKeypress), (s = n(64000)), i.type !== l.nextExpectedAction || s(e) || o || l.resetSequences(u), (l.ignoreNextKeypress = d && 'keydown' === i.type);
};
