e.exports = function (e, n, i, a, o, s) {
    var l,
        u,
        c,
        d,
        f = this,
        p = [],
        h = i.type;
    if (
        ('keypress' === h &&
            !(i.code && 'Arrow' === i.code.slice(0, 5)) &&
            (f.callbacks['any-character'] || []).forEach(function (e) {
                p.push(e);
            }),
        !f.callbacks[e])
    )
        return p;
    for (c = r(64000), 'keyup' === h && c(e) && (n = [e]), l = 0; l < f.callbacks[e].length; ++l) {
        if (((u = f.callbacks[e][l]), (!!a || !u.seq || f.sequenceLevels[u.seq] === u.level) && h === u.action)) {
            if (((d = r(758686)), ('keypress' === h && !i.metaKey && !i.ctrlKey) || d(n, u.modifiers))) {
                var _ = !a && u.combo === o,
                    m = a && u.seq === a && u.level === s;
                (_ || m) && f.callbacks[e].splice(l, 1), p.push(u);
            }
        }
    }
    return p;
};
