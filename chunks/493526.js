e.exports = function (e, t, r, n, i) {
    this.directMap[e + ":" + r] = t;
    var o,
        a = (e = e.replace(/\s+/g, " ")).split(" ");
    a.length > 1
        ? this.bindSequence(e, a, t, r)
        : ((o = this.getKeyInfo(e, r)),
          (this.callbacks[o.key] = this.callbacks[o.key] || []),
          this.getMatches(o.key, o.modifiers, { type: o.action }, n, e, i),
          this.callbacks[o.key][n ? "unshift" : "push"]({
              callback: t,
              modifiers: o.modifiers,
              action: o.action,
              seq: n,
              level: i,
              combo: e,
          }));
};
