"use strict";
e.exports = function (e, t, r, i, s, a) {
    var o,
        l,
        u,
        d,
        c = [],
        _ = r.type;
    if (
        ("keypress" !== _ ||
            (r.code && "Arrow" === r.code.slice(0, 5)) ||
            (this.callbacks["any-character"] || []).forEach(function (e) {
                c.push(e);
            }),
        !this.callbacks[e])
    )
        return c;
    for (u = n(921194), "keyup" === _ && u(e) && (t = [e]), o = 0; o < this.callbacks[e].length; ++o)
        if (
            ((l = this.callbacks[e][o]), i || !l.seq || this.sequenceLevels[l.seq] === l.level) &&
            _ === l.action &&
            ((d = n(135926)), ("keypress" === _ && !r.metaKey && !r.ctrlKey) || d(t, l.modifiers))
        ) {
            var f = !i && l.combo === s,
                E = i && l.seq === i && l.level === a;
            (f || E) && this.callbacks[e].splice(o, 1), c.push(l);
        }
    return c;
};
