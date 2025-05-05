var n = r(169774),
    i = r(581079);
t.exports = n.isBrowser('Chrome')
    ? function (t) {
          for (var e = t.cloneRange(), r = [], n = t.endContainer; null != n; n = n.parentNode) {
              var o,
                  a = n === t.commonAncestorContainer;
              a ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0);
              var u = Array.from(e.getClientRects());
              if ((r.push(u), a)) return r.reverse(), (o = []).concat.apply(o, r);
              e.setEndBefore(n);
          }
          i(!1);
      }
    : function (t) {
          return Array.from(t.getClientRects());
      };
