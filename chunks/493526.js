e.exports = function (e, t, n, r, i) {
    var a,
        s = this;
    s.directMap[e + ":" + n] = t;
    var o = (e = e.replace(/\s+/g, " ")).split(" ");
    o.length > 1
        ? s.bindSequence(e, o, t, n)
        : ((a = s.getKeyInfo(e, n)),
          (s.callbacks[a.key] = s.callbacks[a.key] || []),
          s.getMatches(a.key, a.modifiers, { type: a.action }, r, e, i),
          s.callbacks[a.key][r ? "unshift" : "push"]({
              callback: t,
              modifiers: a.modifiers,
              action: a.action,
              seq: r,
              level: i,
              combo: e,
          }));
};
