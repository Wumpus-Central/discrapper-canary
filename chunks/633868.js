var r = n(384404);
e.exports = function (e) {
    var t = e.getSelection(),
        n = t.getEndKey(),
        i = e.getCurrentContent().getBlockForKey(n).getLength();
    return r.set(e, {
        selection: t.merge({
            anchorKey: n,
            anchorOffset: i,
            focusKey: n,
            focusOffset: i,
            isBackward: !1,
        }),
        forceSelection: !0,
    });
};
