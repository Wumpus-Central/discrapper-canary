e.exports = function (e, t, n, i, o, a) {
    var s,
        l,
        u,
        c,
        f = [],
        d = n.type;
    if (
        ("keypress" !== d ||
            (n.code && "Arrow" === n.code.slice(0, 5)) ||
            (this.callbacks["any-character"] || []).forEach(function (e) {
                f.push(e);
            }),
        !this.callbacks[e])
    )
        return f;
    for (u = r(921194), "keyup" === d && u(e) && (t = [e]), s = 0; s < this.callbacks[e].length; ++s)
        if (
            ((l = this.callbacks[e][s]), i || !l.seq || this.sequenceLevels[l.seq] === l.level) &&
            d === l.action &&
            ((c = r(135926)), ("keypress" === d && !n.metaKey && !n.ctrlKey) || c(t, l.modifiers))
        ) {
            var p = !i && l.combo === o,
                h = i && l.seq === i && l.level === a;
            (p || h) && this.callbacks[e].splice(s, 1), f.push(l);
        }
    return f;
};
