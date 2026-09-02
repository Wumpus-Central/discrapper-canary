n.d(t, { e: () => o });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(86304);
function o() {
    let [e, t] = i.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: i.memo(function (e) {
            let { showAll: n = !1, className: i, children: r, lineClamp: o = 2 } = e;
            return (0, l.jsx)("div", {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: s()(a.I, i),
                style: n ? void 0 : { lineClamp: o, WebkitLineClamp: o },
                children: r,
            });
        }),
    };
}
