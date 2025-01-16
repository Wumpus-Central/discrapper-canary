n.d(t, {
    s: function () {
        return s;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(428670);
function s() {
    let [e, t] = r.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: r.memo(function (e) {
            let { showAll: n = !1, className: r, children: l, lineClamp: s = 2 } = e;
            return (0, i.jsx)('div', {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: a()(o.lineClamp, r),
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
