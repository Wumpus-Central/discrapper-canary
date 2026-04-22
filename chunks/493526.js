"use strict";
e.exports = function (e, t, n, r, i) {
    this.directMap[e + ":" + n] = t;
    var s,
        a = (e = e.replace(/\s+/g, " ")).split(" ");
    a.length > 1
        ? this.bindSequence(e, a, t, n)
        : ((s = this.getKeyInfo(e, n)),
          (this.callbacks[s.key] = this.callbacks[s.key] || []),
          this.getMatches(s.key, s.modifiers, { type: s.action }, r, e, i),
          this.callbacks[s.key][r ? "unshift" : "push"]({
              callback: t,
              modifiers: s.modifiers,
              action: s.action,
              seq: r,
              level: i,
              combo: e,
          }));
};
