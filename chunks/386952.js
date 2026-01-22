n.d(t, {
    e: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(968338);
let l = 2;

function c() {
    let [e, t] = i.useState(!1);

    function n(e) {
        let { showAll: n = !1, className: i, children: a, lineClamp: c = l } = e,
            u = {
                lineClamp: c,
                WebkitLineClamp: c,
            },
            d = (e) => {
                null != e && t(e.scrollHeight - e.clientHeight > 1);
            };
        return (0, r.jsx)("div", {
            ref: d,
            className: s()(o.I, i),
            style: n ? void 0 : u,
            children: a,
        });
    }
    return {
        isTruncated: e,
        ExpandableTextContainer: i.memo(n),
    };
}
