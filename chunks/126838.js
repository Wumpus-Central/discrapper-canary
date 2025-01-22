e.exports = function (e, n, r, i, a) {
    var o,
        s = this;
    s.directMap[e + ':' + r] = n;
    var l = (e = e.replace(/\s+/g, ' ')).split(' ');
    if (l.length > 1) {
        s.bindSequence(e, l, n, r);
        return;
    }
    (o = s.getKeyInfo(e, r)),
        (s.callbacks[o.key] = s.callbacks[o.key] || []),
        s.getMatches(o.key, o.modifiers, { type: o.action }, i, e, a),
        s.callbacks[o.key][i ? 'unshift' : 'push']({
            callback: n,
            modifiers: o.modifiers,
            action: o.action,
            seq: i,
            level: a,
            combo: e
        });
};
