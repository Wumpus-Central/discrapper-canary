var r = n(573750),
    i = n(797686);

function a(e) {
    for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
        var a,
            s = r === e.commonAncestorContainer;
        s ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
        var o = Array.from(t.getClientRects());
        if ((n.push(o), s)) return n.reverse(), (a = []).concat.apply(a, n);
        t.setEndBefore(r);
    }
    i(!1);
}
e.exports = r.isBrowser("Chrome")
    ? a
    : function (e) {
          return Array.from(e.getClientRects());
      };
