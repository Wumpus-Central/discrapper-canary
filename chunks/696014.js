n.d(t, { s: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(366736);
function c() {
    let [e, t] = i.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: i.memo(function (e) {
            let { showAll: n = !1, className: i, children: l, lineClamp: c = 2 } = e;
            return (0, r.jsx)('div', {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: o()(a.lineClamp, i),
                style: n
                    ? void 0
                    : {
                          lineClamp: c,
                          WebkitLineClamp: c
                      },
                children: l
            });
        })
    };
}
