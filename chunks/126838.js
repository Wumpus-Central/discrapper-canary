e.exports = function (e, t, n, r, i) {
    var o,
        a = this;
    a.directMap[e + ':' + n] = t;
    var s = (e = e.replace(/\s+/g, ' ')).split(' ');
    if (s.length > 1) return void a.bindSequence(e, s, t, n);
    (o = a.getKeyInfo(e, n)),
        (a.callbacks[o.key] = a.callbacks[o.key] || []),
        a.getMatches(o.key, o.modifiers, { type: o.action }, r, e, i),
        a.callbacks[o.key][r ? 'unshift' : 'push']({
            callback: t,
            modifiers: o.modifiers,
            action: o.action,
            seq: r,
            level: i,
            combo: e
        });
};
