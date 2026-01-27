n.d(t, {
    e: () => s,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(968338);

function s() {
    let [e, t] = i.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: i.memo(function (e) {
            let { showAll: n = !1, className: i, children: l, lineClamp: s = 2 } = e;
            return (0, r.jsx)("div", {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: o()(a.I, i),
                style: n
                    ? void 0
                    : {
                          lineClamp: s,
                          WebkitLineClamp: s,
                      },
                children: l,
            });
        }),
    };
}
