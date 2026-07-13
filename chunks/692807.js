var n = r(869639);
e.exports = function (e) {
    var t = e.getSelection(),
        r = t.getStartKey();
    return n.set(e, {
        selection: t.merge({ anchorKey: r, anchorOffset: 0, focusKey: r, focusOffset: 0, isBackward: !1 }),
        forceSelection: !0,
    });
};
