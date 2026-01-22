var r = n(241976);
e.exports = function (e, t) {
    var n = t.ownerDocument.defaultView.getSelection();
    return 0 === n.rangeCount
        ? {
              selectionState: e.getSelection().set("hasFocus", !1),
              needsRecovery: !1,
          }
        : r(e, t, n.anchorNode, n.anchorOffset, n.focusNode, n.focusOffset);
};
