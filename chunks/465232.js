e.exports = function (e, n) {
    var i,
        a,
        o,
        s,
        l,
        u,
        c = this,
        d = [];
    for (o = 0, i = r(727729)(e), s = r(862546), l = r(861391), u = r(64000); o < i.length; ++o) s[(a = i[o])] && (a = s[a]), n && 'keypress' !== n && l[a] && ((a = l[a]), d.push('shift')), u(a) && d.push(a);
    return (
        (n = c.pickBestAction(a, d, n)),
        {
            key: a,
            modifiers: d,
            action: n
        }
    );
};
