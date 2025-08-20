var r = n(169774),
    i = n(581079);
function a(e) {
    for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
        var a,
            o = r === e.commonAncestorContainer;
        o ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
        var s = Array.from(t.getClientRects());
        if ((n.push(s), o)) return n.reverse(), (a = []).concat.apply(a, n);
        t.setEndBefore(r);
    }
    i(!1);
}
e.exports = r.isBrowser("Chrome")
    ? a
    : function (e) {
          return Array.from(e.getClientRects());
      };
