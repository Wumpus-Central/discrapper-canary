r.d(t, { e: () => S });
var i = r(627968),
    n = r(64700),
    a = r(503698),
    l = r.n(a),
    _ = r(839349);
function S() {
    let [e, t] = n.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: n.memo(function (e) {
            let { showAll: r = !1, className: n, children: a, lineClamp: S = 2 } = e;
            return (0, i.jsx)("div", {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: l()(_.I, n),
                style: r ? void 0 : { lineClamp: S, WebkitLineClamp: S },
                children: a,
            });
        }),
    };
}
