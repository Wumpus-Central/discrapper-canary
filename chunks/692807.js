var r = n(869639);
e.exports = function (e) {
    var t = e.getSelection(),
        n = t.getStartKey();
    return r.set(e, {
        selection: t.merge({
            anchorKey: n,
            anchorOffset: 0,
            focusKey: n,
            focusOffset: 0,
            isBackward: !1,
        }),
        forceSelection: !0,
    });
};
