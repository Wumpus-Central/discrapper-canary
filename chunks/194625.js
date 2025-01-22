r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(887490);
let s = 'applicationCommand';
function l(e, n) {
    if (o.bN.areStylesDisabled(e)) return [];
    let [r, i] = n,
        a = [];
    if (!o.LC.isText(r)) return a;
    let [l] = o.bN.node(e, o.C0.parent(i));
    return o.aj.isType(l, s)
        ? (r === l.children[0] &&
              a.push({
                  anchor: {
                      path: i,
                      offset: 0
                  },
                  focus: {
                      path: i,
                      offset: 0 + l.command.displayName.length + 1
                  },
                  commandName: !0
              }),
          a)
        : a;
}
