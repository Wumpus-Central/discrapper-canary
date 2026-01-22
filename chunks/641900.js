e.exports = function (e, t, r, i, a, s) {
    var o,
        l,
        c,
        u,
        d = this,
        f = [],
        p = r.type;
    if (
        ("keypress" !== p ||
            (r.code && "Arrow" === r.code.slice(0, 5)) ||
            (d.callbacks["any-character"] || []).forEach(function (e) {
                f.push(e);
            }),
        !d.callbacks[e])
    )
        return f;
    for (c = n(921194), "keyup" === p && c(e) && (t = [e]), o = 0; o < d.callbacks[e].length; ++o)
        if (
            ((l = d.callbacks[e][o]), i || !l.seq || d.sequenceLevels[l.seq] === l.level) &&
            p === l.action &&
            ((u = n(135926)), ("keypress" === p && !r.metaKey && !r.ctrlKey) || u(t, l.modifiers))
        ) {
            var _ = !i && l.combo === a,
                h = i && l.seq === i && l.level === s;
            (_ || h) && d.callbacks[e].splice(o, 1), f.push(l);
        }
    return f;
};
