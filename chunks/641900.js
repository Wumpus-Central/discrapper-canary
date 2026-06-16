"use strict";
e.exports = function (e, t, i, r, s, a) {
    var o,
        l,
        u,
        c,
        d = [],
        _ = i.type;
    if (
        ("keypress" !== _ ||
            (i.code && "Arrow" === i.code.slice(0, 5)) ||
            (this.callbacks["any-character"] || []).forEach(function (e) {
                d.push(e);
            }),
        !this.callbacks[e])
    )
        return d;
    for (u = n(921194), "keyup" === _ && u(e) && (t = [e]), o = 0; o < this.callbacks[e].length; ++o)
        if (
            ((l = this.callbacks[e][o]), r || !l.seq || this.sequenceLevels[l.seq] === l.level) &&
            _ === l.action &&
            ((c = n(135926)), ("keypress" === _ && !i.metaKey && !i.ctrlKey) || c(t, l.modifiers))
        ) {
            var h = !r && l.combo === s,
                f = r && l.seq === r && l.level === a;
            (h || f) && this.callbacks[e].splice(o, 1), d.push(l);
        }
    return d;
};
