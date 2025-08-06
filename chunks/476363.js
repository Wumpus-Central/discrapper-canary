var r = n(172367),
    i = n(788276),
    o = n(979162),
    a = n(159759),
    s = n(473297);
e.exports = function (e, t) {
    var n = s(
        e,
        function (e) {
            var n = e.getSelection();
            if (n.isCollapsed() && 0 === n.getAnchorOffset()) return a(e, 1);
            var r = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
            return o(e, null, (r = i(r)).endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState;
        },
        'backward'
    );
    return n === e.getCurrentContent() ? e : r.push(e, n, 'remove-range');
};
