e.exports = function (e, t) {
    var i,
        r,
        a,
        s,
        o,
        l,
        u = this,
        c = [];
    for (a = 0, i = n(727729)(e), s = n(862546), o = n(861391), l = n(64000); a < i.length; ++a) s[(r = i[a])] && (r = s[r]), t && 'keypress' !== t && o[r] && ((r = o[r]), c.push('shift')), l(r) && c.push(r);
    return (
        (t = u.pickBestAction(r, c, t)),
        {
            key: r,
            modifiers: c,
            action: t
        }
    );
};
