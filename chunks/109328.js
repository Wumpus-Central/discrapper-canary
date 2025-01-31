e.exports = function (e, t, i, r, a, s) {
    var o,
        l,
        u,
        c,
        d = this,
        f = [],
        _ = i.type;
    if (
        ('keypress' !== _ ||
            (i.code && 'Arrow' === i.code.slice(0, 5)) ||
            (d.callbacks['any-character'] || []).forEach(function (e) {
                f.push(e);
            }),
        !d.callbacks[e])
    )
        return f;
    for (u = n(64000), 'keyup' === _ && u(e) && (t = [e]), o = 0; o < d.callbacks[e].length; ++o)
        if (((l = d.callbacks[e][o]), (r || !l.seq || d.sequenceLevels[l.seq] === l.level) && _ === l.action && ((c = n(758686)), ('keypress' === _ && !i.metaKey && !i.ctrlKey) || c(t, l.modifiers)))) {
            var p = !r && l.combo === a,
                h = r && l.seq === r && l.level === s;
            (p || h) && d.callbacks[e].splice(o, 1), f.push(l);
        }
    return f;
};
