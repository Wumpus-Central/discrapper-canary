n.d(t, { e: () => o });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(20748);
function o() {
    let [e, t] = l.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: l.memo(function (e) {
            let { showAll: n = !1, className: l, children: r, lineClamp: o = 2 } = e;
            return (0, i.jsx)("div", {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: s()(a.I, l),
                style: n ? void 0 : { lineClamp: o, WebkitLineClamp: o },
                children: r,
            });
        }),
    };
}
