n.d(t, { c: () => o });
var r = n(913527),
    i = n.n(r),
    l = n(709054);
let o = (e) => {
    let t = l.default.extractTimestamp(e);
    return !i()().isBefore(i()(t).add(i().duration(15, 'days')));
};
