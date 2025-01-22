e.exports = function (e, n, i) {
    var a,
        o,
        s,
        l,
        u = this,
        c = {},
        d = 0,
        f = !1;
    for (o = 0, a = u.getMatches(e, n, i); o < a.length; ++o) a[o].seq && (d = Math.max(d, a[o].level));
    for (o = 0; o < a.length; ++o) {
        if (a[o].seq) {
            if (a[o].level !== d) continue;
            (f = !0), (c[a[o].seq] = 1), u.fireCallback(a[o].callback, i, a[o].combo, a[o].seq);
            continue;
        }
        !f && u.fireCallback(a[o].callback, i, a[o].combo);
    }
    (l = 'keypress' === i.type && u.ignoreNextKeypress), (s = r(64000)), i.type === u.nextExpectedAction && !s(e) && !l && u.resetSequences(c), (u.ignoreNextKeypress = f && 'keydown' === i.type);
};
