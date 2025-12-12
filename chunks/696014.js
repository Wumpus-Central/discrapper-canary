n.d(t, { s: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(886886);
let l = 2;
function c() {
    let [e, t] = i.useState(!1);
    function n(e) {
        let { showAll: n = !1, className: i, children: o, lineClamp: c = l } = e,
            u = {
                lineClamp: c,
                WebkitLineClamp: c,
            },
            d = (e) => {
                null != e && t(e.scrollHeight - e.clientHeight > 1);
            };
        return (0, r.jsx)("div", {
            ref: d,
            className: a()(s.lineClamp, i),
            style: n ? void 0 : u,
            children: o,
        });
    }
    return {
        isTruncated: e,
        ExpandableTextContainer: i.memo(n),
    };
}
