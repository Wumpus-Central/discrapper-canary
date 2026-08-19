"use strict";
e.exports = function (e, t, r, n, o) {
    this.directMap[e + ":" + r] = t;
    var i,
        a = (e = e.replace(/\s+/g, " ")).split(" ");
    a.length > 1
        ? this.bindSequence(e, a, t, r)
        : ((i = this.getKeyInfo(e, r)),
          (this.callbacks[i.key] = this.callbacks[i.key] || []),
          this.getMatches(i.key, i.modifiers, { type: i.action }, n, e, o),
          this.callbacks[i.key][n ? "unshift" : "push"]({
              callback: t,
              modifiers: i.modifiers,
              action: i.action,
              seq: n,
              level: o,
              combo: e,
          }));
};
