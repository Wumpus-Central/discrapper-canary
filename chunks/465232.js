e.exports = function (e, t) {
    var r,
        i,
        a,
        o,
        s,
        l,
        c = this,
        u = [];
    for (a = 0, r = n(727729)(e), o = n(862546), s = n(861391), l = n(64000); a < r.length; ++a) o[(i = r[a])] && (i = o[i]), t && 'keypress' !== t && s[i] && ((i = s[i]), u.push('shift')), l(i) && u.push(i);
    return (
        (t = c.pickBestAction(i, u, t)),
        {
            key: i,
            modifiers: u,
            action: t
        }
    );
};
