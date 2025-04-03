var n = r(688329);
t.exports = function (t, e) {
    var r = e.ownerDocument.defaultView.getSelection();
    return 0 === r.rangeCount
        ? {
              selectionState: t.getSelection().set('hasFocus', !1),
              needsRecovery: !1
          }
        : n(t, e, r.anchorNode, r.anchorOffset, r.focusNode, r.focusOffset);
};
