"use strict";
e.exports = function (e, t, r, i, a, s) {
    var o,
        l,
        u,
        c,
        d = this,
        _ = [],
        f = r.type;
    if (
        ("keypress" !== f ||
            (r.code && "Arrow" === r.code.slice(0, 5)) ||
            (d.callbacks["any-character"] || []).forEach(function (e) {
                _.push(e);
            }),
        !d.callbacks[e])
    )
        return _;
    for (u = n(921194), "keyup" === f && u(e) && (t = [e]), o = 0; o < d.callbacks[e].length; ++o)
        if (
            ((l = d.callbacks[e][o]), i || !l.seq || d.sequenceLevels[l.seq] === l.level) &&
            f === l.action &&
            ((c = n(135926)), ("keypress" === f && !r.metaKey && !r.ctrlKey) || c(t, l.modifiers))
        ) {
            var p = !i && l.combo === a,
                h = i && l.seq === i && l.level === s;
            (p || h) && d.callbacks[e].splice(o, 1), _.push(l);
        }
    return _;
};
