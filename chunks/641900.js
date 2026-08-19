"use strict";
e.exports = function (e, t, n, o, i, a) {
    var s,
        l,
        u,
        c,
        f = [],
        p = n.type;
    if (
        ("keypress" !== p ||
            (n.code && "Arrow" === n.code.slice(0, 5)) ||
            (this.callbacks["any-character"] || []).forEach(function (e) {
                f.push(e);
            }),
        !this.callbacks[e])
    )
        return f;
    for (u = r(921194), "keyup" === p && u(e) && (t = [e]), s = 0; s < this.callbacks[e].length; ++s)
        if (
            ((l = this.callbacks[e][s]), o || !l.seq || this.sequenceLevels[l.seq] === l.level) &&
            p === l.action &&
            ((c = r(135926)), ("keypress" === p && !n.metaKey && !n.ctrlKey) || c(t, l.modifiers))
        ) {
            var d = !o && l.combo === i,
                h = o && l.seq === o && l.level === a;
            (d || h) && this.callbacks[e].splice(s, 1), f.push(l);
        }
    return f;
};
