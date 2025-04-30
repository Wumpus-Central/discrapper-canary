var n = r(408462),
    i = r(133092),
    o = r(95548),
    a = r(278919);
t.exports = function (t) {
    var e = a(
        t,
        function (t) {
            var e = t.getSelection(),
                r = e.getStartOffset();
            if (0 === r) return o(t, 1);
            var i = e.getStartKey(),
                a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r);
            return o(t, n.getBackward(a).length || 1);
        },
        'backward'
    );
    return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range');
};
