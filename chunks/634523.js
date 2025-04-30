var n = r(133092),
    i = r(733359),
    o = r(684326),
    a = r(278919);
t.exports = function (t) {
    var e = a(
        t,
        function (t) {
            var e = t.getSelection(),
                r = t.getCurrentContent(),
                n = e.getAnchorKey(),
                a = e.getAnchorOffset(),
                u = r.getBlockForKey(n).getText()[a];
            return o(t, u ? i.getUTF16Length(u, 0) : 1);
        },
        'forward'
    );
    if (e === t.getCurrentContent()) return t;
    var r = t.getSelection();
    return n.push(t, e.set('selectionBefore', r), r.isCollapsed() ? 'delete-character' : 'remove-range');
};
