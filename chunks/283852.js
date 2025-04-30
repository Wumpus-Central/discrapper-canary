var n = r(133092),
    i = r(902068),
    o = r(688329),
    a = r(95548),
    u = r(278919);
t.exports = function (t, e) {
    var r = u(
        t,
        function (t) {
            var r = t.getSelection();
            if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
            var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
            return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState;
        },
        'backward'
    );
    return r === t.getCurrentContent() ? t : n.push(t, r, 'remove-range');
};
