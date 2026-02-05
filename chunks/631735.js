"use strict";
var n = r(869639);
t.exports = function (t, e, r) {
    var i = n.undo(e);
    if ("spellcheck-change" === e.getLastChangeType()) {
        var o = i.getCurrentContent();
        r(n.set(i, { nativelyRenderedContent: o }));
        return;
    }
    (t.preventDefault(), e.getNativelyRenderedContent())
        ? (r(n.set(e, { nativelyRenderedContent: null })),
          setTimeout(function () {
              r(i);
          }, 0))
        : r(i);
};
