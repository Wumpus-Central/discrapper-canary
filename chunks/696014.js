n.d(t, { s: () => o }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(46657);
function o() {
    let [e, t] = l.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: l.memo(function (e) {
            let { showAll: n = !1, className: l, children: r, lineClamp: o = 2 } = e;
            return (0, i.jsx)('div', {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: a()(s.lineClamp, l),
                style: n
                    ? void 0
                    : {
                          lineClamp: o,
                          WebkitLineClamp: o
                      },
                children: r
            });
        })
    };
}
