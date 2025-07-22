e.exports = function (e, t, r, i, a, o) {
    var s,
        l,
        c,
        u,
        d = this,
        _ = [],
        f = r.type;
    if (
        ('keypress' !== f ||
            (r.code && 'Arrow' === r.code.slice(0, 5)) ||
            (d.callbacks['any-character'] || []).forEach(function (e) {
                _.push(e);
            }),
        !d.callbacks[e])
    )
        return _;
    for (c = n(64000), 'keyup' === f && c(e) && (t = [e]), s = 0; s < d.callbacks[e].length; ++s)
        if (((l = d.callbacks[e][s]), i || !l.seq || d.sequenceLevels[l.seq] === l.level) && f === l.action && ((u = n(758686)), ('keypress' === f && !r.metaKey && !r.ctrlKey) || u(t, l.modifiers))) {
            var p = !i && l.combo === a,
                h = i && l.seq === i && l.level === o;
            ((p || h) && d.callbacks[e].splice(s, 1), _.push(l));
        }
    return _;
};
