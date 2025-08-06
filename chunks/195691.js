var r = n(169774),
    i = n(581079);
function o(e) {
    for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
        var o,
            a = r === e.commonAncestorContainer;
        a ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
        var s = Array.from(t.getClientRects());
        if ((n.push(s), a)) return n.reverse(), (o = []).concat.apply(o, n);
        t.setEndBefore(r);
    }
    i(!1);
}
e.exports = r.isBrowser("Chrome")
    ? o
    : function (e) {
          return Array.from(e.getClientRects());
      };
