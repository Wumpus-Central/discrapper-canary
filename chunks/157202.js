var n = r(133092);
t.exports = function (t) {
    var e = t.getSelection(),
        r = e.getStartKey();
    return n.set(t, {
        selection: e.merge({
            anchorKey: r,
            anchorOffset: 0,
            focusKey: r,
            focusOffset: 0,
            isBackward: !1
        }),
        forceSelection: !0
    });
};
