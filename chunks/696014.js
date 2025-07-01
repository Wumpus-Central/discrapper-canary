(n.d(t, { s: () => a }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(366736);
function a() {
    let [e, t] = r.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: r.memo(function (e) {
            let { showAll: n = !1, className: r, children: l, lineClamp: a = 2 } = e;
            return (0, i.jsx)('div', {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: o()(s.lineClamp, r),
                style: n
                    ? void 0
                    : {
                          lineClamp: a,
                          WebkitLineClamp: a
                      },
                children: l
            });
        })
    };
}
