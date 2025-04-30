var n = r(408462),
    i = r(133092),
    o = r(684326),
    a = r(278919);
t.exports = function (t) {
    var e = a(
        t,
        function (t) {
            var e = t.getSelection(),
                r = e.getStartOffset(),
                i = e.getStartKey(),
                a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
            return o(t, n.getForward(a).length || 1);
        },
        'forward'
    );
    return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range');
};
