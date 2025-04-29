e.exports = function (e, t) {
    var r,
        i,
        o,
        a,
        s,
        l,
        c = this,
        u = [];
    for (o = 0, r = n(727729)(e), a = n(862546), s = n(861391), l = n(64000); o < r.length; ++o) a[(i = r[o])] && (i = a[i]), t && 'keypress' !== t && s[i] && ((i = s[i]), u.push('shift')), l(i) && u.push(i);
    return (
        (t = c.pickBestAction(i, u, t)),
        {
            key: i,
            modifiers: u,
            action: t
        }
    );
};
