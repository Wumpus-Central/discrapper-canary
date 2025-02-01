e.exports = function (e, t, n, i, r) {
    var a,
        s = this;
    s.directMap[e + ':' + n] = t;
    var o = (e = e.replace(/\s+/g, ' ')).split(' ');
    if (o.length > 1) {
        s.bindSequence(e, o, t, n);
        return;
    }
    (a = s.getKeyInfo(e, n)),
        (s.callbacks[a.key] = s.callbacks[a.key] || []),
        s.getMatches(a.key, a.modifiers, { type: a.action }, i, e, r),
        s.callbacks[a.key][i ? 'unshift' : 'push']({
            callback: t,
            modifiers: a.modifiers,
            action: a.action,
            seq: i,
            level: r,
            combo: e
        });
};
