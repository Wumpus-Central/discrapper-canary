(n.d(t, { s: () => s }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(366736);
function s() {
    let [e, t] = i.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: i.memo(function (e) {
            let { showAll: n = !1, className: i, children: l, lineClamp: s = 2 } = e;
            return (0, r.jsx)('div', {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: a()(o.lineClamp, i),
                style: n
                    ? void 0
                    : {
                          lineClamp: s,
                          WebkitLineClamp: s
                      },
                children: l
            });
        })
    };
}
