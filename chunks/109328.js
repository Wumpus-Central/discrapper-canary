e.exports = function (e, t, r, i, o, a) {
    var s,
        l,
        c,
        u,
        d = this,
        f = [],
        p = r.type;
    if (
        ('keypress' !== p ||
            (r.code && 'Arrow' === r.code.slice(0, 5)) ||
            (d.callbacks['any-character'] || []).forEach(function (e) {
                f.push(e);
            }),
        !d.callbacks[e])
    )
        return f;
    for (c = n(64000), 'keyup' === p && c(e) && (t = [e]), s = 0; s < d.callbacks[e].length; ++s)
        if (((l = d.callbacks[e][s]), (i || !l.seq || d.sequenceLevels[l.seq] === l.level) && p === l.action && ((u = n(758686)), ('keypress' === p && !r.metaKey && !r.ctrlKey) || u(t, l.modifiers)))) {
            var _ = !i && l.combo === o,
                h = i && l.seq === i && l.level === a;
            (_ || h) && d.callbacks[e].splice(s, 1), f.push(l);
        }
    return f;
};
