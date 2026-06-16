"use strict";
var n = r(869639),
    i = r(45722),
    o = r(241976),
    a = r(181621),
    s = r(418227);
t.exports = function (t, e) {
    var r = s(
        t,
        function (t) {
            var r = t.getSelection();
            if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
            var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
            return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState;
        },
        "backward",
    );
    return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range");
};
