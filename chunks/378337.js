t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(653041),
    t(47120);
var l = t(131704);
function o(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let o = e._categories[t].channel,
            i = e[o.id].map((e) => e.channel).filter((e) => l.iR.has(e.type));
        if (null != i && 0 !== i.length) for (let e of ('null' !== o.id && n.push(o), i)) n.push(e);
    }
    return n;
}
