n(42547),
    (e.exports = {
        isValidBlock: function (e, t) {
            var n = e.getKey(),
                r = e.getParentKey();
            if (
                (null != r && !t.get(r).getChildKeys().includes(n)) ||
                !e
                    .getChildKeys()
                    .map(function (e) {
                        return t.get(e);
                    })
                    .every(function (e) {
                        return e.getParentKey() === n;
                    })
            )
                return !1;
            var i = e.getPrevSiblingKey();
            if (null != i && t.get(i).getNextSiblingKey() !== n) return !1;
            var o = e.getNextSiblingKey();
            return (
                (null == o || t.get(o).getPrevSiblingKey() === n) &&
                (null === o || null === i || i !== o) &&
                ("" == e.text || !(e.getChildKeys().size > 0))
            );
        },
        isConnectedTree: function (e) {
            var t = e.toArray().filter(function (e) {
                return null == e.getParentKey() && null == e.getPrevSiblingKey();
            });
            if (1 !== t.length) return !1;
            for (var n = t.shift(), r = 0, i = n.getKey(), o = []; null != i; ) {
                var a = e.get(i),
                    s = a.getChildKeys(),
                    l = a.getNextSiblingKey();
                if (s.size > 0) {
                    null != l && o.unshift(l);
                    var c = s
                        .map(function (t) {
                            return e.get(t);
                        })
                        .find(function (e) {
                            return null == e.getPrevSiblingKey();
                        });
                    if (null == c) return !1;
                    i = c.getKey();
                } else i = null != a.getNextSiblingKey() ? a.getNextSiblingKey() : o.shift();
                r++;
            }
            return r === e.size;
        },
        isValidTree: function (e) {
            var t = this;
            return (
                !!e.toArray().every(function (n) {
                    return t.isValidBlock(n, e);
                }) && this.isConnectedTree(e)
            );
        },
    });
