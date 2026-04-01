n.d(t, { e: () => o });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(364453);
function o() {
    let [e, t] = l.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: l.memo(function (e) {
            let { showAll: n = !1, className: l, children: s, lineClamp: o = 2 } = e;
            return (0, i.jsx)("div", {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: a()(r.I, l),
                style: n ? void 0 : { lineClamp: o, WebkitLineClamp: o },
                children: s,
            });
        }),
    };
}
